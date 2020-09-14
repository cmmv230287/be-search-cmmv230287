var Request = require("request");
var handlerfilter = require("./handlerfilter");

const search = (filters = {}) => {
  var array = new Object();
  var arrayresult = new Object();
  var filter = new Object();

  return new Promise(function(resolve, reject) {
    Request.get("https://restcountries.eu/rest/v2/all", (error, response, body) => {
      if(error) {
        reject(new Error(error))
      }      

      filter = filters;
      array = JSON.parse(body);

      arrayresult = _applyFilter(array, filter);
      resolve(arrayresult);
    });
  });
};

function _applyFilter(array, filter){
  var result = array;
 
  if(filter.hasOwnProperty('from') && filter.hasOwnProperty('to')){
    result = handlerfilter.applyfilterbypopulationrange(result, filter.from, filter.to);  
  }

  if(filter.hasOwnProperty('region')){
    result = handlerfilter.applyfilterbyregion(result, filter.region);
  } 
  
  if(filter.hasOwnProperty('pageSize') && filter.hasOwnProperty('pageNumber')){
    result = handlerfilter.applypagination(result, filter.pageSize, filter.pageNumber);
  }

  if(filter.hasOwnProperty('sort')){
    result = handlerfilter.applysort(result, filter.sort.name);
  }
  return result;
}

const handlerModule = {
  search,
};

module.exports = handlerModule;
