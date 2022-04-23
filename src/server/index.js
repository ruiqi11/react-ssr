import express from 'express';
import { render } from './utils';

const app = express();
app.use(express.static('public'));


app.get('*', function(req, res) {
  render(req, res)
});


app.listen(8000, () => {
  console.log('listen:8000')
})
