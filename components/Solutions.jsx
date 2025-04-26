import { MulesoftLogo, SalesforceLogo, DomoLogo, ServiceNowLogo, SnowflakeLogo, CustomLogo } from './solution-logos';

const Solutions = () => {
  const solutions = [
    {
      name: 'Mulesoft',
      description: 'API-led connectivity platform for integrating systems and data',
      Logo: MulesoftLogo,
    },
    {
      name: 'Salesforce',
      description: 'Leading CRM platform for sales, service, and marketing',
      Logo: SalesforceLogo,
    },
    {
      name: 'Domo',
      description: 'Business intelligence and data visualization platform',
      Logo: DomoLogo,
    },
    {
      name: 'ServiceNow',
      description: 'Digital workflow and IT service management platform',
      Logo: ServiceNowLogo,
    },
    {
      name: 'Snowflake',
      description: 'Cloud data platform for storage, processing, and analytics',
      Logo: SnowflakeLogo,
    },
    {
      name: 'Custom Solutions',
      description: 'Tailored solutions to meet your specific business needs',
      Logo: CustomLogo,
    },
  ];

  return (
    <section id="solutions" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Solutions</h2>
          <p className="text-xl text-gray-600">
            We provide comprehensive solutions to transform your business
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution) => (
            <div
              key={solution.name}
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="h-16 mb-4">
                <solution.Logo />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {solution.name}
              </h3>
              <p className="text-gray-600">{solution.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions; 