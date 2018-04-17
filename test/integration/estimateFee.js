import Phore from '../../source';
import { expect } from 'chai';

describe('Estimate Fee', async () => {
  it('Should get the fee estimation from the rpc', async () => {
    const phore = new Phore();

    const response = await phore.estimateFee(1);

    expect(response).to.have.property('result');
    expect(response.result).to.be.at.least(0);
  });

  it('Should throw an error when getting the fee estimation from the rpc (reason: wrong block)', async () => {
    const phore = new Phore();

    const response = await phore.estimateFee('error');

    expect(response).to.have.property('result');
    expect(response.result).to.be.null;
    expect(response).to.have.property('error');
    expect(response.error).to.have.property('message');
    expect(response.error.message).to.equal('Expected type int, got str');
    expect(response.error).to.have.property('code');
    expect(response.error.code).to.equal(-3);
  });

  it('Should throw an error when getting the fee estimation from the rpc (reason: no block)', async () => {
    const phore = new Phore();

    const response = await phore.estimateFee();

    expect(response).to.have.property('result');
    expect(response.result).to.be.null;
    expect(response).to.have.property('error');
    expect(response.error).to.have.property('message');
    expect(response.error).to.have.property('code');
    expect(response.error.code).to.equal(-1);
  });
});
