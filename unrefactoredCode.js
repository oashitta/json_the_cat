const request = require('request');

const breedName = process.argv.slice(2)[0];

request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {

  if (error) {
    console.error('An error occurred', error);
    process.exit();
  }

  const data = JSON.parse(body);
  
  if (!breedName) {
    console.error("opps!! No search parameter provided.");
    process.exit();
  } 

  if (data.length === 0) {
    console.log(`Ooops!! it appears that ${breedName} does not exist in our database.!!!`);
    process.exit();
  } else {
    let breed = data[0];
    console.log(breed.description);  
  }

});

// .on('error', (err) => {
//   console.log("Error occurred:", err.message);
// });
