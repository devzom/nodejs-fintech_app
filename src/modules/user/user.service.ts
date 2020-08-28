import { Accounts } from './../accounts/accounts.entity';
import { Injectable, Inject } from '@nestjs/common';
import * as jwt from 'jsonwebtoken';
import { jwtConfig } from './../../../config/jwtConfig';
import crypto = require('crypto');
import { Users } from './user.entity';
import { AccountsService } from '../accounts/accounts.service';


@Injectable()
export class UsersService {
    constructor(
        @Inject('USERS_REPOSITORY') private usersRepository: typeof Users,
        private accountsService: AccountsService,
    ) { }

    public async create(user: any): Promise<object> {
        const exists = await Users.findOne({ where: { Email: user.Email } });

        if (exists) {
            return {
                success: false,
                message: 'This email already exists, try another.'
            }
        } else {
            //hash data
            user.Salt = crypto.randomBytes(128).toString('base64');
            user.Password = crypto.createHmac('sha256', user.Password + user.Salt).digest('hex');
            //hash data

            const newUser: any = await this.usersRepository.create<Users>(user);
            ////const jwtToken = jwt.sign(user, process.env.JWT_KEY, jwtConfig);
            //implement more safe way of useing jwtToken
            const jwtToken = jwt.sign({ id: user.id, username: user.Username, email: user.Email }, process.env.JWT_KEY, jwtConfig);

            newUser.Token = jwtToken;

            if (newUser) {
                const account = this.accountsService.create(newUser.id)
                const accounts = [account];

                const response = {
                    user: {
                        id: newUser.id,
                        username: newUser.Username.trim(),
                        email: newUser.Email.trim(),
                        accounts,
                    },
                    token: jwtToken,
                    success: true,
                }
                return response;
            } else {
                return {
                    success: false,
                    message: 'Couldn\'t create new user.'
                }
            }
        }
    }

    // Create login function
    public async login(credentials: any): Promise<any> {
        const user = await Users.findOne<Users>({
            where: { Username: credentials.Username },
            attributes: { exclude: ['createdAt', 'updatedAt'] }
        });

        // Handle user not found error
        if (!user) {
            return {
                success: false,
                message: 'User doesn\t exist. Check credentials.'
            }
        }

        // Handle password check from DB and password input
        const inputPassword = crypto.createHmac('sha256', credentials.Password + user.Salt.trim()).digest('hex');

        //Compare passwords
        const isPasswordCorrect = user.Password.trim() === inputPassword.trim();

        if (!isPasswordCorrect) {
            return {
                success: false,
                message: 'Password is incorrect.'
            }
        }

        // Get user's accounts
        const accounts = await this.accountsService.getAccountsByUserId(user.id);

        // Generate JWT token
        const jwtToken = jwt.sign({ id: user.id, email: user.Email, username: user.Username }, process.env.JWT_KEY, jwtConfig);

        //Create complete response object based on validation
        const response = {
            user: {
                id: user.id,
                username: user.Username,
                email: user.Email,
                accounts,
            },
            token: jwtToken,
            success: true,
        }
        return response;
    }

    // Create authentication function
    public async authenticate(id: number, token: string): Promise<any> {

        //Get user by ID with accounts
        const user = await Users.findOne<Users>({
            where: {
                id,
            },
            include: [
                {
                    model: Accounts,
                    where: {
                        UserId: id,
                    },
                    required: true,
                }
            ]
        });

        //Decode token and compare given ID's
        const decodedToken = jwt.verify(token, process.env.JWT_KEY, jwtConfig);
        const isTokenValid = decodedToken.id === Number(id);

        //Handle incorrect tokens
        if (!isTokenValid) {
            return {
                success: false,
                message: 'User is not authorized to log in.'
            }
        }

        // Create response object
        const response = {
            user: {
                id: user.id,
                email: user.Email.trim(),
                username: user.Username.trim(),
                accounts: user.Accounts,
            },
            token,
            success: true,
        }

        return response;
    }
}