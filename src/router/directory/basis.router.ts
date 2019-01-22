import tenp, { Router, config } from "@tenp/core";
import { UserLoginInterceptor } from 'interceptor/user'
import GetDirectory, { RenderHtml } from 'api/directory/GetDirectory'
import Directory from "method/directory";

@Router({
    url: '/directory',
    interceptor: [ UserLoginInterceptor ],
})
export default class DirectoryRouter extends tenp {
    
    @config({ url: '/files/:index/*', type: ['get', 'post'], name: '返回json的目录接口' })
    private getDirectory(req: tenp.Request, res: tenp.Response): void{
        GetDirectory(req, res)
    }
    
    @config({ url: '/files/:index/', type: ['get', 'post'], name: '返回json的目录接口' })
    private getDirectoryRoot(req: tenp.Request, res: tenp.Response): void{
        GetDirectory(req, res)
    }

    @config({ url: '/files-html/:index/*', type: ['get', 'post'], name: '返回html的目录接口' })
    private getDirectoryHtml(req: tenp.Request, res: tenp.Response): void{
        RenderHtml(req, res);
    }

    @config({ url: '/files-html/:index', type: ['get', 'post'], name: '返回html的目录接口' })
    private getDirectoryHtmlRoot(req: tenp.Request, res: tenp.Response): void{
        res.render('directory.art', {
            target: Directory.getFails(req.params.index, ''),
            baseUrl: req.url,
            root: true
        })
    }

} 