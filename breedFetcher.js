const request = require('request');

request('https://api.thecatapi.com/v1/breeds/search?q=sib', (error, response, body) => {
  // if (error){
  //   console.error(error);
  //   return
  // }
  console.log('error:', error); 
  console.log('statusCode:', response && response.statusCode); 
  // console.log('body:', body); 
  // console.log(typeof body)
  const data = JSON.parse(body);
  // console.log(data);
  // console.log(typeof data);
  const firstEntry = data[0];
  console.log(firstEntry.description);
});