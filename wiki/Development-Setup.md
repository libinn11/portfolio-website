# Development Setup Guide

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v18 or higher)
- **npm** (comes with Node.js)
- **Git** for version control
- **Angular CLI** (v18 or higher)

## Installation Steps

### 1. Clone Repository
```bash
git clone https://github.com/libinn11/portfolio-website.git
cd portfolio-website
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Environment Setup
The project uses environment variables for configuration:

```bash
# Create .env file (optional)
NODE_ENV=development
PORT=4200
```

### 4. Run Development Server
```bash
# Start development server with hot reload
npm start

# Alternative command
ng serve
```

### 5. Access Application
Open your browser and navigate to:
- **Local**: http://localhost:4200
- **Network**: http://your-local-ip:4200

## Project Configuration

### Angular Configuration
Key configuration files:
- `angular.json` - Angular CLI configuration
- `tsconfig.json` - TypeScript configuration
- `package.json` - Dependencies and scripts

### Data Configuration
- `public/profile.json` - Portfolio data source
- Update this file to modify content

## Development Commands

### Available Scripts
```bash
# Start development server
npm start

# Build for production
npm run build

# Run tests
npm test

# Lint code
npm run lint

# Preview production build
npm run preview
```

### Development Workflow
1. **Make changes** to components or data
2. **Test locally** at http://localhost:4200
3. **Build project** to verify no errors
4. **Commit changes** with descriptive messages
5. **Push to GitHub** and create PR

## Common Issues & Solutions

### Port Already in Use
```bash
# Kill existing process
sudo lsof -ti:4200 | xargs kill -9

# Or use different port
ng serve --port 4201
```

### Build Errors
```bash
# Clear cache
rm -rf .angular
rm -rf dist

# Reinstall dependencies
npm ci
```

### Profile Image Not Loading
1. Check `public/profile.json` path
2. Verify image exists in `public/assets/images/`
3. Ensure correct file extension (.jpg/.png/.svg)

## Code Structure Overview

### Component Architecture
```
src/app/components/
├── about/          # Professional information
├── contact/        # Contact form and links
├── education/       # Academic background
├── experience/      # Work history
├── footer/          # Site footer
├── header/          # Navigation
├── home/           # Main layout
├── projects/        # Project showcase
└── skills/          # Technical skills
```

### Services
```
src/app/services/
└── profile.service.ts    # Data management
```

### Models
```
src/app/models/
└── profile.interface.ts   # TypeScript interfaces
```

## Styling Guidelines

### SCSS Structure
- Use component-specific styles
- Follow BEM methodology
- Implement responsive design
- Use CSS variables for consistency

### Color Scheme
- **Primary**: #667eea to #764ba2 (gradient)
- **Secondary**: #007bff (blue)
- **Text**: #2c3e50 (dark)
- **Background**: #f8f9fa (light)

## Testing

### Run Tests
```bash
# Unit tests
npm test

# End-to-end tests
npm run e2e

# Test with coverage
npm run test:coverage
```

### Browser Testing
Test in:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Performance Optimization

### Build Optimization
- Lazy loading implemented
- Tree shaking enabled
- Minification active
- Source maps generated

### Runtime Optimization
- OnPush change detection
- TrackBy functions
- Proper unsubscribe patterns
- Efficient selectors

---

*For detailed architecture, see [Home](Home.md)*
