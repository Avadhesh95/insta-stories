import { render, screen, fireEvent } from '@testing-library/react';
import StoryList from '../components/StoryList';
import { Story } from '../App';

describe('StoryList Component', () => {
    const mockStories: Story[] = [
        { id: 1, imageUrl: 'story1.jpg', userName: 'User1' },
        { id: 2, imageUrl: 'story2.jpg', userName: 'User2' },
    ];
    const mockOnStorySelect = jest.fn();

    beforeEach(() => {
        mockOnStorySelect.mockClear();
    });

    test('renders all stories', () => {
        render(<StoryList stories={mockStories} onStorySelect={mockOnStorySelect} />);
        const thumbnails = screen.getAllByAltText('story thumbnail');
        expect(thumbnails).toHaveLength(mockStories.length);
    });

    test('displays the correct user names', () => {
        render(<StoryList stories={mockStories} onStorySelect={mockOnStorySelect} />);
        mockStories.forEach((story) => {
            expect(screen.getByText(story.userName)).toBeInTheDocument();
        });
    });

    test('triggers onStorySelect when a story is clicked', () => {
        render(<StoryList stories={mockStories} onStorySelect={mockOnStorySelect} />);
        const thumbnails = screen.getAllByAltText('story thumbnail');
        fireEvent.click(thumbnails[0]);
        expect(mockOnStorySelect).toHaveBeenCalledTimes(1);
        expect(mockOnStorySelect).toHaveBeenCalledWith(mockStories[0]);
    });
});
