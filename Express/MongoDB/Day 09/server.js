const mongoose = require('mongoose')
const express = require('express')
const app = express()
const cors = require('cors')
app.use(cors())
// console.log(mongoose)

mongoose.connect("mongodb://localhost:27017/myDataBase").then(res=>console.log('MongoDB is connected'))

const collegeStudentSchema = new mongoose.Schema({
name:String,
age:Number,
major:String
})

const collegeStudent = mongoose.model('collegeStudentDetails',collegeStudentSchema)

const newCollegeStudent = new collegeStudent({
    name:'Hema',
    age:15,
    major:'Mongoose'
})
// newCollegeStudent.save()

// collegeStudent.updateOne({name:'Hema'},{age:25}).then(res=>console.log(res))
app.use(express.json())

app.get('/college-student',async(req,res)=>{
  const  student =await collegeStudent.find()
    res.json(student)
})

app.post('/college-student/post',(req,res)=>{
        console.log(req.body)
      const newStudent =   new collegeStudent(req.body)
      newStudent.save()
        res.json(newStudent)
})
const PORT = 3001;
app.listen(PORT,()=>{
    console.log(`Server is starting on http://localhost:${PORT}`)
})