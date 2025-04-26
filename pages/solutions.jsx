import Layout from "../components/Layout";
import Link from 'next/link';
import { MulesoftLogo, SalesforceLogo, DomoLogo, ServiceNowLogo, SnowflakeLogo, CustomLogo } from '../components/solution-logos';

export default function SolutionsPage() {
    const solutions = [
        {
            name: "MuleSoft Integration",
            desc: "API-led integration solutions connecting your systems and applications.",
            Logo: MulesoftLogo,
            features: [
                "API Design & Development",
                "System Integration",
                "Microservices Architecture",
                "Data Synchronization"
            ]
        },
        {
            name: "Salesforce Solutions",
            desc: "Custom Salesforce implementations tailored to your business needs.",
            Logo: SalesforceLogo,
            features: [
                "CRM Integration",
                "Sales Cloud Setup",
                "Service Cloud Configuration",
                "Custom Development"
            ]
        },
        {
            name: "DOMO Analytics",
            desc: "Data visualization and analytics solutions for better decision making.",
            Logo: DomoLogo,
            features: [
                "Dashboard Creation",
                "Data Integration",
                "Custom Reports",
                "Analytics Setup"
            ]
        },
        {
            name: "ServiceNow Platform",
            desc: "IT service management solutions with automated workflows.",
            Logo: ServiceNowLogo,
            features: [
                "ITSM Setup",
                "Process Automation",
                "Service Portal Setup",
                "Integration Services"
            ]
        },
        {
            name: "Snowflake Data Cloud",
            desc: "Modern data warehousing solutions for your analytics needs.",
            Logo: SnowflakeLogo,
            features: [
                "Data Warehouse Setup",
                "Data Pipeline Creation",
                "Integration Services",
                "Analytics Support"
            ]
        },
        {
            name: "Custom Solutions",
            desc: "Specialized integration solutions for unique requirements.",
            Logo: CustomLogo,
            features: [
                "Custom Development",
                "System Integration",
                "Cloud Migration",
                "Technical Support"
            ]
        }
    ];

    return (
        <Layout>
            <div className="py-16 px-4 bg-gradient-to-br from-slate-50 to-white min-h-screen">
                <div className="max-w-6xl mx-auto">
                    {/* Header Section */}
                    <div className="text-center mb-16">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-slate-800">
                            Integration Solutions
                        </h1>
                        <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                            We help businesses build seamless integrations using industry-leading platforms,
                            focusing on security, efficiency, and scalability.
                        </p>
                    </div>

                    {/* Solutions Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {solutions.map((solution, index) => (
                            <div key={index} className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-all duration-300 border border-slate-100">
                                <div className="flex items-start mb-6">
                                    <div className="w-24 h-24 flex items-center justify-center mr-4">
                                        <solution.Logo className="w-full h-full" />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-teal-700">{solution.name}</h3>
                                        <p className="text-slate-600 mt-2">{solution.desc}</p>
                                    </div>
                                </div>
                                <ul className="space-y-3">
                                    {solution.features.map((feature, i) => (
                                        <li key={i} className="flex items-center text-slate-600">
                                            <svg className="w-5 h-5 mr-3 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                            </svg>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    {/* CTA Section */}
                    <div className="text-center mt-16">
                        <Link href="/contact" className="inline-block bg-teal-600 hover:bg-teal-700 text-white font-bold py-3 px-8 rounded-lg transition-colors duration-200">
                            Schedule a Consultation
                        </Link>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
