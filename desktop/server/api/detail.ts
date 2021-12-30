import  type { IncomingMessage, ServerResponse } from 'http';
import * as url from 'url';

export default async ( req: IncomingMessage, res: ServerResponse, params: any) => {
    let detail:any = {};
    
    console.log('par', params);
    detail = await $fetch("https://suara.com/data/service/detail?slug=2021/11/17/143000/kunjungi-giias-2021-jokowi-jajal-produk-baru-dan-mobil-listrik", params);
    
    res.writeHead(200, {"Content-Type": "application/json"});
    res.write(JSON.stringify(detail));
    res.end();
}