const ArrowDown = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 800 800"
      height="100"
      width="200"
      className="animate-bounce"
    >
      <path
        fill="none"
        stroke="hsl(0, 0%, 100%)"
        strokeLinecap="square"
        strokeWidth="20"
        markerEnd="url(#SvgjsMarker1354)"
        d="M283 283L517 517"
        transform="rotate(45 385 363.787)"
      ></path>
      <defs>
        <marker
          id="SvgjsMarker1354"
          markerHeight="7.5"
          markerWidth="7.5"
          orient="auto"
          refX="3.75"
          refY="3.75"
          viewBox="0 0 7.5 7.5"
        >
          <path
            fill="hsl(0, 0%, 100%)"
            d="M0 7.5L2.5 3.75 0 0 7.5 3.75z"
          ></path>
        </marker>
      </defs>
    </svg>
  );
};

export default ArrowDown;
