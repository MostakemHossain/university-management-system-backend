export type TGuardian = {
  fatherName: string;
  fatherOccupation: string;
  fatherContactNumber: string;
  motherName: string;
  motherOccupation: string;
  motherContactNumber: string;
};
export type TStudentName = {
  firstName: string;
  middleName?: string;
  lastName: string;
};
export type TLocalGuardian = {
  name: string;
  occupation: string;
  contactNumber: string;
  address: string;
  relation: string;
};
export type TStudent = {
  id: string;
  name: TStudentName;
  gender: 'male' | 'female' | 'other';
  dateOfBirth: string;
  email: string;
  contactNumber: string;
  emergencyContactNumber: string;
  bloodGroup: 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-';
  presentAddress: string;
  permanentAddress: string;
  guardian: TGuardian;
  localGuardian: TLocalGuardian;
  profileImage?: string;
  isActive: 'active' | 'blocked';
  isDeleted: boolean;
};
