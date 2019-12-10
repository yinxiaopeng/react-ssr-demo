import React from 'react'
import {renderToString} from 'react-dom/server'
import express from 'express'
import App from '../src/App'


const app=express();
app.use(express.static('public'))
// app.use(express.static(path.join(__dirname,'public')))
app.get('/',(req,res)=>{
    // console.log('---------------------')
    // const Page=<App name='尹肖鹏133'></App>
    // console.log(Page)
    const content=renderToString(App)
    console.log(content)

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