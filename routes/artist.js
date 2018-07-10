const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  const artistName = req.query.name;
  spotifyApi.searchArtists(artistName)
    .then(data => {
      // ----> 'HERE WHAT WE WANT TO DO AFTER RECEIVING THE DATA FROM THE API'
    })
    .catch(err => {
      // ----> 'HERE WE CAPTURE THE ERROR'
    });

  res.render('artist', {artistName: artistName});
});

module.exports = router;
