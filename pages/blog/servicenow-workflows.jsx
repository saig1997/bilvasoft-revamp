import Layout from "../../components/Layout";
import Link from 'next/link';

export default function ServiceNowWorkflows() {
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
              <span className="bg-teal-100 text-teal-800 px-3 py-1 rounded-full">IT Management</span>
              <span>5 min read</span>
              <span>March 15, 2024</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-slate-800">
              Streamlining IT Workflows with ServiceNow
            </h1>
            
            <p className="text-xl text-slate-600 mb-8">
              Learn how ServiceNow can enhance your IT operations through automated workflows,
              improved service delivery, and operational efficiency.
            </p>
          </div>

          <div className="prose prose-lg max-w-none">
            <div className="bg-teal-50 p-8 rounded-xl mb-12">
              <h2 className="text-2xl font-bold mb-4 text-teal-800">Key Challenges in IT Service Management</h2>
              <ul className="space-y-4 text-slate-700">
                <li><strong>Manual Processes</strong> → Time-consuming and error-prone tasks</li>
                <li><strong>Lack of Visibility</strong> → Limited insights into service performance</li>
                <li><strong>Siloed Operations</strong> → Disconnected teams and tools</li>
                <li><strong>Inconsistent Service</strong> → Varying quality of support</li>
              </ul>
            </div>

            <div className="space-y-12">
              <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100">
                <h2 className="text-2xl font-bold mb-6 text-slate-800">ServiceNow Solutions</h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-bold mb-4 text-slate-700">Service Management</h3>
                    <ul className="space-y-3">
                      <li className="flex items-center gap-2">
                        <svg className="w-5 h-5 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-slate-600">Incident Management</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <svg className="w-5 h-5 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-slate-600">Problem Management</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <svg className="w-5 h-5 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-slate-600">Change Management</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-4 text-slate-700">Automation</h3>
                    <ul className="space-y-3">
                      <li className="flex items-center gap-2">
                        <svg className="w-5 h-5 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-slate-600">Workflow Automation</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <svg className="w-5 h-5 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-slate-600">Self-service Portal</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <svg className="w-5 h-5 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-slate-600">Virtual Agent</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100">
                <h2 className="text-2xl font-bold mb-6 text-slate-800">Implementation Approach</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-teal-100 text-teal-800 w-8 h-8 rounded-full flex items-center justify-center font-bold shrink-0">1</div>
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-slate-700">Process Assessment</h3>
                      <p className="text-slate-600">Evaluate current workflows and identify optimization opportunities.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-teal-100 text-teal-800 w-8 h-8 rounded-full flex items-center justify-center font-bold shrink-0">2</div>
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-slate-700">Phased Implementation</h3>
                      <p className="text-slate-600">Roll out changes gradually to ensure smooth adoption.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-teal-100 text-teal-800 w-8 h-8 rounded-full flex items-center justify-center font-bold shrink-0">3</div>
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-slate-700">User Training</h3>
                      <p className="text-slate-600">Comprehensive training program for all stakeholders.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-100 p-8 rounded-xl my-12">
              <h2 className="text-2xl font-bold mb-4 text-slate-800">Success Story</h2>
              <p className="text-slate-600">
                We helped a healthcare provider implement ServiceNow, improving their ticket resolution time
                and first-call resolution rate through streamlined workflows and automation.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100">
              <h2 className="text-2xl font-bold mb-4 text-slate-800">Ready to Get Started?</h2>
              <p className="text-slate-600 mb-8">
                Let us help you optimize your IT service management with ServiceNow's powerful platform.
              </p>
              <div className="flex items-center justify-between">
                <p className="text-slate-700 font-bold">Ready to improve your IT workflows?</p>
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