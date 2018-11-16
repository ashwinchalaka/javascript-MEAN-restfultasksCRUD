
var routelogic = require('./../controllers/tasks.js');

module.exports = function(app) {
    app.get('/tasks/', function(req, res) {
        routelogic.allTasks(req,res);
    });
    app.get('/:id/', function(req,res) {
        routelogic.showbyid(req,res);
    });
    app.post('/create/', function(req,res) {
        routelogic.create(req,res);
    });
    app.put('/update/:id/', function(req,res) {
        routelogic.update(req,res);
    });
    app.delete('/remove/:id/', function(req,res) {
        routelogic.remove(req,res);
    });
}