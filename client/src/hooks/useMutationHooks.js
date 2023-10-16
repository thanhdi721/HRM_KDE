import { useMutation } from "@tanstack/react-query";

export const useMutationHooks = (fnCallback) => {
  const mutation = useMutation(fnCallback); // Không cần gọi fnCallback() ở đây
  return mutation;
};
