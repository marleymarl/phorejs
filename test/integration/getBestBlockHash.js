import Phore from '../../source';
import { expect } from 'chai';

describe('Get Best Block Hash', async () => {
  it('it Should get the info from the rpc', async () => {
    const phore = new Phore();
    const response = await phore.getBestBlockHash();

    expect(response).to.have.property('result');
    expect(response.result).to.be.a('string');
  });
});
