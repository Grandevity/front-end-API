/**
 * Application of Principles of Programming
 * Assignment Template 2021 - Javascript
 * @author Tim Orman
 */
//calculator event handlers - one for each button
//Javascript event handlers
document.getElementById("btnAdd").addEventListener("click", addNumbers)
document.getElementById("btnSubtract").addEventListener("click", subtractNumbers)
document.getElementById("btnMultiply").addEventListener("click", multiplyNumbers)
document.getElementById("btnDivide").addEventListener("click", divideNumbers)
//API event handlers
document.getElementById("btnAddAPI").addEventListener("click", addNumbersAPI)
document.getElementById("btnSubtractAPI").addEventListener("click", subtractNumbersAPI)
document.getElementById("btnMultiplyAPI").addEventListener("click", multiplyNumbersAPI)
document.getElementById("btnDivideAPI").addEventListener("click", divideNumbersAPI)
//journal event handlers - one for each button
document.getElementById("btnDeleteEntry").addEventListener("click", deleteEntry)
document.getElementById("btnAddEntry").addEventListener("click", addEntry)
document.getElementById("btnUploadJournal").addEventListener("click", uploadJournal)
//thoughts event handlers
document.getElementById("btnDeleteThought").addEventListener("click", deleteThought)
document.getElementById("btnAddThought").addEventListener("click", addThought)
document.getElementById("btnUploadThoughts").addEventListener('click', uploadThoughts)
/**
 * callAPI()
 *
 * This function uses the built-in (to the browser) XMLHttpRequest object to request data from a server
 * The responseText property returns the response from the server as a string.
 *
 * You can use this function to complete calls to the api from the calculator functions.
 * Examine the url and elResponse parameters.
 * What types of values should they contain when passing them as arguments and calling this function?
 * @param url
 * @param elResponse
 */
function callAPI(url, elResponse) {
    let http_object = new XMLHttpRequest();
    http_object.onreadystatechange = function() {
      if(this.readyState === 4 && this.status === 200) {
          let response = JSON.parse(this.responseText);
          document.getElementById(elResponse).setAttribute("value", response.result);
      }
    }
    http_object.open("GET", url, true);
    http_object.send();
}

/**
 * Calculator Stuff
 */
/**
 * addNumbers()
 * This function does not use the app.py file to complete the task.
 *
 * Write a function that will
 * * retrieve the values from the text box elements on the page
 * * perform the calculation
 * * set the result element in the html page to display the result of the calculation
 */
function addNumbers(){
    let num1 = Number(document.getElementById("add1").value);
    let num2 = Number(document.getElementById("add2").value);
    let result = num1+num2
    document.getElementById("inputAdd").setAttribute("value", result);

}

/**
 * addNumbersAPI()
 * This function should perform the calculation in the app.py file
 *
 * Write a function that will
 * * retrieve the values from the text box elements on the page
 * * form a url string with the values as arguments
 * * Use callAPI() function to form and send a request object
 */
function addNumbersAPI(){
    let num1 = Number(document.getElementById("add1").value);
    let num2 = Number(document.getElementById("add2").value);
    let director = ("/api/add?num1="+num1+"&num2="+num2);
    callAPI(director, "inputAdd");
}

/**
 * subtractNumbers()
 * This function does not use the app.py file to complete the task.
 *
 * Write a function that will
 * * retrieve the values from the text box elements on the page
 * * perform the calculation
 * * set the result element in the html page to display the result of the calculation
 */
function subtractNumbers(){
    let num1 = Number(document.getElementById("sub1").value);
    let num2 = Number(document.getElementById("sub2").value);
    let result = num1-num2
    document.getElementById("inputSubtract").setAttribute("value", result);
}

/**
 * subtractNumbersAPI()
 * This function should perform the calculation in the app.py file
 *
 * Write a function that will
 * * retrieve the values from the text box elements on the page
 * * form a url string with the values as arguments
 * * Use callAPI() function to form and send a request object
 */
function subtractNumbersAPI(){
    let num1 = (document.getElementById("sub1").value);
    let num2 = (document.getElementById("sub2").value);
    let director = ("/api/subtract?num1="+num1+"&num2="+num2);
    callAPI(director, "inputSubtract");
}

