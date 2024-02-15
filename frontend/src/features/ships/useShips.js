import { useQuery } from "@tanstack/react-query";
import { getShips } from "../../services/apiShips";

export function useShips() {
  const { data: ships, isLoading } = useQuery({
    queryKey: ["ships"],
    queryFn: getShips,
  });
  return { ships, isLoading };
}
