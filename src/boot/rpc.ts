// You can either import the default styles or create your own.
import 'src/css/wallet_connect.css';
import { boot } from 'quasar/wrappers';
import { useRPCStore } from 'stores/rpcStore';

export default boot(({ app }) => {
  useRPCStore();
  useRPCStore().update_connection();

  console.log('[booted] RPC');
});
