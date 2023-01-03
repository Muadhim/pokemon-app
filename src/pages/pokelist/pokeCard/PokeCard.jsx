import axios from "axios"
import React, {Component} from "react"
import { Link } from "react-router-dom"

//style
import './PokeCard.css'

class PokeCard extends Component {
    constructor(){
        super()
        this.state={
            pokeImg: ''
        }
    }

    getImg = () => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${this.props.data.name}/`)
        .then(res => {
            this.setState({
                pokeImg: res.data.sprites.front_default
            })
        })
    }
    
    componentDidMount(){
        this.getImg()
    }
    render(){
        return(
            <div className="poke-card">
                <Link to={`/poke-list/${this.props.data.name}`}>
                    <img src={this.state.pokeImg} alt="gambar" />
                    <p>{this.props.data.name}</p>
                </Link>
            </div>
        )
    }
}

export default PokeCard