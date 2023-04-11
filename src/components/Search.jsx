var Search = ({ searchText, onChangeSearchText, queryYouTube, onChangeQueryYouTube }) => (
  <div className="search-bar form-inline">
    <input
      className="form-control"
      type="text"
      value={searchText}
      onChange={ (e) => onChangeSearchText(e.target.value)}/>
    <button className="btn hidden-sm-down" onClick={ (e) => onChangeQueryYouTube(!queryYouTube) }>
      <span className="glyphicon glyphicon-search"></span>
    </button>
  </div>
);

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default Search;
