// A COMMENT THAT WAS NOT THERE BEFORE

const { useState, useEffect } = React;

import exampleVideoData from '../data/exampleVideoData.js'
import Search from './Search.js';
import VideoPlayer from './VideoPlayer.js';
import VideoList from './VideoList.js';

var App = ({ searchYouTube }) => {

  searchYouTube = searchYouTube || ( () => {} );
  const [searchText, setSearchText] = useState('');
  const [queryYouTube, setQueryYouTube] = useState(false);
  const [videoList, setVideoList] = useState([]);
  const [currentVideo, setCurrentVideo] = useState({});

  const debounce = _.debounce(function () {
    searchYouTube(searchText, (data) => {
      console.log('data', data)
      setVideoList(data);
    });
  }, 5000);

  useEffect(()=> {
    debounce(searchText);
  }, [searchText] );


  return (
    <div>
      <nav className="navbar">
        <Search
          searchText={searchText}
          onChangeSearchText={setSearchText}
          queryYouTube={queryYouTube}
          onChangeQueryYouTube={setQueryYouTube} />
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

