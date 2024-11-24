
import {gql} from "graphql-tag"



const UserTypeDef = gql`
    type User {
        _id: ID!,
        name: String,
        email: String,
        password: String,
    }
    type AuthPayload{
        user: User,
        token: String!,
    }

    input userInput{
        name: String,
        email: String,
        password: String,
    }

    type Query {
        getAllUsers: [User!],
        getUser(id: ID, email: String): User,
        authUser(email: String!, password: String!): AuthPayload!,
    }

    type Mutation {
        createUser(user: userInput!): User,
        updateUser(id: ID!, user: userInput!): User,
        deleteUser(id: ID!): User,
    }

`


export default UserTypeDef