
# Procesverslag
Markdown is een simpele manier om HTML te schrijven.  
Markdown cheat cheet: [Hulp bij het schrijven van Markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet).

Nb. De standaardstructuur en de spartaanse opmaak van de README.md zijn helemaal prima. Het gaat om de inhoud van je procesverslag. Besteedt de tijd voor pracht en praal aan je website.

Nb. Door *open* toe te voegen aan een *details* element kun je deze standaard open zetten. Fijn om dat steeds voor de relevante stuk(ken) te doen.





## Jij

<details open>
  <summary>uitwerken voor kick-off werkgroep</summary>

  ### Auteur:
  Tijn Vrusch

  #### Je startniveau:
  blauw

  #### Je focus:
  responsive
 
</details>





## Je website

<details open>
  <summary>uitwerken voor kick-off werkgroep</summary>

  ### Je opdracht:
  https://www.skatepro.nl/

  #### Screenshot(s) van de eerste pagina (small screen): 
  Home
  <img src="./readme-images/skatepro-home-mobile.PNG" width="375px" alt="homepagina">

  #### Screenshot(s) van de tweede pagina (small screen):
  Contact
  <img src="./readme-images/skatepro-contact-mobile.PNG" width="375px" alt="contactpagina">
 
</details>



## Toegankelijkheidstest 1/2 (week 1)

<details>
  <summary>uitwerken na test in 1e werkgroep</summary>

  ### Bevindingen
  Lijst met je bevindingen die in de test naar voren kwamen:<br>
  - Met de screen reader moet je (door te tabben) eerst langs alle navigatie- en productcategorieënlinks, voordat je bij de main content (producten) van de homepagina komt.<br>
  - De zoekbalk bovenaan de pagina kan niet geselecteerd/gefocust worden door te navigeren met tab.
  
  #### Screenreader
  Hier korte omschrijving (met indien nodig afbeeldingen)<br>
  - Het duurt extreem lang om door alle links heen te navigeren om bij de (belangrijkste) content te komen.<br>
  Hier een omschrijving van hoe het opgelost kan worden (met indien nodig afbeeldingen)
  - Een content skip link bovenaan de website die ervoor zorgt dat je de onnodige links over kan slaan.<br>
  - Misschien de navigatiebalk niet bovenaan de pagina zetten, ookal is dat voor 'normale' gebruikers niet optimaal, het is een workaround.<br>

  #### Muis en Toetsenbord 
  Hier korte omschrijving (met indien nodig afbeeldingen)
  - Met muis en toetsenbord is de website goed te gebruiken zonder grote problemen.<br>
  - Sommige links (bv die aan de linker navbar) zijn relatief klein in verhouding tot de rest van de website, wat de leesbaarheid een beetje kan beperken.<br>
  Hier een omschrijving van hoe het opgelost kan worden (met indien nodig afbeeldingen)


  #### Motoriek (shocks, elastiekjes)
  Hier korte omschrijving (met indien nodig afbeeldingen)<br>
  - Als iemand bv parkinson's heeft (of in ieder geval 2 trillende armen/handen) kan het erg lastig zijn om de cursor goed te bedienen met de touchpad of een muis. Als de trillingen heel heftig zijn, kan het ook dat gebruik van het toetsenbord problemen geeft als verkeerde toetsaanslagen.<br>
  - Als sommige vingers niet goed te bewegen zijn of meetrillen, kan het ook lastiger zijn om een website op je mobiele telefoon te gebruiken. Zo'n klein scherm met kleine links en buttons. <br>
  Hier een omschrijving van hoe het opgelost kan worden (met indien nodig afbeeldingen)
  - Knoppen en links groter maken, zodat de x- en y-verschuiving van de trillingen er niet meer voor zorgen dat je naar de knop/link klikt.<br>
  - Mobiele (en misschien ook tablet) website grotere buttons en links geven. 

  #### Visueel (brillen, contrast, kleurenblind, dark/light). 
  Hier korte omschrijving (met indien nodig afbeeldingen)
  Diabetes bril: <br>
  - Het lijkt wel alsof er allemaal sneeuwvlokjes voor mijn ogen zitten. Het is erg lastig om kleine letters te lezen zonder mijn hoofd mee te bewegen.
  - Het is lastig om het overzicht te houden over de hele website, doordat bijna overal het gezichtsbeeld<br>
  - Ook is het heel lastig om met je ogen grote afstanden af te leggen (helemaal van de linker- naar de rechterkant van de pagina bijvoorbeeld).
  Tunnel vision bril:<br>
  - Je hele gezichtsveld wordt zwart behalve een heel klein puntje in het midden van elk ook. Dit maakt het bijna onmodgelijk om snel dingen te vinden en overzicht te houden op de website. <br>
  Hier een omschrijving van hoe het opgelost kan worden (met indien nodig afbeeldingen)
  - Zorgen dat tekst groot genoeg is om duidelijk leesbaar te zijn voor mensen met zichtproblemen door diabetes (ook niet te groot, want dan is het lastig te lezen).
  
