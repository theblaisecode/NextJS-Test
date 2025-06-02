import Link from "next/link";

type Navigation = {
  id: number;
  href: string;
  ariaLabel: string;
  pageName: string;
};

const navLinks: Navigation[] = [
  {
    id: 1,
    href: "/",
    ariaLabel: "Link to Home Page",
    pageName: "Home",
  },
  {
    id: 2,
    href: "/counter",
    ariaLabel: "Link to Counter Page",
    pageName: "Counter",
  },
  {
    id: 3,
    href: "/tours",
    ariaLabel: "Link to Tours Page",
    pageName: "Tours",
  },
  {
    id: 4,
    href: "/actions",
    ariaLabel: "Link to Actions Page",
    pageName: "Actions",
  },
];

function Navbar() {
  return (
    <nav className="max-w-3xl mx-auto py-4 flex gap-x-4 border-b-2">
      {navLinks.map((items) => {
        const { id, href, ariaLabel, pageName }: Navigation = items;

        return (
          <Link key={id} href={href} aria-label={ariaLabel}>
            {pageName}
          </Link>
        );
      })}
    </nav>
  );
}

export default Navbar;
