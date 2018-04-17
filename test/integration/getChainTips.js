import Phore from '../../source';
import { expect } from 'chai';

describe('Get Chain Tips', async () => {
  it('it Should get the chain tips from the rpc', async () => {
    const phore = new Phore();
    const response = await phore.getChainTips();

    expect(response).to.have.property('result');
    expect(response.result).to.be.an.array;
    expect(response.result[0]).to.have.property('height');
    expect(response.result[0]).to.have.property('hash');
    expect(response.result[0]).to.have.property('branchlen');
    expect(response.result[0]).to.have.property('status');
  });
});
