import mongoose, { Schema,model } from 'mongoose';

const ExperienceSchema = new Schema({
    title: String,
    company: String,
    address: String,
    startDate: String,
    endDate: String,
    summary: String,
});

const EducationSchema = new Schema({
    name: String,
    address: String,
    year: String,
    qualification: String,
});

const SkillSchema = new Schema({
    name: String,
    level: String,
});



const ResumeSchema = new Schema({
    
    userEmail: {
        type: String,
        required: true,
    },
    title:String,
    name: String,
    job: String,
    address: String,
    themeColor: String,
    summary: String,
    experience:[
        ExperienceSchema
    ],
    education:[
        EducationSchema
    ],
    skills:[
        SkillSchema
    ],

},{timestamps: true});

const Resume = mongoose.models.Resume || model('Resume', ResumeSchema);

export default Resume;