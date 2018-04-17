import Phore from '../../source';
import { expect } from 'chai';

describe('Get Mining Info', async () => {
  it('Should get the mining info from the rpc', async () => {
    const phore = new Phore();

    const response = await phore.getMiningInfo();

    expect(response).to.have.property('result');
    expect(response.result).to.have.property('currentblocksize');
    expect(response.result).to.have.property('currentblocktx');
    expect(response.result).to.have.property('networkhashps');
    expect(response.result.blocks).to.be.at.least(300000);
    expect(response.result.difficulty).to.be.at.least(0);
    expect(response.result.chain).to.equal('main');
  });
});
