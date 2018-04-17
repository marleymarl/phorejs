import Phore from '../../source';
import { expect } from 'chai';

describe('Get Block Hash', async () => {
  it('Should get the block hash from the rpc', async () => {
    const phore = new Phore();
    const response = await phore.getBlockHash(0);

    expect(response).to.have.property('result');
    expect(response.result).to.be.a('string');
  });

  it('Should throw an error when getting the block hash from the rpc', async () => {
    const phore = new Phore();
    const response = await phore.getBlockHash(-1);

    expect(response).to.have.property('result');
    expect(response.result).to.be.null;
    expect(response).to.have.property('error');
    expect(response.error).to.have.property('message');
    expect(response.error.message).to.equal('Block height out of range');
    expect(response.error).to.have.property('code');
    expect(response.error.code).to.equal(-8);
  });
});
