import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { UserEntity } from "./user.entity";
import { MenuEntity } from "./menu.entity";

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

    @OneToMany(() => MenuEntity, menu => menu.resto)
    menus: MenuEntity[];
}