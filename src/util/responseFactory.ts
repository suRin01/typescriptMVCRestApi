module.exports = (function(){
    function createResult(result:boolean, data = undefined){
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

    return{
        createResult: function(result:boolean, data = undefined){
            return createResult(result, data);
        }
    };


})();