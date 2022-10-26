import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { UserModule } from './auth/auth.module'
import { FlowOptionsModule } from './flow-options/flow-options.module'
import { LogActiveDayModule } from './log-active-day/log-active-day.module'
import { PrismaService } from './prisma.service'
import { ConfigModule } from '@nestjs/config'

@Module({
	imports: [
		ConfigModule.forRoot(),
		UserModule,
		FlowOptionsModule,
		LogActiveDayModule
	],
	controllers: [AppController],
	providers: [AppService, PrismaService]
})
export class AppModule {}
