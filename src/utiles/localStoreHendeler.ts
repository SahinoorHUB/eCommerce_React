export enum StorageData {
    CartItems = "cartItems", 
}

export const LOCAL_STORAGE_GET = (key: string) => { 
    const jsonValue = localStorage.getItem(key)
    const dataLoca = jsonValue != null ? JSON.parse(jsonValue) : null
    return dataLoca; 
}

export const LOCAL_STORAGE_SET = (key: string, data: any) => {
    localStorage.setItem(key, JSON.stringify(data))
}