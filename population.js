let xhr=new XMLHttpRequest();
xhr.open('GET','https://restcountries.com/v3.1/all');
xhr.send();
xhr.onload=function (){
        var countryData=JSON.parse(this.response);
        const popu=countryData.filter((element)=>{
            return element.population<200000;
        })
        console.log(popu);
    }