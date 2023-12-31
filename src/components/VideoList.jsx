import VideoListEntry from './VideoListEntry.js';

var VideoList = ({ videos, onChangeCurrentVideo }) => {
  return videos.length !== 0 ? (
    <div className="video-list">
      {
        videos.map((video, i) => {
          return <VideoListEntry key={i} video={ video } onChangeCurrentVideo={ onChangeCurrentVideo } />
        })
      }
    </div>
  ) : <div className="video-list"></div>;
};


// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoList.propTypes = {
  videos: PropTypes.array.isRequired,
};

// In the ES6 spec, files are "modules" and do not share a top-level scope.
// `var` declarations will only exist globally where explicitly defined.
export default VideoList;
