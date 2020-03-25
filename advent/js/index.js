$( document ).ready(function() {

  var contents = [
    [ "1982884-200", 
      "Weihnachtsmärkte in Münster",
      "Eine kleine Webapp, mit der man den Münsteraner Weihnachtsmarkt durchsuchen kann.",
      "https://weihnachtsmarkt.ms/"
    ], 
    [ "tram-200",
      "Rette Deinen Nahverkehr",
      "Eine Aktion der Open Knowledge Foundation Deutschland e.V. zur Förderung Offener ÖPNV-Daten.",
      "https://rettedeinennahverkehr.de/"
    ], 
    [ "kleineanfrage-200",
      "kleine Anfragen",
      "Sogenannte “kleine Anfragen” von Parlamentariern müssen von ihrer jeweiligen Regierung zeitnah und öffentlich beantwortet werden. Diese Seite sammelt solche Anfragen, weil in den Antworten oft interessante Details stecken, und versucht sie auffindbar, durchsuchbar und verlinkbar zu machen.",
      "https://kleineanfragen.de/"
    ],  
    [ "train-200",
      "Bahn-Preiskalender",
      "Klein aber Oho!: mit dieser App kannst du herausfinden, an welchen Tagen es am günstigsten ist, mit der Bahn zu fahren.",
      "https://bahn.guru/"
    ], 
    [ "town-200",
      "Politik Bei Uns",
      "Politik bei uns macht die Politik vor Ort transparenter. Dazu werden Informationen und öffentliche Dokumente werden aus den Ratsinformationssystemen der Städte und Kommunen ausgelesen und in einer übersichtlichen und strukturierten Form präsentiert.",
      "https://politik-bei-uns.de/"
    ], 
    [ "farmshops-200",
    "Hofladen-Karte farmshops.eu",
    "farmshops.eu hilft dabei Wochenmärkte, Hofläden, Imker, bäuerlichen Milch, -Eier- oder Essensautomaten und vielen andere Direktvermarktern in Deiner Region zu finden.",
    "https://farmshops.eu/"
    ],
    [ "radquartier-200",
    "Radlquartier München",
    "Im Rahmen des Projekts wurden Offene Daten zur Nutzung von Leihrädern in München erfasst, ausgewertet und visualisiert. Ergebnisse von diesem und ähnlichen Studien können für Stadtplanung von Bedeutung sein, zum Beispiel um das Radwegenetz gezielt bedarfsgerecht auszubauen.",
    "https://codeformunich.github.io/radlquartier/"
    ],
    [ "leitungswasser-200",
    "Was steckt in meinem Leitungswasser?",
    "Code For Heilbronn entwickelte diese Webanwendung, um die Daten zur Trinkwasserqualität, die von Stadtwerken erhoben werden, den Bürgerinnen und Bürgern verfügbar zu machen. Die Daten sind übersichtlich und ansprechend aufbereitet und nach Einzugsgebieten sortiert. Auch kann man hier den Mineraliengehalt des Leitungswassers mit Mineralwasser aus dem Handel vergleichen.",
    "http://opendatalab.de/projects/trinkwasser/"
    ],
    [ "luftdaten-200",
    "luftdaten.info",
    "Inzwischen eins der größten CivicTech Projekte weltweit, geboren im OK Lab Stuttgart. Mithilfe von Sensoren, die auch ein Laie leicht zusammenbauen und an die Seite anschließen kann, werden Daten zur Feinstabbelastung der Luft erfasst und live auf einer Karte visualisiert. Über eine Schnittstelle lassen sich weitere Apps anbinden.",
    "https://luftdaten.info/"
    ],
    [ "ernte-200",
    "Ernte teilen",
    "Ernte-teilen.org bietet eine Plattform, die Landwirte und Verbraucherinnen, die sich an Solidarischer Landwirtschaft beteiligen möchten, zusammenfinden lässt.",
    "https://ernte-teilen.org/"
    ], 
    [ "baustelle-200",
    "Bürger baut Stadt",
    "Bei der Stadplanung in Deutschland müssen Bürger mit einbezogen werden. Hierfür müssen geplante Änderungen von Bebauungsplänen veröffentlicht werden, so dass Bürger sich beteiligen können. Diese Plattform versucht, alle verfügbaren Daten zusammenzubringen und die Vorhaben auf einer Karte zu verorten.",
    "https://buergerbautstadt.de/"
    ], 
    [ "stolpersteine-200",
    "Stolpersteine App",
    "Stolpersteine sind kleine Gedenktafeln im Straßenpflaster zur Erinnerung an die Opfer des Nationalsozialismus. Mehr als 50.000 davon hat der Künstler Gunter Demnig mittlerweile in ganz Europa verlegt. Mit dieser App haben Sie schnell und einfach Zugriff auf die Daten der rund 6.000 Stolpersteine in Berlin.",
    "https://codefor.de/projekte/2014-04-30-stolpersteine-app.html"
    ], 
    [ "moers-200",
    "Mein Moers App",
    "Die aus Offenen Daten basierte mobile App bündelt Informationen zu Geschäftsöffnungszeiten, Parkplätzen, Events und Neuigkeiten aus Moers. Die App kann den Nutzer an Müllabholung erinnern und bietet auch schicke Features wie 360°-Panoramen von Plätzen und Geschäften. Neben der moersfestival-App des selben Entwicklers erfreut sich dieses Werk aus dem OK Lab Niederrhein großer Beliebtheit.",
    "https://itunes.apple.com/de/app/mein-moers/id1305862555?mt=8"
    ], 
    [ "treebank-200",
    "Großstadt-Baum",
    "In Berlin stehen über 1 Million Bäume. Thomas Tursics hat den typischen Berliner Baum gesucht und unterhaltsam in einem Quiz aufbereitet.",
    "http://tursics.de/story/grossstadt-baum/"
    ],
    [ "kastanie-200",
    "KastanienApp",
    "Vor ein paar Monaten hat die Stadt Hamburg auf ihrem Transparenzportal das Baumkataster als Open Data veröffentlicht. Passend zur Zeit der Herbstsparziergänge drängte sich uns bei einem Code For Heilbronn Treff die Idee einer Baum App auf, die einem ermöglicht, unterwegs leicht Kastanienbäume zu finden und deren Früchte zu sammeln. Die App ermöglicht aber auch allgemein, für jeden Baum in Heilbronn Informationen wie Art, lateinischer Name und Alter abzufragen. Somit kann unterwegs die Frage, was für ein Baum vor einem steht, dank Standorterkennung mit dem Smartphone ganz leicht beantwortet werden.",
    "https://codefor.de/projekte/2014-11-29-hn-kastanienapp.html"
    ], 
    [ "offenerhaushalt-200",
    "OffenerHaushalt",
    "Das Projekt Offener Haushalt visualisiert intuitiv verständlich die Haushalte von Bund, Ländern, Kommunen und anderen Institutionen, soweit sie in maschinenlesbarer Form vorliegen. Checke doch mal, ob dein Wohnort bereits dabei ist!",
    "https://offenerhaushalt.de/"
    ],
    [ "weihnachtsmarkt-200",
    "Weihnachtsmärkte in Berlin, Brandenburg, Moers und Krefeld",
    "Finde alle Weihnachtsmärkte in Berlin und Brandenburg: Die großen, die kleinen, die bunten, die lebhaften, die besinnlichen und die Geheimtipps. Alle in einer App.",
    "http://www.tursics.de/xmasmarkets/de/"
    ], 
    [ "school-200",
    "Wie kaputt ist Ihre Schule?",
    "Die Anwendung zeigt das Ergebnis des Gebäudescans, also der gemeldete Sanierungsbedarf bei Schulgebäuden (Stand: 30.06.2016). Die Daten stammen von der Senatsverwaltung für Bildung, Jugend und Wissenschaft.",
    "http://schulsanierung.tursics.de/"
    ],
    [ "treebear-200",
    "Bäume-Karte Berlin",
    "Die Bäume-Karte aus Berlin zeigt alle auf der OpenStreetMap kartierten Bäume der Stadt.",
    "https://trees.codefor.de/"
    ],
    [ "hexagon-200",
    "Datenwaben",
    "Noch ein Projekt aus der Hand von Thomas Tursics von Code For Berlin. In Form von Waben werden aktuelle Infos aus verschienenen offenen Datenquellen dargestellt.",
    "http://datenwaben.de/?city=vienna&page=cards"
    ],
    [ "waiting-200",
    "Wartezeiten in Moers",
    "Die voraussichtlichen Wartezeiten im Bürgerbüro der Stadt Moers sind aus den Erfahrungswerten kalkuliert. So kann man abschätzen, wann es wahrscheinlich am schnellsten vorangeht und entsprechend dann den Rathausgang erledigen.",
    "http://wartezeit.tursics.de/"
    ], 
    [ "deutschland-200",
    "Open Data Atlas",
    "Der Open Data Atlas zeigt, welche Länder, Kommunen und andere Institutionen ein Open Data Portal anbieten. Gut für den Überblick alles Datenenthusiasten!",
    "http://opendata.tursics.de/?page=Data&level=all&dataset=portals&country=DE&lat=52.516&lng=13.4795&zoom=6"
    ],
    [ "woistmarkt-200",
    "Wo ist Markt",
    "Die Web-App zeigt alle Märkte in deiner Stadt / Region. Auf Basis offener Datensätze der Städte werden die Märkte anschaulich auf einer Karte platziert.",
    "https://wo-ist-markt.de/"
    ],
    [ "fragdenstaat-200",
    "FragDenStaat",
    "Jede Person hat das Recht auf Informationen. FragDenStaat hilft Ihnen, Ihr Recht wahrzunehmen. Fragen Sie über diese gemeinnützige Plattform Behörden in Deutschland nach Informationen und Dokumenten! ",
    "https://fragdenstaat.de/"
    ], 
    [ "X-200",
    "Dein Projekt",
    "Jede Woche treffen sich in ganz Deutschland Teams zu ihren Projekten für Code for Germany. Sie arbeiten gemeinsam an nützlichen Anwendungen und Visualisierungen rund um offene Daten und digitale Werkzeuge für Bürgerinnen. Diese lokalen Gruppen nennen wir Labs. Wenn Du eine Idee für ein Projekt hast dann schau auf codefor.de wo es in deiner Nähe ein Lab gib.",
    "https://codefor.de/"
    ]];
 console.log("test");
  var message = "";
  var date = new Date();
  var day = date.getDate();
  var month = date.getMonth() + 1;
  var scrolled = false;
  var timeDelay = 200;

  // function to reveal message
  var cardReveal = function() {

  }  

  // check if current day was overridden manually
  var override = location.search
  if (override) {
    var found = override.match(/day=(\d+)/)
    console.log("Manual override of day:", found[1])
    month=12;day=parseInt(found[1])
  }

  // Only work in December
  if(month === 12) {
    // Loop through each calendar window
    $("li").each( function( index ) {
      var adventwindow = index + 1;
      var item = $(this);

      // Open past windows
      if( day !== adventwindow && adventwindow < day ) {
        window.setTimeout(function(){
          item.children(".door").addClass("open");
        }, timeDelay);
      }

      // timeout offset for past window opening animation
      timeDelay += 100;

      // Add content
      var content = contents[index];
      var iconcode = content[0];
      var headline = content[1];
      var description = content[2];
      var link = content[3];

      if( adventwindow <= day ) {
        $(this).append('<div class="revealed"><img src="img/' + iconcode + '.png" /></div>');
      }

      // Add jiggle animation to current day window
      if(adventwindow === day) {
        $(this).addClass("current");
        $(this).addClass("jiggle");
      }

      // On clicking a window, toggle it open/closed and
      // handle other things such as removing jiggle and 25th
      $(this).on("click", function() {
        if(adventwindow <= day) { 

          if ($(this).children(".door").hasClass('open')) {
            $('#js-overlay-content').html(
              '<h1>'+headline+'</h1><p>' 
              + description 
              + '</p><br /><a target="_blank" href="' + link + '">Hier gehts zum Projekt &gt;&gt;<br />'
              + '<img src="img/' + iconcode + '.png" /></a>'
            );

            novicell.overlay.create({
              'selector': '#js-overlay-content',
              'class': 'selector-overlay',
            });
          } else {
            $(this).children(".door").toggleClass("open");
          }
        
 
          $(this).removeClass("jiggle");

          // If 25th, can show the message
          if(day >= 25 && adventwindow === 25) {
            messageReveal();

            // Animate scroll to message if not already done
            if(!scrolled) {
              $('html, body').animate({
                scrollTop: $("#message").offset().top
              }, 2000);
              scrolled = true;
            }
          }
        }
      });

    });

    // If beyond 24, show message
    if(day >= 26){
      messageReveal();
    }

  }

});
