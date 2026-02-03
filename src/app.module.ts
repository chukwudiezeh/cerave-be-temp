import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UtilityModule } from './modules/utilities/utility.module';
import { ParticipantModule } from './modules/participants/participant.module';
import { SubmissionModule } from './modules/submissions/submission.module';
import { VoterModule } from './modules/voters/voter.module';
import { NotificationModule } from './modules/notifications/notification.module';
// import { appConfig } from './config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'mysql',
        host: configService.get<string>('DB_HOST'),
        port: configService.get<number>('DB_PORT'),
        username: configService.get<string>('DB_USERNAME'),
        password: configService.get<string>('DB_PASSWORD'),
        database: configService.get<string>('DB_NAME'),
        // migrations: ['dist/**/**.migration{.ts,.js}'],
        synchronize: false,
        logging: true,
        autoLoadEntities: true,
      }),
    }),
    UtilityModule,
    ParticipantModule,
    SubmissionModule,
    VoterModule,
    NotificationModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
