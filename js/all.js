var sendDate = document.querySelector('.send');
var data = JSON.parse(localStorage.getItem('listData')) || [];
var list = document.querySelector('.list');
sendDate.addEventListener('click', addData);
list.addEventListener('click', cancal);
upData(data);
function addData() {
    var height = document.querySelector('.height').value;
    var heightM = height * 0.01;
    var weight = document.querySelector('.weight').value;
    if (height == 0 && weight == 0) {
        alert('請輸入數值!');
        return;
    }
    var bmifirst = weight / (heightM * heightM);
    var bmi = bmifirst.toFixed(2);
    var day = new Date();
    var today = day.getFullYear() + " -" + (day.getMonth() + 1) + " - " + day.getDate();
    var todo = {
        bmi: bmi,
        hei: height,
        wei: weight,
        tod: today,
    };
    data.push(todo);
    upData(data);
    localStorage.setItem('listData', JSON.stringify(data));
    text = ''
    var button = '';
    button += '<div class="button"><h2>' + bmi + '</h2>bmi<p>' + text + '</p><a href="index.html" class="material-icons clear">&#xe028;</a></div>'
    sendDate.innerHTML = button;
    var clear = document.querySelector('.clear');
    var but = document.querySelector('.button');
    var text = document.querySelector('.button p')
    if (bmi < 18.5) {
        clear.style.backgroundColor = '#31BAF9';
        but.style.border = '5px solid #31BAF9';
        but.style.color = '#31BAF9';
        text.textContent = '過輕'
    } else if (bmi >= 18.5 && bmi <= 23.9) {
        clear.style.backgroundColor = '#86D73F';
        but.style.border = '5px solid #86D73F';
        but.style.color = '#86D73F';
        text.textContent = '理想'
    } else if (bmi > 24 && bmi <= 27.9) {
        clear.style.backgroundColor = '#FF982D';
        but.style.border = '5px solid #FF982D';
        but.style.color = '#FF982D';
        text.textContent = '過重'
    } else if (bmi >= 28 && bmi < 30) {
        clear.style.backgroundColor = '#FF6C03';
        but.style.border = '5px solid #FF6C03';
        but.style.color = '#FF6C03';
        text.textContent = '輕度肥胖'
    } else if (bmi >= 30.1 && bmi < 35) {
        clear.style.backgroundColor = '#FF6C04';
        but.style.border = '5px solid #FF6C04';
        but.style.color = '#FF6C04';
        text.textContent = '中度肥胖'
    } else if (bmi >= 35) {
        clear.style.backgroundColor = '#FF1200';
        but.style.border = '5px solid #FF1200';
        but.style.color = '#FF1200';
        text.textContent = '過度肥胖'
    }
}



function upData(item) {
    str = '';
    button = '';
    var len = item.length;
    var bmivalue = '';
    var color = '';
    var border = '';
    for (var i = 0; i < len; i++) {
        if (item[i].bmi < 18.5) {
            bmivalue = '過輕'
            color = 'Underweigh'
        } else if (item[i].bmi >= 18.5 && item[i].bmi <= 23.9) {
            bmivalue = '理想'
            color = 'Normal'
        } else if (item[i].bmi > 24 && item[i].bmi <= 27.9) {
            bmivalue = '過重'
            color = 'Overweight'
        } else if (item[i].bmi >= 28 && item[i].bmi < 30) {
            bmivalue = '輕微肥胖'
            color = 'Obese-Class1'
        } else if (item[i].bmi >= 30.1 && item[i].bmi < 35) {
            bmivalue = '中度肥胖'
            color = 'Obese-Class2'
        } else if (item[i].bmi >= 35) {
            bmivalue = '重度肥胖'
            color = 'Obese-Class3'
        }
        str += '<li class=' + color + '><a href="#" data-index=' + i + ' >刪除</a> <span>' + bmivalue + '<h2>bmi</h2>' + item[i].bmi + '<h2>weight</h2>' + item[i].wei + 'kg<h2>height</h2>' + item[i].hei + 'cm<h2>日期</h2>' + item[i].tod + ' </span></li>';
    }
    list.innerHTML = str;
}
function cancal(e) {
    e.preventDefault();
    if (e.target.nodeName !== 'A') { return };
    var index = e.target.dataset.index;
    data.splice(index, 1);
    localStorage.setItem('listData', JSON.stringify(data));
    upData(data);

}