import { VToken as VTokenContract } from 'packages/contracts';

import getInterestRateModel from '.';

describe('api/queries/getVTokenInterestRateModel', () => {
  test('returns the address of the interest rate model associated to the contract of the V token passed', async () => {
    const fakeContractAddress = '0x0';
    const interestRateModelMock = vi.fn(async () => fakeContractAddress);

    const fakeContract = {
      interestRateModel: interestRateModelMock,
    } as unknown as VTokenContract;

    const response = await getInterestRateModel({
      vTokenContract: fakeContract,
    });

    expect(interestRateModelMock).toHaveBeenCalledTimes(1);
    expect(response).toEqual({
      contractAddress: fakeContractAddress,
    });
  });
});
