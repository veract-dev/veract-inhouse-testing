import { create } from 'zustand';

interface categoryInterface{
    category:string,
    setCategory:(category:string)=>void
}

export const getCategory = create<categoryInterface>()((set) => ({
    category: '',
    setCategory: (category: string) => set({ category })
}))