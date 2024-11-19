import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';


@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) { }

  async solveUserIssues(): Promise<number> {
    const number_of_issues = await this.prisma.user.count({
      where: { hasIssues: true },
    });

    await this.prisma.user.updateMany({
      where: { hasIssues: true },
      data: { hasIssues: false },
    });

    return number_of_issues;
  }

  async removeUsers(): Promise<{ status: boolean, message: string }> {
    try {
      await this.prisma.user.deleteMany({});
      return { status: true, message: "Users deleted" };
    } catch (error) {
      return { status: false, message: error.message };
    }
  }
}