import Phore from '../../source';
import { expect } from 'chai';

describe('Ping', async () => {
  it.skip('Ping (skipped: no info about that)', async () => {
    const phore = new Phore();

    const response = await phore.ping();

    expect(response).to.have.property('result');
  });
});
