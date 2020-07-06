//This is the connection link to the backend. (Not working right now)
const JSONDATA = "/ProjectFOX/javascript/prototype.json";
getData(JSONDATA);


//send JsonData
function getData(data) {
    fetch(data)
        .then(response => response.json())
        .then(function (data) {
        console.log('Json object from getData function:');
        console.log(data);
        makeTable(data);
    })
        .catch(error => console.log('There was an error: ', error))
} // end getData function

//Insert Table of Tracks Data. (Not working right now)
function makeTable(data) {
    // Log what is returned
    console.log(data);

    // Build table elements
    // Use a for loop to include the results in list items
    let list = "<tr>";
    for (let i = 0; i <= 3; i++) {
        list += "<td>" + data.Table[i] + "</td>";
        console.log('tracks data:');
        console.log(data.Table[i]);
    };
    list += "</tr>";
    scrollbar.innerHTML = list;
}


//On the menu bar, when you click "All, or "high accuracy" etc, show only that data. Send page specific data to display function below. (Not working right now)

const navbar = document.getElementById("navigation");
navbar.addEventListener("click", function (event) {

    let content = event.target.innerHTML;
    console.log(content);
    if (content != "ALL") {
        fetch(JSONDATA)
            .then(response => response.json())
            .then(function (data) {
            console.log('Json object from getData function:');
            console.log(data);
            productSpecific(content, data);
        })
            .catch(error => console.log('There was an error: ', error))
    } else {
        const visibleMain = document.getElementById("hideUnhideMain");
        visibleMain.setAttribute("class", "unhideMain")
        const hide = document.getElementById("hideUnhideContent");
        hide.setAttribute("class", "hideContent");
    }
})


//Take target data and put into webpage
//my id is where JSON data gets inserted.
//what goes in is the prototype.json data."menu" of section I want to insert.
function productSpecific(content, data) {

    //check what it thinks is the target data (object)
    console.log(data[content].menu);

}

//This works. Right now it changes the color of the specific kill button clicked. Each tract will need a specific ID associated with it, so that only that tract is marked killed when the button is clicked. We will also add functionality here to send a message to the backend that this tract was killed so it can be sorted.
function KILLActive(id){
    document.getElementById(id).style.backgroundColor = "green";
    document.getElementById(id).style.color = "black";
}

//This works. When the pilot clicks the fix button, it turns that tracks fix button yellow. We need to relay this to the backend still. Need the tracks ID to sync with Fix# ID so only that one track button changes color.
function FIXActive(id){
    document.getElementById(id).style.backgroundColor = "yellow";
    document.getElementById(id).style.color = "black";
}

//This does not work yet. I was messing with some GUI gestures, but haven't figured it out yet.
function SwipeLeftAction() {
    document.getElementById("unique1").style.display = "none";
}
//When Pin Icon is Click this will add Gold Border to the Task and Move it to the top.
var index=5;
function GoldBorderandPinToTop(id){ 
    var rows = document.getElementById("table").rows;
    document.getElementById("unique1").style.outline = "2px solid black";
    
    parent = rows[id].parentNode;
    if(document.getElementById(id).style.borderTopColor!='gold' && document.getElementById(id).style.borderBottemColor!='gold'){
    document.getElementById(id).style.borderTopColor='gold';
    document.getElementById(id).style.borderBottomColor='gold';
    document.getElementById(id).style.outline = "2px solid gold";
    parent.insertBefore(rows[id],rows[1]);
    }
    else{
        document.getElementById(id).style.borderTopColor='blue';
        document.getElementById(id).style.borderBottomColor='blue';
        document.getElementById(id).style.outline = null;
        parent.insertBefore(rows[id],rows[rows]);
    }
   
}


function upNdown()
{
    var rows = document.getElementById("table").rows,
        parent = rows[index].parentNode;
     
         if(index > 1){
            parent.insertBefore(rows[index],rows[index - 1]);
            // when the row go up the index will be equal to index - 1
            index--;
        }
     
}

    
