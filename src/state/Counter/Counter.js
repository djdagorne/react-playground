import React from 'react';

class Counter extends React.Component {
    constructor(props){
        console.log('props in constructor', props)
        super(props)
        this.state = { count: props.count} //setting the initial value without props & before DOM rendering
    }
    handleButtonClick = () => {
        console.log('props in handleButtonClick', this.props)
        console.log('state in handleButtonClick', this.state)
        this.setState({ count: this.state.count + this.props.step })
    }

    render() {
        return (
            <div>
                <p>The current count: {this.state.count}</p>
                <button onClick={() => this.handleButtonClick()}> 
                    Add {this.props.step} and blaze it yas
                </button>
            </div>
        )
    };

}

export default Counter;