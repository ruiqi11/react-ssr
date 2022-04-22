import express from 'express';
import { render } from './utils';

const app = express();

app.use(express.static('public'));


app.get('*', function(req, res) {
  res.send(render(req))
});



app.listen(8000, () => {
  console.log('listen:8000')
})
