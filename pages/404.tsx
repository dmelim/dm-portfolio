import Link from "next/link";

const page404 = () => {
  return (
    <div className="grid content-center justify-items-center">
      <p className="text-center font-semibold text-4xl lg:text-7xl mt-40 mb-10">
        <span className="text-accent">404 |</span> Page not found
      </p>
      <button className="btn btn-primary text-white">
        <Link href="/">Return Home</Link>
      </button>
    </div>
  );
};

export default page404;
