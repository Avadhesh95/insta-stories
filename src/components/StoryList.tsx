import React from 'react';
import { Story } from '../App';
import './storyList.css';

interface StoryListProps {
    stories: Story[];
    onStorySelect: (story: Story) => void;
}

const StoryList: React.FC<StoryListProps> = ({ stories, onStorySelect }) => (
    <div className="story-list">
        {stories.map((story) => (
            <div>
                <img
                    key={story.id}
                    src={story.imageUrl}
                    alt="story thumbnail"
                    className="story-thumbnail"
                    onClick={() => onStorySelect(story)} />
                <div className='user-name'>{story.userName}</div>
            </div>
        ))}
    </div>
);

export default StoryList;
