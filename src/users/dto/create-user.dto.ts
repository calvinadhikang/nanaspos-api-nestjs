import { Role } from "src/enums/role";

export interface CreateUserDTO {
    name: string,
    username: string,
    password: string,
    role: Role
}