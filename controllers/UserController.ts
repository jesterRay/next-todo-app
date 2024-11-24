import UserModel from "@models/UserModel"
import connectDb from "@config/mongoDb";

const save = async (user: any) => {
    try {
        await connectDb();
        if(await UserModel.findOne({email: user.email}))
            throw new Error("Email Already Exist");
        const newUser = new UserModel(user);
        await newUser.save();
        return user;
    } catch (error: any) {
        throw new Error(error.message || "Error in signing you up");
    }
}

const index = async () => {
    try {
        let users = await UserModel.find();
        return users;
    } catch (error: any) {
        throw new Error(error.message || "Error in getting users.");
    }
}


const search = async (id: string) => {
    try {
        let user = await UserModel.findById(id);
        if(!user) throw new Error('Erro not Found')
        return user;
    } catch (error: any) {
        console.log(error.message)
    }
}


const destroy = async (id:string) => {
    try {
        let users = await UserModel.findByIdAndDelete(id);
        return users;
    } catch (error: any) {
        console.log(error.message)
    }
}

const update = async (id: string, user: any) => {
    try {
        let updateUsers = await UserModel.findByIdAndUpdate(id,user,{new: true});
        return updateUsers;
    } catch (error: any) {
        console.log(error.message)
    }
}
















export {index,save,destroy,update,search}