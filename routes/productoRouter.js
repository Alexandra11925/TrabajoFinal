const express = require('express')
const multer = require('multer')
const productoController = require('../controllers/productoController')
const path = require('path'); 
const router = express.Router()

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/images')
        },
        filename: (req, file, cb) => {
            cb(null, Date.now() + path.extname(file.originalname))
            }
            
})
const upload = multer({ storage: storage })

router.get('/', (req, res) => {
    res.render('home')
})

router.get('/productos', productoController.list)
router.get('/productos/create', productoController.create)
router.post('/productos/create', upload.single('imagen'), productoController.store)
router.get('/productos/:id_producto/edit', productoController.edit)
router.put('/productos/:id_producto', upload.single('imagen'), productoController.update)
router.delete('/productos/:id_producto', productoController.destroy)

module.exports = router