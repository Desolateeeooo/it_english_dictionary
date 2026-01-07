import { passwordHash } from './passwordHelperFuncs';

export interface User {
  id: number;
  username: string;
  email: string;
  password: string | null;
	provider?: 'Google' | 'Github' | 'Yandex';
	providerId?: string;
}

export let mockUsers: User[] = [];

Promise.all([passwordHash('password123', 10), passwordHash('securepass', 10)]).then(
  ([demoHash, devHash]) => {
    mockUsers = [
      {
        id: 1,
        username: 'demo_user',
        email: 'demo@itdictionary.com',
        password: demoHash,
      },
      {
        id: 2,
        username: 'developer',
        email: 'dev@example.com',
        password: devHash,
      },
    ];
    console.log('✅ Mock users initialized');
  }
);

console.log(mockUsers);

// export let mockUsers: User[] = [
//   {
//     id: 1,
//     username: 'demo_user',
//     email: 'demo@itdictionary.com',
//     password: 'password123',
//   },
//   {
//     id: 2,
//     username: 'developer',
//     email: 'dev@example.com',
//     password: 'securepass',
//   },
// ];

export const getNewId = (arr: User[]) => {
  return arr.length + 1;
};

export const createUser = (user: Omit<User, 'id'>) => {
  return new Promise((resolve, reject) => {
    if (!user) {
      reject(Error('Invalid user'));
    }

    const newUser: User = {
      id: getNewId(mockUsers),
      ...user,
    };

    mockUsers = [...mockUsers, newUser];
    resolve(user);
  });
};
