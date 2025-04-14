import Layout from "../components/Layout";

export default function HomePage() {
    return (
        <Layout>
            <div className="text-center py-20 px-4 bg-[#121212] text-white rounded-lg shadow-lg">
                <h1 className="text-5xl font-bold mb-6 font-sans">Welcome to Bilvasoft</h1>
                <p className="text-lg max-w-2xl mx-auto font-sans">
                    We specialize in integration solutions using MuleSoft, Salesforce, DOMO, ServiceNow, and
                    Snowflake.
                </p>
            </div>
        </Layout>
    );
}
