export type TUser = {
  id: string;
  password: string;
  needsPasswordChange: boolean;
  role: 'student' | 'mentor' | 'admin';
  status: 'in-progress' | 'blocked';
  isDeleted: boolean;
};

// We used TUser as Partial Type for new User
// export type NewUser = {
//   id: string;
//   password: string;
//   role: string;
// };
