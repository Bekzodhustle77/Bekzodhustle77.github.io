$(".rotate>.plus-close").click(function(){
    $(this).toggleClass("down");
});

$('.font').collapse({
    open: function() {
        this.slideDown(100);
      },
      close: function() {
        this.slideUp(100);
      },
      accordion: true,
})

function openCountry(evt, countryName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(countryName).style.display = "block";
    evt.currentTarget.className += " active";
    
    // Map 
    if (typeof map !== undefined){
        if(countryName == 'Kyrgyzstan') {
            var latlng = new google.maps.LatLng(42.87625, 74.61168);
            map.setCenter(latlng)
        } else if (countryName == 'UAE'){
            var latlng = new google.maps.LatLng(25.253528, 55.333826);
            map.setCenter(latlng)
        } else if (countryName == 'Turkey'){
            var latlng = new google.maps.LatLng(41.014951, 28.972813);
            map.setCenter(latlng)
        } else {
            var latlng = new google.maps.LatLng(41.327, 69.280);
            map.setCenter(latlng)
        }
    }
    
}

    // Get the element with id="defaultOpen" and click on it
    document.getElementById("defaultOpen").click();

var map;
function initMap(lat,lng) {
map = new google.maps.Map(document.getElementById('map'), {
zoom: 12,
center: new google.maps.LatLng(41.327, 69.280),
mapTypeId: 'roadmap'
});

var iconBase = './img/getbuy/map-icon.png?';
var icons = {
info: {
icon: iconBase + 'map-icon.png'
}
};

var features = [
{
position: new google.maps.LatLng(41.24666, 69.165948), // Abu Sahiy ,
type: 'info'
}, {
position: new google.maps.LatLng(41.2960961, 69.265897), // Grand Mir 
type: 'info'
},{
position: new google.maps.LatLng(42.87625, 74.61168), // Qirgisiton  
type: 'info'
},{
position: new google.maps.LatLng(25.253528, 55.333826), // UAE  
type: 'info'
},{
position: new google.maps.LatLng(41.014951, 28.972813), // Turkey  
type: 'info'
}, 
];


// Create markers.
features.forEach(function(feature) {
var marker = new google.maps.Marker({
position: feature.position,
icon: icons[feature.type].icon,
map: map
});
});
}