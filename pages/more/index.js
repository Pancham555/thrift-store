import Navbar from "@components/components/navbar";
import Sidebar from "@components/components/sidebar";
import { useSidebar } from "@components/components/sidebarContext";

const More = () => {
  const [open, setOpen] = useSidebar();
  return (
    <main className="bg-black">
      <Sidebar open={open} setOpen={setOpen} />
      <Navbar />
      <div className="text-gray-300 flex justify-center items-center min-h-screen max-h-full">
        <div className="text-3xl">Coming Soon!</div>
      </div>
    </main>
  );
};

export default More;
