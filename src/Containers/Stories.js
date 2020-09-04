import React,{Component} from 'react';
import Story from './Story'
import {storyIds} from '../services/hkn_api';

class Stories extends Component {
  state={
    storyIds:[]
  }

  componentDidMount(){
    storyIds().then(data=>{
      //console.log(data.data);
      this.setState({storyIds:data.data});
    });
    
  }
  render(){
    return (
    <div>
    <h1>Hacker News Articles</h1>
    {this.state.storyIds.map(storyId=><Story key={storyId} storyId={storyId}/>)}
    </div>
    );
  }
  
}
export default Stories;
