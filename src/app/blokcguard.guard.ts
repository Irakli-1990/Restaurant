import { CanDeactivateFn } from '@angular/router';

export const blokcguardGuard: CanDeactivateFn<unknown> = (component:any, currentRoute, currentState, nextState) => {
  
  if( component.signupObj.email == '' && component.signupObj.userName == '' && component.signupObj.password == '' ){
     return true
  }

  else{
    let answer = confirm("Are U Sure?")
    if(answer){
      return true
    }else{
      return false
    }
  }
};
