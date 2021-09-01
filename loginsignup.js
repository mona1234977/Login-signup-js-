var fs= require('fs');
const readline=require('readline-sync');
var f=fs.openSync("details.txt")
user = readline.question("DO YOU WANT TO LOGIN OR SIGN UP :")
dict={}
if (user=="signin"){
    username= readline.question("ENTER THE USERNAME :")
    console.log()
    password = readline.question("ENTER THE PASSWORD :")
        if (/^[a-zA-Z0-9!@#$%^&*]{6,16}$/){
            password1= readline.question("CONFIRMED PASSWORD :")
            if (password==password1){
                console.log("confirmed password") 
            }else{
                console.log("incorrect password")
            }
        }
    firstname =  readline.question("ENTER YOUR FIRST NAME:")
    lastname = readline.question("ENTER THE LAST NAME:")
    dob = readline.question("ENTER YOUR DATE OF BIRTH")
    gender = readline.question("ENTER YOUR GENDER:")
    console.log("YOU HAVE SUCCESFULLY SIGN UP")
    dict = {"USERNAME":username,"PASSWORD":password,"FIRST NAME":firstname,"LAST NAME":lastname,"DATE OF BIRTH":dob,"GENDER":gender}
    let myJsonstr = JSON.stringify(dict,null,4)
    fs.writeFileSync(username+".userdetails.json",myJsonstr)
    console.log(myJsonstr)
}else if (user=="login"){
    var username = readline.question("ENTER YOUR USER NAME:")
    var password = readline.question("ENTER YOUR PASSWORD")
    var a=fs.readFileSync("mona.userdetails.json");
    var s=JSON.parse(a);
    if (username==s["USERNAME"]){
        if (password==s["PASSWORD"]){
            console.log("HERE ARE YOUR DETAILS")
            console.log("FIRST NAME:",s["FIRST NAME"])
            console.log("LAST NAME:",s["LAST NAME"])
            console.log("DATE OF BIRTH:",s["DATE OF BIRTH"])
            console.log("GENDER:",s["GENDER"])
            }
        else{
            console.log("password is incorrect")
            }
    }else{
        console.log("username is incorrect")
    }
    
}






