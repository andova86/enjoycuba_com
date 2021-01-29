import * as React from "react"
import { useState, useEffect } from 'react';

function SvgComponent(props) {

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 25.13 24.55"

       width={props.w}
      height={props.h}
      stroke={props.color}
      fill={'none'}
      {...props}
    >
      <title>{"Recurso 296"}</title>
      <g  data-name="Capa 2">
        <path
          d="M8.24 1.65L1.91.87a1 1 0 00-.46 0 1.07 1.07 0 00-.4.23 1 1 0 00-.28.37A1.14 1.14 0 00.68 2v20.58a1.14 1.14 0 00.09.42 1 1 0 00.28.37 1.16 1.16 0 00.4.23 1.12 1.12 0 00.45 0l6.32-.83v-6.6l-1.39 1.91a1.24 1.24 0 01.17.37 1.63 1.63 0 01-.08 1.1 1.69 1.69 0 01-.73.82 1.22 1.22 0 01-1 .09h-.06a1.18 1.18 0 01-.64-.77 1.69 1.69 0 01.09-1.1 1.62 1.62 0 01.73-.83 1.18 1.18 0 011-.07l.1.05 1.81-2.37V1.65zm.54 12.7l2.42-4.43a1.74 1.74 0 010-2.09A1.15 1.15 0 0113 7.8a1.51 1.51 0 01.32.7l3-.18V.71l-7.56.94v12.7zm2.86-4.09a1.23 1.23 0 00.46.1 1.18 1.18 0 00.9-.47 1.58 1.58 0 00.34-.84l3-.18v15l-4.77-.63-2.79-.37V15.5l2.86-5.24zm5.25-2.07l2.37-.88v-.17a1.66 1.66 0 01.35-1 1.15 1.15 0 011.84 0 1.74 1.74 0 010 2.09 1.14 1.14 0 01-1.84 0 1.85 1.85 0 01-.21-.33l-2.51.92v15.02L23.5 23a1.08 1.08 0 00.95-1.09V2.62a1.11 1.11 0 00-.27-.73 1.13 1.13 0 00-.69-.36l-6.6-.82v7.48zM21 6.43a1.2 1.2 0 010 1.41.59.59 0 01-1 0 1 1 0 01-.2-.41 1.26 1.26 0 010-.28 1.11 1.11 0 01.2-.72.61.61 0 011 0zm-8.41 1.72a1.05 1.05 0 01.23.7 1.09 1.09 0 01-.23.7.59.59 0 01-1 0 1.15 1.15 0 01-.23-.7 1.11 1.11 0 01.23-.7.59.59 0 011 0zM6.47 18.6a1 1 0 01-.06.73 1.09 1.09 0 01-.48.55.65.65 0 01-.56.05.64.64 0 01-.37-.42 1.13 1.13 0 01.06-.74 1.11 1.11 0 01.49-.55.6.6 0 01.55 0 .45.45 0 01.17.11.67.67 0 01.17.31zm4-17.71l6.1-.76h.25l6.74.87A1.63 1.63 0 0125 2.62v19.25a1.66 1.66 0 01-.4 1.13 1.71 1.71 0 01-1 .55l-6.74.89h-.25l-7.96-1.07h-.28L2 24.21a1.51 1.51 0 01-.67 0 1.54 1.54 0 01-.61-.34 1.5 1.5 0 01-.42-.56 1.53 1.53 0 01-.14-.68V2a1.53 1.53 0 01.14-.68 1.59 1.59 0 01.38-.6 1.61 1.61 0 01.61-.34A1.58 1.58 0 012 .32l6.39.8h.28z"
          fillRule="evenodd"
        />
        <path d="M16.62 24.55h-.05l-7.93-1a1.13 1.13 0 00-.26 0L2 24.34a1.74 1.74 0 01-.72-.05 1.62 1.62 0 01-.68-.38 1.64 1.64 0 01-.45-.6 1.63 1.63 0 01-.15-.73V2a1.77 1.77 0 01.15-.73A1.76 1.76 0 01.6.63a1.64 1.64 0 01.65-.37A1.54 1.54 0 012 .2l6.39.8a1 1 0 00.24 0l7.93-1a.58.58 0 01.18 0h.1l6.73.84a1.79 1.79 0 011.56 1.76v19.27a1.78 1.78 0 01-1.54 1.76l-6.74.89h-.13zm-8.11-1.31h.16l7.93 1.06h.22l6.73-.89a1.5 1.5 0 00.95-.5 1.56 1.56 0 00.38-1V2.62a1.56 1.56 0 00-.38-1 1.61 1.61 0 00-1-.5L16.81.27h-.19l-8 1a1.5 1.5 0 01-.3 0L2 .44a1.39 1.39 0 00-.68.06 1.35 1.35 0 00-.55.32 1.48 1.48 0 00-.39.51A1.45 1.45 0 00.25 2v20.58a1.45 1.45 0 00.13.63 1.54 1.54 0 001 .83 1.41 1.41 0 00.64.05l6.38-.84zm8.26.74V8.69l2.7-1 .05.1a1.08 1.08 0 00.19.31 1 1 0 00.82.42 1.06 1.06 0 00.82-.42 1.58 1.58 0 000-1.93 1.06 1.06 0 00-.82-.42 1 1 0 00-.82.42 1.54 1.54 0 00-.33 1 .86.86 0 000 .16v.1h-.09l-2.54.94V.57l6.74.84a1.23 1.23 0 01.76.4 1.2 1.2 0 01.31.81v19.25a1.25 1.25 0 01-.3.81 1.27 1.27 0 01-.77.41zM17 8.86v14.83l6.46-.85a1 1 0 00.85-1V2.62a1 1 0 00-.22-.62 1 1 0 00-.62-.32L17 .85V8l2.11-.78v-.08a1.85 1.85 0 01.4-1.14 1.31 1.31 0 011-.51 1.27 1.27 0 011 .51 1.8 1.8 0 01.39 1.13 1.75 1.75 0 01-.39 1.12 1.27 1.27 0 01-1 .51 1.31 1.31 0 01-1-.51 2.33 2.33 0 01-.17-.25zM16.47 24l-7.81-1v-7.56l2.92-5.34h.1a1 1 0 001.23-.32 1.54 1.54 0 00.33-.78v-.1h.11l3.11-.18zm-7.56-1.27l7.31 1V9l-2.75.16a1.71 1.71 0 01-.35.8 1.26 1.26 0 01-1.42.44l-2.79 5.13zm-7.15 1.08a1.13 1.13 0 01-.32 0A1.16 1.16 0 011 23.5a1.09 1.09 0 01-.31-.41 1.19 1.19 0 01-.11-.51V2a1.19 1.19 0 01.1-.51A1.24 1.24 0 011 1a1.29 1.29 0 01.41-.22 1.28 1.28 0 01.52 0l6.43.8v13.8l-1.9 2.49-.09-.05h-.08a1.07 1.07 0 00-.92.06 1.52 1.52 0 00-.68.77 1.54 1.54 0 00-.08 1 1.07 1.07 0 00.57.7h.05a1.07 1.07 0 00.9-.08 1.48 1.48 0 00.67-.76 1.51 1.51 0 00.07-1 1.66 1.66 0 00-.15-.33l-.05-.07 1.68-2.21V23h-.1l-6.31.84zM1.76 1a.77.77 0 00-.27 0 1 1 0 00-.36.21 1 1 0 00-.25.32A1.07 1.07 0 00.8 2v20.58a1.11 1.11 0 00.08.42 1 1 0 00.25.32 1 1 0 00.36.21.94.94 0 00.38 0l6.21-.82v-6.1L7 18.09a1.15 1.15 0 01.14.32A1.76 1.76 0 017 19.6a1.73 1.73 0 01-.78.86 1.26 1.26 0 01-1.1.09h-.07a1.29 1.29 0 01-.7-.85 1.79 1.79 0 01.09-1.18 1.86 1.86 0 01.79-.89 1.29 1.29 0 011.13-.07l1.75-2.26V1.76L1.9 1zm3.83 19.11a.66.66 0 01-.27-.06.76.76 0 01-.4-.5 1.3 1.3 0 01.08-.83 1.22 1.22 0 01.55-.61.78.78 0 01.66-.06.57.57 0 01.18.12v.06a.93.93 0 01.17.33 1.17 1.17 0 010 .8A1.32 1.32 0 016 20a.86.86 0 01-.41.11zm-.15-.28a.51.51 0 00.43 0 1 1 0 00.42-.48 1 1 0 000-.66.56.56 0 00-.12-.23h-.06l-.1-.06a.49.49 0 00-.45 0 1 1 0 00-.42.49.93.93 0 00-.06.65.51.51 0 00.28.35zm3.22-5V1.54l7.81-1v7.9l-3.23.19v-.11a1.46 1.46 0 00-.3-.64 1 1 0 00-.82-.42 1.06 1.06 0 00-.82.42 1.54 1.54 0 00-.33 1 1.56 1.56 0 00.33 1l.07.09v.07zm.25-13.07v12.1l2.14-3.93a1.83 1.83 0 01-.35-1.08 1.85 1.85 0 01.38-1.13 1.28 1.28 0 012 0 1.72 1.72 0 01.32.65l2.78-.16V.85zm3.19 8.17a.75.75 0 01-.59-.3 1.28 1.28 0 01-.26-.78 1.26 1.26 0 01.26-.78.74.74 0 011.18 0 1.2 1.2 0 01.26.78 1.24 1.24 0 01-.26.78.75.75 0 01-.59.3zm0-1.93a.53.53 0 00-.39.21 1 1 0 00-.21.63 1 1 0 00.21.62.48.48 0 00.79 0 1 1 0 00.2-.62 1 1 0 00-.2-.63.53.53 0 00-.4-.21zm8.43.21a.78.78 0 01-.59-.3 1.3 1.3 0 010-1.56.74.74 0 011.18 0 1.22 1.22 0 01.26.78 1.24 1.24 0 01-.26.78.78.78 0 01-.59.31zm0-1.92a.55.55 0 00-.4.21 1 1 0 00-.2.63 1.07 1.07 0 000 .25.84.84 0 00.17.37.49.49 0 00.79 0 1 1 0 00.21-.62 1 1 0 00-.21-.63.53.53 0 00-.36-.2z" />
      </g>
    </svg>
  )
}

export default SvgComponent
