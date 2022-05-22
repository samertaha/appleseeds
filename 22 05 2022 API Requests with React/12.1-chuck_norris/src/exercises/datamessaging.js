import React, { useEffect, useState } from 'react';
import data from './data';

function Names({ names }) {
  return (
    <div>
      all names from Names component :
      {names.map((name, index) => {
        return <h3 key={index}>{name}</h3>;
      })}
    </div>
  );
}
function Cards({ data }) {
  return (
    <div>
      data Cards :
      {data.map((obj, index) => {
        return (
          <div key={index} style={{ border: '1px solid', width: '30rem' }}>
            <h3>{obj.name}</h3>
            <h3>{obj.birthday}</h3>
            meats:
            {obj.favoriteFoods.meats.map((meat, index) => (
              <h5 key={index}>{meat}</h5>
            ))}
            fishes:
            {obj.favoriteFoods.fish.map((fish, index) => (
              <h5 key={index}>{fish}</h5>
            ))}
          </div>
        );
      })}
    </div>
  );
}
function DataMessaging() {
  const [state, setState] = useState({
    data: [],
    b41990: [],
  });

  useEffect(() => {
    setState({ data: data, b41990: getB41990(data) });
  }, []);

  const getNamesArray = (data) => {
    return data.map((obj) => obj.name);
  };
  const getB41990 = (data) => {
    return data.filter(
      (obj) => Date.parse(obj.birthday) < Date.parse('1-1-1990')
    );
  };

  return (
    <div className='container'>
      all names :
      {getNamesArray(state.data).map((name, index) => {
        return <h3 key={index}>{name}</h3>;
      })}
      born before 1990:
      {getB41990(state.data).map((obj, index) => {
        return (
          <h3 key={index}>
            {obj.name} {obj.birthday}
          </h3>
        );
      })}
      <Names names={getNamesArray(state.data)} />
      <Cards data={state.data} />
    </div>
  );
}

export default DataMessaging;
