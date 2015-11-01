var ProjectController = require('./../../controllers/api/project.js');

module.exports = function () {
    return [
        {
            method: 'GET',
            path: '/api/project',
            config : {
                handler: ProjectController.findAll
            }
        },
        {
            method: 'GET',
            path: '/api/project/category/{category_id}',
            config : {
                handler: ProjectController.findByCategoryId
            }
        },
        {
            method: 'GET',
            path: '/api/project/keywords/{keywords}',
            config : {
                handler: ProjectController.findByKeyWords
            }
        },
        {
            method: 'POST',
            path: '/api/project',
            config : {
                handler : ProjectController.insert
            }
        },
        {
            method: 'PUT',
            path: '/api/project/{id}',
            config : {
                handler: ProjectController.update
            }
        },
        {
            method: 'DELETE',
            path: '/api/project/{id}',
            config : {
                handler: ProjectController.delete
            }
        }
    ];
}();