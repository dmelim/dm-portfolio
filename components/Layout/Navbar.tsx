import Link from "next/link";
import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();
  return (
    <div className="navbar bg-base place-content-center mt-5">
      <div className="flex-none">
        <ul className="menu menu-horizontal p-0">
          <li className={router.pathname == "/" ? " text-accent " : ""}>
            <Link href="/">
              <a className="upper-case text-2xl">Home</a>
            </Link>
          </li>
          <li className={router.pathname == "/projects" ? " text-accent " : ""}>
            <Link href="/projects">
              <a className="upper-case text-2xl">Projects</a>
            </Link>
          </li>
          <li className={router.pathname == "/about" ? " text-accent " : ""}>
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
