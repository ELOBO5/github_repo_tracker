import { default as RepoCard } from '.';
import { screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import copy from 'copy-to-clipboard';

jest.mock('copy-to-clipboard');

describe('RepoCard', () => {

    beforeEach(() => {

        jest.resetAllMocks();

        const initState = {
            result: {
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
            <RepoCard />
            </MemoryRouter>,
            { initState }
        );
    });

    it('correctly renders the card with repo information', () => {
        const repoDiv = screen.getByRole('repository-information');
        expect(repoDiv.childElementCount).toBe(3)
        expect(repoDiv.children[0].childElementCount).toBe(2);
        expect(repoDiv.children[1].childElementCount).toBe(2);
        expect(repoDiv.children[2].childElementCount).toBe(4);
    });

    it('checkes that buttons call the copy function when they are clicked', () => {
        const htmlBtn = screen.getAllByRole('button')[1];
        copy.mockResolvedValue(() => {});
        userEvent.click(htmlBtn);
        expect(copy).toHaveBeenCalledTimes(1);
        expect(copy).toHaveBeenCalledWith('testHTMLUrl')
    });

    it('checkes that buttons call the copy function when they are clicked', () => {
        const sshBtn = screen.getAllByRole('button')[2];
        copy.mockResolvedValue(() => {});
        userEvent.click(sshBtn);
        expect(copy).toHaveBeenCalledTimes(1);
        expect(copy).toHaveBeenCalledWith('testSSHUrl')
    })
})
