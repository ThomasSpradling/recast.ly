import { API_KEY, YOUTUBE_API_KEY } from '../config/config.js';

$.ajaxPrefilter(function (settings, _, jqXHR) {
  jqXHR.setRequestHeader('Authorization', API_KEY);
});

var getVideoDetails = (id, callback) => {
  // TODO
  // const server = `https://app-hrsei-api.herokuapp.com/api/recastly/videos?id=7lCDEYXw3mM&key=${YOUTUBE_API_KEY}
  //   &part=snippet,contentDetails,statistics,status`;

  // //&part=snippet,contentDetails,statistics,status
  // https://www.googleapis.com/youtube/v3/videos?id=7lCDEYXw3mM&key=YOUR_API_KEY
  //    &part=snippet,contentDetails,statistics,status
  const server = `https://app-hrsei-api.herokuapp.com/api/recastly/videos`;

  fetch(server, {
    method: 'GET',
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      q: query,
      key: YOUR_API_KEY
    })})
  .then(callback)
  .catch((error) => {
    console.error('Youtube query did not work!', error)
  });

  try {
    const data = await fetch(server, {
      method: 'GET',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        q: query,
        key: YOUR_API_KEY
      })})
      callback(data);
  } catch (e) {

  }


//   $.ajax(
//   {
//     url: server,
//     type: 'GET',
//     contentType: 'application/json',
//     // data: {
//     //   id: '7lCDEYXw3mM',
//     //   key: YOUTUBE_API_KEY,
//     //   part: 'snippet,contentDetails,statistics,status'
//     // },
//     success: callback,
//     error: function(error){
//       console.error('Youtube query did not work!', error)
//     }
//   });
// };

// $.ajax({
//   url: Parse.server,
//   type: 'GET',
//   data: { order: '-createdAt' },
//   contentType: 'application/json',
//   success: successCB,
//   error: errorCB || function(error) {
//     console.error('chatterbox: Failed to fetch messages', error);
//   }
// });
}

export default getVideoDetails;
