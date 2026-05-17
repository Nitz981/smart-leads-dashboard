import { useEffect, useState } from "react";
import axios from "axios";

// LEAD INTERFACE
interface Lead {
  _id?: string;
  name: string;
  email: string;
  status: string;
  source: string;
}

function App() {
  const [activePage, setActivePage] =
    useState("dashboard");

  const [darkMode, setDarkMode] =
    useState(false);

  const [leads, setLeads] = useState<
    Lead[]
  >([]);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");
  const [source, setSource] = useState("");

  const [search, setSearch] = useState("");
  const [filterStatus, setFilterStatus] =
    useState("");

  // FETCH LEADS
  const fetchLeads = async () => {
    try {
      const res = await axios.get(
        "http://localhost:5000/api/leads"
      );

      setLeads(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchLeads();
  }, []);

  // ADD LEAD
  const handleAddLead = async () => {
    // EMPTY VALIDATION
    if (
      !name ||
      !email ||
      !status ||
      !source
    ) {
      alert("Please fill all fields");
      return;
    }

    // EMAIL VALIDATION
    const emailRegex =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      alert("Please enter valid email");
      return;
    }

    try {
      await axios.post(
        "http://localhost:5000/api/leads",
        {
          name,
          email,
          status,
          source,
        }
      );

      fetchLeads();

      setName("");
      setEmail("");
      setStatus("");
      setSource("");

      alert("Lead Added Successfully");
    } catch (error) {
      console.log(error);
    }
  };

  // DELETE LEAD
  const handleDelete = async (
    id: string
  ) => {
    try {
      await axios.delete(
        `http://localhost:5000/api/leads/${id}`
      );

      fetchLeads();
    } catch (error) {
      console.log(error);
    }
  };

  // EDIT LEAD
  const handleEdit = (lead: Lead) => {
    setName(lead.name);
    setEmail(lead.email);
    setStatus(lead.status);
    setSource(lead.source);

    if (lead._id) {
      handleDelete(lead._id);
    }
  };

  // FILTER LEADS
  const filteredLeads = leads.filter(
    (lead) => {
      return (
        (lead.name
          .toLowerCase()
          .includes(search.toLowerCase()) ||
          lead.email
            .toLowerCase()
            .includes(search.toLowerCase())) &&
        (filterStatus === "" ||
          lead.status === filterStatus)
      );
    }
  );

  return (
    <div
      className={
        darkMode
          ? "flex min-h-screen bg-gray-900 text-white transition-all duration-300"
          : "flex min-h-screen bg-gray-100 text-black transition-all duration-300"
      }
    >
      {/* Sidebar */}
      <div className="w-64 bg-gradient-to-b from-blue-700 to-indigo-800 text-white p-6 shadow-2xl">
        <h1 className="text-3xl font-bold mb-10 tracking-wide">
          CRM Dashboard
        </h1>

        <ul className="space-y-4">
          <li
            onClick={() =>
              setActivePage("dashboard")
            }
            className="hover:bg-white hover:text-blue-700 p-3 rounded-xl cursor-pointer transition-all duration-300"
          >
            📊 Dashboard
          </li>

          <li
            onClick={() =>
              setActivePage("leads")
            }
            className="hover:bg-white hover:text-blue-700 p-3 rounded-xl cursor-pointer transition-all duration-300"
          >
            👥 Leads
          </li>

          <li
            onClick={() =>
              setActivePage("analytics")
            }
            className="hover:bg-white hover:text-blue-700 p-3 rounded-xl cursor-pointer transition-all duration-300"
          >
            📈 Analytics
          </li>

          <li
            onClick={() =>
              setActivePage("settings")
            }
            className="hover:bg-white hover:text-blue-700 p-3 rounded-xl cursor-pointer transition-all duration-300"
          >
            ⚙️ Settings
          </li>
        </ul>
      </div>

      {/* MAIN CONTENT */}
      <div className="flex-1 p-8">
        {/* DASHBOARD */}
        {activePage === "dashboard" && (
          <>
            <h1 className="text-5xl font-bold text-blue-700 mb-2">
              Smart Leads Dashboard
            </h1>

            <p className="text-gray-500 mb-8">
              Welcome back! 🚀
            </p>

            {/* STATS */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              <div className="bg-white text-black p-6 rounded-2xl shadow-lg">
                <h2 className="text-xl font-semibold">
                  Total Leads
                </h2>

                <p className="text-4xl font-bold text-blue-600 mt-3">
                  {leads.length}
                </p>
              </div>

              <div className="bg-white text-black p-6 rounded-2xl shadow-lg">
                <h2 className="text-xl font-semibold">
                  Qualified
                </h2>

                <p className="text-4xl font-bold text-green-600 mt-3">
                  {
                    leads.filter(
                      (lead) =>
                        lead.status ===
                        "Qualified"
                    ).length
                  }
                </p>
              </div>

              <div className="bg-white text-black p-6 rounded-2xl shadow-lg">
                <h2 className="text-xl font-semibold">
                  Lost
                </h2>

                <p className="text-4xl font-bold text-red-600 mt-3">
                  {
                    leads.filter(
                      (lead) =>
                        lead.status === "Lost"
                    ).length
                  }
                </p>
              </div>
            </div>

            {/* FORM */}
            <div className="bg-white text-black p-6 rounded-2xl shadow-lg mb-10">
              <h2 className="text-2xl font-semibold mb-6">
                Add New Lead
              </h2>

              <form className="grid gap-4 md:grid-cols-2">
                <input
                  type="text"
                  placeholder="Enter Name"
                  value={name}
                  onChange={(e) =>
                    setName(e.target.value)
                  }
                  className="border p-3 rounded-xl"
                />

                <input
                  type="email"
                  placeholder="Enter Email"
                  value={email}
                  onChange={(e) =>
                    setEmail(e.target.value)
                  }
                  className="border p-3 rounded-xl"
                />

                <select
                  value={status}
                  onChange={(e) =>
                    setStatus(e.target.value)
                  }
                  className="border p-3 rounded-xl"
                >
                  <option value="">
                    Status
                  </option>

                  <option>New</option>
                  <option>Contacted</option>
                  <option>
                    Qualified
                  </option>
                  <option>Lost</option>
                </select>

                <select
                  value={source}
                  onChange={(e) =>
                    setSource(e.target.value)
                  }
                  className="border p-3 rounded-xl"
                >
                  <option value="">
                    Source
                  </option>

                  <option>
                    Website
                  </option>

                  <option>
                    Instagram
                  </option>

                  <option>
                    Referral
                  </option>
                </select>

                <button
                  type="button"
                  onClick={handleAddLead}
                  className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-3 rounded-xl"
                >
                  Add Lead
                </button>
              </form>
            </div>

            {/* SEARCH */}
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <input
                type="text"
                placeholder="Search by name or email"
                value={search}
                onChange={(e) =>
                  setSearch(e.target.value)
                }
                className="border p-3 rounded-xl flex-1"
              />

              <select
                value={filterStatus}
                onChange={(e) =>
                  setFilterStatus(
                    e.target.value
                  )
                }
                className="border p-3 rounded-xl"
              >
                <option value="">
                  All Status
                </option>

                <option>New</option>
                <option>Contacted</option>
                <option>
                  Qualified
                </option>
                <option>Lost</option>
              </select>
            </div>

            {/* TABLE */}
            <div className="overflow-x-auto">
              <table className="w-full bg-white text-black shadow-lg rounded-2xl overflow-hidden">
                <thead className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
                  <tr>
                    <th className="p-4 text-left">
                      Name
                    </th>

                    <th className="p-4 text-left">
                      Email
                    </th>

                    <th className="p-4 text-left">
                      Status
                    </th>

                    <th className="p-4 text-left">
                      Source
                    </th>

                    <th className="p-4 text-left">
                      Actions
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {filteredLeads.map(
                    (lead) => (
                      <tr
                        key={lead._id}
                        className="border-b hover:bg-gray-100"
                      >
                        <td className="p-4">
                          {lead.name}
                        </td>

                        <td className="p-4">
                          {lead.email}
                        </td>

                        <td className="p-4">
                          {lead.status}
                        </td>

                        <td className="p-4">
                          {lead.source}
                        </td>

                        <td className="p-4 flex gap-2">
                          <button
                            onClick={() =>
                              handleEdit(
                                lead
                              )
                            }
                            className="bg-yellow-500 text-white px-4 py-2 rounded-lg"
                          >
                            Edit
                          </button>

                          <button
                            onClick={() =>
                              lead._id &&
                              handleDelete(
                                lead._id
                              )
                            }
                            className="bg-red-500 text-white px-4 py-2 rounded-lg"
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    )
                  )}
                </tbody>
              </table>
            </div>
          </>
        )}

        {/* LEADS */}
        {activePage === "leads" && (
          <div className="bg-white text-black p-10 rounded-2xl shadow-lg">
            <h2 className="text-4xl font-bold mb-4">
              Leads Management
            </h2>

            <p className="text-gray-500">
              Manage all your leads here.
            </p>
          </div>
        )}

        {/* ANALYTICS */}
        {activePage === "analytics" && (
          <div className="bg-white text-black p-10 rounded-2xl shadow-lg">
            <h2 className="text-4xl font-bold mb-4">
              Analytics Dashboard
            </h2>

            <p className="text-gray-500">
              Analytics section ready.
            </p>
          </div>
        )}

        {/* SETTINGS */}
        {activePage === "settings" && (
          <div>
            <h2 className="text-4xl font-bold mb-8">
              Settings
            </h2>

            <div className="bg-white text-black p-10 rounded-2xl shadow-lg max-w-xl">
              <h3 className="text-2xl font-semibold mb-6">
                Theme Settings
              </h3>

              <button
                onClick={() =>
                  setDarkMode(!darkMode)
                }
                className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-5 py-2 rounded-xl"
              >
                Toggle Theme
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;