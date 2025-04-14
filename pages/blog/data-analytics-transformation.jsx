import Layout from "../../components/Layout";
import Link from 'next/link';

export default function DataAnalyticsTransformation() {
  return (
    <Layout>
      <article className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <Link 
            href="/blog" 
            className="text-blue-600 hover:text-blue-800 mb-8 inline-flex items-center group"
          >
            <svg className="w-4 h-4 mr-2 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Blog
          </Link>

          <div className="mb-12">
            <div className="flex items-center gap-4 text-sm text-gray-600 mb-6">
              <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full">Analytics</span>
              <span>6-8 min read</span>
              <span>March 15, 2024</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#121212]">
              Transforming Business Through Data Analytics
            </h1>
            
            <p className="text-xl text-gray-600 mb-8">
              In today's data-driven world, organizations that harness the power of analytics gain a 
              significant competitive advantage. Learn how modern data analytics can transform your 
              business decision-making process.
            </p>
          </div>

          <div className="prose prose-lg max-w-none">
            <div className="bg-purple-50 p-8 rounded-xl mb-12">
              <h2 className="text-2xl font-bold mb-4 text-purple-800">Common Data Challenges</h2>
              <ul className="space-y-4 text-gray-800">
                <li><strong>Data Silos</strong> → Fragmented data across departments</li>
                <li><strong>Data Quality</strong> → Inconsistent and unreliable data</li>
                <li><strong>Analysis Paralysis</strong> → Too much data, not enough insights</li>
                <li><strong>Technical Debt</strong> → Legacy systems limiting capabilities</li>
              </ul>
            </div>

            <div className="space-y-12">
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h2 className="text-2xl font-bold mb-6 text-[#121212]">The Data Analytics Journey</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-purple-100 text-purple-800 w-8 h-8 rounded-full flex items-center justify-center font-bold shrink-0">1</div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Data Collection & Integration</h3>
                      <p className="text-gray-600">Unified data platform that connects:</p>
                      <ul className="mt-2 space-y-2">
                        <li className="flex items-center gap-2">
                          <svg className="w-5 h-5 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>CRM Systems</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <svg className="w-5 h-5 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>ERP Platforms</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <svg className="w-5 h-5 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>Marketing Tools</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-purple-100 text-purple-800 w-8 h-8 rounded-full flex items-center justify-center font-bold shrink-0">2</div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Data Processing & Cleansing</h3>
                      <p className="text-gray-600">Automated data quality processes:</p>
                      <ul className="mt-2 space-y-2">
                        <li className="flex items-center gap-2">
                          <svg className="w-5 h-5 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>Deduplication</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <svg className="w-5 h-5 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>Standardization</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <svg className="w-5 h-5 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>Validation Rules</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-purple-100 text-purple-800 w-8 h-8 rounded-full flex items-center justify-center font-bold shrink-0">3</div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Advanced Analytics</h3>
                      <p className="text-gray-600">Modern analytics capabilities:</p>
                      <ul className="mt-2 space-y-2">
                        <li className="flex items-center gap-2">
                          <svg className="w-5 h-5 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>Predictive Models</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <svg className="w-5 h-5 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>Machine Learning</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <svg className="w-5 h-5 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>Real-time Analytics</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h2 className="text-2xl font-bold mb-6 text-[#121212]">Key Benefits</h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-bold mb-4">Business Impact</h3>
                    <ul className="space-y-3">
                      <li className="flex items-center gap-2">
                        <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Increased Revenue</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Cost Optimization</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Better Decision Making</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-4">Operational Excellence</h3>
                    <ul className="space-y-3">
                      <li className="flex items-center gap-2">
                        <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Process Automation</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Resource Optimization</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Predictive Maintenance</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 p-8 rounded-xl my-12">
              <h2 className="text-2xl font-bold mb-4 text-blue-800">Success Story</h2>
              <p className="text-gray-700">
                Bilvasoft helped a manufacturing client implement predictive analytics, resulting in a 
                30% reduction in maintenance costs and 25% improvement in equipment uptime.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl">
              <h2 className="text-2xl font-bold mb-4 text-[#121212]">Final Takeaway</h2>
              <p className="text-gray-700 mb-8">
                Data analytics is no longer optional — it's a critical capability that drives 
                competitive advantage and business growth in the digital age.
              </p>
              <div className="flex items-center justify-between">
                <p className="text-gray-700 font-bold">Ready to transform your data into insights?</p>
                <Link 
                  href="/contact" 
                  className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 inline-block transition-colors"
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