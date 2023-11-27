import { UserType } from "../types/userType";

export const fetchUsers = async (): Promise<UserType[]> => {
  const response = await fetch("https://dummyjson.com/users?limit=100");
  if (!response.ok) {
    throw new Error("Network error");
  }
  const data = await response.json();
  return data.users;
};

export const fetchUserById = async (userId: string): Promise<UserType> => {
  const response = await fetch(`https://dummyjson.com/users/${userId}`);
  if (!response.ok) {
    throw new Error("Network error");
  }
  const data = await response.json();
  return data;
};
