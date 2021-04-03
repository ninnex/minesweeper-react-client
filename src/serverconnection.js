import {convertMatriz, getBoardKey, getColor} from './util.js'

export function callApi(action, i, j){

    const base_url = "http://localhost:8080/api/";
    var requestOptions = action === "play" ? 
    {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action: "play", x:i, y:j })
    }  :
    {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    };

     
    
    
    return fetch(base_url + action, requestOptions)
    .then(res => res.json())
    .then(json => {
        
        return convertMatriz(json["matriz"])    
            

        })
        
   
     
}