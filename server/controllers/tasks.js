
var mongoose = require('mongoose');
var Task = mongoose.model('Task');
// mongoose.Promise = global.Promise;

module.exports = {
    allTasks: function(req,res) {
        Task.find({},function(err,hits){
            if(err)
                res.json({message: false, error: err});
            else
                res.json({message: true, data: hits});
        });
    },
    showbyid: function(req,res) {
        Task.find({_id: req.params.id},function(err,hit){
            if(err)
                res.json({message: false, error: err});
            else
                res.json({message: true, data: hit});
        });
    },
    create: function(req, res) {
        console.log('is it going here instead?')
        var newTask = new Task( {
            title: req.body.title,
            description: req.body.description,
            isCompleted: false
        });
        newTask.save(function(err) {
            if(err) {
                // FLASH MESSAGES WOULD GO HERE
                res.json({message: false, error: err});
            } else {
                res.json({message: true, data: newTask});
            }
        });
    },
    update: function(req, res) {
        console.log('updating...');
        Task.update( {_id: req.params.id}, {$set: {
            title: req.body.title,
            description: req.body.description,
            isCompleted: false
        }}, function(err) {
            if(err) {
                // FLASH MESSAGES WOULD GO HERE
                res.json({message: false, error: err});
            } else {
                res.json({message: true, data: req.body});
            }
        });
    },
    remove: function(req, res) {
        Task.remove({_id: req.params.id}, function(err) {
            if(err) {
                // FLASH MESSAGES WOULD GO HERE
                res.json({message: false, error: err});
            } else {
                res.json({message: true, data: req.params});
            }
        });
    }
}