export const ADD_TASK = 'ADD_TASK'
export const TOGGLE_TASK = 'TOGGLE_TASK'

export function addTask(payload) {
  return { type: ADD_TASK, payload }
}

export function toggleTask(payload) {
  return { type: TOGGLE_TASK, payload }
}
