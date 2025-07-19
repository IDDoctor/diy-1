const ContactPage = () => {
  return (
    <div className="container py-16">
      <h1 className="text-3xl font-semibold text-center mb-8">Contact Us</h1>
      <p className="text-gray-700 leading-relaxed text-center">
        Contact us for more information or to schedule a consultation.
      </p>
      <div className="mt-8">
        <form className="max-w-md mx-auto">
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Name</label>
            <input type="text" id="name" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Your Name" />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
            <input type="email" id="email" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Your Email" />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">Message</label>
            <textarea id="message" rows={4} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Your Message"></textarea>
          </div>
          <div className="flex items-center justify-between">
            <button className="bg-primary text-primary-foreground hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
              Send Message
            </button>
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />
              <span className="text-sm text-gray-700">Sign up for newsletter</span>
            </label>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
