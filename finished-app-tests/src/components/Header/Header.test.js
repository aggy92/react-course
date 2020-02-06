import React from 'react';
import {shallow} from 'enzyme';

describe('<Header />', () => {
    it("Should render with a prop", () => {
        const wrapper =shallow(<Header title="pokedex" />);
        expect(wrapper.text()).toEqual('Pokedek');
    });
});