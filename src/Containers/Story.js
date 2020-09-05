import React,{Component} from 'react';
import {story} from '../services/hkn_api';
import '../styles/story.css';
import { time } from '../utils/time';
import axios from 'axios';

// Handles each individual story element. 

class Story extends Component{
    signal = axios.CancelToken.source();
    state={
        story:{}
    }
    componentDidMount(){
        story(this.props.storyId,this.signal.token).then(data=>{
            const d=data.data;
            this.setState({story:d});
           // console.log(this.state.story);
        }).catch(er=>console.log("Something went wrong"+er));
        window.scrollTo(0,0)
    }

    componentWillUnmount(){
        this.signal.cancel();
    }

    render(){
        if(this.state.story){}
        else
            return null;
        return(
        <div className="storyStyle">
            <a href={this.state.story.url?this.state.story.url:null}><strong>{this.state.story.title}</strong></a>
            <p>By: {this.state.story.by}</p>
            <p>Posted: {time(this.state.story.time)} ago</p>
        </div>
        );
    }
}
export default Story;