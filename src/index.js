import _ from "lodash";
import React, { Component } from "react";
import ReactDOM from "react-dom";
import YTSearch from "youtube-api-search";
import SearchBar from "./components/search_bar";
import VideoList from "./components/video_list";
import VideoDetail from "./components/video_detail";
const API_KEY = "AIzaSyDgvBGmYaxe7SzT2kKWmRq6XNUHHO73aZA";

/**
 * Create a new component.
 * This component should produce some HTML.
 */
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null,
    };

    this.videoSearch("surfboards");
  }

  videoSearch(term) {
    YTSearch({ key: API_KEY, term: term }, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0],
      });
    });
  }

  render() {
    const videoSearch = _.debounce((term) => { this.videoSearch(term); }, 300);
    return (
      <div>
        <SearchBar onSearchTermChange={(term) => { this.videoSearch(term); }} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          videos={this.state.videos}
          onVideoSelect={(selectedVideo) => this.setState({ selectedVideo })}
        />
      </div>
    );
  }
}

/**
 * Take this component's generated DOM
 * and put it on the page (in DOM)
 */
ReactDOM.render(<App />, document.querySelector(".container"));
