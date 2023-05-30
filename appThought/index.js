const app = require('express')
const exphbs = require('express-handlebars')
const session = require('express-session')
const FileStore = require('session-file-store')
const flash = require('express-flash')

const app = express()

app.engine('handlebars', exphbs())
app.set('view', 'handlebars')

app.use(
    express.urlencoded({
        extended: true
    })
)

app.use(express.json())