import * as React from 'react';

const SvgEditCrop = props => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    style={{
      color: '#242134',
      ...props.style,
    }}
  >
    <path
      d="M14 16H6a2 2 0 0 1-2-2V6H0V4h4V0h2v14h14v2h-4v4h-2v-4zm0-3V6H7V4h7a2 2 0 0 1 2 2v7h-2z"
      fill="currentColor"
    />
  </svg>
);

export default SvgEditCrop;
