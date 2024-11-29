import { useQuery } from "@tanstack/react-query";
import apiClient from "./interceptor";

export function useGetNotes() {
  return useQuery({
    queryKey: ["notes"],
    queryFn: async () => {
      const { data } = await apiClient.get("/notes");
      return data;
    },
  });
}
