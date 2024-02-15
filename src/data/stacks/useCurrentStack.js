import {create} from "zustand";

const useCurrentStack = create((set) => ({
  currentId: null,
  seeStack: (id) => set(() => ({ currentId: id })),
  seeAllStacks: () => set(() => ({ currentId: null })),
}));

export default useCurrentStack;
