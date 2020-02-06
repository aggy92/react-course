import React from 'react';
import {shallow} from 'enzyme';
import App from "./App";


const addNumbers = (a,b) => a+b;
describe("addNumbers test", () => {
    it("Should add a to b", () => {
        const addOneAndTwo = addNumbers(1,2);
        expect(addOneAndTwo).toEqual(3);
    });
    it('Should match a snapshot of App', () => {
        const wrapper =shallow(<App/>);
        expect(wrapper.html()).toMatchSnapshot();
    })

});
/*

const person = {name: 'Test'};

it('Compare two objects', ()=> {
    expect(person).toBe({name: 'Test'});
});*/
