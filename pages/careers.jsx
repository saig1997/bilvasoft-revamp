import Layout from "../components/Layout";

export default function CareersPage() {
  const openPositions = [
    {
      title: "Senior Integration Developer",
      location: "McKinney, TX (Hybrid)",
      type: "Full-time",
      description: "We're looking for an experienced Integration Developer with strong expertise in MuleSoft, API development, and enterprise integration patterns.",
      requirements: [
        "5+ years of experience with MuleSoft or similar integration platforms",
        "Strong understanding of API design and REST principles",
        "Experience with cloud platforms (AWS/Azure)",
        "Excellent problem-solving skills"
      ]
    },
    {
      title: "Salesforce Developer",
      location: "Remote (US)",
      type: "Full-time",
      description: "Join our Salesforce team to build innovative solutions for our enterprise clients using the latest Salesforce technologies.",
      requirements: [
        "3+ years of Salesforce development experience",
        "Salesforce Platform Developer I/II certification",
        "Experience with Lightning Web Components",
        "Strong communication skills"
      ]
    },
    {
      title: "Data Analytics Consultant",
      location: "McKinney, TX (Hybrid)",
      type: "Full-time",
      description: "Help our clients unlock the power of their data through advanced analytics solutions and data-driven insights.",
      requirements: [
        "4+ years experience in data analytics",
        "Expertise in Snowflake, Domo, or similar platforms",
        "Strong SQL and Python skills",
        "Experience with data visualization tools"
      ]
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-teal-50">
        {/* Hero Section */}
        <div className="relative bg-black text-white py-24">
          <div className="max-w-7xl mx-auto px-6">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Join Our Team
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-2xl">
              Build your career at Bilvasoft where innovation meets opportunity. Help us shape the future of enterprise integration and digital transformation.
            </p>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-slate-50 to-transparent"></div>
        </div>

        {/* Why Join Us Section */}
        <div className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center">Why Join Bilvasoft?</h2>
            <div className="grid md:grid-cols-3 gap-12">
              {[
                {
                  title: "Innovation First",
                  description: "Work with cutting-edge technologies and help solve complex enterprise challenges.",
                  icon: (
                    <svg className="w-12 h-12 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  )
                },
                {
                  title: "Growth & Development",
                  description: "Continuous learning opportunities with access to certifications and training programs.",
                  icon: (
                    <svg className="w-12 h-12 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  )
                },
                {
                  title: "Work-Life Balance",
                  description: "Flexible work arrangements and a culture that values personal well-being.",
                  icon: (
                    <svg className="w-12 h-12 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  )
                }
              ].map((benefit, index) => (
                <div key={index} className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex justify-center mb-6">{benefit.icon}</div>
                  <h3 className="text-2xl font-bold mb-4">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Open Positions Section */}
        <div className="py-20 px-6 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center">Open Positions</h2>
            <div className="space-y-6">
              {openPositions.map((position, index) => (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                    <div>
                      <h3 className="text-2xl font-bold mb-2">{position.title}</h3>
                      <div className="flex flex-wrap gap-4">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                          {position.location}
                        </span>
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                          {position.type}
                        </span>
                      </div>
                    </div>
                    <button className="mt-4 md:mt-0 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                      Apply Now
                    </button>
                  </div>
                  <p className="text-gray-600 mb-6">{position.description}</p>
                  <div>
                    <h4 className="font-semibold mb-3">Requirements:</h4>
                    <ul className="list-disc list-inside space-y-2 text-gray-600">
                      {position.requirements.map((req, idx) => (
                        <li key={idx}>{req}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="py-20 px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Don't see the right fit?</h2>
            <p className="text-xl text-gray-600 mb-8">
              We're always looking for talented individuals to join our team. Send us your resume and let's discuss how you can contribute to Bilvasoft's success.
            </p>
            <a
              href="mailto:careers@bilvasoft.com"
              className="inline-flex items-center px-8 py-4 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
            >
              Contact Our Recruiting Team
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
} 