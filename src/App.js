import './App.css';
import Head from '../src/Component/Head'
import Body from '../src/Component/Body';
import { Provider } from 'react-redux';
import store from './Component/utils/store';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainContainer from './Component/MainContainer';
import WatchPage from './Component/WatchPage';
  
const appRouter = createBrowserRouter ([{

  path : "/",
  element : <Body/>,
  children :[
    {
   
      path: '/',
      element: <MainContainer/>

    },
    {
   
      path: 'watch',
      element: <WatchPage/>

    },
  ],
},]); 


function App() {
  return (
   <Provider store={store}>

   <div>

    <Head/>   
    
    <RouterProvider router={appRouter}/>
    <Body/>
   
   </div>
   </Provider>
   
  
  )
}

export default App;
