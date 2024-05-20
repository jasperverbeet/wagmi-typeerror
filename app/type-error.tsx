import { useSuspenseQuery } from '@tanstack/react-query';
import { erc20Abi } from 'viem';
import { useConfig } from 'wagmi';
import { readContractQueryOptions } from 'wagmi/query';


const useTypeError = () => {
  const config = useConfig();

  const options = readContractQueryOptions(config, {
    address: '0x1234567890123456789012345678901234567890',
    abi: erc20Abi,
    functionName: 'name',
  });

  return useSuspenseQuery(options);
};

export default useTypeError;
