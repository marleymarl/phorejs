import Phore from '../../source';
import { expect } from 'chai';

describe('Get Tx Out', async () => {
  it('Should get the tx out from the rpc', async () => {
    const phore = new Phore();
    const txId = 'd69be598d7a194044418a359e2beaee3ba9a152238668642a0b0979438f88864';
    const vout = 1;
    const response = await phore.getTxOut(txId, vout);

    expect(response).to.have.property('result');
    expect(response.result.bestblock).to.be.a('string');
    expect(response.result.confirmations).to.be.at.least(5);
    expect(response.result.value).to.equal(739.16956920);
  });

  it('Should throw an error when getting the tx out from the rpc (reason: wrong txId)', async () => {
    const phore = new Phore();
    const response = await phore.getTxOut('error', 1);

    expect(response).to.have.property('result');
    expect(response.result).to.be.null;
  });

  it('Should throw an error when getting the tx out from the rpc (reason: no txId)', async () => {
    const phore = new Phore();
    const response = await phore.getTxOut();

    expect(response).to.have.property('result');
    expect(response.result).to.be.null;
    expect(response).to.have.property('error');
    expect(response.error).to.have.property('message');
    expect(response.error).to.have.property('code');
    expect(response.error.code).to.equal(-1);
  });

  it('Should throw an error when getting the tx out from the rpc (reason: wrong vout)', async () => {
    const phore = new Phore();
    const response = await phore.getTxOut('d69be598d7a194044418a359e2beaee3ba9a152238668642a0b0979438f88864', 9999999);

    expect(response).to.have.property('result');
    expect(response.result).to.be.null;
  });

  it('Should throw an error when getting the tx out from the rpc (reason: no vout)', async () => {
    const phore = new Phore();
    const response = await phore.getTxOut('d69be598d7a194044418a359e2beaee3ba9a152238668642a0b0979438f88864');

    expect(response).to.have.property('result');
    expect(response.result).to.be.null;
    expect(response).to.have.property('error');
    expect(response.error).to.have.property('message');
    expect(response.error).to.have.property('code');
    expect(response.error.code).to.equal(-1);
  });
});
