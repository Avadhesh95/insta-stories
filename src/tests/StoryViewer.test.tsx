import React from 'react';
import { render, screen, fireEvent, act } from '@testing-library/react';
import StoryViewer from '../components/StoryViewer';

const stories = [
    { id: 1, imageUrl: 'https://example.com/image1.jpg' },
    { id: 2, imageUrl: 'https://example.com/image2.jpg' },
];

describe('StoryViewer Component', () => {
    test('displays correct story on open', () => {
        render(<StoryViewer stories={stories} currentStoryIndex={0} />);
        expect(screen.getByAltText('current-story')).toHaveAttribute('src', stories[0].imageUrl);
    });

    test('auto-advances to the next story after 5 seconds', () => {
        jest.useFakeTimers();
        const { rerender } = render(<StoryViewer stories={stories} currentStoryIndex={0} />);
        act(() => jest.advanceTimersByTime(5000));
        rerender(<StoryViewer stories={stories} currentStoryIndex={1} />);
        expect(screen.getByAltText('current-story')).toHaveAttribute('src', stories[1].imageUrl);
        jest.useRealTimers();
    });

    test('navigates to next story on right click', () => {
        const setCurrentStoryIndex = jest.fn();
        render(<StoryViewer stories={stories} currentStoryIndex={0} setCurrentStoryIndex={setCurrentStoryIndex} />);
        fireEvent.click(screen.getByText('Next'));
        expect(setCurrentStoryIndex).toHaveBeenCalledWith(1);
    });

    test('navigates to previous story on left click', () => {
        const setCurrentStoryIndex = jest.fn();
        render(<StoryViewer stories={stories} currentStoryIndex={1} setCurrentStoryIndex={setCurrentStoryIndex} />);
        fireEvent.click(screen.getByText('Previous'));
        expect(setCurrentStoryIndex).toHaveBeenCalledWith(0);
    });

    test('close button closes StoryViewer', () => {
        const onClose = jest.fn();
        render(<StoryViewer stories={stories} currentStoryIndex={0} onClose={onClose} />);
        fireEvent.click(screen.getByText('Close'));
        expect(onClose).toHaveBeenCalled();
    });
});
