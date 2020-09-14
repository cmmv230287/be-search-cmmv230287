var arrayutil = require("../util/arrayUtil");

const applyfilterbypopulationrange = (array, from, to) => {
    var arrayResult = array;

    if(!isNaN(from) && !isNaN(to)){     
        arrayResult = array.filter(country => country.population >= from && country.population <= to);
    }

    return arrayResult;
}

const applyfilterbyregion = (array, regionname) => {
    var arrayResult = array;
    
    if(regionname != null && regionname.length > 0){
        arrayResult = array.filter(country => country.region = regionname);
    }
    
    return arrayResult;
}

const applypagination = (array, PageSize, PageNumber) => {
    var DEFAULT_PAGESIZE = 10;
    var DEFAULT_PAGENUMBER = 1;    
    var arrayResult = array;   

    if(!isNaN(PageSize) && !isNaN(PageNumber)){ 
        PageSize = (PageSize <= 0) ? DEFAULT_PAGESIZE : PageSize;
        PageNumber = (PageNumber <= 0) ? DEFAULT_PAGENUMBER : PageNumber;

        arrayResult = arrayutil.paginate(array, PageSize, PageNumber);
    }
    return arrayResult;
}

const applysort = (array, sorttype) => {
    return arrayutil.sort(array, sorttype);
}

const handlerfiltermodule = {
    applyfilterbypopulationrange,
    applyfilterbyregion,
    applysort,
    applypagination,
}

module.exports = handlerfiltermodule;