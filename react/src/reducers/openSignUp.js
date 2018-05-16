export default function(state = false, action) {
    switch (action.type) {
        case 'SIGNUP':
            return action.payload;
    }
    return state
}