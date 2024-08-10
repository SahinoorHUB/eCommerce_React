import { create } from "zustand";
import { IProducts } from "../interfaces/product.interface";
import { LOCAL_STORAGE_GET, LOCAL_STORAGE_SET, StorageData } from "../utiles/localStoreHendeler";

interface ICartItem {
  product_id: number;
  name: string;
  price: number;
  image_url: string;
  qty: number;
  totalPrice: number;
}

interface ICart {
  items: ICartItem[];
  addToCart: (item: IProducts) => void;
  cartItemUpdate: (product_id: number, action: "I" | "D" | "R") => void;
  refreshCart: () => void;
}

const useCartStore = create<ICart>((set, get) => ({
  items: [],
  cartItemUpdate: (product_id, action) => {
    const { items } = get();
    let _items = [...items];
    const getCurrentItemFromCart = _items.find(
      (each) => each.product_id === product_id
    );

    if (getCurrentItemFromCart && action === "I") {
      getCurrentItemFromCart.qty = getCurrentItemFromCart.qty + 1;
      getCurrentItemFromCart.totalPrice =
        getCurrentItemFromCart.price * getCurrentItemFromCart.qty;
    } else if (action === "D" && getCurrentItemFromCart) {
      if (getCurrentItemFromCart?.qty === 1) {
        _items = _items.filter(
          (eachCartItem) => eachCartItem.product_id !== product_id
        );
      } else {
        getCurrentItemFromCart.qty = getCurrentItemFromCart.qty - 1;
      }
      getCurrentItemFromCart.totalPrice =
        getCurrentItemFromCart.price * getCurrentItemFromCart.qty;
    } else if (action === "R") {
      _items = _items.filter(
        (eachCartItem) => eachCartItem.product_id !== product_id
      );
    }

    setLocalStorage(_items);
    set(() => ({
      items: _items,
    }));
  },

  addToCart: (item) => {
    const { items } = get();

    let _items = [...items];

    const getCurrentItemFromCart = _items.find(
      (each) => each.product_id === item.id
    );
    if (!getCurrentItemFromCart) {
      _items.push({
        product_id: item.id,
        name: item.title,
        price: item.price,
        image_url: item.image,
        qty: 1,
        totalPrice: item.price,
      });
      setLocalStorage(_items);
      set(() => ({
        items: _items,
      }));
    }
  },

  refreshCart: () => { 
    const storeItems = localStorage.getItem("cartItems"); 
    // const storeItems = LOCAL_STORAGE_GET(StorageData.CartItems) 
    if (storeItems) {
      const _items = JSON.parse(storeItems);
      set(() => ({
        items: _items,
      }));
    }
  },
}));

const setLocalStorage = (item: ICartItem[]) => {
  localStorage.setItem("cartItems", JSON.stringify(item));
  // LOCAL_STORAGE_SET(StorageData.CartItems, item)
};

export default useCartStore;
