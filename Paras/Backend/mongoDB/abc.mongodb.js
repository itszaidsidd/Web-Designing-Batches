use('Paras')
// db.createCollection('abc')
// db.Courses.insertOne({
//     "name":"python",
//     "pirce":5000
// })
// db.Courses.insertMany(
//     [
//   {"name": "python", "pirce": 5000},
//   {"name": "javascript", "pirce": 4500},
//   {"name": "java", "pirce": 4800},
//   {"name": "cplusplus", "pirce": 4200},
//   {"name": "ruby", "pirce": 3900},
//   {"name": "golang", "pirce": 5500},
//   {"name": "rust", "pirce": 6000},
//   {"name": "typescript", "pirce": 4700},
//   {"name": "swift", "pirce": 5200},
//   {"name": "kotlin", "pirce": 5100}
// ]
// )
// db.Courses.find({"name":"java"})
// db.Courses.find().limit(3)
// db.Courses.findOne({"name":"java"})
// db.Courses.find().pretty()
// db.Courses.updateOne({"price":10000},{$set:{"name":"java"}})
// db.Courses.find({"name":"java"})
// db.Courses.updateMany({"price":10000},{$set:{"name":"java"}})
// db.Courses.deleteOne({"name":"mongoDB"})
db.Courses.find({"name":"mongoDB"})