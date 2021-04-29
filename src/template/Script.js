const Script = () => {
    const view = `
    var today = new Date();
    var time = today.getHours();
    if(today < 20){
        document.body.classList.toggle("dark_theme");
    }else{

    }
    
    var darkmode = document.getElementById("darkmode");
    darkmode.onclick = function(){
    document.body.classList.toggle("dark_theme");
    }
    `;
    return view;
};

export default Script;