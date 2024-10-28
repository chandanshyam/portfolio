import React, { useState, useEffect } from 'react';

const Age = () => {
  const [age, setAge] = useState();

  const tick = () => {
    const divisor = 1000 * 60 * 60 * 24 * 365.2421897; // ms in an average year
    const birthTime = new Date('1996-04-23T10:34:00');
    setAge(((Date.now() - birthTime) / divisor).toFixed(11));
  };

  useEffect(() => {
    const timer = setInterval(() => tick(), 25);
    return () => {
      clearInterval(timer);
    };
  }, []);
  return <>{age}</>;
};

const data = [
  {
    key: 'age',
    label: 'Current age',
    value: <Age />,
  },
  {
    key: 'hometown',
    label: 'HomeTown',
    value: 'Bangalore, India',
  },
  {
    key: 'location',
    label: 'Current city',
    value: 'Denver, CO',
  },
  {
    key: 'languages',
    label: 'Languages',
    value: 'Kannada, Hindi, English, Telugu',
  },
  {
    key: 'realLanguages',
    label: 'Real Languages',
    value: 'C, C++,  Java, Python, Matlab',
  },
];

export default data;
