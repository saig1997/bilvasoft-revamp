import Layout from "../components/Layout";

export default function AboutPage() {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white">
        {/* Hero Section */}
        <div className="py-16 px-4 text-center">
          <h1 className="text-5xl font-bold mb-6 text-slate-800">
            About Bilvasoft
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            We help businesses implement effective integration solutions using modern platforms
            to improve operations and enable better decision making.
          </p>
        </div>

        {/* Mission Section */}
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-sm border-2 border-teal-400">
              <h2 className="text-3xl font-bold mb-6 text-teal-700">Our Mission</h2>
              <p className="text-slate-600 text-lg leading-relaxed">
                To help businesses build effective integration solutions that improve efficiency
                and enable growth. We work with platforms like MuleSoft, Salesforce, DOMO, 
                ServiceNow, and Snowflake to connect systems and streamline operations.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm border-2 border-teal-400">
              <h2 className="text-3xl font-bold mb-6 text-teal-700">Our Approach</h2>
              <p className="text-slate-600 text-lg leading-relaxed">
                We focus on understanding each client's unique needs and delivering
                practical solutions that help them achieve their business objectives
                through better system integration and data management.
              </p>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="max-w-7xl mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold mb-12 text-center text-slate-800">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Quality",
                description: "We focus on delivering reliable solutions that meet our clients' needs."
              },
              {
                title: "Adaptability",
                description: "We stay current with technology trends to provide modern solutions."
              },
              {
                title: "Collaboration",
                description: "We work closely with our clients to understand and achieve their goals."
              },
              {
                title: "Security",
                description: "We implement secure practices in all our integration solutions."
              },
              {
                title: "Knowledge",
                description: "Our team maintains expertise in the platforms we work with."
              },
              {
                title: "Support",
                description: "We provide reliable technical support for our solutions."
              }
            ].map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 border-2 border-teal-400">
                <h3 className="text-xl font-bold mb-3 text-teal-700">{value.title}</h3>
                <p className="text-slate-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="max-w-7xl mx-auto px-4 py-16 text-center">
          <div className="inline-flex items-center gap-8 p-8 bg-white rounded-lg shadow-sm border border-slate-100">
            <div>
              <h2 className="text-2xl font-bold mb-2 text-slate-800">Ready to Get Started?</h2>
              <p className="text-slate-600">
                Let's discuss how we can help with your integration needs.
              </p>
            </div>
            <a
              href="/contact"
              className="bg-teal-600 hover:bg-teal-700 text-white font-bold py-3 px-8 rounded-lg transition-colors duration-200"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
}
