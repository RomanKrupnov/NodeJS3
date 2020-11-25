const models = require('../models');
exports.getTasks = (req, res, next) => {

        models.Task.getTasks().then(([rows, fieldData]) => {
            res.json({Data: rows, Status: 200});
        });

}
exports.createTask = (req, res, next) => {
    console.log(req.query);
    models.Task.createTask(req.query).then(([rows, fieldData]) => {
        res.json({Data: rows, Status: 200});
    })
}
exports.updateTaskDescription = (req, res, next) => {
    models.Task.updateTask(req.params.taskId, req.query).then(([rows, fieldData]) => {
        res.json({Data: rows, Status: 200});
    })
}
exports.completeTask = (req, res, next) => {
    models.Task.completeTask(req.params.taskId, req.body).then(([rows, fieldData]) => {
        res.redirect('/task/');
    })
}

exports.assignTask = (req, res, next) => {

}
exports.deleteTask = (req, res, next) => {
    models.Task.deleteTask(req.params.taskId).then(([rows, fieldData]) => {
        res.json({Data: rows, Status: 200});
    })
}