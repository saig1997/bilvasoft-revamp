import Layout from "../../components/Layout";
import Link from 'next/link';

export default function IntegratedSolutions() {
  return (
    <Layout>
      <article className="py-16 px-4 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <Link 
            href="/blog" 
            className="text-teal-600 hover:text-teal-800 mb-8 inline-flex items-center group"
          >
            <svg className="w-4 h-4 mr-2 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Blog
          </Link>

          <div className="mb-12">
            <div className="flex items-center gap-4 text-sm text-slate-600 mb-6">
              <span className="bg-teal-100 text-teal-800 px-3 py-1 rounded-full">Integration</span>
              <span>6 min read</span>
              <span>March 15, 2024</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-slate-800">
              Building Effective Integrated Solutions
            </h1>
            
            <p className="text-xl text-slate-600 mb-8">
              Learn how well-designed integrated solutions can help streamline operations,
              improve data flow, and enhance business processes.
            </p>
          </div>

          <div className="prose prose-lg max-w-none">
            <div className="bg-teal-50 p-8 rounded-xl mb-12">
              <h2 className="text-2xl font-bold mb-4 text-teal-800">Common Integration Challenges</h2>
              <p className="text-slate-700 mb-6">
                Organizations often face several challenges when connecting their systems:
              </p>
              <ul className="space-y-4 text-slate-700">
                <li><strong>Data Silos</strong> → Information scattered across different systems</li>
                <li><strong>Legacy Systems</strong> → Older systems with limited connectivity</li>
                <li><strong>Complexity</strong> → Managing multiple integration points</li>
                <li><strong>Security</strong> → Protecting data across connected systems</li>
              </ul>
            </div>

            <div className="space-y-12">
              <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100">
                <h2 className="text-2xl font-bold mb-6 text-slate-800">Integration Platforms</h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-bold mb-4 text-slate-700">MuleSoft</h3>
                    <p className="text-slate-600 mb-4">
                      API-led integration platform for connecting applications and data.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <svg className="w-5 h-5 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-slate-600">API Development</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <svg className="w-5 h-5 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-slate-600">System Integration</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-4 text-slate-700">Salesforce</h3>
                    <p className="text-slate-600 mb-4">
                      CRM platform with extensive integration capabilities.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <svg className="w-5 h-5 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-slate-600">Data Integration</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <svg className="w-5 h-5 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-slate-600">Process Automation</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100">
                <h2 className="text-2xl font-bold mb-6 text-slate-800">Analytics Solutions</h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-bold mb-4 text-slate-700">DOMO</h3>
                    <p className="text-slate-600 mb-4">
                      Business intelligence and data visualization platform.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <svg className="w-5 h-5 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-slate-600">Dashboard Creation</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <svg className="w-5 h-5 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-slate-600">Data Connectors</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-4 text-slate-700">Snowflake</h3>
                    <p className="text-slate-600 mb-4">
                      Modern data warehousing platform.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <svg className="w-5 h-5 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-slate-600">Data Storage</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <svg className="w-5 h-5 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-slate-600">Analytics Support</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-100 p-8 rounded-xl my-12">
              <h2 className="text-2xl font-bold mb-4 text-slate-800">Implementation Example</h2>
              <p className="text-slate-600">
                We helped a manufacturing company integrate their inventory and order management systems 
                using MuleSoft, improving data accuracy and reducing manual data entry tasks.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100">
              <h2 className="text-2xl font-bold mb-4 text-slate-800">Ready to Get Started?</h2>
              <p className="text-slate-600 mb-8">
                Let us help you design and implement integrated solutions that meet your business needs.
              </p>
              <div className="flex items-center justify-between">
                <p className="text-slate-700 font-bold">Discuss your integration needs</p>
                <Link 
                  href="/contact" 
                  className="bg-teal-600 text-white px-6 py-3 rounded-lg hover:bg-teal-700 inline-block transition-colors"
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