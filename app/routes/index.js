'use strict';

var path = process.cwd();
var HeaderParser = require(path + '/app/controllers/headerParserController.server.js');

module.exports = function (app) {

	var headerParser = new HeaderParser();
	app.get('/', function(req, res){
		res.redirect('/api/whoami');
	});
	app.get('/api/whoami/',  headerParser.parse);
};
