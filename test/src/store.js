import {create} from 'zustand'

export const  useStore = create((set) => ({
    count: 20,
    addCount: () => set((state) => ({count: state.count + 1}))
}))