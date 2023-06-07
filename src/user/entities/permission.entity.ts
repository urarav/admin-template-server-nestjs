import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';
import { User } from './user.entity';

@Entity()
export class Permission {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column({ default: true })
  status: boolean;

  @Column({ name: 'user_id', default: null })
  userId: string;

  @ManyToOne(() => User, (user) => user.permissions)
  @JoinColumn({ foreignKeyConstraintName: 'f_uk', name: 'user_id' })
  user: User;
}
