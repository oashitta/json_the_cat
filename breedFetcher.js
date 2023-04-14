const request = require('request');

const breedName = process.argv.slice(2)[0];

request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
  if (error) {
    console.error('An error occurred', error);
    return;
  }
  // console.log('error:', error);
  console.log('statusCode:', response && response.statusCode);
  // console.log('body:', body);
  // console.log(typeof body)
  const data = JSON.parse(body);
  // console.log(data);
  // // console.log(typeof data);

  if (!breedName) {
    console.error("opps!! No search parameter provided.");
    // console.log("opps!! No search parameter provided.");
    process.exit();
  }

  let result;

  for (let i = 0; i < data.length; i++) {
    if (data[i].name === breedName) {
      // console.log("found");
      result = data[i];
    }
    console.log(breedName);
    console.log(data[i].name);
  }

  // console.log(result);

  if (result) {
    console.log(result.description);
  }

  if (!result) {
    console.log(`Ooops!! it appears that ${breedName} does not exist in our database.!!!`);
  }

  if (!breedName) {
    console.error("opps!! No search parameter provided.");
    // console.log("opps!! No search parameter provided.");
    process.exit();
  }
});