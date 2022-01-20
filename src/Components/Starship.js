
import { useEffect, useState } from "react"; 
import axios from "axios";


function Starship() {

    const[Starship, SetStarship]= useState([]);

    useEffect(()=>{

    
        axios
        .get("https://swapi.dev/api/starships/?format=json#")
        .then((res)=>{
            console.log(res)
            SetStarship(res.data.results)
        })
        .catch(err=>{
            console.log(err)
            
        });
    },[]);

    
        return (
      
    <div className="container">
        
        <div className="Starship">
            <ul>
               {Starship.map(starship => <p className="box" key={starship.name}>{starship.name}{starship.crew}</p>
               )}
    
            </ul>
            </div>
         
    </div>
      );
}

export default Starship;