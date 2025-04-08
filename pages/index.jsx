import Layout from "../components/Layout";

export default function HomePage() {
  return (
    <Layout>
      <div className="text-center mt-20">
        <h1 className="text-5xl font-bold mb-6">Welcome to Bilvasoft</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          We specialize in integration solutions using MuleSoft, Salesforce, DOMO, ServiceNow, and Snowflake.
        </p>
      </div>
    </Layout>
  );
}
