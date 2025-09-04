import nextAuthOptions from "@/libs/auth/next-auth.option";
import NextAuth from "next-auth";

const nextAuth = NextAuth(nextAuthOptions);

export { nextAuth as GET,nextAuth as POST }