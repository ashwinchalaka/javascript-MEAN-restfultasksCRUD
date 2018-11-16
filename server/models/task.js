
var mongoose = require('mongoose');

var TaskSchema = new mongoose.Schema({
    title: {type: String, required: true},
    description: {type: String, default: "", required: true},
    isCompleted: {type: Boolean, default: false}
}, {timestamps: true});

var Task = mongoose.model('Task', TaskSchema);