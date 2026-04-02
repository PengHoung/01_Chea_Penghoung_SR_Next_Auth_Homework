"use server";

import { signIn } from "@/auth";
import { isRedirectError } from "next/dist/client/components/redirect-error";

export async function loginAction(data) {
  const { email, password } = data;
  try { 
    const res = await signIn("credentials", {
    email: email,
    password: password,
    redirectTo: "/products",
  });
  if (res.error) {
    throw new Error("Login failed");
}
  } catch (error) {
    console.error("Login Action Error:", error);
    if(isRedirectError){
        throw error;
    }
  }   
}