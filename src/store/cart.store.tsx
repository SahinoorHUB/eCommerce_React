import { create } from 'zustand';
import { IProducts } from '../interfaces/product.interface';

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
    cartItemUpdate: (product_id: number, action: 'I' | 'D' | 'R') => void;
}

const useCartStore = create<ICart>((set, get) => ({
    items: [],
    cartItemUpdate: (product_id, action) => {
        const { items } = get();
        let _items = [...items];
        const getCurrentItemFromCart = _items.find(each => each.product_id === product_id);

        if (getCurrentItemFromCart && action === 'I') {
            getCurrentItemFromCart.qty = getCurrentItemFromCart.qty + 1;
            getCurrentItemFromCart.totalPrice = getCurrentItemFromCart.price * getCurrentItemFromCart.qty
        }
        else if (action === 'D' && getCurrentItemFromCart) {
            if (getCurrentItemFromCart?.qty === 1) {
                _items = _items.filter(eachCartItem => eachCartItem.product_id !== product_id)
            }
            else {
                getCurrentItemFromCart.qty = getCurrentItemFromCart.qty - 1;
            } 
            getCurrentItemFromCart.totalPrice = getCurrentItemFromCart.price * getCurrentItemFromCart.qty
        } 
        else if(action === 'R') { 
            _items = _items.filter(eachCartItem => eachCartItem.product_id !== product_id) 
        }
        set(() => ({
            items: _items
        }))
    },
    
    addToCart: (item) => {
        const { items } = get();

        let _items = [...items];
        
        const getCurrentItemFromCart = _items.find(each => each.product_id === item.id);
        if(!getCurrentItemFromCart){
            _items.push({
                product_id: item.id,
                name: item.title,
                price: item.price,
                image_url: item.image,
                qty: 1,
                totalPrice:  item.price
            });

            set(() => ({
                items: _items
            }))
        }
    }

}))

export default useCartStore;