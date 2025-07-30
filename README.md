# Ham Radio Live Map

A web-based application that provides amateur radio operators with a visual, real-time representation of their recent contacts. The application displays the geographic locations and profile information of the last 10 operators communicated with on an interactive map.

## Features

- Interactive map showing operator locations
- Profile picture markers for each operator
- Operator sidebar with detailed information
- Click-to-center functionality for easy navigation
- Responsive design for desktop and tablet
- Server-side rendering for fast performance

## Technologies

- **Backend**: Node.js with Express 4.x
- **Templating**: EJS (server-side rendering)
- **Map Library**: Leaflet.js 1.9.x
- **Map Tiles**: OpenStreetMap
- **Styling**: Vanilla CSS with flexbox/grid

## Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/liveMap.git
cd liveMap
```

2. Install dependencies:
```bash
npm install
```

## Running the Application

### Development Mode
```bash
npm run dev
```

### Production Mode
```bash
npm start
```

The application will start on `http://localhost:3000`

## Project Structure

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
│       └── placeholder.svg
└── data/
    └── operators.js   # Mock operator data
```

## Demo Data

The application includes 10 mock ham radio operators with:
- Valid amateur radio callsigns
- Diverse North American locations
- Accurate GPS coordinates
- Maidenhead grid squares
- Placeholder profile images

## Usage

1. **View Operators**: The sidebar displays the 10 most recent contacts
2. **Click Cards**: Click any operator card to center the map on their location
3. **View Details**: Click map markers to see operator information
4. **Navigate**: Use standard map controls to pan and zoom

## Configuration

Set the port using environment variables:
```bash
PORT=3000 npm start
```

## Browser Support

- Chrome (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Edge (latest 2 versions)

## Future Enhancements

- Real QRZ.com API integration
- WebSocket support for real-time updates
- Operator search functionality
- Contact history persistence
- Mobile-responsive design
- Dark mode support

## License

ISC