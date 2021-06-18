//grab input
var inputObj = document.getElementById('1');
var buttonPress = document.getElementById('2');
buttonPress.addEventListener('click', function(){
    getgifs();
});
inputObj.addEventListener('keypress', function(e){
    if(e.key === 'Enter')
    {
        getgifs();
    }
});

function getInput()
{
    var input = document.getElementById('1').value;
    return input;
}

//get gifs

function getgifs()
{
    var url = "https://g.tenor.com/v1/search?key={api_key_here}&q="
    url = url + getInput();

    // AJAX Request
    var TenorAJAXCall = new XMLHttpRequest();
    TenorAJAXCall.open( 'GET', url );
    TenorAJAXCall.send();


    TenorAJAXCall.addEventListener('load', function( data ) {

        pushToDOM(data.target.response);

    });
}


function pushToDOM(x)
{
    document.getElementById('3').innerHTML = "";
    res = JSON.parse(x);
    // console.log(res.results[0].media[0].tinygif.url);
    urls = res.results;
    var output = "";
    urls.forEach(element => {
        output += '<img src="'+ element.media[0].tinygif.url +'" class="container-image">';
    });

    var con = document.getElementById('3');
    con.innerHTML = output ;
    
}

//partay