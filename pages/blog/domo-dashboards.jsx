import Layout from "../../components/Layout";
import Link from 'next/link';

export default function DomoDashboards() {
  return (
    <Layout>
      <article className="bg-gradient-to-b from-slate-50 to-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <Link 
            href="/blog" 
            className="text-teal-600 hover:text-teal-700 mb-8 inline-flex items-center group"
          >
            <svg className="w-4 h-4 mr-2 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Blog
          </Link>

          <div className="mb-12">
            <div className="flex items-center gap-4 text-sm text-slate-600 mb-6">
              <span className="bg-teal-50 text-teal-700 px-3 py-1 rounded-full">Analytics</span>
              <span>6 min read</span>
              <span>March 15, 2024</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900">
              DOMO Dashboards: Building Effective Business Analytics
            </h1>
            
            <p className="text-xl text-slate-600 mb-8">
              Learn how to leverage DOMO's visualization capabilities to create meaningful dashboards that provide actionable insights for your business operations.
            </p>
          </div>

          <div className="prose prose-lg max-w-none">
            <div className="bg-teal-50 p-8 rounded-xl mb-12">
              <h2 className="text-2xl font-bold mb-4 text-slate-900">Why Choose DOMO?</h2>
              <ul className="space-y-4 text-slate-700">
                <li><strong>Data Integration</strong> → Connect and sync data from multiple sources</li>
                <li><strong>Visual Analytics</strong> → Create interactive data visualizations</li>
                <li><strong>Responsive Design</strong> → Access insights on any device</li>
                <li><strong>Scalable Platform</strong> → Support enterprise-level data analysis</li>
              </ul>
            </div>

            <div className="space-y-12">
              <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100">
                <h2 className="text-2xl font-bold mb-6 text-slate-900">Dashboard Capabilities</h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-bold mb-4 text-slate-800">Data Visualization</h3>
                    <ul className="space-y-3">
                      <li className="flex items-center gap-2">
                        <svg className="w-5 h-5 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-slate-700">Customizable Charts</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <svg className="w-5 h-5 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-slate-700">Geographic Mapping</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <svg className="w-5 h-5 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-slate-700">Performance Metrics</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-4 text-slate-800">Data Management</h3>
                    <ul className="space-y-3">
                      <li className="flex items-center gap-2">
                        <svg className="w-5 h-5 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-slate-700">Data Source Integration</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <svg className="w-5 h-5 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-slate-700">Data Transformation</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <svg className="w-5 h-5 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-slate-700">Security Controls</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100">
                <h2 className="text-2xl font-bold mb-6 text-slate-900">Implementation Best Practices</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-teal-50 text-teal-700 w-8 h-8 rounded-full flex items-center justify-center font-bold shrink-0">1</div>
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-slate-800">Set Clear Goals</h3>
                      <p className="text-slate-600">Identify specific metrics and KPIs that align with business objectives.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-teal-50 text-teal-700 w-8 h-8 rounded-full flex items-center justify-center font-bold shrink-0">2</div>
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-slate-800">Select Appropriate Visualizations</h3>
                      <p className="text-slate-600">Use visualization types that effectively communicate your data insights.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-teal-50 text-teal-700 w-8 h-8 rounded-full flex items-center justify-center font-bold shrink-0">3</div>
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-slate-800">Optimize Data Updates</h3>
                      <p className="text-slate-600">Configure data refresh intervals based on business needs and system resources.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 p-8 rounded-xl my-12 border border-slate-100">
              <h2 className="text-2xl font-bold mb-4 text-slate-900">Client Success</h2>
              <p className="text-slate-600">
                We helped a retail client implement DOMO dashboards to streamline their reporting process, 
                enabling faster access to insights and improving operational efficiency across departments.
              </p>
            </div>

            <div className="bg-teal-50 p-8 rounded-xl">
              <h2 className="text-2xl font-bold mb-4 text-slate-900">Next Steps</h2>
              <p className="text-slate-600 mb-8">
                DOMO dashboards can help your organization make data-driven decisions more effectively. 
                Let us help you implement a solution tailored to your needs.
              </p>
              <div className="flex items-center justify-between">
                <p className="text-slate-700 font-bold">Interested in DOMO implementation?</p>
                <Link 
                  href="/contact" 
                  className="bg-teal-600 text-white px-6 py-3 rounded-lg hover:bg-teal-700 transition-colors"
                >
                  Schedule a Consultation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </article>
    </Layout>
  );
}