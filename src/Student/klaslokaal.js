import React, {Component} from 'react';
import axios from 'axios';

class KlasLokaal extends Component{
    
    state = {
        lokalen : [ { lokaalnummer : "12" }, { lokaalnummer : "3"} ],
        kattentekst : "test"
    }

    klikken = () => {
        this.setState({
            lokalen : [ { lokaalnummer : "2"}, { lokaalnummer : "4"} ]
        })
    }

    halen = ()=>{
       axios.get('https://cat-fact.herokuapp.com/facts/random').then(response => this.setState( { kattentekst : response.data.text }));
        
    }

    render(){
        return(
            <div>
                <h1>Kattenfeitje: {this.state.kattentekst}</h1>
                <button onClick={this.halen}>Klik hier voor een kattenfeitje</button>
                <h1>Bekijk hier het klaslokaal: {this.state.lokalen[0].lokaalnummer}</h1>
                <h2>Bekijk hier het klaslokaal: {this.state.lokalen[1].lokaalnummer}</h2>
                <button onClick={this.klikken}>Klik hier voor een ander klaslokaal</button>
            </div>
        )
    }
}

export default KlasLokaal;