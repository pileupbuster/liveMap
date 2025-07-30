const express = require('express');
const path = require('path');
const operators = require('./data/operators');

const app = express();
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);
  next();
});

app.get('/', (req, res) => {
  try {
    const sortedOperators = [...operators].sort((a, b) => 
      new Date(b.contactTime) - new Date(a.contactTime)
    );
    
    res.render('index', { 
      title: 'Ham Radio Live Map',
      operators: sortedOperators,
      operatorsJSON: JSON.stringify(sortedOperators)
    });
  } catch (error) {
    console.error('Error loading operators:', error);
    res.status(500).send('Error loading operator data');
  }
});

app.use((req, res) => {
  res.status(404).send('404 - Page not found');
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('500 - Internal server error');
});

app.listen(PORT, () => {
  console.log(`Ham Radio Live Map server running on http://localhost:${PORT}`);
});