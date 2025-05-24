// lib/fetcher.ts
import apiClient from "@/lib/axios";

const fetcher = (url) => apiClient.get(url).then((res) => res.data);

export default fetcher;
