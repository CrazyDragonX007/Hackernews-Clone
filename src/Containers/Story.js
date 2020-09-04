import React,{Component} from 'react';
import {story} from '../services/hkn_api';
import '../styles/story.css';

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
            <p><strong>{this.state.story.title}</strong></p>
            <p>{this.state.story.by}</p>
        </div>
        )
    }
}
export default Story;