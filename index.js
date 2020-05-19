class assignment{
    constructor(name, score, date, passed) {
        this.name = name;
        this.score = score;
        this.date = date;
        this.passed = passed;
    }
}

let s0 = new assignment("Jane", 95, "2020-01-24", true);
let s1 = new assignment("Joe", 77, "2018-05-14", true);
let s2 = new assignment("Jack", 59, "2019-07-05", false);
let s3 = new assignment("Jill", 88, "2020-04-22", true);

let submissions = [s0, s1, s2, s3];

function addSubmission(array, newName, newScore, newDate) {
    let pass = null;

    if (newScore >= 60) {
        pass = true;
    } else {
        pass = false;
    }

    let newSubmission = new assignment(newName, newScore, newDate, pass);
    array.push(newSubmission);
}

function deleteSubmissionByIndex(array, index) {
    array.splice(index, 1);
}

function deleteSubmissionByName(array, name) {
    let DSBN = array.findIndex(function (submission) {
        return submission.name == name
    });

    array.splice(DSBN, 1);
}

function editSubmission(array, index, score) {
    array[index].score = score;

    if (score >= 60) {
        array[index].passed = true;
    } else {
        array[index].passed = false;
    }
}

function findSubmissionByName(array, name) {
    let FSBN = array.find(function (submission) {
        return submission.name == name
    });
	console.log(FSBN);
    return FSBN;
}

function findLowestScore(array) {
    let y = 100;
    let FLS = array.forEach(function (submission) {
        let x = submission.score;
        if (x <= y) {
            y = x
        };
    });

    let FLS2 = array.find(function (submission2) {
        return submission2.score == y
    });
	console.log(FLS2);
    return FLS2;
}

function findAverageScore(array) {
    let avg = 0;
    for (i = 0; i < array.length; i++) {
        avg += array[i].score;
    }
    avg = avg / array.length;
	console.log(avg);
    return avg;
}

function filterPassing(array) {
    let FP = array.filter(function (submission) {
        return submission.passed == true
    });
	console.log(FP);
    return FP;
}

function filter90AndAbove(array) {
    let F90AA = array.filter(function (submission) {
        return submission.score >= 90
    });
	console.log(F90AA);
    return F90AA;
}

addSubmission(submissions, "Jared", 33, "2016-05-23");
deleteSubmissionByIndex(submissions, 0);
addSubmission(submissions, "Jane", 95, "2020-01-24");
deleteSubmissionByName(submissions, "Joe");
addSubmission(submissions, "Joe", 77, "2018-05-14");
editSubmission(submissions, 1, 60);
findSubmissionByName(submissions, "Jill");
findLowestScore(submissions);
findAverageScore(submissions);
filterPassing(submissions);
filter90AndAbove(submissions);
console.log(submissions);