	requirejs.config({
		baseUrl: "js",
		paths: {
			jquery:'vendors/jquery/version/1.11.1/jquery.min',
			jqueryui:'vendors/jquery-ui/version/1.11.0/jquery-ui.min',
			//bootstrap:['vendors/bootstrap/version/3.2/bootstrap.min','vendors/bootstrap/others/docs.min','vendors/bootstrap/others/ie10-viewport-bug-workaround','vendors/bootstrap/others/ie-emulation-modes-warning'],
			bootstrap:['vendors/bootstrap/version/3.2/bootstrap.min'],
			angular:'vendors/angularjs/version/1.2.21/angular.min',			
			validation1:'vendors/jquery/form-validation/jquery.validationEngine-en',
			validation2:'vendors/jquery/form-validation/jquery.validationEngine',
			aces:['vendors/aces/ace-extra.min','vendors/aces/ace-elements.min']
		},
		shim: {
			'jquery': {
				exports: '$'
			},
			'bootstrap':   { 
				deps : ['jquery','aces'] 
			},
			'angular':    ['jquery', 'bootstrap'],			
			'validation1': {
				deps: ['jquery', 'bootstrap']
			},
			'validation2': {
				deps: ['jquery', 'bootstrap','validation1']
			}

    	}		
	});	
