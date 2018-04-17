import Phore from '../../source';
import { expect } from 'chai';

describe('Get Block Header', async () => {
  it('Should get the block hash from the rpc and the use the hash to get the block header', async () => {
    const phore = new Phore();
    const hashResponse = await phore.getBlockHash(1);

    expect(hashResponse).to.have.property('result');
    expect(hashResponse.result).to.be.a('string');

    const response = await phore.getBlockHeader(hashResponse.result);

    expect(response).to.have.property('result');
    expect(response.result.version).to.equal(3);
    expect(response.result.previousblockhash).to.equal('2b1a0f66712aad59ad283662d5b919415a25921ce89511d73019107e380485bf');
    expect(response.result.merkleroot).to.equal('521e659682d6e36d2a2c7b8e0f5c61975dbb3044fa970f24b515e96af8f7d85f');
    expect(response.result.time).to.equal(1505224801);
    expect(response.result.bits).to.equal('207fffff');
    expect(response.result.nonce).to.equal(1);
  });

  it('Should throw an error when getting the block header from the rpc', async () => {
    const phore = new Phore();
    const response = await phore.getBlockHeader('error');

    expect(response).to.have.property('result');
    expect(response.result).to.be.null;
    expect(response).to.have.property('error');
    expect(response.error).to.have.property('message');
    expect(response.error.message).to.equal('Block not found');
    expect(response.error).to.have.property('code');
    expect(response.error.code).to.equal(-5);
  });
});
