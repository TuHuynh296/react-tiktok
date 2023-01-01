import { hobbyConstants } from "../constants";

const addNewHobby = payload => ({
    type: hobbyConstants.ADD_HOBBY,
    payload
})

const setActiveHobby = payload => ({
    type: hobbyConstants.SET_ACTIVE_HOBBY,
    payload
})

export {
    addNewHobby,
    setActiveHobby
}