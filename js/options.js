
;(function($){

	var optionApp = {
		init: function(){
			this.container = $('div.container');
			this._config(localStorage,false);
			this.config = localStorage;
			this.initPage();
		},
		_config: function(config,reset){
		//application space

			var c = config = config ? config : {};
			if(reset){
				config = {};
			}
			//host for connection
			c['host'] = c['host'] ? c['host'] : 'http://code.dianpingoa.com/';
			//api alias of the host
			c['api'] = c['api'] ? c['api'] : 'api/v3/';
			//user fingerprint
			c['privateKey'] = c['privateKey'] ? c['privateKey'] : '';
			//notification refresh frequency
			c['frequency'] = c['privateKey'] ? c['privateKey'] : '600000';
			//projects from repositories
			c['projects'] = c['projects'] ? c['projects'] : [];


			return c;

		},

		initPage: function(){
			var connectInput = $('input.J_connect',this.container), authInput = $('input.J_auth',this.container);
			connectInput.val(this.config['host']);
			authInput.val(this.config['privateKey']);
		}


	}

	$(document).ready(function(){

		optionApp.init();
	})
	
	


})(jQuery);