import Phore from '../../source';
import { expect } from 'chai';

describe('Masternode List', async () => {
  it.skip('Masternode List (skipped: not working)', async () => {
    const phore = new Phore();

    const response = await phore.masternodeList();

    expect(response).to.have.property('result');
  });
});
