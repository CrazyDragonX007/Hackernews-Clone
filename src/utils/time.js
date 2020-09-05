export const time=storytime=>{
    const secs=Math.floor((new Date()-storytime*1000)/1000);
    let diff=Math.floor(secs/(365*24*60*60));
    if(diff>1){
        return diff+' years';
    }
    diff=Math.floor(secs/(30*60*60*24));
    if(diff>1){
        return diff+' months';
    }
    diff=Math.floor(secs/(60*60*24));
    if(diff>1){
        return diff+' days';
    }
    diff=Math.floor(secs/(60*60));
    if(diff>1){
        return diff+' hours';
    }
    diff=Math.floor(secs/60);
    if(diff>1){
        return diff+' minutes';
    }
    diff=Math.floor(secs);
    return diff+' seconds';
}