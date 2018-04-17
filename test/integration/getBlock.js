import Phore from '../../source';
import { expect } from 'chai';

describe('Get Block Info', async () => {
  it('Should get the block hash from the rpc and the use the hash to get the block information', async () => {
    const phore = new Phore();
    const hashResponse = await phore.getBlockHash(0);

    expect(hashResponse).to.have.property('result');
    expect(hashResponse.result).to.be.a('string');

    const response = await phore.getBlock(hashResponse.result);

    expect(response).to.have.property('result');

    expect(response.result.hash).to.equal('2b1a0f66712aad59ad283662d5b919415a25921ce89511d73019107e380485bf');
    expect(response.result.confirmations).to.be.at.least(300000);
    expect(response.result.size).to.equal(166);
    expect(response.result.time).to.equal(1505224800);
    expect(response.result.nextblockhash).to.equal('124c98bde26aacd0e7d995781992584661e44f289631a0323aa827793c9864fb');
    expect(response.result.difficulty).to.equal(0);
    expect(response.result.moneysupply).to.equal(0);
  });

  it('Should throw an error when getting the block info from the rpc', async () => {
    const phore = new Phore();
    const response = await phore.getBlock('error');

    expect(response).to.have.property('result');
    expect(response.result).to.be.null;
    expect(response).to.have.property('error');
    expect(response.error).to.have.property('message');
    expect(response.error.message).to.equal('Block not found');
    expect(response.error).to.have.property('code');
    expect(response.error.code).to.equal(-5);
  });
});
