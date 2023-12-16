export const flattenArray = (inputArray: any[]) => {
    let flattened: any[] = [];

    inputArray.forEach((element) => {
        if (Array.isArray(element)) {
            // for sure it is not an empty string
            element = element.filter((item) => item.length !== 0); // remove empty items, example: ['a', '', 'b']
            flattened = flattened.concat(flattenArray(element)); // recursive call to flatten the array
        } else {
            flattened.push(element); // push the element to the flattened array
        }
    });

    return flattened;
};

export const convertStringToArray = (inputString: string) => {
    return inputString
        .split(',') // split by comma
        .map((item) => item.trim().split(' ')) // trim each item and split by space
        .filter((item) => item.length !== 0); // remove empty items
};