/**
 * multiplyNumbers()
 * This function should perform the calculation in the app.py file
 *
 * Write a function that will
 * * retrieve the values from the text box elements on the page
 * * perform the calculation
 * * set the result element in the html page to display the result of the calculation
 */
function multiplyNumbers(){
    let num1 = Number(document.getElementById("multi1").value);
    let num2 = Number(document.getElementById("multi2").value);
    let result = num1*num2
    document.getElementById("inputMultiply").setAttribute("value", result);
}

/**
 * multiplyNumbersAPI()
  * This function should perform the calculation in the app.py file
 *
 * Write a function that will
 * * retrieve the values from the text box elements on the page
 * * form a url string with the values as arguments
 * * Use callAPI() function to form and send a request object
 */
function multiplyNumbersAPI(){
    let num1 = (document.getElementById("multi1").value);
    let num2 = (document.getElementById("multi2").value);
    let director = ("/api/multiply?num1="+num1+"&num2="+num2);
    callAPI(director, "inputMultiply");
}

/**
 * divideNumbers()
 * This function does not use the app.py file to complete the task.
 *
 * Write a function that will
 * * retrieve the values from the text box elements on the page
 * * perform the calculation
 * * set the result element in the html page to display the result of the calculation
 * NOTE: once you have this function operational you need to validate the divisor
 * and ensure you do not have divide by zero errors.
 */
function divideNumbers(){
    let num1 = Number(document.getElementById("divi1").value);
    let num2 = Number(document.getElementById("divi2").value);
    if (num1 != 0 && num2 != 0) {
        let result = num1/num2
        document.getElementById("inputDivide").setAttribute("value", result);
    }
    else {
        document.getElementById("inputDivide").setAttribute("value", "Cannot divide by 0.");
    }
}

/**
 * divideNumbersAPI()
 * This function should perform the calculation in the app.py file
 *
 * Write a function that will
 * * retrieve the values from the text box elements on the page
 * * form a url string with the values as arguments
 * * Use callAPI() function to form and send a request object
 */
function divideNumbersAPI(){
    let num1 = (document.getElementById("divi1").value);
    let num2 = (document.getElementById("divi2").value);
    let director = ("/api/divide?num1="+num1+"&num2="+num2);
    callAPI(director, "inputDivide");
}

/**
 * Journal Stuff
 */
/**
 * getJournalEntries() - Get list of journal entries
 *
 * Write a function that will
 * * retrieve the JSON file of journal entries
 * * format the entries into a single string with appropriate html tags
 * * set the content of the "listEntries" element to the formatted string
 */
function getJournalEntries(){
    let response = "ERROR occurred while calling journal Entries";
    let http_object = new XMLHttpRequest();
    http_object.onreadystatechange = function() {
      if(this.readyState === 4 && this.status === 200) {
          response = JSON.parse(this.responseText);
          let journalContent = JSON.parse(response.result);
          let journalList = "";
          let id_count = 0;
          for(let element of journalContent.journals) {

              journalList = journalList + "<li onclick='populateEntry(this)' class='journalClass' id='" + id_count + "'> ID : " + String(id_count) + "<br> Name : " + String(element.name) + " <br> Date : " + String(element.date) + " <br> Notes : "+ String(element.note) + "</li>";
              id_count += 1;
          document.getElementById("listEntries").innerHTML = journalList;
          }
      }
    }
    http_object.open("GET", "/api/journal", true);
    http_object.send();

}
getJournalEntries();
/**
 * Dont forget to call the function that will retrieve the list entries when the page loads
 */


/**
 * populateEntry(item)
 *
 * Write a function that will
 * * get the data for a single journal entry from item parameter
 * * extract the individual pieces of data from the entry
 * * and put each piece of information into the text fields on the html page
 * @param item
 */
