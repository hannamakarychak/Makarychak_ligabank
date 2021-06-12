import React from 'react';

import './logo.scss';

export const Logo = ({ className }) => {
  return (
    <div className={className}>
      <svg
        className="logo__icon"
        width="30"
        height="27"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M16.75 1h-2.917L1 22.341h3.792l1.75-3.048L16.75 1z" fill="#2C36F2" />
        <path
          d="M2.75 26h24.5L16.75 7.098 15 10.146l5.25 9.147L22 22.342H1L2.75 26z"
          fill="#2C36F2"
        />
        <path d="M22 22.341l-1.75-3.048H6.542l-1.75 3.049H22z" fill="#2C36F2" />
        <path
          d="M27.25 26L29 22.341 16.75 1 6.542 19.293H9.75L15 10.146l1.75-3.048L27.25 26z"
          fill="#2C36F2"
        />
        <path d="M15 10.146l-5.25 9.147h10.5L15 10.146z" fill="#2C36F2" />
        <path
          d="M27.25 26H2.75L1 22.341M27.25 26L29 22.341 16.75 1m10.5 25L16.75 7.098 15 10.146M16.75 1h-2.917L1 22.341M16.75 1L6.542 19.293M1 22.342h3.792M15 10.146l-5.25 9.147M15 10.146l5.25 9.147m-10.5 0h10.5m-10.5 0H6.542m13.708 0L22 22.342H4.792m1.75-3.05l-1.75 3.05"
          stroke="#F6F7FF"
        />
      </svg>
      <svg
        className="logo__text"
        width="112"
        height="16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M13.1 15h-3.02V3.24h-3.5l-.26 2c-.08.72-.173 1.453-.28 2.2a66.245 66.245 0 01-.3 2.1 39.205 39.205 0 01-.32 1.74c-.173.827-.407 1.533-.7 2.12-.28.587-.673 1.033-1.18 1.34-.493.307-1.14.46-1.94.46-.52 0-1-.073-1.44-.22V12.5c.173.053.34.1.5.14.173.04.36.06.56.06.387 0 .68-.2.88-.6.213-.413.427-1.18.64-2.3.08-.427.193-1.093.34-2 .147-.907.307-1.967.48-3.18.187-1.227.36-2.527.52-3.9h9.02V15zM16.702.72h2.72v6.9c0 .333-.006.707-.02 1.12l-.04 1.22c-.013.387-.026.727-.04 1.02-.013.28-.026.473-.04.58h.06l6.6-10.84h3.62V15h-2.7V8.14c0-.36.007-.753.02-1.18l.04-1.26c.027-.4.047-.747.06-1.04.027-.307.047-.507.06-.6h-.08L20.342 15h-3.64V.72zm25.485 0v2.5h-6V15h-3.02V.72h9.02zM51.712 15l-1.04-3.4h-5.2l-1.04 3.4h-3.26L46.212.66h3.7L54.972 15h-3.26zm-1.76-5.94l-1.04-3.32a76.767 76.767 0 00-.26-.86c-.107-.347-.214-.7-.32-1.06-.107-.36-.194-.673-.26-.94-.067.267-.16.6-.28 1-.107.387-.214.76-.32 1.12-.093.347-.167.593-.22.74l-1.02 3.32h3.72zM62.503 15V.72h9.02v2.5h-6V6.2h1.2c1.347 0 2.447.187 3.3.56.867.373 1.507.887 1.92 1.54.413.653.62 1.4.62 2.24 0 1.413-.473 2.513-1.42 3.3-.933.773-2.427 1.16-4.48 1.16h-4.16zm3.02-2.48h1.02c.92 0 1.64-.147 2.16-.44.534-.293.8-.807.8-1.54 0-.76-.287-1.26-.86-1.5s-1.353-.36-2.34-.36h-.78v3.84zm13.974-8.66c1.467 0 2.587.32 3.36.96.787.627 1.18 1.593 1.18 2.9V15h-2.08l-.58-1.48h-.08c-.467.587-.96 1.013-1.48 1.28-.52.267-1.233.4-2.14.4-.973 0-1.78-.28-2.42-.84-.64-.573-.96-1.447-.96-2.62 0-1.16.407-2.013 1.22-2.56.813-.56 2.033-.867 3.66-.92l1.9-.06v-.48c0-.573-.153-.993-.46-1.26-.293-.267-.707-.4-1.24-.4a5.15 5.15 0 00-1.56.24 11.67 11.67 0 00-1.52.56l-.98-2.02a8.587 8.587 0 011.94-.72 9.538 9.538 0 012.24-.26zm1.58 6.08l-1.16.04c-.96.027-1.627.2-2 .52s-.56.74-.56 1.26c0 .453.133.78.4.98.267.187.613.28 1.04.28.64 0 1.18-.187 1.62-.56.44-.387.66-.927.66-1.62v-.9zm8.99-5.86v4.2h4.16v-4.2h2.98V15h-2.98v-4.5h-4.16V15h-2.98V4.08h2.98zm17.423 0h3.28l-4.32 5.24 4.7 5.68h-3.38l-4.46-5.54V15h-2.98V4.08h2.98v5.3l4.18-5.3z"
          fill="#1F1E25"
        />
      </svg>
    </div>
  );
};
