import * as React from "react"



function SvgComponent(props) {

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 36.73 17.49"
      width={props.w}
      height={props.h}
      stroke={props.color}
      fill={'none'}
      {...props}
    >
      <defs>
        <style>
          {".prefix__cls-1{fill:none;stroke-linejoin:round}"}
        </style>
      </defs>
      <title>{"Recurso 299"}</title>
      <g id="prefix__Capa_2" data-name="Capa 2">
        <g id="prefix__PC">
          <ellipse
            className="prefix__cls-1"
            cx={6.77}
            cy={13.74}
            rx={3.28}
            ry={3.25}
          />
          <ellipse
            className="prefix__cls-1"
            cx={30.08}
            cy={13.74}
            rx={3.28}
            ry={3.25}
          />
          <path
            className="prefix__cls-1"
            d="M33.35 13.74H34a2.32 2.32 0 001.85-.92 2.18 2.18 0 00.39-1.53 4.53 4.53 0 00-3.34-4.17l-5.29-1.59a2.58 2.58 0 01-.55-.32c-1-1-5-4.71-6.34-4.71H6.14a4.59 4.59 0 00-2.56.79 4.51 4.51 0 00-1.64 2.1l-.48 1.28A15.37 15.37 0 00.5 10v2.39a1.36 1.36 0 001.37 1.35h1.46M10.05 13.74h16.74"
          />
          <path
            className="prefix__cls-1"
            d="M27.29 5.43c-2.4-.17-12.81-.78-18.36-1.3-.77-.08-.7-2.22-.77-3.63"
          />
        </g>
      </g>
    </svg>
  )
}

export default SvgComponent
