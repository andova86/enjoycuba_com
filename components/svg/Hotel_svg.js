import { useState, useEffect } from 'react';

function SvgComponent(props) {


  const [color, setColor] = useState(props.color)


  return (


    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 19.96 26.28"
      {...props}

      width={props.w}
      height={props.h}
      stroke={color}
      fill={'none'}




    >

      <title>{"Recurso 300"}</title>
      <g id="prefix__Capa_2" data-name="Capa 2">
        <g id="prefix__PC">
          <path
            className="prefix__cls-1"
            d="M4.44 19.46a1.41 1.41 0 011.41 1.41v4.91H3v-4.91a1.41 1.41 0 011.44-1.41zM15.71 19.46a1.41 1.41 0 011.41 1.41v4.91H14.3v-4.91a1.41 1.41 0 011.41-1.41z"
          />
          <path
            className="prefix__cls-1"
            d="M.5 3.95h18.96v21.83H.5zM3.6.5h12.77v3.45H3.6z"
          />
          <path
            className="prefix__cls-1"
            d="M10 19.46a2.25 2.25 0 00-2.23 2.27v4.05h4.45v-4.05A2.24 2.24 0 0010 19.46zM11.98 10.95v1.45M8.17 12.4v-1.45M11.98 6.82v1.33M8.17 8.15V6.82M15.78 12.4v-1.45M15.78 8.15V6.82M4.37 10.95v1.45M11.98 15.27v1.45M8.17 16.72v-1.45M15.78 16.72v-1.45M4.37 15.27v1.45M4.37 6.82v1.33M6.3 2.22h7.35"
          />
        </g>
      </g>
    </svg>
  )
}

export default SvgComponent