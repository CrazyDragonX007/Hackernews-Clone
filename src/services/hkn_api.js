import axios from 'axios';
const baseUrl='https://hacker-news.firebaseio.com/v0';
const storyUrl=baseUrl+'/item/';
const newStoriesUrl=baseUrl+'/newstories.json';
const topStoriesUrl=baseUrl+'/topstories.json';

export const story=async(storyId,cancelToken)=>{
    const result=await axios.get(storyUrl+storyId+'.json',{cancelToken:cancelToken}).then(data=>data);
    return result;
}
export const TopStoryIds = async(cancelToken)=>{
    //console.log(url);
    const result=await axios.get(topStoriesUrl,{cancelToken:cancelToken}).then(data=>data).catch(er=>er);
    return result;
}
export const NewStoryIds = async(cancelToken)=>{
    //console.log(url);
    const result=await axios.get(newStoriesUrl,{cancelToken:cancelToken}).then(data=>data).catch(er=>er);
    return result;
}
