import React, { Component } from 'react';
import './data_retrieval.css'

class Data_Retrieval extends Component {
    constructor(){
        super();
        this.state = {
            days: []
        }
    }

    componentWillMount(){
        fetch('http://api.openweathermap.org/data/2.5/forecast?zip=02072,us&units=imperial&APPID=c1e49a50c655ed72558cd523286c9b7d')
        .then(results => {
            return results.json();
        }).then(data => {
            console.log(data);
            let days = data.list.map((day) => {
                return (
                    <div className = 'container' key={day.dt}>
                    <p>Date & Time: {day.dt_txt}</p>
                    <p>temperature: {day.main.temp}</p>
                    </div>
                )
            })
            this.setState({days: days});
        })
        
    }

    render() {
        return (
            <div>
                {this.state.days}
            </div>
        )
    }
}

export default Data_Retrieval