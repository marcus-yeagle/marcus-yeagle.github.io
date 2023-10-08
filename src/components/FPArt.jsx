import React from 'react';

const Art = () => {
  function getPattern(color1, color2, width) {
    const scale = Math.sqrt(2) / 2;

    return width <= 20 ? (
      <rect x={0} y={0} width={width} height={width} fill={color1} />
    ) : (
      <>
        <rect x={0} y={0} width={width} height={width} fill={color1} />
        <g transform={`translate(${width / 2}) rotate(${1 * 45})`}>
          {getPattern(color2, color1, width * scale)}
        </g>
      </>
    );
  }

  return (
    <>
      <svg
        id="art"
        style={{
          border: '10px solid black',
          padding: '15px',
          backgroundColor: 'white',
        }}
        viewBox="0 0 100 100"
      >
        {getPattern('red', 'blue', 100)}
      </svg>
    </>
  );
};

export default Art;
