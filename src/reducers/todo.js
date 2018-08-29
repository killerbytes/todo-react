import { TOGGLE_TASK, ADD_TASK } from '../actions/todoActions'
export default function reducer(
  state = {
    items: [],
  },
  action
) {
  switch (action.type) {
    case ADD_TASK: {
      return { ...state, items: [...state.items, action.payload] }
    }
    case TOGGLE_TASK: {
      const index = state.items.indexOf(action.payload)
      const items = state.items.map((item, key) => (key === index ? { ...item, completed: !item.completed } : item))
      items.splice(index, 1)

      return { ...state, items }
    }

    default:
      return state
  }
}
