import {v4 as uuid} from "uuid"
const INITIAL_STATE={
    todos:[{
        id:uuid(),
        text:"Walk the Dog",
        status:false,
    },
    {
        id:uuid(),
        text:"Feed the cat",
        status:false,
    }
]
};
const rootReducer=(state=INITIAL_STATE,action)=>{
    switch (action.type){
        case "ADD_TODO":
            return {
                ...state,
                todos:[...state.todos,
                    {id:uuid(),
                    text:action.payload.text,
                    status:action.payload.status
            }]
        }
        case "DELETE_TODOS":
            return {
                ...state,
                todos:[state.todos.filter(todo=>todo.id!==action.payload)]
            }    
        
        default:
            return state;
    }
};

export default rootReducer;