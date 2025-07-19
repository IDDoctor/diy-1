import React from 'react';

const Home = () => {
  return (
    <div className="relative overflow-hidden">
      {/* Hero Section with Video Background */}
      <div className="relative h-screen flex items-center justify-center text-center text-white">
        <video
          autoPlay
          loop
          muted
          className="absolute z-0 w-auto min-w-full min-h-full max-w-none"
        >
          <source
            src="https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        <div className="relative z-10">
          <h1 className="text-5xl font-bold mb-4">Silver Health Management Team</h1>
          <p className="text-lg">
            We are dedicated to providing professional elderly care and health management services.
          </p>
        </div>
      </div>

      {/* Introduction Section */}
      <section className="container py-16">
        <h2 className="text-3xl font-semibold text-center mb-8">About Us</h2>
        <p className="text-gray-700 leading-relaxed">
          Silver Health Management Team is a professional organization dedicated to improving the
          quality of life for the elderly. With valid academic certificates and a global perspective,
          we strive to provide the best care and support for our clients.
        </p>
      </section>

      {/* Project Phases Section */}
      <section className="bg-gray-100 py-16">
        <div className="container">
          <h2 className="text-3xl font-semibold text-center mb-8">Project Phases (Next 6 Months)</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Phase 1: Website Launch</h3>
              <p className="text-gray-700 leading-relaxed">
                Launch our initial website with key information about our services and team.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Phase 2: Web Application Development</h3>
              <p className="text-gray-700 leading-relaxed">
                Develop our super web application (SWA) with AI integration for enhanced learning and
                support.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Phase 3: Community Engagement</h3>
              <p className="text-gray-700 leading-relaxed">
                Expand our reach through newsletters, events, and workshops for various user groups.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* User Reviews Section */}
      <section className="container py-16">
        <h2 className="text-3xl font-semibold text-center mb-8">User Reviews</h2>
        <p className="text-center text-gray-700">Your reviews will be available soon.</p>
      </section>

      {/* Active Users Section */}
      <section className="bg-gray-100 py-8">
        <div className="container text-center">
          <p className="text-gray-700">Active Users: [Number]</p>
        </div>
      </section>

      {/* Live Chat Support Section */}
      <section className="container py-8">
        <div className="text-center">
          <p className="text-gray-700">Live Chat Support Coming Soon</p>
        </div>
      </section>
    </div>
  );
};

export default Home;
