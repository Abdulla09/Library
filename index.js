const myLibrary = [];

let container = document.querySelector(".container")

function Book(author, title,pageNumber,read) {

  this.author = author;
  this.title = title;
  this.pageNumber = pageNumber;
  this.read = read

  // addBookToHtml(bookinfo)

  // for(let i=0;i<myLibrary.length;i++){

  //   let div1 = document.createElement("div")
  
  //   for(let j=0;j<4;j++){

  //     let p1 = document.createElement("p")

  //     if(j==3){
  //       p1.innerHTML = `<button onclick=changestatus()>change status</button>${myLibrary[i][j]}`
  //     } else{
  //       p1.innerHTML = `${myLibrary[i][j]}`
  //     }
  
  //     div1.append(p1)
  //     console.log(div1)
  //   }
  
  //   container.appendChild(div1)
  
  // }

}

function addBookToLibrary() {
  const formdata = new FormData(document.querySelector("form"))
  let formObject = Object.fromEntries(formdata)

  if(document.getElementById("readStatus").checked){

  }else{
    formObject.readStatus = "no"
  }

  myLibrary.push(new Book(formObject.author, formObject.title, formObject.numpages, formObject.readStatus))

  addBookToHtml()

}

Book.prototype.readtoggle = function(){
  if(this.read == "yes"){
    this.read = "no"
  } else{
    this.read = "yes"
  }

  console.log(this.read)
}

function addBookToHtml(){

  container.innerHTML=""

  for(let i=0;i<myLibrary.length;i++){

    let div1 = document.createElement("div")
    let author = document.createElement("p")
    let title = document.createElement("p")
    let pageNumber = document.createElement("p")
    let readstatus = document.createElement("p")
    let remove = document.createElement("button")

    
    title.innerHTML = `${myLibrary[i].author}`
    author.innerHTML = `${myLibrary[i].title}`
    pageNumber.innerHTML = `${myLibrary[i].pageNumber}`
    readstatus.innerHTML = `<button>${myLibrary[i].read}</button>`

    remove.innerHTML = `remove`
    remove.setAttribute("data-value",i)

    readstatus.onclick = function(){
      myLibrary[i].readtoggle()

      readstatus.innerHTML = `<button>${myLibrary[i].read}</button>`
    }

    remove.onclick = function(){
      let val = remove.getAttribute("data-value")
      myLibrary.splice(val,1)
      addBookToHtml()
    }


    div1.append(title)
    div1.append(author)
    div1.append(pageNumber)
    div1.append(readstatus)
    div1.append(remove)
  
    container.appendChild(div1)
  
  }

}
