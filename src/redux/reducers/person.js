import { ADD } from '../actions/person'

const initialState = [{
    id: 1,
    name: 'Midoen',
    address: 'Kayu Putih Utara',
    phone_number: '08784596821',
    photo: "https://cdn.famousoutfits.com/wp-content/uploads/2014/08/profile-ryan-gosling.png",
}]

const personReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD:
            return [
                ...state,
                // action.payload
            ]
        default:
            return state
    }
}

export default personReducer