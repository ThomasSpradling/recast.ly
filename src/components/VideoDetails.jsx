var VideoDetails = ({video}) => {

  return (
    <div className="video-player-details">
      <h3>{video.snippet.title}</h3>
      <div>{video.snippet.description}</div>
    </div>
  )
}

export default VideoDetails;