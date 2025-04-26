import Layout from "../components/Layout";

export default function ContactPage() {
  return (
    <Layout>
      <div className="py-20 px-4 bg-gradient-to-br from-slate-50 via-white to-teal-50 min-h-screen">
        <div className="max-w-5xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-20">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">
              Let's Connect
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Ready to transform your business with modern integration solutions? 
              We're here to help bring your vision to life.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="bg-white p-10 rounded-2xl shadow-lg border border-slate-100 hover:shadow-xl transition-shadow duration-300">
              <h2 className="text-3xl font-bold mb-8 text-slate-800">Send us a Message</h2>
              <form className="space-y-8">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-2">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200"
                    placeholder="Tell us about your project and how we can help..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-teal-600 to-teal-500 hover:from-teal-500 hover:to-teal-400 text-white font-bold py-4 px-8 rounded-xl transition-all duration-200 transform hover:scale-[1.02] focus:scale-[0.98]"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div className="bg-white p-10 rounded-2xl shadow-lg border border-slate-100 hover:shadow-xl transition-shadow duration-300">
                <h2 className="text-3xl font-bold mb-8 text-slate-800">Get in Touch</h2>
                <div className="space-y-8">
                  <div className="flex items-start gap-6">
                    <div className="bg-teal-50 p-3 rounded-xl">
                      <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-800 mb-1">Email</h3>
                      <a href="mailto:info@bilvasoft.com" className="text-teal-600 hover:text-teal-700 transition-colors">info@bilvasoft.com</a>
                    </div>
                  </div>

                  <div className="flex items-start gap-6">
                    <div className="bg-teal-50 p-3 rounded-xl">
                      <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-800 mb-1">Phone</h3>
                      <a href="tel:+1-469-344-1376" className="text-teal-600 hover:text-teal-700 transition-colors">+1-469-344-1376</a>
                    </div>
                  </div>

                  <div className="flex items-start gap-6">
                    <div className="bg-teal-50 p-3 rounded-xl">
                      <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-800 mb-1">Address</h3>
                      <p className="text-slate-600">2150 S Central Expy</p>
                      <p className="text-slate-600">Suite 200</p>
                      <p className="text-slate-600">McKinney, TX 75070</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-6">
                    <div className="bg-teal-50 p-3 rounded-xl">
                      <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-800 mb-1">Working Hours</h3>
                      <p className="text-slate-600">Weekdays: 9:00 AM - 5:00 PM</p>
                      <p className="text-slate-600">Weekends: Holiday</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-6">
                    <div className="bg-teal-50 p-3 rounded-xl">
                      <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-800 mb-1">Website</h3>
                      <a href="https://www.bilvasoft.com" className="text-teal-600 hover:text-teal-700 transition-colors">www.bilvasoft.com</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

