import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn } from 'typeorm';
import { SubmissionStatus } from '@/common/enums';
import { Participant } from '@/modules/participants/entities/participant.entity';
import { ParticipationCategory } from '@/modules/utilities/entities/participation-category.entity';
import { ContentCategory } from '@/modules/utilities/entities/content-category.entity';

@Entity('submissions')
export class Submission {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'participation_category_id' })
  participationCategoryId: number;

  @ManyToOne(() => ParticipationCategory)
  @JoinColumn({ name: 'participation_category_id' })
  participationCategory: ParticipationCategory;

  @Column({ name: 'content_category_id' })
  contentCategoryId: number;

  @ManyToOne(() => ContentCategory)
  @JoinColumn({ name: 'content_category_id' })
  contentCategory: ContentCategory;

  @Column({ type: 'varchar', length: 500, name: 'content_url' })
  contentUrl: string;

  @Column({
    type: 'enum',
    enum: SubmissionStatus,
    default: SubmissionStatus.PENDING,
  })
  status: SubmissionStatus;

  @Column({ name: 'participant_id' })
  participantId: number;

  @ManyToOne(() => Participant)
  @JoinColumn({ name: 'participant_id' })
  participant: Participant;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}
