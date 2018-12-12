var home = require('../controllers/home.js');

module.exports = function(app){

	app.get('/authors', function(req, res) {
        home.get(req,res);
    });
    app.get('/authors/:id', function(req, res) {
        home.getone(req,res);
    });
    app.post('/authors', function(req, res) {
        home.create(req,res);
    });
    app.patch('/authors/:id', function(req, res) {
        home.update(req,res);
    });
    app.delete('/authors/:id', function(req, res) {
        home.delete(req,res);
    });
}