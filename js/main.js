let flag=true


$("div.wrapper>div.menu>div.icon").on({
    click:function(){
        if(flag){
            $("div.wrapper>div.menu>div.icon>div:nth-of-type(1)").css({
                transform:"rotate(45deg)",
                top:"calc(50% - 1px)",
                transition:"350ms"
            })
    
            $("div.wrapper>div.menu>div.icon>div:nth-of-type(2)").css({
                transform:"translateX(40px)",
                transition:"700ms",
                opacity:"0"
            })
    
            $("div.wrapper>div.menu>div.icon>div:nth-of-type(3)").css({
                transform:"rotate(-45deg)",
                top:"calc(50% - 1px)",
                transition:"350ms"
            })

            $("div.wrapper>div.menu>div.sub-menu").css({
                left:"0",
                transition:"400ms"
            })
            flag=false
        }else{
            $("div.wrapper>div.menu>div.icon>div:nth-of-type(1)").css({
                transform:"rotate(0)",
                top:"12px",
                transition:"350ms"
            })
    
            $("div.wrapper>div.menu>div.icon>div:nth-of-type(2)").css({
                transform:"translateX(0)",
                transition:"350ms",
                opacity:"1"
            })
    
            $("div.wrapper>div.menu>div.icon>div:nth-of-type(3)").css({
                transform:"rotate(0)",
                top:"32px",
                transition:"350ms"
            })

            $("div.wrapper>div.menu>div.sub-menu").css({
                left:"-300px",
                transition:"400ms",
            })
            flag=true
        }
    }
})
let div=document.querySelector("div.wrapper>div.menu>div.hover")
div.addEventListener("mousemove",function(e){
    e.target.parentElement.style.background=`rgb(${e.x-e.target.offsetLeft},223,${e.y-e.target.offsetTop})`   
})
div.addEventListener("mouseleave",function(e){
    e.target.parentElement.style.background=`rgb(151,232,219)`
    e.target.style.background=`rgb(151,232,219)` 
})
let offset01=$("div.wrapper>div.captcha").offset().top - 48

let offset02=$("div.wrapper>div.average").offset().top - 48

let offset03=$("div.wrapper>div.age").offset().top - 48

console.log(offset03);


$("#li01").on({
    click:function(){
        $("html,body").animate({
            scrollTop:offset01
        },500,"linear")
    }
})


$("#li02").on({
    click:function(){
        $("html,body").animate({
            scrollTop:offset02
        },500,"linear")
    }
})

$("#li03").on({
    click:function(){
        $("html,body").animate({
            scrollTop:offset03
        },500,"linear")
    }
})
////
let captch="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
let clickMe=document.querySelector("button.click")
let divcaptcha=document.querySelector("div.capt")
let capt=document.querySelector("input#cap")
let captbtn=document.querySelector("button.captbtn")

function generateData(){ 
    generate=captch.charAt(Math.random()*62)+captch.charAt(Math.random()*62)+captch.charAt(Math.random()*62)+captch.charAt(Math.random()*62)+captch.charAt(Math.random()*62)+captch.charAt(Math.random()*62)

    divcaptcha.innerText=generate
}

clickMe.addEventListener("click",function(){
    generateData()
})
captbtn.addEventListener("click",function(){
    if(capt.value===generate){
        $("div.wrapper>div.captcha>div.ok").fadeIn()
    }else{
        $("div.wrapper>div.captcha>div.notok").fadeIn()
        capt.value=""
        generateData()
    }
})
$("div.wrapper>div.captcha>div.notok>div>button").on({
    click:function(){
        $("div.wrapper>div.captcha>div.notok").fadeOut()
    }    
})
$("div.wrapper>div.captcha>div.ok>div.icon>i").on({
    click:function(){
        $("div.wrapper>div.captcha>div.ok").fadeOut()
    }    
})
$("div.wrapper>div.average>div.main>button.click").on({
    click:function(){
        $("div.wrapper>div.average>div.main>div.number").fadeIn(500)
        $("div.wrapper>div.average>div.main>div.text").fadeOut(300)
    }
})
$("div.wrapper>div.average>div.main>div.number>button.send1").on({
    click:function(){
        $("div.wrapper>div.average>div.main>div.weight").fadeIn()
    }
})
$("div.wrapper>div.average>div.main>div.weight>button.send2").on({
    click:function(){
        $("div.wrapper>div.average>div.main>div.grade").fadeIn()
    }
})
$("div.wrapper>div.average>div.main>div.grade>button.send3").on({
    click:function(){
        $("div.wrapper>div.average>div.main>div.final-average").fadeIn()
    }
})
// AGE /
let firstName = document.querySelector("div.wrapper>div.age>div.left>div>input.first");
let last = document.querySelector("div.wrapper>div.age>div.left>div>input.last");
let degree = document.querySelector("div.wrapper>div.age>div.left>div>input.degree");
let gender = document.querySelector("div.gender");
let genderValue;
let phone = document.querySelector("div.wrapper>div.age>div.left>div>input.phone");
let month = document.querySelector("div.wrapper>div.age>div.left>div>input.month");
let year = document.querySelector("div.wrapper>div.age>div.left>div>input.year");
let email = document.querySelector("div.wrapper>div.age>div.left>div>input.email");
let city = document.querySelector("div.wrapper>div.age>div.left>div>input.city");
let submit = document.querySelector("div.wrapper>div.age>button");
let h1 = document.querySelectorAll("div.wrapper>div.age>div.right>h1");

