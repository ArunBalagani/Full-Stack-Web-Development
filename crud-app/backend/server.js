const mongoose = require('mongoose')
const express = require('express')
const app = express()

const cors = require('cors')
app.use(cors())

const PORT = 3001;
app.listen(PORT, ()=>{
    console.log(`Server is Starting: http://localhost:${PORT}`)
})
app.use(express.json())
app.get('/college-student',async(req,res)=>{
    const student = await collegeStudent.find()   
    res.json(student)
})
app.post('/college-student/post', (req,res)=>{
    console.log(req.body)
    const newStudent = new collegeStudent(req.body)
    res.json(newStudent)
    newStudent.save()
})

app.put('/college-student/update/:id', async (req, res) => {
   
        const { id } = req.params;
        const updatedStudent = await collegeStudent.findByIdAndUpdate(id, req.body);
        res.json(updatedStudent);
        updatedStudent.save()
   
});

mongoose.connect('mongodb://localhost:27017/crud').then(res=>console.log("Mongo DB is Connected"))

const collegeStudentSchema = mongoose.Schema({
    name: String,
    age: Number,
    major: String
})

const collegeStudent = mongoose.model('collegeStudentDetails', collegeStudentSchema)

const newCollegeStudent = new collegeStudent({
    name: 'Arun',
    age: 27,
    major: 'Computer Science'
})


 newCollegeStudent.save().then(res=>console.log('student created successfully'))

collegeStudent.updateOne({name: 'Arun'}, {age: 25}).then(res=>console.log('student updated successfully'))

