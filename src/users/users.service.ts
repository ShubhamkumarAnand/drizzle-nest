import { Inject, Injectable } from '@nestjs/common';
import { NodePgDatabase } from 'drizzle-orm/node-postgres';
import { DATABASE_CONNECTION } from '../database/database-connection';
import * as schema from './schema';

@Injectable()
export class UsersService {
  constructor(
    @Inject(DATABASE_CONNECTION)
    private readonly databaseService: NodePgDatabase<typeof schema>,
  ) {}

  async getUsers() {
    return this.databaseService.query.users.findMany({
      with: { posts: true, profile: true },
    });
  }

  async createProfile(profile: typeof schema.profile.$inferInsert) {
    await this.databaseService.insert(schema.profile).values(profile);
  }

  async createUser(users: typeof schema.users.$inferInsert) {
    await this.databaseService.insert(schema.users).values(users);
  }
}
