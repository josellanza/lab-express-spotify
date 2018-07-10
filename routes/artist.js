const express = require('express');
const router = express.Router();
const SpotifyWebApi = require('spotify-web-api-node');

const clientId = '456b82e403914c6f85d795481c50c909';
const clientSecret = 'edfefe26f9a44cd19d13cdf1b7467ba3';

const spotifyApi = new SpotifyWebApi({
  clientId: clientId,
  clientSecret: clientSecret
});

spotifyApi.clientCredentialsGrant()
  .then((data) => {
    spotifyApi.setAccessToken(data.body['access_token']);
  }, (err) => {
    console.log('Something went wrong when retrieving an access token', err);
  });

/* GET home page. */
router.get('/', (req, res, next) => {
  const artistName = req.query.name;
  spotifyApi.searchArtists(artistName)
    .then(data => {
      console.log(data.body.artists.items.images);
      // ----> 'HERE WHAT WE WANT TO DO AFTER RECEIVING THE DATA FROM THE API'
      res.render('artist', {artist: data.body.artists.items});
    })
    .catch(err => {
      console.log(err);
      // throw err;
    });
});

module.exports = router;
