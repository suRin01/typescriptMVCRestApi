export = (function(){
	interface responseResult{
		code: number;
		data: string[]|undefined;
	}
	return{
		createResult(result:boolean|string[], data:string[]|undefined = undefined): responseResult{
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