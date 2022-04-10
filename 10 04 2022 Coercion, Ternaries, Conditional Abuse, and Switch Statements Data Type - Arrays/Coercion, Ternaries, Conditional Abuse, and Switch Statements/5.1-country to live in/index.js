const countryToLiveIn = function (language, isIsland, population, country) {
  const mycountry = {
    language: 'hebrew',
    island: false,
    population: 10,
    country: 'israel',
  };
  const argCountry = {
    language: language,
    isIsland: isIsland,
    population: population,
    country: country,
  };
  //   console.log(argCountry);
  if (JSON.stringify(mycountry) === JSON.stringify(argCountry))
    console.log(`You should live in ${argCountry.country}`);
  else console.log(`${argCountry.country} does not meet your criteria`);
  return false;
};
countryToLiveIn('english', false, 50, 'cybrus');
