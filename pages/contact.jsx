import Layout from "../components/Layout";

export default function ContactPage() {
  return (
    <Layout>
      <div className="py-16 px-8 max-w-3xl mx-auto text-white">
        <h1 className="text-4xl font-bold text-center mb-8 ">Contact Us</h1>
        <div className="space-y-4 text-gray-300">
          <p className="text-gray-300"><strong>Address:</strong> 2150 S Central Expy Suite 200, McKinney, TX 75070</p>
          <p className="text-gray-300"><strong>Phone:</strong> +1-469-344-1376</p>
          <p className="text-gray-300"><strong>Email:</strong> info@bilvasoft.com</p>
          <p className="text-gray-300"><strong>Website:</strong> www.bilvasoft.com</p>
          <p className="text-gray-300"><strong>Working Hours:</strong> Weekdays: 8am - 8pm | Weekends: 6am - 9pm</p>
        </div>
        <form className="mt-8 space-y-4 text-black">
          <input type="text" placeholder="Your Name" className="w-full border p-2 rounded shadow-md" />
          <input type="email" placeholder="Your Email" className="w-full border p-2 rounded shadow-md" />
          <textarea rows="5" placeholder="Your Message" className="w-full border p-2 rounded shadow-md" />
          <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 shadow-md">Send</button>
        </form>
      </div>
    </Layout>
  );
}
