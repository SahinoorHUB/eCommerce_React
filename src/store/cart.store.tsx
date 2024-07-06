import { create } from 'zustand'

const useStore = create((set) => ({
    items: [],
    setItems: (newItems: any) => set({ items: newItems }),
}))

export default useStore;