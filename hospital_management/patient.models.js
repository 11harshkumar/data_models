import mongoose from 'mongoose'

const patientSchema = new mongoose.Schema({
    patientName: {
        type: String,
        requred : true,
    },
    diagonsedWith: {
        type: String,
        requirerd :true,
    },
    address: {
        type: String,
        required : true,
    },
    age: {
        type: Number,
        required: true,
    },
    blood_group: {
        type: String,
        required : true,
    },
    gender: {
        type: String,
        enum: ["Male", "Female", "Others"],
        required : true,
    },
    admittedIn: {
        type: mongoose.Schema.Types.ObjectId,
        ref : "Hospital",
    }
}, { timestamps: true })

export const Patient = mongoose.model("Patient",patientSchema)