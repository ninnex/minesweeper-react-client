import React, { Component, useEffect, useState } from 'react';
import {convertMatriz, getBoardKey, getColor} from '../util.js'
import {callApi} from '../serverconnection.js'

function Board (){

 
    
    let matriz = [];

  
    var nmat = convertMatriz(matriz);
    const [smat , setMat] = useState(nmat);
   
    
    function handleOnClick(i, j){
        console.log('clicked! ' + i + " - "+ j);
        callApi("play", i, j).then(res => {
            setMat(res);
        })        
          
        
    }

    

    
    useEffect( () => {
         callApi("getboard").then(res => {
            setMat(res);
            })        
        }        
        , []);

    return <div>
                <table>
                {smat.map( row => 
                        <tr>{row.map( ob => 
                            <span style={{fontSize: 20, fontWeight: "bold", width: 45, height: 45}}                             key={getBoardKey(ob.i, ob.j)} 
                            className={getColor(ob.val)}
                            onClick={() => handleOnClick(ob.i, ob.j)}>
                                {ob.val==9?"-":ob.val}</span>
                                    )}
                        </tr>                         
                )}
                </table>
            </div>;

    


}



export default Board