
import ApiService from "../globalService/api.service"
import { IProducts } from "../interfaces/product.interface";

export default class ProductService extends ApiService{
    async getProductList(){
        const result = await this.client().get<IProducts[]>('/products');
        return result.data;
    }

    async getSingleProduct(productId: string){
        const result = await this.client().get<IProducts[]>(`/products/${productId}`);
        return result.data;
    }
}