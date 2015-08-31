---
layout: post

title: Ein &lt;3 für Tiere
author: Eileen
excerpt: Ein Twitterbot macht gerade die Runden.

images:
- imgname: cutepetseverywhere.png

---
## Wie ein Tierheim-Twitterbot zum Vorzeigeprojekt wurde

Als [Drew Wilson][] von Code for America ein Tierpflegeamt in Denver 2014 besuchte, bekam er gleich eine Lektion über den Tierheimbetrieb. Je länger die Tiere im Heim bleiben, desto mehr werden sie gesundheitlich und psychisch belastet, und desto weniger attraktiv für Menschen, die sie adoptieren würden. Deshalb sei es extrem wichtig, den Tieren so schnell wie möglich ein neues Zuhause zu schenken. Dies geschieht unter anderem über eine Website, die Kurzinfos und Photos von den Tieren auflistet.

Doch Drew denkt weiter: wie oft besucht man schon eine Tierheim-Website? Nur wenige von uns verspüren täglich das Bedürfnis, in Not geratene Tiere uns anzusehen. Deshalb sind Tweets besser dafür geeignet. Kurz darauf entstand [CutePetsDenver][], ein Twitterbot, der die Anzeigen von der Tierheim-Website scrapt und in regelmäßigen Abständen einzelne Tiere den Followern vorstellt.

[![cutepetsdenver](/assets/blog/cutepetsdenver.png)](http://codefor.de/cutepetsdenver)

Der Vorteil eines Twitterbots: statt eine einzelne, gute Website zu bauen, die nur unregelmäßig besucht wird, verbreitet man die Information in bereits existierenden Plattformen. Dieses Prinzip lässt sich auch auf andere Projekte übertragen, wie z.B. Müllabfuhrzeiten, Bauprojekte, Feinstaubmessungen. So wird die Information sozial, denn die Nutzer können darauf reagieren. Bald entstanden ähnliche Bots in Bosten, LA, Austin und [vielen weiteren][] Städten. Als Stefan Graf aus Freiburg davon erfuhr, setzte er das ganze auch für die Website [Tierheimhelden][] um. &bdquo;Aktuell wachsen wir durchschnittlich mit ca. 10 Followern pro Woche, ohne das wir großartig etwas an dem Account machen,&ldquo; erzählt uns Stefan.

CutePets ist inzwischen eines von zehn Projekten, das als Teil eines Replikationsmarathons von [DataLook][] vorgestellt wird. Die Teilnehmer haben bis Ende August Zeit, so viele #CivicTech Projekte wie möglich für ihre Stadt anzupassen. Denn es gibt viele durchdachte Anwendungen, die problemlos in mehreren Städten realisiert werden können.

Das hat nun Tobias Gall vom OK Lab Chemnitz aufgegriffen. Über ein Wochenende hat er die Datenbank vom Chemnitzer Tierheim &bdquo;Tierfreunde helfen Tieren in Not&ldquo; für [CutePetsChemnitz][] aufbereitet, nun läuft der Bot auf seinen Raspberry Pi zu Hause. Chemnitz ist damit die erste deutsche Stadt, die im Rahmen des #openimpact Marathons CutePets repliziert hat.

Drew ist zufrieden: &bdquo;Es geht vor allem darum, Programmierern und Administratoren zu zeigen, wie schnell und einfach man mit offenen Daten Nützliches schaffen kann.&ldquo; Das ist auch der Gedanke von DataLook: man will darlegen, wie Daten und Code für gute Zwecke auch mehrfach genutzt werden können. Und die Tiere? Die freuen sich über jeden Besuch, online und offline.

[Tierheimhelden]: https://twitter.com/THH_Tiere
[CutePetsChemnitz]: https://twitter.com/petschemnitz
[Drew Wilson]: https://twitter.com/drewSaysGoVeg
[vielen weiteren]: https://github.com/codeforamerica/CutePets/blob/master/where.geojson
[CutePetsDenver]: https://twitter.com/CutePetsDenver
[DataLook]: http://blog.datalook.io/openimpact-project-shortlist/
