import React, { useEffect } from 'react'

const FetCountry = () => {

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/name/argentina')
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>FetCountry</div>
  );
}

export default FetCountry;
