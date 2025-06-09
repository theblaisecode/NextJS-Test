import testImage from "@/images/blaise.jpg";
import Image from "next/image";

const url = "https://www.course-api.com/images/tours/tour-1.jpeg";


function page({ params }: { params: { slug: string } }) {
  return (
    <div>
      <h1 className="text-3xl">Slug: {params.slug}</h1>

      <div className="flex gap-4">
        <div className="localImage">
          <Image
            src={testImage}
            alt="testLocalImage"
            width={192}
            height={192}
            priority
            className="w-48 h-48 rounded-xl object-cover mt-5"
          />

          <h2 className="text-2xl">Local Image</h2>
        </div>

        <div className="remoteImage">
          <Image
            src={url}
            alt="testRemoteImage"
            width={192}
            height={192}
            priority
            className="w-48 h-48 rounded-xl object-cover mt-5"
          />

          <h2 className="text-2xl">Remote Image</h2>
        </div>
      </div>
    </div>
  );
}
export default page;
