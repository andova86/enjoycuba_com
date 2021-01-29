import * as React from "react"
import {useState} from "react";

function SvgComponent(props) {

   const [color, setColor] = useState(props.color)
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 34.43 18.05"
       width={props.w}
      height={props.h}
      stroke={color}
      fill={'none'}
      {...props}
    >
      <defs>

      </defs>
      <title>{"Recurso 298"}</title>
      <g id="prefix__Capa_2" data-name="Capa 2">
        <g id="prefix__PC">
          <path
            className="prefix__cls-1"
            d="M4.65 15.31h-2.5a1.66 1.66 0 01-1.06-.38"
          />
          <path
            className="prefix__cls-1"
            d="M1.09 14.93a1.67 1.67 0 01-.59-1.27V2.15A1.65 1.65 0 012.15.5h24c3.39 0 5.65 1.7 6.41 5.56.42 2.15 3 9.25-.15 9.25h-4.32M23.49 15.31H9.21"
          />
          <path
            className="prefix__cls-1"
            d="M6.86 17.55a2.24 2.24 0 10-2.24-2.24 2.24 2.24 0 002.24 2.24z"
          />
          <circle className="prefix__cls-2" cx={25.78} cy={15.31} r={2.24} />
          <path
            className="prefix__cls-2"
            d="M4.08.5h4.83v4.83H4.08zM8.91.5h4.83v4.83H8.91z"
          />
          <path className="prefix__cls-2" d="M13.73.5h4.83v4.83h-4.83z" />
          <path className="prefix__cls-2" d="M18.56.5h4.83v4.83h-4.83z" />
          <path
            className="prefix__cls-1"
            d="M23 5.33h2.14a2.9 2.9 0 012.76 1.94 7.14 7.14 0 005.95 4.34M29 2.72a4.56 4.56 0 011.83 2.74"
          />
          <path
            className="prefix__cls-1"
            d="M31.44 11s-.31 1.49.33 2a4.68 4.68 0 002.15.48"
          />
        </g>
      </g>
    </svg>
  )
}

export default SvgComponent