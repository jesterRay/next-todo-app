import UserModel from "@models/UserModel"
import connectDb from "@config/mongoDb";
import { generateToken } from "@utils/generateToken";


const authUser = async (email: string, pass: string)=>{
    try {
        await connectDb();

        const user = await UserModel.findOne({email});
        if(!user) throw new Error("Incorrect email or password");

        const match = await user.verifyPassword(pass, user.password);
        if(!match) throw new Error("Incorrect email or password");
        const token = generateToken({
            id: user._id,
        });
        return {user,token};
    } catch (error: any) {
        throw new Error(error.message || "Error in authenticating you");
    }
}


export {authUser}