import React, { useEffect } from 'react';
import tsIcon from 'assets/images/typescript.png';

const App: React.FC = () => {
  useEffect(() => {
    console.log('App did mount');
  }, []);

  return (
    <>
      <div className="hello">React Boilerplate </div>
      <img src={tsIcon} alt="" />
    </>
  );
};

export default App;
