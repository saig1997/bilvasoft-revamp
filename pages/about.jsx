import Layout from "../components/Layout";

export default function AboutPage() {
  return (
    <Layout>
      <div className="py-16 px-8 max-w-3xl mx-auto text-center bg-gray-900 text-white rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold mb-4 font-sans">About Bilvasoft</h1>
        <p className="text-lg mb-4">
          Bilvasoft is a trusted integration partner helping businesses leverage platforms like MuleSoft, Salesforce, DOMO, ServiceNow, and Snowflake.
        </p>
        <p className="">
          With a focus on secure, scalable, and enterprise-grade integration, our solutions empower digital transformation and enable data-driven decisions across departments. 
        </p>
      </div>
    </Layout>
  );
}
