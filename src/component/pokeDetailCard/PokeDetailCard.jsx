import axios from "axios";
import React, { Component } from "react";

//style
import './PokeDetailCard.css'

class PokeDetailCard extends Component {
    constructor(){
        super()
        this.state={
            detailPoke: {},
            imagePoke: {},
            abilityPoke: [],
        }
    }

    getPokeDetail(){
        axios.get(`https://pokeapi.co/api/v2/pokemon/${this.props.nameParam.name}`)
        .then(res => {
            this.setState({
                detailPoke: res.data,
                imagePoke: res.data.sprites,
                abilityPoke: res.data.abilities,
            })
            console.log(res.data)
            // console.log(res.data)
            // console.log(this.state.detailPoke)
        })
    }
    // getDetail = ()=>{
    //     axios.get(`https://pokeapi.co/api/v2/pokemon/${this.props.nameParam.name}`)
    //     .then(res => {
    //         this.setState({
    //             dataDetail: res.data,
    //         }, () => console.log(this.state.dataDetail))
    //         // console.log(res.data)
    //         // console.log(this.state.dataDetail)
            
    //     })
    // }

    detailAbility(url){
        axios.get(url)
        .then(res => {
            document.getElementById('detail-ability-poke').innerHTML = ''
            document.getElementById('detail-ability-poke')
            .insertAdjacentHTML('beforeend',
            `
                <p>${res.data.name}</p>
                <p>${
                    res.data.effect_entries.map(e => {
                        return e.effect + '<br/><br/>'
                    })
                }</p>
                
            `
            )
            
        })
    }
    componentDidMount(){
        this.getPokeDetail()
        
    }
    render() {
        return(
            <div className="poke-detail-card" >
                <p>{this.state.detailPoke.name}</p>
                <div className="img-detail-poke">
                    <img src={this.state.imagePoke.front_default} alt="" className="image-poke" />
                    <img src={this.state.imagePoke.back_default} alt="" className="image-poke" />
                    <img src={this.state.imagePoke.front_shiny} alt="" className="image-poke" />
                    <img src={this.state.imagePoke.back_shiny} alt="" className="image-poke" />                 
                </div>
                <div className="ability-detail-poke">
                    <p>ability</p>
                    {this.state.abilityPoke.map(ability => {
                        return (
                            <div key={ability.ability.name}>
                                <p>{ability.ability.name}</p>
                                <button onClick={()=> this.detailAbility(ability.ability.url)}>detail</button>
                            </div>
                        )
                    })}
                    <p id="detail-ability-poke"></p>
                </div>
                <div className="basic-data-poke">
                    <p>height: {this.state.detailPoke.height}</p>
                    <p>weight: {this.state.detailPoke.weight}</p>
                    <p>base experience : {this.state.detailPoke.base_experience}</p>
                </div>

            </div>
        )
    }
}

export default PokeDetailCard