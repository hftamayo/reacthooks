import React from 'react';
import BackwardCounter from './BackwardCounter';
import ForwardCounter from './ForwardCounter';

function VerCustomHooks() {
  return (
    <React.Fragment>
      <ForwardCounter />
      <BackwardCounter />
    </React.Fragment>
  );
}

export default VerCustomHooks;