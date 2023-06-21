import {
  createBrowserRouter, 

} from "react-router-dom";
import Login from "../Accounts/Login";
import Register from "../Accounts/Register";
import Error from "../Error/Error";
import Dashboard from "../Layout/Dashboard";
import Main from "../Layout/Main";
import Classes from "../Pages/Classes/Classes";
import AddClass from "../Pages/Dashboard/Add Class/AddClass";
import ManageUsers from "../Pages/Dashboard/ManageUsers/ManageUsers";
import MyCart from "../Pages/Dashboard/MyCart/MyCart";
import Home from "../Pages/Home/Home";
import Instructors from "../Pages/Instructors/Instructors";
import PrivateRouter from "../Routes/PrivtaeRouter"
import AdminRoute from "../Routes/AdminRoute"
import InstructorRoute from "../Routes/InstructorRoute"
import ManageClasses from "../Pages/Dashboard/ManageClasses/ManageClasses";
import Payment from "../Pages/Dashboard/Payment/Payment";
import { useLoaderData } from 'react-router-dom';
import MyClasses from "../Pages/Dashboard/MyClasses/MyClasses";
import MyEnrolledClasses from "../Pages/Dashboard/MyEnrolledClasses.s/MyEnrolledClasses";
import SinglePayment from "../Pages/Dashboard/SinglePayment/SinglePayment";
import PaymentHistory from '../Pages/Dashboard/PaymentHistory/PaymentHistory'
import StudentHome from "../Pages/Dashboard/StudentHome/StudentHome";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <Error></Error>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: 'login',
        element: <Login></Login>
      },
      {
        path: 'register',
        element: <Register></Register>
      },
      {
        path: 'instructors',
        element: <Instructors></Instructors>
      },
      {
        path: 'classes',
        element: <Classes></Classes>
      }
    ],

  },
  {
    path: 'dashboard',
    element: <PrivateRouter><Dashboard></Dashboard></PrivateRouter>,
    children: [
      {
        path: 'mycart',
        element: <MyCart></MyCart>
      },
      {
        path: 'manageusers',
        element: <ManageUsers></ManageUsers>
      },
      {
        path: 'addclass',
        element: <InstructorRoute><AddClass></AddClass></InstructorRoute>
      },
      {
        path: 'manageclasses',
        element:  <ManageClasses></ManageClasses> 
      },
      {
        path: 'payment',
        element: <Payment/>,
        
       
      },
      {
        path: 'studenthome',
        element: <StudentHome></StudentHome>,
        
       
      },
      {
        path: 'enrolled',
        element: <MyEnrolledClasses></MyEnrolledClasses>,
        loader: ()=>fetch('https://fashion-fiesta-server-production.up.railway.app/payments')
       
      },
      {
        path: 'myclasses',
        element: <InstructorRoute> <MyClasses></MyClasses> </InstructorRoute>,
        loader:()=>fetch('https://fashion-fiesta-server-production.up.railway.app/classes')
       
      },
      {
        path: 'singlepayment/:id',
        element: <SinglePayment></SinglePayment>,
        loader:({params})=>fetch(`https://fashion-fiesta-server-production.up.railway.app/allcarts/${params.id}`)
        
       
      },
      
        {
          path: 'paymenthistory',
          element: <PaymentHistory></PaymentHistory>,
          loader: ()=>fetch('https://fashion-fiesta-server-production.up.railway.app/payments')
         
        }
      
    ]
  }
]);