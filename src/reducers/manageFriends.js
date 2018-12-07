export function manageFriends(state, action){
	let newState = {...state}
	let friends = [...state.friends]
	switch (action.type) {
		case "ADD_FRIEND":
			friends.push(action.friend)
			newState.friends = friends

			return newState
		case "REMOVE_FRIEND":
			let index = newState.friends.findIndex(friend => friend.id === action.id)
			friends.splice(index, 1)
			newState.friends = friends

			return newState
			
		default:
			return {...state}
	}
}
