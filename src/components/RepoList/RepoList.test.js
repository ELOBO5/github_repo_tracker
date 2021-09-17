import { default as RepoList } from '.';
import { screen } from '@testing-library/react';

describe('RepoList', () => {

    it('renders the NavLinks with repo names', () => {
        const initState = {
            result: {
                repos: [
                    { name: 'testRepo1' },
                    { name: 'testRepo2' },
                    { name: 'testRepo3' },
                    { name: 'testRepo4' }
            ]},
            error: null
        };

        renderWithReduxAndRouter(<RepoList />, { initState });
        const links = screen.getAllByRole('link');
        const errorMsg = screen.queryByRole('alert');
        expect(links.length).toBe(4);
        expect(errorMsg).not.toBeInTheDocument();
    });

    it("renders the error message if 'error' is not 'null' or 'false'", () => {
        const initState = {
            result: {
                repos: []
            },
            error: 'some error message'
        };

        renderWithReduxAndRouter(<RepoList />, { initState });
        const errorMsg = screen.getByRole('alert');
        expect(errorMsg.textContent).toBe('Could not find repo data');
    });

})
