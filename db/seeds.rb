# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

d1 = Doctor.create(name:"Dr Garfield")
d2 = Doctor.create(name:"Dr Oide")
d3 = Doctor.create(name:"Dr Hyde")

p1 = Patient.create(name:"Michael")
p2 = Patient.create(name:"Syndee")
p3 = Patient.create(name:"Jennifer")

Appointment.create(date:'May 1', doctor_id:d2.id, patient_id:p1.id)
Appointment.create(date:'May 3', doctor_id:d3.id, patient_id:p2.id)
Appointment.create(date:'May 21', doctor_id:d1.id, patient_id:p3.id)
