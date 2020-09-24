import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

class App extends React.Component{
    state = { videos: [], selectedVideo: null };
    onTextInputSubmit = async (textInput) => {
        const response = await youtube.get('/search', {
            params: {
                q: textInput,
                
            }
        });
        this.setState({ videos: response.data.items});
    }
    onVideoSelect = (video) => {
        this.setState({selectedVideo: video});
    }
    render(){
        return (
            <div className="ui container">
                <SearchBar  onFormSubmit={this.onTextInputSubmit} />
                <VideoDetail video={this.state.selectedVideo} />
                <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos} />
                <p>I have {this.state.videos.length} videos.</p>
            </div>
        );
    }
}

export default App;