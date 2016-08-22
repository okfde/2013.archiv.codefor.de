---
layout: post
title: Refugee Datathon in München, der zweite
author: Suny
tags:
- Aus den Labs
excerpt: Am 18. Juni stieg der zweite Refugee Datathon in München. Diesmal im WERK1 gemeinsam von Welcome Help e.V. und OK Lab München veranstaltet.
---

<p>Es wurde konzentriert gearbeitet! Die Ergebnisse sind:</p>
<ol>
<li>&nbsp;Vergleich von Schutzquoten über die Länder Europas. Wir fanden auffälllige Unterschiede für Afghanistan und Pakistan.<br>
Quelle: Eurostat<br>
Tool: Excel</li>
<li>Visualisierung: Eine viel bessere Darstellung als unser bisheriges Histogramm. Als skalierbare Vektorgrafik (SVG), jetzt sind die verschiedenen Quoten direkt vergleichbar, und die absoluten Zahlen werden als Fläche dargestellt.&nbsp;<a class="linkified" title="https://github.com/muc-fluechtlingsrat/data-visualization/blob/master/2016_01_Protection_Rates_BC.svg" href="https://github.com/muc-fluechtlingsrat/data-visualization/blob/master/2016_01_Protection_Rates_BC.svg" target="_blank" rel="nofollow">https://github.com/muc-fluechtlingsrat/data-visualization/blob/master/2016_01_Protection_Rates_BC.svg</a>.<br>
Quelle: Ergebnisse des Datathon 1.<br>
Tool: R</li>
<li>Alarmierung per email, wenn das BAMF neue Asylgeschäftsstatistiken hochlädt. Als crawler, nachdem der „RSS-Feed-Nachbau“ nicht : <a class="linkified" title="https://github.com/muc-fluechtlingsrat/bamf-thats-new" href="https://github.com/muc-fluechtlingsrat/bamf-thats-new" target="_blank" rel="nofollow">https://github.com/muc-fluechtlingsrat/bamf-thats-new</a>.<br>
Tool: Php, und mit Host für Cronjob und email-Versand</li>
<li>Rohdaten der Entscheidungen über Asylanträge in Deutschland, alle Herkunftsländer, monatlich vom&nbsp;Januar 2015 bis April 2016. <a class="linkified" title="https://github.com/muc-fluechtlingsrat/bamf-asylgeschaeftsstatistik/tree/master/raw" href="https://github.com/muc-fluechtlingsrat/bamf-asylgeschaeftsstatistik/tree/master/raw" target="_blank" rel="nofollow">https://github.com/muc-fluechtlingsrat/bamf-asylgeschaeftsstatistik/tree/master/raw</a><br>
Quelle: BAMF, Antwort auf unsere fragdenstaat.de-Frage des Datathon 1<br>
Tools: Tabula, Unix Tools<br>
Resultate:&nbsp;<a href="https://refugee-datathon-muc.org/syrien-immer-mehr-subsidiaerer-schutz-statt-fluechtlingsschutz/">Syrien: Immer mehr subsidiärer Schutz statt Flüchtlingsschutz</a></li>
</ol>
<p>Und ein Ergebnis der Vorbereitung war, dass die Zahlen zum Easy-Gap bereits aufgearbeitet wurden. Einen Beitrag dazu gibt es hier:&nbsp;<a href="https://refugee-datathon-muc.org/das-easy-gap/">Das EASY-Gap</a>
