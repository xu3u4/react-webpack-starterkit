import React, { useState } from 'react';

import DisplayNum from './display_num';
import Button from './button';

const CountupBlock = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="countup">
      <DisplayNum
        number={count}
        highlightClass={count % 5 ? 'plain' : 'highlight'}
      />
      <Button onClick={() => setCount(count + 1)}>
        Click
      </Button>
    </div>
  );
};

export default CountupBlock;
