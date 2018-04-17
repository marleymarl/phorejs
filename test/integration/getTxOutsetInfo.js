import Phore from '../../source';
import { expect } from 'chai';

describe('Get Tx Outset Info', async () => {
  it('Should get the tx outset info from the rpc', async () => {
    const phore = new Phore();

    const response = await phore.getTxOutsetInfo();

    expect(response).to.have.property('result');
    expect(response.result.bestblock).to.be.a('string');
    expect(response.result.height).to.be.at.least(300000);
    expect(response.result.transactions).to.be.at.least(600000);
    expect(response.result.txouts).to.be.at.least(700000);
    expect(response.result.bytes_serialized).to.be.at.least(2000000);
    expect(response.result.hash_serialized).to.be.a('string');
    expect(response.result.total_amount).to.be.at.least(2000000);
  });
});
