import { useQuery } from "react-query";
import { loadHealthcares } from '../../../src/data/api/api'

function useAllHealthcares() {
  const { data } = useQuery("", loadHealthcares);
  console.log(data)
 
  return (data ?? []).map(({ id }) => id);
}

export default useAllHealthcares;
