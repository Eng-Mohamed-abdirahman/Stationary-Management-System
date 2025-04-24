// components/Stationaries.jsx
import React, { useEffect, useState } from "react";
import { useStationary } from "../context/StationaryContext";
import supabase from "../lib/supabase";
import Modal from "./StationaryFormModal";

const Stationaries = () => {
  const { items, dispatch } = useStationary();
  const [open, setOpen] = useState(false);
  const [editItem, setEditItem] = useState(null);

  const fetchItems = async () => {
    const { data, error } = await supabase.from("stationary").select("*");
    if (!error) {
      dispatch({ type: "SET_ITEMS", payload: data });
    }
  };

  useEffect(() => {
    fetchItems();
  }, []);

  const handleDelete = async (id) => {
    await supabase.from("stationary").delete().eq("id", id);
    dispatch({ type: "DELETE_ITEM", payload: id });
  };

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Stationary List</h2>
        <button
          onClick={() => {
            setEditItem(null);
            setOpen(true);
          }}
          className="bg-indigo-600 text-white px-4 py-2 rounded"
        >
          Add Stationary
        </button>
      </div>

      <table className="w-full border border-gray-200">
        <thead>
          <tr className="bg-gray-100 text-left">
            <th className="p-2 border">Name</th>
            <th className="p-2 border">Quantity</th>
            <th className="p-2 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id} className="border-t">
              <td className="p-2 border">{item.name}</td>
              <td className="p-2 border">{item.quantity}</td>
              <td className="p-2 border space-x-2">
                <button
                  onClick={() => {
                    setEditItem(item);
                    setOpen(true);
                  }}
                  className="text-blue-600 hover:underline"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(item.id)}
                  className="text-red-600 hover:underline"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {open && (
        <Modal
          closeModal={() => {
            setOpen(false);
            setEditItem(null);
          }}
          editItem={editItem}
        />
      )}
    </div>
  );
};

export default Stationaries;
