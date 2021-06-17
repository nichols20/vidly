import _ from 'lodash'

export function Paginate(items, pageNumber, pageSize){
    const startIndex = (pageNumber - 1) * pageSize
 // the _(items) creates a lodash array takes properties of items. then you can chain multiple methods ontop of this object.
 // .take() takes a number of objects from the array in this case 4 because pageSize = 4
    return _(items).slice(startIndex).take(pageSize).value()
 // returns new array 
}