var employees = [];
function Employee(name,jobtitle,salary,status){
    this.name= name;
    this.jobtitle= jobtitle;
    this.salary= salary;
    this.status= status || "Full Time";
    this.printEmployeeForm=function(){
        console.log("Name="+this.name+"Job="+this.jobtitle+"Salary="+this.salary+"Status="+this.status);
    }
}
employees.push(new Employee("akram","it officer",1111));
employees.push(new Employee("hiba","teacher",1231,"part Time"));
employees.push(new Employee("ahmad","it officer",1271));
for (var i=0;i<employees.length;i++){
    employees[i].printEmployeeForm();
}
