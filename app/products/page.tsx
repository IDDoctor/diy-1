const ProductsPage = () => {
  return (
    <div className="container py-16">
      <h1 className="text-3xl font-semibold text-center mb-8">Our Products</h1>
      <p className="text-gray-700 leading-relaxed">
        Here is a list of our products and services that we offer to our clients:
      </p>
      <ul className="list-disc list-inside mt-4">
        <li>Elderly Care Services</li>
        <li>AI-Powered Web Application</li>
        <li>Educational Workshops</li>
        <li>Newsletter Subscriptions</li>
        <li>Homecare Assistance</li>
      </ul>
    </div>
  );
};

export default ProductsPage;
