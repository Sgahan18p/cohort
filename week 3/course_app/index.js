const express = require('express')
const app = express()
const fs=require('fs');
const port = 3000

app.use(express.json());
//app.use(cors());

var cID=1;
let admins=[];
let users=[];
let courses=[];

function adminAuthentication(req,res, next){
  const username= req.headers.username;
  const password= req.headers.password;
  console.log("username ",username," is authenticated ");
  const admin=admins.find(a=> a.username === username && a.password === password)
  if(admin){
    next()
  }else{
    res.status(403).json({message : "admin authentication failed !!!"});
  }
}

function userAuthentication(req,res, next){
  const {username,password}=req.headers;
  console.log("username ",username," is authenticated ");
  const user=users.find(a=> a.username === username && a.password === password)
  if(user){
    req.user=user;
    next()
  }else{
    res.status(403).json({message : "user authentication failed !!!"});
  }
}

function adminSignup(req,res){
  const user = req.body
  const userExist = users.find(u => u.username === user.username)
  if(userExist) {
    return res.status(403).json({message: "User already exists!"})
  }else {
    user["purchasedCourses"] = []
    users.push(user)
    res.status(200).json({message: "User created successfully."})
  }
}

function adminLogin(req,res){
  res.json({message:"logged in successfully "})
}
function adminCourses(req,res){
  const course =req.body;
  course.id =cID++;
  res.json({message:"course created successfully ", courseId:course.id});
};

function adminCoursesID(req, res ){
const courseId=parseInt(req.params.courseId);
const course=courses.find(c=> c.id === courseId)
if(course){
  Object.assign(course, req.body);
  res.json({message :"course updated successfully "})
}else{
  res.status(404).json({message : " course not found "})
}
}

function userSignup(req,res){
  const user=req.body;
  const existingUser=users.find(a => a.username === user.username);
  if(existingUser){
    res.status(403).json({message : "user already exists "});
  }else{
    admins.push(users);
    res.json({message : 'user created successsfully '});
  }
}
function userLogin(req,res){
  res.json({message:"logged in successfully "})
}
function userCourses(req,res){
  let filteredCourses = [];
  for(let i=0; i<courses.length; i++){
    if(courses[i].published){
      filteredCourses.push(courses[i]);
    }
  } 
  res.json({courses: filteredCourses});
}
function userCoursesID(req,res){
  const courseId=Number(req.params.courseId);
  const course=courses.find(c=> c.id === courseId && c.published);
  if(course){
    const user=req.user;
    user.purchasedCourses.push(course);
    res.json({message:"course purchased successfully "});
  }else{
    res.status(404).json({message:"course not found "});
  }
}
function userPurchasedCourses(req,res){
  
}

//admin
app.post('/admin/signup',adminSignup )
app.post('/admin/login', adminAuthentication ,adminLogin )
app.post('/admin/courses', adminAuthentication ,adminCourses )
app.put('/admin/courses/:courseId', adminAuthentication, adminCoursesID )
app.get('/admin/courses',adminAuthentication,(req,res)=>{
  res.json({course : courses});
} )

//users
app.post('/users/signup',userSignup )
app.post('/users/login',userAuthentication,userLogin )
app.get('/users/courses',userAuthentication,userCourses )
app.post('/users/courses/:courseId',userAuthentication,userCoursesID )
app.get('/users/purchedCourses',userAuthentication,userPurchasedCourses )


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})