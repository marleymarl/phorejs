import Phore from '../../source';
import { expect } from 'chai';

describe('Get Network Hash Ps', async () => {
  it('Should get the network hash ps from the rpc', async () => {
    const phore = new Phore();

    const response = await phore.getNetworkHashPs();

    expect(response).to.have.property('result');
    expect(response.result).to.be.at.least(0);
  });
});
