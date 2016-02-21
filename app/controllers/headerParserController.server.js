'use strict';

function HeaderParser () {

	this.parse = function (req, res) {
	    var ipaddr, language, software, result;
	    ipaddr = req.headers['x-forwarded-for'] || req.ip;
	    language = req.get('Accept-Language').split(',')[0];
	    
	    var uaRegex = /\(([^)]*)\)/;
	    software = uaRegex.exec(req.get('User-Agent'))[1];
	    result = {"ipaddress": ipaddr, "language": language, "software": software};
		res.json(result);
	};
}

module.exports = HeaderParser;
