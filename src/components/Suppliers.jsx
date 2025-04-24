import { useEffect, useState } from "react";
import  supabase  from "../lib/supabase"; 
import SupplierModal from "./SupplierModal";

const Suppliers = () => {
  const [suppliers, setSuppliers] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [editSupplier, setEditSupplier] = useState(null);

  const fetchSuppliers = async () => {
    const { data, error } = await supabase.from("suppliers").select("*");
    if (!error) setSuppliers(data);
  };

  useEffect(() => {
    fetchSuppliers();
  }, []);

  const handleDelete = async (id) => {
    await supabase.from("suppliers").delete().eq("id", id);
    fetchSuppliers();
  };

  const handleEdit = (supplier) => {
    setEditSupplier(supplier);
    setShowModal(true);
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Suppliers</h2>
        <button
          onClick={() => {
            setEditSupplier(null);
            setShowModal(true);
          }}
          className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
        >
          Add Supplier
        </button>
      </div>

      <table className="w-full border border-gray-200 rounded overflow-hidden text-left">
        <thead className="bg-gray-100 text-sm">
          <tr>
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Phone</th>
            <th className="px-4 py-2">Email</th>
            <th className="px-4 py-2">Address</th>
            <th className="px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {suppliers.map((s) => (
            <tr key={s.id} className="border-t">
              <td className="px-4 py-2">{s.name}</td>
              <td className="px-4 py-2">{s.phone}</td>
              <td className="px-4 py-2">{s.email}</td>
              <td className="px-4 py-2">{s.address}</td>
              <td className="px-4 py-2 space-x-2">
                <button
                  onClick={() => handleEdit(s)}
                  className="text-blue-600 hover:underline"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(s.id)}
                  className="text-red-600 hover:underline"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {showModal && (
        <SupplierModal
          fetchSuppliers={fetchSuppliers}
          setShowModal={setShowModal}
          supplier={editSupplier}
        />
      )}
    </div>
  );
};

export default Suppliers;
