const { useState } = React;

import exampleVideoData from '../data/exampleVideoData.js'
import Search from './Search.js';
import VideoPlayer from './VideoPlayer.js';
import VideoList from './VideoList.js';

var App = () => {
  const [videoList, setVideoList] = useState(exampleVideoData);
  const [currentVideo, setCurrentVideo] = useState(exampleVideoData[0]);

  return (
    <div>
      <nav className="navbar">
        <Search />
      </nav>
      <div className="row">

        <VideoPlayer video={currentVideo} />

        <VideoList videos={videoList} onChangeCurrentVideo={setCurrentVideo} />
      </div>
    </div>
  );
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
