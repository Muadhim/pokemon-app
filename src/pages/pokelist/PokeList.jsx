import axios from "axios";
import React, {Component} from "react";

//style
import './PokeList.css'

import PokeCard from "./pokeCard/PokeCard";

class PokeList extends Component {
    constructor(){
        super()
        this.state= {
            poke: [],
        }
    }

    getPokeApi = () => {
        axios.get('https://pokeapi.co/api/v2/pokemon/')
        .then(res => {
            this.setState({
                poke: res.data.results
            })
        })
        
    }

    componentDidMount() {
        this.getPokeApi()
    }

    render(){
        return(
            <div className="poke-list">
                {
                    this.state.poke.map(dataPoke => {
                        return <PokeCard key={dataPoke.name} data={dataPoke} />
                    })
                }
            </div>
        )
    }
}

export default PokeList