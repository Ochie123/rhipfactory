import useCurrentPrimaryskill from "./useCurrentPrimarySkill";

function useHasCurrentPrimaryskill() {
  return useCurrentPrimaryskill((state) => !!state.currentId);
}

export default useHasCurrentPrimaryskill;
