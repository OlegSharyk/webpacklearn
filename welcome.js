/**
 * Created by Oleg on 16.12.2017.
 */

'use strict';

export default function(message){

  if (NODE_ENV == 'development'){
    console.log(message);
  }
  alert(`Welcome ${message}`);
};