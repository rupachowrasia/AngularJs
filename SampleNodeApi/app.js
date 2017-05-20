var express = require('express');
var cors = require('cors');
var app = express();
var config = require('./sampledata/emp');

app.use(cors());

var router = express.Router();

router.get('/sum', function(req, res){
	var a = req.query.a;
	var b = req.query.b;
	var c = parseInt(a) + parseInt(b);

	res.status(200).json(c);
});

router.get('/emp', function(req, res){

	for (var key in config) {
		if (config.hasOwnProperty(key)) {
			if(config[key].empno == req.query.empno){
				res.status(200).json(config[key]);
			}
		}
	}	

});

router.get('/allemp', function(req, res){
	res.status(200).json(config);
});


app.use('/', router);

app.listen(3000, function(){
	console.log("Server is runnig at port 3000");
})