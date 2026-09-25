import express from 'express';

const app = express();
app.use('/public', express.static('public'));
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});
app.get('/api/v1/cats', (req, res) => {
  res.json({
    cat_id: 1,
    name: 'idc',
    birthdate: '2020-05-14',
    weight: 4.2,
    owner: 'Rukaya',
    image: 'https://loremflickr.com/320/240/cat',
  });
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
