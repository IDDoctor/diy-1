const WebApplicationPage = () => {
  return (
    <div className="container py-16">
      <h1 className="text-3xl font-semibold text-center mb-8">Web Application</h1>
      <p className="text-gray-700 leading-relaxed">
        Sign up or log in to access our super web application (SWA) with AI integration for enhanced learning and support.
      </p>
      <div className="mt-4 flex justify-center">
        <button className="bg-primary text-primary-foreground px-4 py-2 rounded-md mr-2">Sign Up</button>
        <button className="bg-secondary text-secondary-foreground px-4 py-2 rounded-md">Log In</button>
      </div>
      <p className="mt-8 text-gray-700 leading-relaxed">
        Features include:
      </p>
      <ul className="list-disc list-inside mt-4">
        <li>AI Chatbot</li>
        <li>Learning Workshops</li>
        <li>Medication Reminders</li>
        <li>Homecare Management</li>
      </ul>
    </div>
  );
};

export default WebApplicationPage;
