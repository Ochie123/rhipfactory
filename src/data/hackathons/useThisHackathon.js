import { useQuery, useQueryClient } from "react-query";
import { loadHackathons } from '../../../src/data/api/api'
import useCurrentHackathon from "./useCurrentHackathon";

function useThisHackathon(id) {
  const queryClient = useQueryClient();
  const { data } = useQuery("", loadHackathons);
  const onSuccess = ({ name }) =>
    queryClient.setQueryData("", (oldHackathons) =>
      oldHackathons.map((oldHackathon) =>
        oldHackathon.id !== id ? oldHackathon : { id, name }
      )
    );

  const seeHackathon = useCurrentHackathon((state) => state.seeHackathon);
  return {
    hackathon: data?.find((h) => h.id === id),
    seeHackathon: () => seeHackathon(id),
  };
}

export default useThisHackathon;
