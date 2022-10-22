import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { FlowOptionsModule } from './flow-options/flow-options.module';
import { LogActiveDayModule } from './log-active-day/log-active-day.module';

@Module({
  imports: [UserModule, FlowOptionsModule, LogActiveDayModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
