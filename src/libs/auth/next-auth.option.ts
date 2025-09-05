import { NextAuthOptions } from "next-auth";
import CredentialsProvider from 'next-auth/providers/credentials';
import { IAuthorizeModeType } from "../interfaces/supabase/user";
import { supabaseClient } from "../services/supabase";

 const nextAuthOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name:'Credentials',
      credentials: {
        email:{},
        password: {},
        mode:{}
      },
      async authorize(credentials) {

        let auth;


        if(credentials?.mode === IAuthorizeModeType.SIGN_IN){
          auth = await supabaseClient().auth.signInWithPassword({
            email: credentials?.email!,
            password: credentials?.password!
          });
        }

        if(credentials?.mode === IAuthorizeModeType.SIGN_UP){
          auth = await supabaseClient().auth.signUp({
            email: credentials?.email!,
            password: credentials?.password!
          });
        }

        if(!auth){
          throw new Error("Invalid User Credentials");
        };

        return {
          email: auth.data.session?.user.email!,
          username:"",
          name:"",
          isAdmin: false,
          phone: '',
          profile:null,
          id:0,
          image:''
        } as any;
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
  secret: process.env.NEXT_PUBLIC_NEXTAUTH_SECRET,
} satisfies NextAuthOptions;

export default nextAuthOptions;