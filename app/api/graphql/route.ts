
import { ApolloServer } from "@apollo/server";
import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { NextRequest } from "next/server";


import resolvers from "./resolvers/index"
import typeDefs from "./schemas/index"

const server:any = new ApolloServer({
    resolvers,
    typeDefs,

})


const handler = startServerAndCreateNextHandler<NextRequest>(server,{
    context: async (req)=>({req})
});


export { handler as GET, handler as POST };