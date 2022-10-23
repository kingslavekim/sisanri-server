process.env['NODE_CONFIG_DIR'] = __dirname + '/configs';

import 'dotenv/config';
import App from '@/app';
import validateEnv from '@utils/validateEnv';
import NoticeRoute from '@routes/notice.route';
import IrRoute from '@routes/ir.route';

validateEnv();

const app = new App([ new NoticeRoute(), new IrRoute() ]);

app.listen();
