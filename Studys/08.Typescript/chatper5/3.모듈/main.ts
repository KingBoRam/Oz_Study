import {log as Logger, appName, User} from "./utils";
import {Student, StudentProfile} from "./student";

// console.log(appName);
// const user = new User("John");
// Logger(user.getName());

const student: Student = {
  id: 1,
  name: "1",
  age: 1,
};
function createStudentProfile(profile: StudentProfile) {
  console.log(`${profile.studentId}, ${profile.photoUrl}`);
}
createStudentProfile({
  studentId: student.id,
  photoUrl: "https;//somephotourl.png",
});
