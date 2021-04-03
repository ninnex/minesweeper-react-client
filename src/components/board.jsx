import React, { Component, useEffect, useState } from 'react';
import {convertMatriz, getBoardKey, getColor} from '../util.js'

function Board (){

 
    let matriz = [
                    [0,0,0,0,7],
                    [0,2,0,0,0],
                    [0,0,0,3,3]
                ];

  
    var nmat = convertMatriz(matriz);
    const [smat , setMat] = useState(nmat);
   
    
    function handleOnClick(i, j){
        console.log('clicked! ' + i + " - "+ j);

        var laqui= convertMatriz([
            [0,0,0,0,0],
            [0,0,0,0,0],
            [0,0,0,0,0]
        ]);
        setMat(laqui);

        console.log(smat);
    }

    function callApi(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(json => {
            console.log(json[0]["id"]);
            });
         
    }

    
    useEffect( () => {
        callApi();
        }        
        , []);

    return <div>

                {smat.map( row => 
                        <li>{row.map( ob => 
                            <span style={{fontSize: 50, fontWeight: "bold"}} 
                            key={getBoardKey(ob.i, ob.j)} 
                            className={getColor(ob.val)}
                            onClick={() => handleOnClick(ob.i, ob.j)}>
                                {ob.val}</span>
                                    )}
                        </li>                         
                )}
            </div>;

    


}



export default Board