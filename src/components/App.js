import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';

class App extends React.Component{
    onTextInputSubmit = (textInput) => {
        youtube.get('/search', {
            params: {
                q: textInput,
                
            }
        })
    }
    render(){
        return (
            <div className="ui container">
                <SearchBar  onFormSubmit={this.onTextInputSubmit} />
            </div>
        );
    }
}

export default App;