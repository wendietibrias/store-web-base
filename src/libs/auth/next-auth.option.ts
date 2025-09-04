import { NextAuthOptions } from "next-auth";
import CredentialsProvider from 'next-auth/providers/credentials';
import { ICustomAuthUserCredential } from "../interfaces/supabase/user";
import { supabaseClient } from "../services/supabase";

 const nextAuthOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
        mode: { label:"Mode",type:"mode" }
      },
      async authorize(credentials) {
        return null;
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/auth/login",
  },
  callbacks: {
     async jwt({ token,user }) {
        if(user){
            token.sub = user.id;
            token.email = user.email;
        }
        return token;
     },
     async session({ session,token }) {
        return {
            ...session,
        }
     }
  },
  secret: process.env.NEXTAUTH_SECRET,
};

export default nextAuthOptions;