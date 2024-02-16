import { create } from "zustand";

const useCurrentPrimaryskill = create((set) => ({
  currentId: null,
  seePrimaryskill: (id) => set(() => ({ currentId: id })),
  seeAllPrimaryskills: () => set(() => ({ currentId: null })),
}));

export default useCurrentPrimaryskill;
