import express from 'express';
import { render } from './utils';
import proxy from 'express-http-proxy';

const app = express();
// app.use(express.static('public'));

//相当于拦截到了前端请求地址中的/api部分，然后换成另一个地址
app.use('/api', proxy('http://4000/api/news.json', {
  proxyReqPathResolver: function(req) {
    return '/api' + req.url;
  }
}))

app.get('*', function(req, res) {
  render(req, res)
});


app.listen(8000, () => {
  console.log('listen:8000')
})