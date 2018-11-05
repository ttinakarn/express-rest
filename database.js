const pgp = require('pg-promise')();
var db = pgp('postgres://fijhidaiiibojh:0c6abb30a97fdf1bb0969ae26665733c091b082097dc156b7073f9122e993b63@ec2-54-83-203-198.compute-1.amazonaws.com:5432/dfnhef9p502n3m?ssl=true');

function getAllProducts(req, res) {
    db.any('select * from products')
        .then(function (data) {
            res.status(200)
                .json({
                    status: 'success',
                    data: data,
                    message: 'Retrieved ALL products'
                });
        })
        .catch(function (error) {
            console.log(error);
            res.status(500)
                .json({
                    status: 'failed',
                    message: 'Failed to retrieved ALL products'
                });
        })
}

function getProductByID(req, res) {
    db.any('select * from products where id =' + req.params.id)
        .then(function (data) {
            res.status(200)
                .json({
                    status: 'success',
                    data: data,
                    message: 'Retrieved products id:' + req.params.id
                });
        })
        .catch(function (error) {
            res.status(500)
                .json({
                    status: 'failed',
                    message: 'Failed to retrieved products id:' +
                        req.params.id
                });
        })
}

function insertProduct(req, res) {
    db.none('insert into products(id, title, price, created_at, tags)' +
        'values(${id}, ${title}, ${price}, ${created_at}, ${tags})',
        req.body)
        .then(function (data) {
            res.status(200)
                .json({
                    status: 'success',
                    message: 'Inserted one product'
                });
        })
        .catch(function (error) {
            console.log('ERROR:', error)
        })
}

function updateProduct(req, res) {
    db.none('update products set id=${id}, title=${title}, price=${price}, tags=${tags} ' +
    'where id=' + req.params.id, req.body)
        .then(function (data) {
            res.status(200)
                .json({
                    status: 'success',
                    message: 'Updated product'
                });
        })
        .catch(function (error) {
            console.log('ERROR:', error)
        })
}

function deleteProduct(req, res) {
    db.none('delete from products where id=' + req.params.id)
        .then(function (data) {
            res.status(200)
                .json({
                    status: 'success',
                    message: 'Deleted product'
                });
        })
        .catch(function (error) {
            console.log('ERROR:', error)
        })
}

module.exports = {
    getAllProducts,
    getProductByID,
    insertProduct,
    updateProduct,
    deleteProduct
}