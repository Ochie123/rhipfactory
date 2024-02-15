import { useQuery } from "react-query";
import { loadStacks } from '../api/api'

function useAllStacks() {
  const { data } = useQuery('stacks', loadStacks);
  //console.log(data)
 
  return (data ?? []).map(({ id }) => id);
}

export default useAllStacks;
