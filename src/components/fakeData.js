


let add1, add2, add3, add4, add5, add6, pn1, pn2, pn3, pn4, pn5, pn6, email1, email2, email3, email4, email5, email6 ;

if (localStorage.getItem("user")) {
    const currName = localStorage.getItem("user")
    add1 = "2991 Arbutus Drive"
    add2 = "15224 SW 111th Ct "
    add3 = "10505 NW 36th St ,33178"
    add4 = "2377 Collins Ave, "
    add5 = "3020 NE 190th St Miami, "
    add6 = "840 NW 155th Ln #207 Miami, "
    pn1 = "(305) 267-0516"
    pn2 = "(305) 754-2679"
    pn3 = "(305) 642-2583"
    pn4 = "(305) 466-6609"
    pn5 = "(305) 759-7737"
    pn6 = "(305) 643-3226"
    email1 = "maestro274@gmailni.com"
    email2 = "beho4ek@otezuot.com"
    email3 = "kyosonim@aevtpet.com"
    email4 = "blackers@netveplay.com"
    email5 = "chryanvii@jos-s.com"
    email6 = "targeta3@lompaochi.com"
    
  } else {
    add1 = "..."
    add2 = "..."
    add3 = "..."
    add4 = "..."
    add5 = "..."
    add6 = "..."
    pn1 = "..."
    pn2 = "..."
    pn3 = "..."
    pn4 = "..."
    pn5 = "..."
    pn6 = "..."
    email1 = "..."
    email2 = "..."
    email3 = "..."
    email4 = "..."
    email5 = "..."
    email6 = "..."
  }

  export {add1, add2, add3, add4, add5, add6, pn1, pn2, pn3, pn4, pn5, pn6, email1, email2, email3, email4, email5, email6}