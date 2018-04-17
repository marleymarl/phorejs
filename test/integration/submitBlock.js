import Phore from '../../source';
import { expect } from 'chai';

describe('Submit block', async () => {
  it.skip('Should get the block submitted to the rpc (skipped: no info about that)', async () => {
    const phore = new Phore();
    const hexData = '?';

    const response = await phore.submitBlock(hexData);

    expect(response).to.have.property('result');
  });

  it('Should throw an error when submitting the block the rpc (reason: wrong hexData)', async () => {
    const phore = new Phore();
    const response = await phore.submitBlock('error');

    expect(response).to.have.property('result');
    expect(response.result).to.be.null;
    expect(response).to.have.property('error');
    expect(response.error).to.have.property('message');
    expect(response.error).to.have.property('code');
    expect(response.error.code).to.equal(-22);
  });

  it('Should throw an error when submitting the block the rpc (reason: no hexData)', async () => {
    const phore = new Phore();
    const response = await phore.submitBlock('error');

    expect(response).to.have.property('result');
    expect(response.result).to.be.null;
    expect(response).to.have.property('error');
    expect(response.error).to.have.property('message');
    expect(response.error).to.have.property('code');
    expect(response.error.code).to.equal(-22);
  });
});
