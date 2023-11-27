import { useQuery, UseQueryOptions } from "react-query";
import { UserType } from "../types/userType";
import { fetchUserById } from "../api/users";

export const useUser = (
  userId?: string,
  options?: UseQueryOptions<UserType, Error>
) => {
  return useQuery<UserType, Error>(
    ["user", userId],
    () => fetchUserById(userId!),
    {
      ...options,
      enabled: !!userId && options?.enabled,
    }
  );
};
