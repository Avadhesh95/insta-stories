# Instagram Stories Feature Implementation

A simplified mobile version of the Instagram Stories feature built with React.js and TypeScript. The application allows users to view a series of stories (images) with an automatic 5-second transition between them and manual navigation controls.

## Deployment

You can view the live deployment of this application at the following link:

[**Live App Deployment**](https://majestic-ganache-1a7559.netlify.app/)

## Setting Up the Project

Follow these steps to set up and run this project locally.

### Prerequisites

Ensure you have the following installed:

- **Node.js** (v18 or higher) - Download and install from [Node.js Official Website](https://nodejs.org/)
- **NPM** (or use yarn as an alternative)

### Steps to Set Up

1. Clone the repository:

   ```bash
   git clone https://github.com/Avadhesh95/insta-stories.git
   ```

2. Navigate into the project folder:

   ```bash
   cd insta-stories
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

4. To run the development server:

   ```bash
   npm run dev
   ```

   This will start the application on `http://localhost:5173/`.

5. Open the application in your browser.

## Design Choices and Optimization

### 1. **Mobile-First Design**

The application is built to be mobile-first, ensuring that it provides a good user experience on mobile devices. The main view is optimized for smaller screens, and all interactive elements (like story navigation) are touch-friendly.

### 2. **Performance Optimization**

- **Lazy Loading**: Stories load on demand to avoid overwhelming the initial page load.
- **CSS Transitions**: Smooth transitions between stories to enhance the user experience without introducing performance bottlenecks.
- **State Management**: React's `useState` and `useEffect` hooks are used to manage the current story index and handle auto-advancing between stories, ensuring efficient rendering.

### 3. **Scalability**

- **Component Modularity**: Each feature, such as the story list and story viewer, is contained within individual components. This makes the codebase easy to scale if additional features, like story comments or likes, are added.
- **Responsive Design**: CSS is written in a way that ensures responsiveness, allowing the app to scale from mobile to tablet screens effectively.

### 4. **No External Libraries for Core Functionality**

The core functionality of the story transitions, navigation, and lazy loading is implemented without the use of external libraries like `react-router` or `redux`, making it lightweight and more manageable.

## Folder Structure

```
├── index.html
├── src/
│   ├── components/
│   │   ├── StoryList.tsx
│   │   └── StoryViewer.tsx
│   ├── data/
│   │   └── stories.json
│   ├── tests/
│   │   ├── App.test.tsx
│   │   ├── StoryList.test.tsx
│   │   └── StoryViewer.test.tsx
│   ├── App.tsx
│   ├── main.tsx
├── jest.config.js
├── package.json
└── README.md
```

```

```
