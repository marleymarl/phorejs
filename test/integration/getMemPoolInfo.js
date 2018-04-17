import Phore from '../../source';
import { expect } from 'chai';

describe('Get Mem Pool Info', async () => {
  it('it Should get the mem pool info from the rpc', async () => {
    const phore = new Phore();
    const response = await phore.getMemPoolInfo();

    expect(response).to.have.property('result');
    expect(response.result).to.have.property('size');
    expect(response.result).to.have.property('bytes');
  });
});
