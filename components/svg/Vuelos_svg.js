import * as React from "react"
import {useState} from 'react';

function SvgComponent(props) {
   const [color, setColor] = useState(props.color)
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 36.72 29.71"
      width={props.w}
      height={props.h}
      stroke={color}
      fill={'none'}
      {...props}
    >
      <defs>

      </defs>
      <title>{"Recurso 295"}</title>
      <g id="prefix__Capa_2" data-name="Capa 2">
        <g id="prefix__PC">
          <path
            className="prefix__cls-1"
            d="M23 11.54h9.44a.77.77 0 01.5.18l3 2.45a.81.81 0 01.29.62v.81a.79.79 0 01-.79.8H6.83a3.89 3.89 0 01-3.48-2.15L.59 8.72a.79.79 0 01.71-1.15h1.85a.8.8 0 01.63.3l2.61 3.36a.79.79 0 00.63.31h9.1M16.57 13.31l-1.1-4.42M20.32 6.24L17.45.5H13.7l1.29 5.74M23.86 13.31l-2.21-4.42M15.63 20.59l.94-4.19M20.43 23.24l-2.98 5.97H13.7l1.32-5.97M23.86 16.4l-2.1 4.19"
          />
          <path
            className="prefix__cls-1"
            d="M23.19 8.89h-8.83A1.32 1.32 0 0113 7.57a1.32 1.32 0 011.32-1.33h8.83zM14.36 20.59h8.84v2.65h-8.84A1.32 1.32 0 0113 21.92a1.32 1.32 0 011.32-1.32zM23.86 13.31l-7.23.06"
          />
        </g>
      </g>
    </svg>
  )
}

export default SvgComponent