let month2;
let year2;
submit.addEventListener("click", function () {
  h1.forEach((elem) => {
    elem.style.backgroundColor = "rgb(76, 76, 170)";
    elem.style.color = "whitesmoke";
    elem.style.padding = "0 5px";
  });
  if (year.value == 1379) {
    year2 = 2000;
  } else if (year.value == 1380) {
    year2 = 2001;
  } else if (year.value == 1381) {
    year2 = 2002;
  } else if (year.value == 1382) {
    year2 = 2003;
  } else if (year.value == 1383) {
    year2 = 2004;
  } else if (year.value == 1384) {
    year2 = 2005;
  } else if (year.value == 1385) {
    year2 = 2006;
  } else if (year.value == 1386) {
    year2 = 2007;
  } else if (year.value == 1387) {
    year2 = 2008;
  } else if (year.value == 1388) {
    year2 = 2009;
  } else if (year.value == 1389) {
    year2 = 2010;
  } else if (year.value == 1390) {
    year2 = 2011;
  } else if (year.value == 1391) {
    year2 = 2012;
  } else if (year.value == 1392) {
    year2 = 2013;
  } else if (year.value == 1393) {
    year2 = 19;
  } else if (year.value == 1394) {
    year2 = 2014;
  } else if (year.value == 1395) {
    year2 = 2015;
  } else if (year.value == 1396) {
    year2 = 2016;
  } else if (year.value == 1397) {
    year2 = 2017;
  } else if (year.value == 1398) {
    year2 = 2018;
  } else if (year.value == 1399) {
    year2 = 2019
  } else {
    alert("Choose Date within 1379-1399 in SHAMSI");
  }
  
  if (month.value == 1) {
    month2 = "MARCH";
  } else if (month.value == 2) {
    month2 = "APRIL";
  } else if (month.value == 3) {
    month2 = "MAY";
  } else if (month.value == 4) {
    month2 = "JUNE";
  } else if (month.value == 5) {
    month2 = "JULY";
  } else if (month.value == 6) {
    month2 = "AUGUST";
  } else if (month.value == 7) {
    month2 = "SEPTEMBER";
  } else if (month.value == 8) {
    month2 = "OCTOBER";
  } else if (month.value == 9) {
    month2 = "NOVEMBER";
  } else if (month.value == 10) {
    month2 = "DECEMBER";
  } else if (month.value == 11) {
    month2 = "JANUARY";
  } else if (month.value == 12) {
    month2 = "FEBRUARY";
  } else {
    alert("Choose Month within 1-12 in SHAMSI");
  }
  if (document.querySelector("#male").checked) {
    genderValue=document.querySelector("#male").value
  }else if (document.querySelector("#female").checked) {
    genderValue=document.querySelector("#female").value
  }else {
    alert("Select a gender");
  }
  document.querySelector("h1.fullname").innerHTML = firstName.value+last.value;
  document.querySelector("h1.degree").innerHTML = degree.value;
  document.querySelector("h1.gender").innerHTML = genderValue;
  document.querySelector("h1.phone").innerHTML = phone.value;
  document.querySelector("h1.email").innerHTML = email.value;
  document.querySelector("h1.city").innerHTML = city.value;
  document.querySelector("h1.year").innerHTML = `Years: ${year2}`;
  document.querySelector("h1.month").innerHTML = `Months: ${month2}`;
});
