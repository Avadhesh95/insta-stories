import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from '../App';

describe('App Component', () => {
    test('renders StoryList component initially', () => {
        render(<App />);
        expect(screen.getByTestId('story-list')).toBeInTheDocument();
    });

    test('clicking a story thumbnail opens StoryViewer', () => {
        render(<App />);
        fireEvent.click(screen.getAllByAltText('story thumbnail')[0]);
        expect(screen.getByTestId('story-viewer')).toBeInTheDocument();
    });

    test('closing StoryViewer returns to StoryList', () => {
        render(<App />);
        fireEvent.click(screen.getAllByAltText('story thumbnail')[0]);
        fireEvent.click(screen.getByText('Close'));
        expect(screen.getByTestId('story-list')).toBeInTheDocument();
    });
});
