Kodsnuttar
=

Här står det lite kort om HTML och CSS med exempelkod. Längst ner finns även mallar för några kodblock.

HTML
-
HTML är det som ger struktur till sidan och som bestämmer vad som ska finnas med på hemsidan.

### Vad är en tagg?
Precis som att mening *börjar* med stor bokstav och *slutar* med en punkt använder vi taggar så att datorn ska förstå var exempelvis en rubrik börjar och slutar.

Alla taggar har liknande struktur och de flesta behöver två stycken. Strukturen för en tagg ser ut så här:
```HTML
<tagg></tagg>
```

Ordet tagg byter man sedan ut mot det element man vill visa.

**Krokodilmunnarna** hittar du i det nedre vänstra hörnet, till höger om knappen med pilen på (även kallad shift). Håll in shift och klicka på knappen för att få en åt andra hållet.

**Snestreck** skriver du genom att hålla in shift och klicka på 7

### Vanliga taggar
```HTML
<h1>Vikgtigaste och, utan css, den största rubriken</h1>
<h2>Näst viktigaste och största rubriken</h2> (till och med h6)
<p>En text</p>
<button>En knapp</button>
<ul>
  <li>En lista</li>
</ul>
<center>Lägger allt inom denna tagg i mitten av hemsidan</center>
```

**Navigation**
```HTML
<nav>
  <ul class="meny">  

    <li><a href="index.html">Hem</a></li>
    <li><a href="sida2.html">Sida 2</a></li>
    <li><a href="sida3.html">Sida 3</a></li>

  </ul>
</nav>
```
Kom ihåg att ändra det innanför href="" till din sidas namn!

**Exempel på sektion**
```HTML
<section>   
  
  <center>
    <h3>Här är en underrubrik!</h3>
    <p>Lite text med information!</p>
  </center>
      
</section>
```
Här är en sektion med en underrubrik och text som kommer att centreras eftersom de är i en <center>-tagg.

**Exempel på footer**
``` HTML
<footer>
        
    <p>En text</p>
    <a href="sida.html"><button>En knapp som blivit en länk!</button></a> 
        
</footer>
```
Här är en footer med lite text och en knapp som tar en till en annan sida!
  
CSS
-
CSS är det vi använder för att ändra hur hemsidan ska se ut. Det gör vi genom att välja de element vi vill ändra och sedan ändra deras värden.

### Syntax
```CSS
h1 {
  color: blue;
}
```

### Selektor
Ovan används selektorn *h1* för att ändra alla stora rubrikers färg till blå. En selektor motsvarar den tagg vi använder inom HTML. Notera att vi *inte* behöver ha med krokodilmunnarna!

### Klasser
Klasser används när vi vill ändra samma värden på flera element men där vi exempelvis inte vill ändra *alla* rubriker. 
```HTML
<p class="blå">Lite text!</p>
```
Börja med att ge elementen du vill förändra en klass.
```CSS
.blå {
  color: blue;
}
```
Sedan kan man ändra *alla* med klassen blå med hjälp av att skriva en punkt framför klassens namn!

### Id
Id:n fungerar på samma sätt men där kan varje id endast användas *en* gång per sida. Alltså är det unikt!

```HTML
<h1 id="huvudrubrik">Den bästa sidan!</h1>
```
```CSS
#huvudrubrik {
  font-size: 45px;
}
```

Här använder vi istället symbolen #.


Länk: [Klicka här!](https://www.youtube.com/watch?v=dQw4w9WgXcQ) -- bara test för att jag ska komma ihåg syntaxen!