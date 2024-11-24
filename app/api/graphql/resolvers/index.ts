import UserResolver from "./UserResolver";
import { mergeResolvers } from "@graphql-tools/merge";
// import { loadFilesSync } from "@graphql-tools/load-files";
// import path from 'path';


const resolvers = mergeResolvers([UserResolver])



export default resolvers;