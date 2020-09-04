import axios from 'axios';
export const baseUrl=' https://hacker-news.firebaseio.com/v0';
export const newStories=baseUrl+'/newstories.json';
export const story=baseUrl+'/item/';

export const storyIds = async()=>{
    //console.log("called");
    const result=await axios.get(newStories).then(({data})=>data);
    return result;
}