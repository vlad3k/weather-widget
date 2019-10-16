import React from "react";

const SvgPressure = props => (
  <svg data-name="Layer 1" viewBox="0 0 64 64" {...props}>
    <defs>
      <linearGradient
        gradientTransform="rotate(90 32 46)"
        gradientUnits="userSpaceOnUse"
        id="pressure_svg__a"
        x1={27.34}
        x2={38.68}
        y1={40.25}
        y2={54.24}
      >
        <stop offset={0.02} stopColor="#f7563c" />
        <stop offset={1} stopColor="#d43217" />
      </linearGradient>
    </defs>
    <circle cx={32} cy={46} r={12} fill="#0baeff" />
    <path
      stroke="#0baeff"
      strokeLinejoin="round"
      strokeWidth={12}
      fill="none"
      strokeLinecap="round"
      d="M32 13v33"
    />
    <path
      strokeMiterlimit={10}
      strokeWidth={6}
      stroke="#1441af"
      fill="none"
      strokeLinecap="round"
      d="M32 13v24"
    />
    <path
      stroke="#f7563c"
      strokeMiterlimit={10}
      strokeWidth={6}
      fill="none"
      strokeLinecap="round"
      d="M32 35v11"
    />
    <circle
      cx={32}
      cy={46}
      r={9}
      transform="rotate(-68.66 31.996 45.996)"
      fill="url(#pressure_svg__a)"
    />
  </svg>
);

export default SvgPressure;
