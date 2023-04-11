import VideoDetails from './VideoDetails.js';
import getVideoDetails from '../lib/getVideoDetails.js';
const { useState, useEffect } = React;

var VideoPlayer = ({ video }) => {
  const [videoDetails, setVideoDetails] = Object.keys(video).length !== 0 ? useState({}) : [undefined, undefined];
  let url;
  if (Object.keys(video).length !== 0) {
    url = `https://www.youtube.com/embed/${video.id.videoId}`;

    const debounce = _.debounce(function (id) {
      getVideoDetails(id, (data) => {
        console.log('video player', data);
        setVideoDetails(data);
      });
    }, 500);

    // useEffect(() => {
    //   debounce(video.id.videoId);
    // }, [video]);

  }

  return (Object.keys(video).length !== 0) ? (
    <div className="video-player">
      <div className="embed-responsive embed-responsive-16by9">
        {/* <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1" allowFullScreen></iframe> */}
        <iframe className="embed-responsive-item" src={url} allowFullScreen></iframe>
      </div>
      <VideoDetails video={video} videoDetails={videoDetails} />
    </div>
  ) : <div className="video-player"></div>;
}

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoPlayer.propTypes = {
  video: PropTypes.object,
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default VideoPlayer;
