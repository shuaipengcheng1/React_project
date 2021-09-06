import axios from 'axios'
export default (option)=>{
   return new Promise((res,rej)=>{
      res( axios(option))
   })
}