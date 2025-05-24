import apiClient from "@/lib/axios";
import useSWR from "swr";

const fetcher = (url) => apiClient.get(url).then((res) => res.data.repayments);
export function useRepayment({ page, search, status, from_date, to_date }) {
  const query = new URLSearchParams({
    page: String(page),
    ...(search && { search }),
    ...(status && { status }),
    ...(from_date && { from_date }),
    ...(to_date && { to_date }),
  });

  const { data, error, isLoading, mutate } = useSWR(
    `/api/admin/loan_repayment?${query}`,
    fetcher
  );
  console.log(data);

  return {
    repayments: data?.data || [],
    pagination: data?.meta,
    isLoading,
    isError: error,
    mutate,
  };
}
