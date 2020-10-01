export const flat = (source: any) => {
    const flatObj = (prefix: string, t: any, obj: any) => {
        for (var key in t) {
            let newPrefix = '';
            if (prefix !== '') {
                newPrefix = prefix + '.';
            }
            newPrefix += key;
            if (typeof t[key] === 'object') {
                flatObj(newPrefix, t[key], obj);
            } else {
                obj[newPrefix] = t[key];
            }
        }
    };
    const result = {};
    flatObj('', source, result);
    return result;
};
