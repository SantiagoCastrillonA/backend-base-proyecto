import User from '../Dto/UserDto';
import Auth from '../Dto/AuthDto';
import bcrypt from 'bcryptjs';


class UserRepository {

    

    static async add(user: User) {
        return "Ok"
    }

    static async login(auth: Auth) {

        return { logged: true, status: "Successful authentication", id: 5 }

    }

    static async delete(id: string) {
        return "Ok"
    }

    static async update(user: User): Promise<User> {
        return user;
    }

}

export default UserRepository;