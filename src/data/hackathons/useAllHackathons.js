import { useQuery } from "react-query";
import { loadHackathons } from '../../../src/data/api/api'

function useAllHackathons() {
  const { data } = useQuery("", loadHackathons);
  console.log(data)
 
  return (data ?? []).map(({ id }) => id);
}

export default useAllHackathons;
