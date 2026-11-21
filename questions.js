// Baza pytań — Elementy Fizyki Współczesnej (EFW)
// 300 pytań jednokrotnego i wielokrotnego wyboru z pełnymi wyjaśnieniami.
const questionDatabase = [
  {
    "id": 1,
    "category": "1. Mechanika kwantowa I — podstawy i model Bohra",
    "text": "Które z poniższych zagadnień należały do głównych problemów fizyki klasycznej pod koniec XIX wieku?",
    "options": [
      {
        "text": "Poszukiwanie hipotetycznego eteru jako ośrodka rozchodzenia się fal świetlnych.",
        "isCorrect": true
      },
      {
        "text": "Katastrofa w nadfiolecie w opisie widma promieniowania ciała doskonale czarnego.",
        "isCorrect": true
      },
      {
        "text": "Brak możliwości opisania ruchu planet przez klasyczne prawa dynamiki Newtona.",
        "isCorrect": false
      },
      {
        "text": "Niezgodność drugiej zasady termodynamiki z wynikami kinetycznej teorii gazów.",
        "isCorrect": false
      }
    ],
    "explanation": "Pod koniec XIX wieku kryzys fizyki klasycznej dotyczył problemu eteru, niezgodności równań Maxwella z transformacją Galileusza oraz katastrofy w nadfiolecie. Mechanika Newtona (ruch planet) oraz termodynamika święciły wówczas triumfy i nie były źródłem tego kryzysu."
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
    "text": "Które z poniższych stwierdzeń poprawnie opisują powstawanie promieniowania rentgenowskiego (X) w lampie RTG?",
    "options": [
      {
        "text": "Widmo ciągłe (Bremsstrahlung) powstaje przy hamowaniu elektronów w polu jąder anody.",
        "isCorrect": true
      },
      {
        "text": "Widmo charakterystyczne powstaje przy przeskokach elektronów między powłokami anody.",
        "isCorrect": true
      },
      {
        "text": "Minimalna długość fali widma ciągłego rośnie liniowo wraz ze wzrostem napięcia $U$.",
        "isCorrect": false
      },
      {
        "text": "Promieniowanie X powstaje wskutek rozpadu alfa ciężkich jąder na powierzchni katody.",
        "isCorrect": false
      }
    ],
    "explanation": "W lampie RTG elektrony hamujące na anodzie dają widmo ciągłe (Bremsstrahlung), a przeskoki między powłokami atomów anody dają widmo charakterystyczne. Minimalna długość fali $\\lambda_{\\min} = hc/(eU)$ MALEJE odwrotnie proporcjonalnie do napięcia $U$, a rozpad $\\alpha$ tu nie zachodzi."
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
    "text": "Które ze stwierdzeń na temat doświadczenia J.J. Thomsona (1897) z promieniami katodowymi są prawdziwe?",
    "options": [
      {
        "text": "Skrzyżowane pola $E$ i $B$ działały jako selektor prędkości spełniający warunek $v_0 = E/B$.",
        "isCorrect": true
      },
      {
        "text": "Pomiar odchylenia wiązki pozwolił wyznaczyć stosunek ładunku elektronu do jego masy ($q/m$).",
        "isCorrect": true
      },
      {
        "text": "Wykazano, że promienie katodowe to ujemne cząstki o masie dużo mniejszej niż atom wodoru.",
        "isCorrect": true
      },
      {
        "text": "W eksperymencie tym odkryto istnienie dodatniego jądra atomowego za pomocą cząstek alfa.",
        "isCorrect": false
      }
    ],
    "explanation": "J.J. Thomson użył skrzyżowanych pól $E$ i $B$ do wyznaczenia prędkości $v_0 = E/B$, a po wyłączeniu pola $B$ zmierzył kąt odchylenia i wyznaczył $q/m$, dowodząc istnienia elektronu. Odkrycie jądra atomowego za pomocą cząstek $\\alpha$ na złotej folii było znacznie późniejszym doświadczeniem Rutherforda (1909–1911)."
  },
  {
    "id": 8,
    "category": "1. Mechanika kwantowa I — podstawy i model Bohra",
    "text": "Które z poniższych stwierdzeń poprawnie opisują widmo liniowe oraz widmo ciągłe?",
    "options": [
      {
        "text": "Widmo liniowe składa się z oddzielnych prążków i jest typowe dla rozrzedzonych gazów.",
        "isCorrect": true
      },
      {
        "text": "Widmo ciągłe obejmuje nieprzerwane pasmo fal i emitują je rozgrzane ciała stałe i ciecze.",
        "isCorrect": true
      },
      {
        "text": "Widmo liniowe emitują wyłącznie gęste ciała stałe ogrzane powyżej temperatury topnienia.",
        "isCorrect": false
      },
      {
        "text": "Widmo ciągłe powstaje wyłącznie w zimnych gazach jednoatomowych pod niskim ciśnieniem.",
        "isCorrect": false
      }
    ],
    "explanation": "Rozrzedzone gazy atomowe (nieoddziałujące atomy) dają widmo liniowe złożone z ostrych, dyskretnych prążków. Natomiast rozgrzane ciała stałe, ciecze, gęste gazy oraz promieniowanie hamowania elektronów dają widmo ciągłe obejmujące szeroki, nieprzerwany zakres długości fal."
  },
  {
    "id": 9,
    "category": "1. Mechanika kwantowa I — podstawy i model Bohra",
    "text": "Które stwierdzenia dotyczące promieniowania termicznego i ciała doskonale czarnego (CDC) są prawdziwe?",
    "options": [
      {
        "text": "Ciało doskonale czarne pochłania $100\\%$ padającego promieniowania każdej długości fali.",
        "isCorrect": true
      },
      {
        "text": "Wraz ze wzrostem temperatury rośnie moc emisji, a maksimum przesuwa się ku krótszym falom.",
        "isCorrect": true
      },
      {
        "text": "W temperaturze pokojowej ciało doskonale czarne nie emituje żadnego promieniowania.",
        "isCorrect": false
      },
      {
        "text": "Rozkład widmowy promieniowania CDC zależy głównie od składu chemicznego, a nie temperatury.",
        "isCorrect": false
      }
    ],
    "explanation": "CDC pochłania $100\\%$ padającego promieniowania, a ze wzrostem temperatury rośnie jego moc ($\\propto T^4$) i maleje $\\lambda_{\\max}$ ($\\propto 1/T$). Każde ciało o $T > 0\\text{ K}$ (także w temp. pokojowej — w podczerwieni) emituje promieniowanie termiczne, a widmo CDC zależy wyłącznie od temperatury."
  },
  {
    "id": 10,
    "category": "1. Mechanika kwantowa I — podstawy i model Bohra",
    "text": "Które ze stwierdzeń poprawnie opisują prawo Rayleigha-Jeansa oraz hipotezę kwantową Plancka (1900)?",
    "options": [
      {
        "text": "Klasyczny wzór Rayleigha-Jeansa rozbiegał się do nieskończoności dla krótkich fal ($\\lambda \\to 0$).",
        "isCorrect": true
      },
      {
        "text": "Planck założył, że oscylator harmoniczny ma skwantowaną energię $E = nh\\nu$ ($n = 0,1,2,\\dots$).",
        "isCorrect": true
      },
      {
        "text": "Wzór Plancka przechodzi w prawo Rayleigha-Jeansa dla dużych długości fal (podczerwień).",
        "isCorrect": true
      },
      {
        "text": "Hipoteza Plancka przewidywała nieskończoną moc promieniowania w zakresie nadfioletu.",
        "isCorrect": false
      }
    ],
    "explanation": "To klasyczny wzór Rayleigha-Jeansa ($\\propto T/\\lambda^4$) prowadził do katastrofy w nadfiolecie przy $\\lambda \\to 0$. Hipoteza kwantowa Plancka ($E = nh\\nu$) usunęła tę rozbieżność dzięki czynnikowi wykładniczemu w mianowniku, zachowując zgodność ze wzorem klasycznym dla dużych $\\lambda$."
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
    "text": "Które z poniższych informacji poprawnie opisują Słońce jako ciało w przybliżeniu doskonale czarne?",
    "options": [
      {
        "text": "Fotony $\\gamma$ z syntezy we wnętrzu tracą energię przez rozpraszanie Comptona na elektronach.",
        "isCorrect": true
      },
      {
        "text": "Atmosfera słoneczna zawiera atomy i jony modyfikujące widmo (stąd ciało „prawie” czarne).",
        "isCorrect": true
      },
      {
        "text": "Temperatura powierzchni Słońca wynosi zaledwie ok. $2{,}73\\text{ K}$ w zakresie mikrofalowym.",
        "isCorrect": false
      },
      {
        "text": "Wnętrze Słońca nie produkuje żadnych fotonów gamma, lecz wyłącznie światło widzialne.",
        "isCorrect": false
      }
    ],
    "explanation": "Fotony $\\gamma$ z fuzji w jądrze Słońca tracą energię w zderzeniach Comptona, dając przy powierzchni ($T \\approx 5500\\text{ K}$) widmo CDC, które następnie modyfikuje atmosfera słoneczna. Temperatura $2{,}73\\text{ K}$ dotyczy mikrofalowego promieniowania tła (CMB)."
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
    "text": "Które ze stwierdzeń na temat fal materii Louisa de Broglie'a są prawdziwe?",
    "options": [
      {
        "text": "Każdej cząstce materialnej o pędzie $p$ towarzyszy fala o długości $\\lambda = h/p$.",
        "isCorrect": true
      },
      {
        "text": "Do obserwacji dyfrakcji potrzeba przeszkody o rozmiarze rzędu długości fali $\\lambda$.",
        "isCorrect": true
      },
      {
        "text": "Fale materii dotyczą tylko fotonów, a cząstki o masie spoczynkowej ich nie mają.",
        "isCorrect": false
      },
      {
        "text": "Im większa masa oraz pęd cząstki, tym dłuższa jest jej fala de Broglie'a.",
        "isCorrect": false
      }
    ],
    "explanation": "Hipoteza de Broglie'a dotyczy cząstek materialnych: $\\lambda = h/p = h/(mv)$. Długość fali maleje ze wzrostem masy i pędu, a obserwacja efektów falowych wymaga przeszkody o rozmiarach porównywalnych z $\\lambda$."
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
    "text": "Które z poniższych zjawisk dowodzą KORPUSKULARNEJ (cząstkowej) natury promieniowania elektromagnetycznego?",
    "options": [
      {
        "text": "Zjawisko fotoelektryczne zewnętrzne (wybijanie elektronów z metalu).",
        "isCorrect": true
      },
      {
        "text": "Rozpraszanie Comptona fotonów na swobodnych elektronach.",
        "isCorrect": true
      },
      {
        "text": "Kreacja par elektron–pozyton z wysokoenergetycznego fotonu gamma.",
        "isCorrect": true
      },
      {
        "text": "Dyfrakcja wiązki elektronów na krysztale niklu (Davisson-Germer).",
        "isCorrect": false
      }
    ],
    "explanation": "Zjawisko fotoelektryczne, efekt Comptona oraz kreacja par dowodzą korpuskularnej natury światła (foton ma energię $h\\nu$ i pęd $h/\\lambda$). Natomiast doświadczenie Davissona-Germera dowodzi odwrotnego aspektu dualizmu — falowej natury cząstek materialnych (elektronów)."
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
    "text": "Które fakty doświadczalne zjawiska fotoelektrycznego wyjaśniła kwantowa teoria Einsteina, a z którymi nie radziła sobie fizyka klasyczna?",
    "options": [
      {
        "text": "Maksymalna energia $E_{k,\\max}$ fotoelektronów nie zależy od natężenia światła, lecz od $\\nu$.",
        "isCorrect": true
      },
      {
        "text": "Istnieje częstotliwość graniczna $\\nu_0 = W/h$, poniżej której zjawisko w ogóle nie zachodzi.",
        "isCorrect": true
      },
      {
        "text": "Emisja fotoelektronów następuje natychmiastowo (brak opóźnienia nawet dla słabego światła).",
        "isCorrect": true
      },
      {
        "text": "Wraz ze wzrostem natężenia światła liniowo rośnie energia kinetyczna pojedynczego fotonu.",
        "isCorrect": false
      }
    ],
    "explanation": "Teoria Einsteina ($E_{k,\\max} = h\\nu - W$) wyjaśniła wszystkie trzy klasyczne paradoksy: brak zależności $E_{k,\\max}$ od natężenia, istnienie progu $\\nu_0 = W/h$ oraz brak opóźnienia czasowego. Natężenie światła określa liczbę fotonów (strumień), a NIE energię pojedynczego fotonu."
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
    "text": "Które ze stwierdzeń na temat rozpraszania (efektu) Comptona są prawdziwe?",
    "options": [
      {
        "text": "Przesunięcie $\\Delta\\lambda = \\lambda_C(1 - \\cos\\theta)$ nie zależy od początkowej długości fali.",
        "isCorrect": true
      },
      {
        "text": "Foton zachowuje się jak cząstka o $m_0 = 0$ oraz pędzie $p = h/\\lambda$.",
        "isCorrect": true
      },
      {
        "text": "Po zderzeniu z elektronem długość fali fotonu zawsze maleje ($\\lambda' < \\lambda$).",
        "isCorrect": false
      },
      {
        "text": "Efekt ten można w pełni wyjaśnić w ramach klasycznej teorii falowej.",
        "isCorrect": false
      }
    ],
    "explanation": "W efekcie Comptona foton oddaje energię elektronowi, więc jego długość fali rośnie ($\\lambda' \\ge \\lambda$, $\\Delta\\lambda = \\lambda_C(1 - \\cos\\theta)$ niezależnie od $\\lambda$). Zjawisko dowodzi cząstkowej natury fotonu ($m_0 = 0, p = h/\\lambda$) i nie wynika z klasycznej teorii falowej."
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
    "explanation": "Ze wzoru $\\Delta\\lambda = \\lambda_C (1 - \\cos\\theta)$ wynika, że wyrażenie $(1 - \\cos\\theta)$ osiąga maksimum równe $2$ dla $\\cos\\theta = -1$, czyli dla kąta $\\theta = 180^\\circ$ (zderzenie czołowe z odbiciem wstecznym fotonu). Wtedy $\\Delta\\lambda_{\\max} = 2\\lambda_C \\approx 0{,}0486\\text{ Å}$. Dla $\\theta = 90^\\circ$ mamy $\\Delta\\lambda = \\lambda_C$, a dla $\\theta = 0^\\circ$ jest $\\Delta\\lambda = 0$."
  },
  {
    "id": 27,
    "category": "1. Mechanika kwantowa I — podstawy i model Bohra",
    "text": "Dlaczego rozpraszanie Comptona jest zjawiskiem istotnym dla fotonów promieniowania X i $\\gamma$, a praktycznie niezauważalnym dla światła widzialnego?",
    "options": [
      {
        "text": "Bo $\\lambda_C \\approx 0{,}0243\\text{ Å}$ to duży ułamek $\\lambda$ promieni X i $\\gamma$, a znikomy dla światła widzialnego.",
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
    "explanation": "Bezwzględna zmiana długości fali jest rzędu $\\lambda_C \\approx 0{,}0243\\text{ Å} = 2{,}43 \\times 10^{-12}\\text{ m}$. Dla fotonów $\\gamma$ o zbliżonej długości fali oznacza to ogromną względną stratę energii (np. $57\\%$ w przykładzie z wykładu), natomiast dla światła widzialnego ($\\lambda \\approx 5000\\text{ Å}$) względna zmiana $\\Delta\\lambda/\\lambda$ jest rzędu $10^{-5}$, czyli praktycznie niemierzalna. Każdy foton ma masę spoczynkową $m_0 = 0$."
  },
  {
    "id": 28,
    "category": "1. Mechanika kwantowa I — podstawy i model Bohra",
    "text": "Które stwierdzenia na temat kreacji par elektron–pozyton ($\\gamma \\to e^- + e^+$) są prawdziwe?",
    "options": [
      {
        "text": "Zachodzi wyłącznie w polu jądra atomowego, które przejmuje nadmiar pędu fotonu.",
        "isCorrect": true
      },
      {
        "text": "Minimalna (progowa) energia fotonu dla pary $e^- e^+$ wynosi $2m_e c^2 = 1{,}022\\text{ MeV}$.",
        "isCorrect": true
      },
      {
        "text": "Pozyton ma dokładnie dwukrotnie większą masę spoczynkową niż zwykły elektron.",
        "isCorrect": false
      },
      {
        "text": "Proces ten zachodzi swobodnie w idealnej próżni już dla fotonów widzialnych.",
        "isCorrect": false
      }
    ],
    "explanation": "Kreacja pary $e^- e^+$ wymaga fotonu o energii co najmniej $2m_e c^2 = 1{,}022\\text{ MeV}$ oraz obecności jądra atomowego (zachowanie energii i pędu). Pozyton ma IDENTYCZNĄ masę co elektron (a przeciwny ładunek i moment magnetyczny)."
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
    "text": "Które ze stwierdzeń na temat anihilacji pary elektron–pozyton oraz jej zastosowań są prawdziwe?",
    "options": [
      {
        "text": "W wyniku zderzenia elektronu z pozytonem cząstki znikają, tworząc $2$ (lub $3$) fotony $\\gamma$.",
        "isCorrect": true
      },
      {
        "text": "Zjawisko to stanowi fizyczną podstawę medycznego obrazowania PET (tomografii pozytonowej).",
        "isCorrect": true
      },
      {
        "text": "W procesie anihilacji powstaje zawsze pojedynczy proton i ciężkie jądro helu-4 ($^4\\text{He}$).",
        "isCorrect": false
      },
      {
        "text": "Anihilacja zachodzi wyłącznie wtedy, gdy pozyton zderza się ze swobodnym neutronem.",
        "isCorrect": false
      }
    ],
    "explanation": "Cząstka w kontakcie ze swoją antycząstką (tu $e^-$ i $e^+$) ulega anihilacji, zamieniając całą masę w energię zazwyczaj $2$ (lub $3$) fotonów $\\gamma$ (po $511\\text{ keV}$). Wykorzystuje się to bezpośrednio w pozytonowej tomografii emisyjnej PET."
  },
  {
    "id": 31,
    "category": "1. Mechanika kwantowa I — podstawy i model Bohra",
    "text": "Które ze stwierdzeń poprawnie opisują wczesne modele budowy atomu Thomsona i Rutherforda?",
    "options": [
      {
        "text": "Model Thomsona zakładał ciągły ładunek dodatni z elektronami jak rodzynki w cieście.",
        "isCorrect": true
      },
      {
        "text": "Doświadczenie Rutherforda (cząstki $\\alpha$ na folii Au) dowiodło istnienia małego jądra.",
        "isCorrect": true
      },
      {
        "text": "Model planetarny Rutherforda gwarantował pełną stabilność atomu bez promieniowania.",
        "isCorrect": false
      },
      {
        "text": "Model Rutherforda poprawnie wyjaśnił serie widmowe wodoru bez postulatów kwantowych.",
        "isCorrect": false
      }
    ],
    "explanation": "Model Thomsona („ciasta z rodzynkami”) został obalony przez doświadczenie Rutherforda z cząstkami $\\alpha$ na złotej folii. Model planetarny Rutherforda był jednak klasycznie niestabilny (przyspieszający elektron promieniowałby i spadł na jądro) i nie wyjaśniał widm liniowych."
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
    "explanation": "Z połączenia siły Coulomba jako siły dośrodkowej oraz warunku kwantowania momentu pędu $L=n\\hbar$ otrzymujemy $r_n = a_0 n^2$ (gdzie promień Bohra $a_0 \\approx 0{,}529\\text{ Å}$) oraz $E_n = -\\frac{E_0}{n^2} = -\\frac{13{,}6\\text{ eV}}{n^2}$. Energia jest ujemna, ponieważ elektron znajduje się w stanie związanym z jądrem."
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
    "text": "Które z poniższych przyporządkowań serii widmowych atomu wodoru do zakresu widma i poziomu końcowego są poprawne?",
    "options": [
      {
        "text": "Seria Lymana odpowiada przejściom na poziom $n = 1$ i leży w nadfiolecie (UV).",
        "isCorrect": true
      },
      {
        "text": "Seria Balmera odpowiada przejściom na poziom $n = 2$ i leży w świetle widzialnym.",
        "isCorrect": true
      },
      {
        "text": "Seria Paschena odpowiada przejściom na poziom $n = 1$ i leży w promieniach gamma.",
        "isCorrect": false
      },
      {
        "text": "Seria Balmera odpowiada przejściom na poziom $n = 1$ i leży w zakresie promieni X.",
        "isCorrect": false
      }
    ],
    "explanation": "W widmie wodoru seria Lymana to przejścia na $n = 1$ (UV), seria Balmera to przejścia na $n = 2$ (zakres widzialny), natomiast seria Paschena to przejścia na $n = 3$ i leży w podczerwieni (IR), a nie w promieniowaniu gamma."
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
    "category": "1. Mechanika kwantowa I — podstawy i model Bohra",
    "text": "W lampie rentgenowskiej wymieniono metalową anodę z miedzi na wolfram, pozostawiając identyczne napięcie przyspieszające $U$. Jak zmieni się krótkofalowa granica widma ciągłego $\\lambda_{\\min}$?",
    "options": [
      {
        "text": "Pozostanie bez zmian, ponieważ $\\lambda_{\\min} = hc/(eU)$ zależy wyłącznie od napięcia $U$.",
        "isCorrect": true
      },
      {
        "text": "Zmaleje wyraźnie, ponieważ wolfram ma znacznie większą liczbę atomową $Z$ od miedzi.",
        "isCorrect": false
      },
      {
        "text": "Wzrośnie wyraźnie, ponieważ wolfram ma wyższą temperaturę topnienia oraz większą masę.",
        "isCorrect": false
      },
      {
        "text": "Zniknie całkowicie, ponieważ na anodzie wolframowej powstaje wyłącznie widmo liniowe.",
        "isCorrect": false
      }
    ],
    "explanation": "Krótkofalowa granica widma hamowania $\\lambda_{\\min} = \\frac{hc}{eU}$ zależy WYŁĄCZNIE od napięcia przyspieszającego $U$ (cała energia kinetyczna elektronu $eU$ zamienia się w energię jednego fotonu). Zmiana materiału anody przesuwa jedynie położenie linii widma charakterystycznego (liniowego), a nie granicę $\\lambda_{\\min}$."
  },
  {
    "id": 40,
    "category": "1. Mechanika kwantowa I — podstawy i model Bohra",
    "text": "Temperatura pokojowa wynosi $27^\\circ\\text{C}$. Ile wynosi ta temperatura w bezwzględnej skali Kelwina (stosowanej w prawach promieniowania termicznego)?",
    "options": [
      {
        "text": "Około $300{,}15\\text{ K}$ (bo dodajemy $273{,}15$ do wartości w $^\\circ\\text{C}$).",
        "isCorrect": true
      },
      {
        "text": "Około $246{,}15\\text{ K}$ (bo odejmujemy $27$ od wartości $273{,}15$).",
        "isCorrect": false
      },
      {
        "text": "Około $27{,}00\\text{ K}$ (bo wartości w obu skalach są identyczne).",
        "isCorrect": false
      },
      {
        "text": "Około $373{,}15\\text{ K}$ (bo zero Celsjusza to dokładnie $346{,}15\\text{ K}$).",
        "isCorrect": false
      }
    ],
    "explanation": "We wszystkich prawach promieniowania termicznego (Stefana-Boltzmanna $R_T = \\sigma T^4$, Wiena $\\lambda_{\\max}T = b$, Plancka) należy używać skali bezwzględnej Kelwina: $0^\\circ\\text{C} = 273{,}15\\text{ K}$, więc $27^\\circ\\text{C} = 27 + 273{,}15 = 300{,}15\\text{ K}$ (EFW1 s. 11)."
  },
  {
    "id": 41,
    "category": "1. Mechanika kwantowa I — podstawy i model Bohra",
    "text": "Które zależności poprawnie opisują prędkość wyselekcjonowanych elektronów $v_0 = E/B$ w skrzyżowanych polach w doświadczeniu J.J. Thomsona?",
    "options": [
      {
        "text": "Dwukrotne zwiększenie natężenia pola elektrycznego $E$ (przy stałym $B$) podwaja prędkość $v_0$.",
        "isCorrect": true
      },
      {
        "text": "Dwukrotne zwiększenie indukcji pola magnetycznego $B$ (przy stałym $E$) zmniejsza $v_0$ o połowę.",
        "isCorrect": true
      },
      {
        "text": "Prędkość $v_0$ rośnie proporcjonalnie do stosunku ładunku elektronu do jego masy ($q/m$).",
        "isCorrect": false
      },
      {
        "text": "Jednoczesne podwojenie obu pól $E$ oraz $B$ powoduje czterokrotny wzrost prędkości $v_0$.",
        "isCorrect": false
      }
    ],
    "explanation": "Z warunku równowagi sił $qE = qv_0 B$ ładunek $q$ i masa $m$ skracają się, dając $v_0 = E/B$. Podwojenie $E$ podwaja $v_0$, podwojenie $B$ zmniejsza $v_0$ dwukrotnie, natomiast jednoczesne podwojenie $E$ i $B$ pozostawia prędkość $v_0$ bez zmian."
  },
  {
    "id": 42,
    "category": "1. Mechanika kwantowa I — podstawy i model Bohra",
    "text": "Gwiazda A ma dwukrotnie wyższą temperaturę powierzchni niż gwiazda B ($T_A = 2 T_B$). Jaki jest stosunek całkowitej zdolności emisyjnej gwiazdy B do gwiazdy A ($R_B / R_A$) według prawa Stefana-Boltzmanna?",
    "options": [
      {
        "text": "$R_B / R_A = 1/16$, ponieważ zdolność emisyjna rośnie jak czwarta potęga $T$.",
        "isCorrect": true
      },
      {
        "text": "$R_B / R_A = 1/4$, ponieważ zdolność emisyjna rośnie jak druga potęga $T$.",
        "isCorrect": false
      },
      {
        "text": "$R_B / R_A = 1/2$, ponieważ zdolność emisyjna jest liniowa względem $T$.",
        "isCorrect": false
      },
      {
        "text": "$R_B / R_A = 1/8$, ponieważ zdolność emisyjna rośnie jak trzecia potęga $T$.",
        "isCorrect": false
      }
    ],
    "explanation": "Z prawa Stefana-Boltzmanna $R_T = \\sigma T^4$ otrzymujemy $R_B / R_A = (T_B / T_A)^4 = (1/2)^4 = 1/16$. Gwiazda o dwukrotnie niższej temperaturze wypromieniowuje aż szesnastokrotnie mniej mocy z każdego metra kwadratowego powierzchni."
  },
  {
    "id": 43,
    "category": "1. Mechanika kwantowa I — podstawy i model Bohra",
    "text": "Korzystając z prawa przesunięć Wiena ($\\lambda_{\\max} \\cdot T = b \\approx 2900\\text{ }\\mu\\text{m}\\cdot\\text{K}$), oszacuj długość fali $\\lambda_{\\max}$ dla maksimum emisji włókna żarówki o temperaturze $T = 2900\\text{ K}$.",
    "options": [
      {
        "text": "Około $1{,}0\\text{ }\\mu\\text{m}$ ($1000\\text{ nm}$), czyli w zakresie bliskiej podczerwieni.",
        "isCorrect": true
      },
      {
        "text": "Około $0{,}1\\text{ }\\mu\\text{m}$ ($100\\text{ nm}$), czyli w zakresie dalekiego nadfioletu.",
        "isCorrect": false
      },
      {
        "text": "Około $10\\text{ }\\mu\\text{m}$ ($10\\,000\\text{ nm}$), czyli w zakresie dalekiej podczerwieni.",
        "isCorrect": false
      },
      {
        "text": "Około $0{,}5\\text{ }\\mu\\text{m}$ ($500\\text{ nm}$), czyli dokładnie w środku pasma zielonego.",
        "isCorrect": false
      }
    ],
    "explanation": "Podstawiając do prawa Wiena: $\\lambda_{\\max} = \\frac{b}{T} \\approx \\frac{2900\\text{ }\\mu\\text{m}\\cdot\\text{K}}{2900\\text{ K}} = 1{,}0\\text{ }\\mu\\text{m} = 1000\\text{ nm}$. Dlatego klasyczna żarówka żarowa wypromieniowuje większość energii jako ciepło w podczerwieni (ponad $700\\text{ nm}$), a tylko niewielką część jako światło widzialne."
  },
  {
    "id": 44,
    "category": "1. Mechanika kwantowa I — podstawy i model Bohra",
    "text": "Które ze stwierdzeń na temat promieniowania termicznego oraz kamer termowizyjnych (EFW1 s. 10–12) są prawdziwe?",
    "options": [
      {
        "text": "W temperaturze pokojowej większość promieniowania cieplnego przypada na podczerwień.",
        "isCorrect": true
      },
      {
        "text": "Kamery termowizyjne mają zwykle niską rozdzielczość z powodu relacji $\\lambda$ do piksela.",
        "isCorrect": true
      },
      {
        "text": "Termowizja pozwala obserwować źródła ciepła przez dym (np. w akcjach strażackich).",
        "isCorrect": true
      },
      {
        "text": "Ciało w temperaturze pokojowej emituje maksimum promieniowania w paśmie widzialnym.",
        "isCorrect": false
      }
    ],
    "explanation": "Dla temperatury pokojowej ($T \\approx 300\\text{ K}$) prawo Wiena daje $\\lambda_{\\max} \\approx 10\\text{ }\\mu\\text{m}$ (podczerwień, fale niewidzialne). Ponieważ ta długość fali jest znacznie większa niż dla światła widzialnego, kamery termowizyjne mają zwykle mniejszą rozdzielczość; dobrze widzą natomiast przez dym (EFW1 s. 12)."
  },
  {
    "id": 45,
    "category": "1. Mechanika kwantowa I — podstawy i model Bohra",
    "text": "Które zależności poprawnie porównują klasyczny wzór Rayleigha-Jeansa ze wzorem Plancka dla promieniowania ciała doskonale czarnego?",
    "options": [
      {
        "text": "Dla dużych długości fal ($\\lambda \\to \\infty$) wzór Plancka upraszcza się do wzoru Rayleigha-Jeansa.",
        "isCorrect": true
      },
      {
        "text": "Dla małych długości fal ($\\lambda \\to 0$) czynnik $e^{hc/(\\lambda k_B T)}$ w mianowniku Plancka gasi rozbieżność.",
        "isCorrect": true
      },
      {
        "text": "Wzór Rayleigha-Jeansa ($S \\propto T/\\lambda^4$) poprawnie przewiduje spadek emisji do zera przy $\\lambda \\to 0$.",
        "isCorrect": false
      },
      {
        "text": "Wzór Plancka daje nieskończoną moc promieniowania w podczerwieni dla niskich temperatur $T$.",
        "isCorrect": false
      }
    ],
    "explanation": "Pełny wzór Plancka $S(\\lambda,T) = \\frac{2\\pi hc^2}{\\lambda^5}\\frac{1}{e^{hc/(\\lambda k_B T)} - 1}$ przechodzi dla dużych $\\lambda$ (gdy $e^x - 1 \\approx x$) dokładnie w klasyczne prawo Rayleigha-Jeansa ($2\\pi c k_B T / \\lambda^4$). Natomiast dla małych $\\lambda$ eksponenta w mianowniku rośnie szybciej niż $1/\\lambda^5$, usuwając katastrofę w nadfiolecie."
  },
  {
    "id": 46,
    "category": "1. Mechanika kwantowa I — podstawy i model Bohra",
    "text": "Zgodnie z hipotezą kwantowania Plancka ($E_n = nh\\nu$), jak zmieni się odstęp energetyczny $\\Delta E$ między dwoma sąsiednimi poziomami oscylatora harmonicznego, gdy jego częstotliwość $\\nu$ wzrośnie trzykrotnie?",
    "options": [
      {
        "text": "Odstęp $\\Delta E = h\\nu$ wzrośnie dokładnie trzykrotnie.",
        "isCorrect": true
      },
      {
        "text": "Odstęp $\\Delta E = h\\nu$ wzrośnie dokładnie dziewięciokrotnie.",
        "isCorrect": false
      },
      {
        "text": "Odstęp $\\Delta E = h\\nu$ zmaleje dokładnie trzykrotnie.",
        "isCorrect": false
      },
      {
        "text": "Odstęp $\\Delta E = h\\nu$ pozostanie dokładnie taki sam.",
        "isCorrect": false
      }
    ],
    "explanation": "Kolejne dozwolone poziomy oscylatora Plancka wynoszą $0, h\\nu, 2h\\nu, 3h\\nu, \\dots$, są więc rozmieszczone równomiernie co $\\Delta E = h\\nu$. Odstęp ten jest liniowo proporcjonalny do częstotliwości $\\nu$, więc przy trzykrotnym wzroście $\\nu$ rośnie trzykrotnie."
  },
  {
    "id": 47,
    "category": "1. Mechanika kwantowa I — podstawy i model Bohra",
    "text": "Które zależności poprawnie wiążą energię $E$, pęd $p$, częstotliwość $\\nu$ oraz długość fali $\\lambda$ pojedynczego fotonu w próżni?",
    "options": [
      {
        "text": "Dwukrotne skrócenie długości fali $\\lambda$ powoduje podwojenie energii $E = hc/\\lambda$ fotonu.",
        "isCorrect": true
      },
      {
        "text": "Pęd fotonu wyraża się wzorem $p = E/c = h/\\lambda$ i rośnie wraz ze wzrostem częstotliwości $\\nu$.",
        "isCorrect": true
      },
      {
        "text": "Fotony promieniowania $\\gamma$ mają znacznie większy pęd niż fotony światła widzialnego.",
        "isCorrect": true
      },
      {
        "text": "Im dłuższa jest fala elektromagnetyczna $\\lambda$, tym większa jest energia pojedynczego fotonu.",
        "isCorrect": false
      }
    ],
    "explanation": "Dla fotonu $E = h\\nu = hc/\\lambda$ oraz $p = E/c = h/\\lambda$. Zarówno energia, jak i pęd fotonu są wprost proporcjonalne do częstotliwości $\\nu$ i odwrotnie proporcjonalne do długości fali $\\lambda$ — krótsza fala (np. $\\gamma$) oznacza większą energię i większy pęd."
  },
  {
    "id": 48,
    "category": "1. Mechanika kwantowa I — podstawy i model Bohra",
    "text": "Prędkość nierelatywistycznego elektronu wzrosła dwukrotnie ($v' = 2v$). Jak zmieni się towarzysząca mu długość fali materii de Broglie'a?",
    "options": [
      {
        "text": "Zmaleje dokładnie dwukrotnie, ponieważ $\\lambda = h/(mv)$ jest odwrotnie proporcjonalna do $v$.",
        "isCorrect": true
      },
      {
        "text": "Zmaleje dokładnie czterokrotnie, ponieważ $\\lambda$ jest odwrotnie proporcjonalna do $v^2$.",
        "isCorrect": false
      },
      {
        "text": "Wzrośnie dokładnie dwukrotnie, ponieważ $\\lambda$ rośnie liniowo z prędkością cząstki.",
        "isCorrect": false
      },
      {
        "text": "Pozostanie bez zmian, ponieważ zależy wyłącznie od masy spoczynkowej elektronu.",
        "isCorrect": false
      }
    ],
    "explanation": "Ze wzoru de Broglie'a $\\lambda = \\frac{h}{p} = \\frac{h}{mv}$ długość fali materii dla ruchu nierelatywistycznego jest odwrotnie proporcjonalna do prędkości $v$. Podwojenie prędkości podwaja pęd, a więc skraca długość fali de Broglie'a dokładnie dwukrotnie."
  },
  {
    "id": 49,
    "category": "1. Mechanika kwantowa I — podstawy i model Bohra",
    "text": "Energia kinetyczna nierelatywistycznego elektronu wzrosła czterokrotnie ($E_k' = 4E_k$). Jak zmieniła się jego długość fali de Broglie'a?",
    "options": [
      {
        "text": "Zmaleje dwukrotnie, ponieważ $\\lambda = h/\\sqrt{2mE_k}$ jest odwrotnie proporcjonalna do $\\sqrt{E_k}$.",
        "isCorrect": true
      },
      {
        "text": "Zmaleje czterokrotnie, ponieważ długość fali $\\lambda$ jest odwrotnie proporcjonalna do $E_k$.",
        "isCorrect": false
      },
      {
        "text": "Zmaleje szesnastokrotnie, ponieważ długość fali $\\lambda$ jest odwrotnie proporcjonalna do $E_k^2$.",
        "isCorrect": false
      },
      {
        "text": "Wzrośnie dwukrotnie, ponieważ długość fali $\\lambda$ jest wprost proporcjonalna do $\\sqrt{E_k}$.",
        "isCorrect": false
      }
    ],
    "explanation": "W mechanice nierelatywistycznej $E_k = p^2/(2m)$, skąd $p = \\sqrt{2mE_k}$ oraz $\\lambda = \\frac{h}{\\sqrt{2mE_k}}$. Czterokrotny wzrost energii kinetycznej (np. czterokrotny wzrost napięcia przyspieszającego $U$) podwaja pęd, więc długość fali de Broglie'a maleje $\\sqrt{4} = 2$ razy."
  },
  {
    "id": 50,
    "category": "1. Mechanika kwantowa I — podstawy i model Bohra",
    "text": "Elektron i proton poruszają się z JEDNAKOWĄ prędkością $v$. Jak ma się długość fali de Broglie'a elektronu ($\\lambda_e$) do długości fali protonu ($\\lambda_p$)?",
    "options": [
      {
        "text": "$\\lambda_e$ jest ok. $1836\\times$ większa od $\\lambda_p$, bo proton ma $1836\\times$ większą masę.",
        "isCorrect": true
      },
      {
        "text": "$\\lambda_p$ jest ok. $1836\\times$ większa od $\\lambda_e$, bo proton ma większą masę i pęd.",
        "isCorrect": false
      },
      {
        "text": "$\\lambda_e$ jest dokładnie równa $\\lambda_p$, bo obie cząstki mają tę samą prędkość $v$.",
        "isCorrect": false
      },
      {
        "text": "$\\lambda_e$ jest ok. $43\\times$ większa od $\\lambda_p$, bo długość fali zależy jak $1/\\sqrt{m}$.",
        "isCorrect": false
      }
    ],
    "explanation": "Przy tej samej prędkości $v$ zachodzi $\\lambda = \\frac{h}{mv}$, więc długość fali jest odwrotnie proporcjonalna do masy cząstki: $\\frac{\\lambda_e}{\\lambda_p} = \\frac{m_p}{m_e} \\approx 1836$. (Natomiast przy tej samej energii kinetycznej stosunek wynosiłby $\\sqrt{m_p/m_e} \\approx 43$!)"
  },
  {
    "id": 51,
    "category": "1. Mechanika kwantowa I — podstawy i model Bohra",
    "text": "Które ze stwierdzeń poprawnie opisują przykłady obliczeń długości fali de Broglie'a podane na wykładzie (EFW1 s. 22)?",
    "options": [
      {
        "text": "Niskoenergetyczny elektron ($E_k \\approx 50\\text{ eV}$) ma $\\lambda$ porównywalną z odległością atomów w krysztale.",
        "isCorrect": true
      },
      {
        "text": "Dla piłki tenisowej ($m = 0{,}057\\text{ kg}, v = 25\\text{ m/s}$) długość $\\lambda$ jest ok. $10^{19}\\times$ mniejsza od jądra $^{16}\\text{O}$.",
        "isCorrect": true
      },
      {
        "text": "Zwiększenie napięcia przyspieszającego $U$ w dziale elektronowym wydłuża falę de Broglie'a.",
        "isCorrect": false
      },
      {
        "text": "Dla piłki tenisowej długość fali $\\lambda$ wynosi ok. $1\\text{ mm}$, więc łatwo ulega dyfrakcji na siatce.",
        "isCorrect": false
      }
    ],
    "explanation": "Na slajdzie 22 wykładu EFW1 zestawiono dwa przykłady: elektron o $E_k = 50\\text{ eV}$ ma $\\lambda \\approx 1{,}7\\text{ Å}$ (rzędu stałej sieci kryształu — stąd udana dyfrakcja na niklu!), podczas gdy piłka tenisowa ma $\\lambda \\sim 10^{-34}\\text{ m}$ ($\\sim 10^{-19}$ rozmiaru jądra tlenu). Wzrost napięcia $U$ zwiększa pęd i SKRACA $\\lambda$."
  },
  {
    "id": 52,
    "category": "1. Mechanika kwantowa I — podstawy i model Bohra",
    "text": "Na wykresie zależności potencjału hamującego $V_h$ fotoelektronów od częstotliwości światła $\\nu$ (EFW1 s. 23) dla różnych metali otrzymujemy równoległe linie proste. Co wyznacza ich nachylenie oraz punkt przecięcia z osią $\\nu$?",
    "options": [
      {
        "text": "Nachylenie wynosi $h/e$ (jednakowe dla wszystkich metali), a przecięcie z osią $\\nu$ to $\\nu_0 = W/h$.",
        "isCorrect": true
      },
      {
        "text": "Nachylenie wynosi $W/e$ (inne dla każdego metalu), a przecięcie z osią $\\nu$ jest zawsze równe zero.",
        "isCorrect": false
      },
      {
        "text": "Nachylenie zależy liniowo od natężenia światła, a przecięcie z osią $\\nu$ od masy elektronu.",
        "isCorrect": false
      },
      {
        "text": "Nachylenie jest zawsze ujemne i wynosi $-h/e$, a proste zbiegają się w początku układu.",
        "isCorrect": false
      }
    ],
    "explanation": "Z równania Einsteina $eV_h = E_{k,\\max} = h\\nu - W$ po podzieleniu przez $e$ otrzymujemy $V_h(\\nu) = \\frac{h}{e}\\nu - \\frac{W}{e}$. Wszystkie metale dają więc proste o tym samym współczynniku kierunkowym $h/e$ (co pozwoliło Millikanowi precyzyjnie wyznaczyć stałą Plancka $h$), przesunięte w poziomie o częstotliwość graniczną $\\nu_0 = W/h$."
  },
  {
    "id": 53,
    "category": "1. Mechanika kwantowa I — podstawy i model Bohra",
    "text": "Na płytkę metalową o pracy wyjścia $W = 2{,}5\\text{ eV}$ skierowano bardzo silną wiązkę światła złożoną z fotonów o energii $E = 2{,}0\\text{ eV}$. Ile wynosi maksymalna energia kinetyczna fotoelektronów?",
    "options": [
      {
        "text": "Emisja w ogóle nie zachodzi, bo energia jednego fotonu jest mniejsza niż $W$.",
        "isCorrect": true
      },
      {
        "text": "Wynosi $0{,}5\\text{ eV}$, ponieważ nadmiar pracy wyjścia zamienia się w ruch.",
        "isCorrect": false
      },
      {
        "text": "Wynosi $1{,}5\\text{ eV}$, ponieważ elektron pochłania naraz dwa fotony po $2{,}0\\text{ eV}$.",
        "isCorrect": false
      },
      {
        "text": "Wynosi $4{,}5\\text{ eV}$, ponieważ energia kinetyczna to suma energii fotonu i $W$.",
        "isCorrect": false
      }
    ],
    "explanation": "W zjawisku fotoelektrycznym pojedynczy elektron pochłania energię tylko jednego fotonu ($h\\nu$). Skoro $h\\nu = 2{,}0\\text{ eV} < W = 2{,}5\\text{ eV}$, warunek progowy $\\nu \\ge \\nu_0$ nie jest spełniony i żaden elektron nie zostanie wybity niezależnie od natężenia wiązki."
  },
  {
    "id": 54,
    "category": "1. Mechanika kwantowa I — podstawy i model Bohra",
    "text": "Które ze stwierdzeń poprawnie opisują wpływ częstotliwości $\\nu$, natężenia światła i pracy wyjścia $W$ w zjawisku fotoelektrycznym (dla $\\nu > \\nu_0$)?",
    "options": [
      {
        "text": "Im mniejsza praca wyjścia $W$ metalu, tym niższa jego częstotliwość graniczna $\\nu_0 = W/h$.",
        "isCorrect": true
      },
      {
        "text": "Zwiększenie częstotliwości $\\nu$ ponad $\\nu_0$ daje liniowy wzrost maksymalnej energii $E_{k,\\max}$.",
        "isCorrect": true
      },
      {
        "text": "Zwiększenie natężenia światła przy stałym $\\nu$ zwiększa proporcjonalnie energię $E_{k,\\max}$.",
        "isCorrect": false
      },
      {
        "text": "Elektrony opuszczają metal z mniejszą energią niż $E_{k,\\max}$, bo nie zderzają się w metalu.",
        "isCorrect": false
      }
    ],
    "explanation": "Ponieważ $\\nu_0 = W/h$, mniejsza praca wyjścia oznacza niższy próg częstotliwości, a z $E_{k,\\max} = h\\nu - W$ energia maksymalna rośnie liniowo z $\\nu$ (nie zależy od natężenia!). Elektrony z głębszych warstw tracą dodatkową energię $W' > W$ w zderzeniach wewnątrz metalu, stąd ich energia jest mniejsza niż $E_{k,\\max}$."
  },
  {
    "id": 55,
    "category": "1. Mechanika kwantowa I — podstawy i model Bohra",
    "text": "W doświadczeniu Comptona foton uległ rozproszeniu na swobodnym elektronie pod kątem prostym ($\\theta = 90^\\circ$). Ile wynosi przyrost jego długości fali $\\Delta\\lambda = \\lambda' - \\lambda$?",
    "options": [
      {
        "text": "$\\Delta\\lambda = \\lambda_C \\approx 0{,}0243\\text{ Å}$ (równy dokładnie comptonowskiej długości fali).",
        "isCorrect": true
      },
      {
        "text": "$\\Delta\\lambda = 2\\lambda_C \\approx 0{,}0486\\text{ Å}$ (dwukrotność comptonowskiej długości fali).",
        "isCorrect": false
      },
      {
        "text": "$\\Delta\\lambda = 0\\text{ Å}$ (pod kątem prostym długość fali fotonu nie ulega zmianie).",
        "isCorrect": false
      },
      {
        "text": "$\\Delta\\lambda = \\frac{1}{2}\\lambda_C \\approx 0{,}0121\\text{ Å}$ (połowa comptonowskiej długości fali).",
        "isCorrect": false
      }
    ],
    "explanation": "Ze wzoru Comptona $\\Delta\\lambda = \\lambda_C (1 - \\cos\\theta)$ dla $\\theta = 90^\\circ$ mamy $\\cos 90^\\circ = 0$, więc $\\Delta\\lambda = \\lambda_C (1 - 0) = \\lambda_C = \\frac{h}{m_e c} \\approx 0{,}0243\\text{ Å}$."
  },
  {
    "id": 56,
    "category": "1. Mechanika kwantowa I — podstawy i model Bohra",
    "text": "Ile wynosi przesunięcie długości fali $\\Delta\\lambda$ w efekcie Comptona dla kąta rozproszenia $\\theta = 60^\\circ$ ($\\cos 60^\\circ = 1/2$)?",
    "options": [
      {
        "text": "$\\Delta\\lambda = \\frac{1}{2}\\lambda_C$ (połowa comptonowskiej długości fali).",
        "isCorrect": true
      },
      {
        "text": "$\\Delta\\lambda = \\lambda_C$ (dokładnie comptonowska długość fali).",
        "isCorrect": false
      },
      {
        "text": "$\\Delta\\lambda = \\frac{3}{2}\\lambda_C$ (półtora comptonowskiej długości fali).",
        "isCorrect": false
      },
      {
        "text": "$\\Delta\\lambda = 2\\lambda_C$ (dwukrotność comptonowskiej długości fali).",
        "isCorrect": false
      }
    ],
    "explanation": "Podstawiając $\\cos 60^\\circ = 1/2$ do wzoru Comptona $\\Delta\\lambda = \\lambda_C(1 - \\cos\\theta)$, otrzymujemy $\\Delta\\lambda = \\lambda_C(1 - 1/2) = \\frac{1}{2}\\lambda_C \\approx 0{,}0121\\text{ Å}$."
  },
  {
    "id": 57,
    "category": "1. Mechanika kwantowa I — podstawy i model Bohra",
    "text": "Które ze stwierdzeń poprawnie opisują wielkość efektu Comptona oraz zasady zachowania w tym zderzeniu (EFW1 s. 26–27)?",
    "options": [
      {
        "text": "W zderzeniu spełnione są relatywistyczne zasady zachowania energii oraz pędu.",
        "isCorrect": true
      },
      {
        "text": "Dla kąta $\\theta = 0^\\circ$ przesunięcie wynosi $0$, a dla rozproszenia wstecznego $2\\lambda_C$.",
        "isCorrect": true
      },
      {
        "text": "Względna strata energii fotonu jest większa dla promieni $\\gamma$ niż dla miękkich X.",
        "isCorrect": true
      },
      {
        "text": "Comptonowska długość fali $\\lambda_C$ rośnie proporcjonalnie do długości padającej fali.",
        "isCorrect": false
      }
    ],
    "explanation": "Stała $\\lambda_C = h/(m_e c) \\approx 0{,}0243\\text{ Å}$ zależy wyłącznie od stałych fundamentalnych (NIE od $\\lambda$ fotonu!). Na slajdzie 27 EFW1 podano przykład dla $\\theta = 90^\\circ$: foton X ($1\\text{ Å}$) traci $2{,}4\\%$ energii, a krótszy foton $\\gamma$ ($0{,}0188\\text{ Å}$) aż $57\\%$."
  },
  {
    "id": 58,
    "category": "1. Mechanika kwantowa I — podstawy i model Bohra",
    "text": "Foton promieniowania $\\gamma$ o energii $E_\\gamma = 2{,}022\\text{ MeV}$ uległ kreacji pary elektron–pozyton w polu ciężkiego jądra atomowego. Ile wynosi w przybliżeniu łączna energia kinetyczna powstałego elektronu i pozytonu?",
    "options": [
      {
        "text": "Około $1{,}000\\text{ MeV}$ (nadwyżka ponad energię progową $2m_e c^2 = 1{,}022\\text{ MeV}$).",
        "isCorrect": true
      },
      {
        "text": "Około $1{,}511\\text{ MeV}$ (nadwyżka ponad energię spoczynkową jednego elektronu).",
        "isCorrect": false
      },
      {
        "text": "Około $2{,}022\\text{ MeV}$ (cała energia fotonu zamienia się w energię kinetyczną).",
        "isCorrect": false
      },
      {
        "text": "Około $0{,}000\\text{ MeV}$ (całą nadwyżkę energii przejmuje zawsze ciężkie jądro).",
        "isCorrect": false
      }
    ],
    "explanation": "Z zasady zachowania energii $E_\\gamma = 2m_e c^2 + E_{k,e^-} + E_{k,e^+}$ (ciężkie jądro przejmuje pęd, ale z racji dużej masy pobiera znikomą energię kinetyczną). Ponieważ $2m_e c^2 = 1{,}022\\text{ MeV}$, łączna energia kinetyczna pary wynosi $2{,}022 - 1{,}022 = 1{,}000\\text{ MeV}$."
  },
  {
    "id": 59,
    "category": "1. Mechanika kwantowa I — podstawy i model Bohra",
    "text": "Które ze stwierdzeń na temat obserwacji kreacji par w komorze pęcherzykowej oraz kreacji cięższych par (EFW1 s. 28) są prawdziwe?",
    "options": [
      {
        "text": "W polu magnetycznym $B$ tory elektronu i pozytonu zakrzywiają się w przeciwne strony.",
        "isCorrect": true
      },
      {
        "text": "Możliwa jest kreacja par proton–antyproton, lecz wymaga fotonu o energii ponad $1{,}87\\text{ GeV}$.",
        "isCorrect": true
      },
      {
        "text": "W polu magnetycznym $B$ elektron i pozyton zakrzywiają się zawsze w tę samą stronę.",
        "isCorrect": false
      },
      {
        "text": "Kreacja pary proton–antyproton ma identyczny próg energetyczny ($1{,}022\\text{ MeV}$) co $e^- e^+$.",
        "isCorrect": false
      }
    ],
    "explanation": "Na zdjęciu komory pęcherzykowej ze slajdu 28 EFW1 widać charakterystyczne dwie spirale wygięte w przeciwne strony — to skutek przeciwnych znaków ładunku elektronu ($-e$) i pozytonu ($+e$) w polu magnetycznym $B$. Kreacja pary $p\\bar{p}$ jest możliwa, ale próg to $2m_p c^2 \\approx 1876{,}5\\text{ MeV} \\approx 1{,}88\\text{ GeV}$."
  },
  {
    "id": 60,
    "category": "1. Mechanika kwantowa I — podstawy i model Bohra",
    "text": "Które ze stwierdzeń poprawnie opisują doświadczenia dowodzące falowej natury elektronów (EFW1 s. 30–31)?",
    "options": [
      {
        "text": "W doświadczeniu Davissona-Germera elektrony ulegały dyfrakcji na sieci krystalicznej niklu.",
        "isCorrect": true
      },
      {
        "text": "Wiązka elektronów przechodząca przez podwójną szczelinę tworzy na ekranie prążki interferencyjne.",
        "isCorrect": true
      },
      {
        "text": "W doświadczeniu z podwójną szczeliną elektrony tworzą wyłącznie dwa ostre paski za szczelinami.",
        "isCorrect": false
      },
      {
        "text": "Kąty maksimów dyfrakcji elektronów na niklu nie zgadzały się z długością fali de Broglie'a.",
        "isCorrect": false
      }
    ],
    "explanation": "Zarówno doświadczenie Davissona-Germera (dyfrakcja elektronów na monokrysztale Ni, świetna zgodność z prawem Bragga i $\\lambda = h/p$), jak i interferencja wiązki elektronów na podwójnej szczelinie (EFW1 s. 30–31) stanowią bezpośrednie dowody falowej natury materii."
  },
  {
    "id": 61,
    "category": "1. Mechanika kwantowa I — podstawy i model Bohra",
    "text": "Elektron w atomie wodoru (model Bohra) przechodzi z pierwszego stanu wzbudzonego ($n = 2$, $E_2 = -3{,}4\\text{ eV}$) do stanu podstawowego ($n = 1$, $E_1 = -13{,}6\\text{ eV}$). Jaka jest energia wyemitowanego fotonu?",
    "options": [
      {
        "text": "$h\\nu = 10{,}2\\text{ eV}$ (linia z nadfioletowej serii Lymana).",
        "isCorrect": true
      },
      {
        "text": "$h\\nu = 17{,}0\\text{ eV}$ (suma wartości bezwzględnych obu poziomów).",
        "isCorrect": false
      },
      {
        "text": "$h\\nu = 3{,}4\\text{ eV}$ (równa modułowi energii początkowego poziomu).",
        "isCorrect": false
      },
      {
        "text": "$h\\nu = 13{,}6\\text{ eV}$ (równa pełnej energii jonizacji wodoru).",
        "isCorrect": false
      }
    ],
    "explanation": "Z trzeciego postulatu Bohra energia wyemitowanego fotonu wynosi $h\\nu = E_2 - E_1 = (-3{,}4\\text{ eV}) - (-13{,}6\\text{ eV}) = 10{,}2\\text{ eV}$. Ponieważ przejście kończy się na $n = 1$, jest to pierwsza linia ($K_\\alpha$, $122\\text{ nm}$) nadfioletowej serii Lymana."
  },
  {
    "id": 62,
    "category": "1. Mechanika kwantowa I — podstawy i model Bohra",
    "text": "Ile razy promień czwartej orbity ($n = 4$) elektronu w modelu Bohra atomu wodoru jest większy od promienia drugiej orbity ($n = 2$)?",
    "options": [
      {
        "text": "Dokładnie $4$ razy, ponieważ promień rośnie jak $n^2$ ($16 a_0 / 4 a_0$).",
        "isCorrect": true
      },
      {
        "text": "Dokładnie $2$ razy, ponieważ promień rośnie liniowo z liczbą $n$.",
        "isCorrect": false
      },
      {
        "text": "Dokładnie $16$ razy, ponieważ promień rośnie jak czwarta potęga $n$.",
        "isCorrect": false
      },
      {
        "text": "Dokładnie $8$ razy, ponieważ promień rośnie jak sześcian liczby $n$.",
        "isCorrect": false
      }
    ],
    "explanation": "W modelu Bohra $r_n = a_0 n^2$, więc $r_4 = 16 a_0$, a $r_2 = 4 a_0$. Ich stosunek wynosi $r_4 / r_2 = 16 / 4 = 4$."
  },
  {
    "id": 63,
    "category": "1. Mechanika kwantowa I — podstawy i model Bohra",
    "text": "Jak w modelu Bohra atomu wodoru zmieniają się wybrane wielkości fizyczne elektronu wraz ze WZROSTEM głównej liczby kwantowej $n$?",
    "options": [
      {
        "text": "Promień orbity $r_n = a_0 n^2$ oraz moment pędu $L_n = n\\hbar$ rosną wraz z liczbą $n$.",
        "isCorrect": true
      },
      {
        "text": "Energia $E_n = -13{,}6\\text{ eV}/n^2$ rośnie algebraicznie (zbliża się do $0$ od dołu).",
        "isCorrect": true
      },
      {
        "text": "Prędkość elektronu na orbicie $v_n \\propto 1/n$ maleje wraz ze wzrostem numeru orbity.",
        "isCorrect": true
      },
      {
        "text": "Odległość energetyczna sąsiednich poziomów ($E_{n+1} - E_n$) gwałtownie rośnie z $n$.",
        "isCorrect": false
      }
    ],
    "explanation": "W atomie wodoru ze wzrostem $n$ rośnie promień ($\\propto n^2$) i moment pędu ($\\propto n$), energia zbliża się do zera (rośnie od $-13{,}6\\text{ eV}$ ku $0$, a odstępy między sąsiednimi poziomami MALEJĄ!), zaś z warunku $mvr = n\\hbar$ i $r \\propto n^2$ prędkość elektronu $v_n \\propto 1/n$ maleje."
  },
  {
    "id": 64,
    "category": "1. Mechanika kwantowa I — podstawy i model Bohra",
    "text": "Które ze stwierdzeń poprawnie porównują widmo EMISYJNE oraz widmo ABSORPCYJNE gazowego wodoru (EFW1 s. 36)?",
    "options": [
      {
        "text": "Widmo emisyjne to jasne prążki na ciemnym tle z przeskoków elektronów na niższe poziomy.",
        "isCorrect": true
      },
      {
        "text": "Widmo absorpcyjne to ciemne linie na tle widma ciągłego w tych samych długościach fal $\\lambda$.",
        "isCorrect": true
      },
      {
        "text": "Położenia linii absorpcyjnych są całkowicie inne niż położenia linii emisyjnych tego atomu.",
        "isCorrect": false
      },
      {
        "text": "Widmo absorpcyjne powstaje, gdy wzbudzony gaz samorzutnie emituje fotony w ciemności.",
        "isCorrect": false
      }
    ],
    "explanation": "Ponieważ absorpcja i emisja w tym samym atomie zachodzą między tymi samymi skwantowanymi poziomami energetycznymi ($\\Delta E = h\\nu$), ciemne linie w widmie absorpcyjnym leżą dokładnie w tych samych długościach fal co jasne linie w widmie emisyjnym."
  },
  {
    "id": 65,
    "category": "1. Mechanika kwantowa I — podstawy i model Bohra",
    "text": "Atom wodoru znajduje się w pierwszym stanie wzbudzonym ($n = 2$, $E_2 = -3{,}4\\text{ eV}$). Jaka jest minimalna energia fotonu potrzebna do zjonizowania tego atomu z poziomu $n = 2$?",
    "options": [
      {
        "text": "Dokładnie $3{,}4\\text{ eV}$ (przejście elektronu z $E_2 = -3{,}4\\text{ eV}$ do zera).",
        "isCorrect": true
      },
      {
        "text": "Dokładnie $13{,}6\\text{ eV}$ (energia jonizacji jest stała dla każdego $n$).",
        "isCorrect": false
      },
      {
        "text": "Dokładnie $10{,}2\\text{ eV}$ (różnica między poziomem $n = 2$ a poziomem $1$).",
        "isCorrect": false
      },
      {
        "text": "Dokładnie $6{,}8\\text{ eV}$ (połowa energii jonizacji stanu podstawowego).",
        "isCorrect": false
      }
    ],
    "explanation": "Jonizacja oznacza przeniesienie elektronu do stanu swobodnego ($n \\to \\infty$, gdzie $E_\\infty = 0$). Ze stanu wzbudzonego $n = 2$ ($E_2 = -3{,}4\\text{ eV}$) wystarczy zatem dostarczyć $|E_2| = 3{,}4\\text{ eV}$."
  },
  {
    "id": 66,
    "category": "1. Mechanika kwantowa I — podstawy i model Bohra",
    "text": "Które z poniższych układów atomowych lub jonowych MOŻNA poprawnie opisać za pomocą modelu Bohra (EFW1 s. 38)?",
    "options": [
      {
        "text": "Neutralny atom wodoru ($\\text{H}$, $Z = 1$, jeden elektron) oraz jego izotop deuter.",
        "isCorrect": true
      },
      {
        "text": "Jednokrotnie zjonizowany hel ($\\text{He}^+$) oraz dwukrotnie zjonizowany lit ($\\text{Li}^{2+}$).",
        "isCorrect": true
      },
      {
        "text": "Neutralny atom helu ($\\text{He}$, $Z = 2$, dwa oddziałujące ze sobą elektrony).",
        "isCorrect": false
      },
      {
        "text": "Dowolny wieloelektronowy atom metalu przejściowego (np. żelazo $_{26}\\text{Fe}$).",
        "isCorrect": false
      }
    ],
    "explanation": "Model Bohra działa WYŁĄCZNIE dla układów jednoelektronowych (wodoropodobnych): $\\text{H}, \\text{He}^+, \\text{Li}^{2+}$ (EFW1 s. 38), gdzie nie występuje odpychanie między elektronami. Nie działa nawet dla dwuelektronowego neutralnego atomu helu $\\text{He}$."
  },
  {
    "id": 67,
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
    "id": 68,
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
    "id": 69,
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
    "id": 70,
    "category": "2. Mechanika kwantowa II — równanie Schrödingera i tunelowanie",
    "text": "Które opisy symboli występujących w zależnym od czasu równaniu Schrödingera są poprawne?",
    "options": [
      {
        "text": "$\\hbar = h/(2\\pi)$ oznacza zredukowaną stałą Plancka (stałą Diraca).",
        "isCorrect": true
      },
      {
        "text": "$\\Psi(x,t)$ oznacza zespoloną funkcję falową cząstki w chwili $t$.",
        "isCorrect": true
      },
      {
        "text": "$V(x,t)$ oznacza prędkość grupową pakietu falowego cząstki.",
        "isCorrect": false
      },
      {
        "text": "$i$ oznacza natężenie prądu elektrycznego w układzie kwantowym.",
        "isCorrect": false
      }
    ],
    "explanation": "W zależnym od czasu równaniu Schrödingera $\\hbar = h/(2\\pi)$ to zredukowana stała Plancka, $\\Psi(x,t)$ to zespolona funkcja falowa, $V(x,t)$ to energia potencjalna (nie prędkość!), a $i$ to jednostka urojona ($i^2 = -1$)."
  },
  {
    "id": 71,
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
    "id": 72,
    "category": "2. Mechanika kwantowa II — równanie Schrödingera i tunelowanie",
    "text": "Które ze stwierdzeń poprawnie opisują funkcję falową $\\Psi(x,t)$ i interpretację Maxa Borna?",
    "options": [
      {
        "text": "Kwadrat modułu $|\\Psi(x,t)|^2 = \\Psi^*\\Psi$ jest gęstością prawdopodobieństwa cząstki.",
        "isCorrect": true
      },
      {
        "text": "Całka $\\int_{-\\infty}^{+\\infty}|\\Psi|^2 dx = 1$ wyraża warunek normalizacji funkcji falowej.",
        "isCorrect": true
      },
      {
        "text": "Sama funkcja falowa $\\Psi(x,t)$ jest zespolona i nie jest bezpośrednio mierzalna.",
        "isCorrect": true
      },
      {
        "text": "Wielkość $|\\Psi(x,t)|^2$ wyznacza dokładny klasyczny tor ruchu cząstki w czasie.",
        "isCorrect": false
      }
    ],
    "explanation": "Według interpretacji statystycznej Borna funkcja falowa $\\Psi$ jest zespolona i niemierzalna bezpośrednio, natomiast $\\rho = |\\Psi|^2 = \\Psi^*\\Psi$ oznacza gęstość prawdopodobieństwa (znormalizowaną do $1$). Mechanika kwantowa nie wyznacza klasycznego toru."
  },
  {
    "id": 73,
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
    "id": 74,
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
    "id": 75,
    "category": "2. Mechanika kwantowa II — równanie Schrödingera i tunelowanie",
    "text": "Które ze stwierdzeń na temat pakietu falowego w mechanice kwantowej są prawdziwe?",
    "options": [
      {
        "text": "Jest superpozycją (złożeniem) wielu fal płaskich o różnych pędach i częstotliwościach.",
        "isCorrect": true
      },
      {
        "text": "Reprezentuje cząstkę zlokalizowaną w ograniczonym obszarze przestrzeni ($\\Delta x < \\infty$).",
        "isCorrect": true
      },
      {
        "text": "Pojedyncza fala płaska o jednym pędzie jest zlokalizowana w jednym punkcie przestrzeni.",
        "isCorrect": false
      },
      {
        "text": "Im węższy pakiet w przestrzeni, tym mniejszy jest rozrzut pędów $\\Delta p$ fal składowych.",
        "isCorrect": false
      }
    ],
    "explanation": "Pakiet falowy to złożenie wielu fal płaskich skupione w ograniczonym obszarze przestrzeni. Pojedyncza fala płaska rozciąga się w nieskończoność ($\\Delta x = \\infty$), a z zasady Heisenberga im węższy pakiet ($\\Delta x$ małe), tym szerszy zakres pędów ($\\Delta p$ duże) trzeba złożyć."
  },
  {
    "id": 76,
    "category": "2. Mechanika kwantowa II — równanie Schrödingera i tunelowanie",
    "text": "Które z poniższych stwierdzeń poprawnie opisują zasadę nieoznaczoności Heisenberga?",
    "options": [
      {
        "text": "Wyraża się nierównościami $\\Delta x\\,\\Delta p_x \\ge \\hbar/2$ oraz $\\Delta E\\,\\Delta t \\ge \\hbar/2$ (prawo natury).",
        "isCorrect": true
      },
      {
        "text": "Jest fundamentalnym ograniczeniem, którego nie obejdzie żadna aparatura.",
        "isCorrect": true
      },
      {
        "text": "Zakazuje jednoczesnego pomiaru składowej pędu $p_x$ oraz współrzędnej $y$.",
        "isCorrect": false
      },
      {
        "text": "Wynika wyłącznie z technicznej niedokładności współczesnych przyrządów.",
        "isCorrect": false
      }
    ],
    "explanation": "Zasada nieoznaczoności Heisenberga ($\\Delta x\\,\\Delta p_x \\ge \\hbar/2$, $\\Delta E\\,\\Delta t \\ge \\hbar/2$) to fundamentalne prawo natury, a nie błąd aparatury. Nie dotyczy jednak różnych składowych prostopadłych — $p_x$ i $y$ można zmierzyć jednocześnie."
  },
  {
    "id": 77,
    "category": "2. Mechanika kwantowa II — równanie Schrödingera i tunelowanie",
    "text": "Które pary wielkości fizycznych SĄ związane zasadą nieoznaczoności Heisenberga (zgodnie ze slajdem wykładowym)?",
    "options": [
      {
        "text": "Położenie wzdłuż osi $x$ ($x$) oraz składowa pędu wzdłuż osi $x$ ($p_x$).",
        "isCorrect": true
      },
      {
        "text": "Energia stanu kwantowego ($E$) oraz czas trwania tego stanu ($t$).",
        "isCorrect": true
      },
      {
        "text": "Moment pędu ($L$) oraz kąt ($\\theta$), a także moment bezwładności ($I$) i $\\omega$.",
        "isCorrect": true
      },
      {
        "text": "Składowa pędu wzdłuż osi $x$ ($p_x$) oraz położenie wzdłuż osi $y$ ($y$).",
        "isCorrect": false
      }
    ],
    "explanation": "Na slajdach 8–9 wykładu EFW2 jako pary związane nieoznaczonością podano: $(x, p_x)$, $(E, t)$, $(L, \\theta)$ oraz $(I, \\omega)$. Zasada nieoznaczoności NIE obowiązuje dla różnych składowych pędu i położenia, takich jak $p_x$ i $y$."
  },
  {
    "id": 78,
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
    "id": 79,
    "category": "2. Mechanika kwantowa II — równanie Schrödingera i tunelowanie",
    "text": "Które ze stwierdzeń należą do założeń interpretacji kopenhaskiej mechaniki kwantowej?",
    "options": [
      {
        "text": "Opiera się na nieoznaczoności Heisenberga i zasadzie komplementarności Bohra.",
        "isCorrect": true
      },
      {
        "text": "Zawiera statystyczną interpretację kwadratu funkcji falowej Maxa Borna.",
        "isCorrect": true
      },
      {
        "text": "Sam pomiar wybiera jeden konkretny wynik spośród prawdopodobnych możliwości.",
        "isCorrect": true
      },
      {
        "text": "Zakłada, że każda cząstka ma równocześnie ściśle określony tor i naturę fali.",
        "isCorrect": false
      }
    ],
    "explanation": "Interpretacja kopenhaska (EFW2 s. 10) opiera się na trzech filarach: nieoznaczoności Heisenberga, komplementarności Bohra (nie opisuje się zjawisk równocześnie jako cząstek i fal) oraz statystycznej interpretacji Borna; pomiar wybiera wynik spośród możliwych."
  },
  {
    "id": 80,
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
    "id": 81,
    "category": "2. Mechanika kwantowa II — równanie Schrödingera i tunelowanie",
    "text": "Które z poniższych cech opisują cząstkę swobodną ($V = 0$ w całej przestrzeni) w mechanice kwantowej?",
    "options": [
      {
        "text": "Jej widmo energii całkowitej jest ciągłe i nieujemne ($E = p^2/(2m) \\ge 0$).",
        "isCorrect": true
      },
      {
        "text": "Jej równanie stacjonarne ma postać oscylatora: $\\psi''(x) + k^2\\psi(x) = 0$.",
        "isCorrect": true
      },
      {
        "text": "Jej funkcja falowa ma postać fali płaskiej z liczbą falową $k = p/\\hbar$.",
        "isCorrect": true
      },
      {
        "text": "Jej poziomy energetyczne są skwantowane i rosną proporcjonalnie do $n^2$.",
        "isCorrect": false
      }
    ],
    "explanation": "Cząstka swobodna ($V = 0$) nie ma warunków brzegowych, więc jej widmo energii jest ciągłe ($E \\ge 0$), równanie stacjonarne przyjmuje postać równania oscylatora harmonicznego $\\psi'' + k^2\\psi = 0$ ($k^2 = 2mE/\\hbar^2$), a rozwiązaniem są fale płaskie $Ae^{ikx} + Be^{-ikx}$. Kwantowanie $\\propto n^2$ dotyczy nieskończonej studni potencjału."
  },
  {
    "id": 82,
    "category": "2. Mechanika kwantowa II — równanie Schrödingera i tunelowanie",
    "text": "Które ze stwierdzeń poprawnie opisują zachowanie cząstki w jednowymiarowej nieskończonej studni potencjału $[0, L]$?",
    "options": [
      {
        "text": "Poza studnią funkcja falowa wynosi zero, a na jej ściankach $\\psi(0) = \\psi(L) = 0$.",
        "isCorrect": true
      },
      {
        "text": "Wewnątrz studni powstają fale stojące o gęstości $|\\psi_n|^2$ z $n$ maksimami i $n-1$ węzłami.",
        "isCorrect": true
      },
      {
        "text": "Gęstość prawdopodobieństwa jest identyczna i stała w każdym punkcie wewnątrz studni.",
        "isCorrect": false
      },
      {
        "text": "Cząstka może swobodnie przenikać przez nieskończoną ścianę na drodze tunelowania.",
        "isCorrect": false
      }
    ],
    "explanation": "W nieskończonej studni ($V = \\infty$ na zewnątrz) brak tunelowania: $\\psi = 0$ poza studnią i $\\psi(0) = \\psi(L) = 0$. Wewnątrz powstają fale stojące $\\sqrt{2/L}\\sin(n\\pi x/L)$, więc $|\\psi_n|^2$ ma charakter falowy ($n$ maksimów i $n-1$ węzłów), a nie stały."
  },
  {
    "id": 83,
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
    "id": 84,
    "category": "2. Mechanika kwantowa II — równanie Schrödingera i tunelowanie",
    "text": "Które ze stwierdzeń dotyczących energii cząstki w jednowymiarowej nieskończonej studni potencjału są prawdziwe?",
    "options": [
      {
        "text": "Poziomy energii są dyskretne i wyrażają się wzorem $E_n = n^2 h^2 / (8mL^2) = n^2 E_1$.",
        "isCorrect": true
      },
      {
        "text": "Minimalna energia w stanie podstawowym ($n = 1$) jest niezerowa (energia punktu zerowego).",
        "isCorrect": true
      },
      {
        "text": "Poszerzenie studni (wzrost szerokości $L$) powoduje obniżenie poziomów energetycznych.",
        "isCorrect": true
      },
      {
        "text": "Dla $n = 0$ cząstka spoczywa spokojnie na dnie studni z całkowitą energią $E_0 = 0$.",
        "isCorrect": false
      }
    ],
    "explanation": "Dla nieskończonej studni $E_n = \\frac{n^2 h^2}{8mL^2}$ dla $n = 1, 2, 3, \\dots$ Wartość $n = 0$ daje $\\psi \\equiv 0$ (brak cząstki) i jest wykluczona — minimalna energia $E_1 > 0$ wynika też z zasady nieoznaczoności Heisenberga. Wzrost szerokości $L$ obniża energię ($\\propto 1/L^2$)."
  },
  {
    "id": 85,
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
    "id": 86,
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
    "id": 87,
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
    "id": 88,
    "category": "2. Mechanika kwantowa II — równanie Schrödingera i tunelowanie",
    "text": "Które ze stwierdzeń na temat kropek kwantowych (quantum dots) są prawdziwe?",
    "options": [
      {
        "text": "Stanowią trójwymiarową studnię potencjału ograniczającą elektrony w skali nanometrów.",
        "isCorrect": true
      },
      {
        "text": "Znajdują zastosowanie w wyświetlaczach QLED oraz w medycynie do znakowania komórek.",
        "isCorrect": true
      },
      {
        "text": "Ich rozmiar musi być znacznie większy niż jeden centymetr, by zaszło kwantowanie.",
        "isCorrect": false
      },
      {
        "text": "Są podstawowym elementem telewizorów plazmowych opartych na wyładowaniach w gazie.",
        "isCorrect": false
      }
    ],
    "explanation": "Kropka kwantowa to nanostruktura półprzewodnikowa o rozmiarach rzędu nanometrów (porównywalnych z $\\lambda$ elektronu), działająca jak 3D studnia potencjału. Stosowana w ekranach QLED i medycynie — nie w telewizorach plazmowych."
  },
  {
    "id": 89,
    "category": "2. Mechanika kwantowa II — równanie Schrödingera i tunelowanie",
    "text": "Które ze stwierdzeń poprawnie opisują zachowanie cząstki padającej na prostokątną barierę potencjału o wysokości $V_0$ i skończonej szerokości $L$?",
    "options": [
      {
        "text": "Cząstka o energii $E < V_0$ ma niezerowe prawdopodobieństwo przetunelowania przez barierę.",
        "isCorrect": true
      },
      {
        "text": "Wewnątrz bariery funkcja falowa cząstki o $E < V_0$ nie znika skokowo, lecz zanika wykładniczo.",
        "isCorrect": true
      },
      {
        "text": "Nawet cząstka o energii większej niż bariera ($E > V_0$) może się od niej odbić kwantowo.",
        "isCorrect": true
      },
      {
        "text": "Dla każdej energii $E < V_0$ prawdopodobieństwo przejścia przez skończoną barierę wynosi zero.",
        "isCorrect": false
      }
    ],
    "explanation": "W mechanice kwantowej dla bariery o skończonej szerokości $L$: cząstka o $E < V_0$ ma wykładniczo zanikającą funkcję falową w barierze i niezerowe prawdopodobieństwo tunelowania, a ponadto nawet dla $E > V_0$ cząstka może ulec odbiciu (EFW2 s. 18)."
  },
  {
    "id": 90,
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
    "id": 91,
    "category": "2. Mechanika kwantowa II — równanie Schrödingera i tunelowanie",
    "text": "Jakie czynniki ZWIĘKSZAJĄ prawdopodobieństwo tunelowania kwantowego (transmisji $T$) cząstki o energii $E < V_0$ przez prostokątną barierę?",
    "options": [
      {
        "text": "Zmniejszenie szerokości (grubości) prostokątnej bariery potencjału $L$.",
        "isCorrect": true
      },
      {
        "text": "Zmniejszenie masy cząstki $m$ (lżejsze cząstki tunelują znacznie łatwiej).",
        "isCorrect": true
      },
      {
        "text": "Zbliżenie energii cząstki $E$ do wysokości bariery $V_0$ (mniejsze $V_0 - E$).",
        "isCorrect": true
      },
      {
        "text": "Zwiększenie wysokości bariery $V_0$ oraz poszerzenie jej grubości $L$.",
        "isCorrect": false
      }
    ],
    "explanation": "Ponieważ $T \\propto e^{-2\\kappa L}$ z $\\kappa = \\sqrt{2m(V_0-E)}/\\hbar$, prawdopodobieństwo tunelowania rośnie wykładniczo przy zmniejszeniu szerokości $L$, masy $m$ oraz deficytu energii $(V_0 - E)$."
  },
  {
    "id": 92,
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
    "id": 93,
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
    "id": 94,
    "category": "2. Mechanika kwantowa II — równanie Schrödingera i tunelowanie",
    "text": "Które stwierdzenia na temat skaningowego mikroskopu tunelowego (STM) oraz innych technicznych skutków tunelowania są prawdziwe?",
    "options": [
      {
        "text": "W STM prąd tunelowy zależy wykładniczo od odległości ostrza od próbki ($I \\propto e^{-\\Delta x}$).",
        "isCorrect": true
      },
      {
        "text": "Tunelowanie wywołuje niepożądane prądy upływu przez cienkie tlenki w układach VLSI.",
        "isCorrect": true
      },
      {
        "text": "Dzięki tunelowaniu prąd płynie przez styki przewodów Al mimo izolującej warstewki tlenku.",
        "isCorrect": true
      },
      {
        "text": "Mikroskop STM wymaga bezpośredniego mechanicznego nacisku ostrza na jądra atomowe.",
        "isCorrect": false
      }
    ],
    "explanation": "Wszystkie trzy pierwsze punkty to konkretne przykłady ze slajdów 19–20 wykładu EFW2 (STM obrazuje bez dotykania próbki dzięki czułości $I \\propto e^{-\\Delta x}$, prądy upływu w VLSI, tunelowanie przez warstwę tlenku glinu na przewodach Al, złącze Josephsona, pamięć Flash)."
  },
  {
    "id": 95,
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
    "id": 96,
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
    "id": 97,
    "category": "2. Mechanika kwantowa II — równanie Schrödingera i tunelowanie",
    "text": "Przy separacji zmiennych $\\Psi(x,t) = \\psi(x)f(t)$ w równaniu Schrödingera dla potencjału $V(x)$ otrzymujemy stałą separacji $E$. Jaka jest częstość kołowa $\\omega$ części czasowej $f(t) = e^{-i\\omega t}$?",
    "options": [
      {
        "text": "$\\omega = E / \\hbar$, zgodnie z kwantową relacją Plancka $E = \\hbar\\omega$.",
        "isCorrect": true
      },
      {
        "text": "$\\omega = E \\cdot \\hbar$, ponieważ energia maleje liniowo ze wzrostem $\\omega$.",
        "isCorrect": false
      },
      {
        "text": "$\\omega = \\hbar / E$, ponieważ wyższa energia daje wolniejsze drgania fazy.",
        "isCorrect": false
      },
      {
        "text": "$\\omega = 2mE / \\hbar^2$, dokładnie jak kwadrat liczby falowej $k^2$.",
        "isCorrect": false
      }
    ],
    "explanation": "Wstawiając $f(t) = e^{-i\\omega t}$ do równania $i\\hbar \\frac{df}{dt} = E f(t)$, otrzymujemy $i\\hbar(-i\\omega) = \\hbar\\omega = E$, czyli $\\omega = E/\\hbar$ (zgodnie z $E = h\\nu = 2\\pi\\hbar\\nu = \\hbar\\omega$, EFW2 s. 3)."
  },
  {
    "id": 98,
    "category": "2. Mechanika kwantowa II — równanie Schrödingera i tunelowanie",
    "text": "Które ze stwierdzeń na temat matematycznych właściwości równania Schrödingera są prawdziwe?",
    "options": [
      {
        "text": "Jest liniowe, więc kombinacja liniowa dwóch rozwiązań także jest rozwiązaniem (superpozycja).",
        "isCorrect": true
      },
      {
        "text": "Zawiera pierwszą pochodną po czasie oraz drugą pochodną po współrzędnych przestrzennych.",
        "isCorrect": true
      },
      {
        "text": "Jest nieliniowe względem $\\Psi$, co wyklucza istnienie superpozycji stanów kwantowych.",
        "isCorrect": false
      },
      {
        "text": "Jego rozwiązania dla cząstki w ruchu muszą być zawsze funkcjami wyłącznie rzeczywistymi.",
        "isCorrect": false
      }
    ],
    "explanation": "Równanie Schrödingera jest liniowym równaniem różniczkowym cząstkowym 2. rzędu w przestrzeni i 1. rzędu w czasie, a jego rozwiązania są na ogół funkcjami zespolonymi ($\\Psi \\in \\mathbb{C}$). Liniowość równania jest podstawą kwantowej zasady superpozycji."
  },
  {
    "id": 99,
    "category": "2. Mechanika kwantowa II — równanie Schrödingera i tunelowanie",
    "text": "Cząstka znajduje się w stanie stacjonarnym $\\Psi(x,t) = \\psi(x)e^{-iEt/\\hbar}$. Jeśli w chwili $t = 0$ gęstość prawdopodobieństwa w punkcie $x_0$ wynosi $\\rho_0$, ile będzie wynosić w tym samym punkcie po czasie $t = 10\\text{ s}$?",
    "options": [
      {
        "text": "Dokładnie $\\rho_0$, ponieważ $|e^{-iEt/\\hbar}|^2 = 1$ i gęstość jest stała.",
        "isCorrect": true
      },
      {
        "text": "Wyniesie $\\rho_0 e^{-10E/\\hbar}$, ponieważ stan stacjonarny zanika w czasie.",
        "isCorrect": false
      },
      {
        "text": "Wyniesie zero, ponieważ cząstka rozpływa się całkowicie w przestrzeni.",
        "isCorrect": false
      },
      {
        "text": "Będzie oscylować między $0$ a $\\rho_0$ ze stałym okresem równym $T = h/E$.",
        "isCorrect": false
      }
    ],
    "explanation": "W stanie stacjonarnym gęstość prawdopodobieństwa wynosi $|\\Psi(x,t)|^2 = \\psi^*(x)e^{+iEt/\\hbar}\\psi(x)e^{-iEt/\\hbar} = |\\psi(x)|^2$. Czynnik czasowy ma moduł zawsze równy $1$, więc rozkład prawdopodobieństwa nie zmienia się w czasie (EFW2 s. 4)."
  },
  {
    "id": 100,
    "category": "2. Mechanika kwantowa II — równanie Schrödingera i tunelowanie",
    "text": "Które uzasadnienia warunków stawianych poprawnej funkcji falowej $\\Psi(x)$ (EFW2 s. 7) są poprawne?",
    "options": [
      {
        "text": "Funkcja musi być wszędzie skończona, aby uniknąć nieskończonego prawdopodobieństwa.",
        "isCorrect": true
      },
      {
        "text": "Funkcja musi być jednowartościowa, aby prawdopodobieństwo w punkcie było jednoznaczne.",
        "isCorrect": true
      },
      {
        "text": "Dla skończonego potencjału $\\Psi$ i $\\partial\\Psi/\\partial x$ muszą być ciągłe, by istniała $\\partial^2\\Psi/\\partial x^2$.",
        "isCorrect": true
      },
      {
        "text": "Funkcja musi być nieciągła na granicach obszarów, aby mogło zajść zjawisko tunelowania.",
        "isCorrect": false
      }
    ],
    "explanation": "Wszystkie trzy pierwsze uzasadnienia pochodzą wprost ze slajdu 7 wykładu EFW2. Ciągłość funkcji falowej i jej pierwszej pochodnej na granicach skończonej bariery jest właśnie warunkiem zszywania rozwiązań w problemie tunelowania!"
  },
  {
    "id": 101,
    "category": "2. Mechanika kwantowa II — równanie Schrödingera i tunelowanie",
    "text": "Zgodnie z zasadą nieoznaczoności Heisenberga ($\\Delta x \\cdot \\Delta p_x \\ge \\hbar/2$), jak zmieni się minimalna możliwa nieoznaczoność pędu $\\Delta p_x$ cząstki, jeżeli jej położenie zlokalizujemy w obszarze DWUKROTNIE węższym ($\\Delta x' = \\Delta x / 2$)?",
    "options": [
      {
        "text": "Wzrośnie co najmniej dwukrotnie, ponieważ iloczyn $\\Delta x \\cdot \\Delta p_x$ ma dolne ograniczenie.",
        "isCorrect": true
      },
      {
        "text": "Zmaleje dwukrotnie, ponieważ dokładniejsze położenie oznacza również dokładniejszy pęd.",
        "isCorrect": false
      },
      {
        "text": "Wzrośnie czterokrotnie, ponieważ nieoznaczoność zależy od kwadratu szerokości $\\Delta x^2$.",
        "isCorrect": false
      },
      {
        "text": "Pozostanie bez zmian, ponieważ pęd i położenie wzdłuż osi $x$ są całkowicie niezależne.",
        "isCorrect": false
      }
    ],
    "explanation": "Z relacji $\\Delta p_x \\ge \\frac{\\hbar}{2\\Delta x}$ wynika odwrotna proporcjonalność: dwukrotne zmniejszenie nieoznaczoności położenia $\\Delta x$ wymusza co najmniej dwukrotny wzrost minimalnej nieoznaczoności pędu $\\Delta p_x$ wzdłuż tej samej osi."
  },
  {
    "id": 102,
    "category": "2. Mechanika kwantowa II — równanie Schrödingera i tunelowanie",
    "text": "Co wynika z relacji nieoznaczoności czas–energia ($\\Delta E \\cdot \\Delta t \\ge \\hbar/2$) dla krótkożyciowego stanu wzbudzonego atomu lub jądra?",
    "options": [
      {
        "text": "Im krótszy czas życia $\\Delta t$ stanu, tym większa naturalna nieoznaczoność (szerokość) jego energii $\\Delta E$.",
        "isCorrect": true
      },
      {
        "text": "Im krótszy czas życia $\\Delta t$ stanu, tym węższa i dokładniej określona jest jego energia $\\Delta E$.",
        "isCorrect": false
      },
      {
        "text": "Stany o bardzo krótkim czasie życia $\\Delta t$ mają zawsze dokładnie zerową nieoznaczoność energii.",
        "isCorrect": false
      },
      {
        "text": "Relacja czas–energia pozwala na dowolnie długie łamanie zasady zachowania energii bez ograniczeń.",
        "isCorrect": false
      }
    ],
    "explanation": "Ponieważ $\\Delta E \\ge \\frac{\\hbar}{2\\Delta t}$, stan o nieskończenie długim czasie życia (np. stan podstawowy) ma ostro określoną energię ($\\Delta E \\to 0$), natomiast stan wzbudzony o bardzo krótkim czasie życia $\\Delta t$ ma nieuchronnie rozmytą energię (naturalne poszerzenie linii widmowej $\\Delta E$)."
  },
  {
    "id": 103,
    "category": "2. Mechanika kwantowa II — równanie Schrödingera i tunelowanie",
    "text": "Które ze stwierdzeń poprawnie opisują związek szerokości pakietu falowego $\\Delta x$ ze składem falowym $\\Delta p$ (EFW2 s. 8)?",
    "options": [
      {
        "text": "Bardzo małe $\\Delta p$ odpowiada pojedynczej fali płaskiej rozciągniętej szeroko w przestrzeni.",
        "isCorrect": true
      },
      {
        "text": "Duże $\\Delta p$ odpowiada złożeniu wielu fal, co daje wąski, zlokalizowany pakiet falowy.",
        "isCorrect": true
      },
      {
        "text": "Złożenie coraz większej liczby fal o różnych pędach coraz mocniej rozmywa pakiet falowy.",
        "isCorrect": false
      },
      {
        "text": "Jedna czysta fala sinusoidalna ma jednocześnie $\\Delta x = 0$ oraz dokładnie $\\Delta p = 0$ zawsze.",
        "isCorrect": false
      }
    ],
    "explanation": "Na slajdzie 8 wykładu EFW2 zilustrowano tę kluczową własność fal (transformatę Fouriera): jedna fala to małe $\\Delta p$ i wielkie $\\Delta x$; kilka fal to średnie $\\Delta p$; wiele fal o szerokim zakresie pędów ($\\Delta p$ duże) interferuje konstruktywnie w małym obszarze, dając ostre zlokalizowanie ($\\Delta x$ małe)."
  },
  {
    "id": 104,
    "category": "2. Mechanika kwantowa II — równanie Schrödingera i tunelowanie",
    "text": "Dla cząstki swobodnej ($V = 0$) liczba falowa wyraża się wzorem $k = \\sqrt{2mE}/\\hbar$. Jak zmieni się $k$ oraz długość fali $\\lambda = 2\\pi/k$, gdy energia cząstki wzrośnie czterokrotnie ($E' = 4E$)?",
    "options": [
      {
        "text": "Liczba falowa $k$ wzrośnie dwukrotnie, a długość fali $\\lambda$ zmaleje dwukrotnie.",
        "isCorrect": true
      },
      {
        "text": "Liczba falowa $k$ wzrośnie czterokrotnie, a długość fali $\\lambda$ zmaleje czterokrotnie.",
        "isCorrect": false
      },
      {
        "text": "Liczba falowa $k$ zmaleje dwukrotnie, a długość fali $\\lambda$ wzrośnie dwukrotnie.",
        "isCorrect": false
      },
      {
        "text": "Zarówno liczba falowa $k$, jak i długość fali $\\lambda$ wzrosną dokładnie dwukrotnie.",
        "isCorrect": false
      }
    ],
    "explanation": "Ponieważ $k = \\frac{\\sqrt{2mE}}{\\hbar} \\propto \\sqrt{E}$, czterokrotny wzrost energii $E$ zwiększa liczbę falową $k$ o czynnik $\\sqrt{4} = 2$. Z kolei długość fali $\\lambda = 2\\pi/k$ jest odwrotnie proporcjonalna do $k$, więc maleje dwukrotnie."
  },
  {
    "id": 105,
    "category": "2. Mechanika kwantowa II — równanie Schrödingera i tunelowanie",
    "text": "Które ze stwierdzeń poprawnie interpretują rozwiązanie równania Schrödingera dla cząstki swobodnej $\\Psi(x,t) = A e^{i(kx-\\omega t)} + B e^{-i(kx+\\omega t)}$ (EFW2 s. 12)?",
    "options": [
      {
        "text": "Człon $A e^{i(kx-\\omega t)}$ opisuje falę płaską biegnącą w stronę dodatnich wartości osi $x$ (w prawo).",
        "isCorrect": true
      },
      {
        "text": "Ze wzoru Eulera $e^{ikx} = \\cos kx + i\\sin kx$ rozwiązanie można zapisać też przez funkcje $\\sin$ i $\\cos$.",
        "isCorrect": true
      },
      {
        "text": "Człon $A e^{i(kx-\\omega t)}$ opisuje falę stojącą o zerowej prędkości grupowej w całej przestrzeni.",
        "isCorrect": false
      },
      {
        "text": "Dla cząstki swobodnej stała $k$ może przyjmować wyłącznie dyskretne wartości $k_n = n\\pi/L$.",
        "isCorrect": false
      }
    ],
    "explanation": "W rozwiązaniu dla cząstki swobodnej $k$ jest ciągłe (dyskretne $n\\pi/L$ dotyczy dopiero studni potencjału!). Człon z fazą $(kx - \\omega t)$ to fala biegnąca w prawo, a z $(-kx - \\omega t)$ — w lewo; ze wzoru Eulera odpowiada to kombinacji liniowej funkcji $\\sin(kx)$ i $\\cos(kx)$."
  },
  {
    "id": 106,
    "category": "2. Mechanika kwantowa II — równanie Schrödingera i tunelowanie",
    "text": "W dwóch identycznych jednowymiarowych nieskończonych studniach potencjału o tej samej szerokości $L$ umieszczono osobno cząstkę A o masie $m$ oraz cząstkę B o masie $2m$. Jaki jest stosunek ich energii stanu podstawowego $E_{1,B} / E_{1,A}$?",
    "options": [
      {
        "text": "$E_{1,B} / E_{1,A} = 1/2$, ponieważ $E_1 = h^2/(8mL^2)$ jest odwrotnie proporcjonalna do $m$.",
        "isCorrect": true
      },
      {
        "text": "$E_{1,B} / E_{1,A} = 2$, ponieważ cięższa cząstka ma dwukrotnie wyższą energię punktu zerowego.",
        "isCorrect": false
      },
      {
        "text": "$E_{1,B} / E_{1,A} = 1/4$, ponieważ energia w studni jest odwrotnie proporcjonalna do $m^2$.",
        "isCorrect": false
      },
      {
        "text": "$E_{1,B} / E_{1,A} = 1$, ponieważ poziomy energii w studni zależą wyłącznie od szerokości $L$.",
        "isCorrect": false
      }
    ],
    "explanation": "Ze wzoru $E_n = \\frac{n^2 h^2}{8mL^2}$ energia jest odwrotnie proporcjonalna do pierwszej potęgi masy $m$. Dlatego cięższa cząstka ($2m$) w tej samej studni ma dwukrotnie NIŻSZĄ energię stanu podstawowego ($E_{1,B} = \\frac{1}{2}E_{1,A}$)."
  },
  {
    "id": 107,
    "category": "2. Mechanika kwantowa II — równanie Schrödingera i tunelowanie",
    "text": "Jak zmieniają się odstępy energetyczne $\\Delta E = E_{n+1} - E_n$ między kolejnymi sąsiednimi poziomami w jednowymiarowej nieskończonej studni potencjału wraz ze wzrostem $n$?",
    "options": [
      {
        "text": "Rosną liniowo z $n$ ($3E_1, 5E_1, 7E_1, \\dots$), ponieważ $E_n = n^2 E_1$.",
        "isCorrect": true
      },
      {
        "text": "Są dokładnie stałe i równe $E_1$ dla każdej pary sąsiednich poziomów.",
        "isCorrect": false
      },
      {
        "text": "Maleją szybko ku zeru jak $1/n^3$, dokładnie tak jak w atomie wodoru.",
        "isCorrect": false
      },
      {
        "text": "Rosną wykładniczo jak $2^n E_1$, podwajając się z każdym poziomem.",
        "isCorrect": false
      }
    ],
    "explanation": "Ponieważ w nieskończonej studni $E_n = n^2 E_1$ (poziomy $E_1, 4E_1, 9E_1, 16E_1, \\dots$), różnica między sąsiednimi poziomami wynosi $E_{n+1} - E_n = [(n+1)^2 - n^2]E_1 = (2n + 1)E_1$, czyli ROŚNIE z $n$ ($3E_1, 5E_1, 7E_1, \\dots$) — odwrotnie niż w atomie wodoru!"
  },
  {
    "id": 108,
    "category": "2. Mechanika kwantowa II — równanie Schrödingera i tunelowanie",
    "text": "Cząstka w nieskończonej studni potencjału ma energię stanu podstawowego $E_1 = 1\\text{ eV}$. Ile wynosi energia fotonu wyemitowanego przy przejściu ze stanu $n = 3$ na stan $n = 2$?",
    "options": [
      {
        "text": "$\\Delta E = 5\\text{ eV}$, bo $E_3 - E_2 = 9E_1 - 4E_1 = 5E_1$.",
        "isCorrect": true
      },
      {
        "text": "$\\Delta E = 1\\text{ eV}$, bo sąsiednie poziomy różnią się o $E_1$.",
        "isCorrect": false
      },
      {
        "text": "$\\Delta E = 3\\text{ eV}$, bo różnica wynosi $(3^2 - 2^2)/2 \\cdot E_1$.",
        "isCorrect": false
      },
      {
        "text": "$\\Delta E = 8\\text{ eV}$, bo $E_3 - E_1 = 9E_1 - 1E_1 = 8E_1$.",
        "isCorrect": false
      }
    ],
    "explanation": "W nieskończonej studni potencjału $E_n = n^2 E_1$, zatem $E_3 = 9\\text{ eV}$ oraz $E_2 = 4\\text{ eV}$. Przejście $n = 3 \\to n = 2$ uwalnia foton o energii $\\Delta E = E_3 - E_2 = 9 - 4 = 5\\text{ eV}$."
  },
  {
    "id": 109,
    "category": "2. Mechanika kwantowa II — równanie Schrödingera i tunelowanie",
    "text": "Gdzie w jednowymiarowej nieskończonej studni potencjału $[0, L]$ gęstość prawdopodobieństwa $|\\psi_n(x)|^2$ w punkcie środkowym $x = L/2$ wynosi DOKŁADNIE ZERO?",
    "options": [
      {
        "text": "Dla wszystkich stanów o parzystym $n$ ($n = 2, 4, 6, \\dots$), gdyż $\\sin(n\\pi/2) = 0$.",
        "isCorrect": true
      },
      {
        "text": "Dla wszystkich stanów o nieparzystym $n$ ($n = 1, 3, 5, \\dots$), gdyż $\\sin(n\\pi/2) = 0$.",
        "isCorrect": false
      },
      {
        "text": "Wyłącznie w stanie podstawowym ($n = 1$), gdzie cząstka skupia się przy ścianach.",
        "isCorrect": false
      },
      {
        "text": "W środku studni gęstość prawdopodobieństwa nie wynosi zera dla żadnego $n$.",
        "isCorrect": false
      }
    ],
    "explanation": "Ponieważ $\\psi_n(x) = \\sqrt{2/L}\\sin(n\\pi x/L)$, w środku studni ($x = L/2$) mamy $\\psi_n(L/2) = \\sqrt{2/L}\\sin(n\\pi/2)$. Dla parzystych $n = 2, 4, 6, \\dots$ jest $\\sin(k\\pi) = 0$ (węzeł dokładnie w środku!), natomiast dla nieparzystych $n = 1, 3, 5, \\dots$ jest $|\\sin(n\\pi/2)| = 1$ (maksimum w środku!)."
  },
  {
    "id": 110,
    "category": "2. Mechanika kwantowa II — równanie Schrödingera i tunelowanie",
    "text": "Które ze stwierdzeń poprawnie porównują widmo energii cząstki w nieskończonej studni potencjału oraz elektronu w atomie wodoru?",
    "options": [
      {
        "text": "Oba układy mają dyskretne (skwantowane) poziomy energetyczne dla stanów związanych.",
        "isCorrect": true
      },
      {
        "text": "W studni energie rosną jak $n^2$ (odstępy rosną), a w wodorze jak $-1/n^2$ (odstępy maleją).",
        "isCorrect": true
      },
      {
        "text": "W studni energia jest dodatnia ($E_n > 0$), a w związanym atomie wodoru ujemna ($E_n < 0$).",
        "isCorrect": true
      },
      {
        "text": "W obu układach energia stanu podstawowego $n = 1$ jest dokładnie równa zeru ($E_1 = 0$).",
        "isCorrect": false
      }
    ],
    "explanation": "W nieskończonej studni $E_n = +n^2 E_1 > 0$ (odstępy rosną z $n$), a w atomie wodoru $E_n = -13{,}6\\text{ eV}/n^2 < 0$ (odstępy maleją ku $0$). W żadnym z tych układów stan podstawowy nie ma energii zerowej!"
  },
  {
    "id": 111,
    "category": "2. Mechanika kwantowa II — równanie Schrödingera i tunelowanie",
    "text": "Które ze stwierdzeń poprawnie opisują kwantowanie fali stojącej w jednowymiarowej nieskończonej studni potencjału o szerokości $L$?",
    "options": [
      {
        "text": "Na szerokości studni $L$ mieści się zawsze całkowita liczba półfal: $L = n \\cdot (\\lambda_n / 2)$.",
        "isCorrect": true
      },
      {
        "text": "Dozwolone długości fal wynoszą $\\lambda_n = 2L/n$, a wektory falowe $k_n = n\\pi/L$ ($n=1,2,\\dots$).",
        "isCorrect": true
      },
      {
        "text": "W stanie podstawowym ($n = 1$) na długości studni $L$ mieszczą się dwie pełne długości fali.",
        "isCorrect": false
      },
      {
        "text": "Szerokość studni $L$ może być mniejsza niż połowa długości fali $\\lambda_1$ stanu podstawowego.",
        "isCorrect": false
      }
    ],
    "explanation": "Analogicznie do drgań struny zamocowanej na obu końcach, warunki $\\psi(0) = \\psi(L) = 0$ wymagają, aby $L = n\\frac{\\lambda_n}{2}$, czyli $\\lambda_n = 2L/n$ i $k_n = 2\\pi/\\lambda_n = n\\pi/L$. W stanie podstawowym ($n = 1$) na szerokości $L$ mieści się dokładnie jedna półfala ($\\lambda_1 = 2L$)."
  },
  {
    "id": 112,
    "category": "2. Mechanika kwantowa II — równanie Schrödingera i tunelowanie",
    "text": "Zgodnie z modelem studni potencjału ($E_n \\propto 1/L^2$), jak zmienia się barwa światła emitowanego przez kropki kwantowe wraz ze ZMNIEJSZANIEM ich rozmiaru $L$?",
    "options": [
      {
        "text": "Przesuwa się ku falom krótszym (od czerwieni ku niebieskiemu), bo rosną odstępy poziomów.",
        "isCorrect": true
      },
      {
        "text": "Przesuwa się ku falom dłuższym (od niebieskiego ku czerwieni), bo maleją odstępy poziomów.",
        "isCorrect": false
      },
      {
        "text": "Pozostaje zawsze dokładnie taka sama, bo barwa zależy wyłącznie od temperatury ekranu.",
        "isCorrect": false
      },
      {
        "text": "Zanika całkowicie w zakresie widzialnym i przechodzi w zakres fal radiowych i mikrofal.",
        "isCorrect": false
      }
    ],
    "explanation": "Ponieważ w studni potencjału $E_n \\propto 1/L^2$, zmniejszenie rozmiaru kropki kwantowej $L$ zwiększa odstęp energetyczny $\\Delta E$ między poziomami. Wyższa energia emitowanego fotonu ($\\Delta E = hc/\\lambda$) oznacza krótszą długość fali — mniejsze kropki świecą na niebiesko, a większe na czerwono!"
  },
  {
    "id": 113,
    "category": "2. Mechanika kwantowa II — równanie Schrödingera i tunelowanie",
    "text": "W zagadnieniu tunelowania cząstki padającej z lewej strony przez barierę (obszary I, II, III; EFW2 s. 18), dlaczego w obszarze III (za barierą: $\\psi_{III} = Fe^{ikx} + Ge^{-ikx}$) przyjmujemy $G = 0$?",
    "options": [
      {
        "text": "Bo za barierą cząstka nie ma się od czego odbić i nie może biec z prawej strony w lewo.",
        "isCorrect": true
      },
      {
        "text": "Bo w obszarze III potencjał jest nieskończony i funkcja falowa musi tam całkowicie zniknąć.",
        "isCorrect": false
      },
      {
        "text": "Bo stała $G$ reprezentuje falę biegnącą w prawo, która nie może opuścić bariery potencjału.",
        "isCorrect": false
      },
      {
        "text": "Bo w obszarze III energia cząstki spada do zera i jej wektor falowy $k$ staje się urojony.",
        "isCorrect": false
      }
    ],
    "explanation": "Na slajdzie 18 wykładu EFW2 wyjaśniono wprost: człon $Fe^{ikx}$ to fala przechodząca biegnąca w prawo, a $Ge^{-ikx}$ to fala biegnąca w lewo. Ponieważ za barierą (w obszarze III) potencjał jest stały ($V=0$) i nie ma żadnej przeszkody odbijającej cząstkę z powrotem, musi być $G = 0$."
  },
  {
    "id": 114,
    "category": "2. Mechanika kwantowa II — równanie Schrödingera i tunelowanie",
    "text": "Które ze stwierdzeń poprawnie opisują współczynnik transmisji $T \\approx 16\\frac{E}{V_0}(1 - \\frac{E}{V_0})e^{-2\\kappa L}$ przez szeroką barierę potencjału ($\\kappa L \\gg 1$)?",
    "options": [
      {
        "text": "Definiuje się go jako stosunek gęstości prawdopodobieństwa fali przechodzącej do padającej.",
        "isCorrect": true
      },
      {
        "text": "Stała tłumienia $\\kappa = \\sqrt{2m(V_0 - E)} / \\hbar$ rośnie ze wzrostem masy cząstki $m$ oraz $(V_0 - E)$.",
        "isCorrect": true
      },
      {
        "text": "Dwukrotne poszerzenie $L$ zmniejsza transmisję $T$ nie dwukrotnie, lecz wykładniczo ($e^{-2\\kappa L}$).",
        "isCorrect": true
      },
      {
        "text": "Wzór ten pokazuje, że prawdopodobieństwo tunelowania jest identyczne dla elektronu i protonu.",
        "isCorrect": false
      }
    ],
    "explanation": "Współczynnik transmisji $T = |F|^2 / |A|^2$ to stosunek gęstości prawdopodobieństwa fali przechodzącej do padającej (EFW2 s. 18). Ponieważ $\\kappa \\propto \\sqrt{m(V_0-E)}$, ciężki proton ma wielokrotnie większe $\\kappa$ niż elektron i drastycznie mniejsze $T$."
  },
  {
    "id": 115,
    "category": "2. Mechanika kwantowa II — równanie Schrödingera i tunelowanie",
    "text": "Elektron i proton o TAKIEJ SAMEJ energii kinetycznej $E < V_0$ padają na identyczną prostokątną barierę potencjału o wysokości $V_0$ i szerokości $L$. Która cząstka ma większe prawdopodobieństwo przetunelowania?",
    "options": [
      {
        "text": "Elektron — ma znacznie mniejszą masę $m$, co daje mniejsze $\\kappa$ i dużo większe $e^{-2\\kappa L}$.",
        "isCorrect": true
      },
      {
        "text": "Proton — ma znacznie większą masę $m$ i większy pęd, więc łatwiej przebija barierę potencjału.",
        "isCorrect": false
      },
      {
        "text": "Obie mają dokładnie takie samo prawdopodobieństwo, bo ich energia $E$ i wysokość $V_0$ są równe.",
        "isCorrect": false
      },
      {
        "text": "Żadna z nich nie może przetunelować, bo obie mają energię mniejszą niż wysokość bariery $V_0$.",
        "isCorrect": false
      }
    ],
    "explanation": "W wykładniku tłumienia $\\kappa = \\sqrt{2m(V_0 - E)}/\\hbar$ masa $m$ stoi w liczniku. Ponieważ proton jest ok. $1836\\times$ cięższy od elektronu, jego $\\kappa$ jest ok. $43\\times$ większe, a funkcja wykładnicza $e^{-2\\kappa L}$ jest nieporównanie mniejsza niż dla elektronu."
  },
  {
    "id": 116,
    "category": "2. Mechanika kwantowa II — równanie Schrödingera i tunelowanie",
    "text": "Które wnioski wynikają bezpośrednio z wykresu zależności współczynnika transmisji $T(E/V_0)$ dla bariery potencjału (EFW2 s. 18)?",
    "options": [
      {
        "text": "W obszarze $E/V_0 < 1$ transmisja $T$ jest niezerowa i rośnie monotonicznie ze wzrostem $E/V_0$.",
        "isCorrect": true
      },
      {
        "text": "Dla $E/V_0 > 1$ transmisja $T$ może być mniejsza od $1$ (cząstka może się odbić mimo $E > V_0$).",
        "isCorrect": true
      },
      {
        "text": "Dokładnie dla $E = V_0$ współczynnik transmisji osiąga skokowo wartość $T = 1$ (100%).",
        "isCorrect": false
      },
      {
        "text": "Dla dużych wartości parametru $\\sqrt{2mV_0}L/\\hbar$ transmisja $T$ w obszarze $E < V_0$ rośnie ku $1$.",
        "isCorrect": false
      }
    ],
    "explanation": "Wykres $T(E/V_0)$ ze slajdu 18 EFW2 pokazuje: (1) dla $E < V_0$ mamy niezerowe $T$ rosnące z $E/V_0$ i szybko malejące ze wzrostem parametru szerokości/masy $\\sqrt{2mV_0}L/\\hbar$; (2) dla $E = V_0$ transmisja jest wciąż mniejsza od $1$; (3) dla $E > V_0$ widać kwantowe oscylacje z odbiciami ($T < 1$ poza rezonansami)."
  },
  {
    "id": 117,
    "category": "2. Mechanika kwantowa II — równanie Schrödingera i tunelowanie",
    "text": "Które z poniższych zjawisk w przyrodzie i technice wymagają efektu tunelowania kwantowego (EFW2 s. 19–20)?",
    "options": [
      {
        "text": "Rozpad promieniotwórczy $\\alpha$ ciężkich jąder atomowych oraz fuzja termojądrowa w gwiazdach.",
        "isCorrect": true
      },
      {
        "text": "Tunelowanie par Coopera przez złącze Josephsona oraz działanie diody tunelowej i Flash.",
        "isCorrect": true
      },
      {
        "text": "Działanie mikroskopu STM oraz prądy upływu przez cienkie warstwy izolatora w układach VLSI.",
        "isCorrect": true
      },
      {
        "text": "Klasyczne odbicie światła w zwierciadle płaskim oraz załamanie światła w pryzmacie szklanym.",
        "isCorrect": false
      }
    ],
    "explanation": "Wszystkie trzy pierwsze punkty to zjawiska i technologie oparte na kwantowym tunelowaniu (EFW2 s. 19–20). Odbicie i załamanie światła w makroskopowych lustrach i pryzmatach to klasyczna optyka geometryczna/falowa."
  },
  {
    "id": 118,
    "category": "2. Mechanika kwantowa II — równanie Schrödingera i tunelowanie",
    "text": "Które ze stwierdzeń poprawnie opisują zachowanie przestrzennej funkcji falowej $\\psi(x)$ w obszarze bariery potencjału ($E < V_0$) wobec obszaru swobodnego ($V = 0$)?",
    "options": [
      {
        "text": "Poza barierą ($E > V = 0$) funkcja falowa ma postać oscylującej fali płaskiej ($e^{\\pm ikx}$).",
        "isCorrect": true
      },
      {
        "text": "Wewnątrz bariery ($E < V_0$) funkcja falowa nie oscyluje, lecz zanika wykładniczo ($e^{-\\kappa x}$).",
        "isCorrect": true
      },
      {
        "text": "Wewnątrz bariery ($E < V_0$) amplituda funkcji falowej rośnie wykładniczo do nieskończoności.",
        "isCorrect": false
      },
      {
        "text": "Po wyjściu z bariery w obszar III fala ma mniejszą częstotliwość i znacznie dłuższą falę.",
        "isCorrect": false
      }
    ],
    "explanation": "Poza barierą (obszary I i III, $V = 0$) cząstka ma tę samą energię $E$ i tę samą liczbę falową $k = \\sqrt{2mE}/\\hbar$ (czyli tę samą $\\lambda$ — maleje jedynie amplituda fali!). Wewnątrz bariery ($E < V_0$) rozwiązanie ma charakter wykładniczego zaniku ($e^{-\\kappa x}$)."
  },
  {
    "id": 119,
    "category": "2. Mechanika kwantowa II — równanie Schrödingera i tunelowanie",
    "text": "Jeżeli energia potencjalna cząstki $V(x, t)$ zmienia się w czasie (np. pod wpływem zmiennego zewnętrznego pola elektrycznego), które równanie należy zastosować do opisu jej ewolucji?",
    "options": [
      {
        "text": "Wyłącznie zależne od czasu równanie Schrödingera, bo separacja nie działa.",
        "isCorrect": true
      },
      {
        "text": "Niezależne od czasu równanie Schrödingera ze stałą wartością początkową $V$.",
        "isCorrect": false
      },
      {
        "text": "Wzór na nieskończoną studnię potencjału $E_n = n^2 h^2/(8mL^2)$ z dowolnym $L$.",
        "isCorrect": false
      },
      {
        "text": "Klasyczne równanie Bohra dla orbit kołowych bez wykorzystania funkcji $\\Psi$.",
        "isCorrect": false
      }
    ],
    "explanation": "Separacja zmiennych $\\Psi(x,t) = \\psi(x)f(t)$ prowadząca do równania niezależnego od czasu działa TYLKO wtedy, gdy potencjał $V$ nie zależy od czasu. Gdy $V = V(x, t)$ zależy od czasu, konieczne jest stosowanie pełnego zależnego od czasu równania Schrödingera."
  },
  {
    "id": 120,
    "category": "2. Mechanika kwantowa II — równanie Schrödingera i tunelowanie",
    "text": "Które ze stwierdzeń poprawnie opisują wynik pomiaru w mechanice kwantowej zgodnie z interpretacją Borna i kopenhaską?",
    "options": [
      {
        "text": "Pojedynczy pomiar położenia daje jeden punkt, a rozkład $|\\Psi|^2$ ujawnia się po wielu powtórzeniach.",
        "isCorrect": true
      },
      {
        "text": "Mechanika kwantowa pozwala precyzyjnie obliczać prawdopodobieństwa wyników eksperymentów.",
        "isCorrect": true
      },
      {
        "text": "Znając funkcję falową $\\Psi(x,t)$, możemy dokładnie przewidzieć wynik pojedynczego pomiaru.",
        "isCorrect": false
      },
      {
        "text": "Pomiar w mechanice kwantowej nie ma żadnego wpływu na stan mierzonego układu kwantowego.",
        "isCorrect": false
      }
    ],
    "explanation": "W interpretacji kopenhaskiej i statystycznej Borna nie da się deterministycznie przewidzieć wyniku pojedynczego pomiaru (poza stanem własnym mierzonej wielkości) — równanie Schrödingera wyznacza prawdopodobieństwa ($|\\Psi|^2$), a sam akt pomiaru wybiera jeden konkretny wynik."
  },
  {
    "id": 121,
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
    "id": 122,
    "category": "3. Elementy fizyki atomowej i układ okresowy",
    "text": "Które ze stwierdzeń na temat gęstości prawdopodobieństwa $|\\psi|^2$ i rozkładu radialnego $P(r) = 4\\pi r^2 |R_{nl}(r)|^2$ w atomie wodoru są prawdziwe?",
    "options": [
      {
        "text": "Dla stanów typu $s$ ($l = 0$) gęstość $|\\psi(0)|^2$ w samym jądrze jest niezerowa i maksymalna.",
        "isCorrect": true
      },
      {
        "text": "Radialny rozkład $P(r) = 4\\pi r^2 |\\psi|^2$ zeruje się w $r = 0$ przez czynnik objętości $4\\pi r^2$.",
        "isCorrect": true
      },
      {
        "text": "Niezerowa gęstość $|\\psi(0)|^2$ dla elektronów $s$ umożliwia jądrowy wychwyt elektronu (EC).",
        "isCorrect": true
      },
      {
        "text": "Dla wszystkich stanów ($s, p, d, f$) gęstość prawdopodobieństwa w jądrze wynosi zawsze zero.",
        "isCorrect": false
      }
    ],
    "explanation": "Dla orbitali $s$ ($l=0$) funkcja $R_{n0}(0) \\neq 0$, więc gęstość prawdopodobieństwa $|\\psi(0)|^2$ jest w jądrze maksymalna (co umożliwia wychwyt elektronu z powłoki $K$ lub $L$). Natomiast radialny rozkład $4\\pi r^2 |R_{nl}|^2$ dąży do $0$ przy $r \\to 0$ z powodu czynnika geometrycznego $r^2$."
  },
  {
    "id": 123,
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
    "id": 124,
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
    "id": 125,
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
    "id": 126,
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
    "id": 127,
    "category": "3. Elementy fizyki atomowej i układ okresowy",
    "text": "Które ze stwierdzeń poprawnie opisują kwantowanie orbitalnego momentu pędu elektronu w atomie wodoru?",
    "options": [
      {
        "text": "Wartość bezwzględna wektora orbitalnego momentu pędu wynosi $L = \\hbar\\sqrt{l(l+1)}$.",
        "isCorrect": true
      },
      {
        "text": "Rzut momentu pędu na wyróżnioną oś $z$ jest skwantowany przestrzennie: $L_z = m_l \\hbar$.",
        "isCorrect": true
      },
      {
        "text": "Dla ustalonej liczby $l$ istnieje zawsze parzysta liczba ($2l$) możliwych wartości $m_l$.",
        "isCorrect": false
      },
      {
        "text": "Orbitalny moment pędu może ustawić się dokładnie równolegle do zewnętrznego pola $\\vec{B}$.",
        "isCorrect": false
      }
    ],
    "explanation": "Dla orbitalnego momentu pędu $L = \\hbar\\sqrt{l(l+1)}$ oraz $L_z = m_l\\hbar$. Liczba wartości $m_l$ wynosi $(2l + 1)$ — jest więc ZAWSZE NIEPARZYSTA ($1, 3, 5, \\dots$). Ponieważ $l < \\sqrt{l(l+1)}$, wektor $\\vec{L}$ nigdy nie jest równoległy do pola $\\vec{B}$."
  },
  {
    "id": 128,
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
    "id": 129,
    "category": "3. Elementy fizyki atomowej i układ okresowy",
    "text": "Które ze stwierdzeń na temat orbitalnego momentu magnetycznego elektronu $\\vec{\\mu}_L$ są prawdziwe?",
    "options": [
      {
        "text": "Wyraża się wzorem $\\vec{\\mu}_L = -\\frac{e}{2m_e}\\vec{L}$ i ma zwrot przeciwny do $\\vec{L}$.",
        "isCorrect": true
      },
      {
        "text": "Przeciwny zwrot $\\vec{\\mu}_L$ wobec $\\vec{L}$ wynika z ujemnego ładunku elektronu.",
        "isCorrect": true
      },
      {
        "text": "Jego naturalną jednostką jest magneton Bohra $\\mu_B = e\\hbar/(2m_e)$.",
        "isCorrect": true
      },
      {
        "text": "Wektor $\\vec{\\mu}_L$ ma zwrot zgodny z $\\vec{L}$, tak samo jak dla protonu.",
        "isCorrect": false
      }
    ],
    "explanation": "Elektron ma ładunek ujemny ($-e$), więc jego orbitalny moment magnetyczny $\\vec{\\mu}_L = -\\frac{e}{2m_e}\\vec{L}$ ma zwrot PRZECIWNY do $\\vec{L}$, a jego jednostką jest magneton Bohra $\\mu_B = e\\hbar/(2m_e)$."
  },
  {
    "id": 130,
    "category": "3. Elementy fizyki atomowej i układ okresowy",
    "text": "Które z poniższych stwierdzeń poprawnie opisują efekt Zeemana w spektroskopii atomowej?",
    "options": [
      {
        "text": "Pole magnetyczne $B$ znosi degenerację poziomów względem liczby kwantowej $m_l$.",
        "isCorrect": true
      },
      {
        "text": "W normalnym efekcie Zeemana pojedyncza linia widmowa rozszczepia się na $3$ linie.",
        "isCorrect": true
      },
      {
        "text": "Poziom $1s$ ($l = 0$) ulega w polu magnetycznym rozszczepieniu na trzy podpoziomy.",
        "isCorrect": false
      },
      {
        "text": "Model Bohra w pełni i dokładnie przewidywał efekt Zeemana bez mechaniki kwantowej.",
        "isCorrect": false
      }
    ],
    "explanation": "Pole $B$ wnosi energię $V_B = \\mu_B m_l B$, znosząc degenerację względem $m_l$ (normalny efekt Zeemana daje 3 linie). Poziom $1s$ ma $l = 0$ (tylko $m_l = 0$), więc się NIE rozszczepia, a model Bohra nie potrafił wytłumaczyć efektu Zeemana."
  },
  {
    "id": 131,
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
    "id": 132,
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
    "id": 133,
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
    "id": 134,
    "category": "3. Elementy fizyki atomowej i układ okresowy",
    "text": "Które ze stwierdzeń na temat doświadczenia Sterna-Gerlacha z wiązką atomów srebra są prawdziwe?",
    "options": [
      {
        "text": "Wymaga niejednorodnego pola magnetycznego ($dB/dz \\neq 0$), by na dipol działała wypadkowa siła.",
        "isCorrect": true
      },
      {
        "text": "Atom srebra ma jeden niesparowany elektron walencyjny $5s$ o zerowym orbitalnym momencie ($l=0$).",
        "isCorrect": true
      },
      {
        "text": "Rozszczepienie na parzystą liczbę (dwie) wiązek stanowi bezpośredni dowód na spin $s = 1/2$.",
        "isCorrect": true
      },
      {
        "text": "Rozszczepienie zachodzi tak samo wyraźnie w całkowicie jednorodnym polu magnetycznym.",
        "isCorrect": false
      }
    ],
    "explanation": "W jednorodnym polu magnetycznym wypadkowa siła na dipol magnetyczny wynosi zero — niezbędny jest gradient $dB/dz \\neq 0$. Atom Ag ma $l = 0$ i 1 niesparowany elektron $5s$, a parzysta liczba wiązek ($2 = 2s+1$) dowodzi istnienia połówkowego spinu elektronu ($s = 1/2$)."
  },
  {
    "id": 135,
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
    "id": 136,
    "category": "3. Elementy fizyki atomowej i układ okresowy",
    "text": "Które ze stwierdzeń poprawnie opisują spin elektronu oraz jego związek z momentem magnetycznym?",
    "options": [
      {
        "text": "Spin jest wewnętrznym momentem pędu elektronu o $s = 1/2$ i rzucie $S_z = \\pm\\hbar/2$.",
        "isCorrect": true
      },
      {
        "text": "Spinowy moment magnetyczny $\\vec{\\mu}_s = -g_s\\frac{e}{2m_e}\\vec{S}$ ma zwrot przeciwny do $\\vec{S}$.",
        "isCorrect": true
      },
      {
        "text": "Spinowy czynnik żyromagnetyczny elektronu wynosi $g_s \\approx 2$ (wobec $g_L = 1$).",
        "isCorrect": true
      },
      {
        "text": "Spin elektronu to klasyczny obrót kulki z prędkością powierzchni większą od $c$.",
        "isCorrect": false
      }
    ],
    "explanation": "Spin to fundamentalna cecha kwantowa bez klasycznego odpowiednika wirującej kulki. Dla elektronu $s = 1/2$, $S_z = \\pm\\hbar/2$, $g_s \\approx 2$ (dwukrotnie więcej niż $g_L = 1$), a $\\vec{\\mu}_s$ jest antyrównoległy do $\\vec{S}$."
  },
  {
    "id": 137,
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
    "id": 138,
    "category": "3. Elementy fizyki atomowej i układ okresowy",
    "text": "Które z poniższych stwierdzeń na temat zakazu Pauliego są prawdziwe?",
    "options": [
      {
        "text": "W atomie żadne dwa elektrony nie mogą mieć tego samego zestawu $(n, l, m_l, m_s)$.",
        "isCorrect": true
      },
      {
        "text": "Obowiązuje dla wszystkich fermionów, czyli cząstek o spinie połówkowym ($1/2$).",
        "isCorrect": true
      },
      {
        "text": "Obowiązuje również dla fotonów oraz fononów, blokując zjawisko emisji laserowej.",
        "isCorrect": false
      },
      {
        "text": "Zabrania dwóm elektronom w atomie posiadania tej samej głównej liczby $n$.",
        "isCorrect": false
      }
    ],
    "explanation": "Zakaz Pauliego dotyczy wyłącznie fermionów (spin połówkowy) i wyklucza identyczność WSZYSTKICH czterech liczb $(n,l,m_l,m_s)$ — dwa elektrony mogą mieć tę samą liczbę $n$ (powłokę). Bozony (fotony, fonony) nie podlegają zakazowi Pauliego."
  },
  {
    "id": 139,
    "category": "3. Elementy fizyki atomowej i układ okresowy",
    "text": "Które z poniższych cząstek lub kwazicząstek są BOZONAMI (nie podlegają zakazowi Pauliego)?",
    "options": [
      {
        "text": "Fotony — kwanty pola elektromagnetycznego (spin całkowity).",
        "isCorrect": true
      },
      {
        "text": "Fonony — kwanty drgań sieci krystalicznej (spin całkowity).",
        "isCorrect": true
      },
      {
        "text": "Pary Coopera w nadprzewodnikach (elektrony o przeciwnych spinach).",
        "isCorrect": true
      },
      {
        "text": "Elektrony, protony oraz neutrony (spin połówkowy $s = 1/2$).",
        "isCorrect": false
      }
    ],
    "explanation": "Bozonami (spin całkowity, brak zakazu Pauliego) są fotony, fonony (EFW3 s. 14) oraz pary Coopera w nadprzewodnikach (EFW5). Natomiast elektrony, protony i neutrony mają spin $1/2$ i są fermionami."
  },
  {
    "id": 140,
    "category": "3. Elementy fizyki atomowej i układ okresowy",
    "text": "Które stwierdzenia poprawnie opisują budowę i energetykę atomów wieloelektronowych?",
    "options": [
      {
        "text": "W atomach wieloelektronowych energia zależy zarówno od liczby $n$, jak i od $l$.",
        "isCorrect": true
      },
      {
        "text": "Elektrony o niskim $l$ ekranują jądro, więc elektrony o wysokim $l$ leżą wyżej.",
        "isCorrect": true
      },
      {
        "text": "Przy dodawaniu elektronów zapełniane są najniższe stany zgodnie z zakazem Pauliego.",
        "isCorrect": true
      },
      {
        "text": "W atomach wieloelektronowych poziomy $3s, 3p$ i $3d$ mają identyczną energię.",
        "isCorrect": false
      }
    ],
    "explanation": "W atomach wieloelektronowych elektrony o niskim $l$ wnikają bliżej jądra i ekranują jego ładunek przed elektronami o wysokim $l$ — stąd energia zależy od $n$ oraz $l$ ($E_{3s} < E_{3p} < E_{3d}$), a kolejne elektrony obsadzają najniższe wolne stany według zakazu Pauliego."
  },
  {
    "id": 141,
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
    "id": 142,
    "category": "3. Elementy fizyki atomowej i układ okresowy",
    "text": "Które ze zmian parametrów atomu zachodzą w OBRĘBIE JEDNEGO OKRESU układu okresowego wraz ze wzrostem $Z$ (od lewej do prawej)?",
    "options": [
      {
        "text": "Promień atomowy maleje z powodu rosnącego przyciągania przez większy ładunek jądra.",
        "isCorrect": true
      },
      {
        "text": "Energia jonizacji rośnie, osiągając maksimum w danym okresie dla gazu szlachetnego.",
        "isCorrect": true
      },
      {
        "text": "Wraz ze wzrostem $Z$ w okresie przybywa kolejna nowa powłoka elektronowa o wyższym $n$.",
        "isCorrect": false
      },
      {
        "text": "Promień atomowy gwałtownie rośnie, a energia jonizacji systematycznie spada do zera.",
        "isCorrect": false
      }
    ],
    "explanation": "W obrębie jednego okresu (ze wzrostem $Z$) elektrony zapełniają TĘ SAMĄ powłokę walencyjną (nie przybywa nowych powłok — to dzieje się w dół grupy!). Rosnący ładunek jądra zmniejsza promień atomowy i zwiększa energię jonizacji."
  },
  {
    "id": 143,
    "category": "3. Elementy fizyki atomowej i układ okresowy",
    "text": "Które ze zmian parametrów atomu zachodzą w OBRĘBIE JEDNEJ GRUPY układu okresowego wraz ze wzrostem $Z$ (z góry na dół)?",
    "options": [
      {
        "text": "Promień atomowy rośnie, ponieważ przybywa kolejnych powłok elektronowych o większym $n$.",
        "isCorrect": true
      },
      {
        "text": "Energia jonizacji maleje, ponieważ elektron walencyjny jest dalej i jest lepiej ekranowany.",
        "isCorrect": true
      },
      {
        "text": "Układ elektronów walencyjnych pozostaje taki sam, co daje zbliżone właściwości chemiczne.",
        "isCorrect": true
      },
      {
        "text": "Promień atomowy maleje, a energia jonizacji rośnie aż do maksimum u najcięższego pierwiastka.",
        "isCorrect": false
      }
    ],
    "explanation": "W dół grupy przybywa powłok (rośnie $n$) i ekranowania przez elektrony wewnętrzne, dlatego promień atomowy rośnie, a energia jonizacji maleje. Wspólna konfiguracja walencyjna zapewnia zbliżone właściwości chemiczne pierwiastków w grupie."
  },
  {
    "id": 144,
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
    "id": 145,
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
    "id": 146,
    "category": "3. Elementy fizyki atomowej i układ okresowy",
    "text": "Które z poniższych cech są charakterystyczne dla GAZÓW SZLACHETNYCH (grupa 18)?",
    "options": [
      {
        "text": "Mają całkowicie zapełnione podpowłoki walencyjne oraz bardzo wysoką energię jonizacji.",
        "isCorrect": true
      },
      {
        "text": "Mają zerowy całkowity orbitalny i spinowy moment pędu oraz bardzo niskie temp. wrzenia.",
        "isCorrect": true
      },
      {
        "text": "W temperaturze pokojowej są chemicznie biernymi gazami jednoatomowymi (słabe siły vdW).",
        "isCorrect": true
      },
      {
        "text": "Są bardzo reaktywnymi metalami łatwo oddającymi pojedynczy elektron walencyjny $ns^1$.",
        "isCorrect": false
      }
    ],
    "explanation": "Wszystkie trzy pierwsze cechy wynikają z zamkniętych powłok gazów szlachetnych (EFW3 s. 17). Ostatnia opcja opisuje metale alkaliczne (grupa 1)."
  },
  {
    "id": 147,
    "category": "3. Elementy fizyki atomowej i układ okresowy",
    "text": "Które z poniższych cech są charakterystyczne dla METALI ALKALICZNYCH (grupa 1: Li, Na, K, Rb, Cs)?",
    "options": [
      {
        "text": "Mają zamknięty rdzeń oraz jeden słabo związany elektron walencyjny typu $s$ ($ns^1$).",
        "isCorrect": true
      },
      {
        "text": "Mają najniższą energię jonizacji w okresie i łatwo tworzą jednododatnie kationy ($+1$).",
        "isCorrect": true
      },
      {
        "text": "Cechują się wysoką reaktywnością chemiczną oraz dobrym przewodnictwem elektrycznym.",
        "isCorrect": true
      },
      {
        "text": "Mają całkowicie zapełnioną powłokę walencyjną i nie wchodzą w żadne reakcje z halogenami.",
        "isCorrect": false
      }
    ],
    "explanation": "Metale alkaliczne (grupa 1) mają jeden elektron walencyjny $ns^1$ poza zamkniętym rdzeniem, stąd niska energia jonizacji, wysoka reaktywność (chętnie reagują z halogenami tworząc sole jonowe jak NaCl), kationy $+1$ i dobre przewodnictwo elektryczne."
  },
  {
    "id": 148,
    "category": "3. Elementy fizyki atomowej i układ okresowy",
    "text": "Które z poniższych stwierdzeń poprawnie opisują HALOGENY (fluorowce, grupa 17) oraz METALE ZIEM ALKALICZNYCH (grupa 2)?",
    "options": [
      {
        "text": "Halogenom brakuje jednego elektronu do pełnej powłoki i tworzą silne wiązania jonowe.",
        "isCorrect": true
      },
      {
        "text": "Metale ziem alkalicznych mają $2$ elektrony walencyjne, niską energię jonizacji i są reaktywne.",
        "isCorrect": true
      },
      {
        "text": "Halogeny mają całkowicie zamknięte podpowłoki i są biernymi gazami jednoatomowymi.",
        "isCorrect": false
      },
      {
        "text": "Metale ziem alkalicznych są izolatorami o najwyższej energii jonizacji w okresie.",
        "isCorrect": false
      }
    ],
    "explanation": "Halogeny (grupa 17: F, Cl, Br, I) potrzebują 1 elektronu do zapełnienia powłoki, więc są bardzo reaktywne i łatwo łączą się z metalami alkalicznymi (wiązania jonowe, np. KCl, NaI). Metale ziem alkalicznych (grupa 2) mają 2 łatwo usuwalne elektrony walencyjne, niską energię jonizacji, dobrze przewodzą prąd i są reaktywne (EFW3 s. 17)."
  },
  {
    "id": 149,
    "category": "3. Elementy fizyki atomowej i układ okresowy",
    "text": "Które ze stwierdzeń na temat METALI PRZEJŚCIOWYCH oraz LANTANOWCÓW są prawdziwe?",
    "options": [
      {
        "text": "W metalach przejściowych niesparowane elektrony podpowłoki $d$ są źródłem magnetyzmu (Fe, Co, Ni).",
        "isCorrect": true
      },
      {
        "text": "Podobieństwo chemiczne metali przejściowych determinują głównie zewnętrzne elektrony $s$.",
        "isCorrect": true
      },
      {
        "text": "W lantanowcach niezapełniona podpowłoka $4f$ daje magnetyzm, a zapełniona $6s^2$ zbliżoną chemię.",
        "isCorrect": true
      },
      {
        "text": "Zarówno metale przejściowe, jak i lantanowce są gazami jednoatomowymi w temperaturze pokojowej.",
        "isCorrect": false
      }
    ],
    "explanation": "Na slajdzie 17 wykładu EFW3 podkreślono właśnie ten mechanizm: zewnętrzne elektrony $s$ ($6s^2$ u lantanowców) decydują o zbliżonych właściwościach chemicznych, natomiast niesparowane elektrony w wewnętrznych podpowłokach $d$ (Fe, Co, Ni) oraz $4f$ (lantanowce) odpowiadają za silne właściwości magnetyczne."
  },
  {
    "id": 150,
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
    "id": 151,
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
    "id": 152,
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
    "id": 153,
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
    "id": 154,
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
    "id": 155,
    "category": "3. Elementy fizyki atomowej i układ okresowy",
    "text": "W rozwiązaniu równania Schrödingera dla atomu wodoru wielomian w części radialnej $R_{nl}(r)$ ma stopień $(n - l - 1)$ i dokładnie tyle dodatnich miejsc zerowych (EFW3 s. 6). Ile dodatnich węzłów radialnych ma orbital $3s$ ($n = 3, l = 0$)?",
    "options": [
      {
        "text": "Dokładnie $2$ węzły radialne (ze wzoru $n - l - 1 = 3 - 0 - 1$).",
        "isCorrect": true
      },
      {
        "text": "Dokładnie $3$ węzły radialne (równo głównej liczbie kwantowej $n$).",
        "isCorrect": false
      },
      {
        "text": "Dokładnie $0$ węzłów radialnych (równo liczbie orbitalnej $l = 0$).",
        "isCorrect": false
      },
      {
        "text": "Dokładnie $1$ węzeł radialny (ponieważ każda powłoka ma jeden węzeł).",
        "isCorrect": false
      }
    ],
    "explanation": "Na slajdzie 6 wykładu EFW3 podkreślono własność stowarzyszonego wielomianu Laguerre'a w funkcji radialnej $R_{nl}(r)$: ma on stopień $(n - l - 1)$ i dokładnie $(n - l - 1)$ dodatnich miejsc zerowych (węzłów radialnych). Dla $3s$ ($n=3, l=0$) daje to $3 - 0 - 1 = 2$ węzły (dla $1s, 2p, 3d$ jest $0$ węzłów!)."
  },
  {
    "id": 156,
    "category": "3. Elementy fizyki atomowej i układ okresowy",
    "text": "Dla głównej liczby kwantowej $n = 3$ (powłoka $M$), jakie wartości może przyjąć orbitalna liczba kwantowa $l$ i jakie podpowłoki im odpowiadają?",
    "options": [
      {
        "text": "$l = 0, 1, 2$, czyli dokładnie trzy podpowłoki: $3s$, $3p$ oraz $3d$.",
        "isCorrect": true
      },
      {
        "text": "$l = 1, 2, 3$, czyli dokładnie trzy podpowłoki: $3p$, $3d$ oraz $3f$.",
        "isCorrect": false
      },
      {
        "text": "$l = 0, 1, 2, 3$, czyli dokładnie cztery podpowłoki: $3s, 3p, 3d, 3f$.",
        "isCorrect": false
      },
      {
        "text": "$l = -2, -1, 0, 1, 2$, czyli pięć podpowłok o różnych kształtach.",
        "isCorrect": false
      }
    ],
    "explanation": "Orbitalna liczba kwantowa $l$ przyjmuje wartości całkowite od $0$ do $n - 1$. Dla $n = 3$ są to $l = 0$ ($3s$), $l = 1$ ($3p$) oraz $l = 2$ ($3d$). Podpowłoka $3f$ nie istnieje (bo wymagałaby $l = 3$, co jest możliwe dopiero od $n = 4$)."
  },
  {
    "id": 157,
    "category": "3. Elementy fizyki atomowej i układ okresowy",
    "text": "Ile wynosi wartość bezwzględna orbitalnego momentu pędu $L = \\hbar\\sqrt{l(l+1)}$ elektronu w stanie $2p$ ($l = 1$) oraz w stanie $1s$ ($l = 0$)?",
    "options": [
      {
        "text": "W stanie $2p$: $L = \\sqrt{2}\\,\\hbar$, natomiast w stanie $1s$: $L = 0$.",
        "isCorrect": true
      },
      {
        "text": "W stanie $2p$: $L = 1\\,\\hbar$, natomiast w stanie $1s$: $L = 1\\,\\hbar$.",
        "isCorrect": false
      },
      {
        "text": "W stanie $2p$: $L = \\sqrt{6}\\,\\hbar$, natomiast w stanie $1s$: $L = \\hbar$.",
        "isCorrect": false
      },
      {
        "text": "W stanie $2p$: $L = 2\\,\\hbar$, natomiast w stanie $1s$: $L = 0$.",
        "isCorrect": false
      }
    ],
    "explanation": "Podstawiając do wzoru $L = \\hbar\\sqrt{l(l+1)}$: dla stanu $1s$ ($l = 0$) mamy $L = \\hbar\\sqrt{0 \\cdot 1} = 0$, a dla stanu $2p$ ($l = 1$) mamy $L = \\hbar\\sqrt{1 \\cdot 2} = \\sqrt{2}\\,\\hbar$. Wartość $\\sqrt{6}\\,\\hbar$ odpowiada stanowi $d$ ($l = 2$)."
  },
  {
    "id": 158,
    "category": "3. Elementy fizyki atomowej i układ okresowy",
    "text": "Dla elektronu na podpowłoce $3d$ ($l = 2$, przykład z EFW3 s. 4), jaka jest długość wektora orbitalnego momentu pędu $L$ oraz ile orientacji przestrzennych ($L_z = m_l\\hbar$) może on przyjąć?",
    "options": [
      {
        "text": "$L = \\sqrt{6}\\,\\hbar$ oraz $5$ orientacji ($L_z$ od $-2\\hbar$ do $+2\\hbar$).",
        "isCorrect": true
      },
      {
        "text": "$L = 2\\,\\hbar$ oraz $4$ orientacje ($L_z = \\pm 2\\hbar, \\pm\\hbar$).",
        "isCorrect": false
      },
      {
        "text": "$L = \\sqrt{2}\\,\\hbar$ oraz $3$ orientacje ($L_z = -\\hbar, 0, +\\hbar$).",
        "isCorrect": false
      },
      {
        "text": "$L = \\sqrt{6}\\,\\hbar$ oraz $6$ orientacji ($L_z$ od $-3\\hbar$ do $+3\\hbar$).",
        "isCorrect": false
      }
    ],
    "explanation": "Dla $l = 2$ mamy $L = \\hbar\\sqrt{2(2+1)} = \\sqrt{6}\\,\\hbar$, a magnetyczna liczba kwantowa $m_l$ przyjmuje $2l + 1 = 5$ wartości: $-2, -1, 0, +1, +2$, dając $5$ możliwych rzutów $L_z = m_l\\hbar$."
  },
  {
    "id": 159,
    "category": "3. Elementy fizyki atomowej i układ okresowy",
    "text": "Które ze stwierdzeń poprawnie porównują model Bohra i rozwiązanie równania Schrödingera dla atomu wodoru w stanie podstawowym ($n = 1$)?",
    "options": [
      {
        "text": "Oba modele dają identyczną wartość energii stanu podstawowego $E_1 = -13{,}6\\text{ eV}$.",
        "isCorrect": true
      },
      {
        "text": "Model Bohra daje dla $n=1$ moment pędu $L = \\hbar$, a równanie Schrödingera $L = 0$.",
        "isCorrect": true
      },
      {
        "text": "Oba opisy zakładają, że elektron krąży zawsze po dokładnie określonej orbicie kołowej.",
        "isCorrect": false
      },
      {
        "text": "Równanie Schrödingera daje dwukrotnie większą energię jonizacji wodoru niż Bohr.",
        "isCorrect": false
      }
    ],
    "explanation": "Choć oba modele dają ten sam wzór na poziomy energetyczne $E_n = -13{,}6\\text{ eV}/n^2$, różnią się zasadniczo w opisie momentu pędu i ruchu elektronu: w modelu Bohra stan $n=1$ ma $L = \\hbar$ i kołową orbitę, natomiast w mechanice kwantowej stan $1s$ ma $l = 0 \\Rightarrow L = 0$ i sferyczną chmurę prawdopodobieństwa."
  },
  {
    "id": 160,
    "category": "3. Elementy fizyki atomowej i układ okresowy",
    "text": "Które przyporządkowania symbolu podpowłoki, liczby $l$ oraz maksymalnej pojemności $2(2l + 1)$ są poprawne?",
    "options": [
      {
        "text": "Podpowłoka $s$: $l = 0$, mieści maksymalnie $2$ elektrony.",
        "isCorrect": true
      },
      {
        "text": "Podpowłoka $p$: $l = 1$, mieści maksymalnie $6$ elektronów.",
        "isCorrect": true
      },
      {
        "text": "Podpowłoka $f$: $l = 3$, mieści maksymalnie $14$ elektronów.",
        "isCorrect": true
      },
      {
        "text": "Podpowłoka $d$: $l = 2$, mieści maksymalnie $8$ elektronów.",
        "isCorrect": false
      }
    ],
    "explanation": "Ze wzoru na pojemność podpowłoki $2(2l+1)$ mamy: $s$ ($l=0$) $\\to 2$, $p$ ($l=1$) $\\to 6$, $d$ ($l=2$) $\\to 2\\cdot 5 = 10$ (nie $8$!), $f$ ($l=3$) $\\to 2\\cdot 7 = 14$ elektronów."
  },
  {
    "id": 161,
    "category": "3. Elementy fizyki atomowej i układ okresowy",
    "text": "Ile łącznie elektronów może pomieścić atom mający całkowicie zapełnione wyłącznie dwie pierwsze powłoki ($K$ oraz $L$, czyli $n = 1$ i $n = 2$)?",
    "options": [
      {
        "text": "Łącznie $10$ elektronów ($2$ na powłoce $K$ oraz $8$ na powłoce $L$ — konfiguracja neonu).",
        "isCorrect": true
      },
      {
        "text": "Łącznie $8$ elektronów ($2$ na powłoce $K$ oraz $6$ na powłoce $L$ — konfiguracja tlenu).",
        "isCorrect": false
      },
      {
        "text": "Łącznie $18$ elektronów ($2$ na powłoce $K$ oraz $16$ na powłoce $L$ — konfiguracja argonu).",
        "isCorrect": false
      },
      {
        "text": "Łącznie $6$ elektronów ($2$ na powłoce $K$ oraz $4$ na powłoce $L$ — konfiguracja węgla).",
        "isCorrect": false
      }
    ],
    "explanation": "Pojemność powłoki wynosi $2n^2$: powłoka $K$ ($n=1$) mieści $2\\cdot 1^2 = 2$ elektrony ($1s^2$), a powłoka $L$ ($n=2$) mieści $2\\cdot 2^2 = 8$ elektronów ($2s^2 2p^6$). Razem $2 + 8 = 10$ elektronów — to właśnie konfiguracja gazu szlachetnego neonu ($_{10}\\text{Ne}$)."
  },
  {
    "id": 162,
    "category": "3. Elementy fizyki atomowej i układ okresowy",
    "text": "Ile wynosi wartość całkowita (długość) wektora spinu elektronu $S = \\hbar\\sqrt{s(s+1)}$ dla $s = 1/2$ oraz jak ma się ona do maksymalnego rzutu $S_z$?",
    "options": [
      {
        "text": "$S = \\frac{\\sqrt{3}}{2}\\hbar$ i jest większa od maksymalnego rzutu $|S_z| = \\frac{1}{2}\\hbar$.",
        "isCorrect": true
      },
      {
        "text": "$S = \\frac{1}{2}\\hbar$ i jest równa maksymalnemu rzutowi $|S_z| = \\frac{1}{2}\\hbar$.",
        "isCorrect": false
      },
      {
        "text": "$S = \\sqrt{2}\\,\\hbar$ i jest większa od maksymalnego rzutu $|S_z| = \\frac{\\sqrt{2}}{2}\\hbar$.",
        "isCorrect": false
      },
      {
        "text": "$S = 1\\,\\hbar$ i jest równa orbitalnemu momentowi pędu stanu $1s$.",
        "isCorrect": false
      }
    ],
    "explanation": "Dla elektronu $s = 1/2$, więc $S = \\hbar\\sqrt{\\frac{1}{2}\\cdot\\frac{3}{2}} = \\frac{\\sqrt{3}}{2}\\hbar \\approx 0{,}866\\,\\hbar$, podczas gdy rzut na oś $z$ wynosi $S_z = \\pm\\frac{1}{2}\\hbar = \\pm 0{,}5\\,\\hbar$. Ponieważ $|S_z| < S$, wektor spinu (podobnie jak $\\vec{L}$) nigdy nie jest równoległy do pola $\\vec{B}$."
  },
  {
    "id": 163,
    "category": "3. Elementy fizyki atomowej i układ okresowy",
    "text": "Które zależności poprawnie opisują efekt Zeemana w zewnętrznym jednorodnym polu magnetycznym $B$?",
    "options": [
      {
        "text": "Odstęp energetyczny między sąsiednimi podpoziomami ($\\Delta m_l = 1$) rośnie liniowo z $B$ ($\\mu_B B$).",
        "isCorrect": true
      },
      {
        "text": "Poziom $3d$ ($l = 2$) rozszczepia się w polu magnetycznym na dokładnie $5$ podpoziomów.",
        "isCorrect": true
      },
      {
        "text": "Poziom $2s$ ($l = 0$) rozszczepia się w polu magnetycznym na $2$ podpoziomy orbitalne $m_l$.",
        "isCorrect": false
      },
      {
        "text": "Odstęp energetyczny między rozszczepionymi podpoziomami rośnie jak kwadrat pola $B^2$.",
        "isCorrect": false
      }
    ],
    "explanation": "Energia potencjalna momentu orbitalnego w polu $B$ wynosi $V_B = \\mu_B m_l B$, czyli przesunięcie jest liniowe względem $B$, a liczba podpoziomów wynosi $2l+1$ (dla $3d$: $5$, natomiast dla $2s$ mamy $l=0$, więc tylko $1$ wartość $m_l=0$ — brak orbitalnego rozszczepienia)."
  },
  {
    "id": 164,
    "category": "3. Elementy fizyki atomowej i układ okresowy",
    "text": "Dlaczego w normalnym efekcie Zeemana przejście między poziomami $3d$ ($5$ podpoziomów) a $2p$ ($3$ podpoziomy) daje nadal dokładnie TRZY linie widmowe, a nie piętnaście?",
    "options": [
      {
        "text": "Reguła wyboru dopuszcza tylko $\\Delta m_l = -1, 0, +1$, a przesunięcie zależy wyłącznie od $\\Delta m_l$.",
        "isCorrect": true
      },
      {
        "text": "W polu magnetycznym poziom $3d$ w ogóle nie ulega rozszczepieniu, rozszczepia się tylko $2p$.",
        "isCorrect": false
      },
      {
        "text": "Zakaz Pauliego blokuje dwanaście z piętnastu możliwych przejść między powłokami $3d$ i $2p$.",
        "isCorrect": false
      },
      {
        "text": "Wszystkie fotony o $\\Delta m_l \\neq 0$ są pochłaniane przez jądro w procesie fotodezintegracji.",
        "isCorrect": false
      }
    ],
    "explanation": "Ponieważ w normalnym efekcie Zeemana przesunięcie każdego poziomu wynosi $m_l \\mu_B B$, zmiana energii przy przejściu wynosi $\\Delta E = \\Delta E_0 + (m_{l,i} - m_{l,f})\\mu_B B = \\Delta E_0 + \\Delta m_l \\mu_B B$. Reguła wyboru $\\Delta m_l \\in \\{-1, 0, +1\\}$ ogranicza liczbę różnych częstotliwości do dokładnie trzech!"
  },
  {
    "id": 165,
    "category": "3. Elementy fizyki atomowej i układ okresowy",
    "text": "Które zależności poprawnie opisują rzuty orbitalnego ($\\mu_{Lz}$) i spinowego ($\\mu_{sz}$) momentu magnetycznego elektronu na oś $z$?",
    "options": [
      {
        "text": "Rzut orbitalnego momentu magnetycznego wynosi $\\mu_{Lz} = -m_l \\mu_B$ (czynnik $g_L = 1$).",
        "isCorrect": true
      },
      {
        "text": "Rzut spinowego momentu magnetycznego wynosi $\\mu_{sz} = -g_s m_s \\mu_B \\approx \\mp 1\\,\\mu_B$.",
        "isCorrect": true
      },
      {
        "text": "W obu przypadkach moment magnetyczny ma zwrot przeciwny do momentu pędu.",
        "isCorrect": true
      },
      {
        "text": "Rzut spinowego momentu magnetycznego wynosi dokładnie $\\pm 2\\,\\mu_B$, bo $g_s \\approx 2$.",
        "isCorrect": false
      }
    ],
    "explanation": "Dla spinu elektronu $g_s \\approx 2$ oraz $m_s = \\pm 1/2$, więc iloczyn $g_s m_s \\approx 2 \\cdot (\\pm 1/2) = \\pm 1$ — stąd rzut spinowego momentu magnetycznego ma wartość niemal dokładnie $\\mp 1\\,\\mu_B$ (a nie $\\pm 2\\,\\mu_B$!), z przeciwnym znakiem względem $m_s$."
  },
  {
    "id": 166,
    "category": "3. Elementy fizyki atomowej i układ okresowy",
    "text": "Jaki obraz na ekranie za magnesem zaobserwowaliby Stern i Gerlach w swoim doświadczeniu, gdyby kierunek momentu magnetycznego atomów NIE był skwantowany przestrzennie (przewidywanie klasyczne)?",
    "options": [
      {
        "text": "Jedną ciągłą, rozmytą pionową smugę zamiast dwóch wyraźnie rozdzielonych wiązek.",
        "isCorrect": true
      },
      {
        "text": "Dokładnie trzy ostre plamki odpowiadające klasycznym osiom $x, y$ oraz $z$.",
        "isCorrect": false
      },
      {
        "text": "Jeden punkt dokładnie na środku ekranu bez żadnego odchylenia wiązki atomów.",
        "isCorrect": false
      },
      {
        "text": "Koncentryczne pierścienie dyfrakcyjne identyczne z prawem Bragga dla kryształów.",
        "isCorrect": false
      }
    ],
    "explanation": "W fizyce klasycznej wektory momentów magnetycznych atomów wychodzących z pieca mogą mieć dowolny kąt względem osi pola (ciągły zakres rzutów $\\mu_z$ od $-\\mu$ do $+\\mu$), co dałoby jedną ciągłą, rozmytą plamę. Zaobserwowanie dwóch ostrych wiązek dowiodło kwantowania przestrzennego i istnienia spinu $1/2$."
  },
  {
    "id": 167,
    "category": "3. Elementy fizyki atomowej i układ okresowy",
    "text": "Od jakich dwóch wielkości zależy bezpośrednio siła $F_z$ odchylająca elektrycznie obojętny atom o momencie magnetycznym $\\vec{\\mu}$ w doświadczeniu Sterna-Gerlacha?",
    "options": [
      {
        "text": "Od rzutu momentu magnetycznego $\\mu_z$ oraz gradientu pola magnetycznego $\\partial B / \\partial z$.",
        "isCorrect": true
      },
      {
        "text": "Od ładunku jądra $+Ze$ oraz samej wartości jednorodnej indukcji magnetycznej $B$.",
        "isCorrect": false
      },
      {
        "text": "Od prędkości atomów $v$ oraz natężenia zewnętrznego pola elektrycznego $E$.",
        "isCorrect": false
      },
      {
        "text": "Od masy atomu $M$ oraz odległości między powłokami walencyjnymi w atomie srebra.",
        "isCorrect": false
      }
    ],
    "explanation": "Na dipol magnetyczny w polu $B(z)$ działa siła $F_z = -\\frac{\\partial U}{\\partial z} = \\mu_z \\frac{\\partial B}{\\partial z}$. Siła ta jest proporcjonalna do składowej $\\mu_z$ oraz do niejednorodności (gradientu) pola $\\frac{\\partial B}{\\partial z}$ — w polu jednorodnym ($\\partial B / \\partial z = 0$) siła ta znika."
  },
  {
    "id": 168,
    "category": "3. Elementy fizyki atomowej i układ okresowy",
    "text": "Które powody zdecydowały o użyciu elektrycznie obojętnych atomów SREBRA ($\\text{Ag}$) w doświadczeniu Sterna-Gerlacha zamiast wiązki swobodnych elektronów?",
    "options": [
      {
        "text": "Atomy Ag są obojętne elektrycznie, więc nie odchyla ich silna siła Lorentza $q\\vec{v} \\times \\vec{B}$.",
        "isCorrect": true
      },
      {
        "text": "Atom Ag ma zamknięte powłoki i jeden niesparowany elektron $5s$ o zerowym $l = 0$.",
        "isCorrect": true
      },
      {
        "text": "Swobodne elektrony nie posiadają własnego spinu ani spinowego momentu magnetycznego.",
        "isCorrect": false
      },
      {
        "text": "Atomy srebra mają spin całkowity $s = 1$, co ułatwia ich rozszczepienie na dwie wiązki.",
        "isCorrect": false
      }
    ],
    "explanation": "Na wiązkę swobodnych elektronów w polu magnetycznym działałaby ogromna siła Lorentza ($-e\\vec{v}\\times\\vec{B}$) całkowicie maskująca subtelny efekt gradientowy na spinie. Obojętny atom srebra unika siły Lorentza, a jego 46 elektronów w zamkniętych powłokach znosi się, zostawiając pojedynczy elektron $5s$ ($l = 0$, czysty spin $s = 1/2$)."
  },
  {
    "id": 169,
    "category": "3. Elementy fizyki atomowej i układ okresowy",
    "text": "Które ze stwierdzeń poprawnie opisują konfigurację elektronową atomu żelaza podaną na wykładzie: $_{26}\\text{Fe}: 1s^2 2s^2 2p^6 3s^2 3p^6 4s^2 3d^6$ (EFW3 s. 15)?",
    "options": [
      {
        "text": "Podpowłoka $4s$ zapełnia się przed $3d$, ponieważ elektrony $4s$ są słabiej ekranowane.",
        "isCorrect": true
      },
      {
        "text": "Niesparowane elektrony niepełnej podpowłoki $3d^6$ dają właściwości magnetyczne żelaza.",
        "isCorrect": true
      },
      {
        "text": "Suma wykładników (liczb elektronów na podpowłokach) równa się dokładnie $Z = 26$.",
        "isCorrect": true
      },
      {
        "text": "Podpowłoka $3d^6$ jest całkowicie zapełniona, bo dla $l = 2$ mieści się $6$ elektronów.",
        "isCorrect": false
      }
    ],
    "explanation": "Podpowłoka $d$ ($l = 2$) mieści maksymalnie $2(2l+1) = 10$ elektronów, więc $3d^6$ jest niepełna i zawiera niesparowane momenty magnetyczne (źródło ferromagnetyzmu Fe). Podpowłoka $4s$ ma niższą energię niż $3d$ i zapełnia się wcześniej; $2+2+6+2+6+2+6 = 26$."
  },
  {
    "id": 170,
    "category": "3. Elementy fizyki atomowej i układ okresowy",
    "text": "Dlaczego w atomach wieloelektronowych podpowłoka $4s$ ($n = 4, l = 0$) zapełnia się przed podpowłoką $3d$ ($n = 3, l = 2$)?",
    "options": [
      {
        "text": "Elektrony $s$ ($l = 0$) wnikają bliżej jądra i są słabiej ekranowane niż elektrony $d$ ($l = 2$).",
        "isCorrect": true
      },
      {
        "text": "Elektrony $d$ ($l = 2$) mają większą masę spoczynkową niż elektrony na podpowłoce $s$.",
        "isCorrect": false
      },
      {
        "text": "Zakaz Pauliego zabrania obsadzania podpowłoki $3d$ w pierwiastkach o liczbie $Z < 30$.",
        "isCorrect": false
      },
      {
        "text": "Elektrony $4s$ mają mniejszą główną liczbę kwantową $n$ niż elektrony z podpowłoki $3d$.",
        "isCorrect": false
      }
    ],
    "explanation": "Elektrony o wysokim $l$ (jak $3d, l=2$) spędzają średnio więcej czasu daleko od jądra i są silnie ekranowane przez powłoki wewnętrzne, więc czują mniejszy efektywny ładunek jądra i leżą wyżej energetycznie niż głęboko wnikające elektrony $4s$ ($l=0$, EFW3 s. 15)."
  },
  {
    "id": 171,
    "category": "3. Elementy fizyki atomowej i układ okresowy",
    "text": "Które ze stwierdzeń poprawnie opisują składowe przestrzennej funkcji falowej atomu wodoru $\\Psi_{nlm_l}(r,\\theta,\\varphi) = R_{nl}(r) Y_{lm_l}(\\theta,\\varphi)$ (EFW3 s. 3 i 6)?",
    "options": [
      {
        "text": "Część radialna $R_{nl}(r)$ zależy od liczb kwantowych $n$ oraz $l$ (wielomiany Laguerre'a).",
        "isCorrect": true
      },
      {
        "text": "Harmoniki sferyczne $Y_{lm_l}(\\theta,\\varphi)$ zależą od $l$ oraz $m_l$ i określają kształt orbitalu.",
        "isCorrect": true
      },
      {
        "text": "Część kątowa $Y_{lm_l}(\\theta,\\varphi)$ zależy wyłącznie od głównej liczby kwantowej $n$ w atomie.",
        "isCorrect": false
      },
      {
        "text": "Dla każdego stanu ($s, p, d, f$) funkcja $Y_{lm_l}$ jest stałą niezależną od kątów.",
        "isCorrect": false
      }
    ],
    "explanation": "Po separacji zmiennych sferycznych część radialna $R_{nl}(r)$ zależy od $n$ i $l$, natomiast część kątowa — harmoniki sferyczne $Y_{lm_l}(\\theta,\\varphi)$ — zależy od $l$ i $m_l$ (jest stała i sferycznie symetryczna wyłącznie dla stanów $s$, gdzie $l = 0$)."
  },
  {
    "id": 172,
    "category": "3. Elementy fizyki atomowej i układ okresowy",
    "text": "Które z poniższych przejść elektronowych w atomie wodoru jest DOZWOLONE przez kwantową regułę wyboru $\\Delta l = \\pm 1$?",
    "options": [
      {
        "text": "Przejście $3p \\to 2s$ (zmiana orbitalnej liczby kwantowej $\\Delta l = -1$).",
        "isCorrect": true
      },
      {
        "text": "Przejście $2s \\to 1s$ (zmiana orbitalnej liczby kwantowej $\\Delta l = 0$).",
        "isCorrect": false
      },
      {
        "text": "Przejście $3d \\to 1s$ (zmiana orbitalnej liczby kwantowej $\\Delta l = -2$).",
        "isCorrect": false
      },
      {
        "text": "Przejście $3p \\to 2p$ (zmiana orbitalnej liczby kwantowej $\\Delta l = 0$).",
        "isCorrect": false
      }
    ],
    "explanation": "Przypisując $s \\to l=0, p \\to l=1, d \\to l=2$, wyłącznie przejście $3p \\to 2s$ spełnia warunek $|\\Delta l| = 1$ ($l: 1 \\to 0$). Przejścia $2s \\to 1s$ ($\\Delta l=0$), $3d \\to 1s$ ($\\Delta l=-2$) i $3p \\to 2p$ ($\\Delta l=0$) są dipolowo zabronione (stąd m.in. długi czas życia metastabilnego stanu $2s$)."
  },
  {
    "id": 173,
    "category": "3. Elementy fizyki atomowej i układ okresowy",
    "text": "Które ze stwierdzeń poprawnie opisują skrajne wartości pierwszej energii jonizacji w układzie okresowym pierwiastków?",
    "options": [
      {
        "text": "W okresie minimum energii jonizacji ma metal alkaliczny, a maksimum gaz szlachetny.",
        "isCorrect": true
      },
      {
        "text": "W grupie metali alkalicznych cez ($\\text{Cs}$) ma niższą energię jonizacji niż lit ($\\text{Li}$).",
        "isCorrect": true
      },
      {
        "text": "W grupie gazów szlachetnych radon ($\\text{Rn}$) ma wyższą energię jonizacji niż hel ($\\text{He}$).",
        "isCorrect": false
      },
      {
        "text": "Energia jonizacji metali alkalicznych jest zawsze wyższa niż energia jonizacji halogenów.",
        "isCorrect": false
      }
    ],
    "explanation": "Energia jonizacji rośnie w prawo w okresie (min: metale alkaliczne, max: gazy szlachetne) i maleje w dół grupy (powłoki są dalej od jądra i silniej ekranowane). Zatem $\\text{Cs}$ ma niższą energię jonizacji niż $\\text{Li}$, a $\\text{He}$ (góra gr. 18) ma wyższą niż $\\text{Rn}$ (dół gr. 18)."
  },
  {
    "id": 174,
    "category": "3. Elementy fizyki atomowej i układ okresowy",
    "text": "Spośród czterech pierwiastków tego samego okresu ($n = 2$): litu ($\\text{Li}$), węgla ($\\text{C}$), tlenu ($\\text{O}$) oraz neonu ($\\text{Ne}$), który ma NAJMNIEJSZY promień atomowy i NAJWYŻSZĄ energię jonizacji?",
    "options": [
      {
        "text": "Neon ($\\text{Ne}$, $Z = 10$) — ma największy ładunek jądra w tym okresie i pełną powłokę.",
        "isCorrect": true
      },
      {
        "text": "Lit ($\\text{Li}$, $Z = 3$) — ma najmniejszą liczbę elektronów, więc jest najmniejszy.",
        "isCorrect": false
      },
      {
        "text": "Węgiel ($\\text{C}$, $Z = 6$) — leży dokładnie w połowie drugiego okresu układu.",
        "isCorrect": false
      },
      {
        "text": "Tlen ($\\text{O}$, $Z = 8$) — ma największą liczbę niesparowanych elektronów $p$.",
        "isCorrect": false
      }
    ],
    "explanation": "W obrębie okresu ze wzrostem liczby atomowej $Z$ (od Li do Ne) rośnie przyciąganie kulombowskie jądra przy tej samej powłoce walencyjnej ($n=2$). Dlatego neon ($Z=10$) ma w tym zestawie najmniejszy promień atomowy i najwyższą energię jonizacji."
  },
  {
    "id": 175,
    "category": "3. Elementy fizyki atomowej i układ okresowy",
    "text": "Spośród czterech metali alkalicznych tej samej grupy 1: litu ($\\text{Li}$), sodu ($\\text{Na}$), potasu ($\\text{K}$) i cezu ($\\text{Cs}$), który ma NAJWIĘKSZY promień atomowy i NAJNIŻSZĄ energię jonizacji?",
    "options": [
      {
        "text": "Cez ($\\text{Cs}$, $Z = 55$) — ma najwięcej powłok elektronowych i najsilniejsze ekranowanie.",
        "isCorrect": true
      },
      {
        "text": "Lit ($\\text{Li}$, $Z = 3$) — ma najmniejszy ładunek jądra, więc najsłabiej trzyma elektron.",
        "isCorrect": false
      },
      {
        "text": "Sód ($\\text{Na}$, $Z = 11$) — ma elektron walencyjny dokładnie na środkowej trzeciej powłoce.",
        "isCorrect": false
      },
      {
        "text": "Wszystkie cztery mają identyczny promień i identyczną energię jonizacji w tej grupie.",
        "isCorrect": false
      }
    ],
    "explanation": "Schodząc w dół grupy 1 ($\\text{Li} \\to \\text{Na} \\to \\text{K} \\to \\text{Cs}$), elektron walencyjny $ns^1$ trafia na coraz dalszą powłokę ($2s \\to 6s$) silniej ekranowaną przez rdzeń. Dlatego cez ma największy promień atomowy i najniższą energię jonizacji."
  },
  {
    "id": 176,
    "category": "3. Elementy fizyki atomowej i układ okresowy",
    "text": "Które przyporządkowania zewnętrznej konfiguracji walencyjnej do grupy układu okresowego (EFW3 s. 16–17) są poprawne?",
    "options": [
      {
        "text": "Konfiguracja $ns^1$ (jeden elektron walencyjny $s$) — metale alkaliczne (grupa 1).",
        "isCorrect": true
      },
      {
        "text": "Konfiguracja $ns^2$ (dwa elektrony walencyjne $s$) — metale ziem alkalicznych (grupa 2).",
        "isCorrect": true
      },
      {
        "text": "Konfiguracja $ns^2 np^6$ (zapełnione podpowłoki) — gazy szlachetne (grupa 18, od Ne).",
        "isCorrect": true
      },
      {
        "text": "Konfiguracja $ns^2 np^5$ (brak 1 elektronu do oktetu) — metale przejściowe bloku $d$.",
        "isCorrect": false
      }
    ],
    "explanation": "Konfiguracja $ns^2 np^5$ odpowiada HALOGENOM (fluorowcom, grupa 17), a nie metalom przejściowym (w których zapełniają się podpowłoki $3d, 4d, 5d$). Pozostałe trzy przyporządkowania są całkowicie poprawne."
  },
  {
    "id": 177,
    "category": "3. Elementy fizyki atomowej i układ okresowy",
    "text": "Które ze stwierdzeń poprawnie opisują stopień degeneracji poziomów energetycznych atomu wodoru?",
    "options": [
      {
        "text": "Bez pola magnetycznego poziom $n$ ma stopień degeneracji $2n^2$ (np. dla $n = 2$ to $8$ stanów).",
        "isCorrect": true
      },
      {
        "text": "Umieszczenie atomu w zewnętrznym polu magnetycznym $B$ znosi degenerację względem $m_l$.",
        "isCorrect": true
      },
      {
        "text": "Bez uwzględnienia spinu stopień degeneracji poziomu $n$ wynosiłby $2n$ zamiast $n^2$.",
        "isCorrect": false
      },
      {
        "text": "Poziom podstawowy $n = 1$ ma stopień degeneracji $4$ (po dwa stany na $1s$ oraz $1p$).",
        "isCorrect": false
      }
    ],
    "explanation": "Bez spinu liczba stanów orbitalnych dla danego $n$ wynosi $\\sum_{l=0}^{n-1}(2l+1) = n^2$, a ze spinem $2n^2$ (dla $n=1$: $2$ stany w $1s$, bo $1p$ nie istnieje; dla $n=2$: $8$ stanów). Pole magnetyczne $B$ znosi degenerację względem $m_l$ (efekt Zeemana)."
  },
  {
    "id": 178,
    "category": "3. Elementy fizyki atomowej i układ okresowy",
    "text": "Które ze stwierdzeń poprawnie opisują obsadzenie pojedynczego orbitalu atomowego (ustalone liczby $n, l, m_l$) zgodnie z zakazem Pauliego?",
    "options": [
      {
        "text": "Jeden orbital o ustalonych $(n, l, m_l)$ może pomieścić maksymalnie $2$ elektrony.",
        "isCorrect": true
      },
      {
        "text": "Dwa elektrony na tym samym orbitalu muszą mieć przeciwne spiny ($m_s = +1/2$ i $-1/2$).",
        "isCorrect": true
      },
      {
        "text": "Na jednym orbitalu mogą przebywać nawet $4$ elektrony, jeśli różnią się energią kinetyczną.",
        "isCorrect": false
      },
      {
        "text": "Dwa elektrony na tym samym orbitalu muszą mieć zawsze identyczne liczby spinowe $m_s$.",
        "isCorrect": false
      }
    ],
    "explanation": "Skoro $n, l, m_l$ są już ustalone, jedyną liczbą kwantową mogącą odróżniać elektrony jest $m_s$, która przyjmuje tylko $2$ wartości ($+1/2$ i $-1/2$). Dlatego w jednym orbitalu mieszczą się co najwyżej $2$ elektrony i muszą mieć przeciwne spiny."
  },
  {
    "id": 179,
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
    "id": 180,
    "category": "4. Lasery — fizyka, zasada działania i zastosowania",
    "text": "Które z poniższych procesów należą do trzech elementarnych oddziaływań światła z atomami opisanych przez Einsteina?",
    "options": [
      {
        "text": "Absorpcja wymuszona o częstości proporcjonalnej do $B_{12} N_1 u(\\nu)$.",
        "isCorrect": true
      },
      {
        "text": "Emisja spontaniczna o częstości $A N_2$ (niezależnej od gęstości $u$).",
        "isCorrect": true
      },
      {
        "text": "Emisja wymuszona (stymulowana) o częstości równej $B_{21} N_2 u(\\nu)$.",
        "isCorrect": true
      },
      {
        "text": "Absorpcja spontaniczna zachodząca samorzutnie bez udziału fotonów.",
        "isCorrect": false
      }
    ],
    "explanation": "W obecności promieniowania zachodzą trzy procesy: absorpcja wymuszona ($B_{12}N_1 u$), emisja spontaniczna ($AN_2$) oraz emisja wymuszona ($B_{21}N_2 u$). Nie istnieje absorpcja spontaniczna bez padającego fotonu."
  },
  {
    "id": 181,
    "category": "4. Lasery — fizyka, zasada działania i zastosowania",
    "text": "Które cechy charakteryzują foton wyemitowany w procesie EMISJI WYMUSZONEJ w porównaniu z fotonem wymuszającym?",
    "options": [
      {
        "text": "Ma identyczną częstotliwość ($h\\nu = E_2 - E_1$) oraz zgodną fazę (fotony są spójne).",
        "isCorrect": true
      },
      {
        "text": "Ma dokładnie ten sam kierunek propagacji oraz taką samą polaryzację fali.",
        "isCorrect": true
      },
      {
        "text": "Ma losową fazę i przypadkowy kierunek ruchu jak w emisji spontanicznej.",
        "isCorrect": false
      },
      {
        "text": "Ma zawsze dwukrotnie mniejszą długość fali niż foton inicjujący przejście.",
        "isCorrect": false
      }
    ],
    "explanation": "Emisja wymuszona (stymulowana) tworzy foton będący idealną kopią fotonu wymuszającego: o identycznej częstotliwości (długości fali), fazie, kierunku ruchu i polaryzacji — to zapewnia spójność i wzmocnienie wiązki laserowej."
  },
  {
    "id": 182,
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
    "id": 183,
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
    "id": 184,
    "category": "4. Lasery — fizyka, zasada działania i zastosowania",
    "text": "Które z poniższych właściwości należą do pięciu podstawowych cech światła laserowego?",
    "options": [
      {
        "text": "Wysoka spójność (koherencja) czasowa i przestrzenna oraz monochromatyczność.",
        "isCorrect": true
      },
      {
        "text": "Równoległy bieg promieni (mała rozbieżność) oraz liniowa polaryzacja wiązki.",
        "isCorrect": true
      },
      {
        "text": "Brak możliwości zogniskowania wiązki w plamce mniejszej niż jeden centymetr.",
        "isCorrect": false
      },
      {
        "text": "Ciągłe, szerokie widmo termiczne zgodne z prawem ciała doskonale czarnego.",
        "isCorrect": false
      }
    ],
    "explanation": "Pięć cech światła laserowego to spójność, monochromatyczność, równoległość wiązki, polaryzacja liniowa oraz możliwość zogniskowania w bardzo małej plamce o średnicy rzędu długości fali $\\lambda$ (a nie $\\ge 1\\text{ cm}$!)."
  },
  {
    "id": 185,
    "category": "4. Lasery — fizyka, zasada działania i zastosowania",
    "text": "Które ze stwierdzeń poprawnie opisują spójność światła laserowego wobec światła z emisji spontanicznej?",
    "options": [
      {
        "text": "Spójność czasowa oznacza stałą różnicę faz fal w kolejnych chwilach czasu.",
        "isCorrect": true
      },
      {
        "text": "Spójność przestrzenna oznacza stałą różnicę faz w przekroju poprzecznym wiązki.",
        "isCorrect": true
      },
      {
        "text": "Fotony z emisji spontanicznej mają przypadkowe fazy i nie są ze sobą spójne.",
        "isCorrect": true
      },
      {
        "text": "Spójność światła laserowego polega na tym, że wiązka składa się z wielu różnych barw.",
        "isCorrect": false
      }
    ],
    "explanation": "Spójność (koherencja) obejmuje zarówno spójność czasową, jak i przestrzenną (EFW4 s. 4) i wynika z emisji wymuszonej, podczas gdy emisja spontaniczna daje losowe fazy. Mieszanka wielu barw (szerokie widmo) niszczy spójność czasową."
  },
  {
    "id": 186,
    "category": "4. Lasery — fizyka, zasada działania i zastosowania",
    "text": "Które elementy są niezbędne do zbudowania i działania klasycznego lasera?",
    "options": [
      {
        "text": "Ośrodek czynny (gaz, ciecz lub ciało stałe) z odpowiednimi poziomami energii.",
        "isCorrect": true
      },
      {
        "text": "Układ pompujący dostarczający energię potrzebną do inwersji obsadzeń.",
        "isCorrect": true
      },
      {
        "text": "Rezonator optyczny z lustrem całkowicie odbijającym i lustrem półprzepuszczalnym.",
        "isCorrect": true
      },
      {
        "text": "Moderator spowalniający prędkie neutrony oraz pręty kontrolne z kadmu lub boru.",
        "isCorrect": false
      }
    ],
    "explanation": "Każdy laser składa się z trzech kluczowych części: ośrodka czynnego, układu pompującego i rezonatora optycznego (dwóch luster). Moderator i pręty kontrolne to elementy reaktora jądrowego."
  },
  {
    "id": 187,
    "category": "4. Lasery — fizyka, zasada działania i zastosowania",
    "text": "Które ze stwierdzeń na temat inwersji obsadzeń w laserze są prawdziwe?",
    "options": [
      {
        "text": "Oznacza przewagę liczby atomów na wyższym poziomie nad niższym ($N_2 > N_1$).",
        "isCorrect": true
      },
      {
        "text": "Nie występuje samorzutnie w równowadze termicznej (wymaga pompowania).",
        "isCorrect": true
      },
      {
        "text": "W układzie dwupoziomowym można ją uzyskać bez problemu silną lampą błyskową.",
        "isCorrect": false
      },
      {
        "text": "Oznacza przewagę liczby atomów w stanie podstawowym ($N_1 > N_2$) jak u Boltzmanna.",
        "isCorrect": false
      }
    ],
    "explanation": "Inwersja obsadzeń to stan nierównowagowy $N_2 > N_1$ (w równowadze Boltzmanna zawsze $N_1 > N_2$), wymagający pompowania i co najmniej 3 poziomów energetycznych (w układzie 2-poziomowym $B_{12} = B_{21}$ uniemożliwia uzyskanie $N_2 > N_1$)."
  },
  {
    "id": 188,
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
    "id": 189,
    "category": "4. Lasery — fizyka, zasada działania i zastosowania",
    "text": "Które stwierdzenia poprawnie opisują rolę poziomu METASTABILNEGO ($E_2$) w laserze 3-poziomowym?",
    "options": [
      {
        "text": "Ma stosunkowo długi czas życia ($\\sim 10^{-3}\\text{ s}$ wobec $\\sim 10^{-9}\\text{ s}$ dla $E_3$).",
        "isCorrect": true
      },
      {
        "text": "Umożliwia gromadzenie wzbudzonych atomów i uzyskanie inwersji obsadzeń.",
        "isCorrect": true
      },
      {
        "text": "Jego długi czas życia wynika z reguł wyboru (np. zakazane $\\Delta l = \\pm 1$).",
        "isCorrect": true
      },
      {
        "text": "Służy do natychmiastowej emisji spontanicznej fotonów w losowe kierunki.",
        "isCorrect": false
      }
    ],
    "explanation": "Poziom metastabilny $E_2$ żyje długo ($\\sim 10^{-3}\\text{ s}$, często przez zakaz przejścia spontanicznego regułą wyboru $\\Delta l = \\pm 1$), dzięki czemu gromadzi atomy i buduje inwersję obsadzeń."
  },
  {
    "id": 190,
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
    "id": 191,
    "category": "4. Lasery — fizyka, zasada działania i zastosowania",
    "text": "Które ze stwierdzeń poprawnie opisują działanie rezonatora optycznego (układu luster) w laserze?",
    "options": [
      {
        "text": "Wielokrotne odbicia fotonów wzdłuż osi wywołują lawinową emisję wymuszoną.",
        "isCorrect": true
      },
      {
        "text": "Jedno lustro jest w pełni odbijające, a przez drugie wychodzi ok. $1\\%$–$5\\%$ światła.",
        "isCorrect": true
      },
      {
        "text": "Wyróżnienie osi między lustrami zapewnia znakomitą równoległość wiązki wyjściowej.",
        "isCorrect": true
      },
      {
        "text": "Oba lustra muszą być całkowicie nieprzezroczyste, by żaden foton nie opuścił wnęki.",
        "isCorrect": false
      }
    ],
    "explanation": "Rezonator optyczny składa się ze zwierciadła całkowicie odbijającego oraz półprzepuszczalnego (przepuszczającego ok. $1\\%$–$5\\%$ fotonów jako wiązkę użytkową). Odbicia wzdłuż osi wzmacniają lawinowo falę i selekcjonują promienie równoległe."
  },
  {
    "id": 192,
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
    "id": 193,
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
    "id": 194,
    "category": "4. Lasery — fizyka, zasada działania i zastosowania",
    "text": "Które ze stwierdzeń poprawnie charakteryzują omawiany na wykładzie laser gazowy He-Ne?",
    "options": [
      {
        "text": "Ośrodkiem czynnym jest mieszanina helu i neonu w proporcji około $10:1$.",
        "isCorrect": true
      },
      {
        "text": "Jest to laser 4-poziomowy, co ułatwia inwersję i eliminuje reabsorpcję.",
        "isCorrect": true
      },
      {
        "text": "Emituje czerwoną wiązkę o długości fali $\\lambda = 632{,}8\\text{ nm}$ (z przejść w Ne).",
        "isCorrect": true
      },
      {
        "text": "Pompowanie zachodzi wyłącznie przez promieniowanie gamma z reaktora.",
        "isCorrect": false
      }
    ],
    "explanation": "Laser He-Ne (EFW4 s. 6) to laser 4-poziomowy z mieszaniną He:Ne (10:1), pompowany wyładowaniem elektrycznym w gazie i emitujący czerwoną linię $632{,}8\\text{ nm}$ z przejść w atomach neonu."
  },
  {
    "id": 195,
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
    "id": 196,
    "category": "4. Lasery — fizyka, zasada działania i zastosowania",
    "text": "Które stwierdzenia dotyczące komunikacji światłowodowej oraz lasera światłowodowego są prawdziwe?",
    "options": [
      {
        "text": "Transmisja w światłowodzie opiera się na całkowitym odbiciu wewnętrznym ($n_1 > n_2$).",
        "isCorrect": true
      },
      {
        "text": "W laserze światłowodowym akcję laserową daje szkło domieszkowane Er lub Yb.",
        "isCorrect": true
      },
      {
        "text": "W laserze światłowodowym wnęką rezonansową musi być wyłącznie zewnętrzna tuba z Ne.",
        "isCorrect": false
      },
      {
        "text": "Współczynnik załamania rdzenia światłowodu musi być mniejszy od płaszcza ($n_1 < n_2$).",
        "isCorrect": false
      }
    ],
    "explanation": "Światłowód prowadzi światło przez całkowite odbicie wewnętrzne ($n_1 > n_2$, rdzeń ma większy współczynnik załamania niż płaszcz). W laserze światłowodowym sam światłowód (szkło z Er/Yb) pełni funkcję wnęki rezonansowej (EFW4 s. 8)."
  },
  {
    "id": 197,
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
    "id": 198,
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
    "id": 199,
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
    "id": 200,
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
    "id": 201,
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
    "id": 202,
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
    "id": 203,
    "category": "4. Lasery — fizyka, zasada działania i zastosowania",
    "text": "W równowadze termodynamicznej (rozkład Boltzmanna $N_2 / N_1 = e^{-(E_2 - E_1)/(k_B T)}$), jaki jest stosunek obsadzeń poziomów dla typowego przejścia optycznego ($E_2 - E_1 \\gg k_B T$)?",
    "options": [
      {
        "text": "Bardzo mały ($N_2 \\ll N_1$) — prawie wszystkie atomy znajdują się na poziomie niższym $E_1$.",
        "isCorrect": true
      },
      {
        "text": "Bardzo duży ($N_2 \\gg N_1$) — niemal wszystkie atomy gromadzą się samorzutnie na $E_2$.",
        "isCorrect": false
      },
      {
        "text": "Równy dokładnie jedności ($N_2 = N_1$) niezależnie od temperatury bezwzględnej $T$.",
        "isCorrect": false
      },
      {
        "text": "Zawsze ujemny ($N_2 < 0$), co uniemożliwia emisję spontaniczną w równowadze cieplnej.",
        "isCorrect": false
      }
    ],
    "explanation": "Ponieważ $E_2 > E_1$, wykładnik $-(E_2 - E_1)/(k_B T)$ jest duży i ujemny, więc $N_2/N_1 \\ll 1$. Dlatego w równowadze termodynamicznej nie istnieje inwersja obsadzeń i absorpcja przeważa nad emisją wymuszoną — konieczne jest zewnętrzne pompowanie."
  },
  {
    "id": 204,
    "category": "4. Lasery — fizyka, zasada działania i zastosowania",
    "text": "Który z trzech procesów oddziaływania światła z atomami (absorpcja wymuszona, emisja spontaniczna, emisja wymuszona) zachodzi z częstością NIEZALEŻNĄ od gęstości energii padającego promieniowania $u(\\nu)$?",
    "options": [
      {
        "text": "Emisja spontaniczna ($A N_2$), która zachodzi samorzutnie także bez padających fotonów.",
        "isCorrect": true
      },
      {
        "text": "Emisja wymuszona ($B_{21} N_2 u(\\nu)$), która wymaga wyłącznie obecności fotonu $h\\nu$.",
        "isCorrect": false
      },
      {
        "text": "Absorpcja wymuszona ($B_{12} N_1 u(\\nu)$), która zachodzi bez padającego promieniowania.",
        "isCorrect": false
      },
      {
        "text": "Wszystkie trzy procesy zależą liniowo od gęstości energii promieniowania $u(\\nu)$.",
        "isCorrect": false
      }
    ],
    "explanation": "W tabeli ze slajdu 2 wykładu EFW4 tylko emisja spontaniczna ($A N_2$) nie zawiera czynnika $u(\\nu)$ — wzbudzony atom wraca na niższy poziom samorzutnie nawet w idealnej ciemności. Zarówno absorpcja, jak i emisja wymuszona są proporcjonalne do $u(\\nu)$."
  },
  {
    "id": 205,
    "category": "4. Lasery — fizyka, zasada działania i zastosowania",
    "text": "Które wnioski wynikają bezpośrednio z równości współczynników Einsteina $B_{12} = B_{21}$ (EFW4 s. 3 i 5)?",
    "options": [
      {
        "text": "Prawdopodobieństwa absorpcji wymuszonej i emisji wymuszonej są sobie równe.",
        "isCorrect": true
      },
      {
        "text": "Wzmocnienie światła (przewaga emisji wymuszonej nad absorpcją) wymaga warunku $N_2 > N_1$.",
        "isCorrect": true
      },
      {
        "text": "W układzie dwupoziomowym łatwo uzyskać $N_2 = 10 N_1$ przez samo zwiększenie mocy lampy.",
        "isCorrect": false
      },
      {
        "text": "Emisja spontaniczna ma dokładnie zerowe prawdopodobieństwo ($A = 0$) w każdym atomie.",
        "isCorrect": false
      }
    ],
    "explanation": "Skoro $B_{12} = B_{21}$, stosunek tempa emisji wymuszonej do absorpcji wynosi po prostu $N_2 / N_1$. Wzmocnienie wymaga $N_2 > N_1$, a w układzie dwupoziomowym silne pompowanie może co najwyżej zrównać obsadzenia ($N_2 \\to N_1$)."
  },
  {
    "id": 206,
    "category": "4. Lasery — fizyka, zasada działania i zastosowania",
    "text": "Dlaczego płyta Blu-ray (laser fioletowy $\\lambda \\approx 405\\text{ nm}$) mieści wielokrotnie więcej danych niż płyta CD (laser podczerwony $\\lambda \\approx 780\\text{ nm}$) tej samej wielkości?",
    "options": [
      {
        "text": "Krótsza długość fali $\\lambda$ pozwala zogniskować laser w mniejszej plamce ($\\sim\\lambda$) i upakować bity gęściej.",
        "isCorrect": true
      },
      {
        "text": "Laser fioletowy ma mniejszą energię fotonów, dzięki czemu nie topi plastikowej warstwy płyty.",
        "isCorrect": false
      },
      {
        "text": "Płyta Blu-ray wykorzystuje światło niespójne z emisji spontanicznej zamiast spójnej wiązki lasera.",
        "isCorrect": false
      },
      {
        "text": "Laser podczerwony nie ulega odbiciu od metalicznej warstwy płyty i wymaga większych przerw.",
        "isCorrect": false
      }
    ],
    "explanation": "Minimalny rozmiar plamki ogniskowania wiązki laserowej jest rzędu długości fali $\\lambda$ (EFW4 s. 4 i 9). Im krótsza długość fali ($780\\text{ nm}$ w CD $\\to 650\\text{ nm}$ w DVD $\\to 405\\text{ nm}$ w Blu-ray), tym mniejsza plamka i gęstszy zapis informacji (proporcjonalnie do $1/\\lambda^2$!)."
  },
  {
    "id": 207,
    "category": "4. Lasery — fizyka, zasada działania i zastosowania",
    "text": "Które fakty dotyczące laserowego pomiaru odległości Ziemia–Księżyc podano na wykładzie EFW4 (s. 11)?",
    "options": [
      {
        "text": "Wiązka odbija się od retroreflektorów ustawionych na Księżycu w misjach Apollo.",
        "isCorrect": true
      },
      {
        "text": "Współczesna precyzja laserowego pomiaru tej odległości sięga aż około $1\\text{ mm}$.",
        "isCorrect": true
      },
      {
        "text": "Pomiary wykazały, że Księżyc oddala się od Ziemi w tempie około $3{,}8\\text{ cm/rok}$.",
        "isCorrect": true
      },
      {
        "text": "Pomiar opiera się na przesunięciu Comptona światła odbitego od pyłu księżycowego.",
        "isCorrect": false
      }
    ],
    "explanation": "Na slajdzie 11 wykładu EFW4 opisano eksperyment pomiaru czasu przelotu impulsu lasera Ziemia–Księżyc–Ziemia z odbiciem od reflektorów Apollo: precyzja wynosi $1\\text{ mm}$, co ujawniło m.in. oddalanie się Księżyca ($3{,}8\\text{ cm/rok}$) oraz obecność jego płynnego żelaznego jądra."
  },
  {
    "id": 208,
    "category": "4. Lasery — fizyka, zasada działania i zastosowania",
    "text": "Które relacje czasów życia poziomów energetycznych są konieczne w poprawnie działającym laserze 3-poziomowym ($E_1 < E_2 < E_3$)?",
    "options": [
      {
        "text": "Poziom pompujący $E_3$ powinien być krótkożyciowy ($\\sim 10^{-9}\\text{ s}$), by szybko opróżniał się na $E_2$.",
        "isCorrect": true
      },
      {
        "text": "Poziom metastabilny $E_2$ powinien być długożyciowy ($\\sim 10^{-3}\\text{ s}$), by gromadzić na nim elektrony.",
        "isCorrect": true
      },
      {
        "text": "Poziom $E_3$ musi żyć milion razy dłużej niż poziom $E_2$, aby zablokować spadek na $E_2$.",
        "isCorrect": false
      },
      {
        "text": "Oba poziomy wzbudzone $E_2$ oraz $E_3$ muszą mieć identyczny, nieskończenie krótki czas życia.",
        "isCorrect": false
      }
    ],
    "explanation": "Kluczem do inwersji w laserze 3-poziomowym jest różnica czasów życia o kilka rzędów wielkości: szybki spadek z krótkożyciowego $E_3$ ($\\sim 10^{-9}\\text{ s}$) na długożyciowy, metastabilny poziom $E_2$ ($\\sim 10^{-3}\\text{ s}$), gdzie gromadzą się atomy (EFW4 s. 5)."
  },
  {
    "id": 209,
    "category": "4. Lasery — fizyka, zasada działania i zastosowania",
    "text": "Dlaczego w laserze He-Ne (EFW4 s. 6) mieszanina gazów ma 10-krotną przewagę helu nad neonem (10:1), skoro wiązkę $632{,}8\\text{ nm}$ emitują atomy neonu?",
    "options": [
      {
        "text": "Wyładowanie wzbudza liczne atomy He, które zderzeniowo (bezpromieniście) przekazują energię do Ne.",
        "isCorrect": true
      },
      {
        "text": "Hel pełni funkcję chłodzącego lustra rezonatora, a neon emituje wyłącznie promienie X.",
        "isCorrect": false
      },
      {
        "text": "Atomy helu pochłaniają nadmiar fotonów czerwonych, obniżając moc lasera poniżej progu.",
        "isCorrect": false
      },
      {
        "text": "W laserze He-Ne wiązkę czerwoną $632{,}8\\text{ nm}$ emitują w rzeczywistości atomy helu, a nie neonu.",
        "isCorrect": false
      }
    ],
    "explanation": "W laserze He-Ne elektrony z wyładowania elektrycznego wzbudzają w zderzeniach nieelastycznych atomy helu (których jest 10x więcej), a te bezpromieniście przekazują energię atomom neonu na bliski energetycznie poziom wzbudzony, z którego zachodzi akcja laserowa ($632{,}8\\text{ nm}$)."
  },
  {
    "id": 210,
    "category": "4. Lasery — fizyka, zasada działania i zastosowania",
    "text": "Które informacje o zastosowaniach laserów w mikroskopii i nanolitografii (EFW4 s. 7 i 10) są prawdziwe?",
    "options": [
      {
        "text": "Mikroskopia konfokalna wykorzystująca laser jest odmianą mikroskopii fluorescencyjnej.",
        "isCorrect": true
      },
      {
        "text": "Nanolitografia laserowa (druk 3D) używa absorpcji dwufotonowej w polimerowym fotorezyście.",
        "isCorrect": true
      },
      {
        "text": "Nanolitografia dwufotonowa pozwala drukować wyłącznie duże elementy powyżej $1\\text{ cm}$.",
        "isCorrect": false
      },
      {
        "text": "Mikroskopia konfokalna wymaga zastąpienia światła laserowego wiązką szybkich neutronów.",
        "isCorrect": false
      }
    ],
    "explanation": "Na slajdach 7 i 10 wykładu EFW4 pokazano nanolitografię dwufotonową w polimerowym fotorezyście (rozdzielczość rzędu $150\\text{ nm}$ poprzecznie i $450\\text{ nm}$ wzdłuż osi!) oraz laserową mikroskopię konfokalną (odmianę mikroskopii fluorescencyjnej do obrazowania próbek biologicznych)."
  },
  {
    "id": 211,
    "category": "5. Fizyka materii skondensowanej — wiązania, kryształy, półprzewodniki, nadprzewodniki",
    "text": "Które stwierdzenia poprawnie opisują krzywą energii potencjalnej $V(r) = \\frac{A}{r^n} - \\frac{B}{r^m}$ ($n > m$) zbliżających się atomów?",
    "options": [
      {
        "text": "Minimum krzywej $V(r)$ wyznacza odległość równowagową (długość wiązania w cząsteczce).",
        "isCorrect": true
      },
      {
        "text": "Przy bardzo małych $r$ energia gwałtownie rośnie przez zakaz Pauliego i odpychanie jąder.",
        "isCorrect": true
      },
      {
        "text": "Głębokość minimum energii potencjalnej poniżej zera odpowiada energii wiązania cząsteczki.",
        "isCorrect": true
      },
      {
        "text": "W odległości równowagowej na atomy działa nieskończenie wielka siła odpychająca.",
        "isCorrect": false
      }
    ],
    "explanation": "W minimum $V(r)$ siły przyciągania i odpychania równoważą się (siła wypadkowa $F = -dV/dr = 0$), co wyznacza długość wiązania, a głębokość minimum daje energię wiązania. Gwałtowny wzrost dla małych $r$ wynika z osłabienia ekranowania jąder oraz zakazu Pauliego."
  },
  {
    "id": 212,
    "category": "5. Fizyka materii skondensowanej — wiązania, kryształy, półprzewodniki, nadprzewodniki",
    "text": "Które ze stwierdzeń na temat wiązania JONOWEGO są prawdziwe?",
    "options": [
      {
        "text": "Powstaje przy dużej różnicy elektroujemności ($\\Delta EN > 1{,}7$, np. w $\\text{NaCl}$ i $\\text{KCl}$).",
        "isCorrect": true
      },
      {
        "text": "Polega na przekazaniu elektronu i niekierunkowym przyciąganiu utworzonych jonów.",
        "isCorrect": true
      },
      {
        "text": "Polega na równym uwspólnieniu pary elektronów przez dwa identyczne atomy niemetalu.",
        "isCorrect": false
      },
      {
        "text": "Jest słabsze od sił van der Waalsa i daje kryształy o niskiej temperaturze topnienia.",
        "isCorrect": false
      }
    ],
    "explanation": "Wiązanie jonowe tworzy się przy dużej różnicy elektroujemności ($\\Delta EN > 1{,}7$), polega na przekazaniu elektronu i silnym, niekierunkowym przyciąganiu jonów (stąd wysoka $T_t$ kryształów jonowych). Współdzielenie elektronów to wiązanie kowalencyjne."
  },
  {
    "id": 213,
    "category": "5. Fizyka materii skondensowanej — wiązania, kryształy, półprzewodniki, nadprzewodniki",
    "text": "Które ze stwierdzeń poprawnie opisują kwantowy mechanizm wiązania KOWALENCYJNEGO (np. w $\\text{H}_2$)?",
    "options": [
      {
        "text": "Istotą jest uwspólnienie pary (lub par) elektronów walencyjnych przez atomy.",
        "isCorrect": true
      },
      {
        "text": "Stan z parzystą (symetryczną) funkcją falową ma niższą energię (stan wiążący).",
        "isCorrect": true
      },
      {
        "text": "W cząsteczce $\\text{H}_2$ dwa wspólne elektrony w stanie podstawowym mają spiny zgodne.",
        "isCorrect": false
      },
      {
        "text": "Stan z nieparzystą (antysymetryczną) funkcją falową ma najniższą energię wiązania.",
        "isCorrect": false
      }
    ],
    "explanation": "W wiązaniu kowalencyjnym atomy współdzielą parę elektronów, a stan wiążący o niższej energii odpowiada symetrycznej (parzystej) funkcji przestrzennej. Zgodnie z zakazem Pauliego dwa elektrony na tym samym orbitalu w $\\text{H}_2$ muszą mieć spiny ANTYRÓWNOLEGŁE (przeciwne), a nie zgodne!"
  },
  {
    "id": 214,
    "category": "5. Fizyka materii skondensowanej — wiązania, kryształy, półprzewodniki, nadprzewodniki",
    "text": "Które stwierdzenia poprawnie opisują oddziaływania (wiązania) van der Waalsa?",
    "options": [
      {
        "text": "Mają charakter elektrostatyczny, lecz są znacznie słabsze od wiązań jonowych i kowalencyjnych.",
        "isCorrect": true
      },
      {
        "text": "Występują między cząsteczkami niepolarnymi (np. $\\text{CH}_4, \\text{Cl}_2$) oraz atomami gazów szlachetnych.",
        "isCorrect": true
      },
      {
        "text": "Wynikają z oddziaływania chwilowych oraz indukowanych dipoli elektrycznych chmur elektronów.",
        "isCorrect": true
      },
      {
        "text": "Odpowiadają za ekstremalną twardość i wysoką temperaturę topnienia diamentu oraz krzemu.",
        "isCorrect": false
      }
    ],
    "explanation": "Siły van der Waalsa to słabe oddziaływania elektrostatyczne między chwilowymi/indukowanymi dipolami w cząsteczkach niepolarnych i gazach szlachetnych (tworzą miękkie kryształy molekularne o niskiej $T_t$). Diament i krzem zawdzięczają twardość silnym wiązaniom kowalencyjnym."
  },
  {
    "id": 215,
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
    "id": 216,
    "category": "5. Fizyka materii skondensowanej — wiązania, kryształy, półprzewodniki, nadprzewodniki",
    "text": "Które ze stwierdzeń poprawnie charakteryzują ciała AMORFICZNE w odróżnieniu od ciał KRYSTALICZNYCH?",
    "options": [
      {
        "text": "Ciała amorficzne wykazują jedynie uporządkowanie bliskiego zasięgu (jak w cieczy).",
        "isCorrect": true
      },
      {
        "text": "Typowymi przykładami ciał amorficznych są szkło oraz większość polimerów.",
        "isCorrect": true
      },
      {
        "text": "W ciałach krystalicznych atomy tworzą regularną sieć przestrzenną dalekiego zasięgu.",
        "isCorrect": true
      },
      {
        "text": "Szkło i polimery są typowymi przykładami idealnych monokryształów o sieci regularnej.",
        "isCorrect": false
      }
    ],
    "explanation": "Ciała amorficzne (szkło, większość polimerów) mają tylko porządek lokalny (bliskiego zasięgu), bez powtarzalnej sieci dalekiego zasięgu charakterystycznej dla kryształów."
  },
  {
    "id": 217,
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
    "id": 218,
    "category": "5. Fizyka materii skondensowanej — wiązania, kryształy, półprzewodniki, nadprzewodniki",
    "text": "Które ze stwierdzeń na temat MONOKRYSZTAŁÓW, POLIKRYSZTAŁÓW oraz badania struktury kryształów są prawdziwe?",
    "options": [
      {
        "text": "Monokryształ posiada jedną jednolitą sieć krystaliczną w całej objętości.",
        "isCorrect": true
      },
      {
        "text": "Polikryształ jest zlepkiem wielu drobnych, różnie zorientowanych ziaren.",
        "isCorrect": true
      },
      {
        "text": "Strukturę kryształów bada się dyfrakcją promieni X (prawo Bragga).",
        "isCorrect": true
      },
      {
        "text": "Monokryształ musi składać się wyłącznie z jednego czystego pierwiastka.",
        "isCorrect": false
      }
    ],
    "explanation": "Monokryształ ma jednolitą sieć w całej objętości (może być związkiem, np. szafir $\\text{Al}_2\\text{O}_3$, $\\text{NaCl}$), polikryształ to zlepek wielu ziaren (np. mosiądz, poly-Si), a strukturę bada się krystalografią rentgenowską (prawo Bragga)."
  },
  {
    "id": 219,
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
    "id": 220,
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
    "id": 221,
    "category": "5. Fizyka materii skondensowanej — wiązania, kryształy, półprzewodniki, nadprzewodniki",
    "text": "Które cechy i przykłady dotyczą KRYSZTAŁÓW MOLEKULARNYCH (cząsteczkowych)?",
    "options": [
      {
        "text": "Tworzą je cząsteczki połączone słabymi siłami van der Waalsa lub wodorowymi.",
        "isCorrect": true
      },
      {
        "text": "Przykłady to lód ($\\text{H}_2\\text{O}$), suchy lód ($\\text{CO}_2$) i zestalone gazy szlachetne.",
        "isCorrect": true
      },
      {
        "text": "Są wyjątkowo twarde, sztywne i mają bardzo wysoką temperaturę topnienia.",
        "isCorrect": false
      },
      {
        "text": "Przykłady to diament, krzem i miedź, świetnie przewodzące prąd w stanie stałym.",
        "isCorrect": false
      }
    ],
    "explanation": "Kryształy molekularne (lód, suchy lód, zestalone $\\text{O}_2, \\text{N}_2$ i gazy szlachetne) wiążą słabe siły van der Waalsa lub wodorowe, dlatego są miękkie, podatne na odkształcenia, mają niską temperaturę topnienia i są izolatorami."
  },
  {
    "id": 222,
    "category": "5. Fizyka materii skondensowanej — wiązania, kryształy, półprzewodniki, nadprzewodniki",
    "text": "Które cechy i przykłady poprawnie opisują KRYSZTAŁY JONOWE?",
    "options": [
      {
        "text": "Zbudowane są z naprzemiennie, gęsto upakowanych jonów dodatnich i ujemnych (np. $\\text{NaCl, KCl}$).",
        "isCorrect": true
      },
      {
        "text": "Mają wysoką temperaturę topnienia, są twarde (choć kruche) i mają wiązania niekierunkowe.",
        "isCorrect": true
      },
      {
        "text": "Są przezroczyste dla światła widzialnego, natomiast silnie absorbują nadfiolet (UV).",
        "isCorrect": true
      },
      {
        "text": "W stanie stałym przewodzą prąd lepiej niż miedź dzięki swobodnemu gazowi elektronowemu.",
        "isCorrect": false
      }
    ],
    "explanation": "Kryształy jonowe ($\\text{NaCl, KCl, CsCl}$) w stanie stałym nie mają swobodnych nośników (przewodzą dopiero po stopieniu lub rozpuszczeniu). Są twarde, mają wysoką $T_t$, niekierunkowe wiązania elektrostatyczne, są przezroczyste w widzialnym i absorbują UV (EFW5 s. 8)."
  },
  {
    "id": 223,
    "category": "5. Fizyka materii skondensowanej — wiązania, kryształy, półprzewodniki, nadprzewodniki",
    "text": "Które cechy i przykłady poprawnie opisują KRYSZTAŁY ATOMOWE (kowalentne)?",
    "options": [
      {
        "text": "Atomy połączone są silnymi, kierunkowymi wiązaniami kowalencyjnymi w sztywną sieć.",
        "isCorrect": true
      },
      {
        "text": "Są bardzo twarde, niepodatne na odkształcenia i mają wysoką temperaturę topnienia.",
        "isCorrect": true
      },
      {
        "text": "Typowymi przykładami kryształów atomowych są diament (C), krzem (Si) i german (Ge).",
        "isCorrect": true
      },
      {
        "text": "Zawierają gęsty gaz swobodnych elektronów, świetnie przewodząc prąd już w $0\\text{ K}$.",
        "isCorrect": false
      }
    ],
    "explanation": "Kryształy atomowe (diament, Si, Ge) mają silne, kierunkowe wiązania kowalencyjne (duża twardość, wysoka $T_t$), natomiast nie zawierają swobodnego gazu elektronowego i w $T = 0\\text{ K}$ są izolatorami."
  },
  {
    "id": 224,
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
    "id": 225,
    "category": "5. Fizyka materii skondensowanej — wiązania, kryształy, półprzewodniki, nadprzewodniki",
    "text": "Które ze stwierdzeń poprawnie wyjaśniają przewodnictwo elektryczne METALI oraz wpływ temperatury na ich opór?",
    "options": [
      {
        "text": "Pasmo walencyjne i pasmo przewodnictwa nakładają się (brak przerwy energetycznej $E_g$).",
        "isCorrect": true
      },
      {
        "text": "Koncentracja swobodnych elektronów walencyjnych jest ogromna i niemal niezależna od temperatury.",
        "isCorrect": true
      },
      {
        "text": "Wzrost temperatury wzmaga drgania jonów sieci (fonony), co nasila rozpraszanie i zwiększa opór.",
        "isCorrect": true
      },
      {
        "text": "Wzrost temperatury powoduje spadek oporu metalu wskutek gwałtownego wzrostu liczby elektronów.",
        "isCorrect": false
      }
    ],
    "explanation": "W metalach pasma się nakładają (duży, stały gaz elektronowy w modelu Drudego), a wzrost temperatury zwiększa amplitudę drgań sieci (liczbę fononów) — częstsze zderzenia skracają drogę swobodną i ZWIĘKSZAJĄ opór elektryczny metalu (odwrotnie niż w półprzewodnikach!)."
  },
  {
    "id": 226,
    "category": "5. Fizyka materii skondensowanej — wiązania, kryształy, półprzewodniki, nadprzewodniki",
    "text": "Które ze stwierdzeń na temat teorii pasmowej ciał stałych są prawdziwe?",
    "options": [
      {
        "text": "Pasma energetyczne powstają z rozszczepienia poziomów atomowych przy zbliżeniu $N$ atomów.",
        "isCorrect": true
      },
      {
        "text": "Energia Fermiego $E_F$ to najwyższa energia obsadzonego stanu elektronowego w $T = 0\\text{ K}$.",
        "isCorrect": true
      },
      {
        "text": "Przerwa energetyczna $E_g$ to przedział energii dozwolonych o największej gęstości stanów.",
        "isCorrect": false
      },
      {
        "text": "Obsadzenie stanów elektronowych w krysztale opisuje klasyczny rozkład fal świetlnych.",
        "isCorrect": false
      }
    ],
    "explanation": "Pasma powstają przez nakładanie funkcji falowych i rozszczepienie poziomów $N$ atomów, obsadzenie opisuje rozkład Fermiego-Diraca, a $E_F$ to najwyższy zajęty stan w $T = 0\\text{ K}$. Przerwa energetyczna $E_g$ to obszar energii ZABRONIONYCH, a nie dozwolonych!"
  },
  {
    "id": 227,
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
    "id": 228,
    "category": "5. Fizyka materii skondensowanej — wiązania, kryształy, półprzewodniki, nadprzewodniki",
    "text": "Które ze stwierdzeń poprawnie rozróżniają metale, półprzewodniki i izolatory w teorii pasmowej?",
    "options": [
      {
        "text": "W półprzewodnikach i izolatorach poziom Fermiego $E_F$ leży wewnątrz przerwy energetycznej.",
        "isCorrect": true
      },
      {
        "text": "Półprzewodniki mają wąską przerwę (np. Si $1{,}12\\text{ eV}$, Ge $0{,}67\\text{ eV}$), a izolatory szeroką ($>3\\text{ eV}$).",
        "isCorrect": true
      },
      {
        "text": "W metalach pasmo przewodnictwa jest częściowo zapełnione lub nakłada się z walencyjnym.",
        "isCorrect": true
      },
      {
        "text": "W izolatorach pasmo walencyjne i pasmo przewodnictwa całkowicie się na siebie nakładają.",
        "isCorrect": false
      }
    ],
    "explanation": "Nakładanie się pasm (brak przerwy) jest cechą metali. W półprzewodnikach i izolatorach $E_F$ leży w przerwie energetycznej $E_g$, która w półprzewodnikach jest wąska ($\\sim 0{,}1$–$2\\text{ eV}$), a w izolatorach bardzo szeroka ($> 3$–$4\\text{ eV}$)."
  },
  {
    "id": 229,
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
    "id": 230,
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
    "id": 231,
    "category": "5. Fizyka materii skondensowanej — wiązania, kryształy, półprzewodniki, nadprzewodniki",
    "text": "Które ze stwierdzeń poprawnie opisują półprzewodniki samoistne oraz domieszkowane typu $n$ i typu $p$?",
    "options": [
      {
        "text": "W czystym półprzewodniku samoistnym (Si, Ge) koncentracja elektronów równa się dziurom ($n = p$).",
        "isCorrect": true
      },
      {
        "text": "Półprzewodnik typu $n$ tworzy domieszka z grupy V (P, As — donory, większość elektrony).",
        "isCorrect": true
      },
      {
        "text": "Półprzewodnik typu $p$ tworzy domieszka z grupy III (B, Al, Ga — akceptory, większość dziury).",
        "isCorrect": true
      },
      {
        "text": "W półprzewodniku typu $n$ nośnikami większościowymi ładunku są zawsze dodatnie dziury.",
        "isCorrect": false
      }
    ],
    "explanation": "W półprzewodniku samoistnym $n = p$; domieszkowanie grupą V (donory: P, As) daje typ $n$ z większością elektronów, a grupą III (akceptory: B, Al, Ga, In) daje typ $p$ z większością dziur."
  },
  {
    "id": 232,
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
    "id": 233,
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
    "id": 234,
    "category": "5. Fizyka materii skondensowanej — wiązania, kryształy, półprzewodniki, nadprzewodniki",
    "text": "Które ze stwierdzeń poprawnie opisują złącze $p$–$n$ diody w stanie równowagi (bez przyłożonego napięcia)?",
    "options": [
      {
        "text": "Przez granicę dyfundują nośniki większościowe i rekombinują, tworząc warstwę zubożoną.",
        "isCorrect": true
      },
      {
        "text": "Nieruchome jony w warstwie zubożonej tworzą pole hamujące dalszą dyfuzję (barierę).",
        "isCorrect": true
      },
      {
        "text": "Wewnątrz warstwy zubożonej koncentracja swobodnych nośników jest największa w diodzie.",
        "isCorrect": false
      },
      {
        "text": "Przez niespolaryzowane złącze płynie stale duży prąd przewodzenia rosnący wykładniczo.",
        "isCorrect": false
      }
    ],
    "explanation": "W niespolaryzowanym złączu $p$–$n$ dyfuzja i rekombinacja tworzą warstwę zubożoną (POZBAWIONĄ swobodnych nośników!) z nieruchomymi jonami, których wewnętrzna bariera potencjału równoważy dyfuzję, więc wypadkowy prąd wynosi zero."
  },
  {
    "id": 235,
    "category": "5. Fizyka materii skondensowanej — wiązania, kryształy, półprzewodniki, nadprzewodniki",
    "text": "Które ze zjawisk zachodzą w diodzie półprzewodnikowej przy POLARYZACJI W KIERUNKU PRZEWODZENIA („$+$” do $p$, „$-$” do $n$)?",
    "options": [
      {
        "text": "Zewnętrzne napięcie przeciwdziała barierze potencjału i zwęża warstwę zubożoną.",
        "isCorrect": true
      },
      {
        "text": "Dziury z $p$ i elektrony z $n$ są wypychane w stronę złącza, dając duży prąd przewodzenia.",
        "isCorrect": true
      },
      {
        "text": "Po przekroczeniu napięcia progowego ($\\sim 0{,}7\\text{ V}$ dla Si) prąd rośnie gwałtownie wykładniczo.",
        "isCorrect": true
      },
      {
        "text": "Warstwa zubożona poszerza się i całkowicie blokuje przepływ nośników większościowych.",
        "isCorrect": false
      }
    ],
    "explanation": "Polaryzacja w kierunku przewodzenia („$+$” do $p$, „$-$” do $n$) zwęża warstwę zubożoną, obniża barierę i powyżej napięcia progowego umożliwia wykładniczy wzrost prądu nośników większościowych ($I = I_0(e^{eV/k_BT} - 1)$). Poszerzanie warstwy zachodzi w polaryzacji zaporowej."
  },
  {
    "id": 236,
    "category": "5. Fizyka materii skondensowanej — wiązania, kryształy, półprzewodniki, nadprzewodniki",
    "text": "Które ze stwierdzeń dotyczą POLARYZACJI ZAPOROWEJ („$-$” do $p$, „$+$” do $n$) diody półprzewodnikowej oraz diody Zenera?",
    "options": [
      {
        "text": "Warstwa zubożona poszerza się, a bariera potencjału na złączu rośnie, blokując duży prąd.",
        "isCorrect": true
      },
      {
        "text": "Poniżej napięcia przebicia płynie jedynie bardzo mały, niemal stały prąd wsteczny ($-I_0$).",
        "isCorrect": true
      },
      {
        "text": "Dioda Zenera wykorzystuje kontrolowane przebicie wsteczne do stabilizacji napięcia.",
        "isCorrect": true
      },
      {
        "text": "W polaryzacji zaporowej opór złącza spada natychmiast do zera już przy $V = -0{,}1\\text{ V}$.",
        "isCorrect": false
      }
    ],
    "explanation": "W polaryzacji zaporowej warstwa zubożona rośnie i płynie znikomy prąd nośników mniejszościowych ($-I_0$) aż do napięcia przebicia. Kontrolowane przebicie wsteczne wykorzystuje dioda Zenera do regulacji i stabilizacji napięcia (EFW5 s. 17)."
  },
  {
    "id": 237,
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
    "id": 238,
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
    "id": 239,
    "category": "5. Fizyka materii skondensowanej — wiązania, kryształy, półprzewodniki, nadprzewodniki",
    "text": "Które ze stwierdzeń poprawnie opisują budowę i zasadę działania tranzystora bipolarnego ($n$–$p$–$n$ lub $p$–$n$–$p$)?",
    "options": [
      {
        "text": "Składa się z dwóch złączy $p$–$n$ połączonych wspólnym, bardzo cienkim obszarem bazy.",
        "isCorrect": true
      },
      {
        "text": "Dzięki cienkiej bazie niemal cały prąd emitera wychodzi kolektorem ($I_E \\approx I_C$).",
        "isCorrect": true
      },
      {
        "text": "Mały prąd wpływający do bazy steruje dużo większym prądem emiter–kolektor.",
        "isCorrect": true
      },
      {
        "text": "Baza musi być bardzo gruba, aby całkowicie zablokować przepływ do kolektora.",
        "isCorrect": false
      }
    ],
    "explanation": "Tranzystor bipolarny ($n$–$p$–$n$ lub $p$–$n$–$p$) to dwie diody połączone bardzo cienką bazą. Dzięki temu $I_E \\approx I_C$, a niewielki prąd bazy steruje dużym prądem kolektora (wzmacnianie i przełączanie sygnałów)."
  },
  {
    "id": 240,
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
    "id": 241,
    "category": "5. Fizyka materii skondensowanej — wiązania, kryształy, półprzewodniki, nadprzewodniki",
    "text": "Które ze stwierdzeń poprawnie opisują zjawisko nadprzewodnictwa i efekt Meissnera?",
    "options": [
      {
        "text": "Zjawisko odkrył H. Kamerlingh Onnes w 1911 r. dla rtęci poniżej $T_c = 4{,}2\\text{ K}$.",
        "isCorrect": true
      },
      {
        "text": "Poniżej $T_c$ opór DC spada do zera, a pole $B$ jest wypychane (efekt Meissnera).",
        "isCorrect": true
      },
      {
        "text": "Zniszczenie nadprzewodnictwa silnym polem magnetycznym jest całkowicie nieodwracalne.",
        "isCorrect": false
      },
      {
        "text": "Nadprzewodnik poniżej $T_c$ wciąga i wzmacnia pole magnetyczne jak ferromagnetyk.",
        "isCorrect": false
      }
    ],
    "explanation": "Onnes odkrył nadprzewodnictwo w 1911 r. dla Hg ($4{,}2\\text{ K}$). Cechuje je $R = 0$ (dla DC) oraz idealny diamagnetyzm (efekt Meissnera, wypychanie pola $B$). Zniszczenie stanu nadprzewodzącego przez pole $B > B_c$ jest ODWRACALNE — po zabraniu pola nadprzewodnictwo wraca."
  },
  {
    "id": 242,
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
    "id": 243,
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
    "id": 244,
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
    "id": 245,
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
    "id": 246,
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
    "id": 247,
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
    "id": 248,
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
    "id": 249,
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
    "id": 250,
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
    "id": 251,
    "category": "5. Fizyka materii skondensowanej — wiązania, kryształy, półprzewodniki, nadprzewodniki",
    "text": "W krystalografii rentgenowskiej obowiązuje prawo Bragga: $2d\\sin\\theta = n\\lambda$. Jak zmieni się $\\sin\\theta$ dla maksimum pierwszego rzędu ($n = 1$), jeśli użyjemy promieniowania X o DWUKROTNIE krótszej długości fali ($\\lambda' = \\lambda / 2$)?",
    "options": [
      {
        "text": "Wartość $\\sin\\theta$ zmaleje dwukrotnie (kąt dyfrakcji $\\theta$ zmniejszy się).",
        "isCorrect": true
      },
      {
        "text": "Wartość $\\sin\\theta$ wzrośnie dwukrotnie (kąt dyfrakcji $\\theta$ zwiększy się).",
        "isCorrect": false
      },
      {
        "text": "Wartość $\\sin\\theta$ zmaleje czterokrotnie (zależność kwadratowa od $\\lambda$).",
        "isCorrect": false
      },
      {
        "text": "Wartość $\\sin\\theta$ pozostanie bez zmian, bo zależy wyłącznie od stałej $d$.",
        "isCorrect": false
      }
    ],
    "explanation": "Z prawa Bragga $\\sin\\theta = \\frac{n\\lambda}{2d}$ wynika, że dla ustalonego rzędu $n = 1$ i kryształu ($d = \\text{const}$) wartość $\\sin\\theta$ jest wprost proporcjonalna do długości fali $\\lambda$. Dwukrotne skrócenie $\\lambda$ zmniejsza więc $\\sin\\theta$ dokładnie dwukrotnie."
  },
  {
    "id": 252,
    "category": "5. Fizyka materii skondensowanej — wiązania, kryształy, półprzewodniki, nadprzewodniki",
    "text": "Dlaczego napięcie progowe (bariera potencjału) w kierunku przewodzenia diody krzemowej ($U_0 \\approx 0{,}7\\text{ V}$) jest większe niż diody germanowej ($U_0 \\approx 0{,}3\\text{ V}$)?",
    "options": [
      {
        "text": "Krzem ma szerszą przerwę energetyczną ($E_g \\approx 1{,}12\\text{ eV}$) niż german ($E_g \\approx 0{,}67\\text{ eV}$).",
        "isCorrect": true
      },
      {
        "text": "Krzem jest metalem z nakładającymi się pasmami, podczas gdy german jest izolatorem.",
        "isCorrect": false
      },
      {
        "text": "Krzem ma znacznie węższą przerwę energetyczną ($0{,}1\\text{ eV}$) niż german ($3{,}5\\text{ eV}$).",
        "isCorrect": false
      },
      {
        "text": "Dioda germanowa przewodzi prąd wyłącznie przy ujemnej polaryzacji zaporowej.",
        "isCorrect": false
      }
    ],
    "explanation": "Wysokość bariery potencjału złącza $p$–$n$ jest bezpośrednio powiązana z szerokością przerwy energetycznej $E_g$ półprzewodnika. Krzem ma szerszą przerwę ($1{,}12\\text{ eV}$) niż german ($0{,}67\\text{ eV}$), stąd wyższe napięcie progowe ($\\sim 0{,}7\\text{ V}$ wobec $\\sim 0{,}3\\text{ V}$)."
  },
  {
    "id": 253,
    "category": "5. Fizyka materii skondensowanej — wiązania, kryształy, półprzewodniki, nadprzewodniki",
    "text": "Które zależności poprawnie zestawiają wpływ wzrostu temperatury $T$ na przewodnictwo elektryczne METALI oraz PÓŁPRZEWODNIKÓW samoistnych?",
    "options": [
      {
        "text": "W metalu przewodnictwo maleje (opór rośnie), bo nasilają się drgania sieci (fonony).",
        "isCorrect": true
      },
      {
        "text": "W półprzewodniku przewodnictwo rośnie, bo wykładniczo przybywa par elektron–dziura.",
        "isCorrect": true
      },
      {
        "text": "W metalu wraz ze wzrostem temperatury gwałtownie rośnie liczba swobodnych elektronów.",
        "isCorrect": false
      },
      {
        "text": "W półprzewodniku wzrost temperatury zmniejsza przewodnictwo z powodu zaniku dziur.",
        "isCorrect": false
      }
    ],
    "explanation": "W metalu liczba elektronów swobodnych jest praktycznie stała, a wzrost $T$ zwiększa rozpraszanie na drgających jonach sieci (opór rośnie). W półprzewodniku samoistnym dominuje wykładniczy przyrost koncentracji nośników przeskakujących przerwę $E_g$ (opór maleje, przewodnictwo rośnie)."
  },
  {
    "id": 254,
    "category": "5. Fizyka materii skondensowanej — wiązania, kryształy, półprzewodniki, nadprzewodniki",
    "text": "Koncentracja samoistnych nośników ładunku w półprzewodniku spełnia zależność $n_i \\propto T^{3/2} e^{-E_g / (2k_B T)}$. Jak wpływa większa szerokość przerwy energetycznej $E_g$ na przewodnictwo w temperaturze pokojowej?",
    "options": [
      {
        "text": "Im szersza przerwa $E_g$, tym trudniej elektronom przeskoczyć do pasma przewodnictwa i mniejsze $n_i$.",
        "isCorrect": true
      },
      {
        "text": "Im szersza przerwa $E_g$, tym łatwiej elektronom przeskoczyć do pasma przewodnictwa i większe $n_i$.",
        "isCorrect": false
      },
      {
        "text": "Szerokość przerwy $E_g$ wpływa na przewodnictwo wyłącznie w temperaturze zera bezwzględnego $0\\text{ K}$.",
        "isCorrect": false
      },
      {
        "text": "Koncentracja nośników $n_i$ rośnie liniowo wraz z szerokością przerwy $E_g$ w temperaturze $300\\text{ K}$.",
        "isCorrect": false
      }
    ],
    "explanation": "Wykładnik $-E_g/(2k_B T)$ jest ujemny: większe $E_g$ silnie tłumi wykładniczo liczbę wzbudzonych termicznie elektronów w paśmie przewodnictwa. Gdy $E_g > 3$–$4\\text{ eV}$, materiał praktycznie nie przewodzi w $300\\text{ K}$ i jest izolatorem."
  },
  {
    "id": 255,
    "category": "5. Fizyka materii skondensowanej — wiązania, kryształy, półprzewodniki, nadprzewodniki",
    "text": "Które ze stwierdzeń poprawnie opisują skutki domieszkowania czystego krzemu (grupa IV) pierwiastkami z sąsiednich grup układu okresowego?",
    "options": [
      {
        "text": "Domieszka fosforu (P) lub arsenu (As) z grupy V wprowadza donory i daje półprzewodnik typu $n$.",
        "isCorrect": true
      },
      {
        "text": "Domieszka boru (B), glinu (Al) lub galu (Ga) z grupy III wprowadza akceptory i daje typ $p$.",
        "isCorrect": true
      },
      {
        "text": "Domieszkowanie znacznie zwiększa przewodnictwo elektryczne krzemu w temperaturze pokojowej.",
        "isCorrect": true
      },
      {
        "text": "Domieszkowanie pierwiastkami grupy III lub V nie zmienia koncentracji nośników w krzemie.",
        "isCorrect": false
      }
    ],
    "explanation": "Niewielka domieszka z grupy V (5 elektronów walencyjnych $\\to$ dodatkowy swobodny elektron, typ $n$) lub grupy III (3 elektrony walencyjne $\\to$ ruchoma dziura, typ $p$) radykalnie podnosi koncentrację nośników i przewodnictwo względem czystego krzemu samoistnego."
  },
  {
    "id": 256,
    "category": "5. Fizyka materii skondensowanej — wiązania, kryształy, półprzewodniki, nadprzewodniki",
    "text": "Które zestawienia materiałów oraz własności dla nadprzewodników I i II rodzaju (EFW5 s. 23–25) są poprawne?",
    "options": [
      {
        "text": "Nadprzewodniki I rodzaju to czyste metale (Hg, Pb, Sn, Al) z jednym niskim polem $H_c$.",
        "isCorrect": true
      },
      {
        "text": "Nadprzewodniki II rodzaju to stopy (NbTi, $\\text{Nb}_3\\text{Sn}$) i ceramiki (YBCO) z dwoma polami.",
        "isCorrect": true
      },
      {
        "text": "Nadprzewodniki I rodzaju wytrzymują pola do $100\\text{ T}$ i stosuje się je w magnesach LHC.",
        "isCorrect": false
      },
      {
        "text": "Ceramika wysokotemperaturowa YBCO ($T_c = 93\\text{ K}$) jest nadprzewodnikiem pierwszego rodzaju.",
        "isCorrect": false
      }
    ],
    "explanation": "Czyste metale (Hg, Pb, Sn, Al) są nadprzewodnikami I rodzaju o bardzo niskim $H_c$. Natomiast stopy (NbTi, $\\text{Nb}_3\\text{Sn}$) i ceramiki wysokotemperaturowe (YBCO $T_c=93\\text{ K}$, BSCCO) to nadprzewodniki II rodzaju o dwóch polach krytycznych ($H_{c1}, H_{c2}$ nawet do $100\\text{ T}$), stosowane w MRI i LHC."
  },
  {
    "id": 257,
    "category": "5. Fizyka materii skondensowanej — wiązania, kryształy, półprzewodniki, nadprzewodniki",
    "text": "W stanie mieszanym nadprzewodnika II rodzaju strumień pola magnetycznego wnikającego przez pojedynczy wir (worteks) jest skwantowany i wynosi $\\Phi_0 = \\frac{h}{2e}$. O czym świadczy czynnik $2e$ w mianowniku tego wzoru?",
    "options": [
      {
        "text": "Nośnikami prądu nadprzewodzącego są pary elektronów (pary Coopera o ładunku $2e$).",
        "isCorrect": true
      },
      {
        "text": "W nadprzewodniku II rodzaju prąd przenoszą podwójnie naładowane cząstki $\\alpha$ ($+2e$).",
        "isCorrect": false
      },
      {
        "text": "Nadprzewodnik II rodzaju posiada dokładnie dwa pola krytyczne $H_{c1}$ oraz $H_{c2}$.",
        "isCorrect": false
      },
      {
        "text": "Opór elektryczny w stanie mieszanym rośnie dokładnie dwukrotnie względem normalnego.",
        "isCorrect": false
      }
    ],
    "explanation": "Wartość kwantu strumienia magnetycznego $\\Phi_0 = \\frac{h}{2e}$ stanowi bezpośrednie doświadczalne potwierdzenie teorii BCS: nośnikami nadprądu są związane pary elektronów (pary Coopera) o łącznym ładunku $-2e$!"
  },
  {
    "id": 258,
    "category": "5. Fizyka materii skondensowanej — wiązania, kryształy, półprzewodniki, nadprzewodniki",
    "text": "Które zastosowania urządzeń półprzewodnikowych oraz nadprzewodników omawiano na wykładzie EFW5 (s. 17–26)?",
    "options": [
      {
        "text": "Diody $p$–$n$ służą jako prostowniki prądu, a diody Zenera do stabilizacji napięcia.",
        "isCorrect": true
      },
      {
        "text": "Nadprzewodniki stosuje się w skanerach MRI, kolejach Maglev, magnesach LHC i wnękach RF.",
        "isCorrect": true
      },
      {
        "text": "Ogniwa fotowoltaiczne wykorzystują efekt Meissnera do magazynowania pola magnetycznego.",
        "isCorrect": false
      },
      {
        "text": "Tranzystor bipolarny służy wyłącznie do spowalniania neutronów w reaktorach jądrowych.",
        "isCorrect": false
      }
    ],
    "explanation": "Na slajdach EFW5 wymieniono: diody jako prostowniki, diody Zenera w stabilizatorach napięcia, tranzystory jako wzmacniacze, ogniwa PV (złącza $p$–$n$ zamieniające fotony na prąd) oraz nadprzewodniki w MRI, Maglev, przesyle prądu, magnesach i wnękach rezonansowych akceleratorów."
  },
  {
    "id": 259,
    "category": "6. Elementy fizyki jądrowej — budowa jądra, rozpady, reaktory",
    "text": "Które definicje podstawowych pojęć z budowy jądra atomowego są poprawne?",
    "options": [
      {
        "text": "Izotopy to nuklidy o tej samej liczbie protonów $Z$ i różnej liczbie neutronów $N$.",
        "isCorrect": true
      },
      {
        "text": "Izotony mają tę samą liczbę neutronów $N$, a izobary tę samą liczbę masową $A$.",
        "isCorrect": true
      },
      {
        "text": "Liczba masowa $A = Z + N$ oznacza łączną liczbę nukleonów w jądrze atomowym.",
        "isCorrect": true
      },
      {
        "text": "Izotopy mają zawsze tę samą liczbę masową $A$, lecz różne liczby protonów $Z$.",
        "isCorrect": false
      }
    ],
    "explanation": "Izotopy mają to samo $Z$ (różne $N$ i $A$), izotony to samo $N$, a izobary to samo $A$ (różne $Z$). Liczba masowa $A = Z + N$ to łączna liczba nukleonów."
  },
  {
    "id": 260,
    "category": "6. Elementy fizyki jądrowej — budowa jądra, rozpady, reaktory",
    "text": "Które ze stwierdzeń na temat promienia jądra atomowego oraz gęstości materii jądrowej są prawdziwe?",
    "options": [
      {
        "text": "Promień jądra rośnie z liczbą masową według wzoru $R = r_0 A^{1/3}$ ($r_0 \\approx 1{,}2\\text{ fm}$).",
        "isCorrect": true
      },
      {
        "text": "Gęstość materii jądrowej jest niemal stała i nie zależy od liczby masowej $A$ jądra.",
        "isCorrect": true
      },
      {
        "text": "Materia jądrowa jest o ok. $14$ rzędów wielkości gęstsza niż zwykła materia atomowa.",
        "isCorrect": true
      },
      {
        "text": "Promień jądra jest liniowo proporcjonalny do liczby masowej ($R = r_0 A$).",
        "isCorrect": false
      }
    ],
    "explanation": "Ponieważ $R = r_0 A^{1/3}$, objętość jądra $V \\propto R^3 \\propto A$ jest proporcjonalna do liczby nukleonów, co oznacza niemal stałą, gigantyczną gęstość materii jądrowej ($\\sim 10^{14}\\times$ większą niż zwykłej materii — 1 łyżeczka ważyłaby ok. $1{,}2\\cdot 10^{12}\\text{ t}$, EFW6 s. 2)."
  },
  {
    "id": 261,
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
    "id": 262,
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
    "id": 263,
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
    "id": 264,
    "category": "6. Elementy fizyki jądrowej — budowa jądra, rozpady, reaktory",
    "text": "Które ze stwierdzeń na temat właściwości NEUTRONU są prawdziwe?",
    "options": [
      {
        "text": "Jest fermionem o spinie połówkowym $1/2$ i zerowym ładunku elektrycznym.",
        "isCorrect": true
      },
      {
        "text": "Posiada niezerowy moment magnetyczny ($-1{,}91\\,\\mu_N$) przeciwny do spinu.",
        "isCorrect": true
      },
      {
        "text": "Ma masę nieco mniejszą niż proton, dzięki czemu swobodny neutron jest stabilny.",
        "isCorrect": false
      },
      {
        "text": "Nie posiada momentu magnetycznego, bo nie ma wypadkowego ładunku elektrycznego.",
        "isCorrect": false
      }
    ],
    "explanation": "Neutron to fermion ($s = 1/2$) o ładunku $0$, lecz przez wewnętrzną strukturę kwarkową ma niezerowy moment magnetyczny ($-1{,}91\\,\\mu_N$, przeciwny do spinu). Jego masa jest nieco WIĘKSZA niż protonu, dlatego swobodny neutron jest niestabilny ($\\beta^-$)."
  },
  {
    "id": 265,
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
    "id": 266,
    "category": "6. Elementy fizyki jądrowej — budowa jądra, rozpady, reaktory",
    "text": "Które właściwości charakteryzują ODDZIAŁYWANIE JĄDROWE SILNE utrzymujące nukleony razem w jądrze?",
    "options": [
      {
        "text": "Jest najsilniejszym oddziaływaniem podstawowym i przejawem sił między kwarkami.",
        "isCorrect": true
      },
      {
        "text": "Ma krótki zasięg ($\\sim 1$–$2\\text{ fm}$) i jest niezależne od ładunku ($p$-$p$, $p$-$n$, $n$-$n$).",
        "isCorrect": true
      },
      {
        "text": "Działa również bardzo silnie na neutrina powstające podczas rozpadów $\\beta$.",
        "isCorrect": false
      },
      {
        "text": "Ma nieskończony zasięg i przyciąga elektrony krążące na odległych powłokach.",
        "isCorrect": false
      }
    ],
    "explanation": "Oddziaływanie jądrowe silne jest najsilniejsze, krótkozasięgowe ($\\sim 1$–$2\\text{ fm}$) i niezależne od ładunku ($p$-$p$, $p$-$n$, $n$-$n$). Nie działa w ogóle na elektrony ani neutrina i nie ma nieskończonego zasięgu."
  },
  {
    "id": 267,
    "category": "6. Elementy fizyki jądrowej — budowa jądra, rozpady, reaktory",
    "text": "Które ze stwierdzeń poprawnie opisują energię wiązania jądra atomowego oraz model kroplowy von Weizsäckera?",
    "options": [
      {
        "text": "Energia wiązania to praca rozbicia jądra na osobne nukleony: $\\Delta E = \\Delta m\\,c^2$.",
        "isCorrect": true
      },
      {
        "text": "Masa związanego jądra stabilnego jest mniejsza niż suma mas wolnych nukleonów.",
        "isCorrect": true
      },
      {
        "text": "Równanie von Weizsäckera uwzględnia człony objętościowy, powierzchniowy i kulombowski.",
        "isCorrect": true
      },
      {
        "text": "Masa związanego jądra stabilnego jest zawsze większa niż suma mas wolnych nukleonów.",
        "isCorrect": false
      }
    ],
    "explanation": "Związane jądro ma mniejszą masę niż suma mas jego swobodnych nukleonów (ubytek masy $\\Delta m$ odpowiada energii wiązania $\\Delta E = \\Delta m c^2$). Model kroplowy von Weizsäckera opisuje ją przez człony objętościowy, powierzchniowy, kulombowski, symetrii i parzystości."
  },
  {
    "id": 268,
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
    "id": 269,
    "category": "6. Elementy fizyki jądrowej — budowa jądra, rozpady, reaktory",
    "text": "Które ze stwierdzeń poprawnie opisują ścieżkę stabilności jąder atomowych?",
    "options": [
      {
        "text": "Dla lekkich jąder ($A \\le 40$) preferowana jest zbliżona liczba neutronów ($N \\approx Z$).",
        "isCorrect": true
      },
      {
        "text": "Dla cięższych jąder ($A > 40$) potrzeba nadmiaru neutronów ($N > Z$) przez odpychanie.",
        "isCorrect": true
      },
      {
        "text": "Powyżej $Z = 83$ (bizmut $^{209}\\text{Bi}$) brak w pełni stabilnych nuklidów w przyrodzie.",
        "isCorrect": true
      },
      {
        "text": "Dla ciężkich jąder ($A > 150$) najtrwalsze są jądra o przewadze protonów ($Z > N$).",
        "isCorrect": false
      }
    ],
    "explanation": "Dla $A \\le 40$ stabilne jądra mają $N \\approx Z$, dla $A > 40$ wymagają nadmiaru neutronów ($N > Z$) kompensujących dalekozasięgowe odpychanie kulombowskie protonów, a powyżej $Z = 83$ ($^{209}\\text{Bi}$) brak w pełni stabilnych nuklidów."
  },
  {
    "id": 270,
    "category": "6. Elementy fizyki jądrowej — budowa jądra, rozpady, reaktory",
    "text": "Które stwierdzenia dotyczące parzystości nukleonów i stabilności wybranych lekkich jąder są prawdziwe?",
    "options": [
      {
        "text": "Większość trwałych nuklidów o parzystym $A$ ma parzyste $Z$ oraz parzyste $N$ (parowanie spinów).",
        "isCorrect": true
      },
      {
        "text": "Istnieją tylko cztery stabilne nuklidy nieparzysto-nieparzyste: $^2\\text{H}, ^6\\text{Li}, ^{10}\\text{B}, ^{14}\\text{N}$.",
        "isCorrect": true
      },
      {
        "text": "Wśród lekkich jąder jądro helu $^4_2\\text{He}$ jest szczególnie silnie związane (ostry pik na wykresie).",
        "isCorrect": true
      },
      {
        "text": "Jądra parzysto-parzyste są najmniej trwałe i ulegają natychmiastowemu rozpadowi w próżni.",
        "isCorrect": false
      }
    ],
    "explanation": "Z powodu zakazu Pauliego parowanie nukleonów o przeciwnych spinach jest silnie korzystne: jądra parzysto-parzyste są najbardziej stabilne (w tym ostry pik dla $^4\\text{He}$, dlatego emitowane jest ono w rozpadzie $\\alpha$), a nieparzysto-nieparzystych stabilnych nuklidów jest tylko 4 ($^2\\text{H}, ^6\\text{Li}, ^{10}\\text{B}, ^{14}\\text{N}$)."
  },
  {
    "id": 271,
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
    "id": 272,
    "category": "6. Elementy fizyki jądrowej — budowa jądra, rozpady, reaktory",
    "text": "Które ze stwierdzeń poprawnie opisują prawo rozpadu promieniotwórczego oraz aktywność próbki?",
    "options": [
      {
        "text": "Liczba nierozpadniętych jąder maleje wykładniczo: $N(t) = N_0 e^{-\\lambda t}$.",
        "isCorrect": true
      },
      {
        "text": "Stała rozpadu $\\lambda$ [$\\text{s}^{-1}$] to prawdopodobieństwo rozpadu w ciągu $1\\text{ s}$.",
        "isCorrect": true
      },
      {
        "text": "Aktywność $R = \\lambda N$ wyraża się w bekerelach ($1\\text{ Bq} = 1\\text{ rozpad/s}$).",
        "isCorrect": true
      },
      {
        "text": "Po czasie równym $2\\,t_{1/2}$ rozpadowi ulega dokładnie $100\\%$ wszystkich jąder.",
        "isCorrect": false
      }
    ],
    "explanation": "Rozpad promieniotwórczy opisuje funkcja wykładnicza $N(t) = N_0 e^{-\\lambda t}$, gdzie $\\lambda$ [$\\text{s}^{-1}$] to prawdopodobieństwo rozpadu w $1\\text{ s}$, a aktywność $R = \\lambda N$ mierzy się w Bq. Po czasie $2 t_{1/2}$ rozpada się $75\\%$ jąder (pozostaje $25\\%$), a nie $100\\%$."
  },
  {
    "id": 273,
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
    "id": 274,
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
    "id": 275,
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
    "id": 276,
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
    "id": 277,
    "category": "6. Elementy fizyki jądrowej — budowa jądra, rozpady, reaktory",
    "text": "Które ze stwierdzeń poprawnie charakteryzują przenikliwość promieniowania $\\alpha$, $\\beta$ oraz $\\gamma$?",
    "options": [
      {
        "text": "Promieniowanie $\\alpha$ ma najmniejszą przenikliwość — zatrzymuje je już kartka papieru.",
        "isCorrect": true
      },
      {
        "text": "Promieniowanie $\\beta$ ma średnią przenikliwość — zatrzymuje je cienka płyta Al lub pleksi.",
        "isCorrect": true
      },
      {
        "text": "Promieniowanie $\\gamma$ jest najbardziej przenikliwe — wymaga grubej warstwy ołowiu lub betonu.",
        "isCorrect": true
      },
      {
        "text": "Cząstki $\\alpha$ z łatwością przechodzą przez grubą płytę ołowianą bez wyraźnego osłabienia.",
        "isCorrect": false
      }
    ],
    "explanation": "Przenikliwość rośnie w kolejności $\\alpha < \\beta < \\gamma$: ciężkie i podwójnie naładowane cząstki $\\alpha$ zatrzymuje kartka papieru, cząstki $\\beta$ cienka blacha aluminiowa/pleksi, a wysokoenergetyczne fotony $\\gamma$ dopiero gruba osłona z ołowiu lub betonu."
  },
  {
    "id": 278,
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
    "id": 279,
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
    "id": 280,
    "category": "6. Elementy fizyki jądrowej — budowa jądra, rozpady, reaktory",
    "text": "Które ze stwierdzeń poprawnie opisują rozpad promieniotwórczy $\\beta$?",
    "options": [
      {
        "text": "Jest przejawem oddziaływania słabego i zachodzi bez zmiany liczby masowej $A$.",
        "isCorrect": true
      },
      {
        "text": "Jądra z nadmiarem neutronów ulegają rozpadowi $\\beta^-$ (liczba $Z$ rośnie o $1$).",
        "isCorrect": true
      },
      {
        "text": "Jądra z nadmiarem protonów ulegają rozpadowi $\\beta^+$ lub EC (liczba $Z$ maleje o $1$).",
        "isCorrect": true
      },
      {
        "text": "W każdym rozpadzie $\\beta$ liczba masowa $A$ jądra maleje zawsze dokładnie o cztery.",
        "isCorrect": false
      }
    ],
    "explanation": "Rozpad $\\beta$ zachodzi przez oddziaływanie słabe bez zmiany $A$ ($A$ maleje o 4 w rozpadzie $\\alpha$). Przy nadmiarze neutronów zachodzi $\\beta^-$ ($Z \\to Z+1$), a przy nadmiarze protonów $\\beta^+$ lub wychwyt elektronu ($Z \\to Z-1$)."
  },
  {
    "id": 281,
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
    "id": 282,
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
    "id": 283,
    "category": "6. Elementy fizyki jądrowej — budowa jądra, rozpady, reaktory",
    "text": "Które ze stwierdzeń na temat neutrin oraz historii ich odkrycia są prawdziwe?",
    "options": [
      {
        "text": "Postulował je W. Pauli w 1930 r., aby zachować energię, pęd i moment pędu w rozpadzie $\\beta$.",
        "isCorrect": true
      },
      {
        "text": "Dzielą się energią rozpadu $\\beta$ z elektronem, co tłumaczy ciągłe widmo energii elektronów $\\beta$.",
        "isCorrect": true
      },
      {
        "text": "Nie działa na nie oddziaływanie silne i ekstremalnie słabo oddziałują z materią.",
        "isCorrect": true
      },
      {
        "text": "Stanowią główny naładowany składnik jąder atomowych obok protonów i elektronów.",
        "isCorrect": false
      }
    ],
    "explanation": "Neutrina są elektrycznie obojętne, nie wchodzą w skład jąder atomowych i nie podlegają oddziaływaniu silnemu. Pauli postulował je w 1930 r., by ocalić zasady zachowania energii, pędu i spinu oraz wyjaśnić ciągłe widmo elektronów w rozpadzie $\\beta$."
  },
  {
    "id": 284,
    "category": "6. Elementy fizyki jądrowej — budowa jądra, rozpady, reaktory",
    "text": "Które ze stwierdzeń na temat rozpadu (emisji) $\\gamma$ oraz izomerów jądrowych są prawdziwe?",
    "options": [
      {
        "text": "Wzbudzone jądro emituje wysokoenergetyczny foton ($>100\\text{ keV}$) bez zmiany $A$ oraz $Z$.",
        "isCorrect": true
      },
      {
        "text": "Długożyciowe stany wzbudzone (metastabilne) jąder nazywamy izomerami jądrowymi.",
        "isCorrect": true
      },
      {
        "text": "Izomer $^{99m}\\text{Tc}$ ($t_{1/2} = 6\\text{ h}$, $140\\text{ keV}$) jest szeroko używany w medycynie nuklearnej.",
        "isCorrect": true
      },
      {
        "text": "Emisja fotonu $\\gamma$ zawsze zmniejsza liczbę atomową $Z$ jądra o dwa i liczbę $A$ o cztery.",
        "isCorrect": false
      }
    ],
    "explanation": "Rozpad $\\gamma$ to deekscytacja wzbudzonego jądra bez zmiany liczb $A$ i $Z$ (zmiana $A-4, Z-2$ to rozpad $\\alpha$). Długożyciowe stany wzbudzone to izomery jądrowe, np. $^{99m}\\text{Tc}$ stosowany w scyntygrafii (EFW6 s. 13 i 20)."
  },
  {
    "id": 285,
    "category": "6. Elementy fizyki jądrowej — budowa jądra, rozpady, reaktory",
    "text": "Które ze stwierdzeń na temat sztucznych reakcji jądrowych (bombardowania jąder) są prawdziwe?",
    "options": [
      {
        "text": "Transmutacja oznacza zamianę jednego pierwiastka w inny wskutek zderzenia z cząstką.",
        "isCorrect": true
      },
      {
        "text": "Fotodezintegracja to rozpad jądra wywołany pochłonięciem wysokoenergetycznego fotonu $\\gamma$.",
        "isCorrect": true
      },
      {
        "text": "Po uderzeniu pocisku powstaje pośrednie jądro złożone dające piki rezonansowe przekroju.",
        "isCorrect": true
      },
      {
        "text": "Wychwyt radiacyjny polega na wybiciu z atomu zewnętrznego elektronu przez światło widzialne.",
        "isCorrect": false
      }
    ],
    "explanation": "Wychwyt radiacyjny to pochłonięcie neutronu lub protonu przez jądro z utworzeniem cięższego jądra (i emisją $\\gamma$) — nie ma nic wspólnego ze zjawiskiem fotoelektrycznym. Pozostałe trzy zdania wiernie opisują reakcje jądrowe z wykładu EFW6 s. 14."
  },
  {
    "id": 286,
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
    "id": 287,
    "category": "6. Elementy fizyki jądrowej — budowa jądra, rozpady, reaktory",
    "text": "Które ze stwierdzeń poprawnie opisują reakcję rozszczepienia ciężkich jąder (np. $^{235}_{92}\\text{U}$)?",
    "options": [
      {
        "text": "Jądro dzieli się na dwa nierówne fragmenty, $2$–$3$ prędkie neutrony i ok. $200\\text{ MeV}$.",
        "isCorrect": true
      },
      {
        "text": "Do podtrzymania reakcji łańcuchowej potrzebna jest minimalna masa krytyczna paliwa.",
        "isCorrect": true
      },
      {
        "text": "Rozszczepienie wymuszone zachodzi łatwiej pod wpływem prędkich niż termicznych neutronów.",
        "isCorrect": false
      },
      {
        "text": "Rozszczepienie samoistne jest szybkie i stanowi główne źródło mocy w elektrowniach.",
        "isCorrect": false
      }
    ],
    "explanation": "Rozszczepienie $^{235}\\text{U}$ daje dwa nierówne fragmenty, $2$–$3$ neutrony i ok. $200\\text{ MeV}$, a reakcja łańcuchowa wymaga masy krytycznej. Najskuteczniejsze są jednak powolne neutrony TERMICZNE (nie prędkie!), a rozszczepienie samoistne jest skrajnie rzadkie."
  },
  {
    "id": 288,
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
    "id": 289,
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
    "id": 290,
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
    "id": 291,
    "category": "6. Elementy fizyki jądrowej — budowa jądra, rozpady, reaktory",
    "text": "Które ze stwierdzeń na temat reakcji syntezy jądrowej (fuzji) w gwiazdach i na Ziemi są prawdziwe?",
    "options": [
      {
        "text": "W gwiazdach energię dają łańcuch protonowy ($>4\\cdot 10^6\\text{ K}$) oraz gorący cykl CNO.",
        "isCorrect": true
      },
      {
        "text": "W fuzji kontrolowanej (D+T) rozwija się uwięzienie magnetyczne (tokamak) i inercyjne.",
        "isCorrect": true
      },
      {
        "text": "Połączenie jąder w rdzeniu gwiazdy wymaga tunelowania przez barierę kulombowską.",
        "isCorrect": true
      },
      {
        "text": "Fuzja jąder wodoru zachodzi samorzutnie w $300\\text{ K}$ bez żadnej bariery potencjału.",
        "isCorrect": false
      }
    ],
    "explanation": "Fuzja w gwiazdach (łańcuch $p$-$p$ i cykl CNO) wymaga wysokich temperatur i kwantowego tunelowania przez barierę kulombowską. Na Ziemi (fuzja D+T) rozwijane są tokamaki (uwięzienie magnetyczne) i lasery NIF (inercyjne)."
  },
  {
    "id": 292,
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
  },
  {
    "id": 293,
    "category": "6. Elementy fizyki jądrowej — budowa jądra, rozpady, reaktory",
    "text": "Promień jądra atomowego wyraża się wzorem $R = r_0 A^{1/3}$. Ile razy promień jądra o liczbie masowej $A_2 = 64$ jest większy od promienia jądra o liczbie masowej $A_1 = 8$?",
    "options": [
      {
        "text": "Dokładnie $2$ razy, ponieważ $R_2 / R_1 = (64/8)^{1/3} = 2$.",
        "isCorrect": true
      },
      {
        "text": "Dokładnie $8$ razy, ponieważ promień rośnie liniowo z $A$.",
        "isCorrect": false
      },
      {
        "text": "Dokładnie $4$ razy, ponieważ $R_2 / R_1 = (64/8)^{2/3} = 4$.",
        "isCorrect": false
      },
      {
        "text": "Dokładnie $2{,}8$ razy, ponieważ $R_2 / R_1 = \\sqrt{64/8}$.",
        "isCorrect": false
      }
    ],
    "explanation": "Z zależności $R = r_0 A^{1/3}$ otrzymujemy $R_1 = 2 r_0$ (dla $A=8$) oraz $R_2 = 4 r_0$ (dla $A=64$), więc stosunek promieni wynosi $R_2 / R_1 = 4/2 = (64/8)^{1/3} = 2$."
  },
  {
    "id": 294,
    "category": "6. Elementy fizyki jądrowej — budowa jądra, rozpady, reaktory",
    "text": "Izotop A ma DWUKROTNIE krótszy czas połowicznego rozpadu niż izotop B ($t_{1/2,A} = \\frac{1}{2} t_{1/2,B}$). Jak ma się stała rozpadu $\\lambda_A$ do $\\lambda_B$?",
    "options": [
      {
        "text": "$\\lambda_A = 2\\lambda_B$, ponieważ stała rozpadu $\\lambda = \\ln 2 / t_{1/2}$ jest odwrotnie proporcjonalna do $t_{1/2}$.",
        "isCorrect": true
      },
      {
        "text": "$\\lambda_A = \\frac{1}{2}\\lambda_B$, ponieważ stała rozpadu jest wprost proporcjonalna do czasu $t_{1/2}$.",
        "isCorrect": false
      },
      {
        "text": "$\\lambda_A = 4\\lambda_B$, ponieważ stała rozpadu jest odwrotnie proporcjonalna do kwadratu $t_{1/2}^2$.",
        "isCorrect": false
      },
      {
        "text": "$\\lambda_A = \\lambda_B$, ponieważ stała rozpadu $\\lambda$ jest uniwersalną stałą dla wszystkich izotopów.",
        "isCorrect": false
      }
    ],
    "explanation": "Ze związku $t_{1/2} = \\frac{\\ln 2}{\\lambda}$ wynika $\\lambda = \\frac{\\ln 2}{t_{1/2}}$. Izotop rozpadający się szybciej (dwukrotnie krótszy czas połowicznego rozpadu) ma więc dwukrotnie WIĘKSZE prawdopodobieństwo rozpadu w czasie $1\\text{ s}$ ($\\lambda_A = 2\\lambda_B$)."
  },
  {
    "id": 295,
    "category": "6. Elementy fizyki jądrowej — budowa jądra, rozpady, reaktory",
    "text": "Próbka promieniotwórcza o czasie połowicznego rozpadu $t_{1/2} = 5\\text{ minut}$ ma początkową aktywność $R_0 = 800\\text{ Bq}$. Ile wyniesie jej aktywność po upływie $t = 15\\text{ minut}$?",
    "options": [
      {
        "text": "$R = 100\\text{ Bq}$, ponieważ minęły $3$ okresy połowicznego rozpadu ($800 / 2^3$).",
        "isCorrect": true
      },
      {
        "text": "$R = 200\\text{ Bq}$, ponieważ minęły $2$ okresy połowicznego rozpadu ($800 / 2^2$).",
        "isCorrect": false
      },
      {
        "text": "$R = 267\\text{ Bq}$, ponieważ aktywność zmalała trzykrotnie ($800 / 3$).",
        "isCorrect": false
      },
      {
        "text": "$R = 50\\text{ Bq}$, ponieważ minęły $4$ okresy połowicznego rozpadu ($800 / 2^4$).",
        "isCorrect": false
      }
    ],
    "explanation": "Aktywność $R(t) = \\lambda N(t) = R_0 e^{-\\lambda t}$ maleje wykładniczo dokładnie tak samo jak liczba jąder $N(t)$. W czasie $15\\text{ min}$ upływają $k = 15/5 = 3$ okresy połowicznego rozpadu, więc $R = 800 / 2^3 = 800 / 8 = 100\\text{ Bq}$."
  },
  {
    "id": 296,
    "category": "6. Elementy fizyki jądrowej — budowa jądra, rozpady, reaktory",
    "text": "Wykorzystywany w datowaniu radiowęglowym izotop węgla $^{14}_6\\text{C}$ ulega rozpadowi $\\beta^-$. Jakie jądro potomne powstaje w wyniku tego rozpadu?",
    "options": [
      {
        "text": "Jądro azotu $^{14}_7\\text{N}$ (liczba masowa $A = 14$ bez zmian, liczba atomowa $Z$ rośnie o $1$).",
        "isCorrect": true
      },
      {
        "text": "Jądro boru $^{14}_5\\text{B}$ (liczba masowa $A = 14$ bez zmian, liczba atomowa $Z$ maleje o $1$).",
        "isCorrect": false
      },
      {
        "text": "Jądro berylu $^{10}_4\\text{Be}$ (liczba masowa $A$ maleje o $4$, a liczba atomowa $Z$ maleje o $2$).",
        "isCorrect": false
      },
      {
        "text": "Jądro węgla $^{13}_6\\text{C}$ (liczba masowa $A$ maleje o $1$, a liczba atomowa $Z$ bez zmian).",
        "isCorrect": false
      }
    ],
    "explanation": "W rozpadzie $\\beta^-$ jeden neutron zamienia się w proton ($n \\to p + e^- + \\bar{\\nu}_e$), więc $A$ pozostaje stałe ($14$), a $Z$ rośnie z $6$ do $7$: $^{14}_6\\text{C} \\to {}^{14}_7\\text{N} + e^- + \\bar{\\nu}_e$."
  },
  {
    "id": 297,
    "category": "6. Elementy fizyki jądrowej — budowa jądra, rozpady, reaktory",
    "text": "Które fakty z tabeli naturalnej aktywności różnych substancji (EFW6 s. 8) są prawdziwe?",
    "options": [
      {
        "text": "Ciało człowieka ($1\\text{ kg}$) ma aktywność ok. $100\\text{ Bq}$ (głównie izotopy $^{40}\\text{K}$ i $^{14}\\text{C}$).",
        "isCorrect": true
      },
      {
        "text": "Banany ($1\\text{ kg}$) mają aktywność ok. $125\\text{ Bq}$ za sprawą izotopu potasu $^{40}\\text{K}$ ($\\beta^-$).",
        "isCorrect": true
      },
      {
        "text": "Zwykła żywność oraz ludzkie ciało mają zawsze aktywność dokładnie równą $0\\text{ Bq}$.",
        "isCorrect": false
      },
      {
        "text": "Kilogram bananów wykazuje znacznie większą aktywność niż kilogram izotopu $^{238}\\text{U}$.",
        "isCorrect": false
      }
    ],
    "explanation": "Według tabeli ze slajdu 8 wykładu EFW6 naturalne źródła promieniotwórczości są wszechobecne: woda pitna ($0{,}4$–$40\\text{ Bq/kg}$, $^{222}\\text{Rn}$), ciało człowieka ($100\\text{ Bq/kg}$, $^{40}\\text{K}, ^{14}\\text{C}$), banany ($125\\text{ Bq/kg}$, $^{40}\\text{K}$), orzechy brazylijskie ($206\\text{ Bq/kg}$), podczas gdy $1\\text{ kg}$ $^{238}\\text{U}$ ma aż $10^7\\text{ Bq}$."
  },
  {
    "id": 298,
    "category": "6. Elementy fizyki jądrowej — budowa jądra, rozpady, reaktory",
    "text": "Które ze stwierdzeń poprawnie opisują mechanizm i energetykę rozpadu $\\alpha$ (EFW6 s. 10)?",
    "options": [
      {
        "text": "Rozpad zachodzi dla ciężkich jąder ($A > 150$), gdy wyzwolona energia rozpadu spełnia $Q > 0$.",
        "isCorrect": true
      },
      {
        "text": "Cząstka $\\alpha$ opuszcza jądro dzięki kwantowemu tunelowaniu przez barierę o wysokości ok. $20\\text{ MeV}$.",
        "isCorrect": true
      },
      {
        "text": "Niewielki wzrost energii $Q$ cząstki $\\alpha$ powoduje dramatyczne skrócenie czasu połowicznego $t_{1/2}$.",
        "isCorrect": true
      },
      {
        "text": "Cząstki $\\alpha$ mają zawsze energię kinetyczną większą niż wysokość bariery potencjału ($> 20\\text{ MeV}$).",
        "isCorrect": false
      }
    ],
    "explanation": "Cząstki $\\alpha$ mają typowo energie $4$–$9\\text{ MeV}$ — MNIEJSZE niż wysokość bariery jądrowej ($\\sim 20\\text{ MeV}$), więc wydostają się z jądra wyłącznie przez tunelowanie kwantowe. Ponieważ transmisja zależy od energii wykładniczo, niewielka zmiana $Q$ zmienia $t_{1/2}$ o wiele rzędów wielkości!"
  },
  {
    "id": 299,
    "category": "6. Elementy fizyki jądrowej — budowa jądra, rozpady, reaktory",
    "text": "Które ze stwierdzeń poprawnie opisują typy reaktorów jądrowych oraz zastosowania metod jądrowych (EFW6 s. 17 i 20)?",
    "options": [
      {
        "text": "Polski reaktor MARIA w Otwocku służy m.in. do produkcji radioizotopów (np. medycznych).",
        "isCorrect": true
      },
      {
        "text": "W medycynie stosuje się izomer $^{99m}\\text{Tc}$ do obrazowania oraz emitery $\\gamma$ w brachyterapii.",
        "isCorrect": true
      },
      {
        "text": "Wszystkie reaktory jądrowe na świecie służą wyłącznie do produkcji energii elektrycznej.",
        "isCorrect": false
      },
      {
        "text": "Aktywacja neutronowa nie znajduje żadnego zastosowania poza zbrojeniami jądrowymi.",
        "isCorrect": false
      }
    ],
    "explanation": "Na slajdach 17 i 20 wykładu EFW6 wyróżniono 3 typy reaktorów (mocy: PWR/BWR, badawcze oraz do produkcji radioizotopów jak MARIA w Otwocku) oraz zastosowania: poszukiwania ropy/gazu, medycynę ($^{99m}\\text{Tc}$, brachyterapia $^{125}\\text{I}, ^{103}\\text{Pd}$), konserwację sztuki (aktywacja neutronowa) i datowanie $^{14}\\text{C}$."
  },
  {
    "id": 300,
    "category": "6. Elementy fizyki jądrowej — budowa jądra, rozpady, reaktory",
    "text": "Które zależności poprawnie porównują masy i energie spoczynkowe ($E_0 = mc^2$) protonu, neutronu i elektronu (EFW6 s. 3)?",
    "options": [
      {
        "text": "Energia spoczynkowa elektronu wynosi $0{,}511\\text{ MeV}$ (jest ok. $1836\\times$ mniejsza niż nukleonów).",
        "isCorrect": true
      },
      {
        "text": "Energia spoczynkowa neutronu ($939{,}57\\text{ MeV}$) jest nieco większa od protonu ($938{,}27\\text{ MeV}$).",
        "isCorrect": true
      },
      {
        "text": "Energia spoczynkowa protonu jest dokładnie równa energii spoczynkowej elektronu ($0{,}511\\text{ MeV}$).",
        "isCorrect": false
      },
      {
        "text": "Proton jest cięższy od neutronu o ponad $100\\text{ MeV}$, więc swobodny proton szybko się rozpada.",
        "isCorrect": false
      }
    ],
    "explanation": "Z tabeli na slajdzie 3 wykładu EFW6: elektron ma $0{,}511\\text{ MeV}$, proton $938{,}272\\text{ MeV}$, a neutron $939{,}566\\text{ MeV}$. Niewielka przewaga masy neutronu ($\\sim 1{,}29\\text{ MeV}$) sprawia, że swobodny neutron ulega rozpadowi $\\beta^-$, natomiast swobodny proton jest stabilny."
  }
];
