import {convertMatriz, getBoardKey, getColor} from './util.js'

export function callApi(act, i, j){
    console.log(act)
    const base_url = "http://localhost:8080/api/";
    var requestOptions = act === "getboard"  ? 
    {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    }:
    {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action: act, x:i, y:j })
    } ;
   
     
    
    
    return fetch(base_url + act, requestOptions)
    .then(res => res.json())
    .then(json => {
        //return convertMatriz(json["matriz"])   
        return json   
            

        })
        
   
     
}