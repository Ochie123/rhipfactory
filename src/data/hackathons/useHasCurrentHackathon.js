import useCurrentHackathon from "./useCurrentHackathon";

function useHasCurrentHackathon() {
  return useCurrentHackathon((state) => !!state.currentId);
}

export default useHasCurrentHackathon;
