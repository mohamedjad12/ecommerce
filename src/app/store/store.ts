import { Action } from "@ngrx/store"

export interface StoreInterface{
  counter : Counter

}

export interface Counter {
  n : number
}

let initialstat = {
  n : 0
}

export function   counterReducer ( state = initialstat  , action : Action) {
  switch (action.type){
    case "addproduct" :
      return {
        n : state.n +1
      }
      default :
      return state

  }

}
