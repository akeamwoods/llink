import { useQuery } from "react-query";
import { UserType } from "../types/userType";
import { fetchUsers } from "../api/users";

export const useUsers = () => {
  return useQuery<UserType[], Error>("users", fetchUsers);
};
