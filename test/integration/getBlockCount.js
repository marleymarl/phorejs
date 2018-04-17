import Phore from '../../source';
import { expect } from 'chai';

describe('Get Block Count', async () => {
  it('Should get the block count from the rpc', async () => {
    const phore = new Phore();
    const response = await phore.getBlockCount();

    expect(response).to.have.property('result');
    expect(response.result).to.be.at.above(0);
  });
});
