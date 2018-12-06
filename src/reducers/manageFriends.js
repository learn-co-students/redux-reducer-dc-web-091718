export function manageFriends(state={friends:[]}, action){

  const ADD_FRIEND = 'ADD_FRIEND'
  const REMOVE_FRIEND = 'REMOVE_FRIEND'

  switch (action.type) {
    case ADD_FRIEND:
        return ({...state,
            friends: [
              ...state.friends,
              action.friend]
            })
    case REMOVE_FRIEND:
      return ({...state,
          friends: [
            ...state.friends.filter(friend => friend.id !== action.id)
          ]})
    default:
        return state
  }

}
