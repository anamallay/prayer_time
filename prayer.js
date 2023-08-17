function displayLocation(){
    let selectElement = document.getElementById("city");
    let textElement = document.getElementById("location");
    selectElement.addEventListener("change", function() {
      
    textElement.innerText = selectElement.options[selectElement.selectedIndex].text;
    let M = selectElement.options[selectElement.selectedIndex].value;
    let the_city = M
    var link = "https://api.aladhan.com/v1/timingsByCity?country=sa&city="+the_city
    fetch(link)
    .then((response) => response.json())
    .then((data) => {
    // Fajr
    let intr_fajr = data.data.timings.Fajr
    FillPrayerTime("fajr",intr_fajr)
    // Sunrise
    let intr_sunrise = data.data.timings.Sunrise
    FillPrayerTime("sunrise",intr_sunrise)
    // Dhuhr
    let intr_dhuhr = data.data.timings.Dhuhr
    FillPrayerTime("dhuhr",intr_dhuhr)
    // ASr
    let intr_asr = data.data.timings.Asr
    FillPrayerTime("asr",intr_asr)
    // Maghrib
    let intr_maghrib = data.data.timings.Maghrib
    FillPrayerTime("maghrib",intr_maghrib)
    //Isha
    let intr_isha = data.data.timings.Isha
    document.getElementById("isha").innerHTML = intr_isha
    FillPrayerTime("isha",intr_isha)

    }
    )
    })
}

function displayDate(){
    let day = new Date()
    let Y = day.getUTCDay()
    if(Y == 0)
    {
        document.getElementById("day").innerHTML = "الاحد"
    }
    else if(Y == 1){
        document.getElementById("day").innerHTML = "الاثنين"
    }
    else if(Y == 2){
        document.getElementById("day").innerHTML = "الثلاثاء"
    }
    else if(Y == 3){
        document.getElementById("day").innerHTML = "الابعاء"
    }
    else if(Y == 4){
        document.getElementById("day").innerHTML = "الخميس"
    }
    else if(Y == 5){
        document.getElementById("day").innerHTML = "الجمعة"
    }
    else if(Y == 6){
        document.getElementById("day").innerHTML = "السبت"
    }
    let datas = new Date()
    let N = datas.getDate() + " " + "/" +" "+ (datas.getMonth() + 1) + " " + "/" + " " + datas.getFullYear()
    document.getElementById("date").innerHTML = N

}

function FillPrayerTime(id,prayer){
    document.getElementById(id).innerHTML = prayer
}
displayDate()
displayLocation()







