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
    db.none('update products set title=${title}, price=${price}, tags=${tags} ' +
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


function getAllUsers(req, res) {
    db.any('select * from user')
        .then(function (data) {
            res.status(200)
                .json({
                    status: 'success',
                    data: data,
                    message: 'Retrieved ALL users'
                });
        })
        .catch(function (error) {
            console.log(error);
            res.status(500)
                .json({
                    status: 'failed',
                    message: 'Failed to retrieved ALL users'
                });
        })
}

function getUserByID(req, res) {
    db.any('select * from users where id =' + req.params.id)
        .then(function (data) {
            res.status(200)
                .json({
                    status: 'success',
                    data: data,
                    message: 'Retrieved users id:' + req.params.id
                });
        })
        .catch(function (error) {
            res.status(500)
                .json({
                    status: 'failed',
                    message: 'Failed to retrieved users id:' +
                        req.params.id
                });
        })
}

function insertUser(req, res) {
    db.none('insert into users(id, email, password, details, created_at)' +
        'values(${id}, ${email}, ${password}, ${details}, ${created_at})',
        req.body)
        .then(function (data) {
            res.status(200)
                .json({
                    status: 'success',
                    message: 'Inserted one user'
                });
        })
        .catch(function (error) {
            console.log('ERROR:', error)
        })
}

function updateUser(req, res) {
    db.none('update users set email=${email}, password=${password} ' +
    'where id=' + req.params.id, req.body)
        .then(function (data) {
            res.status(200)
                .json({
                    status: 'success',
                    message: 'Updated user'
                });
        })
        .catch(function (error) {
            console.log('ERROR:', error)
        })
}

function deleteUser(req, res) {
    db.none('delete from users where id=' + req.params.id)
        .then(function (data) {
            res.status(200)
                .json({
                    status: 'success',
                    message: 'Deleted user'
                });
        })
        .catch(function (error) {
            console.log('ERROR:', error)
        })
}


function getAllPurchaseItems(req, res) {
    db.any('select * from purchase_items')
        .then(function (data) {
            res.status(200)
                .json({
                    status: 'success',
                    data: data,
                    message: 'Retrieved ALL purchase items'
                });
        })
        .catch(function (error) {
            console.log(error);
            res.status(500)
                .json({
                    status: 'failed',
                    message: 'Failed to retrieved ALL purchase items'
                });
        })
}

function getPurchaseItemByID(req, res) {
    db.any('select * from purchase_items where id =' + req.params.id)
        .then(function (data) {
            res.status(200)
                .json({
                    status: 'success',
                    data: data,
                    message: 'Retrieved purchase item id:' + req.params.id
                });
        })
        .catch(function (error) {
            res.status(500)
                .json({
                    status: 'failed',
                    message: 'Failed to retrieved purchase item id:' +
                        req.params.id
                });
        })
}

function insertPurchaseItem(req, res) {
    db.none('insert into purchase_items(id, purchase_id, product_id, price, quantity, state)' +
        'values(${id}, ${purchase_id}, ${product_id}, ${quantity}, ${state})',
        req.body)
        .then(function (data) {
            res.status(200)
                .json({
                    status: 'success',
                    message: 'Inserted one purchase item'
                });
        })
        .catch(function (error) {
            console.log('ERROR:', error)
        })
}

function updatePurchaseItem(req, res) {
    db.none('update purchase_items set state=${state} ' +
    'where id=' + req.params.id, req.body)
        .then(function (data) {
            res.status(200)
                .json({
                    status: 'success',
                    message: 'Updated purchase item'
                });
        })
        .catch(function (error) {
            console.log('ERROR:', error)
        })
}

function deletePurchaseItem(req, res) {
    db.none('delete from purchase_items where id=' + req.params.id)
        .then(function (data) {
            res.status(200)
                .json({
                    status: 'success',
                    message: 'Deleted purchase item'
                });
        })
        .catch(function (error) {
            console.log('ERROR:', error)
        })
}


function getAllPurchases(req, res) {
    db.any('select * from purchases')
        .then(function (data) {
            res.status(200)
                .json({
                    status: 'success',
                    data: data,
                    message: 'Retrieved ALL purchases'
                });
        })
        .catch(function (error) {
            console.log(error);
            res.status(500)
                .json({
                    status: 'failed',
                    message: 'Failed to retrieved ALL purchases'
                });
        })
}

function getPurchasesByID(req, res) {
    db.any('select * from purchases where id =' + req.params.id)
        .then(function (data) {
            res.status(200)
                .json({
                    status: 'success',
                    data: data,
                    message: 'Retrieved purchase id:' + req.params.id
                });
        })
        .catch(function (error) {
            res.status(500)
                .json({
                    status: 'failed',
                    message: 'Failed to retrieved purchase id:' +
                        req.params.id
                });
        })
}

function insertPurchase(req, res) {
    db.none('insert into purchases(id, created_at, name, address, state, zipcode, user_id)' +
        'values(${id}, ${created_at}, ${name}, ${address}, ${state}), ${zipcode}), ${user_id})',
        req.body)
        .then(function (data) {
            res.status(200)
                .json({
                    status: 'success',
                    message: 'Inserted one purchase'
                });
        })
        .catch(function (error) {
            console.log('ERROR:', error)
        })
}

function updatePurchase(req, res) {
    db.none('update purchases set name=${name}, address=${address}, state=${state}, zipcode=${zipcode}' +
    'where id=' + req.params.id, req.body)
        .then(function (data) {
            res.status(200)
                .json({
                    status: 'success',
                    message: 'Updated purchase'
                });
        })
        .catch(function (error) {
            console.log('ERROR:', error)
        })
}

function deletePurchase(req, res) {
    db.none('delete from purchases where id=' + req.params.id)
        .then(function (data) {
            res.status(200)
                .json({
                    status: 'success',
                    message: 'Deleted purchase'
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
    deleteProduct,
    getAllUsers,
    getUserByID,
    insertUser,
    updateUser,
    deleteUser,
    getAllPurchaseItems,
    getPurchaseItemByID,
    insertPurchaseItem,
    updatePurchaseItem,
    deletePurchaseItem,
    getAllPurchases,
    getPurchasesByID,
    insertPurchase,
    updatePurchase,
    deletePurchase
}