/**
 * Variable naming rules : Same as java
 * Primitives Data Types
 * numbers : 123,120.50
 * String : 'apple'
 * Boolean : true, false
 * Undefined : variable does not have a value yet
 * Null :
 */
/**
 * There are 3 different types of variables
 * var: variable abbreviation
 * * If there is, globally-scope is a variable definition method.
 * * You can change its value later and define the same variable again.
 *
 * let: so Let is equal to ..
 * * let is a block-scope variable definition method.
 * * The structures we call blocks are the place between the curly brackets.
 * * The value of variables defined with let can be changed later
 * * but you cannot define the same variable again.
 *
 * const: short for constant, which means constant
 * as soon as the value of the variable is constant, like the number Pi
 */

/** 
 * 3 farklı variable tipi vardır
 *  var: En. variable kısaltılmış hali
 *          * var ise globally-scope bir değişken tanımlama yöntemidir. 
 *          * Değerini daha sonra değiştirebilir ve tekrar aynı değişkeni tanımlayabilirsiniz.
 * 
 *  let: En. let - yani Let is equal to .. yani değer ... eşit olsun
 *          * let, block-scope bir değişken tanımlama yöntemidir.
 *          * block dediğimiz yapılar ise küme parantezlerinin arasında kalan yerdir.
 *          * let ile tanımlanan değişkenlerin değeri daha sonra değiştirilebilir 
 *          * fakat aynı değişkeni tekrar tanımlayamazsınız.
 * 
 *  const: En. sabit anlamına gelen constant kısaltılmışı
 *          değişkenin değeri sabit olur değimez Pi sayısı gibi
 * 
 */
var name = 'Emre'
var age = 39;
var name_object = {firstName:"Fatih", lastName:"Aycan"}
var truth = true
var skills = ['HTML','CSS',"JS"]
var a = null;

//object
var student = {
    firstName:"Maximilian",
    lastName:"Salai",
    age:30,
    heigth:184,

    fullName:function(){
        return this.firstName + " " + this.lastName
    }
}

const ageValue = student.age
//to run in console
console.log(ageValue)
console.log(student.fullName())

/** to run console
 * first save your code or choose auto save from file menu
 * 1- The class in which this directory is located is accessed from the terminal
 *  C:\Users\Fatih\Desktop\ETS-B5Cypress>cd (file path)
 *  C:\Users\Fatih\Desktop\ETS-B5Cypress\cypress\e2e\javascript_basic> 
 * 2-Type the full filename with node
 *  C:\Users\Fatih\Desktop\ETS-B5Cypress\cypress\e2e\javascript_basic> node datatypes-objects.js
 */