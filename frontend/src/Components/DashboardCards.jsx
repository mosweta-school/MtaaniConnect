const DashboardCards = ({ stats }) => {
  const cards = [
    {
      title: "Total Users",
      value: stats.totalUsers,
    },
    {
      title: "Total Events",
      value: stats.totalEvents,
    },
    {
      title: "Upcoming Events",
      value: stats.upcomingEvents,
    },
  ];

  return (
    <div className="grid md:grid-cols-3 gap-6">
      {cards.map((card, index) => (
        <div
          key={index}
          className="bg-white p-6 rounded-2xl shadow-md"
        >
          <h2 className="text-gray-500">
            {card.title}
          </h2>

          <p className="text-3xl font-bold">
            {card.value}
          </p>
        </div>
      ))}
    </div>
  );
};

export default DashboardCards;