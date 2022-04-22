import express from 'express';	
import React from 'react';
import ReactDOMServer from 'react-dom/server';	
import Home from '../containers/Home';

const app = express();

const content = ReactDOMServer.renderToString(<Home />);
app.get('/', function(req, res) {
  res.send(
    `
    <html>	
      <head>	
        <title>ssr</title>	
      </head>	
      <body>	
        <div id="root">${content}</div>	
      </body>	
    </html>	
    `
  )
})



app.listen(8000, () => {
  console.log('listen:8000')
})
