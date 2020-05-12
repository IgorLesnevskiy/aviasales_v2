export const logger = (store) => (next) => (action) => {
    console.group(action.type);
    console.log(action);

    next(action);

    console.groupEnd(action.type);
};

export default [logger];
