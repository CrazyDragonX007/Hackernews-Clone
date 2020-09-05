import React,{Component} from 'react';
import './styles/App.css';
import './styles/story.css'
import TopStories from './Containers/TopStories';
import NewStories from './Containers/NewStories';

class App extends Component {
  state={
    def:true
  }

  topHandler=()=>{
    this.setState({def:!this.state.def});
    //console.log(this.state.def);
  }
  StoryCaller=()=>{
    if(this.state.def){
      return <TopStories />;
    }
      return <NewStories />;
    }
  
  render(){
    return (
      <div className="App-header">
        <h1 style={{color:'white'}}>Hacker News Stories</h1>
        <button className='bt' onClick={this.topHandler}>Toggle top and new Stories!</button>
        {this.StoryCaller()}
      </div>
    );
  }
}
export default App;
