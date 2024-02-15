import {create} from "zustand";

const useCurrentHackathon = create((set) => ({
  currentId: null,
  seeHackathon: (id) => set(() => ({ currentId: id })),
  seeAllHackathons: () => set(() => ({ currentId: null })),
}));

export default useCurrentHackathon;
