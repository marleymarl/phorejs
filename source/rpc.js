import axios from 'axios';
import config from './config';

export default class RPC {
  constructor(endpoint, jsonrpc) {
    this.endpoint = endpoint;
    this.jsonrpc = jsonrpc || '2.0';
  }

  async call(method, params = [], id = 1, jsonrpc = this.jsonrpc) {
    params = params.constructor === Array ? params : [params];
    params = params.filter(item => item !== undefined);
    const options = {
      id,
      jsonrpc,
      method,
      params,
    };

    const response = await axios.post(this.endpoint, options);

    return response.data;
  }
}
