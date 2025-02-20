import React, { createContext, useState, useContext, ReactNode } from 'react';
import { User, UserFormData } from '../types/types';

const initialUsers: User[] = [
  { id: 1, first_name: 'John', last_name: 'Doe', email: 'john.doe@example.com' },
  { id: 2, first_name: 'Jane', last_name: 'Smith', email: 'jane.smith@example.com' },
  { id: 3, first_name: 'Robert', last_name: 'Johnson', email: 'robert.johnson@example.com' },
  { id: 4, first_name: 'Emily', last_name: 'Williams', email: 'emily.williams@example.com' },
  { id: 5, first_name: 'Michael', last_name: 'Brown', email: 'michael.brown@example.com' },
  { id: 6, first_name: 'Sarah', last_name: 'Davis', email: 'sarah.davis@example.com' },
  { id: 7, first_name: 'David', last_name: 'Miller', email: 'david.miller@example.com' },
  { id: 8, first_name: 'Lisa', last_name: 'Wilson', email: 'lisa.wilson@example.com' },
];

interface UserContextType {
  users: User[];
  addUser: (userData: UserFormData) => void;
  updateUser: (id: number, userData: UserFormData) => void;
  getUser: (id: number) => User | undefined;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [users, setUsers] = useState<User[]>(initialUsers);

  const addUser = (userData: UserFormData) => {
    const newId = users.length > 0 ? Math.max(...users.map(user => user.id)) + 1 : 1;
    const newUser: User = {
      id: newId,
      ...userData
    };
    setUsers([...users, newUser]);
  };

  const updateUser = (id: number, userData: UserFormData) => {
    setUsers(users.map(user => 
      user.id === id ? { ...user, ...userData } : user
    ));
  };

  const getUser = (id: number) => {
    return users.find(user => user.id === id);
  };

  return (
    <UserContext.Provider value={{ users, addUser, updateUser, getUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = (): UserContextType => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUserContext must be used within a UserProvider');
  }
  return context;
};