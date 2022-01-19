import { render } from "@testing-library/react";
import { useEffect, useState } from "react"; 



function Starship() {

    const[Starship, SetStarship]= useState({Starship: []});
    const setStarshipList=()=>{
        fetch("https://swapi.dev/api/starships/")
        .then(response=>{
            return response.json()
        })
        .then(data=>{
            SetStarship(data)
            
        })
    }
useEffect(()=>{
    setStarshipList()
    
    },[])
    
        return (
      
    <div className="Starship">
        {Starship.length>0 &&(
            <ul>
                {SetStarship.map(S =>(
                    <li key={S.id}>{S.results.name}</li>
                ))}
    
            </ul>
        )}
        
    <div>
            <h1>test</h1>
    </div>  
    </div>
      );
}

export default Starship;