import React,{Component} from 'react';
import Story from './Story';
import {TopStoryIds} from '../services/hkn_api';
import '../styles/story.css'

class TopStories extends Component {
  state={
    storyIds:[],
    low:0,
    max:500,
    up:30,
    tempIds:[]
  }

  componentDidMount(){
    TopStoryIds().then(data=>{
      //console.log(data.data);
      this.setState({storyIds:data.data});
      this.moreHandler();
    });
    
  }

  moreHandler=()=>{
    const tempS=this.state.storyIds.splice(this.state.low,this.state.up);
    const l=this.state.low+30;
    const u=this.state.up+30;
    this.setState({tempIds:tempS,low:l,up:u});
  }

  render(){
    return (
    <div>
    <h2 style={{color:'white'}}>Top Stories</h2>
    {this.state.tempIds.map(storyId=>{
    return <Story key={storyId} storyId={storyId}/>
  })}
    <button className="bt" onClick={this.moreHandler}>More!</button>
    </div>
    );
  }
}
export default TopStories;
