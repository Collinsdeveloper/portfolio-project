# Personal Portfolio Showcase

A modern, responsive React application for showcasing creative projects and work. This application allows users to view a collection of projects and dynamically add new ones through a user-friendly interface.

## Features

- **Project Display**: Clean, card-based layout for showcasing projects
- **Dynamic Project Addition**: Form to add new projects with title, description, tags, and links
- **Search Functionality**: Real-time filtering of projects by title, description, or tags
- **Responsive Design**: Mobile-friendly layout that works on all devices
- **Local Storage**: Projects persist between browser sessions
- **Modern UI**: Clean, professional design with hover effects and smooth transitions

## Technologies Used

- **React 19**: Latest React with modern hooks and features
- **Vite**: Fast build tool and development server
- **Jest**: Testing framework for unit tests
- **React Testing Library**: Component testing utilities
- **ESLint**: Code linting and quality assurance
- **CSS**: Modern CSS with CSS variables for theming

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd portfolio-project
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run test` - Run tests
- `npm run lint` - Run ESLint

## Project Structure

```
src/
├── components/
│   ├── ProjectCard.jsx      # Individual project display component
│   ├── ProjectList.jsx      # List container for projects
│   ├── ProjectForm.jsx      # Form for adding new projects
│   └── SearchBar.jsx        # Search input component
├── App.jsx                  # Main application component
├── App.css                  # Application styles
├── index.css                # Global styles
├── main.jsx                 # Application entry point
└── setupTests.js           # Test configuration
```

## Testing

The application includes comprehensive unit tests for all components:

- ProjectCard component rendering
- ProjectList display logic
- SearchBar functionality
- ProjectForm validation and submission

Run tests with:
```bash
npm test
```

## Features in Detail

### Project Management
- Add projects with title, description, tags, and external links
- Projects are stored in browser localStorage
- Sample projects are loaded on first visit

### Search and Filter
- Search across project titles, descriptions, and tags
- Real-time filtering as you type
- Case-insensitive search

### Responsive Design
- Desktop: Grid layout with multiple columns
- Tablet: Adjusted spacing and layout
- Mobile: Single column layout with optimized spacing

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests for new functionality
5. Ensure all tests pass
6. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).
