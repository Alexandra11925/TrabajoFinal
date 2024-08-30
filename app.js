const express = require('express')
const app = express()
const path = require('path')
const methodOverride = require('method-override')
const multer = require('multer')
const {sequelize} = require('./models')
const productoRouter = require('./routes/productoRouter')


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/images')
        },
        filename: (req, file, cb) => {
            cb(null, Date.now() + path.extname(file.originalname))
            }
            
})
const upload = multer({ storage: storage })

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'))

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))
app.use(express.static(path.join(__dirname, 'public')));
// app.use(express.static('public'))

app.use('/', productoRouter)

app.listen(3000, async () =>{
    console.log('Server is running on port 3000')
    try{
        // await sequelize.sync({ force: true }) esta línea eliminaría la tabla
        // await sequelize.sync()
        await sequelize.authenticate()
        console.log('Base de datos conectada')
    }catch(error){
        console.log('Error al conectar a la base de datos', error)
    }    
})


