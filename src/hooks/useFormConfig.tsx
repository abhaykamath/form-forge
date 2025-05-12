import { getFormConfig, T_FormConfig } from "@/db/supabaseFunctions";
import { useQuery } from "@tanstack/react-query";

/**
 * React Query hook to fetch a single form configuration by its `form_id`.
 *
 * @param {string | undefined} form_id - The ID of the form to fetch. If undefined, the query is disabled.
 * @returns A React Query result object containing the form data or an error.
 */
export const useFormConfig = (form_id: string | undefined) => {
  return useQuery<T_FormConfig | null>({
    queryKey: ["formConfig", form_id],
    queryFn: () => {
      if (!form_id) throw new Error("form_id is required");
      return getFormConfig(form_id);
    },
    enabled: !!form_id, // Prevents query from running if form_id is undefined or falsy
    staleTime: 60 * 1000,
  });
};
