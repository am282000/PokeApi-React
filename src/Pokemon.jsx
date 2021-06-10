import React,{useState,useEffect} from 'react'
import axios from "axios"
 
const Pokemon = () => {
    const [num, setNum] = useState()
    const [name, setName] = useState()
    const [moves, setMoves] = useState()
    const [type, setType] = useState()
    const [abilities, setAbilities] = useState()

    useEffect(() => {
        async function getData(){
            const res =await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`)
            console.log(res);
            // console.log(res.data.abilities[0].ability.name);
            setName(res.data.name);
            setMoves(res.data.moves.length);
            setType(res.data.types[0].type.name)
            setAbilities(res.data.abilities[0].ability.name)
        }
        getData();
    })
    return (
        <>

            <select value={num} onChange={(event)=>{
               setNum(event.target.value)
            }} >
               <option value="25">1</option>
               <option value="99">2</option>
               <option value="39">3</option>
               <option value="69">4</option>
               <option value="56">5</option>
               <option value="76">6</option>
           </select>

        {/* <h1>You choose <span style={{color:"red"}}> {num} </span> value</h1> */}
        <h1>My name is <span style={{color:"red"}}> {name} </span> </h1>
        <h1>I have <span style={{color:"red"}}> {moves} </span> moves</h1>
        <h1>Type of Pokemon is <span style={{color:"red"}}> {type} </span> </h1>
        <h1>Special Abilities <span style={{color:"red"}}> {abilities} </span> </h1>



        </>
    )
}

export default Pokemon
