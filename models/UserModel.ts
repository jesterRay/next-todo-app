
import {model,models, Schema} from "mongoose";
import bcrypt from "bcrypt";
import {TodoSchema} from "./TodoModel";

const UserSchema = new Schema({
    name: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    password: {
        type: String,
        require: true,
    },
    todos: [TodoSchema]
},{timestamps: true})

UserSchema.pre('save', async function(next){
    try {
        const user = this;
        const salt = await bcrypt.genSalt(10);
        if(typeof user.password === 'string')
            user.password = await bcrypt.hash(user.password,salt);
        next();
    } catch (error:any) {
        next(error);
    }
});


UserSchema.methods.verifyPassword = async function(password:any){
    const user = this;
    return await bcrypt.compare(password,user.password);
}

const UserModel = models.User ||  model('User',UserSchema);
export default UserModel; 