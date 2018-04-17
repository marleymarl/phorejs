import Phore from '../../source';
import { expect } from 'chai';

describe('Get Blockchain Info', async () => {
  it('it Should get the blockchain info from the rpc', async () => {
    const phore = new Phore();
    const response = await phore.getBlockchainInfo();

    expect(response).to.have.property('result');
    expect(response.result).to.have.property('blocks');
    expect(response.result.blocks).to.be.at.above(300000);
    expect(response.result).to.have.property('chain');
    expect(response.result.chain).to.equal('main');
    expect(response.result).to.have.property('difficulty');
    expect(response.result).to.have.property('bestblockhash');
  });
});
