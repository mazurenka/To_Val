import {TasksStateType} from '../App';
import {v1} from 'uuid';

export type RemoveTaskActionType = {
    type: 'REMOVE-TASK'
    taskId: string
    todolistId: string
}
export type SecondType = {
    type: ''

}

type ActionsType = RemoveTaskActionType | SecondType

export const tasksReducer = (state: TasksStateType, action: ActionsType)  => {
    switch (action.type) {
        case 'REMOVE-TASK': {
            let copyState = {...state}
            copyState[action.todolistId] = copyState[action.todolistId].filter(task => task.id !== action.taskId)
            return copyState;
        }
        case "":
        default:
            throw new Error("I don't understand this type")
    }
}

export const removeTaskAC = (taskId: string, todolistId: string): RemoveTaskActionType => {
    return { type: 'REMOVE-TASK', taskId: taskId, todolistId: todolistId}
}
export const SecondAC = (id: string): SecondType => {
    return { type: ''}
}

