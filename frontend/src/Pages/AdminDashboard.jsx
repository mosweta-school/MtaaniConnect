import { useEffect, useState } from "react";
import API from "../Services/api";
import DashboardCards from "../Components/DashboardCards";
import { io } from "socket.io-client";

function AdminDashboard() {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [allUsers, setAllUsers] = useState([]);

  useEffect(() => {
  const socket = io("https://mtaaniconnectbackend-1.onrender.com");

  socket.on("User-Updated", (updatedUser) => {
    setAllUsers((prev) =>
      prev.map((user) =>
        user.id === updatedUser.id ? updatedUser : user
      )
    );
  });

  socket.on("User-Status-Changed", (updatedUser) => {
    setAllUsers((prev) =>
      prev.map((user) =>
        user.id === updatedUser.id ? updatedUser : user
      )
    );
  });

  socket.on("User-Deleted", ({ userId }) => {
    setAllUsers((prev) =>
      prev.filter((user) => user.id !== userId)
    );
  });

  return () => socket.disconnect();
}, []);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const res = await API.get("/admin/");
        setStats(res.data);
            const usersRes = await API.get("/admin/users");
    setAllUsers(usersRes.data);
      } catch (err) {
        setError(
          err.response?.data?.message ||
            err.message ||
            "Failed to load dashboard"
        );
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  if (loading) {
    return (
      <div className="py-10 text-center">
        Loading dashboard...
      </div>
    );
  }

  if (error) {
    return (
      <div className="py-10 text-center text-red-500">
        {error}
      </div>
    );
  }

  const analytics = stats?.analytics || {};
  const categories = analytics.categories || [];
  const users = analytics.users || [];
  const recentEvents = stats?.recentEvents || stats?.events || [];
  const maxCategoryValue = Math.max(
    ...categories.map((category) => category.value || 0),
    1
  );

  const changeUserRole = async (userId, newRole) => {
  try {
    await API.patch(`/admin/users/${userId}/role`, {
      role: newRole,
    });

    setAllUsers((prev) =>
      prev.map((user) =>
        user.id === userId
          ? { ...user, role: newRole }
          : user
      )
    );
  } catch (err) {
    console.error(err);
  }
};

const toggleUserStatus = async (user) => {
  try {
    const updatedStatus = !user.isActive;

    await API.patch(
      `/admin/users/${user.id}/status`,
      {
        isActive: updatedStatus,
      }
    );

    setAllUsers((prev) =>
      prev.map((u) =>
        u.id === user.id
          ? { ...u, isActive: updatedStatus }
          : u
      )
    );
  } catch (err) {
    console.error(err);
  }
};

  return (
    <section className="mx-auto max-w-6xl px-4 py-8">
      <div className="mb-8 flex flex-col gap-3">
        <p className="text-sm font-medium text-sky-600">
          Admin Panel
        </p>
        <div>
          <h1 className="text-3xl font-bold text-slate-900">
            Admin Dashboard
          </h1>
        </div>
      </div>

      <DashboardCards
        stats={{
          totalUsers: stats?.totalUsers ?? 0,
          totalEvents: stats?.totalEvents ?? 0,
          upcomingEvents: stats?.upcomingEvents ?? 0,
        }}
      />

      <div className="mt-8 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-slate-900">
              Events by Category
            </h2>
          </div>

          <div className="space-y-5">
            {categories.length === 0 ? (
              <p className="text-sm text-slate-500">
                No category analytics available yet.
              </p>
            ) : (
              categories.map((category) => {
                const value = category.value || 0;
                const width = `${(value / maxCategoryValue) * 100}%`;

                return (
                  <div key={category.name}>
                    <div className="mb-2 flex items-center justify-between text-sm">
                      <span className="font-medium text-slate-700">
                        {category.name}
                      </span>
                      <span className="text-slate-500">
                        {value}
                      </span>
                    </div>
                    <div className="h-3 rounded-full bg-slate-100">
                      <div
                        className="h-3 rounded-full bg-sky-500"
                        style={{ width }}
                      />
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-slate-900">
              User Analytics
            </h2>
          </div>

          <div className="space-y-4">
            {users.length === 0 ? (
              <p className="text-sm text-slate-500">
                No user analytics available yet.
              </p>
            ) : (
              users.map((item) => (
                <div
                  key={item.name}
                  className="flex items-center justify-between rounded-2xl bg-slate-50 px-4 py-3"
                >
                  <span className="font-medium text-slate-700">
                    {item.name}
                  </span>
                  <span className="text-lg font-bold text-slate-900">
                    {item.value || 0}
                  </span>
                </div>
              ))
            )}
          </div>
        </div>
      </div>

      <div className="mt-8 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-slate-900">
            Recent Events
          </h2>
          <p className="text-sm text-slate-500">
            Newly created or recently updated events.
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full text-left text-sm">
            <thead>
              <tr className="border-b border-slate-200 text-slate-500">
                <th className="pb-3 font-medium">Event</th>
                <th className="pb-3 font-medium">Category</th>
                <th className="pb-3 font-medium">Date</th>
              </tr>
            </thead>
            <tbody>
              {recentEvents.length === 0 ? (
                <tr>
                  <td
                    colSpan="3"
                    className="py-4 text-center text-slate-500"
                  >
                    No recent events available.
                  </td>
                </tr>
              ) : (
                recentEvents.map((event, index) => (
                  <tr
                    key={event.id || event._id || index}
                    className="border-b border-slate-100"
                  >
                    <td className="py-4 font-medium text-slate-800">
                      {event.title || event.name || "Untitled event"}
                    </td>
                    <td className="py-4 text-slate-600">
                      {event.category || "Uncategorized"}
                    </td>
                    <td className="py-4 text-slate-600">
                      {event.date || "TBD"}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
        {/* ================= USERS MANAGEMENT ================= */}
      <div className="mt-10 rounded-2xl border p-6 bg-white">
        <h2 className="text-xl font-bold mb-4">User Management</h2>

        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left border-b">
                <th className="p-2">Name</th>
                <th className="p-2">Email</th>
                <th className="p-2">Role</th>
                <th className="p-2">Status</th>
                <th className="p-2">Actions</th>
              </tr>
            </thead>

            <tbody>
  {allUsers.map((user) => (
    <tr key={user.id} className="border-b">
      <td className="p-2">{user.name}</td>

      <td className="p-2">{user.email}</td>

      <td className="p-2">
        <select
          value={user.role}
          onChange={(e) =>
            changeUserRole(user.id, e.target.value)
          }
          className="border rounded p-1"
        >
          <option value="user">User</option>
          <option value="admin">Admin</option>
        </select>
      </td>

      <td className="p-2">
        <span
          className={`px-2 py-1 rounded text-white text-xs ${
            user.isActive
              ? "bg-green-500"
              : "bg-red-500"
          }`}
        >
          {user.isActive ? "Active" : "Disabled"}
        </span>
      </td>

      <td className="p-2">
        <button
          onClick={() => toggleUserStatus(user)}
          className={`px-3 py-1 rounded text-white ${
            user.isActive
              ? "bg-red-500"
              : "bg-green-500"
          }`}
        >
          {user.isActive ? "Disable" : "Enable"}
        </button>
      </td>
    </tr>
  ))}
</tbody>

          </table>
        </div>
      </div>
      </div>
    </section>
  );
}

export default AdminDashboard;
