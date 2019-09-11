import React from 'react';

class Bomb extends React.Component {
    constructor(props) {
        super(props)
        this.state = { count: 0 };
        console.log('constructor')
    }
    componentDidMount() {
        console.log('componentDidMount')
        this.interval = setInterval(() => {
            //console.log('setInterval')
            this.setState({count: this.state.count+1})
        }, 1000)
    }
    componentWillUnmount() {
        console.log('willunmount')
        clearInterval(this.interval)
    }
    tickTockCounter(time){
        if(time%2===0 && time<8){
            console.log(this.state.count + ' tick')
            return ('tick');
        }else if(time%2!==0 && time<8){
            console.log(this.state.count + ' tock')
            return ('tock');
        }else if(time>=8){
            console.log(this.state.count + ' boom')
            this.componentWillUnmount();
            return ('BOOM!');
        }
    }
    render() {
        return (
            <div>
                <p>{this.tickTockCounter(this.state.count)}</p>
            </div>
    )
    }       
}

export default Bomb