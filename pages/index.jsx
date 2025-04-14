import Layout from "../components/Layout";
import Link from 'next/link';

export default function HomePage() {
    return (
        <Layout>
            {/* Hero Section */}
            <div className="relative py-24 px-4 bg-gradient-to-br from-slate-50 to-white">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h1 className="text-6xl font-bold mb-6 font-sans text-slate-800">
                            Integration Solutions for Your Business
                        </h1>
                        <p className="text-xl max-w-3xl mx-auto mb-8 text-slate-600">
                            We help businesses build seamless integrations using modern platforms and technologies,
                            focusing on efficiency, security, and scalability.
                        </p>
                        <Link href="/contact" className="inline-block bg-teal-600 hover:bg-teal-700 text-white font-bold py-3 px-8 rounded-lg transition-colors duration-200">
                            Schedule a Consultation
                        </Link>
                    </div>

                    {/* Features Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                title: "API Integration",
                                description: "Build efficient and maintainable integration solutions with modern API approaches."
                            },
                            {
                                title: "Cloud Solutions",
                                description: "Implement cloud-based integration platforms for improved flexibility."
                            },
                            {
                                title: "Data Analytics",
                                description: "Create meaningful insights from your integrated data sources."
                            },
                            {
                                title: "Security",
                                description: "Implement secure integration practices and data protection measures."
                            },
                            {
                                title: "Automation",
                                description: "Streamline processes with automated workflow solutions."
                            },
                            {
                                title: "Support",
                                description: "Get reliable technical support for your integration needs."
                            }
                        ].map((feature, index) => (
                            <div key={index} className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 border border-slate-100">
                                <h3 className="text-xl font-semibold mb-3 text-teal-700">{feature.title}</h3>
                                <p className="text-slate-600">{feature.description}</p>
                            </div>
                        ))}
                    </div>

                    {/* CTA Section */}
                    <div className="text-center mt-16">
                        <div className="inline-flex items-center gap-8 p-8 bg-white rounded-lg shadow-sm border border-slate-100">
                            <p className="text-slate-700 font-bold">Ready to discuss your integration needs?</p>
                            <Link href="/contact" className="bg-teal-600 hover:bg-teal-700 text-white font-bold py-3 px-8 rounded-lg transition-colors duration-200">
                                Get Started
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
