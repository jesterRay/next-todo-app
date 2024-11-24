import jwt from "jsonwebtoken";

const SECRET_KEY: any = process.env.SECRET_KEY;

const generateToken = (user: any) => {
    try {
        if(!SECRET_KEY) throw new Error("Faild to generate auth token.");
        return jwt.sign({user: user}, SECRET_KEY, {expiresIn: "1D"});
    } catch (error: any) {
        throw new Error(error.message || "Faild to generate authenticate token.")
    }
}


const verifyToken = (token: string) => {
    try {
        if(!SECRET_KEY) throw new Error;
        const decodeToken = jwt.verify(token,SECRET_KEY);
        return decodeToken; 
    } catch (error: any) {
        throw new Error(error.message || "Faild to generate authenticate token.")   ;
    }
}


export {
    generateToken,
    verifyToken
}