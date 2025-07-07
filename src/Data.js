export const api_key='AIzaSyBQ3H9ex-A_FaQql_7OEr9QmPnQt-BCdyk';

export const converter=(value)=>{
    if(value>=1000000){
      return  Math.floor(value/1000000)+"M"
    }
    else if(value>=1000){
       return  Math.floor(value/1000)+"k"
    }
    else{
      return value
    }
}