import Link from "next/link";

type NavMenu = {
  id: number;
  url: string;
  ariaLabel: string;
  title: string;
};

const navLinks: NavMenu[] = [
  {
    id: 1,
    url: "/",
    ariaLabel: "Link to Home Page",
    title: "Home",
  },
  {
    id: 2,
    url: "/counter",
    ariaLabel: "Link to Counter Page",
    title: "Counter",
  },
  {
    id: 3,
    url: "/tours",
    ariaLabel: "Link to Tours Page",
    title: "Tours",
  },
  {
    id: 4,
    url: "/actions",
    ariaLabel: "Link to Actions Page",
    title: "Actions",
  },
];

function Navbar() {
  return (
    <nav className="pt-6">
      <div className="border-b-2 mb-6 py-4 max-w-3xl mx-auto">
        {navLinks.map((links) => {
          const { id, url, ariaLabel, title }: NavMenu = links;

          return (
            <Link key={id} href={url} aria-label={ariaLabel} className="pr-5">
              {title}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
export default Navbar;
