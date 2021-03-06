const pgp = require('pg-promise')();
var db = pgp('postgres://grbrxjrhauptjn:19388487ac4fc3ef3eeea4094c17e9aa5fd0774510bdd7db513c481c0ea31d41@ec2-174-129-227-51.compute-1.amazonaws.com:5432/d6b3313j3l8qt5?ssl=true');

function getVitalSigns(req, res) {
    db.any('select * from vitalsign')
        .then(function (data) {
            res.status(200)
                .json({
                    status: 'success',
                    data: data,
                    message: 'Retrieved vital signs'
                });
        })
        .catch(function (error) {
            console.log(error);
            res.status(500)
                .json({
                    status: 'failed',
                    message: 'Failed to retrieved vital signs'
                });
        })
}

function getVitalSignByID(req, res) {
    db.any('select * from vitalsign where vsid =' + req.params.id)
        .then(function (data) {
            res.status(200)
                .json({
                    status: 'success',
                    data: data,
                    message: 'Retrieved vitalsign vsid:' + req.params.id
                });
        })
        .catch(function (error) {
            res.status(500)
                .json({
                    status: 'failed',
                    message: 'Failed to vitalsign products vsid:' +
                        req.params.id
                });
        })
}

// function getAllProducts(req, res) {
//     db.any('select * from products')
//         .then(function (data) {
//             res.status(200)
//                 .json({
//                     status: 'success',
//                     data: data,
//                     message: 'Retrieved ALL products'
//                 });
//         })
//         .catch(function (error) {
//             console.log(error);
//             res.status(500)
//                 .json({
//                     status: 'failed',
//                     message: 'Failed to retrieved ALL products'
//                 });
//         })
// }

// function getProductByID(req, res) {
//     db.any('select * from products where id =' + req.params.id)
//         .then(function (data) {
//             res.status(200)
//                 .json({
//                     status: 'success',
//                     data: data,
//                     message: 'Retrieved products id:' + req.params.id
//                 });
//         })
//         .catch(function (error) {
//             res.status(500)
//                 .json({
//                     status: 'failed',
//                     message: 'Failed to retrieved products id:' +
//                         req.params.id
//                 });
//         })
// }

// function insertProduct(req, res) {
//     db.none('insert into products(id, title, price, created_at, tags)' +
//         'values(${id}, ${title}, ${price}, ${created_at}, ${tags})',
//         req.body)
//         .then(function (data) {
//             res.status(200)
//                 .json({
//                     status: 'success',
//                     message: 'Inserted one product'
//                 });
//         })
//         .catch(function (error) {
//             console.log('ERROR:', error)
//         })
// }

// function updateProduct(req, res) {
//     db.none('update products set title=${title}, price=${price}, tags=${tags} ' +
//     'where id=' + req.params.id, req.body)
//         .then(function (data) {
//             res.status(200)
//                 .json({
//                     status: 'success',
//                     message: 'Updated product'
//                 });
//         })
//         .catch(function (error) {
//             console.log('ERROR:', error)
//         })
// }

module.exports = {
    getVitalSigns,
    getVitalSignByID
}