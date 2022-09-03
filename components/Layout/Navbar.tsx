import Link from "next/link";

const Navbar = () => {
  return (
    <div className="navbar bg-base ">
      <div className="flex-1">
        <Link href="/">
          <a className="btn btn-ghost upper-case text-2xl ">Diogo Melim</a>
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal p-0">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/projects">Projects</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
