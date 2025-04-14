import Layout from "../components/Layout";
import Link from 'next/link';

export default function BlogPage() {
  return (
    <Layout>      
      <div className="py-16 px-8 max-w-4xl mx-auto bg-[#121212] text-white rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold mb-6 text-center ">
          Insights & Case Studies 
        </h1>
        <div className="space-y-8">
          {[
            {
              title: "5 Keys to Scalable API Integration",
              snippet:
                "Discover the best practices for building scalable integration architectures using MuleSoft and Salesforce.",
              href: "/blog/scalable-api-integration",
            },
            {
              title: "Snowflake for Enterprise Data Strategy",
              snippet:
                "Explore how Bilvasoft helps clients transition to cloud-native analytics with Snowflake.",
              href: "/blog/snowflake-data-strategy",
            },
            {
              title: "DOMO Dashboards: Visualizing Your Business Metrics",
              snippet: "Learn how DOMO dashboards can transform your data into actionable insights, providing a visual representation of key performance indicators (KPIs) and business metrics.",
              href: "/blog/domo-dashboards",
            },
            {
              title: "Streamlining IT Workflows with ServiceNow",
              snippet: "Explore how ServiceNow can automate and optimize your IT service management (ITSM) processes, leading to increased efficiency and improved service delivery.",
              href: "/blog/servicenow-workflows",
            },
            {
              title: "Unlock the Power of Integrated Solutions",
              snippet: "Discover how integrating MuleSoft, Salesforce, DOMO, ServiceNow, and Snowflake can create a unified ecosystem, driving data-driven decisions and business success.",
              href: "/blog/integrated-solutions",
            },
          ].map((post, i) => (
            <Link href={post.href} key={i}>
              <a className="p-6 border rounded bg-[#242424] text-white shadow-md block hover:bg-[#333333]">
                <h2 className="text-2xl font-semibold mb-2 ">{post.title}</h2>
                <p className="text-gray-700">{post.snippet}</p>
              </a>
            </Link>
          ))}
         </div>
      </div>
    </Layout>
  );
