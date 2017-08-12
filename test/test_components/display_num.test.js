import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import DisplayNum from 'components/display_num';

describe ('<DisplayNum>', () => {
  let numberTag, number;
  
  it ('render components', () => {
    numberTag = renderer.create(
      <DisplayNum 
        number={number}
        highlightClass={number % 5 ? 'plain' : 'highlight'}
      />
    );
    expect(numberTag).toMatchSnapshot();
  });

  describe ('with different number', () => {
    beforeEach(() => {
      numberTag = shallow(
        <DisplayNum number={number} highlightClass={number % 5 ? 'plain' : 'highlight'}/>
      );
    });

    describe ('when number % 5 !== 0', () => {
      number = 1;
      it ('change class to plain', () => {
        expect(numberTag.find('div').hasClass('plain')).toBetruthy;
      });
    });

    describe ('when number % 5 === 0', () => {
      number = 10;
      it ('change class to highlight', () => {
        expect(numberTag.find('div').hasClass('highlight')).toBetruthy;
      });
    });
  });
});