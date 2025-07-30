const operators = [
  {
    callsign: 'W1ABC',
    name: 'John Anderson',
    location: 'Boston, MA, USA',
    coordinates: { lat: 42.3601, lon: -71.0589 },
    gridSquare: 'FN42',
    profileImage: 'https://cdn-bio.qrz.com/w/kk7rrw/wadeshearer_tight_png.jpg?p=15b11e581c9c54aa2f9efbff14840398',
    contactTime: new Date(Date.now() - 1000 * 60 * 5).toISOString()
  },
  {
    callsign: 'K2DEF',
    name: 'Sarah Wilson',
    location: 'New York, NY, USA',
    coordinates: { lat: 40.7128, lon: -74.0060 },
    gridSquare: 'FN20',
    profileImage: 'https://cdn-bio.qrz.com/r/dl1rbr/Rainer.PNG?p=dbc5445c92c0fdd5d3763e86e9089c3f',
    contactTime: new Date(Date.now() - 1000 * 60 * 15).toISOString()
  },
  {
    callsign: 'VE3GHI',
    name: 'Michael Thompson',
    location: 'Toronto, ON, Canada',
    coordinates: { lat: 43.6532, lon: -79.3832 },
    gridSquare: 'FN03',
    profileImage: 'https://cdn-bio.qrz.com/f/wa3ptf/1083_4E51_B027_F9CC51BF85E2_jpeg.jpg?p=e63dff80d62185d3a6b1aa91031b96f0',
    contactTime: new Date(Date.now() - 1000 * 60 * 30).toISOString()
  },
  {
    callsign: 'W5JKL',
    name: 'Patricia Davis',
    location: 'Dallas, TX, USA',
    coordinates: { lat: 32.7767, lon: -96.7970 },
    gridSquare: 'EM12',
    profileImage: 'https://cdn-bio.qrz.com/u/iu5kzu/IU5KZU2_png.jpg?p=36dbf3c87f83f5fa3e988c01c12c2440',
    contactTime: new Date(Date.now() - 1000 * 60 * 45).toISOString()
  },
  {
    callsign: 'K6MNO',
    name: 'Robert Martinez',
    location: 'Los Angeles, CA, USA',
    coordinates: { lat: 34.0522, lon: -118.2437 },
    gridSquare: 'DM04',
    profileImage: 'https://cdn-bio.qrz.com/r/yb4kar/5390_267314243421586_679497191_n.jpg?p=bd36ece850291da11a5e84dfc51986f1',
    contactTime: new Date(Date.now() - 1000 * 60 * 60).toISOString()
  },
  {
    callsign: 'W7PQR',
    name: 'Jennifer Lee',
    location: 'Seattle, WA, USA',
    coordinates: { lat: 47.6062, lon: -122.3321 },
    gridSquare: 'CN87',
    profileImage: 'https://cdn-bio.qrz.com/r/ko6hjr/jonesport.jpeg',
    contactTime: new Date(Date.now() - 1000 * 60 * 90).toISOString()
  },
  {
    callsign: 'VE9STU',
    name: 'David Campbell',
    location: 'Halifax, NS, Canada',
    coordinates: { lat: 44.6488, lon: -63.5752 },
    gridSquare: 'FN84',
    profileImage: '/images/placeholder.svg',
    contactTime: new Date(Date.now() - 1000 * 60 * 120).toISOString()
  },
  {
    callsign: 'K0VWX',
    name: 'Maria Rodriguez',
    location: 'Denver, CO, USA',
    coordinates: { lat: 39.7392, lon: -104.9903 },
    gridSquare: 'DM79',
    profileImage: '/images/placeholder.svg',
    contactTime: new Date(Date.now() - 1000 * 60 * 150).toISOString()
  },
  {
    callsign: 'W4YZA',
    name: 'James Brown',
    location: 'Atlanta, GA, USA',
    coordinates: { lat: 33.7490, lon: -84.3880 },
    gridSquare: 'EM73',
    profileImage: '/images/placeholder.svg',
    contactTime: new Date(Date.now() - 1000 * 60 * 180).toISOString()
  },
  {
    callsign: 'K8BCD',
    name: 'Elizabeth Taylor',
    location: 'Chicago, IL, USA',
    coordinates: { lat: 41.8781, lon: -87.6298 },
    gridSquare: 'EN61',
    profileImage: '/images/placeholder.svg',
    contactTime: new Date(Date.now() - 1000 * 60 * 210).toISOString()
  }
];

module.exports = operators;