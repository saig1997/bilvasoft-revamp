import Layout from "../components/Layout";
import Link from 'next/link';

export default function HomePage() {
    return (
        <Layout>
            {/* Hero Section + Extended Light Background */}
            <div className="relative pb-32 bg-gradient-to-br from-slate-50 to-white overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <img src="/solution-logos/home-background.png" alt="Background" className="w-full h-full object-cover opacity-40" />
                    <div className="absolute inset-0 bg-white opacity-60"></div>
                </div>
                <div className="max-w-6xl mx-auto relative z-10 py-24 px-4">
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
                </div>
                {/* Features Grid and below - clean background, but inside the extended section */}
                <div className="max-w-6xl mx-auto px-4 -mt-16 relative z-20">
                    <div className="rounded-2xl bg-white shadow-2xl p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                            <div key={index} className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 border-2 border-teal-400">
                                <h3 className="text-xl font-semibold mb-3 text-teal-700">{feature.title}</h3>
                                <p className="text-slate-600">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </Layout>
    );
}
