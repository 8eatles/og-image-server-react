import React, { useEffect } from 'react';
import './app.css';

export default () => {
  useEffect(() => {
    console.log('Effect');
  }, []);

  return (
    <div>
      <img
        src="http://127.0.0.1:8080/uploads/images/2020-02-20/image-1582203849916.png"
        alt="react"
      />
    </div>
  );
};
