import React, { Component, useEffect, useState } from 'react';
import Board from './Board';
import Welcome from './Welcome';

function App(){

    const [view, setView] = useState("Welcome")

    function handleOnClick (){
        if(view === "Board")
            window.location.reload(false);
        else
            setView("Board")
    }


    return <div>
                {view === "Welcome" ?<Welcome /> : <Board /> }
                 
                 <button className="badge" onClick={handleOnClick}>Start Game</button>
            </div>

}

export default App;