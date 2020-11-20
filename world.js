window.onload = function(){

    let form = document.getElementById("lookup");
    let search = document.getElementById("lookfor");

    form.addEventListener('click', function(e){
        e.preventDefault();
        let test = document.getElementById('country').value;
           var trim = test.trim();
           var param = {country:`${trim}`};
           console.log(param);
           fetch("http://localhost:8888/info2180-lab5/world.php?country="+ trim)
           .then(response =>{
               if (response.ok){
                   return response.text();
                }else{
                }
           })
           .then(data =>{
               document.getElementById('result').innerHTML = data;
            });
    })

    search.addEventListener('click', function(e){
        e.preventDefault();
        let check = document.getElementById('country').value;
           var checker = check.trim();
           var param = {country:`${checker}`,context: 'cities'};
           console.log(param);
           fetch("http://localhost:8888/info2180-lab5/world.php?country=&context="+ checker)
           .then(response =>{
               if (response.ok){
                   return response.text();
                }else{
                }
           })
           .then(data =>{
               document.getElementById('result').innerHTML = data;
            });
    });
}

