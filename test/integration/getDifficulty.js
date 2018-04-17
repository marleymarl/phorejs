import Phore from '../../source';
import { expect } from 'chai';

describe('Get Difficulty', async () => {
  it('it Should get the difficulty from the rpc', async () => {
    const phore = new Phore();
    const response = await phore.getDifficulty();

    expect(response).to.have.property('result');
    expect(response.result).to.be.at.above(0);
  });
});
