import axios from 'axios';
const baseUrl='https://hacker-news.firebaseio.com/v0';
const storyUrl=baseUrl+'/item/';
const newStoriesUrl=baseUrl+'/newstories.json';
const topStoriesUrl=baseUrl+'/topstories.json';

export const story=async(storyId)=>{
    const result=await axios.get(storyUrl+storyId+'.json').then(data=>data);
    return result;
}
export const TopStoryIds = async()=>{
    //console.log(url);
    const result=await axios.get(topStoriesUrl).then(data=>data);
    return result;
}
export const NewStoryIds = async()=>{
    //console.log(url);
    const result=await axios.get(newStoriesUrl).then(data=>data);
    return result;
}
