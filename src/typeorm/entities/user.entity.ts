import { Role } from "src/enums/role";
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
    
    @Column({
        type: 'enum',
        enum: Role,
        default: Role.PEMILIK
    })
    role: Role;
    
    @Column({nullable: true})
    resto: number;
}