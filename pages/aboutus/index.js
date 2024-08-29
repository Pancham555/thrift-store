// import Sidebar from "@components/components/sidebar";
// import { useSidebar } from "@components/components/sidebarContext";

// const Aboutus = () => {
//   const [open, setOpen] = useSidebar();
//   return (
//     <main className="bg-gray-800 min-h-screen max-h-full">
//       <Sidebar open={open} setOpen={setOpen} />
//       <div className="container mx-auto py-16 px-4 text-gray-300">
//         <h1 className="text-3xl font-bold mb-8">About Us</h1>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//           <div className="bg-white p-6 shadow-md rounded-lg">
//             <h2 className="text-xl font-bold mb-4 text-black">Who We Are</h2>
//             <p className="text-gray-700">
//               We are a team of passionate individuals dedicated to creating
//               innovative solutions for our customers. With years of experience
//               and expertise, we strive to deliver excellence in everything we
//               do.
//             </p>
//           </div>
//           <div className="bg-white p-6 shadow-md rounded-lg">
//             <h2 className="text-xl font-bold mb-4 text-black">Our Values</h2>
//             <ul className="list-disc text-gray-700 pl-6">
//               <li>
//                 Integrity: We uphold the highest standards of honesty and
//                 ethics.
//               </li>
//               <li>
//                 Innovation: We embrace creativity and strive for continuous
//                 improvement.
//               </li>
//               <li>
//                 Customer Focus: We prioritize the needs and satisfaction of our
//                 customers.
//               </li>
//               <li>
//                 Collaboration: We foster teamwork and value diverse
//                 perspectives.
//               </li>
//             </ul>
//           </div>
//         </div>
//       </div>
//     </main>
//   );
// };

// export default Aboutus;
import Sidebar from "@components/components/sidebar";
import { useSidebar } from "@components/components/sidebarContext";

export default function AboutUs() {
  const [open, setOpen] = useSidebar();
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="bg-primary text-primary-foreground py-4">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl font-bold">Zenith</h1>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <Sidebar open={open} setOpen={setOpen} />
        <section className="mb-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Welcome to Zenith</h2>
              <p className="text-lg mb-4">
                We&lsquo;re passionate about delivering the finest gourmet
                ingredients right to your doorstep. Our curated selection of
                artisanal foods will elevate your cooking and dining experience.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden">
              <img
                src="/about-logo.png"
                alt="Full logo"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-center">
            Meet the Founders
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="border rounded-lg">
              <div className="p-6">
                <img
                  src="/pancham.jpeg"
                  alt="Pancham Barman"
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold mb-2 text-center">
                  Pancham Barman
                </h3>
                <p className="text-muted-foreground text-center">
                  A tech enthusiast who combines his love for food with
                  e-commerce expertise to bring gourmet ingredients to your
                  home.
                </p>
              </div>
            </div>
            <div className="border rounded-lg">
              <div className="p-6">
                <img
                  src="/bhaskar.jpeg"
                  alt="Bhaskar Jyoti Goswami"
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold mb-2 text-center">
                  Bhaskar Jyoti Goswami
                </h3>
                <p className="text-muted-foreground text-center">
                  A digital marketing specialist who enhances transparency and
                  boosts the &lsquo;Ease of Living&lsquo; while employability in
                  India
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <div className="border rounded-lg">
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-4 text-center">
                Our Mission
              </h2>
              <p className="text-lg text-center">
                At Zenith, we&lsquo;re on a mission to make gourmet cooking
                accessible to everyone. We believe that with the right
                ingredients, anyone can create extraordinary meals at home.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 text-center">Get in Touch</h2>
          <div className="text-center font-medium">
            <p className="mb-2">
              Email: bhaskarjyotikuku@gmail.com, panchamb63@gmail.com
            </p>
            <p className="mb-2">Phone: +91 8822334572, +91 6001223203</p>
            <p>Address: Nalbari, Assam, India, Pin: 781335</p>
          </div>
        </section>
      </main>

      <footer className="bg-muted py-4 mt-12">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          © 2023 Zenith. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
