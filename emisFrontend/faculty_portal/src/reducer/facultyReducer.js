const facultyReducer = (state = 0,  action) => {
    switch(action.type){
        case 'setId':
            return action.id
        case 'clearId':
            return null
        default:
            return 0
    }
}

export default facultyReducer