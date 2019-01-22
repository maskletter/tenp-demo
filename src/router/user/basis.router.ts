import tenp, { Router, config } from "@tenp/core";
import InfoRouter from './info.router'
import { UserLoginInterceptor } from 'interceptor/user'
import { Login as ValidatorLogin } from 'validator/user'

import Login from 'api/user/login'


@Router({
    url: '/user',
    router: [ InfoRouter ],
    interceptor: [ UserLoginInterceptor ]
})
export default class BasisRouter extends tenp {

    @config({ type: ['get','post'], url: '/login', name: '用户登录', interceptorLevel: 2, validation: ValidatorLogin })
    private login(req: tenp.Request, res: tenp.Response): void {
        Login(req, res);
    }


}