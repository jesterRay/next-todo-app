import {gql} from "graphql-tag";


import {
    index as userIndex,
    save as userSave,
    update as userUpdate,
    destroy as userDestroy,
    search as userSearch,

} from "../../../../controllers/UserController" 
import {authUser} from "../../../../controllers/AuthController"
import UserModel from "@models/UserModel";

interface UserInput{
    name: String,
    email: String,
    password: String,
}

const UserResolver = {
    Query: {
        getAllUsers: async () => {
            return [{name: "Sannan",email: "sannan@gmail.com",password: "password"}]
        },
        getUser: async (_parent: any,args: {id: string}) => {
            return {id: args.id, name: "Sannan",email: "sannan@gmail.com",password: "password"}
        },
        authUser: async (_parent: any, args: {email: string, password: string}) => {
            try {
                const {user,token} = await authUser(args.email,args.password);
                return {user,token};
            } catch (error: any) {
                throw new Error(error.message || "Failed to Authenticate User");
            }
        }
    },
    Mutation: {
        createUser: async (_parent: any,args: {user: UserInput}) => {
            try {
                const user = await userSave(args.user);
                return user;
            } catch (error: any) {
                throw new Error(error.message || "Error in Signing Up");
            }
        },
        updateUser: async (_parent: any,args: {id:string, user: UserInput}) => {
            return {id: args.id, name: "Sannan",email: "sannan@gmail.com",password: "password"}
        },
        deleteUser: async (_parent: any,args: {id: string})=>{
            return {id: args.id, name: "Sannan",email: "sannan@gmail.com",password: "password"}
        },
    }
}



export default UserResolver