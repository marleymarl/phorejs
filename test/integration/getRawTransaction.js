import Phore from '../../source';
import { expect } from 'chai';

describe('Get Raw Transaction', async () => {
  it('Should get the raw transaction from the rpc', async () => {
    const phore = new Phore();
    const txId = 'd69be598d7a194044418a359e2beaee3ba9a152238668642a0b0979438f88864';
    const vout = 1;
    const response = await phore.getRawTransaction(txId, vout);

    expect(response).to.have.property('result');
    expect(response.result.hex).to.be.a('string');
    expect(response.result.txid).to.equal('d69be598d7a194044418a359e2beaee3ba9a152238668642a0b0979438f88864');
    expect(response.result.version).to.equal(1);
    expect(response.result.locktime).to.equal(0);
    expect(response.result.vin).to.be.an.array;
  });

  it('Should get the raw transaction from the rpc (no vout)', async () => {
    const phore = new Phore();
    const txId = 'd69be598d7a194044418a359e2beaee3ba9a152238668642a0b0979438f88864';
    const response = await phore.getRawTransaction(txId);

    expect(response).to.have.property('result');
    expect(response.result).to.be.a('string');
  });

  it('Should throw an error when getting the raw transaction from the rpc (reason: wrong txId)', async () => {
    const phore = new Phore();
    const response = await phore.getRawTransaction('error', 1);

    expect(response).to.have.property('result');
    expect(response.result).to.be.null;
    expect(response).to.have.property('error');
    expect(response.error).to.have.property('message');
    expect(response.error.message).to.equal('parameter 1 must be hexadecimal string (not \'error\')');
    expect(response.error).to.have.property('code');
    expect(response.error.code).to.equal(-8);
  });

  it('Should throw an error when getting the raw transaction from the rpc (reason: no txId)', async () => {
    const phore = new Phore();
    const response = await phore.getRawTransaction();

    expect(response).to.have.property('result');
    expect(response.result).to.be.null;
    expect(response).to.have.property('error');
    expect(response.error.code).to.equal(-1);
  });
});
