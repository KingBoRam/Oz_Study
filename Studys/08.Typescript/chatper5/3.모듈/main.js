"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// console.log(appName);
// const user = new User("John");
// Logger(user.getName());
const student = {
    id: 1,
    name: "1",
    age: 1,
};
function createStudentProfile(profile) {
    console.log(`${profile.studentId}, ${profile.photoUrl}`);
}
createStudentProfile({
    studentId: student.id,
    photoUrl: "https;//somephotourl.png",
});
