import { Controller, Patch } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) { }

  @Patch('solve-issues')
  async solveIssues(): Promise<{ usersHasIssues: number }> {
    const updatedCount = await this.userService.solveUserIssues();
    return { usersHasIssues: updatedCount };
  }

  @Patch('remove-users')
  async removeUsers(): Promise<{ result: { status: boolean, message: string } }> {
    const result = await this.userService.removeUsers();
    return { result };
  }
}