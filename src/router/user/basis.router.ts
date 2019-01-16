import kvl, { Router, config } from "kvl";
import InfoRouter from './info.router'
import { UserLoginInterceptor } from 'interceptor/user'
import { Login as ValidatorLogin } from 'validator/user'

import Login from 'api/user/login'


@Router({
    url: '/user',
    router: [ InfoRouter ],
    interceptor: [ UserLoginInterceptor ]
})
export default class BasisRouter extends kvl {

    @config({ type: ['get','post'], url: '/login', name: '用户登录', interceptorLevel: 2, validation: ValidatorLogin })
    private login(req: kvl.Request, res: kvl.Response): void {
        Login(req, res);
    }


}