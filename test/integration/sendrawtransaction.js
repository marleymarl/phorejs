import Phore from '../../source';
import { expect } from 'chai';

describe('Send Raw Transaction', async () => {
  it.skip('Send raw transaction (skipped: require balance)', async () => {
    const phore = new Phore();

    const response = await phore.sendRawTransaction();

    expect(response).to.have.property('result');
  });
});
