const operators = [
    {
        callsign: 'W1ABC',
        name: 'John Smith',
        location: 'Boston, MA, USA',
        coordinates: { lat: 42.3601, lon: -71.0589 },
        gridSquare: 'FN42',
        profileImage: 'https://i.pravatar.cc/150?img=12',
        contactTime: '2024-01-30T14:30:00Z',
        status: 'worked'
    },
    {
        callsign: 'K2DEF',
        name: 'Sarah Johnson',
        location: 'New York, NY, USA',
        coordinates: { lat: 40.7128, lon: -74.0060 },
        gridSquare: 'FN30',
        profileImage: 'https://i.pravatar.cc/150?img=5',
        contactTime: '2024-01-30T14:25:00Z',
        status: 'worked'
    },
    {
        callsign: 'W3GHI',
        name: 'Mike Davis',
        location: 'Philadelphia, PA, USA',
        coordinates: { lat: 39.9526, lon: -75.1652 },
        gridSquare: 'FM29',
        profileImage: 'https://i.pravatar.cc/150?img=8',
        contactTime: '2024-01-30T14:20:00Z',
        status: 'worked'
    },
    {
        callsign: 'N4JKL',
        name: 'Emily Wilson',
        location: 'Atlanta, GA, USA',
        coordinates: { lat: 33.7490, lon: -84.3880 },
        gridSquare: 'EM73',
        profileImage: 'https://i.pravatar.cc/150?img=9',
        contactTime: '2024-01-30T14:15:00Z',
        status: 'worked'
    },
    {
        callsign: 'W5MNO',
        name: 'Robert Brown',
        location: 'Dallas, TX, USA',
        coordinates: { lat: 32.7767, lon: -96.7970 },
        gridSquare: 'EM12',
        profileImage: 'https://i.pravatar.cc/150?img=3',
        contactTime: '2024-01-30T14:10:00Z',
        status: 'worked'
    },
    {
        callsign: 'K6PQR',
        name: 'Lisa Chen',
        location: 'San Francisco, CA, USA',
        coordinates: { lat: 37.7749, lon: -122.4194 },
        gridSquare: 'CM87',
        profileImage: 'https://i.pravatar.cc/150?img=1',
        contactTime: '2024-01-30T14:05:00Z',
        status: 'current'
    },
    {
        callsign: 'ON8EI',
        name: 'Erik Janssen',
        location: 'Belgium',
        coordinates: { lat: 47.6062, lon: -122.3321 },
        gridSquare: 'CN87',
        profileImage: 'https://i.pravatar.cc/150?img=14',
        contactTime: '2024-01-30T14:00:00Z',
        status: 'queue',
        waitTime: '00:05'
    },
    {
        callsign: 'W2RE',
        name: 'Ray Anderson',
        location: 'United States',
        coordinates: { lat: 62.4540, lon: -114.3718 },
        gridSquare: 'EP21',
        profileImage: 'https://i.pravatar.cc/150?img=16',
        contactTime: '2024-01-30T13:55:00Z',
        status: 'queue',
        waitTime: '00:15'
    },
    {
        callsign: 'ET2II',
        name: 'Mohammed Ali',
        location: 'Ireland',
        coordinates: { lat: 41.8781, lon: -87.6298 },
        gridSquare: 'EN61',
        profileImage: 'https://i.pravatar.cc/150?img=7',
        contactTime: '2024-01-30T13:50:00Z',
        status: 'queue',
        waitTime: '00:25'
    },
    {
        callsign: 'EI5JBB',
        name: 'James Burke',
        location: 'Ireland',
        coordinates: { lat: 39.7392, lon: -104.9903 },
        gridSquare: 'DM79',
        profileImage: 'https://i.pravatar.cc/150?img=20',
        contactTime: '2024-01-30T13:45:00Z',
        status: 'queue',
        waitTime: '00:48'
    }
];

const queueData = {
    current: operators.find(op => op.status === 'current'),
    queue: operators.filter(op => op.status === 'queue'),
    worked: operators.filter(op => op.status === 'worked').map(op => ({
        ...op,
        qsoTime: '05:23'
    }))
};

module.exports = { operators, queueData };