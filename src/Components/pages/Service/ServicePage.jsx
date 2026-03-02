const services = [
  {
    title: "Web Development",
    description:
      "We build fast, responsive, and modern web applications using React, Next.js, and Node.js.",
    icon: "💻",
  },
  {
    title: "Mobile App Development",
    description:
      "Cross-platform mobile applications with React Native and Flutter for iOS and Android.",
    icon: "📱",
  },
  {
    title: "UI/UX Design",
    description:
      "Designing beautiful, user-friendly interfaces that improve engagement and conversions.",
    icon: "🎨",
  },
  {
    title: "SEO Optimization",
    description:
      "Boost your website ranking and reach more customers with our SEO strategies.",
    icon: "🚀",
  },
];

const ServiceCard = ({ icon, title, description }) => (
  <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300 transform hover:-translate-y-2">
    <div className="text-5xl mb-4">{icon}</div>
    <h3 className="text-2xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const ServicePage = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="text-center py-32 px-6 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white">
        <h1 className="text-5xl font-bold mb-4 drop-shadow-lg">
          Our Professional Services
        </h1>
        <p className="text-xl mb-2 drop-shadow-md">
          Helping businesses grow with modern digital solutions
        </p>
        <p className="text-gray-200 mb-8 max-w-xl mx-auto">
          We specialize in creating beautiful, responsive web and mobile applications, UI/UX design, and SEO optimization to boost your online presence.
        </p>
        <button className="bg-white text-blue-600 font-semibold px-8 py-3 rounded-full text-lg transition transform hover:scale-105 hover:shadow-lg">
          Get Started
        </button>
      </section>

      {/* Services Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </section>
    </div>
  );
};
export default ServicePage;