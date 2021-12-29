<script>
class Person{
constructor(firstname,lastname){
this.firstname=firstname;
this.lastname=lastname;
}
getName(){
 return this.firstname+' '+this.lastname;
}
}
class Games extends Person{
 getWord(){
 return 'Welcome'
 }
}
let bew=new Person('Buratsakorn', 'Boonma');
let ta=new Games('Theadtawan','Boonma');
document.write(bew.getName());
document.write(ta.getName());
</script>
