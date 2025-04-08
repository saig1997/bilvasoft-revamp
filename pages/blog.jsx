import Layout from "../components/Layout";

export default function BlogPage() {
  return (
    <Layout>
      <div className="py-16 px-8 max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-center">Insights & Case Studies</h1>
        <div className="space-y-8">
          {[
            {
              title: "5 Keys to Scalable API Integration",
              snippet: "Discover the best practices for building scalable integration architectures using MuleSoft and Salesforce."
            },
            {
              title: "Snowflake for Enterprise Data Strategy",
              snippet: "Explore how Bilvasoft helps clients transition to cloud-native analytics with Snowflake."
            }
          ].map((post, i) => (
            <div key={i} className="p-6 border rounded bg-white shadow-sm">
              <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
              <p className="text-gray-700">{post.snippet}</p>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
