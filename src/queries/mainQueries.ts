import { useMutation } from '@tanstack/react-query';

import { fetchAppriciationList } from '../api/mainApi';

export function useAppriciationList() {
  return useMutation((page: string) => fetchAppriciationList(page));
}
