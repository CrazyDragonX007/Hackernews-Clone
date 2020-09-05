import React,{Component} from 'react';
import {story} from '../services/hkn_api';
import '../styles/story.css';
import { time } from '../utils/time';

class Story extends Component{
    state={
        story:{}
    }
    componentDidMount(){
        story(this.props.storyId).then(data=>{
            const d=data.data;
            this.setState({story:d});
            console.log(this.state.story);
        })
    }
    render(){
        return(
        <div className="storyStyle">
            <a href={this.state.story.url}><strong>{this.state.story.title}</strong></a>
            <p>By: {this.state.story.by}</p>
            <p>Posted: {time(this.state.story.time)} ago</p>
        </div>
        )
    }
}
export default Story;