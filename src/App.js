// import PackageContext from "./context" 
// import Provider from "./Provider"

// const Hello1 = () => {
//       return(
//         <div>
//              <PackageContext.Consumer>
//                  {
//                   (info)=>{
//                       return(
//                          <div>
//                             <div style={info.defaultWhite}>
//                                  <h1>Hello</h1> 
//                                  <p>How are you doing, Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus quam expedita voluptatibus veniam, maxime asperiores officiis earum reprehenderit suscipit doloribus dignissimos quidem ab quas fuga sequi ex mollitia. Facere, ipsa.</p>
//                             </div>
//                               <button onClick={info.defaultRed}>Change Color</button>
//                           </div>
//                       )
//                   }
//                  }
//              </PackageContext.Consumer>
//         </div>
//       )
// }


// const App = () => {
//     return(
//         <div>

//             <Provider>
//                 <Hello1/>
//             </Provider>

//         </div>
//     )
// }

import React from 'react';
import { useSelector,useDispatch } from 'react-redux';
import {changeTheme} from './actions/themeActions'

const App = () =>{
       const theme = useSelector(state =>{
          console.log( state)
        return state.theme});
      
       const dispatch = useDispatch();
      
      let  colorRed = {color:"red",backgroundColor:"white", fontSize:"20px", border: "2px solid black"}

       function handleThemeChange(){
             let theme = {
                   theme: colorRed
             }
            dispatch(changeTheme(theme))
       }


     return(
        <div>
        <div style={theme}>
            <h1>Hello</h1> 
            <p>How are you doing, Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus quam expedita voluptatibus veniam, maxime asperiores officiis earum reprehenderit suscipit doloribus dignissimos quidem ab quas fuga sequi ex mollitia. Facere, ipsa.</p>
        </div>
           <button onClick={handleThemeChange}>Change Theme</button>
        </div>
     )

}


export default App;



