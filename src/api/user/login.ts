

/**
 * 登录
 */

export default (req: kvl.Request, res: kvl.Response): void =>  {
    const session: any = req.session;
    session.userinfo = {
        username: req.body.username,
        password: req.body.password
    }

    res.send('<h1>User Success Login</h1>')
}