import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class UserService {
    constructor(private prisma: PrismaService) {

    }

    async getUser() {
        return this.prisma.user.findMany()
    }
}
