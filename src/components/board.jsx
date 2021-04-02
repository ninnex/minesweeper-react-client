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
   
    
    

    return <div>

                {smat.map( row => 
                        <li>{row.map( ob => 
                            <span style={{fontSize: 50, fontWeight: "bold"}} 
                            key={getBoardKey(ob.i, ob.j)} 
                            className={getColor(ob.val)}
                            >
                                {ob.val}</span>
                                    )}
                        </li>                         
                )}
            </div>;

    


}



export default Board