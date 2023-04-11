import { API_KEY, YOUTUBE_API_KEY } from '../config/config.js';

$.ajaxPrefilter(function (settings, _, jqXHR) {
  jqXHR.setRequestHeader('Authorization', API_KEY);
});

var searchYouTube = (query, callback) => {
  // TODO
  const server = `https://app-hrsei-api.herokuapp.com/api/recastly/videos?q=${query}&key=${YOUTUBE_API_KEY}`;

  // fetch(server, {
  //   method: 'GET',
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  // })
  // .then((res)=> {
  //   console.log(res);
  //   return res.json()
  // })
  // .then(data => callback(data))
  // .catch((error) => {
  //   console.error('Youtube query did not work!', error)
  // });


  $.ajax(
  {
    url: server,
    type: 'GET',
    contentType: 'application/json',
    success: callback,
    error: function(error){
      console.error('Youtube query did not work!', error)
    }
  });
};

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

export default searchYouTube;
