// lib/stationary.js
import supabase from "./supabase";

export const fetchStationary = async () => {
  const { data, error } = await supabase.from("stationary").select("*");
  if (error) throw error;
  return data;
};

export const addStationary = async (stationary) => {
  const { data, error } = await supabase.from("stationary").insert([stationary]).select();
  if (error) throw error;
  return data;
};

export const updateStationary = async (id, updatedData) => {
  const { data, error } = await supabase
    .from("stationary")
    .update(updatedData)
    .eq("id", id)
    .select();
  if (error) throw error;
  return data;
};

export const deleteStationary = async (id) => {
  const { data, error } = await supabase.from("stationary").delete().eq("id", id);
  if (error) throw error;
  return data;
};
