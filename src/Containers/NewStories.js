import React,{Component} from 'react';
import Story from './Story';
import {NewStoryIds} from '../services/hkn_api';
import '../styles/story.css';
import axios from 'axios';

class NewStories extends Component {
    signal = axios.CancelToken.source();
  state={
    storyIds:[],
    low:0,
    max:499,
    up:25,
    tempIds:[]
  }

  componentDidMount(){
    NewStoryIds(this.signal.token).then(data=>{
      //console.log(data.data);
      this.setState({storyIds:data.data});
      this.moreHandler();
    }).catch(er=>console.log("Something went wrong"+er))
  }

  componentWillUnmount(){
    this.signal.cancel();
  }

  moreHandler=()=>{
    if(this.state.storyIds){}
    else{alert("Check your connection");
        return null;}
    if(this.state.up===this.state.max){
        alert("No more stories!");
    return null;}
    const tempS=this.state.storyIds.splice(this.state.low,this.state.up);
    const l=this.state.low+25;
    const u=this.state.up+25;
    this.setState({tempIds:tempS,low:l,up:u});
  }

  render(){
    return (
    <div>
    <h2 style={{color:'white'}}>New Stories</h2>
    {this.state.tempIds.map(storyId=>{
    return <Story key={storyId} storyId={storyId}/>
  })}
    <button className="bt" onClick={this.moreHandler}>More!</button>
    </div>
    );
  }
}
export default NewStories;
