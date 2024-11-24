

export default function comparePassword(password: string, confirmPassword: string){
    if(password === confirmPassword) return true;
    return false;
}