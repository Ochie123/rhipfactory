import { useQuery, useQueryClient } from "react-query";
import { loadPrimaryskills } from '../api/api';
import useCurrentPrimaryskill from "./useCurrentPrimarySkill"

function useThisPrimaryskill(id) {
  const queryClient = useQueryClient();
  const { data } = useQuery("primaryskills", loadPrimaryskills);
  const onSuccess = ({ username}) =>
    queryClient.setQueryData("primaryskills", (oldPrimaryskills) =>
      oldPrimaryskills.map((oldPrimaryskill) =>
        oldPrimaryskill.id !== id ? oldPrimaryskill : { id, username}
      )
    );

  const seePrimaryskill = useCurrentPrimaryskill((state) => state.seePrimaryskill);
  return {
    primarySkill: data?.find((p) => p.id === id),
    seePrimaryskill: () => seePrimaryskill(id),
  };
}

export default useThisPrimaryskill;
