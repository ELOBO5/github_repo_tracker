import { default as User } from '.';
import { screen } from '@testing-library/react';

describe('User page', () => {

    it('renders the user profile section', () => {
        renderWithReduxAndRouter(<User />);
        const profile = screen.getByLabelText('user-information')
        expect(profile).toBeInTheDocument();
    })

    it('renders the list of repositories', () => {
        renderWithReduxAndRouter(<User />);
        const repoList = screen.getByLabelText('list-of-repositories');
        expect(repoList).toBeInTheDocument();
    })
})
