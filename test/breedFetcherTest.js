const { fetchBreedDescription } = require('../breedFetcher');
// const breedName = require('./breedName');
const { assert } = require('chai');

describe('fetchBreedDescription', () => {
  it('returns a string description for a valid breed, via callback', (done) => {
    fetchBreedDescription('Siberian', (err, desc) => {
      // we expect no error for this scenario
      assert.equal(err, null);

      const expectedDesc = "The Siberians dog like temperament and affection makes the ideal lap cat and will live quite happily indoors. Very agile and powerful, the Siberian cat can easily leap and reach high places, including the tops of refrigerators and even doors.";

      // compare returned description
      assert.equal(expectedDesc, desc.trim());

      done();
    });
  });

  it(`returns Ooops!! it appears that nonexistent does not exist in our database!!!`, () => {
    fetchBreedDescription('nonexistent', (err, desc) =>{
      // assert.equal(desc, null);
      assert.equal(desc, 'Ooops!! it appears that nonexistent does not exist in our database!!!');
      
    });
  });
});