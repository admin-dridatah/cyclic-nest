import { Injectable } from '@nestjs/common';

// TODO: This should be a real class/interface representing a user entity
export type User = {
  userId: number;
  username: string;
  password: string;
};

@Injectable()
export class UsersService {
  private readonly users = [
    {
      userId: 1,
      username: 'jibi',
      password: 'jibi123',
    },
    {
      userId: 2,
      username: 'jain',
      password: 'jain123',
    },
    {
      userId: 2,
      username: 'sajith',
      password: 'sajith123',
    },
  ];

  async findOne(username: string): Promise<User | undefined> {
    return this.users.find((user: User) => user.username === username);
  }
}
