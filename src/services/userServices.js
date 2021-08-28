export class UserService {

    constructor(client) {
        this.client = client;
    }

    login = async (body) => {
        try {
            const { data } = await this.client('/login.php', {
                method: 'POST',
                data: body
            });
            return data;
        } catch (error) {
            throw error;
        }
    };
}