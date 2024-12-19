# Extrauppdrag

Är du klar med allt för tillfället och behöver något att göra tills genomgången startar igen? Detta dokument kan du hoppa in och ut ur när du får tid över, men pausa alltid när vi ska gå igenom något nytt! :)

Lycka till!

## Ikon till hemsidan
![alt text][logo]

[logo]: https://cdn.glitch.com/a621e2a7-7454-449d-b47b-9ab0c01ea970%2FSka%CC%88rmavbild%202019-01-06%20kl.%2022.21.02.png?1546809746893

Hitta en bild du skulle vilja använda dig av och lägg in den i assets. Klicka på den och sedan på knappen *copy URL*.

Lägg in en **<link>-tagg** under din titel i head-sektionen. Denna tagg har ingen sluttagg! Link är till för att länka bilder, fonter och andra användbara saker till hemsidan. 

Inuti taggen, till *höger* om link och till *vänster* om den sista krokodilmunnen skriver du; rel="shortcut icon". Detta gör att hemsidan förstår att vi lägger till en ikon (*icon*) i titeln.
```HTML
<title>Min hemsida</title>
<link rel="shortcut icon">
```


Klicka med musen i mellanrummet mellan det sista citattecknet(") och slutet av taggen(>) och gör ett mellanrum. Skriv nu in **href=""** och klistra in länken till bilden som du kopierade mellan citattecknena. Detta visar datorn *vilken* bild vi vill använda som en ikon!
```HTML
<link rel="shortcut icon" href="länk till din bild">
```
Nu borde du kunna se en bild bredvid din titel!

## Emojees och symboler

**Vad är UTF-8?**

UTF-8 är en typ av teckenkodning. Teckenkodning som en överenskommelse mellan datorn där det finns en speciell kod för varje bokstav och tecken. Eftersom datorn i grund och botten opererar på ettor och nollor så behöver vi beskriva bokstäverna med numeriska tal. Exempelvis så blir A 41 och ! 21. 
[Mer om UTF-8](https://www.w3.org/International/questions/qa-what-is-encoding.sv)

Men vi kan också ge datorn en kod så att den vet vilket tecken den ska visa För att datorn ska veta att vi skriver in en kod istället för vanliga siffror skriver vi &# innan värdet. Om vi vill använda det i HTML så behöver vi dock omsluta den med en speciell tagg vid namn *span*. Vi behöver en span-tagg runt varje kod vi vill använda oss av.
```HTML
<span>&#9733</span>
```
Detta ger exempelvis en ifylld stjärna!

Gå in på [denna länk](http://www.fileformat.info/info/unicode/char/search.htm) och sök på din symbol i sökfältet. Klicka sedan på ett resultat och kopiera koden efter "HTML entity (decimal)" med &# men *utan* semikolonet. Lägg sedan in koden i en tagg så borde du se symbolen på din sida!

## Mer med border
[Länk till w3](https://www.w3schools.com/CSSref/pr_border-style.asp)

## Ändra stil med hover
Man kan ändra stil beroende på vad användaren gör! Här ska vi ändra färg på en text när vi har musen över den.
``` HTML
<p class="bliGrön">Håll musen över mig!</p>
```
Börja med att ge ett textelement en klass.
```CSS
.bliGrön:hover {
  color: green;
}
```
Sedan använder vi :hover efter klassens namn för berätta för datorn vilka värden vi vill förändra då användaren har musen över elementet. Detta fungerar med andra värden också! Testa att ändra storlek, font och annat!

## Mer med pseudoklasser
Hover är en typ av pseudoklass, alltså klasser som berättar i vilket *tillstånd* ett element är i. I exemplet ovan ville vi att vår text skulle bli grön när vi befann oss i ett tillstånd där användaren hade musen över vår text!

[Läs mer om pseudoklasser](https://www.w3schools.com/css/css_pseudo_classes.asp)

## Klar med alla extrauppdrag?
Om du är klar med alla extrauppdrag får du räcka upp handen och fråga din ledare efter nya uppgifter! Det finns alltid något nytt att göra!




