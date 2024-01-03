import { Navigate, createBrowserRouter} from 'react-router-dom';
import Login from './views/Login';
import Signup from './views/Signup';
import Users from './views/Users';
import Notfound from './views/Notfound';
import Dashboard from './views/Dashboard'
import UserForm from './views/UserForm'
import Defaultlayout from './components/Defaultlayout'
import Guestlayout from './components/Guestlayout'

const router = createBrowserRouter([
    {
        path:'/',
        element: <Defaultlayout />,
        children:[
            {
                path:'/',
                element: <Navigate to='/users' />
            },
            {
                path:'/dashboard',
                element: <Dashboard />
            },
            {
                path:'/users',
                element: <Users />
            },
            {
                path:'/users/new',
                element: <UserForm key={"userCreate"}/>
            },
            {
                path:'/users/:id',
                element: <UserForm key={"userUpdate"}/>
            },
        ]
    },
    {
        path:'/',
        element: <Guestlayout />,
        children:[
            {
                path:'/login',
                element: <Login />
            },
            {
                path:'/signup',
                element: <Signup />
            }
        ]
    },

    {
        path:'*',
        element: <Notfound />
    }
]);

export default router;