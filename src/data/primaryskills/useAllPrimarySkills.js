import { useQuery } from "react-query";
import { loadPrimaryskills } from '../api/api';

function useAllPrimaryskills() {
  const { data } = useQuery("skills", loadPrimaryskills);
  console.log(data);
 
  return (data ?? []).map(({ id }) => id);
}

export default useAllPrimaryskills;
