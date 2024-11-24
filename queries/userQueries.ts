import {gql} from "@apollo/client"



// Query

function GET_ALL_USER_QUERY(req_field: string) {
    return (gql`
        query{
            getAllUsers{
                ${req_field}
            }
        }
    `);
}

function AUTH_USER_QUERY(req_field: string) {
    return (gql`
    query($email: String!, $password: String!){
        authUser(email: $email, password: $password){
            ${req_field}
            }
        }
    `);
}
    

// Mutation

function CREATE_USER_QUERY(req_field: string) {
    return (gql`
        mutation($user: userInput!){
            createUser(user: $user){
                ${req_field}
            }
        }
    `);
}
    
export {
    GET_ALL_USER_QUERY,
    AUTH_USER_QUERY,
    CREATE_USER_QUERY,
}