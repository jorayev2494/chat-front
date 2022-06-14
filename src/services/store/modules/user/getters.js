/**
 * User Collection
 * @param {Object} state store state
 * @returns array
 */
export function getUsers(state) {
    return state.users;
}

/**
 * Find User
 * @param {Object} state state
 * @returns Object
 */
export const find = (state) => (id) => {
    return state.users.find(user => user.id === id);
}