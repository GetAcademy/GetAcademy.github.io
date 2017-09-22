var colorNumber = 0;

var colorChange = ["#66b032", "#d0ea2b", "#fefe33", "#fabc02",
    "#fb9902", "#fd5308", "#fe2712", "#a7194b",
    "#8601af", "#3d01a4", "#0247fe", "#0392ce"];

var rgbaColor = ["rgba(102, 176, 50, 0.3)", "rgba(208, 234, 43, 0.3)", "rgba(254, 254, 51, 0.3)",
    "rgba(250, 188, 2, 0.3)", "rgba(251, 153, 2, 0.3)", "rgba(253, 83, 8, 0.3)",
    "rgba(254, 39, 18, 0.3)", "rgba(167, 25, 75, 0.3)", "rgba(134, 1, 175, 0.3)",
    "rgba(61, 1, 164, 0.3)", "rgba(2, 71, 254, 0.3)", "rgba(3, 146, 206, 0.3)"]

var fullMonth = ['Januar', 'Februar', 'Mars', 'April',
    'Mai', 'Juni', 'Juli', 'August',
    'September', 'Oktober', 'November', 'Desember'];

var monthStr = [];
var selectedMonth;

window.onload = function () {  
    var circleSegment = 'd = "M220 20 A200 200, 0, 0, 1, 320 47 L220 220 L220 20Z"stroke="black" stroke-width="2" fill="';
    var monthRotate = 12;
    var outerCircle = '<svg width="440" height="440">';
    var month = ['Jan', 'Feb', 'Mar', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Des'];

    createVariables();

    for (var rotation = 0; rotation < 360; rotation = rotation + 30) {
        outerCircle = outerCircle + '<g onclick="clicks('+ colorNumber+', this)" ' +
            'class="hovered"><path transform="rotate(' + rotation + ' 220,220)" '
            + circleSegment + colorChange[colorNumber] + '"/>';
        outerCircle = outerCircle + '<text x="210" y="60" fill="black" transform="rotate(' + monthRotate + ' 220,220)" >'
            + month[colorNumber] + '</text></g>';
        colorNumber++;
        monthRotate = monthRotate + 30;
    }
    var completeCircle = outerCircle + '<g id="innerCircle">' +
        '<circle cx="220" cy="220" r="100" stroke="black" stroke-width="2" fill="darkkhaki" />' +
        '<text id="innerCircleText" x="50%" y="50%" text-anchor="middle"></text>' +
        '</g>';
    document.getElementById('leftSide').innerHTML = completeCircle;
};

function clicks(colorNumber, element) {
    document.getElementById("rightSideText").readOnly = false;
    selectedMonth = colorNumber;
    var elmt = document.getElementsByClassName('hovered');
    for (var j = 0; j < elmt.length; j++) {
        elmt[j].classList.remove('clicked');
    }
    
    document.getElementById("rightSideText").value = localStorage.getItem(selectedMonth);
    console.log(selectedMonth);
    document.getElementById('innerCircleText').innerHTML = (fullMonth[selectedMonth]);
    document.getElementById('rightSideInner').style.borderColor = colorChange[selectedMonth];
    document.getElementById('rightSideText').style.backgroundColor = rgbaColor[selectedMonth];
    element.classList.add('clicked');
};

function storageText() {
    if (typeof (Storage) !== "undefined") {

        localStorage.setItem(selectedMonth, document.getElementById('rightSideText').value);
        console.log(selectedMonth);
    } else {
        document.getElementById("rightSideText").value = "Sorry, your browser does not support Web Storage...";
    }
}

function createVariables() {
    for (var k = 0; k < 12; k++) {
        monthStr[k] = '';
    }
    return monthStr;
}