</details>



## Breakdownschets (week 1)

<details>
  <summary>uitwerken na afloop 2e werkgroep</summary>

  ### de hele pagina: 
  <img src="./readme-images/schets.jpg" width="375px" alt="breakdown van de hele pagina">

  <img src="./readme-images/skatepro-home-mobile.PNG" width="375px" alt="breakdown van de hele pagina">

  ### dynamisch deel (bijv menu): 
  <img src="./readme-images/skatepro-hamburger-nav.png" width="375px" alt="breakdown van een dynamisch deel">

  <!-- ### wellicht nog een dynamisch deel (bijv filter):  -->
  <!-- <img src="readme-images/dummy-plaatje.jpg" width="375px" alt="breakdown van nog een dynamisch deel"> -->

</details>

<details>
<summary>
Bevindingen symposium 12 september
</summary>
- Skip to content link voor mensen die dmv screen readers de site gebruiken (dit kan als eerste linkje in de footer helemaal bovenaan de pagina, zodat je er meteen komt als je op tab drukt).<br>
- Het is belangrijk om goede, semantisch correcte HTML te schrijven voordat je doorgaat naar de CSS. Anders zul je later je CSS weer opnieuw aan moeten passen nadat je je HTML gefixt hebt. <br>
- Geen onnodige alt-text achter afbeeldingen (of andere items), en als je wel alt-text gebruikt moet die zo relevant mogelijk is. Zo blijft de website toegankelijk voor mensen die bijvoorbeeld slechtziend zijn en de site alleen kunnen gebruiken als screen reader.<br>
- Vaak kun je, door de toegankelijkheid voor een specifieke doelgroep een veel grotere doelgroep bereiken van mensen die vergelijkbare problemen hebben oid, en dus (in mindere mate) dezelfde gebruikersproblemen ervaren. <br>
- Ik merkte op dat de website van SkatePro.nl verandert naar de desktop versie van de site bij een schermbreedte van 1250px;

</details>



## Voortgang 1 (week 2)

<details>
  <summary>uitwerken voor 1e voortgang</summary>

  ### Stand van zaken
  Ik heb mijn basiskennis van HTML en CSS al aardig opgeschroefd. Flexbox en grids maken nu eindelijk sense door de handige oefensites Flexbox Froggy en Grid Garden!
  Ik wil deze week ook aan de slag gaan met FlukeOut om mijn kennis over selectors te testen en uit te breiden.<br>
  Tot nu toe heb ik deze nieuwe manieren geleerd om selectors toe te passen: p > a & p + a.<br>
  Ik hoorde dat we vanaf volgende week aan de slag gaan met JavaScript. Daar ben ik nu nog helemaal niet goed in, dus dat kan nog wel eens intimiderend worden. Het is echter wel belangrijk dat ik (in ieder geval) een redelijke fundering leg voor simpele dingen in JS. Dit helpt ook om een gevoel en inzicht te krijgen in programmeren in zijn algemeenheid en zal het makkelijker maken om nieuwe computertalen op te pakken die complexer zijn zijn JavaScript, maar wel gebruikmaken van vergelijkbare patronen of inzichten.


  ### Agenda voor meeting
  samen met je groepje opstellen

  | student 1      | student 2          | student 3     | student 4                |
  | Bente          | Ryan               | Lisa          | Tijn                     |
  | HTML accessible| Voortgang          | Voortgang     | hamburger menu uitklappen|
  | maken. + iets  |                    |               | / JavaScript basics      |
  | specifieks     | ...                | ...           | ...                      |


  ### Verslag van meeting
  hier na afloop snel de uitkomsten van de meeting vastleggen

  - ik heb wat tips  gekregen voor hoe ik beter mijn sections kon indelen, ik had eerst overal waar ik flexbox of grid gebruikte een ul met een li erin maar dat bleek helemaal niet nodig te zijn.
  - er stond een dubbele selector in mijn code waardoor de hele header ineens niet meer werkte, thanks to de hulpstudenten voor het vinden van de fout!
  - ik moet nog veel doen aan de main content area van de pagina, maar ik wil het liefst eerst de header (bijna) af hebben voordat ik doorga, om dubbel werk te voorkomen als ik zometeen aan de contactpagina begin.

