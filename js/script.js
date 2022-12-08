//alert('Aperte F11 para entrar no modo tela cheia');

var slider = document.querySelectorAll('.bar');
var frame = document.querySelector('.quadro_wrapper');
var frame_bg = document.querySelector('.quadro');
var slider_text = document.querySelector('.slider_text');
var elastic = document.querySelector('.elastic');
var tension = document.querySelector('.tension');
var calc = document.querySelector('.button');
var calc_slider = document.querySelectorAll('.slide');
var mobile = document.querySelector('.mobile_menu');
var material =[{
            material: 'Aço',
            elastic:200,
            tension:241
        },
        {
            material: 'Vidro',
            tension:140,
            elastic:69
        },
        {
            material: 'Concreto',
            tension:30,
            elastic:25
        }]


function sliderClick() {
    
    for (var i = 0; i <slider.length; i++){
        switch (i) {
            case 0:
                slider[i].addEventListener('click',()=>{
                        frame.style.backgroundImage = "url('/imagens/acobefore.png')";
                        frame_bg.style.backgroundImage = "url('/imagens/aco.png')";
                        slider_text.innerHTML = "Aço";
                        elastic.innerHTML = material[0].elastic;
                        tension.innerHTML = material[0].tension;
                        google.charts.load('current', {'packages':['corechart']});
                        google.charts.setOnLoadCallback(drawChart);
                        function drawChart() {
                            var query = new google.visualization.Query('https://docs.google.com/spreadsheets/d/1J1399a83r-R163slUprpmwhSq8JAo4-feJfEKWoOw4c/edit?usp=sharing');
                            query.setQuery('SELECT A,B')
                            query.send(handleQueryResponse);
                        }
                        
                        function handleQueryResponse(response) {
                            
                            var data = response.getDataTable();
                            var chart = new google.visualization.LineChart(document.getElementById('graph'));
                            chart.draw(data);
                          }

                })
                break;
            case 1:
                slider[i].addEventListener('click',()=>{
                    frame.style.backgroundImage = "url('/imagens/vidrobefore.png')";
                    frame_bg.style.backgroundImage = "url('/imagens/vidro_bg.png')";
                    slider_text.innerHTML = "Vidro";
                    elastic.innerHTML = material[1].elastic;
                    tension.innerHTML = material[1].tension;
                    google.charts.load('current', {'packages':['corechart']});
                        google.charts.setOnLoadCallback(drawChart);
                    function drawChart() {
                        var query = new google.visualization.Query('https://docs.google.com/spreadsheets/d/1J1399a83r-R163slUprpmwhSq8JAo4-feJfEKWoOw4c/edit?usp=sharing');
                        query.setQuery('SELECT L,M')
                        query.send(handleQueryResponse);
                    }
                    
                    function handleQueryResponse(response) {
                        
                        var data = response.getDataTable();
                        var chart = new google.visualization.LineChart(document.getElementById('graph'));
                        chart.draw(data);
                      }
            })
                break;
            case 2:
                slider[i].addEventListener('click',()=>{
                    frame.style.backgroundImage = "url('/imagens/concretbefore.png')";
                    frame_bg.style.backgroundImage = "url('/imagens/concretbg.png')";
                    slider_text.innerHTML = "Concreto";
                    elastic.innerHTML = material[2].elastic;
                    tension.innerHTML = material[2].tension;
                    google.charts.load('current', {'packages':['corechart']});
                    google.charts.setOnLoadCallback(drawChart);
                function drawChart() {
                    var query = new google.visualization.Query('https://docs.google.com/spreadsheets/d/1J1399a83r-R163slUprpmwhSq8JAo4-feJfEKWoOw4c/edit?usp=sharing');
                    query.setQuery('SELECT N,O')
                    query.send(handleQueryResponse);
                }
                
                function handleQueryResponse(response) {
                    
                    var data = response.getDataTable();
                    var chart = new google.visualization.LineChart(document.getElementById('graph'));
                    chart.draw(data);
                  }
        })
            default:
                break;
        }
    }
}


sliderClick();
calc.addEventListener('click',()=>{
    const coef_e = document.querySelector('.deformation_elastic').value;
    var def_info  = document.querySelector('.grade_def h3');
    var material_conf = document.querySelector('#grade_1 h3').innerText;
    for(let i=0; i<material.length; i++){
        if(material[i].material==material_conf){
        if(coef_e<=material[i].elastic){
            def_info.innerHTML = "Elástica";
        }else{
            def_info.innerHTML = "Plástica";
        }
    }
    }
});

calc.addEventListener('click',()=>{
    const elastic_module = 0;
    var material_conf = document.querySelector('#grade_1 h3').innerText;
    var comprimento = document.querySelector('.deformation');
    var print= document.querySelector('#grade_2 h3')
    var formula
    for(let i=0; i<material.length; i++){
        if(material[i].material==material_conf){
            formula = (material[i].elastic*parseFloat(comprimento.value));
            print.innerHTML = formula + " m";
        }
    }
})

for(var k  = 0;k<calc_slider.length;k++){
calc_slider[k].addEventListener('click',(e)=>{
    var material_conf = document.querySelector('#grade_1 h3');
     for(let pivo=0; pivo<calc_slider.length;pivo++){
        if(pivo==0&&calc_slider[pivo]==e.target){
            material_conf.innerHTML = "Aço";
        }else if(pivo==1&&calc_slider[pivo]==e.target){
            material_conf.innerHTML = "Vidro";
        }else if(pivo==2&&calc_slider[pivo]==e.target){
            material_conf.innerHTML = "Concreto";
        }
     }
})
}

mobile.addEventListener('click',()=>{
        document.querySelector('.mobile').style.display = "block";
})

var close = document.querySelector('.close')

close.addEventListener('click',()=>{
    document.querySelector('.mobile').style.display = "none";
})

var link = document.querySelectorAll('.mobile a');

for(var pivo_link = 0; pivo_link<link.length;pivo_link++){
link[pivo_link].addEventListener('click',()=>{
    document.querySelector('.mobile').style.display = "none";
})
}