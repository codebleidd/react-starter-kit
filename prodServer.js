import express from 'express'
import path from 'path'

const APP_PORT = process.env.PORT || 3000
const DIST_DIR = path.join(__dirname, 'build')
const HTML_FILE = path.join(DIST_DIR, 'index.html')
const app = express()

app.set('port', process.env.PORT || APP_PORT)

app.use(express.static(DIST_DIR))
app.get('*', (req, res) => {
  res.sendFile(HTML_FILE)
})

app.listen(app.get('port'))
