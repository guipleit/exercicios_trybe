import { User } from './types/user';

export const GetUserName = (userList: User[]): string[] => {
    return userList.map((user: User ) => user.name);
}

export const GetUsersByRepoQuantity = (userLists: User[], repos: number):string[] => {
   return userLists.filter((user: User) => user.repositories >= repos)
      .map((user: User) => user.name);
}

export const IsMostActive = (userList: User[], name: string): boolean => {
    const mostActiveUser = userList.reduce((prev, curr) => {
        return prev.repositories > curr.repositories ? prev : curr;
    });
    return mostActiveUser.name === name;
}