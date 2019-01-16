import kvl, { Router, config } from "kvl";
import Info from 'api/user/userinfo'


@Router({})
export default class InfoRouter extends kvl {

    @config({ type: ['get','post'], url: '/userinfo/:username', name: '获取用户信息' })
    private userinfo(req: kvl.Request, res: kvl.Response): void {
        Info(req, res);
    }

}