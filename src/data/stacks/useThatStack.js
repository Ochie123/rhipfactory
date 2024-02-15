import { useQuery, useQueryClient } from "react-query";
import { loadStack } from '../../../src/data/api/api'
import useCurrentStack from "./useCurrentStack";

function useThatStack() {
  const id = useCurrentStack((state) => state.currentId);
  const seeAllStacks = useCurrentStack((state) => state.seeAllStacks);

  // Find what we already know about this thing
  const queryClient = useQueryClient();
  const data = queryClient.getQueryData("stacks");
  const partialStack = data.results.find((s) => s.id === id);
  const placeholderData = {
    ...partialStack,
    overview: "...",
  };
  const { data: stack } = useQuery(
    ["currentStack", { id }],
    () => loadStack(id),
    { placeholderData }
  );

  return {
    stack,
    seeAllStacks,
  };
}

export default useThatStack;
