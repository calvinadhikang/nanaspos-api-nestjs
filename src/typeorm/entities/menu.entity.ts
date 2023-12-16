import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'menus'})
export class MenuEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column({type: 'bigint'})
    price: number;

    @Column()
    resto: number;
}