export type TName = {
  firstName: string
  middleName?: string
  lastName: string
}

export type TStudent = {
  id: string
  name: TName
  gender: 'male' | 'female' | 'other'
  dateOfBirth?: string
  email: string
  contactNo: string
  emergencyContactNo: string
  presentAddress: string
  profileImage?: string
  academicLevel: string
  isDeleted: boolean
  createdAt: string
  updatedAt: string
}
