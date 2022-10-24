function isPalindrome(s){
    a= s.replace(" ","")
    split = a.split("");
    split.reverse();
    string = split.join("")
    s == string ? console.log(true) : console.log(false) 
}

isPalindrome('k ayak ')