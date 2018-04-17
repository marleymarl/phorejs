import Phore from '../../source';
import { expect } from 'chai';

describe('Get Raw Mem Pool', async () => {
  it('it Should get the raw mem pool from the rpc', async () => {
    const phore = new Phore();
    const response = await phore.getRawMemPool();

    expect(response).to.have.property('result');
    expect(response).to.be.an.array;
  });
});
