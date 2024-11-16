import { render, screen, fireEvent, act } from '@testing-library/react';
import StoryViewer from '../components/StoryViewer';
import { Story } from '../App';

jest.useFakeTimers();

describe('StoryViewer Component', () => {
    const mockStories: Story[] = [
        { id: 1, imageUrl: 'story1.jpg', userName: 'User1' },
        { id: 2, imageUrl: 'story2.jpg', userName: 'User2' },
        { id: 3, imageUrl: 'story3.jpg', userName: 'User3' },
    ];
    const mockOnClose = jest.fn();

    beforeEach(() => {
        mockOnClose.mockClear();
    });

    test('renders the current story', () => {
        render(<StoryViewer stories={mockStories} currentStory={mockStories[0]} onClose={mockOnClose} />);
        expect(screen.getByTestId('story-viewer')).toBeInTheDocument();
        expect(screen.getByAltText('story')).toHaveAttribute('src', 'story1.jpg');
    });

    test('navigates to the next story', () => {
        render(<StoryViewer stories={mockStories} currentStory={mockStories[0]} onClose={mockOnClose} />);
        fireEvent.click(screen.getByText('', { selector: '.right' })); // Simulate next navigation
        expect(screen.getByAltText('story')).toHaveAttribute('src', 'story2.jpg');
    });

    test('navigates to the previous story', () => {
        render(<StoryViewer stories={mockStories} currentStory={mockStories[1]} onClose={mockOnClose} />);
        fireEvent.click(screen.getByText('', { selector: '.left' })); // Simulate previous navigation
        expect(screen.getByAltText('story')).toHaveAttribute('src', 'story1.jpg');
    });

    test('triggers onClose callback when close button is clicked', () => {
        render(<StoryViewer stories={mockStories} currentStory={mockStories[0]} onClose={mockOnClose} />);
        fireEvent.click(screen.getByText('X')); // Simulate close button click
        expect(mockOnClose).toHaveBeenCalledTimes(1);
    });

    test('auto-advances to the next story after 5 seconds', () => {
        render(<StoryViewer stories={mockStories} currentStory={mockStories[0]} onClose={mockOnClose} />);
        act(() => {
            jest.advanceTimersByTime(5000); // Fast-forward 5 seconds
        });
        expect(screen.getByAltText('story')).toHaveAttribute('src', 'story2.jpg');
    });

    test('loops back to the first story after the last story', () => {
        render(<StoryViewer stories={mockStories} currentStory={mockStories[2]} onClose={mockOnClose} />);
        fireEvent.click(screen.getByText('', { selector: '.right' })); // Simulate next navigation
        expect(screen.getByAltText('story')).toHaveAttribute('src', 'story1.jpg');
    });

    test('loops back to the last story when navigating previous from the first story', () => {
        render(<StoryViewer stories={mockStories} currentStory={mockStories[0]} onClose={mockOnClose} />);
        fireEvent.click(screen.getByText('', { selector: '.left' })); // Simulate previous navigation
        expect(screen.getByAltText('story')).toHaveAttribute('src', 'story3.jpg');
    });
});
