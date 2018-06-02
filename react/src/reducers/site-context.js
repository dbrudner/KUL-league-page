export default function(state = "", action) {
    switch (action.type) {
        case "CHANGE_SITE_CONTEXT":
            return action.payload;
    }
    return state
}