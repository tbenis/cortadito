


let add1, add2, add3, add4, add5, add6, pn1, pn2, pn3, pn4, pn5, pn6, email1, email2, email3, email4, email5, email6, loginplz ;

if (localStorage.getItem("user")) {
  add1 = "2991 Arbutus St"
  add2 = "2 Tree Drive"
  add3 = "1 Avenue Ave"
  add4 = "840 NW 155th Ln #207"
  add5 = "8 NW 5th Ln #7"
  add6 = "777 Luck St"
  pn1 = "(305) 267-0511"
  pn2 = "(305) 754-1111"
  pn3 = "(305) 466-8888"
  pn4 = "(305) 466-6600"
  pn5 = "(305) 466-1010"
  pn6 = "(305) 466-7777"
  email1 = "joe1@gmail.com"
  email2 = "asfdkhf@gmail.com"
  email3 = "kyoso@gmail.com"
  email4 = "mr305@aol.com"
  email5 = "dale@cortadito.com"
  email6 = "pitbull@neopets.com"
    
  } else {
    add1 = ""
    add2 = ""
    add3 = ""
    add4 = ""
    add5 = ""
    add6 = ""
    pn1 = ""
    pn2 = ""
    pn3 = ""
    pn4 = ""
    pn5 = ""
    pn6 = ""
    email1 = ""
    email2 = ""
    email3 = ""
    email4 = ""
    email5 = ""
    email6 = ""
    loginplz = "please login to view full contact details"
  }

  export {add1, add2, add3, add4, add5, add6, pn1, pn2, pn3, pn4, pn5, pn6, email1, email2, email3, email4, email5, email6, loginplz}