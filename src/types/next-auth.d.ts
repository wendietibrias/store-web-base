import { ISupabaseUserProfile } from "@/libs/interfaces/supabase/profile";
import NextAuth, { User, type DefaultSession } from "next-auth";

declare module "next-auth" {
  interface Session {
    name: string;
    email: string;
    username: string;
    isAdmin: boolean;
    profile?: ISupabaseUserProfile;
  }

  interface User {
    name: string;
    email: string;
    phone: string;
    isAdmin: boolean;
    profile?: ISupabaseUserProfile;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    user: {
      id: string;
      token: string;
      name: string;
      phone: string;
      isAdmin: boolean;
      picture: string;
    };
  }
}
