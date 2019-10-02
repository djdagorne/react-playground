import React  from 'react';
import './App.css';

import DemonymApp from './demonymapp/demonymApp';

// import TheDate from './state/TheDate.js';
// import Counter from './state/Counter/Counter.js';
// import Tabs from './state/Tabs';
// import Accordion from './state-drills/Accordion.js'


// import AddItemForm from './shopping-list/AddItemForm';
// import ShoppingList from './shopping-list/ShoppingList';

class App extends React.Component {
//   state = {
//     shoppingItems: [
//       /* put stub items in here for testing */
//       { name: 'apples', checked: false },
//       { name: 'oranges', checked: true },
//       { name: 'bread', checked: false },
//     ]
//   };
//   handleAddItem = (itemName) => {
//     const newItems = [
//       ...this.state.shoppingItems,
//       { name: itemName, checked: false }
//     ]
//     this.setState({shoppingItems: newItems})
//   }
//   handleDeleteItem = (item) => { //should be an arrow function to avoid ES5 issues?
//     const newItems = this.state.shoppingItems.filter(itm => itm !== item)
//     this.setState({
//       shoppingItems: newItems
//     })
//   }
//   handleCheckItem = (item) => {
//     const newItems = this.state.shoppingItems.map(itm => {
//       if (itm === item){
//         item.checked = !itm.checked
//       }
//       return itm
//     })
//     this.setState({
//       shoppingItems: newItems
//     })
//   }

	render() {
		return(
			<PaltrowApp/>
		)
	}
}

export default App;

    // return (
	// 	<div className="App">
    //     	<DemonynApp/>
    //   	</div>
    // )

//        {/* <Accordion /> */}
//        {/* <Tabs tabs={tabsProp}/> */}
//        {/* //<TheDate  /> */}
//        {/* <RouletteGun bulletInChamber={8} /> */}
//        {/* <Counter count={123} step={420}/> */}

// const tabsProp = [
//   { name: 'First tab',
//     content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam exercitationem quos consectetur expedita consequatur. Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque.' },
//   { name: 'Second tab',
//     content: 'Laboriosam exercitationem quos consectetur expedita consequatur. Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit.' },
//   { name: 'Third tab',
//     content: 'Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam exercitationem quos consectetur expedita consequatur.' },
// ];


/* <section>  //itemlist stuff
	<AddItemForm 
		onAddItem={this.handleAddItem} 
	/>
</section>
<section>
	<ShoppingList items={this.state.shoppingItems}
		onDeleteItem={this.handleDeleteItem}
		onCheckItem={this.handleCheckItem} 
	/>
</section> */