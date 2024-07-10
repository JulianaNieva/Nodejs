const { conn } = require('../db/dbconnect');

module.exports = {
    getProduct: async (req, res) => {
        try {
            const [registros] = await conn.query(`SELECT * FROM products`);
            res.render('shop', { productos: registros }); // Renderiza la vista 'shop' y pasa los productos como contexto
        } catch (error) {
            console.error('Error al obtener productos:', error);
            res.status(500).send('Error al obtener productos. Inténtelo de nuevo más tarde.');
        } finally {
            conn.releaseConnection();
        }
    
    

    crearProducto: async (req, res) => {
        const sql = `INSERT INTO products (title, category, description, price, image, available, calification) VALUES (?, ?, ?, ?, ?, ?, ?);`
        // console.log(req.body)
        // console.log(req.file)
        // console.log(req)
        const creado = await conn.query(sql, [req.body.title, req.body.category, req.body.description, parseFloat(req.body.price), "img/productAdded/imagen_" + req.file.originalname, parseFloat(req.body.available), parseFloat(req.body.calification)])

        res.redirect('/shop.html')
    },

    deleteProduct: async (req, res) => {
        console.log('Método de solicitud:', req.method);
        console.log('Body de la solicitud:', req.body);
        const deleteProduct = await conn.query(`DELETE FROM products WHERE id=?`, req.body.idDelete);
        res.redirect('/shop.html');
    },

    getUpdate: async (req, res) => {
        const [update] = await conn.query(`SELECT * FROM products WHERE id=?`, req.params.num);
        
        res.render('updateProduct', {
            title: 'modify',
            product: update[0]
        })
    },

    update: async (req, res) => {
        const sql = `UPDATE products SET title=?, category=?, description=?, available=?, calification=?, price=? WHERE id = ?`;
        console.log(req.body);
    
        const { updateId, updateTitle, updateCategory, updateCalification, updateDescription, updateAvailable, updatePrice } = req.body;
    
        const modified = await conn.query(sql, [
            updateTitle, updateCategory, updateDescription, parseFloat(updateAvailable), parseFloat(updateCalification), parseFloat(updatePrice), parseFloat(updateId)
        ]);
    
        res.redirect('/shop.html');
    }
}