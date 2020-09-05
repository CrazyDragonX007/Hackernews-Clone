import React,{Component} from 'react';
import Story from './Story'
import {storyIds} from '../services/hkn_api';

class Stories extends Component {
  state={
    storyIds:[],
    low:0,
    max:500,
    up:30,
    tempIds:[]
  }

  componentDidMount(){
    storyIds().then(data=>{
      //console.log(data.data);
      this.setState({storyIds:data.data});
      this.up();
    });
    
  }

  up=()=>{
    const tempS=this.state.storyIds.splice(this.state.low,this.state.up);
    const l=this.state.low+30;
    const u=this.state.up+30;
    this.setState({tempIds:tempS,low:l,up:u});
  }

  render(){
    return (
    <div>
    <h1>Hacker News Articles</h1>
    {this.state.tempIds.map(storyId=>{
    return <Story key={storyId} storyId={storyId}/>
  })}
    <button onClick={this.up}>More!</button>
    </div>
    );
  }
}
export default Stories;
