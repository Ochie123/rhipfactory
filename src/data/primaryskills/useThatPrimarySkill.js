import { useQuery, useQueryClient } from "react-query";
import { loadPrimaryskill } from '../api/api';
import useCurrentPrimaryskill from "./useCurrentPrimarySkill";

function useThatPrimaryskill() {
  const id = useCurrentPrimaryskill((state) => state.currentId);
  const seeAllPrimaryskills = useCurrentPrimaryskill((state) => state.seeAllPrimaryskills);

  // Find what we already know about this thing
  const queryClient = useQueryClient();
  const data = queryClient.getQueryData("skills");
  const partialPrimaryskill = data.results.find((p) => p.id === id);
  const placeholderData = {
    ...partialPrimaryskill,
    overview: "...",

  };
  const { data: primaryskill } = useQuery(
    ["currentPrimaryskill", { id }],
    () => loadPrimaryskill(id),
    { placeholderData }
  );

  return {
    primaryskill,
    seeAllPrimaryskills,
  };
}

export default useThatPrimaryskill;
