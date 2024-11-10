import 'src/css/wallet_connect.css';

import { boot } from 'quasar/wrappers';
import VueKonva from 'vue-konva';
import VueApexCharts from 'vue3-apexcharts';

export default boot(({ app }) => {
  app.use(VueKonva);
  app.use(VueApexCharts);

  console.log('[booted] Canvas');
});
