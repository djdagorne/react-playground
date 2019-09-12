import React, { Component } from 'react'
//import './Accordion.css'

export default class Accordion extends Component {
  static defaultProps = {
    sections: []
  };

  state = {
    activeSectionIndex: null,
  }

  handleSetActiveSecion = (selectedIdNumber) => {
      console.log('handleSetActiveSection at id number ' + selectedIdNumber)
    this.setState({ activeSectionIndex: selectedIdNumber })
  }

  handleContent(section, idNumber, activeSectionIndex){
    if(activeSectionIndex === idNumber){
        return <p>{section.content}</p>
    }
  }

  renderItem(section, idNumber, activeSectionIndex) {
    console.log('render item at section ' + section.title + ', id Number is '+ idNumber + ' and ASI is ' + activeSectionIndex)
    return (
      <li className='Accordion__item' key={idNumber}>
        <button type='button' onClick={() => this.handleSetActiveSecion(idNumber)} >
            {section.title}
        </button>
        {this.handleContent(section, idNumber, activeSectionIndex)}
      </li>
    )
  }

  render() {
      console.log('rendering...')
    const { activeSectionIndex } = this.state
    const sections = [
        {
          title: 'Section 1',
          content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        },
        {
          title: 'Section 2',
          content: 'Cupiditate tenetur aliquam necessitatibus id distinctio quas nihil ipsam nisi modi!',
        },
        {
          title: 'Section 3',
          content: 'Animi amet cumque sint cupiditate officia ab voluptatibus libero optio et?',
        },
    ]
    return (
      <ul className='Accordion'>
        {sections.map((section, idNumber) => //creating a new array of objects and assigning them an idnumber
          this.renderItem(section, idNumber, activeSectionIndex)
        )}
      </ul>
    )
  }
}