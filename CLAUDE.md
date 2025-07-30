# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is the Ham Radio Live Map project - a web application that displays real-time geographic locations of ham radio operators on an interactive map. The project is currently in the planning phase with detailed PRD and task list documentation.

## Technology Stack

Based on the PRD specifications:
- **Backend**: Node.js with Express 4.x
- **Templating**: EJS (server-side rendering only)
- **Map Library**: Leaflet.js 1.9.x
- **Map Tiles**: OpenStreetMap
- **Styling**: Vanilla CSS (no frameworks)
- **Package Manager**: npm

## Project Structure

```
/
├── server.js           # Express application entry point
├── package.json        # Dependencies and scripts
├── views/
│   └── index.ejs      # Main map view template
├── public/
│   ├── css/
│   │   └── style.css  # Application styles
│   └── images/
│       └── placeholder.jpg
├── data/
│   └── operators.js   # Mock operator data
└── docs/
    └── prd/
        └── initialEffort/
            ├── PRD.md      # Product Requirements Document
            └── TaskList.md # Detailed implementation tasks
```

## Development Commands

Since the project is not yet initialized, here are the commands to set up and run the project:

```bash
# Initialize the project
npm init -y

# Install dependencies
npm install express ejs
npm install --save-dev nodemon

# Run development server (once configured)
npm run dev

# Run production server
npm start
```

## Key Development Constraints

1. **Server-Side Rendering Only**: No client-side state management or frameworks. All rendering must be done server-side with EJS.
2. **Minimal JavaScript**: Only use client-side JS for map interactions via Leaflet.
3. **Performance**: Page load time must be < 2 seconds.
4. **Browser Support**: Chrome, Firefox, Safari, Edge (latest 2 versions each).
5. **Demo Mode**: Initial version uses mock data only (10 North American operators).

## Implementation Priorities

When implementing features, follow the task prioritization from TaskList.md:
- **P0 (Critical)**: Core functionality - Express server, map display, operator list
- **P1 (High)**: Styling, interactions, responsive design
- **P2 (Medium)**: Enhancements like marker clustering
- **P3 (Low)**: Future considerations

## Mock Data Requirements

The `data/operators.js` module should export an array of operator objects with:
- `callsign`: Valid amateur radio callsign (e.g., W1ABC, K2DEF)
- `name`: Operator's full name
- `location`: City, State/Province, Country
- `coordinates`: { lat, lon } in decimal degrees
- `gridSquare`: Maidenhead locator (e.g., FN42)
- `profileImage`: URL to operator's photo
- `contactTime`: Timestamp of communication

## API Integration Note

The project has permissions configured for WebFetch to www.qrz.com domain, suggesting future integration with QRZ.com API for real operator data.

## Testing Approach

No testing framework is specified. Manual testing should follow the checklist in TaskList.md:
- Browser compatibility testing
- Performance testing (< 2 second load time)
- Responsive design testing
- Accessibility checks (WCAG 2.1 AA)

## Key Files to Reference

1. `/docs/prd/initialEffort/PRD.md` - Complete product requirements
2. `/docs/prd/initialEffort/TaskList.md` - Detailed task breakdown with acceptance criteria
3. `/.claude/settings.local.json` - Contains WebFetch permissions for qrz.com

## Common Tasks

- To start implementation, begin with Phase 1 tasks from TaskList.md (TASK-001 through TASK-005)
- When implementing the map, center on continental US with appropriate zoom level
- For operator cards in sidebar, implement click-to-center-map functionality
- Ensure all operator data includes proper North American coordinates