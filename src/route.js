import { HashRouter, Route } from 'react-router-dom';
import { Login } from './component/login/login'
// ReactDOM.render(<HashRouter>
//     <App>
//         <Route path='/login' component={Login}></Route>
//     </App>
// </HashRouter>, document.querySelector('#root'))
export const Router = (props) => {
    return <HashRouter>
        <Route path='/' component={Login}></Route>
        <Route path='/login' component={Login}></Route>
    </HashRouter>
}