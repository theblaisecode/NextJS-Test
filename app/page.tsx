import Link from "next/link";

function HomePage() {
  return (
    <div>
      <h1 className="text-7xl">Home Page</h1>

      <Link href="/about" className="text-xl text-blue-500 block mt-8">
        About Page
      </Link>

      <Link href="/info" className="text-xl text-blue-500 block mt-8">
        Info Page
      </Link>

      <Link href="/info/contact" className="text-xl text-blue-500 block mt-8">
        Contact Page
      </Link>
    </div>
  );
}

export default HomePage;
