import _ from 'lodash'

export function Paginate(items, pageNumber, pageSize){
    const startIndex = (pageNumber - 1) * pageSize
// the _(items) creates a lodash array takes properties of items. then you can chain multiple methods ontop of this object.
    return _(items).slice(startIndex).take(pageSize).value()
    //_.slice(items, startIndex)
    //_.take()
}