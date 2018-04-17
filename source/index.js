import config from './config';
import RPC from './rpc';

export default class Phore {
  constructor() {
    this.rpc = new RPC(config.endpoint);
  }

  async estimateFee(block) {
    return this.rpc.call('estimatefee', block);
  }

  async estimatePriority(block) {
    return this.rpc.call('estimatepriority', block);
  }

  async getBestBlockHash() {
    return this.rpc.call('getbestblockhash');
  }

  async getBlock(hash) {
    return this.rpc.call('getblock', hash);
  }

  async getBlockchainInfo() {
    return this.rpc.call('getblockchaininfo');
  }

  async getBlockCount() {
    return this.rpc.call('getblockcount');
  }

  async getBlockHash(index) {
    return this.rpc.call('getblockhash', index);
  }

  async getBlockHeader(hash) {
    return this.rpc.call('getblockheader', hash);
  }

  async getChainTips() {
    return this.rpc.call('getchaintips');
  }

  async getConnectionCount() {
    return this.rpc.call('getconnectioncount');
  }

  async getDifficulty() {
    return this.rpc.call('getdifficulty');
  }

  async getInfo() {
    return this.rpc.call('getinfo');
  }

  async getMemPoolInfo() {
    return this.rpc.call('getmempoolinfo');
  }

  async getMiningInfo() {
    return this.rpc.call('getmininginfo');
  }

  async getNetworkHashPs() {
    return this.rpc.call('getnetworkhashps');
  }

  async getRawMemPool() {
    return this.rpc.call('getrawmempool');
  }

  async getRawTransaction(txId, vout) {
    return this.rpc.call('getrawtransaction', [txId, vout]);
  }

  async getTxOut(txId, vout) {
    return this.rpc.call('gettxout', [txId, vout]);
  }

  async getTxOutsetInfo() {
    return this.rpc.call('gettxoutsetinfo');
  }

  async submitBlock(hexData) {
    return this.rpc.call('submitblock', hexData);
  }

  async ping() {
    return this.rpc.call('ping');
  }

  async masternodeList() {
    return this.rpc.call('masternodelist');
  }

  async sendRawTransaction() {
    return this.rpc.call('sendrawtransaction');
  }
}
