app.service('shared', function(){
	var sharedData = {
		data: ''
	};
	return {
		getProperty: function(){
			return sharedData;
		},
		setProperty:  function(value){
			sharedData.data = value;
		}
	};
});