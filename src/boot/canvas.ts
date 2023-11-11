import 'src/css/wallet_connect.css';

import { boot } from 'quasar/wrappers';
import VueKonva from 'vue-konva';

export default boot(({ app }) => {
  app.use(VueKonva);

  console.log('[booted] Canvas');
});
