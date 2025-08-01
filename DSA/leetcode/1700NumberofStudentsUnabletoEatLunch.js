var countStudents = function(students, sandwiches) {
    let countStudentPref1 = 0;
    let countStudentPref0 = 0;
    let res = 0;
    for(let i=0; i<students.length; i++){
        if(students[i] === 1){
            countStudentPref1++;
        }else{
            countStudentPref0++; 
        }
    }
    let i=0

    while(i<sandwiches.length){
        if(sandwiches[i] === 1 ){
            if(countStudentPref1>0){
                countStudentPref1--
            }else{
                break;
            }
        }else{
            if(countStudentPref0>0){
                countStudentPref0--
            }else{
                break;
            }
        }
        i++;
    }
    return sandwiches.length-i;
};