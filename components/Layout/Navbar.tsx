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
            <Link href="/">
              <a className="upper-case text-2xl">Home</a>
            </Link>
          </li>
          <li>
            <Link href="/projects">
              <a className="upper-case text-2xl">Projects</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a className="upper-case text-2xl">About</a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
