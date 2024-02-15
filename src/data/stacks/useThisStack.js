import { useQuery, useQueryClient } from "react-query";
import { loadStacks } from '../../../src/data/api/api'
import useCurrentStack from "./useCurrentStack";

function useThisStack(id) {
  const queryClient = useQueryClient();
  const { data } = useQuery("stacks", loadStacks);
  const onSuccess = ({ title }) =>
    queryClient.setQueryData("stacks", (oldStacks) =>
      oldStacks.map((oldStack) =>
        oldStack.id !== id ? oldStack : { id, title }
      )
    );

  const seeStack = useCurrentStack((state) => state.seeStack);
  return {
    stack: data?.find((s) => s.id === id),
    seeStack: () => seeStack(id),
  };
}

export default useThisStack;
