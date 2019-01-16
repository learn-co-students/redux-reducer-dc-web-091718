export function manageFriends(state, action) {
  let updatedState = { ...state };
  let friends = [...state.friends];
  switch (action.type) {
    case "ADD_FRIEND":
      friends.push(action.friend);
      updatedState.friends = friends;
      return updatedState;
    case "REMOVE_FRIEND":
      let i = updatedState.friends.findIndex(friend => friend.id === action.id);
      friends.splice(i, 1);
      updatedState.friends = friends;
      return updatedState;
    default:
      return { ...state };
  }
}
