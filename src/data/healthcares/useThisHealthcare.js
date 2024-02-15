import { useQuery, useQueryClient } from "react-query";
import { loadHealthcares } from '../../../src/data/api/api'
import useCurrentHealthcare from "./useCurrentHealthcare";

function useThisHealthcare(id) {
  const queryClient = useQueryClient();
  const { data } = useQuery("", loadHealthcares);
  const onSuccess = ({ name }) =>
    queryClient.setQueryData("", (oldHealthcares) =>
      oldHealthcares.map((oldHealthcare) =>
        oldHealthcare.id !== id ? oldHealthcare : { id, name }
      )
    );

  const seeHealthcare = useCurrentHealthcare((state) => state.seeHealthcare);
  return {
    healthcare: data?.find((h) => h.id === id),
    seeHealthcare: () => seeHealthcare(id),
  };
}

export default useThisHealthcare;
