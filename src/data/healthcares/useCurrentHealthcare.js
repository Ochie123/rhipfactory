import {create} from "zustand";

const useCurrentHealthcare = create((set) => ({
  currentId: null,
  seeHealthcare: (id) => set(() => ({ currentId: id })),
  seeAllHealthcares: () => set(() => ({ currentId: null })),
}));

export default useCurrentHealthcare;
