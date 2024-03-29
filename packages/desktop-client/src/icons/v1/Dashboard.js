import * as React from 'react';

const SvgDashboard = props => (
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
      d="M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm-5.6-4.29a9.95 9.95 0 0 1 11.2 0 8 8 0 1 0-11.2 0zm6.12-7.64 3.02-3.02 1.41 1.41-3.02 3.02a2 2 0 1 1-1.41-1.41z"
      fill="currentColor"
    />
  </svg>
);

export default SvgDashboard;
