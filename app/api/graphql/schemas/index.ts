

import UserTypeDef from "./UserTypeDef";
import { mergeTypeDefs } from "@graphql-tools/merge";



const types = mergeTypeDefs([UserTypeDef]);


export default types;