var CategoryManager = require('./../managers/category');

module.exports = function () {
    return [
        {
            method: 'GET',
            path: '/',
            handler: function (request, reply) {
            	var data = {
	                title: 'This is Index!',
	                message: 'Hello, World. You crazy handlebars layout',
                    categories: [
                        {
                            name: 'cat 1',
                            icon: 'icon 1'
                        },
                        {
                            name: 'cat 2',
                            icon: 'icon 2'
                        },
                        {
                            name: 'cat 3',
                            icon: 'icon 3'
                        }
                    ]
	            };
                reply.view('home', data);
            }
        },{
            method: 'GET',
            path: '/search',
            handler: function (request, reply) {
                var db = request.server.plugins['hapi-mongodb'].db;
                CategoryManager.findAll(db, function(res){
                    var data = {
                        categories: res
                    }
                    console.log(data);
                    reply.view('search', data);
                });                
            }
        },{
            method: 'GET',
            path: '/about',
            handler: function (request, reply) {
                reply.view('about');              
            }
        },{
            method: 'GET',
            path: '/map',
            handler: function (request, reply) {
                reply.view('map');              
            }
        },{
            method: 'GET',
            path: '/register',
            handler: function (request, reply) {
                reply.view('register');              
            }
        }
    ];
}();