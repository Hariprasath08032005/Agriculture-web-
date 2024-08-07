function search(){
    let srch=document.getElementById("hello").value;
    let url=`https://www.google.com/search?q=${srch}`;
    window.open(url);
}
