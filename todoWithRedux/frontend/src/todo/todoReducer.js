const INITIAL_STATE = {
   description: 'Ler livros',
   list: [{
       id: 1,
       description: 'teste',
       done: false
   }]
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'DESCRIPTION_CHANGED':
            return {...state, description: action.payload } 
        default:
            return state
    }
}