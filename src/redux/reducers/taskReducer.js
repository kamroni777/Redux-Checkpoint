const initialState = {
    tasks: [],
    filter: 'ALL' 
  };
  
  const taskReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_TASK':
        return {
          ...state,
          tasks: [...state.tasks, {
            id: Date.now(),
            description: action.payload,
            isDone: false
          }]
        };
        
      case 'TOGGLE_TASK':
        return {
          ...state,
          tasks: state.tasks.map(task =>
            task.id === action.payload ? { ...task, isDone: !task.isDone } : task
          )
        };
        
      case 'EDIT_TASK':
        return {
          ...state,
          tasks: state.tasks.map(task =>
            task.id === action.payload.id 
              ? { ...task, description: action.payload.newDescription } 
              : task
          )
        };
        
      case 'SET_FILTER':
        return {
          ...state,
          filter: action.payload
        };
        
      default:
        return state;
    }
  };
  
  export default taskReducer;