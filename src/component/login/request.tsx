import { HTTP } from '../../api/Http';
import { LoginParams } from './login.d'
export const Request = {
    UserLogin: (params: LoginParams) => {
        return HTTP.post('/login', params)
    }
}