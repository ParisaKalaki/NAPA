import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createShip as createShipApi } from "../../services/apiShips";
import { toast } from "react-hot-toast";

export function useCreateShip() {
  const queryClient = useQueryClient();

  const { mutate: createShip, isLoading: isCreating } = useMutation({
    mutationFn: createShipApi,

    onSuccess: () => {
      toast.success("Ships data successfully created");

      queryClient.invalidateQueries({
        quetyKey: ["ships"],
      });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isCreating, createShip };
}
