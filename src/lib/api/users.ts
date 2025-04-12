import { post, get, put, del } from '@aws-amplify/api';
import { fetchAuthSession } from '@aws-amplify/auth';

export interface User {
  username: string;
  email: string;
  status: string;
  enabled: boolean;
  userStatus: string;
  createdAt: string;
  role: string;
}

interface ListUsersResponse {
  users: User[];
}

interface CreateUserResponse {
  user: User;
}

const getAuthHeaders = async () => {
  try {
    const session = await fetchAuthSession();
    return {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${session.tokens?.idToken?.toString() || ''}`,
    };
  } catch (error) {
    console.error('Error getting auth headers:', error);
    return {
      'Content-Type': 'application/json',
      'Authorization': '',
    };
  }
};

export const userApi = {
  // List all users
  listUsers: async (): Promise<User[]> => {
    try {
      const headers = await getAuthHeaders();
      const response = await get({
        apiName: 'userApi',
        path: '/users',
        options: { headers },
      });
      return (response as unknown as ListUsersResponse).users;
    } catch (error) {
      console.error('Error listing users:', error);
      throw error;
    }
  },

  // Create a new user
  createUser: async (data: { email: string; password: string; role: string }): Promise<User> => {
    try {
      const headers = await getAuthHeaders();
      const response = await post({
        apiName: 'userApi',
        path: '/users',
        options: {
          headers,
          body: data,
        },
      });
      return (response as unknown as CreateUserResponse).user;
    } catch (error) {
      console.error('Error creating user:', error);
      throw error;
    }
  },

  // Delete a user
  deleteUser: async (username: string): Promise<void> => {
    try {
      const headers = await getAuthHeaders();
      await del({
        apiName: 'userApi',
        path: `/users/${username}`,
        options: { headers },
      });
    } catch (error) {
      console.error('Error deleting user:', error);
      throw error;
    }
  },

  // Update user status (enable/disable)
  updateUserStatus: async (username: string, enabled: boolean): Promise<void> => {
    try {
      const headers = await getAuthHeaders();
      await put({
        apiName: 'userApi',
        path: `/users/${username}/status`,
        options: {
          headers,
          body: { enabled },
        },
      });
    } catch (error) {
      console.error('Error updating user status:', error);
      throw error;
    }
  },

  // Update user role
  updateUserRole: async (username: string, role: string): Promise<void> => {
    try {
      const headers = await getAuthHeaders();
      await put({
        apiName: 'userApi',
        path: `/users/${username}/role`,
        options: {
          headers,
          body: { role },
        },
      });
    } catch (error) {
      console.error('Error updating user role:', error);
      throw error;
    }
  },
}; 