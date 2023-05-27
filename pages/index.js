import Navbar from "@components/components/navbar";
import Hero from "@components/components/hero";
import CarouselComponent from "@components/components/carousel";
export default function Home() {
  return (
    <main className="bg-black">
      <Navbar />
      <Hero />
      <>
        <div className="pt-8 px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-3xl font-semibold text-white">
            Trending items
          </div>
        </div>
        <div className="pb-8 px-1 sm:px-6 lg:px-8 w-full">
          <CarouselComponent slidesPerView={3.5} height="card" />
        </div>
      </>
    </main>
  );
}
