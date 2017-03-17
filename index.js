/* @flow */

/**
 * if you remove type type annotation below, flow starts without issue
 */
const splitIntoArray = (str: string) => {
    return str
        .split('\n')
        .reduce((acc, line) => {
            const trimmed = line.trim();

            if (trimmed === '') {
                return [...acc, ''];
            }

            return [...acc];
        }, [])
        .filter((line) => {
            return !!line;
        });
};
