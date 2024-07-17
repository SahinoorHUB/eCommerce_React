export interface IProducts {
    id:          number;
    title:       string;
    price:       number;
    description: string;
    category:    IProductCategory;
    image:       string;
    rating:      IProductRating;
    product_id?: number;
}

export enum IProductCategory {
    Electronics = "electronics",
    Jewelery = "jewelery",
    MenSClothing = "men's clothing",
    WomenSClothing = "women's clothing",
}

export interface IProductRating {
    rate:  number;
    count: number;
}
