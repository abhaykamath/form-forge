import { getSavedForms, T_SavedForms } from "@/db/supabaseFunctions";
import { useQuery } from "@tanstack/react-query";

export const useSavedForms = () => {
  return useQuery<T_SavedForms | null>({
    queryKey: ["savedForms"],
    queryFn: getSavedForms,
    staleTime: 60 * 1000,
  });
};
