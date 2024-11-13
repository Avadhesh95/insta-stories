import React, { useEffect, useState } from 'react';
import StoryList from './components/StoryList';
import StoryViewer from './components/StoryViewer';
import storyData from './data/stories.json';
import './App.css';

export interface Story {
  id: number;
  imageUrl: string;
  userName: string;
}

const App: React.FC = () => {
  const [stories, setStories] = useState<Story[]>([]);
  const [currentStory, setCurrentStory] = useState<Story | null>(null);
  const isMobile = window.innerWidth <= 768;


  useEffect(() => {
    setStories(storyData);
  }, []);

  return (
    <div>
      {isMobile ? (
        <>
          <div className="app-title">Instagram Stories</div>
          <StoryList stories={stories} onStorySelect={setCurrentStory} />
          {currentStory && (
            <StoryViewer
              stories={stories}
              currentStory={currentStory}
              onClose={() => setCurrentStory(null)}
            />
          )}
        </>
      ) : (
        <div className="desktop-message">
          <p>This feature is only available on mobile devices.</p>
        </div>
      )}
    </div>
  );
};

export default App;
