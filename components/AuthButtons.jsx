"use client";

import { useUser } from "@auth0/nextjs-auth0/client";

export default function AuthButtons() {
  const { user, isLoading } = useUser();
  if (isLoading) return null;

  return user ? (
    <a className="hover:text-hooded-neon transition" href="/auth/logout">
      Logout
    </a>
  ) : (
    <a className="hover:text-hooded-neon transition" href="/auth/login">
      Login
    </a>
  );
}
