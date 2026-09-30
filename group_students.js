function groupStudentsByGradeBand(students) {
    const groups = {
        A: [],
        B: [],
        C: [],
        F: []
    };

    for (const student of students) {
        if (student.marks >= 80) {
            groups.A.push(student);
        } 
        else if (student.marks >= 70) {
            groups.B.push(student);
        } 
        else if (student.marks >= 60) {
            groups.C.push(student);
        } 
        else{
            groups.F.push(student);
        }
    }
    return groups;
}
console.log(groupStudentsByGradeBand([{"marks":85,"name":"Alice"},{"marks":72,"name":"Bob"},{"marks":58,"name":"Charlie"},{"marks":91,"name":"David"}]));