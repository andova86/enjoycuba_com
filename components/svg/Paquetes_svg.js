import * as React from "react"
import {useState} from 'react';


function SvgComponent(props) {
     const [color, setColor] = useState(props.color)
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 17.43 29.78"

       width={props.w}
      height={props.h}
      stroke={color}
      fill={'none'}
      {...props}
    >


      <title>{"Recurso 297"}</title>
      <g id="prefix__Capa_2" data-name="Capa 2">
        <g id="prefix__PC">
          <path
            className="prefix__cls-1"
            d="M14 27.32H3.48A3.48 3.48 0 010 23.84v-15a3.49 3.49 0 013.48-3.51H14a3.49 3.49 0 013.48 3.49v15a3.48 3.48 0 01-3.48 3.5zM3.48 6.06A2.76 2.76 0 00.72 8.82v15a2.77 2.77 0 002.76 2.78H14a2.77 2.77 0 002.76-2.76v-15A2.76 2.76 0 0014 6.06z"
          />
          <path
            className="prefix__cls-1"
            d="M11.75 6.08H5.68V0h6.07zm-5.31-.76H11V.76H6.44zM3.21 26.96h1.9v2.66h-1.9z"
          />
          <path
            className="prefix__cls-1"
            d="M5.27 29.78H3.05v-3h2.22zm-1.9-.32H5v-2.34H3.37zM12.32 26.96h1.9v2.66h-1.9z"
          />
          <path
            className="prefix__cls-1"
            d="M14.38 29.78h-2.22v-3h2.22zm-1.9-.32h1.58v-2.34h-1.58zM5.68 0h6.08v1.52H5.68zM8.71 24.85a6 6 0 116-6 6 6 0 01-6 6zm0-11.32A5.29 5.29 0 1014 18.82a5.29 5.29 0 00-5.29-5.29z"
          />
          <path
            className="prefix__cls-1"
            d="M8.71 24.85c-1.83 0-3.27-2.65-3.27-6s1.44-6 3.27-6 3.28 2.65 3.28 6-1.44 6-3.28 6zm0-11.32c-1.36 0-2.52 2.42-2.52 5.29s1.16 5.28 2.52 5.28 2.53-2.42 2.53-5.28-1.16-5.29-2.53-5.29z"
          />
          <path className="prefix__cls-1" d="M8.34 13.16h.75v11.32h-.75z" />
          <path className="prefix__cls-1" d="M3.06 18.44h11.32v.75H3.06z" />
        </g>
      </g>
    </svg>
  )
}

export default SvgComponent