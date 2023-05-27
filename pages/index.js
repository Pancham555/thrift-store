import Navbar from "@components/components/navbar";
import Hero from "@components/components/hero";
import CarouselComponent from "@components/components/carousel";
import Sidebar from "@components/components/sidebar";
import { useSidebar } from "@components/components/sidebarContext";
export default function Home() {
  const [open, setOpen] = useSidebar();
  return (
    <main className="bg-black">
      <Sidebar open={open} setOpen={setOpen} />
      <Navbar />
      <Hero />
      <>
        <div className="pt-8 px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-3xl font-semibold text-white">
            Trending items
          </div>
        </div>
        <div className="pb-8 px-1 sm:px-6 lg:px-8 w-full mt-4">
          <CarouselComponent slidesPerView={3.5} height="card" />
        </div>
      </>
    </main>
  );
}
