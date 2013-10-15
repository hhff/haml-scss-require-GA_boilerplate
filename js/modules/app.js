define(['controller'], function(controller){

	app = new Object();

	app._init = function(){
		controller._init();		
	}

	return app;
});