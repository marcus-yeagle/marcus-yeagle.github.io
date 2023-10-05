import React, { useEffect, useState } from 'react';

const UlamSpiral = () => {
  const [spiralType, setSpiralType] = useState('Twin Prime');
  const [spiral, setSpiral] = useState([[]]);

  useEffect(() => {
    const wh = [
      Math.floor(window.innerWidth / 25),
      Math.floor(window.innerHeight / 25),
    ];
    setSpiral(generateUlamSpiral(wh[0] > wh[1] ? wh[1] : wh[0]));

    window.addEventListener('resize', () => {
      const newWindowSize = [
        Math.floor(window.innerWidth / 25),
        Math.floor(window.innerHeight / 25),
      ];
      setSpiral(
        generateUlamSpiral(
          newWindowSize[0] > newWindowSize[1]
            ? newWindowSize[1]
            : newWindowSize[0]
        )
      );
    });
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
    if (spiralType === 'Prime') {
      return isPrime(val);
    }

    if (spiralType === 'Twin Prime') {
      return (
        (isPrime(val) && isPrime(val + 2)) || (isPrime(val) && isPrime(val - 2))
      );
    }

    if (spiralType === 'Even') {
      return val % 2 === 0;
    }

    if (spiralType === 'Odd') {
      return val % 2 !== 0;
    }
  };

  return (
    <div style={{ display: 'flex' }}>
      <div>
        {spiral.map((vrow) => (
          <div key={vrow} style={{ display: 'flex' }}>
            {vrow.map((v) => (
              <div
                key={v}
                style={{
                  border: '2px solid #000',
                  height: 20,
                  width: 20,
                  textAlign: 'center',
                  fontSize: '11px',
                  backgroundColor: dispatchSpiralType(v) ? 'blue' : 'white',
                  color: dispatchSpiralType(v) ? 'white' : 'black',
                }}
              >
                {v}
              </div>
            ))}
          </div>
        ))}
      </div>

      <div>
        <select
          defaultValue={'Twin Prime'}
          onChange={(e) => {
            setSpiralType(e.target.value);
            console.log(e.target.value);
          }}
        >
          <option>Even</option>
          <option>Odd</option>
          <option>Prime</option>
          <option>Twin Prime</option>
        </select>
      </div>
    </div>
  );
};

export default UlamSpiral;
