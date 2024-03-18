// Create a model of what a student should be
export interface Student {
  id: number;
  studentName: string;
  courseCode: string;
  dateOfBirth: string; //mm/dd/yyyy
  letterGrade: string; //A, B, C, D, F
  profilePic: string; //url
}
