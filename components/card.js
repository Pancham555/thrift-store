import Image from "next/image";
import { useRouter } from "next/navigation";
export default function CardItem({
  image = "https://images.unsplash.com/photo-1674296115670-8f0e92b1fddb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  title = "Product Name",
  desc = "Product description goes here.",
  currentprice = "$20.00",
  originalprice = "$25.00",
  discount = "20% off",
}) {
  const router = useRouter();
  return (
    <div
      onClick={() => router.push("/products/2")}
      className="shadow-gray-700 my-5 w-full cursor-pointer transform overflow-hidden rounded-lg bg-gray-900  shadow-md duration-300"
    >
      {/* hover:shadow-lg */}
      {/* dark:bg-slate-800 */}
      {/* hover:scale-105 */}
      <Image
        width={360}
        height={360}
        className="lg:h-60 h-56 w-full object-cover object-center"
        src={image}
        alt="Product Image"
      />
      <div className="p-4 text-gray-300">
        <h2 className="mb-2 text-lg font-medium">
          {/* dark:text-white */}
          {title}
        </h2>
        {/* dark:text-gray-300 */}
        {/* <p className="mb-2 text-base text-gray-700">{desc}</p> */}
        <div className="flex items-center">
          <p className="mr-2 text-lg font-semibold">
            {/* dark:text-white */}
            {currentprice}
          </p>
          <p className="text-base  font-medium text-gray-500 line-through">
            {/* dark:text-gray-300 */}
            {originalprice}
          </p>
          <p className="ml-auto text-base font-medium text-green-500">
            {discount}
          </p>
        </div>
      </div>
    </div>
  );
}
