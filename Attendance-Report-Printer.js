function formatAttendanceReport(students) {
    return students.map((student) => {
        const percentage = Math.round(
            (student.present / student.total) * 100
        );
        let status;

        if (percentage >= 90) {
            status = "Excellent";
        } 
        else if(percentage >= 75) {
            status = "Good";
        } 
        else{
            status = "At Risk";
        }
        return `${student.name}: ${student.present}/${student.total} (${percentage}%) - ${status}`;
    });
}
console.log(formatAttendanceReport([{"name":"Rafi","present":18,"total":20}]));