
const paginate = (array, page_size, page_number) => {
    return array.slice((page_number - 1) * page_size, page_number * page_size);
} 

const sort = (array, sorttype) => {
    if(sorttype == 'desc'){
        return array.sort(function(a, b) {
            if (b.name > a.name) {
              return 1;
            }
            if (b.name < a.name) {
              return -1;
            }
            return 0;
          });  
    }
    return array.sort(function(a, b) {
        if (a.name > b.name) {
          return 1;
        }
        if (a.name < b.name) {
          return -1;
        }
        return 0;
      });
      
}

const arrayUtilModule = {
    paginate,
    sort,
}

module.exports = arrayUtilModule;