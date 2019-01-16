
import * as fs from 'fs';
import * as path from 'path'
import * as directory from 'directory.json'
import * as fileType from 'file-type'
export default class Directory {

    /**
     * 获取目录
     * @param index 
     * @param url 
     */
    public static getFails(index = 0,url: string = ''): any {
        
        url = this.getPath(index,url);
        
        if(!this.exists(url)){
            return { code: 404, msg: '未发现目录' }
        }
        
        if(!this.isDirectory(url)){
            return { code: 405, msg: '路径非文件夹' }
        }

        const files:{name: string, directory: boolean}[] = Directory.readdirSync(url).map(data => {
            return {
                name: data,
                directory: Directory.isDirectory(path.resolve(url, data))
            };
        });
        
        return files
        
    }

    /**
     * 获取绝对路径
     * @param index 
     * @param url 
     */
    public static getPath(index: number, url: string): string {
        return decodeURIComponent(path.join(directory[index] || (index as any),url))
    }

    /**
     * 判断文件是否存在
     * @param url 
     */
    public static exists(url: string){
        return fs.existsSync(url)
    }

    /**
     * 判断路径是否为文件夹
     * @param url 
     */
    public static isDirectory(url: string): boolean{
        return fs.statSync(url).isDirectory();
    }

    /**
     * 读取文件夹目录
     * @param url 
     */
    public static readdirSync(url: string): any[] {
        return fs.readdirSync(url);
    }

    /**
     * 获取文件内容
     * @param index 
     * @param url 
     */
    public static getFilesContent(url: string): string | { url: string, type: string } {
 
        //获取文件类型
        const fileBuffer = this.getFilesBuffer(url);
        const type = fileType(fileBuffer);
       
        if(type){
            return { url, type: type.ext };
        }else{
            return fileBuffer.toString('utf8');
        }
    }

    /**
     * 读取目录内容
     * @param url 
     */
    public static getFilesBuffer(url: string): Buffer {
        return fs.readFileSync(url);
    }

}