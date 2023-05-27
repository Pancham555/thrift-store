import Navbar from "@components/components/navbar";
import Sidebar from "@components/components/sidebar";
import { useSidebar } from "@components/components/sidebarContext";

const Aboutus = () => {
  const [open, setOpen] = useSidebar();
  return (
    <main className="bg-black">
      <Sidebar open={open} setOpen={setOpen} />
      <Navbar />
    </main>
  );
};

export default Aboutus;
