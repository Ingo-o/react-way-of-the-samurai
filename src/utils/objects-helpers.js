export const newPropsForObjectInArray = (array, propValue, objPropName, newObjProps) => {
    return array.map(item => {
        if (item[objPropName] === propValue) {
            return {...item, ...newObjProps}
        }
        return item;
    })
}