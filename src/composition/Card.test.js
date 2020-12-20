import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';
import renderer from 'react-test-renderer';

// smoke test
it('renders without crashing', () => {
    // first create a DOM element to render the component into
    const div = document.createElement('div');
    //render the component, this is the actual test, if something is wrong it will fail here
    ReactDOM.render(<Card />, div);
    //clean up code
    ReactDOM.unmountComponentAtNode(div);
});

// snapshot test
it('renders the UI as expected', () => {
    const tree = renderer
        .create(
            div name='Card'>
                <button type='button'>delete</button>
                <h3>title={'myTitle'}</h3>
                <p>content={'myContent'}</p>
            </div>
        )
        .toJSON();
        expect(tree).toMatchSnapshot();
});