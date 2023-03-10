const httpCodes = require('../http-codes');
//last reach of an error
function errorLogAndResponse(error,request,response,next){
  console.log(error);
  response
    .status(httpCodes.INTERNAL_ERROR)
    .json({
      status:'internal error',
      message:'Something went wrong!'
    })
}
module.exports = errorLogAndResponse;
