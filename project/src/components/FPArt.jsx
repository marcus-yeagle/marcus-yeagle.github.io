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

  function basicTile(width, height, { color, tileIndex, label = false }) {
    return [
      <rect width={width} height={height} stroke="black" fill="orange" />,
      <text x={2} y={15} style="font: bold 12px monospace">
        {tileIndex}
      </text>,
      { color, tileIndex: tileIndex + 1, label },
    ];
  }

  function getTiles(width, height, cols, rows, makeTile, data) {
    if (width === 0 || height === 0) {
      return <></>;
    }
    const [colWidth, rowHeight] = [width / cols, height / rows];
    const [thisTile, newData] = makeTile(colWidth, rowHeight, data);

    return (
      <>
        {thisTile}
        {cols > 1 ? (
          // rest of this row to the right of this tile
          <g transform={`translate(${colWidth}, 0)`}>
            {getTiles(
              width - colWidth,
              rowHeight,
              cols - 1,
              1,
              makeTile,
              newData
            )}
          </g>
        ) : (
          <></>
        )}
        {rows > 1 ? (
          // rows below this one
          <g transform={`translate(0, ${rowHeight})`}>
            {getTiles(width, height - rowHeight, cols, rows - 1, makeTile, {
              ...newData,
              tileIndex: newData.tileIndex + cols - 1,
            })}
          </g>
        ) : (
          <></>
        )}
      </>
    );
  }

  function checkerTile(width, height, { colors, colorIndex }) {
    return [
      <rect
        x={0}
        y={0}
        width={width}
        height={height}
        fill={colors[colorIndex]}
      />,
      { colors, colorIndex: (colorIndex + 1) % colors.length },
    ];
  }

  return (
    <>
      <div>
        <div>
          <svg
            id="art"
            style={{
              border: '10px solid black',
              padding: '15px',
              backgroundColor: 'white',
            }}
            width={500}
            height={500}
            viewBox="0 0 100 100"
          >
            {getPattern('red', 'blue', 100)}
          </svg>
        </div>
        <div>
          <svg
            id="art"
            style={{
              border: '10px solid black',
              padding: '15px',
              backgroundColor: 'white',
            }}
            width={500}
            height={500}
            viewBox="0 0 100 100"
          >
            {getTiles(100, 100, 5, 5, basicTile, {
              color: 'orange',
              tileIndex: 0,
              label: false, // set to true to check that each tile gets a different tileIndex
            })}
          </svg>
        </div>
        <div>
          <svg
            id="art"
            style={{
              border: '10px solid black',
              padding: '30px',
              backgroundColor: 'white',
            }}
            width={500}
            height={500}
            viewBox="0 0 100 100"
          >
            {getTiles(100, 100, 5, 5, checkerTile, {
              colors: ['black', 'white'],
              colorIndex: 0,
            })}
          </svg>
        </div>
      </div>
    </>
  );
};

export default Art;
