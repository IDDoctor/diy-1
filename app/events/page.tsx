const EventsPage = () => {
  return (
    <div className="container py-16">
      <h1 className="text-3xl font-semibold text-center mb-8">Upcoming Events</h1>
      <p className="text-gray-700 leading-relaxed">
        Here is a list of our upcoming events, workshops, and classes:
      </p>
      <ul className="mt-4">
        <li>
          <div className="mb-4 p-4 border rounded-md">
            <h2 className="text-xl font-semibold mb-2">Laugh Yoga Session</h2>
            <p className="text-gray-700">Date: July 20, 2024</p>
            <p className="text-gray-700">Time: 10:00 AM - 11:00 AM</p>
            <a href="https://google.com" className="text-blue-500 hover:underline">Sign Up</a>
          </div>
        </li>
        <li>
          <div className="mb-4 p-4 border rounded-md">
            <h2 className="text-xl font-semibold mb-2">Dancing Class</h2>
            <p className="text-gray-700">Date: July 27, 2024</p>
            <p className="text-gray-700">Time: 2:00 PM - 3:00 PM</p>
            <a href="https://google.com" className="text-blue-500 hover:underline">Sign Up</a>
          </div>
        </li>
        <li>
          <div className="mb-4 p-4 border rounded-md">
            <h2 className="text-xl font-semibold mb-2">Talking Meeting</h2>
            <p className="text-gray-700">Date: August 3, 2024</p>
            <p className="text-gray-700">Time: 4:00 PM - 5:00 PM</p>
            <a href="https://google.com" className="text-blue-500 hover:underline">Sign Up</a>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default EventsPage;
