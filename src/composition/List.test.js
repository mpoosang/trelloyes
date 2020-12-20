import React from 'react';
import ReactDOM from 'react-dom';
import List from './List';
import renderer from 'react-test-renderer';

describe('List component tests', () => {
    const myCards = [
		{ id: 'a', title: 'First card', content: 'lorem ipsum' },
		{ id: 'b', title: 'Second card', content: 'lorem ipsum' },
		{ id: 'c', title: 'Third card', content: 'lorem ipsum' }
    ];
    
    // smoke test
    it('renders without crashing', () => {
        // first create a DOM element to render the component into
        const div = document.createElement('div');
        //render the component, this is the actual test, if something is wrong it will fail here
        ReactDOM.render(<List cards={myCards} />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    // snapshot test
    it('renders the UI as expected', () => {
        const tree = renderer
            .create(
                <section className='List'>
                    <header className='List-header'>
                        <h2>header={'myHeader'}</h2>
                    </header>
                    <div className='List-cards'>
                        <List cards='{myCards}' />
                        <button type="button" className="List-add-button">
                        + Add Random Card
                        </button>
                    </div>
                </section>
            )
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
});

