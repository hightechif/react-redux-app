import { ADD, INIT } from '../actions/person'

const initialState = [{
    id: 1,
    name: 'Midoen',
    address: 'Kayu Putih Utara',
    phone_number: '08784596821',
    photo: "https://cdn.famousoutfits.com/wp-content/uploads/2014/08/profile-ryan-gosling.png",
}]

const personReducer = (state = initialState, action) => {
    // console.log(state);
    // console.log("type", action.type);
    // console.log("payload", action.payload);
    switch(action.type) {
        case ADD:
            const newData = [
                ...state
            ]
            newData.concat(action.payload)
            return newData.concat(action.payload)
        case INIT:
            console.log(action.payload);
            return action.payload
        default:
            return state
    }
}

export default personReducer