export type TUser = {
  id: string;
  password: string;
  needsPasswordChange: boolean;
  role: 'student' | 'mentor' | 'admin';
  status: 'in-progress' | 'blocked';
  isDeleted: boolean;
};
