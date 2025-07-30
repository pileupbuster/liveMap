# Product Requirements Document: Ham Radio Live Map

## Executive Summary

The Ham Radio Live Map is a web-based application designed to provide amateur radio operators with a visual, real-time representation of their recent contacts. The application displays the geographic locations and profile information of the last 10 operators communicated with, enhancing the social and geographic awareness aspects of ham radio operations.

## Project Goals

1. Create an intuitive visual interface for tracking ham radio contacts
2. Display operator locations on an interactive map with profile pictures
3. Provide quick access to operator information
4. Demonstrate integration capabilities with ham radio data sources
5. Build a lightweight, server-rendered solution for easy deployment

## Target Users

### Primary Users
- **Amateur Radio Operators**: Licensed ham radio enthusiasts who want to visualize their contacts
- **Radio Clubs**: Organizations that want to display member activities
- **Contest Operators**: Participants tracking geographic diversity of contacts

### User Personas

**John, Contest Operator**
- Participates in DX contests regularly
- Needs to quickly see geographic spread of contacts
- Values real-time updates during operations

**Sarah, Casual Operator**
- Makes occasional contacts on weekends
- Enjoys the social aspect of ham radio
- Wants to remember operators she's talked with

## Functional Requirements

### Core Features

#### F1: Live Map Display
- Interactive map showing operator locations
- Centered on North America by default
- Zoom and pan capabilities
- Support for multiple map layers (street, satellite, terrain)

#### F2: Operator Markers
- Display profile pictures as map markers
- Show callsign on hover
- Click for detailed information popup
- Visual indication of most recent contact

#### F3: Operator List Sidebar
- Display last 10 operators in chronological order
- Show:
  - Profile picture thumbnail
  - Callsign
  - Name
  - Location (City, State/Country)
  - Grid square
- Click to center map on operator

#### F4: Demo Mode
- Pre-populated with 10 sample North American operators
- Realistic callsigns following FCC format
- Diverse geographic distribution
- Placeholder profile images

### Data Requirements

#### Operator Information
- **Callsign**: Valid amateur radio callsign (e.g., W1ABC, K2DEF)
- **Name**: Operator's full name
- **Location**: City, State/Province, Country
- **Coordinates**: Latitude and longitude
- **Grid Square**: Maidenhead locator (e.g., FN42)
- **Profile Image**: URL to operator's photo
- **Contact Time**: Timestamp of communication

#### Geographic Coverage
- Focus on North American operators for demo
- Support for international contacts in future versions
- Accurate coordinate mapping for major cities

## Non-Functional Requirements

### Performance
- Page load time < 2 seconds
- Smooth map interactions (60 fps)
- Efficient rendering of markers
- Minimal server processing time

### Usability
- Intuitive interface requiring no training
- Responsive design for desktop and tablet
- Clear visual hierarchy
- Accessible color schemes

### Technical Constraints
- Server-side rendering (SSR) only
- No client-side state management
- Minimal JavaScript for map interactions
- CDN-hosted dependencies where possible

### Browser Support
- Chrome (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Edge (latest 2 versions)

## Technical Architecture

### Technology Stack
- **Backend**: Node.js with Express 4.x
- **Templating**: EJS for server-side rendering
- **Map Library**: Leaflet.js 1.9.x
- **Map Tiles**: OpenStreetMap
- **Styling**: Vanilla CSS with flexbox/grid
- **Package Manager**: npm

### Application Structure
```
/
├── server.js           # Express application
├── package.json        # Dependencies
├── views/
│   └── index.ejs      # Main map view
├── public/
│   ├── css/
│   │   └── style.css  # Application styles
│   └── images/
│       └── placeholder.jpg
└── data/
    └── operators.js   # Mock operator data
```

### Data Flow
1. User requests map page
2. Server generates mock operator data
3. Server renders EJS template with data
4. Client displays interactive map
5. User interactions handled by Leaflet.js

## UI/UX Requirements

### Layout
- **Desktop**: 70/30 split (map/sidebar)
- **Tablet**: 60/40 split with collapsible sidebar
- **Color Scheme**: 
  - Primary: Blue (#2196F3)
  - Secondary: Green (#4CAF50)
  - Background: Light gray (#F5F5F5)
  - Text: Dark gray (#333333)

### Map Interface
- Default zoom level showing continental US
- Cluster nearby operators at low zoom levels
- Custom marker icons with profile pictures
- Smooth animations for pan/zoom

### Operator Cards
- Clean card design with subtle shadows
- Hover effects for interactivity
- Clear typography hierarchy
- Flag icons for countries

## Success Metrics

### Completion Criteria
1. Functional map displaying 10 operators
2. Clickable markers with information popups
3. Responsive sidebar with operator list
4. Clean, professional visual design
5. Page loads in under 2 seconds
6. Cross-browser compatibility verified

### Quality Indicators
- Code follows Node.js best practices
- Clear documentation and comments
- Modular, maintainable structure
- Error handling for edge cases
- Accessibility standards met (WCAG 2.1 AA)

## Future Enhancements

### Phase 2 Considerations
- Real QRZ.com API integration
- WebSocket support for real-time updates
- Operator search functionality
- Contact history persistence
- Mobile-responsive design
- Dark mode support

### Phase 3 Possibilities
- Integration with logging software
- Heat map of contact density
- Time-based playback of contacts
- Social features (operator comments)
- Export capabilities (KML, GPX)

## Constraints and Assumptions

### Constraints
- Demo version only (no real API integration)
- Limited to 10 operators at a time
- North American focus for initial version
- No user authentication required

### Assumptions
- Users have modern web browsers
- Stable internet connection available
- Basic familiarity with web maps
- Desktop/laptop primary use case

## Risk Mitigation

### Technical Risks
- **Map service availability**: Use multiple tile providers
- **Performance with many markers**: Implement clustering
- **Browser compatibility**: Thorough testing matrix

### User Experience Risks
- **Information overload**: Clean, minimal interface
- **Learning curve**: Intuitive controls, help tooltips
- **Data accuracy**: Clear indication of demo mode

## Approval and Sign-off

This PRD represents the initial requirements for the Ham Radio Live Map application. The focus is on creating a functional, visually appealing demo that can be expanded with real data integration in future phases.

**Document Version**: 1.0  
**Last Updated**: January 2025  
**Status**: Ready for Development