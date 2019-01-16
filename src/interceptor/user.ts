

/**
 * 限制接口是否需要登录
 * @param req 
 * @param res 
 */
export const UserLoginInterceptor = (req: kvl.Request, res: kvl.Response) => {
    if(!(req.session as any).userinfo){
        res.send(`
            <script>
                alert('用户未登录')
                location.href = '/login.html'
            </script>
        `)
        // res.redirect('/login.html')
        // res.status(505).json({
        //     code: 0,
        //     msg: '用户未登录'
        // })
        return false;
    }
    // console.log(req.url)
    // console.log((req.session as any).userinfo)
}