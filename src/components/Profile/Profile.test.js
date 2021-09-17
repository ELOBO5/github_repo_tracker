import { default as Profile } from '.';
import { screen } from '@testing-library/react';

describe('Profile', () => {

    it('correctly renders the user profile', () => {
        const initState = {
            result: {
                user: {
                        login: 'testLogin',
                        name: 'testName',
                        avatar_url: 'testUrl',
                        bio: ''
                    },
            },
            error: null
        };

        renderWithReduxAndRouter(<Profile />, { initState });
        const img = screen.getByRole('img');
        const bio = screen.getByRole('user-bio');
        const userName = screen.getByRole('userName');
        const login = screen.getByRole('userLogin');
        const errorMsg = screen.queryByRole('alert');

        expect(errorMsg).not.toBeInTheDocument();
        expect(img.src).toBe('http://localhost/testUrl');
        expect(bio.textContent).toBe('');
        expect(userName.textContent).toBe('testName');
        expect(login.textContent).toBe('testLogin');
    });

    it("renders the error message if 'error' is not 'null' or 'false'", () => {
        const initState = {
            result: {
                user: {}
            },
            error: 'some error message'
        };

        renderWithReduxAndRouter(<Profile />, { initState });
        const errorMsg = screen.getByRole('alert');
        expect(errorMsg.textContent).toBe('Could not find user data');
    });

})
