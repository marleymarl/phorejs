import Phore from '../../source';
import { expect } from 'chai';

describe('Get Connection Count', async () => {
  it('Should get the connection count from the rpc', async () => {
    const phore = new Phore();

    const response = await phore.getConnectionCount();

    expect(response).to.have.property('result');
    expect(response.result).to.be.at.least(0);
  });
});
