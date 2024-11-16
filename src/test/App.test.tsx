import { render, screen, fireEvent } from '@testing-library/react';
import App from '../App';

describe('App Component', () => {
    beforeEach(() => {
        // Reset the innerWidth before each test
        Object.defineProperty(window, 'innerWidth', { writable: true });
    });

    test('renders the app title in mobile view', () => {
        window.innerWidth = 768;
        window.dispatchEvent(new Event('resize'));

        render(<App />);
        expect(screen.getByText('Instagram Stories')).toBeInTheDocument();
    });

    test('renders the desktop-only message in desktop view', () => {
        window.innerWidth = 1024;
        window.dispatchEvent(new Event('resize'));

        render(<App />);
        expect(screen.getByText('This feature is only available on mobile devices.')).toBeInTheDocument();
    });

    test('renders the story list in mobile view', () => {
        window.innerWidth = 768;
        window.dispatchEvent(new Event('resize'));

        render(<App />);
        const storyList = screen.getByTestId('story-list');
        expect(storyList).toBeInTheDocument();
    });

    test('opens the story viewer when a story is clicked', () => {
        window.innerWidth = 768;
        window.dispatchEvent(new Event('resize'));

        render(<App />);
        const storyThumbnails = screen.getAllByAltText('story thumbnail');
        expect(storyThumbnails.length).toBeGreaterThan(0);

        // Simulate clicking on the first story thumbnail
        fireEvent.click(storyThumbnails[0]);

        // Check if the StoryViewer is displayed
        expect(screen.getByTestId('story-viewer')).toBeInTheDocument();
    });

    test('closes the story viewer when the close button is clicked', () => {
        window.innerWidth = 768;
        window.dispatchEvent(new Event('resize'));

        render(<App />);
        const storyThumbnails = screen.getAllByAltText('story thumbnail');
        fireEvent.click(storyThumbnails[0]);

        const closeButton = screen.getByText('X');
        fireEvent.click(closeButton);

        // Ensure the story viewer is closed and story list is visible
        expect(screen.queryByTestId('story-viewer')).not.toBeInTheDocument();
        expect(screen.getByTestId('story-list')).toBeInTheDocument();
    });
});
