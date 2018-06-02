export default function(state = null, action) {
    switch (action.type) {
        case 'LOGIN':
            return action.payload;
        case 'LOGOUT':
            return null
    }
    return state
}