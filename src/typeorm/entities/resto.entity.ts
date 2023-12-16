import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { UserEntity } from "./user.entity";

@Entity({ name: 'restos' })
export class RestoEntity {
    @PrimaryGeneratedColumn({type: 'int'})
    id: number;

    @Column()
    name: string;

    @Column({default: 0})
    tax: number;

    @OneToMany(() => UserEntity, user => user.resto)
    users: UserEntity[];
}