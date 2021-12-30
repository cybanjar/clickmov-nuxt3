import  type { IncomingMessage, ServerResponse } from 'http';
import * as url from 'url';

export default async ( req: IncomingMessage, res: ServerResponse ) => {
    let data:any = { data: [{data: ""}] };

    data = await $fetch("https://suara.com/data/service/terkini?category=video");
    
    res.writeHead(200, {"Content-Type": "application/json"});
    res.write(JSON.stringify(data));
    res.end();
}