const reducer = (state, action) => {
    switch (action.type) {
        case 'WITHDRAW_MONEY':
            const amount = parseInt(action.amount);

            if (amount > state.totalAmount)
                return state;
            else
                return {
                    ...state,
                    totalAmount: state.totalAmount - amount
                }
        default:
            return state;
    }
}

export default reducer;