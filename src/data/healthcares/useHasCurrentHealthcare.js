import useCurrentHealthcare from "./useCurrentHealthcare";

function useHasCurrentHealthcare() {
  return useCurrentHealthcare((state) => !!state.currentId);
}

export default useHasCurrentHealthcare;
