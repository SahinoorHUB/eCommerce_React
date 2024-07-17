import { create } from 'zustand';
import { IProducts } from '../interfaces/product.interface';

interface ICartItem {
    product_id: number;
    name: string;
    price: number;
    image_url: string;
    qty: number;
}

interface ICart {
    items: ICartItem[];
    addToCart: (item: IProducts, action?: 'I' | 'D' | 'R') => void;
}

const cartStore = create<ICart>((set, get) => ({
    items: [],
    addToCart: (item, action) => {
        const { items } = get();

        let _items = [...items];
        
        const getCurrentItemFromCart = _items.find(each => each.product_id === item.id);

        if (!action || action === 'I') {
            if (getCurrentItemFromCart) {
                getCurrentItemFromCart.qty = getCurrentItemFromCart.qty + 1;
            }
            else {
                _items.push({
                    product_id: item.id,
                    name: item.title,
                    price: item.price,
                    image_url: item.image,
                    qty: 1
                })
            }
        }
        else if (action === 'D' && getCurrentItemFromCart) {
            if (getCurrentItemFromCart?.qty === 1) {
                _items = _items.filter(eachCartItem => eachCartItem.product_id !== item.id)
            }
            else {
                getCurrentItemFromCart.qty = getCurrentItemFromCart.qty - 1;
            }
        } 
        else if(action === 'R') { 
            _items = _items.filter(eachCartItem => eachCartItem.product_id !== item.product_id) 
        }

        set(() => ({
            items: _items
        }))
    }

}))

export default cartStore;