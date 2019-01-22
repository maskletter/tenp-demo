import tenp from "@tenp/core";
import * as directory from 'directory.json'
import Directory from "method/directory";

const getFileUrl = (url: string) => {
    url = url.split('?')[0];
    return url;
}

//返回文件内容
const getFilesContent = (res: tenp.Response,url: string, isShow?: string): void => {

    
    const result: any = Directory.getFilesContent(url);
    if(!result){
        res.status(404).json({ code: 0, msg: '文件不存在' })
    }else{
        if(result.url){
            res.status(200).sendFile(result.url)
        }else{
            if(isShow != 'html'){
                res.setHeader('Content-Type', 'text/plain; charset=utf-8');
            }
            res.send(result)
        }
    }

}


//渲染页面
export const RenderHtml = (req: tenp.Request, res: tenp.Response): void => {
    
    const url = getFileUrl(req.url).replace(`/directory/files-html/${req.params.index}`, '');
    //获取绝对路径
    const absUrl = Directory.getPath(req.params.index, url);
    if(!Directory.exists(absUrl)){
        res.status(404).render('directory.art', {
            target: { code: 404 }
        })
        return;
    }
    if(!Directory.isDirectory(absUrl)){
        getFilesContent(res, absUrl, req.query.show);
    }else{
        res.render('directory.art', {
            target: Directory.getFails(req.params.index, url),
            baseUrl: req.url
        })
    }

}

//返回json
export default (req: tenp.Request, res: tenp.Response): void => {

    const url = getFileUrl(req.url).replace(`/directory/files/${req.params.index}`, '');
    //获取绝对路径
    const absUrl = Directory.getPath(req.params.index, url);
    if(!Directory.exists(absUrl)){
        res.status(404).json({ coded: 404, msg: '未发现文件或目录' })
        return;
    }
    if(!Directory.isDirectory(absUrl)){
        //文件
        getFilesContent(res, absUrl);
    }else{
        //目录
        res.status(200).json(Directory.getFails(req.query.params, url))
    }

}