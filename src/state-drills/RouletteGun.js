import React from 'react';

class RouletteGun extends React.Component {
    constructor(props) {
        console.log('constructing')
        super(props)
        this.state = { 
            chamber: null,
            spinningTheChamber: false //establish default states of gun, no chamber yet, spinning =false
        };
    }
    componentWillUnmount() {
        console.log('willUnmount')
        clearTimeout(this.timeout)
    }
    spinChamber(){
        console.log('trigger pulled, starting timer while assigning loaded chamber')
        this.setState({
            spinningTheChamber: true,
        })
        this.timeout = setTimeout(() => { //setTimeout performs function (diceroll + updated state) AFTER alotted time of 2000ms
            const randomChamber = Math.ceil(Math.random() * 8)        
            this.setState({
                chamber: randomChamber,
                spinningTheChamber: false,
            })
        }, 2000)

    }
    gunStatus(){
        const { chamber, spinningTheChamber } = this.state //updating variables with state
        const { bulletInChamber } = this.props //updating variable with property handed down from index
        
        if (spinningTheChamber) {
            return 'spinning the chamber and pulling the trigger! ...'
        } else if (chamber === bulletInChamber) {
            return 'BANG!!!!!'
        } else {
            return "you're safe!"
        }
    }
    render() {
        return (
            <div className="RouletteGun">
                <p>{this.gunStatus()}</p> 
                <button onClick={() => this.spinChamber()}>Pull the trigger!</button>
            </div>
        )
    }       
}

export default RouletteGun