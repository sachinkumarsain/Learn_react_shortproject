import React from 'react';
import ReactDOM from 'react-dom/client';
import Counter from './Counter/Counter';
import Todo from './Todo list/Todo';
// import randomColor from'./Todo list/1randomColor';
// import Search_movies from './Search_movies/Search_movies';
// import Home from "./Netflix_copy/Home";
// import Home_page from './Netflix/Home_page';
// import Home from './Routing/Home'
// import Home from './Routing/Home';
// import Product from "./Product" 
// import First from './Weather/First';
import ReduserCount from './ReduserCount/ReduserCount';
import ReduserAge from './ReduserAge/ReduserAge';
import First from './LogInFrom/First';
import { Provider } from 'react-redux';
import Home from './RandomUserId/Home';
import Store from './RandomUserId/Store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    {/* <Counter />  */}
    {/* <Todo /> */}
    {/* <randomColor/> */}
    {/* <Search_movies/> */}
    {/* <Home/> */}
    {/* <Home_page/> */}
    {/* <Home/> */}
    {/* <Home/> */}
    {/* <Product/> */}
    {/* <First/> */}
    {/* <Home/> */}
    {/* <ReduserCount/> */}
    {/* <ReduserAge/> */}
    {/* <First/> */}
    <Provider store={Store}>
      <Home />
    </Provider>
  </>
);
