import React, { useEffect, useState } from 'react';

const UlamSpiral = () => {
  const [spiralType, setSpiralType] = useState('Prime');
  const [divByVal, setDivByVal] = useState(3);
  const [spiral, setSpiral] = useState([[]]);

  useEffect(() => {
    const f = 2;
    const wh = [
      Math.floor(window.innerWidth / f),
      Math.floor(window.innerHeight / f),
    ];
    setSpiral(generateUlamSpiral(wh[0] > wh[1] ? wh[1] : wh[0]));

    // window.addEventListener('resize', () => {
    //   const newWindowSize = [
    //     Math.floor(window.innerWidth / f),
    //     Math.floor(window.innerHeight / f),
    //   ];
    //   setSpiral(
    //     generateUlamSpiral(
    //       newWindowSize[0] > newWindowSize[1]
    //         ? newWindowSize[1]
    //         : newWindowSize[0]
    //     )
    //   );
    // });
  }, []);

  function generateUlamSpiral(size) {
    if (size <= 0) {
      throw new Error('Size must be a positive integer.');
    }
    const matrix = new Array(size).fill().map(() => new Array(size).fill(0));
    let num = size * size;
    let left = 0;
    let right = size - 1;
    let top = 0;
    let bottom = size - 1;

    while (left <= right && top <= bottom) {
      // Move left
      for (let i = right; i >= left; i--) {
        matrix[bottom][i] = num--;
      }
      bottom--;

      // Move up
      for (let i = bottom; i >= top; i--) {
        matrix[i][left] = num--;
      }
      left++;

      // Move right
      for (let i = left; i <= right; i++) {
        matrix[top][i] = num--;
      }
      top++;

      // Move down
      for (let i = top; i <= bottom; i++) {
        matrix[i][right] = num--;
      }
      right--;
    }

    return matrix;
  }

  const isPrime = (num) => {
    for (let i = 2, s = Math.sqrt(num); i <= s; i++) {
      if (num % i === 0) return false;
    }
    return num > 1;
  };

  const dispatchSpiralType = (val) => {
    return spiralType === 'Prime'
      ? isPrime(val)
      : spiralType === 'Twin Prime'
      ? (isPrime(val) && isPrime(val + 2)) || (isPrime(val) && isPrime(val - 2))
      : spiralType === 'Even'
      ? val % 2 === 0
      : spiralType === 'Odd'
      ? al % 2 !== 0
      : spiralType === 'Div By'
      ? val % divByVal === 0
      : spiralType === 'Off'
      ? false
      : true;
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column-reverse' }}>
      <div>
        {spiral.map((vrow) => (
          <div key={vrow} style={{ display: 'flex' }}>
            {vrow.map((v) => (
              <div
                key={v}
                style={{
                  // border: '1px solid #D3D3D3',
                  height: 2,
                  width: 2,
                  textAlign: 'center',
                  fontSize: '11px',
                  backgroundColor: dispatchSpiralType(v) ? 'blue' : '#f8f5d7',
                  color: dispatchSpiralType(v) ? 'white' : 'black',
                }}
              ></div>
            ))}
          </div>
        ))}
      </div>

      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          padding: '0.5rem',
        }}
      >
        <div>
          <select
            defaultValue={'Prime'}
            onChange={(e) => {
              setSpiralType(e.target.value);
            }}
          >
            <option>Off</option>
            <option>Even</option>
            <option>Odd</option>
            <option>Div By</option>
            <option>Prime</option>
            <option>Twin Prime</option>
          </select>
        </div>
        <div style={{ display: spiralType !== 'Div By' ? 'none' : 'block' }}>
          <input
            type="number"
            id="divByNum"
            name="divByNum"
            value={divByVal}
            onChange={(e) => {
              setDivByVal(e.target.value);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default UlamSpiral;
