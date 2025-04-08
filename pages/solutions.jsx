import Layout from "../components/Layout";

export default function SolutionsPage() {
  return (
    <Layout>
      <div className="py-16 px-8 max-w-5xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4">Our Integration Solutions</h1>
        <p className="text-lg text-gray-700 mb-8">
          We deliver enterprise-grade integrations using MuleSoft, Salesforce, DOMO, ServiceNow, and Snowflake.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[
            { name: "MuleSoft", desc: "Secure, scalable API integrations across your business apps." },
            { name: "Salesforce CRM", desc: "Connect customer data and workflows across Salesforce Cloud." },
            { name: "DOMO", desc: "Empower business users with real-time dashboards and insights." },
            { name: "ServiceNow", desc: "Automate IT service management and operations workflows." },
            { name: "Snowflake", desc: "Modern data warehousing and analytics for all your teams." },
          ].map((solution) => (
            <div key={solution.name} className="border rounded-lg shadow-sm p-6 bg-white text-left">
              <h3 className="text-xl font-semibold mb-2">{solution.name}</h3>
              <p className="text-gray-600">{solution.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
