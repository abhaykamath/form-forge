import { supabase } from "@/lib/supabaseClient";

const SAVED_FORMS_TABLE = "saved_forms";

export type T_FieldConfig = {
  id: string;
  type: string;
  label: string;
  name: string;
  placeholder: string;
  options?: string[];
  validation?: {
    required?: string;
    [rule: string]: any;
  };
  [customKey: string]: any;
};

export type T_FormConfig = {
  form_id: string;
  form_name: string;
  form_description?: string;
  creator_id: string;
  created_at: string;
  updated_at: string;
  field_order: string[];
  field_config: {
    [field_id: string]: T_FieldConfig;
  };
};

export type T_SavedForms = T_FormConfig[];

/**
 * Fetches all saved forms from the Supabase `saved_forms` table.
 *
 * @returns {Promise<T_SavedForms>} A promise resolving to an array of saved form configurations.
 * @throws {Error} Throws an error if the Supabase query fails.
 */
export const getSavedForms = async (): Promise<T_SavedForms> => {
  const { data, error } = await supabase.from(SAVED_FORMS_TABLE).select("*");

  if (error) throw new Error(error.message);

  return data as T_SavedForms;
};

/**
 * Fetches a single form configuration by its unique `form_id`.
 *
 * @param {string} form_id - The unique identifier of the form to retrieve.
 * @returns {Promise<T_FormConfig | null>} A promise resolving to the form configuration or null if not found.
 * @throws {Error} Throws an error if the Supabase query fails.
 */
export const getFormConfig = async (
  form_id: string
): Promise<T_FormConfig | null> => {
  const { data, error } = await supabase
    .from(SAVED_FORMS_TABLE)
    .select("*")
    .eq("form_id", form_id)
    .single();

  if (error) throw new Error(error.message);

  return data as T_FormConfig;
};

/**
 * Inserts or updates a form configuration in the `saved_forms` table.
 * Automatically manages `created_at` and `updated_at` timestamps.
 *
 * @param {T_FormConfig} form_config - The form configuration to save or update.
 * @returns {Promise<{ success: boolean }>} A success indicator.
 * @throws {Error} Throws an error if the Supabase upsert operation fails.
 */
export const saveFormConfig = async (form_config: T_FormConfig) => {
  const now = new Date().toISOString();
  const upsertData = {
    ...form_config,
    updated_at: now,
    created_at: form_config.created_at || now,
  };

  const { error } = await supabase.from(SAVED_FORMS_TABLE).upsert([upsertData]);

  if (error) throw new Error(error.message);

  return { success: true };
};

/**
 * Deletes a form by its unique `form_id` from the `saved_forms` table.
 *
 * @param {string} form_id - The unique identifier of the form to delete.
 * @returns {Promise<{ success: boolean }>} A success indicator.
 * @throws {Error} Throws an error if the Supabase delete operation fails.
 */
export const deleteFormConfig = async (form_id: string) => {
  const { error } = await supabase
    .from(SAVED_FORMS_TABLE)
    .delete()
    .eq("form_id", form_id);

  if (error) throw new Error(error.message);

  return { success: true };
};
