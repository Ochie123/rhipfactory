import useCurrentStack from "./useCurrentStack";

function useHasCurrentStack() {
  return useCurrentStack((state) => !!state.currentId);
}

export default useHasCurrentStack;
