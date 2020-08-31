import express from 'express'
import fs from 'fs'
import path from 'path'

const PORT = process.env.PORT || 3000
import React from 'react'
import ReactDOMServer from 'react-dom/server'

import App from '../src/App'

if (typeof window === 'undefined') {
    global.window = {}
}

const app  = express()

app.use('/',(req,res,next)=>{
    fs.readFile(path.resolve('./build/index.html'),'utf-8',(err,data)=>{
        if(err){
            console.log(err)
            return res.status(500).send("Error")
        }
        return res.send(data.replace('<div id="root"></div>',
        `<div id="root">${ReactDOMServer.renderToString(<App/>)}</div>`))
    })
})

export default (url = '/') => {
    // Create a history depending on the environment
      const history = isServer
        ? createMemoryHistory({
            initialEntries: [url]
         })
       : createBrowserHistory();
}

app.use(express.static(path.resolve(__dirname,'..','build')))

app.listen(PORT,()=>{
    console.log(`App launched on ${PORT}`)
})