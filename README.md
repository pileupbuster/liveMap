# Ham Radio Live Map

A glassmorphic ham radio queue system displaying operator locations on an interactive map.

## Static Website Version

This is now a **static website** that can be hosted anywhere without a server. Simply open `index.html` in any modern web browser.

## Features

- **Glassmorphic UI Design** with frosted glass effects
- **Interactive Leaflet Map** with operator profile markers
- **Ham Radio Queue System** showing 4 operators waiting
- **Current Operator Display** with profile information
- **Real-time UTC Clock**
- **Responsive Design** for desktop and tablet
- **Dark Theme** with vibrant ham radio colors

## Usage

### Option 1: Direct File Access
Simply open `index.html` in your web browser. The map uses CARTO tiles which work without authentication.

### Option 2: Local Web Server
For development, you can serve it locally:

```bash
# Python 3
python3 -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000

# Node.js (if you have http-server installed)
npx http-server
```

Then open http://localhost:8000 in your browser.

### Option 3: Static Hosting
Host the files on any static web server:
- GitHub Pages
- Netlify
- Vercel
- Amazon S3
- Any web server

## File Structure

```
/
├── index.html          # Main HTML file (static website)
├── public/
│   ├── css/
│   │   └── style.css  # Glassmorphic styles
│   └── images/        # Local images
├── server.js          # (Legacy - for Node.js version)
├── views/             # (Legacy - EJS templates)
└── data/              # (Legacy - server data)
```

## Technologies

- **HTML5**
- **CSS3** with glassmorphic effects
- **JavaScript** (vanilla)
- **Leaflet.js** for interactive mapping
- **Stadia Maps** for dark map tiles

## Design Features

- Frosted glass panels with backdrop blur
- Floating animated glass particles
- Shimmer effects on operator cards
- Semi-transparent overlays
- Depth and layering with shadows
- Smooth animations and transitions

## Browser Support

- Chrome (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Edge (latest 2 versions)

## License

ISC