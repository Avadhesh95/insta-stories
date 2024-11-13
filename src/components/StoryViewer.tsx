import React, { useEffect, useState, useCallback } from 'react';
import { Story } from '../App';
import './StoryViewer.css';

interface StoryViewerProps {
    stories: Story[];
    currentStory: Story;
    onClose: () => void;
}

const StoryViewer: React.FC<StoryViewerProps> = ({
    stories,
    currentStory,
    onClose,
}) => {
    const [currentIndex, setCurrentIndex] = useState(
        stories.findIndex((story) => story.id === currentStory.id)
    );
    const [prevIndex, setPrevIndex] = useState<number | null>(null);
    const [slideDirection, setSlideDirection] = useState<'next' | 'prev'>('next');
    const [isLoading, setIsLoading] = useState(true);


    useEffect(() => {
        setCurrentIndex(stories.findIndex((story) => story.id === currentStory.id));
        setIsLoading(true);
    }, [currentStory, stories]);

    const handleNext = useCallback(() => {
        setSlideDirection('next');
        setPrevIndex(currentIndex);
        setCurrentIndex((prev) => (prev + 1) % stories.length);
        setIsLoading(true);
    }, [currentIndex, stories.length]);

    const handlePrevious = useCallback(() => {
        setSlideDirection('prev');
        setPrevIndex(currentIndex);
        setCurrentIndex((prev) => (prev - 1 + stories.length) % stories.length);
        setIsLoading(true);
    }, [currentIndex, stories.length]);

    useEffect(() => {
        const timer = setTimeout(handleNext, 5000);
        return () => clearTimeout(timer);
    }, [handleNext, currentIndex]);

    return (
        <div className="story-viewer">
            <div className="story-content" onClick={(e) => e.stopPropagation()}>
                {isLoading && <div className="loading-spinner">Loading...</div>}
                <img src={stories[currentIndex].imageUrl} alt="story"
                    className={`story-image ${isLoading ? 'hidden' : ''}`}
                    onLoad={() => setIsLoading(false)}
                    style={{ display: isLoading ? 'none' : 'block' }}
                />
            </div>
            <button className="close-button" onClick={onClose}>
                X
            </button>
            <div className="story-navigation">
                <div className="left" onClick={handlePrevious}></div>
                <div className="right" onClick={handleNext}></div>
            </div>
        </div>
    );
};

export default StoryViewer;
