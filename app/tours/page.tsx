import Link from "next/link";
import Image from "next/image";
import { type Tour } from "../../types/types";

const url = "https://www.course-api.com/react-tours-project";

const fetchTours = async () => {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  const res = await fetch(url);
  const data: Tour[] = await res.json();
  return data;
};

async function ToursPage() {
  const data = await fetchTours();

  return (
    <section>
      <h1 className="text-3xl mb-4">Tours</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 mb-6">
        {data.map((tourItem) => {
          const { id, name, info, image, price }: Tour = tourItem;

          return (
            <Link
              key={id}
              href={`/tours/${id}`}
              className="bg-[#2b2a2a] max-w-sm rounded overflow-hidden shadow-lg hover:bg-blue-200">
              <div className="relative h-48">
                <Image
                  src={image}
                  alt={name}
                  fill
                  // width={100}
                  // height={100}
                  className="w-full object-cover"
                  priority
                />
              </div>

              <div className="px-5 py-4">
                <div className="flex">
                  <h2 className="font-bold text-xl mb-2">{name}</h2>
                  <h2 className="font-bold text-xl mb-2">${price}</h2>
                </div>

                <p className="text-gray-400 text-base truncate">{info}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}

export default ToursPage;
