import { Controller, Get } from '@nestjs/common'
import { UserService } from './auth.service'

@Controller('user')
export class UserController {
	constructor(private readonly userService: UserService) {}

	@Get('')
	async getUser() {
		return this.userService.getUser()
	}
}
