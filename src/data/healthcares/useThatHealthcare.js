import { useQuery, useQueryClient } from "react-query";
import { loadHealthcare } from '../../../src/data/api/api'
import useCurrentHealthcare from "./useCurrentHealthcare";

function useThatHealthcare() {
  const id = useCurrentHealthcare((state) => state.currentId);
  const seeAllHealthcares = useCurrentHealthcare((state) => state.seeAllHealthcares);

  // Find what we already know about this thing
  const queryClient = useQueryClient();
  const data = queryClient.getQueryData("healthcares");
  const partialHealthcare = data.results.find((h) => h.id === id);
  const placeholderData = {
    ...partialHealthcare,
    overview: "...",
  };
  const { data: healthcare } = useQuery(
    ["currentHealthcare", { id }],
    () => loadHealthcare(id),
    { placeholderData }
  );

  return {
    healthcare,
    seeAllHealthcares,
  };
}

export default useThatHealthcare;
