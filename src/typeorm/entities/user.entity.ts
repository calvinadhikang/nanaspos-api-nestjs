import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'users' })
export class UserEntity {
    @PrimaryGeneratedColumn({type: 'int'})
    id: number;

    @Column()
    name: string;

    @Column()
    username: string;

    @Column()
    password: string;
}