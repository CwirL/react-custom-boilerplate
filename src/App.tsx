import tsIcon from 'assets/images/typescript.png';
import React from 'react';
import './style.scss';

const App: React.FC = () => {
  return (
    <>
      <div className="title">React Custom </div>
      <img src={tsIcon} />
    </>
  );
};

export default App;
