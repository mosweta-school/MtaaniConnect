import { useEffect, useState } from "react";

import API from "../Services/api";

import DashboardCards from "../Components/DashboardCards";

import Charts from "../Components/Charts";

const AdminDashboard2 = () => {
  const [stats, setStats] = useState(null);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const res =
          await API.get("/admin/dashboard");

        setStats(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchStats();
  }, []);

  if (!stats) {
    return (
      <div className="text-center py-10">
        Loading dashboard...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6 space-y-8">
      <h1 className="text-4xl font-bold">
        Admin Dashboard
      </h1>

      <DashboardCards stats={stats} />

      <Charts data={stats.analytics} />
    </div>
  );
};

export default AdminDashboard2;
