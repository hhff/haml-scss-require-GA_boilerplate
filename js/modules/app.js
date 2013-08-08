define(['exampleModule'], function(em){

	app = new Object();

	app._init = function(){
		em._init();		
	}

	return app;
});