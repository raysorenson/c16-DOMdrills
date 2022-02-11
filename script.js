document.addEventListener("DOMContentLoaded", function () { //executes after html is loaded
    let divvy = document.createElement("div");                //div created and named
    divvy.className = "header-container";                     //div given a class name
    document.body.appendChild(divvy);                         //div added to html
  
    let header1 = document.createElement("h1");              //header created and named
    let text = document.createTextNode("This is an H1");     //header text created
    header1.className = "h1";                                //header give a class name
    header1.appendChild(text);                               //text added to header
    divvy.appendChild(header1);                              //header added to div
  
    let header2 = document.createElement("h2");
    let text2 = document.createTextNode("This is an H2");
    header2.className = "h2";
    header2.appendChild(text2);
    divvy.appendChild(header2);
  
    let header3 = document.createElement("h3");
    let text3 = document.createTextNode("This is an H3");
    header3.className = "h3";
    header3.appendChild(text3);
    divvy.appendChild(header3);
  
    let header4 = document.createElement("h4");
    let text4 = document.createTextNode("This is an H4");
    header4.className = "h4";
    header4.appendChild(text4);
    divvy.appendChild(header4);
  
    let header5 = document.createElement("h5");
    let text5 = document.createTextNode("This is an H5");
    header5.className = "h5";
    header5.appendChild(text5);
    divvy.appendChild(header5);
  
    let header6 = document.createElement("h6");
    let text6 = document.createTextNode("This is an H6");
    header6.className = "h6";
    header6.appendChild(text6);
    divvy.appendChild(header6);
  
    let headers = document.querySelectorAll(".header-container > *"); //array of headers created using css child combinator
  
    for (i = 0; i < headers.length; i++) {                            //for loop count up to 6
      headers[i].addEventListener("dblclick", chooseColor);           //event listener executes chooseColor funtion
  
      function chooseColor() {
        let arr = [                                                   //array of 8 colors
          "#00ffff",
          "#a52a2a",
          "#0000ff",
          "#8a2be2",
          "#6495ed",
          "#7fff00",
          "#ffc0cb",
          "#ff0000",
        ];
        event.target.style.color = arr[Math.floor(Math.random() * arr.length)]; 
      }                  //randomly chooses 1 of 8 colors when target is doubleclicked
    }
  
  let listButton = document.querySelector('.butto');   //names an html element retrieved by it's css class
  let listCount = 0;                                   //counter to increment number in text
  listButton.addEventListener('click', newLi);         //click listener calling newLi()
    
  function newLi() {                                   // newLi() declared
    let li = document.createElement('li');               //creates html element                                       
    listCount++  
    li.textContent = 'This is list item' + listCount;                                     
        
    li.addEventListener("click", chooseColor);          //click listener calls chooseColor()
    li.addEventListener("dblclick", function () {
        this.remove();
    });
    document.body.appendChild(li);                    //appends <li> to <body>
  }
  
   
  });