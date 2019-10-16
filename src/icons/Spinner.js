import React from "react";

const SvgSpinner = props => (
  <svg
    width={200}
    height={200}
    viewBox="0 0 100 100"
    preserveAspectRatio="xMidYMid"
    className="spinner_svg__lds-eclipse"
    style={{
      background: "0 0"
    }}
    {...props}
  >
    <path
      d="M10.663 43.68a40 40 0 0078.99 12.665 40 42 9.11 01-78.99-12.665"
      fill="#fc4309"
    >
      <animateTransform
        attributeName="transform"
        type="rotate"
        calcMode="linear"
        values="0 50 51;360 50 51"
        keyTimes="0;1"
        dur="1s"
        begin="0s"
        repeatCount="indefinite"
      />
    </path>
  </svg>
);

export default SvgSpinner;
