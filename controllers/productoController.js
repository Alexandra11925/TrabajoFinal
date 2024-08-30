const {Producto, Categoria} = require('../models')

const productoController = {
    list: async(req, res) => {
        try{
            const productos = await Producto.findAll({
                include: {
                    model: Categoria,
                    as: 'Categoria'
                }               
            })
            res.render('productos/list', {productos})
        }catch(error){
            console.error(error);
            res.status(500).send('Error al obtener los productos')
        }        
    },
    create: async(req, res) => {
        try{
            const categorias = await Categoria.findAll()
            res.render('productos/create', {categorias})
        }catch(error){
            console.error(error);
            res.status(500).send('Error al cargar el formulario de creación')
        }
    },
    
    store: async(req, res) => {
        const {nombre, precio, id_categoria} = req.body
        const imagen = req.file ? req.file.filename : null

        console.log('id_categoria recibido:', id_categoria);

        if (!id_categoria) {
            return res.status(400).send('Debe seleccionar una categoría');
        }
        
        try{
            await Producto.create({nombre, precio, imagen, id_categoria})
            res.redirect('/productos')
        }catch(error){
            console.error(error);
            res.status(500).send('Error al guardar el producto')
        }
    },
    edit: async(req, res) => {
        const {id_producto} = req.params
        try{
            const producto = await Producto.findByPk(id_producto)
            const categorias = await Categoria.findAll()
            res.render('productos/edit', {producto, categorias})
        }catch(error){
            console.error(error);
            res.status(500).send('Error al cargar el formulario de edición')
        }
    },
    update: async(req, res) => {
        const {id_producto} = req.params
        const {nombre, precio, id_categoria} = req.body
        const imagen = req.file ? req.file.filename : null
        try{
            await Producto.update({nombre, precio, imagen, id_categoria}, {where: { id_producto: id_producto }})
            res.redirect('/productos')
        }catch(error){
            console.error(error);
            res.status(500).send('Error al actualizar el producto')
        }
    },
    destroy: async(req, res) => {
        const {id_producto} = req.params
        try{
            await Producto.destroy({where: {id_producto: id_producto}})
            res.redirect('/productos')
        }catch(error){
            console.error(error);
            res.status(500).send('Error al eliminar el producto')
        }
    }
}


module.exports = productoController