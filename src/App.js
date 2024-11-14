"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const StoryList_1 = __importDefault(require("./components/StoryList"));
const StoryViewer_1 = __importDefault(require("./components/StoryViewer"));
const stories_json_1 = __importDefault(require("./data/stories.json"));
require("./App.css");
const App = () => {
    const [stories, setStories] = (0, react_1.useState)([]);
    const [currentStory, setCurrentStory] = (0, react_1.useState)(null);
    const isMobile = window.innerWidth <= 768;
    (0, react_1.useEffect)(() => {
        setStories(stories_json_1.default);
    }, []);
    return ((0, jsx_runtime_1.jsx)("div", { children: isMobile ? ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("div", { className: "app-title", children: "Instagram Stories" }), (0, jsx_runtime_1.jsx)(StoryList_1.default, { stories: stories, onStorySelect: setCurrentStory }), currentStory && ((0, jsx_runtime_1.jsx)(StoryViewer_1.default, { stories: stories, currentStory: currentStory, onClose: () => setCurrentStory(null) }))] })) : ((0, jsx_runtime_1.jsx)("div", { className: "desktop-message", children: (0, jsx_runtime_1.jsx)("p", { children: "This feature is only available on mobile devices." }) })) }));
};
exports.default = App;
