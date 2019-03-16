var class09Students = [];

function addStudentToClass(studentName) {
    //verifica se é rainha
    if (studentName === "Queen" && class09Students.indexOf(studentName) === -1) {
            class09Students.push("Queen");
            return "Queen has been added anyway";
    //não é a rainha e não é nulo, verifica se não está no array - entra no loop
    } else if (studentName != null && class09Students.indexOf(studentName) === -1)  {
        for (var i = 0; class09Students.length < 6; i++){
            class09Students.push(studentName);
            return studentName + ' has been added';
        }
        //se já tem 6 alunos
        return "class is full"
    //se o estudante já está no array
    } else {
        return "The student is already in the list"
    }   
}
addStudentToClass("Maria");

function getNumberOfStudents() {
    var classSize = class09Students.length;
    return classSize;
}
getNumberOfStudents();