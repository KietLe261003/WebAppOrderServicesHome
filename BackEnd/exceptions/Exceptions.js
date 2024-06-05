import { print,OutputType } from "../Helper/print.js"

export default class Exception extends Error {
    static Wrong_Email_Login="Wrong Email or Password";
    static Wrong_UserName_or_Pasword="Sai tên đăng nhập hoặc mật khẩu";
    static Wrong_Push_User="Lỗi thêm người dùng";
    static Wrong_UserNameorEmail="Lỗi trùng tên đăng nhập hoặc email";
    static Not_Find_User="Không tìm thấy người dùng này";
    constructor(message){
        super(message);
        print(message,OutputType.ERROR);
    }
}