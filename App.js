// //import logo from './logo.svg';
// import './App.css';
// import AddItem from './components/addItems';
// import UpdateItem from './components/updateItem';
// import { Route,BrowserRouter as Router,Routes} from 'react-router-dom';

// function App() {
//   return (
    
 
//     <Routes>
//           <Route path='/addItem' element={<AddItem/>}></Route>
//           <Route  path='/updateItem/:id' element={<UpdateItem/>}></Route>
        
//     </Routes>
    
   
//   );
// }

// export default App;


// import React from 'react';
// import FoodItems from './components/allItems';
// import AddItem from './components/addItems';
// import { Route,BrowserRouter as Router,Routes} from 'react-router-dom';
// import UpdateItem from './components/updateItem';
// function App() {
//   return (
//     <div className="App">
//       <FoodItems />
//       <Routes>
//           <Route path='/addItem' element={<AddItem/>}></Route>
//           <Route path='/updateItem'element={<UpdateItem/>}></Route>
          
//     </Routes>
//     </div>
//   );
// }
 
//  export default App;



// // src/App.js
// import React from 'react'
// import AddItem from './components/addItem1';


// //import FoodItems from './components/FoodItems';
// //import DisplayItems from './components/Display';
// //import UpdateItem from './components/updateItem';
 
// function App() {
//   return (
//     <div className="App">
//       <AddItem />
//     </div>
//   );
// }
 
//  export default App;

import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AddItem from './components/addItem1'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/addItem' element={<AddItem/>}></Route>
      </Routes>
    </div>
  )
}

export default App






