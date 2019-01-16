

/**
 * 用户信息
 */

export default (req: kvl.Request, res: kvl.Response): void =>  {
    res.send(`<h1>获取用户信息:${req.params.username}</h1>`)
}