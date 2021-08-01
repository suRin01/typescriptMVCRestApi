export = (function(){
	return{
		createResult(result:boolean|string[], data:string[]|undefined = undefined){
			if(result === true){
				return {
					code: 200,
					data: data
				};
			}
			else{
				return {
					code: 500,
					data: []
				};
			}
		}
	};

})();