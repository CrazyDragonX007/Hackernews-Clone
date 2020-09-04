import React,{Component} from 'react';
import './App.css';
import {storyIds} from './services/hkn_api';

class App extends Component {
  state={
    storyIds:[]
  }

  componentDidMount(){
    storyIds().then(data=>{
      console.log(data);
      this.setState({storyIds:data});
    });
    
  }

  render(){
    return (
      <div className="App">
        <p>{this.state.storyIds}</p>
      </div>
    );
  }
  
}
export default App;
