import React, { Component } from 'react';
import './demonymApp.css'

import Demonym from './demonym';
import CountrySelector from './countrySelector';

class DemonymApp extends Component {

    constructor(props) {
        super(props);
        this.state = {
        countries: [],
        selected: null
        };
    }

    componentDidMount() {
        fetch('https://country.register.gov.uk/records.json?page-size=5000')
        .then(response => {
            console.log('cehcking fer errers')
            if(!response.ok){
                console.log('OH FUCK NOT LIKE THIS')
                throw new Error('Aint working m8.')
            }
            return response; //if ok just keep goin
        })
        .then(response => response.json())
        .then(data => {
            const countries = Object.keys(data)
                .map(key => data[key].item[0]);
            this.setState({
            countries
            });
        })
        .catch(err => {
            this.setState({
                error: err.message
            });
            console.log('Error:', err);
        })
    }

    setSelected(selected) {
        this.setState({
          selected
        });
    }
    
    render() {
        const demon = this.state.selected
            ? <Demonym name={this.state.selected['citizen-names']} country={this.state.selected.name}/> 
            : <div className="demonym_app__placeholder">Select a country above</div>;

        const error = this.state.error
            ? <div className="demonym_app__error">{this.state.error}</div>
            : "";

        return (
        <div className="demonym_app">
            {error}
            <CountrySelector 
                changeHandler={selected => this.setSelected(selected)}
                countries={this.state.countries}
            />
            {demon}
        </div>
        );
    }
}

export default DemonymApp;