console.log("My_Pug_UI");
const express = require("express");
const app = express();
const port = 9999;
const fs = require('fs');
app.use(express.urlencoded({extended:false}));
app.use(express.json());

app.set("view engine", "pug");
app.set("views", "./views");

app.get("/", (req, res) => {
  res.render("home");
});
app.get("/home", (req, res) => {
  res.render("home");
});
app.get("/aboutus", (req, res) => {
  res.render("aboutus");
});
app.get("/services", (req, res) => {
  res.render("services");
});
app.get("/gallery", (req, res) => {
  res.render("gallery");
});
app.get("/contactdata", (req, res) => {
  res.render("contactdata");
});

app.get("/contact", (req, res) => {
  res.render("form");
});app.post("/postdata",(req,res)=>{
  let name= req.body.name;
  let email = req.body.email;
  let subject= req.body.subject;
  let comments= req.body.comments
  // const data = {name:req.body.name,email:req.body.email , subject:req.body.subject,comments:comments}
  // fs.appendFile('contact.txt', `${JSON.stringify(data)}\n` , function (err) {
  //   if (err) throw err;
  //   console.log('Saved!');
  //   res.send(`Form Submitted Successfully`)
  
  // });
  
  let data=`
<tr>
  <td>${name}</td>
  <td>${email}</td>
  <td>${subject}</td>
  <td>${comments}</td>
<tr>
      `
      if(fs.existsSync(`./user`)){
          fs.appendFileSync(`./user/detail.pug`,data)
          res.render("form")
      }
      else{
          fs.mkdirSync(`./user/`);
          fs.writeFileSync(`./user/detail.pug`,`${data.toString()}`);
          res.send("CREATE FILE OF CONTACT")
      }
})
// app.post("/postdata",(req,res)=>{
//   let name= req.body.name;
//   let email = req.body.email;
//   let subject= req.body.subject;
//   let comments= req.body.comments
//   const data = {name:req.body.name,email:req.body.email , subject:req.body.subject,comments:comments}
//   fs.appendFile('formdetails.txt', `${JSON.stringify(data)}\n` , function (err) {
//     if (err) throw err;
//     console.log('Saved!');
//     res.send(`Form Submitted Successfully`)
  
//   });
// })






app.listen(port, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`server in running on port ${port}`);
  }
});
