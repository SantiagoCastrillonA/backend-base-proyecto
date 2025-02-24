import UserRepository from '../repositories/UserRepository';
import User from '../Dto/UserDto';
import generateHash from '../Helpers/generateHash';
import Auth from '../Dto/AuthDto';


class UserService {

    static async register(user: User) {
        user.password = await generateHash(user.password);
        return await UserRepository.add(user);
    }

    static async login(auth: Auth) {
        return await UserRepository.login(auth);
    }

    static async delete(id: string): Promise<void> {
        await UserRepository.delete(id);
    }

    static async update(user: User): Promise<User> {
        return await UserRepository.update(user);
    }
}
export default UserService;