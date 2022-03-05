import {
  Column,
  CreateDateColumn,
  PrimaryGeneratedColumn,
  Entity,
} from 'typeorm';

@Entity('ideas')
export class IdeasEntity {
  @PrimaryGeneratedColumn('uuid') id: string;
  @CreateDateColumn() created: Date;
  @Column('text') ideas: string;
  @Column('text') description: string;
}
