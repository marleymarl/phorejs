import Phore from '../../source';
import { expect } from 'chai';

describe('Get Info', async () => {
  it('it Should get the info from the rpc', async () => {
    const phore = new Phore();
    const response = await phore.getInfo();

    expect(response).to.have.property('result');
    expect(response.result).to.have.property('blocks');
    expect(response.result).to.have.property('moneysupply');
    expect(response.result).to.have.property('difficulty');
  });
});
