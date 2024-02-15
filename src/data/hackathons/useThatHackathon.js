import { useQuery, useQueryClient } from "react-query";
import { loadHackathon } from '../../../src/data/api/api'
import useCurrentHackathon from "./useCurrentHackathon";

function useThatHackathon() {
  const id = useCurrentHackathon((state) => state.currentId);
  const seeAllHackathons = useCurrentHackathon((state) => state.seeAllHackathons);

  // Find what we already know about this thing
  const queryClient = useQueryClient();
  const data = queryClient.getQueryData("hackathons");
  const partialHackathon = data.results.find((h) => h.id === id);
  const placeholderData = {
    ...partialHackathon,
    overview: "...",
  };
  const { data: hackathon } = useQuery(
    ["currentHackathon", { id }],
    () => loadHackathon(id),
    { placeholderData }
  );

  return {
    hackathon,
    seeAllHackathons,
  };
}

export default useThatHackathon;
