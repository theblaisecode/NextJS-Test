"use server";
import { readFile, writeFile } from "fs/promises";
import { type User } from "../types/types";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const createUser = async (formData: FormData) => {
  // const rawData = Object.fromEntries(formData);
  // console.log(rawData);

  // OR

  const firstName = formData.get("firstName") as string;
  const lastName = formData.get("lastName") as string;
  console.log({ firstName, lastName });

  const newUser: User = { firstName, lastName, id: Date.now().toString() };
  await savesers(newUser);
  revalidatePath("/actions");
  // redirect("/");
};

export const fetchUsers = async (): Promise<User[]> => {
  const result = await readFile("users.json", { encoding: "utf8" });
  const users = result ? JSON.parse(result) : [];
  return users;
};

const savesers = async (user: User) => {
  const users = await fetchUsers();
  users.push(user);
  await writeFile("users.json", JSON.stringify(users));
};
