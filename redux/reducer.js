import { TouchableOpacity } from 'react-native';
import { ADD, MINUS } from './type'

const initData = {
    counter:0,
}

export const reducerCounter = (state = initData, action) => {

     switch(action.type){
        case ADD:
            //console.log('ADD COUNTER');
            //return {...state,counter:action.data + 3}
            if (action.data < 25) {
                console.log('ADD COUNTER');
                return {...state,counter:action.data + 3,
                }
            }
           
        case MINUS:
            //console.log('MINUS COUNTER');
            //return {...state, counter:action.data - 3}
            if (action.data > -27) {
                console.log('MINUS COUNTER');
                return {...state,counter:action.data - 3}
            }
           
        default:return state;
    }
}
