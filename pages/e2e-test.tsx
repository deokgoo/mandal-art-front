import type { NextPage } from 'next';
import { useState } from 'react';
const E2ETest: NextPage = () => {
  const [text, setText] = useState('');
  // [Handler] Click Button
  const clickHandler = () => setText('button clicked!');

  return (
    <div>
      <span>{text}</span>
      <button id='e2e-test' onClick={clickHandler}>button</button>
    </div>
  )
}

export default E2ETest;
