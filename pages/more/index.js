import Sidebar from "@components/components/sidebar";
import { useSidebar } from "@components/components/sidebarContext";

const More = () => {
  const [open, setOpen] = useSidebar();
  return (
    <main className="bg-gray-800">
      <Sidebar open={open} setOpen={setOpen} />
      <div className="text-gray-300 flex justify-center items-center min-h-screen max-h-full">
        <div className="text-3xl">Coming Soon!</div>
      </div>
    </main>
  );
};

export default More;
