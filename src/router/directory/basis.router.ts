import kvl, { Router, config } from "kvl";
import { UserLoginInterceptor } from 'interceptor/user'
import GetDirectory, { RenderHtml } from 'api/directory/GetDirectory'
import Directory from "method/directory";

@Router({
    url: '/directory',
    interceptor: [ UserLoginInterceptor ],
})
export default class DirectoryRouter extends kvl {
    
    @config({ url: '/files/:index/*', type: ['get', 'post'], name: '返回json的目录接口' })
    private getDirectory(req: kvl.Request, res: kvl.Response): void{
        GetDirectory(req, res)
    }
    
    @config({ url: '/files/:index/', type: ['get', 'post'], name: '返回json的目录接口' })
    private getDirectoryRoot(req: kvl.Request, res: kvl.Response): void{
        GetDirectory(req, res)
    }

    @config({ url: '/files-html/:index/*', type: ['get', 'post'], name: '返回html的目录接口' })
    private getDirectoryHtml(req: kvl.Request, res: kvl.Response): void{
        RenderHtml(req, res);
    }

    @config({ url: '/files-html/:index', type: ['get', 'post'], name: '返回html的目录接口' })
    private getDirectoryHtmlRoot(req: kvl.Request, res: kvl.Response): void{
        res.render('directory.art', {
            target: Directory.getFails(req.params.index, ''),
            baseUrl: req.url,
            root: true
        })
    }

} 