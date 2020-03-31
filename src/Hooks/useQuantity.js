import { useState } from 'react';

export function useQuantity(defaultQuantity) {
  const [value, setValue] = useState(defaultQuantity || 1);

  const onChange = e => {
    // + changes string to number if possible
    if (!(+e.target.value >= 1)) {
      setValue(1);
      return;
    }
    setValue(+e.target.value);
  };

  return {
    value,
    setValue,
    onChange
  };
}
