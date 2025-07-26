import React, { useState, useEffect } from 'react';

const PriceCell = ({ price, previousPrice }) => {
  const [flash, setFlash] = useState('');
  
  useEffect(() => {
    if (previousPrice && price !== previousPrice) {
      setFlash(price > previousPrice ? 'price-flash' : 'price-flash-down');
      const timer = setTimeout(() => setFlash(''), 1000);
      return () => clearTimeout(timer);
    }
  }, [price, previousPrice]);

  return (
    <td className={flash}>
      ${price.toFixed(2)}
    </td>
  );
};

export default PriceCell;