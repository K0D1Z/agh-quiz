// Baza pytań — Elementy Fizyki Współczesnej (EFW)
// 200 pytań jednokrotnego i wielokrotnego wyboru z pełnymi wyjaśnieniami.
const questionDatabase = [
  {
    "id": 1,
    "category": "1. Mechanika kwantowa I — podstawy i model Bohra",
    "text": "Które z poniższych zagadnień NIE należało do trzech głównych problemów fizyki klasycznej pod koniec XIX wieku omawianych na wykładzie?",
    "options": [
      {
        "text": "Poszukiwanie hipotetycznego eteru jako ośrodka rozchodzenia się fal świetlnych.",
        "isCorrect": false
      },
      {
        "text": "Niezgodność równań Maxwella z klasycznymi transformacjami układu Galileusza.",
        "isCorrect": false
      },
      {
        "text": "Katastrofa w nadfiolecie w opisie widma promieniowania ciała doskonale czarnego.",
        "isCorrect": false
      },
      {
        "text": "Niezgodność drugiej zasady termodynamiki z wynikami kinetycznej teorii gazów.",
        "isCorrect": true
      }
    ],
    "explanation": "Pod koniec XIX wieku kryzys fizyki klasycznej dotyczył trzech zagadnień: problemu eteru (rozwiązanego przez doświadczenie Michelsona-Morleya i STW), braku niezmienniczości równań Maxwella względem transformacji Galileusza (rozwiązanego przez transformację Lorentza) oraz katastrofy w nadfiolecie (rozwiązanej przez hipotezę kwantową Plancka). Termodynamika i kinetyczna teoria gazów święciły wówczas triumfy i nie stanowiły tego kryzysu."
  },
  {
    "id": 2,
    "category": "1. Mechanika kwantowa I — podstawy i model Bohra",
    "text": "Jaki kluczowy wniosek fizyczny wynikał bezpośrednio z doświadczenia Michelsona-Morleya z 1887 roku?",
    "options": [
      {
        "text": "Hipotetyczny eter nie istnieje, a światło rozchodzi się w próżni bez ośrodka.",
        "isCorrect": true
      },
      {
        "text": "Prędkość światła w próżni zmienia się wyraźnie wraz z kierunkiem ruchu Ziemi.",
        "isCorrect": false
      },
      {
        "text": "Promieniowanie elektromagnetyczne wymaga sprężystego eteru w całej przestrzeni.",
        "isCorrect": false
      },
      {
        "text": "Równania elektrodynamiki Maxwella są niezmiennicze w transformacji Galileusza.",
        "isCorrect": false
      }
    ],
    "explanation": "Doświadczenie Michelsona-Morleya miało wykryć tzw. wiatr eteru, czyli różnicę prędkości światła w różnych kierunkach względem ruchu Ziemi. Wynik negatywny pokazał, że eter nie istnieje, co utorowało drogę Szczególnej Teorii Względności Einsteina (1905), w której prędkość światła w próżni $c$ jest stała we wszystkich układach inercjalnych."
  },
  {
    "id": 3,
    "category": "1. Mechanika kwantowa I — podstawy i model Bohra",
    "text": "W jaki sposób powstaje ciągłe widmo promieniowania rentgenowskiego (Bremsstrahlung) w lampie rentgenowskiej?",
    "options": [
      {
        "text": "Przez gwałtowne hamowanie rozpędzonych elektronów w polu elektrostatycznym jąder anody.",
        "isCorrect": true
      },
      {
        "text": "Przez przeskoki elektronów z wyższych powłok na luki w wewnętrznych powłokach atomów.",
        "isCorrect": false
      },
      {
        "text": "Przez zderzenia swobodnych jonów dodatnich z rozgrzanym żarnikiem metalowej katody.",
        "isCorrect": false
      },
      {
        "text": "Przez samorzutny rozpad promieniotwórczy ciężkich jąder izotopów umieszczonych w anodzie.",
        "isCorrect": false
      }
    ],
    "explanation": "W lampie rentgenowskiej elektrony wyemitowane z katody przyspieszane są wysokim napięciem $U$ w stronę anody (antykatody). Gdy gwałtownie hamują w polu elektrycznym jąder atomowych anody, tracą dowolną część energii kinetycznej, emitując fotony o ciągłym rozkładzie długości fal — jest to promieniowanie hamowania (Bremsstrahlung). Przeskoki między powłokami dają natomiast widmo charakterystyczne (liniowe)."
  },
  {
    "id": 4,
    "category": "1. Mechanika kwantowa I — podstawy i model Bohra",
    "text": "Czym różni się mechanizm powstawania widma charakterystycznego (liniowego) od widma ciągłego w lampie rentgenowskiej?",
    "options": [
      {
        "text": "Powstaje przy przeskoku elektronu z wyższej powłoki na lukę wybitą w atomie anody.",
        "isCorrect": true
      },
      {
        "text": "Powstaje wyłącznie wskutek hamowania elektronów w polu elektrycznym rozgrzanej katody.",
        "isCorrect": false
      },
      {
        "text": "Powstaje przy całkowitej zamianie energii kinetycznej elektronu w pojedynczy foton.",
        "isCorrect": false
      },
      {
        "text": "Powstaje przy odbiciu termicznych elektronów od szklanej ścianki bańki próżniowej.",
        "isCorrect": false
      }
    ],
    "explanation": "Widmo charakterystyczne (liniowe) promieniowania X powstaje, gdy rozpędzony elektron wybija elektron z wewnętrznej powłoki atomu materiału anody. Na zwolnione miejsce przeskakuje elektron z powłoki wyższej, emitując foton o ściśle określonej energii charakterystycznej dla danego pierwiastka. Całkowita zamiana energii kinetycznej $eU$ w jeden foton wyznacza natomiast krótkofalową granicę widma ciągłego $\\lambda_{\\min}$."
  },
  {
    "id": 5,
    "category": "1. Mechanika kwantowa I — podstawy i model Bohra",
    "text": "Jeżeli napięcie przyspieszające $U$ w lampie rentgenowskiej wzrośnie dwukrotnie, jak zmieni się minimalna długość fali $\\lambda_{\\min}$ widma ciągłego?",
    "options": [
      {
        "text": "Zmaleje dwukrotnie zgodnie ze wzorem granicznym $\\lambda_{\\min} = hc/(eU)$.",
        "isCorrect": true
      },
      {
        "text": "Wzrośnie dwukrotnie zgodnie ze wzorem granicznym $\\lambda_{\\min} = eU/(hc)$.",
        "isCorrect": false
      },
      {
        "text": "Zmaleje czterokrotnie, ponieważ energia fotonu zależy od kwadratu $U$.",
        "isCorrect": false
      },
      {
        "text": "Pozostanie bez zmian, ponieważ zależy wyłącznie od materiału anody.",
        "isCorrect": false
      }
    ],
    "explanation": "Krótkofalowa granica widma ciągłego promieniowania X wynika z warunku zamiany całej energii kinetycznej elektronu $E_k = eU$ w energię jednego fotonu $hc/\\lambda_{\\min}$, skąd $\\lambda_{\\min} = \\frac{hc}{eU}$. Długość $\\lambda_{\\min}$ jest więc odwrotnie proporcjonalna do napięcia $U$ i nie zależy od materiału anody: dwukrotny wzrost $U$ powoduje dwukrotny spadek $\\lambda_{\\min}$."
  },
  {
    "id": 6,
    "category": "1. Mechanika kwantowa I — podstawy i model Bohra",
    "text": "Jaki zakres długości fal $\\lambda$ odpowiada promieniowaniu rentgenowskiemu (X) podanemu na wykładzie?",
    "options": [
      {
        "text": "Od $0{,}1\\text{ nm}$ do $10\\text{ nm}$ (fale znacznie krótsze od widzialnych).",
        "isCorrect": true
      },
      {
        "text": "Od $400\\text{ nm}$ do $700\\text{ nm}$ (fale odpowiadające zakresowi widzialnemu).",
        "isCorrect": false
      },
      {
        "text": "Od $100\\text{ nm}$ do $400\\text{ nm}$ (fale odpowiadające bliskiemu nadfioletowi).",
        "isCorrect": false
      },
      {
        "text": "Od $1\\text{ mm}$ do $10\\text{ cm}$ (fale odpowiadające zakresowi mikrofalowemu).",
        "isCorrect": false
      }
    ],
    "explanation": "Według slajdów wykładowych promieniowanie rentgenowskie (X), odkryte w 1895 roku przez Wilhelma Röntgena, to promieniowanie elektromagnetyczne o długościach fal z przedziału $0{,}1\\text{ nm} < \\lambda < 10\\text{ nm}$. Jest ono znacznie bardziej energetyczne od światła widzialnego ($400$–$700\\text{ nm}$) oraz nadfioletu."
  },
  {
    "id": 7,
    "category": "1. Mechanika kwantowa I — podstawy i model Bohra",
    "text": "W doświadczeniu J.J. Thomsona (1897), które doprowadziło do odkrycia elektronu, skrzyżowane pola elektryczne $E$ i magnetyczne $B$ służyły przede wszystkim do:",
    "options": [
      {
        "text": "Wyznaczenia prędkości elektronów w wiązce ze zrównoważenia sił $v_0 = E/B$.",
        "isCorrect": true
      },
      {
        "text": "Bezpośredniego pomiaru masy pojedynczego elektronu bez znajomości ładunku.",
        "isCorrect": false
      },
      {
        "text": "Rozszczepienia wiązki elektronów na dwie składowe w zależności od ich spinu.",
        "isCorrect": false
      },
      {
        "text": "Zatrzymania promieni katodowych na anodzie w celu emisji promieniowania X.",
        "isCorrect": false
      }
    ],
    "explanation": "J.J. Thomson użył skrzyżowanych (prostopadłych) pól $E$ i $B$ jako selektora prędkości: gdy siła elektryczna $qE$ równoważy siłę Lorentza $qv_0 B$, wiązka leci prosto, co daje $v_0 = E/B$. Następnie po wyłączeniu pola $B$ mierzył kąt odchylenia $\\theta$ w samym polu $E$, wyznaczając stosunek ładunku do masy $q/m = \\frac{E\\tan\\theta}{B^2 l}$."
  },
  {
    "id": 8,
    "category": "1. Mechanika kwantowa I — podstawy i model Bohra",
    "text": "Które stwierdzenie poprawnie opisuje widmo liniowe w porównaniu z widmem ciągłym?",
    "options": [
      {
        "text": "Widmo liniowe emitują rozrzedzone gazy atomowe, a ciągłe rozgrzane ciała stałe.",
        "isCorrect": true
      },
      {
        "text": "Widmo liniowe emitują gęste ciała stałe, a ciągłe pojedyncze atomy w gazie.",
        "isCorrect": false
      },
      {
        "text": "Widmo liniowe zależy wyłącznie od temperatury, a ciągłe od liczby atomowej.",
        "isCorrect": false
      },
      {
        "text": "Widmo liniowe obejmuje wszystkie długości fal, a ciągłe pojedyncze prążki.",
        "isCorrect": false
      }
    ],
    "explanation": "Widmo liniowe składa się z dyskretnych, oddzielnych linii i jest charakterystyczne dla rozrzedzonych gazów atomowych, w których atomy praktycznie ze sobą nie oddziałują. Widmo ciągłe obejmuje nieprzerwane pasmo długości fal i emitowane jest przez rozgrzane ciała stałe, ciecze, gęste gazy oraz podczas hamowania elektronów (Bremsstrahlung)."
  },
  {
    "id": 9,
    "category": "1. Mechanika kwantowa I — podstawy i model Bohra",
    "text": "Jak definiuje się w fizyce ciało doskonale czarne (CDC)?",
    "options": [
      {
        "text": "Obiekt pochłaniający całe padające promieniowanie niezależnie od długości fali.",
        "isCorrect": true
      },
      {
        "text": "Obiekt odbijający całe padające promieniowanie w zakresie światła widzialnego.",
        "isCorrect": false
      },
      {
        "text": "Obiekt nieemitujący żadnego promieniowania termicznego w dowolnej temperaturze.",
        "isCorrect": false
      },
      {
        "text": "Obiekt pochłaniający wyłącznie promieniowanie o długości fali poniżej $400\\text{ nm}$.",
        "isCorrect": false
      }
    ],
    "explanation": "Ciało doskonale czarne to wyidealizowany obiekt pochłaniający $100\\%$ padającego na nie promieniowania elektromagnetycznego niezależnie od długości fali i kąta padania. W temperaturze $T > 0\\text{ K}$ emituje ono promieniowanie termiczne o uniwersalnym widmie zależnym wyłącznie od temperatury (dobrym przybliżeniem jest mały otwór w nagrzanej wnęce)."
  },
  {
    "id": 10,
    "category": "1. Mechanika kwantowa I — podstawy i model Bohra",
    "text": "Na czym polegała tzw. katastrofa w nadfiolecie wynikająca z klasycznego wzoru Rayleigha-Jeansa?",
    "options": [
      {
        "text": "Wzór przewidywał nieskończony wzrost mocy promieniowania dla bardzo krótkich fal.",
        "isCorrect": true
      },
      {
        "text": "Wzór przewidywał zerową emisję promieniowania termicznego dla bardzo długich fal.",
        "isCorrect": false
      },
      {
        "text": "Wzór przewidywał spadek całkowitej mocy promieniowania wraz ze wzrostem temperatury.",
        "isCorrect": false
      },
      {
        "text": "Wzór przewidywał dyskretne linie widmowe zamiast gładkiego rozkładu ciągłego.",
        "isCorrect": false
      }
    ],
    "explanation": "Klasyczne prawo Rayleigha-Jeansa $S(\\lambda) = \\frac{2\\pi c k_B T}{\\lambda^4}$ dobrze zgadzało się z doświadczeniem dla dużych długości fal, ale przy $\\lambda \\to 0$ (nadfiolet i krótsze fale) rozbiegało się do nieskończoności, co oznaczało nieskończoną energię promieniowania. Problem ten rozwiązał Max Planck w 1900 roku, wprowadzając kwantowanie energii oscylatorów."
  },
  {
    "id": 11,
    "category": "1. Mechanika kwantowa I — podstawy i model Bohra",
    "text": "Dlaczego w życiu codziennym nie obserwujemy skwantowania (ziarnistości) energii makroskopowych oscylatorów, np. wahadła?",
    "options": [
      {
        "text": "Kwant energii $h\\nu$ jest znikomo mały w porównaniu z całkowitą energią układu.",
        "isCorrect": true
      },
      {
        "text": "Hipoteza kwantowania Plancka obowiązuje wyłącznie dla fotonów, a nie oscylatorów.",
        "isCorrect": false
      },
      {
        "text": "Stała Plancka $h$ maleje do zera, gdy masa drgającego obiektu przekracza $1\\text{ g}$.",
        "isCorrect": false
      },
      {
        "text": "Opór powietrza całkowicie znosi dyskretny charakter poziomów energetycznych wahadła.",
        "isCorrect": false
      }
    ],
    "explanation": "Zgodnie z hipotezą Plancka energia oscylatora harmonicznego wynosi $E = nh\\nu$. Ponieważ stała Plancka $h \\approx 6{,}626 \\times 10^{-34}\\text{ J}\\cdot\\text{s}$ jest niezwykle mała, dla układów makroskopowych (jak wahadło z przykładu na wykładzie) stosunek $\\Delta E / E$ jest astronomicznie mały, więc energia wydaje się zmieniać w sposób ciągły."
  },
  {
    "id": 12,
    "category": "1. Mechanika kwantowa I — podstawy i model Bohra",
    "text": "Jeżeli temperatura bezwzględna $T$ ciała doskonale czarnego wzrośnie dwukrotnie, to całkowita zdolność emisyjna $R_T$ według prawa Stefana-Boltzmanna:",
    "options": [
      {
        "text": "Wzrośnie szesnastokrotnie, ponieważ $R_T$ jest proporcjonalna do $T^4$.",
        "isCorrect": true
      },
      {
        "text": "Wzrośnie czterokrotnie, ponieważ $R_T$ jest proporcjonalna do $T^2$.",
        "isCorrect": false
      },
      {
        "text": "Wzrośnie dwukrotnie, ponieważ $R_T$ jest liniowo proporcjonalna do $T$.",
        "isCorrect": false
      },
      {
        "text": "Wzrośnie ośmiokrotnie, ponieważ $R_T$ jest proporcjonalna do $T^3$.",
        "isCorrect": false
      }
    ],
    "explanation": "Prawo Stefana-Boltzmanna głosi, że całkowita zdolność emisyjna ciała doskonale czarnego (moc wypromieniowana z jednostki powierzchni) wynosi $R_T = \\sigma T^4$, gdzie $\\sigma = 5{,}67 \\times 10^{-8}\\text{ W/(m}^2\\text{K}^4)$. Dwukrotny wzrost temperatury bezwzględnej powoduje więc wzrost mocy o czynnik $2^4 = 16$."
  },
  {
    "id": 13,
    "category": "1. Mechanika kwantowa I — podstawy i model Bohra",
    "text": "Jak zgodnie z prawem przesunięć Wiena zmieni się długość fali $\\lambda_{\\max}$ odpowiadająca maksimum promieniowania CDC, gdy jego temperatura wzrośnie trzykrotnie?",
    "options": [
      {
        "text": "Zmaleje trzykrotnie, przesuwając maksimum widma w stronę fal krótszych.",
        "isCorrect": true
      },
      {
        "text": "Wzrośnie trzykrotnie, przesuwając maksimum widma w stronę fal dłuższych.",
        "isCorrect": false
      },
      {
        "text": "Zmaleje dziewięciokrotnie, przesuwając maksimum w stronę fal krótszych.",
        "isCorrect": false
      },
      {
        "text": "Pozostanie stała, ponieważ zmienia się jedynie całkowita moc emisji.",
        "isCorrect": false
      }
    ],
    "explanation": "Prawo przesunięć Wiena ma postać $\\lambda_{\\max} \\cdot T = b$ ($b \\approx 2898\\text{ }\\mu\\text{m}\\cdot\\text{K}$). Długość fali odpowiadająca maksimum emisji jest odwrotnie proporcjonalna do temperatury bezwzględnej, więc przy trzykrotnym wzroście temperatury $\\lambda_{\\max}$ maleje trzykrotnie (barwa rozgrzanego ciała przesuwa się ku krótszym falom: od czerwieni ku niebieskiemu)."
  },
  {
    "id": 14,
    "category": "1. Mechanika kwantowa I — podstawy i model Bohra",
    "text": "Dlaczego Słońce traktuje się jako ciało tylko w przybliżeniu („prawie”) doskonale czarne o temperaturze powierzchni ok. $5500\\text{ K}$?",
    "options": [
      {
        "text": "Atmosfera słoneczna zawiera atomy i jony, które modyfikują gładki rozkład widma.",
        "isCorrect": true
      },
      {
        "text": "We wnętrzu Słońca nie zachodzą zderzenia Comptona spowalniające fotony gamma.",
        "isCorrect": false
      },
      {
        "text": "Powierzchnia Słońca odbija ponad połowę padającego promieniowania kosmicznego.",
        "isCorrect": false
      },
      {
        "text": "Słońce emituje wyłącznie wąskie widmo liniowe wodoru bez żadnego tła ciągłego.",
        "isCorrect": false
      }
    ],
    "explanation": "Wysokoenergetyczne fotony $\\gamma$ z syntezy termojądrowej we wnętrzu Słońca tracą energię przez wielokrotne rozpraszanie Comptona, dając przy powierzchni ($T \\approx 5500\\text{ K}$) gładkie widmo zbliżone do CDC. Powyżej znajduje się jednak atmosfera słoneczna z atomami, jonami i cząsteczkami, która absorbuje wybrane długości fal (linie Fraunhofera), modyfikując idealny rozkład CDC."
  },
  {
    "id": 15,
    "category": "1. Mechanika kwantowa I — podstawy i model Bohra",
    "text": "Kiedy i w jakich okolicznościach powstało kosmiczne promieniowanie tła (CMB), które dziś obserwujemy jako widmo CDC o temperaturze ok. $2{,}73\\text{ K}$?",
    "options": [
      {
        "text": "Ok. 380 tys. lat po Wielkim Wybuchu, gdy elektrony i protony utworzyły atomy wodoru.",
        "isCorrect": true
      },
      {
        "text": "W pierwszej sekundzie po Wielkim Wybuchu podczas anihilacji kwarków i antykwarków.",
        "isCorrect": false
      },
      {
        "text": "Około miliarda lat po Wielkim Wybuchu wskutek wybuchów pierwszych gwiazd supernowych.",
        "isCorrect": false
      },
      {
        "text": "Współcześnie w wyniku rozpraszania światła gwiazd na zimnym pyle międzygalaktycznym.",
        "isCorrect": false
      }
    ],
    "explanation": "Kosmiczne promieniowanie tła (CMB) zostało uwolnione w epoce rekombinacji, ok. $370$–$380\\text{ tys.}$ lat po Wielkim Wybuchu, gdy Wszechświat ochłodził się do ok. $3000\\text{ K}$. Wówczas swobodne elektrony i protony połączyły się w neutralne atomy wodoru i Wszechświat stał się przezroczysty dla fotonów. Rozszerzanie przestrzeni wydłużyło te fale do zakresu mikrofalowego ($T \\approx 2{,}728\\text{ K}$)."
  },
  {
    "id": 16,
    "category": "1. Mechanika kwantowa I — podstawy i model Bohra",
    "text": "Które z poniższych stwierdzeń na temat kosmicznego promieniowania tła (CMB) są prawdziwe?",
    "options": [
      {
        "text": "Jest niemal izotropowe i ma widmo ciała doskonale czarnego o $T \\approx 2{,}73\\text{ K}$.",
        "isCorrect": true
      },
      {
        "text": "Zostało odkryte przypadkowo w 1965 roku przez Arno Penziasa i Roberta Wilsona.",
        "isCorrect": true
      },
      {
        "text": "Jego długość fali wydłużyła się do mikrofal na skutek rozszerzania Wszechświata.",
        "isCorrect": true
      },
      {
        "text": "Jego maksimum natężenia leży obecnie w zakresie dalekiego promieniowania gamma.",
        "isCorrect": false
      }
    ],
    "explanation": "CMB ma niemal idealne widmo ciała doskonale czarnego o temperaturze $T = 2{,}728\\text{ K}$, jest prawie całkowicie izotropowe (z mikroskopijnymi anizotropiami rzędu $10^{-5}$), a jego fale uległy kosmologicznemu przesunięciu ku czerwieni z podczerwieni/światła widzialnego do mikrofal. Odkryli je w 1965 r. Penzias i Wilson (Nagroda Nobla 1978)."
  },
  {
    "id": 17,
    "category": "1. Mechanika kwantowa I — podstawy i model Bohra",
    "text": "Jak brzmi hipoteza Louisa de Broglie'a dotycząca długości fali materii towarzyszącej cząstce o pędzie $p$?",
    "options": [
      {
        "text": "Długość fali materii wyraża się wzorem $\\lambda = h/p$ (odwrotnie proporcjonalna do pędu).",
        "isCorrect": true
      },
      {
        "text": "Długość fali materii wyraża się wzorem $\\lambda = h \\cdot p$ (proporcjonalna do pędu cząstki).",
        "isCorrect": false
      },
      {
        "text": "Długość fali materii wyraża się wzorem $\\lambda = p/h$ (rośnie wraz ze wzrostem masy).",
        "isCorrect": false
      },
      {
        "text": "Długość fali materii wyraża się wzorem $\\lambda = hc/E_k$ niezależnie od masy spoczynkowej.",
        "isCorrect": false
      }
    ],
    "explanation": "Przez analogię do fotonów ($E=h\\nu=hc/\\lambda$ oraz $p=E/c=h/\\lambda$), Louis de Broglie (1924) zaproponował, że każdej cząstce materialnej o pędzie $p = mv$ towarzyszy fala materii o długości $\\lambda = h/p$. Im większy pęd (masa lub prędkość) cząstki, tym krótsza jest odpowiadająca jej fala de Broglie'a."
  },
  {
    "id": 18,
    "category": "1. Mechanika kwantowa I — podstawy i model Bohra",
    "text": "Dlaczego w codziennym doświadczeniu nie obserwujemy dyfrakcji obiektów makroskopowych, takich jak lecąca piłka tenisowa?",
    "options": [
      {
        "text": "Ich długość fali de Broglie'a jest skrajnie mała i brak tak małych szczelin.",
        "isCorrect": true
      },
      {
        "text": "Hipoteza fal materii de Broglie'a dotyczy wyłącznie cząstek naładowanych.",
        "isCorrect": false
      },
      {
        "text": "Dla obiektów makroskopowych długość fali rośnie i rozmywa cały obraz prążków.",
        "isCorrect": false
      },
      {
        "text": "Cząstki makroskopowe poruszają się zbyt wolno, by tworzyć fale materii.",
        "isCorrect": false
      }
    ],
    "explanation": "Aby zaobserwować dyfrakcję fali materii, rozmiar przeszkody lub szczeliny musi być porównywalny z długością fali $\\lambda = h/(mv)$. Dla piłki o masie $m = 0{,}057\\text{ kg}$ i prędkości $v = 25\\text{ m/s}$ (przykład z wykładu) długość fali wynosi ok. $4{,}6 \\times 10^{-34}\\text{ m}$ — o kilkanaście rzędów mniej niż rozmiar jądra atomowego, więc nie istnieje szczelina zdolna wywołać jej dyfrakcję."
  },
  {
    "id": 19,
    "category": "1. Mechanika kwantowa I — podstawy i model Bohra",
    "text": "Która para zjawisk dowodzi, że fala elektromagnetyczna (światło) zachowuje się jak strumień cząstek (fotonów)?",
    "options": [
      {
        "text": "Zjawisko fotoelektryczne zewnętrzne oraz rozpraszanie fotonów Comptona.",
        "isCorrect": true
      },
      {
        "text": "Dyfrakcja elektronów na krysztale niklu oraz interferencja na szczelinach.",
        "isCorrect": false
      },
      {
        "text": "Polaryzacja liniowa światła w pryzmacie oraz dyfrakcja na siatce optycznej.",
        "isCorrect": false
      },
      {
        "text": "Doświadczenie Davissona-Germera oraz rozpraszanie cząstek alfa na folii.",
        "isCorrect": false
      }
    ],
    "explanation": "Dualizm korpuskularno-falowy oznacza, że światło przejawia cechy cząstkowe (zjawisko fotoelektryczne, efekt Comptona, kreacja par), natomiast materia (cząstki materialne) przejawia cechy falowe (dyfrakcja elektronów w doświadczeniu Davissona-Germera, interferencja elektronów na podwójnej szczelinie). Dyfrakcja i polaryzacja światła to klasyczne zjawiska falowe."
  },
  {
    "id": 20,
    "category": "1. Mechanika kwantowa I — podstawy i model Bohra",
    "text": "Które z poniższych zjawisk bezpośrednio dowodzi, że cząstka materialna (np. elektron) zachowuje się jak fala?",
    "options": [
      {
        "text": "Powstawanie maksimów dyfrakcyjnych wiązki elektronów odbitych od kryształu niklu.",
        "isCorrect": true
      },
      {
        "text": "Wybijanie fotoelektronów z metalu przez światło o częstotliwości powyżej granicznej.",
        "isCorrect": false
      },
      {
        "text": "Wzrost długości fali promieniowania rentgenowskiego po rozproszeniu na elektronach.",
        "isCorrect": false
      },
      {
        "text": "Powstawanie pary elektron-pozyton z fotonu gamma w silnym polu jądra atomowego.",
        "isCorrect": false
      }
    ],
    "explanation": "W doświadczeniu Davissona-Germera (1927) wiązka niskoenergetycznych elektronów padająca na monokryształ niklu utworzyła wyraźny obraz dyfrakcyjny zgodny z prawem Bragga dla długości fali $\\lambda = h/p$. Stanowi to bezpośredni dowód falowej natury materii. Pozostałe trzy zjawiska dowodzą korpuskularnej natury światła."
  },
  {
    "id": 21,
    "category": "1. Mechanika kwantowa I — podstawy i model Bohra",
    "text": "Które z poniższych zjawisk stanowią cztery klasyczne dowody dualizmu korpuskularno-falowego omawiane na kolokwiach z EFW?",
    "options": [
      {
        "text": "Zjawisko fotoelektryczne zewnętrzne wyjaśnione kwantowo przez Einsteina.",
        "isCorrect": true
      },
      {
        "text": "Rozpraszanie Comptona wysokoenergetycznych fotonów X lub $\\gamma$ na elektronach.",
        "isCorrect": true
      },
      {
        "text": "Dyfrakcja i interferencja wiązki elektronów na krysztale lub szczelinach.",
        "isCorrect": true
      },
      {
        "text": "Rozpraszanie cząstek alfa na złotej folii w eksperymencie Rutherforda.",
        "isCorrect": false
      }
    ],
    "explanation": "W materiałach wykładowych i kluczach do kolokwiów jako cztery główne zjawiska dowodzące dualizmu wymienia się: zjawisko fotoelektryczne, efekt Comptona, kreację par (lub promieniowanie CDC) jako dowody korpuskularności światła oraz dyfrakcję/interferencję elektronów jako dowód falowości materii. Doświadczenie Rutherforda dowiodło istnienia małego jądra atomowego, a nie dualizmu."
  },
  {
    "id": 22,
    "category": "1. Mechanika kwantowa I — podstawy i model Bohra",
    "text": "Jak kwantowa teoria Einsteina zjawiska fotoelektrycznego tłumaczy brak emisji elektronów dla częstotliwości niższych od granicznej $\\nu_0$?",
    "options": [
      {
        "text": "Energia pojedynczego fotonu $h\\nu$ jest mniejsza od pracy wyjścia $W$, a fotony się nie sumują.",
        "isCorrect": true
      },
      {
        "text": "Fale o niskiej częstotliwości ulegają całkowitemu odbiciu od atomów na powierzchni metalu.",
        "isCorrect": false
      },
      {
        "text": "Czas potrzebny na zakumulowanie energii z wielu słabych fotonów przekracza czas pomiaru.",
        "isCorrect": false
      },
      {
        "text": "Przy niskiej częstotliwości praca wyjścia $W$ metalu gwałtownie rośnie do nieskończoności.",
        "isCorrect": false
      }
    ],
    "explanation": "W akcie elementarnym jeden elektron pochłania w całości energię tylko jednego fotonu ($E = h\\nu$). Aby elektron opuścił metal, musi pokonać pracę wyjścia $W$, czyli $h\\nu \\ge W$ (stąd $\\nu_0 = W/h$). Gdy $\\nu < \\nu_0$, żaden pojedynczy foton nie ma dość energii, a elektrony nie potrafią „kumulować” energii z wielu słabych fotonów, więc zwiększanie natężenia światła nic nie zmienia."
  },
  {
    "id": 23,
    "category": "1. Mechanika kwantowa I — podstawy i model Bohra",
    "text": "Co się stanie w zjawisku fotoelektrycznym (dla $\\nu > \\nu_0$), jeśli dwukrotnie zwiększymy natężenie padającego światła przy stałej częstotliwości $\\nu$?",
    "options": [
      {
        "text": "Wzrośnie liczba wybijanych elektronów, a maksymalna energia $E_{k,\\max}$ nie drgnie.",
        "isCorrect": true
      },
      {
        "text": "Maksymalna energia kinetyczna fotoelektronów $E_{k,\\max}$ wzrośnie dokładnie dwukrotnie.",
        "isCorrect": false
      },
      {
        "text": "Częstotliwość graniczna $\\nu_0$ dla danego metalu zmniejszy się dokładnie o połowę.",
        "isCorrect": false
      },
      {
        "text": "Skróci się dwukrotnie czas opóźnienia między włączeniem światła a emisją elektronów.",
        "isCorrect": false
      }
    ],
    "explanation": "Zwiększenie natężenia światła przy stałej częstotliwości zwiększa strumień (liczbę) padających fotonów, ale nie zmienia energii pojedynczego fotonu $E = h\\nu$. Dlatego wzrasta fotoprąd (liczba wybijanych elektronów), natomiast $E_{k,\\max} = h\\nu - W$ pozostaje bez zmian. Emisja następuje natychmiastowo (bez opóźnienia)."
  },
  {
    "id": 24,
    "category": "1. Mechanika kwantowa I — podstawy i model Bohra",
    "text": "Na powierzchnię metalu o pracy wyjścia $W = 2{,}2\\text{ eV}$ padają fotony o energii $E = 3{,}7\\text{ eV}$. Ile wynosi maksymalna energia kinetyczna wybijanych fotoelektronów?",
    "options": [
      {
        "text": "$E_{k,\\max} = 1{,}5\\text{ eV}$ (z różnicy energii fotonu i pracy wyjścia).",
        "isCorrect": true
      },
      {
        "text": "$E_{k,\\max} = 5{,}9\\text{ eV}$ (z sumy energii fotonu oraz pracy wyjścia).",
        "isCorrect": false
      },
      {
        "text": "$E_{k,\\max} = 2{,}2\\text{ eV}$ (równa dokładnie wartości pracy wyjścia metalu).",
        "isCorrect": false
      },
      {
        "text": "$E_{k,\\max} = 0{,}0\\text{ eV}$ (ponieważ energia fotonu jest zbyt mała do emisji).",
        "isCorrect": false
      }
    ],
    "explanation": "Z równania Einsteina-Millikana dla zjawiska fotoelektrycznego $E_{k,\\max} = h\\nu - W = 3{,}7\\text{ eV} - 2{,}2\\text{ eV} = 1{,}5\\text{ eV}$. Ponieważ $h\\nu > W$, zjawisko zachodzi, a nadwyżka energii fotonu ponad pracę wyjścia zamienia się w energię kinetyczną najszybszych fotoelektronów."
  },
  {
    "id": 25,
    "category": "1. Mechanika kwantowa I — podstawy i model Bohra",
    "text": "Które stwierdzenie poprawnie opisuje przesunięcie długości fali fotonu $\\Delta\\lambda = \\lambda' - \\lambda$ w efekcie Comptona?",
    "options": [
      {
        "text": "Zależy wyłącznie od kąta rozproszenia $\\theta$, a nie od początkowej długości fali $\\lambda$.",
        "isCorrect": true
      },
      {
        "text": "Jest zawsze ujemne, ponieważ foton po zderzeniu z elektronem zyskuje dodatkową energię.",
        "isCorrect": false
      },
      {
        "text": "Rośnie proporcjonalnie do kwadratu początkowej długości fali padającego promieniowania.",
        "isCorrect": false
      },
      {
        "text": "Zależy przede wszystkim od liczby atomowej $Z$ pierwiastka tarczy, na której zachodzi.",
        "isCorrect": false
      }
    ],
    "explanation": "Wzór Comptona ma postać $\\Delta\\lambda = \\lambda' - \\lambda = \\lambda_C (1 - \\cos\\theta)$, gdzie stała $\\lambda_C = \\frac{h}{m_e c} \\approx 0{,}0243\\text{ \\AA}$ to comptonowska długość fali elektronu. Przesunięcie $\\Delta\\lambda$ jest zawsze nieujemne (foton traci energię, więc $\\lambda' \\ge \\lambda$) i zależy wyłącznie od kąta rozproszenia $\\theta$, a nie od początkowej $\\lambda$."
  },
  {
    "id": 26,
    "category": "1. Mechanika kwantowa I — podstawy i model Bohra",
    "text": "Dla jakiego kąta rozproszenia $\\theta$ w efekcie Comptona przyrost długości fali fotonu $\\Delta\\lambda$ jest największy i ile wówczas wynosi?",
    "options": [
      {
        "text": "Dla $\\theta = 180^\\circ$ (rozproszenie wsteczne), wówczas $\\Delta\\lambda = 2\\lambda_C$.",
        "isCorrect": true
      },
      {
        "text": "Dla $\\theta = 90^\\circ$ (rozproszenie prostopadłe), wówczas $\\Delta\\lambda = 2\\lambda_C$.",
        "isCorrect": false
      },
      {
        "text": "Dla $\\theta = 0^\\circ$ (przelot bez odchylenia), wówczas $\\Delta\\lambda = \\lambda_C$.",
        "isCorrect": false
      },
      {
        "text": "Dla $\\theta = 180^\\circ$ (rozproszenie wsteczne), wówczas $\\Delta\\lambda = \\lambda_C/2$.",
        "isCorrect": false
      }
    ],
    "explanation": "Ze wzoru $\\Delta\\lambda = \\lambda_C (1 - \\cos\\theta)$ wynika, że wyrażenie $(1 - \\cos\\theta)$ osiąga maksimum równe $2$ dla $\\cos\\theta = -1$, czyli dla kąta $\\theta = 180^\\circ$ (zderzenie czołowe z odbiciem wstecznym fotonu). Wtedy $\\Delta\\lambda_{\\max} = 2\\lambda_C \\approx 0{,}0486\\text{ \\AA}$. Dla $\\theta = 90^\\circ$ mamy $\\Delta\\lambda = \\lambda_C$, a dla $\\theta = 0^\\circ$ jest $\\Delta\\lambda = 0$."
  },
  {
    "id": 27,
    "category": "1. Mechanika kwantowa I — podstawy i model Bohra",
    "text": "Dlaczego rozpraszanie Comptona jest zjawiskiem istotnym dla fotonów promieniowania X i $\\gamma$, a praktycznie niezauważalnym dla światła widzialnego?",
    "options": [
      {
        "text": "Bo $\\lambda_C \\approx 0{,}0243\\text{ \\AA}$ to duży ułamek $\\lambda$ promieni X i $\\gamma$, a znikomy dla światła widzialnego.",
        "isCorrect": true
      },
      {
        "text": "Bo fotony światła widzialnego nie mają pędu i nie mogą zderzać się ze swobodnymi elektronami.",
        "isCorrect": false
      },
      {
        "text": "Bo światło widzialne ulega w atomach wyłącznie kreacji par zamiast rozpraszania na elektronach.",
        "isCorrect": false
      },
      {
        "text": "Bo masa spoczynkowa fotonów światła widzialnego jest mniejsza niż masa spoczynkowa fotonów $\\gamma$.",
        "isCorrect": false
      }
    ],
    "explanation": "Bezwzględna zmiana długości fali jest rzędu $\\lambda_C \\approx 0{,}0243\\text{ \\AA} = 2{,}43 \\times 10^{-12}\\text{ m}$. Dla fotonów $\\gamma$ o zbliżonej długości fali oznacza to ogromną względną stratę energii (np. $57\\%$ w przykładzie z wykładu), natomiast dla światła widzialnego ($\\lambda \\approx 5000\\text{ \\AA}$) względna zmiana $\\Delta\\lambda/\\lambda$ jest rzędu $10^{-5}$, czyli praktycznie niemierzalna. Każdy foton ma masę spoczynkową $m_0 = 0$."
  },
  {
    "id": 28,
    "category": "1. Mechanika kwantowa I — podstawy i model Bohra",
    "text": "Dlaczego kreacja pary elektron–pozyton ($\\gamma \\to e^- + e^+$) może zajść wyłącznie w pobliżu jądra atomowego, a nigdy w idealnej próżni?",
    "options": [
      {
        "text": "Ciężkie jądro musi przejąć nadmiar pędu, aby zachować jednocześnie energię i pęd.",
        "isCorrect": true
      },
      {
        "text": "Jądro dostarcza elektronowi i pozytonowi ładunków elektrycznych o przeciwnych znakach.",
        "isCorrect": false
      },
      {
        "text": "W próżni energia spoczynkowa pary elektron-pozyton wzrasta do nieskończonej wartości.",
        "isCorrect": false
      },
      {
        "text": "Jądro musi wyemitować dodatkowe neutrino, aby spełnić zasadę zachowania liczby barionowej.",
        "isCorrect": false
      }
    ],
    "explanation": "Pojedynczy foton w próżni nie może zamienić się w parę $e^- e^+$, ponieważ niemożliwe byłoby jednoczesne spełnienie zasad zachowania energii i pędu (pęd fotonu $p = E/c$ jest zbyt duży). Obecność ciężkiego jądra atomowego pozwala przejąć nadwyżkę pędu przy znikomym poborze energii kinetycznej. Ładunek całkowity pary wynosi $(-e)+(+e)=0$, więc ładunek jest zachowany automatycznie."
  },
  {
    "id": 29,
    "category": "1. Mechanika kwantowa I — podstawy i model Bohra",
    "text": "Ile wynosi minimalna (progowa) energia fotonu potrzebna do zajścia kreacji pary elektron–pozyton?",
    "options": [
      {
        "text": "$1{,}022\\text{ MeV}$, czyli dwukrotność energii spoczynkowej elektronu ($2m_e c^2$).",
        "isCorrect": true
      },
      {
        "text": "$0{,}511\\text{ MeV}$, czyli dokładnie energia spoczynkowa elektronu ($m_e c^2$).",
        "isCorrect": false
      },
      {
        "text": "$13{,}6\\text{ eV}$, czyli dokładnie energia jonizacji atomu wodoru ($E_0$).",
        "isCorrect": false
      },
      {
        "text": "$938{,}3\\text{ MeV}$, czyli dokładnie energia spoczynkowa protonu ($m_p c^2$).",
        "isCorrect": false
      }
    ],
    "explanation": "Energia spoczynkowa jednego elektronu wynosi $m_e c^2 = 0{,}511\\text{ MeV}$, a pozyton jako jego antycząstka ma identyczną masę. Aby utworzyć parę $e^- + e^+$, foton musi mieć co najmniej energię $h\\nu_{\\min} = 2 m_e c^2 = 1{,}022\\text{ MeV}$. Nadwyżka ponad tę wartość zamienia się w energię kinetyczną powstałych cząstek."
  },
  {
    "id": 30,
    "category": "1. Mechanika kwantowa I — podstawy i model Bohra",
    "text": "Na jakim zjawisku fizycznym opiera się działanie medycznej pozytonowej tomografii emisyjnej (PET)?",
    "options": [
      {
        "text": "Na anihilacji par elektron–pozyton z emisją kwantów promieniowania gamma.",
        "isCorrect": true
      },
      {
        "text": "Na dyfrakcji wiązki pozytonów na krystalicznej strukturze kości pacjenta.",
        "isCorrect": false
      },
      {
        "text": "Na emisji ciągłego widma hamowania pozytonów w polu magnetycznym skanera.",
        "isCorrect": false
      },
      {
        "text": "Na zjawisku fotoelektrycznym wywołanym przez światło lasera podczerwonego.",
        "isCorrect": false
      }
    ],
    "explanation": "W badaniu PET podaje się radioznacznik emitujący pozytony (rozpad $\\beta^+$). Pozyton szybko napotyka elektron w tkance i ulega anihilacji ($e^+ + e^- \\to 2\\gamma$), w której powstają zazwyczaj dwa fotony $\\gamma$ po $511\\text{ keV}$ lecące w przeciwnych kierunkach, rejestrowane koincydencyjnie przez detektory."
  },
  {
    "id": 31,
    "category": "1. Mechanika kwantowa I — podstawy i model Bohra",
    "text": "Dlaczego klasyczny planetarny model atomu Rutherforda był sprzeczny z elektrodynamiką klasyczną?",
    "options": [
      {
        "text": "Elektron w ruchu po okręgu ma przyspieszenie, więc powinien promieniować i spaść na jądro.",
        "isCorrect": true
      },
      {
        "text": "Siła przyciągania Coulomba między protonem a elektronem jest za słaba dla orbity kołowej.",
        "isCorrect": false
      },
      {
        "text": "Model zakładał równomierne rozłożenie ładunku dodatniego w całej objętości atomu.",
        "isCorrect": false
      },
      {
        "text": "Model przewidywał istnienie wyłącznie jednego poziomu energetycznego w każdym atomie.",
        "isCorrect": false
      }
    ],
    "explanation": "Według elektrodynamiki Maxwella każdy ładunek poruszający się z przyspieszeniem (a ruch po okręgu ma przyspieszenie dośrodkowe) emituje fale elektromagnetyczne i traci energię. Elektron powinien więc w ułamku sekundy spaść spiralnie na jądro, emitując widmo ciągłe — tymczasem atomy są stabilne i dają widma liniowe. Rozłożenie ładunku w całej objętości dotyczyło wcześniejszego modelu Thomsona („ciasta z rodzynkami”)."
  },
  {
    "id": 32,
    "category": "1. Mechanika kwantowa I — podstawy i model Bohra",
    "text": "Które z poniższych stwierdzeń należą do postulatów modelu atomu wodoru Nielsa Bohra?",
    "options": [
      {
        "text": "Elektron na dozwolonych orbitach stacjonarnych nie emituje promieniowania.",
        "isCorrect": true
      },
      {
        "text": "Orbitalny moment pędu elektronu na orbicie jest skwantowany: $L = n\\hbar$.",
        "isCorrect": true
      },
      {
        "text": "Emisja lub absorpcja zachodzi przy przeskoku między orbitami ($\\Delta E = h\\nu$).",
        "isCorrect": true
      },
      {
        "text": "Położenie i pęd elektronu spełniają zasadę nieoznaczoności Heisenberga.",
        "isCorrect": false
      }
    ],
    "explanation": "Model Bohra (1913) opiera się na trzech postulatach: (1) istnieniu stacjonarnych orbit kołowych bez wypromieniowywania energii, (2) kwantowaniu momentu pędu $L = n\\hbar$ ($n=1,2,3,\\dots$) oraz (3) emisji/absorpcji fotonu $h\\nu = |E_i - E_f|$ wyłącznie przy przeskokach między orbitami. Zasada nieoznaczoności Heisenberga powstała dopiero w pełnej mechanice kwantowej w 1927 r."
  },
  {
    "id": 33,
    "category": "1. Mechanika kwantowa I — podstawy i model Bohra",
    "text": "Jak w modelu Bohra zależą promień dozwolonej orbity $r_n$ i energia elektronu $E_n$ w atomie wodoru od liczby kwantowej $n$?",
    "options": [
      {
        "text": "$r_n = a_0 n^2$ oraz $E_n = -13{,}6\\text{ eV} / n^2$.",
        "isCorrect": true
      },
      {
        "text": "$r_n = a_0 n$ oraz $E_n = -13{,}6\\text{ eV} / n$.",
        "isCorrect": false
      },
      {
        "text": "$r_n = a_0 / n^2$ oraz $E_n = -13{,}6\\text{ eV} \\cdot n^2$.",
        "isCorrect": false
      },
      {
        "text": "$r_n = a_0 n^2$ oraz $E_n = +13{,}6\\text{ eV} / n^2$.",
        "isCorrect": false
      }
    ],
    "explanation": "Z połączenia siły Coulomba jako siły dośrodkowej oraz warunku kwantowania momentu pędu $L=n\\hbar$ otrzymujemy $r_n = a_0 n^2$ (gdzie promień Bohra $a_0 \\approx 0{,}529\\text{ \\AA}$) oraz $E_n = -\\frac{E_0}{n^2} = -\\frac{13{,}6\\text{ eV}}{n^2}$. Energia jest ujemna, ponieważ elektron znajduje się w stanie związanym z jądrem."
  },
  {
    "id": 34,
    "category": "1. Mechanika kwantowa I — podstawy i model Bohra",
    "text": "Ile wynosi energia elektronu w atomie wodoru w pierwszym stanie wzbudzonym ($n = 2$) oraz jaki jest promień jego orbity względem promienia Bohra $a_0$?",
    "options": [
      {
        "text": "$E_2 = -3{,}4\\text{ eV}$ oraz $r_2 = 4a_0$.",
        "isCorrect": true
      },
      {
        "text": "$E_2 = -6{,}8\\text{ eV}$ oraz $r_2 = 2a_0$.",
        "isCorrect": false
      },
      {
        "text": "$E_2 = -3{,}4\\text{ eV}$ oraz $r_2 = 2a_0$.",
        "isCorrect": false
      },
      {
        "text": "$E_2 = -1{,}5\\text{ eV}$ oraz $r_2 = 9a_0$.",
        "isCorrect": false
      }
    ],
    "explanation": "Dla $n = 2$ podstawiamy do wzorów Bohra: $E_2 = -\\frac{13{,}6\\text{ eV}}{2^2} = -\\frac{13{,}6}{4}\\text{ eV} = -3{,}4\\text{ eV}$ oraz $r_2 = a_0 \\cdot 2^2 = 4a_0$. Wartość $-1{,}5\\text{ eV}$ i $9a_0$ odpowiada trzeciej orbicie ($n=3$)."
  },
  {
    "id": 35,
    "category": "1. Mechanika kwantowa I — podstawy i model Bohra",
    "text": "Dlaczego całkowita energia $E_n$ elektronu w związanym atomie wodoru ma wartość ujemną?",
    "options": [
      {
        "text": "Ponieważ elektron jest związany i trzeba dostarczyć energię, by go uwolnić do $E = 0$.",
        "isCorrect": true
      },
      {
        "text": "Ponieważ elektron ma ujemny ładunek elektryczny i porusza się przeciwnie do osi czasu.",
        "isCorrect": false
      },
      {
        "text": "Ponieważ energia kinetyczna elektronu na orbicie kołowej jest ujemna w skali Bohra.",
        "isCorrect": false
      },
      {
        "text": "Ponieważ siła dośrodkowa działająca na elektron ma zwrot odśrodkowy od jądra atomu.",
        "isCorrect": false
      }
    ],
    "explanation": "Za poziom zerowy energii potencjalnej przyjmuje się stan swobodnego elektronu w nieskończoności ($n \\to \\infty, E = 0$). Ponieważ w stanie związanym energia potencjalna przyciągania ($E_p = -2E_k$) przeważa nad dodatnią energią kinetyczną ($E_k$), całkowita energia $E = E_k + E_p < 0$ jest ujemna — aby zjonizować atom (uwolnić elektron), trzeba dostarczyć energię $|E_n|$."
  },
  {
    "id": 36,
    "category": "1. Mechanika kwantowa I — podstawy i model Bohra",
    "text": "Która seria widmowa atomu wodoru odpowiada przejściom elektronu na poziom $n = 2$ i leży w zakresie światła widzialnego?",
    "options": [
      {
        "text": "Seria Balmera (przejścia ze stanów $n \\ge 3$ na stan $n = 2$).",
        "isCorrect": true
      },
      {
        "text": "Seria Lymana (przejścia ze stanów $n \\ge 2$ na stan $n = 1$).",
        "isCorrect": false
      },
      {
        "text": "Seria Paschena (przejścia ze stanów $n \\ge 4$ na stan $n = 3$).",
        "isCorrect": false
      },
      {
        "text": "Seria Comptona (przejścia swobodne elektronów w polu jądra).",
        "isCorrect": false
      }
    ],
    "explanation": "W widmie emisyjnym wodoru wyróżniamy główne serie: Lymana (przejścia na $n=1$, zakres nadfioletu UV), Balmera (przejścia na $n=2$, zakres światła widzialnego, m.in. linia czerwona $656\\text{ nm}$) oraz Paschena (przejścia na $n=3$, podczerwień IR)."
  },
  {
    "id": 37,
    "category": "1. Mechanika kwantowa I — podstawy i model Bohra",
    "text": "Które z poniższych ograniczeń słusznie dotyczą modelu atomu Bohra?",
    "options": [
      {
        "text": "Działa tylko dla atomu wodoru i jonów jednoelektronowych (np. $\\text{He}^+, \\text{Li}^{2+}$).",
        "isCorrect": true
      },
      {
        "text": "Nie wyjaśnia natężeń linii spektralnych ani mechanizmu wiązań chemicznych.",
        "isCorrect": true
      },
      {
        "text": "Nie tłumaczy rozszczepienia linii w polu magnetycznym i elektrycznym.",
        "isCorrect": true
      },
      {
        "text": "Nie potrafi wyznaczyć położeń linii widmowych ani energii jonizacji wodoru.",
        "isCorrect": false
      }
    ],
    "explanation": "Wielkim sukcesem modelu Bohra było poprawne obliczenie energii jonizacji i położeń linii widmowych atomu wodoru oraz jonów wodoropodobnych. Model zawodzi jednak dla atomów wieloelektronowych, nie wyjaśnia względnych natężeń linii, rozszczepienia w polach zewnętrznych (efekty Zeemana i Starka) ani natury wiązań chemicznych."
  },
  {
    "id": 38,
    "category": "1. Mechanika kwantowa I — podstawy i model Bohra",
    "text": "Jak uwzględnienie ruchu jądra i elektronu wokół wspólnego środka masy (wprowadzenie masy zredukowanej $\\mu_e$) koryguje wyniki prostego modelu Bohra?",
    "options": [
      {
        "text": "Nieznacznie zmniejsza moduły poziomów energetycznych i energie emitowanych fotonów.",
        "isCorrect": true
      },
      {
        "text": "Znosi całkowicie kwantowanie orbitalnego momentu pędu dla wyższych poziomów $n$.",
        "isCorrect": false
      },
      {
        "text": "Powoduje rozszczepienie każdego poziomu energetycznego na trzy podpoziomy Zeemana.",
        "isCorrect": false
      },
      {
        "text": "Dwukrotnie zwiększa energię jonizacji atomu wodoru w stosunku do wartości $13{,}6\\text{ eV}$.",
        "isCorrect": false
      }
    ],
    "explanation": "W najprostszym modelu Bohra zakłada się nieskończenie ciężkie, nieruchome jądro. W rzeczywistości jądro i elektron krążą wokół wspólnego środka masy, co wymaga zastąpienia masy elektronu $m_e$ nieco mniejszą masą zredukowaną $\\mu_e = \\frac{m_e M}{m_e + M}$. Powoduje to drobne obniżenie co do modułu poziomów energetycznych oraz energii emitowanych i absorbowanych fotonów, zapewniając świetną zgodność z pomiarami."
  },
  {
    "id": 39,
    "category": "2. Mechanika kwantowa II — równanie Schrödingera i tunelowanie",
    "text": "Który zapis przedstawia poprawne zależne od czasu jednowymiarowe równanie Schrödingera?",
    "options": [
      {
        "text": "$i\\hbar \\frac{\\partial \\Psi(x,t)}{\\partial t} = -\\frac{\\hbar^2}{2m} \\frac{\\partial^2 \\Psi(x,t)}{\\partial x^2} + V(x,t)\\Psi(x,t)$",
        "isCorrect": true
      },
      {
        "text": "$i\\hbar \\frac{\\partial^2 \\Psi(x,t)}{\\partial t^2} = -\\frac{\\hbar^2}{2m} \\frac{\\partial \\Psi(x,t)}{\\partial x} + V(x,t)\\Psi(x,t)$",
        "isCorrect": false
      },
      {
        "text": "$\\hbar \\frac{\\partial \\Psi(x,t)}{\\partial t} = +\\frac{\\hbar^2}{2m} \\frac{\\partial^2 \\Psi(x,t)}{\\partial x^2} - V(x,t)\\Psi(x,t)$",
        "isCorrect": false
      },
      {
        "text": "$i\\hbar \\frac{\\partial \\Psi(x,t)}{\\partial t} = -\\frac{2m}{\\hbar^2} \\frac{\\partial^2 \\Psi(x,t)}{\\partial x^2} + E(x,t)\\Psi(x,t)$",
        "isCorrect": false
      }
    ],
    "explanation": "Zależne od czasu równanie Schrödingera w 1D ma postać $i\\hbar \\frac{\\partial \\Psi}{\\partial t} = -\\frac{\\hbar^2}{2m}\\frac{\\partial^2 \\Psi}{\\partial x^2} + V\\Psi$. Zawiera pierwszą pochodną po czasie (z jednostką urojoną $i$) oraz drugą pochodną przestrzenną z czynnikiem $-\\frac{\\hbar^2}{2m}$ (operator energii kinetycznej) i człon energii potencjalnej $+V\\Psi$."
  },
  {
    "id": 40,
    "category": "2. Mechanika kwantowa II — równanie Schrödingera i tunelowanie",
    "text": "Kiedy można stosować niezależne od czasu (stacjonarne) równanie Schrödingera? (pytanie z kolokwium)",
    "options": [
      {
        "text": "Gdy energia potencjalna (potencjał $V$) nie zależy od czasu.",
        "isCorrect": true
      },
      {
        "text": "Gdy prędkość cząstki jest mała w porównaniu z prędkością światła.",
        "isCorrect": false
      },
      {
        "text": "Gdy potencjał $V$ zmienia się harmonicznie w funkcji czasu.",
        "isCorrect": false
      },
      {
        "text": "Zawsze w kartezjańskim układzie współrzędnych dla dowolnego $V$.",
        "isCorrect": false
      }
    ],
    "explanation": "To jedno z najczęstszych pytań na kolokwiach z EFW! Niezależne od czasu równanie Schrödingera $-\\frac{\\hbar^2}{2m}\\frac{d^2\\psi}{dx^2} + V(x)\\psi(x) = E\\psi(x)$ otrzymuje się metodą separacji zmiennych $\\Psi(x,t) = \\psi(x)f(t)$, która jest możliwa wyłącznie wtedy, gdy potencjał $V$ nie zależy jawnie od czasu ($V = V(x)$ lub $V = V(\\vec{r})$)."
  },
  {
    "id": 41,
    "category": "2. Mechanika kwantowa II — równanie Schrödingera i tunelowanie",
    "text": "Który zapis przedstawia poprawne niezależne od czasu równanie Schrödingera w trzech wymiarach (3D)?",
    "options": [
      {
        "text": "$-\\frac{\\hbar^2}{2m} \\nabla^2 \\psi(\\vec{r}) + V(\\vec{r})\\psi(\\vec{r}) = E\\psi(\\vec{r})$",
        "isCorrect": true
      },
      {
        "text": "$+\\frac{\\hbar^2}{2m} \\nabla^2 \\psi(\\vec{r}) + V(\\vec{r})\\psi(\\vec{r}) = i\\hbar\\psi(\\vec{r})$",
        "isCorrect": false
      },
      {
        "text": "$-\\frac{\\hbar}{2m} \\nabla \\psi(\\vec{r}) + E\\psi(\\vec{r}) = V(\\vec{r})\\psi(\\vec{r})$",
        "isCorrect": false
      },
      {
        "text": "$-\\frac{2m}{\\hbar^2} \\nabla^2 \\psi(\\vec{r}) - V(\\vec{r})\\psi(\\vec{r}) = E\\psi(\\vec{r})$",
        "isCorrect": false
      }
    ],
    "explanation": "W trzech wymiarach drugą pochodną $\\frac{d^2}{dx^2}$ zastępuje operator Laplace'a (laplasjan) $\\nabla^2 = \\frac{\\partial^2}{\\partial x^2} + \\frac{\\partial^2}{\\partial y^2} + \\frac{\\partial^2}{\\partial z^2}$. Równanie stacjonarne ma postać $-\\frac{\\hbar^2}{2m}\\nabla^2\\psi + V\\psi = E\\psi$, gdzie $E$ oznacza całkowitą energię cząstki w stanie stacjonarnym."
  },
  {
    "id": 42,
    "category": "2. Mechanika kwantowa II — równanie Schrödingera i tunelowanie",
    "text": "Co oznacza symbol $\\hbar$ występujący w równaniu Schrödingera oraz w zasadzie nieoznaczoności Heisenberga?",
    "options": [
      {
        "text": "Zredukowaną stałą Plancka (stałą Diraca) równą $\\hbar = h / (2\\pi)$.",
        "isCorrect": true
      },
      {
        "text": "Zwykłą stałą Plancka pomnożoną przez prędkość światła ($\\hbar = h \\cdot c$).",
        "isCorrect": false
      },
      {
        "text": "Stałą Plancka podzieloną przez ładunek elementarny ($\\hbar = h / e$).",
        "isCorrect": false
      },
      {
        "text": "Kwadrat stałej Plancka podzielony przez masę elektronu ($\\hbar = h^2 / m_e$).",
        "isCorrect": false
      }
    ],
    "explanation": "Symbol $\\hbar$ (czyt. „h kreślone”) oznacza zredukowaną stałą Plancka, czyli $\\hbar = \\frac{h}{2\\pi} \\approx 1{,}055 \\times 10^{-34}\\text{ J}\\cdot\\text{s}$. Jest to podstawowa stała kwantowa pojawiająca się w równaniu Schrödingera, kwantowaniu momentu pędu ($L = n\\hbar$) i zasadzie nieoznaczoności ($\\Delta x \\Delta p_x \\ge \\hbar/2$)."
  },
  {
    "id": 43,
    "category": "2. Mechanika kwantowa II — równanie Schrödingera i tunelowanie",
    "text": "Jaką postać ma część czasowa $f(t)$ funkcji falowej w stanie stacjonarnym $\\Psi(x,t) = \\psi(x)f(t)$ o energii $E$?",
    "options": [
      {
        "text": "$f(t) = e^{-iEt/\\hbar}$, więc gęstość $|\\Psi(x,t)|^2$ nie zależy od czasu.",
        "isCorrect": true
      },
      {
        "text": "$f(t) = e^{-Et/\\hbar}$, więc gęstość $|\\Psi(x,t)|^2$ zanika w czasie.",
        "isCorrect": false
      },
      {
        "text": "$f(t) = \\sin(Et/\\hbar)$, więc gęstość $|\\Psi(x,t)|^2$ okresowo drga.",
        "isCorrect": false
      },
      {
        "text": "$f(t) = e^{+Et/\\hbar}$, więc gęstość $|\\Psi(x,t)|^2$ szybko rośnie.",
        "isCorrect": false
      }
    ],
    "explanation": "Po separacji zmiennych równanie dla części czasowej daje $f(t) = e^{-i\\omega t} = e^{-iEt/\\hbar}$. Ponieważ dla dowolnej liczby rzeczywistej moduł $|e^{-i\\omega t}|^2 = e^{+i\\omega t}e^{-i\\omega t} = 1$, gęstość prawdopodobieństwa $|\\Psi(x,t)|^2 = |\\psi(x)|^2$ jest stała w czasie — stąd nazwa „stan stacjonarny”."
  },
  {
    "id": 44,
    "category": "2. Mechanika kwantowa II — równanie Schrödingera i tunelowanie",
    "text": "Jakie znaczenie fizyczne według statystycznej interpretacji Maxa Borna ma wielkość $|\\Psi(x,t)|^2 = \\Psi^*(x,t)\\Psi(x,t)$?",
    "options": [
      {
        "text": "Gęstość prawdopodobieństwa znalezienia cząstki w punkcie $x$ w chwili $t$.",
        "isCorrect": true
      },
      {
        "text": "Dokładną wartość chwilowej prędkości cząstki w punkcie $x$ w chwili $t$.",
        "isCorrect": false
      },
      {
        "text": "Gęstość ładunku elektrycznego rozmytego równomiernie w całej przestrzeni.",
        "isCorrect": false
      },
      {
        "text": "Całkowitą energię kinetyczną cząstki uwięzionej w studni potencjału.",
        "isCorrect": false
      }
    ],
    "explanation": "Sama funkcja falowa $\\Psi(x,t)$ jest wielkością zespoloną i nie jest bezpośrednio mierzalna. Według interpretacji Borna dopiero kwadrat jej modułu $\\rho(x,t) = |\\Psi(x,t)|^2 = \\Psi^*\\Psi$ jest gęstością prawdopodobieństwa: prawdopodobieństwo znalezienia cząstki w przedziale $[x, x+dx]$ wynosi $|\\Psi(x,t)|^2 dx$."
  },
  {
    "id": 45,
    "category": "2. Mechanika kwantowa II — równanie Schrödingera i tunelowanie",
    "text": "Co wyraża warunek normalizacji funkcji falowej $\\int_{-\\infty}^{+\\infty} |\\Psi(x,t)|^2\\,dx = 1$?",
    "options": [
      {
        "text": "Całkowite prawdopodobieństwo znalezienia cząstki gdziekolwiek w przestrzeni wynosi 1.",
        "isCorrect": true
      },
      {
        "text": "Maksymalna wartość amplitudy funkcji falowej w każdym punkcie jest równa dokładnie 1.",
        "isCorrect": false
      },
      {
        "text": "Średnie położenie cząstki w układzie współrzędnych jest zawsze równe jednej jednostce.",
        "isCorrect": false
      },
      {
        "text": "Energia całkowita cząstki w stanie podstawowym musi być zawsze większa lub równa 1.",
        "isCorrect": false
      }
    ],
    "explanation": "Warunek normalizacji oznacza pewność (prawdopodobieństwo równe $1$, czyli $100\\%$), że cząstka istnieje gdzieś w całej przestrzeni. Aby całka była zbieżna i możliwa do znormalizowania, funkcja falowa stanu związanego musi dążyć do zera w nieskończoności ($\\lim_{x\\to\\pm\\infty}\\Psi(x) = 0$)."
  },
  {
    "id": 46,
    "category": "2. Mechanika kwantowa II — równanie Schrödingera i tunelowanie",
    "text": "Które z poniższych warunków MUSI spełniać fizycznie poprawna funkcja falowa $\\psi(x)$ (dla skończonego potencjału)?",
    "options": [
      {
        "text": "Musi być wszędzie skończona i jednowartościowa w przestrzeni.",
        "isCorrect": true
      },
      {
        "text": "Musi być ciągła wraz ze swoją pierwszą pochodną $d\\psi/dx$.",
        "isCorrect": true
      },
      {
        "text": "Musi dążyć do zera w nieskończoności dla stanów związanych.",
        "isCorrect": true
      },
      {
        "text": "Musi przyjmować wyłącznie wartości rzeczywiste i dodatnie.",
        "isCorrect": false
      }
    ],
    "explanation": "Poprawna fizycznie funkcja falowa jest na ogół funkcją zespoloną (może przyjmować wartości ujemne i zespolone!). Musi natomiast być skończona, jednowartościowa (dla jednoznacznego prawdopodobieństwa), ciągła wraz z pierwszą pochodną dla skończonych potencjałów (aby istniała druga pochodna w równaniu Schrödingera) oraz znikać w nieskończoności."
  },
  {
    "id": 47,
    "category": "2. Mechanika kwantowa II — równanie Schrödingera i tunelowanie",
    "text": "Czym jest pakiet falowy w mechanice kwantowej?",
    "options": [
      {
        "text": "Superpozycją wielu fal płaskich o różnych pędach opisującą lokalną cząstkę.",
        "isCorrect": true
      },
      {
        "text": "Pojedynczą falą harmoniczną rozciągającą się równo od $-\\infty$ do $+\\infty$.",
        "isCorrect": false
      },
      {
        "text": "Zbiorem nieoddziałujących fotonów emitowanych spontanicznie przez ciało.",
        "isCorrect": false
      },
      {
        "text": "Obszarem przestrzeni, w którym energia potencjalna cząstki jest ujemna.",
        "isCorrect": false
      }
    ],
    "explanation": "Pojedyncza fala płaska o ściśle określonym pędzie rozciąga się w całej przestrzeni ($\\Delta x = \\infty$). Aby opisać cząstkę zlokalizowaną w skończonym obszarze przestrzeni, składa się (superponuje) wiele fal płaskich o różnych długościach fal/pędach — taki zlokalizowany impuls nazywamy pakietem falowym."
  },
  {
    "id": 48,
    "category": "2. Mechanika kwantowa II — równanie Schrödingera i tunelowanie",
    "text": "Co orzeka zasada nieoznaczoności Heisenberga i jakie jest jej pochodzenie fizyczne?",
    "options": [
      {
        "text": "To fundamentalne prawo natury uniemożliwiające jednoczesny dokładny pomiar $x$ i $p_x$.",
        "isCorrect": true
      },
      {
        "text": "To techniczne ograniczenie współczesnych detektorów, które da się usunąć chłodzeniem.",
        "isCorrect": false
      },
      {
        "text": "To zakaz jednoczesnego pomiaru składowej pędu $p_x$ oraz prostopadłej współrzędnej $y$.",
        "isCorrect": false
      },
      {
        "text": "To relacja opisująca wyłącznie błąd statystyczny przy zliczaniu rozpadów jądrowych.",
        "isCorrect": false
      }
    ],
    "explanation": "Zasada nieoznaczoności Heisenberga ($\\Delta x \\cdot \\Delta p_x \\ge \\frac{\\hbar}{2}$ oraz $\\Delta E \\cdot \\Delta t \\ge \\frac{\\hbar}{2}$) wynika wprost z falowej natury materii (własności transformaty Fouriera pakietu falowego), a nie z niedoskonałości przyrządów pomiarowych — nie da się jej obejść żadną aparaturą. Nie dotyczy różnych składowych, np. $p_x$ i $y$ można zmierzyć jednocześnie."
  },
  {
    "id": 49,
    "category": "2. Mechanika kwantowa II — równanie Schrödingera i tunelowanie",
    "text": "Dla której pary wielkości fizycznych zasada nieoznaczoności Heisenberga NIE nakłada ograniczenia na jednoczesną dokładność pomiaru?",
    "options": [
      {
        "text": "Składowa pędu wzdłuż osi $x$ ($p_x$) oraz współrzędna położenia wzdłuż osi $y$ ($y$).",
        "isCorrect": true
      },
      {
        "text": "Składowa pędu wzdłuż osi $x$ ($p_x$) oraz współrzędna położenia wzdłuż osi $x$ ($x$).",
        "isCorrect": false
      },
      {
        "text": "Energia stanu kwantowego ($E$) oraz czas życia (trwania) tego stanu ($t$).",
        "isCorrect": false
      },
      {
        "text": "Moment pędu układu ($L$) oraz odpowiadający mu kąt obrotu w płaszczyźnie ($\\theta$).",
        "isCorrect": false
      }
    ],
    "explanation": "Zasada nieoznaczoności dotyczy par zmiennych kanonicznie sprzężonych: $(x, p_x)$, $(E, t)$, $(L, \\theta)$ czy $(I, \\omega)$ (wymienionych na slajdzie wykładowym). Nie ogranicza natomiast jednoczesnego pomiaru różnych składowych ortogonalnych, takich jak składowa pędu $p_x$ i położenie $y$."
  },
  {
    "id": 50,
    "category": "2. Mechanika kwantowa II — równanie Schrödingera i tunelowanie",
    "text": "Jak zgodnie z zasadą nieoznaczoności wiąże się szerokość przestrzenna pakietu falowego $\\Delta x$ ze składem falowym (rozrzutem pędu $\\Delta p$)?",
    "options": [
      {
        "text": "Im węższy pakiet w przestrzeni (małe $\\Delta x$), tym więcej fal o różnych pędach potrzeba (duże $\\Delta p$).",
        "isCorrect": true
      },
      {
        "text": "Im węższy pakiet w przestrzeni (małe $\\Delta x$), tym mniej fal składowych potrzeba (małe $\\Delta p$).",
        "isCorrect": false
      },
      {
        "text": "Pojedyncza fala płaska o jednym pędzie ($\\Delta p = 0$) jest idealnie zlokalizowana w jednym punkcie.",
        "isCorrect": false
      },
      {
        "text": "Szerokość pakietu w przestrzeni $\\Delta x$ jest całkowicie niezależna od liczby fal składowych.",
        "isCorrect": false
      }
    ],
    "explanation": "Z relacji $\\Delta x \\cdot \\Delta p \\ge \\hbar/2$ wynika odwrotna zależność: pojedyncza fala płaska ma ściśle określony pęd ($\\Delta p \\to 0$), ale jest rozciągnięta w nieskończoność ($\\Delta x \\to \\infty$). Aby mocno zlokalizować cząstkę w małym obszarze $\\Delta x$, trzeba złożyć bardzo wiele fal o szerokim zakresie pędów (duże $\\Delta p$)."
  },
  {
    "id": 51,
    "category": "2. Mechanika kwantowa II — równanie Schrödingera i tunelowanie",
    "text": "Które trzy filary tworzą klasyczną interpretację kopenhaską mechaniki kwantowej omawianą na wykładzie?",
    "options": [
      {
        "text": "Nieoznaczoność Heisenberga, komplementarność Bohra oraz statystyczna interpretacja Borna.",
        "isCorrect": true
      },
      {
        "text": "Zasada zachowania energii, determinizm Laplace'a oraz teoria eteru Michelsona-Morleya.",
        "isCorrect": false
      },
      {
        "text": "Postulaty orbit Bohra, prawo Stefana-Boltzmanna oraz prawo przesunięć Wiena dla CDC.",
        "isCorrect": false
      },
      {
        "text": "Zasada równoważności Einsteina, transformacja Lorentza oraz teoria pasmowa ciał stałych.",
        "isCorrect": false
      }
    ],
    "explanation": "Według wykładu EFW2 interpretacja kopenhaska opiera się na trzech filarach: (1) zasadzie nieoznaczoności Heisenberga, (2) zasadzie komplementarności Bohra (aspekt falowy i korpuskularny uzupełniają się, nie obserwuje się ich naraz) oraz (3) statystycznej interpretacji funkcji falowej Maxa Borna."
  },
  {
    "id": 52,
    "category": "2. Mechanika kwantowa II — równanie Schrödingera i tunelowanie",
    "text": "Co głosi zasada komplementarności Nielsa Bohra w interpretacji kopenhaskiej?",
    "options": [
      {
        "text": "Aspekt falowy i cząsteczkowy uzupełniają się i nie można opisywać obserwabli obiema naraz.",
        "isCorrect": true
      },
      {
        "text": "Każda cząstka elementarna musi posiadać swoją antycząstkę o dokładnie przeciwnym ładunku.",
        "isCorrect": false
      },
      {
        "text": "Suma energii kinetycznej i potencjalnej cząstki w studni jest zawsze równa zeru.",
        "isCorrect": false
      },
      {
        "text": "Żadne dwa fermiony w jednym atomie nie mogą mieć tego samego zestawu liczb kwantowych.",
        "isCorrect": false
      }
    ],
    "explanation": "Zasada komplementarności Bohra mówi, że opisy falowy i korpuskularny są wobec siebie komplementarne (wzajemnie się uzupełniają), a zarazem wykluczają się w pojedynczym eksperymencie — nie można opisywać zjawisk jednocześnie jako cząstek i fal. Ostatnia opcja to zakaz Pauliego."
  },
  {
    "id": 53,
    "category": "2. Mechanika kwantowa II — równanie Schrödingera i tunelowanie",
    "text": "Jakie jest widmo energii oraz postać przestrzennej funkcji falowej dla cząstki swobodnej ($V = 0$ w całej przestrzeni)?",
    "options": [
      {
        "text": "Widmo energii jest ciągłe ($E \\ge 0$), a rozwiązaniem są fale płaskie $Ae^{ikx}+Be^{-ikx}$.",
        "isCorrect": true
      },
      {
        "text": "Widmo energii jest dyskretne ($E_n \\propto n^2$), a funkcja znika poza odcinkiem $[0,L]$.",
        "isCorrect": false
      },
      {
        "text": "Widmo energii jest dyskretne i ujemne ($E_n \\propto -1/n^2$), dokładnie jak w wodorze.",
        "isCorrect": false
      },
      {
        "text": "Widmo energii ogranicza się do jednej wartości $E = 0$, a funkcja falowa jest stała.",
        "isCorrect": false
      }
    ],
    "explanation": "Dla cząstki swobodnej ($V = 0$) brak warunków brzegowych nakładających dyskretne wartości na wektor falowy $k = \\sqrt{2mE}/\\hbar$. Równanie Schrödingera przyjmuje postać $\\psi'' + k^2\\psi = 0$, którego rozwiązaniem jest superpozycja fal płaskich $Ae^{ikx} + Be^{-ikx}$ (biegnących w prawo i w lewo), a energia może przyjmować dowolne wartości ciągłe $E = p^2/(2m) \\ge 0$."
  },
  {
    "id": 54,
    "category": "2. Mechanika kwantowa II — równanie Schrödingera i tunelowanie",
    "text": "Jakie warunki brzegowe spełnia funkcja falowa cząstki zamkniętej w jednowymiarowej nieskończonej studni potencjału o szerokości $L$ ($0 < x < L$)?",
    "options": [
      {
        "text": "$\\psi(0) = 0$ i $\\psi(L) = 0$, a poza studnią wynosi zero.",
        "isCorrect": true
      },
      {
        "text": "$\\psi(0) = 1$ i $\\psi(L) = 1$, a poza studnią zanika powoli.",
        "isCorrect": false
      },
      {
        "text": "$\\psi'(0) = 0$ i $\\psi'(L) = 0$, a wewnątrz jest stała.",
        "isCorrect": false
      },
      {
        "text": "$\\psi(0) = \\infty$ i $\\psi(L) = \\infty$, bo poza studnią $V = \\infty$.",
        "isCorrect": false
      }
    ],
    "explanation": "Ponieważ poza nieskończoną studnią potencjał wynosi $V = \\infty$, cząstka nie może tam przebywać ($\\psi(x) = 0$ dla $x \\le 0$ oraz $x \\ge L$). Z warunku ciągłości funkcji falowej wynikają warunki brzegowe $\\psi(0) = \\psi(L) = 0$, które wymuszają powstanie fal stojących $\\psi_n(x) = \\sqrt{2/L}\\sin(n\\pi x/L)$."
  },
  {
    "id": 55,
    "category": "2. Mechanika kwantowa II — równanie Schrödingera i tunelowanie",
    "text": "Jak wyraża się skwantowana energia $E_n$ cząstki o masie $m$ w jednowymiarowej nieskończonej studni potencjału o szerokości $L$?",
    "options": [
      {
        "text": "$E_n = \\frac{n^2 h^2}{8mL^2} = \\frac{n^2 \\pi^2 \\hbar^2}{2mL^2}$ dla $n = 1, 2, 3, \\dots$",
        "isCorrect": true
      },
      {
        "text": "$E_n = \\frac{n h^2}{8mL} = \\frac{n \\pi \\hbar^2}{2mL}$ dla $n = 0, 1, 2, \\dots$",
        "isCorrect": false
      },
      {
        "text": "$E_n = -\\frac{n^2 h^2}{8mL^2} = -\\frac{n^2 \\pi^2 \\hbar^2}{2mL^2}$ dla $n = 1, 2, 3, \\dots$",
        "isCorrect": false
      },
      {
        "text": "$E_n = \\frac{h^2}{8mL^2 n^2} = \\frac{\\pi^2 \\hbar^2}{2mL^2 n^2}$ dla $n = 1, 2, 3, \\dots$",
        "isCorrect": false
      }
    ],
    "explanation": "Warunki brzegowe $\\psi(0) = \\psi(L) = 0$ wymuszają kwantowanie wektora falowego $k_n = n\\pi/L$ ($n = 1, 2, 3, \\dots$). Ponieważ $E = \\frac{\\hbar^2 k^2}{2m}$, otrzymujemy $E_n = \\frac{n^2\\pi^2\\hbar^2}{2mL^2} = \\frac{n^2 h^2}{8mL^2} = n^2 E_1$. Zauważ, że $n = 0$ jest wykluczone (dałoby $\\psi \\equiv 0$, brak cząstki)."
  },
  {
    "id": 56,
    "category": "2. Mechanika kwantowa II — równanie Schrödingera i tunelowanie",
    "text": "Dlaczego cząstka w nieskończonej studni potencjału nie może mieć zerowej energii ($E = 0$, czyli stanu spoczynku)?",
    "options": [
      {
        "text": "Uwięzienie w obszarze $\\Delta x \\le L$ wymusza niezerowy pęd z zasady Heisenberga.",
        "isCorrect": true
      },
      {
        "text": "Ścianki studni stale przekazują cząstce energię cieplną nawet w $T = 0\\text{ K}$.",
        "isCorrect": false
      },
      {
        "text": "Wewnątrz nieskończonej studni potencjału energia potencjalna przyjmuje $V > 0$.",
        "isCorrect": false
      },
      {
        "text": "Zakaz Pauliego zabrania pojedynczej cząstce zajmowania stanu o zerowej energii.",
        "isCorrect": false
      }
    ],
    "explanation": "Dla $n = 0$ funkcja falowa $\\sin(0) \\equiv 0$ znika wszędzie, więc cząstki w ogóle by nie było. Fizycznie istnienie minimalnej, niezerowej energii punktu zerowego ($E_1 = \\frac{h^2}{8mL^2} > 0$) jest bezpośrednią konsekwencją zasady nieoznaczoności Heisenberga: uwięzienie cząstki w przedziale $\\Delta x \\le L$ uniemożliwia dokładne wyzerowanie jej pędu ($p = 0, \\Delta p = 0$)."
  },
  {
    "id": 57,
    "category": "2. Mechanika kwantowa II — równanie Schrödingera i tunelowanie",
    "text": "Cząstka w nieskończonej studni potencjału ma energię stanu podstawowego $E_1 = 2\\text{ eV}$. Ile wynosi jej energia w trzecim stanie kwantowym ($n = 3$)?",
    "options": [
      {
        "text": "$E_3 = 18\\text{ eV}$, ponieważ energia rośnie kwadratowo jak $n^2$.",
        "isCorrect": true
      },
      {
        "text": "$E_3 = 6\\text{ eV}$, ponieważ energia rośnie ściśle liniowo jak $n$.",
        "isCorrect": false
      },
      {
        "text": "$E_3 = 8\\text{ eV}$, ponieważ energia rośnie potęgowo jak $2^{n-1}$.",
        "isCorrect": false
      },
      {
        "text": "$E_3 = 0{,}22\\text{ eV}$, ponieważ energia maleje odwrotnie do $n^2$.",
        "isCorrect": false
      }
    ],
    "explanation": "W nieskończonej studni potencjału poziomy energetyczne spełniają zależność $E_n = n^2 E_1$. Dla $n = 3$ otrzymujemy $E_3 = 3^2 \\cdot E_1 = 9 \\cdot 2\\text{ eV} = 18\\text{ eV}$ (kolejne poziomy to $E_1, 4E_1, 9E_1, 16E_1, \\dots$ — dokładnie jak na wykresie z wykładu EFW2)."
  },
  {
    "id": 58,
    "category": "2. Mechanika kwantowa II — równanie Schrödingera i tunelowanie",
    "text": "Jak zmieni się energia stanu podstawowego $E_1$ elektronu w nieskończonej studni potencjału, jeśli dwukrotnie poszerzymy studnię ($L' = 2L$)?",
    "options": [
      {
        "text": "Zmaleje czterokrotnie, ponieważ $E_1$ zależy odwrotnie od $L^2$.",
        "isCorrect": true
      },
      {
        "text": "Zmaleje dwukrotnie, ponieważ $E_1$ zależy odwrotnie liniowo od $L$.",
        "isCorrect": false
      },
      {
        "text": "Wzrośnie czterokrotnie, ponieważ $E_1$ rośnie proporcjonalnie do $L^2$.",
        "isCorrect": false
      },
      {
        "text": "Pozostanie bez zmian, ponieważ zależy wyłącznie od masy cząstki $m$.",
        "isCorrect": false
      }
    ],
    "explanation": "Ze wzoru $E_1 = \\frac{h^2}{8mL^2}$ widać, że energia jest odwrotnie proporcjonalna do kwadratu szerokości studni $L^2$. Dwukrotne zwiększenie $L$ zmniejsza więc $E_1$ o czynnik $2^2 = 4$ (im większy obszar dostępny dla cząstki, tym dłuższa jej fala stojąca i niższa energia kinetyczna)."
  },
  {
    "id": 59,
    "category": "2. Mechanika kwantowa II — równanie Schrödingera i tunelowanie",
    "text": "Ile maksimów oraz ile wewnętrznych węzłów (miejsc zerowych wewnątrz przedziału $0 < x < L$) ma gęstość prawdopodobieństwa $|\\psi_3(x)|^2$ w nieskończonej studni potencjału?",
    "options": [
      {
        "text": "Dokładnie $3$ maksima oraz $2$ węzły wewnątrz studni potencjału.",
        "isCorrect": true
      },
      {
        "text": "Dokładnie $3$ maksima oraz $3$ węzły wewnątrz studni potencjału.",
        "isCorrect": false
      },
      {
        "text": "Dokładnie $2$ maksima oraz $3$ węzły wewnątrz studni potencjału.",
        "isCorrect": false
      },
      {
        "text": "Dokładnie $9$ maksimów oraz $8$ węzłów wewnątrz studni potencjału.",
        "isCorrect": false
      }
    ],
    "explanation": "Dla $n$-tego stanu w nieskończonej studni potencjału funkcja falowa ma postać $\\psi_n(x) = \\sqrt{2/L}\\sin(n\\pi x/L)$. Jej gęstość prawdopodobieństwa $|\\psi_n(x)|^2$ posiada zawsze $n$ maksimów (brzuchów fali stojącej) oraz $(n - 1)$ węzłów (miejsc o zerowym prawdopodobieństwie) wewnątrz przedziału $(0, L)$. Dla $n=3$ są to $3$ maksima i $2$ węzły."
  },
  {
    "id": 60,
    "category": "2. Mechanika kwantowa II — równanie Schrödingera i tunelowanie",
    "text": "Czym jest kropka kwantowa (quantum dot) i gdzie znajduje powszechne zastosowanie technologiczne?",
    "options": [
      {
        "text": "Trójwymiarową studnią potencjału dla elektronów, stosowaną m.in. w ekranach QLED.",
        "isCorrect": true
      },
      {
        "text": "Jednowymiarową barierą tunelową dla protonów, stosowaną w reaktorach jądrowych.",
        "isCorrect": false
      },
      {
        "text": "Mikroskopijną wnęką ze zjonizowanym gazem, stosowaną w telewizorach plazmowych.",
        "isCorrect": false
      },
      {
        "text": "Pojedynczym atomem gazu szlachetnego używanym jako moderator szybkich neutronów.",
        "isCorrect": false
      }
    ],
    "explanation": "Kropka kwantowa to nanostruktura półprzewodnikowa ograniczająca ruch elektronów we wszystkich trzech wymiarach (3D studnia potencjału o rozmiarach nanometrów, porównywalnych z $\\lambda$ elektronu). Zmieniając jej rozmiar, precyzyjnie stroi się poziomy energetyczne i barwę emitowanego światła — wykorzystuje się to w nowoczesnych wyświetlaczach QLED oraz w medycznym znakowaniu komórek."
  },
  {
    "id": 61,
    "category": "2. Mechanika kwantowa II — równanie Schrödingera i tunelowanie",
    "text": "Na czym polega zjawisko tunelowania kwantowego przez barierę potencjału o wysokości $V_0$?",
    "options": [
      {
        "text": "Na niezerowym prawdopodobieństwie przejścia cząstki o energii $E < V_0$ przez barierę.",
        "isCorrect": true
      },
      {
        "text": "Na chwilowym zwiększeniu masy cząstki w celu klasycznego pokonania bariery $V_0$.",
        "isCorrect": false
      },
      {
        "text": "Na emisji fotonu pozwalającego elektronowi przeskoczyć ponad nieskończoną ścianą.",
        "isCorrect": false
      },
      {
        "text": "Na całkowitym odbiciu każdej cząstki, której energia kinetyczna przekracza $V_0$.",
        "isCorrect": false
      }
    ],
    "explanation": "W fizyce klasycznej cząstka o energii $E < V_0$ zawsze odbija się od bariery potencjału. W mechanice kwantowej funkcja falowa wewnątrz bariery nie znika skokowo, lecz zanika wykładniczo ($\\propto e^{-\\kappa x}$). Jeśli bariera ma skończoną szerokość $L$, po jej drugiej stronie pojawia się fala o niezerowej amplitudzie — cząstka ma niezerowe prawdopodobieństwo przetunelowania."
  },
  {
    "id": 62,
    "category": "2. Mechanika kwantowa II — równanie Schrödingera i tunelowanie",
    "text": "Cząstka o energii $E \\le V_0$ pada na prostokątną barierę potencjału o wysokości $V_0$ i szerokości $L$. Dla której energii prawdopodobieństwo tunelowania jest największe? (pytanie z kolokwium)",
    "options": [
      {
        "text": "Dla $E = V_0$ (najmniejszy deficyt energii względem wysokości bariery).",
        "isCorrect": true
      },
      {
        "text": "Dla $E = \\frac{1}{4}V_0$ (największy deficyt energii względem bariery).",
        "isCorrect": false
      },
      {
        "text": "Dla $E = \\frac{1}{2}V_0$ (dokładnie połowa wysokości bariery potencjału).",
        "isCorrect": false
      },
      {
        "text": "Prawdopodobieństwo tunelowania nie zależy w ogóle od energii cząstki.",
        "isCorrect": false
      }
    ],
    "explanation": "To bezpośrednie pytanie z archiwalnego kolokwium (kolos2.pdf)! Prawdopodobieństwo transmisji przez barierę rośnie monotonicznie ze wzrostem stosunku $E/V_0$ (wykładnik tłumienia $\\kappa = \\sqrt{2m(V_0 - E)}/\\hbar$ maleje do zera przy $E \\to V_0$; widać to również wyraźnie na wykresie $T(E/V_0)$ ze slajdu 18 wykładu EFW2). Zatem spośród wartości $E \\le V_0$ największe $T$ występuje dla $E = V_0$."
  },
  {
    "id": 63,
    "category": "2. Mechanika kwantowa II — równanie Schrödingera i tunelowanie",
    "text": "Jak zależy współczynnik transmisji (prawdopodobieństwo tunelowania) $T$ przez szeroką barierę ($\\kappa L \\gg 1$) od szerokości bariery $L$ i masy cząstki $m$?",
    "options": [
      {
        "text": "Maleje wykładniczo ze wzrostem szerokości $L$ oraz ze wzrostem pierwiastka z masy $\\sqrt{m}$.",
        "isCorrect": true
      },
      {
        "text": "Maleje liniowo wraz ze wzrostem szerokości $L$, a nie zależy zupełnie od masy cząstki $m$.",
        "isCorrect": false
      },
      {
        "text": "Rośnie wykładniczo ze wzrostem masy cząstki $m$, ponieważ cięższe cząstki mają większy pęd.",
        "isCorrect": false
      },
      {
        "text": "Maleje odwrotnie proporcjonalnie do $L^2$ i rośnie liniowo wraz z wysokością bariery $V_0$.",
        "isCorrect": false
      }
    ],
    "explanation": "Dla szerokiej bariery ($\\kappa L \\gg 1$) współczynnik transmisji wyraża się przybliżonym wzorem $T \\approx 16\\frac{E}{V_0}(1 - \\frac{E}{V_0})e^{-2\\kappa L}$, gdzie $\\kappa = \\sqrt{\\frac{2m(V_0-E)}{\\hbar^2}}$. Oznacza to silny, wykładniczy spadek prawdopodobieństwa tunelowania wraz ze wzrostem szerokości bariery $L$, deficytu energii $(V_0-E)$ oraz masy cząstki $m$ (dlatego najłatwiej tunelują lekkie elektrony)."
  },
  {
    "id": 64,
    "category": "2. Mechanika kwantowa II — równanie Schrödingera i tunelowanie",
    "text": "Co przewiduje mechanika kwantowa dla cząstki o energii większej od wysokości skończonej bariery potencjału ($E > V_0$)?",
    "options": [
      {
        "text": "Cząstka ma niezerowe prawdopodobieństwo odbicia od bariery mimo posiadania $E > V_0$.",
        "isCorrect": true
      },
      {
        "text": "Cząstka zawsze przechodzi przez barierę w $100\\%$ przypadków bez żadnego odbicia.",
        "isCorrect": false
      },
      {
        "text": "Cząstka zostaje na stałe uwięziona wewnątrz bariery i traci całą energię kinetyczną.",
        "isCorrect": false
      },
      {
        "text": "Cząstka całkowicie zanika, zamieniając się w dwa fotony promieniowania gamma.",
        "isCorrect": false
      }
    ],
    "explanation": "Na slajdzie 18 wykładu EFW2 wprost podkreślono jako jeden z wniosków z równania Schrödingera dla bariery potencjału: nie tylko cząstka o $E < V_0$ może przejść (tunelowanie), ale również cząstka o $E > V_0$ może się odbić (współczynnik transmisji $T < 1$ poza szczególnymi rezonansami) — podobnie jak fala świetlna częściowo odbijająca się na granicy dwóch ośrodków."
  },
  {
    "id": 65,
    "category": "2. Mechanika kwantowa II — równanie Schrödingera i tunelowanie",
    "text": "Które z poniższych zjawisk i urządzeń wykorzystują kwantowe zjawisko tunelowania?",
    "options": [
      {
        "text": "Skaningowy mikroskop tunelowy (STM) obrazujący powierzchnie z rozdzielczością atomową.",
        "isCorrect": true
      },
      {
        "text": "Rozpad promieniotwórczy $\\alpha$ ciężkich jąder oraz fuzja termojądrowa w gwiazdach.",
        "isCorrect": true
      },
      {
        "text": "Złącze Josephsona w nadprzewodnikach oraz prądy upływu w układach scalonych VLSI.",
        "isCorrect": true
      },
      {
        "text": "Rozpraszanie Comptona wysokoenergetycznych fotonów na swobodnych elektronach.",
        "isCorrect": false
      }
    ],
    "explanation": "Wszystkie trzy pierwsze opcje to flagowe przykłady tunelowania kwantowego z wykładu i kolokwiów (STM, rozpad $\\alpha$, synteza termojądrowa w Słońcu, upływ prądu w tranzystorach VLSI, złącze Josephsona, pamięci Flash, przewodzenie przez warstwę tlenku Al). Efekt Comptona to zderzenie relatywistyczne fotonu z elektronem, niezwiązane z tunelowaniem."
  },
  {
    "id": 66,
    "category": "2. Mechanika kwantowa II — równanie Schrödingera i tunelowanie",
    "text": "Dlaczego skaningowy mikroskop tunelowy (STM) osiąga ekstremalną, subatomową czułość pomiaru wysokości nierówności powierzchni?",
    "options": [
      {
        "text": "Natężenie prądu tunelowego zależy wykładniczo od odległości ostrza od próbki ($I \\propto e^{-\\Delta x}$).",
        "isCorrect": true
      },
      {
        "text": "Ostrze mikroskopu dotyka fizycznie każdego atomu i mierzy jego mechaniczną twardość.",
        "isCorrect": false
      },
      {
        "text": "Mikroskop wykorzystuje promieniowanie rentgenowskie o długości fali mniejszej od jądra.",
        "isCorrect": false
      },
      {
        "text": "Natężenie prądu tunelowego rośnie proporcjonalnie do kwadratu odległości ostrza od próbki.",
        "isCorrect": false
      }
    ],
    "explanation": "W mikroskopie STM między ostrzem a przewodzącą próbką znajduje się cienka bariera próżniowa. Ponieważ prąd tunelowy maleje wykładniczo wraz ze wzrostem szerokości tej bariery ($I \\propto e^{-2\\kappa \\Delta x}$), nawet ułamkowa zmiana odległości (o ułamek średnicy atomu) powoduje dramatyczną zmianę mierzonego prądu, co umożliwia mapowanie pojedynczych atomów na powierzchni."
  },
  {
    "id": 67,
    "category": "2. Mechanika kwantowa II — równanie Schrödingera i tunelowanie",
    "text": "W jaki sposób zjawisko tunelowania kwantowego ogranicza dalszą miniaturyzację tranzystorów w nowoczesnych układach scalonych (VLSI)?",
    "options": [
      {
        "text": "Przez ultracienkie warstwy izolatora (np. tlenku krzemu) płyną niepożądane prądy upływu.",
        "isCorrect": true
      },
      {
        "text": "Elektrony przestają posiadać spin w kanałach półprzewodnikowych krótszych niż $10\\text{ nm}$.",
        "isCorrect": false
      },
      {
        "text": "Krzem zamienia się w nadprzewodnik pierwszego rodzaju w temperaturze pokojowej.",
        "isCorrect": false
      },
      {
        "text": "Atomy krzemu ulegają samorzutnemu rozpadowi alfa pod wpływem napięcia zasilania.",
        "isCorrect": false
      }
    ],
    "explanation": "W zminiaturyzowanych układach VLSI warstwy izolacyjne (np. tlenek krzemu pod bramką tranzystora) stają się tak cienkie (kilka warstw atomowych), że elektrony zaczynają przez nie tunelować. Powoduje to niepożądane prądy upływu, grzanie układów i straty mocy — to klasyczny przykład efektów kwantowych w elektronice omawiany na wykładzie EFW2."
  },
  {
    "id": 68,
    "category": "2. Mechanika kwantowa II — równanie Schrödingera i tunelowanie",
    "text": "Co łączy równanie Schrödingera z pojęciem funkcji falowej $\\Psi$ z punktu widzenia matematycznego typu tego równania?",
    "options": [
      {
        "text": "Jest liniowym cząstkowym równaniem różniczkowym drugiego rzędu o zespolonych rozwiązaniach.",
        "isCorrect": true
      },
      {
        "text": "Jest nieliniowym równaniem algebraicznym pierwszego stopnia o rozwiązaniach rzeczywistych.",
        "isCorrect": false
      },
      {
        "text": "Jest równaniem całkowym czwartego rzędu opisującym klasyczne tory punktów materialnych.",
        "isCorrect": false
      },
      {
        "text": "Jest układem czterech równań wektorowych identycznych z równaniami pola Maxwella.",
        "isCorrect": false
      }
    ],
    "explanation": "Na slajdzie 2 wykładu EFW2 wprost podano charakterystykę równania Schrödingera: jest to liniowe cząstkowe równanie różniczkowe drugiego rzędu (ze względu na drugą pochodną przestrzenną), a jego rozwiązaniem jest zespolona funkcja falowa $\\Psi(\\vec{r}, t) \\in \\mathbb{C}$. Liniowość równania gwarantuje obowiązywanie zasady superpozycji stanów kwantowych."
  },
  {
    "id": 69,
    "category": "3. Elementy fizyki atomowej i układ okresowy",
    "text": "Z rozwiązania równania Schrödingera dla atomu wodoru (bez zewnętrznych pól) wynika, że: (pytanie z kolokwium)",
    "options": [
      {
        "text": "Gęstość prawdopodobieństwa dla elektronów $s$ jest sferycznie symetryczna, a wyższe $n$ to średnio większe $r$.",
        "isCorrect": true
      },
      {
        "text": "Energia elektronu w atomie wodoru zależy ściśle od wszystkich trzech liczb kwantowych $n$, $l$ oraz $m_l$.",
        "isCorrect": false
      },
      {
        "text": "Gęstość prawdopodobieństwa znalezienia dowolnego elektronu dokładnie w jądrze atomowym wynosi zawsze zero.",
        "isCorrect": false
      },
      {
        "text": "Rozkłady gęstości prawdopodobieństwa wszystkich orbitali ($s, p, d, f$) mają identyczną symetrię sferyczną.",
        "isCorrect": false
      }
    ],
    "explanation": "To bezpośrednie pytanie z kolokwium (24.11.2022)! Dla atomu wodoru (potencjał $\\propto 1/r$, brak pola $B$) energia zależy WYŁĄCZNIE od głównej liczby kwantowej $n$. Rozkład $|\\psi|^2$ jest sferycznie symetryczny tylko dla stanów typu $s$ ($l=0$), a w samym jądrze ($r=0$) gęstość $|\\psi(0)|^2$ dla elektronów $s$ jest NIEZEROWA (i nawet maksymalna!). Im wyższe $n$, tym elektron przebywa średnio dalej od jądra."
  },
  {
    "id": 70,
    "category": "3. Elementy fizyki atomowej i układ okresowy",
    "text": "Dlaczego dla atomu wodoru gęstość prawdopodobieństwa $|\\psi(0)|^2$ dla orbitali $s$ ($l=0$) w samym jądrze jest niezerowa, mimo że radialny rozkład $P(r) = 4\\pi r^2 |\\psi(r)|^2$ wynosi tam zero?",
    "options": [
      {
        "text": "Bo funkcja radialna $R_{n0}(0) \\neq 0$, a zerowanie $P(0)$ wynika wyłącznie z czynnika objętości $4\\pi r^2$.",
        "isCorrect": true
      },
      {
        "text": "Bo w samym jądrze atomowym oddziaływanie Coulomba przyjmuje wartość dodatnią i odpycha elektrony.",
        "isCorrect": false
      },
      {
        "text": "Bo zakaz Pauliego zmusza elektron $1s$ do przebywania zawsze w odległości większej od promienia Bohra.",
        "isCorrect": false
      },
      {
        "text": "Bo funkcja falowa $R_{n0}(r)$ znika w punkcie $r = 0$, natomiast czynnik $4\\pi r^2$ dąży tam do nieskończoności.",
        "isCorrect": false
      }
    ],
    "explanation": "Częsta pułapka egzaminacyjna! Sama gęstość prawdopodobieństwa $|\\psi(r)|^2$ dla stanów $s$ osiąga maksimum właśnie w jądrze ($r = 0$). Natomiast radialna gęstość rozkładu $P(r) = 4\\pi r^2 |R_{nl}(r)|^2$ (prawdopodobieństwo znalezienia elektronu w cienkiej sferycznej warstwie o promieniu $r$) zeruje się przy $r \\to 0$ z powodu czynnika geometrycznego $r^2$. Niezerowa gęstość $|\\psi(0)|^2$ umożliwia m.in. wychwyt elektronu (EC) przez jądro."
  },
  {
    "id": 71,
    "category": "3. Elementy fizyki atomowej i układ okresowy",
    "text": "Które zestawy liczb kwantowych $(n, l, m_l, m_s)$ są DOZWOLONE dla elektronu w atomie?",
    "options": [
      {
        "text": "$(n=3, l=2, m_l=-2, m_s=+1/2)$",
        "isCorrect": true
      },
      {
        "text": "$(n=2, l=0, m_l=0, m_s=-1/2)$",
        "isCorrect": true
      },
      {
        "text": "$(n=2, l=2, m_l=1, m_s=+1/2)$",
        "isCorrect": false
      },
      {
        "text": "$(n=3, l=1, m_l=-2, m_s=-1/2)$",
        "isCorrect": false
      }
    ],
    "explanation": "Dozwolone wartości liczb kwantowych to: $n = 1, 2, 3, \\dots$; $l = 0, 1, \\dots, n-1$; $m_l = -l, \\dots, 0, \\dots, +l$; $m_s = \\pm 1/2$. Zestaw $(2, 2, 1, +1/2)$ jest zabroniony, bo $l$ musi być mniejsze od $n$ ($l \\le n-1$). Zestaw $(3, 1, -2, -1/2)$ jest zabroniony, bo $|m_l|$ nie może przekraczać $l$."
  },
  {
    "id": 72,
    "category": "3. Elementy fizyki atomowej i układ okresowy",
    "text": "Które liczby kwantowe opisują stan elektronu oznaczony symbolem $3d$?",
    "options": [
      {
        "text": "Główna liczba kwantowa $n = 3$ oraz orbitalna liczba kwantowa $l = 2$.",
        "isCorrect": true
      },
      {
        "text": "Główna liczba kwantowa $n = 3$ oraz orbitalna liczba kwantowa $l = 3$.",
        "isCorrect": false
      },
      {
        "text": "Główna liczba kwantowa $n = 2$ oraz orbitalna liczba kwantowa $l = 3$.",
        "isCorrect": false
      },
      {
        "text": "Główna liczba kwantowa $n = 3$ oraz orbitalna liczba kwantowa $l = 1$.",
        "isCorrect": false
      }
    ],
    "explanation": "W notacji spektroskopowej cyfra oznacza główną liczbę kwantową $n$, a litera oznacza orbitalną liczbę kwantową $l$ według przyporządkowania: $l = 0 \\to s$, $l = 1 \\to p$, $l = 2 \\to d$, $l = 3 \\to f$, $l = 4 \\to g$. Zatem stan $3d$ odpowiada wartościom $n = 3$ oraz $l = 2$."
  },
  {
    "id": 73,
    "category": "3. Elementy fizyki atomowej i układ okresowy",
    "text": "Ile elektronów może maksymalnie zmieścić się w atomie na czwartej powłoce elektronowej ($n = 4$, powłoka N)? (pytanie z kolokwium)",
    "options": [
      {
        "text": "Maksymalnie $32$ elektrony zgodnie ze wzorem $2n^2$.",
        "isCorrect": true
      },
      {
        "text": "Maksymalnie $16$ elektronów zgodnie ze wzorem $n^2$.",
        "isCorrect": false
      },
      {
        "text": "Maksymalnie $18$ elektronów zgodnie ze wzorem $2(n-1)^2$.",
        "isCorrect": false
      },
      {
        "text": "Maksymalnie $8$ elektronów zgodnie ze wzorem $2n$.",
        "isCorrect": false
      }
    ],
    "explanation": "To bezpośrednie pytanie z archiwalnego kolokwium (kolos2.pdf)! Pojemność powłoki (stopień degeneracji poziomu $n$ z uwzględnieniem dwóch orientacji spinu) wynosi $2\\sum_{l=0}^{n-1}(2l+1) = 2n^2$. Dla $n = 4$ otrzymujemy $2 \\times 4^2 = 2 \\times 16 = 32$ elektrony (podpowłoki $4s^2, 4p^6, 4d^{10}, 4f^{14}$: $2+6+10+14 = 32$)."
  },
  {
    "id": 74,
    "category": "3. Elementy fizyki atomowej i układ okresowy",
    "text": "Ile maksymalnie elektronów może pomieścić pojedyncza podpowłoka typu $d$ ($l = 2$)?",
    "options": [
      {
        "text": "Maksymalnie $10$ elektronów ze wzoru $2(2l+1)$.",
        "isCorrect": true
      },
      {
        "text": "Maksymalnie $6$ elektronów ze wzoru $2(2l-1)$.",
        "isCorrect": false
      },
      {
        "text": "Maksymalnie $14$ elektronów ze wzoru $2(2l+3)$.",
        "isCorrect": false
      },
      {
        "text": "Maksymalnie $5$ elektronów ze wzoru $(2l+1)$.",
        "isCorrect": false
      }
    ],
    "explanation": "Dla ustalonej orbitalnej liczby kwantowej $l$ magnetyczna liczba kwantowa $m_l$ przyjmuje $(2l+1)$ wartości (od $-l$ do $+l$). Ponieważ w każdym stanie orbitalnym mogą znajdować się $2$ elektrony o przeciwnych spinach ($m_s = \\pm 1/2$), pojemność podpowłoki wynosi $2(2l+1)$. Dla podpowłoki $d$ ($l=2$) daje to $2 \\times 5 = 10$ elektronów (dla $s$: 2, $p$: 6, $d$: 10, $f$: 14)."
  },
  {
    "id": 75,
    "category": "3. Elementy fizyki atomowej i układ okresowy",
    "text": "Ile wynosi wartość bezwzględna wektora orbitalnego momentu pędu $L$ oraz jego rzut $L_z$ na oś $z$ dla elektronu o liczbach $l$ i $m_l$?",
    "options": [
      {
        "text": "$L = \\hbar\\sqrt{l(l+1)}$ oraz $L_z = m_l \\hbar$.",
        "isCorrect": true
      },
      {
        "text": "$L = l\\hbar$ oraz $L_z = \\hbar\\sqrt{m_l(m_l+1)}$.",
        "isCorrect": false
      },
      {
        "text": "$L = \\hbar\\sqrt{l(l-1)}$ oraz $L_z = (2l+1)\\hbar$.",
        "isCorrect": false
      },
      {
        "text": "$L = n\\hbar$ oraz $L_z = (l + m_l)\\hbar$.",
        "isCorrect": false
      }
    ],
    "explanation": "Z rozwiązania równania Schrödingera w układzie sferycznym wartość (długość) wektora orbitalnego momentu pędu wynosi $L = \\hbar\\sqrt{l(l+1)}$, a jego rzut na wyróżnioną oś $z$ (np. kierunek zewnętrznego pola magnetycznego) jest skwantowany przestrzennie: $L_z = m_l\\hbar$, gdzie $m_l = -l, \\dots, +l$."
  },
  {
    "id": 76,
    "category": "3. Elementy fizyki atomowej i układ okresowy",
    "text": "Dlaczego wektor orbitalnego momentu pędu $\\vec{L}$ (ani momentu magnetycznego $\\vec{\\mu}_L$) elektronu NIGDY nie może być dokładnie równoległy do zewnętrznego pola magnetycznego $\\vec{B}$? (pytanie z kolokwium)",
    "options": [
      {
        "text": "Maksymalny rzut $L_{z,\\max} = l\\hbar$ jest mniejszy niż całkowita długość $L = \\hbar\\sqrt{l(l+1)}$.",
        "isCorrect": true
      },
      {
        "text": "W zewnętrznym polu magnetycznym liczba kwantowa $m_l$ przyjmuje zawsze zero.",
        "isCorrect": false
      },
      {
        "text": "Ujemny ładunek elektronu powoduje całkowite zerowanie wektora $\\vec{L}$ w polu $\\vec{B}$.",
        "isCorrect": false
      },
      {
        "text": "Wektor $\\vec{L}$ ustawia się w polu magnetycznym wyłącznie prostopadle do osi $\\vec{B}$.",
        "isCorrect": false
      }
    ],
    "explanation": "To klasyczne pytanie dowodowe z kolokwium (kolos2.pdf)! Dla każdego $l > 0$ zachodzi nierówność $l^2 < l^2 + l$, czyli $l < \\sqrt{l(l+1)}$. Dlatego największy możliwy rzut momentu pędu na kierunek pola ($L_{z,\\max} = l\\hbar$) jest ZAWSZE ściśle mniejszy niż długość samego wektora ($|\\vec{L}| = \\hbar\\sqrt{l(l+1)}$). Wektor $\\vec{L}$ nie może więc nigdy pokryć się z osią $z$ — zamiast tego precesuje wokół kierunku pola $\\vec{B}$."
  },
  {
    "id": 77,
    "category": "3. Elementy fizyki atomowej i układ okresowy",
    "text": "Jaki jest związek między wektorem orbitalnego momentu magnetycznego elektronu $\\vec{\\mu}_L$ a jego orbitalnym momentem pędu $\\vec{L}$?",
    "options": [
      {
        "text": "$\\vec{\\mu}_L = -\\frac{e}{2m_e}\\vec{L}$ (wektory są równoległe, ale mają przeciwne zwroty).",
        "isCorrect": true
      },
      {
        "text": "$\\vec{\\mu}_L = +\\frac{e}{2m_e}\\vec{L}$ (wektory są równoległe i mają identyczne zwroty).",
        "isCorrect": false
      },
      {
        "text": "$\\vec{\\mu}_L = -\\frac{2m_e}{e}\\vec{L}$ (wektory są wzajemnie prostopadłe w przestrzeni).",
        "isCorrect": false
      },
      {
        "text": "$\\vec{\\mu}_L = +\\frac{e}{m_e}\\vec{L}$ (z czynnikiem żyromagnetycznym równym dokładnie 2).",
        "isCorrect": false
      }
    ],
    "explanation": "Krążący elektron stanowi mikroskopijną pętlę z prądem o momencie magnetycznym $\\vec{\\mu}_L = -\\frac{e}{2m_e}\\vec{L}$. Znak minus (zwrot przeciwny do $\\vec{L}$) wynika z ujemnego ładunku elektronu ($-e$). Jednostką orbitalnego i spinowego momentu magnetycznego elektronu jest magneton Bohra $\\mu_B = \\frac{e\\hbar}{2m_e}$."
  },
  {
    "id": 78,
    "category": "3. Elementy fizyki atomowej i układ okresowy",
    "text": "Na czym polega zjawisko (efekt) Zeemana obserwowane w spektroskopii atomowej?",
    "options": [
      {
        "text": "Na rozszczepieniu poziomów energetycznych i linii widmowych atomu w polu magnetycznym.",
        "isCorrect": true
      },
      {
        "text": "Na rozszczepieniu wiązki elektrycznie obojętnych atomów w jednorodnym polu elektrycznym.",
        "isCorrect": false
      },
      {
        "text": "Na przesunięciu długości fali fotonów rozproszonych sprężyście na swobodnych elektronach.",
        "isCorrect": false
      },
      {
        "text": "Na całkowitym zaniku widma liniowego atomu po schłodzeniu gazu poniżej zera Celsjusza.",
        "isCorrect": false
      }
    ],
    "explanation": "W zewnętrznym polu magnetycznym $B$ moment magnetyczny elektronu uzyskuje energię potencjalną $V_B = \\mu_B m_l B$, co znosi degenerację względem magnetycznej liczby kwantowej $m_l$ i rozszczepia poziomy energetyczne (a w konsekwencji linie widmowe). W normalnym efekcie Zeemana (z regułami wyboru $\\Delta m_l = 0, \\pm 1$) pojedyncza linia rozszczepia się na 3 składowe."
  },
  {
    "id": 79,
    "category": "3. Elementy fizyki atomowej i układ okresowy",
    "text": "Na ile podpoziomów energetycznych rozszczepi się w jednorodnym polu magnetycznym poziom $2p$ ($l = 1$) w wyniku efektu Zeemana (pomijając spin)?",
    "options": [
      {
        "text": "Na $3$ podpoziomy odpowiadające wartościom $m_l = -1, 0, +1$.",
        "isCorrect": true
      },
      {
        "text": "Na $2$ podpoziomy odpowiadające wartościom $m_l = -1, +1$.",
        "isCorrect": false
      },
      {
        "text": "Na $5$ podpoziomów odpowiadające wartościom $m_l = -2, \\dots, +2$.",
        "isCorrect": false
      },
      {
        "text": "Poziom $2p$ nie ulega żadnemu rozszczepieniu w polu magnetycznym.",
        "isCorrect": false
      }
    ],
    "explanation": "Liczba podpoziomów w polu magnetycznym dla danego $l$ wynosi $2l + 1$. Dla stanu $2p$ mamy $l = 1$, więc $m_l \\in \\{-1, 0, +1\\}$ — poziom rozszczepia się na $3$ podpoziomy. Natomiast poziom $1s$ ($l = 0$, tylko $m_l = 0$) nie rozszczepia się."
  },
  {
    "id": 80,
    "category": "3. Elementy fizyki atomowej i układ okresowy",
    "text": "Jakie są reguły wyboru dla dozwolonych dipolowych przejść elektronowych w atomie (m.in. w efekcie Zeemana i laserach)?",
    "options": [
      {
        "text": "$\\Delta l = \\pm 1$ oraz $\\Delta m_l = 0, \\pm 1$.",
        "isCorrect": true
      },
      {
        "text": "$\\Delta l = 0$ oraz $\\Delta m_l = 0, \\pm 2$.",
        "isCorrect": false
      },
      {
        "text": "$\\Delta l = \\pm 2$ oraz $\\Delta m_l = 0, \\pm 2$.",
        "isCorrect": false
      },
      {
        "text": "$\\Delta n = \\pm 1$ oraz $\\Delta l = 0, \\pm 2$.",
        "isCorrect": false
      }
    ],
    "explanation": "Ze względu na zachowanie momentu pędu przy emisji lub absorpcji pojedynczego fotonu (który ma spin 1) dozwolone przejścia atomowe spełniają reguły wyboru $\\Delta l = \\pm 1$ oraz $\\Delta m_l = 0, \\pm 1$. Przejścia niespełniające tych reguł są „zabronione” (bardzo mało prawdopodobne) — stąd biorą się długożyciowe poziomy metastabilne w laserach!"
  },
  {
    "id": 81,
    "category": "3. Elementy fizyki atomowej i układ okresowy",
    "text": "Rozszczepienie wiązki atomów srebra na dwie w doświadczeniu Sterna-Gerlacha: (pytanie z kolokwium)",
    "options": [
      {
        "text": "Jest dowodem na istnienie wewnętrznego momentu pędu elektronu zwanego spinem.",
        "isCorrect": true
      },
      {
        "text": "Jest spowodowane wyłącznie orbitalnym momentem pędu elektronów walencyjnych.",
        "isCorrect": false
      },
      {
        "text": "Można zaobserwować zarówno w jednorodnym, jak i w niejednorodnym polu magnetycznym.",
        "isCorrect": false
      },
      {
        "text": "Można zaobserwować wyłącznie w silnym niejednorodnym polu elektrostatycznym.",
        "isCorrect": false
      }
    ],
    "explanation": "To bezpośrednie pytanie z kolokwium (24.11.2022)! Atom srebra ($\\text{Ag}$) ma jeden niesparowany elektron walencyjny w stanie $5s$ ($l = 0$, czyli zerowy orbitalny moment pędu!). Rozszczepienie wiązki w NIEJEDNORODNYM polu magnetycznym ($dB/dz \\neq 0$) na dokładnie dwie (parzysta liczba!) wiązki dowodzi istnienia spinu połówkowego ($s = 1/2, m_s = \\pm 1/2$). W polu jednorodnym wypadkowa siła na dipol wynosi zero."
  },
  {
    "id": 82,
    "category": "3. Elementy fizyki atomowej i układ okresowy",
    "text": "Dlaczego w doświadczeniu Sterna-Gerlacha konieczne jest zastosowanie NIEJEDNORODNEGO pola magnetycznego ($dB/dz \\neq 0$)?",
    "options": [
      {
        "text": "Tylko w polu o niezerowym gradiencie na dipol magnetyczny działa wypadkowa siła odchylająca tor.",
        "isCorrect": true
      },
      {
        "text": "Tylko w polu niejednorodnym atomy srebra uzyskują dodatni ładunek elektryczny i siłę Lorentza.",
        "isCorrect": false
      },
      {
        "text": "W jednorodnym polu magnetycznym spin elektronu znika i atomy tracą swój moment magnetyczny.",
        "isCorrect": false
      },
      {
        "text": "W jednorodnym polu magnetycznym wiązka atomów srebra rozszczepia się na nieskończenie wiele linii.",
        "isCorrect": false
      }
    ],
    "explanation": "Na elektrycznie obojętny atom posiadający moment magnetyczny $\\vec{\\mu}$ w polu jednorodnym działa jedynie moment sił (skręcający), natomiast wypadkowa siła translacyjna wynosi zero ($F_z = \\mu_z \\frac{\\partial B}{\\partial z} = 0$). Dopiero gradient pola magnetycznego ($\\frac{\\partial B}{\\partial z} \\neq 0$) wywiera siłę odchylającą atomy w górę lub w dół zależnie od znaku $m_s = \\pm 1/2$."
  },
  {
    "id": 83,
    "category": "3. Elementy fizyki atomowej i układ okresowy",
    "text": "Dlaczego uzyskanie PARZYSTEJ liczby wiązek (dokładnie dwóch) w doświadczeniu Sterna-Gerlacha wykluczało wyjaśnienie tego efektu przez orbitalny moment pędu?",
    "options": [
      {
        "text": "Orbitalny moment pędu o całkowitym $l$ daje zawsze nieparzystą liczbę składowych ($2l + 1$).",
        "isCorrect": true
      },
      {
        "text": "Orbitalny moment pędu daje zawsze co najmniej cztery wiązki dla każdego atomu metalu.",
        "isCorrect": false
      },
      {
        "text": "Orbitalny moment pędu nie wytwarza żadnego momentu magnetycznego w atomach srebra.",
        "isCorrect": false
      },
      {
        "text": "Orbitalny moment pędu występuje wyłącznie w atomie wodoru i nie istnieje w atomach srebra.",
        "isCorrect": false
      }
    ],
    "explanation": "Liczba możliwych orientacji wektora momentu pędu o liczbie kwantowej $l$ wynosi $2l + 1$. Ponieważ orbitalna liczba kwantowa $l$ jest zawsze całkowita ($0, 1, 2, \\dots$), liczba $2l + 1$ jest ZAWSZE nieparzysta ($1, 3, 5, \\dots$). Aby otrzymać $2$ wiązki ($2s + 1 = 2$), liczba kwantowa musi być połówkowa ($s = 1/2$). Ponadto niesparowany elektron srebra ($5s$) ma $l = 0$."
  },
  {
    "id": 84,
    "category": "3. Elementy fizyki atomowej i układ okresowy",
    "text": "Czym jest spin elektronu i jaka jest relacja między jego wektorem spinu $\\vec{S}$ a spinowym momentem magnetycznym $\\vec{\\mu}_s$?",
    "options": [
      {
        "text": "To własny (wewnętrzny) kwantowy moment pędu; $\\vec{\\mu}_s = -g_s\\frac{e}{2m_e}\\vec{S}$ ma zwrot przeciwny do $\\vec{S}$.",
        "isCorrect": true
      },
      {
        "text": "To klasyczny obrót kulistego elektronu wokół osi; $\\vec{\\mu}_s = +g_s\\frac{e}{2m_e}\\vec{S}$ ma zwrot zgodny z $\\vec{S}$.",
        "isCorrect": false
      },
      {
        "text": "To ruch elektronu wokół jądra w stanie $s$; $\\vec{\\mu}_s$ jest zawsze prostopadły do wektora spinu $\\vec{S}$.",
        "isCorrect": false
      },
      {
        "text": "To energia oddziaływania elektronu z jądrem; czynnik żyromagnetyczny elektronu wynosi $g_s = 1/2$.",
        "isCorrect": false
      }
    ],
    "explanation": "Spin jest fundamentalną, wewnętrzną cechą kwantową cząstki (jak masa czy ładunek), niemającą klasycznego odpowiednika wirującej kulki. Dla elektronu $s = 1/2$, $S = \\frac{\\sqrt{3}}{2}\\hbar$, $S_z = \\pm\\frac{1}{2}\\hbar$, a spinowy moment magnetyczny wynosi $\\vec{\\mu}_s = -g_s\\frac{e}{2m_e}\\vec{S}$ z czynnikiem żyromagnetycznym $g_s \\approx 2$ (dwukrotnie większym niż $g_L = 1$!). Znak minus oznacza zwrot przeciwny do $\\vec{S}$."
  },
  {
    "id": 85,
    "category": "3. Elementy fizyki atomowej i układ okresowy",
    "text": "Ile wynosi wartość czynnika żyromagnetycznego (Landégo) dla spinu elektronu $g_s$ w porównaniu z czynnikiem orbitalnym $g_L$?",
    "options": [
      {
        "text": "$g_s \\approx 2$, podczas gdy czynnik orbitalny wynosi $g_L = 1$.",
        "isCorrect": true
      },
      {
        "text": "$g_s \\approx 1$, podczas gdy czynnik orbitalny wynosi $g_L = 2$.",
        "isCorrect": false
      },
      {
        "text": "$g_s \\approx 1/2$, podczas gdy czynnik orbitalny wynosi $g_L = 1$.",
        "isCorrect": false
      },
      {
        "text": "$g_s \\approx 1836$, podczas gdy czynnik orbitalny wynosi $g_L = 1$.",
        "isCorrect": false
      }
    ],
    "explanation": "Jak podkreślono na slajdzie 13 wykładu EFW3, stosunek momentu magnetycznego do momentu pędu dla spinu elektronu jest dwukrotnie większy niż dla ruchu orbitalnego: $g_s \\approx 2$ (dokładniej $2{,}0023$), natomiast $g_L = 1$. Dzięki temu rzut spinowego momentu magnetycznego elektronu wynosi $\\mu_{sz} = -g_s\\mu_B m_s \\approx \\mp 1\\,\\mu_B$."
  },
  {
    "id": 86,
    "category": "3. Elementy fizyki atomowej i układ okresowy",
    "text": "Jak brzmi zakaz Pauliego i jakich cząstek dotyczy?",
    "options": [
      {
        "text": "Żadne dwa fermiony (spin połówkowy) w układzie nie mogą mieć tych samych $(n, l, m_l, m_s)$.",
        "isCorrect": true
      },
      {
        "text": "Żadne dwa bozony (spin całkowity) w układzie nie mogą mieć tej samej energii ani pędu.",
        "isCorrect": false
      },
      {
        "text": "Żadne dwa elektrony w atomie nie mogą mieć tej samej głównej liczby kwantowej $n$.",
        "isCorrect": false
      },
      {
        "text": "Żadne dwa fotony w wiązce laserowej nie mogą mieć identycznej fazy ani częstotliwości.",
        "isCorrect": false
      }
    ],
    "explanation": "Zakaz Pauliego mówi, że w jednym układzie kwantowym (np. atomie) żadne dwa elektrony — i ogólniej żadne dwa fermiony (cząstki o spinie połówkowym, m.in. elektrony, protony, neutrony) — nie mogą zajmować tego samego stanu kwantowego, czyli mieć identycznego zestawu $(n, l, m_l, m_s)$. Zakaz NIE dotyczy bozonów (spin całkowity, np. fotony, fonony, pary Coopera)."
  },
  {
    "id": 87,
    "category": "3. Elementy fizyki atomowej i układ okresowy",
    "text": "Które z poniższych cząstek są BOZONAMI (o spinie całkowitym), dla których NIE obowiązuje zakaz Pauliego?",
    "options": [
      {
        "text": "Fotony (kwanty pola EM) oraz fonony (kwanty drgań sieci krystalicznej).",
        "isCorrect": true
      },
      {
        "text": "Elektrony w atomie oraz swobodne pozytony powstające w rozpadzie beta.",
        "isCorrect": false
      },
      {
        "text": "Protony i neutrony tworzące wspólnie jądra atomowe wszystkich pierwiastków.",
        "isCorrect": false
      },
      {
        "text": "Elektrony walencyjne w metalach oraz neutrina powstające w rozpadach jądrowych.",
        "isCorrect": false
      }
    ],
    "explanation": "Na wykładzie (EFW3 s. 14 oraz EFW5) wskazano, że bozonami (spin całkowity) są m.in. fotony, fonony oraz pary Coopera w nadprzewodnikach — mogą one masowo zajmować ten sam stan kwantowy (co umożliwia działanie lasera i nadprzewodnictwo!). Natomiast elektrony, pozytony, protony, neutrony i neutrina to fermiony (spin $1/2$)."
  },
  {
    "id": 88,
    "category": "3. Elementy fizyki atomowej i układ okresowy",
    "text": "Dlaczego w atomach WIELOELEKTRONOWYCH energia elektronu zależy nie tylko od $n$, lecz także od orbitalnej liczby kwantowej $l$ (np. $E_{3s} < E_{3p} < E_{3d}$)?",
    "options": [
      {
        "text": "Elektrony o niskim $l$ wnikają bliżej jądra i ekranują je przed elektronami o wyższym $l$.",
        "isCorrect": true
      },
      {
        "text": "Elektrony o wysokim $l$ mają większy ładunek elektryczny niż elektrony z podpowłoki $s$.",
        "isCorrect": false
      },
      {
        "text": "Elektrony o wysokim $l$ przebywają średnio bliżej jądra i są silniej przyciągane kulombowsko.",
        "isCorrect": false
      },
      {
        "text": "W atomach wieloelektronowych znika całkowicie przyciąganie jądra na rzecz oddziaływania silnego.",
        "isCorrect": false
      }
    ],
    "explanation": "W atomie wodoru potencjał jest ściśle kulombowski ($\\propto 1/r$), więc energia zależy tylko od $n$. W atomach wieloelektronowych elektrony o dużym $l$ spędzają średnio więcej czasu dalej od jądra, a elektrony o niskim $l$ (np. $s$) częściowo ekranują dodatni ładunek jądra $+Ze$. W efekcie elektrony o wyższym $l$ czują mniejszy efektywny ładunek jądra i mają wyższą energię."
  },
  {
    "id": 89,
    "category": "3. Elementy fizyki atomowej i układ okresowy",
    "text": "Który zapis poprawnie przedstawia oznaczenia kolejnych powłok elektronowych odpowiadających wartościom $n = 1, 2, 3, 4$?",
    "options": [
      {
        "text": "Kolejno powłoki: $K, L, M, N$.",
        "isCorrect": true
      },
      {
        "text": "Kolejno powłoki: $s, p, d, f$.",
        "isCorrect": false
      },
      {
        "text": "Kolejno powłoki: $A, B, C, D$.",
        "isCorrect": false
      },
      {
        "text": "Kolejno powłoki: $L, M, N, O$.",
        "isCorrect": false
      }
    ],
    "explanation": "Powłoki odpowiadające głównej liczbie kwantowej $n = 1, 2, 3, 4, \\dots$ oznacza się wielkimi literami $K, L, M, N, \\dots$ (stąd np. nazwa „wychwyt K” przy wychwycie elektronu z powłoki $n=1$). Małe litery $s, p, d, f$ oznaczają podpowłoki (wartości liczby orbitalnej $l = 0, 1, 2, 3$)."
  },
  {
    "id": 90,
    "category": "3. Elementy fizyki atomowej i układ okresowy",
    "text": "Jak zmienia się energia jonizacji oraz promień atomowy w OBRĘBIE JEDNEGO OKRESU układu okresowego (od lewej do prawej, ze wzrostem $Z$)? (pytanie z kolokwium)",
    "options": [
      {
        "text": "Energia jonizacji rośnie, a promień atomowy maleje ze wzrostem liczby atomowej $Z$.",
        "isCorrect": true
      },
      {
        "text": "Energia jonizacji maleje, a promień atomowy rośnie ze wzrostem liczby atomowej $Z$.",
        "isCorrect": false
      },
      {
        "text": "Zarówno energia jonizacji, jak i promień atomowy maleją ze wzrostem liczby $Z$.",
        "isCorrect": false
      },
      {
        "text": "Zarówno energia jonizacji, jak i promień atomowy rosną ze wzrostem liczby $Z$.",
        "isCorrect": false
      }
    ],
    "explanation": "To bardzo częste pytanie z kolokwium (2022 i 2023)! W obrębie jednego okresu (od lewej do prawej) rośnie dodatni ładunek jądra $+Ze$, podczas gdy elektrony zapełniają tę samą powłokę walencyjną (ekranowanie zmienia się nieznacznie). Silniejsze przyciąganie kulombowskie ściąga powłokę bliżej jądra (promień maleje) i utrudnia oderwanie elektronu (energia jonizacji rośnie)."
  },
  {
    "id": 91,
    "category": "3. Elementy fizyki atomowej i układ okresowy",
    "text": "Jak zmienia się energia jonizacji oraz promień atomowy w OBRĘBIE JEDNEJ GRUPY układu okresowego (z góry na dół, ze wzrostem $Z$)? (pytanie z kolokwium)",
    "options": [
      {
        "text": "Energia jonizacji maleje, a promień atomowy rośnie ze wzrostem liczby atomowej $Z$.",
        "isCorrect": true
      },
      {
        "text": "Energia jonizacji rośnie, a promień atomowy maleje ze wzrostem liczby atomowej $Z$.",
        "isCorrect": false
      },
      {
        "text": "Energia jonizacji pozostaje stała, a promień atomowy maleje ze wzrostem liczby $Z$.",
        "isCorrect": false
      },
      {
        "text": "Zarówno energia jonizacji, jak i promień atomowy rosną ze wzrostem liczby $Z$.",
        "isCorrect": false
      }
    ],
    "explanation": "Przechodząc w dół grupy (ze wzrostem $Z$), dochodzą kolejne powłoki elektronowe o wyższym $n$. Elektrony walencyjne znajdują się coraz dalej od jądra (promień atomowy rośnie) i są coraz silniej ekranowane przez zamknięte powłoki wewnętrzne — dlatego coraz łatwiej oderwać elektron walencyjny (energia jonizacji maleje)."
  },
  {
    "id": 92,
    "category": "3. Elementy fizyki atomowej i układ okresowy",
    "text": "Które ze stwierdzeń na temat energii jonizacji pierwiastków w układzie okresowym jest PRAWDZIWE? (pytanie z kolokwium)",
    "options": [
      {
        "text": "Gazy szlachetne mają wysoką energię jonizacji (pełne powłoki), a metale alkaliczne niską.",
        "isCorrect": true
      },
      {
        "text": "Najmniejszą energię jonizacji spośród wszystkich pierwiastków układu okresowego ma hel.",
        "isCorrect": false
      },
      {
        "text": "Gazy szlachetne mają małą energię jonizacji, bo pełne powłoki słabo oddziałują z jądrem.",
        "isCorrect": false
      },
      {
        "text": "Energia jonizacji atomu jest wielkością stałą i nie zależy wcale od jego liczby atomowej $Z$.",
        "isCorrect": false
      }
    ],
    "explanation": "To bezpośrednie pytanie z kolokwium (24.11.2022)! Gazy szlachetne mają całkowicie zapełnione, niezwykle stabilne powłoki walencyjne — stąd ich bardzo wysoka energia jonizacji (najwyższą ze wszystkich pierwiastków ma hel, $\\text{He}$!). Natomiast metale alkaliczne mają pojedynczy, słabo związany i silnie ekranowany elektron walencyjny $ns^1$, więc ich energia jonizacji jest najniższa w okresie."
  },
  {
    "id": 93,
    "category": "3. Elementy fizyki atomowej i układ okresowy",
    "text": "Który pierwiastek spośród wszystkich w układzie okresowym ma NAJWYŻSZĄ pierwszą energię jonizacji?",
    "options": [
      {
        "text": "Hel ($\\text{He}$) — gaz szlachetny z zapełnioną najbliższą jądru powłoką $1s^2$.",
        "isCorrect": true
      },
      {
        "text": "Wodór ($\\text{H}$) — najlżejszy pierwiastek z jednym elektronem na powłoce $1s^1$.",
        "isCorrect": false
      },
      {
        "text": "Cez ($\\text{Cs}$) — ciężki metal alkaliczny z pojedynczym elektronem na powłoce $6s^1$.",
        "isCorrect": false
      },
      {
        "text": "Radon ($\\text{Rn}$) — najcięższy gaz szlachetny z zapełnioną szóstą powłoką $6p^6$.",
        "isCorrect": false
      }
    ],
    "explanation": "Energia jonizacji rośnie od lewej do prawej w okresie i maleje w dół grupy, więc jej bezwzględne maksimum znajduje się w prawym górnym rogu układu okresowego — u helu ($\\text{He}$, ok. $24{,}6\\text{ eV}$), który ma zapełnioną, nieekranowaną powłokę $1s^2$. Na kolokwium z 2022 r. podchwytliwy dystraktor twierdził błędnie, że hel ma „najmniejszą” energię jonizacji."
  },
  {
    "id": 94,
    "category": "3. Elementy fizyki atomowej i układ okresowy",
    "text": "Które właściwości wynikają bezpośrednio ze struktury elektronowej GAZÓW SZLACHETNYCH (grupa 18)?",
    "options": [
      {
        "text": "Zapełnione podpowłoki, zerowy moment pędu, bierna chemia i niska temperatura wrzenia.",
        "isCorrect": true
      },
      {
        "text": "Jeden elektron walencyjny $s$, wysoka reaktywność i dobre przewodnictwo elektryczne.",
        "isCorrect": false
      },
      {
        "text": "Brak jednego elektronu do oktetu, silna aktywność i łatwe tworzenie soli z metalami.",
        "isCorrect": false
      },
      {
        "text": "Niesparowane elektrony w podpowłoce $d$ będące źródłem silnych właściwości magnetycznych.",
        "isCorrect": false
      }
    ],
    "explanation": "Gazy szlachetne (He, Ne, Ar, Kr, Xe, Rn) mają całkowicie zapełnione podpowłoki walencyjne, zerowy całkowity orbitalny i spinowy moment pędu oraz bardzo wysoką energię jonizacji. Dlatego są chemicznie bierne, występują w temperaturze pokojowej jako gazy jednoatomowe (tylko słabe siły van der Waalsa), słabo przewodzą prąd i mają bardzo niskie temperatury wrzenia."
  },
  {
    "id": 95,
    "category": "3. Elementy fizyki atomowej i układ okresowy",
    "text": "Które właściwości charakteryzują METALE ALKALICZNE (grupa 1: Li, Na, K, Rb, Cs) na skutek ich konfiguracji elektronowej?",
    "options": [
      {
        "text": "Zamknięty rdzeń i jeden elektron $ns^1$, niska energia jonizacji, wysoka reaktywność i jony $+1$.",
        "isCorrect": true
      },
      {
        "text": "Całkowicie zapełniona powłoka walencyjna, bardzo wysoka energia jonizacji i brak reaktywności.",
        "isCorrect": false
      },
      {
        "text": "Dwa elektrony walencyjne w podpowłoce $s$, wysoka temperatura topnienia i wyłącznie jony $+2$.",
        "isCorrect": false
      },
      {
        "text": "Siedem elektronów walencyjnych, silne przyjmowanie elektronów i tworzenie głównie anionów $-1$.",
        "isCorrect": false
      }
    ],
    "explanation": "Metale alkaliczne posiadają zamknięty rdzeń gazu szlachetnego oraz pojedynczy, słabo związany elektron walencyjny $ns^1$. Dzięki temu mają najniższą energię jonizacji w okresie, są bardzo reaktywne chemicznie, łatwo oddają ten elektron tworząc kationy $+1$ i dobrze przewodzą prąd elektryczny."
  },
  {
    "id": 96,
    "category": "3. Elementy fizyki atomowej i układ okresowy",
    "text": "Czym charakteryzują się HALOGENY (fluorowce, grupa 17) pod względem struktury elektronowej i reaktywności?",
    "options": [
      {
        "text": "Brakuje im jednego elektronu do pełnej powłoki; są aktywne i tworzą silne wiązania jonowe.",
        "isCorrect": true
      },
      {
        "text": "Posiadają dokładnie jeden elektron walencyjny; łatwo tworzą kationy $+1$ i przewodzą prąd.",
        "isCorrect": false
      },
      {
        "text": "Posiadają całkowicie zamknięte podpowłoki $p$; są jednoatomowymi gazami obojętnymi chemicznie.",
        "isCorrect": false
      },
      {
        "text": "Mają częściowo zapełnioną podpowłokę $4f$; wszystkie wykazują silne właściwości ferromagnetyczne.",
        "isCorrect": false
      }
    ],
    "explanation": "Halogeny (F, Cl, Br, I) mają konfigurację $ns^2 np^5$ — brakuje im zaledwie jednego elektronu do stabilnej, zamkniętej powłoki gazu szlachetnego. Są więc bardzo aktywne chemicznie i chętnie łączą się z metalami alkalicznymi, tworząc silne wiązania jonowe (np. $\\text{NaCl, KCl, NaI}$)."
  },
  {
    "id": 97,
    "category": "3. Elementy fizyki atomowej i układ okresowy",
    "text": "Skąd biorą się właściwości magnetyczne metali przejściowych (np. Fe, Co, Ni) oraz podobieństwo chemiczne w obrębie tej grupy?",
    "options": [
      {
        "text": "Magnetyzm wynika z niesparowanych elektronów podpowłoki $d$, a chemię wyznaczają elektrony $s$.",
        "isCorrect": true
      },
      {
        "text": "Magnetyzm wynika z całkowicie zapełnionej powłoki $1s$, a chemię wyznaczają wyłącznie neutrony.",
        "isCorrect": false
      },
      {
        "text": "Magnetyzm wynika z braku elektronów walencyjnych $s$, a chemię wyznaczają elektrony rdzenia $p$.",
        "isCorrect": false
      },
      {
        "text": "Magnetyzm wynika z zerowego spinu jądra, a chemię wyznacza dokładnie identyczna masa atomowa.",
        "isCorrect": false
      }
    ],
    "explanation": "W metalach przejściowych zapełniane są wewnętrzne podpowłoki $3d, 4d, 5d$, podczas gdy na zewnątrz znajdują się elektrony $s$. Zewnętrzne elektrony $s$ odpowiadają za zbliżone właściwości chemiczne tych pierwiastków, natomiast niesparowane momenty magnetyczne elektronów w niepełnej podpowłoce $d$ są źródłem magnetyzmu (np. ferromagnetyzm Fe, Co, Ni)."
  },
  {
    "id": 98,
    "category": "3. Elementy fizyki atomowej i układ okresowy",
    "text": "Dlaczego wszystkie lantanowce mają bardzo zbliżone właściwości chemiczne i podobne energie jonizacji, a jednocześnie wykazują silne właściwości magnetyczne?",
    "options": [
      {
        "text": "Mają taką samą zewnętrzną podpowłokę $6s^2$, a wewnątrz stopniowo zapełniają niezapełnioną $4f$.",
        "isCorrect": true
      },
      {
        "text": "Mają całkowicie zapełnioną powłokę $4f^{14}$, a różnią się liczbą elektronów w zewnętrznej $7p$.",
        "isCorrect": false
      },
      {
        "text": "Mają identyczną liczbę atomową $Z$, a różnią się wyłącznie liczbą neutronów w jądrze atomowym.",
        "isCorrect": false
      },
      {
        "text": "Mają zerowy orbitalny i spinowy moment pędu, co czyni je identycznymi z gazami szlachetnymi.",
        "isCorrect": false
      }
    ],
    "explanation": "Jak podano na slajdzie 17 wykładu EFW3, lantanowce mają jednakową, zapełnioną zewnętrzną podpowłokę $6s^2$, co determinuje ich bardzo zbliżone właściwości chemiczne i energie jonizacji. Jednocześnie stopniowo zapełniana głęboka podpowłoka $4f$ zawiera niesparowane elektrony dające silne momenty magnetyczne."
  },
  {
    "id": 99,
    "category": "3. Elementy fizyki atomowej i układ okresowy",
    "text": "Które z poniższych stwierdzeń na temat pierwiastków należących do tej samej GRUPY układu okresowego są prawdziwe?",
    "options": [
      {
        "text": "Mają taki sam układ elektronów walencyjnych i zbliżone właściwości chemiczne.",
        "isCorrect": true
      },
      {
        "text": "Ze wzrostem liczby atomowej $Z$ w dół grupy rośnie ich promień atomowy.",
        "isCorrect": true
      },
      {
        "text": "Ze wzrostem liczby atomowej $Z$ w dół grupy maleje ich energia jonizacji.",
        "isCorrect": true
      },
      {
        "text": "Mają identyczną liczbę wszystkich powłok elektronowych i identyczną masę.",
        "isCorrect": false
      }
    ],
    "explanation": "Pierwiastki w jednej grupie (kolumnie) układu okresowego mają identyczną konfigurację powłoki walencyjnej, co nadaje im podobne właściwości fizyczne i chemiczne. Schodząc w dół grupy, przybywa jednak kolejnych powłok elektronowych (rośnie $n$), więc promień atomowy rośnie, a energia jonizacji maleje."
  },
  {
    "id": 100,
    "category": "3. Elementy fizyki atomowej i układ okresowy",
    "text": "W jaki sposób matematycznie rozwiązuje się stacjonarne równanie Schrödingera dla atomu wodoru?",
    "options": [
      {
        "text": "Przejście na współrzędne sferyczne $(r,\\theta,\\varphi)$ oraz separacja zmiennych na trzy równania.",
        "isCorrect": true
      },
      {
        "text": "Przyjęcie potencjału $V = 0$ i rozwiązanie jak dla jednowymiarowej cząstki swobodnej.",
        "isCorrect": false
      },
      {
        "text": "Użycie współrzędnych kartezjańskich bez jakiejkolwiek separacji zmiennych przestrzennych.",
        "isCorrect": false
      },
      {
        "text": "Pominięcie siły Coulomba i zastąpienie jej nieskończoną sześcienną studnią potencjału.",
        "isCorrect": false
      }
    ],
    "explanation": "Ponieważ potencjał kulombowski $V(r) = -\\frac{e^2}{4\\pi\\varepsilon_0 r}$ zależy wyłącznie od odległości od jądra $r$ (symetria sferyczna), przechodzi się na współrzędne sferyczne $(r, \\theta, \\varphi)$ i stosuje separację zmiennych $\\Psi_{nlm_l}(r,\\theta,\\varphi) = R_{nl}(r)Y_{lm_l}(\\theta,\\varphi)$. Otrzymuje się trzy równania: radialne (Laguerre'a), kątowe (Legendre'a) i azymutalne (oscylatora harmonicznego)."
  },
  {
    "id": 101,
    "category": "3. Elementy fizyki atomowej i układ okresowy",
    "text": "Ile różnych stanów kwantowych (z uwzględnieniem spinu) odpowiada poziomowi energetycznemu $n = 3$ w atomie wodoru?",
    "options": [
      {
        "text": "$18$ stanów kwantowych (stopień degeneracji $2n^2 = 2 \\cdot 3^2$).",
        "isCorrect": true
      },
      {
        "text": "$9$ stanów kwantowych (stopień degeneracji $n^2 = 3^2$).",
        "isCorrect": false
      },
      {
        "text": "$6$ stanów kwantowych (stopień degeneracji $2n = 2 \\cdot 3$).",
        "isCorrect": false
      },
      {
        "text": "$32$ stany kwantowe (stopień degeneracji $2n^2 = 2 \\cdot 4^2$).",
        "isCorrect": false
      }
    ],
    "explanation": "Dla powłoki $n = 3$ dozwolone wartości liczby orbitalnej to $l = 0$ ($3s$: 2 stany), $l = 1$ ($3p$: 6 stanów) oraz $l = 2$ ($3d$: 10 stanów). Łącznie daje to $2 + 6 + 10 = 18 = 2 \\cdot 3^2$ stanów kwantowych o tej samej energii (bez pola magnetycznego)."
  },
  {
    "id": 102,
    "category": "3. Elementy fizyki atomowej i układ okresowy",
    "text": "Jak nazywa się zjawisko rozszczepienia linii widmowych atomu pod wpływem zewnętrznego pola ELEKTRYCZNEGO, którego nie tłumaczył model Bohra?",
    "options": [
      {
        "text": "Zjawisko (efekt) Starka.",
        "isCorrect": true
      },
      {
        "text": "Zjawisko (efekt) Zeemana.",
        "isCorrect": false
      },
      {
        "text": "Zjawisko (efekt) Meissnera.",
        "isCorrect": false
      },
      {
        "text": "Zjawisko (efekt) Comptona.",
        "isCorrect": false
      }
    ],
    "explanation": "Rozszczepienie linii spektralnych pod wpływem zewnętrznego pola elektrycznego nosi nazwę efektu Starka, natomiast w zewnętrznym polu magnetycznym — efektu Zeemana. Oba efekty wymieniono jako ograniczenia modelu Bohra (EFW1 s. 38). Efekt Meissnera dotyczy wypychania pola magnetycznego przez nadprzewodniki."
  },
  {
    "id": 103,
    "category": "4. Lasery — fizyka, zasada działania i zastosowania",
    "text": "Co dokładnie oznacza akronim LASER i kto zbudował w 1954 roku jego mikrofalowego poprzednika (MASER)?",
    "options": [
      {
        "text": "Light Amplification through Stimulated Emission of Radiation; MASER zbudował Charles Townes.",
        "isCorrect": true
      },
      {
        "text": "Light Absorption through Spontaneous Emission of Radiation; MASER zbudował Albert Einstein.",
        "isCorrect": false
      },
      {
        "text": "Linear Acceleration of Stimulated Electrons by Radiation; MASER zbudował Max Planck.",
        "isCorrect": false
      },
      {
        "text": "Light Amplification by Superconducting Electronic Resonance; MASER zbudował Niels Bohr.",
        "isCorrect": false
      }
    ],
    "explanation": "LASER to skrót od Light Amplification through Stimulated Emission of Radiation (wzmocnienie światła poprzez wymuszoną emisję promieniowania). Jego poprzednikiem działającym w zakresie mikrofal był MASER skonstruowany przez Charlesa Townesa w 1954 roku (EFW4 s. 4)."
  },
  {
    "id": 104,
    "category": "4. Lasery — fizyka, zasada działania i zastosowania",
    "text": "Które trzy elementarne procesy oddziaływania światła z atomami dwupoziomowymi opisał Albert Einstein za pomocą współczynników $A, B_{12}, B_{21}$?",
    "options": [
      {
        "text": "Absorpcję wymuszoną, emisję spontaniczną oraz emisję wymuszoną (stymulowaną).",
        "isCorrect": true
      },
      {
        "text": "Rozpraszanie Comptona, zjawisko fotoelektryczne oraz kreację par elektron-pozyton.",
        "isCorrect": false
      },
      {
        "text": "Dyfrakcję elektronów, tunelowanie kwantowe oraz rozszczepienie poziomów Zeemana.",
        "isCorrect": false
      },
      {
        "text": "Absorpcję spontaniczną, anihilację termiczną oraz promieniowanie hamowania elektronów.",
        "isCorrect": false
      }
    ],
    "explanation": "W obecności pola elektromagnetycznego o gęstości energii $u(\\nu)$ zachodzą trzy procesy: absorpcja wymuszona ($B_{12}N_1 u(\\nu)$), emisja spontaniczna ($A N_2$) oraz emisja wymuszona ($B_{21}N_2 u(\\nu)$). Z analizy równowagi termodynamicznej ze wzorem Plancka wynikają fundamentalne związki między współczynnikami Einsteina."
  },
  {
    "id": 105,
    "category": "4. Lasery — fizyka, zasada działania i zastosowania",
    "text": "Jakie właściwości ma foton wyemitowany w procesie EMISJI WYMUSZONEJ w porównaniu z fotonem wymuszającym?",
    "options": [
      {
        "text": "Ma identyczną częstotliwość, fazę, kierunek ruchu oraz polaryzację (fotony są spójne).",
        "isCorrect": true
      },
      {
        "text": "Ma przypadkową fazę i losowy kierunek ruchu, ale zawsze dwukrotnie większą energię.",
        "isCorrect": false
      },
      {
        "text": "Ma przeciwny kierunek propagacji i fazę przesuniętą dokładnie o połowę okresu fali.",
        "isCorrect": false
      },
      {
        "text": "Ma ciągłe widmo częstotliwości i jest zawsze całkowicie niespolaryzowany przestrzennie.",
        "isCorrect": false
      }
    ],
    "explanation": "W emisji wymuszonej (stymulowanej) padający foton o energii $h\\nu = E_2 - E_1$ zmusza wzbudzony atom do natychmiastowego przejścia w dół z emisją drugiego, będącego jego idealnym klonem fotonu: o identycznej częstotliwości, fazie, kierunku i polaryzacji. To właśnie źródło koherencji (spójności) i wzmocnienia w laserze."
  },
  {
    "id": 106,
    "category": "4. Lasery — fizyka, zasada działania i zastosowania",
    "text": "Dlaczego światło pochodzące z EMISJI SPONTANICZNEJ (np. w zwykłej żarówce lub lampie gazowej) jest niespójne?",
    "options": [
      {
        "text": "Wzbudzone atomy emitują fotony w losowych chwilach, z przypadkowymi fazami i kierunkami.",
        "isCorrect": true
      },
      {
        "text": "W emisji spontanicznej elektrony nie przeskakują między dyskretnymi poziomami energii.",
        "isCorrect": false
      },
      {
        "text": "Każdy foton z emisji spontanicznej ma zupełnie inną prędkość rozchodzenia się w próżni.",
        "isCorrect": false
      },
      {
        "text": "Emisja spontaniczna zachodzi wyłącznie w obecności silnego zewnętrznego pola magnetycznego.",
        "isCorrect": false
      }
    ],
    "explanation": "W emisji spontanicznej każdy wzbudzony atom samorzutnie i niezależnie od innych wraca na niższy poziom (po typowym czasie ok. $10^{-8}\\text{ s}$), emitując foton o przypadkowej fazie, kierunku i polaryzacji. Dlatego światło z emisji spontanicznej nie jest koherentne."
  },
  {
    "id": 107,
    "category": "4. Lasery — fizyka, zasada działania i zastosowania",
    "text": "Które z poniższych wniosków wynikają z analizy Einsteina równowagi termodynamicznej między absorpcją, emisją spontaniczną i emisją wymuszoną?",
    "options": [
      {
        "text": "Prawdopodobieństwa emisji wymuszonej i absorpcji wymuszonej są identyczne ($B_{12} = B_{21}$).",
        "isCorrect": true
      },
      {
        "text": "Jeśli możliwa jest emisja spontaniczna ($A \\neq 0$), musi też występować emisja wymuszona.",
        "isCorrect": true
      },
      {
        "text": "W równowadze termodynamicznej (dla $h\\nu \\gg k_B T$) emisja spontaniczna przeważa nad wymuszoną.",
        "isCorrect": true
      },
      {
        "text": "W równowadze termodynamicznej na poziomie wyższym jest zawsze więcej atomów niż na niższym.",
        "isCorrect": false
      }
    ],
    "explanation": "Z prawa rozkładu Boltzmanna $N_2 / N_1 = e^{-(E_2 - E_1)/(k_B T)} < 1$, więc w równowadze termodynamicznej na poziomie niższym ZAWSZE jest więcej atomów niż na wyższym (stąd konieczność sztucznego pompowania dla inwersji obsadzeń!). Pierwsze trzy stwierdzenia to dokładnie trzy wnioski ze slajdu 3 wykładu EFW4."
  },
  {
    "id": 108,
    "category": "4. Lasery — fizyka, zasada działania i zastosowania",
    "text": "Który zestaw wymienia wszystkie pięć podstawowych cech światła laserowego omawianych na wykładzie i kolokwiach?",
    "options": [
      {
        "text": "Spójność, równoległość wiązki, monochromatyczność, polaryzacja liniowa i ogniskowalność do $\\sim\\lambda$.",
        "isCorrect": true
      },
      {
        "text": "Niespójność, duża rozbieżność kątowa, widmo ciągłe, brak polaryzacji i brak możliwości skupienia.",
        "isCorrect": false
      },
      {
        "text": "Spójność, widmo ciągłe CDC, brak polaryzacji, duża masa spoczynkowa i prędkość mniejsza od $c$.",
        "isCorrect": false
      },
      {
        "text": "Monochromatyczność, dyfrakcja bez szczelin, brak fazy czasowej, izotropowość i niska gęstość mocy.",
        "isCorrect": false
      }
    ],
    "explanation": "To klasyczne pytanie kolokwialne (2023 i 2024)! Pięć podstawowych cech światła laserowego z wykładu EFW4 to: (1) spójność (koherencja czasowa i przestrzenna), (2) równoległy bieg promieni (mała rozbieżność), (3) monochromatyczność (bardzo wąskie widmo $\\lambda$), (4) polaryzacja liniowa oraz (5) duża jasność/gęstość mocy — możliwość zogniskowania w plamce o rozmiarze rzędu długości fali $\\lambda$."
  },
  {
    "id": 109,
    "category": "4. Lasery — fizyka, zasada działania i zastosowania",
    "text": "Co oznacza spójność (koherencja) światła laserowego?",
    "options": [
      {
        "text": "Stałą różnicę faz fal świetlnych zarówno w czasie (czasowa), jak i w przestrzeni (przestrzenna).",
        "isCorrect": true
      },
      {
        "text": "Zdolność wiązki świetlnej do przenikania przez nieprzezroczyste płyty metalowe bez tłumienia.",
        "isCorrect": false
      },
      {
        "text": "Równomierny rozkład natężenia światła we wszystkich długościach fal od podczerwieni po UV.",
        "isCorrect": false
      },
      {
        "text": "Zanik pola elektrycznego fali elektromagnetycznej w płaszczyźnie prostopadłej do wiązki.",
        "isCorrect": false
      }
    ],
    "explanation": "Spójność (koherencja) oznacza uporządkowanie fazowe fal świetlnych: spójność czasowa to stałość relacji fazowych w kolejnych chwilach (związana z monochromatycznością), a spójność przestrzenna to stała różnica faz w poprzek czoła fali. Obie wynikają z mechanizmu emisji wymuszonej i geometrii rezonatora."
  },
  {
    "id": 110,
    "category": "4. Lasery — fizyka, zasada działania i zastosowania",
    "text": "Jakie trzy podstawowe elementy konstrukcyjne są niezbędne do działania lasera?",
    "options": [
      {
        "text": "Ośrodek czynny, układ pompujący energię oraz rezonator optyczny (układ dwóch luster).",
        "isCorrect": true
      },
      {
        "text": "Katoda z żarnikiem, ciężka anoda wolframowa oraz wysokonapięciowy zasilacz prądu stałego.",
        "isCorrect": false
      },
      {
        "text": "Moderator neutronów, pręty regulacyjne z kadmu oraz osłona biologiczna z grubego betonu.",
        "isCorrect": false
      },
      {
        "text": "Piec z parami srebra, niejednorodny elektromagnes oraz ekran fluorescencyjny za szczeliną.",
        "isCorrect": false
      }
    ],
    "explanation": "Działanie każdego lasera wymaga trzech elementów: (1) ośrodka czynnego (gaz, ciecz lub ciało stałe z odpowiednim układem poziomów energetycznych), (2) układu pompującego wytwarzającego inwersję obsadzeń oraz (3) rezonatora optycznego (dwa równoległe zwierciadła — jedno całkowicie odbijające, drugie półprzepuszczalne)."
  },
  {
    "id": 111,
    "category": "4. Lasery — fizyka, zasada działania i zastosowania",
    "text": "Czym jest inwersja (odwrócenie) obsadzeń, bez której akcja laserowa nie może zajść?",
    "options": [
      {
        "text": "Stanem, w którym na wyższym poziomie ($E_2$) jest więcej atomów niż na niższym ($N_2 > N_1$).",
        "isCorrect": true
      },
      {
        "text": "Stanem równowagi termicznej, w którym wszystkie atomy znajdują się na poziomie podstawowym.",
        "isCorrect": false
      },
      {
        "text": "Odwróceniem kierunku biegu fotonów po odbiciu od całkowicie odbijającego lustra rezonatora.",
        "isCorrect": false
      },
      {
        "text": "Zamianą elektronów w pozytony wewnątrz ośrodka czynnego pod wpływem pompowania optycznego.",
        "isCorrect": false
      }
    ],
    "explanation": "Ponieważ prawdopodobieństwa absorpcji i emisji wymuszonej są równe ($B_{12} = B_{21}$), wzmocnienie światła (przewaga emisji wymuszonej $B_{21}N_2 u$ nad absorpcją $B_{12}N_1 u$) wymaga, aby $N_2 > N_1$, czyli większej liczby atomów na wyższym poziomie metastabilnym niż na dolnym poziomie przejścia laserującego. Taki nierównowagowy stan nazywamy inwersją obsadzeń."
  },
  {
    "id": 112,
    "category": "4. Lasery — fizyka, zasada działania i zastosowania",
    "text": "Dlaczego do uzyskania akcji laserowej i inwersji obsadzeń potrzebne są MINIMUM TRZY poziomy energetyczne (a dwa poziomy nie wystarczą)? (pytanie z kolokwium)",
    "options": [
      {
        "text": "W układzie 2-poziomowym $B_{12}=B_{21}$, więc pompowanie co najwyżej wyrówna obsadzenia ($N_1=N_2$).",
        "isCorrect": true
      },
      {
        "text": "W układzie 2-poziomowym elektrony nie mogą absorbować fotonów ze względu na zakaz Pauliego.",
        "isCorrect": false
      },
      {
        "text": "W układzie 2-poziomowym emisja spontaniczna ma zerowe prawdopodobieństwo dla dowolnej energii.",
        "isCorrect": false
      },
      {
        "text": "W układzie 2-poziomowym fotony nie odbijają się od półprzepuszczalnego lustra rezonatora.",
        "isCorrect": false
      }
    ],
    "explanation": "To bezpośrednie pytanie z kolokwium (kolos2.pdf)! Gdyby pompowanie i emisja zachodziły na tym samym przejściu $E_1 \\leftrightarrow E_2$, to z równości współczynników Einsteina $B_{12} = B_{21}$ wynika, że po osiągnięciu $N_2 = N_1$ tempo absorpcji zrówna się z tempem emisji wymuszonej — nigdy nie uzyska się $N_2 > N_1$. Trzeci poziom oddziela pompowanie ($E_1 \\to E_3$) od przejścia laserującego ($E_2 \\to E_1$)."
  },
  {
    "id": 113,
    "category": "4. Lasery — fizyka, zasada działania i zastosowania",
    "text": "Jaką rolę w laserze 3-poziomowym odgrywa pośredni poziom energetyczny $E_2$ nazywany poziomem METASTABILNYM?",
    "options": [
      {
        "text": "Ma długi czas życia ($\\sim 10^{-3}\\text{ s}$), więc gromadzą się na nim atomy, tworząc inwersję obsadzeń.",
        "isCorrect": true
      },
      {
        "text": "Ma najkrótszy czas życia ($\\sim 10^{-15}\\text{ s}$), więc atomy natychmiast wracają na poziom $E_3$.",
        "isCorrect": false
      },
      {
        "text": "Pochłania wszystkie fotony z emisji wymuszonej, zapobiegając przegrzaniu ośrodka czynnego.",
        "isCorrect": false
      },
      {
        "text": "Służy wyłącznie do chłodzenia luster rezonatora poprzez emisję drgań akustycznych (fononów).",
        "isCorrect": false
      }
    ],
    "explanation": "Po szybkim spadku z krótkożyciowego poziomu $E_3$ ($\\sim 10^{-9}\\text{ s}$) atomy trafiają na długożyciowy poziom metastabilny $E_2$ (czas życia $\\sim 10^{-3}\\text{ s}$, często dlatego, że przejście spontaniczne $E_2 \\to E_1$ jest zabronione przez regułę wyboru $\\Delta l = \\pm 1$). Dzięki temu elektrony „czekają” na $E_2$, budując inwersję obsadzeń aż do nadejścia fotonu wymuszającego."
  },
  {
    "id": 114,
    "category": "4. Lasery — fizyka, zasada działania i zastosowania",
    "text": "Dlaczego poziom metastabilny $E_2$ w ośrodku czynnym lasera ma relatywnie długi czas życia (ok. $10^{-3}\\text{ s}$ zamiast $10^{-8}\\text{ s}$)?",
    "options": [
      {
        "text": "Spontaniczne przejście w dół bywa zabronione przez kwantową regułę wyboru ($\\Delta l = \\pm 1$).",
        "isCorrect": true
      },
      {
        "text": "Na poziomie metastabilnym elektrony tracą ładunek elektryczny i nie oddziałują z polem EM.",
        "isCorrect": false
      },
      {
        "text": "Układ pompujący stale obniża temperaturę ośrodka czynnego dokładnie do zera bezwzględnego.",
        "isCorrect": false
      },
      {
        "text": "Rezonator optyczny blokuje zasadę nieoznaczoności Heisenberga dla energii tego poziomu.",
        "isCorrect": false
      }
    ],
    "explanation": "Na slajdzie 5 wykładu EFW4 wskazano wprost: długi czas życia stanu metastabilnego ($\\sim 10^{-3}\\text{ s}$ wobec $\\sim 10^{-9}\\text{ s}$ dla zwykłego poziomu wzbudzonego) wynika np. z tego, że przejście dipolowe na niższy poziom jest zabronione przez regułę wyboru $\\Delta l = \\pm 1$, więc zachodzi spontanicznie z bardzo małym prawdopodobieństwem."
  },
  {
    "id": 115,
    "category": "4. Lasery — fizyka, zasada działania i zastosowania",
    "text": "Jaką funkcję pełnią dwa równoległe zwierciadła tworzące rezonator optyczny lasera?",
    "options": [
      {
        "text": "Wielokrotnie odbijają fotony dla wzmocnienia lawinowego; ok. 1% wychodzi jako wiązka.",
        "isCorrect": true
      },
      {
        "text": "Zatrzymują wszystkie fotony w ośrodku i przepuszczają wyłącznie wiązkę szybkich elektronów.",
        "isCorrect": false
      },
      {
        "text": "Rozszczepiają światło białe na widmo ciągłe i kierują je równomiernie w całej przestrzeni.",
        "isCorrect": false
      },
      {
        "text": "Zamieniają bezpośrednio energię elektryczną zasilacza na twarde promieniowanie X.",
        "isCorrect": false
      }
    ],
    "explanation": "Jedno zwierciadło rezonatora jest całkowicie odbijające (~100%), a drugie półprzepuszczalne (przepuszcza zwykle ok. $1\\%$–$5\\%$ światła). Fotony biegnące dokładnie wzdłuż osi rezonatora wielokrotnie wracają przez ośrodek czynny, wywołując lawinową emisję wymuszoną (fotony biegnące ukośnie uciekają bokiem — stąd znakomita równoległość wiązki laserowej)."
  },
  {
    "id": 116,
    "category": "4. Lasery — fizyka, zasada działania i zastosowania",
    "text": "Która sekwencja poprawnie opisuje kolejność kroków w działaniu typowego lasera 3-poziomowego?",
    "options": [
      {
        "text": "Pompowanie $E_1 \\to E_3$, szybki spadek $E_3 \\to E_2$, inwersja na $E_2$, emisja wymuszona $E_2 \\to E_1$.",
        "isCorrect": true
      },
      {
        "text": "Pompowanie $E_1 \\to E_2$, szybki spadek $E_2 \\to E_1$, inwersja na $E_3$, emisja spontaniczna $E_3 \\to E_2$.",
        "isCorrect": false
      },
      {
        "text": "Emisja wymuszona $E_1 \\to E_3$, pompowanie $E_3 \\to E_2$, inwersja na $E_1$, absorpcja $E_2 \\to E_1$.",
        "isCorrect": false
      },
      {
        "text": "Szybki spadek $E_1 \\to E_2$, pompowanie $E_2 \\to E_3$, inwersja na $E_1$, emisja wymuszona $E_3 \\to E_2$.",
        "isCorrect": false
      }
    ],
    "explanation": "W laserze 3-poziomowym układ pompujący podnosi elektrony ze stanu podstawowego $E_1$ na krótkożyciowy $E_3$, skąd szybko (zwykle bezpromieniście) opadają na długożyciowy, metastabilny poziom $E_2$. Po osiągnięciu inwersji ($N_2 > N_1$) zachodzi lawinowa emisja wymuszona na przejściu laserującym $E_2 \\to E_1$."
  },
  {
    "id": 117,
    "category": "4. Lasery — fizyka, zasada działania i zastosowania",
    "text": "Jaką przewagę ma laser 4-poziomowy (taki jak omawiany na wykładzie laser He-Ne) nad laserem 3-poziomowym?",
    "options": [
      {
        "text": "Dolny poziom przejścia laserującego szybko się opróżnia, co ułatwia inwersję i eliminuje reabsorpcję.",
        "isCorrect": true
      },
      {
        "text": "Nie wymaga żadnego układu pompującego ani rezonatora optycznego ze zwierciadłami do emisji wiązki.",
        "isCorrect": false
      },
      {
        "text": "Emituje wyłącznie promieniowanie gamma o długości fali krótszej niż średnica jądra atomowego.",
        "isCorrect": false
      },
      {
        "text": "Pracuje wyłącznie w temperaturze nadprzewodnictwa poniżej $4{,}2\\text{ K}$ w obecności pola magnetycznego.",
        "isCorrect": false
      }
    ],
    "explanation": "W laserze 3-poziomowym dolnym poziomem przejścia laserującego jest stan podstawowy $E_1$, więc trzeba przepompować ponad połowę wszystkich atomów, by uzyskać $N_2 > N_1$. W laserze 4-poziomowym (jak He-Ne) dolny poziom przejścia laserującego leży nad stanem podstawowym i błyskawicznie się opróżnia — dzięki temu niemal nie ma na nim atomów, brak reabsorpcji i znacznie łatwiej utrzymać inwersję obsadzeń."
  },
  {
    "id": 118,
    "category": "4. Lasery — fizyka, zasada działania i zastosowania",
    "text": "Jak przebiega pompowanie i emisja w klasycznym laserze helowo-neonowym (He-Ne, $\\lambda = 632{,}8\\text{ nm}$) omówionym na wykładzie?",
    "options": [
      {
        "text": "Wyładowanie wzbudza atomy He (10:1), które przekazują energię atomom Ne emitującym światło.",
        "isCorrect": true
      },
      {
        "text": "Lampa błyskowa wzbudza atomy Ne (10:1), które przekazują energię atomom He emitującym IR.",
        "isCorrect": false
      },
      {
        "text": "Promieniowanie rentgenowskie jonizuje czysty neon bez helu, dając niebieską wiązkę laserową.",
        "isCorrect": false
      },
      {
        "text": "Prąd w złączu p-n chłodzi mieszaninę He-Ne, wywołując spójną emisję z przejść jądrowych helu.",
        "isCorrect": false
      }
    ],
    "explanation": "W laserze He-Ne ośrodkiem czynnym jest mieszanina gazów He:Ne w stosunku 10:1. Kontrolowane wyładowanie elektryczne (zderzenia z elektronami) wzbudza atomy helu na stany metastabilne, skąd w zderzeniach (bezpromieniście) energia przekazywana jest na bliskie energetycznie poziomy neonu. Samo przejście laserujące ($\\lambda = 632{,}8\\text{ nm}$, światło czerwone) zachodzi w atomach neonu."
  },
  {
    "id": 119,
    "category": "4. Lasery — fizyka, zasada działania i zastosowania",
    "text": "Która długość fali i barwa odpowiadają głównej wiązce klasycznego lasera gazowego He-Ne?",
    "options": [
      {
        "text": "Długość fali $\\lambda \\approx 633\\text{ nm}$ ($632{,}8\\text{ nm}$), czyli światło czerwone.",
        "isCorrect": true
      },
      {
        "text": "Długość fali $\\lambda \\approx 405\\text{ nm}$, czyli światło fioletowe (Blu-ray).",
        "isCorrect": false
      },
      {
        "text": "Długość fali $\\lambda \\approx 0{,}1\\text{ nm}$, czyli twarde promieniowanie rentgenowskie.",
        "isCorrect": false
      },
      {
        "text": "Długość fali $\\lambda \\approx 10\\text{ cm}$, czyli zakres mikrofalowy (MASER).",
        "isCorrect": false
      }
    ],
    "explanation": "Na slajdzie 6 wykładu EFW4 pokazano widmo lasera He-Ne z bardzo wąską, ostrą linią o długości fali $\\lambda = 632{,}8\\text{ nm}$ (ok. $633\\text{ nm}$), leżącą w czerwonej części widma widzialnego."
  },
  {
    "id": 120,
    "category": "4. Lasery — fizyka, zasada działania i zastosowania",
    "text": "Na czym polega działanie lasera światłowodowego oraz komunikacji światłowodowej przedstawionych na wykładzie?",
    "options": [
      {
        "text": "Światło prowadzi całkowite odbicie wewnętrzne ($n_1 > n_2$), a akcję laserową daje szkło z Er lub Yb.",
        "isCorrect": true
      },
      {
        "text": "Światło prowadzi dyfrakcja Bragga ($n_1 < n_2$), a akcję laserową daje ciekły azot w rdzeniu kabla.",
        "isCorrect": false
      },
      {
        "text": "Światło rozchodzi się przez tunelowanie przez metalowy rdzeń, a wzmacniają je atomy żelaza.",
        "isCorrect": false
      },
      {
        "text": "Światło odbija się od warstwy powietrza o wyższym współczynniku załamania niż szkło rdzenia.",
        "isCorrect": false
      }
    ],
    "explanation": "W światłowodzie rdzeń ma wyższy współczynnik załamania światła niż płaszcz ($n_1 > n_2$), co zapewnia zjawisko całkowitego odbicia wewnętrznego. W laserze światłowodowym sam światłowód stanowi wnękę rezonansową, a ośrodkiem czynnym jest szkło domieszkowane pierwiastkami ziem rzadkich, np. erbem (Er) lub iterbem (Yb)."
  },
  {
    "id": 121,
    "category": "4. Lasery — fizyka, zasada działania i zastosowania",
    "text": "Które z poniższych zastosowań laserów były omawiane na wykładzie EFW4 i można podać na kolokwium?",
    "options": [
      {
        "text": "Chirurgia refrakcyjna oka (LASIK) oraz mikroskopia konfokalna (fluorescencyjna).",
        "isCorrect": true
      },
      {
        "text": "Nanolitografia laserowa (druk 3D z absorpcją dwufotonową) oraz cięcie metali.",
        "isCorrect": true
      },
      {
        "text": "Komunikacja światłowodowa, odczyt płyt CD/DVD/Blu-ray i dalmierze (Ziemia-Księżyc).",
        "isCorrect": true
      },
      {
        "text": "Bezpośrednie zasilanie turbin elektrowni jądrowych zamiast prętów paliwowych z uranu.",
        "isCorrect": false
      }
    ],
    "explanation": "Wszystkie trzy pierwsze opcje to konkretne zastosowania laserów ze slajdów 7–11 wykładu EFW4: ultraprecyzyjny druk 3D (nanolitografia), komunikacja światłowodowa, optyczne nośniki danych, chirurgia refrakcyjna LASIK, mikroskopia konfokalna, precyzyjny pomiar odległości Ziemia–Księżyc (z dokładnością 1 mm!), cięcie laserowe i broń laserowa."
  },
  {
    "id": 122,
    "category": "4. Lasery — fizyka, zasada działania i zastosowania",
    "text": "Co wykorzystuje się w metodzie ultraprecyzyjnego druku 3D (nanolitografii laserowej) omawianej na wykładzie EFW4?",
    "options": [
      {
        "text": "Absorpcję dwufotonową w polimerowym fotorezyście w ognisku zogniskowanej wiązki lasera.",
        "isCorrect": true
      },
      {
        "text": "Rozpraszanie Comptona w ciekłym metalu dające rozdzielczość rzędu kilku centymetrów.",
        "isCorrect": false
      },
      {
        "text": "Emisję spontaniczną ze zwykłej diody LED oświetlającej równomiernie całą powierzchnię.",
        "isCorrect": false
      },
      {
        "text": "Zjawisko Zeemana zamrażające atomy polimeru w stałym polu magnetycznym nadprzewodnika.",
        "isCorrect": false
      }
    ],
    "explanation": "W nanolitografii laserowej silnie zogniskowana wiązka lasera wywołuje absorpcję dwufotonową wyłącznie w mikroskopijnej objętości (eliptycznym wokselu) polimerowego fotorezystu, co pozwala drukować trójwymiarowe mikrostruktury z rozdzielczością ok. $150\\text{ nm}$ poprzecznie i $450\\text{ nm}$ wzdłuż osi wiązki."
  },
  {
    "id": 123,
    "category": "4. Lasery — fizyka, zasada działania i zastosowania",
    "text": "Na czym polega laserowy pomiar odległości Ziemia–Księżyc z dokładnością ok. $1\\text{ mm}$?",
    "options": [
      {
        "text": "Na pomiarze czasu przelotu impulsu lasera odbitego od reflektorów z misji Apollo na Księżycu.",
        "isCorrect": true
      },
      {
        "text": "Na pomiarze efektu Zeemana światła słonecznego odbitego od kraterów wulkanicznych Księżyca.",
        "isCorrect": false
      },
      {
        "text": "Na analizie dyfrakcji wiązki elektronów wysłanej z Ziemi na powierzchnię srebrnego lustra.",
        "isCorrect": false
      },
      {
        "text": "Na obliczeniu temperatury powierzchni Księżyca za pomocą prawa przesunięć Wiena dla CDC.",
        "isCorrect": false
      }
    ],
    "explanation": "Dzięki skrajnie małej rozbieżności (równoległości) i spójności wiązki laserowej wysyła się impulsy światła w stronę retroreflektorów pozostawionych na Księżycu podczas misji Apollo i mierzy czas przelotu tam i z powrotem. Pozwala to mierzyć dystans z precyzją ok. $1\\text{ mm}$ i wyznaczyć tempo oddalania się Księżyca ($3{,}8\\text{ cm/rok}$)."
  },
  {
    "id": 124,
    "category": "4. Lasery — fizyka, zasada działania i zastosowania",
    "text": "Co koryguje laserowa chirurgia refrakcyjna oka metodą LASIK omawiana na wykładzie?",
    "options": [
      {
        "text": "Kształt rogówki oka w leczeniu krótkowzroczności, dalekowzroczności i astygmatyzmu.",
        "isCorrect": true
      },
      {
        "text": "Kształt nerwu wzrokowego w leczeniu ślepoty barw oraz zaćmy wrodzonej u noworodków.",
        "isCorrect": false
      },
      {
        "text": "Skład chemiczny płynu w gałce ocznej przez indukcję rozpadów beta w soczewce oka.",
        "isCorrect": false
      },
      {
        "text": "Współczynnik załamania powietrza przed okiem przy użyciu wiązki mikrofalowej masera.",
        "isCorrect": false
      }
    ],
    "explanation": "Jak przedstawiono na slajdzie 9 wykładu EFW4, metoda LASIK polega na precyzyjnej laserowej korekcji kształtu rogówki oka, stosowanej w leczeniu krótkowzroczności, dalekowzroczności oraz astygmatyzmu."
  },
  {
    "id": 125,
    "category": "4. Lasery — fizyka, zasada działania i zastosowania",
    "text": "Do jak najmniejszego rozmiaru plamki można teoretycznie zogniskować idealną wiązkę światła laserowego?",
    "options": [
      {
        "text": "Do plamki o średnicy rzędu długości fali świetlnej $\\lambda$ (limit dyfrakcyjny).",
        "isCorrect": true
      },
      {
        "text": "Do punktu o średnicy dokładnie równej zeru niezależnie od długości fali.",
        "isCorrect": false
      },
      {
        "text": "Do plamki o średnicy równej promieniowi jądra ($\\sim 10^{-15}\\text{ m}$) dla światła.",
        "isCorrect": false
      },
      {
        "text": "Wyłącznie do średnicy nie mniejszej niż $1\\text{ cm}$ z powodu zakazu Pauliego.",
        "isCorrect": false
      }
    ],
    "explanation": "Jedną z 5 kluczowych cech światła laserowego jest możliwość zogniskowania całej energii wiązki w bardzo małej plamce o rozmiarze rzędu długości fali $\\lambda$ (dlatego krótsza długość fali, np. fioletowy laser w Blu-ray wobec podczerwonego w CD, pozwala upakować znacznie więcej danych na płycie!)."
  },
  {
    "id": 126,
    "category": "4. Lasery — fizyka, zasada działania i zastosowania",
    "text": "Jakie jest fizyczne źródło powstawania pierwszych fotonów uruchamiających lawinową emisję wymuszoną w laserze?",
    "options": [
      {
        "text": "Emisja spontaniczna pojedynczych fotonów biegnących wzdłuż osi rezonatora optycznego.",
        "isCorrect": true
      },
      {
        "text": "Zewnętrzna wiązka promieniowania rentgenowskiego padająca prostopadle na ośrodek czynny.",
        "isCorrect": false
      },
      {
        "text": "Anihilacja par elektron-pozyton zachodząca samorzutnie na lustrze półprzepuszczalnym.",
        "isCorrect": false
      },
      {
        "text": "Promieniowanie termiczne otoczenia skupiane w ośrodku przez kadmowe pręty kontrolne.",
        "isCorrect": false
      }
    ],
    "explanation": "Po wytworzeniu inwersji obsadzeń pierwsze fotony powstają w wyniku emisji spontanicznej. Te nieliczne fotony, które zostały wyemitowane dokładnie wzdłuż osi rezonatora optycznego, odbijają się wielokrotnie między zwierciadłami, wywołując lawinową (kaskadową) emisję wymuszoną w ośrodku czynnym."
  },
  {
    "id": 127,
    "category": "5. Fizyka materii skondensowanej — wiązania, kryształy, półprzewodniki, nadprzewodniki",
    "text": "Dlaczego krzywa energii potencjalnej $V(r) = \\frac{A}{r^n} - \\frac{B}{r^m}$ ($n > m$) dwóch zbliżających się atomów gwałtownie rośnie dla bardzo małych odległości $r$?",
    "options": [
      {
        "text": "Przez osłabienie ekranowania odpychających się jąder oraz zakaz Pauliego dla nakładających się powłok.",
        "isCorrect": true
      },
      {
        "text": "Przez zanik oddziaływania elektrostatycznego na rzecz silnego odpychania grawitacyjnego między jądrami.",
        "isCorrect": false
      },
      {
        "text": "Przez spontaniczne przekształcanie się elektronów walencyjnych w pozytony przy zbliżaniu atomów.",
        "isCorrect": false
      },
      {
        "text": "Przez przejście obu atomów w stan nadprzewodzący wypychający linie pola elektrycznego na zewnątrz.",
        "isCorrect": false
      }
    ],
    "explanation": "Wykład EFW5 (s. 2–4) wyjaśnia, że przy dużych odległościach dominuje przyciąganie ($-B/r^m$), co daje minimum $V(r)$ w odległości równowagowej. Przy zbyt dużym zbliżeniu atomów energia gwałtownie rośnie ($+A/r^n$, $n > m$) z dwóch powodów: słabnącego ekranowania dodatnich jąder oraz zakazu Pauliego, który nie pozwala elektronom nakładających się powłok zajmować tych samych stanów."
  },
  {
    "id": 128,
    "category": "5. Fizyka materii skondensowanej — wiązania, kryształy, półprzewodniki, nadprzewodniki",
    "text": "Na czym polega wiązanie JONOWE i kiedy najczęściej powstaje między dwoma atomami?",
    "options": [
      {
        "text": "Na przekazaniu elektronu przy dużej różnicy elektroujemności ($\\Delta EN > 1{,}7$) i przyciąganiu jonów.",
        "isCorrect": true
      },
      {
        "text": "Na równym uwspólnieniu pary elektronów przez dwa identyczne atomy o zerowej różnicy elektroujemności.",
        "isCorrect": false
      },
      {
        "text": "Na utworzeniu wspólnego gazu swobodnych elektronów między dodatnimi jonami w czystym metalu.",
        "isCorrect": false
      },
      {
        "text": "Na słabym przyciąganiu chwilowych dipoli indukowanych między obojętnymi atomami gazów szlachetnych.",
        "isCorrect": false
      }
    ],
    "explanation": "Wiązanie jonowe tworzy się przy dużej różnicy elektroujemności ($\\Delta EN > 1{,}7$, np. metal alkaliczny + halogen: $\\text{NaCl, KCl, NaF}$). Atom mniej elektroujemny oddaje elektron bardziej elektroujemnemu, a powstałe różnoimienne jony (kation i anion) przyciągają się silnym, niekierunkowym oddziaływaniem elektrostatycznym."
  },
  {
    "id": 129,
    "category": "5. Fizyka materii skondensowanej — wiązania, kryształy, półprzewodniki, nadprzewodniki",
    "text": "Dlaczego w wiązaniu KOWALENCYJNYM (np. w cząsteczce $\\text{H}_2^+$ lub $\\text{H}_2$) stan z SYMETRYCZNĄ (parzystą) przestrzenną funkcją falową ma niższą energię niż stan z funkcją antysymetryczną?",
    "options": [
      {
        "text": "Daje duże prawdopodobieństwo obecności elektronu między jądrami, gdzie potencjał silnie wiąże.",
        "isCorrect": true
      },
      {
        "text": "Daje zerowe prawdopodobieństwo obecności elektronu między jądrami, zmniejszając ich masę.",
        "isCorrect": false
      },
      {
        "text": "Wymusza równoległe ustawienie spinów obu elektronów na tym samym orbitalu z zakazu Pauliego.",
        "isCorrect": false
      },
      {
        "text": "Eliminuje całkowicie energię kinetyczną elektronów, sprowadzając ją dokładnie do zera.",
        "isCorrect": false
      }
    ],
    "explanation": "W stanie z parzystą (symetryczną) funkcją falową $\\Psi_A + \\Psi_B$ gęstość prawdopodobieństwa elektronu skupia się między dodatnimi jądrami (ekranując ich odpychanie i korzystając z głębokiej studni potencjału obu jąder) — to stan wiążący o niższej energii (dla $\\text{H}_2$ elektrony mają spiny antyrównoległe). Stan antysymetryczny $\\Psi_A - \\Psi_B$ ma węzeł między jądrami i wyższą energię."
  },
  {
    "id": 130,
    "category": "5. Fizyka materii skondensowanej — wiązania, kryształy, półprzewodniki, nadprzewodniki",
    "text": "Co jest fizyczną przyczyną słabych oddziaływań (wiązań) van der Waalsa między niepolarnymi cząsteczkami (np. $\\text{CH}_4$, $\\text{Cl}_2$) lub atomami gazów szlachetnych?",
    "options": [
      {
        "text": "Wzajemne oddziaływanie elektrostatyczne chwilowych i indukowanych dipoli elektrycznych.",
        "isCorrect": true
      },
      {
        "text": "Przekazanie elektronów walencyjnych i utworzenie gęstej sieci kationów oraz anionów.",
        "isCorrect": false
      },
      {
        "text": "Uwspólnienie kierunkowej pary elektronów wzdłuż osi łączącej dwa sąsiednie atomy.",
        "isCorrect": false
      },
      {
        "text": "Oddziaływanie jądrowe silne działające na odległościach rzędu kilku nanometrów.",
        "isCorrect": false
      }
    ],
    "explanation": "Oddziaływania van der Waalsa mają charakter elektrostatyczny, lecz są bardzo słabe: nawet w cząsteczkach niepolarnych i atomach gazów szlachetnych chwilowe fluktuacje chmury elektronowej tworzą chwilowe dipole, które indukują dipole w sąsiednich cząsteczkach i słabo je przyciągają."
  },
  {
    "id": 131,
    "category": "5. Fizyka materii skondensowanej — wiązania, kryształy, półprzewodniki, nadprzewodniki",
    "text": "Które z poniższych faktów poprawnie opisują wiązanie WODOROWE?",
    "options": [
      {
        "text": "Występuje między wodorem ($\\delta^+$) a silnie elektroujemnym atomem ($\\text{N, O, F}$) z wolną parą.",
        "isCorrect": true
      },
      {
        "text": "W ciekłej wodzie cząsteczka $\\text{H}_2\\text{O}$ może wiązać się z 4 innymi, podnosząc temp. wrzenia.",
        "isCorrect": true
      },
      {
        "text": "Stabilizuje przestrzenną strukturę podwójnej helisy DNA oraz drugorzędową strukturę białek.",
        "isCorrect": true
      },
      {
        "text": "Jest silniejsze niż wiązanie kowalencyjne i odpowiada za bardzo wysoką twardość diamentu.",
        "isCorrect": false
      }
    ],
    "explanation": "Wiązania wodorowe są zazwyczaj słabe (znacznie słabsze od jonowych i kowalencyjnych; diament ma wyłącznie silne wiązania kowalencyjne). Występują, gdy atom wodoru jest związany z silnie elektroujemnym atomem ($\\text{N, O, F}$), odpowiadając za anomalnie wysoką temperaturę wrzenia wody oraz strukturę DNA i białek."
  },
  {
    "id": 132,
    "category": "5. Fizyka materii skondensowanej — wiązania, kryształy, półprzewodniki, nadprzewodniki",
    "text": "Czym różnią się ciała AMORFICZNE (bezpostaciowe) od ciał KRYSTALICZNYCH?",
    "options": [
      {
        "text": "Amorficzne mają porządek bliskiego zasięgu (szkło), a krystaliczne regularną sieć dalekiego zasięgu.",
        "isCorrect": true
      },
      {
        "text": "Amorficzne tworzą 14 sieci Bravais w 3D (np. sól), a krystaliczne mają ułożenie atomów jak w gazie.",
        "isCorrect": false
      },
      {
        "text": "Amorficzne są wyłącznie czystymi metalami przewodzącymi prąd, a krystaliczne wyłącznie izolatorami.",
        "isCorrect": false
      },
      {
        "text": "Amorficzne występują wyłącznie jako pojedyncze monokryształy, a krystaliczne jako mieszanina cieczy.",
        "isCorrect": false
      }
    ],
    "explanation": "Ciała amorficzne (np. szkło, większość polimerów) nie mają uporządkowania dalekiego zasięgu — wykazują jedynie porządek lokalny (bliskiego zasięgu), podobnie jak przechłodzona ciecz. W ciałach krystalicznych atomy tworzą regularną, okresową sieć przestrzenną (7 układów krystalograficznych, 14 sieci Bravais w 3D)."
  },
  {
    "id": 133,
    "category": "5. Fizyka materii skondensowanej — wiązania, kryształy, półprzewodniki, nadprzewodniki",
    "text": "Ile układów krystalograficznych oraz ile typów sieci przestrzennych (Bravais) wyróżnia się w ciałach krystalicznych w 3D?",
    "options": [
      {
        "text": "$7$ układów krystalograficznych i $14$ typów sieci przestrzennych.",
        "isCorrect": true
      },
      {
        "text": "$4$ układy krystalograficzne i $7$ typów sieci przestrzennych.",
        "isCorrect": false
      },
      {
        "text": "$14$ układów krystalograficznych i $28$ typów sieci przestrzennych.",
        "isCorrect": false
      },
      {
        "text": "$3$ układy krystalograficzne i $12$ typów sieci przestrzennych.",
        "isCorrect": false
      }
    ],
    "explanation": "Jak pokazano na slajdzie 7 wykładu EFW5, każda dozwolona trójwymiarowa sieć krystaliczna należy do jednego z $7$ układów krystalograficznych (regularny, tetragonalny, rombowy, heksagonalny, trójskośny, jednoskośny, trygonalny), które w 3D tworzą łącznie $14$ typów sieci przestrzennych (Bravais)."
  },
  {
    "id": 134,
    "category": "5. Fizyka materii skondensowanej — wiązania, kryształy, półprzewodniki, nadprzewodniki",
    "text": "Czym różni się MONOKRYSZTAŁ od POLIKRYSZTAŁU?",
    "options": [
      {
        "text": "Monokryształ ma jedną ciągłą sieć w całej objętości, a polikryształ jest zlepkiem wielu ziaren.",
        "isCorrect": true
      },
      {
        "text": "Monokryształ składa się z jednego pierwiastka, a polikryształ musi zawierać co najmniej dwa.",
        "isCorrect": false
      },
      {
        "text": "Monokryształ nie posiada uporządkowania dalekiego zasięgu, a polikryształ ma idealną sieć.",
        "isCorrect": false
      },
      {
        "text": "Monokryształ przewodzi prąd wyłącznie w $T=0\\text{ K}$, a polikryształ w każdej temperaturze.",
        "isCorrect": false
      }
    ],
    "explanation": "Monokryształ (np. kryształ szafiru $\\text{Al}_2\\text{O}_3$, monokryształ Si używany w mikroelektronice) ma jednolitą, nieprzerwaną sieć krystaliczną w całej objętości (może być związkiem wielu pierwiastków!). Polikryształ (np. typowe metale, mosiądz, poly-Si) zbudowany jest ze zlepku wielu drobnych, losowo zorientowanych ziaren krystalicznych."
  },
  {
    "id": 135,
    "category": "5. Fizyka materii skondensowanej — wiązania, kryształy, półprzewodniki, nadprzewodniki",
    "text": "Jaką metodą eksperymentalną bada się strukturę sieci krystalicznej ciał stałych i jakie prawo ją opisuje?",
    "options": [
      {
        "text": "Krystalografią rentgenowską (dyfrakcją promieni X) opisaną prawem Bragga $2d\\sin\\theta = n\\lambda$.",
        "isCorrect": true
      },
      {
        "text": "Spektroskopią efektu Zeemana opisaną prawem Stefana-Boltzmanna $R_T = \\sigma T^4$.",
        "isCorrect": false
      },
      {
        "text": "Doświadczeniem Sterna-Gerlacha opisanym wzorem przesunięcia Comptona $\\Delta\\lambda = \\lambda_C(1-\\cos\\theta)$.",
        "isCorrect": false
      },
      {
        "text": "Kamera termowizyjną w podczerwieni opisaną prawem przesunięć Wiena $\\lambda_{\\max}T = b$.",
        "isCorrect": false
      }
    ],
    "explanation": "Ponieważ długość fali promieniowania rentgenowskiego ($\\sim 0{,}1\\text{ nm}$) jest porównywalna z odległościami między płaszczyznami atomowymi w kryształach, do badania struktury krystalicznej używa się krystalografii rentgenowskiej (dyfrakcji promieni X), gdzie maksima interferencyjne spełniają prawo Bragga $2d\\sin\\theta = n\\lambda$."
  },
  {
    "id": 136,
    "category": "5. Fizyka materii skondensowanej — wiązania, kryształy, półprzewodniki, nadprzewodniki",
    "text": "Który zestaw poprawnie przedstawia cztery rodzaje kryształów (ze względu na wiązania) oraz po dwa przykłady każdego z nich? (pytanie z kolokwium)",
    "options": [
      {
        "text": "Molekularne (lód, $\\text{CO}_2$), jonowe ($\\text{NaCl, KCl}$), atomowe (diament, Si), metaliczne (Cu, Ag).",
        "isCorrect": true
      },
      {
        "text": "Molekularne ($\\text{NaCl}$, Cu), jonowe (diament, Si), atomowe (lód, Ar), metaliczne ($\\text{CO}_2$, KCl).",
        "isCorrect": false
      },
      {
        "text": "Molekularne (diament, Ge), jonowe (lód, $\\text{N}_2$), atomowe (Cu, Fe), metaliczne ($\\text{NaCl, CsCl}$).",
        "isCorrect": false
      },
      {
        "text": "Molekularne (Si, $\\text{Al}$), jonowe (Fe, Au), atomowe ($\\text{NaCl}$, KBr), metaliczne (lód, suchy lód).",
        "isCorrect": false
      }
    ],
    "explanation": "To klasyczne pytanie kolokwialne (24.11.2022)! Cztery rodzaje kryształów to: (1) molekularne/cząsteczkowe (lód, suchy lód $\\text{CO}_2$, stałe $\\text{O}_2, \\text{N}_2, \\text{I}_2$, zestalone gazy szlachetne), (2) jonowe ($\\text{NaCl, KCl, CsCl}$), (3) atomowe/kowalentne (diament, Si, Ge) oraz (4) metaliczne (Cu, Ag, Fe, Al, Na)."
  },
  {
    "id": 137,
    "category": "5. Fizyka materii skondensowanej — wiązania, kryształy, półprzewodniki, nadprzewodniki",
    "text": "Które właściwości fizyczne charakteryzują KRYSZTAŁY MOLEKULARNE (cząsteczkowe), np. lód lub zestalony argon?",
    "options": [
      {
        "text": "Słabe wiązania van der Waalsa, miękkość (podatność na odkształcenia) i niska temperatura topnienia.",
        "isCorrect": true
      },
      {
        "text": "Silne kierunkowe wiązania kowalencyjne, ekstremalna twardość i bardzo wysoka temperatura topnienia.",
        "isCorrect": false
      },
      {
        "text": "Wspólny gaz zdelokalizowanych elektronów, połysk metaliczny i świetne przewodnictwo elektryczne.",
        "isCorrect": false
      },
      {
        "text": "Naprzemienne kationy i aniony związane elektrostatycznie, wysoka twardość i wysoka temp. topnienia.",
        "isCorrect": false
      }
    ],
    "explanation": "Kryształy molekularne (cząsteczkowe) składają się z obojętnych cząsteczek ze sparowanymi elektronami, utrzymywanych słabymi siłami van der Waalsa (lub wiązaniami wodorowymi jak w lodzie). Stąd ich mała twardość, podatność na odkształcenia, niska temperatura topnienia i brak przewodnictwa."
  },
  {
    "id": 138,
    "category": "5. Fizyka materii skondensowanej — wiązania, kryształy, półprzewodniki, nadprzewodniki",
    "text": "Które cechy są charakterystyczne dla KRYSZTAŁÓW JONOWYCH (np. $\\text{NaCl, KCl}$)?",
    "options": [
      {
        "text": "Wiązania niekierunkowe, twardość, wysoka temp. topnienia, przezroczystość w widzialnym i absorpcja UV.",
        "isCorrect": true
      },
      {
        "text": "Wiązania kierunkowe, bardzo niska temperatura topnienia, nieprzezroczystość i bardzo wysoka kowalność.",
        "isCorrect": false
      },
      {
        "text": "Swobodny gaz elektronowy, doskonałe przewodnictwo w stanie stałym i całkowite odbijanie światła.",
        "isCorrect": false
      },
      {
        "text": "Słabe oddziaływania van der Waalsa, miękkość i przewodzenie prądu już w temperaturze zera Kelwina.",
        "isCorrect": false
      }
    ],
    "explanation": "Kryształy jonowe (EFW5 s. 8) tworzą gęsto upakowane, naprzemiennie ułożone jony dodatnie i ujemne powiązane silnym, niekierunkowym oddziaływaniem elektrostatycznym. Są twarde (ale kruche), mają wysoką temperaturę topnienia, są przezroczyste dla światła widzialnego, natomiast silnie absorbują nadfiolet (UV)."
  },
  {
    "id": 139,
    "category": "5. Fizyka materii skondensowanej — wiązania, kryształy, półprzewodniki, nadprzewodniki",
    "text": "Dlaczego kryształy ATOMOWE (kowalentne, np. diament, krzem) są bardzo twarde i słabo przewodzą ciepło oraz prąd w niskich temperaturach?",
    "options": [
      {
        "text": "Atomy łączą silne, kierunkowe wiązania kowalencyjne bez swobodnych elektronów w sieci.",
        "isCorrect": true
      },
      {
        "text": "Atomy łączą słabe siły van der Waalsa blokujące przepływ ładunków i odkształcenia sieci.",
        "isCorrect": false
      },
      {
        "text": "W sieci występuje nadmiar swobodnych elektronów, które wzajemnie się hamują w zderzeniach.",
        "isCorrect": false
      },
      {
        "text": "Kryształy atomowe nie posiadają uporządkowanej sieci przestrzennej i są ciałami amorficznymi.",
        "isCorrect": false
      }
    ],
    "explanation": "W kryształach atomowych (kowalentnych) atomy połączone są parami wspólnych elektronów w silne, kierunkowe wiązania wyznaczające sztywną przestrzenną sieć (stąd wielka twardość i niepodatność na odkształcenia). Brak swobodnych elektronów skutkuje słabym przewodnictwem elektrycznym (izolatory jak diament lub półprzewodniki jak Si, Ge)."
  },
  {
    "id": 140,
    "category": "5. Fizyka materii skondensowanej — wiązania, kryształy, półprzewodniki, nadprzewodniki",
    "text": "Dlaczego kryształy METALICZNE (np. miedź, srebro, sód) są nieprzezroczyste dla światła widzialnego?",
    "options": [
      {
        "text": "Swobodne elektrony gazu elektronowego mogą absorbować fotony o praktycznie dowolnej energii.",
        "isCorrect": true
      },
      {
        "text": "Metale posiadają bardzo szeroką przerwę energetyczną ($E_g > 10\\text{ eV}$) odbijającą wszystkie fotony.",
        "isCorrect": false
      },
      {
        "text": "W metalach wszystkie elektrony są sztywno uwięzione w kierunkowych wiązaniach kowalencyjnych.",
        "isCorrect": false
      },
      {
        "text": "Jądra atomów metalu pochłaniają światło widzialne w wyniku jądrowej fotodezintegracji.",
        "isCorrect": false
      }
    ],
    "explanation": "Na slajdzie 9 wykładu EFW5 podano wprost: ciała metaliczne są nieprzezroczyste, ponieważ swobodne elektrony w gazie elektronowym (ciągłe pasmo bez przerwy) mogą absorbować (i ponownie wypromieniowywać/odbijać) fotony o dowolnej energii z zakresu widzialnego."
  },
  {
    "id": 141,
    "category": "5. Fizyka materii skondensowanej — wiązania, kryształy, półprzewodniki, nadprzewodniki",
    "text": "Skąd bierze się dobre przewodnictwo elektryczne METALI i dlaczego ich opór elektryczny ROŚNIE wraz ze wzrostem temperatury? (pytanie z kolokwium)",
    "options": [
      {
        "text": "Pasma się nakładają (dużo wolnych elektronów); wyższe $T$ wzmaga drgania sieci i rozpraszanie.",
        "isCorrect": true
      },
      {
        "text": "Pasma dzieli szeroka przerwa; wyższe $T$ zmniejsza wykładniczo liczbę swobodnych elektronów.",
        "isCorrect": false
      },
      {
        "text": "Metale mają nadmiar dziur walencyjnych; wyższe $T$ zatrzymuje drgania termiczne jonów sieci.",
        "isCorrect": false
      },
      {
        "text": "Elektrony płyną w parach Coopera; wyższe $T$ poszerza warstwę zubożoną na granicach ziaren.",
        "isCorrect": false
      }
    ],
    "explanation": "To jedno z kluczowych pytań z kolokwiów (2023 i 2024)! W metalach pasmo walencyjne i pasmo przewodnictwa zachodzą na siebie (brak przerwy energetycznej), zapewniając ogromną, niemal stałą w funkcji $T$ koncentrację swobodnych elektronów (gaz elektronowy w modelu Drudego). Wzrost temperatury zwiększa amplitudę drgań cieplnych jonów sieci (liczbę fononów), co powoduje częstsze rozpraszanie elektronów i wzrost oporu."
  },
  {
    "id": 142,
    "category": "5. Fizyka materii skondensowanej — wiązania, kryształy, półprzewodniki, nadprzewodniki",
    "text": "W jaki sposób powstają pasma energetyczne i przerwy energetyczne w krysztale według teorii pasmowej?",
    "options": [
      {
        "text": "Zbliżanie ogromnej liczby atomów powoduje nakładanie funkcji falowych i rozszczepienie poziomów w pasma.",
        "isCorrect": true
      },
      {
        "text": "Zewnętrzne pole magnetyczne Ziemi rozszczepia każdy poziom atomowy w ciągłe pasmo na mocy efektu Zeemana.",
        "isCorrect": false
      },
      {
        "text": "Zderzenia elektronów z jądrami niszczą kwantowanie energii, tworząc ciągłe widmo bez żadnych przerw.",
        "isCorrect": false
      },
      {
        "text": "Ciepło właściwe sieci krystalicznej rozmywa poziomy energetyczne wyłącznie powyżej temperatury topnienia.",
        "isCorrect": false
      }
    ],
    "explanation": "Gdy zbliżamy dwa atomy, ich funkcje falowe nakładają się i poziom rozszczepia się na dwa (symetryczny i antysymetryczny). Gdy w krysztale zbliżymy $N \\sim 10^{23}$ atomów, zgodnie z zakazem Pauliego każdy dyskretny poziom atomowy rozszczepia się na $N$ niezwykle gęsto ułożonych poziomów tworzących niemal ciągłe pasma dozwolone, oddzielone przerwami zabronionymi $E_g$."
  },
  {
    "id": 143,
    "category": "5. Fizyka materii skondensowanej — wiązania, kryształy, półprzewodniki, nadprzewodniki",
    "text": "Czym jest energia Fermiego $E_F$ w teorii pasmowej ciał stałych?",
    "options": [
      {
        "text": "Najwyższą energią stanu elektronowego obsadzonego w temperaturze zera bezwzględnego ($T = 0\\text{ K}$).",
        "isCorrect": true
      },
      {
        "text": "Szerokością przerwy energetycznej między dnem pasma walencyjnego a energią jonizacji atomu.",
        "isCorrect": false
      },
      {
        "text": "Minimalną energią kinetyczną fotonu wymaganą do wybicia elektronu z powierzchni metalu ($W$).",
        "isCorrect": false
      },
      {
        "text": "Średnią energią drgań cieplnych jednego jonu w sieci krystalicznej w temperaturze pokojowej.",
        "isCorrect": false
      }
    ],
    "explanation": "Obsadzenie stanów elektronowych (fermionów) w ciele stałym opisuje rozkład Fermiego-Diraca. Energia Fermiego $E_F$ definiowana jest jako najwyższa energia stanu zajętego przez elektrony w temperaturze $T = 0\\text{ K}$ (w $T = 0\\text{ K}$ wszystkie stany poniżej $E_F$ są zajęte, a powyżej puste). W półprzewodnikach i izolatorach $E_F$ leży wewnątrz przerwy energetycznej."
  },
  {
    "id": 144,
    "category": "5. Fizyka materii skondensowanej — wiązania, kryształy, półprzewodniki, nadprzewodniki",
    "text": "Które stwierdzenie poprawnie opisuje układ pasm energetycznych w metalu, półprzewodniku i izolatorze?",
    "options": [
      {
        "text": "Metal ma nakładające się pasma; półprzewodnik wąską przerwę ($\\sim 0{,}1$–$2\\text{ eV}$); izolator szeroką ($> 3\\text{ eV}$).",
        "isCorrect": true
      },
      {
        "text": "Izolator ma nakładające się pasma; półprzewodnik szeroką przerwę ($> 5\\text{ eV}$); metal wąską ($\\sim 1\\text{ eV}$).",
        "isCorrect": false
      },
      {
        "text": "Półprzewodnik ma nakładające się pasma; metal wąską przerwę ($\\sim 1\\text{ eV}$); izolator brak pasm.",
        "isCorrect": false
      },
      {
        "text": "Wszystkie trzy mają identyczną przerwę $E_g$, a różnią się wyłącznie znakiem ładunku elektronów.",
        "isCorrect": false
      }
    ],
    "explanation": "W metalach pasmo walencyjne i pasmo przewodnictwa nakładają się (lub pasmo jest częściowo zapełnione — brak przerwy). W półprzewodnikach przerwa energetyczna $E_g$ jest wąska (ok. $0{,}1$–$2\\text{ eV}$, np. Si: $1{,}12\\text{ eV}$, Ge: $0{,}67\\text{ eV}$), więc wzbudzenie termiczne przenosi elektrony do pasma przewodnictwa. W izolatorach $E_g$ jest bardzo szeroka ($> 3$–$4\\text{ eV}$)."
  },
  {
    "id": 145,
    "category": "5. Fizyka materii skondensowanej — wiązania, kryształy, półprzewodniki, nadprzewodniki",
    "text": "Które stwierdzenie dotyczące PÓŁPRZEWODNIKÓW SAMOISTNYCH jest prawdziwe? (pytanie z kolokwium)",
    "options": [
      {
        "text": "W temperaturze $T = 0\\text{ K}$ nie posiadają swobodnych nośników ładunku i nie przewodzą prądu.",
        "isCorrect": true
      },
      {
        "text": "Wraz ze wzrostem temperatury rośnie koncentracja dziur, przez co ich przewodnictwo spada.",
        "isCorrect": false
      },
      {
        "text": "Niezależnie od temperatury elektrony nie mogą przeskoczyć przez przerwę do pasma przewodnictwa.",
        "isCorrect": false
      },
      {
        "text": "W temperaturze pokojowej wykazują zawsze lepsze przewodnictwo niż półprzewodniki domieszkowe.",
        "isCorrect": false
      }
    ],
    "explanation": "To bezpośrednie pytanie z kolokwium (24.11.2022)! W półprzewodniku samoistnym (np. czystym Si lub Ge) w temperaturze $T = 0\\text{ K}$ pasmo walencyjne jest całkowicie zapełnione, a pasmo przewodnictwa puste — zachowuje się jak idealny izolator. W $T > 0\\text{ K}$ elektrony przeskakują przez wąską przerwę, a przewodnictwo rośnie ze wzrostem $T$ (choć wciąż jest niższe niż w półprzewodnikach domieszkowych)."
  },
  {
    "id": 146,
    "category": "5. Fizyka materii skondensowanej — wiązania, kryształy, półprzewodniki, nadprzewodniki",
    "text": "Jak teoria pasmowa tłumaczy fakt, że przewodnictwo elektryczne półprzewodników ROŚNIE ze wzrostem temperatury? (pytanie z kolokwium)",
    "options": [
      {
        "text": "Energia termiczna pozwala elektronom przeskakiwać przerwę $E_g$, dając lawinowy wzrost par elektron-dziura.",
        "isCorrect": true
      },
      {
        "text": "Wzrost temperatury zmniejsza drgania cieplne jonów sieci, dzięki czemu elektrony przestają się zderzać.",
        "isCorrect": false
      },
      {
        "text": "Wzrost temperatury zwęża przerwę energetyczną dokładnie do zera, zamieniając półprzewodnik w nadprzewodnik.",
        "isCorrect": false
      },
      {
        "text": "Energia termiczna uwalnia protony z jąder krzemu, które stają się głównymi nośnikami dodatniego prądu.",
        "isCorrect": false
      }
    ],
    "explanation": "To pytanie z kolokwium (07.12.2023 gr. B)! Wraz ze wzrostem $T$ rośnie energia termiczna $k_B T$, dzięki czemu coraz więcej elektronów przeskakuje przez wąską przerwę $E_g$ z pasma walencyjnego do pasma przewodnictwa, tworząc pary elektron–dziura. Wykładniczy wzrost koncentracji nośników ($\\propto e^{-E_g/(2k_B T)}$) zdecydowanie przeważa nad silniejszym rozpraszaniem na drganiach sieci."
  },
  {
    "id": 147,
    "category": "5. Fizyka materii skondensowanej — wiązania, kryształy, półprzewodniki, nadprzewodniki",
    "text": "Z jakich grup układu okresowego pochodzą klasyczne pierwiastkowe półprzewodniki samoistne (np. Si, Ge) oraz ich dwuskładnikowe związki (np. GaN, GaAs)?",
    "options": [
      {
        "text": "Z grupy IV (14.) układu okresowego (Si, Ge) oraz ze związków grup III–V (GaAs, GaN).",
        "isCorrect": true
      },
      {
        "text": "Z grupy I (1.) układu okresowego (Li, Na) oraz ze związków grup I–VII (NaCl, KCl).",
        "isCorrect": false
      },
      {
        "text": "Z grupy 18. gazów szlachetnych (Ar, Kr) oraz czystych metali przejściowych (Fe, Co).",
        "isCorrect": false
      },
      {
        "text": "Z grupy II (2.) berylowców (Mg, Ca) oraz ze związków grup II–VIII (CaHe, MgNe).",
        "isCorrect": false
      }
    ],
    "explanation": "Półprzewodniki samoistne to pierwiastki 14. (IV) grupy układu okresowego (C, Si, Ge, Sn) o strukturze diamentu i 4 elektronach walencyjnych tworzących wiązania kowalencyjne, a także związki pierwiastków grup III–V (np. GaN, InN, GaAs). W czystym półprzewodniku samoistnym koncentracja elektronów równa się koncentracji dziur ($n = p$)."
  },
  {
    "id": 148,
    "category": "5. Fizyka materii skondensowanej — wiązania, kryształy, półprzewodniki, nadprzewodniki",
    "text": "Które stwierdzenie na temat półprzewodników domieszkowych na bazie krzemu (grupa IV) jest PRAWDZIWE? (pytanie z kolokwium)",
    "options": [
      {
        "text": "Krzem domieszkowany fosforem (gr. V) ma typ n, a domieszkowany galem (gr. III) ma typ p.",
        "isCorrect": true
      },
      {
        "text": "Krzem domieszkowany arsenem (gr. V) ma jako nośniki większościowe dziury, a indem elektrony.",
        "isCorrect": false
      },
      {
        "text": "Domieszkowanie krzemu fosforem lub glinem powoduje silny spadek przewodnictwa w $T = 300\\text{ K}$.",
        "isCorrect": false
      },
      {
        "text": "Krzem domieszkowany glinem (gr. III) ma większą koncentrację elektronów niż krzem czysty.",
        "isCorrect": false
      }
    ],
    "explanation": "To bezpośrednie pytanie z archiwalnego kolokwium (kolos2.pdf)! Pierwiastki grupy V (15., np. fosfor P, arsen As) mają 5 elektronów walencyjnych (donory) — oddają 5. nadmiarowy elektron, tworząc półprzewodnik typu $n$ (większość: elektrony). Pierwiastki grupy III (13., np. bor B, glin Al, gal Ga, ind In) mają 3 elektrony walencyjne (akceptory) — tworzą dziury, dając typ $p$ (większość: dziury)."
  },
  {
    "id": 149,
    "category": "5. Fizyka materii skondensowanej — wiązania, kryształy, półprzewodniki, nadprzewodniki",
    "text": "Gdzie na diagramie pasmowym półprzewodnika leżą poziomy DONOROWE (typ $n$) oraz poziomy AKCEPTOROWE (typ $p$)?",
    "options": [
      {
        "text": "Donorowe w przerwie tuż pod pasmem przewodnictwa, a akceptorowe w przerwie tuż nad pasmem walencyjnym.",
        "isCorrect": true
      },
      {
        "text": "Donorowe w przerwie tuż nad pasmem walencyjnym, a akceptorowe w przerwie tuż pod pasmem przewodnictwa.",
        "isCorrect": false
      },
      {
        "text": "Zarówno poziomy donorowe, jak i akceptorowe leżą głęboko poniżej dolnej krawędzi pasma walencyjnego.",
        "isCorrect": false
      },
      {
        "text": "Zarówno poziomy donorowe, jak i akceptorowe leżą wysoko powyżej górnej krawędzi pasma przewodnictwa.",
        "isCorrect": false
      }
    ],
    "explanation": "Dodatkowy, 5. elektron atomu donora (np. P, As) jest słabo związany, więc jego poziom energetyczny (donorowy) leży w przerwie energetycznej bardzo blisko dna pasma przewodnictwa — łatwo tam przeskakuje. Poziom akceptorowy (np. B, Al, Ga) leży w przerwie tuż nad stropem pasma walencyjnego, łatwo przejmując elektron i tworząc ruchomą dziurę w paśmie walencyjnym."
  },
  {
    "id": 150,
    "category": "5. Fizyka materii skondensowanej — wiązania, kryształy, półprzewodniki, nadprzewodniki",
    "text": "Jak powstaje warstwa zubożona (zaporowa) w niespolaryzowanym złączu $p$–$n$ diody półprzewodnikowej?",
    "options": [
      {
        "text": "Przez dyfuzję nośników przez złącze i ich rekombinację, zostawiając nieruchome jony.",
        "isCorrect": true
      },
      {
        "text": "Przez stopienie obszarów $p$ i $n$ oraz wstawienie między nie cienkiej płytki ze szkła.",
        "isCorrect": false
      },
      {
        "text": "Przez dyfuzję nieruchomych jąder krzemu do przeciwnych końców monokryształu diody.",
        "isCorrect": false
      },
      {
        "text": "Przez wyparowanie elektronów walencyjnych na granicy złącza w trakcie jego produkcji.",
        "isCorrect": false
      }
    ],
    "explanation": "Po zetknięciu obszarów $p$ i $n$ w jednym monokrysztale elektrony dyfundują z $n$ do $p$, a dziury z $p$ do $n$ i rekombinują w pobliżu granicy. Powstaje warstwa zubożona (pozbawiona swobodnych nośników) zawierająca odkryte, nieruchome jony domieszek, których wewnętrzne pole elektryczne tworzy barierę potencjału (ok. $0{,}7\\text{ V}$ dla Si, $0{,}3\\text{ V}$ dla Ge) hamującą dalszą dyfuzję."
  },
  {
    "id": 151,
    "category": "5. Fizyka materii skondensowanej — wiązania, kryształy, półprzewodniki, nadprzewodniki",
    "text": "Jak zachowuje się złącze $p$–$n$ diody przy POLARYZACJI W KIERUNKU PRZEWODZENIA („$+$” źródła do obszaru $p$, „$-$” do obszaru $n$)?",
    "options": [
      {
        "text": "Warstwa zubożona zwęża się, bariera maleje i po przekroczeniu napięcia progowego płynie duży prąd.",
        "isCorrect": true
      },
      {
        "text": "Warstwa zubożona poszerza się, bariera rośnie i płynie wyłącznie znikomy prąd nośników mniejszościowych.",
        "isCorrect": false
      },
      {
        "text": "Warstwa zubożona nie zmienia swojej szerokości, a natężenie prądu rośnie ściśle liniowo jak w oporniku.",
        "isCorrect": false
      },
      {
        "text": "Nośniki większościowe są odciągane od złącza ku elektrodom, całkowicie blokując przepływ ładunku.",
        "isCorrect": false
      }
    ],
    "explanation": "Przy polaryzacji w kierunku przewodzenia („$+$” do $p$, „$-$” do $n$) zewnętrzne pole przeciwdziała wewnętrznej barierze potencjału, wypychając dziury z $p$ i elektrony z $n$ w stronę złącza. Warstwa zubożona zwęża się, a po przekroczeniu napięcia progowego ($\\sim 0{,}7\\text{ V}$ dla Si) przez diodę płynie duży prąd rosnący wykładniczo ($I = I_0(e^{eV/k_BT}-1)$)."
  },
  {
    "id": 152,
    "category": "5. Fizyka materii skondensowanej — wiązania, kryształy, półprzewodniki, nadprzewodniki",
    "text": "Jak zachowuje się dioda półprzewodnikowa przy POLARYZACJI W KIERUNKU ZAPOROWYM („$-$” źródła do $p$, „$+$” do $n$)?",
    "options": [
      {
        "text": "Warstwa zubożona poszerza się i płynie tylko znikomy prąd wsteczny aż do napięcia przebicia.",
        "isCorrect": true
      },
      {
        "text": "Warstwa zubożona zanika całkowicie i przez złącze płynie ogromny prąd nośników większościowych.",
        "isCorrect": false
      },
      {
        "text": "Dioda emituje spójne światło laserowe o długości fali zależnej od przyłożonego napięcia.",
        "isCorrect": false
      },
      {
        "text": "Opór diody spada dokładnie do zera, zamieniając złącze $p$–$n$ w idealny nadprzewodnik.",
        "isCorrect": false
      }
    ],
    "explanation": "W polaryzacji zaporowej („$-$” do $p$, „$+$” do $n$) nośniki większościowe są odciągane od granicy złącza, co poszerza warstwę zubożoną i podwyższa barierę potencjału. Płynie wtedy jedynie znikomy, niemal stały prąd unoszenia nośników mniejszościowych ($-I_0$, rzędu $\\text{nA}$–$\\mu\\text{A}$), aż do osiągnięcia ujemnego napięcia przebicia."
  },
  {
    "id": 153,
    "category": "5. Fizyka materii skondensowanej — wiązania, kryształy, półprzewodniki, nadprzewodniki",
    "text": "Jak wygląda kształt charakterystyki prądowo-napięciowej $I(V)$ diody krzemowej ($U_0 \\approx 0{,}7\\text{ V}$) w I i III ćwiartce układu współrzędnych? (pytanie z kolokwium)",
    "options": [
      {
        "text": "Dla $V > 0{,}7\\text{ V}$ rośnie wykładniczo; dla $V < 0$ płynie mały stały prąd $-I_0$ aż do gwałtownego przebicia.",
        "isCorrect": true
      },
      {
        "text": "Jest linią prostą przechodzącą symetrycznie przez początek układu zgodnie z klasycznym prawem Ohma.",
        "isCorrect": false
      },
      {
        "text": "Dla $V > 0$ prąd jest równy zero, natomiast dla dowolnego $V < 0$ rośnie wykładniczo do nieskończoności.",
        "isCorrect": false
      },
      {
        "text": "Jest idealną parabolą symetryczną względem osi natężenia prądu $I$ bez wyraźnego progu przewodzenia.",
        "isCorrect": false
      }
    ],
    "explanation": "Charakterystyka $I(V)$ diody jest silnie niesymetryczna (stąd główne zastosowanie diod jako prostowników): w I ćwiartce ($V > 0$) prąd jest bliski zeru aż do ok. $0{,}7\\text{ V}$ (Si), po czym rośnie gwałtownie wykładniczo; w III ćwiartce ($V < 0$) biegnie płasko tuż pod osią poziomą ($-I_0$), by załamać się pionowo w dół przy napięciu przebicia."
  },
  {
    "id": 154,
    "category": "5. Fizyka materii skondensowanej — wiązania, kryształy, półprzewodniki, nadprzewodniki",
    "text": "Na jakim zjawisku opiera się działanie DIODY ZENERA i jakie jest jej główne zastosowanie w elektronice?",
    "options": [
      {
        "text": "Na kontrolowanym przebiciu przy polaryzacji zaporowej; służy do stabilizacji (regulacji) napięcia.",
        "isCorrect": true
      },
      {
        "text": "Na emisji fotonów w polaryzacji przewodzenia; służy wyłącznie do komunikacji światłowodowej.",
        "isCorrect": false
      },
      {
        "text": "Na efekcie Meissnera poniżej temperatury krytycznej; służy do budowy magnesów w skanerach MRI.",
        "isCorrect": false
      },
      {
        "text": "Na całkowitym blokowaniu prądu w obu kierunkach; służy jako izolator termiczny w procesorach.",
        "isCorrect": false
      }
    ],
    "explanation": "Jak podano na slajdzie 17 wykładu EFW5, dioda Zenera pracuje w obszarze wysokiej polaryzacji wstecznej (zaporowej), wykorzystując przebicie Zenera lub lawinowe, gdzie napięcie na diodzie jest niemal stałe przy dużych zmianach prądu — dzięki temu stosuje się ją do regulacji i stabilizacji napięcia."
  },
  {
    "id": 155,
    "category": "5. Fizyka materii skondensowanej — wiązania, kryształy, półprzewodniki, nadprzewodniki",
    "text": "Jak zbudowany jest tranzystor bipolarny ($n$–$p$–$n$ lub $p$–$n$–$p$) i dlaczego środkowy obszar (baza) musi być bardzo cienki?",
    "options": [
      {
        "text": "To dwa złącza $p$–$n$ złączone plecami; cienka baza daje $I_E \\approx I_C$, a mały prąd bazy steruje $I_C$.",
        "isCorrect": true
      },
      {
        "text": "To pojedyncze złącze $p$–$n$ z grubym izolatorem; cienka baza blokuje całkowicie przepływ prądu.",
        "isCorrect": false
      },
      {
        "text": "To układ trzech warstw czystego metalu bez domieszek; cienka baza zamienia prąd stały w fale radiowe.",
        "isCorrect": false
      },
      {
        "text": "To para nadprzewodników oddzielonych próżnią; cienka baza wymusza powstawanie par Coopera w $300\\text{ K}$.",
        "isCorrect": false
      }
    ],
    "explanation": "Tranzystor bipolarny składa się z emitera, bardzo cienkiej bazy i kolektora (dwie diody $p$–$n$ złączone „plecami”). Ponieważ baza jest bardzo wąska, większość nośników wstrzykniętych z emitera przelatuje przez nią do kolektora ($I_E \\approx I_C$), a niewielki prąd bazy steruje dużym prądem emiter–kolektor — stąd wzmacnianie sygnałów."
  },
  {
    "id": 156,
    "category": "5. Fizyka materii skondensowanej — wiązania, kryształy, półprzewodniki, nadprzewodniki",
    "text": "Na jakim fizycznym mechanizmie opiera się działanie ogniwa fotowoltaicznego (słonecznego)?",
    "options": [
      {
        "text": "Padający foton o $h\\nu \\ge E_g$ przenosi elektron do pasma przewodnictwa, a złącze $p$–$n$ rozdziela ładunki.",
        "isCorrect": true
      },
      {
        "text": "Światło ogrzewa metalowy drut, zwiększając jego opór i generując napięcie na skutek efektu Meissnera.",
        "isCorrect": false
      },
      {
        "text": "Padające fotony wywołują rozszczepienie jąder krzemu, uwalniając neutrony termiczne w złączu $p$–$n$.",
        "isCorrect": false
      },
      {
        "text": "Światło indukuje emisję wymuszoną w lustrach rezonatora, tworząc spójną wiązkę zamiast prądu elektrycznego.",
        "isCorrect": false
      }
    ],
    "explanation": "W ogniwie fotowoltaicznym (EFW5 s. 19) padający foton o energii co najmniej równej przerwie energetycznej $E_g$ wybija elektron z pasma walencyjnego do pasma przewodnictwa (tworząc parę elektron–dziura). Wewnętrzne pole elektryczne złącza $p$–$n$ rozdziela nośniki, generując napięcie i prąd elektryczny (ogniwa wielowarstwowe wykorzystują różne $E_g$ dla szerszej części widma Słońca)."
  },
  {
    "id": 157,
    "category": "5. Fizyka materii skondensowanej — wiązania, kryształy, półprzewodniki, nadprzewodniki",
    "text": "Kto i w którym roku odkrył zjawisko nadprzewodnictwa oraz na jakich dwóch kluczowych cechach ono polega?",
    "options": [
      {
        "text": "H. Kamerlingh Onnes (1911, w rtęci); spadek oporu DC do zera poniżej $T_c$ oraz efekt Meissnera.",
        "isCorrect": true
      },
      {
        "text": "W. Röntgen (1895, w miedzi); spadek oporu do małej stałej wartości oraz silny ferromagnetyzm.",
        "isCorrect": false
      },
      {
        "text": "J.J. Thomson (1897, w złocie); podwojenie oporu poniżej $T_c$ oraz wciąganie pola magnetycznego.",
        "isCorrect": false
      },
      {
        "text": "N. Bohr (1913, w krzemie); zanik przerwy energetycznej powyżej $300\\text{ K}$ oraz emisja fotonów.",
        "isCorrect": false
      }
    ],
    "explanation": "Nadprzewodnictwo odkrył Heike Kamerlingh Onnes w 1911 roku dla rtęci ($\\text{Hg}$) w temperaturze $4{,}2\\text{ K}$. Dwa fundamentalne wyznaczniki stanu nadprzewodzącego poniżej $T_c$ to: (1) dokładny spadek oporu elektrycznego dla prądu stałego do zera ($R = 0$) oraz (2) efekt Meissnera — wypychanie linii pola magnetycznego z wnętrza nadprzewodnika (idealny diamagnetyzm $\\chi = -1$)."
  },
  {
    "id": 158,
    "category": "5. Fizyka materii skondensowanej — wiązania, kryształy, półprzewodniki, nadprzewodniki",
    "text": "Na czym polega efekt Meissnera w nadprzewodnikach?",
    "options": [
      {
        "text": "Na całkowitym wypychaniu pola magnetycznego z wnętrza nadprzewodnika (idealny diamagnetyk $\\chi = -1$).",
        "isCorrect": true
      },
      {
        "text": "Na gwałtownym wzmacnianiu zewnętrznego pola magnetycznego wewnątrz próbki jak w ferromagnetyku.",
        "isCorrect": false
      },
      {
        "text": "Na emisji spójnego promieniowania mikrofalowego po ogrzaniu próbki powyżej temperatury krytycznej.",
        "isCorrect": false
      },
      {
        "text": "Na trwałej, nieodwracalnej utracie nadprzewodnictwa nawet po wyłączeniu zewnętrznego pola $B$.",
        "isCorrect": false
      }
    ],
    "explanation": "Efekt Meissnera odróżnia nadprzewodnik od hipotetycznego „idealnego przewodnika”: nadprzewodnik aktywnie wypycha linie pola magnetycznego ze swojego wnętrza ($B = 0$ w środku, podatność magnetyczna $\\chi = -1$). Ponadto zniszczenie nadprzewodnictwa przez silne pole ($B > B_c$) jest procesem odwracalnym — po usunięciu pola nadprzewodnictwo wraca."
  },
  {
    "id": 159,
    "category": "5. Fizyka materii skondensowanej — wiązania, kryształy, półprzewodniki, nadprzewodniki",
    "text": "Czym są pary Coopera w mikroskopowej teorii nadprzewodnictwa BCS?",
    "options": [
      {
        "text": "Związanymi parami elektronów o przeciwnych spinach i pędach (tworzącymi bozony) za pośrednictwem fononów.",
        "isCorrect": true
      },
      {
        "text": "Parami elektron–pozyton powstającymi z anihilacji fotonów termicznych wewnątrz metalu poniżej $T_c$.",
        "isCorrect": false
      },
      {
        "text": "Parami proton–neutron tworzącymi cząstki alfa, które swobodnie przewodzą prąd przez sieć metalu.",
        "isCorrect": false
      },
      {
        "text": "Parami dziur w półprzewodniku typu $p$, które poruszają się bez oporu wyłącznie w temperaturze pokojowej.",
        "isCorrect": false
      }
    ],
    "explanation": "W teorii BCS za nadprzewodnictwo odpowiada słabe efektywne przyciąganie między dwoma elektronami o przeciwnych spinach i pędach za pośrednictwem drgań sieci krystalicznej (fononów). Tworzą one tzw. pary Coopera — mające spin całkowity ($0$, czyli zachowujące się jak bozony), mogące skondensować w jeden wspólny makroskopowy stan kwantowy i płynąć bez rozpraszania."
  },
  {
    "id": 160,
    "category": "5. Fizyka materii skondensowanej — wiązania, kryształy, półprzewodniki, nadprzewodniki",
    "text": "Czym różnią się nadprzewodniki I rodzaju od nadprzewodników II rodzaju? (pytanie z kolokwium)",
    "options": [
      {
        "text": "I rodzaju mają jedno niskie $H_c$ i nagłe przejście; II rodzaju mają $H_{c1}, H_{c2}$ i stan mieszany z wirami.",
        "isCorrect": true
      },
      {
        "text": "I rodzaju mają dwa wysokie pola $H_{c1}, H_{c2}$; II rodzaju mają jedno niskie $H_c$ bez stanu mieszanego.",
        "isCorrect": false
      },
      {
        "text": "I rodzaju to wyłącznie ceramiki wysokotemperaturowe; II rodzaju to wyłącznie czyste metale (Hg, Pb).",
        "isCorrect": false
      },
      {
        "text": "I rodzaju przewodzą prąd bez efektu Meissnera; II rodzaju wykazują opór elektryczny większy od zera.",
        "isCorrect": false
      }
    ],
    "explanation": "To bardzo częste pytanie kolokwialne (2022 i 2023)! Nadprzewodniki I rodzaju (czyste metale: Hg, Pb, Sn, Al) mają jedno niskie pole krytyczne $H_c$ (dziesiątki mT) i po jego przekroczeniu nagle tracą nadprzewodnictwo. Nadprzewodniki II rodzaju (stopy NbTi, $\\text{Nb}_3\\text{Sn}$, ceramiki YBCO) mają dwa pola $H_{c1}$ i bardzo wysokie $H_{c2}$ (do $\\sim 100\\text{ T}$), a między nimi wchodzą w stan mieszany z wirami (worteksami) skwantowanego strumienia magnetycznego."
  },
  {
    "id": 161,
    "category": "5. Fizyka materii skondensowanej — wiązania, kryształy, półprzewodniki, nadprzewodniki",
    "text": "W jaki sposób pole magnetyczne wnika do nadprzewodnika II rodzaju w stanie mieszanym (dla $H_{c1} < H < H_{c2}$)?",
    "options": [
      {
        "text": "W postaci wirów (worteksów) o skwantowanym strumieniu, podczas gdy reszta przewodzi bez oporu.",
        "isCorrect": true
      },
      {
        "text": "Równomiernie w całej objętości próbki, powodując natychmiastowy powrót normalnego oporu DC.",
        "isCorrect": false
      },
      {
        "text": "Wyłącznie wzdłuż zewnętrznej warstwy izolacyjnej bez jakiegokolwiek kwantowania strumienia.",
        "isCorrect": false
      },
      {
        "text": "Pole magnetyczne nigdy nie wnika do nadprzewodnika II rodzaju nawet powyżej górnego pola $H_{c2}$.",
        "isCorrect": false
      }
    ],
    "explanation": "W przedziale $H_{c1} < H < H_{c2}$ nadprzewodnik II rodzaju znajduje się w stanie mieszanym (wiry Abrikosowa / worteksy): pole magnetyczne przenika w postaci cienkich, skwantowanych nici strumienia ($\\Phi_0 = h/(2e)$), wokół których materiał nadal pozostaje nadprzewodzący i przewodzi prąd bez oporu aż do osiągnięcia wysokiego $H_{c2}$."
  },
  {
    "id": 162,
    "category": "5. Fizyka materii skondensowanej — wiązania, kryształy, półprzewodniki, nadprzewodniki",
    "text": "Dlaczego do budowy silnych elektromagnesów (np. w skanerach MRI i akceleratorze LHC) wykorzystuje się nadprzewodniki II rodzaju, a nie I rodzaju?",
    "options": [
      {
        "text": "Ponieważ wytrzymują bardzo wysokie pole krytyczne $H_{c2}$ (dziesiątki tesli) bez utraty stanu.",
        "isCorrect": true
      },
      {
        "text": "Ponieważ pracują jako nadprzewodniki w temperaturze pokojowej bez jakiegokolwiek chłodzenia.",
        "isCorrect": false
      },
      {
        "text": "Ponieważ nadprzewodniki I rodzaju mają zbyt duży opór elektryczny dla prądu stałego poniżej $T_c$.",
        "isCorrect": false
      },
      {
        "text": "Ponieważ nadprzewodniki I rodzaju nie wykazują efektu Meissnera nawet w słabych polach $B$.",
        "isCorrect": false
      }
    ],
    "explanation": "Nadprzewodniki I rodzaju mają bardzo niskie pole krytyczne $H_c$ (rzędu kilkudziesięciu mT), więc silny prąd płynący w uzwojeniu magnesu sam wytwarza pole niszczące stan nadprzewodzący. Nadprzewodniki II rodzaju (np. NbTi, $\\text{Nb}_3\\text{Sn}$) mają ogromne $H_{c2}$ (rzędu $20$–$100\\text{ T}$), co pozwala generować potężne pola magnetyczne w MRI, LHC i kolejach Maglev."
  },
  {
    "id": 163,
    "category": "5. Fizyka materii skondensowanej — wiązania, kryształy, półprzewodniki, nadprzewodniki",
    "text": "Który znany nadprzewodnik wysokotemperaturowy (ceramika miedziowa) z wykładu EFW5 ma $T_c \\approx 93\\text{ K}$ (powyżej temperatury wrzenia ciekłego azotu $77\\text{ K}$)?",
    "options": [
      {
        "text": "Ceramika YBCO ($\\text{YBa}_2\\text{Cu}_3\\text{O}_{7-x}$), będąca nadprzewodnikiem II rodzaju.",
        "isCorrect": true
      },
      {
        "text": "Czysta rtęć ($\\text{Hg}$), będąca klasycznym nadprzewodnikiem I rodzaju.",
        "isCorrect": false
      },
      {
        "text": "Czysty ołów ($\\text{Pb}$), będący klasycznym nadprzewodnikiem I rodzaju.",
        "isCorrect": false
      },
      {
        "text": "Monokrystaliczny krzem ($\\text{Si}$), będący półprzewodnikiem samoistnym.",
        "isCorrect": false
      }
    ],
    "explanation": "Na slajdzie 25 wykładu EFW5 wymieniono nadprzewodniki wysokotemperaturowe: ceramikę YBCO ($T_c = 93\\text{ K}$, możliwą do chłodzenia tanim ciekłym azotem $77\\text{ K}$), BSCCO ($T_c = 33$–$104\\text{ K}$) oraz wodorek $\\text{LaH}_{10}$ ($T_c = 250\\text{ K}$, lecz wymagający gigantycznego ciśnienia $160\\text{ GPa}$!). Rtęć ma $T_c = 4{,}2\\text{ K}$."
  },
  {
    "id": 164,
    "category": "5. Fizyka materii skondensowanej — wiązania, kryształy, półprzewodniki, nadprzewodniki",
    "text": "Które z poniższych wielkości lub zjawisk ulegają gwałtownej zmianie w temperaturze krytycznej $T_c$ nadprzewodnika?",
    "options": [
      {
        "text": "Opór elektryczny dla prądu stałego spada skokowo dokładnie do zera.",
        "isCorrect": true
      },
      {
        "text": "Ciepło właściwe materiału wykazuje skokową zmianę (przejście fazowe).",
        "isCorrect": true
      },
      {
        "text": "Materiał wypycha pole magnetyczne ze swego wnętrza (efekt Meissnera).",
        "isCorrect": true
      },
      {
        "text": "Masa atomowa jąder metalu maleje o połowę w wyniku przemiany fazowej.",
        "isCorrect": false
      }
    ],
    "explanation": "Przejście do stanu nadprzewodzącego w temperaturze $T_c$ jest termodynamicznym przejściem fazowym: opór DC spada do zera, pojawia się idealny diamagnetyzm (efekt Meissnera), a ciepło właściwe wykazuje charakterystyczny skok (EFW5 s. 21). Masa jąder oczywiście pozostaje niezmieniona."
  },
  {
    "id": 165,
    "category": "5. Fizyka materii skondensowanej — wiązania, kryształy, półprzewodniki, nadprzewodniki",
    "text": "Jakie jest orientacyjne uporządkowanie oporu właściwego $\\rho$ (w $T = 293\\text{ K}$) dla metali, półprzewodników i izolatorów z tabeli wykładowej?",
    "options": [
      {
        "text": "Metale $\\sim 10^{-8}\\text{ }\\Omega\\cdot\\text{m}$, półprzewodniki $\\sim 10^{-5}$–$10^3\\text{ }\\Omega\\cdot\\text{m}$, izolatory $\\sim 10^8$–$10^{17}\\text{ }\\Omega\\cdot\\text{m}$.",
        "isCorrect": true
      },
      {
        "text": "Izolatory $\\sim 10^{-8}\\text{ }\\Omega\\cdot\\text{m}$, półprzewodniki $\\sim 10^{-2}$–$10^2\\text{ }\\Omega\\cdot\\text{m}$, metale $\\sim 10^8$–$10^{17}\\text{ }\\Omega\\cdot\\text{m}$.",
        "isCorrect": false
      },
      {
        "text": "Metale $\\sim 10^{8}\\text{ }\\Omega\\cdot\\text{m}$, półprzewodniki $\\sim 10^{4}$–$10^6\\text{ }\\Omega\\cdot\\text{m}$, izolatory $\\sim 10^{-8}$–$10^{-5}\\text{ }\\Omega\\cdot\\text{m}$.",
        "isCorrect": false
      },
      {
        "text": "Metale, półprzewodniki i izolatory mają zbliżony opór właściwy rzędu $1\\text{ }\\Omega\\cdot\\text{m}$ w $293\\text{ K}$.",
        "isCorrect": false
      }
    ],
    "explanation": "Tabela na slajdzie 12 wykładu EFW5 pokazuje olbrzymią, obejmującą ponad 25 rzędów wielkości rozpiętość oporu właściwego: metale (Ag, Cu, Au) ok. $10^{-8}\\text{ }\\Omega\\cdot\\text{m}$, półprzewodniki (Ge $0{,}46$, Si $640\\text{ }\\Omega\\cdot\\text{m}$) w środku, a izolatory (drewno, szkło, kwarc) $10^8$–$10^{17}\\text{ }\\Omega\\cdot\\text{m}$."
  },
  {
    "id": 166,
    "category": "5. Fizyka materii skondensowanej — wiązania, kryształy, półprzewodniki, nadprzewodniki",
    "text": "Dlaczego nadprzewodnik $\\text{LaH}_{10}$ o bardzo wysokiej temperaturze krytycznej $T_c = 250\\text{ K}$ ($-23^\\circ\\text{C}$) nie zastąpił dotychczas klasycznych kabli w sieci energetycznej?",
    "options": [
      {
        "text": "Wymaga ekstremalnego ciśnienia rzędu $160\\text{ GPa}$ ($1{,}6\\cdot 10^6\\text{ atm}$), by utrzymać nadprzewodnictwo.",
        "isCorrect": true
      },
      {
        "text": "Jest silnie promieniotwórczym izotopem o czasie połowicznego rozpadu poniżej jednej mikrosekundy.",
        "isCorrect": false
      },
      {
        "text": "Przewodzi prąd bez oporu wyłącznie dla prądu przemiennego, a dla prądu stałego jest izolatorem.",
        "isCorrect": false
      },
      {
        "text": "W temperaturze $250\\text{ K}$ traci całkowicie ładunek elektronów i zamienia się w ciężki gaz szlachetny.",
        "isCorrect": false
      }
    ],
    "explanation": "Slajd 25 wykładu EFW5 podaje spektakularny przykład wodorku lantanu $\\text{LaH}_{10}$, który staje się nadprzewodnikiem w $-23^\\circ\\text{C}$ ($250\\text{ K}$), ale wyłącznie pod gigantycznym ciśnieniem $160\\text{ GPa}$ (ponad półtora miliona atmosfer!), co obecnie wyklucza praktyczne zastosowania na masową skalę."
  },
  {
    "id": 167,
    "category": "6. Elementy fizyki jądrowej — budowa jądra, rozpady, reaktory",
    "text": "Które definicje izotopów, izotonów i izobarów w fizyce jądrowej są poprawne?",
    "options": [
      {
        "text": "Izotopy mają tę samą liczbę protonów $Z$, izotony neutronów $N$, a izobary masową $A$.",
        "isCorrect": true
      },
      {
        "text": "Izotopy mają tę samą liczbę masową $A$, izotony protonów $Z$, a izobary neutronów $N$.",
        "isCorrect": false
      },
      {
        "text": "Izotopy mają tę samą liczbę neutronów $N$, izotony masową $A$, a izobary protonów $Z$.",
        "isCorrect": false
      },
      {
        "text": "Izotopy, izotony oraz izobary mają zawsze tę samą liczbę $Z$ i różnią się tylko spinem.",
        "isCorrect": false
      }
    ],
    "explanation": "Dla nuklidu $^A_Z X$ mamy: $Z$ — liczba atomowa (protonów), $N = A - Z$ — liczba neutronów, $A = Z + N$ — liczba masowa (nukleonów). Izotopy mają to samo $Z$ (ten sam pierwiastek, np. $^{12}_6\\text{C}$ i $^{14}_6\\text{C}$), izotony mają to samo $N$, a izobary mają tę samą liczbę masową $A$ (np. $^{14}_6\\text{C}$ i $^{14}_7\\text{N}$)."
  },
  {
    "id": 168,
    "category": "6. Elementy fizyki jądrowej — budowa jądra, rozpady, reaktory",
    "text": "Jak zależy promień jądra atomowego $R$ od liczby masowej $A$ oraz jak zmienia się gęstość materii jądrowej ze wzrostem $A$?",
    "options": [
      {
        "text": "$R = r_0 A^{1/3}$ ($r_0 \\approx 1{,}2\\text{ fm}$), więc gęstość materii jądrowej jest niemal stała.",
        "isCorrect": true
      },
      {
        "text": "$R = r_0 A$ ($r_0 \\approx 1{,}2\\text{ fm}$), więc gęstość materii jądrowej szybko maleje ze wzrostem $A$.",
        "isCorrect": false
      },
      {
        "text": "$R = r_0 A^2$ ($r_0 \\approx 1{,}2\\text{ fm}$), więc ciężkie jądra są lżejsze objętościowo od gazu.",
        "isCorrect": false
      },
      {
        "text": "$R = r_0 / A^{1/3}$ ($r_0 \\approx 1{,}2\\text{ fm}$), więc im większa liczba $A$, tym mniejszy promień.",
        "isCorrect": false
      }
    ],
    "explanation": "Promień jądra wynosi $R = r_0 A^{1/3}$ ($r_0 \\approx 1{,}2 \\times 10^{-15}\\text{ m} = 1{,}2\\text{ fm}$). Objętość jądra $V = \\frac{4}{3}\\pi R^3 = \\frac{4}{3}\\pi r_0^3 A$ jest więc wprost proporcjonalna do liczby nukleonów $A$, co oznacza, że gęstość materii jądrowej jest niemal stała (ok. $14$ rzędów wielkości większa od gęstości zwykłej materii!)."
  },
  {
    "id": 169,
    "category": "6. Elementy fizyki jądrowej — budowa jądra, rozpady, reaktory",
    "text": "Jeżeli jądro ma liczbę masową $A = 27$, to ile razy jego promień jest większy od stałej $r_0$ (promienia pojedynczego nukleonu)?",
    "options": [
      {
        "text": "Dokładnie $3$ razy, ponieważ promień wyraża się wzorem $R = r_0 \\sqrt[3]{27}$.",
        "isCorrect": true
      },
      {
        "text": "Dokładnie $27$ razy, ponieważ promień jądra rośnie liniowo z liczbą $A$.",
        "isCorrect": false
      },
      {
        "text": "Dokładnie $9$ razy, ponieważ promień jądra jest proporcjonalny do $A^{2/3}$.",
        "isCorrect": false
      },
      {
        "text": "Dokładnie $5{,}2$ razy, ponieważ promień jądra rośnie jak pierwiastek $\\sqrt{A}$.",
        "isCorrect": false
      }
    ],
    "explanation": "Ze wzoru na promień jądra $R = r_0 A^{1/3}$ podstawiamy $A = 27$: $\\sqrt[3]{27} = 3$, więc $R = 3 r_0 \\approx 3{,}6\\text{ fm}$. Podobnie np. dla $A = 8$ mamy $R = 2 r_0$, a dla $A = 64$ mamy $R = 4 r_0$."
  },
  {
    "id": 170,
    "category": "6. Elementy fizyki jądrowej — budowa jądra, rozpady, reaktory",
    "text": "Które jedno stwierdzenie dotyczące spinów i momentów magnetycznych elektronu, protonu i neutronu jest POPRAWNE? (pytanie z kolokwium)",
    "options": [
      {
        "text": "Spiny elektronu i neutronu są przeciwne do ich momentów magnetycznych, a u protonu są zgodne.",
        "isCorrect": true
      },
      {
        "text": "Elektron ma spin połówkowy ($1/2$), natomiast proton oraz neutron mają spiny całkowite ($1$).",
        "isCorrect": false
      },
      {
        "text": "Neutron nie posiada momentu magnetycznego, ponieważ jest cząstką elektrycznie obojętną.",
        "isCorrect": false
      },
      {
        "text": "Moment magnetyczny protonu jest ok. $1800\\times$ większy od momentu magnetycznego elektronu.",
        "isCorrect": false
      }
    ],
    "explanation": "To jedno z najczęściej powtarzających się pytań na kolokwiach z EFW (2022 i kolos2.pdf)! Wszystkie trzy cząstki mają spin $1/2$ (fermiony). Proton ($+e$) ma moment magnetyczny zgodny ze spinem ($+2{,}79\\,\\mu_N$), elektron ($-e$) przeciwny ($-1{,}001\\,\\mu_B$), a neutron mimo ładunku $0$ ma niezerowy moment magnetyczny przeciwny do spinu ($-1{,}91\\,\\mu_N$) wskutek wewnętrznej struktury kwarkowej. Ponieważ $\\mu_N = \\mu_B / 1836$, to moment magnetyczny ELEKTRONU jest wielokrotnie (~650–1000x) większy niż protonu!"
  },
  {
    "id": 171,
    "category": "6. Elementy fizyki jądrowej — budowa jądra, rozpady, reaktory",
    "text": "Dlaczego swobodny neutron (poza jądrem atomowym) jest cząstką niestabilną, a swobodny proton jest stabilny? (pytanie z kolokwium)",
    "options": [
      {
        "text": "Masa neutronu jest nieco większa od masy protonu, więc swobodny neutron ulega rozpadowi $\\beta^-$.",
        "isCorrect": true
      },
      {
        "text": "Masa protonu jest nieco większa od masy neutronu, więc swobodny proton ulega rozpadowi $\\beta^+$.",
        "isCorrect": false
      },
      {
        "text": "Neutron nie posiada spinu ani ładunku, dlatego nie podlega żadnym zasadom zachowania energii.",
        "isCorrect": false
      },
      {
        "text": "Proton podlega wyłącznie oddziaływaniu grawitacyjnemu, a neutron ulega zawsze rozpadowi $\\alpha$.",
        "isCorrect": false
      }
    ],
    "explanation": "To kolejne bezpośrednie pytanie z kolokwium (24.11.2022)! Energia spoczynkowa neutronu ($939{,}566\\text{ MeV}$) przewyższa energię spoczynkową protonu ($938{,}272\\text{ MeV}$) o ok. $1{,}29\\text{ MeV}$ — to więcej niż masa spoczynkowa elektronu ($0{,}511\\text{ MeV}$), więc swobodny neutron samorzutnie rozpada się w procesie $\\beta^-$: $n \\to p + e^- + \\bar{\\nu}_e$ (ze średnim czasem życia ok. $15\\text{ min}$)."
  },
  {
    "id": 172,
    "category": "6. Elementy fizyki jądrowej — budowa jądra, rozpady, reaktory",
    "text": "Dlaczego elektrycznie obojętny NEUTRON posiada mimo wszystko niezerowy moment magnetyczny ($-1{,}91\\,\\mu_N$)?",
    "options": [
      {
        "text": "Wynika to z wewnętrznej struktury i rozkładu naładowanych kwarków wewnątrz neutronu.",
        "isCorrect": true
      },
      {
        "text": "Wynika to z faktu, że neutron jest na stałe otoczony chmurą elektronów walencyjnych.",
        "isCorrect": false
      },
      {
        "text": "Wynika to z dodatniego ładunku $+e$, który neutron uzyskuje wewnątrz pola magnetycznego.",
        "isCorrect": false
      },
      {
        "text": "Wynika to wyłącznie z ruchu orbitalnego neutronu wokół jądra w powłoce elektronowej $1s$.",
        "isCorrect": false
      }
    ],
    "explanation": "Choć wypadkowy ładunek elektryczny neutronu wynosi zero, neutron nie jest cząstką punktową, lecz składa się z naładowanych elektrycznie kwarków ($u, d, d$). Ich niejednorodny wewnętrzny rozkład ładunku i spinu wytwarza niezerowy moment magnetyczny o zwrocie przeciwnym do spinu neutronu."
  },
  {
    "id": 173,
    "category": "6. Elementy fizyki jądrowej — budowa jądra, rozpady, reaktory",
    "text": "Jak ma się rząd wielkości momentu magnetycznego elektronu do momentu magnetycznego protonu i neutronu?",
    "options": [
      {
        "text": "Moment magnetyczny elektronu jest ok. $650$–$1000\\times$ większy od momentów nukleonów ($\\mu_N = \\mu_B/1836$).",
        "isCorrect": true
      },
      {
        "text": "Moment magnetyczny protonu jest ok. $1836\\times$ większy od momentu elektronu z powodu większej masy.",
        "isCorrect": false
      },
      {
        "text": "Momenty magnetyczne protonu, neutronu oraz elektronu mają dokładnie ten sam rząd wielkości.",
        "isCorrect": false
      },
      {
        "text": "Moment magnetyczny elektronu jest dokładnie równy zeru, a nukleonów wynosi ok. $1\\,\\mu_B$.",
        "isCorrect": false
      }
    ],
    "explanation": "Magneton Bohra wynosi $\\mu_B = \\frac{e\\hbar}{2m_e}$, a magneton jądrowy $\\mu_N = \\frac{e\\hbar}{2m_p}$. Ponieważ masa znajduje się w MIANOWNIKU, a proton jest ok. $1836\\times$ cięższy od elektronu, magneton jądrowy jest $1836\\times$ mniejszy od magnetonu Bohra — stąd moment magnetyczny elektronu jest o ok. trzy rzędy wielkości (~650–1000x) większy niż moment magnetyczny protonu i neutronu!"
  },
  {
    "id": 174,
    "category": "6. Elementy fizyki jądrowej — budowa jądra, rozpady, reaktory",
    "text": "Które cechy poprawnie charakteryzują ODDZIAŁYWANIE JĄDROWE SILNE utrzymujące nukleony w jądrze?",
    "options": [
      {
        "text": "Jest krótkozasięgowe ($\\sim 1$–$2\\text{ fm}$), najsilniejsze i niezależne od ładunku ($p$-$p$, $p$-$n$, $n$-$n$).",
        "isCorrect": true
      },
      {
        "text": "Ma nieskończony zasięg jak siła Coulomba i przyciąga wyłącznie cząstki o przeciwnym ładunku.",
        "isCorrect": false
      },
      {
        "text": "Działa tak samo silnie na elektrony, neutrina oraz protony na odległościach atomowych.",
        "isCorrect": false
      },
      {
        "text": "Jest znacznie słabsze od odpychania elektrostatycznego, ale działa na dystansie kilku metrów.",
        "isCorrect": false
      }
    ],
    "explanation": "Siły jądrowe to przejaw oddziaływania silnego (łączącego kwarki w nukleony). Są najsilniejsze ze wszystkich czterech oddziaływań podstawowych, mają bardzo krótki zasięg ($\\sim 1$–$2\\text{ fm}$, wykazują nasycenie) i są niezależne od ładunku elektrycznego (przyciągają jednakowo pary $p$–$p$, $n$–$n$ i $p$–$n$). Nie działają na elektrony ani neutrina!"
  },
  {
    "id": 175,
    "category": "6. Elementy fizyki jądrowej — budowa jądra, rozpady, reaktory",
    "text": "Czym jest energia wiązania jądra atomowego $\\Delta E$ i jak wiąże się z masą związanego jądra wobec sumy mas swobodnych nukleonów?",
    "options": [
      {
        "text": "To praca rozbicia jądra na nukleony; masa związanego jądra jest mniejsza od sumy mas nukleonów.",
        "isCorrect": true
      },
      {
        "text": "To energia kinetyczna elektronów $1s$; masa związanego jądra jest większa od sumy mas nukleonów.",
        "isCorrect": false
      },
      {
        "text": "To energia potrzebna do oderwania elektronu walencyjnego; masa jądra równa się dokładnie sumie mas.",
        "isCorrect": false
      },
      {
        "text": "To energia odrzutu jądra w rozpadzie gamma; dla jąder stabilnych przyjmuje zawsze wartość ujemną.",
        "isCorrect": false
      }
    ],
    "explanation": "Energia wiązania $\\Delta E = [Z m_p + (A-Z)m_n - m_{\\text{jądra}}]c^2 > 0$ (dla jąder stabilnych) to praca potrzebna na rozbicie jądra na pojedyncze, swobodne nukleony. Związane jądro ma mniejszą masę niż suma mas jego wolnych składników — różnica to tzw. deficyt (ubytek) masy $\\Delta m$ zamieniony na energię wiązania zgodnie z $E = mc^2$."
  },
  {
    "id": 176,
    "category": "6. Elementy fizyki jądrowej — budowa jądra, rozpady, reaktory",
    "text": "Dla jakiego obszaru liczb masowych krzywa energii wiązania w przeliczeniu na jeden nukleon osiąga MAKSIMUM (najtrwalsze jądra)?",
    "options": [
      {
        "text": "W okolicach żelaza $^{56}_{26}\\text{Fe}$ (energia wiązania wynosi ok. $8{,}8\\text{ MeV/nukleon}$).",
        "isCorrect": true
      },
      {
        "text": "Dla ciężkich jąder uranu $^{238}_{92}\\text{U}$ (energia wiązania wynosi ok. $200\\text{ MeV/nukleon}$).",
        "isCorrect": false
      },
      {
        "text": "Dla lekkich jąder deuteru $^2_1\\text{H}$ (energia wiązania wynosi ok. $13{,}6\\text{ eV/nukleon}$).",
        "isCorrect": false
      },
      {
        "text": "Energia wiązania na nukleon jest identyczna dla wszystkich pierwiastków.",
        "isCorrect": false
      }
    ],
    "explanation": "Krzywa energii wiązania na nukleon szybko rośnie dla małych $A$ (z wyraźnym ostrym pikiem dla wyjątkowo stabilnego $^4\\text{He}$), osiąga maksimum ok. $8{,}8\\text{ MeV/nukleon}$ w okolicach żelaza $^{56}\\text{Fe}$, a następnie powoli spada dla ciężkich jąder. Dlatego energia wyzwala się zarówno przy fuzji lekkich jąder, jak i przy rozszczepieniu ciężkich!"
  },
  {
    "id": 177,
    "category": "6. Elementy fizyki jądrowej — budowa jądra, rozpady, reaktory",
    "text": "Dlaczego dla stabilnych jąder o dużej liczbie masowej ($A > 40$) preferowana jest przewaga neutronów nad protonami ($N > Z$), a powyżej $Z = 83$ (bizmut) brak stabilnych nuklidów?",
    "options": [
      {
        "text": "Z powodu rosnącego dalekozasięgowego odpychania kulombowskiego między dodatnimi protonami.",
        "isCorrect": true
      },
      {
        "text": "Z powodu malejącej masy pojedynczego neutronu wewnątrz coraz cięższych jąder atomowych.",
        "isCorrect": false
      },
      {
        "text": "Z powodu rosnącego przyciągania grawitacyjnego elektronów powłoki $K$ do protonów jądra.",
        "isCorrect": false
      },
      {
        "text": "Z powodu całkowitego zaniku oddziaływania słabego w jądrach zawierających ponad $40$ nukleonów.",
        "isCorrect": false
      }
    ],
    "explanation": "Siły jądrowe silne są krótkozasięgowe (działają tylko między najbliższymi sąsiadami), natomiast odpychanie kulombowskie protonów ma nieskończony zasięg (każdy proton odpycha wszystkie pozostałe, energia rośnie jak $Z^2/R$). Aby ustabilizować jądro dla $A > 40$, potrzeba coraz więcej neutronów ($N > Z$), a powyżej $Z = 83$ ($^{209}\\text{Bi}$) odpychanie kulombowskie uniemożliwia pełną stabilność."
  },
  {
    "id": 178,
    "category": "6. Elementy fizyki jądrowej — budowa jądra, rozpady, reaktory",
    "text": "Jaką rolę odgrywa zakaz Pauliego w parzystości liczb protonów $Z$ i neutronów $N$ w stabilnych nuklidach?",
    "options": [
      {
        "text": "Większość trwałych jąder jest parzysto-parzystych, a nieparzysto-nieparzystych są tylko 4.",
        "isCorrect": true
      },
      {
        "text": "Większość trwałych jąder jest nieparzysto-nieparzystych, a parzysto-parzyste rozpadają się szybko.",
        "isCorrect": false
      },
      {
        "text": "Wszystkie stabilne jądra muszą mieć zawsze nieparzystą liczbę masową $A$ oraz parzystą liczbę $Z$.",
        "isCorrect": false
      },
      {
        "text": "Zakaz Pauliego nie dotyczy protonów ani neutronów, więc parzystość nie wpływa na stabilność.",
        "isCorrect": false
      }
    ],
    "explanation": "Protony i neutrony to fermiony podlegające zakazowi Pauliego, więc parowanie nukleonów o przeciwnych spinach na tym samym poziomie jądrowym jest silnie korzystne energetycznie (człon parzystości w równaniu von Weizsäckera). Dlatego większość trwałych nuklidów jest parzysto-parzysta, a istnieją zaledwie 4 stabilne nuklidy nieparzysto-nieparzyste: $^2_1\\text{H}, ^6_3\\text{Li}, ^{10}_5\\text{B}, ^{14}_7\\text{N}$."
  },
  {
    "id": 179,
    "category": "6. Elementy fizyki jądrowej — budowa jądra, rozpady, reaktory",
    "text": "W jaki sposób we Wszechświecie powstają pierwiastki cięższe od żelaza ($^{56}\\text{Fe}$), skoro synteza powyżej żelaza nie uwalnia już energii?",
    "options": [
      {
        "text": "Przez wychwyt neutronów w gwiazdach lub supernowych (procesy $r$, $s$) oraz rozpad $\\beta^-$.",
        "isCorrect": true
      },
      {
        "text": "Przez samorzutne rozszczepienie jąder wodoru i helu w chłodnych obłokach pyłu kosmicznego.",
        "isCorrect": false
      },
      {
        "text": "Przez wielokrotny rozpad $\\alpha$ jąder węgla i tlenu w ziemskich reaktorach jądrowych mocy.",
        "isCorrect": false
      },
      {
        "text": "Przez bezpośrednią kreację ciężkich jąder uranu z fotonów kosmicznego promieniowania tła.",
        "isCorrect": false
      }
    ],
    "explanation": "Jak podano na slajdzie 6 wykładu EFW6, pierwiastki cięższe od żelaza powstają przez wychwyt neutronów (które nie pokonują bariery kulombowskiej!) w żelaznym jądrze gwiazd (powolny proces $s$) lub podczas wybuchu supernowej (szybki proces $r$), po którym bogate w neutrony jądra ulegają rozpadom $\\beta^-$, zwiększając $Z$."
  },
  {
    "id": 180,
    "category": "6. Elementy fizyki jądrowej — budowa jądra, rozpady, reaktory",
    "text": "Jakie jest znaczenie fizyczne stałej rozpadu $\\lambda$ oraz czym jest aktywność promieniotwórcza $R$ (w bekerelach, $\\text{Bq}$)?",
    "options": [
      {
        "text": "$\\lambda$ to prawdopodobieństwo rozpadu jednego jądra w $1\\text{ s}$, a $R = \\lambda N$ to liczba rozpadów na sekundę.",
        "isCorrect": true
      },
      {
        "text": "$\\lambda$ to długość fali emitowanego fotonu gamma, a $R = N/\\lambda$ to czas życia całej próbki w sekundach.",
        "isCorrect": false
      },
      {
        "text": "$\\lambda$ to czas połowicznego rozpadu izotopu, a $1\\text{ Bq}$ oznacza dokładnie $10^6$ rozpadów na godzinę.",
        "isCorrect": false
      },
      {
        "text": "$\\lambda$ to masa jądra w jednostkach atomowych, a $R$ oznacza energię wiązania przypadającą na nukleon.",
        "isCorrect": false
      }
    ],
    "explanation": "W prawie rozpadu promieniotwórczego $N(t) = N_0 e^{-\\lambda t}$ stała rozpadu $\\lambda$ [$\\text{s}^{-1}$] oznacza prawdopodobieństwo rozpadu pojedynczego jądra w czasie $1\\text{ s}$ (nie mylić z długością fali!). Aktywność $R(t) = |dN/dt| = \\lambda N(t)$ to liczba rozpadów w jednostce czasu; jej jednostką jest bekerel ($1\\text{ Bq} = 1\\text{ rozpad/s}$)."
  },
  {
    "id": 181,
    "category": "6. Elementy fizyki jądrowej — budowa jądra, rozpady, reaktory",
    "text": "Jaki jest związek między czasem połowicznego rozpadu $t_{1/2}$ izotopu a stałą rozpadu $\\lambda$?",
    "options": [
      {
        "text": "$t_{1/2} = \\frac{\\ln 2}{\\lambda} \\approx \\frac{0{,}693}{\\lambda}$ (im większe $\\lambda$, tym krótszy $t_{1/2}$).",
        "isCorrect": true
      },
      {
        "text": "$t_{1/2} = \\lambda \\cdot \\ln 2 \\approx 0{,}693\\,\\lambda$ (im większe $\\lambda$, tym dłuższy $t_{1/2}$).",
        "isCorrect": false
      },
      {
        "text": "$t_{1/2} = \\frac{1}{2\\lambda} = \\frac{0{,}5}{\\lambda}$ (połowa odwrotności stałej rozpadu).",
        "isCorrect": false
      },
      {
        "text": "$t_{1/2} = \\frac{e^2}{\\lambda}$ (zależność wykładnicza od stałej Eulera).",
        "isCorrect": false
      }
    ],
    "explanation": "Z definicji po czasie $t_{1/2}$ pozostaje połowa początkowej liczby jąder: $N(t_{1/2}) = \\frac{1}{2}N_0 = N_0 e^{-\\lambda t_{1/2}}$. Po zlogarytmowaniu stronami otrzymujemy $\\lambda t_{1/2} = \\ln 2 \\approx 0{,}693$, czyli $t_{1/2} = \\frac{\\ln 2}{\\lambda}$."
  },
  {
    "id": 182,
    "category": "6. Elementy fizyki jądrowej — budowa jądra, rozpady, reaktory",
    "text": "Izotop promieniotwórczy ma czas połowicznego rozpadu $t_{1/2} = 6\\text{ godzin}$. Jaka część początkowej liczby jąder POZOSTANIE nierozpadnięta po czasie $t = 18\\text{ godzin}$?",
    "options": [
      {
        "text": "Dokładnie $1/8$ ($12{,}5\\%$) początkowej liczby jąder.",
        "isCorrect": true
      },
      {
        "text": "Dokładnie $1/6$ ($16{,}7\\%$) początkowej liczby jąder.",
        "isCorrect": false
      },
      {
        "text": "Dokładnie $1/4$ ($25{,}0\\%$) początkowej liczby jąder.",
        "isCorrect": false
      },
      {
        "text": "Dokładnie $7/8$ ($87{,}5\\%$) początkowej liczby jąder.",
        "isCorrect": false
      }
    ],
    "explanation": "Czas $t = 18\\text{ h}$ to dokładnie $k = 18 / 6 = 3$ okresy połowicznego rozpadu. Po każdym okresie liczba jąder maleje o połowę, więc po $3$ okresach pozostaje $N(t) = N_0 \\cdot (1/2)^3 = \\frac{1}{8} N_0 = 12{,}5\\% N_0$ (natomiast rozpadowi uległo $7/8 = 87{,}5\\%$ jąder — uważaj w pytaniach, czy pytają o to, co ZOSTAŁO, czy co się ROZPADŁO!)."
  },
  {
    "id": 183,
    "category": "6. Elementy fizyki jądrowej — budowa jądra, rozpady, reaktory",
    "text": "Po czasie $t = 20\\text{ minut}$ rozpadowi uległo $75\\%$ początkowej liczby jąder pewnego izotopu. Ile wynosi jego czas połowicznego rozpadu $t_{1/2}$?",
    "options": [
      {
        "text": "$t_{1/2} = 10\\text{ minut}$ (zostało $25\\% = 1/4$, czyli minęły $2$ okresy).",
        "isCorrect": true
      },
      {
        "text": "$t_{1/2} = 15\\text{ minut}$ (proporcjonalnie $75\\%$ czasu z dwudziestu minut).",
        "isCorrect": false
      },
      {
        "text": "$t_{1/2} = 5\\text{ minut}$ (ponieważ minęły cztery okresy połowicznego rozpadu).",
        "isCorrect": false
      },
      {
        "text": "$t_{1/2} = 40\\text{ minut}$ (dwukrotność czasu podanego w treści zadania).",
        "isCorrect": false
      }
    ],
    "explanation": "Skoro rozpadowi uległo $75\\%$ jąder, to pozostało nierozpadniętych $100\\% - 75\\% = 25\\% = \\frac{1}{4} = (\\frac{1}{2})^2$. Oznacza to, że upłynęły dokładnie $2$ okresy połowicznego rozpadu: $2 \\cdot t_{1/2} = 20\\text{ min} \\Rightarrow t_{1/2} = 10\\text{ min}$."
  },
  {
    "id": 184,
    "category": "6. Elementy fizyki jądrowej — budowa jądra, rozpady, reaktory",
    "text": "Z jakich cząstek składa się promieniowanie $\\alpha$, $\\beta$ oraz $\\gamma$ powstające w rozpadach promieniotwórczych? (pytanie z kolokwium)",
    "options": [
      {
        "text": "$\\alpha$ — jądra $^4_2\\text{He}$, $\\beta$ — elektrony i pozytony, $\\gamma$ — wysokoenergetyczne fotony.",
        "isCorrect": true
      },
      {
        "text": "$\\alpha$ — elektrony i pozytony, $\\beta$ — jądra $^4_2\\text{He}$, $\\gamma$ — wysokoenergetyczne fotony.",
        "isCorrect": false
      },
      {
        "text": "$\\alpha$ — wysokoenergetyczne fotony, $\\beta$ — elektrony i pozytony, $\\gamma$ — jądra $^4_2\\text{He}$.",
        "isCorrect": false
      },
      {
        "text": "$\\alpha$ — jądra $^4_2\\text{He}$, $\\beta$ — wysokoenergetyczne fotony, $\\gamma$ — elektrony i pozytony.",
        "isCorrect": false
      }
    ],
    "explanation": "To bezpośrednie pytanie z kolokwium (24.11.2022)! Promieniowanie $\\alpha$ to strumień jąder helu-4 ($^4_2\\text{He}$: 2 protony i 2 neutrony), promieniowanie $\\beta$ to elektrony ($\\beta^-$) lub pozytony ($\\beta^+$), a promieniowanie $\\gamma$ to wysokoenergetyczne fotony (fale EM o $E > 100\\text{ keV}$) emitowane przez wzbudzone jądro."
  },
  {
    "id": 185,
    "category": "6. Elementy fizyki jądrowej — budowa jądra, rozpady, reaktory",
    "text": "Jak przedstawia się zdolność przenikania przez materię promieniowania $\\alpha$, $\\beta$ i $\\gamma$ (od najmniej do najbardziej przenikliwego)?",
    "options": [
      {
        "text": "$\\alpha$ zatrzymuje kartka papieru, $\\beta$ cienka płytka Al lub pleksi, a $\\gamma$ wymaga grubego ołowiu.",
        "isCorrect": true
      },
      {
        "text": "$\\gamma$ zatrzymuje kartka papieru, $\\beta$ cienka płytka Al lub pleksi, a $\\alpha$ wymaga grubego ołowiu.",
        "isCorrect": false
      },
      {
        "text": "$\\beta$ zatrzymuje kartka papieru, $\\alpha$ cienka płytka Al lub pleksi, a $\\gamma$ przenika bez strat przez ołów.",
        "isCorrect": false
      },
      {
        "text": "$\\alpha$ przenika przez płytę aluminiową i ołowianą, podczas gdy $\\gamma$ zatrzymuje już kilka cm powietrza.",
        "isCorrect": false
      }
    ],
    "explanation": "Cząstki $\\alpha$ są ciężkie i podwójnie naładowane ($+2e$), więc silnie jonizują materię i błyskawicznie tracą energię — zatrzymuje je już kartka papieru lub kilka cm powietrza. Cząstki $\\beta$ (elektrony/pozytony) zatrzymuje cienka warstwa pleksi lub aluminium, natomiast najbardziej przenikliwe fotony $\\gamma$ wymagają grubej osłony z ołowiu lub betonu."
  },
  {
    "id": 186,
    "category": "6. Elementy fizyki jądrowej — budowa jądra, rozpady, reaktory",
    "text": "Proszę wybrać JEDNĄ prawdziwą informację o rozpadzie $\\alpha$: (pytanie z kolokwium)",
    "options": [
      {
        "text": "Zachodzi dla ciężkich jąder ($A > 150$, m.in. uranu) przez tunelowanie przez barierę.",
        "isCorrect": true
      },
      {
        "text": "Emitowane cząstki $\\alpha$ z łatwością przenikają przez grubą płytę aluminiową i ołowianą.",
        "isCorrect": false
      },
      {
        "text": "Nie zachodzi w żadnym izotopie uranu, lecz wyłącznie w lekkich jądrach węgla i azotu.",
        "isCorrect": false
      },
      {
        "text": "W odróżnieniu od rozpadów $\\beta$ nie wymaga pokonania przez cząstkę bariery potencjału.",
        "isCorrect": false
      }
    ],
    "explanation": "To bezpośrednie pytanie z kolokwium (24.11.2022)! Rozpad $\\alpha$ zachodzi dla ciężkich jąder (np. uran, rad, polon), obniżając energię odpychania kulombowskiego. Cząstka $\\alpha$ ma energię mniejszą niż wysokość bariery jądrowej ($V \\approx 20\\text{ MeV}$), więc wydostaje się z jądra wyłącznie dzięki kwantowemu tunelowaniu. Zatrzymuje ją już kartka papieru."
  },
  {
    "id": 187,
    "category": "6. Elementy fizyki jądrowej — budowa jądra, rozpady, reaktory",
    "text": "Jak zmieniają się liczba masowa $A$ i liczba atomowa $Z$ jądra w wyniku pojedynczego rozpadu $\\alpha$ (np. dla $^{238}_{92}\\text{U}$)?",
    "options": [
      {
        "text": "$A$ maleje o $4$, a $Z$ maleje o $2$ (z $^{238}_{92}\\text{U}$ powstaje jądro $^{234}_{90}\\text{Th}$).",
        "isCorrect": true
      },
      {
        "text": "$A$ maleje o $2$, a $Z$ maleje o $4$ (z $^{238}_{92}\\text{U}$ powstaje jądro $^{236}_{88}\\text{Ra}$).",
        "isCorrect": false
      },
      {
        "text": "$A$ pozostaje stałe, a $Z$ rośnie o $1$ (z $^{238}_{92}\\text{U}$ powstaje jądro $^{238}_{93}\\text{Np}$).",
        "isCorrect": false
      },
      {
        "text": "$A$ oraz $Z$ pozostają stałe, a jądro traci tylko energię wzbudzenia.",
        "isCorrect": false
      }
    ],
    "explanation": "W rozpadzie $\\alpha$ jądro emituje cząstkę $^4_2\\text{He}$ (2 protony i 2 neutrony), więc zgodnie z zasadą zachowania liczby nukleonów i ładunku (reguła przesunięć Soddy'ego-Fajansa): $^A_Z X \\to {}^{A-4}_{Z-2}Y + {}^4_2\\text{He}$. Dla $^{238}_{92}\\text{U}$ otrzymujemy $^{234}_{90}\\text{Th}$."
  },
  {
    "id": 188,
    "category": "6. Elementy fizyki jądrowej — budowa jądra, rozpady, reaktory",
    "text": "Które oddziaływanie podstawowe odpowiada za rozpad $\\beta$ oraz jak zmieniają się w nim liczby $A$ i $Z$?",
    "options": [
      {
        "text": "Oddziaływanie słabe; $A$ nie ulega zmianie, $Z$ rośnie o $1$ w $\\beta^-$ i maleje o $1$ w $\\beta^+$ oraz EC.",
        "isCorrect": true
      },
      {
        "text": "Oddziaływanie silne; $A$ maleje o $4$, a $Z$ maleje o $2$ w obu odmianach rozpadu $\\beta^-$ oraz $\\beta^+$.",
        "isCorrect": false
      },
      {
        "text": "Oddziaływanie elektromagnetyczne; zarówno liczba masowa $A$, jak i atomowa $Z$ pozostają bez zmian.",
        "isCorrect": false
      },
      {
        "text": "Oddziaływanie słabe; $Z$ pozostaje bez zmian, a liczba masowa $A$ rośnie o $1$ przy emisji elektronu.",
        "isCorrect": false
      }
    ],
    "explanation": "Rozpad $\\beta$ (w trzech odmianach: $\\beta^-$, $\\beta^+$ i wychwyt elektronu EC) jest przejawem oddziaływania słabego. W jego wyniku jeden nukleon zamienia się w drugi ($n \\leftrightarrow p$), więc łączna liczba nukleonów $A$ się nie zmienia, natomiast liczba protonów $Z$ rośnie o $1$ w $\\beta^-$ (dla jąder z nadmiarem neutronów) lub maleje o $1$ w $\\beta^+$ i EC (dla jąder z nadmiarem protonów)."
  },
  {
    "id": 189,
    "category": "6. Elementy fizyki jądrowej — budowa jądra, rozpady, reaktory",
    "text": "Które równania poprawnie opisują przemiany nukleonów w trzech odmianach rozpadu $\\beta$ ($\\beta^-$, $\\beta^+$ oraz wychwyt elektronu)?",
    "options": [
      {
        "text": "$\\beta^-$: $n \\to p + e^- + \\bar{\\nu}_e$ (w jądrach z nadmiarem neutronów).",
        "isCorrect": true
      },
      {
        "text": "$\\beta^+$: $p \\to n + e^+ + \\nu_e$ (w jądrach z nadmiarem protonów).",
        "isCorrect": true
      },
      {
        "text": "Wychwyt EC: $p + e^- \\to n + \\nu_e$ (z powłoki $K$ lub $L$).",
        "isCorrect": true
      },
      {
        "text": "$\\beta^-$: $p \\to n + e^- + \\nu_e$ (zmniejsza liczbę protonów $Z$).",
        "isCorrect": false
      }
    ],
    "explanation": "Wszystkie trzy pierwsze przemiany są poprawne i zachowują ładunek elektryczny oraz liczbę leptonową! Czwarte równanie łamie zasadę zachowania ładunku ($+1 \\neq 0 + (-1)$). Wychwyt elektronu (EC) jest możliwy, ponieważ elektrony wewnętrznych powłok ($K, L$, zwłaszcza stany $s$) mają niezerową gęstość prawdopodobieństwa w jądrze."
  },
  {
    "id": 190,
    "category": "6. Elementy fizyki jądrowej — budowa jądra, rozpady, reaktory",
    "text": "Która (dokładnie jedna) z poniższych informacji na temat NEUTRIN jest prawdziwa? (pytanie z kolokwium)",
    "options": [
      {
        "text": "Powstają w rozpadach $\\beta$ i bardzo słabo oddziałują z materią (nie działa na nie siła silna).",
        "isCorrect": true
      },
      {
        "text": "Wchodzą w skład wszystkich jąder atomowych obok protonów i neutronów jako trzeci nukleon.",
        "isCorrect": false
      },
      {
        "text": "Nie niosą ze sobą pędu ani energii, a ponadto nigdy nie udało się ich zaobserwować na Ziemi.",
        "isCorrect": false
      },
      {
        "text": "Ekspozycja człowieka na neutrina słoneczne wywołuje natychmiastowe uszkodzenia i nowotwory.",
        "isCorrect": false
      }
    ],
    "explanation": "To bezpośrednie pytanie z kolokwium (24.11.2022)! Neutrina powstają w rozpadach $\\beta$ (oraz fuzji w Słońcu), są elektrycznie obojętne, nie podlegają oddziaływaniu silnemu i ekstremalnie słabo oddziałują z materią (dlatego są całkowicie nieszkodliwe, a ich detekcja wymaga gigantycznych detektorów, jak japoński Super-Kamiokande). Niosą energię, pęd i spin!"
  },
  {
    "id": 191,
    "category": "6. Elementy fizyki jądrowej — budowa jądra, rozpady, reaktory",
    "text": "Dlaczego Wolfgang Pauli w 1930 roku postulował istnienie neutrina w rozpadzie $\\beta$?",
    "options": [
      {
        "text": "Aby wyjaśnić ciągłe widmo energii elektronów i zachować energię, pęd oraz moment pędu (spin).",
        "isCorrect": true
      },
      {
        "text": "Aby wyjaśnić dyskretne linie w widmie emisyjnym atomu wodoru oraz rozszczepienie Zeemana.",
        "isCorrect": false
      },
      {
        "text": "Aby zrównoważyć dodatni ładunek elektryczny protonów w ciężkich jądrach powyżej $Z = 83$.",
        "isCorrect": false
      },
      {
        "text": "Aby wytłumaczyć kwantowe tunelowanie cząstek alfa przez dwudziestomegaelektronowoltową barierę.",
        "isCorrect": false
      }
    ],
    "explanation": "Gdyby w rozpadzie $\\beta^-$ powstawały tylko dwie cząstki (jądro potomne i elektron), elektron miałby zawsze jedną, ściśle określoną energię, a ponadto nie zgadzałby się całkowity spin ($1/2 \\neq 1/2 + 1/2$). Ponieważ widmo energii elektronów $\\beta$ jest ciągłe, Pauli postulował trzecią, neutralną cząstkę o spinie $1/2$ (neutrino), unoszącą brakującą część energii, pędu i momentu pędu."
  },
  {
    "id": 192,
    "category": "6. Elementy fizyki jądrowej — budowa jądra, rozpady, reaktory",
    "text": "Na czym polega rozpad (emisja) $\\gamma$ i czym jest izomer jądrowy (np. używany w medycynie $^{99m}\\text{Tc}$)?",
    "options": [
      {
        "text": "Wzbudzone jądro emituje foton bez zmiany $A$ i $Z$; izomer to długożyciowy stan wzbudzony jądra.",
        "isCorrect": true
      },
      {
        "text": "Jądro emituje pozyton ze zmianą $Z$ o $1$; izomer to jądro z identyczną liczbą masową $A$ i różnym $Z$.",
        "isCorrect": false
      },
      {
        "text": "Jądro rozpada się na dwa równe fragmenty; izomer to atom z identycznym $Z$ i różną liczbą elektronów.",
        "isCorrect": false
      },
      {
        "text": "Wzbudzone jądro emituje cząstkę $^4\\text{He}$ bez zmiany $A$; izomer to pierwiastek z grupy gazów szlachetnych.",
        "isCorrect": false
      }
    ],
    "explanation": "Jądro (często tuż po rozpadzie $\\alpha$ lub $\\beta$) może znaleźć się w kwantowym stanie wzbudzonym i pozbywa się nadmiaru energii, emitując wysokoenergetyczny foton $\\gamma$ ($^A_Z X^* \\to {}^A_Z X + \\gamma$, bez zmiany $A$ i $Z$). Długożyciowe (metastabilne) stany wzbudzone jąder nazywamy izomerami jądrowymi — np. $^{99m}\\text{Tc}$ ($t_{1/2} = 6\\text{ h}$, fotony $140\\text{ keV}$) jest powszechnym znacznikiem w medycynie nuklearnej (scyntygrafii)."
  },
  {
    "id": 193,
    "category": "6. Elementy fizyki jądrowej — budowa jądra, rozpady, reaktory",
    "text": "Które pojęcia poprawnie opisują wymienione na wykładzie typy reakcji jądrowych wywołanych bombardowaniem jąder?",
    "options": [
      {
        "text": "Transmutacja zmienia pierwiastek, fotodezintegracja to rozpad po fotonie $\\gamma$, a wychwyt radiacyjny pochłania $n$/$p$.",
        "isCorrect": true
      },
      {
        "text": "Transmutacja dotyczy wyłącznie elektronów, fotodezintegracja to fuzja wodoru, a wychwyt radiacyjny emituje $\\alpha$.",
        "isCorrect": false
      },
      {
        "text": "Transmutacja to reakcja chemiczna soli, fotodezintegracja to efekt Zeemana, a wychwyt to zjawisko fotoelektryczne.",
        "isCorrect": false
      },
      {
        "text": "Wszystkie trzy reakcje zachodzą wyłącznie spontanicznie w temperaturze pokojowej bez udziału pocisków.",
        "isCorrect": false
      }
    ],
    "explanation": "Na slajdzie 14 wykładu EFW6 omówiono reakcje jądrowe: transmutację (zamianę jednego pierwiastka w inny pod wpływem pocisku), fotodezintegrację (rozpad jądra wzbudzonego fotonem $\\gamma$) oraz wychwyt radiacyjny (pochłonięcie neutronu lub protonu z emisją $\\gamma$). Po zderzeniu powstaje pośrednie jądro złożone (dające rezonansowe piki w funkcji aktywacji)."
  },
  {
    "id": 194,
    "category": "6. Elementy fizyki jądrowej — budowa jądra, rozpady, reaktory",
    "text": "Dlaczego NEUTRONY TERMICZNE (powolne, o energii rzędu $0{,}025\\text{ eV}$) znacznie skuteczniej wywołują rozszczepienie jąder $^{235}\\text{U}$ niż neutrony prędkie ($\\sim 2\\text{ MeV}$)?",
    "options": [
      {
        "text": "Wolniejszy neutron dłużej przebywa blisko jądra, co zwiększa prawdopodobieństwo wychwytu.",
        "isCorrect": true
      },
      {
        "text": "Wolniejszy neutron ma dodatni ładunek elektryczny i przyciąga się kulombowsko z uranem.",
        "isCorrect": false
      },
      {
        "text": "Wolniejszy neutron niesie znacznie większą energię kinetyczną do rozbicia jądra uranu.",
        "isCorrect": false
      },
      {
        "text": "Neutrony prędkie nie podlegają w ogóle oddziaływaniu silnemu z nukleonami w jądrze.",
        "isCorrect": false
      }
    ],
    "explanation": "Neutrony są elektrycznie obojętne, więc nie muszą pokonywać bariery kulombowskiej — mogą zbliżyć się do jądra nawet przy bardzo małej energii! Neutrony termiczne (w równowadze termicznej z otoczeniem) poruszają się wolno, więc spędzają znacznie więcej czasu w pobliżu jądra $^{235}\\text{U}$ (mają też dłuższą falę de Broglie'a), co wielokrotnie zwiększa przekrój czynny na ich wychwyt i wywołanie rozszczepienia."
  },
  {
    "id": 195,
    "category": "6. Elementy fizyki jądrowej — budowa jądra, rozpady, reaktory",
    "text": "Co powstaje w pojedynczym rozszczepieniu jądra $^{235}_{92}\\text{U}$ po pochłonięciu neutronu termicznego oraz czym jest masa krytyczna?",
    "options": [
      {
        "text": "Dwa nierówne lżejsze jądra, 2–3 szybkie neutrony i ok. $200\\text{ MeV}$; masa krytyczna podtrzymuje reakcję łańcuchową.",
        "isCorrect": true
      },
      {
        "text": "Dwa identyczne jądra helu, jeden pozyton i ok. $13{,}6\\text{ eV}$; masa krytyczna zatrzymuje reakcję łańcuchową.",
        "isCorrect": false
      },
      {
        "text": "Jeden cięższy izotop plutonu bez emisji neutronów; masa krytyczna to maksymalna dopuszczalna masa chłodziwa.",
        "isCorrect": false
      },
      {
        "text": "Wyłącznie promieniowanie gamma bez fragmentów jądrowych; masa krytyczna to masa pojedynczego pręta kadmu.",
        "isCorrect": false
      }
    ],
    "explanation": "Rozszczepienie jądra $^{235}\\text{U}$ daje dwa nierówne, bogate w neutrony fragmenty rozszczepienia, $2$–$3$ swobodne prędkie neutrony oraz dużą porcję energii ($\\sim 200\\text{ MeV}$). Aby uwolnione neutrony wywoływały samopodtrzymującą się reakcję łańcuchową (zamiast uciekać z próbki), potrzeba minimalnej ilości paliwa zwanej masą krytyczną."
  },
  {
    "id": 196,
    "category": "6. Elementy fizyki jądrowej — budowa jądra, rozpady, reaktory",
    "text": "Jaką rolę w reaktorze jądrowym pełnią MODERATOR oraz PRĘTY KONTROLNE (regulacyjne)? (pytanie z kolokwium)",
    "options": [
      {
        "text": "Moderator (woda, grafit) spowalnia neutrony do termicznych; pręty (Cd, B) pochłaniają nadmiar neutronów.",
        "isCorrect": true
      },
      {
        "text": "Moderator (kadm, bor) pochłania wszystkie neutrony; pręty (woda, grafit) przyspieszają neutrony.",
        "isCorrect": false
      },
      {
        "text": "Moderator stanowi paliwo rozszczepialne ($^{235}\\text{U}$); pręty kontrolne służą do napędzania turbiny parowej.",
        "isCorrect": false
      },
      {
        "text": "Moderator chroni personel przed fotonami gamma; pręty kontrolne odbijają neutrony z powrotem do rdzenia.",
        "isCorrect": false
      }
    ],
    "explanation": "To kluczowe pytanie z kolokwium (07.12.2023 gr. B)! Moderator to substancja o małej masie atomowej (woda lekka $\\text{H}_2\\text{O}$, ciężka $\\text{D}_2\\text{O}$, grafit, beryl), która w zderzeniach sprężystych spowalnia prędkie neutrony do energii termicznych. Pręty kontrolne/regulacyjne z silnych absorberów neutronów (kadm, bor, hafn) sterują mocą, utrzymując stan krytyczny ($k = 1$) lub wygaszając reaktor ($k < 1$)."
  },
  {
    "id": 197,
    "category": "6. Elementy fizyki jądrowej — budowa jądra, rozpady, reaktory",
    "text": "Które z poniższych elementów wchodzą w skład typowego energetycznego reaktora jądrowego (np. PWR lub BWR)?",
    "options": [
      {
        "text": "Paliwo rozszczepialne ($^{235}\\text{U}$ lub $^{239}\\text{Pu}$) oraz moderator spowalniający prędkie neutrony.",
        "isCorrect": true
      },
      {
        "text": "Pręty kontrolne z absorbera neutronów (np. Cd, B) oraz chłodziwo odbierające ciepło z rdzenia.",
        "isCorrect": true
      },
      {
        "text": "Reflektor neutronów ograniczający ich ucieczkę oraz zbiornik ciśnieniowy z osłoną radiacyjną.",
        "isCorrect": true
      },
      {
        "text": "Rezonator optyczny z półprzepuszczalnym lustrem wymuszający spójną emisję fotonów laserowych.",
        "isCorrect": false
      }
    ],
    "explanation": "Główne elementy reaktora jądrowego (EFW6 s. 17) to: paliwo jądrowe ($^{235}\\text{U}, ^{239}\\text{Pu}$), moderator ($\\text{H}_2\\text{O}, \\text{D}_2\\text{O}$, grafit, Be), pręty kontrolne (Cd, B, Hf), chłodziwo (w PWR/BWR woda pełni obie role: moderatora i chłodziwa), reflektor neutronów oraz zbiornik ciśnieniowy i osłona biologiczna/radiacyjna. Rezonator optyczny to element lasera."
  },
  {
    "id": 198,
    "category": "6. Elementy fizyki jądrowej — budowa jądra, rozpady, reaktory",
    "text": "Co oznacza stan krytyczny reaktora jądrowego ($k = 1$) oraz jaka jest skala zużycia paliwa uranowego w elektrowni $1\\text{ GW}_e$?",
    "options": [
      {
        "text": "Średnio dokładnie $1$ neutron z rozszczepienia wywołuje kolejne; potrzeba ok. $3\\text{ kg}$ uranu dziennie.",
        "isCorrect": true
      },
      {
        "text": "Reakcja łańcuchowa przyspiesza wybuchowo jak w bombie; potrzeba ok. $8\\cdot 10^6\\text{ kg}$ uranu dziennie.",
        "isCorrect": false
      },
      {
        "text": "Reakcja łańcuchowa gaśnie całkowicie w ułamku sekundy; potrzeba ok. $6400\\text{ m}^3$ uranu dziennie.",
        "isCorrect": false
      },
      {
        "text": "Każde rozszczepienie wywołuje dokładnie trzy kolejne; potrzeba tyle samo masy uranu co węgla.",
        "isCorrect": false
      }
    ],
    "explanation": "W reaktorze pracującym stabilnie utrzymuje się współczynnik powielania neutronów $k = 1$ (stan krytyczny — nie mylić z awarią!): średnio dokładnie jeden neutron z każdego rozszczepienia inicjuje następne. Według tabeli z wykładu EFW6 elektrownia o mocy $1\\text{ GW}_e$ zużywa zaledwie ok. $3\\text{ kg}$ uranu dziennie wobec $8 \\times 10^6\\text{ kg}$ (8000 ton!) węgla."
  },
  {
    "id": 199,
    "category": "6. Elementy fizyki jądrowej — budowa jądra, rozpady, reaktory",
    "text": "Które reakcje syntezy jądrowej (fuzji) zasilają gwiazdy takie jak Słońce i jakie są dwie główne metody kontrolowanej fuzji D+T na Ziemi?",
    "options": [
      {
        "text": "W gwiazdach łańcuch $p$-$p$ i cykl CNO; na Ziemi uwięzienie magnetyczne (tokamak) i inercyjne (NIF).",
        "isCorrect": true
      },
      {
        "text": "W gwiazdach rozszczepienie uranu $^{235}\\text{U}$ w $300\\text{ K}$; na Ziemi wyłącznie reaktory wodne PWR i BWR.",
        "isCorrect": false
      },
      {
        "text": "W gwiazdach rozpad $\\alpha$ ciężkiego bizmutu; na Ziemi chłodzenie wodoru w skaningowych mikroskopach STM.",
        "isCorrect": false
      },
      {
        "text": "W gwiazdach anihilacja antymaterii z neutronami; na Ziemi spowalnianie neutronów w ciężkiej wodzie.",
        "isCorrect": false
      }
    ],
    "explanation": "Na slajdach 18–19 wykładu EFW6 omówiono syntezę jądrową: w gwiazdach zachodzi łańcuch protonowy ($T > 4\\cdot 10^6\\text{ K}$, $26{,}7\\text{ MeV}$) oraz cykl CNO ($T > 15\\cdot 10^6\\text{ K}$). W ziemskich badaniach nad kontrolowaną fuzją (reakcja deuter + tryt) rozwijane są dwa podejścia: magnetyczne uwięzienie plazmy (tokamak, stellarator) oraz inercyjne uwięzienie plazmy laserami (NIF)."
  },
  {
    "id": 200,
    "category": "6. Elementy fizyki jądrowej — budowa jądra, rozpady, reaktory",
    "text": "Na czym polega datowanie radiowęglowe ($^{14}\\text{C}$) omawiane wśród zastosowań metod jądrowych na wykładzie EFW6?",
    "options": [
      {
        "text": "Na pomiarze zaniku izotopu $^{14}\\text{C}$ (rozpad $\\beta^-$, $t_{1/2} = 5730\\text{ lat}$) w martwej materii do ok. $60\\text{ tys.}$ lat.",
        "isCorrect": true
      },
      {
        "text": "Na pomiarze rozpadu $\\alpha$ izotopu $^{14}\\text{C}$ ($t_{1/2} = 6\\text{ godzin}$) wyłącznie w skałach wulkanicznych.",
        "isCorrect": false
      },
      {
        "text": "Na bombardowaniu starych kości neutronami z reaktora w celu wywołania rozszczepienia węgla $^{12}\\text{C}$.",
        "isCorrect": false
      },
      {
        "text": "Na pomiarze czasu przelotu fotonów $\\gamma$ przez próbkę z dobrą dokładnością do $10\\text{ miliardów}$ lat.",
        "isCorrect": false
      }
    ],
    "explanation": "Datowanie radiowęglowe wykorzystuje promieniotwórczy izotop węgla $^{14}\\text{C}$ ulegający rozpadowi $\\beta^-$ z czasem połowicznego rozpadu $t_{1/2} = 5730\\text{ lat}$. Po śmierci organizmu dopływ $^{14}\\text{C}$ ustaje i jego stężenie maleje wykładniczo — pozwala to datować szczątki organiczne z dobrą dokładnością do ok. $10\\,000\\text{ lat}$, a przy gorszej precyzji do ok. $60\\,000\\text{ lat}$."
  }
];
