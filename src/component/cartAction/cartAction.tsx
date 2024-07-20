import { FC } from 'react';
import cartStore from '../../store/cart.store';

interface IProductCardAction {
    product_id: number;
}

  
const CartAction: FC<IProductCardAction> = ({ product_id }) => {
    const { cartItemUpdate, items } = cartStore();

    const handleAddItemInc = () => {
        cartItemUpdate(product_id, 'I')
    };

    const handleAddItemDesc = () => {
        cartItemUpdate(product_id, 'D')
    }

    const isCurrentItemInCart = () => {
        return items.find(eachCartItem => eachCartItem.product_id === product_id);
    }
    
    return (
        <div className="col-lg-2 col-sm-6 col-6 d-flex flex-row flex-lg-column flex-xl-row text-nowrap">
            <button className="countIndicater" onClick={() => handleAddItemDesc()}>-</button>
            <input type="number" className="form-control-countIndicater" value={isCurrentItemInCart()?.qty} />
            <button className="countIndicater" onClick={() => handleAddItemInc()}>+</button>
        </div>
    );
};

export default CartAction;