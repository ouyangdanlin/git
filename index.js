var express = require('express');
var app = express();
var fs = require("fs");
var id =2;
var user = {
    "user4" : {
        "name" : "mohit",
        "adress" : "password4",
        "class" : "teacher",
        "id": 4
    }
}
var course ={
    "course4" : {
        "name" : "mohit",
        "description" : "password4",
        "id": 4
    }
}
var coursegrade={
    "coursegrade4" : {
        "course" : "mobile",
        "name" : "mahesh",
        "grade" : 2,
        "id": 1
    }
}

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  response.render('pages/index');
});

// students
app.get('/StudentList', function (req, res) {
        fs.readFile( __dirname + "/" + "students.json", 'utf8', function (err, data) {
                    console.log( data );
                    res.end( data );
                    });
        })
app.get('/addStudent', function (req, res) {
        // First read existing users.
        fs.readFile( __dirname + "/" + "students.json", 'utf8', function (err, data) {
                    data = JSON.parse( data );
                    data["user4"] = user["user4"];
                    console.log( data );
                    res.end( JSON.stringify(data));
                    });
        })
app.get('/StudentDetail', function (req, res) {
        // First read existing users.
        fs.readFile( __dirname + "/" + "students.json", 'utf8', function (err, data) {
                    users = JSON.parse( data );
                    var user = users["user" + req.params.id]
                    console.log( user );
                    res.end( JSON.stringify(user));
                    });
        })
app.get('/DeleteUser', function (req, res) {
        
        // First read existing users.
        fs.readFile( __dirname + "/" + "students.json", 'utf8', function (err, data) {
                    data = JSON.parse( data );
                    delete data["user" + 2];
                    
                    console.log( data );
                    res.end( JSON.stringify(data));
                    });
        
        })

//course
app.get('/CourseList', function (req, res) {
        fs.readFile( __dirname + "/" + "course.json", 'utf8', function (err, data) {
                    console.log( data );
                    res.end( data );
                    });
        })
app.get('/addCourse', function (req, res) {

        fs.readFile( __dirname + "/" + "course.json", 'utf8', function (err, data) {
                    data = JSON.parse( data );
                    data["course4"] = course["course4"];
                    console.log( data );
                    res.end( JSON.stringify(data));
                    });
        })
app.get('/CourseDetail', function (req, res) {
        fs.readFile( __dirname + "/" + "course.json", 'utf8', function (err, data) {
                    courses = JSON.parse( data );
                    var course = courses["course" + req.params.id]
                    console.log( user );
                    res.end( JSON.stringify(course));
                    });
        })
app.get('/DeleteCourse', function (req, res) {
        
        fs.readFile( __dirname + "/" + "course.json", 'utf8', function (err, data) {
                    data = JSON.parse( data );
                    delete data["course" + 2];
                    
                    console.log( data );
                    res.end( JSON.stringify(data));
                    });
        
        })
//coursegrade
app.get('/CourseGradeList', function (req, res) {
        fs.readFile( __dirname + "/" + "coursegrade.json", 'utf8', function (err, data) {
                    console.log( data );
                    res.end( data );
                    });
        })
app.get('/addCourseGrade', function (req, res) {
        
        fs.readFile( __dirname + "/" + "coursegrade.json", 'utf8', function (err, data) {
                    data = JSON.parse( data );
                    data["coursegrade4"] = user["coursegrade4"];
                    console.log( data );
                    res.end( JSON.stringify(data));
                    });
        })
app.get('/GradeDetail', function (req, res) {
        fs.readFile( __dirname + "/" + "coursegrade.json", 'utf8', function (err, data) {
                    coursegrades = JSON.parse( data );
                    var coursegrade = coursegrade["course" + req.params.id]
                    console.log(coursegrade);
                    res.end( JSON.stringify(coursegrade));
                    });
        })
app.get('/DeleteCourseGrade', function (req, res) {
        
        fs.readFile( __dirname + "/" + "coursegrade.json", 'utf8', function (err, data) {
                    data = JSON.parse( data );
                    delete data["coursegrade" + 2];
                    
                    console.log( data );
                    res.end( JSON.stringify(data));
                    });
        
        })


app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});