</details>





## Voortgang 2 (week 3)

<details>
  <summary>uitwerken voor 2e voortgang</summary>

  ### Stand van zaken
  hier dit ging goed & dit was lastig (neem ook screenshots op van delen van je website en code)

- Ik doe op de een of andere manier iets fout bij het linken naar mijn img elementen. Verder moet er nog veel gebeuren aan mijn website. <br>
- Ik moet nog veel doen aan mijn basic CSS indeling, maar ik boek wel goeie progressie met de navbar. Die werkt nu volledig responsive met een zoekbalk die meebeweegt en een hamburger die verdwijnt op desktop size. <br>
- Ik wil, als ik de CSS wat beter gefixt heb, een auto dark mode en een hamburger menu met animaties toevoegen <br>

  ### Agenda voor meeting
  samen met je groepje opstellen

  | student 1      | student 2          | student 3       | student 4        |
  | Tijn           | ---                | ---             | ---              |
  | images links?  | en dit             | en ik dit       | en dan ik dat    |
  | href > ./?     | dit als er tijd is | nog een punt    | dit wil ik zeker |
  | ...            | ...                | ...             | ...              |

Doe/begrijp ik iets verkeerd met semantisch correct tabben? In product blokjes komt het niet uit.



</details>





## Toegankelijkheidstest 2/2 (week 4)

