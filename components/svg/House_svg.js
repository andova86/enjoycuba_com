import { useState, useEffect } from 'react';

function SvgComponent(props) {

    const [color, setColor] = useState(props.color)


    return (
        <svg xmlns="http://www.w3.org/2000/svg"
             viewBox="0 0 29.49 22"
             width={props.w}
      height={props.h}
      stroke={color}
      fill={'none'}

             {...props}

        >
            <title>{"Recurso 294"}</title>
            <path
                d="M28.73 9.69L15.78.82a1.82 1.82 0 00-2.07 0L.76 9.69a.6.6 0 00.34 1.09H5v10a.76.76 0 00.76.76h5.44a.76.76 0 00.76-.76V15.4a.76.76 0 01.76-.76h4.08a.76.76 0 01.76.76v5.34a.76.76 0 00.76.76h5.44a.76.76 0 00.76-.76v-10h3.87a.6.6 0 00.34-1.05z"
                fill="none"

                strokeLinejoin="round"
                data-name="Capa 2"
            />
        </svg>
    )
}

export default SvgComponent