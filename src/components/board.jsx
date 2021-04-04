import React, { Component, useEffect, useState } from 'react';
import {convertMatriz, getBoardKey, getColor, getStatus} from '../util.js'
import {callApi} from '../serverconnection.js'

function Board (){

 
    
    let matriz = [];
    var clickTimeout = null

  
    var nmat = convertMatriz(matriz);
    const [smat , setMat] = useState(nmat);
    const [status , setStatus] = useState("playing");
   
    
    function handleOnClick(i, j){
        console.log('clicked! ' + i + " - "+ j);
        callApi("play", i, j).then(res => {
            setMat(res["matriz"]);            
        })        
          
        
    }

    

    

    
    useEffect( () => {
        clickTimeout = null
         callApi("getboard").then(res => {
            setMat(convertMatriz(res["matriz"]));
            })        
        }        
        , []);

        const handleClicks = (i, j) => {
            console.log('clicked! ' + i + " - "+ j);
            if (clickTimeout !== null) {
              console.log('double click executes')
              clearTimeout(clickTimeout)
              clickTimeout = null

              callApi("mark", i, j).then(res => {
                setMat(convertMatriz(res["matriz"]));
                }) 

            } else {
              console.log('single click')  
              clickTimeout = setTimeout(()=>{
              console.log('first click executes ')
              clearTimeout(clickTimeout)
              clickTimeout = null
              
              callApi("play", i, j).then(res => {
                  setMat(convertMatriz(res["matriz"]));
                  setStatus(res["status"])
                  console.log(res["status"]);
              })   

              }, 200)
            }
          };


          function handleOnClickLoad(){
            callApi("load", 0, 0).then(res => {
                setMat(convertMatriz(res["matriz"]));
                setStatus(res["status"])
                console.log(res["status"]);
            })  
          };
          function handleOnClickSave(){
            callApi("save", 0, 0).then(res => {
                setMat(convertMatriz(res["matriz"]));
                setStatus(res["status"])
                console.log(res["status"]);
            })  
          };

    return <div>
                 <h1>{getStatus(status)}</h1> 

                <table>
                {smat.map( row => 
                        <tr>{row.map( ob => 
                            <span style={{fontSize: 20, fontWeight: "bold", width: 45, height: 45}}                             key={getBoardKey(ob.i, ob.j)} 
                            className={getColor(ob.val)}
                            onClick={() => handleClicks(ob.i, ob.j)}>
                                {ob.val==9?"-":ob.val}</span>
                                    )}
                        </tr>                         
                )}
                </table>
                <button className="badge" onClick={handleOnClickSave}>Save</button>
                <button className="badge" onClick={handleOnClickLoad}>Load</button>
            </div>;

    


}



export default Board