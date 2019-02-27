export default function reducers(state, action){
    console.log(state, action);
    if(action.type=='add'){
        // state.users.push
    
    // action.data// user
    console.log(state, action.user);
    if(action.user)
        state.users.push(action.user);
    return{
        users:state.users
    }
}return state;
}