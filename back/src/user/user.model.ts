import { $Enums } from "@prisma/client";

export type UserInput = {
    email: string;
    password: string;
    phone: string;
    username: string;
    photo: string;
    role: $Enums.Role
}