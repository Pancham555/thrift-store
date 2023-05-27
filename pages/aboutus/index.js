import Navbar from "@components/components/navbar";
import Sidebar from "@components/components/sidebar";
import { useSidebar } from "@components/components/sidebarContext";

const Aboutus = () => {
  const [open, setOpen] = useSidebar();
  return (
    <main className="bg-black min-h-screen max-h-full">
      <Sidebar open={open} setOpen={setOpen} />
      <Navbar />
      <div className="container mx-auto py-16 px-4 text-gray-300">
        <h1 className="text-3xl font-bold mb-8">About Us</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 shadow-md rounded-lg">
            <h2 className="text-xl font-bold mb-4 text-black">Who We Are</h2>
            <p className="text-gray-700">
              We are a team of passionate individuals dedicated to creating
              innovative solutions for our customers. With years of experience
              and expertise, we strive to deliver excellence in everything we
              do.
            </p>
          </div>
          <div className="bg-white p-6 shadow-md rounded-lg">
            <h2 className="text-xl font-bold mb-4 text-black">Our Values</h2>
            <ul className="list-disc text-gray-700 pl-6">
              <li>
                Integrity: We uphold the highest standards of honesty and
                ethics.
              </li>
              <li>
                Innovation: We embrace creativity and strive for continuous
                improvement.
              </li>
              <li>
                Customer Focus: We prioritize the needs and satisfaction of our
                customers.
              </li>
              <li>
                Collaboration: We foster teamwork and value diverse
                perspectives.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Aboutus;
