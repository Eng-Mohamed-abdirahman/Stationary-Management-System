// components/StationaryFormModal.jsx
import { useEffect, useState } from "react";
import { useStationary } from "../context/StationaryContext";
import { addStationary, updateStationary } from "../lib/stationary";

const StationaryFormModal = ({ closeModal, editItem }) => {
  const { dispatch } = useStationary();
  const [formData, setFormData] = useState({
    name: "",
    quantity: "",
  });

  useEffect(() => {
    if (editItem) {
      setFormData({
        name: editItem.name || "",
        quantity: editItem.quantity || "",
      });
    }
  }, [editItem]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "quantity" ? parseInt(value, 10) || "" : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editItem) {
        const updated = await updateStationary(editItem.id, formData);
        dispatch({ type: "UPDATE_ITEM", payload: Array.isArray(updated) ? updated[0] : updated });
      } else {
        const newItem = await addStationary(formData);
        dispatch({ type: "ADD_ITEM", payload: Array.isArray(newItem) ? newItem[0] : newItem });
      }
      closeModal();
    } catch (error) {
      console.error("Error submitting form:", error.message);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-30 z-50">
      <div className="bg-white p-6 rounded-md shadow-md w-full max-w-md">
        <h2 className="text-lg font-semibold mb-4">
          {editItem ? "Edit Stationary" : "Add Stationary"}
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Quantity</label>
            <input
              type="number"
              name="quantity"
              value={formData.quantity}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
            />
          </div>
          <div className="flex justify-end gap-2">
            <button
              type="button"
              onClick={closeModal}
              className="px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
            >
              {editItem ? "Update" : "Add"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default StationaryFormModal;
