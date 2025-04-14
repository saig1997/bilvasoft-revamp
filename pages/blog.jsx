import Layout from "../components/Layout";
import Link from 'next/link';

export default function BlogPage() {
  return (
    <Layout>      
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white">
        {/* Hero Section */}
        <div className="py-16 px-4 text-center">
          <h1 className="text-5xl font-bold mb-6 text-slate-800">
            Insights & Resources
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Explore our articles on integration technologies and solutions.
            Learn about best practices and implementation strategies.
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="max-w-7xl mx-auto px-4 pb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "5 Keys to Scalable API Integration",
                snippet: "Learn about best practices for building maintainable API integration architectures.",
                href: "/blog/scalable-api-integration",
                category: "Integration",
                readTime: "8 min read"
              },
              {
                title: "Transforming Business Through Data Analytics",
                snippet: "Understand how data analytics can improve your business decision-making process.",
                href: "/blog/data-analytics-transformation",
                category: "Analytics",
                readTime: "6 min read"
              },
              {
                title: "DOMO Dashboards: Visualizing Your Business Metrics",
                snippet: "Learn how DOMO dashboards can help visualize your key performance indicators and business metrics.",
                href: "/blog/domo-dashboards",
                category: "Business Intelligence",
                readTime: "7 min read"
              },
              {
                title: "Streamlining IT Workflows with ServiceNow",
                snippet: "Explore how ServiceNow can help automate and improve your IT service management processes.",
                href: "/blog/servicenow-workflows",
                category: "IT Management",
                readTime: "5 min read"
              },
              {
                title: "Building Effective Integrated Solutions",
                snippet: "Learn how integrating different platforms can help create a more efficient business ecosystem.",
                href: "/blog/integrated-solutions",
                category: "Integration",
                readTime: "6 min read"
              },
            ].map((post, i) => (
              <Link 
                href={post.href} 
                key={i}
                className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-slate-100"
              >
                <div className="p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <span className="bg-teal-100 text-teal-800 text-sm font-medium px-3 py-1 rounded-full">{post.category}</span>
                    <span className="text-slate-400 text-sm">{post.readTime}</span>
                  </div>
                  <h2 className="text-2xl font-bold mb-3 text-slate-800 group-hover:text-teal-700 transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-slate-600 line-clamp-3">{post.snippet}</p>
                  <div className="mt-4 flex items-center text-teal-600">
                    <span className="text-sm font-medium">Read More</span>
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
