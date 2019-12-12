import React from 'react'
import {renderToString} from 'react-dom/server'
import express from 'express'
import {StaticRouter} from 'react-router-dom'
import App from '../src/App'
import {Provider} from 'react-redux'
import store from '../src/store/store'

const app=express();
app.use(express.static('public'))
// app.use(express.static(path.join(__dirname,'public')))
app.get('*',(req,res)=>{
  console.log(req.url)
    const content=renderToString(
        <Provider store={store}>
            <StaticRouter location={req.url}>
                {App}
            </StaticRouter>
        </Provider>
    )
    
    res.send(`
    <html>
        <head>
            <meta charset="utf-8"/>
            <title>ssr</title>
        </head>
        <body>
        <div id="root">${content}</div>
        </body>
        <script src="/bundle.js"></script>
    </html>
    `)
})

app.listen(8081)