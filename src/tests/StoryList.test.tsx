import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import StoryList from '../components/StoryList';
import { Story } from '../App';

const stories = [
    { id: 1, imageUrl: 'https://example.com/image1.jpg', userName: 'User 1' },
    { id: 2, imageUrl: 'https://example.com/image2.jpg', userName: 'User 2' },
];

describe('StoryList Component', () => {
    test('renders story thumbnails', () => {
        render(<StoryList stories={stories} onStorySelect={function (story: Story): void {
            throw new Error('Function not implemented.');
        }} />);
        expect(screen.getAllByAltText('story thumbnail').length).toBe(stories.length);
    });

    test('clicking thumbnail opens the story', () => {
        const onThumbnailClick = jest.fn();
        render(<StoryList stories={stories} onThumbnailClick={onThumbnailClick} />);
        fireEvent.click(screen.getAllByAltText('story thumbnail')[0]);
        expect(onThumbnailClick).toHaveBeenCalledWith(0);
    });

    test('does not render thumbnails if stories list is empty', () => {
        render(<StoryList stories={[]} onStorySelect={function (story: Story): void {
            throw new Error('Function not implemented.');
        }} />);
        expect(screen.queryAllByAltText('story thumbnail').length).toBe(0);
    });
});
