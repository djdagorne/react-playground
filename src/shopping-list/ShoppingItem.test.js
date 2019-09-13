import React from 'react';
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import ShoppingItem from './ShoppingItem';

describe('ShoppingItem Component ', () => {
    it('renders empty given no item', () => {
        const wrapper=shallow(<ShoppingItem/>)
        expect(toJson(wrapper)).toMatchSnapshot()
    })

    it('renders the item when supplied', () => {
        // We're adding props to the ShoppingItem for different test cases
        const testItem = { name: 'test-item', checked: false } //passing in item in proper format
        const wrapper = shallow(<ShoppingItem item={testItem} />)
        expect(toJson(wrapper)).toMatchSnapshot()
    })

    it('strikes through checked items', () => {
        const testItem = { name: 'checked-item', checked: true }//formatted
        const wrapper = shallow(<ShoppingItem item={testItem} />)
        expect(toJson(wrapper)).toMatchSnapshot()
    })
})