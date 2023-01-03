//library
import { useParams } from "react-router"
import PokeDetailCard from "../../../component/pokeDetailCard/PokeDetailCard"

//style
import './PokeDetail.css'

const PokeDetail = () => {
    const  param  = useParams()
    
    return(
        <div className="poke-detail">
           <PokeDetailCard nameParam={param}/>
        </div>
    )
}

export default PokeDetail