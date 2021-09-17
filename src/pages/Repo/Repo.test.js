import { default as Repo } from '.';
import { screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

describe('Repo page', () => {

    beforeEach(() => {
        const initState = {
            result: {
                user: { name: 'testUser', login: 'testLogin', bio: 'testBio', avatar_url:'testUrl' },
                repos: [ {
                    name: 'testRepo',
                    description: 'testDescription',
                    forks_count: 3,
                    html_url: 'testHTMLUrl',
                    ssh_url: 'testSSHUrl',
                    stargazers_count: 1,
                    language: 'testLanguage',
                    created_at: 'testDate'
                    }],
            },
            error: null
        };

        renderWithReduxAndRouter(
            <MemoryRouter initialEntries={['/repo?testRepo']}>
                <Repo />
            </MemoryRouter>,
            { initState }
        );
    });

    it('renders the user profile section', () => {
        const profile = screen.getByLabelText('user-information')
        expect(profile).toBeInTheDocument();
    });

    it('renders the repo card', () => {
        const repoList = screen.getByRole('repository-information');
        expect(repoList).toBeInTheDocument();
    });

    it('renders the back button', () => {
        const backBtn = screen.getByText("Back");
        expect(backBtn).toBeInTheDocument();
    });
})
