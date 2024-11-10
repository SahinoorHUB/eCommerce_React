import { create } from "zustand";

interface IAuth{
    showLoginModal: boolean; 
    isUserLoggedIn: () => boolean;
    updateLoginModalState: (state: boolean) => void; 
}

const authStore = create<IAuth>((set) => ({
    showLoginModal: false,

    isUserLoggedIn: () => {
        const storeItems = localStorage.getItem("token");
        return storeItems ? true :  false;
    },

    updateLoginModalState: (state: boolean) => {
        // set({ showLoginModal: state });
        set(() => ({ showLoginModal: state }));
    },
}));

export default authStore;