<details>
  <summary>uitwerken na test in 8e werkgroep</summary>

  ### Bevindingen
  Lijst met je bevindingen die in de test naar voren kwamen (geef ook aan wat er verbeterd is):

  Mijn site werkt nu al veel beter met een screen reader / tab dan de originele site. Het was bij het origineel vrijwel onmogelijk om door het navigatiemenu te tabben, om bij de rest van de website te komen. Zo moeten mensen zonder een muis (of met een beperking) eerst super lang luisteren naar allemaal onnodige linkjes in de navbar, voordat ze bij de content van de pagina aankomen. 


  #### Screenreader
  Hier korte omschrijving (met indien nodig afbeeldingen)

  Hier een omschrijving van hoe het opgelost kan worden (met indien nodig afbeeldingen)

  Ik merkte al snel dat mijn afbeeldingen (zowel het logo als de menu buttons en de productfoto's) geen (juiste) alt-text hebben. Een screen reader zou dan de volledige naam van de afbeeldingen voorlezen ipv alleen de nuttige alt-text. 

  #### Muis en Toetsenbord 
  Hier korte omschrijving (met indien nodig afbeeldingen)

  Hier een omschrijving van hoe het opgelost kan worden (met indien nodig afbeeldingen)

  Ik heb, om de navigatie van de website gemakkelijker te maken voor beperkte gebruikers, een skip link button toegevoegd bovenaan mijn HTML. Deze link is automatisch verborgen (uit het scherm getransleerd), totdat je begint met tabben en de link dus focus krijgt. Wanneer je dan vervolgens op Enter drukt, skip je naar de main content van de pagina.

  #### Motoriek (shocks, elastiekjes)
  Hier korte omschrijving (met indien nodig afbeeldingen)

  Hier een omschrijving van hoe het opgelost kan worden (met indien nodig afbeeldingen)

  Shocks (of elastiekjes) maken een groot verschil in de behendigheid van iemand's handen en vingers. Bij lichte shocks of trillingen is het vaak nog wel mogelijk (ookal is het omslachtig) om het toetsenbord te gebruiken als tekst input en link / button navigation. 
  Gebruik van een muis of touchpad is in mijn beleving als helemaal lastig, voor sommigen zelfs vrijwel onmogelijk. Het lijkt me daarom voor de meeste mensen die motorisch beperkt zijn (trillingen, schokjes whatever) erg belangrijk dat de website toegankelijk genoeg is om goed te kunnen navigeren met een screen reader of tab.


  #### Visueel (brillen, contrast, kleurenblind, dark/light). 
  Hier korte omschrijving (met indien nodig afbeeldingen)

  Hier een omschrijving van hoe het opgelost kan worden (met indien nodig afbeeldingen)

  Het is met die tunnel vision bril vrijwel onmogelijk om je cursor te vinden op het scherm. Het zou misschien helpen als mensen die op deze manier slechtziend zijn een grotere cursor te zien krijgen zodat ze iets makkelijker kunnen zien waar ze nu bezig zijn. Verder zullen ze uiteraard zoveel mogelijk gebruikmaken van tab, als alternatieve manier om de links / buttons van de pagina af te gaan. 

</details>





## Voortgang 3 (week 4)

<details>
  <summary>uitwerken voor 3e voortgang</summary>

  ### Stand van zaken
  hier dit ging goed & dit was lastig (neem ook screenshots op van delen van je website en code)


  ### Agenda voor meeting
  samen met je groepje opstellen

  | student 1      | student 2          | student 3    | student 4        |
  | ---            | ---                | ---          | ---              |
  | dit bespreken  | en dit             | en ik dit    | en dan ik dat    |
  | en dat ook nog | dit als er tijd is | nog een punt | dit wil ik zeker |
  | ...            | ...                | ...          | ...              |


  ### Verslag van meeting
  hier na afloop snel de uitkomsten van de meeting vastleggen

  - Ik ben goed op weg, de header is het lastigste deel en daar ben ik bijna klaar mee.
  - Ik moet nog een auto dark mode (misschien met een knop als dat lukt), een tweede pagina, betere content en een hamburger menu met animatie toevoegen.
  - Verder moet ik nog een aantal kleine puntjes op de i zetten zoals dat ik ergens niet goed ingesprongen heb.
  

</details>





## Eindgesprek (week 5)

<details>
  <summary>uitwerken voor eindgesprek</summary>

  ### Je uitkomst - karakteristiek screenshots:
  <img src="./readme-images/screenshot-home.png" width="375px" alt="uitkomst opdracht 1">
  <img src="./readme-images/screenshot-contact.png" width="375px" alt="uitkomst opdracht 1">


  ### Dit ging goed/Heb ik geleerd: 
  
  - Toegankelijkheid: De buttons en zoekbalk zijn gemakkelijk te vinden met tab én je kunt zelfs naar de content van de pagina skippen met een skiplink. Ik heb bij de kleurkeuze ook rekening gehouden met een hoog contrast voor onder andere slechtzienden. Ik heb nu ook een beter beeld van wat je als ontwerper kunt doen om mensen met bepaalde beperkingen te helpen en na de toegankelijkheidstesten in de les begrijp ik ook beter tegen wat voor problemen deze mensen aan zullen lopen. Ook heb ik er bijvoorbeeld voor gekozen dat hele footer klikbaar is, en niet alleen het kruisje rechtsboven. 
  - Responsiveness: Ik ben erg trots op hoe responsive ik mijn website heb kunnen maken met behulp van flexbox. Ik heb deze 5 weken echt super veel geleerd, vooral over flexbox, grid, positioning, states en media queries (en ik snap nu vooral ook hoe je   min-width en max-width gebruikt voor responsiveness op alle apparaten)!
  - Dark mode: Na veel experimenteren met de header kleur in dark mode had ik bedacht dat ik de PNG's van de buttons in mijn header kan inverten, zodat de zwarte icoontjes wit zouden worden en de zoekbalk (en zijn border) ook goed aan zouden sluiten bij de rest van de dark mode styling van de pagina. Ik ging googlen en vond al snel dat je met filter: invert(1) een afbeelding, en zelfs een input veld en zijn border, kunt inverten.
  - Animaties: Ik heb de oh zo fijne site https://cubic-bezier.com/ ontdekt en snap nu de basics van hoe je bewegende transitions maakt in CSS. Ik heb bijvoorbeeld de animatie timing van mijn hamburger uitschuifmenu bewust afgestemd op de draai van het hamburger icoontje, zodat het menu pas uitschuift als het icoontje snel gaat draaien. Voor dit blok kon ik nog niets met CSS animaties. 
  - JavaScript: ik begrijp nu hoe je via JS een class aan een element toevoegt, verwijdert of togglet. Ik snap hoe je variabelen definieert (en verandert) en hoe je een eventListener toevoegt, maar voor de rest is JavaScript nog steeds een enge zee aan code waar ik nog weinig van begrijp.
  - Verder heb ik een aantal kleine syntax dingetjes en denkfoutjes in mijn hoofd kunnen fixen, waardoor ik van die onzinnige foutjes maakte zoals het vergeten van een spatie in een selector omdat ik eerst niet eens wist dat die spatie uitmaakte. Ondanks dat dit blok zo snel ging, heb ik echt het gevoel dat ik veel beter ben geworden ik zowel het begrijpen van code als het schrijven zelf. Ik voel me nu zonder twijfel een betere webdeveloper, zeker rode piste niveau. Aan het begin van dit blok leek wat ik nu allemaal kan onmogelijk, maar ik ben heel blij met hoe dit korte blok uitgepakt heeft.
  



  <img src="./readme-images/dummy-plaatje.jpg" width="375px" alt="top">


  ### Dit was lastig/Is niet gelukt:
  Korte omschrijving met plaatjes <br>
  - Ik heb uren, maar dan ook uren (ik denk wel 6 uur) gestruggled met één klein probleem: op de contactpagina kwamen de form fields om de een of andere reden steeds voor het hamburger menu als die uitgeklapt is, alsof hij een grotere z-index heeft o.i.d. Na uren proberen, tevergeefs googlen, klasgenoten vragen, kwam ik erachter dat het in mijn inspector ineens werkte als de filter: invert(1) én transform:translateX(0) allebei uit stonden... Ik had hiervoor al mijn hele code in stukken commentaar gemaakt om te kijken of ik op die manier de fout kon vinden, maar deze 2 properties stonden op een heel andere plek in het document...
  - Een dark mode button toevoegen, hier liep ik stuk op de JavaScript. Ik denk dat ik qua HTML / CSS nu zeker wel op rood niveau zit, maar met JS kom ik nog niet veel verder dan dat ene trucje met classList.toggle. Lijkt me wel leuk om binnenkort op te pakken, want ik zie wel in hoe belangrijk (en leuk) het is als je een pagina nog interactiever kan maken.
  - Ik wilde misschien ook nog iets toevoegen als een coole image flip, lasers, of bijvoorbeeld een animatie als je op een + knopje klikt, maar daar ben ik uiteindelijk niet aan toegekomen. 

  <img src="./readme-images/IMG_0700.jpg" width="375px" alt="bummer">
</details>





## Bronnenlijst

<details open>
  <summary>continu bijhouden terwijl je werkt</summary>

  Nb. Wees specifiek ('css-tricks' als bron is bijv. niet specifiek genoeg).

  1. Cubic Bezier https://cubic-bezier.com/
  2. CSS Tricks: Flexbox https://css-tricks.com/snippets/css/a-guide-to-flexbox/
  3. CSS Tricks: Grid https://css-tricks.com/snippets/css/complete-guide-grid/
  4. CSS: filter: invert(1); https://developer.mozilla.org/en-US/docs/Web/CSS/filter-function/invert
  5. Flexbox Froggy (UITGESPEELD) https://flexboxfroggy.com/
  6. Grid Garden (UITGESPEELD) https://cssgridgarden.com/
  7. w3schools: shadows https://www.w3schools.com/css/css3_shadows.asp

</details>
