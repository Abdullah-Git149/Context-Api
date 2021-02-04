export const ContactReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_CONTACT':
            return [...state, action.newContact]
        case 'REMOVE_DATA':
            if (window.confirm("Are you sure")) {
                const filtered = state.filter((data) => data.id !== action.id)
                return filtered
            }
        default:
            return state
    }

}