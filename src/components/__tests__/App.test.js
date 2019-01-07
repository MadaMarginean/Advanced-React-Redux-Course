import React from 'react';
import  { shallow } from 'enzyme';

import ReactDOM from 'react-dom';
import App from 'components/App';
import CommentBox from "components/CommentBox";
import CommentList from "components/CommentList";

it('shows a comment box', () => {
  // ---> without enzyme / Static Enzyme (Render the given component and return plain HTML)
  
  // const div = document.createElement('div');
  //
  // ReactDOM.render(<App />, div);
  //
  // // Looks inside the div
  // // and checks to see if the CommentBox is in there
  // expect(div.innerHTML).toContain('Comment box');
  //
  // ReactDOM.unmountComponentAtNode(div);
  
  // ---> using Shallow Enzyme (Render *just* the given component and none of its children)
  
  const wrapped = shallow(<App />);

  expect(wrapped.find(CommentBox).length).toEqual(1);
  
  // ---> using Enzyme
});

it('shows a comment list', () => {
  const wrapped = shallow(<App />);
  
  expect(wrapped.find(CommentList).length).toEqual(1);
  
});
