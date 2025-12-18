export interface User {
  id: number;
  username: string;
  email: string;
  password: string;
}

export const mockUsers: User[] = [
  {
    id: 1,
    username: 'demo_user',
    email: 'demo@itdictionary.com',
    password: 'password123',
  },
  {
    id: 2,
    username: 'developer',
    email: 'dev@example.com',
    password: 'securepass',
  },
];