function populateEntry(item){

    let innerString = item.innerText.split("\n");

    let subInnerString = innerString[0].split(" ");
    let id = subInnerString[2];

    let subInnerStringTwo = innerString[1].split(" ")
    subInnerStringTwo.shift()
    subInnerStringTwo.shift()
    let name = subInnerStringTwo.join(" ")


    let subInnerStringThree = innerString[2].split(" ")
    subInnerStringThree.shift()
    subInnerStringThree.shift()
    let date = subInnerStringThree.join(" ");


    let subInnerStringFour = innerString[3].split(" ")
    subInnerStringFour.shift()
    subInnerStringFour.shift()
    let notes = subInnerStringFour.join(" ");

    document.getElementById("idEntry").value = String(id);
    document.getElementById("dateEntry").value = String(date);
    document.getElementById("namEntry").value = String(name)
    document.getElementById("txtNote").value = String(notes);
}

/**
 * addEntry() - add a journal entry
 *
 * Write a function that will
 * * create a new node list item element
 * * create a new text node element for the new list item and attach it to the new list item
 * * set other values of the list item - date, class, id, notes, student
 * * append the new node to the list of entries
 */
function addEntry(){
    let id = document.getElementById("idAdd").value
    let date = document.getElementById("dateAdd").value
    let name = document.getElementById("nameAdd").value
    let notes = document.getElementById("txtAdd").value
    document.getElementById("listEntries").innerHTML += "<li onclick='populateEntry(this)' class='journalClass' id='" + id + "'>ID : " + id + "<br> Name : " + name + "<br> Date : " + date + " <br> Notes : " + notes + "</li>";
}

/**
 * deleteEntry()
 *
 * Write a function that will
 * * delete a journal entry (list item) from the html page
 */
function deleteEntry(){
    var targetEntryId = document.getElementById("idEntry").value;
    document.getElementById(targetEntryId).remove();
}

function uploadJournal(){

    let data = document.getElementById("listEntries").innerText
    data = data.split("\n")

    let http_object = new XMLHttpRequest();
    http_object.onreadystatechange = function() {
      if(this.readyState === 4 && this.status === 200) {
          document.getElementById("updateParaJournal").innerText = this.responseText
          document.getElementById("updateParaJournal").style.color = "green"
      }
    }
    http_object.open("PUT", "/api/journal_sync?data="+data, true);
    http_object.send();
}

function getThoughts() {
    let response = "ERROR occurred while calling Thoughts";
    let http_object = new XMLHttpRequest();
    http_object.onreadystatechange = function() {
      if(this.readyState === 4 && this.status === 200) {
          response = JSON.parse(this.responseText);
          let thoughtContent = JSON.parse(response.result);
          let thoughtList = "";
          let id_count = 1;
          let listOfThoughts = []
          console.log(thoughtContent)
          for(let element of thoughtContent.thoughts) {

              thoughtList = thoughtList + "<li onclick='populateThoughtEntry(this)' class='journalClass' id='T" + id_count + "'>" + String(element.thought) + "</li>";
              listOfThoughts.push(String(element.thought))
              id_count += 1;
          document.getElementById("thoughtEntries").innerHTML = thoughtList;
          }
          let randThought = listOfThoughts[getRandomInt(id_count-1)]
          document.getElementById("ChosenThoughtID").innerText = randThought
      }
    }
    http_object.open("GET", "/api/thoughts", true);
    http_object.send();
}
getThoughts()
function getRandomInt(max) {
    return Math.floor(Math.random() * max)
}
function populateThoughtEntry(item) {
    document.getElementById("thoughtID").value = item.id
    document.getElementById("thoughtEntry").value = item.innerHTML
}

function deleteThought() {
    let targetEntryId = document.getElementById("thoughtID").value;
    document.getElementById(targetEntryId).remove();
}

function addThought() {
    let thought = document.getElementById("thoughtEntry").value
    let id = document.getElementById("thoughtID").value
    document.getElementById("thoughtEntries").innerHTML += "<li onclick='populateThoughtEntry(this)' class='journalClass' id='" + id + "'> " + String(thought) + " </li>";
}

function uploadThoughts(){
    let data = document.getElementById("thoughtEntries").innerText
    data = data.split("\n")

    let http_object = new XMLHttpRequest();
    http_object.onreadystatechange = function() {
      if(this.readyState === 4 && this.status === 200) {
          document.getElementById("updatePara").innerText = this.responseText
          document.getElementById("updatePara").style.color = "green"

      }
    }
    http_object.open("PUT", "/api/thought_sync?data="+data, true);
    http_object.send();
}
