import { default as Form } from '.';
import { screen } from '@testing-library/react';

describe('Form', () => {

    it('submits the form and calls the getResults function', () => {
        const stubGetResults = jest.fn();
        renderWithReduxAndRouter(<Form getResults={stubGetResults}/>);
        const usernameInput = screen.getByPlaceholderText('username');
        userEvent.type(usernameInput, 'testUsername{enter}');
        expect(stubGetResults).toHaveBeenCalledTimes(1);
        expect(stubGetResults.mock.calls[0][1]).toBe('testUsername');
    });

})
