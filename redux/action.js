import { ADD,MINUS } from './type'

export const addCounter = (counter) => ({
    type:ADD,
    data:counter,
})

export const minusCounter = (counter) => ({
    type:MINUS,
    data:counter
})