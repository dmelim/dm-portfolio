import { useRouter } from "next/router";
const Code = () => {
  const router = useRouter();

  return (
    <div className=" grid place-items-center">
      <div className="indicator">
        <div className="indicator-item indicator-bottom ">
          <button
            className="btn btn-primary text-white"
            onClick={() => {
              router.push("/projects");
            }}
          >
            projects
          </button>
        </div>
        <div
          className="mockup-code w-11 mx-auto animate-pulse"
          onClick={() => {
            router.push("/projects");
          }}
        >
          <pre data-prefix="$">
            <code>cd /projects</code>
          </pre>
        </div>
      </div>
    </div>
  );
};

export default Code;
