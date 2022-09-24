export const reducer = (state, action) => {
    switch (action.type) {
        // case 'set-hotels':
        //     return {
        //         ...state,
        //         hotels: action.hotels
        //     };
        case 'set-isAuthenticated':
            return {
                ...state,
                isAuthenticated: action.isAuthenticated
            };
        // case 'set-loading':
        //     return {
        //         ...state,
        //         loading: action.loading
        //     }
        default:
            throw new Error('Not available action: ' + action.type);
    }
}

export const initialState = {
    // hotels: [],
    // loading: true,
    isAuthenticated: false,
    color: 'primary'
}