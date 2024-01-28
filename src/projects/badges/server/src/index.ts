import express from 'express';
import { generateAgeBadgeSVG } from './ageBadge.ts';

const app = express();
const port = 3001;

//return the age badge
app.get('/age', (req, res) => {
  const { bday, clr, bg, fs, ff, pref, suf } = req.query;
  res.contentType('image/svg+xml');
  res.send(generateAgeBadgeSVG(clr, bday, fs, ff, suf, pref, bg));
});

//return the web page in the static folder
app.get('*', (req, res) => {
    
  res.send();
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
