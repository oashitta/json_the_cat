const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {

    if (error) {
      callback(error, null);
      return;
    }
  
    const data = JSON.parse(body);
    
    if (!breedName) {
      callback(null, "opps!! No search parameter provided.");
      return;
    } 

    if (data.length === 0) {
      callback(null, `Ooops!! it appears that ${breedName} does not exist in our database.!!!`);
    } else {
      let breed = data[0];
      callback(null, breed.description);  
    }
    return;
  });
};


module.exports = { fetchBreedDescription }
