import config from '../../config';
import { TStudent } from '../student/student.interface';
import { Student } from '../student/student.model';
import { TUser } from './user.interface';
import { User } from './user.model';

const createStudentIntoDB = async (password: string, payload: TStudent) => {
  let user: Partial<TUser> = {};
  user.password = password || config.default_university_password;

  user.role = 'student';
  user.id = '203001000234';

  const newUser = await User.create(user);

  if (Object.keys(newUser).length) {
    payload.id = newUser.id;
    payload.user = newUser._id;

    const studentData = await Student.create(payload);
    return studentData;
  }
};

export const userService = {
  createStudentIntoDB,
};
