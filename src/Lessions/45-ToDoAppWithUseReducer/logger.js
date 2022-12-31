export const logger = (reducer) => {
    return (prevState, action) => {
        const newState = reducer(prevState, action);

        console.group(action.type);
        console.log('action type', action.type);
        console.log('prevState', prevState);
        console.log('newStage', newState);
        console.groupEnd();

        return newState;
    }
}