# projelerim
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Form</title>
    <style>
        h2 {
            text-align: center;
            color:black;
        }
        body {
            background-color: #DDECF9;
            color: orangered;
        }
        .first {
            margin: 30px 50px 50px 390px;
            padding: 12px 12px 40px 12px;
            border: 1px solid;
            width: 35%;
            height: 75%;
        }
        div {
            margin: 9px 9px 9px 9px;
        }
        input {
            background-color: gray;
            color:white;
            
        }
        input::-webkit-input-placeholder { /* Chrome/Opera/Safari */
            color: white;
            font-size: 15px;
        }
        textarea::-webkit-input-placeholder { /* Chrome/Opera/Safari */
            color: white;
            font-size: 15px;
        }
        
        textarea {
            background-color:gray;

        }
        .renk {
            background-color: gray;
            border-radius: 15px;
            font-size: 15px;
            font-weight: bold;
        }
        .onay {
            float: right;
        }
        input[type='range'] {
            overflow: hidden;
            width: 180px;
            -webkit-appearance: none;
            background-color: gray;
    }
        .secenek {
            color: black;
        }
        input[type="checkbox"] {
           color: gray;

        }
        input[type='radio']::after {
        width: 15px;
        height: 15px;
        border-radius: 15px;
        top: -2px;
        left: -1px;
        position: relative;
        background-color: gray;
        content: '';
        display: inline-block;
        visibility: visible;
        border: 2px solid;
        }
        input[type='radio']:checked:after {
        width: 15px;
        height: 15px;
        border-radius: 15px;
        top: -2px;
        left: -1px;
        position: relative;
        background-color: blue;
        content: '';
        display: inline-block;
        visibility: visible;
        border: 2px solid;
    }
    input[type='checkbox']::after {
        width: 15px;
        height: 15px;
        border-radius: 15px;
        top: -2px;
        left: -1px;
        position: relative;
        background-color: gray;
        content: '';
        display: inline-block;
        visibility: visible;
        border: 2px solid;
        }
    input[type='checkbox']:checked:after {
        width: 15px;
        height: 15px;
        border-radius: 15px;
        top: -2px;
        left: -1px;
        position: relative;
        background-color: blue;
        content: '';
        display: inline-block;
        visibility: visible;
        border: 2px solid;
    }
    </style>
</head>
<body>
    <div class="first">
        <img src="" alt="">
        <form action="mailto:address@example.com">
            <h2>Değerlendirme Formu</h2><hr size="5">
            <div class="ögrenci">
                <label for="ö-no">Öğrenci Numaranız:</label><br>
                <input type="text-number" name="numara" id="ö-no" placeholder="DXXXX" size="58"><hr>
            </div>
            <div class="info">
                <label for="isim">Adınız-Soyadınız :</label><br>
                <input type="text" name="ad" id="isim" placeholder="Lütfen isminizi giriniz." size="58"><hr>
            </div>
            <div class="path">
                <label for="#">Hangi Alanı Seçmeyi Düşünüyorsunuz :</label><br><br>
                <input type="radio" name="alan" id="fs">
                <label for="fs" class="secenek">Full Stack</label>
                <input type="radio" name="alan" id="ds">
                <label for="ds" class="secenek">Data Science</label>
                <input type="radio" name="alan" id="aws">
                <label for="aws" class="secenek">Aws&DevOps</label><hr>
            </div>
            <div class="dil">
                <label for="#">İngilizce Seviyeniz :</label><br><br>
                <input type="radio" name="dil" id="başlangıç">
                <label for="fs" class="secenek">Beginner</label>
                <input type="radio" name="dil" id="orta">
                <label for="orta" class="secenek">Intermediate</label>
                <input type="radio" name="dil" id="ileri">
                <label for="ileri" class="secenek">Advanced</label><hr>
            </div>
            <div class="lessons">
                <label for="#">En Sevdiğiniz Dersler :</label><br><br>
                <input type="checkbox" name="ders" id="html" value="HTML">
                <label for="html" class="secenek">HTML</label>
                <input type="checkbox" name="ders" id="python" value="PYTHON">
                <label for="python" class="secenek">PYTHON</label>
                <input type="checkbox" name="ders" id="linux" value="LINUX">
                <label for="linux" class="secenek">LINUX</label>
                <input type="checkbox" name="ders" id="css" value="CSS">
                <label for="css" class="secenek">CSS</label><hr>
            </div>
            <div class="memnun">
                <label for="points">Aldığınız Eğitimden Memnuniyet Dereceniz : <br>(between 0 and 10)</label><br><br>
                <!-- <label for="points">Points (between 0 and 10):</label> -->
                <input type="range" id="points" name="points" min="0" max="10">
            </div>
            <div class="country">
                <label for="ülke">Bulunduğunuz Ülke :</label><br>
                <input type="text" name="ikamet" id="ülke" placeholder="Ülkenizi Giriniz." size="58" required><hr>
            </div>
            <div class="ages">
                <label for="yas">Yaşınızı Giriniz :</label><br>
                <input type="number" name="age" id="yas" placeholder="Yaşınızı Giriniz" required><hr>
            </div>
            <div class="öneri">
                <label for="öneri">Önerilerinizi Giriniz :</label><br>
                <textarea name="mesaj" id="öneri" cols="54" rows="5" placeholder="Önerilerinizi buraya yazınız."></textarea>
            </div>
            <div class="onay">
                <input type="reset" value="Temizle" class="renk">
                <input type="submit" value="Gönder" class="renk">
            </div>

        </form>
    </div>
</body>
</html>
