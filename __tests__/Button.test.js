import React from "react";
import 'react-native'
import renderer from 'react-test-renderer'
import ButtonComponent from "../src/commanComponent/ButtonComponent";

describe('Test custom button', () => {
    const wrapper = renderer.create(<ButtonComponent tittel="Test Button" />);
    it('should render', () => {
        expect(wrapper.toJSON()).toBeTruthy()
    });
});
