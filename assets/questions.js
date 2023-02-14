const Questions = [
    {
        "id": 1,
        "question": "Do aktualizacji system\u00f3w Linux mo\u017cna wykorzysta\u0107 programy",
        "imageLoc": "",
        "answers": [
            "A. aptitude i amarok",
            "B. defrag i YaST",
            "C. cron i mount",
            "D. apt-get i zypper"
        ],
        "goodAnswer": "D. apt-get i zypper"
    },
    {
        "id": 2,
        "question": "W systemie operacyjnym Ubuntu konto u\u017cytkownika student mo\u017cna usun\u0105\u0107 za pomoc\u0105 polecenia",
        "imageLoc": "",
        "answers": [
            "A. del user student",
            "B. userdel student",
            "C. net user student /del",
            "D. user net student /del"
        ],
        "goodAnswer": "B. userdel student"
    },
    {
        "id": 3,
        "question": "Symbol kt\u00f3rego urz\u0105dzenia wskazuje na rysunek strza\u0142ka?",
        "imageLoc": require("../assets/img/1335.png"),
        "answers": [
            "A. Serwera",
            "B. Prze\u0142\u0105cznika",
            "C. Koncentratora",
            "D. Routera"
        ],
        "goodAnswer": "D. Routera"
    },
    {
        "id": 4,
        "question": "Kt\u00f3r\u0105 konfiguracj\u0119 sieciow\u0105 mo\u017ce mie\u0107 komputer nale\u017c\u0105cy do tej samej sieci LAN, co komputer o adresie 192.168.1.10/24?",
        "imageLoc": "",
        "answers": [
            "A. 192.168.1.11 i 255.255.255.0",
            "B. 192.168.1.11 i 255.255.0.0",
            "C. 192.168.0.11 i 255.255.0.0",
            "D. 192.168.0.11 i 255.255.255.0"
        ],
        "goodAnswer": "A. 192.168.1.11 i 255.255.255.0"
    },
    {
        "id": 5,
        "question": "Kt\u00f3re urz\u0105dzenie nale\u017cy wykorzysta\u0107 do pod\u0142\u0105czenia urz\u0105dzenia peryferyjnego, wyposa\u017conego w bezprzewodowy interfejs wykorzystuj\u0105cy do komunikacji fale \u015bwietlne w zakresie podczerwieni, z laptopem, kt\u00f3ry nie ma takiego interfejsu, a ma natomiast interfejs USB?",
        "imageLoc": require("../assets/img/875.png"),
        "answers": [
            "A. A",
            "B. B",
            "C. C",
            "D. D"
        ],
        "goodAnswer": "B. B"
    },
    {
        "id": 6,
        "question": "Pami\u0119ci DDR2 zasilane s\u0105 napi\u0119ciem",
        "imageLoc": "",
        "answers": [
            "A. 1,8 V",
            "B. 1,0 V",
            "C. 2,5 V",
            "D. 1,4 V"
        ],
        "goodAnswer": "A. 1,8 V"
    },
    {
        "id": 7,
        "question": "Wykonanie polecenia net use Z:192.168.20.2data /delete spowoduje",
        "imageLoc": "",
        "answers": [
            "A. od\u0142\u0105czenie katalogu data od dysku Z:",
            "B. od\u0142\u0105czenie zasob\u00f3w hosta 192.168.20.2 od dysku Z:",
            "C. przy\u0142\u0105czenie katalogu data do dysku Z:",
            "D. przy\u0142\u0105czenie zasob\u00f3w hosta 192.168.20.2 do dysku Z:"
        ],
        "goodAnswer": "A. od\u0142\u0105czenie katalogu data od dysku Z:"
    },
    {
        "id": 8,
        "question": "Przedstawione narz\u0119dzie jest stosowane do",
        "imageLoc": require("../assets/img/2119.png"),
        "answers": [
            "A. spawania przewod\u00f3w \u015bwiat\u0142owodowych.",
            "B. zaciskania wtyk\u00f3w RJ11 i RJ45.",
            "C. zdejmowania izolacji okablowani",
            "D. lokalizacji uszkodze\u0144 w\u0142\u00f3kien \u015bwiat\u0142owodowych."
        ],
        "goodAnswer": "D. lokalizacji uszkodze\u0144 w\u0142\u00f3kien \u015bwiat\u0142owodowych."
    },
    {
        "id": 9,
        "question": "Kt\u00f3ra warto\u015b\u0107 przep\u0142ywno\u015bci charakteryzuje standard 1000Base-T?",
        "imageLoc": "",
        "answers": [
            "A. 1 Gbit/s",
            "B. 1 GB/s",
            "C. 1 Mbit/s",
            "D. 1 MB/s"
        ],
        "goodAnswer": "A. 1 Gbit/s"
    },
    {
        "id": 10,
        "question": "Do automatycznego przydzielania adres\u00f3w IP stacjom roboczym jest stosowana us\u0142uga",
        "imageLoc": "",
        "answers": [
            "A. DHCP",
            "B. IMAP",
            "C. SMTP",
            "D. WINS"
        ],
        "goodAnswer": "A. DHCP"
    },
    {
        "id": 11,
        "question": "Zrzut ekranu przedstawia program",
        "imageLoc": require("../assets/img/599.png"),
        "answers": [
            "A. typu recovery",
            "B. typu firewall",
            "C. antyspamowy",
            "D. antywirusowy"
        ],
        "goodAnswer": "B. typu firewall"
    },
    {
        "id": 12,
        "question": "Prawo do modyfikowania kodu oprogramowania przez jego u\u017cytkownika daje licencja typu",
        "imageLoc": "",
        "answers": [
            "A. FREEWARE",
            "B. BOX",
            "C. GNU GPL",
            "D. MOLP"
        ],
        "goodAnswer": "C. GNU GPL"
    },
    {
        "id": 13,
        "question": "Oprogramowanie OEM (Original Equipment Manufacturer) przypisane jest do",
        "imageLoc": "",
        "answers": [
            "A. do wszystkich komputer\u00f3w w danym gospodarstwie domowym",
            "B. w\u0142a\u015bciciela/nabywcy komputera",
            "C. komputera (lub jego cz\u0119\u015bci), na kt\u00f3rym jest zainstalowane",
            "D. systemu operacyjnego zainstalowanego na danym komputerze"
        ],
        "goodAnswer": "C. komputera (lub jego cz\u0119\u015bci), na kt\u00f3rym jest zainstalowane"
    },
    {
        "id": 14,
        "question": "Kt\u00f3rego polecenia nale\u017cy u\u017cy\u0107 w konsoli do naprawy b\u0142\u0119d\u00f3w na dysku?",
        "imageLoc": "",
        "answers": [
            "A. DISKCOMP",
            "B. CHKDSK",
            "C. CHDIR",
            "D. SUBST"
        ],
        "goodAnswer": "B. CHKDSK"
    },
    {
        "id": 15,
        "question": "Dwie stacje robocze tej samej sieci nie mog\u0105 si\u0119 ze sob\u0105 komunikowa\u0107. Kt\u00f3ra z wymienionych sytuacji jest prawdopodobn\u0105 przyczyn\u0105 zaistnia\u0142ego zdarzenia?",
        "imageLoc": "",
        "answers": [
            "A. R\u00f3\u017cne bramy domy\u015blne stacji roboczych",
            "B. takie same adresy IP stacji roboczych",
            "C. R\u00f3\u017cne systemy operacyjne stacji roboczych",
            "D. Takie same nazwy u\u017cytkownik\u00f3w"
        ],
        "goodAnswer": "B. takie same adresy IP stacji roboczych"
    },
    {
        "id": 16,
        "question": "W systemie Windows Server udost\u0119pnienie folderu jako zasobu sieciowego, widocznego na stacji roboczej w postaci dysku oznaczonego liter\u0105, jest mo\u017cliwe dzi\u0119ki wykonaniu operacji",
        "imageLoc": "",
        "answers": [
            "A. oczyszczania",
            "B. mapowania",
            "C. zerowania",
            "D. defragmentacji"
        ],
        "goodAnswer": "B. mapowania"
    },
    {
        "id": 17,
        "question": "U\u017cytkownik komputera udost\u0119pnia publicznie posiadane pliki w sieci Internet. Prawa autorskie zostan\u0105 naruszone, gdy udost\u0119pni",
        "imageLoc": "",
        "answers": [
            "A. otrzymany dokument urz\u0119dowy",
            "B. w\u0142asne autorskie filmy z demonstracji publicznych",
            "C. wykonane przez siebie zdj\u0119cia obiekt\u00f3w wojskowych",
            "D. obraz p\u0142yty systemu operacyjnego Windows 7 Home"
        ],
        "goodAnswer": "D. obraz p\u0142yty systemu operacyjnego Windows 7 Home"
    },
    {
        "id": 18,
        "question": "Do ilu sieci nale\u017c\u0105 komputery o podanych w tabeli adresach IP i standardowej masce sieci?",
        "imageLoc": require("../assets/img/1425.png"),
        "answers": [
            "A. Dw\u00f3ch",
            "B. Czterech",
            "C. Jednej",
            "D. Sze\u015bciu"
        ],
        "goodAnswer": "B. Czterech"
    },
    {
        "id": 19,
        "question": "Kt\u00f3ry z protoko\u0142\u00f3w jest u\u017cywany do wymiany informacji o trasach oraz dost\u0119pno\u015bci sieci pomi\u0119dzy ruterami nale\u017c\u0105cymi do tego samego systemu autonomicznego?",
        "imageLoc": "",
        "answers": [
            "A. HTTP",
            "B. RARP",
            "C. TCP",
            "D. RIP"
        ],
        "goodAnswer": "D. RIP"
    },
    {
        "id": 20,
        "question": "Wska\u017c nieprawid\u0142owe stwierdzenie dotycz\u0105ce Active Directory:",
        "imageLoc": "",
        "answers": [
            "A. Domeny zorganizowane hierarchicznie mog\u0105 tworzy\u0107 struktur\u0119 drzewa",
            "B. Active Directory to us\u0142uga katalogowa w sieciowych systemach operacyjnych firmy Microsoft",
            "C. Active Directory to us\u0142uga s\u0142u\u017c\u0105ca do monitorowania u\u017cycia limit\u00f3w dyskowych aktywnych katalog\u00f3w",
            "D. W Active Directory informacje grupowane s\u0105 hierarchiczne."
        ],
        "goodAnswer": "C. Active Directory to us\u0142uga s\u0142u\u017c\u0105ca do monitorowania u\u017cycia limit\u00f3w dyskowych aktywnych katalog\u00f3w"
    },
    {
        "id": 21,
        "question": "Kt\u00f3ra us\u0142uga musi by\u0107 uruchomiona na ruterze, aby ruter m\u00f3g\u0142 zmienia\u0107 adresy IP \u017ar\u00f3d\u0142owe i docelowe przy przekazywaniu pakiet\u00f3w pomi\u0119dzy sieciami?",
        "imageLoc": "",
        "answers": [
            "A. NAT",
            "B. TCP",
            "C. UDP",
            "D. FTP"
        ],
        "goodAnswer": "A. NAT"
    },
    {
        "id": 22,
        "question": "Tworzenie zaszyfrowanych po\u0142\u0105cze\u0144 mi\u0119dzy hostami przez sie\u0107 publiczn\u0105 Internet, stosowane w po\u0142\u0105czeniach VPN (V irtual Private Network), to",
        "imageLoc": "",
        "answers": [
            "A. mapowanie",
            "B. tunelowanie",
            "C. trasowanie",
            "D. mostkowanie"
        ],
        "goodAnswer": "B. tunelowanie"
    },
    {
        "id": 23,
        "question": "Kt\u00f3ry protok\u00f3\u0142 warstwy aplikacji jest stosowany do zarz\u0105dzania urz\u0105dzeniami sieciowymi za po\u015brednictwem sieci?",
        "imageLoc": "",
        "answers": [
            "A. NTP",
            "B. SNMP",
            "C. MIME",
            "D. FTP"
        ],
        "goodAnswer": "B. SNMP"
    },
    {
        "id": 24,
        "question": "Na kt\u00f3rym domy\u015blnym porcie odbywa si\u0119 komunikacja protoko\u0142u ftp?",
        "imageLoc": "",
        "answers": [
            "A. 21",
            "B. 53",
            "C. 80",
            "D. 23"
        ],
        "goodAnswer": "A. 21"
    },
    {
        "id": 25,
        "question": "Jakiego typu rekord jest tworzony automatycznie w momencie utworzenia strefy wyszukiwania do przodu w konfiguracji serwera DNS w systemach Windows Server?",
        "imageLoc": "",
        "answers": [
            "A. NS",
            "B. PTR",
            "C. MX",
            "D. A"
        ],
        "goodAnswer": "A. NS"
    },
    {
        "id": 26,
        "question": "Kt\u00f3ry ze standard\u00f3w wraz z odpowiedni\u0105 kategori\u0105 skr\u0119tki s\u0105 dopasowane tak, aby obs\u0142ugiwa\u0142y maksymalny transfer danych?",
        "imageLoc": "",
        "answers": [
            "A. 1000BASE-T oraz Cat 3",
            "B. 1000BASE-T oraz Cat 5",
            "C. 10GBASE-T oraz Cat 7",
            "D. 10GBASE-T oraz Cat 5"
        ],
        "goodAnswer": "C. 10GBASE-T oraz Cat 7"
    },
    {
        "id": 27,
        "question": "Przedstawione parametry katalogowe dotycz\u0105 routera posiadaj\u0105cego pami\u0119\u0107 masow\u0105",
        "imageLoc": require("../assets/img/197.png"),
        "answers": [
            "A. 64 MB",
            "B. 680 MB",
            "C. 3 MB",
            "D. 32 MB"
        ],
        "goodAnswer": "A. 64 MB"
    },
    {
        "id": 28,
        "question": "Na rysunkach technicznych instalacji sieci komputerowej wraz z dedykowan\u0105 jej instalacj\u0105 elektryczn\u0105 symbolem przedstawionym na rysunku oznacza si\u0119 gniazdo",
        "imageLoc": require("../assets/img/1617.png"),
        "answers": [
            "A. komputerowe",
            "B. telefoniczne",
            "C. elektryczne ze stykiem ochronnym",
            "D. elektryczne bez styku ochronnego"
        ],
        "goodAnswer": "C. elektryczne ze stykiem ochronnym"
    },
    {
        "id": 29,
        "question": "Grupa, w kt\u00f3rej uprawnienia cz\u0142onk\u00f3w mo\u017cna przypisywa\u0107 tylko w obr\u0119bie tej samej domeny, co domena nadrz\u0119dnej grupy lokalnej domeny, to grupa",
        "imageLoc": "",
        "answers": [
            "A. lokalna komputera",
            "B. lokalna domeny",
            "C. uniwersalna",
            "D. globalna"
        ],
        "goodAnswer": "B. lokalna domeny"
    },
    {
        "id": 30,
        "question": "W jakiej fizycznej topologii uszkodzenie jednej stacji roboczej zatrzyma dzia\u0142anie ca\u0142ej sieci?",
        "imageLoc": "",
        "answers": [
            "A. Pier\u015bcienia",
            "B. Magistrali",
            "C. Drzewa",
            "D. Siatki"
        ],
        "goodAnswer": "A. Pier\u015bcienia"
    },
    {
        "id": 31,
        "question": "Materia\u0142em eksploatacyjnym, stosowanym w rzutniku multimedialnym, jest",
        "imageLoc": "",
        "answers": [
            "A. lampa projekcyjna",
            "B. fuser",
            "C. filament",
            "D. b\u0119ben \u015bwiat\u0142oczu\u0142y"
        ],
        "goodAnswer": "A. lampa projekcyjna"
    },
    {
        "id": 32,
        "question": "Symbol b\u0142yskawicy pokazany na rysunku jest u\u017cywany do oznaczania z\u0142\u0105cza",
        "imageLoc": require("../assets/img/2011.png"),
        "answers": [
            "A. Thunderbolt",
            "B. DisplayPort",
            "C. HDMI",
            "D. Micro USB"
        ],
        "goodAnswer": "A. Thunderbolt"
    },
    {
        "id": 33,
        "question": "Administrator zauwa\u017cy\u0142, \u017ce w sieci LAN wyst\u0119puje du\u017ca liczba kolizji. Kt\u00f3re urz\u0105dzenie powinien zainstalowa\u0107, aby podzieli\u0107 sie\u0107 lokaln\u0105 na mniejszy domeny kolizji?",
        "imageLoc": "",
        "answers": [
            "A. Modem",
            "B. Koncentrator",
            "C. Prze\u0142\u0105cznik",
            "D. Router"
        ],
        "goodAnswer": "C. Prze\u0142\u0105cznik"
    },
    {
        "id": 34,
        "question": "Aby zwi\u0119kszy\u0107 wydajno\u015b\u0107 procesora rodziny Intel poprzez jego \"podkr\u0119cenie\" (ang. overclocking) mo\u017cna zastosowa\u0107 procesor oznaczony",
        "imageLoc": "",
        "answers": [
            "A. liter\u0105 U",
            "B. liter\u0105 Y",
            "C. liter\u0105 B",
            "D. liter\u0105 K"
        ],
        "goodAnswer": "D. liter\u0105 K"
    },
    {
        "id": 35,
        "question": "Jaka jest liczba pin\u00f3w we wtyczce SATA?",
        "imageLoc": "",
        "answers": [
            "A. 4",
            "B. 9",
            "C. 7",
            "D. 5"
        ],
        "goodAnswer": "C. 7"
    },
    {
        "id": 36,
        "question": "Jak\u0105 rozdzielczo\u015b\u0107 musi obs\u0142ugiwa\u0107 karta graficzna, aby ogl\u0105da\u0107 na 23-calowym monitorze materia\u0142 video w trybie Full HD?",
        "imageLoc": "",
        "answers": [
            "A. 2560\u00d71440",
            "B. 2048\u00d71152",
            "C. 1920\u00d71080",
            "D. 1600\u00d7900"
        ],
        "goodAnswer": "C. 1920\u00d71080"
    },
    {
        "id": 37,
        "question": "Wska\u017c polecenie systemu Windows Server s\u0142u\u017c\u0105ce do usuni\u0119cia jednostki organizacyjnej z katalogu.",
        "imageLoc": "",
        "answers": [
            "A. adprep",
            "B. dsrm",
            "C. redircmp",
            "D. dsadd"
        ],
        "goodAnswer": "B. dsrm"
    },
    {
        "id": 38,
        "question": "Oblicz koszt brutto materia\u0142\u00f3w niezb\u0119dnych do po\u0142\u0105czenia w sie\u0107 w topologii gwiazdy, 3 komputer\u00f3w wyposa\u017conych w karty sieciowe, wykorzystuj\u0105c przewody o d\u0142ugo\u015bci 2 m. Ceny materia\u0142\u00f3w podano w tabeli.",
        "imageLoc": require("../assets/img/1249.png"),
        "answers": [
            "A. 89 z\u0142",
            "B. 249 z\u0142",
            "C. 252 z\u0142",
            "D. 92 z\u0142"
        ],
        "goodAnswer": "D. 92 z\u0142"
    },
    {
        "id": 39,
        "question": "Do usuwania plik\u00f3w lub katalog\u00f3w w systemie Linux s\u0142u\u017cy polecenie",
        "imageLoc": "",
        "answers": [
            "A. cat",
            "B. tar",
            "C. ls",
            "D. rm"
        ],
        "goodAnswer": "D. rm"
    },
    {
        "id": 40,
        "question": "Kt\u00f3re medium transmisyjne nale\u017cy zastosowa\u0107, aby po\u0142\u0105czy\u0107 dwa punkty dystrybucyjne odleg\u0142e od siebie o 600m?",
        "imageLoc": "",
        "answers": [
            "A. przew\u00f3d koncentryczny",
            "B. \u015bwiat\u0142ow\u00f3d",
            "C. skr\u0119tke UTP",
            "D. skr\u0119tk\u0119 STP"
        ],
        "goodAnswer": "B. \u015bwiat\u0142ow\u00f3d"
    },
    {
        "id": 41,
        "question": "Grupowa licencja oprogramowania Microsoft to licencja typu",
        "imageLoc": "",
        "answers": [
            "A. MOLP",
            "B. GNU",
            "C. EULA",
            "D. OEM"
        ],
        "goodAnswer": "A. MOLP"
    },
    {
        "id": 42,
        "question": "Jaki b\u0119dzie koszt wymiany karty graficznej w komputerze, je\u015bli karta kosztuje 250 z\u0142, jej wymiana zajmie pracownikowi serwisu 80 minut, a ka\u017cda rozpocz\u0119ta roboczogodzina kosztuje 50 z\u0142?",
        "imageLoc": "",
        "answers": [
            "A. 400 z\u0142",
            "B. 250 z\u0142",
            "C. 350 z\u0142",
            "D. 300 z\u0142"
        ],
        "goodAnswer": "C. 350 z\u0142"
    },
    {
        "id": 43,
        "question": "Widoczne na schemacie procesora rejestry pe\u0142ni\u0105 funkcj\u0119",
        "imageLoc": require("../assets/img/513.png"),
        "answers": [
            "A. przechowywania adresu do nast\u0119pnej instrukcji programu",
            "B. sterowania wykonywanym programem",
            "C. wykonywania dzia\u0142a\u0144 arytmetycznych",
            "D. przechowywanie argument\u00f3w oblicze\u0144"
        ],
        "goodAnswer": "D. przechowywanie argument\u00f3w oblicze\u0144"
    },
    {
        "id": 44,
        "question": "Wska\u017c polecenie systemu Linux s\u0142u\u017c\u0105ce do sprawdzenia, w kt\u00f3rym katalogu znajduje si\u0119 u\u017cytkownik.",
        "imageLoc": "",
        "answers": [
            "A. mkdir",
            "B. pwd",
            "C. cls",
            "D. path"
        ],
        "goodAnswer": "B. pwd"
    },
    {
        "id": 45,
        "question": "Kt\u00f3ry protok\u00f3\u0142 zapewnia szyfrowanie po\u0142\u0105czenia?",
        "imageLoc": "",
        "answers": [
            "A. SSH",
            "B. DHCP",
            "C. DNS",
            "D. TELNET"
        ],
        "goodAnswer": "A. SSH"
    },
    {
        "id": 46,
        "question": "Ile domen kolizyjnych i rozg\u0142oszeniowych jest widocznych na schemacie?",
        "imageLoc": require("../assets/img/1971.png"),
        "answers": [
            "A. 9 domen kolizyjnych i 4 domeny rozg\u0142oszeniowe.",
            "B. . 9 domen kolizyjnych i 1 domena rozg\u0142oszeniowa.",
            "C. 4 domeny kolizyjne i 9 domen rozg\u0142oszeniowych.",
            "D. 1 domena kolizyjna i 9 domen rozg\u0142oszeniowych."
        ],
        "goodAnswer": "A. 9 domen kolizyjnych i 4 domeny rozg\u0142oszeniowe."
    },
    {
        "id": 47,
        "question": "Do instalacji oraz deinstalacji oprogramowania w systemie Ubuntu s\u0142u\u017cy menad\u017cer",
        "imageLoc": "",
        "answers": [
            "A. tar",
            "B. ls",
            "C. yast",
            "D. apt"
        ],
        "goodAnswer": "D. apt"
    },
    {
        "id": 48,
        "question": "Z\u0142\u0105cze IrDA do komunikacji bezprzewodowej jest",
        "imageLoc": "",
        "answers": [
            "A. rozwini\u0119ciem systemu BlueTooth",
            "B. z\u0142\u0105czem szeregowym",
            "C. z\u0142\u0105czem radiowym",
            "D. z\u0142\u0105czem pozwalaj\u0105cym transmitowa\u0107 dane na odleg\u0142o\u015b\u0107 100m"
        ],
        "goodAnswer": "B. z\u0142\u0105czem szeregowym"
    },
    {
        "id": 49,
        "question": "Aby sprawdzi\u0107, kt\u00f3ry program najbardziej obci\u0105\u017ca procesor w systemie Windows, nale\u017cy uruchomi\u0107 program:",
        "imageLoc": "",
        "answers": [
            "A. mened\u017cer zada\u0144",
            "B. regedit",
            "C. dxdiag",
            "D. msconfig"
        ],
        "goodAnswer": "A. mened\u017cer zada\u0144"
    },
    {
        "id": 50,
        "question": "Odleg\u0142o\u015b\u0107 toru nieekranowanego kabla sieciowego od o\u015bwietleniowej instalacji elektrycznej powinna wynosi\u0107 minimum",
        "imageLoc": "",
        "answers": [
            "A. 20 cm",
            "B. 40 cm",
            "C. 30 cm",
            "D. 50 cm"
        ],
        "goodAnswer": "C. 30 cm"
    },
    {
        "id": 51,
        "question": "Na podstawie zrzutu ekranu przedstawiaj\u0105cego konfiguracj\u0119 prze\u0142\u0105cznika mo\u017cna stwierdzi\u0107, \u017ce",
        "imageLoc": require("../assets/img/1744.png"),
        "answers": [
            "A. maksymalny czas pomi\u0119dzy zmianami statusu \u0142\u0105cza wynosi 5 sekund",
            "B. czas mi\u0119dzy wysy\u0142aniem kolejnych komunikat\u00f3w o poprawnej pracy urz\u0105dzenia wynosi 3 sekundy",
            "C. minimalny czas kr\u0105\u017cenia w sieci komunikat\u00f3w protoko\u0142u BPDU wynosi 25 sekund",
            "D. maksymalny czas kr\u0105\u017cenia w sieci komunikat\u00f3w protoko\u0142u BPDU wynosi 20 sekund"
        ],
        "goodAnswer": "B. czas mi\u0119dzy wysy\u0142aniem kolejnych komunikat\u00f3w o poprawnej pracy urz\u0105dzenia wynosi 3 sekundy"
    },
    {
        "id": 52,
        "question": "Kt\u00f3re z podanych oznacze\u0144 okre\u015bla, \u017ce jest to kabel typu skr\u0119tka posiadaj\u0105cy podw\u00f3jne ekranowanie?",
        "imageLoc": "",
        "answers": [
            "A. SFTP",
            "B. UTP",
            "C. FTP",
            "D. S-STP"
        ],
        "goodAnswer": "D. S-STP"
    },
    {
        "id": 53,
        "question": "Kt\u00f3ry typ zabezpiecze\u0144 w sieci WiFi posiada najlepszy poziom zabezpiecze\u0144?",
        "imageLoc": "",
        "answers": [
            "A. WPA2",
            "B. WEP",
            "C. NTFS",
            "D. WPA"
        ],
        "goodAnswer": "A. WPA2"
    },
    {
        "id": 54,
        "question": "Profil u\u017cytkownika systemu Windows wykorzystany do logowania si\u0119 na dowolnym komputerze w sieci, kt\u00f3ry jest przechowywany na serwerze i mo\u017ce by\u0107 modyfikowany przez u\u017cytkownika, to profil",
        "imageLoc": "",
        "answers": [
            "A. obowi\u0105zkowy",
            "B. tymczasowy",
            "C. lokalny",
            "D. mobilny"
        ],
        "goodAnswer": "D. mobilny"
    },
    {
        "id": 55,
        "question": "Do pomiaru warto\u015bci rezystancji s\u0142u\u017cy",
        "imageLoc": "",
        "answers": [
            "A. woltomierz",
            "B. amperomierz",
            "C. watomierz",
            "D. omomierz"
        ],
        "goodAnswer": "D. omomierz"
    },
    {
        "id": 56,
        "question": "Co mo\u017cna zaobserwowa\u0107 przy pomocy programu Wireshark?",
        "imageLoc": "",
        "answers": [
            "A. Po\u0142\u0105czenia par przewod\u00f3w",
            "B. Ruch pakiet\u00f3w sieciowych",
            "C. Zwarcie przewod\u00f3w",
            "D. Przerwy w okablowaniu"
        ],
        "goodAnswer": "B. Ruch pakiet\u00f3w sieciowych"
    },
    {
        "id": 57,
        "question": "Do zdalnego zarz\u0105dzania stacjami roboczymi nie jest stosowany",
        "imageLoc": "",
        "answers": [
            "A. program Wireshark",
            "B. program UltraVNC",
            "C. program TeamViewer",
            "D. pulpit zdalny"
        ],
        "goodAnswer": "A. program Wireshark"
    },
    {
        "id": 58,
        "question": "Kt\u00f3ra us\u0142uga musi by\u0107 uruchomiona w sieci, aby mo\u017cna by\u0142o na stacji roboczej automatycznie uzyska\u0107 adres IP?",
        "imageLoc": "",
        "answers": [
            "A. DHCP",
            "B. DNS",
            "C. PROXY",
            "D. WINS"
        ],
        "goodAnswer": "A. DHCP"
    },
    {
        "id": 59,
        "question": "Za pomoc\u0105 kt\u00f3rego polecenia systemu Linux mo\u017cliwa jest zmiana domy\u015blnej pow\u0142oki u\u017cytkownika egzamin na sh",
        "imageLoc": "",
        "answers": [
            "A. usermod -s /bin/sh egzamin",
            "B. groupmod /users/egzamin /bin/sh",
            "C. vi /etc/passwd -sh egzamin",
            "D. chmod egzamin /etc/shadow sh"
        ],
        "goodAnswer": "A. usermod -s /bin/sh egzamin"
    },
    {
        "id": 60,
        "question": "Jak nazywa si\u0119 port panelu tylnego komputera zamieszczony na rysunku?",
        "imageLoc": require("../assets/img/85.png"),
        "answers": [
            "A. HDMI",
            "B. FIRE WIRE",
            "C. DVI",
            "D. D-SUB"
        ],
        "goodAnswer": "C. DVI"
    },
    {
        "id": 61,
        "question": "Aby nadpisa\u0107 b\u0142\u0119dne wpisy w pliku boot.ini w konsoli odzyskiwania systemu Windows, nale\u017cy u\u017cy\u0107 polecenia",
        "imageLoc": "",
        "answers": [
            "A. bootcfg /rebuild",
            "B. diskpart /add",
            "C. fixmbr",
            "D. fixboot"
        ],
        "goodAnswer": "A. bootcfg /rebuild"
    },
    {
        "id": 62,
        "question": "Aby zarz\u0105dza\u0107 wielko\u015bci\u0105 transferu sieciowego, administrator powinien wykorzysta\u0107 program typu",
        "imageLoc": "",
        "answers": [
            "A. quality manager",
            "B. package manager",
            "C. task manager",
            "D. bandwidth manager"
        ],
        "goodAnswer": "D. bandwidth manager"
    },
    {
        "id": 63,
        "question": "Jak\u0105 posta\u0107 ma adres IP 192.168.1.12 w zapisie binarnym?",
        "imageLoc": "",
        "answers": [
            "A. 11000000.10101000.00000001.00001100",
            "B. 11000001.10111000.00000011.00001110",
            "C. 11000100.10101010.00000101.00001001",
            "D. 11000010.10101100.00000111.00001101"
        ],
        "goodAnswer": "A. 11000000.10101000.00000001.00001100"
    },
    {
        "id": 64,
        "question": "Elementem odpowiedzialnym za wymian\u0119 danych mi\u0119dzy procesorem a magistral\u0105 PCI-E jest",
        "imageLoc": "",
        "answers": [
            "A. uk\u0142ad Super I/O.",
            "B. chipset.",
            "C. cache procesora.",
            "D. pami\u0119\u0107 RAM."
        ],
        "goodAnswer": "B. chipset."
    },
    {
        "id": 65,
        "question": "Aby w systemie Windows zmieni\u0107 port zainstalowanej drukarki, nale\u017cy wykorzysta\u0107 funkcj\u0119",
        "imageLoc": "",
        "answers": [
            "A. Mened\u017cer zada\u0144.",
            "B. W\u0142a\u015bciwo\u015bci drukarki.",
            "C. Preferencje drukowani",
            "D. Ostatnia znana dobra konfiguracja"
        ],
        "goodAnswer": "B. W\u0142a\u015bciwo\u015bci drukarki."
    },
    {
        "id": 66,
        "question": "Aby przywr\u00f3ci\u0107 ustawienia domy\u015blne p\u0142yty g\u0142\u00f3wnej w przypadku, gdy nie ma mo\u017cliwo\u015bci uruchomienia programu BIOS Setup, nale\u017cy",
        "imageLoc": "",
        "answers": [
            "A. uruchomi\u0107 ponownie system",
            "B. zaktualizowa\u0107 BIOS Setup",
            "C. prze\u0142o\u017cy\u0107 zwork\u0119 na p\u0142ycie g\u0142\u00f3wnej",
            "D. do\u0142adowa\u0107 bateri\u0119 na p\u0142ycie g\u0142\u00f3wnej"
        ],
        "goodAnswer": "C. prze\u0142o\u017cy\u0107 zwork\u0119 na p\u0142ycie g\u0142\u00f3wnej"
    },
    {
        "id": 67,
        "question": "Wska\u017c poprawn\u0105 kolejno\u015b\u0107 czynno\u015bci prowadz\u0105cych do zamontowania procesora w gnie\u017adzie LGA na nowej p\u0142ycie g\u0142\u00f3wnej, od\u0142\u0105czonej od \u017ar\u00f3d\u0142a zasilania.",
        "imageLoc": require("../assets/img/2071.png"),
        "answers": [
            "A. 5, 7, 6, 1, 4, 3, 2",
            "B. 5, 2, 3, 4, 1, 6, 7",
            "C. 5, 6, 1, 7, 2, 3, 4",
            "D. 5, 1, 7, 3, 6, 2, 4"
        ],
        "goodAnswer": "D. 5, 1, 7, 3, 6, 2, 4"
    },
    {
        "id": 68,
        "question": "Jak\u0105 kart\u0119 rozszerze\u0144 komputera przedstawiono na zdj\u0119ciu?",
        "imageLoc": require("../assets/img/154.png"),
        "answers": [
            "A. sieciow\u0105",
            "B. d\u017awi\u0119kow\u0105",
            "C. telewizyjn\u0105 (TV)",
            "D. graficzn\u0105"
        ],
        "goodAnswer": "A. sieciow\u0105"
    },
    {
        "id": 69,
        "question": "Co s\u0142u\u017cy do zabezpieczenia komputera przed niepo\u017c\u0105danym oprogramowaniem pochodz\u0105cym z Internetu?",
        "imageLoc": "",
        "answers": [
            "A. Protok\u00f3\u0142 HTTPS",
            "B. Program sniffer",
            "C. Program antywirusowy",
            "D. Protok\u00f3\u0142 SSL"
        ],
        "goodAnswer": "C. Program antywirusowy"
    },
    {
        "id": 70,
        "question": "Wska\u017c koszt brutto wykonanych przez serwisanta us\u0142ug, je\u015bli do rachunku doliczony jest r\u00f3wnie\u017c koszt dojazdu w wysoko\u015bci 55,00 z\u0142 netto.",
        "imageLoc": require("../assets/img/2137.png"),
        "answers": [
            "A. 215,00 z\u0142",
            "B. 160,00 z\u0142",
            "C. 264,45 z\u0142",
            "D. 196,80 z\u0142"
        ],
        "goodAnswer": "C. 264,45 z\u0142"
    },
    {
        "id": 71,
        "question": "Jakie rozszerzenie posiadaj\u0105 pakiety instalacyjne systemu operacyjnego Linux?",
        "imageLoc": "",
        "answers": [
            "A. rpm, deb",
            "B. zip, exe",
            "C. ini, dll",
            "D. tgz, dmg"
        ],
        "goodAnswer": "A. rpm, deb"
    },
    {
        "id": 72,
        "question": "Programem s\u0142u\u017c\u0105cym do archiwizacji danych w systemie Linux jest",
        "imageLoc": "",
        "answers": [
            "A. compress",
            "B. tar",
            "C. gzip",
            "D. lzma"
        ],
        "goodAnswer": "B. tar"
    },
    {
        "id": 73,
        "question": "W systemie Windows Professional do konfiguracji czasu dost\u0119pno\u015bci drukarki nale\u017cy wykorzysta\u0107 zak\u0142adk\u0119",
        "imageLoc": "",
        "answers": [
            "A. Ustawienia w Preferencjach drukowania.",
            "B. Zabezpieczenia we W\u0142a\u015bciwo\u015bciach drukarki.",
            "C. Zaawansowane we W\u0142a\u015bciwo\u015bciach drukarki.",
            "D. Konfiguracja w Preferencjach drukowania."
        ],
        "goodAnswer": "C. Zaawansowane we W\u0142a\u015bciwo\u015bciach drukarki."
    },
    {
        "id": 74,
        "question": "Kt\u00f3ry z adres\u00f3w IP jest adresem prywatnym?",
        "imageLoc": "",
        "answers": [
            "A. 190.5.7.126",
            "B. 38.176.55.44",
            "C. 192.168.0.1",
            "D. 131.107.5.65"
        ],
        "goodAnswer": "C. 192.168.0.1"
    },
    {
        "id": 75,
        "question": "Gdzie przechowywane s\u0105 informacje o kontach u\u017cytkownik\u00f3w domenowych w systemach Windows Server?",
        "imageLoc": "",
        "answers": [
            "A. W bazie SAM zapisanej na lokalnym komputerze",
            "B. W pliku users w katalogu komputera c:Windowssystem32",
            "C. W bazie danych kontrolera domeny",
            "D. W plikach hosts na ka\u017cdym komputerze u\u017cywanym w domenie"
        ],
        "goodAnswer": "C. W bazie danych kontrolera domeny"
    },
    {
        "id": 76,
        "question": "Najbardziej efektywnym sposobem sporz\u0105dzania codziennej archiwizacji pojedynczego pliku o rozmiarze 4,8 GB, na pojedynczym stanowisku komputerowym bez dost\u0119pu do sieci jest",
        "imageLoc": "",
        "answers": [
            "A. nagranie na p\u0142yt\u0119 DVD-5 w standardzie ISO",
            "B. u\u017cycie pami\u0119ci USB z systemem plik\u00f3w FAT32",
            "C. spakowanie i przechowywanie w lokalizacji sieciowej",
            "D. u\u017cycie pami\u0119ci USB z systemem plik\u00f3w NTFS"
        ],
        "goodAnswer": "D. u\u017cycie pami\u0119ci USB z systemem plik\u00f3w NTFS"
    },
    {
        "id": 77,
        "question": "Jak\u0105 cyfr\u0105 zosta\u0142 oznaczony procesor na schemacie p\u0142yty g\u0142\u00f3wnej komputera?",
        "imageLoc": require("../assets/img/151.png"),
        "answers": [
            "A. 1",
            "B. 2",
            "C. 4",
            "D. 3"
        ],
        "goodAnswer": "A. 1"
    },
    {
        "id": 78,
        "question": "Wymiana baterii nale\u017cy do czynno\u015bci zwi\u0105zanych z eksploatacj\u0105",
        "imageLoc": "",
        "answers": [
            "A. skanera p\u0142askiego.",
            "B. myszy bezprzewodowej.",
            "C. drukarki laserowej.",
            "D. telewizora projekcyjnego."
        ],
        "goodAnswer": "B. myszy bezprzewodowej."
    },
    {
        "id": 79,
        "question": "Urz\u0105dzeniem, kt\u00f3re zapewni ochron\u0119 przed wszelkiego rodzaju atakami z sieci i mo\u017ce pe\u0142ni\u0107 inne dodatkowe funkcje, jak np. szyfrowanie przesy\u0142anych danych czy automatyczne powiadamianie administratora systemu o w\u0142amaniu, jest",
        "imageLoc": "",
        "answers": [
            "A. koncentrator",
            "B. firewall sprz\u0119towy",
            "C. punkt dost\u0119powy",
            "D. regenerator"
        ],
        "goodAnswer": "B. firewall sprz\u0119towy"
    },
    {
        "id": 80,
        "question": "Kt\u00f3re polecenie systemu Linux wy\u015bwietla i umo\u017cliwia zmiany tablicy trasowania pakiet\u00f3w sieciowych?",
        "imageLoc": "",
        "answers": [
            "A. route",
            "B. nslookup",
            "C. ifconfig",
            "D. netstat"
        ],
        "goodAnswer": "A. route"
    },
    {
        "id": 81,
        "question": "Przedstawiony wydruk w systemie rodziny Linux pojawi si\u0119 po wydaniu komendy",
        "imageLoc": require("../assets/img/521.png"),
        "answers": [
            "A. free",
            "B. pwd",
            "C. ls -la",
            "D. ps"
        ],
        "goodAnswer": "C. ls -la"
    },
    {
        "id": 82,
        "question": "Kabel typu skr\u0119tka, posiadaj\u0105cy ka\u017cd\u0105 par\u0119 przewod\u00f3w w osobnym ekranie z folii, przy czym wszystkie przewody znajduj\u0105 si\u0119 w ekranie z folii, jest oznaczony symbolem",
        "imageLoc": "",
        "answers": [
            "A. S/FTP",
            "B. F/FTP",
            "C. F/UTP",
            "D. S/UTP"
        ],
        "goodAnswer": "B. F/FTP"
    },
    {
        "id": 83,
        "question": "Wska\u017c efekt dzia\u0142ania przedstawionego polecenia.",
        "imageLoc": require("../assets/img/1984.png"),
        "answers": [
            "A. Import ustawienia zapory sieciowej z katalogu in action.",
            "B. Otwarcie portu 53 dla protoko\u0142u TCP.",
            "C. Usuni\u0119cie z zapory sieciowej regu\u0142y o nazwie Open.",
            "D. Blokowanie dzia\u0142ania us\u0142ugi DNS opartej na w protokole TCP."
        ],
        "goodAnswer": "D. Blokowanie dzia\u0142ania us\u0142ugi DNS opartej na w protokole TCP."
    },
    {
        "id": 84,
        "question": "Do sprawdzenia, czy zainstalowana karta graficzna komputera przegrzewa si\u0119, u\u017cytkownik mo\u017ce wykorzysta\u0107 program",
        "imageLoc": "",
        "answers": [
            "A. CPU-Z",
            "B. Everest",
            "C. CHKDSK",
            "D. HD Tune"
        ],
        "goodAnswer": "B. Everest"
    },
    {
        "id": 85,
        "question": "Przedstawiona na rysunku karta rozszerze\u0144 posiada ch\u0142odzenie",
        "imageLoc": require("../assets/img/411.png"),
        "answers": [
            "A. wymuszone",
            "B. pasywne",
            "C. aktywne",
            "D. symetryczne"
        ],
        "goodAnswer": "B. pasywne"
    },
    {
        "id": 86,
        "question": "Udost\u0119pniono w sieci lokalnej jako udzia\u0142 specjalny folder o nazwie egzamin znajduj\u0105cy si\u0119 na komputerze o nazwie SERWER_2 w katalogu g\u0142\u00f3wnym dysku C:. Jak powinna wygl\u0105da\u0107 \u015bcie\u017cka dost\u0119pu do katalogu egzamin, w kt\u00f3rym przechowywany jest folder macierzysty dla konta u\u017cytkownika o okre\u015blonym loginie?",
        "imageLoc": "",
        "answers": [
            "A. SERWER_2egzamin$\\%USERNAME%",
            "B. SERWER_2$egzamin\\%USERNAME%",
            "C. SERWER_2egzamin$\\%$USERNAME%",
            "D. SERWER_2$egzamin$\\%USERNAME%"
        ],
        "goodAnswer": "A. SERWER_2egzamin$\\%USERNAME%"
    },
    {
        "id": 87,
        "question": "Urz\u0105dzeniem wskazuj\u0105cym, kt\u00f3re reaguje na zmiany pojemno\u015bci elektrycznej, jest",
        "imageLoc": "",
        "answers": [
            "A. trackpoint",
            "B. d\u017cojstik",
            "C. mysz",
            "D. touchpad"
        ],
        "goodAnswer": "D. touchpad"
    },
    {
        "id": 88,
        "question": "Polecenie msconfig uruchamia w systemie Windows:",
        "imageLoc": "",
        "answers": [
            "A. panel sterowania",
            "B. narz\u0119dzie konfiguracji systemu",
            "C. mened\u017cera zada\u0144",
            "D. mened\u017cera plik\u00f3w"
        ],
        "goodAnswer": "B. narz\u0119dzie konfiguracji systemu"
    },
    {
        "id": 89,
        "question": "Administrator sieci komputerowej chce sprawdzi\u0107 na komputerze z systemem operacyjnym Windows, kt\u00f3re po\u0142\u0105czenia s\u0105 obecnie zestawiane oraz porty, na kt\u00f3rych komputer nas\u0142uchuje. W tym celu powinien zastosowa\u0107 polecenie",
        "imageLoc": "",
        "answers": [
            "A. netstat",
            "B. arp",
            "C. tracert",
            "D. ping"
        ],
        "goodAnswer": "A. netstat"
    },
    {
        "id": 90,
        "question": "Sie\u0107 Ethernet pracuje w logicznej topologii",
        "imageLoc": "",
        "answers": [
            "A. siatkowej",
            "B. rozg\u0142aszania",
            "C. siatki i gwiazdy",
            "D. pier\u015bcieniowej i liniowej"
        ],
        "goodAnswer": "B. rozg\u0142aszania"
    },
    {
        "id": 91,
        "question": "Ile urz\u0105dze\u0144 mo\u017ce by\u0107 pod\u0142\u0105czonych do portu IEEE1394?",
        "imageLoc": "",
        "answers": [
            "A. 63",
            "B. 55",
            "C. 1",
            "D. 8"
        ],
        "goodAnswer": "A. 63"
    },
    {
        "id": 92,
        "question": "Najmniejszymi k\u0105tami widzenia charakteryzuj\u0105 si\u0119 matryce monitor\u00f3w typu",
        "imageLoc": "",
        "answers": [
            "A. PVA",
            "B. TN",
            "C. MVA",
            "D. IPS/S-IPS"
        ],
        "goodAnswer": "B. TN"
    },
    {
        "id": 93,
        "question": "Materia\u0142em eksploatacyjnym, stosowanym w rzutniku multimedialnym, jest",
        "imageLoc": "",
        "answers": [
            "A. filament.",
            "B. b\u0119ben \u015bwiat\u0142oczu\u0142y.",
            "C. fuser.",
            "D. lampa projekcyjna."
        ],
        "goodAnswer": "D. lampa projekcyjna."
    },
    {
        "id": 94,
        "question": "Przedstawiony schemat obrazuje zasad\u0119 dzia\u0142ania",
        "imageLoc": require("../assets/img/797.png"),
        "answers": [
            "A. myszy optycznej",
            "B. cyfrowego aparatu fotograficznego",
            "C. drukarki termosublimacyjnej",
            "D. skanera p\u0142askiego"
        ],
        "goodAnswer": "A. myszy optycznej"
    },
    {
        "id": 95,
        "question": "Zgodnie ze standardem 802.3u sieci FastEthernet 100Base-FX wykorzystuje",
        "imageLoc": "",
        "answers": [
            "A. przew\u00f3d UTP kat. 5",
            "B. \u015bwiat\u0142ow\u00f3d jednomodowy",
            "C. przew\u00f3d UTP kat. 6",
            "D. \u015bwiat\u0142ow\u00f3d wielomodowy"
        ],
        "goodAnswer": "D. \u015bwiat\u0142ow\u00f3d wielomodowy"
    },
    {
        "id": 96,
        "question": "Specjalny interfejs wizualny systemu Windows, kt\u00f3rego cech\u0105 charakterystyczn\u0105 jest przezroczysto\u015b\u0107 przypominaj\u0105ca szk\u0142o oraz subtelne animacje okien, to",
        "imageLoc": "",
        "answers": [
            "A. Royale",
            "B. Aero",
            "C. Gnome",
            "D. Luna"
        ],
        "goodAnswer": "B. Aero"
    },
    {
        "id": 97,
        "question": "Do kt\u00f3rego wyprowadzenia nale\u017cy pod\u0142\u0105czy\u0107 g\u0142o\u015bniki aktywne w karcie d\u017awi\u0119kowej, kt\u00f3rej schemat funkcjonalny przedstawia rysunek?",
        "imageLoc": require("../assets/img/7.png"),
        "answers": [
            "A. Speaker out",
            "B. Mic in",
            "C. Line in",
            "D. Line out"
        ],
        "goodAnswer": "D. Line out"
    },
    {
        "id": 98,
        "question": "Przedstawiony na rysunku znak zgodny ze standardem Energy Star oznacza urz\u0105dzenie",
        "imageLoc": require("../assets/img/466.png"),
        "answers": [
            "A. Wyprodukowane przez firm\u0119 EnergyStar Co",
            "B. B\u0119d\u0105ce zwyci\u0119zc\u0105 plebiscytu EnergyStar",
            "C. Energooszcz\u0119dne",
            "D. O podwy\u017cszonym poborze mocy"
        ],
        "goodAnswer": "C. Energooszcz\u0119dne"
    },
    {
        "id": 99,
        "question": "Kt\u00f3re urz\u0105dzenie umo\u017cliwi pod\u0142\u0105czenie drukarki nieposiadaj\u0105cej karty sieciowej do lokalnej sieci komputerowej?",
        "imageLoc": "",
        "answers": [
            "A. Punkt dost\u0119pu",
            "B. Koncentrator",
            "C. Serwer wydruku",
            "D. Regenerator"
        ],
        "goodAnswer": "C. Serwer wydruku"
    },
    {
        "id": 100,
        "question": "Jaki b\u0119dzie minimalny koszt zakupu kabla UTP, przy wykonaniu okablowania kategorii 5e, do po\u0142\u0105czenia panelu krosowniczego z dwoma podw\u00f3jnymi gniazdami natynkowymi 2 x RJ45, znajduj\u0105cymi si\u0119 w odleg\u0142o\u015bci 10 m i 20 m od panelu, je\u017celi 1 m kabla kosztuje 1,20 z\u0142?",
        "imageLoc": "",
        "answers": [
            "A. 36,00 z\u0142",
            "B. 48,00 z\u0142",
            "C. 72,00 z\u0142",
            "D. 96,00 z\u0142"
        ],
        "goodAnswer": "C. 72,00 z\u0142"
    },
    {
        "id": 101,
        "question": "Uk\u0142ady sekwencyjne zbudowane z zespo\u0142u przerzutnik\u00f3w, najcz\u0119\u015bciej synchronicznych typu D, s\u0142u\u017c\u0105ce do przechowywania danych, to",
        "imageLoc": "",
        "answers": [
            "A. kodery",
            "B. dekodery",
            "C. bramki",
            "D. rejestry"
        ],
        "goodAnswer": "D. rejestry"
    },
    {
        "id": 102,
        "question": "Najkr\u00f3tszy czas dost\u0119pu posiada",
        "imageLoc": "",
        "answers": [
            "A. pami\u0119\u0107 cache procesora",
            "B. pami\u0119\u0107 RAM",
            "C. pami\u0119\u0107 USB",
            "D. dysk twardy"
        ],
        "goodAnswer": "A. pami\u0119\u0107 cache procesora"
    },
    {
        "id": 103,
        "question": "Do utworzenia partycji w systemie Windows mo\u017cna u\u017cy\u0107 przystawki",
        "imageLoc": "",
        "answers": [
            "A. dfsgui.msc",
            "B. dsa.msc",
            "C. devmgmt.msc",
            "D. diskmgmt.msc"
        ],
        "goodAnswer": "D. diskmgmt.msc"
    },
    {
        "id": 104,
        "question": "Serwer DHCP przydziela adresy z sieci o adresie 192.168.0.0. Kt\u00f3r\u0105 mask\u0119 nale\u017cy przypisa\u0107 sieci, aby serwer m\u00f3g\u0142 nada\u0107 510 urz\u0105dzeniom pracuj\u0105cym w sieci po jednym adresie IP?",
        "imageLoc": "",
        "answers": [
            "A. 255.255.255.128",
            "B. 255.255.255.192",
            "C. 255.255.254.0",
            "D. 255.255.252.0"
        ],
        "goodAnswer": "C. 255.255.254.0"
    },
    {
        "id": 105,
        "question": "Dysk zewn\u0119trzny 3,5 cala o pojemno\u015bci 5 TB, s\u0142u\u017c\u0105cy do przechowywania lub tworzenia kopii zapasowych, posiada obudow\u0119 z czterema interfejsami komunikacyjnymi do wyboru. Kt\u00f3ry z tych interfejs\u00f3w nale\u017cy wykorzysta\u0107 do po\u0142\u0105czenia z komputerem, aby uzyska\u0107 najwi\u0119ksz\u0105 pr\u0119dko\u015b\u0107 transmisji?",
        "imageLoc": "",
        "answers": [
            "A. FireWire80",
            "B. USB 3.1 gen 2",
            "C. eSATA 6G",
            "D. WiFi 802.11n"
        ],
        "goodAnswer": "B. USB 3.1 gen 2"
    },
    {
        "id": 106,
        "question": "Koprocesor (Floating Point Unit) w komputerze s\u0142u\u017cy do wykonywania",
        "imageLoc": "",
        "answers": [
            "A. operacji na liczbach ca\u0142kowitych",
            "B. operacji zmiennoprzecinkowych",
            "C. operacji na liczbach naturalnych",
            "D. podprogram\u00f3w"
        ],
        "goodAnswer": "B. operacji zmiennoprzecinkowych"
    },
    {
        "id": 107,
        "question": "Aby pod\u0142\u0105czy\u0107 kas\u0119 fiskaln\u0105 wyposa\u017con\u0105 w z\u0142\u0105cze komunikacyjne DB-9M do komputera stacjonarnego, nale\u017cy zastosowa\u0107 przew\u00f3d",
        "imageLoc": "",
        "answers": [
            "A. DB-9M/M",
            "B. DB-9M/F",
            "C. DB-9F/F",
            "D. DB-9F/M"
        ],
        "goodAnswer": "C. DB-9F/F"
    },
    {
        "id": 108,
        "question": "W systemie Linux, aby wy\u015bwietli\u0107 informacj\u0119 o nazwie bie\u017c\u0105cego katalogu roboczego, nale\u017cy zastosowa\u0107 polecenie",
        "imageLoc": "",
        "answers": [
            "A. finger",
            "B. pwd",
            "C. echo",
            "D. cat"
        ],
        "goodAnswer": "B. pwd"
    },
    {
        "id": 109,
        "question": "Przedstawiona na rysunku topologia sieci to",
        "imageLoc": require("../assets/img/1771.png"),
        "answers": [
            "A. ring",
            "B. star",
            "C. mesh",
            "D. bus"
        ],
        "goodAnswer": "C. mesh"
    },
    {
        "id": 110,
        "question": "G\u0142\u00f3wny rekord rozruchowy dysku twardego komputera to",
        "imageLoc": "",
        "answers": [
            "A. BOOT",
            "B. PT",
            "C. MBR",
            "D. FAT"
        ],
        "goodAnswer": "C. MBR"
    },
    {
        "id": 111,
        "question": "Na rysunku przedstawiaj\u0105cym budow\u0119 drukarki, w kt\u00f3rej nier\u00f3wnomiernie podawany jest toner na b\u0119ben, nale\u017cy wymieni\u0107 wa\u0142ek magnetyczny, kt\u00f3ry jest oznaczony numerem",
        "imageLoc": require("../assets/img/1830.png"),
        "answers": [
            "A. 3",
            "B. 4",
            "C. 1",
            "D. 2"
        ],
        "goodAnswer": "D. 2"
    },
    {
        "id": 112,
        "question": "Protok\u00f3\u0142, kt\u00f3ry umo\u017cliwia przekszta\u0142canie 32-bitowych adres\u00f3w IP na 48-bitowe fizyczne adresy MAC w komputerowych sieciach typu Ethernet nosi nazw\u0119:",
        "imageLoc": "",
        "answers": [
            "A. NAT",
            "B. DNS",
            "C. ARP",
            "D. RARP"
        ],
        "goodAnswer": "C. ARP"
    },
    {
        "id": 113,
        "question": "W komputerze zamontowano nowy dysk twardy o pojemno\u015bci 8 TB i podzielono go na 2 partycje, ka\u017cda po 4 TB wielko\u015bci. Kt\u00f3rego typu tablicy partycji nale\u017cy u\u017cy\u0107, aby mo\u017cna by\u0142o dokona\u0107 takiego partycjonowania?",
        "imageLoc": "",
        "answers": [
            "A. FAT32",
            "B. GPT",
            "C. MBR",
            "D. SWAP"
        ],
        "goodAnswer": "B. GPT"
    },
    {
        "id": 114,
        "question": "Na p\u0142ycie g\u0142\u00f3wnej wykorzystuj\u0105cej uk\u0142ad Intel 865G",
        "imageLoc": "",
        "answers": [
            "A. nie mo\u017cna zainstalowa\u0107 karty graficznej",
            "B. mo\u017cna zainstalowa\u0107 kart\u0119 graficzn\u0105 ze z\u0142\u0105czem AGP",
            "C. mo\u017cna zainstalowa\u0107 kart\u0119 graficzn\u0105 ze z\u0142\u0105czem PCI-Express",
            "D. mo\u017cna zainstalowa\u0107 kart\u0119 graficzn\u0105 ze z\u0142\u0105czem ISA"
        ],
        "goodAnswer": "B. mo\u017cna zainstalowa\u0107 kart\u0119 graficzn\u0105 ze z\u0142\u0105czem AGP"
    },
    {
        "id": 115,
        "question": "Kt\u00f3re polecenie systemu Linux wy\u015bwietla czas pracy systemu oraz jego \u015brednie obci\u0105\u017cenie?",
        "imageLoc": "",
        "answers": [
            "A. lastreboot",
            "B. uname -a",
            "C. dmidecode",
            "D. uptime"
        ],
        "goodAnswer": "D. uptime"
    },
    {
        "id": 116,
        "question": "W drukarce laserowej do utrwalania wydruku na papierze s\u0142u\u017c\u0105",
        "imageLoc": "",
        "answers": [
            "A. b\u0119ben transferowy",
            "B. g\u0142owice piezoelektryczne",
            "C. promienie lasera",
            "D. rozgrzane wa\u0142ki"
        ],
        "goodAnswer": "D. rozgrzane wa\u0142ki"
    },
    {
        "id": 117,
        "question": "Wska\u017c poprawn\u0105 posta\u0107 maski",
        "imageLoc": "",
        "answers": [
            "A. 255.255.255.96",
            "B. 255.255.255.64",
            "C. 255.255.255.192",
            "D. 255.255.255.228"
        ],
        "goodAnswer": "C. 255.255.255.192"
    },
    {
        "id": 118,
        "question": "Narz\u0119dzie systemu Windows wykorzystywane do interpretacji polece\u0144, stosuj\u0105ce logik\u0119 obiektow\u0105 oraz cmdlety, to",
        "imageLoc": "",
        "answers": [
            "A. Windows PowerShell.",
            "B. standardowy strumie\u0144 wej\u015bcia.",
            "C. konsola MMC.",
            "D. wiersz polece\u0144 systemu Windows."
        ],
        "goodAnswer": "A. Windows PowerShell."
    },
    {
        "id": 119,
        "question": "W systemie Windows do instalacji aktualizacji oraz przywracania sterownik\u00f3w urz\u0105dze\u0144 nale\u017cy u\u017cy\u0107 przystawki",
        "imageLoc": "",
        "answers": [
            "A. fsmgmt.msc",
            "B. certmgr.msc",
            "C. devmgmt.msc",
            "D. wmimgmt.msc"
        ],
        "goodAnswer": "C. devmgmt.msc"
    },
    {
        "id": 120,
        "question": "Jaki protok\u00f3\u0142 s\u0142u\u017cy do translacji pomi\u0119dzy publicznymi i prywatnymi adresami IP?",
        "imageLoc": "",
        "answers": [
            "A. RARP",
            "B. SNMP",
            "C. NAT",
            "D. ARP"
        ],
        "goodAnswer": "C. NAT"
    },
    {
        "id": 121,
        "question": "Oprogramowanie, przypisane do jednego komputera lub jego cz\u0119\u015bci, uniemo\u017cliwiaj\u0105ce ponown\u0105 instalacj\u0119 na nowszym sprz\u0119cie zakupionym przez tego samego u\u017cytkownika, to",
        "imageLoc": "",
        "answers": [
            "A. CPL",
            "B. MPL",
            "C. MOLP",
            "D. OEM"
        ],
        "goodAnswer": "D. OEM"
    },
    {
        "id": 122,
        "question": "Wska\u017c domy\u015bln\u0105 mask\u0119 dla adresu IP klasy B",
        "imageLoc": "",
        "answers": [
            "A. 255.0.0.0",
            "B. 255.255.255.0",
            "C. 255.255.0.0",
            "D. 255.255.255.255"
        ],
        "goodAnswer": "C. 255.255.0.0"
    },
    {
        "id": 123,
        "question": "W systemie Windows u\u017cytkownik oraz wszystkie grupy, do kt\u00f3rych on nale\u017cy maj\u0105 uprawnienia \"odczyt\" do folderu XYZ. U\u017cytkownik ten b\u0119dzie m\u00f3g\u0142 wykonywa\u0107 operacje",
        "imageLoc": "",
        "answers": [
            "A. odczytu uprawnie\u0144 do folderu XYZ",
            "B. zmiany nazwy folderu XYZ",
            "C. kopiowania plik\u00f3w do folderu XYZ",
            "D. usuni\u0119cia folderu XYZ"
        ],
        "goodAnswer": "A. odczytu uprawnie\u0144 do folderu XYZ"
    },
    {
        "id": 124,
        "question": "Do wykonania monitoringu stanu dysk\u00f3w twardych w serwerach, komputerach stacjonarnych i laptopach mo\u017cna wykorzysta\u0107 program",
        "imageLoc": "",
        "answers": [
            "A. Acronis Drive Monitor",
            "B. Packet Tracer",
            "C. PRTG Network Monitor",
            "D. Super Pi"
        ],
        "goodAnswer": "A. Acronis Drive Monitor"
    },
    {
        "id": 125,
        "question": "Do serwisu komputerowego dostarczono laptopa z matryc\u0105 bardzo s\u0142abo wy\u015bwietlaj\u0105c\u0105 obraz. Ponadto obraz jest bardzo ciemny i widoczny tylko z bliska. Przyczyna usterki to",
        "imageLoc": "",
        "answers": [
            "A. uszkodzone \u0142\u0105cze mi\u0119dzy procesorem a matryc\u0105",
            "B. uszkodzony inwerter",
            "C. p\u0119kni\u0119ta matryca",
            "D. uszkodzone gniazdo HDMI"
        ],
        "goodAnswer": "B. uszkodzony inwerter"
    },
    {
        "id": 126,
        "question": "Zapis na dyskach BD-R odbywa si\u0119 za pomoc\u0105",
        "imageLoc": "",
        "answers": [
            "A. lasera niebieskiego",
            "B. g\u0142owicy magnetycznej",
            "C. \u015bwiat\u0142a UV",
            "D. lasera czerwonego"
        ],
        "goodAnswer": "A. lasera niebieskiego"
    },
    {
        "id": 127,
        "question": "Zgodnie z norm\u0105 PN-EN 50174 maksymalna d\u0142ugo\u015b\u0107 przebiegu kabla poziomego kategorii 6 pomi\u0119dzy punktem abonenckim a punktem dystrybucyjnym w panelu krosowym wynosi",
        "imageLoc": "",
        "answers": [
            "A. 100 m",
            "B. 110 m",
            "C. 150 m",
            "D. 90 m"
        ],
        "goodAnswer": "D. 90 m"
    },
    {
        "id": 128,
        "question": "Aby wy\u015bwietli\u0107 przedstawion\u0105 informacj\u0119 o systemie Linux w terminalu, male\u017cy u\u017cy\u0107 polecenia",
        "imageLoc": require("../assets/img/790.png"),
        "answers": [
            "A. uptime",
            "B. hostname",
            "C. uname -a",
            "D. factor 22"
        ],
        "goodAnswer": "C. uname -a"
    },
    {
        "id": 129,
        "question": "Do konfiguracji i personalizacji \u015brodowiska graficznego GNOME w r\u00f3\u017cnych systemach Linux nale\u017cy wykorzysta\u0107 program",
        "imageLoc": "",
        "answers": [
            "A. GNU Compiller Collection",
            "B. GNOME Tweak Tool",
            "C. GIGODO Tools",
            "D. GNOMON 3D"
        ],
        "goodAnswer": "B. GNOME Tweak Tool"
    },
    {
        "id": 130,
        "question": "Do ilu sieci nale\u017c\u0105 komputery o adresach IP i maskach sieci przedstawionych w tabeli?",
        "imageLoc": require("../assets/img/1546.png"),
        "answers": [
            "A. 2",
            "B. 5",
            "C. 4",
            "D. 3"
        ],
        "goodAnswer": "D. 3"
    },
    {
        "id": 131,
        "question": "Aby mie\u0107 pewno\u015b\u0107, \u017ce komputer otrzyma od serwera DHCP konkretny adres IP trzeba na serwerze zdefiniowa\u0107",
        "imageLoc": "",
        "answers": [
            "A. zastrze\u017cenie adresu IP komputera",
            "B. wykluczenie adresu IP komputera",
            "C. pul\u0119 adres\u00f3w IP",
            "D. dzier\u017caw\u0119 adresu IP"
        ],
        "goodAnswer": "A. zastrze\u017cenie adresu IP komputera"
    },
    {
        "id": 132,
        "question": "Diody elektroluminescencyjne RGB s\u0105 \u017ar\u00f3d\u0142em \u015bwiat\u0142a w skanerach",
        "imageLoc": "",
        "answers": [
            "A. p\u0142askich CCD",
            "B. p\u0142askich CIS",
            "C. kod\u00f3w kreskowych",
            "D. b\u0119bnowych"
        ],
        "goodAnswer": "B. p\u0142askich CIS"
    },
    {
        "id": 133,
        "question": "W dokumentacji p\u0142yty g\u0142\u00f3wnej jest informacja \u201eWsparcie dla S/PDIF Out\u201d. Oznacza to, \u017ce dana p\u0142yta g\u0142\u00f3wna zawiera",
        "imageLoc": "",
        "answers": [
            "A. cyfrowe z\u0142\u0105cze sygna\u0142u video",
            "B. analogowe z\u0142\u0105cze sygna\u0142u wej\u015bcia video",
            "C. cyfrowe z\u0142\u0105cze sygna\u0142u audio",
            "D. analogowe z\u0142\u0105cze sygna\u0142u wyj\u015bcia video"
        ],
        "goodAnswer": "C. cyfrowe z\u0142\u0105cze sygna\u0142u audio"
    },
    {
        "id": 134,
        "question": "Przedstawione wbudowane narz\u0119dzie system\u00f3w Windows w wersji Enterprise lub Ultimate s\u0142u\u017cy do",
        "imageLoc": require("../assets/img/791.png"),
        "answers": [
            "A. tworzenia kopii dysku",
            "B. kryptograficznej ochrony danych na dyskach",
            "C. konsolidacji danych na dyskach",
            "D. kompresji dysku"
        ],
        "goodAnswer": "B. kryptograficznej ochrony danych na dyskach"
    },
    {
        "id": 135,
        "question": "Wynikiem sumowania liczb binarnych 1001101 i 11001 jest",
        "imageLoc": "",
        "answers": [
            "A. 1000110",
            "B. 1000111",
            "C. 1100110",
            "D. 1100111"
        ],
        "goodAnswer": "C. 1100110"
    },
    {
        "id": 136,
        "question": "Sprawdzenie minimalnego okresu wa\u017cno\u015bci has\u0142a w systemie Windows umo\u017cliwia polecenie",
        "imageLoc": "",
        "answers": [
            "A. net user",
            "B. net accounts",
            "C. net time",
            "D. net group"
        ],
        "goodAnswer": "B. net accounts"
    },
    {
        "id": 137,
        "question": "W tabeli zamieszczono dane katalogowe procesora AMD Athlon 1333 Model 4 Thunderbird. Z jak\u0105 cz\u0119stotliwo\u015bci\u0105 realizowane s\u0105 przes\u0142ania mi\u0119dzyrejestrowe?",
        "imageLoc": require("../assets/img/161.png"),
        "answers": [
            "A. 266 MHz",
            "B. 1333 MHz",
            "C. 2666 MHz",
            "D. 133 MHz"
        ],
        "goodAnswer": "B. 1333 MHz"
    },
    {
        "id": 138,
        "question": "Jakie elementy znajduj\u0105 si\u0119 na przedstawionej p\u0142ycie g\u0142\u00f3wnej?",
        "imageLoc": require("../assets/img/24.png"),
        "answers": [
            "A. 4 z\u0142\u0105cza ISA, 2 z\u0142\u0105cza PCI, 3 z\u0142\u0105cza pami\u0119ci DIMM",
            "B. 3 z\u0142\u0105cza ISA, 4 z\u0142\u0105cza PCI, 2 z\u0142\u0105cza pami\u0119ci DIMM",
            "C. 2 z\u0142\u0105cza ISA, 3 z\u0142\u0105cza PCI, 4 z\u0142\u0105cza pami\u0119ci DIMM",
            "D. 2 z\u0142\u0105cza ISA, 4 z\u0142\u0105cza PCI, 3 z\u0142\u0105cza pami\u0119ci DIMM"
        ],
        "goodAnswer": "D. 2 z\u0142\u0105cza ISA, 4 z\u0142\u0105cza PCI, 3 z\u0142\u0105cza pami\u0119ci DIMM"
    },
    {
        "id": 139,
        "question": "Drukarka fotograficzna ma bardzo brudn\u0105 obudow\u0119 oraz wy\u015bwietlacz. Aby usun\u0105\u0107 zabrudzenia, nale\u017cy u\u017cy\u0107",
        "imageLoc": "",
        "answers": [
            "A. suchej chusteczki oraz patyczk\u00f3w do czyszczenia",
            "B. \u015bciereczki nas\u0105czonej IPA oraz \u015brodka smaruj\u0105cego",
            "C. wilgotnej \u015bciereczki oraz pianki do czyszczenia plastiku",
            "D. mokrej chusteczki oraz spr\u0119\u017conego powietrza z rurk\u0105 zwi\u0119kszaj\u0105c\u0105 zasi\u0119g"
        ],
        "goodAnswer": "C. wilgotnej \u015bciereczki oraz pianki do czyszczenia plastiku"
    },
    {
        "id": 140,
        "question": "Narz\u0119dziem systemu Windows s\u0142u\u017c\u0105cym do sprawdzenia pr\u00f3b logowania do systemu jest dziennik",
        "imageLoc": "",
        "answers": [
            "A. zabezpiecze\u0144",
            "B. setup",
            "C. aplikacji",
            "D. system"
        ],
        "goodAnswer": "A. zabezpiecze\u0144"
    },
    {
        "id": 141,
        "question": "Protok\u00f3\u0142 umo\u017cliwiaj\u0105cy pobieranie poczty e-mail z serwera to:",
        "imageLoc": "",
        "answers": [
            "A. SMTP",
            "B. FTP",
            "C. DNS",
            "D. POP3"
        ],
        "goodAnswer": "D. POP3"
    },
    {
        "id": 142,
        "question": "Metoda dost\u0119pu do medium transmisyjnego z wykrywaniem kolizji w sieciach LAN jest",
        "imageLoc": "",
        "answers": [
            "A. IPX/SPX",
            "B. CSMA/CD",
            "C. NetBEUI",
            "D. WINS"
        ],
        "goodAnswer": "B. CSMA/CD"
    },
    {
        "id": 143,
        "question": "Odpowiednikiem maski 255.255.252.0 jest prefiks",
        "imageLoc": "",
        "answers": [
            "A. /24",
            "B. /23",
            "C. /22",
            "D. /25"
        ],
        "goodAnswer": "C. /22"
    },
    {
        "id": 144,
        "question": "Do kt\u00f3rej klasy adres\u00f3w IP nale\u017cy adres 130.140.0.0?",
        "imageLoc": "",
        "answers": [
            "A. Do klasy C",
            "B. Do klasy D",
            "C. Do klasy B",
            "D. Do klasy A"
        ],
        "goodAnswer": "C. Do klasy B"
    },
    {
        "id": 145,
        "question": "Kt\u00f3ry parametr w konfiguracji punktu dost\u0119powego pe\u0142ni rol\u0119 loginu wykorzystywanego podczas pr\u00f3by nawi\u0105zywania po\u0142\u0105czenia z punktem dost\u0119powym sieci bezprzewodowej?",
        "imageLoc": require("../assets/img/1347.png"),
        "answers": [
            "A. Wireless Channel",
            "B. Channel Width",
            "C. Transmission Rate",
            "D. Wireless Network Name"
        ],
        "goodAnswer": "D. Wireless Network Name"
    },
    {
        "id": 146,
        "question": "W metodzie dost\u0119pu do no\u015bnika CSMA/CD (Carrier Sense Multiple Access with Collision Detection) stacja, kt\u00f3ra zamierza rozpocz\u0105\u0107 nadawanie, nas\u0142uchuje czy w sieci odbywa si\u0119 ruch, a nast\u0119pnie",
        "imageLoc": "",
        "answers": [
            "A. wysy\u0142a zg\u0142oszenie \u017c\u0105dania transmisji",
            "B. oczekuje \u017cetonu zezwalaj\u0105cego rozpocz\u0119cie nadawania",
            "C. po wykryciu ruchu w sieci czeka a\u017c no\u015bnik b\u0119dzie wolny",
            "D. oczekuje na nadanie priorytetu transmisji przez koncentrator"
        ],
        "goodAnswer": "C. po wykryciu ruchu w sieci czeka a\u017c no\u015bnik b\u0119dzie wolny"
    },
    {
        "id": 147,
        "question": "Kt\u00f3ry z element\u00f3w oznaczonych numerami od 1 do 4, przedstawionych na schemacie blokowym frame grabbera i opisanym we fragmencie dokumentacji technicznej, s\u0142u\u017cy do wymiany danych z innymi urz\u0105dzeniami przetwarzaj\u0105cymi obraz wideo bez niepotrzebnego obci\u0105\u017cania magistrali PCI?",
        "imageLoc": require("../assets/img/194.png"),
        "answers": [
            "A. 3",
            "B. 2",
            "C. 4",
            "D. 1"
        ],
        "goodAnswer": "B. 2"
    },
    {
        "id": 148,
        "question": "Magistrala zako\u0144czona elementem przedstawionym na rysunku jest charakterystyczna dla interfejsu",
        "imageLoc": require("../assets/img/702.png"),
        "answers": [
            "A. SATA",
            "B. ATAPI",
            "C. SCSI",
            "D. UDMA"
        ],
        "goodAnswer": "C. SCSI"
    },
    {
        "id": 149,
        "question": "Tusz \u017celowy jest stosowany w drukarkach",
        "imageLoc": "",
        "answers": [
            "A. fiskalnych",
            "B. sublimacyjnych",
            "C. ig\u0142owych",
            "D. termotransferowych"
        ],
        "goodAnswer": "B. sublimacyjnych"
    },
    {
        "id": 150,
        "question": "Wska\u017c tryb pracy, w kt\u00f3rym komputer zu\u017cywa najmniejsz\u0105 ilo\u015b\u0107 energii",
        "imageLoc": "",
        "answers": [
            "A. u\u015bpienie",
            "B. wstrzymanie",
            "C. hibernacja",
            "D. gotowo\u015b\u0107 (pracy)"
        ],
        "goodAnswer": "C. hibernacja"
    },
    {
        "id": 151,
        "question": "Kt\u00f3re polecenie w systemach operacyjnych Windows, jest stosowane do wy\u015bwietlania konfiguracji interfejs\u00f3w sieciowych?",
        "imageLoc": "",
        "answers": [
            "A. ipconfig",
            "B. hold",
            "C. ifconfig",
            "D. tracert"
        ],
        "goodAnswer": "A. ipconfig"
    },
    {
        "id": 152,
        "question": "Na schemacie mikroprocesora wskazany strza\u0142k\u0105 blok jest odpowiedzialny za",
        "imageLoc": require("../assets/img/585.png"),
        "answers": [
            "A. wykonywanie operacji arytmetycznych i logicznych na liczbach",
            "B. przetwarzanie wska\u017anika na nast\u0119pn\u0105 instrukcj\u0119 programu",
            "C. przechowywanie kolejnych adres\u00f3w pami\u0119ci z rozkazami",
            "D. przechowywanie obecnie przetwarzanej instrukcji"
        ],
        "goodAnswer": "A. wykonywanie operacji arytmetycznych i logicznych na liczbach"
    },
    {
        "id": 153,
        "question": "Jaka us\u0142uga umo\u017cliwia zdaln\u0105 instalacj\u0119 systemu operacyjnego?",
        "imageLoc": "",
        "answers": [
            "A. DNS",
            "B. IIS",
            "C. WDS",
            "D. IRC"
        ],
        "goodAnswer": "C. WDS"
    },
    {
        "id": 154,
        "question": "Kt\u00f3ry zapis adresu IPv4 wraz z mask\u0105 jest b\u0142\u0119dny?",
        "imageLoc": "",
        "answers": [
            "A. 100.0.0.0/8",
            "B. 18.4.0.0, maska 255.0.0.0",
            "C. 192.168.0.1, maska 255.250.255.0",
            "D. 16.1.1.1/5"
        ],
        "goodAnswer": "C. 192.168.0.1, maska 255.250.255.0"
    },
    {
        "id": 155,
        "question": "Aby sygna\u0142y dw\u00f3ch router\u00f3w w sieci WiFi standardu 802.11g nie zak\u0142\u00f3ca\u0142y si\u0119 wzajemnie, nale\u017cy ustawi\u0107 kana\u0142y o numerach",
        "imageLoc": "",
        "answers": [
            "A. 1 i 5",
            "B. 3 i 6",
            "C. 2 i 7",
            "D. 5 i 7"
        ],
        "goodAnswer": "C. 2 i 7"
    },
    {
        "id": 156,
        "question": "Kt\u00f3re ze zda\u0144 jest prawdziwe dla przedstawionej konfiguracji us\u0142ugi DHCP w systemie Linux?",
        "imageLoc": require("../assets/img/1799.png"),
        "answers": [
            "A. Komputery pracuj\u0105ce w sieci otrzymaj\u0105 adres IP z zakresu 176.16.20.50 \u00f7 176.16.20.250",
            "B. Karcie sieciowej komputera main przypisany zostanie adres IP 39:12:86:07:55:00",
            "C. Komputery otrzymaj\u0105 adres IP z zakresu 176.16.20.251 \u00f7 255.255.255.0",
            "D. System zamieni adres IP 192.168.221.102 na nazw\u0119 main"
        ],
        "goodAnswer": "A. Komputery pracuj\u0105ce w sieci otrzymaj\u0105 adres IP z zakresu 176.16.20.50 \u00f7 176.16.20.250"
    },
    {
        "id": 157,
        "question": "Przydzia\u0142y dyskowe w systemach rodziny Windows",
        "imageLoc": "",
        "answers": [
            "A. pozwalaj\u0105 na zdefiniowanie maksymalnej przestrzeni dyskowej dla kont u\u017cytkownik\u00f3w",
            "B. przydzielaj\u0105 partycje na dyskach",
            "C. zapewniaj\u0105 podstawow\u0105 funkcje diagnostyczne, defragmentacj\u0119 i checkdisk",
            "D. przydzielaj\u0105 etykiet\u0119 (np. C) dla danej partycji"
        ],
        "goodAnswer": "A. pozwalaj\u0105 na zdefiniowanie maksymalnej przestrzeni dyskowej dla kont u\u017cytkownik\u00f3w"
    },
    {
        "id": 158,
        "question": "Technologia procesor\u00f3w serii Intel Core stosowana w modelach i5, i7 oraz i9, pozwalaj\u0105ca na zwi\u0119kszenie taktowania w przypadku gdy komputer potrzebuje wy\u017cszej mocy obliczeniowej, to",
        "imageLoc": "",
        "answers": [
            "A. BitLocker",
            "B. Turbo Boost",
            "C. Hyper Threading",
            "D. CrossFire"
        ],
        "goodAnswer": "B. Turbo Boost"
    },
    {
        "id": 159,
        "question": "Na zdj\u0119ciu jest widoczny tylny panel komputera. Jak nazywa si\u0119 wej\u015bcie oznaczone strza\u0142k\u0105?",
        "imageLoc": require("../assets/img/128.png"),
        "answers": [
            "A. LPT",
            "B. FireWire",
            "C. USB",
            "D. COM"
        ],
        "goodAnswer": "B. FireWire"
    },
    {
        "id": 160,
        "question": "Narz\u0119dziem systemu Windows, s\u0142u\u017c\u0105cym do sprawdzenia wp\u0142ywu poszczeg\u00f3lnych proces\u00f3w i us\u0142ug na wydajno\u015b\u0107 procesora oraz tego, w jakim stopniu generuj\u0105 one obci\u0105\u017cenie pami\u0119ci czy dysku, jest",
        "imageLoc": "",
        "answers": [
            "A. credwiz",
            "B. resmon",
            "C. dcomcnfg",
            "D. cleanmgr"
        ],
        "goodAnswer": "B. resmon"
    },
    {
        "id": 161,
        "question": "Wybierz medium, kt\u00f3re w sieciach komputerowych zapewnia najszybsz\u0105 transmisj\u0119 danych",
        "imageLoc": "",
        "answers": [
            "A. Kabel \u015bwiat\u0142owodowy",
            "B. Fale radiowe",
            "C. Mikrofale",
            "D. Czteroparowy kabel kat. 5"
        ],
        "goodAnswer": "A. Kabel \u015bwiat\u0142owodowy"
    },
    {
        "id": 162,
        "question": "Do realizacji iloczynu logicznego z negacj\u0105 nale\u017cy u\u017cy\u0107 funktora",
        "imageLoc": "",
        "answers": [
            "A. AND",
            "B. NAND",
            "C. NOT",
            "D. EX-OR"
        ],
        "goodAnswer": "B. NAND"
    },
    {
        "id": 163,
        "question": "Kt\u00f3ra licencja umo\u017cliwia bezp\u0142atne wykorzystywanie programu, pod warunkiem, \u017ce u\u017cytkownik zatroszczy si\u0119 o \u015brodowisko naturalne?",
        "imageLoc": "",
        "answers": [
            "A. OEM",
            "B. Adware",
            "C. Donationware",
            "D. Greenware"
        ],
        "goodAnswer": "D. Greenware"
    },
    {
        "id": 164,
        "question": "Aby bezprzewodowo po\u0142\u0105czy\u0107 mysz z komputerem, nale\u017cy u\u017cy\u0107 interfejsu",
        "imageLoc": "",
        "answers": [
            "A. DVI",
            "B. Bluetooth",
            "C. RS 232",
            "D. IEEE_1284"
        ],
        "goodAnswer": "B. Bluetooth"
    },
    {
        "id": 165,
        "question": "Aby po\u0142\u0105czy\u0107 komputer z sieci\u0105 LAN, nale\u017cy wykorzysta\u0107 interfejs",
        "imageLoc": "",
        "answers": [
            "A. LPT",
            "B. RJ-45",
            "C. D-SUB",
            "D. S/PDIF"
        ],
        "goodAnswer": "B. RJ-45"
    },
    {
        "id": 166,
        "question": "Maska w postaci pe\u0142nej podsieci o prefiksie /25 to",
        "imageLoc": "",
        "answers": [
            "A. 255.255.255.224",
            "B. 255.255.255.240",
            "C. 255.255.255.192",
            "D. 255.255.255.128"
        ],
        "goodAnswer": "D. 255.255.255.128"
    },
    {
        "id": 167,
        "question": "Pliki specjalne urz\u0105dze\u0144, tworzone podczas instalacji sterownik\u00f3w w systemie Linux, s\u0105 zapisywane w katalogu",
        "imageLoc": "",
        "answers": [
            "A. /dev",
            "B. /proc",
            "C. /sbin",
            "D. /var"
        ],
        "goodAnswer": "A. /dev"
    },
    {
        "id": 168,
        "question": "AES (ang. Advanced Encryption Standard)",
        "imageLoc": "",
        "answers": [
            "A. nie mo\u017ce by\u0107 zaimplementowany sprz\u0119towo",
            "B. wykorzystuje symetryczny algorytm szyfruj\u0105cy",
            "C. jest poprzednikiem DES (ang. Data Encryption Standard)",
            "D. nie mo\u017ce by\u0107 wykorzystany przy szyfrowaniu plik\u00f3w"
        ],
        "goodAnswer": "B. wykorzystuje symetryczny algorytm szyfruj\u0105cy"
    },
    {
        "id": 169,
        "question": "Kt\u00f3ra topologia fizyczna zapewnia po\u0142\u0105czenia nadmiarowe pomi\u0119dzy urz\u0105dzeniami sieci?",
        "imageLoc": "",
        "answers": [
            "A. Gwiazdy",
            "B. Magistrali",
            "C. Pier\u015bcienia",
            "D. Siatki"
        ],
        "goodAnswer": "D. Siatki"
    },
    {
        "id": 170,
        "question": "Je\u017celi podczas pod\u0142\u0105czenia stacji dysk\u00f3w elastycznych 1,44 MB kabel danych zostanie pod\u0142\u0105czony odwrotnie, to",
        "imageLoc": "",
        "answers": [
            "A. BIOS komputera poprawnie wykryje stacj\u0119 dysk\u00f3w",
            "B. stacja dysk\u00f3w ulegnie uszkodzeniu",
            "C. BIOS komputera zg\u0142osi b\u0142\u0105d pod\u0142\u0105czenia stacji dysk\u00f3w",
            "D. BIOS komputera wykryje stacj\u0119 dysk\u00f3w jako 2,88 MB"
        ],
        "goodAnswer": "C. BIOS komputera zg\u0142osi b\u0142\u0105d pod\u0142\u0105czenia stacji dysk\u00f3w"
    },
    {
        "id": 171,
        "question": "Na rysunku przedstawiono patchpanel - nieekranowany panel krosowy kategorii 5e, wyposa\u017cony w z\u0142\u0105cza szczelinowe typu LSA. Do monta\u017cu (zaszywania) kabli w z\u0142\u0105cza szczelinowe nale\u017cy u\u017cy\u0107",
        "imageLoc": require("../assets/img/1173.png"),
        "answers": [
            "A. narz\u0119dzia zaciskowego BNC",
            "B. narz\u0119dzia zaciskowego 8P8C",
            "C. narz\u0119dzia JackRapid",
            "D. narz\u0119dzia uderzeniowego"
        ],
        "goodAnswer": "D. narz\u0119dzia uderzeniowego"
    },
    {
        "id": 172,
        "question": "W przedsi\u0119biorstwie nale\u017cy cyklicznie tworzy\u0107 kopie bezpiecze\u0144stwa du\u017cej ilo\u015bci danych, znajduj\u0105cych si\u0119 na serwerze, rz\u0119du kilkuset GB. Jakie urz\u0105dzenie najlepiej wykorzysta\u0107 do tego celu?",
        "imageLoc": "",
        "answers": [
            "A. Nagrywark\u0119 CD",
            "B. Streamer",
            "C. Nagrywark\u0119 DVD",
            "D. Macierz RAID1"
        ],
        "goodAnswer": "B. Streamer"
    },
    {
        "id": 173,
        "question": "W kt\u00f3rym typie macierzy, przestrze\u0144 wszystkich dysk\u00f3w fizycznych jest widziana jako jeden dysk logiczny?",
        "imageLoc": "",
        "answers": [
            "A. RAID 2",
            "B. RAID 1",
            "C. RAID 5",
            "D. RAID 0"
        ],
        "goodAnswer": "D. RAID 0"
    },
    {
        "id": 174,
        "question": "W kt\u00f3rej fizycznej topologii sieci komputerowej ka\u017cdy w\u0119ze\u0142 sieci ma fizyczne po\u0142\u0105czenie z ka\u017cdym innym w\u0119z\u0142em sieci?",
        "imageLoc": "",
        "answers": [
            "A. Cz\u0119\u015bciowej siatki",
            "B. Rozszerzonej gwiazdy",
            "C. Podw\u00f3jnego pier\u015bcienia",
            "D. Pe\u0142nej siatki"
        ],
        "goodAnswer": "D. Pe\u0142nej siatki"
    },
    {
        "id": 175,
        "question": "W sieci lokalnej zainstalowano serwer, kt\u00f3ry ma za zadanie przydzielanie dynamicznego adresu IP. Jaka us\u0142uga musi by\u0107 uruchomiona na tym serwerze?",
        "imageLoc": "",
        "answers": [
            "A. DCHP",
            "B. DHCP",
            "C. ISA",
            "D. DNS"
        ],
        "goodAnswer": "B. DHCP"
    },
    {
        "id": 176,
        "question": "Rol\u0105 routera jest",
        "imageLoc": "",
        "answers": [
            "A. zabezpieczenia sieci przed atakiem z zewn\u0105trz i z wewn\u0105trz",
            "B. przekazywanie pakiet\u00f3w TCP/IP z sieci \u017ar\u00f3d\u0142owej do docelowej",
            "C. wyeliminowanie kolizji",
            "D. t\u0142umaczenie nazwy na adresy IP"
        ],
        "goodAnswer": "B. przekazywanie pakiet\u00f3w TCP/IP z sieci \u017ar\u00f3d\u0142owej do docelowej"
    },
    {
        "id": 177,
        "question": "Brak odporno\u015bci na utrat\u0119 danych z uwagi na fizyczn\u0105 awari\u0119 jednego z dysk\u00f3w jest cech\u0105",
        "imageLoc": "",
        "answers": [
            "A. RAID 3",
            "B. RAID 0",
            "C. RAID 2",
            "D. RAID 1"
        ],
        "goodAnswer": "B. RAID 0"
    },
    {
        "id": 178,
        "question": "Medium transmisyjne o symbolu S/FTP oznacza skr\u0119tk\u0119",
        "imageLoc": "",
        "answers": [
            "A. nieekranowan\u0105",
            "B. z ekranem na ka\u017cdej parze oraz z ekranem z folii na czterech parach przewod\u00f3w",
            "C. jedynie z ekranem z folii na czterech parach przewod\u00f3w",
            "D. z ekranem z folii na ka\u017cdej parze przewod\u00f3w oraz ekranem z siatki na czterech parach"
        ],
        "goodAnswer": "D. z ekranem z folii na ka\u017cdej parze przewod\u00f3w oraz ekranem z siatki na czterech parach"
    },
    {
        "id": 179,
        "question": "Klaster komputerowy to",
        "imageLoc": "",
        "answers": [
            "A. grupa komputer\u00f3w pracuj\u0105cych wsp\u00f3\u0142bie\u017cnie tak, jakby by\u0142 to jeden komputer",
            "B. komputer z wieloma procesorami",
            "C. komputer z macierz\u0105 dyskow\u0105",
            "D. komputer zapasowy, na kt\u00f3rym co pewien czas wykonywana jest kopia systemu g\u0142\u00f3wnego"
        ],
        "goodAnswer": "A. grupa komputer\u00f3w pracuj\u0105cych wsp\u00f3\u0142bie\u017cnie tak, jakby by\u0142 to jeden komputer"
    },
    {
        "id": 180,
        "question": "Natychmiast po usuni\u0119ciu wa\u017cnych plik\u00f3w na dysku twardym u\u017cytkownik powinien",
        "imageLoc": "",
        "answers": [
            "A. wykona\u0107 defragmentacj\u0119 dysku.",
            "B. przeprowadzi\u0107 test S. M. A. R. T. tego dysku.",
            "C. zainstalowa\u0107 program diagnostyczny.",
            "D. uchroni\u0107 dysk przed zapisem nowych danych."
        ],
        "goodAnswer": "D. uchroni\u0107 dysk przed zapisem nowych danych."
    },
    {
        "id": 181,
        "question": "Przedstawiona na diagramie strategia zapisu kopii zapasowych na no\u015bnikach nosi nazw\u0119",
        "imageLoc": require("../assets/img/1915.png"),
        "answers": [
            "A. uproszczony GFS.",
            "B. wie\u017ca Hanoi.",
            "C. round-robin.",
            "D. dziadek-ojciec-syn."
        ],
        "goodAnswer": "B. wie\u017ca Hanoi."
    },
    {
        "id": 182,
        "question": "Jaki jest domy\u015blny port serwera us\u0142ugi WWW?",
        "imageLoc": "",
        "answers": [
            "A. 8081",
            "B. 80",
            "C. 8080",
            "D. 800"
        ],
        "goodAnswer": "B. 80"
    },
    {
        "id": 183,
        "question": "Odnalezienie g\u0142\u00f3wnego rekordu rozruchowego, wczytuj\u0105cego system z aktywnej partycji umo\u017cliwia",
        "imageLoc": "",
        "answers": [
            "A. GUID Partition Table",
            "B. CDDL",
            "C. POST",
            "D. BootstrapLoader"
        ],
        "goodAnswer": "D. BootstrapLoader"
    },
    {
        "id": 184,
        "question": "Kt\u00f3re urz\u0105dzenie umo\u017cliwi pod\u0142\u0105czenie drukarki nieposiadaj\u0105cej karty sieciowej do lokalnej sieci komputerowej?",
        "imageLoc": "",
        "answers": [
            "A. Koncentrator",
            "B. Serwer wydruku",
            "C. Punkt dost\u0119pu",
            "D. Regenerator"
        ],
        "goodAnswer": "B. Serwer wydruku"
    },
    {
        "id": 185,
        "question": "Komputer utraci\u0142 po\u0142\u0105czenie z sieci\u0105 komputerow\u0105. Jakie dzia\u0142anie nale\u017cy wykona\u0107 w pierwszej kolejno\u015bci, aby rozwi\u0105za\u0107 problem?",
        "imageLoc": "",
        "answers": [
            "A. Przelogowa\u0107 si\u0119 na innego u\u017cytkownika",
            "B. Zaktualizowa\u0107 sterownik karty sieciowej",
            "C. Sprawdzi\u0107 adres IP przypisany do karty sieciowej",
            "D. Zaktualizowa\u0107 system operacyjny"
        ],
        "goodAnswer": "C. Sprawdzi\u0107 adres IP przypisany do karty sieciowej"
    },
    {
        "id": 186,
        "question": "Minimaln\u0105 d\u0142ugo\u015b\u0107 has\u0142a u\u017cytkownika w systemie Windows mo\u017cna ustawi\u0107 za pomoc\u0105 polecenia",
        "imageLoc": "",
        "answers": [
            "A. net computer",
            "B. net accounts",
            "C. net config",
            "D. net user"
        ],
        "goodAnswer": "B. net accounts"
    },
    {
        "id": 187,
        "question": "Wska\u017c adres rozg\u0142oszeniowy sieci, do kt\u00f3rej nale\u017cy host o adresie 88.89.90.91/6?",
        "imageLoc": "",
        "answers": [
            "A. 91.89.255.255",
            "B. 88.255.255.255",
            "C. 91.255.255.255",
            "D. 88.89.255.255"
        ],
        "goodAnswer": "C. 91.255.255.255"
    },
    {
        "id": 188,
        "question": "Jak\u0105 ilo\u015b\u0107 rzeczywistych danych mo\u017cna przes\u0142a\u0107 w czasie 1 s przez \u0142\u0105cze synchroniczne o przepustowo\u015bci 512 kbps, bez sprz\u0119towej i programowej kompresji?",
        "imageLoc": "",
        "answers": [
            "A. Oko\u0142o 55 kB",
            "B. Ponad 64 kB",
            "C. Ponad 500 kB",
            "D. Oko\u0142o 5 kB"
        ],
        "goodAnswer": "A. Oko\u0142o 55 kB"
    },
    {
        "id": 189,
        "question": "Aby u\u017cytkownik notebooka z systemem Windows 7 lub nowszym m\u00f3g\u0142 u\u017cywa\u0107 drukarki za po\u015brednictwem sieci WiFi, powinien zainstalowa\u0107 drukark\u0119 na porcie",
        "imageLoc": "",
        "answers": [
            "A. Nul",
            "B. WSD",
            "C. LPT3",
            "D. COM3"
        ],
        "goodAnswer": "B. WSD"
    },
    {
        "id": 190,
        "question": "Kt\u00f3ry z protoko\u0142\u00f3w jest stosowany w telefonii internetowej?",
        "imageLoc": "",
        "answers": [
            "A. HTTP",
            "B. NetBEUI",
            "C. H.323",
            "D. FTP"
        ],
        "goodAnswer": "C. H.323"
    },
    {
        "id": 191,
        "question": "Co nale\u017cy zrobi\u0107 z wiadomo\u015bci\u0105 pocztow\u0105 od nieznanej osoby, zawieraj\u0105c\u0105 niepewny za\u0142\u0105cznik?",
        "imageLoc": "",
        "answers": [
            "A. Otworzy\u0107 za\u0142\u0105cznik i zapisa\u0107 go na dysku twardym, a nast\u0119pnie sprawdzi\u0107 plik programem antywirusowym",
            "B. Nie otwiera\u0107 wiadomo\u015bci, natychmiast j\u0105 usun\u0105\u0107",
            "C. Otworzy\u0107 wiadomo\u015b\u0107 i odpowiedzie\u0107 na ni\u0105, pytaj\u0105c co zawiera za\u0142\u0105cznik",
            "D. Otworzy\u0107 za\u0142\u0105cznik, je\u015bli jest w nim wirus, natychmiast go zamkn\u0105\u0107"
        ],
        "goodAnswer": "B. Nie otwiera\u0107 wiadomo\u015bci, natychmiast j\u0105 usun\u0105\u0107"
    },
    {
        "id": 192,
        "question": "Przedstawiona na rysunku karta rozszerze\u0144 posiada ch\u0142odzenie",
        "imageLoc": require("../assets/img/311.png"),
        "answers": [
            "A. aktywne",
            "B. symetryczne",
            "C. pasywne",
            "D. wymuszone"
        ],
        "goodAnswer": "C. pasywne"
    },
    {
        "id": 193,
        "question": "Kt\u00f3re polecenie w systemie Linux nada uprawnienia do pisania dla wszystkich obiekt\u00f3w w /usr/share dla wszystkich u\u017cytkownik\u00f3w, nie zmieniaj\u0105c pozosta\u0142ych uprawnie\u0144?",
        "imageLoc": "",
        "answers": [
            "A. chmod a-w /usr/share",
            "B. chmod -R a+w /usr/share",
            "C. chmod -R o+r /usr/share",
            "D. chmod ugo+rw /usr/share"
        ],
        "goodAnswer": "B. chmod -R a+w /usr/share"
    },
    {
        "id": 194,
        "question": "Przedstawiony rysunek prezentuje z\u0142\u0105cze",
        "imageLoc": require("../assets/img/790.png"),
        "answers": [
            "A. DVI-D",
            "B. D-SUB",
            "C. HDMI",
            "D. DVI-A"
        ],
        "goodAnswer": "D. DVI-A"
    },
    {
        "id": 195,
        "question": "Programu CHKDSK u\u017cywa si\u0119 w celu",
        "imageLoc": "",
        "answers": [
            "A. zmiany systemu plik\u00f3w",
            "B. naprawy fizycznej struktury dysku",
            "C. defragmentacji dysku",
            "D. naprawy logicznej struktury dysku"
        ],
        "goodAnswer": "D. naprawy logicznej struktury dysku"
    },
    {
        "id": 196,
        "question": "Wska\u017c urz\u0105dzenie, kt\u00f3re nale\u017cy wykorzysta\u0107, aby pod\u0142\u0105czy\u0107 dwa komputery do sieci Internet z dost\u0119pem przez sie\u0107 lokaln\u0105 Ethernet, w kt\u00f3rej mamy do dyspozycji tylko jeden adres IP",
        "imageLoc": "",
        "answers": [
            "A. Router LAN",
            "B. Modem ISDN",
            "C. Prze\u0142\u0105cznik LAN",
            "D. Spliter ADSL"
        ],
        "goodAnswer": "A. Router LAN"
    },
    {
        "id": 197,
        "question": "Je\u017celi sie\u0107 172.16.6.0 podzieli si\u0119 z u\u017cyciem maski /27 na maksymaln\u0105 ilo\u015b\u0107 podsieci, to ile host\u00f3w b\u0119dzie mo\u017cna zaadresowa\u0107 w ka\u017cdej z nich?",
        "imageLoc": "",
        "answers": [
            "A. 28 host\u00f3w",
            "B. 29 host\u00f3w",
            "C. 32 hosty",
            "D. 30 host\u00f3w"
        ],
        "goodAnswer": "D. 30 host\u00f3w"
    },
    {
        "id": 198,
        "question": "Symbol kt\u00f3rego urz\u0105dzenia sieci komputerowej zosta\u0142 przedstawiony na rysunku?",
        "imageLoc": require("../assets/img/1613.png"),
        "answers": [
            "A. prze\u0142\u0105cznika",
            "B. rutera",
            "C. punktu dost\u0119powego",
            "D. koncentratora"
        ],
        "goodAnswer": "B. rutera"
    },
    {
        "id": 199,
        "question": "Kt\u00f3ry z protoko\u0142\u00f3w jest szyfrowanym protoko\u0142em terminalowym?",
        "imageLoc": "",
        "answers": [
            "A. TFTP",
            "B. POP3",
            "C. telnet",
            "D. SSH"
        ],
        "goodAnswer": "D. SSH"
    },
    {
        "id": 200,
        "question": "W systemie Linux dla uzyskania uprawnie\u0144 administratora nale\u017cy w oknie terminala u\u017cy\u0107 polecenia",
        "imageLoc": "",
        "answers": [
            "A. df",
            "B. su root",
            "C. $HOME",
            "D. uname -s"
        ],
        "goodAnswer": "B. su root"
    },
    {
        "id": 201,
        "question": "W systemie Linux polecenie ps spowoduje wy\u015bwietlenie",
        "imageLoc": "",
        "answers": [
            "A. listy aktualnych proces\u00f3w zalogowanego u\u017cytkownika",
            "B. listy aktualnych proces\u00f3w drukowania",
            "C. konfiguracji Proxy Server",
            "D. konfiguracji serwera drukarek Print Server"
        ],
        "goodAnswer": "A. listy aktualnych proces\u00f3w zalogowanego u\u017cytkownika"
    },
    {
        "id": 202,
        "question": "Aby najlepiej zabezpieczy\u0107 zgromadzone dane przed odczytem na wypadek kradzie\u017cy komputera, nale\u017cy",
        "imageLoc": "",
        "answers": [
            "A. wykona\u0107 punkt przywracania systemu",
            "B. zastosowa\u0107 szyfrowanie partycji",
            "C. zastosowa\u0107 atrybut ukryty dla wszystkich wa\u017cnych plik\u00f3w",
            "D. zabezpieczy\u0107 konta has\u0142em"
        ],
        "goodAnswer": "B. zastosowa\u0107 szyfrowanie partycji"
    },
    {
        "id": 203,
        "question": "Atak komputerowy przeprowadzony r\u00f3wnocze\u015bnie z wielu komputer\u00f3w w sieci, polegaj\u0105cy na uniemo\u017cliwieniu dzia\u0142ania systemu komputerowego poprzez zaj\u0119cie wszystkich wolnych zasob\u00f3w, nosi nazw\u0119",
        "imageLoc": "",
        "answers": [
            "A. DDoS",
            "B. Brute force",
            "C. Atak s\u0142ownikowy",
            "D. Spoofing"
        ],
        "goodAnswer": "A. DDoS"
    },
    {
        "id": 204,
        "question": "Na podstawie przedstawionego cennika oblicz, jaki b\u0119dzie koszt brutto jednego dwumodu\u0142owego podw\u00f3jnego natynkowego gniazda abonenckiego.",
        "imageLoc": require("../assets/img/128.png"),
        "answers": [
            "A. 28,00 z\u0142",
            "B. 32,00 z\u0142",
            "C. 25,00 z\u0142",
            "D. 18,00 z\u0142"
        ],
        "goodAnswer": "A. 28,00 z\u0142"
    },
    {
        "id": 205,
        "question": "Monitor wydajno\u015bci i niezawodno\u015bci w systemie Windows jest uruchamiany za pomoc\u0105 przystawki",
        "imageLoc": "",
        "answers": [
            "A. diskmgmt.msc",
            "B. perfmon.msc",
            "C. fsmgmt.msc",
            "D. taskschd.msc"
        ],
        "goodAnswer": "B. perfmon.msc"
    },
    {
        "id": 206,
        "question": "W systemie plik\u00f3w NTFS zmian\u0119 nazwy pliku umo\u017cliwia uprawnienie",
        "imageLoc": "",
        "answers": [
            "A. odczytu",
            "B. odczytu i wykonania",
            "C. modyfikacji",
            "D. zapisu"
        ],
        "goodAnswer": "C. modyfikacji"
    },
    {
        "id": 207,
        "question": "W systemie Linux do zarz\u0105dzania tablicami partycji mo\u017cna wykorzysta\u0107 polecenie",
        "imageLoc": "",
        "answers": [
            "A. lspci",
            "B. iostat",
            "C. free",
            "D. fdisk"
        ],
        "goodAnswer": "D. fdisk"
    },
    {
        "id": 208,
        "question": "Blok funkcjonalny RAMDAC na schemacie blokowym przedstawia",
        "imageLoc": require("../assets/img/55.png"),
        "answers": [
            "A. pami\u0119\u0107 ROM karty graficznej",
            "B. przetwornik cyfrowo-analogowy z pami\u0119ci\u0105 RAM",
            "C. przetwornik analogowo-cyfrowy z pami\u0119ci\u0105 RAM",
            "D. pami\u0119\u0107 RAM karty graficznej"
        ],
        "goodAnswer": "B. przetwornik cyfrowo-analogowy z pami\u0119ci\u0105 RAM"
    },
    {
        "id": 209,
        "question": "Kt\u00f3r\u0105 z opcji menu prze\u0142\u0105cznika nale\u017cy wybra\u0107, by przywr\u00f3ci\u0107 mu ustawienia fabryczne?",
        "imageLoc": require("../assets/img/1429.png"),
        "answers": [
            "A. Save Configuration",
            "B. Firmware Upgrade",
            "C. Reboot Device",
            "D. Reset System"
        ],
        "goodAnswer": "D. Reset System"
    },
    {
        "id": 210,
        "question": "Przedstawiony stan ekranu terminala uzyskano w wyniku testu przeprowadzonego w systemie Windows. Pracownik serwisu uzyska\u0142 w ten spos\u00f3b informacj\u0119 o:",
        "imageLoc": require("../assets/img/983.png"),
        "answers": [
            "A. poprawno\u015bci konfiguracji protoko\u0142u TCP/IP",
            "B. sprawno\u015bci po\u0142\u0105czenia przy u\u017cyciu protoko\u0142u IPX/SPX",
            "C. mo\u017cliwo\u015bci diagnozowania infrastruktury systemu DNS",
            "D. \u015bcie\u017cce do lokalizacji docelowej"
        ],
        "goodAnswer": "D. \u015bcie\u017cce do lokalizacji docelowej"
    },
    {
        "id": 211,
        "question": "GRUB, LILO, NTLDR to:",
        "imageLoc": "",
        "answers": [
            "A. programy rozruchowe",
            "B. aplikacje do aktualizacji BIOS-u",
            "C. wersje g\u0142\u00f3wnego interfejsu sieciowego",
            "D. firmware dla dysku sieciowego"
        ],
        "goodAnswer": "A. programy rozruchowe"
    },
    {
        "id": 212,
        "question": "Liczba BACA zapisana w systemie heksadecymalnym odpowiada liczbie",
        "imageLoc": "",
        "answers": [
            "A. 47821 (10)",
            "B. 135316 (8)",
            "C. 1100101010111010 (2)",
            "D. 1011101011001010 (2)"
        ],
        "goodAnswer": "D. 1011101011001010 (2)"
    },
    {
        "id": 213,
        "question": "Adresem rozg\u0142oszeniowym w podsieci o adresie IPv4 192.168.0.0/20 jest",
        "imageLoc": "",
        "answers": [
            "A. 192.168.255.254",
            "B. 192.168.15.255",
            "C. 192.168.15.254",
            "D. 192.168.255.255"
        ],
        "goodAnswer": "B. 192.168.15.255"
    },
    {
        "id": 214,
        "question": "Kt\u00f3ry rodzaj medium transmisyjnego jest okre\u015blany jako standard 100BaseTX i jaka jest uzyskiwana w nim maksymalna pr\u0119dko\u015b\u0107 transmisji danych?",
        "imageLoc": "",
        "answers": [
            "A. Kabel UTP kategorii 5e o pr\u0119dko\u015bci transmisji do 1000 Mb/s",
            "B. Kabel UTP kategorii 5 o pr\u0119dko\u015bci transmisji do 100 Mb/s",
            "C. \u015awiat\u0142ow\u00f3d jednomodowy o pr\u0119dko\u015bci transmisji do 1000 Mb/s",
            "D. \u015awiat\u0142ow\u00f3d wielomodowy o pr\u0119dko\u015bci transmisji do 100 Mb/s"
        ],
        "goodAnswer": "B. Kabel UTP kategorii 5 o pr\u0119dko\u015bci transmisji do 100 Mb/s"
    },
    {
        "id": 215,
        "question": "W\u0142\u0105czenie podczas konfiguracji skanera opcji OCR daje mo\u017cliwo\u015b\u0107",
        "imageLoc": "",
        "answers": [
            "A. korzystania z wi\u0119kszej przestrzeni barw",
            "B. zwi\u0119kszenia jego rozdzielczo\u015bci optycznej",
            "C. modyfikowania g\u0142\u0119bi ostro\u015bci",
            "D. zamiany zeskanowanego obrazu na edytowalny dokument tekstowy"
        ],
        "goodAnswer": "D. zamiany zeskanowanego obrazu na edytowalny dokument tekstowy"
    },
    {
        "id": 216,
        "question": "Aby sprawdzi\u0107 adres fizyczny karty sieciowej, w wierszu polece\u0144 systemu operacyjnego Microsoft Windows nale\u017cy wpisa\u0107 polecenie",
        "imageLoc": "",
        "answers": [
            "A. get mac",
            "B. ifconfig -a",
            "C. ipconfig /all",
            "D. show mac"
        ],
        "goodAnswer": "C. ipconfig /all"
    },
    {
        "id": 217,
        "question": "Mened\u017cer us\u0142ug IIS (Internet Information Services) systemu Windows jest interfejsem graficznym s\u0142u\u017c\u0105cym do konfigurowania serwera",
        "imageLoc": "",
        "answers": [
            "A. DNS",
            "B. wydruku",
            "C. terminali",
            "D. WWW"
        ],
        "goodAnswer": "D. WWW"
    },
    {
        "id": 218,
        "question": "Na rysunku przedstawiono okno konfiguracyjne rutera. Ustawione parametry \u015bwiadcz\u0105 o tym, \u017ce",
        "imageLoc": require("../assets/img/1834.png"),
        "answers": [
            "A. komputerowi o adresie MAC 44-8A-5B-5A-56-D0 us\u0142uga DHCP rutera przydzieli adres IP 192.168.17.30",
            "B. komputer o adresie MAC 44-8A-5B-5A-56-D0 i adresie IP 192.168.17.30 zosta\u0142 wykluczony z sieci",
            "C. komputer o adresie MAC 44-8A-5B-5A-56-D0 i adresie IP 192.168.17.30 nie b\u0119dzie m\u00f3g\u0142 po\u0142\u0105czy\u0107 si\u0119 z urz\u0105dzeniami tej sieci",
            "D. na komputerze o adresie MAC 44-8A-5B-5A-56-D0 ustawiono adres IP 192.168.17.30 za pomoc\u0105 Panelu Sterowania"
        ],
        "goodAnswer": "A. komputerowi o adresie MAC 44-8A-5B-5A-56-D0 us\u0142uga DHCP rutera przydzieli adres IP 192.168.17.30"
    },
    {
        "id": 219,
        "question": "G\u0142\u00f3wnym zadaniem prze\u0142\u0105cznika /renew komendy ipconfig w systemie rodziny Windows jest",
        "imageLoc": "",
        "answers": [
            "A. wy\u015bwietlanie informacji o adresie IP.",
            "B. \u017c\u0105danie odpowiedzi z podanego IP w celu zdiagnozowania po\u0142\u0105czenia sieciowego.",
            "C. odnowienie dynamicznego adresu IP przez komunikacj\u0119 z serwerem DHCP.",
            "D. wy\u015bwietlanie informacji o adresie MAC karty sieciowej."
        ],
        "goodAnswer": "C. odnowienie dynamicznego adresu IP przez komunikacj\u0119 z serwerem DHCP."
    },
    {
        "id": 220,
        "question": "Dystrybucje systemu Linux Ubuntu rozpowszechniane s\u0105 na licencjach",
        "imageLoc": "",
        "answers": [
            "A. GNU GPL",
            "B. Freeware",
            "C. Public Domain",
            "D. MOLP"
        ],
        "goodAnswer": "A. GNU GPL"
    },
    {
        "id": 221,
        "question": "Rysunek przedstawia schemat fizycznej topologii b\u0119d\u0105cej po\u0142\u0105czeniem topologii",
        "imageLoc": require("../assets/img/1683.png"),
        "answers": [
            "A. siatki i gwiazdy",
            "B. pier\u015bcienia i gwiazdy",
            "C. magistrali i gwiazdy",
            "D. siatki i magistrali"
        ],
        "goodAnswer": "C. magistrali i gwiazdy"
    },
    {
        "id": 222,
        "question": "Do monitorowania transmisji danych w sieci komputerowej nale\u017cy zastosowa\u0107 program typu",
        "imageLoc": "",
        "answers": [
            "A. sniffer",
            "B. firmware",
            "C. kompilator",
            "D. debugger"
        ],
        "goodAnswer": "A. sniffer"
    },
    {
        "id": 223,
        "question": "Zgodnie ze specyfikacj\u0105 JEDEC typowe napi\u0119cie zasilania modu\u0142\u00f3w niskonapi\u0119ciowych pami\u0119ci RAM DDR3L wynosi",
        "imageLoc": "",
        "answers": [
            "A. 1.20 V",
            "B. 1.35 V",
            "C. 1.65 V",
            "D. 1.50 V"
        ],
        "goodAnswer": "B. 1.35 V"
    },
    {
        "id": 224,
        "question": "Jaki b\u0119dzie ca\u0142kowity koszt robocizny monta\u017cu 20 modu\u0142\u00f3w RJ45 ze z\u0142\u0105czem kraw\u0119dziowym narz\u0119dziowym na przewodach 4-parowych, je\u017celi stawka godzinowa montera wynosi 15 z\u0142/h, a wed\u0142ug tabeli KNR czas monta\u017cu jednego modu\u0142u to 0,10 r-g?",
        "imageLoc": "",
        "answers": [
            "A. 7,50 z\u0142",
            "B. 15,00 z\u0142",
            "C. 50,00 z\u0142",
            "D. 30,00 z\u0142"
        ],
        "goodAnswer": "D. 30,00 z\u0142"
    },
    {
        "id": 225,
        "question": "Odpowiednikiem adresu p\u0119tli zwrotnej jest w IPv6 adres",
        "imageLoc": "",
        "answers": [
            "A. ::1/128",
            "B. 0:0/32",
            "C. ::fff/64",
            "D. :1:1:1/96"
        ],
        "goodAnswer": "A. ::1/128"
    },
    {
        "id": 226,
        "question": "Adres IP (ang. Internet Protocol Address) jest",
        "imageLoc": "",
        "answers": [
            "A. adresem logicznym komputera",
            "B. unikatow\u0105 nazw\u0105 symboliczn\u0105 urz\u0105dzenia",
            "C. unikatowym numerem fabrycznym urz\u0105dzenia",
            "D. adresem fizycznym komputera"
        ],
        "goodAnswer": "A. adresem logicznym komputera"
    },
    {
        "id": 227,
        "question": "Aby odczyta\u0107 adres serwera DNS w konfiguracji karty sieciowej systemu z rodziny Windows nale\u017cy wykona\u0107 polecenie",
        "imageLoc": "",
        "answers": [
            "A. ipconfig",
            "B. arp -a",
            "C. ipconfig /all",
            "D. ping"
        ],
        "goodAnswer": "C. ipconfig /all"
    },
    {
        "id": 228,
        "question": "Kt\u00f3re polecenie nale\u017cy wykona\u0107 w celu zamontowania pierwszej partycji logicznej dysku primary slave w systemie Linux?",
        "imageLoc": "",
        "answers": [
            "A. mount /dev/hda2 /mnt/hdd",
            "B. mount /dev/hda4 /mnt/hdd",
            "C. mount /dev/hdb5 /mnt/hdd",
            "D. mount /dev/hdb3 /mnt/hdd"
        ],
        "goodAnswer": "C. mount /dev/hdb5 /mnt/hdd"
    },
    {
        "id": 229,
        "question": "Program typu recovery, w warunkach domowych, pozwala na odzyskanie danych z dysku twardego w przypadku",
        "imageLoc": "",
        "answers": [
            "A. zalania dysku.",
            "B. uszkodzenia silnika dysku.",
            "C. przypadkowego usuni\u0119cia danych.",
            "D. uszkodzenia elektroniki dysku."
        ],
        "goodAnswer": "C. przypadkowego usuni\u0119cia danych."
    },
    {
        "id": 230,
        "question": "Wymiana ta\u015bmy barwi\u0105cej zwi\u0105zana jest z u\u017cytkowaniem drukarki",
        "imageLoc": "",
        "answers": [
            "A. ig\u0142owej",
            "B. laserowej",
            "C. atramentowej",
            "D. termicznej"
        ],
        "goodAnswer": "A. ig\u0142owej"
    },
    {
        "id": 231,
        "question": "Interfejs SLI (ang. Scalable Link Interface) s\u0142u\u017cy do \u0142\u0105czenia",
        "imageLoc": "",
        "answers": [
            "A. dw\u00f3ch kart graficznych",
            "B. czytnika kart z p\u0142yt\u0105 g\u0142\u00f3wn\u0105",
            "C. nap\u0119du Blu-ray z kart\u0105 d\u017awi\u0119kow\u0105",
            "D. karty graficznej z odbiornikiem TV"
        ],
        "goodAnswer": "A. dw\u00f3ch kart graficznych"
    },
    {
        "id": 232,
        "question": "Wska\u017c prawdziwe przyporz\u0105dkowanie us\u0142ugi warstwy aplikacji z domy\u015blnym numerem portu, na kt\u00f3rym ona pracuje.",
        "imageLoc": "",
        "answers": [
            "A. SMTP - 80",
            "B. DNS - 53",
            "C. DHCP - 161",
            "D. IMAP - 8080"
        ],
        "goodAnswer": "B. DNS - 53"
    },
    {
        "id": 233,
        "question": "Z\u0142ocenie styk\u00f3w z\u0142\u0105cz HDMI ma na celu",
        "imageLoc": "",
        "answers": [
            "A. zwi\u0119kszenie przepustowo\u015bci powy\u017cej warto\u015bci okre\u015blonych standardem",
            "B. stworzenie produktu o charakterze ekskluzywnym, aby uzyska\u0107 wi\u0119ksze wp\u0142ywy ze sprzeda\u017cy",
            "C. umo\u017cliwienie przesy\u0142u obrazu w jako\u015bci 4K",
            "D. popraw\u0119 przewodno\u015bci oraz \u017cywotno\u015bci z\u0142\u0105cza"
        ],
        "goodAnswer": "B. stworzenie produktu o charakterze ekskluzywnym, aby uzyska\u0107 wi\u0119ksze wp\u0142ywy ze sprzeda\u017cy"
    },
    {
        "id": 234,
        "question": "Przy pomocy ta\u015bmy 60-pinowej przedstawionej na rysunku pod\u0142\u0105cza si\u0119 do p\u0142yty g\u0142\u00f3wnej komputera",
        "imageLoc": require("../assets/img/513.png"),
        "answers": [
            "A. nap\u0119dy ATAPI",
            "B. wszystkie powy\u017csze urz\u0105dzenia",
            "C. tylko dyski SCSI",
            "D. tylko dyski EIDE"
        ],
        "goodAnswer": "C. tylko dyski SCSI"
    },
    {
        "id": 235,
        "question": "Zastosowanie polecenia net localgroup w systemie Windows spowoduje",
        "imageLoc": "",
        "answers": [
            "A. utworzenie dowolnej grupy u\u017cytkownik\u00f3w",
            "B. wy\u015bwietlanie zdefiniowanych w systemie lokalnych grup u\u017cytkownik\u00f3w",
            "C. skompresowanie wszystkich plik\u00f3w",
            "D. defragmentacj\u0119 plik\u00f3w"
        ],
        "goodAnswer": "B. wy\u015bwietlanie zdefiniowanych w systemie lokalnych grup u\u017cytkownik\u00f3w"
    },
    {
        "id": 236,
        "question": "Poleceniem systemu Linux s\u0142u\u017c\u0105cym do wy\u015bwietlenia informacji, zawieraj\u0105cych aktualn\u0105 godzin\u0119, czas dzia\u0142ania systemu oraz liczb\u0119 zalogowanych u\u017cytkownik\u00f3w, jest",
        "imageLoc": "",
        "answers": [
            "A. echo",
            "B. uptime",
            "C. chmod",
            "D. history"
        ],
        "goodAnswer": "B. uptime"
    },
    {
        "id": 237,
        "question": "Jaka jest d\u0142ugo\u015b\u0107 maski sieci w adresach klasy B?",
        "imageLoc": "",
        "answers": [
            "A. 24 bity.",
            "B. 8 bit\u00f3w.",
            "C. 12 bit\u00f3w.",
            "D. 16 bit\u00f3w."
        ],
        "goodAnswer": "D. 16 bit\u00f3w."
    },
    {
        "id": 238,
        "question": "Zastosowanie na komputerze z systemem Windows kolejno polece\u0144 ipconfig /release i ipconfig /renew pozwoli sprawdzi\u0107, czy w sieci prawid\u0142owo dzia\u0142a us\u0142uga",
        "imageLoc": "",
        "answers": [
            "A. rutingu",
            "B. Active Directory",
            "C. serwera DHCP",
            "D. serwera DNS"
        ],
        "goodAnswer": "C. serwera DHCP"
    },
    {
        "id": 239,
        "question": "Aby ikony widoczne na przedstawionym obrazie pojawi\u0142y si\u0119 na Pasku zada\u0144, nale\u017cy w systemie Windows skonfigurowa\u0107",
        "imageLoc": require("../assets/img/1866.png"),
        "answers": [
            "A. obszar powiadomie\u0144",
            "B. obszar Action Center",
            "C. funkcj\u0119 Snap i Peek",
            "D. funkcj\u0119 Poka\u017c pulpit"
        ],
        "goodAnswer": "A. obszar powiadomie\u0144"
    },
    {
        "id": 240,
        "question": "Standard transmisji Gigabit Ethernet opisuje norma",
        "imageLoc": "",
        "answers": [
            "A. IEEE 802.3x",
            "B. IEEE 802.3ab",
            "C. IEEE 802.3i",
            "D. IEEE 802.3u"
        ],
        "goodAnswer": "B. IEEE 802.3ab"
    },
    {
        "id": 241,
        "question": "Kt\u00f3ry ze standard\u00f3w Gigabit Ethernet umo\u017cliwia budow\u0119 segment\u00f3w sieci o d\u0142ugo\u015bci 550 m/5000 m z pr\u0119dko\u015bci\u0105 transmisji 1 Gb/s?",
        "imageLoc": "",
        "answers": [
            "A. 1000Base-SX",
            "B. 1000Base-LX",
            "C. 1000Base-FX",
            "D. 1000Base-T"
        ],
        "goodAnswer": "B. 1000Base-LX"
    },
    {
        "id": 242,
        "question": "W systemie Windows 7 narz\u0119dzie trybu polece\u0144 Cipher.exe s\u0142u\u017cy do",
        "imageLoc": "",
        "answers": [
            "A. prze\u0142\u0105czania monitora w tryb oczekiwania",
            "B. podgl\u0105du plik\u00f3w tekstowych",
            "C. zarz\u0105dzania rozruchem systemu",
            "D. szyfrowania i odszyfrowywania plik\u00f3w i katalog\u00f3w"
        ],
        "goodAnswer": "D. szyfrowania i odszyfrowywania plik\u00f3w i katalog\u00f3w"
    },
    {
        "id": 243,
        "question": "W strategii archiwizacji danych zwanej Dziadek \u2013 Ojciec \u2013 Syn na poziomie Dziadek wykonuje si\u0119 kopi\u0119 danych na koniec",
        "imageLoc": "",
        "answers": [
            "A. tygodnia",
            "B. roku",
            "C. miesi\u0105ca",
            "D. dnia"
        ],
        "goodAnswer": "C. miesi\u0105ca"
    },
    {
        "id": 244,
        "question": "Przed modyfikacj\u0105 rejestru Windows, dla zapewnienia bezpiecze\u0144stwa pracy, w pierwszej kolejno\u015bci nale\u017cy",
        "imageLoc": "",
        "answers": [
            "A. wykona\u0107 kopi\u0119 zapasow\u0105 wa\u017cnych dokument\u00f3w",
            "B. wykona\u0107 kopi\u0119 zapasow\u0105 rejestru",
            "C. uruchomi\u0107 komputer w trybie awaryjnym",
            "D. sprawdzi\u0107 czy na komputerze nie ma wirus\u00f3w"
        ],
        "goodAnswer": "B. wykona\u0107 kopi\u0119 zapasow\u0105 rejestru"
    },
    {
        "id": 245,
        "question": "Maksymalna d\u0142ugo\u015b\u0107 kabla miedzianego UTP kategorii 5e \u0142\u0105cz\u0105cego bezpo\u015brednio dwa urz\u0105dzenia sieciowe, zgodnie z standardem Fast Ethernet 100Base-TX, wynosi",
        "imageLoc": "",
        "answers": [
            "A. 1000 m",
            "B. 300 m",
            "C. 150 m",
            "D. 100 m"
        ],
        "goodAnswer": "D. 100 m"
    },
    {
        "id": 246,
        "question": "Narz\u0119dziem umo\u017cliwiaj\u0105cym zarz\u0105dzanie menad\u017cerem rozruchu system\u00f3w Windows pocz\u0105wszy od Windows Vista jest",
        "imageLoc": "",
        "answers": [
            "A. GRUB",
            "B. AFFS",
            "C. BCDEDIT",
            "D. LILO"
        ],
        "goodAnswer": "C. BCDEDIT"
    },
    {
        "id": 247,
        "question": "Kt\u00f3ry protok\u00f3\u0142 opracowany przez IBM jest stosowany do udost\u0119pniania plik\u00f3w w trybie klient-serwer oraz do wsp\u00f3\u0142dzielenia zasob\u00f3w z sieciami Microsoft przez systemy operacyjne LINUX, UNIX?",
        "imageLoc": "",
        "answers": [
            "A. SMB (Server Message Block)",
            "B. HTTP (Hypertext Transfer Protocol)",
            "C. POP (Post Office Protocol)",
            "D. SMTP (Simple Mail Transfer Protocol)"
        ],
        "goodAnswer": "A. SMB (Server Message Block)"
    },
    {
        "id": 248,
        "question": "Atak typu hijacking na serwer sieciowy charakteryzuje si\u0119",
        "imageLoc": "",
        "answers": [
            "A. przeci\u0105\u017ceniem aplikacji udost\u0119pniaj\u0105cej okre\u015blone dane",
            "B. \u0142amaniem zabezpiecze\u0144 przed niedozwolonym u\u017cytkowaniem program\u00f3w",
            "C. przej\u0119ciem kontroli nad po\u0142\u0105czeniem mi\u0119dzy komunikuj\u0105cymi si\u0119 komputerami",
            "D. zbieraniem informacji na temat atakowanej sieci i szukaniem luk w sieci"
        ],
        "goodAnswer": "C. przej\u0119ciem kontroli nad po\u0142\u0105czeniem mi\u0119dzy komunikuj\u0105cymi si\u0119 komputerami"
    },
    {
        "id": 249,
        "question": "B\u0119ben \u015bwiat\u0142oczu\u0142y jest niezb\u0119dnym elementem dzia\u0142ania drukarki",
        "imageLoc": "",
        "answers": [
            "A. Sublimacyjnej",
            "B. Laserowej",
            "C. Ig\u0142owej",
            "D. Atramentowej"
        ],
        "goodAnswer": "B. Laserowej"
    },
    {
        "id": 250,
        "question": "Kt\u00f3ry z adres\u00f3w IP nale\u017cy do klasy A?",
        "imageLoc": "",
        "answers": [
            "A. 192.0.2.1",
            "B. 169.255.2.1",
            "C. 134.16.0.1",
            "D. 119.0.0.1"
        ],
        "goodAnswer": "D. 119.0.0.1"
    },
    {
        "id": 251,
        "question": "Aby by\u0142a mo\u017cliwa komunikacja mi\u0119dzy sieciami VLAN, stosuje si\u0119",
        "imageLoc": "",
        "answers": [
            "A. Modem",
            "B. Koncentrator",
            "C. Punkt dost\u0119powy",
            "D. Router"
        ],
        "goodAnswer": "D. Router"
    },
    {
        "id": 252,
        "question": "Uruchamianie programu w dowolnym celu, analizowanie dzia\u0142ania programu oraz jego modyfikowanie wraz z mo\u017cliwo\u015bci\u0105 publicznego rozpowszechniania tych zmian jest cech\u0105 licencji typu",
        "imageLoc": "",
        "answers": [
            "A. FREEWARE",
            "B. GNU GPL",
            "C. MOLP",
            "D. ADWARE"
        ],
        "goodAnswer": "B. GNU GPL"
    },
    {
        "id": 253,
        "question": "Programem s\u0142u\u017c\u0105cym do diagnozowania po\u0142\u0105cze\u0144 mi\u0119dzy hostami w systemie Windows jest",
        "imageLoc": "",
        "answers": [
            "A. route",
            "B. ping",
            "C. traceroute",
            "D. ipconfig"
        ],
        "goodAnswer": "B. ping"
    },
    {
        "id": 254,
        "question": "Pami\u0119\u0107 podr\u0119czna okre\u015blana jest nazw\u0105",
        "imageLoc": "",
        "answers": [
            "A. Cache",
            "B. VLB",
            "C. Chipset",
            "D. EIDE"
        ],
        "goodAnswer": "A. Cache"
    },
    {
        "id": 255,
        "question": "Program, kt\u00f3ry dostarcza informacji o wydajno\u015bci zestawu komputerowego to",
        "imageLoc": "",
        "answers": [
            "A. benchmark",
            "B. sniffer",
            "C. kompilator",
            "D. debugger"
        ],
        "goodAnswer": "A. benchmark"
    },
    {
        "id": 256,
        "question": "Obraz przedstawia oznaczenie sygnalizacji \u015bwietlnej w dokumentacji technicznej laptopa. Wska\u017c numer oznaczaj\u0105cy kontrolk\u0119 zapalaj\u0105c\u0105 si\u0119 podczas \u0142adowania baterii.",
        "imageLoc": require("../assets/img/2070.png"),
        "answers": [
            "A. 2",
            "B. 3",
            "C. 5",
            "D. 4"
        ],
        "goodAnswer": "D. 4"
    },
    {
        "id": 257,
        "question": "Jest to najnowsza wersja klienta wieloplatformowego, cenionego przez u\u017cytkownik\u00f3w na ca\u0142ym \u015bwiecie, serwera wirtualnej sieci prywatnej, pozwalaj\u0105cego na zestawienie pomi\u0119dzy hostem a komputerem lokalnym po\u0142\u0105czenia, obs\u0142uguj\u0105cego uwierzytelnianie z u\u017cyciem kluczy, jak r\u00f3wnie\u017c certyfikat\u00f3w, nazwy u\u017cytkownika i has\u0142a, a tak\u017ce, w wersji dla Windows, dodatkowych kart. Kt\u00f3ry z program\u00f3w zosta\u0142 opisany przed chwil\u0105?",
        "imageLoc": "",
        "answers": [
            "A. Ethereal",
            "B. OpenVPN",
            "C. Putty",
            "D. TinghtVNC"
        ],
        "goodAnswer": "B. OpenVPN"
    },
    {
        "id": 258,
        "question": "Liczba 100110011 zapisana w kodzie \u00f3semkowym ma posta\u0107",
        "imageLoc": "",
        "answers": [
            "A. 383",
            "B. 333",
            "C. 463",
            "D. 346"
        ],
        "goodAnswer": "C. 463"
    },
    {
        "id": 259,
        "question": "Transmisja interfejsem r\u00f3wnoleg\u0142ym synchronicznym cechuje si\u0119 tym, \u017ce",
        "imageLoc": "",
        "answers": [
            "A. w wyznaczonych okresach czasu okre\u015blanych sygna\u0142em zegarowym CLK dane przesy\u0142ane s\u0105 jednocze\u015bnie kilkoma przewodami",
            "B. pocz\u0105tek i koniec przesy\u0142anych bit po bicie danych jest oznaczony bitem startu i stopu",
            "C. dane s\u0105 przesy\u0142ane jednocze\u015bnie ca\u0142\u0105 szeroko\u015bci\u0105 magistrali, a pocz\u0105tek i koniec transmisji jest oznaczony bitem startu i stopu",
            "D. dane s\u0105 przesy\u0142ane bit po bicie w wyznaczonych okresach czasu okre\u015blanych sygna\u0142em zegarowym CLK"
        ],
        "goodAnswer": "A. w wyznaczonych okresach czasu okre\u015blanych sygna\u0142em zegarowym CLK dane przesy\u0142ane s\u0105 jednocze\u015bnie kilkoma przewodami"
    },
    {
        "id": 260,
        "question": "Postcardware to rodzaj",
        "imageLoc": "",
        "answers": [
            "A. wirusa komputerowego",
            "B. us\u0142ugi poczty elektronicznej",
            "C. licencji oprogramowania",
            "D. karty sieciowej"
        ],
        "goodAnswer": "C. licencji oprogramowania"
    },
    {
        "id": 261,
        "question": "NIEW\u0141A\u015aCIWE pod\u0142\u0105czenie ta\u015bmy sygna\u0142owej do nap\u0119du dyskietek spowoduje",
        "imageLoc": "",
        "answers": [
            "A. trwa\u0142e uszkodzenie nap\u0119du",
            "B. b\u0142\u0119dy w zapisie na dyskietce",
            "C. problemy z uruchomieniem komputera.",
            "D. niemo\u017cno\u015b\u0107 pracy z nap\u0119dem"
        ],
        "goodAnswer": "D. niemo\u017cno\u015b\u0107 pracy z nap\u0119dem"
    },
    {
        "id": 262,
        "question": "Protoko\u0142em funkcjonuj\u0105cym w warstwie aplikacji modelu TCP/IP jest",
        "imageLoc": "",
        "answers": [
            "A. UDP",
            "B. SPX",
            "C. FTP",
            "D. ARP"
        ],
        "goodAnswer": "C. FTP"
    },
    {
        "id": 263,
        "question": "Jak nale\u017cy wpisa\u0107 w formule arkusza kalkulacyjnego adres kom\u00f3rki B3, \u017ceby przy kopiowaniu tej formu\u0142y w dowolne miejsce arkusza adres kom\u00f3rki B3 pozosta\u0142 niezmieniony?",
        "imageLoc": "",
        "answers": [
            "A. B3",
            "B. B$3",
            "C. $B$3",
            "D. $B3"
        ],
        "goodAnswer": "C. $B$3"
    },
    {
        "id": 264,
        "question": "Wska\u017c niepoprawny podzia\u0142 dysk\u00f3w MBR na partycje",
        "imageLoc": "",
        "answers": [
            "A. 1 partycja podstawowa i 1 rozszerzona",
            "B. 3 partycje podstawowe i 1 rozszerzona",
            "C. 2 partycje podstawowe i 1 rozszerzona",
            "D. 1 partycja podstawowa i 2 rozszerzone"
        ],
        "goodAnswer": "D. 1 partycja podstawowa i 2 rozszerzone"
    },
    {
        "id": 265,
        "question": "Ile warstw definiuje model ISO/OSI",
        "imageLoc": "",
        "answers": [
            "A. 7",
            "B. 3",
            "C. 5",
            "D. 9"
        ],
        "goodAnswer": "A. 7"
    },
    {
        "id": 266,
        "question": "Analizuj\u0105c rysunek zauwa\u017camy, \u017ce limit zadeklarowanej pami\u0119ci wynosi 620976 KB. Wida\u0107 jednocze\u015bnie, \u017ce zainstalowanej pami\u0119ci fizycznej w analizowanym systemie jest mniej ni\u017c pami\u0119ci zadeklarowanej. Jaki typ pami\u0119ci decyduje w tym wypadku o zwi\u0119kszeniu limitu pami\u0119ci zadeklarowanej ponad wielko\u015b\u0107 zainstalowanej pami\u0119ci fizycznej?",
        "imageLoc": require("../assets/img/17.png"),
        "answers": [
            "A. Pami\u0119\u0107 RAM",
            "B. Pami\u0119\u0107 pliku stron",
            "C. Pami\u0119\u0107 cache procesora",
            "D. Pami\u0119\u0107 j\u0105dra"
        ],
        "goodAnswer": "B. Pami\u0119\u0107 pliku stron"
    },
    {
        "id": 267,
        "question": "Na wydrukach drukarki laserowej mo\u017cna zaobserwowa\u0107 pod\u0142u\u017cne pasma oraz powtarzaj\u0105ce si\u0119 artefakty. Mo\u017cliw\u0105 przyczyn\u0105 z\u0142ej jako\u015bci wydruku jest usterka",
        "imageLoc": "",
        "answers": [
            "A. ta\u015bmy barwi\u0105cej.",
            "B. g\u0142owicy drukuj\u0105cej.",
            "C. uk\u0142adu zliczaj\u0105cego.",
            "D. b\u0119bna \u015bwiat\u0142oczu\u0142ego."
        ],
        "goodAnswer": "D. b\u0119bna \u015bwiat\u0142oczu\u0142ego."
    },
    {
        "id": 268,
        "question": "Do sporz\u0105dzenia projektu sieci komputerowej dla budynku szko\u0142y najlepiej wykorzysta\u0107 edytor grafiki wektorowej, kt\u00f3rym jest program",
        "imageLoc": "",
        "answers": [
            "A. MS Excel",
            "B. AutoCad",
            "C. Adobe Photoshop",
            "D. MS Publisher"
        ],
        "goodAnswer": "B. AutoCad"
    },
    {
        "id": 269,
        "question": "Do uruchomienia edytora rejestru w systemie Windows nale\u017cy u\u017cy\u0107 narz\u0119dzia",
        "imageLoc": "",
        "answers": [
            "A. ipconfig",
            "B. regedit",
            "C. cmd",
            "D. msconfig"
        ],
        "goodAnswer": "B. regedit"
    },
    {
        "id": 270,
        "question": "Kt\u00f3r\u0105 z opcji menu prze\u0142\u0105cznika nale\u017cy wybra\u0107, by przywr\u00f3ci\u0107 mu ustawienia fabryczne?",
        "imageLoc": require("../assets/img/800.png"),
        "answers": [
            "A. Save Configuration",
            "B. Reboot Device",
            "C. Reset System",
            "D. Firmware Upgrade"
        ],
        "goodAnswer": "C. Reset System"
    },
    {
        "id": 271,
        "question": "NIEW\u0141A\u015aCIWE pod\u0142\u0105czenie ta\u015bmy sygna\u0142owej do nap\u0119du dyskietek spowoduje",
        "imageLoc": "",
        "answers": [
            "A. niemo\u017cno\u015b\u0107 pracy z nap\u0119dem",
            "B. trwa\u0142e uszkodzenie nap\u0119du",
            "C. b\u0142\u0119dy w zapisie na dyskietce",
            "D. problemy z uruchomieniem komputera."
        ],
        "goodAnswer": "A. niemo\u017cno\u015b\u0107 pracy z nap\u0119dem"
    },
    {
        "id": 272,
        "question": "U\u017cytkownik Go\u015b\u0107 nale\u017cy do grupy Go\u015bcie. Grupa Go\u015bcie nale\u017cy do grupy Wszyscy. Wska\u017c uprawnienia udzia\u0142u u\u017cytkownika Go\u015b\u0107 do folderu test1:",
        "imageLoc": require("../assets/img/1235.png"),
        "answers": [
            "A. u\u017cytkownik Go\u015b\u0107 nie posiada uprawnie\u0144 do folderu test1",
            "B. u\u017cytkownik Go\u015b\u0107 posiada uprawnienia tylko odczytu do folderu test1",
            "C. u\u017cytkownik Go\u015b\u0107 posiada pe\u0142ne uprawnienia do folderu test1",
            "D. u\u017cytkownik Go\u015b\u0107 posiada uprawnienia tylko zapisu do folderu test1"
        ],
        "goodAnswer": "A. u\u017cytkownik Go\u015b\u0107 nie posiada uprawnie\u0144 do folderu test1"
    },
    {
        "id": 273,
        "question": "W skanerze z uk\u0142adami CIS elementem o\u015bwietlaj\u0105cym skanowany dokument jest",
        "imageLoc": "",
        "answers": [
            "A. grupa tr\u00f3jkolorowych diod LED",
            "B. \u015bwietl\u00f3wka",
            "C. uk\u0142ad \u017car\u00f3wek",
            "D. lampa fluorescencyjna"
        ],
        "goodAnswer": "A. grupa tr\u00f3jkolorowych diod LED"
    },
    {
        "id": 274,
        "question": "Kt\u00f3ra polska norma okre\u015bla standardy okablowania strukturalnego?",
        "imageLoc": "",
        "answers": [
            "A. TSB-67",
            "B. PN-EN 50173",
            "C. EIA/TIA 568-A",
            "D. ISO/IEC 11801"
        ],
        "goodAnswer": "B. PN-EN 50173"
    },
    {
        "id": 275,
        "question": "Kt\u00f3ry protok\u00f3\u0142 jest stosowany do terminalowego \u0142\u0105czenia si\u0119 ze zdalnymi urz\u0105dzeniami zapewniaj\u0105cy transfer zaszyfrowanych danych?",
        "imageLoc": "",
        "answers": [
            "A. SSL (Secure Socket Layer)",
            "B. Remote",
            "C. SSH (Secure Shell)",
            "D. Telnet"
        ],
        "goodAnswer": "C. SSH (Secure Shell)"
    },
    {
        "id": 276,
        "question": "Rodzina protoko\u0142\u00f3w, kt\u00f3rej cech\u0105 jest wsp\u00f3lna technika szyfrowania, to",
        "imageLoc": "",
        "answers": [
            "A. UDP",
            "B. SSH",
            "C. PPP",
            "D. SPX/IPX"
        ],
        "goodAnswer": "B. SSH"
    },
    {
        "id": 277,
        "question": "Kt\u00f3ry protok\u00f3\u0142 jest wykorzystywany tylko w sieciach lokalnych, w kt\u00f3rych pracuj\u0105 komputery z systemami operacyjnymi firmy Microsoft?",
        "imageLoc": "",
        "answers": [
            "A. IPX/SPX",
            "B. TCP/IP",
            "C. NetBEUI",
            "D. AppleTalk"
        ],
        "goodAnswer": "C. NetBEUI"
    },
    {
        "id": 278,
        "question": "Istniej\u0105ce konto u\u017cytkownika jest modyfikowane poleceniem net user. Aby wymusi\u0107 zmian\u0119 has\u0142a po ponownym zalogowaniu u\u017cytkownika, nale\u017cy doda\u0107 do polecenia parametr",
        "imageLoc": "",
        "answers": [
            "A. logonpasswordchg",
            "B. passwordreq",
            "C. passwordchg",
            "D. expirespassword"
        ],
        "goodAnswer": "A. logonpasswordchg"
    },
    {
        "id": 279,
        "question": "Kt\u00f3ry z element\u00f3w oznaczonych numerami od 1 do 4, przedstawionych na schemacie blokowym frame grabbera i opisanym we fragmencie dokumentacji technicznej, s\u0142u\u017cy do wymiany danych z innymi urz\u0105dzeniami przetwarzaj\u0105cymi obraz wideo bez niepotrzebnego obci\u0105\u017cania magistrali PCI?",
        "imageLoc": require("../assets/img/1347.png"),
        "answers": [
            "A. 2",
            "B. 3",
            "C. 4",
            "D. 1"
        ],
        "goodAnswer": "A. 2"
    },
    {
        "id": 280,
        "question": "Blok funkcjonalny oznaczony DSP w zamieszczonym schemacie blokowym to",
        "imageLoc": require("../assets/img/60.png"),
        "answers": [
            "A. przetwornik analogowo-cyfrowy z pami\u0119ci\u0105 RAM",
            "B. mikroprocesor karty d\u017awi\u0119kowej",
            "C. bufor RAM",
            "D. przetwornik cyfrowo-analogowy z pami\u0119ci\u0105 RAM"
        ],
        "goodAnswer": "B. mikroprocesor karty d\u017awi\u0119kowej"
    },
    {
        "id": 281,
        "question": "W kt\u00f3rym rodzaju skanera s\u0105 wykorzystywane fotopowielacze?",
        "imageLoc": "",
        "answers": [
            "A. p\u0142askim",
            "B. kod\u00f3w kreskowych",
            "C. b\u0119bnowym",
            "D. r\u0119cznym"
        ],
        "goodAnswer": "C. b\u0119bnowym"
    },
    {
        "id": 282,
        "question": "Kt\u00f3ry protok\u00f3\u0142 s\u0142u\u017cy do szyfrowanego terminalowego \u0142\u0105czenia si\u0119 ze zdalnym komputerem?",
        "imageLoc": "",
        "answers": [
            "A. SSL",
            "B. Telnet",
            "C. SIP",
            "D. SSH"
        ],
        "goodAnswer": "D. SSH"
    },
    {
        "id": 283,
        "question": "W firmowej sieci bezprzewodowej zosta\u0142a uruchomiona us\u0142uga polegaj\u0105ca na t\u0142umaczeniu nazw mnemonicznych. Jest to us\u0142uga",
        "imageLoc": "",
        "answers": [
            "A. DNS",
            "B. RDS",
            "C. RADIUS",
            "D. DHCP"
        ],
        "goodAnswer": "A. DNS"
    },
    {
        "id": 284,
        "question": "Aby w systemie Windows Server zarejestrowa\u0107 udane i nieudane pr\u00f3by logowania u\u017cytkownik\u00f3w oraz operacje na zasobach dyskowych, nale\u017cy skonfigurowa\u0107 dziennik",
        "imageLoc": "",
        "answers": [
            "A. zabezpiecze\u0144.",
            "B. aplikacji i us\u0142ug.",
            "C. ustawie\u0144.",
            "D. systemu."
        ],
        "goodAnswer": "A. zabezpiecze\u0144."
    },
    {
        "id": 285,
        "question": "Kt\u00f3r\u0105 rol\u0119 serwera nale\u017cy doda\u0107 w systemach z rodziny Windows Server, aby mo\u017cliwe by\u0142o utworzenie nowej witryny FTP?",
        "imageLoc": "",
        "answers": [
            "A. SSH",
            "B. DHCP",
            "C. RRAS",
            "D. IIS"
        ],
        "goodAnswer": "D. IIS"
    },
    {
        "id": 286,
        "question": "W systemie Windows przeprowadzenie analizy wp\u0142ywu uruchamianych program\u00f3w na wydajno\u015b\u0107 komputera jest mi\u0119dzy innymi mo\u017cliwe po u\u017cyciu polecenia",
        "imageLoc": "",
        "answers": [
            "A. perfmon.msc",
            "B. taskschd.msc",
            "C. iscsicpl.exe",
            "D. dfrgui.exe"
        ],
        "goodAnswer": "A. perfmon.msc"
    },
    {
        "id": 287,
        "question": "Zamontowany w komputerze dysk ma zosta\u0107 podzielony na partycje. Podaj maksymaln\u0105 liczb\u0119 partycji rozszerzonych, mo\u017cliwych do utworzenia na jednym dysku",
        "imageLoc": "",
        "answers": [
            "A. 1",
            "B. 4",
            "C. 2",
            "D. 3"
        ],
        "goodAnswer": "A. 1"
    },
    {
        "id": 288,
        "question": "U\u017cytkownik systemu Windows otrzymuje komunikaty o zbyt ma\u0142ej pami\u0119ci wirtualnej. Problem ten mo\u017cna rozwi\u0105za\u0107 przez",
        "imageLoc": "",
        "answers": [
            "A. zwi\u0119kszenie pami\u0119ci RAM",
            "B. zwi\u0119kszenie rozmiaru pliku virtualfile.sys",
            "C. zamontowanie dodatkowego dysku",
            "D. zamontowanie dodatkowej pami\u0119ci cache procesora"
        ],
        "goodAnswer": "A. zwi\u0119kszenie pami\u0119ci RAM"
    },
    {
        "id": 289,
        "question": "Wska\u017c efekt dzia\u0142ania przedstawionego polecenia",
        "imageLoc": require("../assets/img/1793.png"),
        "answers": [
            "A. Sprawdzona data ostatniego logowania na konto Test",
            "B. Ustawiony czas aktywacji konta Test",
            "C. Ustawiona data wyga\u015bni\u0119cia konta Test",
            "D. Wymuszona zmiana has\u0142a na koncie Test w podanym terminie"
        ],
        "goodAnswer": "C. Ustawiona data wyga\u015bni\u0119cia konta Test"
    },
    {
        "id": 290,
        "question": "Jak\u0105 rol\u0119 serwera z rodziny Windows Server nale\u017cy doda\u0107, aby serwer realizowa\u0142 us\u0142ugi rutingu?",
        "imageLoc": "",
        "answers": [
            "A. Us\u0142ugi zasad i dost\u0119pu sieciowego",
            "B. Us\u0142ugi zarz\u0105dzania dost\u0119pu w us\u0142udze Active Directory",
            "C. Us\u0142ugi domenowe w us\u0142udze Active Directory",
            "D. Serwer sieci Web (IIS)"
        ],
        "goodAnswer": "A. Us\u0142ugi zasad i dost\u0119pu sieciowego"
    },
    {
        "id": 291,
        "question": "Wska\u017c program DTP",
        "imageLoc": "",
        "answers": [
            "A. MS Publisher",
            "B. MS Visio",
            "C. MS Excel",
            "D. MS Word"
        ],
        "goodAnswer": "A. MS Publisher"
    },
    {
        "id": 292,
        "question": "Kopi\u0119 danych w systemie Linux mo\u017cna wykona\u0107 za pomoc\u0105 polecenia",
        "imageLoc": "",
        "answers": [
            "A. restore",
            "B. split",
            "C. dd",
            "D. tac"
        ],
        "goodAnswer": "C. dd"
    },
    {
        "id": 293,
        "question": "Rodzina adapter\u00f3w wykonanych w technologii Powerline umo\u017cliwiaj\u0105ca wykorzystanie sieci energetycznej w obr\u0119bie jednego domu/mieszkania do przesy\u0142ania sygna\u0142u sieciowego nosi nazw\u0119:",
        "imageLoc": "",
        "answers": [
            "A. InternetPlug",
            "B. HomePlug",
            "C. InternetOutlet",
            "D. HomeOutlet"
        ],
        "goodAnswer": "B. HomePlug"
    },
    {
        "id": 294,
        "question": "Zadaniem us\u0142ugi DNS jest",
        "imageLoc": "",
        "answers": [
            "A. sprawdzenie poprawno\u015bci adres\u00f3w IP",
            "B. translacja nazw domenowych na adresy IP",
            "C. sprawdzanie poprawno\u015bci adres\u00f3w domenowych",
            "D. translacja adres\u00f3w IP na nazwy domenowe"
        ],
        "goodAnswer": "B. translacja nazw domenowych na adresy IP"
    },
    {
        "id": 295,
        "question": "Kt\u00f3ra us\u0142uga serwera Windows pozwoli u\u017cytkownikom ko\u0144cowym sieci przedstawionej na rysunku na korzystanie z Internetu?",
        "imageLoc": require("../assets/img/1673.png"),
        "answers": [
            "A. Us\u0142uga LDS",
            "B. Us\u0142uga drukowania",
            "C. Us\u0142uga rutingu",
            "D. Us\u0142uga udost\u0119pniania"
        ],
        "goodAnswer": "C. Us\u0142uga rutingu"
    },
    {
        "id": 296,
        "question": "Urz\u0105dzenie przedstawione na rysunku jest stosowane do",
        "imageLoc": require("../assets/img/2040.png"),
        "answers": [
            "A. zabezpieczenia przed niepo\u017c\u0105danym dost\u0119pem z sieci.",
            "B. zamiany transmisji sygna\u0142u kablem \u015bwiat\u0142owodowym na skr\u0119tk\u0119.",
            "C. rozdzielenia sygna\u0142u.",
            "D. wzmocnienia sygna\u0142u."
        ],
        "goodAnswer": "B. zamiany transmisji sygna\u0142u kablem \u015bwiat\u0142owodowym na skr\u0119tk\u0119."
    },
    {
        "id": 297,
        "question": "Kt\u00f3rej funkcji nale\u017cy u\u017cy\u0107 do wykonania kopii zapasowej rejestru systemowego w edytorze regedit?",
        "imageLoc": "",
        "answers": [
            "A. Eksportuj",
            "B. Kopiuj nazw\u0119 klucza",
            "C. Importuj",
            "D. Za\u0142aduj ga\u0142\u0105\u017a rejestru"
        ],
        "goodAnswer": "A. Eksportuj"
    },
    {
        "id": 298,
        "question": "Atak DDoS (ang. Disributed Denial of Service) na serwer spowoduje",
        "imageLoc": "",
        "answers": [
            "A. zbieranie informacji na temat atakowanej sieci",
            "B. przeci\u0105\u017cenie aplikacji serwuj\u0105cej okre\u015blone dane",
            "C. przechwycenie pakiet\u00f3w sieciowych",
            "D. podmian\u0119 pakiet\u00f3w przesy\u0142anych przez sie\u0107"
        ],
        "goodAnswer": "B. przeci\u0105\u017cenie aplikacji serwuj\u0105cej okre\u015blone dane"
    },
    {
        "id": 299,
        "question": "Jakim kolorem jest oznaczona izolacja \u017cy\u0142y skr\u0119tki w pierwszym pinie wtyku RJ45 w sekwencji po\u0142\u0105cze\u0144 T568A?",
        "imageLoc": "",
        "answers": [
            "A. Bia\u0142o-zielonym",
            "B. Bia\u0142o-br\u0105zowym",
            "C. Bia\u0142o-pomara\u0144czowym",
            "D. Bia\u0142o-niebieskim"
        ],
        "goodAnswer": "A. Bia\u0142o-zielonym"
    },
    {
        "id": 300,
        "question": "Ustawa z dnia 14 grudnia 2012r. o odpadach nakazuje",
        "imageLoc": "",
        "answers": [
            "A. neutralizacj\u0119 odpad\u00f3w w dowolny spos\u00f3b w jak najkr\u00f3tszym czasie",
            "B. poddanie odpad\u00f3w w pierwszej kolejno\u015bci odzyskowi",
            "C. spalenie odpad\u00f3w w jak najwy\u017cszej temperaturze",
            "D. sk\u0142adowanie odpad\u00f3w maksymalnie przez 1 rok"
        ],
        "goodAnswer": "B. poddanie odpad\u00f3w w pierwszej kolejno\u015bci odzyskowi"
    },
    {
        "id": 301,
        "question": "Widoczny na schemacie symbol okablowania oznacza kabel",
        "imageLoc": require("../assets/img/2077.png"),
        "answers": [
            "A. \u015bwiat\u0142owodowy.",
            "B. ethernetowy krosowany.",
            "C. ethernetowy prosty.",
            "D. szeregowy."
        ],
        "goodAnswer": "B. ethernetowy krosowany."
    },
    {
        "id": 302,
        "question": "Atak komputerowy, polegaj\u0105cy na wy\u0142udzaniu poufnych informacji osobistych przez podszywanie si\u0119 pod godn\u0105 zaufania osob\u0119 lub instytucj\u0119, to",
        "imageLoc": "",
        "answers": [
            "A. backscatter",
            "B. spam",
            "C. phishing",
            "D. spoofing"
        ],
        "goodAnswer": "C. phishing"
    },
    {
        "id": 303,
        "question": "Sieci lokalne typu klient-serwer charakteryzuj\u0105 si\u0119 tym, \u017ce",
        "imageLoc": "",
        "answers": [
            "A. istnieje jeden wydzielony komputer udost\u0119pniaj\u0105cy swoje zasoby w sieci",
            "B. ka\u017cdy komputer w sieci jest r\u00f3wnoprawny z pozosta\u0142ymi",
            "C. wszystkie komputery klienckie maj\u0105 dost\u0119p do zasob\u00f3w pozosta\u0142ych komputer\u00f3w",
            "D. \u017caden z komputer\u00f3w nie pe\u0142ni roli nadrz\u0119dnej w stosunku do pozosta\u0142ych"
        ],
        "goodAnswer": "A. istnieje jeden wydzielony komputer udost\u0119pniaj\u0105cy swoje zasoby w sieci"
    },
    {
        "id": 304,
        "question": "Informacje o b\u0142\u0119dach dzia\u0142ania systemu operacyjnego Linux mo\u017cna uzyska\u0107 za pomoc\u0105 narz\u0119dzia",
        "imageLoc": "",
        "answers": [
            "A. watch",
            "B. syslog",
            "C. grub",
            "D. netstat"
        ],
        "goodAnswer": "B. syslog"
    },
    {
        "id": 305,
        "question": "Sie\u0107, w kt\u00f3rej pracuje stacja robocza o adresie IP 192.168.100.50/28,podzielono na 4 podsieci. Prawid\u0142owa lista podsieci to",
        "imageLoc": "",
        "answers": [
            "A. 192.168.100.48/27; 192.168.100.52/27; 192.168.100.56/27; 192.168.100.58/27",
            "B. 192.168.100.50/28; 192.168.100.52/28; 192.168.100.56/28; 192.168.100.60/28",
            "C. 192.168.100.48/30; 192.168.100.52/30; 192.168.100.56/30; 192.168.100.60/30",
            "D. 192.168.100.48/29; 192.168.100.54/29; 192.168.100.56/29; 192.168.100.58/29"
        ],
        "goodAnswer": "C. 192.168.100.48/30; 192.168.100.52/30; 192.168.100.56/30; 192.168.100.60/30"
    },
    {
        "id": 306,
        "question": "Do naprawy zasilacza laptopa polegaj\u0105cej na wymianie kondensator\u00f3w nale\u017cy zastosowa\u0107",
        "imageLoc": "",
        "answers": [
            "A. lutownic\u0119 z cyn\u0105 i kalafoni\u0105.",
            "B. tester p\u0142yt g\u0142\u00f3wnych.",
            "C. tester okablowania sieciowego.",
            "D. chwytak pr\u00f3\u017cniowy."
        ],
        "goodAnswer": "A. lutownic\u0119 z cyn\u0105 i kalafoni\u0105."
    },
    {
        "id": 307,
        "question": "Na rysunku przedstawiono zrzut ekranu z konfiguracji strefy DMZ na routerze. W\u0142\u0105czenie opcji \"Enable DMZ\" spowoduje, \u017ce komputer o adresie IP 192.168.0.106",
        "imageLoc": require("../assets/img/1275.png"),
        "answers": [
            "A. zostanie ukryty w sieci lokalnej",
            "B. utraci dost\u0119p do internetu",
            "C. b\u0119dzie publicznie widoczny w Internecie",
            "D. b\u0119dzie chroniony firewallem"
        ],
        "goodAnswer": "C. b\u0119dzie publicznie widoczny w Internecie"
    },
    {
        "id": 308,
        "question": "Kt\u00f3ry adres IPv4 okre\u015bla urz\u0105dzenie pracuj\u0105ce w sieci o adresie 14.36.64.0/20?",
        "imageLoc": "",
        "answers": [
            "A. 14.36.17.1",
            "B. 14.36.48.1",
            "C. 14.36.80.1",
            "D. 14.36.65.1"
        ],
        "goodAnswer": "D. 14.36.65.1"
    },
    {
        "id": 309,
        "question": "Polecenie umo\u017cliwiaj\u0105ce poznanie adres\u00f3w fizycznych dla kart sieciowych w systemie to",
        "imageLoc": "",
        "answers": [
            "A. pathping",
            "B. arp -a",
            "C. getmac",
            "D. ping"
        ],
        "goodAnswer": "C. getmac"
    },
    {
        "id": 310,
        "question": "Kt\u00f3ry z element\u00f3w pokazanych na schemacie karty d\u017awi\u0119kowej na rysunku s\u0142u\u017cy do cyfrowego przetwarzania sygna\u0142\u00f3w?",
        "imageLoc": require("../assets/img/777.png"),
        "answers": [
            "A. Przetwornik A/D",
            "B. Syntezator",
            "C. Procesor DSP",
            "D. Mikser"
        ],
        "goodAnswer": "C. Procesor DSP"
    },
    {
        "id": 311,
        "question": "Kt\u00f3ra technologia umo\u017cliwia dost\u0119p do Internetu oraz odbi\u00f3r cyfrowych kana\u0142\u00f3w telewizyjnych?",
        "imageLoc": "",
        "answers": [
            "A. QoS",
            "B. ADSL2+",
            "C. CLIP",
            "D. VPN"
        ],
        "goodAnswer": "B. ADSL2+"
    },
    {
        "id": 312,
        "question": "Jak\u0105 funkcj\u0119 pe\u0142ni podzesp\u00f3\u0142 wskazany strza\u0142k\u0105 na schemacie chipsetu p\u0142yty g\u0142\u00f3wnej ?",
        "imageLoc": require("../assets/img/253.png"),
        "answers": [
            "A. Pozwala wykorzysta\u0107 typowe pami\u0119ci DDR SDRAM",
            "B. Pozwala wykorzysta\u0107 magistral\u0119 o szeroko\u015bci 128 bit\u00f3w do przesy\u0142ania danych pomi\u0119dzy pami\u0119ci\u0105 RAM, a kontrolerem pami\u0119ci",
            "C. Umo\u017cliwia korzystanie z pami\u0119ci DDR3-800 i DDR2-800 jako DUAL Channel",
            "D. Umo\u017cliwia po\u0142\u0105czenie i korzystanie z pami\u0119ci DDR 400 jako DUAL Channel w celu zachowania zgodno\u015bci z DUAL Channel DDR2 800"
        ],
        "goodAnswer": "B. Pozwala wykorzysta\u0107 magistral\u0119 o szeroko\u015bci 128 bit\u00f3w do przesy\u0142ania danych pomi\u0119dzy pami\u0119ci\u0105 RAM, a kontrolerem pami\u0119ci"
    },
    {
        "id": 313,
        "question": "Zmniejszenie liczby jedynek w masce umo\u017cliwi zaadresowanie",
        "imageLoc": "",
        "answers": [
            "A. mniejszej liczby sieci i mniejszej liczby urz\u0105dze\u0144",
            "B. mniejszej liczby sieci i wi\u0119kszej liczby urz\u0105dze\u0144",
            "C. wi\u0119kszej liczby sieci i mniejszej liczby urz\u0105dze\u0144",
            "D. wi\u0119kszej liczby sieci i wi\u0119kszej liczby urz\u0105dze\u0144"
        ],
        "goodAnswer": "B. mniejszej liczby sieci i wi\u0119kszej liczby urz\u0105dze\u0144"
    },
    {
        "id": 314,
        "question": "Oznaczenie wtyku zwanego popularnie RJ45 to",
        "imageLoc": "",
        "answers": [
            "A. 8P8C (8 Position 8 Contact)",
            "B. 8P4C (8 Position 4 Contact)",
            "C. 4P8C (4 Position 8 Contact)",
            "D. 4P4C (4 Position 4 Contact)"
        ],
        "goodAnswer": "A. 8P8C (8 Position 8 Contact)"
    },
    {
        "id": 315,
        "question": "Maska podsieci /23 oznacza, \u017ce na pierwszych 23 bitach 32-cyfrowej liczby binarnej znajduj\u0105 si\u0119 jedynki, a na pozosta\u0142ych zera. Jak b\u0119dzie zapisana ta maska w systemie dziesi\u0119tnym, je\u017celi ka\u017cdym kolejnym 8 bitom odpowiada jedna liczba dziesi\u0119tna?",
        "imageLoc": "",
        "answers": [
            "A. 255.255.255.128",
            "B. 255.255.254.0",
            "C. 255.255.255.0",
            "D. 255.255.0.0"
        ],
        "goodAnswer": "B. 255.255.254.0"
    },
    {
        "id": 316,
        "question": "Oprogramowanie komputerowe, z kt\u00f3rego mo\u017cna korzysta\u0107 za darmo i bez ogranicze\u0144 czasowych, rozpowszechniane jest w ramach licencji typu",
        "imageLoc": "",
        "answers": [
            "A. public domain",
            "B. donationware",
            "C. shareware",
            "D. trial"
        ],
        "goodAnswer": "A. public domain"
    },
    {
        "id": 317,
        "question": "Aby stworzy\u0107 katalog za pomoc\u0105 wiersza polece\u0144 systemu Windows, nale\u017cy zastosowa\u0107 komend\u0119",
        "imageLoc": "",
        "answers": [
            "A. dir",
            "B. md",
            "C. mv",
            "D. rmdir"
        ],
        "goodAnswer": "B. md"
    },
    {
        "id": 318,
        "question": "W wyniku u\u017cycia narz\u0119dzia diagnostycznego chkdsk otrzymano informacje widoczne na zrzucie ekranu. Jak\u0105 wielko\u015b\u0107 posiada pojedynczy klaster dysku?",
        "imageLoc": require("../assets/img/61.png"),
        "answers": [
            "A. 8 kB",
            "B. 2 140 kB",
            "C. 4 kB",
            "D. 1 972 kB"
        ],
        "goodAnswer": "C. 4 kB"
    },
    {
        "id": 319,
        "question": "Kt\u00f3re urz\u0105dzenie przedstawia rysunek?",
        "imageLoc": require("../assets/img/1375.png"),
        "answers": [
            "A. Koncentrator",
            "B. Prze\u0142\u0105cznik",
            "C. Most sieciowy",
            "D. Punkt dost\u0119powy"
        ],
        "goodAnswer": "D. Punkt dost\u0119powy"
    },
    {
        "id": 320,
        "question": "Aby zainstalowa\u0107 serwer proxy w systemie Linux, nale\u017cy zainstalowa\u0107 program",
        "imageLoc": "",
        "answers": [
            "A. Webmin",
            "B. Samba",
            "C. Squid",
            "D. Postfix"
        ],
        "goodAnswer": "C. Squid"
    },
    {
        "id": 321,
        "question": "W cenniku us\u0142ug komputerowych znajduj\u0105 si\u0119 przedstawione ni\u017cej zapisy. Ile b\u0119dzie wynosi\u0142 koszt dojazdu serwisanta do klienta mieszkaj\u0105cego poza miastem, w odleg\u0142o\u015bci 15km od siedziby firmy?",
        "imageLoc": require("../assets/img/625.png"),
        "answers": [
            "A. 60 z\u0142 + VAT",
            "B. 30 z\u0142 + VAT",
            "C. 30 z\u0142",
            "D. 25 z\u0142 + 2 z\u0142 za ka\u017cdy km poza granicami miasta"
        ],
        "goodAnswer": "A. 60 z\u0142 + VAT"
    },
    {
        "id": 322,
        "question": "W sieci lokalnej zainstalowano serwer, kt\u00f3ry ma za zadanie przydzielanie dynamicznego adresu IP. Jaka us\u0142uga musi by\u0107 uruchomiona na tym serwerze?",
        "imageLoc": "",
        "answers": [
            "A. DNS",
            "B. DHCP",
            "C. DCHP",
            "D. ISA"
        ],
        "goodAnswer": "B. DHCP"
    },
    {
        "id": 323,
        "question": "U\u017cytkownik systemu Linux, chc\u0105c przetestowa\u0107 dysk twardy pod k\u0105tem wyst\u0119powania na nim uszkodzonych sektor\u00f3w, mo\u017ce u\u017cy\u0107 programu",
        "imageLoc": "",
        "answers": [
            "A. fsck",
            "B. chkdisk",
            "C. scandisk",
            "D. defrag"
        ],
        "goodAnswer": "A. fsck"
    },
    {
        "id": 324,
        "question": "B\u0119ben \u015bwiat\u0142oczu\u0142y jest stosowany w drukarkach",
        "imageLoc": "",
        "answers": [
            "A. atramentowych",
            "B. laserowych",
            "C. ig\u0142owych",
            "D. termosublimacyjnych"
        ],
        "goodAnswer": "B. laserowych"
    },
    {
        "id": 325,
        "question": "W systemie binarnym wynikiem sumowania liczb dw\u00f3jkowych 1001101 i 11001 jest",
        "imageLoc": "",
        "answers": [
            "A. 1101101",
            "B. 1100110",
            "C. 1110001",
            "D. 1101100"
        ],
        "goodAnswer": "B. 1100110"
    },
    {
        "id": 326,
        "question": "Kt\u00f3ry protok\u00f3\u0142 jest stosowany do sprawdzenia poprawno\u015bci po\u0142\u0105czenia pomi\u0119dzy dwoma hostami?",
        "imageLoc": "",
        "answers": [
            "A. RIP (Routing Information Protocol)",
            "B. ICMP (Internet Control Message Protocol)",
            "C. UDP (User DatagramProtocol)",
            "D. RARP (ReverseA ddress Resolution Protocol)"
        ],
        "goodAnswer": "B. ICMP (Internet Control Message Protocol)"
    },
    {
        "id": 327,
        "question": "Na rysunku przedstawiono oprogramowanie monitoruj\u0105ce",
        "imageLoc": require("../assets/img/616.png"),
        "answers": [
            "A. SAS",
            "B. IRDA",
            "C. SMART",
            "D. NCQ"
        ],
        "goodAnswer": "C. SMART"
    },
    {
        "id": 328,
        "question": "Norma IEEE 802.11b jest standardem sieci",
        "imageLoc": "",
        "answers": [
            "A. \u015bwiat\u0142owodowych",
            "B. przewodowych",
            "C. telefonicznych",
            "D. bezprzewodowych"
        ],
        "goodAnswer": "D. bezprzewodowych"
    },
    {
        "id": 329,
        "question": "Wska\u017c podzesp\u00f3\u0142 niekompatybilny z p\u0142yt\u0105 g\u0142\u00f3wn\u0105 o przedstawionych w tabeli parametrach",
        "imageLoc": require("../assets/img/1845.png"),
        "answers": [
            "A. Karta graficzna: Gigabyte GeForce GTX 1050 OC, 2GB, GDDR5, 128 bit, PCI-Express 3.0 x16",
            "B. Monitor: Dell, 34\", 1x DisplayPort, 1x miniDP, 2x USB 3.0 Upstream, 4x USB 3.0 Downstream",
            "C. Procesor: INTEL CORE i3-4350, 3.60 GHz, x2/4, 4 MB, 54W, HD 4600, BOX, s-1150",
            "D. Pami\u0119\u0107 RAM: Corsair Vengeance LPX, DDR4, 2x16GB, 3000MHz, CL15 Black"
        ],
        "goodAnswer": "C. Procesor: INTEL CORE i3-4350, 3.60 GHz, x2/4, 4 MB, 54W, HD 4600, BOX, s-1150"
    },
    {
        "id": 330,
        "question": "Programem typu wirus, kt\u00f3rego g\u0142\u00f3wnym celem jest rozprzestrzenianie si\u0119 w sieci komputerowej, jest:",
        "imageLoc": "",
        "answers": [
            "A. keylogger",
            "B. backdoor",
            "C. trojan",
            "D. robak"
        ],
        "goodAnswer": "D. robak"
    },
    {
        "id": 331,
        "question": "Pami\u0119\u0107 RAM przedstawiona na rysunku, montowana jest na p\u0142ycie g\u0142\u00f3wnej wyposa\u017conej w gniazdo",
        "imageLoc": require("../assets/img/311.png"),
        "answers": [
            "A. DDR",
            "B. DDR3",
            "C. DDR2",
            "D. DDR4"
        ],
        "goodAnswer": "C. DDR2"
    },
    {
        "id": 332,
        "question": "Plik messages w systemie Linux przechowuje",
        "imageLoc": "",
        "answers": [
            "A. og\u00f3lne informacje o zdarzeniach systemowych",
            "B. kody b\u0142\u0119d\u00f3w systemowych",
            "C. komunikaty zwi\u0105zane z inicjacj\u0105 systemu",
            "D. dane dotycz\u0105ce uwierzytelniania"
        ],
        "goodAnswer": "A. og\u00f3lne informacje o zdarzeniach systemowych"
    },
    {
        "id": 333,
        "question": "Programem umo\u017cliwiaj\u0105cym wydzielanie logicznych cz\u0119\u015bci dysku twardego w systemie GNU/Linux jest",
        "imageLoc": "",
        "answers": [
            "A. format",
            "B. truncate",
            "C. fdisk",
            "D. convert"
        ],
        "goodAnswer": "C. fdisk"
    },
    {
        "id": 334,
        "question": "Okre\u015bl przyczyn\u0119 wyst\u0105pienia komunikatu, kt\u00f3ry jest przedstawiony na rysunku",
        "imageLoc": require("../assets/img/1720.png"),
        "answers": [
            "A. Wy\u0142\u0105czony Firewall",
            "B. Brak zainstalowanego programu antywirusowego",
            "C. Niew\u0142a\u015bciwa przegl\u0105darka",
            "D. Problem z weryfikacj\u0105 certyfikatu bezpiecze\u0144stwa"
        ],
        "goodAnswer": "D. Problem z weryfikacj\u0105 certyfikatu bezpiecze\u0144stwa"
    },
    {
        "id": 335,
        "question": "Konfiguracj\u0119 interfejsu sieciowego w systemie Linux mo\u017cna wykona\u0107, edytuj\u0105c plik",
        "imageLoc": "",
        "answers": [
            "A. /etc/network/interfaces",
            "B. /etc/host.conf",
            "C. /etc/resolv.conf",
            "D. /etc/hosts"
        ],
        "goodAnswer": "A. /etc/network/interfaces"
    },
    {
        "id": 336,
        "question": "Chusteczki nas\u0105czone p\u0142ynem o w\u0142a\u015bciwo\u015bciach antystatycznych s\u0105 przeznaczone do czyszczenia",
        "imageLoc": "",
        "answers": [
            "A. ekran\u00f3w monitor\u00f3w CRT",
            "B. wa\u0142k\u00f3w olejowych w drukarkach laserowych",
            "C. ekran\u00f3w monitor\u00f3w LCD",
            "D. rolek prowadz\u0105cych papier w drukarkach atramentowych"
        ],
        "goodAnswer": "A. ekran\u00f3w monitor\u00f3w CRT"
    },
    {
        "id": 337,
        "question": "Przy wymianie kt\u00f3rego podzespo\u0142\u00f3w komputera nie wymaga si\u0119 wy\u0142\u0105czenia \u017ar\u00f3d\u0142a zasilania?",
        "imageLoc": "",
        "answers": [
            "A. urz\u0105dzenia typu hot-swap",
            "B. p\u0142yty g\u0142\u00f3wnej",
            "C. pami\u0119ci RAM",
            "D. zasilacza"
        ],
        "goodAnswer": "A. urz\u0105dzenia typu hot-swap"
    },
    {
        "id": 338,
        "question": "W czterech sklepach sprzedawany jest ten sam komputer w r\u00f3\u017cnych cenach. Najtaniej mo\u017cna go naby\u0107 w sklepie:",
        "imageLoc": require("../assets/img/285.png"),
        "answers": [
            "A. A",
            "B. B",
            "C. C",
            "D. D"
        ],
        "goodAnswer": "C. C"
    },
    {
        "id": 339,
        "question": "Program s\u0142u\u017c\u0105cy do diagnozy komputera wy\u015bwietli\u0142 komunikat NIC ERROR. Komunikat ten oznacza awari\u0119 karty",
        "imageLoc": "",
        "answers": [
            "A. sieciowej",
            "B. d\u017awi\u0119kowej",
            "C. wideo",
            "D. graficznej"
        ],
        "goodAnswer": "A. sieciowej"
    },
    {
        "id": 340,
        "question": "Kt\u00f3ry ze znak\u00f3w w systemach z rodziny Windows nale\u017cy zastosowa\u0107 podczas udost\u0119pniania zasobu ukrytego w sieci?",
        "imageLoc": "",
        "answers": [
            "A. ?",
            "B. @",
            "C. $",
            "D. #"
        ],
        "goodAnswer": "C. $"
    },
    {
        "id": 341,
        "question": "Licencja na Office 365 PL Personal (1 stanowisko, subskrypcja na 1 rok) ESD jest przypisana do",
        "imageLoc": "",
        "answers": [
            "A. wy\u0142\u0105cznie jednego u\u017cytkownika, na jednym komputerze, jednym tablecie i jednym telefonie, wy\u0142\u0105cznie do cel\u00f3w niekomercyjnych",
            "B. wy\u0142\u0105cznie jednego u\u017cytkownika na jednym komputerze i jednym urz\u0105dzeniu mobilnym do cel\u00f3w komercyjnych i niekomercyjnych",
            "C. dowolnej liczby u\u017cytkownik\u00f3w, wy\u0142\u0105cznie na jednym komputerze do cel\u00f3w komercyjnych i niekomercyjnych",
            "D. dowolnej liczby u\u017cytkownik\u00f3w, wy\u0142\u0105cznie na jednym komputerze do cel\u00f3w komercyjnych"
        ],
        "goodAnswer": "A. wy\u0142\u0105cznie jednego u\u017cytkownika, na jednym komputerze, jednym tablecie i jednym telefonie, wy\u0142\u0105cznie do cel\u00f3w niekomercyjnych"
    },
    {
        "id": 342,
        "question": "Kt\u00f3re ze z\u0142\u0105czy oznaczonych strza\u0142kami na schemacie monitora jest wej\u015bciem cyfrowym?",
        "imageLoc": require("../assets/img/129.png"),
        "answers": [
            "A. Z\u0142\u0105cze 1",
            "B. Z\u0142\u0105cza 1 i 2",
            "C. \u017badne ze z\u0142\u0105czy",
            "D. Z\u0142\u0105cze 2"
        ],
        "goodAnswer": "D. Z\u0142\u0105cze 2"
    },
    {
        "id": 343,
        "question": "Przedstawiony panel tylny p\u0142yty g\u0142\u00f3wnej jest wyposa\u017cony mi\u0119dzy innymi w interfejsy:",
        "imageLoc": require("../assets/img/1897.png"),
        "answers": [
            "A. 2 x USB 3.0; 4 x USB 2.0, 1.1; 1 x D-SUB",
            "B. 2 x USB 3.0; 2 x USB 2.0, 1.1; 2 x DP, 1 x DVI",
            "C. 2 x PS2; 1 x RJ45; 6 x USB 2.0, 1.1",
            "D. 2 x HDMI, 1 x D-SUB, 1 x RJ-11, 6 x USB 2.0"
        ],
        "goodAnswer": "A. 2 x USB 3.0; 4 x USB 2.0, 1.1; 1 x D-SUB"
    },
    {
        "id": 344,
        "question": "Kt\u00f3re narz\u0119dzie jest stosowane do weryfikacji sterownik\u00f3w w systemie Windows?",
        "imageLoc": "",
        "answers": [
            "A. debug",
            "B. verifier",
            "C. sfc",
            "D. replace"
        ],
        "goodAnswer": "B. verifier"
    },
    {
        "id": 345,
        "question": "Do monta\u017cu zestawu komputerowego z p\u0142yt\u0105 g\u0142\u00f3wn\u0105 zawieraj\u0105c\u0105 gniazdo procesora typu Socket AM3 mo\u017cna zastosowa\u0107 procesor",
        "imageLoc": "",
        "answers": [
            "A. Itanium",
            "B. Core i7",
            "C. Phenom II",
            "D. Pentium D"
        ],
        "goodAnswer": "C. Phenom II"
    },
    {
        "id": 346,
        "question": "Urz\u0105dzenie sieciowe s\u0142u\u017c\u0105ce do po\u0142\u0105czenia 5 komputer\u00f3w ze sob\u0105 w tej samej sieci, tak aby nie wyst\u0119powa\u0142y kolizje pakiet\u00f3w, to",
        "imageLoc": "",
        "answers": [
            "A. koncentrator.",
            "B. most.",
            "C. prze\u0142\u0105cznik.",
            "D. ruter."
        ],
        "goodAnswer": "C. prze\u0142\u0105cznik."
    },
    {
        "id": 347,
        "question": "Odwrotno\u015bci\u0105 bezstratnej kompresji danych jest",
        "imageLoc": "",
        "answers": [
            "A. pakowanie danych",
            "B. dekompresja",
            "C. prekompresja",
            "D. archiwizacja"
        ],
        "goodAnswer": "B. dekompresja"
    },
    {
        "id": 348,
        "question": "Na rysunku przedstawiono sie\u0107 komputerow\u0105 w topologii",
        "imageLoc": require("../assets/img/999.png"),
        "answers": [
            "A. mieszanej",
            "B. pier\u015bcienia",
            "C. magistrali",
            "D. gwiazdy"
        ],
        "goodAnswer": "B. pier\u015bcienia"
    },
    {
        "id": 349,
        "question": "Kt\u00f3ry protok\u00f3\u0142 wykorzystuj\u0105 komputery do powiadomienia rutera o ch\u0119ci przy\u0142\u0105czenia si\u0119 lub odej\u015bcia z okre\u015blonej grupy rozg\u0142oszeniowej?",
        "imageLoc": "",
        "answers": [
            "A. UDP",
            "B. TCP/IP",
            "C. IGMP",
            "D. DHCP"
        ],
        "goodAnswer": "C. IGMP"
    },
    {
        "id": 350,
        "question": "Czynno\u015bci samokontroluj\u0105ce komputer po w\u0142\u0105czeniu zasilania oznaczone s\u0105 skr\u00f3tem",
        "imageLoc": "",
        "answers": [
            "A. MBR",
            "B. CPU",
            "C. POST",
            "D. BIOS"
        ],
        "goodAnswer": "C. POST"
    },
    {
        "id": 351,
        "question": "Administrator systemu Linux wylistowa\u0142 zawarto\u015b\u0107 katalogu /home/szkola w terminalu i uzyska\u0142 nast\u0119puj\u0105cy wynik -rwx -x r-x 1 admin admin 25 04-09 15:17 szkola.txt Nast\u0119pnie wyda\u0142 polecenie: chmod ug=rw szkola.txt | Is -I Jaki b\u0119dzie efekt jego dzia\u0142ania, wy\u015bwietlony w oknie terminala?",
        "imageLoc": "",
        "answers": [
            "A. -rwx ~x rw- 1 admin admin 25 04-09 15:17 szkola.txt",
            "B. -rwx r-x r-x 1 admin admin 25 04-09 15:17 szkola.txt",
            "C. -rw- rw- r-x 1 admin admin 25 04-09 15:17 szkola.txt",
            "D. -rw- rw- rw- 1 admin admin 25 04-09 15:17 szkola.txt"
        ],
        "goodAnswer": "C. -rw- rw- r-x 1 admin admin 25 04-09 15:17 szkola.txt"
    },
    {
        "id": 352,
        "question": "Licencja programu komputerowego rozpowszechnianego za darmo z ograniczon\u0105 przez producenta funkcjonalno\u015bci\u0105 w stosunku do pe\u0142nej, p\u0142atnej wersji, gdzie po okresie 30 dni pojawiaj\u0105 si\u0119 reklamy oraz przypomnienia o konieczno\u015bci zarejestrowania si\u0119, nosi nazw\u0119",
        "imageLoc": "",
        "answers": [
            "A. liteware",
            "B. GNU-GPL",
            "C. OEM",
            "D. adware"
        ],
        "goodAnswer": "A. liteware"
    },
    {
        "id": 353,
        "question": "W kt\u00f3rym z rejestr\u00f3w wewn\u0119trznych procesor zapisuje dodatkowe cechy wyniku wykonywanej operacji?",
        "imageLoc": "",
        "answers": [
            "A. W rejestrze flagowym",
            "B. W akumulatorze",
            "C. W liczniku rozkaz\u00f3w",
            "D. We wska\u017aniku stosu"
        ],
        "goodAnswer": "A. W rejestrze flagowym"
    },
    {
        "id": 354,
        "question": "Je\u015bli podczas uruchamiania si\u0119 systemu BIOS firmy AWARD komputer wyda\u0142 d\u0142ugi sygna\u0142 i dwa kr\u00f3tkie, oznacza to, \u017ce wyst\u0105pi\u0142 b\u0142\u0105d",
        "imageLoc": "",
        "answers": [
            "A. karty graficznej",
            "B. p\u0142yty g\u0142\u00f3wnej",
            "C. kontrolera klawiatury",
            "D. pami\u0119ci Flash - BIOS"
        ],
        "goodAnswer": "A. karty graficznej"
    },
    {
        "id": 355,
        "question": "Przyrz\u0105d przedstawiony na rysunku jest stosowany do zaciskania wtyk\u00f3w",
        "imageLoc": require("../assets/img/1130.png"),
        "answers": [
            "A. SC",
            "B. BNC",
            "C. RJ 45",
            "D. E 2000"
        ],
        "goodAnswer": "C. RJ 45"
    },
    {
        "id": 356,
        "question": "W systemie Linux has\u0142a u\u017cytkownik\u00f3w s\u0105 przechowywane w pliku:",
        "imageLoc": "",
        "answers": [
            "A. groups",
            "B. users",
            "C. passwd",
            "D. password"
        ],
        "goodAnswer": "C. passwd"
    },
    {
        "id": 357,
        "question": "Ile domen kolizyjnych i rozg\u0142oszeniowych jest widocznych na schemacie?",
        "imageLoc": require("../assets/img/1331.png"),
        "answers": [
            "A. 4 domeny kolizyjne i 9 domen rozg\u0142oszeniowych",
            "B. 9 domen kolizyjnych i 1 domena rozg\u0142oszeniowa",
            "C. 9 domen kolizyjnych i 4 domeny rozg\u0142oszeniowe",
            "D. 1 domena kolizyjna i 9 domen rozg\u0142oszeniowych"
        ],
        "goodAnswer": "C. 9 domen kolizyjnych i 4 domeny rozg\u0142oszeniowe"
    },
    {
        "id": 358,
        "question": "W adresie IP nale\u017c\u0105cym do klasy A, warto\u015b\u0107 pierwszego bajtu jest zawarta w przedziale",
        "imageLoc": "",
        "answers": [
            "A. 224 - 240",
            "B. 192 - 223",
            "C. 128 - 191",
            "D. 0 - 127"
        ],
        "goodAnswer": "D. 0 - 127"
    },
    {
        "id": 359,
        "question": "Programu CHKDSK u\u017cywa si\u0119 w celu",
        "imageLoc": "",
        "answers": [
            "A. defragmentacji dysku",
            "B. zmiany systemu plik\u00f3w",
            "C. naprawy fizycznej struktury dysku",
            "D. naprawy logicznej struktury dysku"
        ],
        "goodAnswer": "D. naprawy logicznej struktury dysku"
    },
    {
        "id": 360,
        "question": "Do wykonania nienadzorowanej instalacji w systemie Windows nale\u017cy przygotowa\u0107 plik odpowiedzi o nazwie",
        "imageLoc": "",
        "answers": [
            "A. boot.ini",
            "B. unattend.txt",
            "C. pagefile.sys",
            "D. modprobe.conf"
        ],
        "goodAnswer": "B. unattend.txt"
    },
    {
        "id": 361,
        "question": "Rekord typu A serwera DNS",
        "imageLoc": "",
        "answers": [
            "A. przechowuje alias nazwy domeny.",
            "B. mapuje nazw\u0119 hosta na odpowiadaj\u0105cy jej 32-bitowy adres IPv4.",
            "C. mapuje nazw\u0119 domeny DNS na nazw\u0119 serwera poczty.",
            "D. przechowuje informacj\u0119 o nadrz\u0119dnym serwerze DNS."
        ],
        "goodAnswer": "B. mapuje nazw\u0119 hosta na odpowiadaj\u0105cy jej 32-bitowy adres IPv4."
    },
    {
        "id": 362,
        "question": "Zadaniem programu Wireshark jest",
        "imageLoc": "",
        "answers": [
            "A. monitorowanie dzia\u0142ania u\u017cytkownik\u00f3w sieci",
            "B. zabezpieczenie komputera przed wirusami",
            "C. sprawdzanie wydajno\u015bci element\u00f3w komputera",
            "D. zapobieganie dost\u0119powi do komputera przez sie\u0107"
        ],
        "goodAnswer": "A. monitorowanie dzia\u0142ania u\u017cytkownik\u00f3w sieci"
    },
    {
        "id": 363,
        "question": "Kt\u00f3ry protok\u00f3\u0142 sygnalizuj\u0105cy jest stosowany w telefonii VoIP?",
        "imageLoc": "",
        "answers": [
            "A. SNMP (Simple Network Management Protocol)",
            "B. POP (Post Office Protocol)",
            "C. SIP (Session Initiation Protocol)",
            "D. DHCP (Dynamic Host Configuration Protocol)"
        ],
        "goodAnswer": "C. SIP (Session Initiation Protocol)"
    },
    {
        "id": 364,
        "question": "Jednym ze sposob\u00f3w utrudnienia niepowo\u0142anym osobom dost\u0119pu do sieci bezprzewodowej jest",
        "imageLoc": "",
        "answers": [
            "A. zmiana kana\u0142u nadawania sygna\u0142u.",
            "B. zmiana standardu szyfrowania z WPA na WEP.",
            "C. wy\u0142\u0105czenie rozg\u0142aszania identyfikatora sieci.",
            "D. wy\u0142\u0105czenie szyfrowania."
        ],
        "goodAnswer": "C. wy\u0142\u0105czenie rozg\u0142aszania identyfikatora sieci."
    },
    {
        "id": 365,
        "question": "Kt\u00f3ra funkcja prze\u0142\u0105cznika zarz\u0105dzalnego umo\u017cliwia \u0142\u0105czenie prze\u0142\u0105cznik\u00f3w r\u00f3wnocze\u015bnie kilkoma po\u0142\u0105czeniami fizycznymi w jedno po\u0142\u0105czenie logiczne w celu uzyskania wi\u0119kszej przepustowo\u015bci \u0142\u0105cza?",
        "imageLoc": "",
        "answers": [
            "A. Zarz\u0105dzanie pasmem",
            "B. Port mirroring",
            "C. Port trunk",
            "D. Agregacja \u0142\u0105czy"
        ],
        "goodAnswer": "D. Agregacja \u0142\u0105czy"
    },
    {
        "id": 366,
        "question": "Kt\u00f3ry protok\u00f3\u0142 jest wykorzystywany przez polecenie ping?",
        "imageLoc": "",
        "answers": [
            "A. ICMP",
            "B. FTP",
            "C. SMTP",
            "D. IPX"
        ],
        "goodAnswer": "A. ICMP"
    },
    {
        "id": 367,
        "question": "Funkcj\u0105 serwera FTP jest",
        "imageLoc": "",
        "answers": [
            "A. zarz\u0105dzanie kontami poczty",
            "B. udost\u0119pnianie plik\u00f3w",
            "C. synchronizacja czasu",
            "D. monitoring sieci"
        ],
        "goodAnswer": "B. udost\u0119pnianie plik\u00f3w"
    },
    {
        "id": 368,
        "question": "Wska\u017c sygna\u0142 oznaczaj\u0105cy b\u0142\u0105d karty graficznej komputera wyposa\u017conego w BIOS POST firmy AWARD",
        "imageLoc": "",
        "answers": [
            "A. 1 d\u0142ugi, 5 kr\u00f3tkich",
            "B. 1 d\u0142ugi, 2 kr\u00f3tkie",
            "C. 1 d\u0142ugi, 5 kr\u00f3tkich",
            "D. 1 d\u0142ugi, 1 kr\u00f3tki"
        ],
        "goodAnswer": "B. 1 d\u0142ugi, 2 kr\u00f3tkie"
    },
    {
        "id": 369,
        "question": "Na rysunku przedstawiono konfiguracj\u0119 urz\u0105dzenia, z kt\u00f3rej wynika, \u017ce",
        "imageLoc": require("../assets/img/1833.png"),
        "answers": [
            "A. utworzono trzy nowe VLAN-y: ID1, ID13, ID48",
            "B. VLAN z ID48 jest skonfigurowany jako zarz\u0105dzalny",
            "C. utworzono dwa nowe VLAN-y: ID13, ID48",
            "D. do VLAN z ID48 przypisano wszystkie porty"
        ],
        "goodAnswer": "C. utworzono dwa nowe VLAN-y: ID13, ID48"
    },
    {
        "id": 370,
        "question": "Polecenie md w wierszu polece\u0144 systemu Windows s\u0142u\u017cy do",
        "imageLoc": "",
        "answers": [
            "A. tworzenia katalogu",
            "B. przej\u015bcia do katalogu nadrz\u0119dnego",
            "C. zmiany nazwy pliku",
            "D. tworzenia pliku"
        ],
        "goodAnswer": "A. tworzenia katalogu"
    },
    {
        "id": 371,
        "question": "Jak nazywany jest proces dok\u0142adania do danych z warstwy aplikacji informacji zwi\u0105zanych z protoko\u0142ami dzia\u0142aj\u0105cymi na poszczeg\u00f3lnych warstwach modelu sieciowego?",
        "imageLoc": "",
        "answers": [
            "A. Multipleksacja.",
            "B. Segmentacja.",
            "C. Enkapsulacja.",
            "D. Dekodowanie."
        ],
        "goodAnswer": "C. Enkapsulacja."
    },
    {
        "id": 372,
        "question": "Kt\u00f3ry z protoko\u0142\u00f3w wykorzystuje porty 20 i 21?",
        "imageLoc": "",
        "answers": [
            "A. Telnet",
            "B. FTP",
            "C. DHCP",
            "D. WWW"
        ],
        "goodAnswer": "B. FTP"
    },
    {
        "id": 373,
        "question": "Dopuszczalny promie\u0144 zgi\u0119cia podczas instalacji kabla U/UTP kat.5E wynosi",
        "imageLoc": "",
        "answers": [
            "A. osiem \u015brednic kabla",
            "B. sze\u015b\u0107 \u015brednic kabla",
            "C. cztery \u015brednice kabla",
            "D. dwie \u015brednice kabla"
        ],
        "goodAnswer": "A. osiem \u015brednic kabla"
    },
    {
        "id": 374,
        "question": "Kt\u00f3rego zadania NIE realizuj\u0105 serwery plik\u00f3w?",
        "imageLoc": "",
        "answers": [
            "A. Odczytu i zapisu danych na dyskach twardych",
            "B. Wymiany danych pomi\u0119dzy u\u017cytkownikami sieci",
            "C. Zarz\u0105dzania bazami danych",
            "D. Udost\u0119pniania plik\u00f3w w Internecie"
        ],
        "goodAnswer": "C. Zarz\u0105dzania bazami danych"
    },
    {
        "id": 375,
        "question": "Na rysunku z\u0142\u0105cze monitora oznaczone ramk\u0105 czerwon\u0105, b\u0119dzie wsp\u00f3\u0142pracowa\u0142o z p\u0142yt\u0105 g\u0142\u00f3wn\u0105 wyposa\u017con\u0105 w interfejs",
        "imageLoc": require("../assets/img/703.png"),
        "answers": [
            "A. DVI",
            "B. HDMI",
            "C. D-SUB",
            "D. DisplayPort"
        ],
        "goodAnswer": "D. DisplayPort"
    },
    {
        "id": 376,
        "question": "Aby profil sta\u0142 si\u0119 obowi\u0105zkowym, nale\u017cy zmieni\u0107 rozszerzenie pliku ntuser.datna",
        "imageLoc": require("../assets/img/1840.png"),
        "answers": [
            "A. ntuser.sys",
            "B. ntuser.man",
            "C. $ntuser.exe",
            "D. $ntuser.bat"
        ],
        "goodAnswer": "B. ntuser.man"
    },
    {
        "id": 377,
        "question": "Udost\u0119pnianie linuksowych us\u0142ug drukowania oraz serwera plik\u00f3w stacjom roboczym Windows, OS X, Linux umo\u017cliwia serwer",
        "imageLoc": "",
        "answers": [
            "A. SQUID",
            "B. SAMBA",
            "C. APACHE",
            "D. POSTFIX"
        ],
        "goodAnswer": "B. SAMBA"
    },
    {
        "id": 378,
        "question": "Aby w systemie Windows wykona\u0107 \u015bledzenie trasy pakiet\u00f3w do serwera strony internetowej, nale\u017cy wykorzysta\u0107 polecenie",
        "imageLoc": "",
        "answers": [
            "A. ping",
            "B. iproute",
            "C. tracert",
            "D. netstat"
        ],
        "goodAnswer": "C. tracert"
    },
    {
        "id": 379,
        "question": "fps (ang. frames per second) bezpo\u015brednio odnosi si\u0119 do",
        "imageLoc": "",
        "answers": [
            "A. p\u0142ynno\u015bci wy\u015bwietlania ruchomych obraz\u00f3w",
            "B. efektywno\u015bci przep\u0142ywu informacji na magistrali systemowej",
            "C. pr\u0119dko\u015bci przesy\u0142ania danych do dysku w standardzie SATA",
            "D. wydajno\u015bci uk\u0142ad\u00f3w pami\u0119ci RAM"
        ],
        "goodAnswer": "A. p\u0142ynno\u015bci wy\u015bwietlania ruchomych obraz\u00f3w"
    },
    {
        "id": 380,
        "question": "Kt\u00f3re pole jest zawarte w nag\u0142\u00f3wku protoko\u0142u UDP?",
        "imageLoc": "",
        "answers": [
            "A. Wska\u017anik pilno\u015bci",
            "B. Numer sekwencyjny",
            "C. Numer potwierdzenia",
            "D. Suma kontrolna"
        ],
        "goodAnswer": "D. Suma kontrolna"
    },
    {
        "id": 381,
        "question": "Moc zasilacza wynosi 450 W, czyli",
        "imageLoc": "",
        "answers": [
            "A. 0,045 hW",
            "B. 0,45 kW",
            "C. 4,5 MW",
            "D. 45 GW"
        ],
        "goodAnswer": "B. 0,45 kW"
    },
    {
        "id": 382,
        "question": "Wpisuj\u0105c w przegl\u0105darce internetowej adres www.egzamin.pl u\u017cytkownik nie ma dost\u0119pu do strony WWW, natomiast wpisanie adresu 211.0.12.41 pozwala otworzy\u0107 t\u0119 stron\u0119. Przyczyn\u0105 tego problemu jest brak skonfigurowanego serwera",
        "imageLoc": "",
        "answers": [
            "A. SQL",
            "B. DNS",
            "C. WWW",
            "D. DHCP"
        ],
        "goodAnswer": "B. DNS"
    },
    {
        "id": 383,
        "question": "Do pod\u0142\u0105czenia (zaszycia) kabla w module Keystone nale\u017cy wykorzysta\u0107",
        "imageLoc": "",
        "answers": [
            "A. narz\u0119dzie uderzeniowe.",
            "B. bit imbusowy.",
            "C. prask\u0119 r\u0119czn\u0105.",
            "D. wkr\u0119tak typu Torx."
        ],
        "goodAnswer": "A. narz\u0119dzie uderzeniowe."
    },
    {
        "id": 384,
        "question": "Na urz\u0105dzeniu zasilanym pr\u0105dem sta\u0142ym znajduje si\u0119 przedstawione oznaczenie. Wynika z niego, \u017ce urz\u0105dzenie pobiera moc oko\u0142o",
        "imageLoc": require("../assets/img/1765.png"),
        "answers": [
            "A. 7,5 W",
            "B. 18,75 W",
            "C. 11 W",
            "D. 2,5 W"
        ],
        "goodAnswer": "B. 18,75 W"
    },
    {
        "id": 385,
        "question": "Wielko\u015b\u0107 plamki monitora LCD jest r\u00f3wna",
        "imageLoc": "",
        "answers": [
            "A. wielko\u015bci jednego piksela wy\u015bwietlanego na ekranie",
            "B. odleg\u0142o\u015bci od pocz\u0105tku jednego do pocz\u0105tku nast\u0119pnego piksela",
            "C. wielko\u015bci obszaru na kt\u00f3rym wy\u015bwietla si\u0119 1024 pikseli",
            "D. wielko\u015bci obszaru, na kt\u00f3rym mo\u017cna wy\u015bwietli\u0107 wszystkie kolory obs\u0142ugiwane przez monitor"
        ],
        "goodAnswer": "B. odleg\u0142o\u015bci od pocz\u0105tku jednego do pocz\u0105tku nast\u0119pnego piksela"
    },
    {
        "id": 386,
        "question": "U\u017cytkownik systemu Windows otrzymuje komunikaty o zbyt ma\u0142ej pami\u0119ci wirtualnej. Problem ten mo\u017cna rozwi\u0105za\u0107 przez",
        "imageLoc": "",
        "answers": [
            "A. zwi\u0119kszenie rozmiaru pliku virtualfile.sys",
            "B. zamontowanie dodatkowego dysku",
            "C. zwi\u0119kszenie pami\u0119ci RAM",
            "D. zamontowanie dodatkowej pami\u0119ci cache procesora"
        ],
        "goodAnswer": "C. zwi\u0119kszenie pami\u0119ci RAM"
    },
    {
        "id": 387,
        "question": "Kt\u00f3re polecenie diagnostyczne nale\u017cy zastosowa\u0107 do wy\u015bwietlania informacji o tym, czy miejsce docelowe odpowiada i po jakim czasie zosta\u0142a odebrana odpowied\u017a?",
        "imageLoc": "",
        "answers": [
            "A. route",
            "B. ping",
            "C. nbtstat",
            "D. ipconfig"
        ],
        "goodAnswer": "B. ping"
    },
    {
        "id": 388,
        "question": "W zasadach hase\u0142 w systemie Windows Server jest w\u0142\u0105czona opcja has\u0142o musi spe\u0142nia\u0107 wymagania co do z\u0142o\u017cono\u015bci. Z co najmniej ilu znak\u00f3w musi si\u0119 sk\u0142ada\u0107 has\u0142o u\u017cytkownika?",
        "imageLoc": "",
        "answers": [
            "A. 12 znak\u00f3w",
            "B. 6 znak\u00f3w",
            "C. 5 znak\u00f3w",
            "D. 10 znak\u00f3w"
        ],
        "goodAnswer": "B. 6 znak\u00f3w"
    },
    {
        "id": 389,
        "question": "Jaki rodzaj tablicy partycji nale\u017cy wybra\u0107, aby utworzy\u0107 na dysku twardym partycj\u0119 o wielko\u015bci 3TB?",
        "imageLoc": "",
        "answers": [
            "A. LBA",
            "B. GPT",
            "C. DRM",
            "D. MBR"
        ],
        "goodAnswer": "B. GPT"
    },
    {
        "id": 390,
        "question": "W systemie Windows ustawienia bie\u017c\u0105cego u\u017cytkownika komputera zapisane s\u0105 w ga\u0142\u0119zi rejestru o skr\u00f3conej nazwie:",
        "imageLoc": "",
        "answers": [
            "A. HKLM",
            "B. HKCC",
            "C. HKCU",
            "D. HKCR"
        ],
        "goodAnswer": "C. HKCU"
    },
    {
        "id": 391,
        "question": "Standard IEEE 802.11 definiuje sieci",
        "imageLoc": "",
        "answers": [
            "A. Bezprzewodowe LAN",
            "B. Gigabit Ethernet",
            "C. \u015awiat\u0142owodowe LAN",
            "D. Fast Ethernet"
        ],
        "goodAnswer": "A. Bezprzewodowe LAN"
    },
    {
        "id": 392,
        "question": "Na rysunku przedstawiono gniazdo",
        "imageLoc": require("../assets/img/254.png"),
        "answers": [
            "A. DVI",
            "B. HDMI",
            "C. FIRE WIRE",
            "D. D-SUB"
        ],
        "goodAnswer": "D. D-SUB"
    },
    {
        "id": 393,
        "question": "Element p\u0142yty g\u0142\u00f3wnej odpowiedzialny za wymian\u0119 danych mi\u0119dzy mikroprocesorem a pami\u0119ci\u0105 operacyjn\u0105 RAM oraz magistral\u0105 karty graficznej jest na rysunku oznaczony numerem",
        "imageLoc": require("../assets/img/779.png"),
        "answers": [
            "A. 3",
            "B. 6",
            "C. 4",
            "D. 5"
        ],
        "goodAnswer": "B. 6"
    },
    {
        "id": 394,
        "question": "Umieszczany na urz\u0105dzeniach symbol, b\u0119d\u0105cy certyfikatem zgodno\u015bci urz\u0105dze\u0144 pod wzgl\u0119dem emisji promieniowania, ergonomii, energooszcz\u0119dno\u015bci i ekologii, przedstawiono na rysunku",
        "imageLoc": require("../assets/img/456.png"),
        "answers": [
            "A. A",
            "B. B",
            "C. C",
            "D. D"
        ],
        "goodAnswer": "A. A"
    },
    {
        "id": 395,
        "question": "Kt\u00f3re porty nale\u017cy odblokowa\u0107 w zaporze sieciowej komputera, aby mo\u017cna by\u0142o korzysta\u0107 z zainstalowanej us\u0142ugi FTP?",
        "imageLoc": "",
        "answers": [
            "A. 80 i 443",
            "B. 20 i 21",
            "C. 25 i 110",
            "D. 53 i 137"
        ],
        "goodAnswer": "B. 20 i 21"
    },
    {
        "id": 396,
        "question": "Do przywracania struktury kluczy rejestru z kopii zapasowej w systemie Windows stosowane jest polecenie",
        "imageLoc": "",
        "answers": [
            "A. reg import",
            "B. reg add",
            "C. reg restore",
            "D. reg load"
        ],
        "goodAnswer": "C. reg restore"
    },
    {
        "id": 397,
        "question": "Kt\u00f3re medium transmisyjne sieci LAN zaleca si\u0119 do zastosowania w zabytkowych budynkach?",
        "imageLoc": "",
        "answers": [
            "A. \u015awiat\u0142ow\u00f3d",
            "B. Fale radiowe",
            "C. Kabel koncentryczny",
            "D. Kabel typu skr\u0119tka"
        ],
        "goodAnswer": "B. Fale radiowe"
    },
    {
        "id": 398,
        "question": "Jaki zakres adres\u00f3w obejmuj\u0105 adresy klasy C?",
        "imageLoc": "",
        "answers": [
            "A. 192.0.0.0 - 223.255.255.255",
            "B. 128.0.0.1 - 191.255.255.254",
            "C. 1.0.0.1 - 126.255.255.254",
            "D. 224.0.0.1 - 239.255.255.0"
        ],
        "goodAnswer": "A. 192.0.0.0 - 223.255.255.255"
    },
    {
        "id": 399,
        "question": "Pliki, kt\u00f3re znajduj\u0105 si\u0119 w koszu, mo\u017cna odzyska\u0107 poprzez zastosowanie polecenia",
        "imageLoc": "",
        "answers": [
            "A. Cofnij",
            "B. Pon\u00f3w",
            "C. Przywr\u00f3\u0107",
            "D. Wr\u00f3\u0107"
        ],
        "goodAnswer": "C. Przywr\u00f3\u0107"
    },
    {
        "id": 400,
        "question": "Przedstawiony listing zawiera polecenia umo\u017cliwiaj\u0105ce",
        "imageLoc": require("../assets/img/2094.png"),
        "answers": [
            "A. zmian\u0119 ustawienia pr\u0119dko\u015bci dla portu 0/1 na fastethernet",
            "B. ustawienie nazwy fastEthernet dla pierwszych dziesi\u0119ciu port\u00f3w prze\u0142\u0105cznika",
            "C. konfiguracj\u0119 wirtualnej sieci lokalnej o nazwie vlan 10 w prze\u0142\u0105czniku",
            "D. usuni\u0119cie port\u00f3w 0 i 1 prze\u0142\u0105cznika z sieci vlan"
        ],
        "goodAnswer": "C. konfiguracj\u0119 wirtualnej sieci lokalnej o nazwie vlan 10 w prze\u0142\u0105czniku"
    },
    {
        "id": 401,
        "question": "Program typu recovery, w warunkach domowych, pozwala na odzyskanie danych z dysku twardego w przypadku",
        "imageLoc": "",
        "answers": [
            "A. uszkodzenia silnika dysku",
            "B. uszkodzenia elektroniki dysku",
            "C. przypadkowego usuni\u0119cia danych",
            "D. zalania dysku"
        ],
        "goodAnswer": "C. przypadkowego usuni\u0119cia danych"
    },
    {
        "id": 402,
        "question": "Bezprzewodow\u0105 transmisj\u0119 danych zapewnia standard, kt\u00f3rego elementem jest interfejs",
        "imageLoc": "",
        "answers": [
            "A. LFH60",
            "B. HDMI",
            "C. DVI",
            "D. IrDA"
        ],
        "goodAnswer": "D. IrDA"
    },
    {
        "id": 403,
        "question": "Przedstawiony komunikat jest wynikiem dzia\u0142ania polecenia",
        "imageLoc": require("../assets/img/830.png"),
        "answers": [
            "A. path C:Windows",
            "B. icacls C:Windows",
            "C. attrib C:Windows",
            "D. subst C:Windows"
        ],
        "goodAnswer": "B. icacls C:Windows"
    },
    {
        "id": 404,
        "question": "Kt\u00f3ry z adres\u00f3w jest adresem klasy B?",
        "imageLoc": "",
        "answers": [
            "A. 224.0.0.1",
            "B. 192.168.0.1",
            "C. 191.168.0.1",
            "D. 10.0.0.1"
        ],
        "goodAnswer": "C. 191.168.0.1"
    },
    {
        "id": 405,
        "question": "Programem, kt\u00f3ry dostarcza najwi\u0119cej informacji diagnostycznych o procesorze CPU, jest",
        "imageLoc": "",
        "answers": [
            "A. HWiNFO",
            "B. Memtest86+",
            "C. HD Tune",
            "D. GPU-Z"
        ],
        "goodAnswer": "A. HWiNFO"
    },
    {
        "id": 406,
        "question": "Kt\u00f3ry adres IPv4 jest stosowany w celu sprawdzenia stosu protoko\u0142\u00f3w TCP/IP wewn\u0105trz jednego hosta?",
        "imageLoc": "",
        "answers": [
            "A. 224.0.0.9",
            "B. 1.1.1.1",
            "C. 128.0.0.1",
            "D. 127.0.0.1"
        ],
        "goodAnswer": "D. 127.0.0.1"
    },
    {
        "id": 407,
        "question": "Po\u0142\u0105czenia typu punkt-punkt, poprzez publiczn\u0105 infrastruktur\u0119 telekomunikacyjn\u0105, oznacza si\u0119 skr\u00f3tem",
        "imageLoc": "",
        "answers": [
            "A. VLAN",
            "B. PAN",
            "C. VPN",
            "D. WLAN"
        ],
        "goodAnswer": "C. VPN"
    },
    {
        "id": 408,
        "question": "Jaki b\u0119dzie koszt brutto materia\u0142\u00f3w niezb\u0119dnych do wykonania sieci lokalnej dla 6 stanowisk komputerowych, je\u017celi do wykonania sieci potrzeba 100 m kabla UTP kat. 5e i 20 m kana\u0142u instalacyjnego? Ceny element\u00f3w sieci zestawiono w tabeli",
        "imageLoc": require("../assets/img/542.png"),
        "answers": [
            "A. 290,00 z\u0142",
            "B. 160,00 z\u0142",
            "C. 320,00 z\u0142",
            "D. 360,00 z\u0142"
        ],
        "goodAnswer": "A. 290,00 z\u0142"
    },
    {
        "id": 409,
        "question": "W zestawie komputerowym o parametrach przedstawionych w tabeli nale\u017cy wymieni\u0107 kart\u0119 graficzn\u0105 na kart\u0119 now\u0105, wskazan\u0105 w ramce. W zwi\u0105zku z tym modernizacja tego komputera wymaga r\u00f3wnie\u017c wymiany",
        "imageLoc": require("../assets/img/1846.png"),
        "answers": [
            "A. p\u0142yty g\u0142\u00f3wnej",
            "B. karty sieciowej",
            "C. procesora",
            "D. zasilacza"
        ],
        "goodAnswer": "D. zasilacza"
    },
    {
        "id": 410,
        "question": "Protoko\u0142em kontrolnym rodziny TCP/IP, kt\u00f3rego rol\u0105 jest mi\u0119dzy innymi wykrywanie awarii urz\u0105dze\u0144 sieciowych, jest",
        "imageLoc": "",
        "answers": [
            "A. SMTP",
            "B. ICMP",
            "C. FDDI",
            "D. IMAP"
        ],
        "goodAnswer": "B. ICMP"
    },
    {
        "id": 411,
        "question": "Zastosowanie kt\u00f3rego urz\u0105dzenia mo\u017ce by\u0107 przyczyn\u0105 zwi\u0119kszenia liczby kolizji pakiet\u00f3w w sieci?",
        "imageLoc": "",
        "answers": [
            "A. Prze\u0142\u0105cznika",
            "B. Koncentratora",
            "C. Mostu",
            "D. Rutera"
        ],
        "goodAnswer": "B. Koncentratora"
    },
    {
        "id": 412,
        "question": "Dla danego u\u017cytkownika w systemie Linux polecenie usermod -s pozwala na",
        "imageLoc": "",
        "answers": [
            "A. zablokowanie jego konta",
            "B. zmian\u0119 jego katalogu domowego",
            "C. przypisanie go do nowej grupy",
            "D. zmian\u0119 jego pow\u0142oki systemowe"
        ],
        "goodAnswer": "D. zmian\u0119 jego pow\u0142oki systemowe"
    },
    {
        "id": 413,
        "question": "Do sprawdzenia adres\u00f3w MAC komputer\u00f3w pod\u0142\u0105czonych do prze\u0142\u0105cznika, mo\u017cna u\u017cy\u0107 polecenia",
        "imageLoc": "",
        "answers": [
            "A. show mac address-table",
            "B. ip http serwer",
            "C. clear mac address-table",
            "D. ip http port"
        ],
        "goodAnswer": "A. show mac address-table"
    },
    {
        "id": 414,
        "question": "Niekorzystn\u0105 cech\u0105 macierzy RAID 0 jest",
        "imageLoc": "",
        "answers": [
            "A. brak odporno\u015bci na awari\u0119 cho\u0107by jednego dysku",
            "B. zmniejszenie szybko\u015bci zapisu/odczytu w por\u00f3wnaniu z pojedynczym dyskiem",
            "C. replikacja danych na n-dyskach",
            "D. konieczno\u015b\u0107 posiadania dodatkowego dysku zapisuj\u0105cego sumy kontrolne"
        ],
        "goodAnswer": "A. brak odporno\u015bci na awari\u0119 cho\u0107by jednego dysku"
    },
    {
        "id": 415,
        "question": "Protok\u00f3\u0142 odpowiedzialny za przesy\u0142anie dokument\u00f3w hipertekstowych to",
        "imageLoc": "",
        "answers": [
            "A. POP3",
            "B. SMTP",
            "C. FTP",
            "D. HTTP"
        ],
        "goodAnswer": "D. HTTP"
    },
    {
        "id": 416,
        "question": "Umowa, na mocy kt\u00f3rej u\u017cytkownik ma mi\u0119dzy innymi wgl\u0105d do kodu \u017ar\u00f3d\u0142owego oprogramowania w celu jego analizy oraz udoskonalania, to licencja",
        "imageLoc": "",
        "answers": [
            "A. OLP",
            "B. MOLP",
            "C. GNU GPL",
            "D. OEM"
        ],
        "goodAnswer": "C. GNU GPL"
    },
    {
        "id": 417,
        "question": "Kt\u00f3re urz\u0105dzenie przedstawia rysunek?",
        "imageLoc": require("../assets/img/1209.png"),
        "answers": [
            "A. Access Point",
            "B. Switch",
            "C. Bramka VoIP",
            "D. Hub"
        ],
        "goodAnswer": "A. Access Point"
    },
    {
        "id": 418,
        "question": "Na rysunku przedstawiono konfiguracj\u0119 karty sieciowej, kt\u00f3rej adres MAC ma warto\u015b\u0107",
        "imageLoc": require("../assets/img/1590.png"),
        "answers": [
            "A. FE80:E890:BE2B:4C6C:5AA9",
            "B. FEC0:0:0:FFFF::2",
            "C. 0A-00-27-00-00-07",
            "D. 192.168.56.1"
        ],
        "goodAnswer": "C. 0A-00-27-00-00-07"
    },
    {
        "id": 419,
        "question": "Kt\u00f3ry z port\u00f3w panelu tylnego p\u0142yty g\u0142\u00f3wnej jest oznaczany w dokumentacji jako port standardu RS232C?",
        "imageLoc": "",
        "answers": [
            "A. LPT",
            "B. COM",
            "C. PS/2",
            "D. USB"
        ],
        "goodAnswer": "B. COM"
    },
    {
        "id": 420,
        "question": "W systemie operacyjnym Fedora katalogi domowe u\u017cytkownik\u00f3w umieszczone s\u0105 w katalogu",
        "imageLoc": "",
        "answers": [
            "A. /users",
            "B. /user",
            "C. /home",
            "D. /bin"
        ],
        "goodAnswer": "C. /home"
    },
    {
        "id": 421,
        "question": "Kt\u00f3ry rodzaj macierzy dyskowych oferuje tzw. mirroring dysk\u00f3w?",
        "imageLoc": "",
        "answers": [
            "A. RAID-1",
            "B. RAID-3",
            "C. RAID-5",
            "D. RAID-0"
        ],
        "goodAnswer": "A. RAID-1"
    },
    {
        "id": 422,
        "question": "Kt\u00f3ra czynno\u015b\u0107 zabezpieczy dane przesy\u0142ane w sieci przed dzia\u0142aniem sniffera?",
        "imageLoc": "",
        "answers": [
            "A. zmiana has\u0142a u\u017cytkownika",
            "B. szyfrowanie danych w sieci",
            "C. korzystanie z antydialera",
            "D. skanowanie programem antywirusowym"
        ],
        "goodAnswer": "B. szyfrowanie danych w sieci"
    },
    {
        "id": 423,
        "question": "W uk\u0142adzie SI jednostk\u0105 miary napi\u0119cia jest",
        "imageLoc": "",
        "answers": [
            "A. amper",
            "B. herc",
            "C. wat",
            "D. wolt"
        ],
        "goodAnswer": "D. wolt"
    },
    {
        "id": 424,
        "question": "Rysunek przedstawia panel konfiguracyjny bezprzewodowego urz\u0105dzenia dost\u0119powego, kt\u00f3ry umo\u017cliwia",
        "imageLoc": require("../assets/img/1020.png"),
        "answers": [
            "A. przypisanie maski podsieci",
            "B. przypisanie adres\u00f3w MAC kart sieciowych",
            "C. konfiguracj\u0119 serwera DHCP",
            "D. nadanie nazwy hosta"
        ],
        "goodAnswer": "C. konfiguracj\u0119 serwera DHCP"
    },
    {
        "id": 425,
        "question": "W systemie Windows uruchomienie us\u0142ugi dotycz\u0105cej wydajno\u015bci komputera realizowane jest za pomoc\u0105 polecenia",
        "imageLoc": "",
        "answers": [
            "A. perfmon.msc",
            "B. secpol.msc",
            "C. services.msc",
            "D. compmgmt.msc"
        ],
        "goodAnswer": "A. perfmon.msc"
    },
    {
        "id": 426,
        "question": "Aktualizacj\u0119 do wy\u017cszej wersji systemu Ubuntu Linux umo\u017cliwia polecenie",
        "imageLoc": "",
        "answers": [
            "A. install source update",
            "B. sudo apt-get dist-upgrade",
            "C. upgrade install dist high",
            "D. apt-get sudo su update"
        ],
        "goodAnswer": "B. sudo apt-get dist-upgrade"
    },
    {
        "id": 427,
        "question": "Aby poprawi\u0107 wydajno\u015b\u0107 komputera, mo\u017cna w nim zamontowa\u0107 procesor obs\u0142uguj\u0105cy technologi\u0119 Hyper-Threading, umo\u017cliwiaj\u0105c\u0105",
        "imageLoc": "",
        "answers": [
            "A. zwi\u0119kszenie szybko\u015bci pracy zegara",
            "B. wymian\u0119 danych pomi\u0119dzy procesorem a dyskiem twardym z pr\u0119dko\u015bci\u0105 pracy procesora",
            "C. automatyczn\u0105 regulacj\u0119 cz\u0119stotliwo\u015bci rdzeni procesora w zale\u017cno\u015bci od jego obci\u0105\u017cenia",
            "D. wykonywanie przez jeden rdze\u0144 procesora dw\u00f3ch niezale\u017cnych zada\u0144 jednocze\u015bnie"
        ],
        "goodAnswer": "D. wykonywanie przez jeden rdze\u0144 procesora dw\u00f3ch niezale\u017cnych zada\u0144 jednocze\u015bnie"
    },
    {
        "id": 428,
        "question": "Aby przeprowadzi\u0107 r\u0119czn\u0105 konfiguracj\u0119 interfejsu sieciowego w systemie LINUX nale\u017cy si\u0119 pos\u0142u\u017cy\u0107 poleceniem",
        "imageLoc": "",
        "answers": [
            "A. route add",
            "B. eth0",
            "C. ipconfig",
            "D. ifconfig"
        ],
        "goodAnswer": "D. ifconfig"
    },
    {
        "id": 429,
        "question": "Kt\u00f3ry z tryb\u00f3w nie jest dost\u0119pny dla narz\u0119dzia lupa w systemie Windows?",
        "imageLoc": "",
        "answers": [
            "A. Pe\u0142noekranowy",
            "B. Lupy",
            "C. P\u0142ynny",
            "D. Zadokowany"
        ],
        "goodAnswer": "C. P\u0142ynny"
    },
    {
        "id": 430,
        "question": "Liczba 110011(2) zapisana w systemie dziesi\u0119tnym ma posta\u0107",
        "imageLoc": "",
        "answers": [
            "A. 50",
            "B. 53",
            "C. 52",
            "D. 51"
        ],
        "goodAnswer": "D. 51"
    },
    {
        "id": 431,
        "question": "Wydaj\u0105c w wierszu polece\u0144 systemu Windows Server polecenie convert, mo\u017cna przeprowadzi\u0107",
        "imageLoc": "",
        "answers": [
            "A. zmian\u0119 systemu plik\u00f3w",
            "B. defragmentacj\u0119 dysku",
            "C. napraw\u0119 systemu plik\u00f3w",
            "D. napraw\u0119 logicznej struktury dysku"
        ],
        "goodAnswer": "A. zmian\u0119 systemu plik\u00f3w"
    },
    {
        "id": 432,
        "question": "Serwer Windows z zainstalowan\u0105 us\u0142ug\u0105 Active Directory nazywa si\u0119",
        "imageLoc": "",
        "answers": [
            "A. serwerem DHCP",
            "B. kontrolerem domeny",
            "C. serwerem plik\u00f3w",
            "D. serwerem WWW"
        ],
        "goodAnswer": "B. kontrolerem domeny"
    },
    {
        "id": 433,
        "question": "Kable \u015bwiat\u0142owodowe NIE S\u0104 powszechnie stosowane w lokalnych sieciach komputerowych z powodu",
        "imageLoc": "",
        "answers": [
            "A. ma\u0142ej odporno\u015bci na zak\u0142\u00f3cenia elektromagnetyczne",
            "B. du\u017cych strat sygna\u0142u transmisyjnego",
            "C. niskiej przepustowo\u015bci",
            "D. du\u017cych koszt\u00f3w element\u00f3w po\u015brednicz\u0105cych w transmisji"
        ],
        "goodAnswer": "D. du\u017cych koszt\u00f3w element\u00f3w po\u015brednicz\u0105cych w transmisji"
    },
    {
        "id": 434,
        "question": "Internetowy protok\u00f3\u0142 pocztowy, kt\u00f3ry pozwala na zarz\u0105dzanie wieloma folderami pocztowymi oraz pobieranie i operowanie na listach znajduj\u0105cych si\u0119 na zdalnym serwerze, to",
        "imageLoc": "",
        "answers": [
            "A. POP3",
            "B. IMAP",
            "C. TCP",
            "D. SMTP"
        ],
        "goodAnswer": "B. IMAP"
    },
    {
        "id": 435,
        "question": "Administrator chce udost\u0119pni\u0107 w sieci trzem u\u017cytkownikom nale\u017c\u0105cym do grupy Serwisanci tylko folder C:instrukcje. Kt\u00f3re z rozwi\u0105za\u0144 powinien zastosowa\u0107?",
        "imageLoc": "",
        "answers": [
            "A. Udost\u0119pni\u0107 grupie Wszyscy dysk C: i ograniczy\u0107 liczb\u0119 r\u00f3wnoczesnych po\u0142\u0105cze\u0144 do 3",
            "B. Udost\u0119pni\u0107 grupie Serwisanci dysk C: i nie ogranicza\u0107 liczby r\u00f3wnoczesnych po\u0142\u0105cze\u0144",
            "C. Udost\u0119pni\u0107 grupie Wszyscy folder C:instrukcje i ograniczy\u0107 liczb\u0119 r\u00f3wnoczesnych po\u0142\u0105cze\u0144 do 3",
            "D. Udost\u0119pni\u0107 grupie Serwisanci folder C:instrukcje i nie ogranicza\u0107 liczby r\u00f3wnoczesnych po\u0142\u0105cze\u0144"
        ],
        "goodAnswer": "D. Udost\u0119pni\u0107 grupie Serwisanci folder C:instrukcje i nie ogranicza\u0107 liczby r\u00f3wnoczesnych po\u0142\u0105cze\u0144"
    },
    {
        "id": 436,
        "question": "Jaka jest r\u00f3\u017cnica pomi\u0119dzy poleceniem ps a poleceniem top w systemie Linux?",
        "imageLoc": "",
        "answers": [
            "A. Polecenie ps nie pokazuje stopnia wykorzystania CPU, a polecenie top ma tak\u0105 funkcjonalno\u015b\u0107",
            "B. Polecenie top wy\u015bwietla aktualnie dzia\u0142aj\u0105ce w systemie procesy od\u015bwie\u017caj\u0105c na bie\u017c\u0105co informacje, a ps nie",
            "C. Polecenie ps pozwala na wy\u015bwietlenie uprawnie\u0144, z jakimi dzia\u0142a proces, a top nie pozwala",
            "D. Polecenie top umo\u017cliwia wy\u015bwietlenie PID procesu, a ps nie"
        ],
        "goodAnswer": "B. Polecenie top wy\u015bwietla aktualnie dzia\u0142aj\u0105ce w systemie procesy od\u015bwie\u017caj\u0105c na bie\u017c\u0105co informacje, a ps nie"
    },
    {
        "id": 437,
        "question": "Translacja adres\u00f3w sieciowych jest oznaczona skr\u00f3tem",
        "imageLoc": "",
        "answers": [
            "A. DMZ",
            "B. NAT",
            "C. IDS",
            "D. SPI"
        ],
        "goodAnswer": "B. NAT"
    },
    {
        "id": 438,
        "question": "Zadaniem us\u0142ugi DNS jest",
        "imageLoc": "",
        "answers": [
            "A. translacja nazw domenowych na adresy IP",
            "B. translacja adres\u00f3w IP na nazwy domenowe",
            "C. sprawdzanie poprawno\u015bci adres\u00f3w domenowych",
            "D. sprawdzenie poprawno\u015bci adres\u00f3w IP"
        ],
        "goodAnswer": "A. translacja nazw domenowych na adresy IP"
    },
    {
        "id": 439,
        "question": "Kt\u00f3re urz\u0105dzenie nale\u017cy zastosowa\u0107 by zwi\u0119kszy\u0107 zasi\u0119g sieci bezprzewodowej w budynku?",
        "imageLoc": "",
        "answers": [
            "A. Prze\u0142\u0105cznik zarz\u0105dzalny",
            "B. Modem bezprzewodowy",
            "C. Bezprzewodow\u0105 kart\u0119 sieciow\u0105",
            "D. Wzmacniacz sygna\u0142u"
        ],
        "goodAnswer": "D. Wzmacniacz sygna\u0142u"
    },
    {
        "id": 440,
        "question": "Najwi\u0119ksz\u0105 szybko\u015b\u0107 transmisji danych w sieci bezprzewodowej uzyska si\u0119 stosuj\u0105c urz\u0105dzenia standardu",
        "imageLoc": "",
        "answers": [
            "A. 802.11 a",
            "B. 802.11 n",
            "C. 802.11 b",
            "D. 802.11 g"
        ],
        "goodAnswer": "B. 802.11 n"
    },
    {
        "id": 441,
        "question": "Kt\u00f3re z\u0142\u0105cze na tylnym panelu komputera oznaczane jest przedstawionym symbolem graficznym?",
        "imageLoc": require("../assets/img/189.png"),
        "answers": [
            "A. USB",
            "B. PS/2",
            "C. HDMI",
            "D. 8P8C"
        ],
        "goodAnswer": "D. 8P8C"
    },
    {
        "id": 442,
        "question": "Zagro\u017ceniem dla bezpiecze\u0144stwa systemu operacyjnego, wymuszaj\u0105cym jego automatyczn\u0105 aktualizacj\u0119, s\u0105",
        "imageLoc": "",
        "answers": [
            "A. luki w oprogramowaniu systemowym",
            "B. b\u0142\u0119dne has\u0142a u\u017cytkownik\u00f3w z prawami administratora",
            "C. niew\u0142a\u015bciwie ustawione prawa do plik\u00f3w",
            "D. b\u0142\u0119dnie zainstalowane sterowniki urz\u0105dze\u0144"
        ],
        "goodAnswer": "A. luki w oprogramowaniu systemowym"
    },
    {
        "id": 443,
        "question": "Po uruchomieniu komputera pojawi\u0142 si\u0119 komunikat: Non-system disk or disk error. Replace and strike any key when ready. Przyczyn\u0105 mo\u017ce by\u0107",
        "imageLoc": "",
        "answers": [
            "A. skasowany BIOS komputera",
            "B. uszkodzony kontroler DMA",
            "C. dyskietka w\u0142o\u017cona do nap\u0119du",
            "D. brak pliku NTLDR"
        ],
        "goodAnswer": "C. dyskietka w\u0142o\u017cona do nap\u0119du"
    },
    {
        "id": 444,
        "question": "Tabela przedstawia parametry trzech dysk\u00f3w twardych standardu Ultra320 SCSI. Dyski te mog\u0105 pracowa\u0107 z maksymalnym transferem wewn\u0119trznym",
        "imageLoc": require("../assets/img/52.png"),
        "answers": [
            "A. 200MB/S",
            "B. 132 MB/s",
            "C. 320MB/S",
            "D. 320 GB/s"
        ],
        "goodAnswer": "B. 132 MB/s"
    },
    {
        "id": 445,
        "question": "Zamontowanie w komputerze przedstawionej karty umo\u017cliwi",
        "imageLoc": require("../assets/img/823.png"),
        "answers": [
            "A. bezprzewodowe pod\u0142\u0105czenie do sieci LAN za pomoc\u0105 interfejsu BNC",
            "B. rejestracj\u0119, przetwarzanie oraz odtwarzanie obrazu telewizyjnego",
            "C. pod\u0142\u0105czenie dodatkowego urz\u0105dzenia peryferyjnego na przyk\u0142ad skanera lub plotera",
            "D. zwi\u0119kszenie przepustowo\u015bci magistrali komunikacyjnej komputera"
        ],
        "goodAnswer": "B. rejestracj\u0119, przetwarzanie oraz odtwarzanie obrazu telewizyjnego"
    },
    {
        "id": 446,
        "question": "Program komputerowy s\u0142u\u017c\u0105cy do zarz\u0105dzania struktur\u0105 plik\u00f3w i katalog\u00f3w, to:",
        "imageLoc": "",
        "answers": [
            "A. mened\u017cer plik\u00f3w",
            "B. edytor tekstowy",
            "C. mened\u017cer urz\u0105dze\u0144",
            "D. system plik\u00f3w"
        ],
        "goodAnswer": "A. mened\u017cer plik\u00f3w"
    },
    {
        "id": 447,
        "question": "Symbolem literowym P oznacza si\u0119",
        "imageLoc": "",
        "answers": [
            "A. indukcyjno\u015b\u0107.",
            "B. rezystancj\u0119.",
            "C. moc.",
            "D. cz\u0119stotliwo\u015b\u0107."
        ],
        "goodAnswer": "C. moc."
    },
    {
        "id": 448,
        "question": "W dokumentacji systemu operacyjnego Windows XP opisane s\u0105 pliki z rozszerzeniem .dll. Rozszerzenie to dotyczy pliku",
        "imageLoc": "",
        "answers": [
            "A. biblioteki",
            "B. inicjalizacyjnego",
            "C. uruchamialnego",
            "D. dziennika zdarze\u0144"
        ],
        "goodAnswer": "A. biblioteki"
    },
    {
        "id": 449,
        "question": "Informacje o kontach u\u017cytkownik\u00f3w w systemie LINUX przechowywane s\u0105 w pliku",
        "imageLoc": "",
        "answers": [
            "A. /etc/shadow",
            "B. /etc/passwd",
            "C. /etc/group",
            "D. /etc/shells"
        ],
        "goodAnswer": "B. /etc/passwd"
    },
    {
        "id": 450,
        "question": "Kamera cyfrowa przy zgrywaniu filmu transmituje na dysk 220 MB na minut\u0119. Na podstawie diagramu wybierz interfejs o najmniejszej szybko\u015bci transferu zapewniaj\u0105cy warunki takiej transmisji",
        "imageLoc": require("../assets/img/183.png"),
        "answers": [
            "A. USB 1",
            "B. USB 2",
            "C. 1394a",
            "D. 1394b"
        ],
        "goodAnswer": "C. 1394a"
    },
    {
        "id": 451,
        "question": "Przedstawione polecenia, uruchomione w interfejsie CLI rutera firmy CISCO, spowoduj\u0105",
        "imageLoc": require("../assets/img/1745.png"),
        "answers": [
            "A. ustawienie interfejsu zewn\u0119trznego o adresie 10.0.0.1/24 dla technologii NAT",
            "B. ustawienie interfejsu wewn\u0119trznego o adresie 10.0.0.1/24 dla technologii NAT",
            "C. okre\u015blenie puli adres\u00f3w wewn\u0119trznych 10.0.0.1 \u00f7 255.255.255.0",
            "D. dopuszczenie ruchu pochodz\u0105cego z sieci o adresie 10.0.0.1"
        ],
        "goodAnswer": "B. ustawienie interfejsu wewn\u0119trznego o adresie 10.0.0.1/24 dla technologii NAT"
    },
    {
        "id": 452,
        "question": "Kt\u00f3ry protok\u00f3\u0142 NIE jest stosowany do konfiguracji wirtualnej sieci prywatnej?",
        "imageLoc": "",
        "answers": [
            "A. PPTP",
            "B. L2TP",
            "C. SSTP",
            "D. SNMP"
        ],
        "goodAnswer": "D. SNMP"
    },
    {
        "id": 453,
        "question": "Protoko\u0142em sieciowym definiuj\u0105cym mechanizmy stosowane do zarz\u0105dzania urz\u0105dzeniami sieciowymi jest",
        "imageLoc": "",
        "answers": [
            "A. Simple Network Management Protocol (SNMP)",
            "B. Intenet Control Message Protocol (ICMP)",
            "C. Simple Mail Transfer Protocol (SMTP)",
            "D. Internet Group Management Protocol (IGMP)"
        ],
        "goodAnswer": "A. Simple Network Management Protocol (SNMP)"
    },
    {
        "id": 454,
        "question": "Oblicz koszt brutto kabla UTP Cat 6 u\u017cytego do po\u0142\u0105czenia 5 punkt\u00f3w abonenckich z punktem dystrybucyjnym, wiedz\u0105c, \u017ce \u015brednia d\u0142ugo\u015b\u0107 pomi\u0119dzy punktem abonenckim a punktem dystrybucyjnym wynosi 8 m oraz \u017ce cena brutto 1 m kabla wynosi 1 z\u0142. Przy obliczeniach nale\u017cy uwzgl\u0119dni\u0107 zapas 2m kabla na ka\u017cdy punkt abonencki.",
        "imageLoc": "",
        "answers": [
            "A. 40 z\u0142",
            "B. 50 z\u0142",
            "C. 32 z\u0142",
            "D. 45 z\u0142"
        ],
        "goodAnswer": "B. 50 z\u0142"
    },
    {
        "id": 455,
        "question": "Ramka z danymi wys\u0142anymi z komputera PC1 do serwera www znajduje si\u0119 pomi\u0119dzy ruterem R1 a ruterem R2 (punkt A). Kt\u00f3re adresy s\u0105 w niej zawarte?",
        "imageLoc": require("../assets/img/1480.png"),
        "answers": [
            "A. \u0179r\u00f3d\u0142owy adres IP komputera PC1, docelowy adres IP serwera, adres \u017ar\u00f3d\u0142owy MAC komputera PC1, adres docelowy MAC serwera",
            "B. \u0179r\u00f3d\u0142owy adres IP rutera R1, docelowy adres IP rutera R2, adres \u017ar\u00f3d\u0142owy MAC komputera PC1, adres docelowy MAC serwera",
            "C. \u0179r\u00f3d\u0142owy adres IP komputera PC1, docelowy adres IP serwera, adres \u017ar\u00f3d\u0142owy MAC rutera R1, adres docelowy MAC rutera R2",
            "D. \u0179r\u00f3d\u0142owy adres IP komputera PC1, docelowy adres rutera R2, adres \u017ar\u00f3d\u0142owy MAC komputera PC1, adres docelowy MAC serwera"
        ],
        "goodAnswer": "C. \u0179r\u00f3d\u0142owy adres IP komputera PC1, docelowy adres IP serwera, adres \u017ar\u00f3d\u0142owy MAC rutera R1, adres docelowy MAC rutera R2"
    },
    {
        "id": 456,
        "question": "Niskopoziomowe formatowanie dysku IDE HDD",
        "imageLoc": "",
        "answers": [
            "A. tworzy partycj\u0119 rozszerzon\u0105.",
            "B. jest wykonywane przez producenta dysku.",
            "C. tworzy partycj\u0119 podstawow\u0105.",
            "D. umieszcza program rozruchowy w MBR"
        ],
        "goodAnswer": "B. jest wykonywane przez producenta dysku."
    },
    {
        "id": 457,
        "question": "Koprocesor arytmetyczny, kt\u00f3rego rol\u0105 w mikroprocesorze jest dokonywanie oblicze\u0144 na liczbach zmiennoprzecinkowych zosta\u0142 na schemacie oznaczony cyfr\u0105",
        "imageLoc": require("../assets/img/387.png"),
        "answers": [
            "A. 3",
            "B. 2",
            "C. 1",
            "D. 4"
        ],
        "goodAnswer": "D. 4"
    },
    {
        "id": 458,
        "question": "System o\u015bwietlenia oparty o tr\u00f3jkolorowe diody LED wykorzystuj\u0105 skanery typu",
        "imageLoc": "",
        "answers": [
            "A. CMYK",
            "B. CMOS",
            "C. CIS",
            "D. CCD"
        ],
        "goodAnswer": "C. CIS"
    },
    {
        "id": 459,
        "question": "Do sprawdzania statystyk protoko\u0142\u00f3w TCP/IP oraz aktualnych po\u0142\u0105cze\u0144 sieciowych w systemach rodziny Windows jest stosowane polecenie",
        "imageLoc": "",
        "answers": [
            "A. route",
            "B. ping",
            "C. tracert",
            "D. netstat"
        ],
        "goodAnswer": "D. netstat"
    },
    {
        "id": 460,
        "question": "Aby usun\u0105\u0107 opisan\u0105 usterk\u0119, nale\u017cy",
        "imageLoc": require("../assets/img/947.png"),
        "answers": [
            "A. wy\u0142\u0105czy\u0107 system NetBIOS NWLink we w\u0142a\u015bciwo\u015bciach po\u0142\u0105cze\u0144 LAN komputer\u00f3w",
            "B. sprawdzi\u0107 w\u0142\u0105czenie PROXY i ewentualnie w\u0142\u0105czy\u0107",
            "C. zmieni\u0107 konfiguracje adres\u00f3w IP i/lub masek podsieci im odpowiadaj\u0105cych w taki spos\u00f3b, aby oba komputery znalaz\u0142y si\u0119 w tej samej podsieci",
            "D. wy\u0142\u0105czy\u0107 system NetBIOS przez TCP/IP w zaawansowanych ustawieniach TCP/IP kart sieciowych"
        ],
        "goodAnswer": "C. zmieni\u0107 konfiguracje adres\u00f3w IP i/lub masek podsieci im odpowiadaj\u0105cych w taki spos\u00f3b, aby oba komputery znalaz\u0142y si\u0119 w tej samej podsieci"
    },
    {
        "id": 461,
        "question": "W modelu RGB, w systemie szesnastkowym, kolor jest zapisany nast\u0119puj\u0105co: ABCDEF. Nat\u0119\u017cenie koloru niebieskiego w tym zapisie ma warto\u015b\u0107 dziesi\u0119tn\u0105",
        "imageLoc": "",
        "answers": [
            "A. 205",
            "B. 239",
            "C. 171",
            "D. 186"
        ],
        "goodAnswer": "B. 239"
    },
    {
        "id": 462,
        "question": "Do pomiaru warto\u015bci mocy pobieranej przez komputer nale\u017cy u\u017cy\u0107",
        "imageLoc": "",
        "answers": [
            "A. amperomierza",
            "B. woltomierza",
            "C. watomierza",
            "D. testera zasilaczy"
        ],
        "goodAnswer": "C. watomierza"
    },
    {
        "id": 463,
        "question": "Jednym z narz\u0119dzi zabezpieczaj\u0105cych system przed oprogramowaniem, kt\u00f3re bez wiedzy u\u017cytkownika pozyskuje i wysy\u0142a jego autorowi dane osobowe, numery kart p\u0142atniczych, informacje o adresach stron WWW odwiedzanych przez u\u017cytkownika, has\u0142a i u\u017cywane adresy mailowe, jest program",
        "imageLoc": "",
        "answers": [
            "A. Spyboot Search & Destroy",
            "B. FakeFlashTest",
            "C. HDTune",
            "D. Reboot Restore Rx"
        ],
        "goodAnswer": "A. Spyboot Search & Destroy"
    },
    {
        "id": 464,
        "question": "Us\u0142uga Windows XP Professional \"Mostek sieciowy\" pozwala na \u0142\u0105czenie ze sob\u0105",
        "imageLoc": "",
        "answers": [
            "A. klienta z serwerem",
            "B. segment\u00f3w sieci LAN",
            "C. roboczych stacji bezdyskowych",
            "D. dw\u00f3ch komputer\u00f3w"
        ],
        "goodAnswer": "B. segment\u00f3w sieci LAN"
    },
    {
        "id": 465,
        "question": "Na rysunku przedstawiono symbol graficzny",
        "imageLoc": require("../assets/img/1031.png"),
        "answers": [
            "A. koncentratora",
            "B. regeneratora",
            "C. mostu",
            "D. rutera"
        ],
        "goodAnswer": "D. rutera"
    },
    {
        "id": 466,
        "question": "Czynno\u015b\u0107 pokazana na rysunkach ilustruje mocowanie",
        "imageLoc": require("../assets/img/2016.png"),
        "answers": [
            "A. ta\u015bmy barwi\u0105cej w drukarce ig\u0142owej.",
            "B. b\u0119bna zintegrowanego z tonerem w drukarce laserowej.",
            "C. kartrid\u017ca w drukarce atramentowej.",
            "D. g\u0142owicy w drukarce rozetkowej."
        ],
        "goodAnswer": "B. b\u0119bna zintegrowanego z tonerem w drukarce laserowej."
    },
    {
        "id": 467,
        "question": "Co nale\u017cy wpisa\u0107 w miejscu kropek, aby w systemie Linux zwi\u0119kszy\u0107 domy\u015blny odst\u0119p czasowy mi\u0119dzy kolejnymi transmisjami pakiet\u00f3w przy u\u017cyciu polecenia ping?",
        "imageLoc": require("../assets/img/2083.png"),
        "answers": [
            "A. -i 3",
            "B. -s 75",
            "C. -a 81",
            "D. -c 9"
        ],
        "goodAnswer": "A. -i 3"
    },
    {
        "id": 468,
        "question": "Kt\u00f3ry poziom macierzy RAID zapisuje dane r\u00f3wnolegle na kilku dyskach jako jedno urz\u0105dzenie",
        "imageLoc": "",
        "answers": [
            "A. RAID 0",
            "B. RAID 1",
            "C. RAID 3",
            "D. RAID 2"
        ],
        "goodAnswer": "A. RAID 0"
    },
    {
        "id": 469,
        "question": "Aby uzupe\u0142ni\u0107 prawid\u0142ow\u0105 sk\u0142adni\u0119 prezentowanego polecenia, kt\u00f3re udost\u0119pnia folder Dane pod nazw\u0105 test, w miejscu kropek nale\u017cy wpisa\u0107 s\u0142owo",
        "imageLoc": require("../assets/img/1798.png"),
        "answers": [
            "A. view",
            "B. share",
            "C. connect",
            "D. use"
        ],
        "goodAnswer": "B. share"
    },
    {
        "id": 470,
        "question": "Po zainstalowaniu programu VNC, wykorzystywanego do podgl\u0105du pulpitu wybranego komputera, opr\u00f3cz numeru portu nale\u017cy poda\u0107 jego",
        "imageLoc": require("../assets/img/2147.png"),
        "answers": [
            "A. adres MAC.",
            "B. adres IP.",
            "C. bram\u0119 domy\u015bln\u0105.",
            "D. adres rozg\u0142oszeniowy."
        ],
        "goodAnswer": "B. adres IP."
    },
    {
        "id": 471,
        "question": "Instalowanie w systemie operacyjnym Windows Server us\u0142ugi Active Directory wymaga wcze\u015bniejszego zainstalowania i skonfigurowania serwera",
        "imageLoc": "",
        "answers": [
            "A. DNS",
            "B. DHCP",
            "C. WWW",
            "D. FTP"
        ],
        "goodAnswer": "A. DNS"
    },
    {
        "id": 472,
        "question": "Polecenie systemowe ipconfig umo\u017cliwia konfiguracj\u0119",
        "imageLoc": "",
        "answers": [
            "A. rejestru systemu",
            "B. interfejs\u00f3w sieciowych",
            "C. atrybut\u00f3w uprawnie\u0144 dost\u0119pu",
            "D. mapowania dysk\u00f3w sieciowych"
        ],
        "goodAnswer": "B. interfejs\u00f3w sieciowych"
    },
    {
        "id": 473,
        "question": "Kt\u00f3ry z wtyk\u00f3w nale\u017cy zamontowa\u0107 na przewodzie UTP Cat 5e, by pod\u0142\u0105czy\u0107 komputer do sieci?",
        "imageLoc": "",
        "answers": [
            "A. BNC",
            "B. RJ11",
            "C. RJ45",
            "D. MT-RJ"
        ],
        "goodAnswer": "C. RJ45"
    },
    {
        "id": 474,
        "question": "Komputer wyposa\u017cony w BIOS firmy Award wygenerowa\u0142 komunikat o tre\u015bci Primary/Secondary master/slave hard disk fail. Komunikat ten mo\u017ce oznacza\u0107 konieczno\u015b\u0107 wymiany",
        "imageLoc": "",
        "answers": [
            "A. pami\u0119ci operacyjnej.",
            "B. dysku twardego.",
            "C. klawiatury.",
            "D. karty graficznej."
        ],
        "goodAnswer": "B. dysku twardego."
    },
    {
        "id": 475,
        "question": "Na rysunku przedstawiono tylny panel stacji roboczej. Strza\u0142k\u0105 oznaczono port",
        "imageLoc": require("../assets/img/1808.png"),
        "answers": [
            "A. USB 3.0",
            "B. eSATA",
            "C. HDMI",
            "D. DisplayPort"
        ],
        "goodAnswer": "D. DisplayPort"
    },
    {
        "id": 476,
        "question": "Wska\u017c rysunek przedstawiaj\u0105cy symbol bramki logicznej NOT.",
        "imageLoc": require("../assets/img/2069.png"),
        "answers": [
            "A. A",
            "B. B",
            "C. C",
            "D. D"
        ],
        "goodAnswer": "C. C"
    },
    {
        "id": 477,
        "question": "Ile wynosi maksymalna szybko\u015b\u0107 transmisji danych w sieci lokalnej, w kt\u00f3rej do budowy okablowania strukturalnego zastosowano przew\u00f3d UTP kat.5e?",
        "imageLoc": "",
        "answers": [
            "A. 10 Gb/s",
            "B. 1 Gb/s",
            "C. 100 Mb/s",
            "D. 10 Mb/s"
        ],
        "goodAnswer": "B. 1 Gb/s"
    },
    {
        "id": 478,
        "question": "Narz\u0119dziem us\u0142ug katalogowych w systemach z rodziny Windows Server, s\u0142u\u017c\u0105cym do przekserowania komputer\u00f3w do jednostki organizacyjnej okre\u015blonej przez administratora, jest polecenie",
        "imageLoc": "",
        "answers": [
            "A. redirusr",
            "B. dcdiag",
            "C. dsrm",
            "D. redircmp"
        ],
        "goodAnswer": "D. redircmp"
    },
    {
        "id": 479,
        "question": "U\u017cytkownik zamierza zainstalowa\u0107 32-bitowy system operacyjny Windows 7. Ile minimalnie pami\u0119ci RAM musi posiada\u0107 komputer, aby by\u0142a mo\u017cliwa praca systemu w trybie graficznym ?",
        "imageLoc": "",
        "answers": [
            "A. 2 GB",
            "B. 512 MB",
            "C. 1 GB",
            "D. 256 MB"
        ],
        "goodAnswer": "C. 1 GB"
    },
    {
        "id": 480,
        "question": "Kt\u00f3ra us\u0142uga sieciowa standardowo korzysta z portu 53?",
        "imageLoc": "",
        "answers": [
            "A. POP3",
            "B. DNS",
            "C. HTTP",
            "D. FTP"
        ],
        "goodAnswer": "B. DNS"
    },
    {
        "id": 481,
        "question": "Plik ma rozmiar 2 KiB. Jest to",
        "imageLoc": "",
        "answers": [
            "A. 2048 bit\u00f3w",
            "B. 16384 bit\u00f3w",
            "C. 16000 bit\u00f3w",
            "D. 2000 bit\u00f3w"
        ],
        "goodAnswer": "B. 16384 bit\u00f3w"
    },
    {
        "id": 482,
        "question": "Kt\u00f3re polecenie w systemie operacyjnym Linux umo\u017cliwia przypisanie istniej\u0105cego konta u\u017cytkownika nowak do grupy technikum?",
        "imageLoc": "",
        "answers": [
            "A. useradd -g technikum nowak",
            "B. usergroup -g technikum nowak",
            "C. groups -g technikum nowak",
            "D. usermod -g technikum nowak"
        ],
        "goodAnswer": "D. usermod -g technikum nowak"
    },
    {
        "id": 483,
        "question": "Jaki jest adres rozg\u0142oszeniowy sieci o adresie IP 192.168.10.0/24?",
        "imageLoc": "",
        "answers": [
            "A. 192.168.10.0",
            "B. 192.168.0.255",
            "C. 192.168.0.0",
            "D. 192.168.10.255"
        ],
        "goodAnswer": "D. 192.168.10.255"
    },
    {
        "id": 484,
        "question": "Na p\u0142ycie g\u0142\u00f3wnej wyposa\u017conej w gniazdo przedstawione na zdj\u0119ciu mo\u017cna zainstalowa\u0107 procesor",
        "imageLoc": require("../assets/img/863.png"),
        "answers": [
            "A. Intel Xeon E3-1240V5, 3.9GHz, s-1151",
            "B. Intel i9-7940X, s-2066 3.10GHz 19.25MB",
            "C. AMD Sempron 2800+, 1600 MHz, s-754",
            "D. AMD FX-6300, s-AM3+, 3.5GHz, 14MB"
        ],
        "goodAnswer": "D. AMD FX-6300, s-AM3+, 3.5GHz, 14MB"
    },
    {
        "id": 485,
        "question": "Kt\u00f3ry z rekord\u00f3w DNS nale\u017cy doda\u0107 w strefie wyszukiwania do przodu, aby zmapowa\u0107 nazw\u0119 domeny DNS na adres IP?",
        "imageLoc": "",
        "answers": [
            "A. A lub AAAA",
            "B. SRV lub TXT",
            "C. NS lub CNAME",
            "D. MX lub PTR"
        ],
        "goodAnswer": "A. A lub AAAA"
    },
    {
        "id": 486,
        "question": "Tester okablowania strukturalnego pozwala sprawdzi\u0107",
        "imageLoc": "",
        "answers": [
            "A. liczb\u0119 komputer\u00f3w w sieci",
            "B. liczb\u0119 prze\u0142\u0105cznik\u00f3w w sieci",
            "C. obci\u0105\u017cenie ruchu sieciowego",
            "D. map\u0119 po\u0142\u0105cze\u0144"
        ],
        "goodAnswer": "D. map\u0119 po\u0142\u0105cze\u0144"
    },
    {
        "id": 487,
        "question": "Symulowanie stan\u00f3w logicznych obwod\u00f3w cyfrowych umo\u017cliwia",
        "imageLoc": "",
        "answers": [
            "A. impulsator",
            "B. sonometr",
            "C. kalibrator",
            "D. sonda logiczna"
        ],
        "goodAnswer": "A. impulsator"
    },
    {
        "id": 488,
        "question": "Do sprawdzenia prawid\u0142owych przebieg\u00f3w i warto\u015bci napi\u0119\u0107 uk\u0142adu urz\u0105dzenia elektronicznego mo\u017cna u\u017cy\u0107",
        "imageLoc": "",
        "answers": [
            "A. miernika uniwersalnego",
            "B. watomierza",
            "C. oscyloskopu cyfrowego",
            "D. testera p\u0142yt g\u0142\u00f3wnych"
        ],
        "goodAnswer": "C. oscyloskopu cyfrowego"
    },
    {
        "id": 489,
        "question": "Do sprawdzania rozmiaru katalogu w systemie Linux s\u0142u\u017cy polecenie",
        "imageLoc": "",
        "answers": [
            "A. du",
            "B. cp",
            "C. rm",
            "D. ps"
        ],
        "goodAnswer": "A. du"
    },
    {
        "id": 490,
        "question": "Program Mozilla Firefox jest rozpowszechniany na podstawie licencji",
        "imageLoc": "",
        "answers": [
            "A. OEM",
            "B. MOLP",
            "C. Liteware",
            "D. GNU MPL"
        ],
        "goodAnswer": "D. GNU MPL"
    },
    {
        "id": 491,
        "question": "Aby w systemie Windows Server wykona\u0107 rezerwacj\u0119 adres\u00f3w IP na podstawie adres\u00f3w fizycznych MAC urz\u0105dze\u0144, nale\u017cy skonfigurowa\u0107 us\u0142ug\u0119",
        "imageLoc": "",
        "answers": [
            "A. RRAS",
            "B. NAT",
            "C. DHCP",
            "D. DNS"
        ],
        "goodAnswer": "C. DHCP"
    },
    {
        "id": 492,
        "question": "Jak\u0105 funkcj\u0119 realizuje us\u0142uga NAT uruchomiona na ruterze?",
        "imageLoc": "",
        "answers": [
            "A. Transport danych korekcyjnych RTCM z wykorzystaniem protoko\u0142u NTRIP",
            "B. Synchronizacj\u0119 zegara z serwerem czasu w sieci Internet",
            "C. Uwierzytelnianie protoko\u0142em NTLM nazwy i has\u0142a u\u017cytkownika",
            "D. T\u0142umaczenie adres\u00f3w u\u017cywanych w sieci LAN na jeden lub kilka adres\u00f3w publicznych"
        ],
        "goodAnswer": "D. T\u0142umaczenie adres\u00f3w u\u017cywanych w sieci LAN na jeden lub kilka adres\u00f3w publicznych"
    },
    {
        "id": 493,
        "question": "Polecenie net accounts zastosowane w wierszu polece\u0144 systemu Windows, powoduj\u0105ce ustawienie maksymalnej liczby dni wa\u017cno\u015bci has\u0142a, wymaga u\u017cycia opcji",
        "imageLoc": "",
        "answers": [
            "A. /MAXPWAGE",
            "B. /EXPIRES",
            "C. /FORCELOGOFF",
            "D. /TIMES"
        ],
        "goodAnswer": "A. /MAXPWAGE"
    },
    {
        "id": 494,
        "question": "Kt\u00f3ra z wymienionych pami\u0119ci RAM wykorzystuje do przesy\u0142ania danych wznosz\u0105ce i opadaj\u0105ce zbocze sygna\u0142u zegarowego?",
        "imageLoc": "",
        "answers": [
            "A. DDR",
            "B. SIMM",
            "C. SIPP",
            "D. SDR"
        ],
        "goodAnswer": "A. DDR"
    },
    {
        "id": 495,
        "question": "Przy uruchamianiu komputera pojawia si\u0119 komunikat \"CMOS checksum error press F1 to continue press DEL to setup\". Wci\u015bni\u0119cie klawisza DEL spowoduje",
        "imageLoc": "",
        "answers": [
            "A. skanowanie zawarto\u015bci pami\u0119ci CMOS",
            "B. przej\u015bcie do konfiguracji systemu Windows",
            "C. wej\u015bcie do BIOS-u komputera",
            "D. usuni\u0119cie pliku setup"
        ],
        "goodAnswer": "C. wej\u015bcie do BIOS-u komputera"
    },
    {
        "id": 496,
        "question": "Element oznaczony cyfr\u0105 1 na schemacie karty d\u017awi\u0119kowej",
        "imageLoc": require("../assets/img/258.png"),
        "answers": [
            "A. eliminuje szumy na linii, wykorzystuj\u0105c kr\u00f3tkie pr\u00f3bki szumu.",
            "B. zamienia sygna\u0142 audio na sygna\u0142 wideo",
            "C. tworzy d\u017awi\u0119k o odpowiednim czasie trwania, wykorzystuj\u0105c kr\u00f3tkie pr\u00f3bki d\u017awi\u0119ku",
            "D. usuwa d\u017awi\u0119k pochodz\u0105cy z kilku \u017ar\u00f3de\u0142"
        ],
        "goodAnswer": "C. tworzy d\u017awi\u0119k o odpowiednim czasie trwania, wykorzystuj\u0105c kr\u00f3tkie pr\u00f3bki d\u017awi\u0119ku"
    },
    {
        "id": 497,
        "question": "Czynno\u015bci samokontroluj\u0105ce komputer po w\u0142\u0105czeniu zasilania oznaczone s\u0105 skr\u00f3tem",
        "imageLoc": "",
        "answers": [
            "A. MBR",
            "B. BIOS",
            "C. CPU",
            "D. POST"
        ],
        "goodAnswer": "D. POST"
    },
    {
        "id": 498,
        "question": "Og\u00f3lne informacje o zdarzeniach systemowych w systemie Linux s\u0105 przechowywane w",
        "imageLoc": "",
        "answers": [
            "A. bibliotece RemoteApp",
            "B. rejestrze systemowym",
            "C. programie perfmon",
            "D. pliku messages"
        ],
        "goodAnswer": "D. pliku messages"
    },
    {
        "id": 499,
        "question": "Na stronie wydrukowanej na drukarce laserowej pojawiaj\u0105 si\u0119 ja\u015bniejsze i ciemniejsze obszary. Aby rozwi\u0105za\u0107 problemy z nieci\u0105g\u0142o\u015bci\u0105 i jako\u015bci\u0105 wydruku, nale\u017cy",
        "imageLoc": "",
        "answers": [
            "A. wymieni\u0107 nagrzewnic\u0119",
            "B. przeczy\u015bci\u0107 dysze drukarki",
            "C. wymieni\u0107 b\u0119ben \u015bwiat\u0142oczu\u0142y",
            "D. przeczy\u015bci\u0107 wentylator drukarki"
        ],
        "goodAnswer": "C. wymieni\u0107 b\u0119ben \u015bwiat\u0142oczu\u0142y"
    },
    {
        "id": 500,
        "question": "Parametrem okre\u015blaj\u0105cym o ile zmniejszy si\u0119 moc sygna\u0142u w danej parze przewod\u00f3w po przej\u015bciu przez ca\u0142y tor kablowy, jest",
        "imageLoc": "",
        "answers": [
            "A. przenik zdalny",
            "B. d\u0142ugo\u015b\u0107",
            "C. t\u0142umienie",
            "D. przenik zbli\u017cny"
        ],
        "goodAnswer": "C. t\u0142umienie"
    },
    {
        "id": 501,
        "question": "Kt\u00f3ry protok\u00f3\u0142 warstwy aplikacji definiuje wysy\u0142anie poczty elektronicznej?",
        "imageLoc": "",
        "answers": [
            "A. SMTP (Simple Mail Transfer Protocol)",
            "B. DNS (Domain Name System)",
            "C. FTP (File Transfer Protocol)",
            "D. HTTP (Hypertext Transfer Protocol)"
        ],
        "goodAnswer": "A. SMTP (Simple Mail Transfer Protocol)"
    },
    {
        "id": 502,
        "question": "Interfejs HDMI komputera pozwala na przesy\u0142anie sygna\u0142u",
        "imageLoc": "",
        "answers": [
            "A. cyfrowego video i audio",
            "B. cyfrowego audio",
            "C. cyfrowego video",
            "D. analogowego audio i video"
        ],
        "goodAnswer": "A. cyfrowego video i audio"
    },
    {
        "id": 503,
        "question": "Kt\u00f3re zdanie charakteryzuje profil tymczasowy u\u017cytkownika?",
        "imageLoc": "",
        "answers": [
            "A. Po wylogowaniu si\u0119 u\u017cytkownika, zmiany wprowadzone przez niego w ustawieniach pulpitu i w plikach nie zostan\u0105 zachowane",
            "B. Umo\u017cliwia korzystanie na dowolnym komputerze w sieci z ustawie\u0144 i danych u\u017cytkownika znajduj\u0105cych si\u0119 na serwerze",
            "C. Jest tworzony podczas pierwszego logowania do komputera i przechowywany na lokalnym dysku twardym komputera",
            "D. Jest tworzony przez administratora systemu i przechowywany na serwerze, tylko administrator systemu mo\u017ce wprowadza\u0107 w nim zmiany"
        ],
        "goodAnswer": "A. Po wylogowaniu si\u0119 u\u017cytkownika, zmiany wprowadzone przez niego w ustawieniach pulpitu i w plikach nie zostan\u0105 zachowane"
    },
    {
        "id": 504,
        "question": "Warunkiem niezb\u0119dnym przy archiwizacji danych jest",
        "imageLoc": "",
        "answers": [
            "A. kopiowanie danych",
            "B. kompresja danych",
            "C. kompresja i kopiowanie danych z jednoczesnym ich szyfrowaniem",
            "D. kompresja i kopiowanie danych"
        ],
        "goodAnswer": "A. kopiowanie danych"
    },
    {
        "id": 505,
        "question": "ACPI jest skr\u00f3tem oznaczaj\u0105cym",
        "imageLoc": "",
        "answers": [
            "A. program umo\u017cliwiaj\u0105cy odnalezienie rekordu rozruchowego systemu.",
            "B. zestaw \u015bcie\u017cek \u0142\u0105cz\u0105cych jednocze\u015bnie kilka komponent\u00f3w z mo\u017cliwo\u015bci\u0105 komunikacji.",
            "C. zaawansowany interfejs zarz\u0105dzania konfiguracj\u0105 i energi\u0105.",
            "D. test poprawno\u015bci dzia\u0142ania podstawowych podzespo\u0142\u00f3w."
        ],
        "goodAnswer": "C. zaawansowany interfejs zarz\u0105dzania konfiguracj\u0105 i energi\u0105."
    },
    {
        "id": 506,
        "question": "Kt\u00f3ry program zosta\u0142 zastosowany w systemie Linux do szybkiego skanowania sieci?",
        "imageLoc": require("../assets/img/1045.png"),
        "answers": [
            "A. webmin",
            "B. iptraf",
            "C. nmap",
            "D. ttcp"
        ],
        "goodAnswer": "C. nmap"
    },
    {
        "id": 507,
        "question": "Brak informacji o parzysto\u015bci liczby lub o znaku wyniku wykonywanej operacji w ALU, mo\u017ce \u015bwiadczy\u0107 o problemach w dzia\u0142aniu",
        "imageLoc": "",
        "answers": [
            "A. wska\u017anika stosu",
            "B. rejestru flagowego",
            "C. tablicy rozkaz\u00f3w",
            "D. pami\u0119ci cache"
        ],
        "goodAnswer": "B. rejestru flagowego"
    },
    {
        "id": 508,
        "question": "Przedstawione narz\u0119dzie mo\u017ce by\u0107 wykorzystane do",
        "imageLoc": require("../assets/img/334.png"),
        "answers": [
            "A. pomiaru warto\u015bci napi\u0119cia w zasilaczu",
            "B. podgrzania i zamontowania elementu elektronicznego",
            "C. sprawdzenia d\u0142ugo\u015bci badanego kabla sieciowego",
            "D. utrzymania drukarki w czysto\u015bci"
        ],
        "goodAnswer": "A. pomiaru warto\u015bci napi\u0119cia w zasilaczu"
    },
    {
        "id": 509,
        "question": "Kt\u00f3ry protok\u00f3\u0142 jest wykorzystywany do przesy\u0142ania plik\u00f3w bez nawi\u0105zania po\u0142\u0105czenia?",
        "imageLoc": "",
        "answers": [
            "A. FTP (File Transfer Protocol)",
            "B. TFTP (Trivial File Transfer Protocol)",
            "C. HTTP (Hyper Text Transfer Protocol)",
            "D. DNS (Domain Name System)"
        ],
        "goodAnswer": "B. TFTP (Trivial File Transfer Protocol)"
    },
    {
        "id": 510,
        "question": "Kt\u00f3ry adres podsieci jest prawid\u0142owy po po\u017cyczeniu 4 bit\u00f3w z cz\u0119\u015bci hosta z adresu klasowego 192.168.1.0?",
        "imageLoc": "",
        "answers": [
            "A. 192.168.1.48/28",
            "B. 192.168.1.88/27",
            "C. 192.168.1.44/28",
            "D. 192.168.1.80/27"
        ],
        "goodAnswer": "A. 192.168.1.48/28"
    },
    {
        "id": 511,
        "question": "Komputer ma pod\u0142\u0105czon\u0105 mysz bezprzewodow\u0105, a kursor podczas pracy nie porusza si\u0119 p\u0142ynnie, \"skacze\" po ekranie. Przyczyn\u0105 usterki urz\u0105dzenia mo\u017ce by\u0107",
        "imageLoc": "",
        "answers": [
            "A. uszkodzenie mikroprze\u0142\u0105cznika.",
            "B. brak baterii.",
            "C. wyczerpywanie si\u0119 baterii zasilaj\u0105cej.",
            "D. uszkodzenie lewego przycisku."
        ],
        "goodAnswer": "C. wyczerpywanie si\u0119 baterii zasilaj\u0105cej."
    },
    {
        "id": 512,
        "question": "Jakie narz\u0119dzie s\u0142u\u017cy do mocowania pojedynczych \u017cy\u0142 kabla miedzianego w z\u0142\u0105czach?",
        "imageLoc": require("../assets/img/1735.png"),
        "answers": [
            "A. szukacz kabli",
            "B. n\u00f3\u017c KRONE",
            "C. obcinacz izolacji",
            "D. zaciskarka RJ45"
        ],
        "goodAnswer": "B. n\u00f3\u017c KRONE"
    },
    {
        "id": 513,
        "question": "G\u0142\u00f3wnym celem mechanizmu Plug and Play jest",
        "imageLoc": "",
        "answers": [
            "A. automatyczne odinstalowywanie sterownik\u00f3w, kt\u00f3re przez d\u0142u\u017cszy czas nie by\u0142y u\u017cywane",
            "B. wykrycie nowo pod\u0142\u0105czonego sprz\u0119tu i automatycznie przydzielenie mu zasob\u00f3w",
            "C. automatyczne tworzenie kopii danych na nowo pod\u0142\u0105czonym no\u015bniku pami\u0119ci",
            "D. automatycznie uruchamianie ostatnio otwartej gry"
        ],
        "goodAnswer": "B. wykrycie nowo pod\u0142\u0105czonego sprz\u0119tu i automatycznie przydzielenie mu zasob\u00f3w"
    },
    {
        "id": 514,
        "question": "W jakiej fizycznej topologii uszkodzenie jednej stacji roboczej zatrzyma dzia\u0142anie ca\u0142ej sieci?",
        "imageLoc": "",
        "answers": [
            "A. Magistrali",
            "B. Pier\u015bcienia",
            "C. Siatki",
            "D. Drzewa"
        ],
        "goodAnswer": "B. Pier\u015bcienia"
    },
    {
        "id": 515,
        "question": "Kt\u00f3ra drukarka wykorzystuje technik\u0119 polegaj\u0105c\u0105 na przenoszeniu sta\u0142ego barwnika z ta\u015bmy na papier odporny na wysok\u0105 temperatur\u0119?",
        "imageLoc": "",
        "answers": [
            "A. Termiczna",
            "B. Laserowa",
            "C. Atramentowa",
            "D. Termosublimacyjna"
        ],
        "goodAnswer": "D. Termosublimacyjna"
    },
    {
        "id": 516,
        "question": "Aby nadpisa\u0107 b\u0142\u0119dne wpisy w pliku boot.ini w konsoli odzyskiwania systemu Windows, nale\u017cy u\u017cy\u0107 polecenia",
        "imageLoc": "",
        "answers": [
            "A. bootcfg /rebuild",
            "B. fixboot",
            "C. diskpart /add",
            "D. fixmbr"
        ],
        "goodAnswer": "A. bootcfg /rebuild"
    },
    {
        "id": 517,
        "question": "W dokumentacji jednego z element\u00f3w sk\u0142adowych komputera zamieszczono informacj\u0119, \u017ce urz\u0105dzenie wspiera OpenGL. Dokumentacja dotyczy",
        "imageLoc": "",
        "answers": [
            "A. karty sieciowej.",
            "B. dysku twardego.",
            "C. mikroprocesora.",
            "D. karty graficznej."
        ],
        "goodAnswer": "D. karty graficznej."
    },
    {
        "id": 518,
        "question": "W systemie Windows XP w celu utworzenia nowego u\u017cytkownika o nazwie egzamin z has\u0142em qwerty nale\u017cy u\u017cy\u0107 polecenia",
        "imageLoc": "",
        "answers": [
            "A. adduser egzamin qwerty /add",
            "B. useradd egzamin qwerty /add",
            "C. net user egzamin qwerty /add",
            "D. user net egzamin qwerty /add"
        ],
        "goodAnswer": "C. net user egzamin qwerty /add"
    },
    {
        "id": 519,
        "question": "U\u017cytkownik systemu Linux, chc\u0105c przetestowa\u0107 dysk twardy pod k\u0105tem wyst\u0119powania na nim uszkodzonych sektor\u00f3w, mo\u017ce u\u017cy\u0107 programu",
        "imageLoc": "",
        "answers": [
            "A. chkdisk",
            "B. defrag",
            "C. fsck",
            "D. scandisk"
        ],
        "goodAnswer": "C. fsck"
    },
    {
        "id": 520,
        "question": "Aby w systemie Windows ustawi\u0107 w\u0142a\u015bciwo\u015bci wszystkich zainstalowanych urz\u0105dze\u0144 lub wy\u015bwietli\u0107 ich list\u0119, nale\u017cy u\u017cy\u0107 narz\u0119dzia",
        "imageLoc": "",
        "answers": [
            "A. dhcpmgmt.msc",
            "B. dnsmgmt.msc",
            "C. diskmgmt.msc",
            "D. devmgmt.msc"
        ],
        "goodAnswer": "D. devmgmt.msc"
    },
    {
        "id": 521,
        "question": "Ustawienie zworek na dyskach z interfejsem IDE odpowiada za",
        "imageLoc": "",
        "answers": [
            "A. pr\u0119dko\u015b\u0107 obrotow\u0105 dysku",
            "B. tryb pracy dysku",
            "C. rodzaj interfejsu dyskowego",
            "D. napi\u0119cie zasilania silnika"
        ],
        "goodAnswer": "B. tryb pracy dysku"
    },
    {
        "id": 522,
        "question": "W cenniku us\u0142ug komputerowych znajduj\u0105 si\u0119 przedstawione ni\u017cej zapisy. Ile b\u0119dzie wynosi\u0142 koszt dojazdu serwisanta do klienta mieszkaj\u0105cego poza miastem, w odleg\u0142o\u015bci 15km od siedziby firmy?",
        "imageLoc": require("../assets/img/697.png"),
        "answers": [
            "A. 60 z\u0142 + VAT",
            "B. 30 z\u0142",
            "C. 30 z\u0142 + VAT",
            "D. 25 z\u0142 + 2 z\u0142 za ka\u017cdy km poza granicami miasta"
        ],
        "goodAnswer": "A. 60 z\u0142 + VAT"
    },
    {
        "id": 523,
        "question": "Do oprogramowania typu malware (z ang. malicious software) nie nale\u017cy oprogramowanie typu:",
        "imageLoc": "",
        "answers": [
            "A. scumware",
            "B. keylogger",
            "C. exploit",
            "D. computer aided manufacturing"
        ],
        "goodAnswer": "D. computer aided manufacturing"
    },
    {
        "id": 524,
        "question": "Co \u0142\u0105czy okablowanie pionowe w projekcie sieci LAN?",
        "imageLoc": "",
        "answers": [
            "A. G\u0142\u00f3wny punkt rozdzielczy z gniazdem abonenckim",
            "B. G\u0142\u00f3wny punkt rozdzielczy z po\u015brednimi punktami rozdzielczymi",
            "C. Dwa s\u0105siednie punkty abonenckie",
            "D. Gniazdo abonenckie z po\u015brednim punktem rozdzielczym"
        ],
        "goodAnswer": "B. G\u0142\u00f3wny punkt rozdzielczy z po\u015brednimi punktami rozdzielczymi"
    },
    {
        "id": 525,
        "question": "Przedstawiony symbol, stosowany w dokumentacji technicznej, oznacza",
        "imageLoc": require("../assets/img/1961.png"),
        "answers": [
            "A. zielony punkt upowa\u017cniaj\u0105cy do wniesienia op\u0142aty pieni\u0119\u017cnej na rzecz organizacji odzysku opakowa\u0144.",
            "B. konieczno\u015b\u0107 utylizacji wszystkich element\u00f3w elektrycznych.",
            "C. wym\u00f3g selektywnej zbi\u00f3rki sprz\u0119tu elektronicznego.",
            "D. brak mo\u017cliwo\u015bci sk\u0142adowania odpad\u00f3w aluminiowych oraz innych tworzyw metalicznych."
        ],
        "goodAnswer": "C. wym\u00f3g selektywnej zbi\u00f3rki sprz\u0119tu elektronicznego."
    },
    {
        "id": 526,
        "question": "Urz\u0105dzeniem stosowanym do przekszta\u0142cania otrzymanych ramek w sygna\u0142y, kt\u00f3re p\u00f3\u017aniej s\u0105 przesy\u0142ane w obr\u0119bie sieci komputerowej, jest",
        "imageLoc": "",
        "answers": [
            "A. regenerator",
            "B. punkt dost\u0119pu",
            "C. karta sieciowa",
            "D. konwerter medi\u00f3w"
        ],
        "goodAnswer": "C. karta sieciowa"
    },
    {
        "id": 527,
        "question": "Urz\u0105dzeniem dzia\u0142aj\u0105cym w warstwie \u0142\u0105cza danych, s\u0142u\u017c\u0105cym do \u0142\u0105czenia segment\u00f3w sieci o r\u00f3\u017cnych architekturach, jest",
        "imageLoc": "",
        "answers": [
            "A. ruter",
            "B. most",
            "C. koncentrator",
            "D. regenerator"
        ],
        "goodAnswer": "B. most"
    },
    {
        "id": 528,
        "question": "Urz\u0105dzeniem sieciowym pracuj\u0105cym w drugiej warstwie modelu OSI, w kt\u00f3rym sygna\u0142 na podstawie analizy adresu MAC nadawcy i odbiorcy jest przesy\u0142any do portu po\u0142\u0105czonego z urz\u0105dzeniem odbieraj\u0105cym dane, jest",
        "imageLoc": "",
        "answers": [
            "A. modem.",
            "B. prze\u0142\u0105cznik.",
            "C. terminator.",
            "D. wzmacniak."
        ],
        "goodAnswer": "B. prze\u0142\u0105cznik."
    },
    {
        "id": 529,
        "question": "G\u0142\u00f3wnym celem mechanizmu Plug and Play jest:",
        "imageLoc": "",
        "answers": [
            "A. automatyczne tworzenie kopii danych na nowo pod\u0142\u0105czonym no\u015bniku pami\u0119ci",
            "B. wykrycie nowo pod\u0142\u0105czonego sprz\u0119tu i automatycznie przydzielenie mu zasob\u00f3w",
            "C. automatyczne odinstalowanie sterownik\u00f3w, kt\u00f3re przez d\u0142u\u017cszy czas nie by\u0142y u\u017cywane",
            "D. automatyczne uruchomienie ostatnio otwartej gry"
        ],
        "goodAnswer": "B. wykrycie nowo pod\u0142\u0105czonego sprz\u0119tu i automatycznie przydzielenie mu zasob\u00f3w"
    },
    {
        "id": 530,
        "question": "Kt\u00f3re narz\u0119dzie nale\u017cy wykorzysta\u0107 do uzyskania wynik\u00f3w testu POST dla modu\u0142\u00f3w p\u0142yty g\u0142\u00f3wnej?",
        "imageLoc": require("../assets/img/1907.png"),
        "answers": [
            "A. A",
            "B. B",
            "C. C",
            "D. D"
        ],
        "goodAnswer": "B. B"
    },
    {
        "id": 531,
        "question": "Jak skonfigurowa\u0107 zapor\u0119 Windows, zachowuj\u0105c zasady bezpiecze\u0144stwa, aby za pomoc\u0105 polecenia ping by\u0142o mo\u017cliwe sprawdzenie poprawno\u015bci komunikacji z innymi urz\u0105dzeniami pracuj\u0105cymi w sieci?",
        "imageLoc": "",
        "answers": [
            "A. Skonfigurowa\u0107 regu\u0142y dotycz\u0105ce protoko\u0142u IGMP",
            "B. Skonfigurowa\u0107 regu\u0142y dotycz\u0105ce protoko\u0142u ICMP",
            "C. Skonfigurowa\u0107 regu\u0142y dotycz\u0105ce protoko\u0142u IP",
            "D. Skonfigurowa\u0107 regu\u0142y dotycz\u0105ce protoko\u0142u TCP"
        ],
        "goodAnswer": "B. Skonfigurowa\u0107 regu\u0142y dotycz\u0105ce protoko\u0142u ICMP"
    },
    {
        "id": 532,
        "question": "Interfejs USB 3.0 umo\u017cliwia transfer danych z pr\u0119dko\u015bci\u0105 do",
        "imageLoc": "",
        "answers": [
            "A. 120 MB/s",
            "B. 5 Gb/s",
            "C. 4 GB/s",
            "D. 400 Mb/s"
        ],
        "goodAnswer": "B. 5 Gb/s"
    },
    {
        "id": 533,
        "question": "Urz\u0105dzenia standardu 802.11g mog\u0105 pracowa\u0107 z maksymaln\u0105 pr\u0119dko\u015bci\u0105 przesy\u0142ania danych do",
        "imageLoc": "",
        "answers": [
            "A. 54 Mb/s",
            "B. 108 Mb/s",
            "C. 11 Mb/s",
            "D. 150 Mb/s"
        ],
        "goodAnswer": "A. 54 Mb/s"
    },
    {
        "id": 534,
        "question": "Komputer ma dost\u0119p do Internetu poprzez sie\u0107 lokaln\u0105. Wpisuj\u0105c w przegl\u0105darce internetowej adres www.wp.pl u\u017cytkownik nie ma dost\u0119pu do strony WWW, natomiast wpisanie adresu IP np. 212.77.100.101 pozwala otworzy\u0107 t\u0119 stron\u0119. Co mo\u017ce by\u0107 tego przyczyn\u0105?",
        "imageLoc": "",
        "answers": [
            "A. Brak adresu bramy",
            "B. Brak serwera DNS",
            "C. Brak serwera PROXY",
            "D. Brak serwera WINS"
        ],
        "goodAnswer": "B. Brak serwera DNS"
    },
    {
        "id": 535,
        "question": "Najwy\u017cszy poziom bezpiecze\u0144stwa sieci bezprzewodowej zapewni szyfrowanie",
        "imageLoc": "",
        "answers": [
            "A. WPA2",
            "B. WPA",
            "C. ROT13",
            "D. WEP"
        ],
        "goodAnswer": "A. WPA2"
    },
    {
        "id": 536,
        "question": "Kt\u00f3ry z podanych adres\u00f3w IP nie jest adresem prywatnym?",
        "imageLoc": "",
        "answers": [
            "A. 10.0.105.12",
            "B. 172.16.45.123",
            "C. 192.168.199.223",
            "D. 127.231.5.67"
        ],
        "goodAnswer": "D. 127.231.5.67"
    },
    {
        "id": 537,
        "question": "Protoko\u0142em odpowiedzialnym za wykrywanie i eliminowanie kolizji w sieciach Ethernet jest",
        "imageLoc": "",
        "answers": [
            "A. CSMA/CD",
            "B. NetBEUI",
            "C. WINS",
            "D. IPX/SPX"
        ],
        "goodAnswer": "A. CSMA/CD"
    },
    {
        "id": 538,
        "question": "Protok\u00f3\u0142 umo\u017cliwiaj\u0105cy bezpieczn\u0105, zdaln\u0105 prac\u0119 na serwerze to",
        "imageLoc": "",
        "answers": [
            "A. SMTP",
            "B. TELNET",
            "C. POP3",
            "D. SSH"
        ],
        "goodAnswer": "D. SSH"
    },
    {
        "id": 539,
        "question": "Jaka jest kolejno\u015b\u0107 przewod\u00f3w we wtyku RJ45 zgodnie z sekwencj\u0105 po\u0142\u0105cze\u0144 T568A?",
        "imageLoc": require("../assets/img/75.png"),
        "answers": [
            "A. A",
            "B. B",
            "C. C",
            "D. D"
        ],
        "goodAnswer": "D. D"
    },
    {
        "id": 540,
        "question": "Dokumentacja powykonawcza projektowanej sieci LAN powinna mi\u0119dzy innymi zawiera\u0107",
        "imageLoc": "",
        "answers": [
            "A. za\u0142o\u017cenia projektowe sieci lokalnej",
            "B. kosztorys rob\u00f3t instalatorskich",
            "C. raport pomiarowy tor\u00f3w transmisyjnych",
            "D. spis rysunk\u00f3w wykonawczych"
        ],
        "goodAnswer": "C. raport pomiarowy tor\u00f3w transmisyjnych"
    },
    {
        "id": 541,
        "question": "Podczas przegl\u0105dania stron WWW, w celu podniesienia bezpiecze\u0144stwa prywatnych danych, jest wskazane wy\u0142\u0105czenie w opcjach przegl\u0105darki",
        "imageLoc": "",
        "answers": [
            "A. powiadamiania o wygas\u0142ych certyfikatach",
            "B. funkcji zapami\u0119tywania hase\u0142",
            "C. blokady wyskakuj\u0105cych okienek",
            "D. monit\u00f3w dotycz\u0105cych uruchomienia skrypt\u00f3w"
        ],
        "goodAnswer": "B. funkcji zapami\u0119tywania hase\u0142"
    },
    {
        "id": 542,
        "question": "Ile maksymalnie partycji podstawowych na dysku twardym z tablic\u0105 MBR pozwala utworzy\u0107 narz\u0119dzie Zarz\u0105dzanie dyskami dostarczone wraz z systemem Windows?",
        "imageLoc": "",
        "answers": [
            "A. 4",
            "B. 2",
            "C. 1",
            "D. 3"
        ],
        "goodAnswer": "A. 4"
    },
    {
        "id": 543,
        "question": "Translacja adres\u00f3w \u017ar\u00f3d\u0142owych w ramach us\u0142ugi NAT routera umo\u017cliwiaj\u0105ca komputerom w sieci prywatnej dost\u0119p do internetu nosi nazw\u0119:",
        "imageLoc": "",
        "answers": [
            "A. WNAT",
            "B. SNAT",
            "C. DNAT",
            "D. LNAT"
        ],
        "goodAnswer": "B. SNAT"
    },
    {
        "id": 544,
        "question": "Kt\u00f3re polecenie systemu Windows wy\u015bwietla tabele routingu hosta?",
        "imageLoc": "",
        "answers": [
            "A. netstat -r",
            "B. ipconfig /release",
            "C. ipconfig /renew",
            "D. netstat -n"
        ],
        "goodAnswer": "A. netstat -r"
    },
    {
        "id": 545,
        "question": "Protok\u00f3\u0142 RDP jest wykorzystywany w us\u0142udze",
        "imageLoc": "",
        "answers": [
            "A. poczty elektronicznej w systemie Linux",
            "B. SCP w systemie Windows",
            "C. terminalowej w systemie Linux",
            "D. pulpitu zdalnego w systemie Windows"
        ],
        "goodAnswer": "D. pulpitu zdalnego w systemie Windows"
    },
    {
        "id": 546,
        "question": "Wymiana baterii nale\u017cy do czynno\u015bci zwi\u0105zanych z eksploatacj\u0105",
        "imageLoc": "",
        "answers": [
            "A. drukarki laserowej.",
            "B. skanera p\u0142askiego.",
            "C. myszy bezprzewodowej.",
            "D. telewizora projekcyjnego."
        ],
        "goodAnswer": "C. myszy bezprzewodowej."
    },
    {
        "id": 547,
        "question": "W systemie Linux do monitorowania bie\u017c\u0105cych proces\u00f3w s\u0142u\u017cy polecenie",
        "imageLoc": "",
        "answers": [
            "A. watch",
            "B. df",
            "C. ps",
            "D. free"
        ],
        "goodAnswer": "C. ps"
    },
    {
        "id": 548,
        "question": "U\u017cytkownik drukarki samodzielnie i prawid\u0142owo nape\u0142ni\u0142 pojemnik z tonerem. Po jego zamontowaniu drukarka nie podejmuje pr\u00f3by drukowania. Przyczyn\u0105 tej usterki mo\u017ce by\u0107",
        "imageLoc": "",
        "answers": [
            "A. z\u0142a jako\u015b\u0107 wykorzystanego tonera do uzupe\u0142nienia pojemnika.",
            "B. niewymieniony chip zliczaj\u0105cy, znajduj\u0105cy si\u0119 na pojemniku z tonerem.",
            "C. zabrudzony wa\u0142ek magnetyczny.",
            "D. \u017ale dobrany toner."
        ],
        "goodAnswer": "B. niewymieniony chip zliczaj\u0105cy, znajduj\u0105cy si\u0119 na pojemniku z tonerem."
    },
    {
        "id": 549,
        "question": "Za pomoc\u0105 przedstawionego na rysunku urz\u0105dzenia mo\u017cna przetestowa\u0107 dzia\u0142anie",
        "imageLoc": require("../assets/img/770.png"),
        "answers": [
            "A. zasilacza",
            "B. p\u0142yty g\u0142\u00f3wnej",
            "C. procesora",
            "D. dysku twardego"
        ],
        "goodAnswer": "A. zasilacza"
    },
    {
        "id": 550,
        "question": "Jaki zestaw kolor\u00f3w zawiera tryb CMYK?",
        "imageLoc": "",
        "answers": [
            "A. Czerwony, purpurowy, \u017c\u00f3\u0142ty i karmelowy",
            "B. B\u0142\u0119kitny, purpurowy, \u017c\u00f3\u0142ty i czarny",
            "C. Czerwony, zielony, \u017c\u00f3\u0142ty i granatowy",
            "D. Czerwony, zielony, niebieski i czarny"
        ],
        "goodAnswer": "B. B\u0142\u0119kitny, purpurowy, \u017c\u00f3\u0142ty i czarny"
    },
    {
        "id": 551,
        "question": "Adres planowanej sieci nale\u017cy do klasy C. Sie\u0107 zosta\u0142a podzielona na 4 podsieci po 62 urz\u0105dzenia w ka\u017cdej podsieci. Kt\u00f3ra z poni\u017cszych masek jest odpowiednia do planowanego zadania?",
        "imageLoc": "",
        "answers": [
            "A. 255.255.255.224",
            "B. 255.255.255.240",
            "C. 255.255.255.128",
            "D. 255.255.255.192"
        ],
        "goodAnswer": "D. 255.255.255.192"
    },
    {
        "id": 552,
        "question": "Aby utworzy\u0107 las w strukturze katalogowej AD DS (Active Directory Domain Services), nale\u017cy utworzy\u0107 co najmniej",
        "imageLoc": "",
        "answers": [
            "A. trzy drzewa domeny",
            "B. cztery drzewa domeny",
            "C. jedno drzewo domeny",
            "D. dwa drzewa domeny"
        ],
        "goodAnswer": "C. jedno drzewo domeny"
    },
    {
        "id": 553,
        "question": "Ile symboli prze\u0142\u0105cznik\u00f3w i ruter\u00f3w jest na schemacie?",
        "imageLoc": require("../assets/img/1572.png"),
        "answers": [
            "A. 3 prze\u0142\u0105czniki i 4 rutery",
            "B. 4 prze\u0142\u0105czniki i 3 rutery",
            "C. 4 prze\u0142\u0105czniki i 8 ruter\u00f3w",
            "D. 8 prze\u0142\u0105cznik\u00f3w i 3 rutery"
        ],
        "goodAnswer": "B. 4 prze\u0142\u0105czniki i 3 rutery"
    },
    {
        "id": 554,
        "question": "Sie\u0107 komputerowa ograniczaj\u0105ca si\u0119 do komputer\u00f3w wy\u0142\u0105cznie jednej organizacji, w kt\u00f3rej mog\u0105 istnie\u0107 us\u0142ugi, realizowane przez serwery w sieci LAN, np. strony WWW, poczta elektroniczna to",
        "imageLoc": "",
        "answers": [
            "A. Infranet.",
            "B. Intranet.",
            "C. Extranet.",
            "D. Internet."
        ],
        "goodAnswer": "B. Intranet."
    },
    {
        "id": 555,
        "question": "Medium transmisyjne odporne na zak\u0142\u00f3cenia elektromagnetyczne i atmosferyczne to",
        "imageLoc": "",
        "answers": [
            "A. \u015bwiat\u0142ow\u00f3d",
            "B. skr\u0119tka typu UTP",
            "C. gruby kabel koncentryczny",
            "D. cienki kabel koncentryczny"
        ],
        "goodAnswer": "A. \u015bwiat\u0142ow\u00f3d"
    },
    {
        "id": 556,
        "question": "Toner jest materia\u0142em eksploatacyjnym drukarki",
        "imageLoc": "",
        "answers": [
            "A. sublimacyjnej",
            "B. ig\u0142owej",
            "C. atramentowej",
            "D. laserowej"
        ],
        "goodAnswer": "D. laserowej"
    },
    {
        "id": 557,
        "question": "Przedstawione w ramce parametry katalogowe dotycz\u0105 dysku twardego",
        "imageLoc": require("../assets/img/92.png"),
        "answers": [
            "A. o pojemno\u015bci dysku 32 MB",
            "B. z pami\u0119ci\u0105 cache 12 MB",
            "C. o maksymalnym transferze zewn\u0119trznym 300 MB/s",
            "D. posiadaj\u0105cego 4 talerze"
        ],
        "goodAnswer": "C. o maksymalnym transferze zewn\u0119trznym 300 MB/s"
    },
    {
        "id": 558,
        "question": "W biurze rachunkowym znajduje si\u0119 w jednym pomieszczeniu sze\u015b\u0107 komputer\u00f3w pod\u0142\u0105czonych do koncentratora kablem UTP Cat 5e. Pracownicy u\u017cytkuj\u0105cy te komputery musz\u0105 mie\u0107 mo\u017cliwo\u015b\u0107 drukowania bardzo du\u017cej ilo\u015bci (powy\u017cej 5 tys. stron miesi\u0119cznie) dokument\u00f3w monochromatycznych. Aby koszty zakupu sprz\u0119tu i eksploatacji by\u0142y jak najni\u017csze nale\u017cy wybra\u0107:",
        "imageLoc": "",
        "answers": [
            "A. laserowe drukarki lokalne pod\u0142\u0105czone do ka\u017cdego z komputer\u00f3w",
            "B. atramentowe urz\u0105dzenie wielofunkcyjne ze skanerem i faksem",
            "C. laserow\u0105 drukark\u0119 sieciow\u0105 z portem RJ45",
            "D. drukark\u0119 atramentow\u0105 pod\u0142\u0105czon\u0105 do jednego z komputer\u00f3w i udost\u0119pnian\u0105 w sieci"
        ],
        "goodAnswer": "C. laserow\u0105 drukark\u0119 sieciow\u0105 z portem RJ45"
    },
    {
        "id": 559,
        "question": "Komputer K1 jest pod\u0142\u0105czony do interfejsu G0 rutera, komputer K2 do interfejsu G1 tego samego rutera. Na podstawie przedstawionej w tabelce adresacji ustal prawid\u0142owy adres bramy komputera K2.",
        "imageLoc": require("../assets/img/1701.png"),
        "answers": [
            "A. 172.16.0.1",
            "B. 172.16.0.2",
            "C. 192.168.0.1",
            "D. 192.168.0.2"
        ],
        "goodAnswer": "C. 192.168.0.1"
    },
    {
        "id": 560,
        "question": "Kt\u00f3r\u0105 z opcji konfiguracji ustawie\u0144 u\u017cytkownika z ograniczonymi uprawnieniami w systemie Windows, umo\u017cliwia przystawka secpol?",
        "imageLoc": "",
        "answers": [
            "A. Blokad\u0119 okre\u015blonych element\u00f3w w panelu sterowania",
            "B. Odebranie mo\u017cliwo\u015bci zapisu na p\u0142ytach CD",
            "C. Zezwolenie na zmian\u0119 czasu systemowego",
            "D. Czyszczenie historii niedawno otwieranych dokument\u00f3w"
        ],
        "goodAnswer": "C. Zezwolenie na zmian\u0119 czasu systemowego"
    },
    {
        "id": 561,
        "question": "W dokumentacji powykonawczej fizycznej i logicznej struktury sieci lokalnej musi znajdowa\u0107 si\u0119",
        "imageLoc": "",
        "answers": [
            "A. umowa zlecaj\u0105cego prac\u0119 z wykonawc\u0105",
            "B. harmonogram prac wykonawczych",
            "C. schemat sieci z oznaczonymi punktami dystrybucyjnymi i gniazdami",
            "D. wst\u0119pny kosztorys materia\u0142\u00f3w i robocizny"
        ],
        "goodAnswer": "C. schemat sieci z oznaczonymi punktami dystrybucyjnymi i gniazdami"
    },
    {
        "id": 562,
        "question": "W systemie Linux mamy nast\u0119puj\u0105ce prawa dost\u0119pu do pewnego pliku rwxr--r-- . Jakim poleceniem zmienimy je na rwxrwx---?",
        "imageLoc": "",
        "answers": [
            "A. chmod 755 nazwapliku",
            "B. chmod 544 nazwapliku",
            "C. chmod 221 nazwapliku",
            "D. chmod 770 nazwapliku"
        ],
        "goodAnswer": "D. chmod 770 nazwapliku"
    },
    {
        "id": 563,
        "question": "Kt\u00f3rym elementem sieci SIP jest telefon IP?",
        "imageLoc": "",
        "answers": [
            "A. Serwerem Proxy SIP",
            "B. Terminalem ko\u0144cowym",
            "C. Serwerem przekierowa\u0144",
            "D. Serwerem rejestracji SIP"
        ],
        "goodAnswer": "B. Terminalem ko\u0144cowym"
    },
    {
        "id": 564,
        "question": "Kt\u00f3ry z protoko\u0142\u00f3w jest protoko\u0142em synchronizacji czasu?",
        "imageLoc": "",
        "answers": [
            "A. NNTP",
            "B. FTP",
            "C. NTP",
            "D. HTTP"
        ],
        "goodAnswer": "C. NTP"
    },
    {
        "id": 565,
        "question": "Sie\u0107 komputerowa jest z\u0142o\u017cona z 3 komputer\u00f3w stacjonarnych i drukarki sieciowej, pod\u0142\u0105czonych kablem UTP do rutera o interfejsach 1 x WAN, 5 x LAN. Kt\u00f3re urz\u0105dzenie sieciowe umo\u017cliwi pod\u0142\u0105czenie kablem UTP dw\u00f3ch kolejnych komputer\u00f3w do tej sieci?",
        "imageLoc": "",
        "answers": [
            "A. Konwerter medi\u00f3w",
            "B. Terminal sieciowy",
            "C. Modem",
            "D. Prze\u0142\u0105cznik"
        ],
        "goodAnswer": "D. Prze\u0142\u0105cznik"
    },
    {
        "id": 566,
        "question": "Po analizie zamieszczonych wynik\u00f3w konfiguracji kart sieciowych zainstalowanych na komputerze mo\u017cna stwierdzi\u0107, \u017ce",
        "imageLoc": require("../assets/img/1867.png"),
        "answers": [
            "A. wszystkie karty mog\u0105 uzyska\u0107 adres IP automatycznie",
            "B. karta przewodowa ma adres MAC 8C-70-5A-F3-75-BC",
            "C. interfejs Bluetooth ma przydzielony adres IPv4 192.168.0.102",
            "D. karta bezprzewodowa ma nazw\u0119 Net11"
        ],
        "goodAnswer": "A. wszystkie karty mog\u0105 uzyska\u0107 adres IP automatycznie"
    },
    {
        "id": 567,
        "question": "Kt\u00f3ry z adres\u00f3w IP nale\u017cy do klasy B?",
        "imageLoc": "",
        "answers": [
            "A. 134.192.16.1",
            "B. 100.10.10.2",
            "C. 96.15.2.4",
            "D. 198.15.110.112"
        ],
        "goodAnswer": "A. 134.192.16.1"
    },
    {
        "id": 568,
        "question": "Kt\u00f3ry program zosta\u0142 zastosowany w systemie Linux do szybkiego skanowania sieci?",
        "imageLoc": require("../assets/img/1671.png"),
        "answers": [
            "A. ttcp",
            "B. nmap",
            "C. webmin",
            "D. iptraf"
        ],
        "goodAnswer": "B. nmap"
    },
    {
        "id": 569,
        "question": "Przedstawione narz\u0119dzie s\u0142u\u017c\u0105ce do monitorowania sieci LAN to",
        "imageLoc": require("../assets/img/1775.png"),
        "answers": [
            "A. zapora sieciowa.",
            "B. konfigurator IP.",
            "C. konfigurator sieci.",
            "D. skaner port\u00f3w."
        ],
        "goodAnswer": "D. skaner port\u00f3w."
    },
    {
        "id": 570,
        "question": "Do prawid\u0142owego dzia\u0142ania telefonu VoIP konieczne jest skonfigurowanie adresu",
        "imageLoc": "",
        "answers": [
            "A. MAR/MAV",
            "B. rozg\u0142oszeniowego",
            "C. centrali ISDN",
            "D. IP"
        ],
        "goodAnswer": "D. IP"
    },
    {
        "id": 571,
        "question": "Dana jest sie\u0107 o adresie 172.16.0.0/16. Kt\u00f3re z adres\u00f3w sieci 172.16.0.0/16 s\u0105 prawid\u0142owe, je\u015bli zostan\u0105 wydzielone cztery podsieci o masce 18 bitowej?",
        "imageLoc": "",
        "answers": [
            "A. 172.16.0.0, 172.16.0.64, 172.16.0.128, 172.16.0.192",
            "B. 172.16.0.0, 172.16.64.0, 172.16.128.0, 172.16.192.0",
            "C. 172.16.64.0, 172.16.64.64, 172.16.64.128, 172.16.64.192",
            "D. 172.16.64.0, 172.16.0.128, 172.16.192.0, 172.16.0.255"
        ],
        "goodAnswer": "B. 172.16.0.0, 172.16.64.0, 172.16.128.0, 172.16.192.0"
    },
    {
        "id": 572,
        "question": "Liczb\u0105 dziesi\u0119tn\u0105, kt\u00f3ra odpowiada liczbie 11110101(U2), jest",
        "imageLoc": "",
        "answers": [
            "A. -245",
            "B. -11",
            "C. 245",
            "D. 11"
        ],
        "goodAnswer": "B. -11"
    },
    {
        "id": 573,
        "question": "System Linux Ubuntu zainstalowano na dysku obok systemu Windows. Aby skonfigurowa\u0107 kolejno\u015b\u0107 uruchamianych system\u00f3w operacyjnych, nale\u017cy zmodyfikowa\u0107 zawarto\u015b\u0107",
        "imageLoc": "",
        "answers": [
            "A. /etc/grud",
            "B. bcdedit",
            "C. boot.ini",
            "D. /etc/inittab"
        ],
        "goodAnswer": "A. /etc/grud"
    },
    {
        "id": 574,
        "question": "Aby uzyska\u0107 przepustowo\u015b\u0107 na poziomie 4 GB/s w ka\u017cd\u0105 stron\u0119, nale\u017cy zamontowa\u0107 w zestawie komputerowym kart\u0119 graficzn\u0105 wykorzystuj\u0105c\u0105 interfejs",
        "imageLoc": "",
        "answers": [
            "A. PCI-Express x 4 wersja 2.0",
            "B. PCI-Express x 8 wersja 1.0",
            "C. PCI-Express x 16 wersja 1.0",
            "D. PCI-Express x 1 wersja 3.0"
        ],
        "goodAnswer": "C. PCI-Express x 16 wersja 1.0"
    },
    {
        "id": 575,
        "question": "Zasilanie dostarczane przez p\u0142yt\u0119 g\u0142\u00f3wn\u0105 dla pami\u0119ci typu SDRAM DDR3 mo\u017ce mie\u0107 warto\u015b\u0107",
        "imageLoc": "",
        "answers": [
            "A. 1,2 V",
            "B. 3,3 V",
            "C. 2,5 V",
            "D. 1,5 V"
        ],
        "goodAnswer": "D. 1,5 V"
    },
    {
        "id": 576,
        "question": "Narz\u0119dziem systemu Windows, s\u0142u\u017c\u0105cym do sprawdzenia wp\u0142ywu poszczeg\u00f3lnych proces\u00f3w i us\u0142g na wydajno\u015b\u0107 procesora oraz tego, w jakim stopniu generuj\u0105 one obci\u0105\u017cenie pami\u0119ci czy dysku, jest",
        "imageLoc": "",
        "answers": [
            "A. resmon",
            "B. credwiz",
            "C. cleanmgr",
            "D. dcomcnfg"
        ],
        "goodAnswer": "A. resmon"
    },
    {
        "id": 577,
        "question": "Kt\u00f3ry typ kabla nale\u017cy zastosowa\u0107 do pod\u0142\u0105czenia komputera w pomieszczeniu z zak\u0142\u00f3ceniami elektromagnetycznymi?",
        "imageLoc": "",
        "answers": [
            "A. UTP Cat 6",
            "B. UTP Cat 5e",
            "C. FTP Cat 5e",
            "D. UTP Cat 5"
        ],
        "goodAnswer": "C. FTP Cat 5e"
    },
    {
        "id": 578,
        "question": "Aby mo\u017cliwe by\u0142o przesy\u0142anie cyfrowego sygna\u0142u audio i wideo bez strat jako\u015bci z komputera do urz\u0105dzenia zewn\u0119trznego pod\u0142\u0105czonego do wyj\u015bcia karty graficznej, to karta graficzna powinna by\u0107 wyposa\u017cona w interfejs",
        "imageLoc": "",
        "answers": [
            "A. VGA",
            "B. D-Sub",
            "C. DVI-A",
            "D. HDMI"
        ],
        "goodAnswer": "D. HDMI"
    },
    {
        "id": 579,
        "question": "Interfejs u\u017cywany do komunikacji mi\u0119dzy urz\u0105dzeniami przeno\u015bnymi, wykorzystuj\u0105cy cyfrow\u0105 transmisj\u0119 optyczn\u0105 bezprzewodow\u0105 do przesy\u0142ania danych na stosunkowo kr\u00f3tkim odcinku, to",
        "imageLoc": "",
        "answers": [
            "A. Bluetooth",
            "B. IEEE 1394c",
            "C. IEEE 1394a",
            "D. IrDA"
        ],
        "goodAnswer": "D. IrDA"
    },
    {
        "id": 580,
        "question": "Wska\u017c wtyk zasilaj\u0105cy, kt\u00f3ry podczas monta\u017cu zestawu komputerowego nale\u017cy pod\u0142\u0105czy\u0107 do nap\u0119du optycznego.",
        "imageLoc": require("../assets/img/864.png"),
        "answers": [
            "A. A",
            "B. B",
            "C. C",
            "D. D"
        ],
        "goodAnswer": "A. A"
    },
    {
        "id": 581,
        "question": "Dysk SSD to urz\u0105dzenie wykorzystuj\u0105ce",
        "imageLoc": "",
        "answers": [
            "A. pami\u0119\u0107 optyczn\u0105",
            "B. pami\u0119\u0107 ferromagnetyczn\u0105",
            "C. pami\u0119\u0107 b\u0119bnow\u0105",
            "D. pami\u0119\u0107 p\u00f3\u0142przewodnikow\u0105 flash"
        ],
        "goodAnswer": "D. pami\u0119\u0107 p\u00f3\u0142przewodnikow\u0105 flash"
    },
    {
        "id": 582,
        "question": "Jednym ze sposob\u00f3w utrudnienia osobom niepowo\u0142anym dost\u0119pu do sieci bezprzewodowej jest",
        "imageLoc": "",
        "answers": [
            "A. wy\u0142\u0105czenie rozg\u0142aszania identyfikatora sieci",
            "B. zmiana kana\u0142u nadawania sygna\u0142u",
            "C. wy\u0142\u0105czenie szyfrowania",
            "D. zmiana standardu szyfrowania z WPA na WEP"
        ],
        "goodAnswer": "A. wy\u0142\u0105czenie rozg\u0142aszania identyfikatora sieci"
    },
    {
        "id": 583,
        "question": "Wska\u017c zakres adres\u00f3w IP nale\u017c\u0105cy do klasy A, s\u0142u\u017c\u0105cy do adresacji prywatnej w sieciach komputerowych:",
        "imageLoc": "",
        "answers": [
            "A. 127.0.0.0 - 127.255.255.255",
            "B. 10.0.0.0 - 10.255.255.255",
            "C. 172.16.0.0 - 172.31.255.255",
            "D. 192.168.0.0 - 192.168.255.255"
        ],
        "goodAnswer": "B. 10.0.0.0 - 10.255.255.255"
    },
    {
        "id": 584,
        "question": "Uruchomienie systemu Windows jest niemo\u017cliwe z powodu usterki programowej. Aby dokona\u0107 mo\u017cliwie najmniej inwazyjnej diagnozy i usuni\u0119cia tej usterki, wskazane jest",
        "imageLoc": "",
        "answers": [
            "A. uruchomienie komputera w trybie awaryjnym",
            "B. wykonanie reinstalacji systemu Windows",
            "C. wykonanie diagnostyki podzespo\u0142\u00f3w",
            "D. wykonanie wymiany podzespo\u0142\u00f3w"
        ],
        "goodAnswer": "A. uruchomienie komputera w trybie awaryjnym"
    },
    {
        "id": 585,
        "question": "Za pomoc\u0105 ilu liczb szesnastkowych zapisuje si\u0119 pe\u0142n\u0105 posta\u0107 adresu IPv6?",
        "imageLoc": "",
        "answers": [
            "A. 16",
            "B. 12",
            "C. 8",
            "D. 24"
        ],
        "goodAnswer": "C. 8"
    },
    {
        "id": 586,
        "question": "Kompatybilne podzespo\u0142y oznaczono w tabeli numerami",
        "imageLoc": require("../assets/img/1726.png"),
        "answers": [
            "A. 2, 4, 5",
            "B. 1, 3, 5",
            "C. 1, 4, 6",
            "D. 2, 4, 6"
        ],
        "goodAnswer": "A. 2, 4, 5"
    },
    {
        "id": 587,
        "question": "W budynku biurowym nale\u017cy pod\u0142\u0105czy\u0107 komputer do routera ADSL przy u\u017cyciu przewodu UTP Cat 5e. Maksymalna odleg\u0142o\u015b\u0107 pomi\u0119dzy komputerem, a routerem powinna wynosi\u0107",
        "imageLoc": "",
        "answers": [
            "A. 500 m",
            "B. 100 m",
            "C. 50 m",
            "D. 185 m"
        ],
        "goodAnswer": "B. 100 m"
    },
    {
        "id": 588,
        "question": "Aby zainstalowa\u0107 serwer plik\u00f3w FTP na systemach rodziny Windows Server, nale\u017cy zainstalowa\u0107 rol\u0119 serwer",
        "imageLoc": "",
        "answers": [
            "A. sieci Web",
            "B. aplikacji",
            "C. DNS",
            "D. DHCP"
        ],
        "goodAnswer": "A. sieci Web"
    },
    {
        "id": 589,
        "question": "Urz\u0105dzenie peryferyjne przedstawione na rysunku to skaner biometryczny, wykorzystuj\u0105cy do autoryzacji",
        "imageLoc": require("../assets/img/1735.png"),
        "answers": [
            "A. rysy twarzy",
            "B. brzmienie g\u0142osu",
            "C. linie papilarne",
            "D. kszta\u0142t d\u0142oni"
        ],
        "goodAnswer": "C. linie papilarne"
    },
    {
        "id": 590,
        "question": "Do naprawy uszkodzenia sektora rozruchowego dysku w systemie Windows 7 nale\u017cy wykorzysta\u0107 polecenie",
        "imageLoc": "",
        "answers": [
            "A. bootrec /fixmbr",
            "B. fixmbr /all",
            "C. fixboot /renew",
            "D. nircmd /standby"
        ],
        "goodAnswer": "A. bootrec /fixmbr"
    },
    {
        "id": 591,
        "question": "Na nowym komputerze program antywirusowy nale\u017cy zainstalowa\u0107",
        "imageLoc": "",
        "answers": [
            "A. w trakcie instalacji systemu operacyjnego",
            "B. przed zainstalowaniem systemu operacyjnego",
            "C. zaraz po zainstalowaniu systemu operacyjnego",
            "D. po zainstalowaniu pobranych z Internetu program\u00f3w"
        ],
        "goodAnswer": "C. zaraz po zainstalowaniu systemu operacyjnego"
    },
    {
        "id": 592,
        "question": "W jednostce ALU do akumulatora zosta\u0142a wpisana liczba dziesi\u0119tna 240. Jaka jest jej binarna reprezentacja?",
        "imageLoc": "",
        "answers": [
            "A. 11111000",
            "B. 11111110",
            "C. 11110000",
            "D. 11111100"
        ],
        "goodAnswer": "C. 11110000"
    },
    {
        "id": 593,
        "question": "W dokumentacji technicznej efektywno\u015b\u0107 g\u0142o\u015bnika pod\u0142\u0105czonego do komputera zapisuje si\u0119 w jednostce:",
        "imageLoc": "",
        "answers": [
            "A. dB",
            "B. W",
            "C. J",
            "D. kHz"
        ],
        "goodAnswer": "A. dB"
    },
    {
        "id": 594,
        "question": "Translacja adres\u00f3w sieciowych jest oznaczona skr\u00f3tem",
        "imageLoc": "",
        "answers": [
            "A. DMZ",
            "B. SPI",
            "C. NAT",
            "D. IDS"
        ],
        "goodAnswer": "C. NAT"
    },
    {
        "id": 595,
        "question": "Kt\u00f3ry protok\u00f3\u0142 jest stosowany do pobierania wiadomo\u015bci e-mail z serwera poczty na komputer u\u017cytkownika",
        "imageLoc": "",
        "answers": [
            "A. POP3",
            "B. SMTP",
            "C. FTP",
            "D. HTTP"
        ],
        "goodAnswer": "A. POP3"
    },
    {
        "id": 596,
        "question": "Norma PN-EN 50173 zaleca instalowanie minimum",
        "imageLoc": "",
        "answers": [
            "A. 1 punktu rozdzielczego na ka\u017cde 250 m2 powierzchni",
            "B. 1 punktu rozdzielczego na ka\u017cde pi\u0119tro",
            "C. 1 punktu rozdzielczego na ka\u017cde 100 m2 powierzchni",
            "D. 1 punktu rozdzielczego na ca\u0142y wielopi\u0119trowy budynek"
        ],
        "goodAnswer": "B. 1 punktu rozdzielczego na ka\u017cde pi\u0119tro"
    },
    {
        "id": 597,
        "question": "Profil mobilny zmieniany jest w profil obowi\u0105zkowy u\u017cytkownika po",
        "imageLoc": "",
        "answers": [
            "A. zmianie nazwy pliku NTUSER.MAN na NTUSER.DAT",
            "B. zmianie nazwy pliku NTUSER.DAT na NTUSER.MAN",
            "C. usuni\u0119ciu pliku NTUSER.MAN",
            "D. usuni\u0119ciu pliku NTUSER.DAT"
        ],
        "goodAnswer": "B. zmianie nazwy pliku NTUSER.DAT na NTUSER.MAN"
    },
    {
        "id": 598,
        "question": "Przedstawiony panel tylny p\u0142yty g\u0142\u00f3wnej jest wyposa\u017cony w interfejsy:",
        "imageLoc": require("../assets/img/796.png"),
        "answers": [
            "A. 2 x USB 3.0; 4 x USB 2.0, 1.1, 1 x D-SUB",
            "B. 2 x USB 3.0; 2 x USB 2.0, 1.1; 2 x DP, 1 x DVI",
            "C. 2 x PS2; 1 x RJ45; 6 x USB 2.0, 1.1",
            "D. 2 x HDMI, 1 x D-SUB, 1 x RJ11, 6 x USB 2.0"
        ],
        "goodAnswer": "A. 2 x USB 3.0; 4 x USB 2.0, 1.1, 1 x D-SUB"
    },
    {
        "id": 599,
        "question": "Co nie powinno by\u0107 miejscem przechowywania kopii bezpiecze\u0144stwa danych znajduj\u0105cych si\u0119 na dysku twardym komputera?",
        "imageLoc": "",
        "answers": [
            "A. Pami\u0119\u0107 USB",
            "B. Dysk zewn\u0119trzny",
            "C. P\u0142yta CD/DVD",
            "D. Inna partycja dysku tego komputera"
        ],
        "goodAnswer": "D. Inna partycja dysku tego komputera"
    },
    {
        "id": 600,
        "question": "Aby umo\u017cliwi\u0107 komunikacj\u0119 urz\u0105dzenia mobilnego z komputerem przez interfejs Bluetooth, nale\u017cy",
        "imageLoc": "",
        "answers": [
            "A. skonfigurowa\u0107 urz\u0105dzenie mobilne przez przegl\u0105dark\u0119",
            "B. po\u0142\u0105czy\u0107 urz\u0105dzenia kablem krosowym",
            "C. utworzy\u0107 sie\u0107 WAN dla urz\u0105dze\u0144",
            "D. wykona\u0107 parowanie urz\u0105dze\u0144"
        ],
        "goodAnswer": "D. wykona\u0107 parowanie urz\u0105dze\u0144"
    },
    {
        "id": 601,
        "question": "Kt\u00f3re urz\u0105dzenie zosta\u0142o przedstawione na rysunku?",
        "imageLoc": require("../assets/img/1689.png"),
        "answers": [
            "A. Modem",
            "B. Ruter",
            "C. Punkt dost\u0119pu",
            "D. Prze\u0142\u0105cznik"
        ],
        "goodAnswer": "C. Punkt dost\u0119pu"
    },
    {
        "id": 602,
        "question": "Pomiar t\u0142umienia w kablowym torze transmisyjnym pozwala okre\u015bli\u0107",
        "imageLoc": "",
        "answers": [
            "A. r\u00f3\u017cnice miedzy przes\u0142uchami zdalnymi",
            "B. b\u0142\u0119dy instalacyjne typu zamiana pary",
            "C. spadek mocy sygna\u0142u w danej parze przewodu",
            "D. czas op\u00f3\u017anienia propagacji"
        ],
        "goodAnswer": "C. spadek mocy sygna\u0142u w danej parze przewodu"
    },
    {
        "id": 603,
        "question": "Do pod\u0142\u0105czenia projektora multimedialnego do komputera, NIE mo\u017cna u\u017cy\u0107 z\u0142\u0105cza",
        "imageLoc": "",
        "answers": [
            "A. USB",
            "B. D-SUB",
            "C. SATA",
            "D. HDMI"
        ],
        "goodAnswer": "C. SATA"
    },
    {
        "id": 604,
        "question": "Rysunek przedstawia symbol graficzny",
        "imageLoc": require("../assets/img/1295.png"),
        "answers": [
            "A. rutera",
            "B. prze\u0142\u0105cznika",
            "C. punktu dost\u0119powego",
            "D. mostu"
        ],
        "goodAnswer": "B. prze\u0142\u0105cznika"
    },
    {
        "id": 605,
        "question": "Do monitorowania stanu urz\u0105dze\u0144 w sieci jest stosowane oprogramowanie dzia\u0142aj\u0105ce w oparciu o protok\u00f3\u0142",
        "imageLoc": "",
        "answers": [
            "A. STP (SpanningTreeProtocol)",
            "B. SMTP (Simple Mail Transport Protocol)",
            "C. FTP (File Transfer Protocol)",
            "D. SNMP (Simple Network Management Protocol)"
        ],
        "goodAnswer": "D. SNMP (Simple Network Management Protocol)"
    },
    {
        "id": 606,
        "question": "System umo\u017cliwiaj\u0105cy przet\u0142umaczenie nazwy komputera na adres IP w sieci to",
        "imageLoc": "",
        "answers": [
            "A. ARP",
            "B. ICMP",
            "C. NetBEUI",
            "D. DNS"
        ],
        "goodAnswer": "D. DNS"
    },
    {
        "id": 607,
        "question": "Maska dla adresu IP 192.168.1.10/8 ma posta\u0107",
        "imageLoc": "",
        "answers": [
            "A. 255.0.255.0",
            "B. 255.0.0.0",
            "C. 255.255.255.0",
            "D. 255.255.0.0"
        ],
        "goodAnswer": "B. 255.0.0.0"
    },
    {
        "id": 608,
        "question": "Na rysunku przedstawiona jest karta",
        "imageLoc": require("../assets/img/1805.png"),
        "answers": [
            "A. kontrolera RAID",
            "B. kontrolera SCSI",
            "C. sieciowa Token Ring",
            "D. sieciowa Fibre Channel"
        ],
        "goodAnswer": "D. sieciowa Fibre Channel"
    },
    {
        "id": 609,
        "question": "Przedstawione na rysunku narz\u0119dzie s\u0142u\u017cy do testowania",
        "imageLoc": require("../assets/img/1296.png"),
        "answers": [
            "A. zasilacza.",
            "B. karty sieciowej.",
            "C. okablowania LAN.",
            "D. p\u0142yty g\u0142\u00f3wnej."
        ],
        "goodAnswer": "C. okablowania LAN."
    },
    {
        "id": 610,
        "question": "Jednym z zalece\u0144 dotycz\u0105cych ochrony antywirusowej jest skanowanie ca\u0142ego komputera. Zgodnie z tym zaleceniem komputer nale\u017cy skanowa\u0107",
        "imageLoc": "",
        "answers": [
            "A. systematycznie, na przyk\u0142ad raz w tygodniu",
            "B. jedynie po aktualizacji baz programu antywirusowego",
            "C. tylko wtedy, gdy nie dzia\u0142a w systemie monitor antywirusowy",
            "D. jedynie w sytuacji, gdy podejrzewamy zainfekowanie wirusem"
        ],
        "goodAnswer": "A. systematycznie, na przyk\u0142ad raz w tygodniu"
    },
    {
        "id": 611,
        "question": "Wska\u017c z\u0142\u0105cze, kt\u00f3re NIE wyst\u0119puje w zasilaczach ATX",
        "imageLoc": "",
        "answers": [
            "A. SATA Connector",
            "B. MPC",
            "C. DE-15/HD-15",
            "D. PCI-E"
        ],
        "goodAnswer": "C. DE-15/HD-15"
    },
    {
        "id": 612,
        "question": "Kt\u00f3re urz\u0105dzenie NIE powinno by\u0107 naprawiane w trakcie u\u017cywania urz\u0105dze\u0144 antystatycznych?",
        "imageLoc": "",
        "answers": [
            "A. Modem",
            "B. Pami\u0119\u0107",
            "C. Zasilacz",
            "D. Dysk twardy"
        ],
        "goodAnswer": "C. Zasilacz"
    },
    {
        "id": 613,
        "question": "Kt\u00f3ry z port\u00f3w panelu tylnego p\u0142yty g\u0142\u00f3wnej jest oznaczany w dokumentacji jako port standardu RS232C?",
        "imageLoc": "",
        "answers": [
            "A. LPT",
            "B. USB",
            "C. PS/2",
            "D. COM"
        ],
        "goodAnswer": "D. COM"
    },
    {
        "id": 614,
        "question": "Karta sieciowa standardu Fast Ethernet pozwala na transfer danych z maksymaln\u0105 szybko\u015bci\u0105",
        "imageLoc": "",
        "answers": [
            "A. 10 MB/s",
            "B. 100 Mbps",
            "C. 100 MB/s",
            "D. 10 Mbps"
        ],
        "goodAnswer": "B. 100 Mbps"
    },
    {
        "id": 615,
        "question": "Kt\u00f3ra z cech charakteryzuje prze\u0142\u0105cznik sieciowy?",
        "imageLoc": "",
        "answers": [
            "A. Z otrzymanych ramek odczytuje adresy MAC",
            "B. U\u017cywa protoko\u0142u EIGRP",
            "C. Z przesy\u0142anych pakiet\u00f3w odczytuje docelowe adresy IP",
            "D. Operuje na porcjach danych zwanych segmentami"
        ],
        "goodAnswer": "A. Z otrzymanych ramek odczytuje adresy MAC"
    },
    {
        "id": 616,
        "question": "W czasie uruchamiania (kr\u00f3tko po te\u015bcie POST) komputer zawiesza si\u0119. Co mo\u017ce by\u0107 przyczyn\u0105 takiej usterki?",
        "imageLoc": "",
        "answers": [
            "A. Zbyt du\u017co ikon na pulpicie",
            "B. Niew\u0142a\u015bciwe napi\u0119cie zasilania procesora",
            "C. \u0179le skonfigurowana drukarka",
            "D. Brak pod\u0142\u0105czonej myszki komputerowej"
        ],
        "goodAnswer": "B. Niew\u0142a\u015bciwe napi\u0119cie zasilania procesora"
    },
    {
        "id": 617,
        "question": "Kt\u00f3re elementy systemu komputerowego podlegaj\u0105 utylizacji w wyspecjalizowanych zak\u0142adach przetwarzania z uwagi na zawarto\u015b\u0107 niebezpiecznych substancji lub pierwiastk\u00f3w chemicznych?",
        "imageLoc": "",
        "answers": [
            "A. Tonery",
            "B. Obudowy komputer\u00f3w",
            "C. Przewody",
            "D. Radiatory"
        ],
        "goodAnswer": "A. Tonery"
    },
    {
        "id": 618,
        "question": "Kt\u00f3rym poleceniem systemu Linux poprawnie skonfigurowano kart\u0119 sieciow\u0105, podaj\u0105c adres IP i mask\u0119 sieci dla interfejsu eth1?",
        "imageLoc": "",
        "answers": [
            "A. ifconfig eth1 192.168.1.0 netmask 255.255.255.0",
            "B. ifconfig eth1 192.168.1.0 netmask 0.255.255.255",
            "C. ifconfig eth1 192.168.1.1 netmask 255.255.255.0",
            "D. ifconfig eth1 192.168.1.255 netmask 255.255.255.0"
        ],
        "goodAnswer": "C. ifconfig eth1 192.168.1.1 netmask 255.255.255.0"
    },
    {
        "id": 619,
        "question": "Z jak\u0105 najni\u017csz\u0105 efektywn\u0105 cz\u0119stotliwo\u015bci\u0105 taktowania mog\u0105 wsp\u00f3\u0142pracowa\u0107 pami\u0119ci DDR2?",
        "imageLoc": "",
        "answers": [
            "A. 800 MHz",
            "B. 533 MHz",
            "C. 333 MHz",
            "D. 233 MHz"
        ],
        "goodAnswer": "B. 533 MHz"
    },
    {
        "id": 620,
        "question": "Narz\u0119dziem s\u0142u\u017c\u0105cym do po\u0142\u0105czenia pigtaila z w\u0142\u00f3knami kabla \u015bwiat\u0142owodowego jest",
        "imageLoc": "",
        "answers": [
            "A. stacja lutownicza, wykorzystuj\u0105ca mikroprocesor do regulacji temperatury",
            "B. spawarka \u015bwiat\u0142owodowa, spajaj\u0105ca w\u0142\u00f3kna za pomoc\u0105 \u0142uku elektrycznego",
            "C. przed\u0142u\u017cacz kategorii 5e z zestawem pasywnych kabli o pr\u0119dko\u015bci po\u0142\u0105czenia 100 Mb/s",
            "D. narz\u0119dzie zaciskowe do wtyk\u00f3w RJ45, wyposa\u017cone w odpowiednie dla kabla gniazdo"
        ],
        "goodAnswer": "B. spawarka \u015bwiat\u0142owodowa, spajaj\u0105ca w\u0142\u00f3kna za pomoc\u0105 \u0142uku elektrycznego"
    },
    {
        "id": 621,
        "question": "Podstawow\u0105 czynno\u015bci\u0105 eksploatacyjn\u0105 drukarki ig\u0142owej jest wymiana pojemnika",
        "imageLoc": "",
        "answers": [
            "A. z atramentem.",
            "B. z ta\u015bm\u0105.",
            "C. z fluidem.",
            "D. z tonerem."
        ],
        "goodAnswer": "B. z ta\u015bm\u0105."
    },
    {
        "id": 622,
        "question": "Tworzenie zaszyfrowanych po\u0142\u0105cze\u0144 mi\u0119dzy hostami przez sie\u0107 publiczn\u0105 Internet, stosowane w po\u0142\u0105czeniach VPN (V irtual Private Network), to",
        "imageLoc": "",
        "answers": [
            "A. mostkowanie",
            "B. trasowanie",
            "C. tunelowanie",
            "D. mapowanie"
        ],
        "goodAnswer": "C. tunelowanie"
    },
    {
        "id": 623,
        "question": "Do centralnego zarz\u0105dzania konfiguracj\u0105 grup komputer\u00f3w i u\u017cytkownik\u00f3w w systemach Windows Server nale\u017cy zastosowa\u0107 narz\u0119dzie",
        "imageLoc": "",
        "answers": [
            "A. MMC",
            "B. UNC",
            "C. RDP",
            "D. GPMC"
        ],
        "goodAnswer": "D. GPMC"
    },
    {
        "id": 624,
        "question": "Wykonanie polecenia NET USER GRACZ * /ADD zapisanego w wierszu polece\u0144 Windows spowoduje",
        "imageLoc": "",
        "answers": [
            "A. dodanie konta GRACZ bez has\u0142a i przypisanie mu uprawnie\u0144 administratora komputera",
            "B. wy\u015bwietlenie komunikatu o niew\u0142a\u015bciwej sk\u0142adni polecenia",
            "C. wy\u015bwietlenie monitu o podanie has\u0142a",
            "D. dodanie konta GRACZ z has\u0142em *"
        ],
        "goodAnswer": "C. wy\u015bwietlenie monitu o podanie has\u0142a"
    },
    {
        "id": 625,
        "question": "Ile dzia\u0142 elektronowych posiada matryca LCD?",
        "imageLoc": "",
        "answers": [
            "A. 0",
            "B. 2",
            "C. 1",
            "D. 3"
        ],
        "goodAnswer": "A. 0"
    },
    {
        "id": 626,
        "question": "Przedstawiona karta przechwytuj\u0105ca wideo b\u0119dzie wsp\u00f3\u0142pracowa\u0142a z p\u0142yt\u0105 g\u0142\u00f3wn\u0105 wyposa\u017con\u0105 w port",
        "imageLoc": require("../assets/img/1480.png"),
        "answers": [
            "A. eSATA",
            "B. PCI-e",
            "C. 1-Wire",
            "D. AGP"
        ],
        "goodAnswer": "B. PCI-e"
    },
    {
        "id": 627,
        "question": "Aby odczyta\u0107 adres serwera DNS w konfiguracji karty sieciowej systemu z rodziny Windows nale\u017cy wykona\u0107 polecenie",
        "imageLoc": "",
        "answers": [
            "A. ping",
            "B. arp -a",
            "C. ipconfig",
            "D. ipconfig /all"
        ],
        "goodAnswer": "D. ipconfig /all"
    },
    {
        "id": 628,
        "question": "Ile par przewod\u00f3w jest przeznaczonych w standardzie 100Base-TX do transmisji danych w obu kierunkach?",
        "imageLoc": "",
        "answers": [
            "A. 8",
            "B. 4",
            "C. 1",
            "D. 2"
        ],
        "goodAnswer": "D. 2"
    },
    {
        "id": 629,
        "question": "Kt\u00f3ry rodzaj rozbudowy serwera wymaga instalacji dodatkowych sterownik\u00f3w?",
        "imageLoc": "",
        "answers": [
            "A. Dodanie pami\u0119ci RAM",
            "B. Monta\u017c kolejnej karty sieciowej",
            "C. Dodanie dysk\u00f3w fizycznych",
            "D. Monta\u017c kolejnego procesora"
        ],
        "goodAnswer": "B. Monta\u017c kolejnej karty sieciowej"
    },
    {
        "id": 630,
        "question": "Hosty A i B nie komunikuj\u0105 si\u0119 z hostem C. Mi\u0119dzy hostami A i B komunikacja jest prawid\u0142owa. Co jest przyczyn\u0105 braku komunikacji mi\u0119dzy hostami A i C oraz B i C?",
        "imageLoc": require("../assets/img/1238.png"),
        "answers": [
            "A. Adresy IP nale\u017c\u0105 do r\u00f3\u017cnych podsieci",
            "B. Switch, do kt\u00f3rego s\u0105 podpi\u0119te hosty, jest wy\u0142\u0105czony",
            "C. Adres IP hosta C jest adresem rozg\u0142oszeniowym",
            "D. Host C ma \u017ale ustawion\u0105 bram\u0119 domy\u015bln\u0105"
        ],
        "goodAnswer": "A. Adresy IP nale\u017c\u0105 do r\u00f3\u017cnych podsieci"
    },
    {
        "id": 631,
        "question": "Pokazany na rysunku symbol graficzny oznacza z\u0142\u0105cze",
        "imageLoc": require("../assets/img/353.png"),
        "answers": [
            "A. FIRE WIRE",
            "B. COM",
            "C. DVI",
            "D. HDMI"
        ],
        "goodAnswer": "A. FIRE WIRE"
    },
    {
        "id": 632,
        "question": "Jaki zakres adres\u00f3w obejmuj\u0105 adresy klasy C?",
        "imageLoc": "",
        "answers": [
            "A. 128.0.0.1 - 191.255.255.254",
            "B. 1.0.0.1 - 126.255.255.254",
            "C. 224.0.0.1 - 239.255.255.0",
            "D. 192.0.0.0 - 223.255.255.255"
        ],
        "goodAnswer": "D. 192.0.0.0 - 223.255.255.255"
    },
    {
        "id": 633,
        "question": "Komputer wyposa\u017cony w BIOS firmy Award wygenerowa\u0142 komunikat o tre\u015bci Primary/Secondary master/slave hard disk fail. Komunikat ten mo\u017ce oznacza\u0107 konieczno\u015b\u0107 wymiany",
        "imageLoc": "",
        "answers": [
            "A. pami\u0119ci operacyjnej",
            "B. dysku twardego",
            "C. karty graficznej",
            "D. klawiatury"
        ],
        "goodAnswer": "B. dysku twardego"
    },
    {
        "id": 634,
        "question": "Zainstalowanie serwera stron internetowych w rodzinie system\u00f3w Windows Server umo\u017cliwia rola",
        "imageLoc": "",
        "answers": [
            "A. us\u0142ugi pulpitu zdalnego",
            "B. us\u0142ugi plik\u00f3w",
            "C. serwer sieci Web",
            "D. serwer aplikacji"
        ],
        "goodAnswer": "C. serwer sieci Web"
    },
    {
        "id": 635,
        "question": "Kt\u00f3ry z adres\u00f3w jest adresem rozg\u0142oszeniowym sieci 172.16.64.0/26?",
        "imageLoc": "",
        "answers": [
            "A. 172.16.64.255",
            "B. 172.16.64.0",
            "C. 172.16.64.192",
            "D. 172.16.64.63"
        ],
        "goodAnswer": "D. 172.16.64.63"
    },
    {
        "id": 636,
        "question": "Powodem niekontrolowanego zape\u0142nienia dysku mo\u017ce by\u0107",
        "imageLoc": "",
        "answers": [
            "A. wirus komputerowy",
            "B. zbyt ma\u0142e jednostki alokacji plik\u00f3w",
            "C. \u017ale skonfigurowana pami\u0119\u0107 wirtualna",
            "D. cz\u0119sta defragmentacja"
        ],
        "goodAnswer": "A. wirus komputerowy"
    },
    {
        "id": 637,
        "question": "Planuj\u0105c wykorzystanie miejsca na dysku komputera do przechowywania i udost\u0119pniania takich informacji jak pliki i aplikacje dost\u0119pne w sieci oraz zarz\u0105dzania nimi, nale\u017cy skonfigurowa\u0107 komputer jako",
        "imageLoc": "",
        "answers": [
            "A. serwer DHCP",
            "B. serwer plik\u00f3w",
            "C. serwer terminali",
            "D. serwer aplikacji"
        ],
        "goodAnswer": "B. serwer plik\u00f3w"
    },
    {
        "id": 638,
        "question": "Je\u015bli jednostka alokacji ma 1024 bajty, to pliki zamieszczone w tabeli zajm\u0105 na dysku:",
        "imageLoc": require("../assets/img/283.png"),
        "answers": [
            "A. 4 klastry",
            "B. 3 klastry",
            "C. 6 klastr\u00f3w",
            "D. 5 klastr\u00f3w"
        ],
        "goodAnswer": "D. 5 klastr\u00f3w"
    },
    {
        "id": 639,
        "question": "Kable \u0142\u0105cz\u0105ce kondygnacyjne punkty dystrybucyjne z g\u0142\u00f3wnym punktem dystrybucyjnym nazywa si\u0119",
        "imageLoc": "",
        "answers": [
            "A. po\u0142\u0105czeniami telekomunikacyjnymi",
            "B. po\u0142\u0105czeniami systemowymi",
            "C. okablowaniem poziomym",
            "D. okablowaniem pionowym"
        ],
        "goodAnswer": "D. okablowaniem pionowym"
    },
    {
        "id": 640,
        "question": "Maska podsieci /23 oznacza, \u017ce na pierwszych 23 bitach 32-cyfrowej liczby binarnej znajduj\u0105 si\u0119 jedynki, a na pozosta\u0142ych zera. Jak b\u0119dzie zapisana ta maska w systemie dziesi\u0119tnym, je\u017celi ka\u017cdym kolejnym 8 bitom odpowiada jedna liczba dziesi\u0119tna?",
        "imageLoc": "",
        "answers": [
            "A. 255.255.254.0",
            "B. 255.255.0.0",
            "C. 255.255.255.0",
            "D. 255.255.255.128"
        ],
        "goodAnswer": "A. 255.255.254.0"
    },
    {
        "id": 641,
        "question": "Zasady budowy systemu okablowania strukturalnego, specyfikacja parametr\u00f3w kabli oraz procedury testowania obowi\u0105zuj\u0105ce w Polsce zosta\u0142y zawarte w normach",
        "imageLoc": "",
        "answers": [
            "A. EN 50169",
            "B. PN-EN 50173",
            "C. PN-EN 50310",
            "D. EN 50167"
        ],
        "goodAnswer": "B. PN-EN 50173"
    },
    {
        "id": 642,
        "question": "Kt\u00f3ry zapis w systemie binarnym odpowiada liczbie 111 zapisanej w systemie dziesi\u0119tnym?",
        "imageLoc": "",
        "answers": [
            "A. 1111110",
            "B. 1110111",
            "C. 1101111",
            "D. 1111111"
        ],
        "goodAnswer": "C. 1101111"
    },
    {
        "id": 643,
        "question": "AppLocker to narz\u0119dzie w systemach Windows Server s\u0142u\u017c\u0105ce do",
        "imageLoc": "",
        "answers": [
            "A. zarz\u0105dzania partycjami dysk\u00f3w twardych przy u\u017cyciu interpretera polece\u0144 PowerShell.",
            "B. nadawania uprawnie\u0144 do plik\u00f3w i katalog\u00f3w zawieraj\u0105cych dane u\u017cytkownik",
            "C. tworzenia regu\u0142 kontroluj\u0105cych uruchamianie aplikacji dla u\u017cytkownik\u00f3w lub grup.",
            "D. szyfrowania partycji systemowej, z wyj\u0105tkiem partycji rozruchowej."
        ],
        "goodAnswer": "C. tworzenia regu\u0142 kontroluj\u0105cych uruchamianie aplikacji dla u\u017cytkownik\u00f3w lub grup."
    },
    {
        "id": 644,
        "question": "Na rysunku zosta\u0142 przedstawiony schemat budowy logicznej",
        "imageLoc": require("../assets/img/1843.png"),
        "answers": [
            "A. myszy komputerowej",
            "B. karty graficznej",
            "C. procesora",
            "D. klawiatury"
        ],
        "goodAnswer": "C. procesora"
    },
    {
        "id": 645,
        "question": "U\u017cytkownik systemu Windows wybra\u0142 opcj\u0119 powr\u00f3t do punktu przywracania. Kt\u00f3re pliki powsta\u0142e po wybranym punkcie NIE zostan\u0105 naruszone przez t\u0119 akcj\u0119?",
        "imageLoc": "",
        "answers": [
            "A. Pliki osobiste",
            "B. Pliki aplikacji",
            "C. Pliki aktualizacji",
            "D. Pliki sterownik\u00f3w"
        ],
        "goodAnswer": "A. Pliki osobiste"
    },
    {
        "id": 646,
        "question": "W sieci lokalnej protoko\u0142em dynamicznej konfiguracji adres\u00f3w IP jest",
        "imageLoc": "",
        "answers": [
            "A. FTP",
            "B. DNS",
            "C. TCP/IP",
            "D. DHCP"
        ],
        "goodAnswer": "D. DHCP"
    },
    {
        "id": 647,
        "question": "Standard ACPI BIOSu komputera odpowiada za",
        "imageLoc": "",
        "answers": [
            "A. sprawdzanie poprawno\u015bci dzia\u0142ania podstawowych podzespo\u0142\u00f3w p\u0142yty g\u0142\u00f3wnej",
            "B. zarz\u0105dzanie energi\u0105 i konfiguracj\u0105",
            "C. zapami\u0119tanie kolejno\u015bci bootowania",
            "D. zmian\u0119 ustawie\u0144 BIOSu"
        ],
        "goodAnswer": "B. zarz\u0105dzanie energi\u0105 i konfiguracj\u0105"
    },
    {
        "id": 648,
        "question": "Do zabezpieczenia system\u00f3w sieciowych przed atakami z zewn\u0105trz nale\u017cy u\u017cy\u0107",
        "imageLoc": "",
        "answers": [
            "A. menad\u017cera po\u0142\u0105cze\u0144",
            "B. serwera DHCP",
            "C. protoko\u0142u SSH",
            "D. zapory sieciowej"
        ],
        "goodAnswer": "D. zapory sieciowej"
    },
    {
        "id": 649,
        "question": "Do realizacji alternatywy logicznej z negacj\u0105 nale\u017cy u\u017cy\u0107 funktora",
        "imageLoc": "",
        "answers": [
            "A. EX-OR",
            "B. OR",
            "C. NAND",
            "D. NOR"
        ],
        "goodAnswer": "D. NOR"
    },
    {
        "id": 650,
        "question": "Kt\u00f3re polecenie w systemie Windows nale\u017cy zastosowa\u0107 do monitorowania listy aktywnych po\u0142\u0105cze\u0144 karty sieciowej w komputerze?",
        "imageLoc": "",
        "answers": [
            "A. Netstat",
            "B. Ping",
            "C. Telnet",
            "D. Ipconfig"
        ],
        "goodAnswer": "A. Netstat"
    },
    {
        "id": 651,
        "question": "Poleceniem s\u0142u\u017c\u0105cym do aktualizowania systemu operacyjnego Linux z bazami RPM jest",
        "imageLoc": "",
        "answers": [
            "A. upgrade",
            "B. zypper",
            "C. nm",
            "D. chmode"
        ],
        "goodAnswer": "B. zypper"
    },
    {
        "id": 652,
        "question": "Typem pami\u0119ci operacyjnej o mo\u017cliwie najmniejszym poborze mocy jest",
        "imageLoc": "",
        "answers": [
            "A. DDR2",
            "B. DDR",
            "C. DDR3",
            "D. SDR"
        ],
        "goodAnswer": "C. DDR3"
    },
    {
        "id": 653,
        "question": "W standardzie IEEE 802.3af dostarczanie energii elektrycznej do r\u00f3\u017cnych urz\u0105dze\u0144 sieciowych opisuje technologia",
        "imageLoc": "",
        "answers": [
            "A. Power over Ethernet",
            "B. Power over Classifications",
            "C. Power over Internet",
            "D. Power under Control"
        ],
        "goodAnswer": "A. Power over Ethernet"
    },
    {
        "id": 654,
        "question": "Najmniejszymi k\u0105tami widzenia charakteryzuj\u0105 si\u0119 matryce monitor\u00f3w typu",
        "imageLoc": "",
        "answers": [
            "A. MVA",
            "B. TN",
            "C. PVA",
            "D. IPS/S-IPS"
        ],
        "goodAnswer": "B. TN"
    },
    {
        "id": 655,
        "question": "Okre\u015bl wielko\u015b\u0107 klastra na podstawie zamieszczonego fragmentu komunikatu systemu WINDOWS wy\u015bwietlonego po zako\u0144czeniu dzia\u0142ania programu format a:",
        "imageLoc": require("../assets/img/81.png"),
        "answers": [
            "A. 512 KB",
            "B. 12 bit\u00f3w",
            "C. 1 457 664 bajt\u00f3w",
            "D. 0,5 KB"
        ],
        "goodAnswer": "D. 0,5 KB"
    },
    {
        "id": 656,
        "question": "Konfiguracja rutingu statycznego na ruterze polega na",
        "imageLoc": "",
        "answers": [
            "A. przesy\u0142aniu kopii danych z wybranych port\u00f3w rutera na wskazany port docelowy.",
            "B. zdefiniowaniu adresu IP serwera DNS przekazywanego przez serwer DHCP.",
            "C. wskazaniu adresu sieci docelowej wraz z jej mask\u0105 oraz podaniu adresu lub interfejsu do przes\u0142ania danych do zadanej sieci.",
            "D. zarz\u0105dzaniu jako\u015bci\u0105 us\u0142ug poprzez okre\u015blenie priorytetu transmisji dla ka\u017cdego z port\u00f3w urz\u0105dzenia."
        ],
        "goodAnswer": "C. wskazaniu adresu sieci docelowej wraz z jej mask\u0105 oraz podaniu adresu lub interfejsu do przes\u0142ania danych do zadanej sieci."
    },
    {
        "id": 657,
        "question": "Zdj\u0119cie przedstawia 168-stykow\u0105 pami\u0119\u0107",
        "imageLoc": require("../assets/img/169.png"),
        "answers": [
            "A. SDRAM",
            "B. SIPP",
            "C. SIMM",
            "D. RIMM"
        ],
        "goodAnswer": "A. SDRAM"
    },
    {
        "id": 658,
        "question": "Mened\u017cer urz\u0105dze\u0144 w systemie Windows pozwala na wykrycie",
        "imageLoc": "",
        "answers": [
            "A. niew\u0142a\u015bciwej pracy urz\u0105dze\u0144 pod\u0142\u0105czonych do komputera.",
            "B. . b\u0142\u0119dnej konfiguracji rozruchu systemu oraz wykonywanych us\u0142ug.",
            "C. nieprawid\u0142owej konfiguracji oprogramowania u\u017cytkowego.",
            "D. b\u0142\u0119d\u00f3w systemu operacyjnego podczas jego pracy."
        ],
        "goodAnswer": "A. niew\u0142a\u015bciwej pracy urz\u0105dze\u0144 pod\u0142\u0105czonych do komputera."
    },
    {
        "id": 659,
        "question": "Kt\u00f3re polecenie systemu Linux wy\u015bwietla list\u0119 proces\u00f3w aktualnie dzia\u0142aj\u0105cych w systemie?",
        "imageLoc": "",
        "answers": [
            "A. fsck",
            "B. top",
            "C. ls",
            "D. lspci"
        ],
        "goodAnswer": "B. top"
    },
    {
        "id": 660,
        "question": "Jak nazywany jest proces dok\u0142adania do danych z warstwy aplikacji informacji zwi\u0105zanych z protoko\u0142ami dzia\u0142aj\u0105cymi na poszczeg\u00f3lnych warstwach modelu sieciowego?",
        "imageLoc": "",
        "answers": [
            "A. Segmentacja.",
            "B. Dekodowanie.",
            "C. Multipleksacja.",
            "D. Enkapsulacja."
        ],
        "goodAnswer": "D. Enkapsulacja."
    },
    {
        "id": 661,
        "question": "U\u017cytkownicy korzystaj\u0105cy z sieci Wi-Fi zaobserwowali zaburzenia i cz\u0119st\u0105 utrat\u0119 po\u0142\u0105czenia z sieci\u0105. Powodem takiego stanu rzeczy mo\u017ce by\u0107",
        "imageLoc": "",
        "answers": [
            "A. zbyt s\u0142aby sygna\u0142",
            "B. niedzia\u0142aj\u0105cy serwer DHCP",
            "C. b\u0142\u0119dne has\u0142o do sieci",
            "D. z\u0142y spos\u00f3b szyfrowania sieci"
        ],
        "goodAnswer": "A. zbyt s\u0142aby sygna\u0142"
    },
    {
        "id": 662,
        "question": "Zdj\u0119cie przedstawia",
        "imageLoc": require("../assets/img/896.png"),
        "answers": [
            "A. Prze\u0142\u0105cznik",
            "B. Most",
            "C. Router",
            "D. Punkt dost\u0119powy"
        ],
        "goodAnswer": "A. Prze\u0142\u0105cznik"
    },
    {
        "id": 663,
        "question": "Kt\u00f3ry zakres grupy domy\u015blnie jest ustawiony dla nowo utworzonej grupy w kontrolerze domeny systemu Windows Serwer?",
        "imageLoc": "",
        "answers": [
            "A. Lokalny w domenie",
            "B. Dystrybucyjny",
            "C. Globalny",
            "D. Uniwersalny"
        ],
        "goodAnswer": "C. Globalny"
    },
    {
        "id": 664,
        "question": "Autorskie prawo maj\u0105tkowe tw\u00f3rcy do programu komputerowego",
        "imageLoc": "",
        "answers": [
            "A. nie jest ograniczone w czasie",
            "B. nie jest prawem zbywalnym",
            "C. trwa 25 lat od daty pierwszej publikacji",
            "D. mo\u017cna przenosi\u0107 na inn\u0105 osob\u0119"
        ],
        "goodAnswer": "D. mo\u017cna przenosi\u0107 na inn\u0105 osob\u0119"
    },
    {
        "id": 665,
        "question": "Zakres we/wy kontrolera DMA zapisany w postaci heksadecymalnej wynosi 0094-009F, a w systemie dziesi\u0119tnym",
        "imageLoc": "",
        "answers": [
            "A. 2368-2544",
            "B. 148-159",
            "C. 1168-3984",
            "D. 73-249"
        ],
        "goodAnswer": "B. 148-159"
    },
    {
        "id": 666,
        "question": "Kt\u00f3ry program zosta\u0142 zastosowany w systemie Linux do szybkiego skanowania sieci?",
        "imageLoc": require("../assets/img/1516.png"),
        "answers": [
            "A. webmin",
            "B. iptraf",
            "C. ttcp",
            "D. nmap"
        ],
        "goodAnswer": "D. nmap"
    },
    {
        "id": 667,
        "question": "Pierwsze znaki heksadecymalne adresu IPv6 typu link-local to",
        "imageLoc": "",
        "answers": [
            "A. FE80",
            "B. 2000",
            "C. 3000",
            "D. FF30"
        ],
        "goodAnswer": "A. FE80"
    },
    {
        "id": 668,
        "question": "Na rysunku przedstawiono sie\u0107 o topologii",
        "imageLoc": require("../assets/img/1071.png"),
        "answers": [
            "A. gwiazdy",
            "B. siatki",
            "C. drzewa",
            "D. magistrali"
        ],
        "goodAnswer": "D. magistrali"
    },
    {
        "id": 669,
        "question": "Kt\u00f3re zdanie opisuje protok\u00f3\u0142 SSH (Secure Shell)?",
        "imageLoc": "",
        "answers": [
            "A. Sesje SSH nie pozwalaj\u0105 okre\u015bli\u0107, czy punkty ko\u0144cowe s\u0105 autentyczne",
            "B. Sesje SSH powoduj\u0105 wysy\u0142anie zwyk\u0142ego tekstu, niezaszyfrowanych danych",
            "C. Protok\u00f3\u0142 do zdalnej pracy na odleg\u0142ym komputerze nie zapewnia kodowania transmisji",
            "D. Bezpieczny protok\u00f3\u0142 terminalu sieciowego udost\u0119pniaj\u0105cy us\u0142ugi szyfrowania po\u0142\u0105czenia"
        ],
        "goodAnswer": "D. Bezpieczny protok\u00f3\u0142 terminalu sieciowego udost\u0119pniaj\u0105cy us\u0142ugi szyfrowania po\u0142\u0105czenia"
    },
    {
        "id": 670,
        "question": "Na stabilno\u015b\u0107 obrazu w monitorach CRT znacz\u0105cy wp\u0142yw ma",
        "imageLoc": "",
        "answers": [
            "A. Czas reakcji",
            "B. Cz\u0119stotliwo\u015b\u0107 od\u015bwie\u017cania",
            "C. Odwzorowanie kolor\u00f3w",
            "D. Wielocz\u0119stotliwo\u015b\u0107"
        ],
        "goodAnswer": "B. Cz\u0119stotliwo\u015b\u0107 od\u015bwie\u017cania"
    },
    {
        "id": 671,
        "question": "Program WinRaR wy\u015bwietli\u0142 okienko informacyjne pokazane na rysunku. Z jakiego typu licencji na program korzysta\u0142 do tej pory u\u017cytkownik?",
        "imageLoc": require("../assets/img/237.png"),
        "answers": [
            "A. freeware",
            "B. public domain",
            "C. adware",
            "D. shareware"
        ],
        "goodAnswer": "D. shareware"
    },
    {
        "id": 672,
        "question": "Numer IP przypisany komputerowi umo\u017cliwia odbiorcy pakietu IP rozr\u00f3\u017cnienie identyfikator\u00f3w",
        "imageLoc": "",
        "answers": [
            "A. hosta i rutera",
            "B. sieci i hosta",
            "C. sieci i bramy",
            "D. hosta i bramy"
        ],
        "goodAnswer": "B. sieci i hosta"
    },
    {
        "id": 673,
        "question": "W celu ochrony systemu przed programem posiadaj\u0105cym zdolno\u015b\u0107 replikacji nale\u017cy zainstalowa\u0107",
        "imageLoc": "",
        "answers": [
            "A. program diagnostyczny",
            "B. program szpiegowski",
            "C. program antywirusowy",
            "D. program narz\u0119dziowy"
        ],
        "goodAnswer": "C. program antywirusowy"
    },
    {
        "id": 674,
        "question": "Ile par przewod\u00f3w skr\u0119tki miedzianej kategorii 5e wykorzystuje si\u0119 do przesy\u0142u danych w standardzie sieci Ethernet 100Base-TX?",
        "imageLoc": "",
        "answers": [
            "A. 2",
            "B. 4",
            "C. 3",
            "D. 1"
        ],
        "goodAnswer": "A. 2"
    },
    {
        "id": 675,
        "question": "Aby zapisa\u0107 dane na p\u0142ycie pokazanej na rysunku, jest potrzebny nap\u0119d",
        "imageLoc": require("../assets/img/1872.png"),
        "answers": [
            "A. DVD-R/RW",
            "B. CD-R/RW",
            "C. Blu-ray",
            "D. HD-DVD"
        ],
        "goodAnswer": "C. Blu-ray"
    },
    {
        "id": 676,
        "question": "Narz\u0119dzie iptables w systemie Linux s\u0142u\u017cy do",
        "imageLoc": "",
        "answers": [
            "A. konfiguracji zapory sieciowej",
            "B. konfiguracji karty sieciowej",
            "C. konfiguracji zdalnego dost\u0119pu do serwera",
            "D. konfiguracji serwera pocztowego"
        ],
        "goodAnswer": "A. konfiguracji zapory sieciowej"
    },
    {
        "id": 677,
        "question": "Jakiego typu z\u0142\u0105cze nale\u017cy u\u017cy\u0107, aby pod\u0142\u0105czy\u0107 zasilanie do CD-ROM?",
        "imageLoc": "",
        "answers": [
            "A. 20-pinowe ATX",
            "B. Molex",
            "C. Berg",
            "D. Mini-Molex"
        ],
        "goodAnswer": "B. Molex"
    },
    {
        "id": 678,
        "question": "Kt\u00f3ry zestaw protoko\u0142\u00f3w jest charakterystyczny dla warstwy internetowej modelu TCP/IP?",
        "imageLoc": "",
        "answers": [
            "A. TCP, UDP",
            "B. HTTP, FTP",
            "C. DHCP, DNS",
            "D. IP, ICMP"
        ],
        "goodAnswer": "D. IP, ICMP"
    },
    {
        "id": 679,
        "question": "Kt\u00f3r\u0105 konfiguracje sieciow\u0105 mo\u017ce mie\u0107 komputer nale\u017c\u0105cy do tej samej sieci LAN, co komputer o adresie 10.8.1.10/24?",
        "imageLoc": "",
        "answers": [
            "A. 10.8.0.101 i 255.255.255.0",
            "B. 10.8.1.101 i 255.255.0.0",
            "C. 10.8.0.101 i 255.255.0.0",
            "D. 10.8.1.101 i 255.255.255.0"
        ],
        "goodAnswer": "D. 10.8.1.101 i 255.255.255.0"
    },
    {
        "id": 680,
        "question": "Sie\u0107 Ethernet pracuje w logicznej topologii",
        "imageLoc": "",
        "answers": [
            "A. rozg\u0142aszania",
            "B. pier\u015bcieniowej i liniowej",
            "C. siatkowej",
            "D. siatki i gwiazdy"
        ],
        "goodAnswer": "A. rozg\u0142aszania"
    },
    {
        "id": 681,
        "question": "Jak\u0105 funkcj\u0119 pe\u0142ni ISA Server w systemie operacyjnym Windows?",
        "imageLoc": "",
        "answers": [
            "A. Jest serwerem stron internetowych",
            "B. Jest systemem wymiany plik\u00f3w",
            "C. Pe\u0142ni funkcj\u0119 firewalla",
            "D. Rozwi\u0105zuje nazwy domenowe"
        ],
        "goodAnswer": "C. Pe\u0142ni funkcj\u0119 firewalla"
    },
    {
        "id": 682,
        "question": "Kt\u00f3rym poleceniem w systemie Linux mo\u017cna za\u0142o\u017cy\u0107 uzytkownik\u00f3w?",
        "imageLoc": "",
        "answers": [
            "A. usermod",
            "B. net user",
            "C. useradd",
            "D. usersadd"
        ],
        "goodAnswer": "C. useradd"
    },
    {
        "id": 683,
        "question": "Na schemacie obrazuj\u0105cym zasad\u0119 dzia\u0142ania monitora plazmowego numerem 6 oznaczono",
        "imageLoc": require("../assets/img/1740.png"),
        "answers": [
            "A. warstw\u0119 fosforow\u0105",
            "B. warstw\u0119 dielektryka",
            "C. elektrody adresuj\u0105ce",
            "D. elektrody wy\u015bwietlacza"
        ],
        "goodAnswer": "C. elektrody adresuj\u0105ce"
    },
    {
        "id": 684,
        "question": "Kt\u00f3rego z polece\u0144 systemu Linux nale\u017cy u\u017cy\u0107 do utworzenia archiwum danych?",
        "imageLoc": "",
        "answers": [
            "A. tar",
            "B. cal",
            "C. grep",
            "D. date"
        ],
        "goodAnswer": "A. tar"
    },
    {
        "id": 685,
        "question": "Rysunek przedstawia schemat ethernetowego po\u0142\u0105czenia niekrosowanych, o\u015bmiopinowych z\u0142\u0105cz 8P8C. Schemat ten nosi nazw\u0119:",
        "imageLoc": require("../assets/img/1111.png"),
        "answers": [
            "A. T568A",
            "B. T568C",
            "C. T568B",
            "D. T568D"
        ],
        "goodAnswer": "C. T568B"
    },
    {
        "id": 686,
        "question": "G\u0142\u00f3wny ksi\u0119gowy musi mie\u0107 mo\u017cliwo\u015b\u0107 odzyskiwania zawarto\u015bci folder\u00f3w z kopii zapasowej plik\u00f3w. Do jakiej grupy u\u017cytkownik\u00f3w systemu MS Windows XP nale\u017cy go przydzieli\u0107?",
        "imageLoc": "",
        "answers": [
            "A. Operatorzy kopii zapasowych",
            "B. Operatorzy konfiguracji sieci",
            "C. U\u017cytkownicy z ograniczeniami",
            "D. U\u017cytkownicy pulpitu zdalnego"
        ],
        "goodAnswer": "A. Operatorzy kopii zapasowych"
    },
    {
        "id": 687,
        "question": "Okresowych kopii zapasowych dysku serwera nie mo\u017cna tworzy\u0107 na wymiennych no\u015bnikach typu",
        "imageLoc": "",
        "answers": [
            "A. karty MMC",
            "B. p\u0142yty CD-RW",
            "C. karty SD",
            "D. p\u0142yty DVD-ROM"
        ],
        "goodAnswer": "D. p\u0142yty DVD-ROM"
    },
    {
        "id": 688,
        "question": "Kt\u00f3ry parametr w konfiguracji punktu dost\u0119powego pe\u0142ni rol\u0119 loginu wykorzystywanego podczas pr\u00f3by nawi\u0105zywania po\u0142\u0105czenia z punktem dost\u0119powym sieci bezprzewodowej?",
        "imageLoc": require("../assets/img/200.png"),
        "answers": [
            "A. Wireless Network Name",
            "B. Transmission Rate",
            "C. Channel Width",
            "D. Wireless Channel"
        ],
        "goodAnswer": "A. Wireless Network Name"
    },
    {
        "id": 689,
        "question": "Wi\u0119ksz\u0105 wydajno\u015b\u0107 program\u00f3w multimedialnych w systemie rodziny Windows zapewnia technologia",
        "imageLoc": "",
        "answers": [
            "A. CUDA",
            "B. GPU",
            "C. jQuery",
            "D. DirectX"
        ],
        "goodAnswer": "D. DirectX"
    },
    {
        "id": 690,
        "question": "Wska\u017c nazw\u0119 us\u0142ugi prze\u0142\u0105cznika, kt\u00f3ra umo\u017cliwi ustawienie wy\u017cszego priorytetu dla transmisji VoIP",
        "imageLoc": "",
        "answers": [
            "A. QoS",
            "B. SNMP",
            "C. STP",
            "D. VNC"
        ],
        "goodAnswer": "A. QoS"
    },
    {
        "id": 691,
        "question": "Z danych zestawionych w tabeli wynika, \u017ce cz\u0119stotliwo\u015b\u0107 efektywna pami\u0119ci DDR SDRAM wynosi",
        "imageLoc": require("../assets/img/596.png"),
        "answers": [
            "A. 333 MHz",
            "B. 266 MHz",
            "C. 400 MHz",
            "D. 200 MHz"
        ],
        "goodAnswer": "C. 400 MHz"
    },
    {
        "id": 692,
        "question": "Protok\u00f3\u0142 umo\u017cliwiaj\u0105cy hostom uzyskanie od serwera danych konfiguracyjnych, np. adresu IP bramy sieciowej, to",
        "imageLoc": "",
        "answers": [
            "A. NFS",
            "B. HTTPS",
            "C. RTP",
            "D. DHCP"
        ],
        "goodAnswer": "D. DHCP"
    },
    {
        "id": 693,
        "question": "Z\u0142\u0105cze AGP s\u0142u\u017cy do pod\u0142\u0105czenia",
        "imageLoc": "",
        "answers": [
            "A. kart graficznych",
            "B. szybkich pami\u0119ci dyskowych",
            "C. urz\u0105dze\u0144 wej\u015bcia/wyj\u015bcia",
            "D. modemu"
        ],
        "goodAnswer": "A. kart graficznych"
    },
    {
        "id": 694,
        "question": "W dokumentacji technicznej efektywno\u015b\u0107 g\u0142o\u015bnika pod\u0142\u0105czonego do komputera zapisuje si\u0119 w jednostce:",
        "imageLoc": "",
        "answers": [
            "A. J",
            "B. W",
            "C. kHz",
            "D. dB"
        ],
        "goodAnswer": "D. dB"
    },
    {
        "id": 695,
        "question": "W systemie Linux has\u0142a u\u017cytkownik\u00f3w s\u0105 przechowywane w pliku:",
        "imageLoc": "",
        "answers": [
            "A. passwd",
            "B. groups",
            "C. users",
            "D. password"
        ],
        "goodAnswer": "A. passwd"
    },
    {
        "id": 696,
        "question": "Wska\u017c domy\u015blny port do przekazywania polece\u0144 serwera us\u0142ugi FTP",
        "imageLoc": "",
        "answers": [
            "A. 20",
            "B. 21",
            "C. 25",
            "D. 110"
        ],
        "goodAnswer": "B. 21"
    },
    {
        "id": 697,
        "question": "Maska podsieci /23 oznacza, \u017ce na pierwszych 23 bitach 32-cyfrowej liczby binarnej znajduj\u0105 si\u0119 jedynki, a na pozosta\u0142ych zera. Jak b\u0119dzie zapisana ta maska w systemie dziesi\u0119tnym, je\u017celi ka\u017cdym kolejnym 8 bitom odpowiada jedna liczba dziesi\u0119tna?",
        "imageLoc": "",
        "answers": [
            "A. 255.255.255.128",
            "B. 255.255.0.0",
            "C. 255.255.255.0",
            "D. 255.255.254.0"
        ],
        "goodAnswer": "D. 255.255.254.0"
    },
    {
        "id": 698,
        "question": "Na rysunku przedstawiono komunikat systemowy. Jakie dzia\u0142anie powinien wykona\u0107 u\u017cytkownik, aby usun\u0105\u0107 b\u0142\u0105d?",
        "imageLoc": require("../assets/img/1809.png"),
        "answers": [
            "A. Zainstalowa\u0107 sterownik do karty graficznej",
            "B. Zainstalowa\u0107 sterownik do Karty HD Graphics",
            "C. Pod\u0142\u0105czy\u0107 monitor do z\u0142\u0105cza HDMI",
            "D. Od\u015bwie\u017cy\u0107 okno Mened\u017cer urz\u0105dze\u0144"
        ],
        "goodAnswer": "A. Zainstalowa\u0107 sterownik do karty graficznej"
    },
    {
        "id": 699,
        "question": "Odnalezienie g\u0142\u00f3wnego rekordu rozruchowego, wczytuj\u0105cego system z aktywnej partycji umo\u017cliwia",
        "imageLoc": "",
        "answers": [
            "A. CDDL",
            "B. POST",
            "C. GUID Partition Table",
            "D. BootstrapLoader"
        ],
        "goodAnswer": "D. BootstrapLoader"
    },
    {
        "id": 700,
        "question": "W systemie Windows po wydaniu polecenia systeminfo NIE UZYSKA SI\u0118 informacji o",
        "imageLoc": "",
        "answers": [
            "A. liczbie procesor\u00f3w",
            "B. zamontowanych kartach sieciowych",
            "C. liczbie partycji podstawowych",
            "D. zainstalowanych poprawkach"
        ],
        "goodAnswer": "C. liczbie partycji podstawowych"
    },
    {
        "id": 701,
        "question": "Liczba 45(H) zapisana w systemie \u00f3semkowym ma posta\u0107",
        "imageLoc": "",
        "answers": [
            "A. 108",
            "B. 110",
            "C. 102",
            "D. 105"
        ],
        "goodAnswer": "D. 105"
    },
    {
        "id": 702,
        "question": "Adresem IPv6 autokonfiguracji \u0142\u0105cza jest:",
        "imageLoc": "",
        "answers": [
            "A. 2000::/3",
            "B. FE80::/10",
            "C. FF00::/8",
            "D. ::/128"
        ],
        "goodAnswer": "B. FE80::/10"
    },
    {
        "id": 703,
        "question": "Licencja CAL(Client Access License) daje u\u017cytkownikowi prawo",
        "imageLoc": "",
        "answers": [
            "A. kopiowanie programu na no\u015bniki zewn\u0119trzne",
            "B. zmiany kodu programu",
            "C. u\u017cywanie programu bezterminowo",
            "D. korzystanie z us\u0142ug udost\u0119pnionych przez serwer"
        ],
        "goodAnswer": "D. korzystanie z us\u0142ug udost\u0119pnionych przez serwer"
    },
    {
        "id": 704,
        "question": "W przypadku zaschni\u0119cia dyszy w drukarce atramentowej spowodowanych d\u0142ugimi przestojami nale\u017cy w pierwszej kolejno\u015bci",
        "imageLoc": "",
        "answers": [
            "A. oczy\u015bci\u0107 dysz\u0119 wacikiem nas\u0105czonym olejem syntetycznym",
            "B. wymieni\u0107 mechanizm drukuj\u0105cy",
            "C. dokona\u0107 oczyszczenia dyszy z poziomu odpowiedniego programu",
            "D. ustawi\u0107 wydruk ekonomiczny"
        ],
        "goodAnswer": "C. dokona\u0107 oczyszczenia dyszy z poziomu odpowiedniego programu"
    },
    {
        "id": 705,
        "question": "Jak\u0105 funkcj\u0119 pe\u0142ni uk\u0142ad zaznaczony strza\u0142k\u0105 na schemacie karty graficznej?",
        "imageLoc": require("../assets/img/130.png"),
        "answers": [
            "A. Wykonuje kalkulacje o\u015bwietlenia, uwzgl\u0119dniaj\u0105c po\u0142o\u017cenie \u015bwiat\u0142a",
            "B. Ustala widoczno\u015b\u0107 i przes\u0142anianie si\u0119 obiekt\u00f3w na ekranie",
            "C. Oblicza kolory ka\u017cdego wy\u015bwietlanego piksela",
            "D. Oblicza wygl\u0105d i po\u0142o\u017cenie wielok\u0105t\u00f3w, z kt\u00f3rych zbudowany jest obiekt"
        ],
        "goodAnswer": "D. Oblicza wygl\u0105d i po\u0142o\u017cenie wielok\u0105t\u00f3w, z kt\u00f3rych zbudowany jest obiekt"
    },
    {
        "id": 706,
        "question": "Katalog Nak\u0142ad\u00f3w Rzeczowych przy projektowaniu sieci jest stosowany do",
        "imageLoc": "",
        "answers": [
            "A. zdefiniowania wytycznych dla wykonawcy.",
            "B. kosztorysowania rob\u00f3t.",
            "C. opracowywania powykonawczych pomiar\u00f3w.",
            "D. rysowania schemat\u00f3w sieci."
        ],
        "goodAnswer": "B. kosztorysowania rob\u00f3t."
    },
    {
        "id": 707,
        "question": "Jak\u0105 nazw\u0119 nosi identyfikator, kt\u00f3ry musi by\u0107 identyczny, aby urz\u0105dzenia sieciowe mog\u0142y pracowa\u0107 w danej sieci bezprzewodowej?",
        "imageLoc": "",
        "answers": [
            "A. URL",
            "B. MAC",
            "C. IP",
            "D. SSID"
        ],
        "goodAnswer": "D. SSID"
    },
    {
        "id": 708,
        "question": "B\u0142\u0119dy systemu operacyjnego Windows spowodowane przez konflikty zasob\u00f3w sprz\u0119towych, takie jak przydzia\u0142 pami\u0119ci, przydzia\u0142 przerwa\u0144 IRQ i kana\u0142\u00f3w DMA, naj\u0142atwiej jest wykry\u0107 za pomoc\u0105 narz\u0119dzia",
        "imageLoc": "",
        "answers": [
            "A. mened\u017cer urz\u0105dze\u0144",
            "B. edytor rejestru",
            "C. chkdsk",
            "D. przystawka Sprawd\u017a dysk"
        ],
        "goodAnswer": "A. mened\u017cer urz\u0105dze\u0144"
    },
    {
        "id": 709,
        "question": "Aby zapisa\u0107 dane na p\u0142ycie pokazanej na rysunku, jest potrzebny nap\u0119d",
        "imageLoc": require("../assets/img/587.png"),
        "answers": [
            "A. Blu-ray",
            "B. CD-R/RW",
            "C. DVD-R/RW",
            "D. HD-DVD"
        ],
        "goodAnswer": "A. Blu-ray"
    },
    {
        "id": 710,
        "question": "Aby udro\u017cni\u0107 zatkane dysze kartrid\u017ca drukarki atramentowej, nale\u017cy",
        "imageLoc": "",
        "answers": [
            "A. przeczy\u015bci\u0107 dysze drobnym papierem \u015bciernym",
            "B. oczy\u015bci\u0107 dysze za pomoc\u0105 drucianych zmywak\u00f3w",
            "C. przemy\u0107 dysz\u0119 specjalnym \u015brodkiem chemicznym",
            "D. oczy\u015bci\u0107 dysze za pomoc\u0105 spr\u0119\u017conego powietrza"
        ],
        "goodAnswer": "C. przemy\u0107 dysz\u0119 specjalnym \u015brodkiem chemicznym"
    },
    {
        "id": 711,
        "question": "Je\u015bli podczas uruchamiania si\u0119 systemu BIOS firmy AWARD komputer wyda\u0142 d\u0142ugi sygna\u0142 i dwa kr\u00f3tkie, oznacza to, \u017ce wyst\u0105pi\u0142 b\u0142\u0105d",
        "imageLoc": "",
        "answers": [
            "A. karty graficznej",
            "B. p\u0142yty g\u0142\u00f3wnej",
            "C. pami\u0119ci Flash - BIOS",
            "D. kontrolera klawiatury"
        ],
        "goodAnswer": "A. karty graficznej"
    },
    {
        "id": 712,
        "question": "Po\u0142\u0105czenie VPN obs\u0142ugiwane przez system Windows Server, w kt\u00f3rym uwierzytelnienie u\u017cytkownik\u00f3w nast\u0119puje przez niezabezpieczone po\u0142\u0105czenia, a dopiero po wymianie uwierzytelnie\u0144 rozpoczyna si\u0119 szyfrowanie po\u0142\u0105czenia, to",
        "imageLoc": "",
        "answers": [
            "A. SSTP",
            "B. L2TP",
            "C. IPSEC",
            "D. PPTP"
        ],
        "goodAnswer": "D. PPTP"
    },
    {
        "id": 713,
        "question": "Dodatkowe cechy wyniku operacji wykonywanej przez jednostk\u0119 arytmetyczno - logiczn\u0105 ALU zawiera",
        "imageLoc": "",
        "answers": [
            "A. akumulator",
            "B. wska\u017anik stosu",
            "C. licznik rozkaz\u00f3w",
            "D. rejestr flagowy"
        ],
        "goodAnswer": "D. rejestr flagowy"
    },
    {
        "id": 714,
        "question": "W czasie przeprowadzania procedury POST na ekranie pojawia si\u0119 komunikat \"CMOS Battery State Low\". Co w takiej sytuacji nale\u017cy zrobi\u0107, aby komunikat nie pojawi\u0142 si\u0119 w przysz\u0142o\u015bci",
        "imageLoc": "",
        "answers": [
            "A. Pod\u0142\u0105czy\u0107 zasilanie sieciowe",
            "B. Wymieni\u0107 bateri\u0119 na p\u0142ycie g\u0142\u00f3wnej komputera",
            "C. Ustawi\u0107 poprawnie opcje konfiguracyjne CMOS dotycz\u0105ce zasilania",
            "D. Wymieni\u0107 akumulatory laptopa na nowe"
        ],
        "goodAnswer": "B. Wymieni\u0107 bateri\u0119 na p\u0142ycie g\u0142\u00f3wnej komputera"
    },
    {
        "id": 715,
        "question": "Kt\u00f3ry z podzespo\u0142\u00f3w komputera przy wy\u0142\u0105czonym zasilaniu przechowuje program rozpoczynaj\u0105cy \u0142adowanie systemu operacyjnego?",
        "imageLoc": require("../assets/img/69.png"),
        "answers": [
            "A. I/O",
            "B. ROM",
            "C. RAM",
            "D. CPU"
        ],
        "goodAnswer": "B. ROM"
    },
    {
        "id": 716,
        "question": "Komunikat \"BIOS checksum error\" wy\u015bwietlany podczas uruchomienia komputera oznacza najcz\u0119\u015bciej",
        "imageLoc": "",
        "answers": [
            "A. Brak no\u015bnika z systemem operacyjnym",
            "B. Uszkodzony wentylator procesora",
            "C. B\u0142\u0105d pami\u0119ci operacyjnej",
            "D. Uszkodzon\u0105 lub roz\u0142adowan\u0105 bateri\u0119 na p\u0142ycie g\u0142\u00f3wnej"
        ],
        "goodAnswer": "D. Uszkodzon\u0105 lub roz\u0142adowan\u0105 bateri\u0119 na p\u0142ycie g\u0142\u00f3wnej"
    },
    {
        "id": 717,
        "question": "Interfejs UDMA to interfejs",
        "imageLoc": "",
        "answers": [
            "A. szeregowy, kt\u00f3ry s\u0142u\u017cy do wymiany danych pomi\u0119dzy pami\u0119ci\u0105 RAM a dyskami twardymi",
            "B. szeregowy, u\u017cywany do pod\u0142\u0105czania urz\u0105dze\u0144 wej\u015bcia",
            "C. r\u00f3wnoleg\u0142y, wykorzystywany mi\u0119dzy innymi do pod\u0142\u0105czenia kina domowego do komputera",
            "D. r\u00f3wnoleg\u0142y, kt\u00f3ry zosta\u0142 zast\u0105piony przez interfejs SATA"
        ],
        "goodAnswer": "D. r\u00f3wnoleg\u0142y, kt\u00f3ry zosta\u0142 zast\u0105piony przez interfejs SATA"
    },
    {
        "id": 718,
        "question": "Do kt\u00f3rego urz\u0105dzenia nale\u017cy pod\u0142\u0105czy\u0107 komputery, aby pracowa\u0142y w r\u00f3\u017cnych domenach rozg\u0142oszeniowych?",
        "imageLoc": "",
        "answers": [
            "A. Mostu",
            "B. Rutera",
            "C. Regeneratora",
            "D. Koncentratora"
        ],
        "goodAnswer": "B. Rutera"
    },
    {
        "id": 719,
        "question": "W systemie Windows modu\u0142 odpowiedzialny za internetowe us\u0142ugi informacyjne to",
        "imageLoc": "",
        "answers": [
            "A. IIU",
            "B. IIS",
            "C. OSI",
            "D. ISA"
        ],
        "goodAnswer": "B. IIS"
    },
    {
        "id": 720,
        "question": "W tabeli zamieszczono podstawowe dane techniczne dw\u00f3ch interfejs\u00f3w. Wynika z nich, \u017ce SATA w por\u00f3wnaniu z ATA ma",
        "imageLoc": require("../assets/img/178.png"),
        "answers": [
            "A. mniejsz\u0105 przepustowo\u015b\u0107 i wi\u0119ksz\u0105 liczb\u0119 wyprowadze\u0144 w z\u0142\u0105czu",
            "B. mniejsz\u0105 przepustowo\u015b\u0107 i mniejsz\u0105 liczb\u0119 wyprowadze\u0144 w z\u0142\u0105czu",
            "C. wi\u0119ksz\u0105 przepustowo\u015b\u0107 i wi\u0119ksz\u0105 liczb\u0119 wyprowadze\u0144 w z\u0142\u0105czu",
            "D. wi\u0119ksz\u0105 przepustowo\u015b\u0107 i mniejsz\u0105 liczb\u0119 wyprowadze\u0144 w z\u0142\u0105czu"
        ],
        "goodAnswer": "D. wi\u0119ksz\u0105 przepustowo\u015b\u0107 i mniejsz\u0105 liczb\u0119 wyprowadze\u0144 w z\u0142\u0105czu"
    },
    {
        "id": 721,
        "question": "User Datagram Protocol (UDP) jest protoko\u0142em",
        "imageLoc": "",
        "answers": [
            "A. bezpo\u0142\u0105czeniowym warstwy transportowej modelu TCP/IP",
            "B. po\u0142\u0105czeniowym warstwy transportowej modelu TCP/IP",
            "C. bezpo\u0142\u0105czeniowym warstwy \u0142\u0105cza danych modelu ISO/OSI",
            "D. po\u0142\u0105czeniowym warstwy \u0142\u0105cza danych ISO/OSI"
        ],
        "goodAnswer": "A. bezpo\u0142\u0105czeniowym warstwy transportowej modelu TCP/IP"
    },
    {
        "id": 722,
        "question": "Rysunek przedstawia schemat",
        "imageLoc": require("../assets/img/712.png"),
        "answers": [
            "A. przetwornika DAC",
            "B. prze\u0142\u0105cznika kopu\u0142kowego",
            "C. zasilacza impulsowego",
            "D. karty graficznej"
        ],
        "goodAnswer": "C. zasilacza impulsowego"
    },
    {
        "id": 723,
        "question": "Technologia Hot swap zapewnia",
        "imageLoc": "",
        "answers": [
            "A. przesy\u0142anie danych tylko w jednym kierunku, lecz szybciej",
            "B. mo\u017cliwo\u015b\u0107 automatycznego instalowania sterownik\u00f3w po pod\u0142\u0105czeniu urz\u0105dzenia",
            "C. jednoczesne wysy\u0142anie i odbieranie danych",
            "D. mo\u017cliwo\u015b\u0107 pod\u0142\u0105czenia urz\u0105dzenia do w\u0142\u0105czonego komputera"
        ],
        "goodAnswer": "D. mo\u017cliwo\u015b\u0107 pod\u0142\u0105czenia urz\u0105dzenia do w\u0142\u0105czonego komputera"
    },
    {
        "id": 724,
        "question": "Kt\u00f3ry z wymienionych protoko\u0142\u00f3w odwzorowuje 48-bitowy fizyczny adres MAC na 32-bitowy adres IP?",
        "imageLoc": "",
        "answers": [
            "A. ARP",
            "B. IP",
            "C. RARP",
            "D. TCP"
        ],
        "goodAnswer": "C. RARP"
    },
    {
        "id": 725,
        "question": "Fragment pliku httpd.conf serwera Apache ma posta\u0107 jak na rysunku. Aby sprawdzi\u0107 poprawne dzia\u0142anie strony WWW na serwerze, nale\u017cy w przegl\u0105darce wpisa\u0107",
        "imageLoc": require("../assets/img/1719.png"),
        "answers": [
            "A. http://localhost:8012",
            "B. http://localhost:8080",
            "C. http://localhost",
            "D. http://localhost:apache"
        ],
        "goodAnswer": "A. http://localhost:8012"
    },
    {
        "id": 726,
        "question": "Aby zainstalowa\u0107 system openSUSE i skonfigurowa\u0107 jego ustawienia, mo\u017cna wykorzysta\u0107 narz\u0119dzie",
        "imageLoc": "",
        "answers": [
            "A. GEdit",
            "B. Evolution",
            "C. YaST",
            "D. Brasero"
        ],
        "goodAnswer": "C. YaST"
    },
    {
        "id": 727,
        "question": "Rysunek przedstawia konfiguracj\u0119 karty sieciowej dla urz\u0105dzenia o adresie IP 10.15.89.104/25. Wynika z niego, \u017ce",
        "imageLoc": require("../assets/img/1484.png"),
        "answers": [
            "A. adres maski jest nieprawid\u0142owy",
            "B. adres domy\u015blnej bramy jest z innej podsieci ni\u017c adres hosta",
            "C. serwer DNS jest w tej samej podsieci co urz\u0105dzenie",
            "D. adres IP jest nieprawid\u0142owy"
        ],
        "goodAnswer": "B. adres domy\u015blnej bramy jest z innej podsieci ni\u017c adres hosta"
    },
    {
        "id": 728,
        "question": "Aby sprawdzi\u0107 statystyki u\u017cycia pami\u0119ci wirtualnej w systemie Linux, nale\u017cy sprawdzi\u0107 zawarto\u015b\u0107 pliku",
        "imageLoc": "",
        "answers": [
            "A. /etc/inittab",
            "B. pagefile.sys",
            "C. xload",
            "D. /proc/vmstat"
        ],
        "goodAnswer": "D. /proc/vmstat"
    },
    {
        "id": 729,
        "question": "Na schemacie znajduj\u0105 si\u0119 symbole",
        "imageLoc": require("../assets/img/1924.png"),
        "answers": [
            "A. 4 prze\u0142\u0105cznik\u00f3w i 3 ruter\u00f3w.",
            "B. 4 prze\u0142\u0105cznik\u00f3w i 8 ruter\u00f3w.",
            "C. 8 prze\u0142\u0105cznik\u00f3w i 3 ruter\u00f3w.",
            "D. 3 prze\u0142\u0105cznik\u00f3w i 4 ruter\u00f3w."
        ],
        "goodAnswer": "A. 4 prze\u0142\u0105cznik\u00f3w i 3 ruter\u00f3w."
    },
    {
        "id": 730,
        "question": "W systemie Linux polecenie cd ~ s\u0142u\u017cy do",
        "imageLoc": "",
        "answers": [
            "A. utworzenia katalogu /~",
            "B. przej\u015bcia do katalogu domowego u\u017cytkownika",
            "C. przej\u015bcia do katalogu g\u0142\u00f3wnego",
            "D. wyszukania znaku ~ w zapisanych danych"
        ],
        "goodAnswer": "B. przej\u015bcia do katalogu domowego u\u017cytkownika"
    },
    {
        "id": 731,
        "question": "Jaki pierwszy znak w nazwie pliku w systemie Windows oznacza plik tymczasowy?",
        "imageLoc": "",
        "answers": [
            "A. &",
            "B. *",
            "C. ~",
            "D. #"
        ],
        "goodAnswer": "C. ~"
    },
    {
        "id": 732,
        "question": "Protoko\u0142em po\u0142\u0105czeniowym warstwy transportowej zapewniaj\u0105cym niezawodno\u015b\u0107 w dostarczaniu pakiet\u00f3w jest protok\u00f3\u0142",
        "imageLoc": "",
        "answers": [
            "A. TCP (Transmission Control Protocol)",
            "B. IP (Internet Protocol)",
            "C. ARP (A ddress Resolution Protocol)",
            "D. UDP (User Datagram Protocol)"
        ],
        "goodAnswer": "A. TCP (Transmission Control Protocol)"
    },
    {
        "id": 733,
        "question": "Kt\u00f3ry standard realizacji sieci Ethernet, definiuje sie\u0107 zbudowan\u0105 na kablu koncentrycznym, od\u0142ugo\u015bci segmentu nie przekraczaj\u0105cym 185 m?",
        "imageLoc": "",
        "answers": [
            "A. 10Base-2",
            "B. 10Base-5",
            "C. 100Base-T4",
            "D. 100Base-T2"
        ],
        "goodAnswer": "A. 10Base-2"
    },
    {
        "id": 734,
        "question": "Kt\u00f3re szyfrowanie stosowane w sieciach bezprzewodowych, jest najmniej odporne na \u0142amanie hase\u0142?",
        "imageLoc": "",
        "answers": [
            "A. WPA TKIP",
            "B. WPA AES",
            "C. WPA2",
            "D. WEP"
        ],
        "goodAnswer": "D. WEP"
    },
    {
        "id": 735,
        "question": "Kt\u00f3r\u0105 konfiguracj\u0119 sieciow\u0105 mo\u017ce mie\u0107 komputer nale\u017c\u0105cy do tej samej sieci LAN, co komputer o adresie 192.168.1.10/24?",
        "imageLoc": "",
        "answers": [
            "A. 192.168.1.11 i 255.255.255.0",
            "B. 192.168.0.11 i 255.255.0.0",
            "C. 192.168.0.11 i 255.255.255.0",
            "D. 192.168.1.11 i 255.255.0.0"
        ],
        "goodAnswer": "A. 192.168.1.11 i 255.255.255.0"
    },
    {
        "id": 736,
        "question": "Program fsck jest wykorzystywany w systemie Linux do",
        "imageLoc": "",
        "answers": [
            "A. przeprowadzenia test\u00f3w wydajno\u015bciowych serwera WWW poprzez wys\u0142anie du\u017cej liczby \u017c\u0105da\u0144",
            "B. dokonania oceny stanu systemu plik\u00f3w i wykrycia uszkodzonych sektor\u00f3w",
            "C. wykrycia struktury sieci i diagnostyki przepustowo\u015bci sieci lokalnej",
            "D. monitorowania parametr\u00f3w pracy i wydajno\u015bci podzespo\u0142\u00f3w komputera"
        ],
        "goodAnswer": "B. dokonania oceny stanu systemu plik\u00f3w i wykrycia uszkodzonych sektor\u00f3w"
    },
    {
        "id": 737,
        "question": "Szkodliwe oprogramowanie, kt\u00f3re w celu umo\u017cliwienia ataku na zainfekowany komputer mo\u017ce np. otworzy\u0107 jeden z port\u00f3w, to",
        "imageLoc": "",
        "answers": [
            "A. keylogger.",
            "B. exploit.",
            "C. trojan.",
            "D. wabbit."
        ],
        "goodAnswer": "C. trojan."
    },
    {
        "id": 738,
        "question": "Kt\u00f3ry zapis jest oznaczeniem adresu strony internetowej i przypisanego go niej portu?",
        "imageLoc": "",
        "answers": [
            "A. 100.168.0.1:AH1",
            "B. 100.168.0.1:8080",
            "C. 100.168.0.1-AH1",
            "D. 100.168.0.1-8080"
        ],
        "goodAnswer": "B. 100.168.0.1:8080"
    },
    {
        "id": 739,
        "question": "Administrator systemu Linux wylistowa\u0142 zawarto\u015b\u0107 katalogu /home/szkola w terminalu i uzyska\u0142 nast\u0119puj\u0105cy wynik -rwx -x r-x 1 admin admin 25 04-09 15:17 szkola.txt Nast\u0119pnie wyda\u0142 polecenie: chmod ug=rw szkola.txt | Is -I Jaki b\u0119dzie efekt jego dzia\u0142ania, wy\u015bwietlony w oknie terminala?",
        "imageLoc": "",
        "answers": [
            "A. -rw- rw- r-x 1 admin admin 25 04-09 15:17 szkola.txt",
            "B. -rw- rw- rw- 1 admin admin 25 04-09 15:17 szkola.txt",
            "C. -rwx ~x rw- 1 admin admin 25 04-09 15:17 szkola.txt",
            "D. -rwx r-x r-x 1 admin admin 25 04-09 15:17 szkola.txt"
        ],
        "goodAnswer": "A. -rw- rw- r-x 1 admin admin 25 04-09 15:17 szkola.txt"
    },
    {
        "id": 740,
        "question": "Dokument, kt\u00f3rego celem jest przedstawienie inwestorowi oferty cenowej wykonania rob\u00f3t instalatorskich sieci komputerowej, to",
        "imageLoc": "",
        "answers": [
            "A. kosztorys ofertowy",
            "B. specyfikacja techniczna",
            "C. przedmiar rob\u00f3t",
            "D. kosztorys \u015blepy"
        ],
        "goodAnswer": "A. kosztorys ofertowy"
    },
    {
        "id": 741,
        "question": "We wtyczce zasilania SATA zosta\u0142 uszkodzony \u017c\u00f3\u0142ty przew\u00f3d. Oznacza to, \u017ce z\u0142\u0105cze nie podaje napi\u0119cia o warto\u015bci",
        "imageLoc": "",
        "answers": [
            "A. 3,3V",
            "B. 8,5V",
            "C. 5V",
            "D. 12V"
        ],
        "goodAnswer": "D. 12V"
    },
    {
        "id": 742,
        "question": "Aby w systemie Windows przydzieli\u0107 u\u017cytkownikowi prawo do zmiany czasu systemowego, nale\u017cy u\u017cy\u0107 przystawki",
        "imageLoc": "",
        "answers": [
            "A. secpol.msc",
            "B. eventvwr.msc",
            "C. certmgr.msc",
            "D. services.msc"
        ],
        "goodAnswer": "A. secpol.msc"
    },
    {
        "id": 743,
        "question": "Je\u017celi oczekuje si\u0119, aby tylko wybrane urz\u0105dzenia mog\u0142y \u0142\u0105czy\u0107 si\u0119 z sieci\u0105 WiFi, nale\u017cy w punkcie dost\u0119powym",
        "imageLoc": "",
        "answers": [
            "A. skonfigurowa\u0107 filtrowanie adres\u00f3w MAC",
            "B. zmieni\u0107 has\u0142o",
            "C. zmieni\u0107 spos\u00f3b szyfrowania z WEP na WPA",
            "D. zmieni\u0107 kana\u0142 radiowy"
        ],
        "goodAnswer": "A. skonfigurowa\u0107 filtrowanie adres\u00f3w MAC"
    },
    {
        "id": 744,
        "question": "Kt\u00f3ry typ dysk\u00f3w jest pod\u0142\u0105czany do gniazda IDE p\u0142yty g\u0142\u00f3wnej komputera?",
        "imageLoc": "",
        "answers": [
            "A. FLASH",
            "B. SCSI",
            "C. ATA",
            "D. SSD"
        ],
        "goodAnswer": "C. ATA"
    },
    {
        "id": 745,
        "question": "Do pomiaru t\u0142umienia \u0142\u0105cza \u015bwiat\u0142owodowego w dw\u00f3ch oknach transmisyjnych 1310 nm i 1550 nm nale\u017cy u\u017cy\u0107",
        "imageLoc": "",
        "answers": [
            "A. miernika mocy optycznej",
            "B. reflektometru TDR",
            "C. rejestratora cyfrowego",
            "D. testera UTP"
        ],
        "goodAnswer": "A. miernika mocy optycznej"
    },
    {
        "id": 746,
        "question": "Do przedstawionej na rysunku p\u0142yty g\u0142\u00f3wnej nie mo\u017cna pod\u0142\u0105czy\u0107 urz\u0105dzenia wykorzystuj\u0105cego z\u0142\u0105cze",
        "imageLoc": require("../assets/img/743.png"),
        "answers": [
            "A. SATA",
            "B. AGP",
            "C. PCI",
            "D. IDE"
        ],
        "goodAnswer": "B. AGP"
    },
    {
        "id": 747,
        "question": "Kt\u00f3ry z typ\u00f3w rekord\u00f3w DNS w rodzinie system\u00f3w Windows Server definiuje alias (alternatywn\u0105 nazw\u0119) rekordu A dla kanonicznej (rzeczywistej) nazwy hosta?",
        "imageLoc": "",
        "answers": [
            "A. NS",
            "B. CNAME",
            "C. PTR",
            "D. AAAA"
        ],
        "goodAnswer": "B. CNAME"
    },
    {
        "id": 748,
        "question": "Pierwsze znaki heksadecymalne adresu IPv6 typu link-local to",
        "imageLoc": "",
        "answers": [
            "A. FF30",
            "B. FE80",
            "C. 3000",
            "D. 2000"
        ],
        "goodAnswer": "B. FE80"
    },
    {
        "id": 749,
        "question": "Aby zabezpieczy\u0107 sie\u0107 bezprzewodow\u0105 przed nieautoryzowanym dost\u0119pem, nale\u017cy mi\u0119dzy innymi",
        "imageLoc": "",
        "answers": [
            "A. wy\u0142\u0105czy\u0107 szyfrowanie danych",
            "B. korzysta\u0107 wy\u0142\u0105cznie z kana\u0142\u00f3w u\u017cywanych przez inne sieci WiFi",
            "C. w\u0142\u0105czy\u0107 filtrowanie adres\u00f3w MAC",
            "D. zastosowa\u0107 nazw\u0119 identyfikatora sieci SSID o d\u0142ugo\u015bci min. 16 znak\u00f3w"
        ],
        "goodAnswer": "C. w\u0142\u0105czy\u0107 filtrowanie adres\u00f3w MAC"
    },
    {
        "id": 750,
        "question": "Serwerem poczty e-mail jest",
        "imageLoc": "",
        "answers": [
            "A. PostgreSQL",
            "B. MySQL",
            "C. Firebird",
            "D. Postfix"
        ],
        "goodAnswer": "D. Postfix"
    },
    {
        "id": 751,
        "question": "W systemach Windows w celu ustalenia, gdzie w sieci zatrzyma\u0142 si\u0119 pakiet u\u017cywa si\u0119 komendy",
        "imageLoc": "",
        "answers": [
            "A. nslookup",
            "B. ping",
            "C. tracert",
            "D. ipconfig"
        ],
        "goodAnswer": "C. tracert"
    },
    {
        "id": 752,
        "question": "Na schemacie, przedstawiaj\u0105cym budow\u0119 modemu, za funkcj\u0119 modulacji i demodulacji odpowiada podzesp\u00f3\u0142 oznaczony cyfr\u0105",
        "imageLoc": require("../assets/img/261.png"),
        "answers": [
            "A. 1",
            "B. 2",
            "C. 3",
            "D. 4"
        ],
        "goodAnswer": "C. 3"
    },
    {
        "id": 753,
        "question": "Zadaniem serwera plik\u00f3w w sieciach komputerowych LAN jest",
        "imageLoc": "",
        "answers": [
            "A. zarz\u0105dzanie prac\u0105 prze\u0142\u0105cznik\u00f3w i ruter\u00f3w",
            "B. sterowanie danymi na komputerach lokalnych",
            "C. wsp\u00f3lne u\u017cytkowanie tych samych zasob\u00f3w",
            "D. wykonywanie proces\u00f3w obliczeniowych na komputerach lokalnych"
        ],
        "goodAnswer": "C. wsp\u00f3lne u\u017cytkowanie tych samych zasob\u00f3w"
    },
    {
        "id": 754,
        "question": "Adres IP komputera wyra\u017cony sekwencj\u0105 172.16.0.1 jest zapisany w systemie",
        "imageLoc": "",
        "answers": [
            "A. \u00f3semkowym",
            "B. szesnastkowym",
            "C. dziesi\u0119tnym",
            "D. dw\u00f3jkowym"
        ],
        "goodAnswer": "C. dziesi\u0119tnym"
    },
    {
        "id": 755,
        "question": "Kt\u00f3re polecenie jest stosowane do monitorowania lokalnych po\u0142\u0105cze\u0144?",
        "imageLoc": "",
        "answers": [
            "A. route",
            "B. netstat",
            "C. host",
            "D. dir"
        ],
        "goodAnswer": "B. netstat"
    },
    {
        "id": 756,
        "question": "W celu odzyskania danych usuni\u0119tych przy pomocy kombinacji klawiszy Shift + Delete, nale\u017cy",
        "imageLoc": "",
        "answers": [
            "A. odzyska\u0107 je z kosza systemowego",
            "B. odzyska\u0107 je z katalogu plik\u00f3w tymczasowych",
            "C. u\u017cy\u0107 kombinacji klawiszy Shift+Insert",
            "D. skorzysta\u0107 z oprogramowania do odzyskiwania danych"
        ],
        "goodAnswer": "D. skorzysta\u0107 z oprogramowania do odzyskiwania danych"
    },
    {
        "id": 757,
        "question": "U\u017cytkownik zamierza zainstalowa\u0107 32-bitowy system operacyjny Windows 7. Ile minimalnie pami\u0119ci RAM musi posiada\u0107 komputer, aby by\u0142a mo\u017cliwa praca systemu w trybie graficznym ?",
        "imageLoc": "",
        "answers": [
            "A. 256 MB",
            "B. 1 GB",
            "C. 512 MB",
            "D. 2 GB"
        ],
        "goodAnswer": "B. 1 GB"
    },
    {
        "id": 758,
        "question": "Technologia Hot swap zapewnia",
        "imageLoc": "",
        "answers": [
            "A. przesy\u0142anie danych tylko w jednym kierunku, lecz szybciej",
            "B. jednoczesne wysy\u0142anie i odbieranie danych",
            "C. mo\u017cliwo\u015b\u0107 automatycznego instalowania sterownik\u00f3w po pod\u0142\u0105czeniu urz\u0105dzenia",
            "D. mo\u017cliwo\u015b\u0107 pod\u0142\u0105czenia urz\u0105dzenia do w\u0142\u0105czonego komputera"
        ],
        "goodAnswer": "D. mo\u017cliwo\u015b\u0107 pod\u0142\u0105czenia urz\u0105dzenia do w\u0142\u0105czonego komputera"
    },
    {
        "id": 759,
        "question": "Serwer Samba umo\u017cliwia wsp\u00f3\u0142dzielenie plik\u00f3w i drukarek w sieci za pomoc\u0105 demona",
        "imageLoc": "",
        "answers": [
            "A. grep",
            "B. smbd",
            "C. quota",
            "D. mkfs"
        ],
        "goodAnswer": "B. smbd"
    },
    {
        "id": 760,
        "question": "Wynikiem wykonania polecenia arp -a 192.168.1.1 systemu MS Windows jest wy\u015bwietlenie",
        "imageLoc": "",
        "answers": [
            "A. ustawie\u0144 TCP/IP interfejsu sieciowego",
            "B. kontroli po\u0142\u0105czenia z komputerem o podanym IP",
            "C. adresu fizycznego urz\u0105dzenia o podanym IP",
            "D. listy aktywnych po\u0142\u0105cze\u0144 sieciowych"
        ],
        "goodAnswer": "C. adresu fizycznego urz\u0105dzenia o podanym IP"
    },
    {
        "id": 761,
        "question": "Element zamontowany na sta\u0142e, w kt\u00f3rym znajduje si\u0119 zako\u0144czenie okablowania strukturalnego poziomego u abonenta, to",
        "imageLoc": "",
        "answers": [
            "A. punkt konsolidacyjny.",
            "B. punkt rozdzielczy.",
            "C. gniazdo energetyczne.",
            "D. gniazdo teleinformatyczne."
        ],
        "goodAnswer": "D. gniazdo teleinformatyczne."
    },
    {
        "id": 762,
        "question": "Wymian\u0119 uszkodzonych kondensator\u00f3w karty graficznej umo\u017cliwi",
        "imageLoc": "",
        "answers": [
            "A. \u017cywica epoksydowa",
            "B. wkr\u0119tak krzy\u017cowy i opaska zaciskowa",
            "C. klej cyjanoakrylowy",
            "D. lutownica z cyn\u0105 i kalafoni\u0105"
        ],
        "goodAnswer": "D. lutownica z cyn\u0105 i kalafoni\u0105"
    },
    {
        "id": 763,
        "question": "Przedstawiony na rysunku symbol oznacza produkt",
        "imageLoc": require("../assets/img/1511.png"),
        "answers": [
            "A. przeznaczony do powt\u00f3rnego u\u017cycia",
            "B. niebezpieczny",
            "C. biodegradowalny",
            "D. nadaj\u0105cy si\u0119 do powt\u00f3rnego przetworzenia"
        ],
        "goodAnswer": "D. nadaj\u0105cy si\u0119 do powt\u00f3rnego przetworzenia"
    },
    {
        "id": 764,
        "question": "Narz\u0119dziem systemu Windows, s\u0142u\u017c\u0105cym do sprawdzenia wp\u0142ywu poszczeg\u00f3lnych proces\u00f3w i us\u0142ug na wydajno\u015b\u0107 procesora oraz tego, w jakim stopniu generuj\u0105 one obci\u0105\u017cenie pami\u0119ci czy dysku, jest",
        "imageLoc": "",
        "answers": [
            "A. cleanmgr",
            "B. resmon",
            "C. dcomcnfg",
            "D. credwiz"
        ],
        "goodAnswer": "B. resmon"
    },
    {
        "id": 765,
        "question": "Kt\u00f3re urz\u0105dzenie zastosowane w sieci komputerowej NIE ZMIENIA liczby domen kolizyjnych?",
        "imageLoc": "",
        "answers": [
            "A. Serwer",
            "B. Koncentrator",
            "C. Ruter",
            "D. Prze\u0142\u0105cznik"
        ],
        "goodAnswer": "A. Serwer"
    },
    {
        "id": 766,
        "question": "Kt\u00f3re porty nale\u017cy odblokowa\u0107 w ustawieniach zapory sieciowej na komputerze z zainstalowan\u0105 us\u0142ug\u0105 serwera sieci Web?",
        "imageLoc": "",
        "answers": [
            "A. 20 i 21",
            "B. 80 i 443",
            "C. 80 i 1024",
            "D. 20 i 1024"
        ],
        "goodAnswer": "B. 80 i 443"
    },
    {
        "id": 767,
        "question": "Narz\u0119dziem systemu Linux, s\u0142u\u017c\u0105cym do monitorowania systemu przy pomocy scentralizowanego mechanizmu, jest program",
        "imageLoc": "",
        "answers": [
            "A. tar",
            "B. bcdedit",
            "C. fsck",
            "D. syslog"
        ],
        "goodAnswer": "D. syslog"
    },
    {
        "id": 768,
        "question": "Narz\u0119dziem systemu Windows, s\u0142u\u017c\u0105cym do sprawdzenia wp\u0142ywu poszczeg\u00f3lnych proces\u00f3w i us\u0142g na wydajno\u015b\u0107 procesora oraz tego, w jakim stopniu generuj\u0105 one obci\u0105\u017cenie pami\u0119ci czy dysku, jest",
        "imageLoc": "",
        "answers": [
            "A. resmon",
            "B. dcomcnfg",
            "C. credwiz",
            "D. cleanmgr"
        ],
        "goodAnswer": "A. resmon"
    },
    {
        "id": 769,
        "question": "Wska\u017c rysunek przedstawiaj\u0105cy kondensator sta\u0142y",
        "imageLoc": require("../assets/img/1842.png"),
        "answers": [
            "A. A",
            "B. B",
            "C. C",
            "D. D"
        ],
        "goodAnswer": "D. D"
    },
    {
        "id": 770,
        "question": "Wska\u017c domy\u015blny port do przekazywania polece\u0144 (command) serwera us\u0142ugi FTP",
        "imageLoc": "",
        "answers": [
            "A. 21",
            "B. 110",
            "C. 25",
            "D. 20"
        ],
        "goodAnswer": "A. 21"
    },
    {
        "id": 771,
        "question": "Skaner antywirusowy wykry\u0142 niepo\u017c\u0105dane oprogramowanie. Z opisu wynika, \u017ce jest to dialer, kt\u00f3ry pozostawiony w systemie",
        "imageLoc": "",
        "answers": [
            "A. po\u0142\u0105czy si\u0119 z p\u0142atnymi numerami telefonicznymi przy u\u017cyciu modemu",
            "B. zaatakuje rekord startowy dysku",
            "C. przejmie pe\u0142n\u0105 kontrol\u0119 nad komputerem",
            "D. zainfekuje za\u0142\u0105czniki poczty internetowej"
        ],
        "goodAnswer": "A. po\u0142\u0105czy si\u0119 z p\u0142atnymi numerami telefonicznymi przy u\u017cyciu modemu"
    },
    {
        "id": 772,
        "question": "Najskuteczniejsz\u0105 metod\u0105 zabezpieczenia domowej sieci Wi-Fi jest",
        "imageLoc": "",
        "answers": [
            "A. zmiana identyfikatora SSID",
            "B. stosowanie szyfrowania WEP",
            "C. zmiana adresu MAC rutera",
            "D. stosowanie szyfrowania WPA-PSK"
        ],
        "goodAnswer": "D. stosowanie szyfrowania WPA-PSK"
    },
    {
        "id": 773,
        "question": "Kable \u0142\u0105cz\u0105ce kondygnacyjne punkty dystrybucyjne z g\u0142\u00f3wnym punktem dystrybucyjnym nazywa si\u0119",
        "imageLoc": "",
        "answers": [
            "A. okablowaniem poziomym",
            "B. po\u0142\u0105czeniami telekomunikacyjnymi",
            "C. okablowaniem pionowym",
            "D. po\u0142\u0105czeniami systemowymi"
        ],
        "goodAnswer": "C. okablowaniem pionowym"
    },
    {
        "id": 774,
        "question": "Aby unikn\u0105\u0107 uszkodzenia sprz\u0119tu podczas modernizacji komputera przeno\u015bnego polegaj\u0105cej na wymianie modu\u0142\u00f3w pami\u0119ci RAM nale\u017cy",
        "imageLoc": "",
        "answers": [
            "A. pod\u0142\u0105czy\u0107 laptop do zasilacza awaryjnego, a nast\u0119pnie rozkr\u0119ci\u0107 jego obudow\u0119 i przej\u015b\u0107 do monta\u017cu",
            "B. roz\u0142o\u017cy\u0107 i uziemi\u0107 mat\u0119 antystatyczn\u0105 oraz za\u0142o\u017cy\u0107 na nadgarstek opask\u0119 antystatyczn\u0105",
            "C. przygotowa\u0107 past\u0119 przewodz\u0105c\u0105 oraz na\u0142o\u017cy\u0107 j\u0105 r\u00f3wnomiernie na obudow\u0119 gniazd pami\u0119ci RAM",
            "D. przewietrzy\u0107 pomieszczenie oraz za\u0142o\u017cy\u0107 okulary wyposa\u017cone w pow\u0142ok\u0119 antyrefleksyjn\u0105"
        ],
        "goodAnswer": "B. roz\u0142o\u017cy\u0107 i uziemi\u0107 mat\u0119 antystatyczn\u0105 oraz za\u0142o\u017cy\u0107 na nadgarstek opask\u0119 antystatyczn\u0105"
    },
    {
        "id": 775,
        "question": "Urz\u0105dzenie umo\u017cliwiaj\u0105ce \u0142\u0105czenie host\u00f3w jednej sieci z hostami w innych sieciach to",
        "imageLoc": "",
        "answers": [
            "A. hub",
            "B. router",
            "C. firewall",
            "D. switch"
        ],
        "goodAnswer": "B. router"
    },
    {
        "id": 776,
        "question": "Najwi\u0119ksz\u0105 szybko\u015b\u0107 transmisji danych w sieci bezprzewodowej uzyska si\u0119 stosuj\u0105c urz\u0105dzenia standardu",
        "imageLoc": "",
        "answers": [
            "A. 802.11 g",
            "B. 802.11 n",
            "C. 802.11 b",
            "D. 802.11 a"
        ],
        "goodAnswer": "B. 802.11 n"
    },
    {
        "id": 777,
        "question": "W systemie Windows Serwer utworzenie ukrytego, udost\u0119pnionego katalogu wymaga dopisania na ko\u0144cu nazwy katalogu symbolu",
        "imageLoc": "",
        "answers": [
            "A. %",
            "B. @",
            "C. $",
            "D. &"
        ],
        "goodAnswer": "C. $"
    },
    {
        "id": 778,
        "question": "System S.M.A.R.T. przeznaczony jest do monitorowania pracy i wykrywania b\u0142\u0119d\u00f3w",
        "imageLoc": "",
        "answers": [
            "A. kart rozszerze\u0144",
            "B. nap\u0119d\u00f3w p\u0142yt CD/DVD",
            "C. p\u0142yty g\u0142\u00f3wnej",
            "D. dysk\u00f3w twardych"
        ],
        "goodAnswer": "D. dysk\u00f3w twardych"
    },
    {
        "id": 779,
        "question": "Dla danego u\u017cytkownika w systemie Linux polecenie usermod -s pozwala na",
        "imageLoc": "",
        "answers": [
            "A. zmian\u0119 jego katalogu domowego",
            "B. zmian\u0119 jego pow\u0142oki systemowe",
            "C. przypisanie go do nowej grupy",
            "D. zablokowanie jego konta"
        ],
        "goodAnswer": "B. zmian\u0119 jego pow\u0142oki systemowe"
    },
    {
        "id": 780,
        "question": "Kt\u00f3re urz\u0105dzenie sieciowe zosta\u0142o przedstawione na rysunku?",
        "imageLoc": require("../assets/img/1532.png"),
        "answers": [
            "A. Adapter IrDA",
            "B. Adapter Bluetooth",
            "C. Modem USB",
            "D. Karta sieciowa WiFi"
        ],
        "goodAnswer": "C. Modem USB"
    },
    {
        "id": 781,
        "question": "Zrzut ekranu przedstawia program",
        "imageLoc": require("../assets/img/1809.png"),
        "answers": [
            "A. antyspamowy",
            "B. typu recovery",
            "C. antywirusowy",
            "D. typu firewall"
        ],
        "goodAnswer": "D. typu firewall"
    },
    {
        "id": 782,
        "question": "Kt\u00f3ry z sieciowych system\u00f3w operacyjnych jest udost\u0119pniany na licencji GNU?",
        "imageLoc": "",
        "answers": [
            "A. OS X Server",
            "B. Unix",
            "C. Windows Server 2012",
            "D. Linux"
        ],
        "goodAnswer": "D. Linux"
    },
    {
        "id": 783,
        "question": "Ka\u017cdy kolejny router IP na trasie pakietu",
        "imageLoc": "",
        "answers": [
            "A. zmniejsza warto\u015b\u0107 TTL przekazywanego pakietu o dwa",
            "B. zmniejsza warto\u015b\u0107 TTL przekazywanego pakietu o jeden",
            "C. zwi\u0119ksza warto\u015b\u0107 TTL przekazywanego pakietu o dwa",
            "D. zwi\u0119ksza warto\u015b\u0107 TTL przekazywanego pakietu o jeden"
        ],
        "goodAnswer": "B. zmniejsza warto\u015b\u0107 TTL przekazywanego pakietu o jeden"
    },
    {
        "id": 784,
        "question": "Na rysunku jest przedstawiona konfiguracja",
        "imageLoc": require("../assets/img/1464.png"),
        "answers": [
            "A. przekierowania port\u00f3w",
            "B. wirtualnych sieci",
            "C. rezerwacji adres\u00f3w MAC",
            "D. sieci bezprzewodowej"
        ],
        "goodAnswer": "B. wirtualnych sieci"
    },
    {
        "id": 785,
        "question": "Na podstawie analizy ruchu sieciowego, wska\u017c adres IP i numer portu, z kt\u00f3rego host otrzymuje odpowied\u017a",
        "imageLoc": require("../assets/img/1348.png"),
        "answers": [
            "A. 192.168.0.13:80",
            "B. 46.28.247.123:51383",
            "C. 192.168.0.13:51383",
            "D. 46.28.247.123:80"
        ],
        "goodAnswer": "D. 46.28.247.123:80"
    },
    {
        "id": 786,
        "question": "Wska\u017c rysunek przedstawiaj\u0105cy symbol stosowany do oznaczenia portu r\u00f3wnoleg\u0142ego LPT",
        "imageLoc": require("../assets/img/713.png"),
        "answers": [
            "A. A",
            "B. B",
            "C. C",
            "D. D"
        ],
        "goodAnswer": "D. D"
    },
    {
        "id": 787,
        "question": "Kt\u00f3ry parametr trzeba poda\u0107 podczas konfiguracji serwera DHCP?",
        "imageLoc": "",
        "answers": [
            "A. Poziom zabezpiecze\u0144 IPSec (ang. Internet Protocol Security)",
            "B. Adres MAC karty sieciowej serwera DHCP",
            "C. Czas trwania dzier\u017cawy adresu IP",
            "D. Czas trwania dzier\u017cawy adresu MAC"
        ],
        "goodAnswer": "C. Czas trwania dzier\u017cawy adresu IP"
    },
    {
        "id": 788,
        "question": "Topologia fizyczna sieci, w kt\u00f3rej jako medium transmisyjne stosuje si\u0119 fale radiowe, jest nazywana topologi\u0105",
        "imageLoc": "",
        "answers": [
            "A. ad-hoc",
            "B. magistrali",
            "C. CSMA/CD",
            "D. pier\u015bcienia"
        ],
        "goodAnswer": "A. ad-hoc"
    },
    {
        "id": 789,
        "question": "Kt\u00f3re polecenie nale\u017cy zastosowa\u0107 do monitorowania lokalnych po\u0142\u0105cze\u0144?",
        "imageLoc": "",
        "answers": [
            "A. dir",
            "B. route add",
            "C. host",
            "D. netstat"
        ],
        "goodAnswer": "D. netstat"
    },
    {
        "id": 790,
        "question": "Do prawid\u0142owego dzia\u0142ania procesora jest niezb\u0119dne pod\u0142\u0105czenie 4-stykowego lub 8-stykowego z\u0142\u0105cza zasilania o napi\u0119ciu",
        "imageLoc": "",
        "answers": [
            "A. 3,3 V",
            "B. 7 V",
            "C. 12 V",
            "D. 24 V"
        ],
        "goodAnswer": "C. 12 V"
    },
    {
        "id": 791,
        "question": "Parametr pami\u0119ci RAM nazywany czasem op\u00f3\u017anienia jest definiowany jako",
        "imageLoc": "",
        "answers": [
            "A. RAS Precharge",
            "B. RAS to CAS Delay",
            "C. Command Rate",
            "D. CAS Latency"
        ],
        "goodAnswer": "D. CAS Latency"
    },
    {
        "id": 792,
        "question": "W systemie Windows XP do zmiany typu systemu plik\u00f3w z FAT32 na NTFS nale\u017cy wykorzysta\u0107 program",
        "imageLoc": "",
        "answers": [
            "A. convert.exe",
            "B. subst.exe",
            "C. attrib.exe",
            "D. replace.exe"
        ],
        "goodAnswer": "A. convert.exe"
    },
    {
        "id": 793,
        "question": "Wi\u0119ksz\u0105 wydajno\u015b\u0107 program\u00f3w multimedialnych w systemie rodziny Windows zapewnia technologia",
        "imageLoc": "",
        "answers": [
            "A. GPU",
            "B. CUDA",
            "C. DirectX",
            "D. jQuery"
        ],
        "goodAnswer": "C. DirectX"
    },
    {
        "id": 794,
        "question": "Wska\u017c, kt\u00f3re zdanie opisuj\u0105ce zapor\u0119 sieciow\u0105 jest fa\u0142szywe",
        "imageLoc": "",
        "answers": [
            "A. Jest narz\u0119dziem zabezpieczaj\u0105cym sie\u0107 przed w\u0142amaniami",
            "B. Jest elementem oprogramowania wi\u0119kszo\u015bci ruter\u00f3w",
            "C. Jest zainstalowana na ka\u017cdym prze\u0142\u0105czniku",
            "D. Jest elementem systemu operacyjnego Windows"
        ],
        "goodAnswer": "C. Jest zainstalowana na ka\u017cdym prze\u0142\u0105czniku"
    },
    {
        "id": 795,
        "question": "Za przydzielanie czasu procesora do okre\u015blonych zada\u0144 odpowiada",
        "imageLoc": "",
        "answers": [
            "A. System operacyjny",
            "B. Cache procesora",
            "C. Pami\u0119\u0107 RAM",
            "D. Chipset"
        ],
        "goodAnswer": "A. System operacyjny"
    },
    {
        "id": 796,
        "question": "Wynik dzia\u0142ania polecenia ls -l u\u017cytego w systemie Linux przedstawia rysunek",
        "imageLoc": require("../assets/img/592.png"),
        "answers": [
            "A. A",
            "B. B",
            "C. C",
            "D. D"
        ],
        "goodAnswer": "D. D"
    },
    {
        "id": 797,
        "question": "W sieci Ethernet 100BaseTX dla transmisji danych wykorzystywane s\u0105 \u017cy\u0142y kabla UTP do\u0142\u0105czone do pin\u00f3w",
        "imageLoc": require("../assets/img/1040.png"),
        "answers": [
            "A. 1, 2, 5, 6",
            "B. 4, 5, 6, 7",
            "C. 1, 2, 3, 6",
            "D. 1, 2, 3, 4"
        ],
        "goodAnswer": "C. 1, 2, 3, 6"
    },
    {
        "id": 798,
        "question": "Kt\u00f3ry przyrz\u0105d s\u0142u\u017cy do testowania zasilaczy komputerowych?",
        "imageLoc": require("../assets/img/2019.png"),
        "answers": [
            "A. A",
            "B. B",
            "C. C",
            "D. D"
        ],
        "goodAnswer": "C. C"
    },
    {
        "id": 799,
        "question": "Urz\u0105dzeniem dzia\u0142aj\u0105cym w warstwie \u0142\u0105cza danych, s\u0142u\u017c\u0105cym do \u0142\u0105czenia segment\u00f3w sieci o r\u00f3\u017cnych architekturach, jest",
        "imageLoc": "",
        "answers": [
            "A. regenerator",
            "B. ruter",
            "C. koncentrator",
            "D. most"
        ],
        "goodAnswer": "D. most"
    },
    {
        "id": 800,
        "question": "Z kt\u00f3rym protoko\u0142em s\u0105 zwi\u0105zane poj\u0119cia \"sequence number\" i \"acknowledgment number\"?",
        "imageLoc": require("../assets/img/690.png"),
        "answers": [
            "A. IP (Internet Protocol)",
            "B. TCP (Transmission Control Protocol)",
            "C. UDP (User Datagram Protocol)",
            "D. HTTP (Hypertext Transfer Protocol)"
        ],
        "goodAnswer": "B. TCP (Transmission Control Protocol)"
    },
    {
        "id": 801,
        "question": "Zgodnie z norm\u0105 PN-EN 50174 okablowanie poziome w systemie okablowania strukturalnego to cz\u0119\u015b\u0107 okablowania pomi\u0119dzy",
        "imageLoc": "",
        "answers": [
            "A. punktami rozdzielczymi w g\u0142\u00f3wnych pionach budynku",
            "B. serwerem a szkieletem sieci",
            "C. punktem rozdzielczym a gniazdem u\u017cytkownika",
            "D. gniazdkiem u\u017cytkownika a terminalem ko\u0144cowym"
        ],
        "goodAnswer": "C. punktem rozdzielczym a gniazdem u\u017cytkownika"
    },
    {
        "id": 802,
        "question": "Program tar umo\u017cliwia",
        "imageLoc": "",
        "answers": [
            "A. archiwizowanie plik\u00f3w",
            "B. wy\u015bwietlanie listy aktywnych proces\u00f3w",
            "C. zarz\u0105dzanie pakietami",
            "D. konfigurowanie karty sieciowej"
        ],
        "goodAnswer": "A. archiwizowanie plik\u00f3w"
    },
    {
        "id": 803,
        "question": "System plik\u00f3w, kt\u00f3ry umo\u017cliwia w systemie Windows kompresj\u0119 danych i nadawanie uprawnie\u0144 do folder\u00f3w i plik\u00f3w, to",
        "imageLoc": "",
        "answers": [
            "A. NTFS",
            "B. EXT",
            "C. FAT",
            "D. FAT32"
        ],
        "goodAnswer": "A. NTFS"
    },
    {
        "id": 804,
        "question": "Na podstawie nazw sygna\u0142\u00f3w steruj\u0105cych okre\u015bl funkcj\u0119 podzespo\u0142u komputera oznaczonego na rysunku symbolem X",
        "imageLoc": require("../assets/img/68.png"),
        "answers": [
            "A. Uk\u0142ad generator\u00f3w programowalnych",
            "B. Kontroler DMA",
            "C. Zegar czasu rzeczywistego",
            "D. Kontroler przerwa\u0144"
        ],
        "goodAnswer": "D. Kontroler przerwa\u0144"
    },
    {
        "id": 805,
        "question": "Adresem rozg\u0142oszeniowym (broadcast) dla hosta o adresie IP 192.168.35.202 z 26 \uf02d bitow\u0105 mask\u0105 jest",
        "imageLoc": "",
        "answers": [
            "A. 192.168.35.63",
            "B. 192.168.35.0",
            "C. 192.168.35.192",
            "D. 192.168.35.255"
        ],
        "goodAnswer": "D. 192.168.35.255"
    },
    {
        "id": 806,
        "question": "Robak komputerowy to program, kt\u00f3ry",
        "imageLoc": "",
        "answers": [
            "A. ma zdolno\u015b\u0107 samoreplikacji",
            "B. potrzebuje programu nosiciela",
            "C. uaktywnia si\u0119, gdy nadejdzie odpowiednia data",
            "D. uruchamia si\u0119, gdy u\u017cytkownik zainfekowanego komputera uruchomi jaki\u015b program"
        ],
        "goodAnswer": "A. ma zdolno\u015b\u0107 samoreplikacji"
    },
    {
        "id": 807,
        "question": "Kabel przedstawiony na rysunku mo\u017ce by\u0107 wykorzystany do budowy okablowania sieci standardu",
        "imageLoc": require("../assets/img/213.png"),
        "answers": [
            "A. 10Base-T",
            "B. 100Base-TX",
            "C. 10Base2",
            "D. 100Base-SX"
        ],
        "goodAnswer": "D. 100Base-SX"
    },
    {
        "id": 808,
        "question": "Funkcje r\u00f3\u017cnych kategorii (daty i czasu, finansowe, tekstowe, matematyczne, statystyczne) s\u0105 elementem sk\u0142adowym",
        "imageLoc": "",
        "answers": [
            "A. program\u00f3w do tworzenia prezentacji multimedialnych",
            "B. edytora tekstu",
            "C. przegl\u0105darki internetowej",
            "D. arkusza kalkulacyjnego"
        ],
        "goodAnswer": "D. arkusza kalkulacyjnego"
    },
    {
        "id": 809,
        "question": "W wyniku uszkodzenia kabla typu skr\u0119tka utracono po\u0142\u0105czenie mi\u0119dzy prze\u0142\u0105cznikiem a stacj\u0105 robocz\u0105. Kt\u00f3ry przyrz\u0105d pomiarowy nale\u017cy zastosowa\u0107 aby zlokalizowa\u0107 i usun\u0105\u0107 usterk\u0119 bez wymiany ca\u0142ego kabla?",
        "imageLoc": "",
        "answers": [
            "A. Reflektometr TDR.",
            "B. Multimetr.",
            "C. Analizator widma.",
            "D. Miernik mocy."
        ],
        "goodAnswer": "A. Reflektometr TDR."
    },
    {
        "id": 810,
        "question": "Najbardziej prawdopodobn\u0105 przyczyn\u0105 s\u0142abej jako\u015bci wydruku drukarki laserowej, charakteryzuj\u0105cego si\u0119 widocznym rozmazywaniem tonera jest",
        "imageLoc": require("../assets/img/744.png"),
        "answers": [
            "A. uszkodzenie rolek",
            "B. zaci\u0119cie papieru",
            "C. zbyt niska temperatura utrwalacza",
            "D. zanieczyszczenie wn\u0119trza drukarki"
        ],
        "goodAnswer": "C. zbyt niska temperatura utrwalacza"
    },
    {
        "id": 811,
        "question": "Rysunek przedstawia panel konfiguracyjny bezprzewodowego urz\u0105dzenia dost\u0119powego, kt\u00f3ry umo\u017cliwia",
        "imageLoc": require("../assets/img/1161.png"),
        "answers": [
            "A. przypisanie maski podsieci",
            "B. nadanie nazwy hosta",
            "C. przypisanie adres\u00f3w MAC kart sieciowych",
            "D. konfiguracj\u0119 serwera DHCP"
        ],
        "goodAnswer": "D. konfiguracj\u0119 serwera DHCP"
    },
    {
        "id": 812,
        "question": "Katalog Nak\u0142ad\u00f3w Rzeczowych przy projektowaniu sieci jest stosowany do",
        "imageLoc": "",
        "answers": [
            "A. kosztorysowania rob\u00f3t.",
            "B. rysowania schemat\u00f3w sieci.",
            "C. zdefiniowania wytycznych dla wykonawcy.",
            "D. opracowywania powykonawczych pomiar\u00f3w."
        ],
        "goodAnswer": "A. kosztorysowania rob\u00f3t."
    },
    {
        "id": 813,
        "question": "Przedstawiony schemat obrazuje zasad\u0119 dzia\u0142ania",
        "imageLoc": require("../assets/img/154.png"),
        "answers": [
            "A. myszy optycznej",
            "B. drukarki termosublimacyjnej",
            "C. cyfrowego aparatu fotograficznego",
            "D. skanera p\u0142askiego"
        ],
        "goodAnswer": "A. myszy optycznej"
    },
    {
        "id": 814,
        "question": "Rejestr mikroprocesora zwany licznikiem rozkaz\u00f3w zawiera",
        "imageLoc": "",
        "answers": [
            "A. adres rozkazu przeznaczonego do wykonania jako nast\u0119pny",
            "B. liczb\u0119 rozkaz\u00f3w pozosta\u0142ych do wykonania do ko\u0144ca programu",
            "C. liczb\u0119 cykli zegara liczon\u0105 od pocz\u0105tku pracy programu",
            "D. liczb\u0119 rozkaz\u00f3w wykonanych przez procesor do danego momentu"
        ],
        "goodAnswer": "A. adres rozkazu przeznaczonego do wykonania jako nast\u0119pny"
    },
    {
        "id": 815,
        "question": "Liczba dziesi\u0119tna 512 w systemie binarnym ma posta\u0107",
        "imageLoc": "",
        "answers": [
            "A. 100000",
            "B. 1000000000",
            "C. 1000000",
            "D. 10000000"
        ],
        "goodAnswer": "B. 1000000000"
    },
    {
        "id": 816,
        "question": "Oznakowanie CE informuje, \u017ce",
        "imageLoc": "",
        "answers": [
            "A. wyr\u00f3b spe\u0142nia wymagania pod wzgl\u0119dem bezpiecze\u0144stwa u\u017cytkowania, ochrony zdrowia i ochrony \u015brodowiska",
            "B. wyr\u00f3b jest wyprodukowany na terenie Unii Europejskiej",
            "C. wyr\u00f3b jest zgodny z normami ISO",
            "D. producent sprawdzi\u0142 produkt pod wzgl\u0119dem wydajno\u015bci i ergonomii"
        ],
        "goodAnswer": "A. wyr\u00f3b spe\u0142nia wymagania pod wzgl\u0119dem bezpiecze\u0144stwa u\u017cytkowania, ochrony zdrowia i ochrony \u015brodowiska"
    },
    {
        "id": 817,
        "question": "Polecenie netstat -a w systemach Microsoft Windows wy\u015bwietla",
        "imageLoc": "",
        "answers": [
            "A. Wszystkie aktywne po\u0142\u0105czenia protoko\u0142u TCP",
            "B. Aktualne parametry konfiguracyjne sieci TCP/IP",
            "C. Tablic\u0119 trasowania",
            "D. Statystyk\u0119 odwiedzin stron internetowych"
        ],
        "goodAnswer": "A. Wszystkie aktywne po\u0142\u0105czenia protoko\u0142u TCP"
    },
    {
        "id": 818,
        "question": "Je\u017celi na danej przestrzeni b\u0119d\u0105 dzia\u0142a\u0142y r\u00f3wnocze\u015bnie dwie sieci WLAN standardy 802.11g, to aby wyeliminowa\u0107 mo\u017cliwo\u015b\u0107 wzajemnych zak\u0142\u00f3ce\u0144 nale\u017cy im przydzieli\u0107 kana\u0142y o numerach r\u00f3\u017cni\u0105cych si\u0119 o",
        "imageLoc": "",
        "answers": [
            "A. 5",
            "B. 4",
            "C. 2",
            "D. 3"
        ],
        "goodAnswer": "A. 5"
    },
    {
        "id": 819,
        "question": "Aby komputery udost\u0119pnia\u0142y swoje dane w sieci, NIE mog\u0105 mie\u0107 przypisanych tych samych",
        "imageLoc": "",
        "answers": [
            "A. grup roboczych.",
            "B. serwer\u00f3w DNS.",
            "C. adres\u00f3w IP.",
            "D. masek podsieci."
        ],
        "goodAnswer": "C. adres\u00f3w IP."
    },
    {
        "id": 820,
        "question": "Polecenie Gpresult",
        "imageLoc": "",
        "answers": [
            "A. aktualizuje ustawienia zasad grupy",
            "B. wy\u015bwietla wynikowy zestaw zasad dla u\u017cytkownika lub komputera",
            "C. przywraca domy\u015blne zasady grup dla kontrolera",
            "D. wy\u015bwietla informacje o kontrolerze"
        ],
        "goodAnswer": "B. wy\u015bwietla wynikowy zestaw zasad dla u\u017cytkownika lub komputera"
    },
    {
        "id": 821,
        "question": "Kt\u00f3ry akronim okre\u015bla przepustowo\u015b\u0107 sieci i us\u0142ugi, kt\u00f3rych zadaniem jest mi\u0119dzy innymi nadawanie priorytetu przesy\u0142anym pakietom?",
        "imageLoc": "",
        "answers": [
            "A. PoE",
            "B. QoS",
            "C. STP",
            "D. ARP"
        ],
        "goodAnswer": "B. QoS"
    },
    {
        "id": 822,
        "question": "W celu zwi\u0119kszenia niezawodno\u015bci oraz wydajno\u015bci transmisji danych na serwerze nale\u017cy",
        "imageLoc": "",
        "answers": [
            "A. skonfigurowa\u0107 automatyczne wykonywania kopii zapasowej",
            "B. utworzy\u0107 punkt przywracania systemu",
            "C. zainstalowa\u0107 macierz dyskow\u0105 RAID1",
            "D. przechowywa\u0107 dane na innym dysku ni\u017c systemowy"
        ],
        "goodAnswer": "C. zainstalowa\u0107 macierz dyskow\u0105 RAID1"
    },
    {
        "id": 823,
        "question": "Aby w budowanej sieci komputerowej zapewni\u0107 najmniejszy wp\u0142yw zak\u0142\u00f3ce\u0144 elektromagnetycznych na przesy\u0142any sygna\u0142 nale\u017cy zastosowa\u0107",
        "imageLoc": "",
        "answers": [
            "A. ekranowan\u0105 skr\u0119tk\u0119",
            "B. \u015bwiat\u0142ow\u00f3d",
            "C. gruby przew\u00f3d koncentryczny",
            "D. cienki przew\u00f3d koncentryczny"
        ],
        "goodAnswer": "B. \u015bwiat\u0142ow\u00f3d"
    },
    {
        "id": 824,
        "question": "Narz\u0119dzie na zdj\u0119ciu s\u0142u\u017cy do",
        "imageLoc": require("../assets/img/1928.png"),
        "answers": [
            "A. Wykonania zako\u0144cze\u0144 kablowych w z\u0142\u0105czach LSA",
            "B. \u015aci\u0105gania izolacji",
            "C. Zaciskania wtyk\u00f3w RJ45",
            "D. Monta\u017cu modu\u0142u Krone w gniazdach"
        ],
        "goodAnswer": "A. Wykonania zako\u0144cze\u0144 kablowych w z\u0142\u0105czach LSA"
    },
    {
        "id": 825,
        "question": "Wydruk wysokiej jako\u015bci fotograficznej zapewnia drukarka",
        "imageLoc": "",
        "answers": [
            "A. sublimacyjna",
            "B. termiczna",
            "C. ig\u0142owa",
            "D. termotransferowa"
        ],
        "goodAnswer": "A. sublimacyjna"
    },
    {
        "id": 826,
        "question": "Zdj\u0119cie przedstawia 168-stykow\u0105 pami\u0119\u0107",
        "imageLoc": require("../assets/img/161.png"),
        "answers": [
            "A. SIMM",
            "B. RIMM",
            "C. SIPP",
            "D. SDRAM"
        ],
        "goodAnswer": "D. SDRAM"
    },
    {
        "id": 827,
        "question": "Wska\u017c w\u0142a\u015bciw\u0105 kolejno\u015b\u0107 operacji przygotowuj\u0105cych nowy laptop do pracy.",
        "imageLoc": "",
        "answers": [
            "A. W\u0142\u0105czenie laptopa, monta\u017c baterii, instalacja systemu operacyjnego, pod\u0142\u0105czenie zewn\u0119trznego zasilania sieciowego, wy\u0142\u0105czenie laptopa po instalacji systemu operacyjnego",
            "B. Monta\u017c baterii, pod\u0142\u0105czenie zewn\u0119trznego zasilania sieciowego, w\u0142\u0105czenie laptopa, instalacja systemu operacyjnego, wy\u0142\u0105czenie laptopa po instalacji systemu operacyjnego",
            "C. Pod\u0142\u0105czenie zewn\u0119trznego zasilania sieciowego, w\u0142\u0105czenie laptopa, instalacja systemu operacyjnego, monta\u017c baterii, wy\u0142\u0105czenie laptopa po instalacji systemu operacyjnego",
            "D. Pod\u0142\u0105czenie zewn\u0119trznego zasilania sieciowego, w\u0142\u0105czenie laptopa, monta\u017c baterii, instalacja systemu operacyjnego, wy\u0142\u0105czenie laptopa po instalacji systemu operacyjnego"
        ],
        "goodAnswer": "B. Monta\u017c baterii, pod\u0142\u0105czenie zewn\u0119trznego zasilania sieciowego, w\u0142\u0105czenie laptopa, instalacja systemu operacyjnego, wy\u0142\u0105czenie laptopa po instalacji systemu operacyjnego"
    },
    {
        "id": 828,
        "question": "Na fotografii przedstawiono",
        "imageLoc": require("../assets/img/222.png"),
        "answers": [
            "A. zaciskark\u0119 wtyk\u00f3w RJ45",
            "B. zaciskark\u0119 do tulejek",
            "C. tester sieciowy",
            "D. reflektometr"
        ],
        "goodAnswer": "A. zaciskark\u0119 wtyk\u00f3w RJ45"
    },
    {
        "id": 829,
        "question": "Element oznaczony numerem 1 na schemacie blokowym karty graficznej",
        "imageLoc": require("../assets/img/1800.png"),
        "answers": [
            "A. zamienia sygna\u0142 cyfrowy na sygna\u0142 analogowy",
            "B. zawiera matryc\u0119 znak\u00f3w trybu tekstowego",
            "C. generuje sygna\u0142 RGB na wyj\u015bcie karty graficznej",
            "D. przechowuje dane wy\u015bwietlane, w trybie graficznym"
        ],
        "goodAnswer": "B. zawiera matryc\u0119 znak\u00f3w trybu tekstowego"
    },
    {
        "id": 830,
        "question": "Internetowy protok\u00f3\u0142 pocztowy, kt\u00f3ry pozwala na zarz\u0105dzanie wieloma folderami pocztowymi oraz pobieranie i operowanie na listach znajduj\u0105cych si\u0119 na zdalnym serwerze, to",
        "imageLoc": "",
        "answers": [
            "A. IMAP",
            "B. POP3",
            "C. TCP",
            "D. SMTP"
        ],
        "goodAnswer": "A. IMAP"
    },
    {
        "id": 831,
        "question": "Najlepsze zabezpieczenie komputera przed wirusami stanowi zainstalowanie",
        "imageLoc": "",
        "answers": [
            "A. zapory FireWall",
            "B. has\u0142a dla BIOS-u",
            "C. skanera antywirusowego",
            "D. licencjonowanego systemu operacyjnego"
        ],
        "goodAnswer": "C. skanera antywirusowego"
    },
    {
        "id": 832,
        "question": "Na rysunku przedstawiono kabel",
        "imageLoc": require("../assets/img/1163.png"),
        "answers": [
            "A. U/UTP",
            "B. S/FTP",
            "C. U/FTP",
            "D. F/STP"
        ],
        "goodAnswer": "B. S/FTP"
    },
    {
        "id": 833,
        "question": "Poleceniem s\u0142u\u017c\u0105cym do wy\u015bwietlania i modyfikacji tabel translacji adres\u00f3w IP na adresy fizyczne jest",
        "imageLoc": "",
        "answers": [
            "A. EXPAND",
            "B. ARP",
            "C. MMC",
            "D. PATH"
        ],
        "goodAnswer": "B. ARP"
    },
    {
        "id": 834,
        "question": "Do identyfikacji rozmiaru wolnej i zaj\u0119tej pami\u0119ci fizycznej w systemie Linux mo\u017cna u\u017cy\u0107 polecenia",
        "imageLoc": "",
        "answers": [
            "A. dmidecode \u2013t baseboard",
            "B. lspci | grep -i raid",
            "C. tail \u2013n 10 /var/log/messages",
            "D. cat /proc/meminfo"
        ],
        "goodAnswer": "D. cat /proc/meminfo"
    },
    {
        "id": 835,
        "question": "Topologia fizyczna, w kt\u00f3rej ka\u017cdy w\u0119ze\u0142 ma w\u0142asne po\u0142\u0105czenia z wszystkimi pozosta\u0142ymi w\u0119z\u0142ami, to topologia",
        "imageLoc": "",
        "answers": [
            "A. gwiazdy rozszerzonej",
            "B. pojedynczego pier\u015bcienia",
            "C. hierarchiczna",
            "D. siatki"
        ],
        "goodAnswer": "D. siatki"
    },
    {
        "id": 836,
        "question": "Kt\u00f3re stwierdzenie dotycz\u0105ce protoko\u0142u DHCP jest prawid\u0142owe?",
        "imageLoc": "",
        "answers": [
            "A. Jest to protok\u00f3\u0142 konfiguracji hosta",
            "B. Jest to protok\u00f3\u0142 przesy\u0142ania plik\u00f3w",
            "C. Jest to protok\u00f3\u0142 routingu",
            "D. Jest to protok\u00f3\u0142 dost\u0119pu do bazy danych"
        ],
        "goodAnswer": "A. Jest to protok\u00f3\u0142 konfiguracji hosta"
    },
    {
        "id": 837,
        "question": "Kt\u00f3ry protok\u00f3\u0142 jest wykorzystywany do transmisji danych w warstwie transportowej modelu ISO/OSI?",
        "imageLoc": "",
        "answers": [
            "A. LDAP",
            "B. ARP",
            "C. TCP",
            "D. HTTP"
        ],
        "goodAnswer": "C. TCP"
    },
    {
        "id": 838,
        "question": "Kt\u00f3ra antena charakteryzuje si\u0119 najwi\u0119kszym zyskiem energetycznym oraz umo\u017cliwia zestawienie po\u0142\u0105czenia na du\u017c\u0105 odleg\u0142o\u015b\u0107?",
        "imageLoc": "",
        "answers": [
            "A. Izotropowa",
            "B. Dipolowa",
            "C. Paraboliczna",
            "D. Mikropaskowa"
        ],
        "goodAnswer": "C. Paraboliczna"
    },
    {
        "id": 839,
        "question": "Do bezpo\u015bredniego po\u0142\u0105czenia ze sob\u0105 dw\u00f3ch komputer\u00f3w w przewodowej sieci LAN nale\u017cy u\u017cy\u0107",
        "imageLoc": "",
        "answers": [
            "A. kabla \u015bwiat\u0142owodowego i jedn\u0105 kart\u0119 sieciow\u0105 w jednym komputerze",
            "B. kabla sieciowego cross-over i po jednej karcie sieciowej w ka\u017cdym komputerze",
            "C. kabla sieciowego patch-cord bez krosowania i kabla Centronics",
            "D. kabla USB i po jednej karcie sieciowej w ka\u017cdym komputerze"
        ],
        "goodAnswer": "B. kabla sieciowego cross-over i po jednej karcie sieciowej w ka\u017cdym komputerze"
    },
    {
        "id": 840,
        "question": "Na fotografii przedstawiono",
        "imageLoc": require("../assets/img/294.png"),
        "answers": [
            "A. ta\u015bm\u0119 barwi\u0105c\u0105",
            "B. tusz",
            "C. tuner",
            "D. kartrid\u017c"
        ],
        "goodAnswer": "A. ta\u015bm\u0119 barwi\u0105c\u0105"
    },
    {
        "id": 841,
        "question": "Kt\u00f3re z polece\u0144 systemu Linux NIE umo\u017cliwia przeprowadzenia diagnostyki sprz\u0119tu komputerowego?",
        "imageLoc": "",
        "answers": [
            "A. lspci",
            "B. top",
            "C. ls",
            "D. fsck"
        ],
        "goodAnswer": "C. ls"
    },
    {
        "id": 842,
        "question": "W systemie Windows domy\u015blne konto administratora po jego wy\u0142\u0105czeniu i ponownym uruchomieniu komputera",
        "imageLoc": "",
        "answers": [
            "A. pozostaje dost\u0119pne po uruchomieniu systemu w trybie awaryjnym",
            "B. nie pozwala na zmian\u0119 has\u0142a dost\u0119pu do konta",
            "C. umo\u017cliwia uruchamianie niekt\u00f3rych us\u0142ug z tego konta",
            "D. jest niedost\u0119pne, gdy system uruchomi si\u0119 w trybie awaryjnym"
        ],
        "goodAnswer": "A. pozostaje dost\u0119pne po uruchomieniu systemu w trybie awaryjnym"
    },
    {
        "id": 843,
        "question": "W systemie Linux plik ma ustawione uprawnienia na 541. W\u0142a\u015bciciel mo\u017ce plik",
        "imageLoc": "",
        "answers": [
            "A. modyfikowa\u0107",
            "B. odczyta\u0107, zapisa\u0107 i wykona\u0107",
            "C. odczyta\u0107 i wykona\u0107",
            "D. tylko wykona\u0107"
        ],
        "goodAnswer": "C. odczyta\u0107 i wykona\u0107"
    },
    {
        "id": 844,
        "question": "Okresowych kopii zapasowych dysk\u00f3w serwera nie mo\u017cna tworzy\u0107 na wymiennych no\u015bnikach typu",
        "imageLoc": "",
        "answers": [
            "A. karty SD",
            "B. karty MMC",
            "C. p\u0142yty CD-RW",
            "D. p\u0142yty DVD-ROM"
        ],
        "goodAnswer": "D. p\u0142yty DVD-ROM"
    },
    {
        "id": 845,
        "question": "Przedstawione wbudowane narz\u0119dzie system\u00f3w Windows w wersji Enterpise lub Ultimate s\u0142u\u017cy do",
        "imageLoc": require("../assets/img/1892.png"),
        "answers": [
            "A. kryptograficznej ochrony danych na dyskach.",
            "B. konsolidacji danych na dyskach.",
            "C. tworzenia kopii dysku.",
            "D. kompresji dysku."
        ],
        "goodAnswer": "A. kryptograficznej ochrony danych na dyskach."
    },
    {
        "id": 846,
        "question": "Kt\u00f3re urz\u0105dzenie sieciowe dzia\u0142a w warstwie fizycznej modelu ISO/OSI, przesy\u0142aj\u0105c sygna\u0142 z jednego portu na wszystkie pozosta\u0142e porty?",
        "imageLoc": "",
        "answers": [
            "A. Karta sieciowa",
            "B. Prze\u0142\u0105cznik",
            "C. Modem",
            "D. Koncentrator"
        ],
        "goodAnswer": "D. Koncentrator"
    },
    {
        "id": 847,
        "question": "Technika transmisji danych pomi\u0119dzy urz\u0105dzeniami CD/DVD a pami\u0119ci\u0105 komputera w trybie bezpo\u015bredniego dost\u0119pu do pami\u0119ci to",
        "imageLoc": "",
        "answers": [
            "A. IDE",
            "B. SATA",
            "C. DMA",
            "D. PIO"
        ],
        "goodAnswer": "C. DMA"
    },
    {
        "id": 848,
        "question": "Kt\u00f3ry z protoko\u0142\u00f3w jest protoko\u0142em warstwy aplikacji w modelu ISO/OSI?",
        "imageLoc": "",
        "answers": [
            "A. ICMP",
            "B. UDP",
            "C. FTP",
            "D. ARP"
        ],
        "goodAnswer": "C. FTP"
    },
    {
        "id": 849,
        "question": "W technologii Ethernet protok\u00f3\u0142 dost\u0119pu do no\u015bnika CSMA/CD jest metod\u0105 z",
        "imageLoc": "",
        "answers": [
            "A. przekazywaniem \u017cetonu",
            "B. wykrywaniem kolizji",
            "C. unikaniem kolizji",
            "D. priorytetami \u017c\u0105da\u0144"
        ],
        "goodAnswer": "B. wykrywaniem kolizji"
    },
    {
        "id": 850,
        "question": "Kt\u00f3ry adres IP w systemie dziesi\u0119tnym odpowiada adresowi IP 10101010.00001111.10100000.11111100 zapisanemu w systemie binarnym?",
        "imageLoc": "",
        "answers": [
            "A. 171.15.159.252",
            "B. 171.14.159.252",
            "C. 170.14.160.252",
            "D. 170.15.160.252"
        ],
        "goodAnswer": "D. 170.15.160.252"
    },
    {
        "id": 851,
        "question": "Kt\u00f3ry przyrz\u0105d jest stosowany do pomiar\u00f3w d\u0142ugo\u015bci i t\u0142umienno\u015bci przewod\u00f3w miedzianych?",
        "imageLoc": "",
        "answers": [
            "A. Miernik mocy",
            "B. Reflektometr TDR",
            "C. Woltomierz",
            "D. Omomierz"
        ],
        "goodAnswer": "B. Reflektometr TDR"
    },
    {
        "id": 852,
        "question": "Z\u0142\u0105cze SC nale\u017cy zamontowa\u0107 na kablu",
        "imageLoc": "",
        "answers": [
            "A. typu skr\u0119tka",
            "B. koncentrycznym",
            "C. \u015bwiat\u0142owodowym",
            "D. telefonicznym"
        ],
        "goodAnswer": "C. \u015bwiat\u0142owodowym"
    },
    {
        "id": 853,
        "question": "Kt\u00f3re z polece\u0144 nale\u017cy wyda\u0107 w systemie Windows 7, aby bezpo\u015brednio z wiersza polece\u0144 uruchomi\u0107 program Zapora systemu Windows z zabezpieczeniami zaawansowanymi?",
        "imageLoc": "",
        "answers": [
            "A. wf.msc",
            "B. compmgmt.msc",
            "C. perfmon.msc",
            "D. services.msc"
        ],
        "goodAnswer": "A. wf.msc"
    },
    {
        "id": 854,
        "question": "Notacja #102816 oznacza zapis w systemie",
        "imageLoc": "",
        "answers": [
            "A. \u00f3semkowym",
            "B. szesnastkowym",
            "C. dw\u00f3jkowym",
            "D. dziesi\u0119tnym"
        ],
        "goodAnswer": "B. szesnastkowym"
    },
    {
        "id": 855,
        "question": "Liczba 100110011 zapisana w kodzie \u00f3semkowym ma posta\u0107",
        "imageLoc": "",
        "answers": [
            "A. 346",
            "B. 383",
            "C. 333",
            "D. 463"
        ],
        "goodAnswer": "D. 463"
    },
    {
        "id": 856,
        "question": "Pami\u0119\u0107 RAM przedstawiona na rysunku, montowana jest na p\u0142ycie g\u0142\u00f3wnej wyposa\u017conej w gniazdo",
        "imageLoc": require("../assets/img/1249.png"),
        "answers": [
            "A. DDR2",
            "B. DDR4",
            "C. DDR3",
            "D. DDR"
        ],
        "goodAnswer": "A. DDR2"
    },
    {
        "id": 857,
        "question": "Przedstawione na rysunku urz\u0105dzenie wraz ze specyfikacj\u0105 techniczn\u0105 mo\u017cna wykorzysta\u0107 do pomiar\u00f3w okablowania",
        "imageLoc": require("../assets/img/1820.png"),
        "answers": [
            "A. telefonicznego",
            "B. skr\u0119tki cat. 5e/6",
            "C. \u015bwiat\u0142owodowego",
            "D. koncentrycznego"
        ],
        "goodAnswer": "C. \u015bwiat\u0142owodowego"
    },
    {
        "id": 858,
        "question": "Kt\u00f3re urz\u0105dzenie sieciowe pozwala po\u0142\u0105czy\u0107 sie\u0107 LAN z WAN?",
        "imageLoc": "",
        "answers": [
            "A. Repeater",
            "B. Hub",
            "C. Router",
            "D. Switch"
        ],
        "goodAnswer": "C. Router"
    },
    {
        "id": 859,
        "question": "Po\u0142\u0105czenie typu trunk dw\u00f3ch prze\u0142\u0105cznik\u00f3w daje mo\u017cliwo\u015b\u0107",
        "imageLoc": "",
        "answers": [
            "A. zwi\u0119kszenia przepustowo\u015bci po\u0142\u0105czenia przez wykorzystanie kolejnego portu",
            "B. zablokowania wszystkich nadmiarowych po\u0142\u0105cze\u0144 na konkretnym porcie",
            "C. przesy\u0142ania w jednym \u0142\u0105czu ramek pochodz\u0105cych od wielu wirtualnych sieci lokalnych",
            "D. skonfigurowania agregacji port\u00f3w, zwi\u0119kszaj\u0105cej przepustowo\u015b\u0107 pomi\u0119dzy prze\u0142\u0105cznikami"
        ],
        "goodAnswer": "C. przesy\u0142ania w jednym \u0142\u0105czu ramek pochodz\u0105cych od wielu wirtualnych sieci lokalnych"
    },
    {
        "id": 860,
        "question": "Wska\u017c nieprawid\u0142owy podzia\u0142 dysku MBR na partycje",
        "imageLoc": "",
        "answers": [
            "A. 1 partycja podstawowa i 1 rozszerzona",
            "B. 1 partycja podstawowa i 2 rozszerzone",
            "C. 2 partycje podstawowe i 1 rozszerzona",
            "D. 3 partycje podstawowe i 1 rozszerzona"
        ],
        "goodAnswer": "B. 1 partycja podstawowa i 2 rozszerzone"
    },
    {
        "id": 861,
        "question": "Podczas pracy wska\u017anik przewodowej myszy optycznej nie reaguje na przesuwanie urz\u0105dzenia po padzie, dopiero po odpowiednim u\u0142o\u017ceniu myszy kursor zaczyna zmienia\u0107 po\u0142o\u017cenie. Objawy te wskazuj\u0105 na uszkodzenie",
        "imageLoc": "",
        "answers": [
            "A. baterii.",
            "B. \u015blizgaczy.",
            "C. przycisk\u00f3w.",
            "D. kabla."
        ],
        "goodAnswer": "D. kabla."
    },
    {
        "id": 862,
        "question": "Kt\u00f3ra z wymienionych cech kabla koncentrycznego RG-58 spowodowa\u0142a, \u017ce nie jest on obecnie wykorzystywany do budowy lokalnych sieci komputerowych?",
        "imageLoc": "",
        "answers": [
            "A. Brak mo\u017cliwo\u015bci zakupu dodatkowych urz\u0105dze\u0144 sieciowych",
            "B. Maksymalna odleg\u0142o\u015b\u0107 pomi\u0119dzy stacjami wynosz\u0105ca 185 m",
            "C. Cena narz\u0119dzi do monta\u017cu i \u0142\u0105czenia przewod\u00f3w",
            "D. Maksymalna pr\u0119dko\u015b\u0107 transmisji danych 10Mb/s"
        ],
        "goodAnswer": "D. Maksymalna pr\u0119dko\u015b\u0107 transmisji danych 10Mb/s"
    },
    {
        "id": 863,
        "question": "Asynchronicznym interfejsem szeregowym zgodnym ze standardem RS-232 jest port",
        "imageLoc": "",
        "answers": [
            "A. ECP",
            "B. COM",
            "C. LPT",
            "D. EPP"
        ],
        "goodAnswer": "B. COM"
    },
    {
        "id": 864,
        "question": "W dokumentacji technicznej p\u0142yty g\u0142\u00f3wnej jest zapis Supports up to Athlon XP 3000+ procesor. Oznacza on, \u017ce p\u0142yta g\u0142\u00f3wna obs\u0142uguj\u0119 procesory Athlon.",
        "imageLoc": "",
        "answers": [
            "A. zgodnie z mobile Athlon 64",
            "B. nie nowsze ni\u017c Athlon XP 3000+",
            "C. wszystkie o cz\u0119stotliwo\u015bci powy\u017cej 3000 MHz",
            "D. wszystkie o cz\u0119stotliwo\u015bci poni\u017cej 3000 MHz"
        ],
        "goodAnswer": "B. nie nowsze ni\u017c Athlon XP 3000+"
    },
    {
        "id": 865,
        "question": "W trybie wielozadaniowo\u015bci z wyw\u0142aszczeniem zawieszony program",
        "imageLoc": "",
        "answers": [
            "A. nie mo\u017ce zawiesi\u0107 systemu operacyjnego",
            "B. zablokuje prac\u0119 wszystkich innych program\u00f3w",
            "C. nie pozwoli usun\u0105\u0107 si\u0119 z pami\u0119ci operacyjnej",
            "D. mo\u017ce zawiesi\u0107 ca\u0142y system operacyjny"
        ],
        "goodAnswer": "A. nie mo\u017ce zawiesi\u0107 systemu operacyjnego"
    },
    {
        "id": 866,
        "question": "Kt\u00f3re polecenie powinien zastosowa\u0107 root w systemie Ubuntu Linux, aby zaktualizowa\u0107 wszystkie pakiety (ca\u0142y system) do nowej wersji wraz z nowym j\u0105drem?",
        "imageLoc": "",
        "answers": [
            "A. apt-get update",
            "B. apt-get install nazwa_pakietu",
            "C. apt-get upgrade",
            "D. apt-get dist-upgrade"
        ],
        "goodAnswer": "D. apt-get dist-upgrade"
    },
    {
        "id": 867,
        "question": "W kt\u00f3rym miejscu znajduje si\u0119 nag\u0142\u00f3wek i stopka w dokumencie tekstowym Word?",
        "imageLoc": "",
        "answers": [
            "A. Nag\u0142\u00f3wek jest drukowany na g\u00f3rnym marginesie, natomiast stopka jest drukowana na dolnym marginesie",
            "B. Nag\u0142\u00f3wek jest drukowany na dolnym marginesie, natomiast stopka jest drukowana na g\u00f3rnym marginesie",
            "C. Na parzystych stronach dokumentu",
            "D. Nag\u0142\u00f3wek znajduje si\u0119 na pocz\u0105tku dokumentu, natomiast stopka na ko\u0144cu dokumentu"
        ],
        "goodAnswer": "A. Nag\u0142\u00f3wek jest drukowany na g\u00f3rnym marginesie, natomiast stopka jest drukowana na dolnym marginesie"
    },
    {
        "id": 868,
        "question": "Okre\u015bl wielko\u015b\u0107 klastra na podstawie zamieszczonego fragmentu komunikatu systemu WINDOWS wy\u015bwietlonego po zako\u0144czeniu dzia\u0142ania programu format a:",
        "imageLoc": require("../assets/img/703.png"),
        "answers": [
            "A. 512 KB",
            "B. 0,5 KB",
            "C. 1 457 664 bajt\u00f3w",
            "D. 12 bit\u00f3w"
        ],
        "goodAnswer": "B. 0,5 KB"
    },
    {
        "id": 869,
        "question": "Kt\u00f3ry protok\u00f3\u0142 obs\u0142uguje rozproszone wysy\u0142anie i pobieranie plik\u00f3w?",
        "imageLoc": "",
        "answers": [
            "A. HTTPS",
            "B. BitTorrent",
            "C. FTP",
            "D. Radius"
        ],
        "goodAnswer": "B. BitTorrent"
    },
    {
        "id": 870,
        "question": "Przedstawiony wynik dzia\u0142ania polecenia systemu Linux s\u0142u\u017cy do diagnostyki",
        "imageLoc": require("../assets/img/2135.png"),
        "answers": [
            "A. pami\u0119ci RAM.",
            "B. dysku twardego.",
            "C. karty sieciowej.",
            "D. karty graficznej."
        ],
        "goodAnswer": "B. dysku twardego."
    },
    {
        "id": 871,
        "question": "Zdj\u0119cie przedstawia p\u0142yt\u0119 g\u0142\u00f3wn\u0105 komputera. Strza\u0142k\u0105 oznaczono",
        "imageLoc": require("../assets/img/49.png"),
        "answers": [
            "A. gniazdo zasilania do p\u0142yty ATX",
            "B. po\u0142\u0105czenie do dysku SCSI",
            "C. po\u0142\u0105czenie do dysku IDE",
            "D. gniazdo zasilania do p\u0142yty AT"
        ],
        "goodAnswer": "A. gniazdo zasilania do p\u0142yty ATX"
    },
    {
        "id": 872,
        "question": "Do utworzenia skompresowanego archiwum danych w systemie Linux mo\u017cna u\u017cy\u0107 polecenia",
        "imageLoc": "",
        "answers": [
            "A. tar -zcvf",
            "B. tar -xvf",
            "C. tar -jxvf",
            "D. tar -tvf"
        ],
        "goodAnswer": "A. tar -zcvf"
    },
    {
        "id": 873,
        "question": "W systemie Windows wymagania co do z\u0142o\u017cono\u015bci has\u0142a nale\u017cy okre\u015bli\u0107 w",
        "imageLoc": "",
        "answers": [
            "A. autostarcie",
            "B. BIOS-ie",
            "C. panelu sterowania",
            "D. zasadach zabezpiecze\u0144 lokalnych"
        ],
        "goodAnswer": "D. zasadach zabezpiecze\u0144 lokalnych"
    },
    {
        "id": 874,
        "question": "Kt\u00f3re polecenie rodziny system\u00f3w Windows nale\u017cy zastosowa\u0107, aby skonfigurowa\u0107 statyczny adres IP w wierszu polece\u0144?",
        "imageLoc": "",
        "answers": [
            "A. telnet",
            "B. tracert",
            "C. netsh",
            "D. net use"
        ],
        "goodAnswer": "C. netsh"
    },
    {
        "id": 875,
        "question": "Polecenie systemu Windows stosowane do sprawdzenia trasy, po kt\u00f3rej s\u0105 przesy\u0142ane pakiety w sieci, to",
        "imageLoc": "",
        "answers": [
            "A. tracert",
            "B. netstat",
            "C. route",
            "D. ipconfig"
        ],
        "goodAnswer": "A. tracert"
    },
    {
        "id": 876,
        "question": "Jakie polecenie w systemach Windows/Linux jest zwyczajowo stosowane do \u015bledzenia trasy pakiet\u00f3w w sieciach IP?",
        "imageLoc": "",
        "answers": [
            "A. ping",
            "B. router",
            "C. netstat",
            "D. tracert/traceroute"
        ],
        "goodAnswer": "D. tracert/traceroute"
    },
    {
        "id": 877,
        "question": "Narz\u0119dziem do monitorowania wydajno\u015bci i niezawodno\u015bci w systemach Windows 7, Windows Server 2008 R2 oraz Windows Vista jest",
        "imageLoc": "",
        "answers": [
            "A. tsmmc.msc",
            "B. devmgmt.msc",
            "C. dfrg.msc",
            "D. perfmon.msc"
        ],
        "goodAnswer": "D. perfmon.msc"
    },
    {
        "id": 878,
        "question": "Kt\u00f3re medium transmisyjne wykorzystuj\u0105 myszki bluetooth do komunikacji z komputerem?",
        "imageLoc": "",
        "answers": [
            "A. Fale radiowe w pa\u015bmie 2,4 GHz",
            "B. Fale radiowe w pa\u015bmie 800/900 MHz",
            "C. Promieniowanie podczerwone",
            "D. Promieniowanie ultrafioletowe"
        ],
        "goodAnswer": "A. Fale radiowe w pa\u015bmie 2,4 GHz"
    },
    {
        "id": 879,
        "question": "Aby chroni\u0107 komputery w sieci lokalnej przed nieautoryzowanym dost\u0119pem oraz atakami typu DoS nale\u017cy zainstalowa\u0107 i skonfigurowa\u0107",
        "imageLoc": "",
        "answers": [
            "A. filtr antyspamowy",
            "B. zapor\u0119 ogniow\u0105",
            "C. blokad\u0119 okienek pop-up",
            "D. program antywirusowy"
        ],
        "goodAnswer": "B. zapor\u0119 ogniow\u0105"
    },
    {
        "id": 880,
        "question": "Zdj\u0119cie przedstawia",
        "imageLoc": require("../assets/img/1336.png"),
        "answers": [
            "A. Prze\u0142\u0105cznik",
            "B. Punkt dost\u0119powy",
            "C. Most",
            "D. Router"
        ],
        "goodAnswer": "A. Prze\u0142\u0105cznik"
    },
    {
        "id": 881,
        "question": "Po wykonaniu eksportu klucza HKCU zostanie zapisana kopia rejestru zawieraj\u0105ca informacje, dotycz\u0105ce konfiguracji",
        "imageLoc": "",
        "answers": [
            "A. sprz\u0119towej komputera dla wszystkich u\u017cytkownik\u00f3w systemu.",
            "B. procedur uruchamiaj\u0105cych system operacyjny.",
            "C. aktualnie zalogowanego u\u017cytkownika.",
            "D. wszystkich aktywnie \u0142adowanych profili u\u017cytkownik\u00f3w systemu."
        ],
        "goodAnswer": "C. aktualnie zalogowanego u\u017cytkownika."
    },
    {
        "id": 882,
        "question": "Urz\u0105dzenia standardu 802.11g mog\u0105 pracowa\u0107 z maksymaln\u0105 pr\u0119dko\u015bci\u0105 przesy\u0142ania danych do",
        "imageLoc": "",
        "answers": [
            "A. 108 Mb/s",
            "B. 54 Mb/s",
            "C. 11 Mb/s",
            "D. 150 Mb/s"
        ],
        "goodAnswer": "B. 54 Mb/s"
    },
    {
        "id": 883,
        "question": "Przyczyn\u0105 problemu z wydrukiem z drukarki laserowej pokazanym na rysunku jest",
        "imageLoc": require("../assets/img/1503.png"),
        "answers": [
            "A. brak tonera w kasecie kartrid\u017c",
            "B. uszkodzony podajnik papieru",
            "C. uszkodzony b\u0119ben \u015bwiat\u0142oczu\u0142y",
            "D. zaschni\u0119ty tusz"
        ],
        "goodAnswer": "C. uszkodzony b\u0119ben \u015bwiat\u0142oczu\u0142y"
    },
    {
        "id": 884,
        "question": "Uruchomienie systemu Windows jest niemo\u017cliwe z powodu usterki programowej. Aby dokona\u0107 mo\u017cliwie najmniej inwazyjnej diagnozy i usuni\u0119cia tej usterki, wskazane jest",
        "imageLoc": "",
        "answers": [
            "A. wykonanie wymiany podzespo\u0142\u00f3w",
            "B. uruchomienie komputera w trybie awaryjnym",
            "C. wykonanie reinstalacji systemu Windows",
            "D. wykonanie diagnostyki podzespo\u0142\u00f3w"
        ],
        "goodAnswer": "B. uruchomienie komputera w trybie awaryjnym"
    },
    {
        "id": 885,
        "question": "Certyfikatem potwierdzaj\u0105cym energooszcz\u0119dno\u015b\u0107 urz\u0105dzenia jest",
        "imageLoc": "",
        "answers": [
            "A. Energy STAR",
            "B. Energy IEEE",
            "C. Energy TCO",
            "D. Energy ISO"
        ],
        "goodAnswer": "A. Energy STAR"
    },
    {
        "id": 886,
        "question": "G\u0142\u00f3wny rekord rozruchowy dysku twardego to",
        "imageLoc": "",
        "answers": [
            "A. NTLDR",
            "B. BOOT",
            "C. FDISK",
            "D. MBR"
        ],
        "goodAnswer": "D. MBR"
    },
    {
        "id": 887,
        "question": "Numer IP przypisany komputerowi umo\u017cliwia odbiorcy pakietu IP rozr\u00f3\u017cnienie identyfikator\u00f3w",
        "imageLoc": "",
        "answers": [
            "A. sieci i hosta",
            "B. hosta i bramy",
            "C. sieci i bramy",
            "D. hosta i rutera"
        ],
        "goodAnswer": "A. sieci i hosta"
    },
    {
        "id": 888,
        "question": "Kt\u00f3re z protoko\u0142\u00f3w przekazuj\u0105 okresowe kopie tablic rutingu do s\u0105siedniego rutera i nie maj\u0105 pe\u0142nej informacji o odleg\u0142ych ruterach?",
        "imageLoc": "",
        "answers": [
            "A. OSPF, RIP",
            "B. EGP, BGP",
            "C. RIP, IGRP",
            "D. EIGPR, OSPF"
        ],
        "goodAnswer": "D. EIGPR, OSPF"
    },
    {
        "id": 889,
        "question": "Podczas instalacji systemu Windows, tu\u017c po uruchomieniu instalatora w trybie graficznym, mo\u017cliwe jest uruchomienie Wiersza polece\u0144 (konsoli) za pomoc\u0105 kombinacji przycisk\u00f3w",
        "imageLoc": "",
        "answers": [
            "A. ALT + F4",
            "B. SHIFT + F10",
            "C. CTRL + SHIFT",
            "D. CTRL + Z"
        ],
        "goodAnswer": "B. SHIFT + F10"
    },
    {
        "id": 890,
        "question": "Algorytm, kt\u00f3ry jest stosowany w celu sprawdzenia czy ramka Ethernet nie zawiera b\u0142\u0119d\u00f3w, to",
        "imageLoc": "",
        "answers": [
            "A. MAC (Media Access Control)",
            "B. CSMA (Carrier Sense Multiple Access)",
            "C. LLC (Logical Link Control)",
            "D. CRC (Cyclic Redundancy Check)"
        ],
        "goodAnswer": "D. CRC (Cyclic Redundancy Check)"
    },
    {
        "id": 891,
        "question": "Po\u0142\u0105czenie mi\u0119dzy oddzielnymi sieciami i kontrol\u0119 przep\u0142ywu informacji mi\u0119dzy nimi realizuje urz\u0105dzenie warstwy dystrybucji nazywane",
        "imageLoc": "",
        "answers": [
            "A. serwerem",
            "B. routerem",
            "C. prze\u0142\u0105cznikiem",
            "D. koncentratorem"
        ],
        "goodAnswer": "B. routerem"
    },
    {
        "id": 892,
        "question": "Polecenie uname -s w systemie Linux jest wykorzystywane do sprawdzania",
        "imageLoc": "",
        "answers": [
            "A. nazwy j\u0105dra systemu operacyjnego",
            "B. statusu aktywnych interfejs\u00f3w sieciowych",
            "C. ilo\u015bci wolnej pami\u0119ci",
            "D. wolnego miejsca na dyskach twardych"
        ],
        "goodAnswer": "A. nazwy j\u0105dra systemu operacyjnego"
    },
    {
        "id": 893,
        "question": "Wska\u017c podzesp\u00f3\u0142 niekompatybilny z p\u0142yt\u0105 g\u0142\u00f3wn\u0105 o przedstawionych w tabeli parametrach",
        "imageLoc": require("../assets/img/1617.png"),
        "answers": [
            "A. Pami\u0119\u0107 RAM: Corsair Vengeance LPX, DDR4, 2x16GB, 3000MHz, CL15 Black",
            "B. Procesor: INTEL CORE i3-4350, 3.60 GHz, x2/4, 4 MB, 54W, HD 4600, BOX, s-1150",
            "C. Karta graficzna: Gigabyte GeForce GTX 1050 OC, 2GB, GDDR5, 128 bit, PCI-Express 3.0 x16",
            "D. Monitor: Dell, 34\", 1x DisplayPort, 1x miniDP, 2x USB 3.0 Upstream, 4x USB 3.0 Downstream"
        ],
        "goodAnswer": "B. Procesor: INTEL CORE i3-4350, 3.60 GHz, x2/4, 4 MB, 54W, HD 4600, BOX, s-1150"
    },
    {
        "id": 894,
        "question": "Na rysunku przedstawiono grot wkr\u0119taka typu",
        "imageLoc": require("../assets/img/845.png"),
        "answers": [
            "A. torx",
            "B. imbus",
            "C. tri-wing",
            "D. krzy\u017cowego"
        ],
        "goodAnswer": "A. torx"
    },
    {
        "id": 895,
        "question": "Internet Relay Chat (IRC) to protok\u00f3\u0142 stosowany do",
        "imageLoc": "",
        "answers": [
            "A. transmisji list\u00f3w na grup\u0119 dyskusyjn\u0105",
            "B. prowadzenia rozm\u00f3w za pomoc\u0105 konsoli tekstowej",
            "C. transmisji g\u0142osu przez sie\u0107",
            "D. przesy\u0142ania poczty e-mail"
        ],
        "goodAnswer": "B. prowadzenia rozm\u00f3w za pomoc\u0105 konsoli tekstowej"
    },
    {
        "id": 896,
        "question": "Aby pod\u0142\u0105czy\u0107 do Internetu sie\u0107 lokaln\u0105, dzia\u0142aj\u0105c\u0105 w oparciu o adresy prywatne, nale\u017cy zastosowa\u0107",
        "imageLoc": "",
        "answers": [
            "A. koncentrator",
            "B. router",
            "C. regenerator",
            "D. prze\u0142\u0105cznik"
        ],
        "goodAnswer": "B. router"
    },
    {
        "id": 897,
        "question": "Liczba 22 u\u017cyta w adresie http://www.adres_serwera.pl:22 oznacza numer",
        "imageLoc": "",
        "answers": [
            "A. PID procesu uruchomionego na serwerze",
            "B. aplikacji, do kt\u00f3rej kierowane jest zapytanie",
            "C. sekwencyjny pakietu przekazuj\u0105cego dane",
            "D. portu, inny od standardowego numeru dla danej us\u0142ugi"
        ],
        "goodAnswer": "D. portu, inny od standardowego numeru dla danej us\u0142ugi"
    },
    {
        "id": 898,
        "question": "Z\u0142\u0105cze przedstawione na zdj\u0119ciu umo\u017cliwia pod\u0142\u0105czenie",
        "imageLoc": require("../assets/img/437.png"),
        "answers": [
            "A. Drukarki",
            "B. Modemu",
            "C. Monitora",
            "D. Myszy"
        ],
        "goodAnswer": "C. Monitora"
    },
    {
        "id": 899,
        "question": "Harmonogram zada\u0144 w systemie Windows pozwala przypisa\u0107",
        "imageLoc": "",
        "answers": [
            "A. Nie wi\u0119cej ni\u017c cztery terminy wykonania dla wskazanego programu",
            "B. Wi\u0119cej ni\u017c pi\u0119\u0107 termin\u00f3w wykonania dla wskazanego programu",
            "C. Nie wi\u0119cej ni\u017c trzy terminy wykonania dla wskazanego programu",
            "D. Nie wi\u0119cej ni\u017c pi\u0119\u0107 termin\u00f3w wykonania dla wskazanego programu"
        ],
        "goodAnswer": "B. Wi\u0119cej ni\u017c pi\u0119\u0107 termin\u00f3w wykonania dla wskazanego programu"
    },
    {
        "id": 900,
        "question": "U\u017cytkownik sieci lokalnej musi mie\u0107 mo\u017cliwo\u015b\u0107 korzystania z plik\u00f3w znajduj\u0105cych si\u0119 na serwerze sieciowym. W tym celu powinien",
        "imageLoc": "",
        "answers": [
            "A. mie\u0107 za\u0142o\u017cone konto u\u017cytkownika bez praw administracyjnych na tym serwerze",
            "B. by\u0107 cz\u0142onkiem grupy administratorzy na tym serwerze",
            "C. pod\u0142\u0105czy\u0107 komputer do tego samego prze\u0142\u0105cznika, do kt\u00f3rego pod\u0142\u0105czony jest serwer",
            "D. zalogowa\u0107 si\u0119 do domeny serwera i posiada\u0107 odpowiednie uprawnienia do plik\u00f3w znajduj\u0105cych si\u0119 na serwerze"
        ],
        "goodAnswer": "D. zalogowa\u0107 si\u0119 do domeny serwera i posiada\u0107 odpowiednie uprawnienia do plik\u00f3w znajduj\u0105cych si\u0119 na serwerze"
    },
    {
        "id": 901,
        "question": "Wska\u017c protok\u00f3\u0142 warstwy aplikacji s\u0142u\u017c\u0105cy do odbierania poczty elektronicznej, kt\u00f3ry w pierwszej fazie pobiera nag\u0142\u00f3wki wiadomo\u015bci, a pobranie ich tre\u015bci oraz za\u0142\u0105cznik\u00f3w nast\u0119puje dopiero po otwarciu maila.",
        "imageLoc": "",
        "answers": [
            "A. SNMP",
            "B. MIME",
            "C. IMAP",
            "D. FTAM"
        ],
        "goodAnswer": "C. IMAP"
    },
    {
        "id": 902,
        "question": "Na rysunku przedstawiona jest karta",
        "imageLoc": require("../assets/img/545.png"),
        "answers": [
            "A. sieciowa Fibre Channel",
            "B. sieciowa Token Ring",
            "C. kontrolera SCSI",
            "D. kontrolera RAID"
        ],
        "goodAnswer": "A. sieciowa Fibre Channel"
    },
    {
        "id": 903,
        "question": "Kt\u00f3re polecenie w systemie Linux umo\u017cliwia przydzielanie praw do plik\u00f3w i katalog\u00f3w?",
        "imageLoc": "",
        "answers": [
            "A. gedit",
            "B. mkdir",
            "C. chmod",
            "D. adduser"
        ],
        "goodAnswer": "C. chmod"
    },
    {
        "id": 904,
        "question": "Interfejs UDMA to interfejs",
        "imageLoc": "",
        "answers": [
            "A. . szeregowy, u\u017cywany do pod\u0142\u0105czania urz\u0105dze\u0144 wej\u015bcia.",
            "B. r\u00f3wnoleg\u0142y, wykorzystywany mi\u0119dzy innymi do pod\u0142\u0105czania kina domowego do komputera.",
            "C. szeregowy, kt\u00f3ry s\u0142u\u017cy do wymiany danych pomi\u0119dzy pami\u0119ci\u0105 RAM a dyskami twardymi.",
            "D. r\u00f3wnoleg\u0142y, kt\u00f3ry zosta\u0142 zast\u0105piony przez interfejs SATA."
        ],
        "goodAnswer": "D. r\u00f3wnoleg\u0142y, kt\u00f3ry zosta\u0142 zast\u0105piony przez interfejs SATA."
    },
    {
        "id": 905,
        "question": "Thunderbolt to interfejs:",
        "imageLoc": "",
        "answers": [
            "A. r\u00f3wnoleg\u0142y, asynchroniczny i przewodowy.",
            "B. szeregowy, dwukana\u0142owy, dwukierunkowy i przewodowy.",
            "C. r\u00f3wnoleg\u0142y, dwukana\u0142owy, dwukierunkowy i bezprzewodowy.",
            "D. szeregowy, asynchroniczny i bezprzewodowy."
        ],
        "goodAnswer": "B. szeregowy, dwukana\u0142owy, dwukierunkowy i przewodowy."
    },
    {
        "id": 906,
        "question": "Prawid\u0142owo zaprojektowana sie\u0107 komputerowa powinna umo\u017cliwia\u0107 rozbudow\u0119, czyli charakteryzowa\u0107 si\u0119",
        "imageLoc": "",
        "answers": [
            "A. redundancj\u0105",
            "B. skalowalno\u015bci\u0105",
            "C. wydajno\u015bci\u0105",
            "D. nadmiarowo\u015bci\u0105"
        ],
        "goodAnswer": "B. skalowalno\u015bci\u0105"
    },
    {
        "id": 907,
        "question": "Kt\u00f3ry z wymienionych protoko\u0142\u00f3w odwzorowuje 48-bitowy fizyczny adres MAC na 32-bitowy adres IP?",
        "imageLoc": "",
        "answers": [
            "A. RARP",
            "B. TCP",
            "C. IP",
            "D. ARP"
        ],
        "goodAnswer": "A. RARP"
    },
    {
        "id": 908,
        "question": "Je\u015bli jednostka alokacji ma 1024 bajty, to pliki zamieszczone w tabeli zajm\u0105 na dysku:",
        "imageLoc": require("../assets/img/1313.png"),
        "answers": [
            "A. 5 klastr\u00f3w",
            "B. 6 klastr\u00f3w",
            "C. 3 klastry",
            "D. 4 klastry"
        ],
        "goodAnswer": "A. 5 klastr\u00f3w"
    },
    {
        "id": 909,
        "question": "Kt\u00f3ra topologia fizyczna jest stosowana w sieciach o topologii logicznej Token Ring?",
        "imageLoc": "",
        "answers": [
            "A. Magistrali",
            "B. Gwiazdy",
            "C. Siatki",
            "D. Pier\u015bcienia"
        ],
        "goodAnswer": "D. Pier\u015bcienia"
    },
    {
        "id": 910,
        "question": "Je\u017celi adres IP stacji roboczej ma posta\u0107 176.16.50.10/26to adres rozg\u0142oszeniowy oraz maksymalna liczba host\u00f3w w sieci wynosz\u0105 odpowiednio",
        "imageLoc": "",
        "answers": [
            "A. 176.16.50.62; 63 hosty",
            "B. 176.16.50.1; 26 host\u00f3w",
            "C. 176.16.50.63; 62 hosty",
            "D. 176.16.50.36; 6 host\u00f3w"
        ],
        "goodAnswer": "C. 176.16.50.63; 62 hosty"
    },
    {
        "id": 911,
        "question": "Bezprzewodowy dost\u0119p komputera do sieci Internet poprzez tzw hotspot b\u0119dzie mo\u017cliwy po zainstalowaniu w nim karty sieciowej wyposa\u017conej w",
        "imageLoc": "",
        "answers": [
            "A. z\u0142\u0105cze USB",
            "B. gniazdo RJ-45",
            "C. modu\u0142 WiFi",
            "D. interfejs RS-232C"
        ],
        "goodAnswer": "C. modu\u0142 WiFi"
    },
    {
        "id": 912,
        "question": "Jaki wyraz nale\u017ca\u0142oby wstawi\u0107 w wykropkowanym miejscu na schemacie blokowym ilustruj\u0105cym budow\u0119 systemu operacyjnego?",
        "imageLoc": require("../assets/img/1587.png"),
        "answers": [
            "A. Pow\u0142oka",
            "B. Programy u\u017cytkowe",
            "C. Benchmarki",
            "D. Sterowniki"
        ],
        "goodAnswer": "A. Pow\u0142oka"
    },
    {
        "id": 913,
        "question": "Pierwsz\u0105 czynno\u015bci\u0105 niezb\u0119dn\u0105 do zabezpieczenia rutera przed dost\u0119pem do jego panelu konfiguracyjnego przez osoby niepowo\u0142ane jest",
        "imageLoc": "",
        "answers": [
            "A. zmiana domy\u015blnej nazwy sieci (SSID) na unikatow\u0105",
            "B. zmiana nazwy login i has\u0142a wbudowanego konta administratora",
            "C. w\u0142\u0105czenie filtrowania adres\u00f3w MAC",
            "D. w\u0142\u0105czenie szyfrowania kluczem WEP"
        ],
        "goodAnswer": "B. zmiana nazwy login i has\u0142a wbudowanego konta administratora"
    },
    {
        "id": 914,
        "question": "Gdzie w edytorze tekstu wprowadza si\u0119 informacj\u0119 lub ci\u0105g znak\u00f3w, kt\u00f3ry ma pojawi\u0107 si\u0119 na wszystkich stronach dokumentu?",
        "imageLoc": "",
        "answers": [
            "A. W nag\u0142\u00f3wku lub stopce",
            "B. W przypisach dolnych",
            "C. W polu tekstowym",
            "D. W przypisach ko\u0144cowych"
        ],
        "goodAnswer": "A. W nag\u0142\u00f3wku lub stopce"
    },
    {
        "id": 915,
        "question": "Jaki b\u0119dzie \u0142\u0105czny koszt materia\u0142\u00f3w s\u0142u\u017c\u0105cych do wykonania 20 kabli po\u0142\u0105czeniowych typu patchcord o d\u0142ugo\u015bci 1,5m ka\u017cdy, je\u015bli 1 metr bie\u017c\u0105cego kabla kosztuje 1z\u0142, a wtyk 50 gr?",
        "imageLoc": "",
        "answers": [
            "A. 50 z\u0142",
            "B. 60 z\u0142",
            "C. 30 z\u0142",
            "D. 40 z\u0142"
        ],
        "goodAnswer": "A. 50 z\u0142"
    },
    {
        "id": 916,
        "question": "Zrzut ekranu przedstawia program",
        "imageLoc": require("../assets/img/1446.png"),
        "answers": [
            "A. typu recovery",
            "B. antyspamowy",
            "C. antywirusowy",
            "D. typu firewall"
        ],
        "goodAnswer": "D. typu firewall"
    },
    {
        "id": 917,
        "question": "Liczbami 25 i 27, na przedstawionej p\u0142ycie g\u0142\u00f3wnej komputera, oznaczono z\u0142\u0105cza",
        "imageLoc": require("../assets/img/57.png"),
        "answers": [
            "A. PS 2",
            "B. LPT",
            "C. USB",
            "D. RS 232"
        ],
        "goodAnswer": "C. USB"
    },
    {
        "id": 918,
        "question": "Protok\u00f3\u0142 SNMP (Simple Network Management Protocol) jest stosowany do",
        "imageLoc": "",
        "answers": [
            "A. przydzielania adres\u00f3w IP oraz adresu bramy i DNS-a",
            "B. odbioru poczty elektronicznej",
            "C. konfiguracji urz\u0105dze\u0144 sieciowych i gromadzenia informacji na ich temat",
            "D. szyfrowania terminalowego po\u0142\u0105czenia z komputerami zdalnymi"
        ],
        "goodAnswer": "C. konfiguracji urz\u0105dze\u0144 sieciowych i gromadzenia informacji na ich temat"
    },
    {
        "id": 919,
        "question": "Przedstawiona na rysunku topologia sieci to",
        "imageLoc": require("../assets/img/421.png"),
        "answers": [
            "A. bus",
            "B. star",
            "C. mesh",
            "D. ring"
        ],
        "goodAnswer": "C. mesh"
    },
    {
        "id": 920,
        "question": "Przyrz\u0105d przedstawiony na rysunku jest stosowany do zaciskania wtyk\u00f3w",
        "imageLoc": require("../assets/img/1389.png"),
        "answers": [
            "A. E 2000",
            "B. SC",
            "C. BNC",
            "D. RJ 45"
        ],
        "goodAnswer": "D. RJ 45"
    },
    {
        "id": 921,
        "question": "W sieci LAN do zabezpieczenia urz\u0105dze\u0144 sieciowych przed przepi\u0119ciami oraz r\u00f3\u017cnicami potencja\u0142\u00f3w, kt\u00f3re mog\u0105 wyst\u0105pi\u0107 podczas burzy lub innych wy\u0142adowa\u0144 atmosferycznych, nale\u017cy wykorzysta\u0107",
        "imageLoc": "",
        "answers": [
            "A. prze\u0142\u0105cznik",
            "B. urz\u0105dzenie typu NetProtector",
            "C. ruter",
            "D. sprz\u0119tow\u0105 zapor\u0119 sieciow\u0105"
        ],
        "goodAnswer": "B. urz\u0105dzenie typu NetProtector"
    },
    {
        "id": 922,
        "question": "Odmian\u0105 pami\u0119ci tylko do odczytu, kt\u00f3r\u0105 mo\u017cna wykasowa\u0107 za pomoc\u0105 \u015bwiat\u0142a ultrafioletowego, jest pami\u0119ci\u0105",
        "imageLoc": "",
        "answers": [
            "A. EEPROM",
            "B. EPROM",
            "C. PROM",
            "D. ROM"
        ],
        "goodAnswer": "B. EPROM"
    },
    {
        "id": 923,
        "question": "Jak nazywamy atak na sie\u0107 komputerow\u0105 polegaj\u0105cy na przechwytywaniu pakiet\u00f3w przesy\u0142anych w sieci?",
        "imageLoc": "",
        "answers": [
            "A. spoofing",
            "B. ICMP echo",
            "C. skanowanie sieci",
            "D. nas\u0142uchiwanie"
        ],
        "goodAnswer": "D. nas\u0142uchiwanie"
    },
    {
        "id": 924,
        "question": "Spo\u015br\u00f3d wymienionych p\u0142yt g\u0142\u00f3wnych najmniejsze rozmiary ma format",
        "imageLoc": "",
        "answers": [
            "A. Mini ATX",
            "B. Flex ATX",
            "C. Micro BTX",
            "D. Mini ITX"
        ],
        "goodAnswer": "D. Mini ITX"
    },
    {
        "id": 925,
        "question": "Z no\u015bnik\u00f3w optycznych najwi\u0119ksz\u0105 pojemno\u015b\u0107 ma p\u0142yta",
        "imageLoc": "",
        "answers": [
            "A. CD",
            "B. DVD-RAM",
            "C. DVD",
            "D. Blu-Ray"
        ],
        "goodAnswer": "D. Blu-Ray"
    },
    {
        "id": 926,
        "question": "Koprocesor arytmetyczny, kt\u00f3rego rol\u0105 w mikroprocesorze jest dokonywanie oblicze\u0144 na liczbach zmiennoprzecinkowych zosta\u0142 na schemacie oznaczony cyfr\u0105",
        "imageLoc": require("../assets/img/114.png"),
        "answers": [
            "A. 1",
            "B. 2",
            "C. 4",
            "D. 3"
        ],
        "goodAnswer": "C. 4"
    },
    {
        "id": 927,
        "question": "Standard IEEE 802.11 definiuje sieci",
        "imageLoc": "",
        "answers": [
            "A. \u015awiat\u0142owodowe LAN",
            "B. Gigabit Ethernet",
            "C. Fast Ethernet",
            "D. Bezprzewodowe LAN"
        ],
        "goodAnswer": "D. Bezprzewodowe LAN"
    },
    {
        "id": 928,
        "question": "Jaki b\u0119dzie wynik operacji odejmowania dw\u00f3ch liczb heksadecymalnych 60A (h) - 3BF (h)?",
        "imageLoc": "",
        "answers": [
            "A. 24B (h)",
            "B. 349 (h)",
            "C. 39A (h)",
            "D. 2AE (h)"
        ],
        "goodAnswer": "A. 24B (h)"
    },
    {
        "id": 929,
        "question": "W systemie Linux odpowiednikiem programu Windows o nazwie chkdsk jest program",
        "imageLoc": "",
        "answers": [
            "A. synaptic",
            "B. icacls",
            "C. fsck",
            "D. totem"
        ],
        "goodAnswer": "C. fsck"
    },
    {
        "id": 930,
        "question": "B\u0119ben \u015bwiat\u0142oczu\u0142y jest niezb\u0119dnym elementem dzia\u0142ania drukarki",
        "imageLoc": "",
        "answers": [
            "A. Ig\u0142owej",
            "B. Sublimacyjnej",
            "C. Atramentowej",
            "D. Laserowej"
        ],
        "goodAnswer": "D. Laserowej"
    },
    {
        "id": 931,
        "question": "Kt\u00f3ry z adres\u00f3w IP jest adresem publicznym?",
        "imageLoc": "",
        "answers": [
            "A. 172.168.0.16",
            "B. 192.168.168.16",
            "C. 172.18.0.16",
            "D. 10.99.15.16"
        ],
        "goodAnswer": "A. 172.168.0.16"
    },
    {
        "id": 932,
        "question": "Do cech pojedynczego konta u\u017cytkownika pracuj\u0105cego w systemie Windows Serwer nale\u017cy",
        "imageLoc": "",
        "answers": [
            "A. maksymalna wielko\u015b\u0107 pojedynczego pliku jak\u0105 u\u017cytkownik mo\u017ce zapisa\u0107 na dysku serwera",
            "B. maksymalna wielko\u015b\u0107 pulpitu u\u017cytkownika",
            "C. numer telefonu, pod kt\u00f3ry ma oddzwoni\u0107 serwer w przypadku nawi\u0105zania po\u0142\u0105czenia telefonicznego przez tego u\u017cytkownika",
            "D. maksymalna wielko\u015b\u0107 profilu u\u017cytkownika"
        ],
        "goodAnswer": "C. numer telefonu, pod kt\u00f3ry ma oddzwoni\u0107 serwer w przypadku nawi\u0105zania po\u0142\u0105czenia telefonicznego przez tego u\u017cytkownika"
    },
    {
        "id": 933,
        "question": "Jak nazywa si\u0119 technologia umo\u017cliwiaj\u0105ca \u0142\u0105czenie kart graficznych opracowana przez firm\u0119 NVIDIA?",
        "imageLoc": "",
        "answers": [
            "A. CROSSFIRE",
            "B. SLI",
            "C. RAMDAC",
            "D. ATI"
        ],
        "goodAnswer": "B. SLI"
    },
    {
        "id": 934,
        "question": "U\u017cytkownik Jan nie mo\u017ce zmieni\u0107 w\u0142a\u015bciciela drukarki w systemie Windows. Aby mia\u0142 tak\u0105 mo\u017cliwo\u015b\u0107, nale\u017cy przypisa\u0107 mu w opcjach zabezpiecze\u0144 prawo do",
        "imageLoc": "",
        "answers": [
            "A. zarz\u0105dzania drukarkami",
            "B. uprawnie\u0144 specjalnych",
            "C. zmiany uprawnie\u0144 drukowania",
            "D. zarz\u0105dzania dokumentami"
        ],
        "goodAnswer": "B. uprawnie\u0144 specjalnych"
    },
    {
        "id": 935,
        "question": "Kt\u00f3ra z topologii przedstawionych na rysunkach jest topologi\u0105 siatki?",
        "imageLoc": require("../assets/img/1391.png"),
        "answers": [
            "A. A",
            "B. B",
            "C. C",
            "D. D"
        ],
        "goodAnswer": "A. A"
    },
    {
        "id": 936,
        "question": "Administrator systemu Windows zauwa\u017cy\u0142 wyra\u017ane spowolnienie pracy komputera spowodowane ma\u0142\u0105 ilo\u015bci\u0105 wolnej pami\u0119ci RAM. Aby sprawdzi\u0107, kt\u00f3ry program zu\u017cywa jej najwi\u0119cej nale\u017cy u\u017cy\u0107 programu",
        "imageLoc": "",
        "answers": [
            "A. schtsk",
            "B. tasklist",
            "C. top",
            "D. rem"
        ],
        "goodAnswer": "B. tasklist"
    },
    {
        "id": 937,
        "question": "Adresem IPv6 autokonfiguracji \u0142\u0105cza jest:",
        "imageLoc": "",
        "answers": [
            "A. FF00::/8",
            "B. 2000::/3",
            "C. FE80::/10",
            "D. ::/128"
        ],
        "goodAnswer": "C. FE80::/10"
    },
    {
        "id": 938,
        "question": "Umowa, na mocy kt\u00f3rej u\u017cytkownik ma mi\u0119dzy innymi wgl\u0105d do kodu \u017ar\u00f3d\u0142owego oprogramowania w celu jego analizy oraz udoskonalania, to licencja",
        "imageLoc": "",
        "answers": [
            "A. OLP",
            "B. GNU GPL",
            "C. MOLP",
            "D. OEM"
        ],
        "goodAnswer": "B. GNU GPL"
    },
    {
        "id": 939,
        "question": "Kt\u00f3rym poleceniem w systemie Linux przypisuje si\u0119 adres IP i mask\u0119 podsieci dla interfejsu eth0?",
        "imageLoc": "",
        "answers": [
            "A. ipconfig eth0 172.16.31.1 mask 255.255.0.0",
            "B. ipconfig eth0 172.16.31.1 netmask 255.255.0.0",
            "C. ifconfig eth0 172.16.31.1 mask 255.255.0.0",
            "D. ifconfig eth0 172.16.31.1 netmask 255.255.0.0"
        ],
        "goodAnswer": "D. ifconfig eth0 172.16.31.1 netmask 255.255.0.0"
    },
    {
        "id": 940,
        "question": "Do zarz\u0105dzania programami i us\u0142ugami uruchamianymi wraz ze startem systemu operacyjnego w Windows 7 nale\u017cy wykorzysta\u0107 program",
        "imageLoc": "",
        "answers": [
            "A. msconfig.exe",
            "B. autoexec.bat",
            "C. config.sys",
            "D. autorun.inf"
        ],
        "goodAnswer": "A. msconfig.exe"
    },
    {
        "id": 941,
        "question": "W systemach Windows profil tymczasowy u\u017cytkownika jest",
        "imageLoc": "",
        "answers": [
            "A. wczytywany do systemu z serwera, okre\u015bla konkretne ustawienia dla pojedynczych u\u017cytkownik\u00f3w i ca\u0142ych grup.",
            "B. tworzony podczas pierwszego logowania do komputera i przechowywany na lokalnym dysku twardym komputera.",
            "C. wczytywany do systemu, je\u015bli b\u0142\u0105d uniemo\u017cliwia wczytanie profilu mobilnego u\u017cytkownika.",
            "D. tworzony przez administratora systemu i przechowywany na serwerze."
        ],
        "goodAnswer": "C. wczytywany do systemu, je\u015bli b\u0142\u0105d uniemo\u017cliwia wczytanie profilu mobilnego u\u017cytkownika."
    },
    {
        "id": 942,
        "question": "W jakim katalogu systemu Linux mog\u0105 znajdowa\u0107 si\u0119 pliki z informacjami o zainstalowanych w komputerze urz\u0105dzeniach, np pami\u0119ci operacyjnej",
        "imageLoc": "",
        "answers": [
            "A. /proc",
            "B. /var",
            "C. /dev",
            "D. /sbin"
        ],
        "goodAnswer": "A. /proc"
    },
    {
        "id": 943,
        "question": "Kt\u00f3ra us\u0142uga musi byc uruchomiona na serwerze by stacja robocza pobiera\u0142a automatycznie adres IP?",
        "imageLoc": "",
        "answers": [
            "A. DNS",
            "B. DHCP",
            "C. PROXY",
            "D. WINS"
        ],
        "goodAnswer": "B. DHCP"
    },
    {
        "id": 944,
        "question": "W sieciach bezprzewodowych Ad-Hoc IBSS (Independent Basic Service Set) stosowana jest fizyczna topologia",
        "imageLoc": "",
        "answers": [
            "A. siatki.",
            "B. magistrali.",
            "C. gwiazdy.",
            "D. pier\u015bcienia."
        ],
        "goodAnswer": "A. siatki."
    },
    {
        "id": 945,
        "question": "Utworzenie kontrolera domeny w rodzinie system\u00f3w Windows Server na lokalnym serwerze wymaga zainstalowania roli",
        "imageLoc": "",
        "answers": [
            "A. us\u0142ugi certyfikat\u00f3w w us\u0142udze Active Directory",
            "B. us\u0142ugi LDS w us\u0142udze Active Directory",
            "C. us\u0142ugi zarz\u0105dzania prawami dost\u0119pu w us\u0142udze Active Directory",
            "D. us\u0142ugi domenowej w us\u0142udze Active Directory"
        ],
        "goodAnswer": "D. us\u0142ugi domenowej w us\u0142udze Active Directory"
    },
    {
        "id": 946,
        "question": "Zjawisko przeniku, wyst\u0119puj\u0105ce w sieciach komputerowych polega na",
        "imageLoc": "",
        "answers": [
            "A. stratach sygna\u0142u w torze transmisyjnym.",
            "B. niejednorodno\u015bci toru, spowodowanej zmian\u0105 geometrii par przewod\u00f3w.",
            "C. op\u00f3\u017anieniach propagacji sygna\u0142u w torze transmisyjnym.",
            "D. przenikaniu sygna\u0142u pomi\u0119dzy s\u0105siaduj\u0105cymi w kablu parami przewod\u00f3w."
        ],
        "goodAnswer": "D. przenikaniu sygna\u0142u pomi\u0119dzy s\u0105siaduj\u0105cymi w kablu parami przewod\u00f3w."
    },
    {
        "id": 947,
        "question": "Aby w systemie Windows Server zarejestrowa\u0107 udane i nieudane pr\u00f3by logowania u\u017cytkownik\u00f3w oraz operacje na zasobach dyskowych, nale\u017cy skonfigurowa\u0107 dziennik",
        "imageLoc": "",
        "answers": [
            "A. aplikacji i us\u0142ug.",
            "B. systemu.",
            "C. zabezpiecze\u0144.",
            "D. ustawie\u0144."
        ],
        "goodAnswer": "C. zabezpiecze\u0144."
    },
    {
        "id": 948,
        "question": "Adres IP v.4 ma d\u0142ugo\u015b\u0107",
        "imageLoc": "",
        "answers": [
            "A. 10 bajt\u00f3w",
            "B. 32 bit\u00f3w",
            "C. 16 bit\u00f3w",
            "D. 2 bajty"
        ],
        "goodAnswer": "B. 32 bit\u00f3w"
    },
    {
        "id": 949,
        "question": "Przedstawiona na rysunku topologia sieci to",
        "imageLoc": require("../assets/img/1393.png"),
        "answers": [
            "A. bus",
            "B. star",
            "C. mesh",
            "D. ring"
        ],
        "goodAnswer": "C. mesh"
    },
    {
        "id": 950,
        "question": "Jak nazywa sie zbi\u00f3r us\u0142ug internetowych dla system\u00f3w rodziny Microsoft Windows, kt\u00f3ry umo\u017cliwia pe\u0142nienie roli serwera FTP oraz serwera WWW?",
        "imageLoc": "",
        "answers": [
            "A. IIS",
            "B. APACHE",
            "C. WINS",
            "D. PROFTPD"
        ],
        "goodAnswer": "A. IIS"
    },
    {
        "id": 951,
        "question": "Adres kom\u00f3rki pami\u0119ci podano w postaci binarnej 1110001110010100. W systemie szesnastkowym adres zapisuje si\u0119 w postaci",
        "imageLoc": "",
        "answers": [
            "A. 7E+092",
            "B. D281",
            "C. 493",
            "D. E394"
        ],
        "goodAnswer": "D. E394"
    },
    {
        "id": 952,
        "question": "Mechanizm limit\u00f3w dyskowych, pozwalaj\u0105cy zarz\u0105dza\u0107 wykorzystaniem przez u\u017cytkownik\u00f3w zasob\u00f3w dyskowych, jest okre\u015blany jako",
        "imageLoc": "",
        "answers": [
            "A. quota",
            "B. release",
            "C. spool",
            "D. management"
        ],
        "goodAnswer": "A. quota"
    },
    {
        "id": 953,
        "question": "Cecha systemu operacyjnego, pozwalaj\u0105ca uruchomi\u0107 r\u00f3wnocze\u015bnie kilka aplikacji w ramach podzia\u0142u czasu, przy czym podzia\u0142 czasu realizowany jest przez same aplikacje nosi nazw\u0119",
        "imageLoc": "",
        "answers": [
            "A. wielozadaniowo\u015bci z wyw\u0142aszczeniem",
            "B. wielozadaniowo\u015bci kooperatywnej",
            "C. wielodost\u0119powo\u015bci",
            "D. wieloprogramowo\u015bci"
        ],
        "goodAnswer": "B. wielozadaniowo\u015bci kooperatywnej"
    },
    {
        "id": 954,
        "question": "Przedstawione na rysunku narz\u0119dzie s\u0142u\u017cy do testowania",
        "imageLoc": require("../assets/img/1788.png"),
        "answers": [
            "A. okablowania LAN",
            "B. karty sieciowej",
            "C. zasilacza",
            "D. p\u0142yty g\u0142\u00f3wnej"
        ],
        "goodAnswer": "A. okablowania LAN"
    },
    {
        "id": 955,
        "question": "Przesy\u0142anie ruchu sieciowego poprzez router, kt\u00f3re wi\u0105\u017ce si\u0119 ze zmian\u0105 \u017ar\u00f3d\u0142owych lub docelowych adres\u00f3w IP, oznacza si\u0119 skr\u00f3tem",
        "imageLoc": "",
        "answers": [
            "A. IIS",
            "B. IANA",
            "C. FTP",
            "D. NAT"
        ],
        "goodAnswer": "D. NAT"
    },
    {
        "id": 956,
        "question": "Aby by\u0142a mo\u017cliwa komunikacja mi\u0119dzy sieciami VLAN, stosuje si\u0119",
        "imageLoc": "",
        "answers": [
            "A. Koncentrator",
            "B. Router",
            "C. Punkt dost\u0119powy",
            "D. Modem"
        ],
        "goodAnswer": "B. Router"
    },
    {
        "id": 957,
        "question": "Kt\u00f3ry adres IPv6 jest prawid\u0142owy?",
        "imageLoc": "",
        "answers": [
            "A. 1234.9ABC.123.DEF4",
            "B. 1234:9ABC::123::DEF4",
            "C. 1234:9ABC::123:DEF4",
            "D. 1234-9ABC-123-DEF4"
        ],
        "goodAnswer": "C. 1234:9ABC::123:DEF4"
    },
    {
        "id": 958,
        "question": "Przedstawione polecenie zosta\u0142o wydane przez Administratora systemu operacyjnego podczas r\u0119cznej konfiguracji interfejsu sieciowego. Efektem dzia\u0142ania tego polecenia jest",
        "imageLoc": require("../assets/img/1989.png"),
        "answers": [
            "A. w\u0142\u0105czenie dynamicznego przypisywania adres\u00f3w IP.",
            "B. ustawienie adresu 151.10.0.1 jako bramy domy\u015blnej.",
            "C. wy\u0142\u0105czenie interfejsu.",
            "D. ustawienie 24 bitowej maski."
        ],
        "goodAnswer": "B. ustawienie adresu 151.10.0.1 jako bramy domy\u015blnej."
    },
    {
        "id": 959,
        "question": "Mat\u0119 antystatyczn\u0105 i opask\u0119 stosuje si\u0119 podczas monta\u017cu podzespo\u0142u w celu",
        "imageLoc": "",
        "answers": [
            "A. poprawy higieny serwisant",
            "B. oczyszczenia jego zabrudze\u0144.",
            "C. u\u0142atwienia jego naprawy.",
            "D. neutralizacji \u0142adunk\u00f3w elektrostatycznych."
        ],
        "goodAnswer": "D. neutralizacji \u0142adunk\u00f3w elektrostatycznych."
    },
    {
        "id": 960,
        "question": "Licencja wolnego i otwartego oprogramowania, to licencja",
        "imageLoc": "",
        "answers": [
            "A. GNU GPL",
            "B. Adware",
            "C. Trial",
            "D. OEM"
        ],
        "goodAnswer": "A. GNU GPL"
    },
    {
        "id": 961,
        "question": "W systemie Windows u\u017cycie prezentowanego polecenia spowoduje tymczasow\u0105 zmian\u0119 koloru",
        "imageLoc": require("../assets/img/509.png"),
        "answers": [
            "A. t\u0142a i czcionki okna Windows.",
            "B. t\u0142a okna wiersza polece\u0144, kt\u00f3re by\u0142o uruchomione z ustawieniami domy\u015blnymi.",
            "C. paska nazwy okna Windows.",
            "D. czcionki wiersza polece\u0144, kt\u00f3ra by\u0142a uruchomiona z ustawieniami domy\u015blnymi."
        ],
        "goodAnswer": "D. czcionki wiersza polece\u0144, kt\u00f3ra by\u0142a uruchomiona z ustawieniami domy\u015blnymi."
    },
    {
        "id": 962,
        "question": "Suma liczb binarnych 1010 + 111 zapisana w systemie dziesi\u0119tnym wyniesie",
        "imageLoc": "",
        "answers": [
            "A. 16",
            "B. 17",
            "C. 19",
            "D. 18"
        ],
        "goodAnswer": "B. 17"
    },
    {
        "id": 963,
        "question": "Maksymalny transfer danych nap\u0119du CD dla pr\u0119dko\u015bci przesy\u0142u x42 wynosi",
        "imageLoc": "",
        "answers": [
            "A. 3600 KiB/s",
            "B. 6300 KiB/s",
            "C. 2400 KiB/s",
            "D. 6000 KiB/s"
        ],
        "goodAnswer": "B. 6300 KiB/s"
    },
    {
        "id": 964,
        "question": "Kt\u00f3re polecenie systemu Windows Server 2008 umo\u017cliwia promowanie serwera do roli kontrolera domeny?",
        "imageLoc": "",
        "answers": [
            "A. gpedit",
            "B. nslookup",
            "C. dcpromo",
            "D. gpresult"
        ],
        "goodAnswer": "C. dcpromo"
    },
    {
        "id": 965,
        "question": "Adres MAC (Medium Access Control Address) jest sprz\u0119towym adresem karty sieciowej Ethernet warstwy modelu OSI",
        "imageLoc": "",
        "answers": [
            "A. trzeciej o d\u0142ugo\u015bci 48 bit\u00f3w",
            "B. drugiej o d\u0142ugo\u015bci 32 bit\u00f3w",
            "C. trzeciej o d\u0142ugo\u015bci 32 bit\u00f3w",
            "D. drugiej o d\u0142ugo\u015bci 48 bit\u00f3w"
        ],
        "goodAnswer": "D. drugiej o d\u0142ugo\u015bci 48 bit\u00f3w"
    },
    {
        "id": 966,
        "question": "Na rysunku przedstawiono z\u0142\u0105cze zasilania",
        "imageLoc": require("../assets/img/313.png"),
        "answers": [
            "A. dysk\u00f3w wewn\u0119trznych SATA",
            "B. stacji dyskietek",
            "C. ATX12V zasilania procesora",
            "D. Molex do dysk\u00f3w twardych"
        ],
        "goodAnswer": "C. ATX12V zasilania procesora"
    },
    {
        "id": 967,
        "question": "Oprogramowanie Microsoft Hyper-V nale\u017cy zastosowa\u0107 do",
        "imageLoc": "",
        "answers": [
            "A. lokalizacji zasob\u00f3w sieciowych",
            "B. zdalnego po\u0142\u0105czenia z innym hostami",
            "C. wirtualizacji fizycznych komputer\u00f3w",
            "D. identyfikacji komputera w sieci"
        ],
        "goodAnswer": "C. wirtualizacji fizycznych komputer\u00f3w"
    },
    {
        "id": 968,
        "question": "Us\u0142uga systemu Windows Server, s\u0142u\u017c\u0105ca do zdalnej instalacji system\u00f3w operacyjnych na komputerach zarz\u0105dzanych przez serwer, to",
        "imageLoc": "",
        "answers": [
            "A. FTP",
            "B. GPO",
            "C. WDS",
            "D. DFS"
        ],
        "goodAnswer": "C. WDS"
    },
    {
        "id": 969,
        "question": "W wyniku wykonania przedstawionych polece\u0144 systemu Linux interfejs sieciowy eth0 otrzyma",
        "imageLoc": require("../assets/img/311.png"),
        "answers": [
            "A. adres IP 10.0.0.100, mask\u0119 /24, bram\u0119 10.0.0.10",
            "B. adres IP 10.0.0.100, mask\u0119 /22, bram\u0119 10.0.0.10",
            "C. adres IP 10.0.0.10, mask\u0119 /24, bram\u0119 10.0.0.255",
            "D. adres IP 10.0.0.10, mask\u0119 /16, bram\u0119 10.0.0.100"
        ],
        "goodAnswer": "A. adres IP 10.0.0.100, mask\u0119 /24, bram\u0119 10.0.0.10"
    },
    {
        "id": 970,
        "question": "Podczas pr\u00f3by uzyskania po\u0142\u0105czenia z serwerem FTP uwierzytelnianie anonimowe nie powiod\u0142o si\u0119, natomiast pr\u00f3ba autoryzacji przy pomocy loginu i has\u0142a ko\u0144czy si\u0119 powodzeniem. Jaka jest mo\u017cliwa przyczyna zaistnia\u0142ej sytuacji?",
        "imageLoc": "",
        "answers": [
            "A. Wy\u0142\u0105czona us\u0142uga FTP.",
            "B. B\u0142\u0119dnie ustawione uprawnienia do zasobu.",
            "C. Brak \u017c\u0105danego zasobu.",
            "D. Wy\u0142\u0105czone uwierzytelnianie anonimowe na serwerze."
        ],
        "goodAnswer": "D. Wy\u0142\u0105czone uwierzytelnianie anonimowe na serwerze."
    },
    {
        "id": 971,
        "question": "Wewn\u0119trzny protok\u00f3\u0142 trasowania, oparty na analizie stanu \u0142\u0105cza, to",
        "imageLoc": "",
        "answers": [
            "A. EGP",
            "B. RIP",
            "C. OSPF",
            "D. BGP"
        ],
        "goodAnswer": "C. OSPF"
    },
    {
        "id": 972,
        "question": "Kt\u00f3ry zapis jest mask\u0105 podsieci dla adresu IP 217.152.128.100/25?",
        "imageLoc": "",
        "answers": [
            "A. 255.255.255.128",
            "B. 255.255.255.224",
            "C. 255.255.255.192",
            "D. 255.255.255.0"
        ],
        "goodAnswer": "A. 255.255.255.128"
    },
    {
        "id": 973,
        "question": "Aby dane pliku znajduj\u0105cego si\u0119 na dysku twardym, zapisane na nies\u0105siaduj\u0105cych ze sob\u0105 klastrach, zosta\u0142y u\u0142o\u017cone tak, by zajmowa\u0142y s\u0105siaduj\u0105ce klastry, nale\u017cy uruchomi\u0107",
        "imageLoc": "",
        "answers": [
            "A. program chkdsk",
            "B. program scandisk",
            "C. defragmentacj\u0119 dysku",
            "D. oczyszczanie dysku"
        ],
        "goodAnswer": "C. defragmentacj\u0119 dysku"
    },
    {
        "id": 974,
        "question": "Liczba ABBA w kodzie heksadecymalnym ma posta\u0107 dw\u00f3jkow\u0105 o warto\u015bci",
        "imageLoc": "",
        "answers": [
            "A. 1011 1010 1010 1011",
            "B. 0101 1011 1011 0101",
            "C. 1010 1011 1011 1010",
            "D. 1010 1111 1111 1010"
        ],
        "goodAnswer": "C. 1010 1011 1011 1010"
    },
    {
        "id": 975,
        "question": "Kt\u00f3ry ze standard\u00f3w Ethernet definiuje Gigabit Ethernet dla okablowania UTP?",
        "imageLoc": "",
        "answers": [
            "A. 10 GBase-TX",
            "B. 10 Base-TX",
            "C. 1000 Base-TX",
            "D. 100 GBase-TX"
        ],
        "goodAnswer": "C. 1000 Base-TX"
    },
    {
        "id": 976,
        "question": "Komputer ma pod\u0142\u0105czon\u0105 mysz bezprzewodow\u0105, a kursor podczas pracy nie porusza si\u0119 p\u0142ynnie, \"skacze\" po ekranie. Przyczyn\u0105 usterki urz\u0105dzenia mo\u017ce by\u0107",
        "imageLoc": "",
        "answers": [
            "A. wyczerpywanie si\u0119 baterii zasilaj\u0105cej.",
            "B. brak baterii.",
            "C. uszkodzenie mikroprze\u0142\u0105cznika.",
            "D. uszkodzenie lewego przycisku."
        ],
        "goodAnswer": "A. wyczerpywanie si\u0119 baterii zasilaj\u0105cej."
    },
    {
        "id": 977,
        "question": "W wierszu polece\u0144 w systemie operacyjnym zosta\u0142o wydane polecenie nslookup. Jaka informacj\u0119 uzyskano?",
        "imageLoc": require("../assets/img/1223.png"),
        "answers": [
            "A. Adres serwera DNS",
            "B. Adres serwera DHCP",
            "C. Domy\u015bln\u0105 bram\u0119",
            "D. Adres IP hosta"
        ],
        "goodAnswer": "A. Adres serwera DNS"
    },
    {
        "id": 978,
        "question": "Z\u0142\u0105cze zasilacza ATX12V s\u0142u\u017cy do zasilania",
        "imageLoc": "",
        "answers": [
            "A. stacji dyskietek",
            "B. urz\u0105dze\u0144 SATA",
            "C. karty graficznej PCI-e 3.0",
            "D. procesora"
        ],
        "goodAnswer": "D. procesora"
    },
    {
        "id": 979,
        "question": "Kt\u00f3ry z adres\u00f3w IPv4 jest odpowiednikiem adresu IPv6 ::1?",
        "imageLoc": "",
        "answers": [
            "A. 1.1.1.1",
            "B. 128.0.0.1",
            "C. 127.0.0.1",
            "D. 10.0.0.1"
        ],
        "goodAnswer": "C. 127.0.0.1"
    },
    {
        "id": 980,
        "question": "Utworzenie kontrolera domeny w rodzinie system\u00f3w Windows Server na lokalnym serwerze wymaga zainstalowania roli",
        "imageLoc": "",
        "answers": [
            "A. us\u0142ugi certyfikat\u00f3w w us\u0142udze Active Directory",
            "B. us\u0142ugi domenowej w us\u0142udze Active Directory",
            "C. us\u0142ugi LDS w us\u0142udze Active Directory",
            "D. us\u0142ugi zarz\u0105dzania prawami dost\u0119pu w us\u0142udze Active Directory"
        ],
        "goodAnswer": "B. us\u0142ugi domenowej w us\u0142udze Active Directory"
    },
    {
        "id": 981,
        "question": "U\u017cytkownicy z grupy Pracownicy nie mog\u0105 drukowa\u0107 dokument\u00f3w przy u\u017cyciu serwera wydruku w systemie operacyjnym Windows Server. Maj\u0105 oni przydzielone uprawnienia tylko \"Zarz\u0105dzanie dokumentami\". Co nale\u017cy zrobi\u0107, aby rozwi\u0105za\u0107 opisany problem?",
        "imageLoc": "",
        "answers": [
            "A. Dla grupy Pracownicy nale\u017cy nada\u0107 uprawnienia \"Drukuj\"",
            "B. Dla grupy Pracownicy nale\u017cy usun\u0105\u0107 uprawnienia \"Zarz\u0105dzanie dokumentami\"",
            "C. Dla grupy Administratorzy nale\u017cy usun\u0105\u0107 uprawnienia \"Drukuj\"",
            "D. Dla grupy Administratorzy nale\u017cy usun\u0105\u0107 uprawnienia \"Zarz\u0105dzanie drukarkami\""
        ],
        "goodAnswer": "A. Dla grupy Pracownicy nale\u017cy nada\u0107 uprawnienia \"Drukuj\""
    },
    {
        "id": 982,
        "question": "Je\u015bli u\u017cytkownik wybierze pozycj\u0119 wskazan\u0105 strza\u0142k\u0105, b\u0119dzie m\u00f3g\u0142 zainstalowa\u0107 aktualizacje",
        "imageLoc": require("../assets/img/866.png"),
        "answers": [
            "A. usuwaj\u0105ce usterk\u0119 krytyczn\u0105, niezwi\u0105zan\u0105 z zabezpieczeniami",
            "B. powoduj\u0105ce uaktualnienie Windows 8.1 do systemu Windows 10",
            "C. dotycz\u0105ce luk w zabezpieczeniach o priorytecie krytycznym",
            "D. dotycz\u0105ce sterownik\u00f3w lub nowego oprogramowania firmy Microsoft"
        ],
        "goodAnswer": "D. dotycz\u0105ce sterownik\u00f3w lub nowego oprogramowania firmy Microsoft"
    },
    {
        "id": 983,
        "question": "Niekorzystn\u0105 cech\u0105 macierzy RAID 0 jest",
        "imageLoc": "",
        "answers": [
            "A. replikacja danych na n-dyskach",
            "B. konieczno\u015b\u0107 posiadania dodatkowego dysku zapisuj\u0105cego sumy kontrolne",
            "C. zmniejszenie szybko\u015bci zapisu/odczytu w por\u00f3wnaniu z pojedynczym dyskiem",
            "D. brak odporno\u015bci na awari\u0119 cho\u0107by jednego dysku"
        ],
        "goodAnswer": "D. brak odporno\u015bci na awari\u0119 cho\u0107by jednego dysku"
    },
    {
        "id": 984,
        "question": "Toner jest materia\u0142em eksploatacyjnym drukarki",
        "imageLoc": "",
        "answers": [
            "A. laserowej",
            "B. sublimacyjnej",
            "C. atramentowej",
            "D. ig\u0142owej"
        ],
        "goodAnswer": "A. laserowej"
    },
    {
        "id": 985,
        "question": "Rozpowszechniona forma oprogramowania zgodna z zasad\u0105 \"najpierw wypr\u00f3buj, a potem kup\", to",
        "imageLoc": "",
        "answers": [
            "A. OEM",
            "B. Shareware",
            "C. Software",
            "D. Freeware"
        ],
        "goodAnswer": "B. Shareware"
    },
    {
        "id": 986,
        "question": "Numer IP przypisany komputerowi umo\u017cliwia odbiorcy pakietu IP rozr\u00f3\u017cnienie identyfikator\u00f3w",
        "imageLoc": "",
        "answers": [
            "A. sieci i hosta",
            "B. sieci i bramy",
            "C. hosta i bramy",
            "D. hosta i rutera"
        ],
        "goodAnswer": "A. sieci i hosta"
    },
    {
        "id": 987,
        "question": "Kt\u00f3ry protok\u00f3\u0142 komunikacyjny wykorzystuje port 53?",
        "imageLoc": "",
        "answers": [
            "A. SMTP",
            "B. HTTP",
            "C. DNS",
            "D. FTP"
        ],
        "goodAnswer": "C. DNS"
    },
    {
        "id": 988,
        "question": "Rodzina adapter\u00f3w wykonanych w technologii Powerline umo\u017cliwiaj\u0105ca wykorzystanie sieci energetycznej w obr\u0119bie jednego domu/mieszkania do przesy\u0142ania sygna\u0142u sieciowego nosi nazw\u0119:",
        "imageLoc": "",
        "answers": [
            "A. InternetOutlet",
            "B. InternetPlug",
            "C. HomeOutlet",
            "D. HomePlug"
        ],
        "goodAnswer": "D. HomePlug"
    },
    {
        "id": 989,
        "question": "Widoczne na schemacie procesora rejestry pe\u0142ni\u0105 funkcj\u0119 przechowywania adresu do",
        "imageLoc": require("../assets/img/554.png"),
        "answers": [
            "A. wykonywania dzia\u0142a\u0144 arytmetycznych",
            "B. nast\u0119pnej instrukcji programu",
            "C. przechowywania argument\u00f3w oblicze\u0144",
            "D. sterowania wykonywanym programem"
        ],
        "goodAnswer": "C. przechowywania argument\u00f3w oblicze\u0144"
    },
    {
        "id": 990,
        "question": "Dokumentacja powykonawcza projektowanej sieci LAN powinna mi\u0119dzy innymi zawiera\u0107",
        "imageLoc": "",
        "answers": [
            "A. kosztorys rob\u00f3t instalatorskich",
            "B. raport pomiarowy tor\u00f3w transmisyjnych",
            "C. spis rysunk\u00f3w wykonawczych",
            "D. za\u0142o\u017cenia projektowe sieci lokalnej"
        ],
        "goodAnswer": "B. raport pomiarowy tor\u00f3w transmisyjnych"
    },
    {
        "id": 991,
        "question": "System S.M.A.R.T. s\u0142u\u017cy do monitorowania pracy i wykrywania b\u0142\u0119d\u00f3w",
        "imageLoc": "",
        "answers": [
            "A. nap\u0119d\u00f3w p\u0142yt CD/DVD",
            "B. kart rozszerze\u0144",
            "C. p\u0142yty g\u0142\u00f3wnej",
            "D. dysk\u00f3w twardych"
        ],
        "goodAnswer": "D. dysk\u00f3w twardych"
    },
    {
        "id": 992,
        "question": "Jak nazywa si\u0119 w systemie Windows profil u\u017cytkownika tworzony podczas pierwszego logowania do komputera i przechowywany na lokalnym dysku twardym komputera, a ka\u017cda jego zmiana dotyczy jedynie komputera, na kt\u00f3rym zosta\u0142a wprowadzona?",
        "imageLoc": "",
        "answers": [
            "A. Lokalny",
            "B. Obowi\u0105zkowy",
            "C. Mobilny",
            "D. Tymczasowy"
        ],
        "goodAnswer": "A. Lokalny"
    },
    {
        "id": 993,
        "question": "Kt\u00f3ry zakres adres\u00f3w IPv4 jest w\u0142a\u015bciwie przyporz\u0105dkowany do klasy?",
        "imageLoc": require("../assets/img/1697.png"),
        "answers": [
            "A. A",
            "B. B",
            "C. C",
            "D. D"
        ],
        "goodAnswer": "B. B"
    },
    {
        "id": 994,
        "question": "Aby po uruchomieniu systemu Windows automatycznie w\u0142\u0105cza\u0142 si\u0119 program Kalkulator, nale\u017cy wykona\u0107 konfiguracj\u0119",
        "imageLoc": "",
        "answers": [
            "A. pulpitu systemowego.",
            "B. pliku wymiany.",
            "C. harmonogramu zada\u0144.",
            "D. funkcji Snap i Peak."
        ],
        "goodAnswer": "C. harmonogramu zada\u0144."
    },
    {
        "id": 995,
        "question": "Protok\u00f3\u0142 TCP (Transmission Control Protocol) dzia\u0142a w trybie",
        "imageLoc": "",
        "answers": [
            "A. po\u0142\u0105czeniowym",
            "B. hybrydowym",
            "C. bezpo\u0142\u0105czeniowym",
            "D. sekwencyjnym"
        ],
        "goodAnswer": "A. po\u0142\u0105czeniowym"
    },
    {
        "id": 996,
        "question": "Urz\u0105dzeniem, kt\u00f3re s\u0142u\u017cy do wycinania kszta\u0142t\u00f3w oraz grawerowania mi\u0119dzy innymi w materia\u0142ach drewnianych, szklanych i metalowych, jest ploter",
        "imageLoc": "",
        "answers": [
            "A. b\u0119bnowy",
            "B. laserowy",
            "C. solwentowy",
            "D. tn\u0105cy"
        ],
        "goodAnswer": "B. laserowy"
    },
    {
        "id": 997,
        "question": "Kt\u00f3rego z polece\u0144 systemu Linux nale\u017cy u\u017cy\u0107 do utworzenia archiwum danych?",
        "imageLoc": "",
        "answers": [
            "A. cal",
            "B. tar",
            "C. grep",
            "D. date"
        ],
        "goodAnswer": "B. tar"
    },
    {
        "id": 998,
        "question": "W celu wy\u0142\u0105czenia rozg\u0142aszania nazwy sieci bezprzewodowej nale\u017cy w punkcie dost\u0119powym wy\u0142\u0105czy\u0107 funkcj\u0119",
        "imageLoc": "",
        "answers": [
            "A. SSID",
            "B. UPnP AV",
            "C. Filter IDENT",
            "D. Wide Channel"
        ],
        "goodAnswer": "A. SSID"
    },
    {
        "id": 999,
        "question": "W ramce umieszczono wyniki badania dysku twardego. Jakie dzia\u0142ania nale\u017cy podj\u0105\u0107 po ich analizie, aby poprawi\u0107 sprawno\u015b\u0107 dysku?",
        "imageLoc": require("../assets/img/202.png"),
        "answers": [
            "A. Sformatowa\u0107 dysk",
            "B. Oczy\u015bci\u0107 dysk",
            "C. Podzieli\u0107 dysk na partycje",
            "D. Zdefragmentowa\u0107 dysk"
        ],
        "goodAnswer": "D. Zdefragmentowa\u0107 dysk"
    },
    {
        "id": 1000,
        "question": "Protoko\u0142em kontrolnym rodziny TCP/IP, kt\u00f3rego rol\u0105 jest mi\u0119dzy innymi wykrywanie awarii urz\u0105dze\u0144 sieciowych, jest",
        "imageLoc": "",
        "answers": [
            "A. SMTP",
            "B. ICMP",
            "C. IMAP",
            "D. FDDI"
        ],
        "goodAnswer": "B. ICMP"
    },
    {
        "id": 1001,
        "question": "Adres IP urz\u0105dzenia umo\u017cliwiaj\u0105cego innym komputerom w sieci lokalnej dost\u0119p do Internetu, to adres",
        "imageLoc": "",
        "answers": [
            "A. WINS",
            "B. proxy",
            "C. bramy (routera)",
            "D. DNS"
        ],
        "goodAnswer": "C. bramy (routera)"
    },
    {
        "id": 1002,
        "question": "Jednym z narz\u0119dzi u\u017cywanych do tworzenia kopii partycji i dysk\u00f3w jest",
        "imageLoc": "",
        "answers": [
            "A. Diskpart",
            "B. Norton Ghost",
            "C. CrystalDiskInfo",
            "D. Gparted"
        ],
        "goodAnswer": "B. Norton Ghost"
    },
    {
        "id": 1003,
        "question": "Aby zapewni\u0107 dobr\u0105 jako\u015b\u0107 po\u0142\u0105cze\u0144 g\u0142osowych VoIP kosztem innych przesy\u0142anych danych, nale\u017cy na routerze w\u0142\u0105czy\u0107 i skonfigurowa\u0107 us\u0142ug\u0119",
        "imageLoc": "",
        "answers": [
            "A. SSL",
            "B. NAT",
            "C. DMZ",
            "D. QoS"
        ],
        "goodAnswer": "D. QoS"
    },
    {
        "id": 1004,
        "question": "Adres IP (ang. Internet Protocol Address) jest",
        "imageLoc": "",
        "answers": [
            "A. adresem fizycznym komputera",
            "B. unikatow\u0105 nazw\u0105 symboliczn\u0105 urz\u0105dzenia",
            "C. adresem logicznym komputera",
            "D. unikatowym numerem fabrycznym urz\u0105dzenia"
        ],
        "goodAnswer": "C. adresem logicznym komputera"
    },
    {
        "id": 1005,
        "question": "Aby system operacyjny mia\u0142 szybszy dost\u0119p do plik\u00f3w znajduj\u0105cych si\u0119 na dysku twardym, nale\u017cy przeprowadzi\u0107",
        "imageLoc": "",
        "answers": [
            "A. szyfrowanie dysku",
            "B. partycjonowanie dysku",
            "C. fragmentacj\u0119 dysku",
            "D. defragmentacj\u0119 dysku"
        ],
        "goodAnswer": "D. defragmentacj\u0119 dysku"
    },
    {
        "id": 1006,
        "question": "W firmie zosta\u0142 zastosowany adres klasy B do podzia\u0142u na 100 podsieci. Ka\u017cda z podsieci ma dost\u0119pnych maksymalnie 510 adres\u00f3w IP. Kt\u00f3ra maska zosta\u0142a zastosowana do wyznaczenia podsieci?",
        "imageLoc": "",
        "answers": [
            "A. 255.255.224.0",
            "B. 255.255.254.0",
            "C. 255.255.248.0",
            "D. 255.255.240.0"
        ],
        "goodAnswer": "B. 255.255.254.0"
    },
    {
        "id": 1007,
        "question": "Kt\u00f3re karty sieciowe o podanych adresach MAC zosta\u0142y wyprodukowane przez tego samego producenta?",
        "imageLoc": "",
        "answers": [
            "A. 00:16:B9:00:1F:FE oraz 00:16:B9:00:2F:FE",
            "B. 00:16:B9:00:1F:FE oraz 00:16:B8:00:2F:FE",
            "C. 00:17:B9:00:1F:FE oraz 00:16:B9:00:1F:FE",
            "D. 00:17:B9:00:1F:FE oraz 00:16:B9:00:2F:FE"
        ],
        "goodAnswer": "A. 00:16:B9:00:1F:FE oraz 00:16:B9:00:2F:FE"
    },
    {
        "id": 1008,
        "question": "Internetowy protok\u00f3\u0142 pocztowy, kt\u00f3ry pozwala na zarz\u0105dzanie wieloma folderami pocztowymi oraz pobieranie i operowanie na listach znajduj\u0105cych si\u0119 na zdalnym serwerze, to",
        "imageLoc": "",
        "answers": [
            "A. SMTP",
            "B. TCP",
            "C. IMAP",
            "D. POP3"
        ],
        "goodAnswer": "C. IMAP"
    },
    {
        "id": 1009,
        "question": "Kt\u00f3ry protok\u00f3\u0142 sygnalizuj\u0105cy jest stosowany w telefonii VoIP?",
        "imageLoc": "",
        "answers": [
            "A. SIP (Session Initiation Protocol)",
            "B. SNMP (Simple Network Management Protocol)",
            "C. DHCP (Dynamic Host Configuration Protocol)",
            "D. POP (Post Office Protocol)"
        ],
        "goodAnswer": "A. SIP (Session Initiation Protocol)"
    },
    {
        "id": 1010,
        "question": "Translacj\u0105 nazw domenowych na adresy sieciowe zajmuje si\u0119 us\u0142uga",
        "imageLoc": "",
        "answers": [
            "A. DHCP",
            "B. DNS",
            "C. SMTP",
            "D. SNMP"
        ],
        "goodAnswer": "B. DNS"
    },
    {
        "id": 1011,
        "question": "Kt\u00f3re okre\u015blenie dotycz\u0105ce konta u\u017cytkownika Active Directory w systemie Windows jest prawdziwe?",
        "imageLoc": "",
        "answers": [
            "A. Nazwa logowania u\u017cytkownika mo\u017ce mie\u0107 d\u0142ugo\u015b\u0107 wi\u0119ksz\u0105 ni\u017c 100 bajt\u00f3w",
            "B. Nazwa logowania u\u017cytkownika musi mie\u0107 mniej ni\u017c 20 znak\u00f3w",
            "C. Nazwa logowania u\u017cytkownika musi mie\u0107 mniej ni\u017c 21 znak\u00f3w",
            "D. Nazwa logowanie u\u017cytkownika nie mo\u017ce mie\u0107 d\u0142ugo\u015bci wi\u0119kszej ni\u017c 100 bajt\u00f3w"
        ],
        "goodAnswer": "A. Nazwa logowania u\u017cytkownika mo\u017ce mie\u0107 d\u0142ugo\u015b\u0107 wi\u0119ksz\u0105 ni\u017c 100 bajt\u00f3w"
    },
    {
        "id": 1012,
        "question": "Jak nazywamy atak na sie\u0107 komputerow\u0105 polegaj\u0105cy na przechwytywaniu pakiet\u00f3w przesy\u0142anych w sieci?",
        "imageLoc": "",
        "answers": [
            "A. skanowanie sieci",
            "B. ICMP echo",
            "C. spoofing",
            "D. nas\u0142uchiwanie"
        ],
        "goodAnswer": "D. nas\u0142uchiwanie"
    },
    {
        "id": 1013,
        "question": "Kt\u00f3ra z wymienionych czynno\u015bci konserwacyjnych drukarek dotyczy tylko drukarki laserowej?",
        "imageLoc": "",
        "answers": [
            "A. Usuni\u0119cie zabrudze\u0144 z zespo\u0142u czyszcz\u0105cego g\u0142owice",
            "B. Oczyszczenie traktora",
            "C. Czyszczenie prowadnic karetki",
            "D. Czyszczenie luster i soczewek"
        ],
        "goodAnswer": "D. Czyszczenie luster i soczewek"
    },
    {
        "id": 1014,
        "question": "Liczbami 25 i 27, na przedstawionej p\u0142ycie g\u0142\u00f3wnej komputera, oznaczono z\u0142\u0105cza",
        "imageLoc": require("../assets/img/1314.png"),
        "answers": [
            "A. LPT",
            "B. USB",
            "C. PS 2",
            "D. RS 232"
        ],
        "goodAnswer": "B. USB"
    },
    {
        "id": 1015,
        "question": "Narz\u0119dzie na zdj\u0119ciu s\u0142u\u017cy do",
        "imageLoc": require("../assets/img/1339.png"),
        "answers": [
            "A. Monta\u017cu modu\u0142u Krone w gniazdach",
            "B. Zaciskania wtyk\u00f3w RJ45",
            "C. Wykonania zako\u0144cze\u0144 kablowych w z\u0142\u0105czach LSA",
            "D. \u015aci\u0105gania izolacji"
        ],
        "goodAnswer": "C. Wykonania zako\u0144cze\u0144 kablowych w z\u0142\u0105czach LSA"
    },
    {
        "id": 1016,
        "question": "Jak musz\u0105 by\u0107 ustawione prawa dost\u0119pu w systemie Linux, aby tylko jego w\u0142a\u015bciciel m\u00f3g\u0142 zapisywa\u0107 w danym katalogu?",
        "imageLoc": "",
        "answers": [
            "A. r-xr-xrwx",
            "B. rwxr-xrwx",
            "C. rwxr-xr-x",
            "D. r-xrwxr-x"
        ],
        "goodAnswer": "C. rwxr-xr-x"
    },
    {
        "id": 1017,
        "question": "Aby wy\u015bwietli\u0107 przedstawion\u0105 informacj\u0119 o systemie Linux w terminalu, nale\u017cy u\u017cy\u0107 polecenia",
        "imageLoc": require("../assets/img/1891.png"),
        "answers": [
            "A. uname -a",
            "B. hostname",
            "C. factor 22",
            "D. uptime"
        ],
        "goodAnswer": "A. uname -a"
    },
    {
        "id": 1018,
        "question": "Komputer ma pod\u0142\u0105czon\u0105 mysz bezprzewodow\u0105, a kursor podczas pracy nie porusza si\u0119 p\u0142ynie, \"skacze\" po ekranie. Przyczyn\u0105 usterki urz\u0105dzenia mo\u017ce by\u0107",
        "imageLoc": "",
        "answers": [
            "A. wyczerpywanie si\u0119 baterii zasilaj\u0105cej",
            "B. uszkodzenie lewego przycisku",
            "C. uszkodzenie mikroprze\u0142\u0105cznika",
            "D. brak baterii"
        ],
        "goodAnswer": "A. wyczerpywanie si\u0119 baterii zasilaj\u0105cej"
    },
    {
        "id": 1019,
        "question": "Kt\u00f3ra funkcja punktu dost\u0119powego pozwala zabezpieczy\u0107 sie\u0107 bezprzewodow\u0105 tak, aby tylko urz\u0105dzenia o okre\u015blonych adresach fizycznych mog\u0142y si\u0119 do niej pod\u0142\u0105czy\u0107?",
        "imageLoc": "",
        "answers": [
            "A. Uwierzytelnianie",
            "B. Radius (Remote Authentication Dial In User Service)",
            "C. Nadanie SSID",
            "D. Filtrowanie adres\u00f3w MAC"
        ],
        "goodAnswer": "D. Filtrowanie adres\u00f3w MAC"
    },
    {
        "id": 1020,
        "question": "Partycja, na kt\u00f3rej zainstalowany jest system operacyjny, nazywana jest partycj\u0105",
        "imageLoc": "",
        "answers": [
            "A. wymiany",
            "B. rozszerzon\u0105",
            "C. systemow\u0105",
            "D. folderow\u0105"
        ],
        "goodAnswer": "C. systemow\u0105"
    },
    {
        "id": 1021,
        "question": "W systemie Windows konto u\u017cytkownika tworzy si\u0119 poleceniem",
        "imageLoc": "",
        "answers": [
            "A. adduser",
            "B. users",
            "C. net user",
            "D. useradd"
        ],
        "goodAnswer": "C. net user"
    },
    {
        "id": 1022,
        "question": "Polecenie uname -s w systemie Linux jest wykorzystywane do sprawdzenia",
        "imageLoc": "",
        "answers": [
            "A. statusu aktywnych interfejs\u00f3w sieciowych.",
            "B. ilo\u015bci wolnej pami\u0119ci.",
            "C. wolnego miejsca na dyskach twardych.",
            "D. nazwy j\u0105dra systemu operacyjnego."
        ],
        "goodAnswer": "D. nazwy j\u0105dra systemu operacyjnego."
    },
    {
        "id": 1023,
        "question": "Po stwierdzeniu przypadkowego usuni\u0119cia wa\u017cnych danych na dysku twardym, aby odzyska\u0107 usuni\u0119te pliki, najlepiej",
        "imageLoc": "",
        "answers": [
            "A. przeskanowa\u0107 system programem antywirusowym, a nast\u0119pnie u\u017cy\u0107 narz\u0119dzia chkdsk.",
            "B. pod\u0142\u0105czy\u0107 dysk do zestawu komputerowego z zainstalowanym programem typu recovery.",
            "C. zainstalowa\u0107 na tej samej partycji co pliki program do odzyskiwania usuni\u0119tych danych np. Recuva.",
            "D. odinstalowa\u0107 oraz ponownie zainstalowa\u0107 sterowniki dysku twardego, zalecane przez producenta."
        ],
        "goodAnswer": "B. pod\u0142\u0105czy\u0107 dysk do zestawu komputerowego z zainstalowanym programem typu recovery."
    },
    {
        "id": 1024,
        "question": "Kt\u00f3r\u0105 us\u0142ug\u0119 nale\u017cy zainstalowa\u0107 na serwerze, by by\u0142o mo\u017cliwe korzystanie z nazw domenowych?",
        "imageLoc": "",
        "answers": [
            "A. AD",
            "B. DNS",
            "C. DHCP",
            "D. SNTP"
        ],
        "goodAnswer": "B. DNS"
    },
    {
        "id": 1025,
        "question": "Jaka jest maksymalna pr\u0119dko\u015b\u0107 transmisji danych w sieci przy zastosowaniu skr\u0119tki kategorii 5e?",
        "imageLoc": "",
        "answers": [
            "A. 1 Gb/s",
            "B. 10 Mb/s",
            "C. 10 Gb/s",
            "D. 100 Mb/s"
        ],
        "goodAnswer": "A. 1 Gb/s"
    },
    {
        "id": 1026,
        "question": "Bezp\u0142atnym programem antywirusowym dostarczanym przez Microsoft dla u\u017cytkownik\u00f3w legalnych wersji systemu operacyjnego Windows jest",
        "imageLoc": "",
        "answers": [
            "A. Microsoft Free Antywirus",
            "B. Windows Defender",
            "C. Windows Antywirus",
            "D. Microsoft Security Essentials"
        ],
        "goodAnswer": "D. Microsoft Security Essentials"
    },
    {
        "id": 1027,
        "question": "Protoko\u0142em odpowiedzialnym za wykrywanie i eliminowanie kolizji w sieciach Ethernet jest",
        "imageLoc": "",
        "answers": [
            "A. CSMA/CD",
            "B. WINS",
            "C. NetBEUI",
            "D. IPX/SPX"
        ],
        "goodAnswer": "A. CSMA/CD"
    },
    {
        "id": 1028,
        "question": "Zabrudzony czytnik w nap\u0119dzie optycznym powinno si\u0119 czy\u015bci\u0107",
        "imageLoc": "",
        "answers": [
            "A. rozpuszczalnikiem ftalowym",
            "B. spirytusem",
            "C. izopropanolem",
            "D. benzyn\u0105 ekstrakcyjn\u0105"
        ],
        "goodAnswer": "C. izopropanolem"
    },
    {
        "id": 1029,
        "question": "Adres planowanej sieci nale\u017cy do klasy C. Sie\u0107 zosta\u0142a podzielona na 4 podsieci po 62 urz\u0105dzenia w ka\u017cdej podsieci. Kt\u00f3ra z poni\u017cszych masek jest odpowiednia do planowanego zadania?",
        "imageLoc": "",
        "answers": [
            "A. 255.255.255.128",
            "B. 255.255.255.192",
            "C. 255.255.255.240",
            "D. 255.255.255.224"
        ],
        "goodAnswer": "B. 255.255.255.192"
    },
    {
        "id": 1030,
        "question": "Kt\u00f3r\u0105 z opcji konfiguracji ustawie\u0144 u\u017cytkownika z ograniczonymi uprawnieniami w systemie Windows, umo\u017cliwia przystawka secpol?",
        "imageLoc": "",
        "answers": [
            "A. Blokad\u0119 okre\u015blonych element\u00f3w w panelu sterowania",
            "B. Zezwolenie na zmian\u0119 czasu systemowego",
            "C. Odebranie mo\u017cliwo\u015bci zapisu na p\u0142ytach CD",
            "D. Czyszczenie historii niedawno otwieranych dokument\u00f3w"
        ],
        "goodAnswer": "B. Zezwolenie na zmian\u0119 czasu systemowego"
    },
    {
        "id": 1031,
        "question": "Serwer DNS jest serwerem",
        "imageLoc": "",
        "answers": [
            "A. dzi\u0119ki kt\u00f3remu nazwy mnemoniczne (opisowe) mog\u0105 zosta\u0107 zamienione na odpowiadaj\u0105ce im adresy IP",
            "B. zdalnego i szyfrowanego dost\u0119pu",
            "C. dynamicznie przydzielaj\u0105cym adresy IP",
            "D. us\u0142ug terminalowych"
        ],
        "goodAnswer": "A. dzi\u0119ki kt\u00f3remu nazwy mnemoniczne (opisowe) mog\u0105 zosta\u0107 zamienione na odpowiadaj\u0105ce im adresy IP"
    },
    {
        "id": 1032,
        "question": "Do zbudowania programowej macierzy dyskowej RAID-1 nale\u017cy u\u017cy\u0107 minimum",
        "imageLoc": "",
        "answers": [
            "A. 2 dysk\u00f3w",
            "B. 3 dysk\u00f3w",
            "C. 4 dysk\u00f3w",
            "D. 1 dysku podzielonego na dwie partycje"
        ],
        "goodAnswer": "A. 2 dysk\u00f3w"
    },
    {
        "id": 1033,
        "question": "Przy d\u0142u\u017cszych przestojach drukarki atramentowej u\u017cywane w niej pojemniki z tuszem powinny",
        "imageLoc": "",
        "answers": [
            "A. zosta\u0107 zabezpieczone w specjalnych pude\u0142kach uniemo\u017cliwiaj\u0105cych zasychanie dysz",
            "B. pozosta\u0107 w drukarce, kt\u00f3r\u0105 nale\u017cy zabezpieczy\u0107 foli\u0105",
            "C. zosta\u0107 wymontowane z drukarki i umieszczone w szafie, bez dodatkowych zabezpiecze\u0144",
            "D. pozosta\u0107 w drukarce, bez wykonywania dodatkowych czynno\u015bci"
        ],
        "goodAnswer": "A. zosta\u0107 zabezpieczone w specjalnych pude\u0142kach uniemo\u017cliwiaj\u0105cych zasychanie dysz"
    },
    {
        "id": 1034,
        "question": "Z danych zestawionych w tabeli wynika, \u017ce cz\u0119stotliwo\u015b\u0107 efektywna pami\u0119ci DDR SDRAM wynosi",
        "imageLoc": require("../assets/img/347.png"),
        "answers": [
            "A. 333 MHz",
            "B. 266 MHz",
            "C. 400 MHz",
            "D. 200 MHz"
        ],
        "goodAnswer": "C. 400 MHz"
    },
    {
        "id": 1035,
        "question": "Do zbudowania programowej macierzy dyskowej RAID-1 nale\u017cy u\u017cy\u0107 minimum",
        "imageLoc": "",
        "answers": [
            "A. 2 dysk\u00f3w",
            "B. 4 dysk\u00f3w",
            "C. 3 dysk\u00f3w",
            "D. 1 dysku podzielonego na dwie partycje"
        ],
        "goodAnswer": "A. 2 dysk\u00f3w"
    },
    {
        "id": 1036,
        "question": "Aby utworzy\u0107 las w strukturze katalogowej AD DS (Active Directory Domain Services), nale\u017cy utworzy\u0107 co najmniej",
        "imageLoc": "",
        "answers": [
            "A. dwa drzewa domeny.",
            "B. jedno drzewo domeny.",
            "C. trzy drzewa domeny.",
            "D. cztery drzewa domeny."
        ],
        "goodAnswer": "B. jedno drzewo domeny."
    },
    {
        "id": 1037,
        "question": "W sieci o adresie 192.168.20.0 zastosowano mask\u0119 podsieci 255.255.255.248. Ile adres\u00f3w IP b\u0119dzie dost\u0119pnych dla urz\u0105dze\u0144?",
        "imageLoc": "",
        "answers": [
            "A. 1022",
            "B. 6",
            "C. 14",
            "D. 510"
        ],
        "goodAnswer": "B. 6"
    },
    {
        "id": 1038,
        "question": "W celu dokonania aktualizacji zainstalowanego systemu operacyjnego Linux Ubuntu nale\u017cy u\u017cy\u0107 polecenia",
        "imageLoc": "",
        "answers": [
            "A. yum upgrade",
            "B. kernel update",
            "C. apt-get upgrade",
            "D. system update"
        ],
        "goodAnswer": "C. apt-get upgrade"
    },
    {
        "id": 1039,
        "question": "W systemie operacyjnym Linux ilo\u015b\u0107 wolnego miejsca na dyskach mo\u017cna sprawdzi\u0107 poleceniem",
        "imageLoc": "",
        "answers": [
            "A. fstab",
            "B. du",
            "C. df",
            "D. mkfs"
        ],
        "goodAnswer": "C. df"
    },
    {
        "id": 1040,
        "question": "Narz\u0119dziem us\u0142ug katalogowych w systemach z rodziny Windows Server, s\u0142u\u017c\u0105cym do przekserowania komputer\u00f3w do jednostki organizacyjnej okre\u015blonej przez administratora, jest polecenie",
        "imageLoc": "",
        "answers": [
            "A. redirusr",
            "B. dsrm",
            "C. redircmp",
            "D. dcdiag"
        ],
        "goodAnswer": "C. redircmp"
    },
    {
        "id": 1041,
        "question": "Do ilu maksymalnie GB pami\u0119ci RAM mo\u017ce uzyska\u0107 dost\u0119p 32-bitowa wersja systemu Windows?",
        "imageLoc": "",
        "answers": [
            "A. 8 GB",
            "B. 4 GB",
            "C. 12 GB",
            "D. 2 GB"
        ],
        "goodAnswer": "B. 4 GB"
    },
    {
        "id": 1042,
        "question": "W firmowej sieci bezprzewodowej zosta\u0142a uruchomiona us\u0142uga polegaj\u0105ca na t\u0142umaczeniu nazw mnemonicznych. Jest to us\u0142uga",
        "imageLoc": "",
        "answers": [
            "A. RDS",
            "B. DHCP",
            "C. DNS",
            "D. RADIUS"
        ],
        "goodAnswer": "C. DNS"
    },
    {
        "id": 1043,
        "question": "Co mo\u017cna powiedzie\u0107 o budowie skr\u0119tki S/FTP?",
        "imageLoc": "",
        "answers": [
            "A. Ka\u017cda para przewod\u00f3w jest w osobnym ekranie z folii i dodatkowo ca\u0142o\u015b\u0107 w ekranie z folii.",
            "B. Ka\u017cda para przewod\u00f3w jest foliowana i dodatkowo ca\u0142o\u015b\u0107 w ekranie z siatki.",
            "C. Ka\u017cda para przewod\u00f3w jest foliowana i dodatkowo ca\u0142o\u015b\u0107 w ekranie z folii i siatki.",
            "D. Ka\u017cda para przewod\u00f3w jest w osobnym ekranie z folii, ca\u0142o\u015b\u0107 jest nieekranowana."
        ],
        "goodAnswer": "B. Ka\u017cda para przewod\u00f3w jest foliowana i dodatkowo ca\u0142o\u015b\u0107 w ekranie z siatki."
    },
    {
        "id": 1044,
        "question": "Apache jest serwerem",
        "imageLoc": "",
        "answers": [
            "A. Baz danych",
            "B. DNS",
            "C. WWW",
            "D. DHCP"
        ],
        "goodAnswer": "C. WWW"
    },
    {
        "id": 1045,
        "question": "Czynnym elementem elektronicznym jest",
        "imageLoc": "",
        "answers": [
            "A. rezystor.",
            "B. cewka.",
            "C. tranzystor.",
            "D. kondensator."
        ],
        "goodAnswer": "C. tranzystor."
    },
    {
        "id": 1046,
        "question": "Kt\u00f3ry z wymienionych mechanizm\u00f3w zapewni najwy\u017cszy poziom bezpiecze\u0144stwa sieci bezprzewodowych standardu 802.11n?",
        "imageLoc": "",
        "answers": [
            "A. WPS (Wi-Fi Protected Setup)",
            "B. WPA2 (Wi-Fi Protected Access II)",
            "C. WPA (Wi-Fi Protected Access)",
            "D. WEP (Wired Equivalent Privacy)"
        ],
        "goodAnswer": "B. WPA2 (Wi-Fi Protected Access II)"
    },
    {
        "id": 1047,
        "question": "Konfiguracja rutingu statycznego na ruterze polega na",
        "imageLoc": "",
        "answers": [
            "A. przesy\u0142aniu kopii danych z wybranych port\u00f3w rutera na wskazany port docelowy.",
            "B. zdefiniowaniu adresu IP serwera DNS przekazywanego przez serwer DHCP.",
            "C. zarz\u0105dzaniu jako\u015bci\u0105 us\u0142ug poprzez okre\u015blenie priorytetu transmisji dla ka\u017cdego z port\u00f3w urz\u0105dzenia.",
            "D. wskazaniu adresu sieci docelowej wraz z jej mask\u0105 oraz podaniu adresu lub interfejsu do przes\u0142ania danych do zadanej sieci."
        ],
        "goodAnswer": "D. wskazaniu adresu sieci docelowej wraz z jej mask\u0105 oraz podaniu adresu lub interfejsu do przes\u0142ania danych do zadanej sieci."
    },
    {
        "id": 1048,
        "question": "Rezultat wykonania kt\u00f3rego polecenia z systemu Windows przedstawia rysunek?",
        "imageLoc": require("../assets/img/1265.png"),
        "answers": [
            "A. ping www.onet.pl",
            "B. netstat www.onet.pl",
            "C. tracert www.onet.pl",
            "D. traceroute www.onet.pl"
        ],
        "goodAnswer": "C. tracert www.onet.pl"
    },
    {
        "id": 1049,
        "question": "Kt\u00f3re polecenie w systemie Windows przeznaczonym dla stacji roboczej, s\u0142u\u017cy do ustawienia wymaga\u0144 dotycz\u0105cych logowania dla wszystkich kont u\u017cytkownik\u00f3w tej stacji roboczej",
        "imageLoc": "",
        "answers": [
            "A. Net file",
            "B. Net accounts",
            "C. Net session",
            "D. Net computer"
        ],
        "goodAnswer": "B. Net accounts"
    },
    {
        "id": 1050,
        "question": "Ile bit\u00f3w minimum b\u0119dzie wymaganych w systemie binarnym do zapisania liczby heksadecymalnej 110 (h)?",
        "imageLoc": "",
        "answers": [
            "A. 3 bity",
            "B. 16 bit\u00f3w",
            "C. 9 bit\u00f3w",
            "D. 4 bity"
        ],
        "goodAnswer": "C. 9 bit\u00f3w"
    },
    {
        "id": 1051,
        "question": "Na rysunku przedstawiono schemat zasady dzia\u0142ania",
        "imageLoc": require("../assets/img/609.png"),
        "answers": [
            "A. kontrolera USB",
            "B. karty graficznej",
            "C. modemu",
            "D. karty d\u017awi\u0119kowej"
        ],
        "goodAnswer": "D. karty d\u017awi\u0119kowej"
    },
    {
        "id": 1052,
        "question": "Wykonuj\u0105c projekt sieci LAN, wykorzystano medium transmisyjne standardu Ethernet 1000Base-T. Kt\u00f3re stwierdzenie jest prawdziwe?",
        "imageLoc": "",
        "answers": [
            "A. Standard ten umo\u017cliwia transmisj\u0119 typu half-duplex przy maksymalnym zasi\u0119gu 1000 metr\u00f3w",
            "B. Standard ten umo\u017cliwia transmisj\u0119 typu full-duplex przy maksymalnym zasiegu 100 metr\u00f3w",
            "C. Jest to standard sieci optycznych, kt\u00f3rej maksymalny zasi\u0119g to 1000 metr\u00f3w",
            "D. Jest to standard sieci optycznych pracuj\u0105cych na wielomodowych \u015bwiat\u0142owodach"
        ],
        "goodAnswer": "B. Standard ten umo\u017cliwia transmisj\u0119 typu full-duplex przy maksymalnym zasiegu 100 metr\u00f3w"
    },
    {
        "id": 1053,
        "question": "Na rysunku przedstawiono przekr\u00f3j kabla",
        "imageLoc": require("../assets/img/1460.png"),
        "answers": [
            "A. koncentrycznego",
            "B. optycznego",
            "C. U/UTP",
            "D. S/UTP"
        ],
        "goodAnswer": "A. koncentrycznego"
    },
    {
        "id": 1054,
        "question": "Zrzut ekranu przedstawia efekt polecenia arp -a. Jak nale\u017cy zinterpretowa\u0107 t\u0119 informacj\u0119?",
        "imageLoc": require("../assets/img/1239.png"),
        "answers": [
            "A. Brak bie\u017c\u0105cych wpis\u00f3w protoko\u0142u ARP",
            "B. Host nie ma po\u0142\u0105czenia z Internetem",
            "C. Adres fizyczny hosta jest b\u0142\u0119dny",
            "D. Komputerowi przypisano b\u0142\u0119dny adres IP"
        ],
        "goodAnswer": "A. Brak bie\u017c\u0105cych wpis\u00f3w protoko\u0142u ARP"
    },
    {
        "id": 1055,
        "question": "W systemie Windows XP na komputerze klienckim, plik \"hosts\" jest plikiem tekstowym, kt\u00f3ry s\u0142u\u017cy do mapowania",
        "imageLoc": "",
        "answers": [
            "A. nazw host\u00f3w na adresy MAC",
            "B. nazw host\u00f3w na adresy IP",
            "C. nazw host\u00f3w przez serwery DNS",
            "D. dysk\u00f3w twardych"
        ],
        "goodAnswer": "B. nazw host\u00f3w na adresy IP"
    },
    {
        "id": 1056,
        "question": "Najefektywniejszym zabezpieczeniem danych firmy, kt\u00f3rej siedziby znajduj\u0105 si\u0119 w r\u00f3\u017cnych, odleg\u0142ych od siebie lokalizacjach, jest zastosowanie",
        "imageLoc": "",
        "answers": [
            "A. backupu w chmurze firmowej.",
            "B. kompresji strategicznych danych.",
            "C. kopii analogowych.",
            "D. kopii przyrostowych."
        ],
        "goodAnswer": "A. backupu w chmurze firmowej."
    },
    {
        "id": 1057,
        "question": "Do ilu sieci nale\u017c\u0105 adresy IPv4 przedstawione w tabeli?",
        "imageLoc": require("../assets/img/1937.png"),
        "answers": [
            "A. 5 sieci.",
            "B. 2 sieci.",
            "C. 3 sieci.",
            "D. 4 sieci."
        ],
        "goodAnswer": "B. 2 sieci."
    },
    {
        "id": 1058,
        "question": "Przedstawione na rysunku urz\u0105dzenie",
        "imageLoc": require("../assets/img/1553.png"),
        "answers": [
            "A. s\u0142u\u017cy do przechwytywania i nagrywania pakiet\u00f3w danych w sieciach komputerowych",
            "B. odpowiada za przekazywanie ramki mi\u0119dzy segmentami sieci z doborem portu, na kt\u00f3ry jest przekazywana",
            "C. odpowiada za wytworzenie na wyj\u015bciu sygna\u0142u analogowego, b\u0119d\u0105cego wzmocnionym sygna\u0142em wej\u015bciowym, kosztem zu\u017cycia energii pobieranej ze \u017ar\u00f3d\u0142a pr\u0105du",
            "D. umo\u017cliwia zamian\u0119 sygna\u0142u pochodz\u0105cego z okablowania miedzianego na okablowanie \u015bwiat\u0142owodowe"
        ],
        "goodAnswer": "D. umo\u017cliwia zamian\u0119 sygna\u0142u pochodz\u0105cego z okablowania miedzianego na okablowanie \u015bwiat\u0142owodowe"
    },
    {
        "id": 1059,
        "question": "Rysunek przedstawia konfiguracj\u0119 urz\u0105dzenia WiFi. Wska\u017c, kt\u00f3re stwierdzenie dotycz\u0105ce konfiguracji jest prawdziwe:",
        "imageLoc": require("../assets/img/530.png"),
        "answers": [
            "A. W tym momencie w sieci WiFi pracuje 7 urz\u0105dze\u0144",
            "B. Urz\u0105dzenia w sieci maj\u0105 adresy klasy A",
            "C. Filtrowanie adres\u00f3w MAC jest wy\u0142\u0105czone",
            "D. Dost\u0119p do sieci bezprzewodowej jest dozwolony wy\u0142\u0105cznie dla siedmiu urz\u0105dze\u0144"
        ],
        "goodAnswer": "C. Filtrowanie adres\u00f3w MAC jest wy\u0142\u0105czone"
    },
    {
        "id": 1060,
        "question": "Protoko\u0142em dost\u0119pu do sieci pakietowej z szybko\u015bci\u0105 nie przekraczaj\u0105c\u0105 2 Mbit/s jest protok\u00f3\u0142",
        "imageLoc": "",
        "answers": [
            "A. X . 25",
            "B. VDSL",
            "C. Frame Relay",
            "D. ATM"
        ],
        "goodAnswer": "A. X . 25"
    },
    {
        "id": 1061,
        "question": "Technika przekazywania \u017cetonu (ang. token) jest stosowana w topologii",
        "imageLoc": "",
        "answers": [
            "A. magistrali.",
            "B. kraty.",
            "C. pier\u015bcienia.",
            "D. gwiazdy."
        ],
        "goodAnswer": "C. pier\u015bcienia."
    },
    {
        "id": 1062,
        "question": "Na zdj\u0119ciu przedstawiono",
        "imageLoc": require("../assets/img/773.png"),
        "answers": [
            "A. za\u015blepk\u0119 kabla \u015bwiat\u0142owodowego",
            "B. zast\u0119pczy wtyk RJ-45",
            "C. za\u015blepk\u0119 gniazda RJ-45",
            "D. terminator BNC"
        ],
        "goodAnswer": "D. terminator BNC"
    },
    {
        "id": 1063,
        "question": "W sieci Ethernet 100Base-TX do transmisji danych wykorzystywane s\u0105 \u017cy\u0142y kabla UTP do\u0142\u0105czone do pin\u00f3w",
        "imageLoc": "",
        "answers": [
            "A. 4,5,6,7",
            "B. 1,2,3,4",
            "C. 1,2,5,6",
            "D. 1,2,3,6"
        ],
        "goodAnswer": "D. 1,2,3,6"
    },
    {
        "id": 1064,
        "question": "Rysunek przedstawia schemat ethernetowego po\u0142\u0105czenia niekrosowanych, o\u015bmiopinowych z\u0142\u0105cz 8P8C. Schemat ten nosi nazw\u0119:",
        "imageLoc": require("../assets/img/1684.png"),
        "answers": [
            "A. T568A",
            "B. T568B",
            "C. T568D",
            "D. T568C"
        ],
        "goodAnswer": "B. T568B"
    },
    {
        "id": 1065,
        "question": "Do zarz\u0105dzania przydzia\u0142ami dyskowymi w systemach Windows 7 oraz Windows 8 s\u0142u\u017cy narz\u0119dzie",
        "imageLoc": "",
        "answers": [
            "A. query",
            "B. dcpromo",
            "C. fsutil",
            "D. perfmon"
        ],
        "goodAnswer": "C. fsutil"
    },
    {
        "id": 1066,
        "question": "Minimaln\u0105 d\u0142ugo\u015b\u0107 has\u0142a u\u017cytkownika w systemie Windows mo\u017cna ustawi\u0107 za pomoc\u0105 polecenia",
        "imageLoc": "",
        "answers": [
            "A. net user",
            "B. net config",
            "C. net accounts",
            "D. net computer"
        ],
        "goodAnswer": "C. net accounts"
    },
    {
        "id": 1067,
        "question": "Kt\u00f3rego protoko\u0142u nale\u017cy u\u017cy\u0107 do odbioru poczty elektronicznej ze swojego serwera?",
        "imageLoc": "",
        "answers": [
            "A. FTP",
            "B. POP3",
            "C. SMTP",
            "D. SNMP"
        ],
        "goodAnswer": "B. POP3"
    },
    {
        "id": 1068,
        "question": "Prefetching to",
        "imageLoc": "",
        "answers": [
            "A. spos\u00f3b pracy procesora polegaj\u0105cy na przej\u015bciu do tryby pracy procesora Intel 8086",
            "B. cecha systemu operacyjnego umo\u017cliwiaj\u0105ca r\u00f3wnoczesne wykonanie kilku proces\u00f3w",
            "C. wykonanie przez procesor fazy pobrania nast\u0119pnego rozkazu w trakcie realizacji fazy wykonania rozkazu poprzedniego",
            "D. w\u0142a\u015bciwo\u015b\u0107 procesor\u00f3w umo\u017cliwiaj\u0105ca korzystanie ze wsp\u00f3lnych danych przez rdzenie, bez po\u015brednictwa pami\u0119ci umieszczonej na zewn\u0105trz procesora"
        ],
        "goodAnswer": "C. wykonanie przez procesor fazy pobrania nast\u0119pnego rozkazu w trakcie realizacji fazy wykonania rozkazu poprzedniego"
    },
    {
        "id": 1069,
        "question": "U\u017cytkownik wpisuj\u0105c w wierszu polece\u0144 polecenie ping www.onet.pl otrzymuje nast\u0119puj\u0105cy komunikat: \u017b\u0105danie polecenia ping nie mo\u017ce znale\u017a\u0107 hosta www.onet.pl Sprawd\u017a nazwe i pon\u00f3w pr\u00f3b\u0119. Natomiast wpisuj\u0105c w wierszu polece\u0144 polecenie ping 213.180.141.140 (adres IP serwera www.onet.pl), u\u017cytkownik dostaje odpowied\u017a z serwera. Co mo\u017ce by\u0107 przyczyn\u0105 takiego stanu?",
        "imageLoc": "",
        "answers": [
            "A. niepoprawnie skonfigurowana brama domy\u015blna",
            "B. niepoprawnie skonfigurowana maska podsieci",
            "C. niepoprawny adres IP hosta",
            "D. niepoprawny adres IP serwera DNS"
        ],
        "goodAnswer": "D. niepoprawny adres IP serwera DNS"
    },
    {
        "id": 1070,
        "question": "Ile maksymalnie urz\u0105dze\u0144 mo\u017cna zaadresowa\u0107 w sieci o adresacji IPv4 klasy C?",
        "imageLoc": "",
        "answers": [
            "A. 2024",
            "B. 65534",
            "C. 126",
            "D. 254"
        ],
        "goodAnswer": "D. 254"
    },
    {
        "id": 1071,
        "question": "Na przedstawionym schemacie logicznym sieci uj\u0119to",
        "imageLoc": require("../assets/img/2117.png"),
        "answers": [
            "A. 9 gniazd telekomunikacyjnych.",
            "B. 2 kampusowe punkty dystrybucyjne.",
            "C. 7 budynkowych punkt\u00f3w dystrybucyjnych.",
            "D. 4 kondygnacyjne punkty dost\u0119powe."
        ],
        "goodAnswer": "A. 9 gniazd telekomunikacyjnych."
    },
    {
        "id": 1072,
        "question": "Najmniej inwazyjnym, lecz skutecznym sposobem leczenia komputera zainfekowanego wirusem typu rootkit jest",
        "imageLoc": "",
        "answers": [
            "A. usuni\u0119cie podejrzanych proces\u00f3w z Menad\u017cera zada\u0144",
            "B. przeinstalowanie systemu operacyjnego",
            "C. uruchomienie specjalnego programu wykrywaj\u0105cego rootkity z zewn\u0119trznego no\u015bnika(np. LiveCD)",
            "D. zainstalowanie najlepszego programu antywirusowego i w\u0142\u0105czenie go w tryb monitora - z czasem wirus zostanie sam wykryty"
        ],
        "goodAnswer": "C. uruchomienie specjalnego programu wykrywaj\u0105cego rootkity z zewn\u0119trznego no\u015bnika(np. LiveCD)"
    },
    {
        "id": 1073,
        "question": "Programem nie s\u0142u\u017c\u0105cym do diagnostyki podzespo\u0142\u00f3w komputera jest",
        "imageLoc": "",
        "answers": [
            "A. HD Tune",
            "B. CPU-Z",
            "C. Everest",
            "D. Cryptic Disk"
        ],
        "goodAnswer": "D. Cryptic Disk"
    },
    {
        "id": 1074,
        "question": "W systemie Linux ifconfig oznacza",
        "imageLoc": "",
        "answers": [
            "A. nazw\u0119 karty sieciowej",
            "B. wykorzystanie pakiet\u00f3w TCP/IP do sprawdzenia stanu odleg\u0142ego hosta",
            "C. narz\u0119dzie umo\u017cliwiaj\u0105ce sprawdzanie znanych adres\u00f3w MAC/IP",
            "D. narz\u0119dzie umo\u017cliwiaj\u0105ce wy\u015bwietlenie stanu interfejs\u00f3w sieciowych"
        ],
        "goodAnswer": "D. narz\u0119dzie umo\u017cliwiaj\u0105ce wy\u015bwietlenie stanu interfejs\u00f3w sieciowych"
    },
    {
        "id": 1075,
        "question": "Analiza wy\u015bwietlonych przez program danych, pozwala stwierdzi\u0107, \u017ce",
        "imageLoc": require("../assets/img/826.png"),
        "answers": [
            "A. partycja rozszerzona ma wielko\u015b\u0107 24,79 GiB",
            "B. partycja wymiany zajmuje 2 GiB",
            "C. zamontowano trzy dyski twarde oznaczone sda1, sda2 oraz sda3",
            "D. jeden dysk twardy zosta\u0142 podzielony na 6 partycji podstawowych"
        ],
        "goodAnswer": "B. partycja wymiany zajmuje 2 GiB"
    },
    {
        "id": 1076,
        "question": "Wska\u017c nale\u017cno\u015b\u0107 brutto za wykonanie wymienionych w tabeli czynno\u015bci serwisowych, je\u015bli koszt jednej roboczogodziny wynosi 120,00 z\u0142 netto, a stawka podatku VAT wynosi 23%.",
        "imageLoc": require("../assets/img/235.png"),
        "answers": [
            "A. 369,00 z\u0142",
            "B. 300,00 z\u0142",
            "C. 231,00 z\u0142",
            "D. 480,00 z\u0142"
        ],
        "goodAnswer": "A. 369,00 z\u0142"
    },
    {
        "id": 1077,
        "question": "Interfejsem wewn\u0119trznym komputera jest",
        "imageLoc": "",
        "answers": [
            "A. IrDA",
            "B. AGP",
            "C. RJ-45",
            "D. DVI"
        ],
        "goodAnswer": "B. AGP"
    },
    {
        "id": 1078,
        "question": "Narz\u0119dziem umo\u017cliwiaj\u0105cym zdaln\u0105 kontrol\u0119 u\u017cytkownika sieci lokalnej poprzez \u015bledzenie jego dzia\u0142a\u0144 lub przej\u0119cie ca\u0142kowitej kontroli nad zdaln\u0105 maszyn\u0105 jest program",
        "imageLoc": "",
        "answers": [
            "A. Recuva",
            "B. NSlookup",
            "C. RealVNC",
            "D. CPU-Z"
        ],
        "goodAnswer": "C. RealVNC"
    },
    {
        "id": 1079,
        "question": "W nag\u0142\u00f3wku ramki IEEE 802.3 warstwy \u0142\u0105cza danych zawarty jest",
        "imageLoc": "",
        "answers": [
            "A. adres IP",
            "B. parametr TTL",
            "C. adres MAC",
            "D. numer portu"
        ],
        "goodAnswer": "C. adres MAC"
    },
    {
        "id": 1080,
        "question": "Kt\u00f3re konto nie jest kontem wbudowanym w system Windows XP?",
        "imageLoc": "",
        "answers": [
            "A. Pomocnik",
            "B. Admin",
            "C. Administrator",
            "D. Go\u015b\u0107"
        ],
        "goodAnswer": "B. Admin"
    },
    {
        "id": 1081,
        "question": "Kt\u00f3ra czynno\u015b\u0107 NIE s\u0142u\u017cy do personalizacji systemu operacyjnego Windows?",
        "imageLoc": "",
        "answers": [
            "A. Ustawienie wielko\u015bci pliku wymiany.",
            "B. Ustawienie opcji wy\u015bwietlania pask\u00f3w menu i pask\u00f3w narz\u0119dziowych.",
            "C. Ustawienie domy\u015blnej przegl\u0105darki internetowej.",
            "D. Ustawienie koloru lub kilku przenikaj\u0105cych si\u0119 kolor\u00f3w jako t\u0142a pulpitu."
        ],
        "goodAnswer": "A. Ustawienie wielko\u015bci pliku wymiany."
    },
    {
        "id": 1082,
        "question": "Kt\u00f3rym programem NIE mo\u017cna si\u0119 pos\u0142u\u017cy\u0107, aby odzyska\u0107 dane w systemie Windows na podstawie wcze\u015bniej utworzonej kopii?",
        "imageLoc": "",
        "answers": [
            "A. Norton Ghost",
            "B. FileCleaner",
            "C. Acronis True Image",
            "D. Clonezilla"
        ],
        "goodAnswer": "B. FileCleaner"
    },
    {
        "id": 1083,
        "question": "Kt\u00f3re z wymienionych polece\u0144 jest stosowane w celu naprawy g\u0142\u00f3wnego rekordu rozruchowego dysku twardego systemu z rodziny Windows?",
        "imageLoc": "",
        "answers": [
            "A. fixmbr",
            "B. bcdedit",
            "C. fixboot",
            "D. bootcfg"
        ],
        "goodAnswer": "A. fixmbr"
    },
    {
        "id": 1084,
        "question": "Parametrem okre\u015blaj\u0105cym o ile zmniejszy si\u0119 moc sygna\u0142u w danej parze przewod\u00f3w po przej\u015bciu przez ca\u0142y tor kablowy, jest",
        "imageLoc": "",
        "answers": [
            "A. przenik zbli\u017cny",
            "B. przenik zdalny",
            "C. t\u0142umienie",
            "D. d\u0142ugo\u015b\u0107"
        ],
        "goodAnswer": "C. t\u0142umienie"
    },
    {
        "id": 1085,
        "question": "Do sprawdzenia warto\u015bci napi\u0119cia w zasilaczu s\u0142u\u017cy",
        "imageLoc": "",
        "answers": [
            "A. amperomierz",
            "B. multimetr",
            "C. pirometr",
            "D. impulsator"
        ],
        "goodAnswer": "B. multimetr"
    },
    {
        "id": 1086,
        "question": "Aby zapobiec utracie danych w programie do prowadzenia ewidencji uczni\u00f3w, nale\u017cy po zako\u0144czeniu pracy ka\u017cdego dnia wykona\u0107",
        "imageLoc": "",
        "answers": [
            "A. bezpieczne zamkni\u0119cie systemu operacyjnego",
            "B. aktualizacj\u0119 systemu",
            "C. kopi\u0119 zapasow\u0105 danych programu",
            "D. aktualizacj\u0119 systemu operacyjnego"
        ],
        "goodAnswer": "C. kopi\u0119 zapasow\u0105 danych programu"
    },
    {
        "id": 1087,
        "question": "Podstawow\u0105 metod\u0105 zabezpieczenia sieci komputerowej przed atakiem z zewn\u0105trz jest stosowanie",
        "imageLoc": "",
        "answers": [
            "A. programu antywirusowego",
            "B. blokady portu 80",
            "C. zapory sieciowej",
            "D. serwera Proxy"
        ],
        "goodAnswer": "C. zapory sieciowej"
    },
    {
        "id": 1088,
        "question": "Kt\u00f3ry zapis jest postaci\u0105 pe\u0142n\u0105 maski o prefiksie 25?",
        "imageLoc": "",
        "answers": [
            "A. 255.255.255.0",
            "B. 255.255.255.128",
            "C. 255.255.0.0",
            "D. 255.255.200.192"
        ],
        "goodAnswer": "B. 255.255.255.128"
    },
    {
        "id": 1089,
        "question": "U\u017cycie polecenia ipconfig /renew podczas konfiguracji interfejs\u00f3w sieciowych spowoduje",
        "imageLoc": "",
        "answers": [
            "A. wyczyszczenie bufora programu rozpoznaj\u0105cego DNS.",
            "B. zwolnienie wszystkich dzier\u017caw adres\u00f3w IP z DHCP.",
            "C. wy\u015bwietlenie identyfikatora klasy DHCP dla kart sieciowych.",
            "D. odnowienie wszystkich dzier\u017caw adres\u00f3w IP z DHCP."
        ],
        "goodAnswer": "D. odnowienie wszystkich dzier\u017caw adres\u00f3w IP z DHCP."
    },
    {
        "id": 1090,
        "question": "Firma zajmuj\u0105ca si\u0119 sprz\u0105taniem musi drukowa\u0107 faktury tekstowe w czterech egzemplarzach jednocze\u015bnie, na papierze samokopiuj\u0105cym. Jak\u0105 drukark\u0119 powinna wybra\u0107?",
        "imageLoc": "",
        "answers": [
            "A. Atramentow\u0105",
            "B. Laserow\u0105",
            "C. Termosublimacyjn\u0105",
            "D. Ig\u0142ow\u0105"
        ],
        "goodAnswer": "D. Ig\u0142ow\u0105"
    },
    {
        "id": 1091,
        "question": "Funkcj\u0119 S.M.A.R.T. dysku twardego odpowiadaj\u0105c\u0105 za aktywno\u015b\u0107 mechanizmu monitoringu i wczesnego ostrzegania przed usterkami mo\u017cna aktywowa\u0107 poprzez",
        "imageLoc": "",
        "answers": [
            "A. BIOS p\u0142yty g\u0142\u00f3wnej",
            "B. opcj\u0119 polecenia chkdsk",
            "C. rejestr systemu",
            "D. panel sterowania"
        ],
        "goodAnswer": "A. BIOS p\u0142yty g\u0142\u00f3wnej"
    },
    {
        "id": 1092,
        "question": "Poprawny adres komputera dla maski 255.255.255.0, to adres",
        "imageLoc": "",
        "answers": [
            "A. 122.168.1.0",
            "B. 192.168.1.1",
            "C. 192.168.1.255",
            "D. 122.0.0.255"
        ],
        "goodAnswer": "B. 192.168.1.1"
    },
    {
        "id": 1093,
        "question": "Kt\u00f3ra macierz RAID jest zbudowana w oparciu o replikacj\u0119 dw\u00f3ch lub wi\u0119cej dysk\u00f3w fizycznych?",
        "imageLoc": "",
        "answers": [
            "A. RAID 1",
            "B. RAID 0",
            "C. RAID 3",
            "D. RAID 5"
        ],
        "goodAnswer": "A. RAID 1"
    },
    {
        "id": 1094,
        "question": "Do wy\u015bwietlania zawarto\u015bci katalogu w systemie Linux s\u0142u\u017cy polecenie:",
        "imageLoc": "",
        "answers": [
            "A. pwd",
            "B. rpm",
            "C. ls",
            "D. cd"
        ],
        "goodAnswer": "C. ls"
    },
    {
        "id": 1095,
        "question": "Aby odczyta\u0107 adres serwera DNS w konfiguracji karty sieciowej systemu z rodziny Windows nale\u017cy wykona\u0107 polecenie",
        "imageLoc": "",
        "answers": [
            "A. ping",
            "B. ipconfig",
            "C. arp -a",
            "D. ipconfig /all"
        ],
        "goodAnswer": "D. ipconfig /all"
    },
    {
        "id": 1096,
        "question": "Komponentem p\u0142yty g\u0142\u00f3wnej odpowiedzialnym za komunikacj\u0119 pomi\u0119dzy procesorem a pozosta\u0142ymi elementami p\u0142yty jest",
        "imageLoc": "",
        "answers": [
            "A. uk\u0142ad ch\u0142odzenia",
            "B. BIOS ROM",
            "C. chipset",
            "D. pami\u0119\u0107 RAM"
        ],
        "goodAnswer": "C. chipset"
    },
    {
        "id": 1097,
        "question": "Kt\u00f3ra z liczb w zapisie dziesi\u0119tnym jest prawid\u0142ow\u0105 reprezentacj\u0105 liczby 10111111 (2)?",
        "imageLoc": "",
        "answers": [
            "A. 191 (10)",
            "B. 382 (10)",
            "C. 193 (10)",
            "D. 381 (10)"
        ],
        "goodAnswer": "A. 191 (10)"
    },
    {
        "id": 1098,
        "question": "W systemie Linux plik ma ustawione uprawnienia na 541. W\u0142a\u015bciciel mo\u017ce plik",
        "imageLoc": "",
        "answers": [
            "A. odczyta\u0107 i wykona\u0107",
            "B. odczyta\u0107, zapisa\u0107 i wykona\u0107",
            "C. tylko wykona\u0107",
            "D. modyfikowa\u0107"
        ],
        "goodAnswer": "A. odczyta\u0107 i wykona\u0107"
    },
    {
        "id": 1099,
        "question": "Rezultat wykonania kt\u00f3rego polecenia z systemu Windows przedstawia rysunek?",
        "imageLoc": require("../assets/img/1066.png"),
        "answers": [
            "A. tracert www.onet.pl",
            "B. netstat www.onet.pl",
            "C. ping www.onet.pl",
            "D. traceroute www.onet.pl"
        ],
        "goodAnswer": "A. tracert www.onet.pl"
    },
    {
        "id": 1100,
        "question": "Przy uruchamianiu komputera pojawia sie komunikat CMOS checksum error press F1 to continue press DEL to setup. Wci\u015bni\u0119cie klawisza DEL spowoduje",
        "imageLoc": "",
        "answers": [
            "A. przej\u015bcie do konfiguracji systemu Windows",
            "B. wej\u015bcie do BIOS-u komputera",
            "C. skasowanie zawarto\u015bci pami\u0119ci CMOS",
            "D. usuni\u0119cie pliku setup"
        ],
        "goodAnswer": "B. wej\u015bcie do BIOS-u komputera"
    },
    {
        "id": 1101,
        "question": "Odzyskanie listy kontakt\u00f3w w telefonie kom\u00f3rkowym z zainstalowanym systemem Android jest mo\u017cliwe, gdy u\u017cytkownik wcze\u015bniej wykona\u0142 synchronizacj\u0119 danych urz\u0105dzenia z Google Drive za pomoc\u0105",
        "imageLoc": "",
        "answers": [
            "A. konta Microsoft",
            "B. dowolnego konta pocztowego z portalu Onet",
            "C. konta Google",
            "D. konta Yahoo"
        ],
        "goodAnswer": "C. konta Google"
    },
    {
        "id": 1102,
        "question": "Kt\u00f3ry z adres\u00f3w IP ma przypisan\u0105 mask\u0119 w postaci pe\u0142nej, wynikaj\u0105c\u0105 z klasy adresu?",
        "imageLoc": "",
        "answers": [
            "A. 118.202.15.6, 255.255.0.0",
            "B. 140.16.5.18, 255.255.255.0",
            "C. 180.12.56.1, 255.255.0.0",
            "D. 169.12.19.6, 255.255.255.0"
        ],
        "goodAnswer": "C. 180.12.56.1, 255.255.0.0"
    },
    {
        "id": 1103,
        "question": "Program typu firewall nie chroni przed",
        "imageLoc": "",
        "answers": [
            "A. Uzyskaniem dost\u0119pu do komputera przez haker\u00f3w",
            "B. Atakami generuj\u0105cymi wzmo\u017cony ruch w sieci",
            "C. Wirusami rozprzestrzeniaj\u0105cymi si\u0119 poczt\u0105 e-mail",
            "D. Szpiegowaniem i wykradaniem poufnych danych u\u017cytkownika"
        ],
        "goodAnswer": "C. Wirusami rozprzestrzeniaj\u0105cymi si\u0119 poczt\u0105 e-mail"
    },
    {
        "id": 1104,
        "question": "Po wykonaniu eksportu klucza HKCR zostanie zapisana kopia rejestru, zawieraj\u0105ca informacje dotycz\u0105ce konfiguracji",
        "imageLoc": "",
        "answers": [
            "A. kont u\u017cytkownik\u00f3w.",
            "B. powi\u0105za\u0144 mi\u0119dzy typami plik\u00f3w a aplikacjami.",
            "C. sprz\u0119towej komputera.",
            "D. pulpitu zalogowanego u\u017cytkownika."
        ],
        "goodAnswer": "B. powi\u0105za\u0144 mi\u0119dzy typami plik\u00f3w a aplikacjami."
    },
    {
        "id": 1105,
        "question": "Wska\u017c znak umieszczany na urz\u0105dzeniach elektrycznych przeznaczonych do obrotu i sprzeda\u017cy w Unii Europejskiej.",
        "imageLoc": require("../assets/img/1895.png"),
        "answers": [
            "A. A",
            "B. B",
            "C. C",
            "D. D"
        ],
        "goodAnswer": "B. B"
    },
    {
        "id": 1106,
        "question": "Po sprawdzeniu komputera programem diagnostycznym wykryto, \u017ce temperatura pracy karty graficznej posiadaj\u0105cej wyj\u015bcia HDMI i D-SUB, osadzonej w gnie\u017adzie PCI Express komputera stacjonarnego, wynosi 87\u00b0C. W takim przypadku serwisant powinien",
        "imageLoc": "",
        "answers": [
            "A. zainstalowa\u0107 dodatkowy modu\u0142 pami\u0119ci RAM, aby odci\u0105\u017cy\u0107 kart\u0119",
            "B. wymieni\u0107 dysk twardy na nowy, o podobnej wielko\u015bci i pr\u0119dko\u015bci obrotowej",
            "C. sprawdzi\u0107, czy wentylator jest sprawny i czy nie jest zakurzony",
            "D. zamieni\u0107 kabel sygna\u0142owy D-SUB na HDMI"
        ],
        "goodAnswer": "C. sprawdzi\u0107, czy wentylator jest sprawny i czy nie jest zakurzony"
    },
    {
        "id": 1107,
        "question": "Na rysunku przedstawiono fragment dokumentacji technicznej p\u0142yty g\u0142\u00f3wnej GA-K8NF-9-RH rev. 2.x. Wynika z niej, \u017ce maksymalna liczba mo\u017cliwych do zamontowania kart rozszerze\u0144 (pomijaj\u0105c interfejs USB) wynosi",
        "imageLoc": require("../assets/img/1807.png"),
        "answers": [
            "A. 5",
            "B. 3",
            "C. 6",
            "D. 2"
        ],
        "goodAnswer": "C. 6"
    },
    {
        "id": 1108,
        "question": "W systemie Linux plik ma ustawione uprawnienia na 541. W\u0142a\u015bciciel mo\u017ce plik:",
        "imageLoc": "",
        "answers": [
            "A. odczyta\u0107, zapisa\u0107 i wykona\u0107",
            "B. odczyta\u0107 i wykona\u0107",
            "C. modyfikowa\u0107",
            "D. tylko wykona\u0107"
        ],
        "goodAnswer": "B. odczyta\u0107 i wykona\u0107"
    },
    {
        "id": 1109,
        "question": "Aby umo\u017cliwi\u0107 komunikacj\u0119 urz\u0105dzenia mobilnego z komputerem przez interfejs Bluetooth, nale\u017cy",
        "imageLoc": "",
        "answers": [
            "A. po\u0142\u0105czy\u0107 urz\u0105dzenia kablem krosowym",
            "B. wykona\u0107 parowanie urz\u0105dze\u0144",
            "C. utworzy\u0107 sie\u0107 WAN dla urz\u0105dze\u0144",
            "D. skonfigurowa\u0107 urz\u0105dzenie mobilne przez przegl\u0105dark\u0119"
        ],
        "goodAnswer": "B. wykona\u0107 parowanie urz\u0105dze\u0144"
    },
    {
        "id": 1110,
        "question": "Liczba 356 zapisana w systemie dw\u00f3jkowym to",
        "imageLoc": "",
        "answers": [
            "A. 110011010",
            "B. 101100100",
            "C. 110011000",
            "D. 100001100"
        ],
        "goodAnswer": "B. 101100100"
    },
    {
        "id": 1111,
        "question": "W systemie Windows u\u017cycie prezentowanego polecenia spowoduje tymczasow\u0105 zmian\u0119 koloru",
        "imageLoc": require("../assets/img/1887.png"),
        "answers": [
            "A. czcionki wiersza polece\u0144, kt\u00f3ra by\u0142a uruchomiona z ustawieniami domy\u015blnymi.",
            "B. t\u0142a okna wiersza polece\u0144, kt\u00f3re by\u0142o uruchomione z ustawieniami domy\u015blnymi.",
            "C. paska nazwy okna Windows.",
            "D. t\u0142a i czcionki okna Windows."
        ],
        "goodAnswer": "A. czcionki wiersza polece\u0144, kt\u00f3ra by\u0142a uruchomiona z ustawieniami domy\u015blnymi."
    },
    {
        "id": 1112,
        "question": "Wska\u017c polecenie systemu Linux s\u0142u\u017c\u0105ce do wy\u015bwietlenia numeru identyfikacyjnego u\u017cytkownik",
        "imageLoc": "",
        "answers": [
            "A. id",
            "B. users",
            "C. who",
            "D. whoami"
        ],
        "goodAnswer": "A. id"
    },
    {
        "id": 1113,
        "question": "Do realizacji alternatywy logicznej z negacj\u0105 nale\u017cy u\u017cy\u0107 funktora",
        "imageLoc": "",
        "answers": [
            "A. NOR",
            "B. EX-OR",
            "C. OR",
            "D. NAND"
        ],
        "goodAnswer": "A. NOR"
    },
    {
        "id": 1114,
        "question": "Rysunek przedstawia topologi\u0119",
        "imageLoc": require("../assets/img/1289.png"),
        "answers": [
            "A. pe\u0142nej siatki",
            "B. pier\u015bcienia",
            "C. rozszerzonej gwiazdy",
            "D. magistrali"
        ],
        "goodAnswer": "C. rozszerzonej gwiazdy"
    },
    {
        "id": 1115,
        "question": "Jak\u0105 liczb\u0119 adres\u00f3w urz\u0105dze\u0144 sieciowych zapewnia do dyspozycji stosowanie klasy adresowej C w sieciach opartych na rodzinie protoko\u0142\u00f3w TCP/IP?",
        "imageLoc": "",
        "answers": [
            "A. 100",
            "B. 254",
            "C. 200",
            "D. 256"
        ],
        "goodAnswer": "B. 254"
    },
    {
        "id": 1116,
        "question": "Na kt\u00f3rym rysunku zosta\u0142 przedstawiony panel krosowniczy?",
        "imageLoc": require("../assets/img/1491.png"),
        "answers": [
            "A. A",
            "B. B",
            "C. C",
            "D. D"
        ],
        "goodAnswer": "B. B"
    },
    {
        "id": 1117,
        "question": "Przed wykonaniem prac serwisowych zwi\u0105zanych z modyfikacj\u0105 rejestru systemu Windows nale\u017cy wykona\u0107",
        "imageLoc": "",
        "answers": [
            "A. defragmentacj\u0119 dysku",
            "B. kopi\u0119 rejestru",
            "C. oczyszczanie dysku",
            "D. czyszczenie rejestru"
        ],
        "goodAnswer": "B. kopi\u0119 rejestru"
    },
    {
        "id": 1118,
        "question": "Termin SLI dotyczy",
        "imageLoc": "",
        "answers": [
            "A. dysk\u00f3w twardych",
            "B. kart sieciowych",
            "C. kart graficznych",
            "D. modem\u00f3w"
        ],
        "goodAnswer": "C. kart graficznych"
    },
    {
        "id": 1119,
        "question": "Firma zajmuj\u0105ca si\u0119 sprz\u0105taniem musi drukowa\u0107 faktury tekstowe w czterech egzemplarzach jednocze\u015bnie, na papierze samokopiuj\u0105cym. Jak\u0105 drukark\u0119 powinna wybra\u0107?",
        "imageLoc": "",
        "answers": [
            "A. Termosublimacyjn\u0105",
            "B. Laserow\u0105",
            "C. Ig\u0142ow\u0105",
            "D. Atramentow\u0105"
        ],
        "goodAnswer": "C. Ig\u0142ow\u0105"
    },
    {
        "id": 1120,
        "question": "Katalog Nak\u0142ad\u00f3w Rzeczowych przy projektowaniu sieci jest stosowany do",
        "imageLoc": "",
        "answers": [
            "A. kosztorysowania rob\u00f3t.",
            "B. opracowywania powykonawczych pomiar\u00f3w.",
            "C. zdefiniowania wytycznych dla wykonawcy.",
            "D. rysowania schemat\u00f3w sieci."
        ],
        "goodAnswer": "A. kosztorysowania rob\u00f3t."
    },
    {
        "id": 1121,
        "question": "Z jakiego systemu plik\u00f3w nale\u017cy skorzysta\u0107 instaluj\u0105c Linuxa, by mie\u0107 mo\u017cliwo\u015b\u0107 definiowania uprawnie\u0144 do plik\u00f3w i folder\u00f3w?",
        "imageLoc": "",
        "answers": [
            "A. ISO9660",
            "B. EXT2",
            "C. NTFS",
            "D. FAT32"
        ],
        "goodAnswer": "B. EXT2"
    },
    {
        "id": 1122,
        "question": "Na schemacie blokowym procesora blok funkcyjny nazwany SIMD to",
        "imageLoc": require("../assets/img/29.png"),
        "answers": [
            "A. zestaw 256 bitowych rejestr\u00f3w znacznie przyspieszaj\u0105cy obliczenia na liczbach sta\u0142opozycyjnych",
            "B. jednostka zmiennoprzecinkowa procesora (koprocesor)",
            "C. zestaw 128 bitowych rejestr\u00f3w niezb\u0119dny przy wykonywaniu instrukcji SSE procesora na liczbach sta\u0142o- i zmiennoprzecinkowych",
            "D. modu\u0142 procesora realizuj\u0105cy wy\u0142\u0105cznie operacje graficzne"
        ],
        "goodAnswer": "C. zestaw 128 bitowych rejestr\u00f3w niezb\u0119dny przy wykonywaniu instrukcji SSE procesora na liczbach sta\u0142o- i zmiennoprzecinkowych"
    },
    {
        "id": 1123,
        "question": "Niekt\u00f3re systemy operacyjne s\u0105 wielodost\u0119pne (multiuser). Systemy takie",
        "imageLoc": "",
        "answers": [
            "A. r\u00f3wnocze\u015bnie wykonuj\u0105 wiele program\u00f3w (zada\u0144)",
            "B. opr\u00f3cz wielozadaniowo\u015bci z wyw\u0142aszczeniem realizuj\u0105 funkcj\u0119 przydzielania czasu u\u017cytkownikom",
            "C. steruj\u0105 uk\u0142adem (klasterem) niezale\u017cnych komputer\u00f3w",
            "D. stosowane s\u0105 g\u0142\u00f3wnie w przemy\u015ble i systemach sterowania"
        ],
        "goodAnswer": "B. opr\u00f3cz wielozadaniowo\u015bci z wyw\u0142aszczeniem realizuj\u0105 funkcj\u0119 przydzielania czasu u\u017cytkownikom"
    },
    {
        "id": 1124,
        "question": "Kt\u00f3ry przyrz\u0105d nale\u017cy wybra\u0107 do pomiar\u00f3w mapy po\u0142\u0105cze\u0144 okablowania strukturalnego sieci lokalnej?",
        "imageLoc": "",
        "answers": [
            "A. Monitor sieciowy",
            "B. Analizator sieci LAN",
            "C. Reflektometr OTDR",
            "D. Analizator protoko\u0142\u00f3w"
        ],
        "goodAnswer": "B. Analizator sieci LAN"
    },
    {
        "id": 1125,
        "question": "Uk\u0142ad RAMDAC",
        "imageLoc": "",
        "answers": [
            "A. jest charakterystyczny dla standardu S-ATA",
            "B. stanowi stopie\u0144 wyj\u015bciowy karty graficznej",
            "C. zawiera konwerter analogowo-cyfrowy",
            "D. jest charakterystyczny dla standardu ATA"
        ],
        "goodAnswer": "B. stanowi stopie\u0144 wyj\u015bciowy karty graficznej"
    },
    {
        "id": 1126,
        "question": "Komputer pracuj\u0105cy w domenie Active Directory nie mo\u017ce po\u0142\u0105czy\u0107 si\u0119 z kontrolerem domeny, na kt\u00f3rym jest przechowywany profil u\u017cytkownika. Jaki typ profilu u\u017cytkownika zostanie utworzony na tym komputerze?",
        "imageLoc": "",
        "answers": [
            "A. mobilny",
            "B. lokalny",
            "C. tymczasowy",
            "D. obowi\u0105zkowy"
        ],
        "goodAnswer": "C. tymczasowy"
    },
    {
        "id": 1127,
        "question": "Klawiatura QWERTY umo\u017cliwiaj\u0105ca wprowadzenie znak\u00f3w charakterystycznych dla j\u0119zyka polskiego nazywana jest r\u00f3wnie\u017c klawiatur\u0105",
        "imageLoc": "",
        "answers": [
            "A. maszynistki",
            "B. programisty",
            "C. polsk\u0105",
            "D. diakrytyczn\u0105"
        ],
        "goodAnswer": "B. programisty"
    },
    {
        "id": 1128,
        "question": "Przedstawione na rysunku urz\u0105dzenie wraz ze specyfikacj\u0105 techniczn\u0105 mo\u017cna wykorzysta\u0107 do pomiar\u00f3w okablowania",
        "imageLoc": require("../assets/img/1983.png"),
        "answers": [
            "A. skr\u0119tki cat. 5e/6.",
            "B. koncentrycznego.",
            "C. \u015bwiat\u0142owodowego.",
            "D. telefonicznego."
        ],
        "goodAnswer": "C. \u015bwiat\u0142owodowego."
    },
    {
        "id": 1129,
        "question": "W systemie Linux polecenie chmod 321 start spowoduje nadanie nast\u0119puj\u0105cych uprawnie\u0144 plikowi start:",
        "imageLoc": "",
        "answers": [
            "A. pe\u0142na kontrola dla u\u017cytkownika root, zapis i odczyt dla u\u017cytkownika standardowego, odczyt dla pozosta\u0142ych",
            "B. wykonanie i zapis dla w\u0142a\u015bciciela pliku, zapis dla grupy, wykonanie dla pozosta\u0142ych",
            "C. czytanie, zapis i wykonanie dla w\u0142a\u015bciciela pliku, zapis i wykonanie dla grupy i czytanie dla pozosta\u0142ych",
            "D. zapis, odczyt i wykonanie dla u\u017cytkownika root, odczyt i wykonanie dla u\u017cytkownika standardowego, odczyt dla pozosta\u0142ych"
        ],
        "goodAnswer": "B. wykonanie i zapis dla w\u0142a\u015bciciela pliku, zapis dla grupy, wykonanie dla pozosta\u0142ych"
    },
    {
        "id": 1130,
        "question": "Umowa, na mocy kt\u00f3rej u\u017cytkownik ma mi\u0119dzy innymi wgl\u0105d do kodu \u017ar\u00f3d\u0142owego oprogramowania w celu jego analizy oraz udoskonalania, to licencja",
        "imageLoc": "",
        "answers": [
            "A. OLP",
            "B. OEM",
            "C. MOLP",
            "D. GNU GPL"
        ],
        "goodAnswer": "D. GNU GPL"
    },
    {
        "id": 1131,
        "question": "Ile klawiszy funkcyjnych znajduje si\u0119 na klawiaturze w standardzie QWERTY?",
        "imageLoc": "",
        "answers": [
            "A. 14",
            "B. 10",
            "C. 8",
            "D. 12"
        ],
        "goodAnswer": "D. 12"
    },
    {
        "id": 1132,
        "question": "Kt\u00f3ry z adres\u00f3w jest adresem klasy B?",
        "imageLoc": "",
        "answers": [
            "A. 192.168.0.1",
            "B. 10.0.0.1",
            "C. 224.0.0.1",
            "D. 191.168.0.1"
        ],
        "goodAnswer": "D. 191.168.0.1"
    },
    {
        "id": 1133,
        "question": "Do monitorowania stanu urz\u0105dze\u0144 w sieci jest stosowane oprogramowanie dzia\u0142aj\u0105ce w oparciu o protok\u00f3\u0142",
        "imageLoc": "",
        "answers": [
            "A. SMTP (Simple Mail Transport Protocol)",
            "B. SNMP (Simple Network Management Protocol)",
            "C. STP (SpanningTreeProtocol)",
            "D. FTP (File Transfer Protocol)"
        ],
        "goodAnswer": "B. SNMP (Simple Network Management Protocol)"
    },
    {
        "id": 1134,
        "question": "Adres 2001:0012:0000:0000:0AAA:0000:0000:000B protoko\u0142u IPv6 po kompresji przyjmuje posta\u0107",
        "imageLoc": "",
        "answers": [
            "A. 2001:12::AAA:0:0:B",
            "B. 2001:12::0E98::B",
            "C. 2001:0012::000B",
            "D. 2001::AAA:0000::000B"
        ],
        "goodAnswer": "A. 2001:12::AAA:0:0:B"
    },
    {
        "id": 1135,
        "question": "W drukarce laserowej do utrwalania wydruku na papierze s\u0142u\u017c\u0105",
        "imageLoc": "",
        "answers": [
            "A. g\u0142owice piezoelektryczne",
            "B. b\u0119ben transferowy",
            "C. promienie lasera",
            "D. rozgrzane wa\u0142ki"
        ],
        "goodAnswer": "D. rozgrzane wa\u0142ki"
    },
    {
        "id": 1136,
        "question": "Atak typu hijacking na serwer sieciowy charakteryzuje si\u0119",
        "imageLoc": "",
        "answers": [
            "A. \u0142amaniem zabezpiecze\u0144 przed niedozwolonym u\u017cytkowaniem program\u00f3w",
            "B. przeci\u0105\u017ceniem aplikacji udost\u0119pniaj\u0105cej okre\u015blone dane",
            "C. zbieraniem informacji na temat atakowanej sieci i szukaniem luk w sieci",
            "D. przej\u0119ciem kontroli nad po\u0142\u0105czeniem mi\u0119dzy komunikuj\u0105cymi si\u0119 komputerami"
        ],
        "goodAnswer": "D. przej\u0119ciem kontroli nad po\u0142\u0105czeniem mi\u0119dzy komunikuj\u0105cymi si\u0119 komputerami"
    },
    {
        "id": 1137,
        "question": "Aby zapobiec wyst\u0119powaniu r\u00f3\u017cnic w kolorach mi\u0119dzy zeskanowanymi zdj\u0119ciami wy\u015bwietlanymi na monitorze komputerowym a ich orygina\u0142ami, nale\u017cy wykona\u0107",
        "imageLoc": "",
        "answers": [
            "A. kadrowanie skanera",
            "B. kalibracj\u0119 skanera",
            "C. modelowanie skanera",
            "D. interpolacj\u0119 skanera"
        ],
        "goodAnswer": "B. kalibracj\u0119 skanera"
    },
    {
        "id": 1138,
        "question": "Konwencja zapisu \u015bcie\u017cki do udzia\u0142u sieciowego zgodna z UNC (Universal Naming Convention) ma posta\u0107",
        "imageLoc": "",
        "answers": [
            "A. \\\\ nazwa_zasobu\\ nazwa_komputera",
            "B. \\\\ nazwa_komputera\\ nazwa_zasobu",
            "C. //nazwa_zasobu/nazwa_komputera",
            "D. //nazwa_komputera/nazwa_zasobu"
        ],
        "goodAnswer": "B. \\\\ nazwa_komputera\\ nazwa_zasobu"
    },
    {
        "id": 1139,
        "question": "Po zainstalowaniu systemu Linux u\u017cytkownik chce przeprowadzi\u0107 konfiguracj\u0119 karty sieciowej poprzez wpisanie ustawie\u0144 konfiguracyjnych sieci. Jest to mo\u017cliwe przez edycj\u0119 pliku",
        "imageLoc": "",
        "answers": [
            "A. /etc/network/interfaces",
            "B. /etc/profile",
            "C. /etc/shadow",
            "D. /etc/resolv.configuration"
        ],
        "goodAnswer": "A. /etc/network/interfaces"
    },
    {
        "id": 1140,
        "question": "Przedstawiony stan ekranu terminala uzyskano w wyniku testu przeprowadzonego w systemie Windows. Pracownik serwisu uzyska\u0142 w ten spos\u00f3b informacj\u0119 o:",
        "imageLoc": require("../assets/img/57.png"),
        "answers": [
            "A. mo\u017cliwo\u015bci diagnozowania infrastruktury systemu DNS",
            "B. \u015bcie\u017cce do lokalizacji docelowej",
            "C. poprawno\u015bci konfiguracji protoko\u0142u TCP/IP",
            "D. sprawno\u015bci po\u0142\u0105czenia przy u\u017cyciu protoko\u0142u IPX/SPX"
        ],
        "goodAnswer": "B. \u015bcie\u017cce do lokalizacji docelowej"
    },
    {
        "id": 1141,
        "question": "Interfejs UDMA to interfejs",
        "imageLoc": "",
        "answers": [
            "A. r\u00f3wnoleg\u0142y, kt\u00f3ry zosta\u0142 zast\u0105piony przez interfejs SATA.",
            "B. . szeregowy, u\u017cywany do pod\u0142\u0105czania urz\u0105dze\u0144 wej\u015bcia.",
            "C. r\u00f3wnoleg\u0142y, wykorzystywany mi\u0119dzy innymi do pod\u0142\u0105czania kina domowego do komputera.",
            "D. szeregowy, kt\u00f3ry s\u0142u\u017cy do wymiany danych pomi\u0119dzy pami\u0119ci\u0105 RAM a dyskami twardymi."
        ],
        "goodAnswer": "A. r\u00f3wnoleg\u0142y, kt\u00f3ry zosta\u0142 zast\u0105piony przez interfejs SATA."
    },
    {
        "id": 1142,
        "question": "Kt\u00f3ry protok\u00f3\u0142 jest wykorzystywany do przesy\u0142ania plik\u00f3w bez nawi\u0105zania po\u0142\u0105czenia?",
        "imageLoc": "",
        "answers": [
            "A. TFTP (Trivial File Transfer Protocol)",
            "B. HTTP (Hyper Text Transfer Protocol)",
            "C. FTP (File Transfer Protocol)",
            "D. DNS (Domain Name System)"
        ],
        "goodAnswer": "A. TFTP (Trivial File Transfer Protocol)"
    },
    {
        "id": 1143,
        "question": "Narz\u0119dziem wiersza polece\u0144 w systemie Windows, umo\u017cliwiaj\u0105cym zamian\u0119 tablicy partycji GPT na MBR, jest program",
        "imageLoc": "",
        "answers": [
            "A. diskpart",
            "B. cipher",
            "C. gparted",
            "D. bcdedit"
        ],
        "goodAnswer": "A. diskpart"
    },
    {
        "id": 1144,
        "question": "W systemie Windows 7, do modyfikacji konfiguracji rozruchowej komputera za pomoc\u0105 linii polece\u0144, nale\u017cy zastosowa\u0107 polecenie",
        "imageLoc": "",
        "answers": [
            "A. config",
            "B. bcdedit",
            "C. bootcfg",
            "D. bootfix"
        ],
        "goodAnswer": "B. bcdedit"
    },
    {
        "id": 1145,
        "question": "Okresowych kopii zapasowych dysk\u00f3w serwera nie mo\u017cna tworzy\u0107 na wymiennych no\u015bnikach typu",
        "imageLoc": "",
        "answers": [
            "A. p\u0142yty CD-RW",
            "B. p\u0142yty DVD-ROM",
            "C. karty SD",
            "D. karty MMC"
        ],
        "goodAnswer": "B. p\u0142yty DVD-ROM"
    },
    {
        "id": 1146,
        "question": "Protoko\u0142em po\u0142\u0105czeniowym warstwy transportowej zapewniaj\u0105cym niezawodno\u015b\u0107 w dostarczaniu pakiet\u00f3w jest protok\u00f3\u0142",
        "imageLoc": "",
        "answers": [
            "A. TCP (Transmission Control Protocol)",
            "B. IP (Internet Protocol)",
            "C. UDP (User Datagram Protocol)",
            "D. ARP (A ddress Resolution Protocol)"
        ],
        "goodAnswer": "A. TCP (Transmission Control Protocol)"
    },
    {
        "id": 1147,
        "question": "Drukarka fotograficzna ma bardzo brudn\u0105 obudow\u0119 oraz wy\u015bwietlacz. Aby usun\u0105\u0107 zabrudzenia, nale\u017cy u\u017cy\u0107",
        "imageLoc": "",
        "answers": [
            "A. suchej chusteczki oraz patyczk\u00f3w do czyszczenia",
            "B. mokrej chusteczki oraz spr\u0119\u017conego powietrza z rurk\u0105 zwi\u0119kszaj\u0105c\u0105 zasi\u0119g",
            "C. wilgotnej \u015bciereczki oraz pianki do czyszczenia plastiku",
            "D. \u015bciereczki nas\u0105czonej IPA oraz \u015brodka smaruj\u0105cego"
        ],
        "goodAnswer": "C. wilgotnej \u015bciereczki oraz pianki do czyszczenia plastiku"
    },
    {
        "id": 1148,
        "question": "W systemie operacyjnym Linux archiwizacj\u0119 danych wykonuje si\u0119 poleceniem",
        "imageLoc": "",
        "answers": [
            "A. cmd",
            "B. chmod",
            "C. rpm",
            "D. tar"
        ],
        "goodAnswer": "D. tar"
    },
    {
        "id": 1149,
        "question": "Pami\u0119ci DDR2 zasilane s\u0105 napi\u0119ciem",
        "imageLoc": "",
        "answers": [
            "A. 1,0 V",
            "B. 2,5 V",
            "C. 1,8 V",
            "D. 1,4 V"
        ],
        "goodAnswer": "C. 1,8 V"
    },
    {
        "id": 1150,
        "question": "P\u0142yta g\u0142\u00f3wna wyposa\u017cona w gniazdo G2 b\u0119dzie wsp\u00f3\u0142pracowa\u0142a z procesorem",
        "imageLoc": "",
        "answers": [
            "A. AMD Trinity",
            "B. Intel Core i7",
            "C. AMD Opteron",
            "D. Intel Pentium 4 EE"
        ],
        "goodAnswer": "B. Intel Core i7"
    },
    {
        "id": 1151,
        "question": "Do zasilacza UPS o mocy rzeczywistej 480 W nie nale\u017cy pod\u0142\u0105cza\u0107",
        "imageLoc": "",
        "answers": [
            "A. drukarki laserowej",
            "B. modemu ADSL",
            "C. monitora",
            "D. urz\u0105dze\u0144 sieciowych typu router"
        ],
        "goodAnswer": "A. drukarki laserowej"
    },
    {
        "id": 1152,
        "question": "Ile host\u00f3w mo\u017cna zaadresowa\u0107 w podsieci o adresie 192.168.10.0/25?",
        "imageLoc": "",
        "answers": [
            "A. 62",
            "B. 126",
            "C. 64",
            "D. 128"
        ],
        "goodAnswer": "B. 126"
    },
    {
        "id": 1153,
        "question": "Zadaniem programu Wireshark jest",
        "imageLoc": "",
        "answers": [
            "A. monitorowanie dzia\u0142ania u\u017cytkownik\u00f3w sieci",
            "B. sprawdzanie wydajno\u015bci element\u00f3w komputera",
            "C. zapobieganie dost\u0119powi do komputera przez sie\u0107",
            "D. zabezpieczenie komputera przed wirusami"
        ],
        "goodAnswer": "A. monitorowanie dzia\u0142ania u\u017cytkownik\u00f3w sieci"
    },
    {
        "id": 1154,
        "question": "Wska\u017c niepoprawny podzia\u0142 dysk\u00f3w MBR na partycje",
        "imageLoc": "",
        "answers": [
            "A. 1 partycja podstawowa i 1 rozszerzona",
            "B. 3 partycje podstawowe i 1 rozszerzona",
            "C. 1 partycja podstawowa i 2 rozszerzone",
            "D. 2 partycje podstawowe i 1 rozszerzona"
        ],
        "goodAnswer": "C. 1 partycja podstawowa i 2 rozszerzone"
    },
    {
        "id": 1155,
        "question": "Adresy IPv6 s\u0105 liczbami",
        "imageLoc": "",
        "answers": [
            "A. 32 bitowymi wyra\u017canymi w postaci napis\u00f3w binarnych",
            "B. 256 bitowymi wyra\u017canymi w postaci napis\u00f3w szesnastkowych",
            "C. 64 bitowymi wyra\u017canymi w postaci napis\u00f3w binarnych",
            "D. 128 bitowymi wyra\u017canymi w postaci napis\u00f3w szesnastkowych"
        ],
        "goodAnswer": "D. 128 bitowymi wyra\u017canymi w postaci napis\u00f3w szesnastkowych"
    },
    {
        "id": 1156,
        "question": "Rysunek przedstawia pami\u0119\u0107",
        "imageLoc": require("../assets/img/3.png"),
        "answers": [
            "A. DDR DIMM",
            "B. SIMM",
            "C. SDRAM DIMM",
            "D. Compact Flash"
        ],
        "goodAnswer": "C. SDRAM DIMM"
    },
    {
        "id": 1157,
        "question": "Do jakiego rodzaju wtyk\u00f3w jest stosowana przedstawiona na rysunku zaciskarka?",
        "imageLoc": require("../assets/img/274.png"),
        "answers": [
            "A. RJ45",
            "B. BNC",
            "C. E2000",
            "D. SC/PC"
        ],
        "goodAnswer": "B. BNC"
    },
    {
        "id": 1158,
        "question": "Odpowiednikiem macierzy RAID 1 w systemie Windows jest wolumin",
        "imageLoc": "",
        "answers": [
            "A. dublowany",
            "B. prosty",
            "C. \u0142\u0105czony",
            "D. roz\u0142o\u017cony"
        ],
        "goodAnswer": "A. dublowany"
    },
    {
        "id": 1159,
        "question": "Norma TIA/EIA-568-B.2 okre\u015bla specyfikacj\u0119 parametr\u00f3w transmisyjnych",
        "imageLoc": "",
        "answers": [
            "A. fal radiowych",
            "B. kabli UTP",
            "C. kabli koncentrycznych",
            "D. \u015bwiat\u0142owod\u00f3w"
        ],
        "goodAnswer": "B. kabli UTP"
    },
    {
        "id": 1160,
        "question": "Wska\u017c nazw\u0119 us\u0142ugi prze\u0142\u0105cznika, kt\u00f3ra umo\u017cliwi ustawienie wy\u017cszego priorytetu dla transmisji VoIP",
        "imageLoc": "",
        "answers": [
            "A. SNMP",
            "B. QoS",
            "C. STP",
            "D. VNC"
        ],
        "goodAnswer": "B. QoS"
    },
    {
        "id": 1161,
        "question": "Klawiatura QWERTY umo\u017cliwiaj\u0105ca wprowadzenie znak\u00f3w charakterystycznych dla j\u0119zyka polskiego nazywana jest r\u00f3wnie\u017c klawiatur\u0105",
        "imageLoc": "",
        "answers": [
            "A. maszynistki",
            "B. polsk\u0105",
            "C. diakrytyczn\u0105",
            "D. programisty"
        ],
        "goodAnswer": "D. programisty"
    },
    {
        "id": 1162,
        "question": "U\u017cytkownicy z grupy Pracownicy nie mog\u0105 drukowa\u0107 dokument\u00f3w przy u\u017cyciu serwera wydruku w systemie operacyjnym Windows Server. Maj\u0105 oni przydzielone uprawnienia tylko \"Zarz\u0105dzanie dokumentami\". Co nale\u017cy zrobi\u0107, aby rozwi\u0105za\u0107 opisany problem?",
        "imageLoc": "",
        "answers": [
            "A. Dla grupy Pracownicy nale\u017cy nada\u0107 uprawnienia \"Drukuj\"",
            "B. Dla grupy Administratorzy nale\u017cy usun\u0105\u0107 uprawnienia \"Zarz\u0105dzanie drukarkami\"",
            "C. Dla grupy Pracownicy nale\u017cy usun\u0105\u0107 uprawnienia \"Zarz\u0105dzanie dokumentami\"",
            "D. Dla grupy Administratorzy nale\u017cy usun\u0105\u0107 uprawnienia \"Drukuj\""
        ],
        "goodAnswer": "A. Dla grupy Pracownicy nale\u017cy nada\u0107 uprawnienia \"Drukuj\""
    },
    {
        "id": 1163,
        "question": "Kt\u00f3ry typ pami\u0119ci nale\u017cy umie\u015bci\u0107 na p\u0142ycie g\u0142\u00f3wnej komputera w miejscu wskazanym strza\u0142k\u0105?",
        "imageLoc": require("../assets/img/473.png"),
        "answers": [
            "A. SO-DIMM DDR2",
            "B. SD-RAM DDR3",
            "C. SIMM",
            "D. FLASH"
        ],
        "goodAnswer": "B. SD-RAM DDR3"
    },
    {
        "id": 1164,
        "question": "Na zdj\u0119ciu przedstawiono gniazda nale\u017c\u0105ce do karty",
        "imageLoc": require("../assets/img/96.png"),
        "answers": [
            "A. faksmodemowej",
            "B. telewizyjnej",
            "C. d\u017awi\u0119kowej",
            "D. sieciowej"
        ],
        "goodAnswer": "D. sieciowej"
    },
    {
        "id": 1165,
        "question": "Adresem IPv6 autokonfiguracji \u0142\u0105cza jest:",
        "imageLoc": "",
        "answers": [
            "A. ::/128",
            "B. 2000::/3",
            "C. FF00::/8",
            "D. FE80::/10"
        ],
        "goodAnswer": "D. FE80::/10"
    },
    {
        "id": 1166,
        "question": "Rysunek przedstawia wynik wykonania programu",
        "imageLoc": require("../assets/img/1597.png"),
        "answers": [
            "A. vol",
            "B. tree",
            "C. sort",
            "D. dir"
        ],
        "goodAnswer": "B. tree"
    },
    {
        "id": 1167,
        "question": "Kt\u00f3ry protok\u00f3\u0142 komunikacyjny s\u0142u\u017cy do transferu plik\u00f3w w uk\u0142adzie klient-serwer oraz mo\u017ce dzia\u0142a\u0107 w dw\u00f3ch trybach: aktywnym i pasywnym?",
        "imageLoc": "",
        "answers": [
            "A. EI-SI",
            "B. IP",
            "C. FTP",
            "D. DNS"
        ],
        "goodAnswer": "C. FTP"
    },
    {
        "id": 1168,
        "question": "Narz\u0119dzia dostrajania oraz Unity Tweak Tool to narz\u0119dzia systemu Linux s\u0142u\u017c\u0105ce do",
        "imageLoc": "",
        "answers": [
            "A. nadawania uprawnie\u0144 do zasob\u00f3w systemowych",
            "B. konfiguracji zapory systemowej",
            "C. personalizacji systemu",
            "D. zarz\u0105dzania kontami u\u017cytkownika"
        ],
        "goodAnswer": "C. personalizacji systemu"
    },
    {
        "id": 1169,
        "question": "Gniazdo LGA znajduj\u0105ce si\u0119 na p\u0142ycie g\u0142\u00f3wnej komputera stacjonarnego umo\u017cliwia zainstalowanie procesora",
        "imageLoc": "",
        "answers": [
            "A. Intel Pentium II Xeon",
            "B. AMD Sempron",
            "C. Intel Core i5",
            "D. Athlon 64 X2"
        ],
        "goodAnswer": "C. Intel Core i5"
    },
    {
        "id": 1170,
        "question": "Stacja robocza ma nale\u017ce\u0107 do tej samej podsieci co serwer o adresie IP 192.168.10.150 i masce 255.255.255.192. Kt\u00f3ry z adres\u00f3w IP nale\u017cy ustawi\u0107 we w\u0142a\u015bciwo\u015bciach protoko\u0142u TCP/IP karty sieciowej stacji roboczej?",
        "imageLoc": "",
        "answers": [
            "A. 192.168.10.220",
            "B. 192.168.10.1",
            "C. 192.168.11.130",
            "D. 192.168.10.190"
        ],
        "goodAnswer": "D. 192.168.10.190"
    },
    {
        "id": 1171,
        "question": "Programem typu wirus, kt\u00f3rego g\u0142\u00f3wnym celem jest rozprzestrzenianie si\u0119 w sieci komputerowej, jest:",
        "imageLoc": "",
        "answers": [
            "A. keylogger",
            "B. robak",
            "C. backdoor",
            "D. trojan"
        ],
        "goodAnswer": "B. robak"
    },
    {
        "id": 1172,
        "question": "U\u017cytkownik notebooka chce w jego wn\u0119trzu zamontowa\u0107 drugi dysk twardy. Notebook jest wyposa\u017cony tylko w jedn\u0105 zatok\u0119 dla HDD. Rozwi\u0105zaniem tego problemu mo\u017ce by\u0107 wykorzystanie dysku wyposa\u017conego w interfejs",
        "imageLoc": "",
        "answers": [
            "A. SCSI",
            "B. mSATA",
            "C. USB",
            "D. ATAPI"
        ],
        "goodAnswer": "B. mSATA"
    },
    {
        "id": 1173,
        "question": "Do zbudowania programowej macierzy dyskowej RAID-1 nale\u017cy u\u017cy\u0107 minimum",
        "imageLoc": "",
        "answers": [
            "A. 2 dysk\u00f3w",
            "B. 3 dysk\u00f3w",
            "C. 1 dysku podzielonego na dwie partycje",
            "D. 4 dysk\u00f3w"
        ],
        "goodAnswer": "A. 2 dysk\u00f3w"
    },
    {
        "id": 1174,
        "question": "Kt\u00f3ry adres jest adresem publicznym?",
        "imageLoc": "",
        "answers": [
            "A. 11.0.0.1",
            "B. 10.0.0.1",
            "C. 192.168.255.1",
            "D. 172.31.0.1"
        ],
        "goodAnswer": "A. 11.0.0.1"
    },
    {
        "id": 1175,
        "question": "Przedstawione wbudowane narz\u0119dzie system\u00f3w Windows w wersji Enterpise lub Ultimate s\u0142u\u017cy do",
        "imageLoc": require("../assets/img/1336.png"),
        "answers": [
            "A. kryptograficznej ochrony danych na dyskach.",
            "B. tworzenia kopii dysku.",
            "C. konsolidacji danych na dyskach.",
            "D. kompresji dysku."
        ],
        "goodAnswer": "A. kryptograficznej ochrony danych na dyskach."
    },
    {
        "id": 1176,
        "question": "Kt\u00f3ry adres IP nale\u017cy do klasy A?",
        "imageLoc": "",
        "answers": [
            "A. 239.0.255.15",
            "B. 125.11.0.7",
            "C. 217.12.45.1",
            "D. 129.10.0.17"
        ],
        "goodAnswer": "B. 125.11.0.7"
    },
    {
        "id": 1177,
        "question": "Kondygnacyjny punkt dystrybucyjny jest po\u0142\u0105czony za pomoc\u0105 okablowania poziomego z",
        "imageLoc": "",
        "answers": [
            "A. gniazdem abonenckim",
            "B. centralnym punktem sieci",
            "C. centralnym punktem dystrybucyjnym",
            "D. budynkowym punktem dystrybucyjnym"
        ],
        "goodAnswer": "A. gniazdem abonenckim"
    },
    {
        "id": 1178,
        "question": "Narz\u0119dziem wiersza polece\u0144 w systemie Windows, umo\u017cliwiaj\u0105cym zamian\u0119 tablicy partycji GPT na MBR, jest program",
        "imageLoc": "",
        "answers": [
            "A. bcdedit",
            "B. gparted",
            "C. cipher",
            "D. diskpart"
        ],
        "goodAnswer": "D. diskpart"
    },
    {
        "id": 1179,
        "question": "Na zdj\u0119ciu przedstawiono z\u0142\u0105cza karty graficznej. Z\u0142\u0105cze cyfrowe to",
        "imageLoc": require("../assets/img/188.png"),
        "answers": [
            "A. wy\u0142\u0105cznie z\u0142\u0105cze 2",
            "B. z\u0142\u0105cze 1 i 2",
            "C. wy\u0142\u0105cznie z\u0142\u0105cze 3",
            "D. wy\u0142\u0105cznie z\u0142\u0105cze 1"
        ],
        "goodAnswer": "C. wy\u0142\u0105cznie z\u0142\u0105cze 3"
    },
    {
        "id": 1180,
        "question": "Suma liczb binarnych 1010 + 111 zapisana w systemie dziesi\u0119tnym wyniesie",
        "imageLoc": "",
        "answers": [
            "A. 19",
            "B. 16",
            "C. 17",
            "D. 18"
        ],
        "goodAnswer": "C. 17"
    },
    {
        "id": 1181,
        "question": "Spos\u00f3b dzia\u0142ania kt\u00f3rego protoko\u0142u zosta\u0142 przedstawiony na rysunku?",
        "imageLoc": require("../assets/img/1561.png"),
        "answers": [
            "A. Security Shell (SSH)",
            "B. Dynamic Host Configuration Protocol (DHCP)",
            "C. Telnet",
            "D. Domain Name System(DNS)"
        ],
        "goodAnswer": "B. Dynamic Host Configuration Protocol (DHCP)"
    },
    {
        "id": 1182,
        "question": "Do po\u0142\u0105czenia ze sob\u0105 dw\u00f3ch prze\u0142\u0105cznik\u00f3w na odleg\u0142o\u015b\u0107 200 m oraz aby zapewni\u0107 przepustowo\u015b\u0107 minimaln\u0105 200 Mbit/s, nale\u017cy zastosowa\u0107",
        "imageLoc": "",
        "answers": [
            "A. skr\u0119tk\u0119 STP.",
            "B. \u015bwiat\u0142ow\u00f3d.",
            "C. skr\u0119tk\u0119 UTP.",
            "D. kabel koncentryczny 50 \u2126."
        ],
        "goodAnswer": "B. \u015bwiat\u0142ow\u00f3d."
    },
    {
        "id": 1183,
        "question": "Okablowanie pionowe w sieci strukturalnej \u0142\u0105czy",
        "imageLoc": "",
        "answers": [
            "A. po\u015bredni punkt rozdzielczy z gniazdem abonenckim",
            "B. g\u0142\u00f3wny punkt rozdzielczy z gniazdem abonenckim",
            "C. g\u0142\u00f3wny punkt rozdzielczy z po\u015brednimi punktami rozdzielczymi",
            "D. dwa gniazda abonenckie"
        ],
        "goodAnswer": "C. g\u0142\u00f3wny punkt rozdzielczy z po\u015brednimi punktami rozdzielczymi"
    },
    {
        "id": 1184,
        "question": "Wska\u017c 24-pinowe lub 29-pinowe z\u0142\u0105cze \u017censkie, kt\u00f3re mo\u017ce przesy\u0142a\u0107 skompresowany cyfrowy sygna\u0142 na monitor.",
        "imageLoc": "",
        "answers": [
            "A. HDMI",
            "B. VGA",
            "C. RCA",
            "D. DVI"
        ],
        "goodAnswer": "D. DVI"
    },
    {
        "id": 1185,
        "question": "Administrator sieci komputerowej chce sprawdzi\u0107 na komputerze z systemem operacyjnym Windows, kt\u00f3re po\u0142\u0105czenia s\u0105 obecnie zestawiane oraz porty, na kt\u00f3rych komputer nas\u0142uchuje. W tym celu powinien zastosowa\u0107 polecenie",
        "imageLoc": "",
        "answers": [
            "A. netstat",
            "B. ping",
            "C. arp",
            "D. tracert"
        ],
        "goodAnswer": "A. netstat"
    },
    {
        "id": 1186,
        "question": "Drukark\u0119 zainstalowano w systemie z rodziny Windows. Aby ustawi\u0107 mi\u0119dzy innymi domy\u015bln\u0105 orientacj\u0119 wydruku, liczb\u0119 stron na arkusz oraz dostosowanie kolor\u00f3w, podczas jej konfiguracji nale\u017cy wykorzysta\u0107 opcj\u0119",
        "imageLoc": "",
        "answers": [
            "A. zabezpieczenia drukarki",
            "B. prawa drukowania",
            "C. preferencji drukowania",
            "D. udost\u0119pniania drukarki"
        ],
        "goodAnswer": "C. preferencji drukowania"
    },
    {
        "id": 1187,
        "question": "Monitoruj\u0105c ruch sieciowy, wykryto, \u017ce na adres serwera wykonano tysi\u0105ce zapyta\u0144 DNS na sekund\u0119 z r\u00f3\u017cnych adres\u00f3w IP, co spowodowa\u0142o zawieszenie systemu operacyjnego. Przyczyn\u0105 tego by\u0142 atak typu",
        "imageLoc": "",
        "answers": [
            "A. Flooding",
            "B. DNS snooping",
            "C. Mail Bombing",
            "D. DDoS (Distributed Denial of Service)"
        ],
        "goodAnswer": "D. DDoS (Distributed Denial of Service)"
    },
    {
        "id": 1188,
        "question": "Firma planuje budow\u0119 lokalnej sieci komputerowej, sk\u0142adaj\u0105cej si\u0119 z serwera, drukarki oraz 10 stacji roboczych bez kart bezprzewodowych. Dost\u0119p do Internetu zapewnia ruter z wbudowanym modemem ADSL i czterema portami LAN. Kt\u00f3re z wymienionych urz\u0105dze\u0144 sieciowych jest niezb\u0119dne, aby sie\u0107 poprawnie funkcjonowa\u0142a i mia\u0142a dost\u0119p do Internetu?",
        "imageLoc": "",
        "answers": [
            "A. Prze\u0142\u0105cznik 16 portowy",
            "B. Wzmacniacz sygna\u0142u bezprzewodowego",
            "C. Access Point",
            "D. Prze\u0142\u0105cznik 8 portowy"
        ],
        "goodAnswer": "A. Prze\u0142\u0105cznik 16 portowy"
    },
    {
        "id": 1189,
        "question": "Kt\u00f3ry zapis jest mask\u0105 podsieci dla adresu IP 217.152.128.100/25?",
        "imageLoc": "",
        "answers": [
            "A. 255.255.255.128",
            "B. 255.255.255.224",
            "C. 255.255.255.0",
            "D. 255.255.255.192"
        ],
        "goodAnswer": "A. 255.255.255.128"
    },
    {
        "id": 1190,
        "question": "Jak nazywa si\u0119 klucz rejestru systemu Windows, w kt\u00f3rym s\u0105 zapisane powi\u0105zania typ\u00f3w plik\u00f3w z obs\u0142uguj\u0105cymi je aplikacjami?",
        "imageLoc": "",
        "answers": [
            "A. HKEY_USERS",
            "B. HKEY_CLASSES_ROOT",
            "C. HKEY_LOCAL_RELATIONS",
            "D. HKEY_CURRENT_PROGS"
        ],
        "goodAnswer": "B. HKEY_CLASSES_ROOT"
    },
    {
        "id": 1191,
        "question": "Standard Transport Layer Security (TLS) to rozwini\u0119cie protoko\u0142u",
        "imageLoc": "",
        "answers": [
            "A. Network Terminal Protocol (telnet)",
            "B. Security Socket Layer (SSL)",
            "C. Security Shell (SSH)",
            "D. Session Initiation Protocol (SIP)"
        ],
        "goodAnswer": "B. Security Socket Layer (SSL)"
    },
    {
        "id": 1192,
        "question": "Najbardziej zaawansowany tryb pracy portu r\u00f3wnoleg\u0142ego standardu IEEE-1284 tworz\u0105cy dwukierunkow\u0105 magistral\u0119 8-bitow\u0105 mog\u0105c\u0105 przesy\u0142a\u0107 zar\u00f3wno dane, jak i adresy z maksymaln\u0105 szybko\u015bci\u0105 transmisji do 2,3 MB/s, pozwalaj\u0105cy na pod\u0142\u0105czenie do 64 urz\u0105dze\u0144, to",
        "imageLoc": "",
        "answers": [
            "A. EPP Mode",
            "B. Byte Mode",
            "C. Compatilibility Mode",
            "D. Nibble Mode"
        ],
        "goodAnswer": "A. EPP Mode"
    },
    {
        "id": 1193,
        "question": "Kt\u00f3ry skr\u00f3t okre\u015bla typ licencji Microsoft przeznaczonej dla szk\u00f3\u0142, uczelni wy\u017cszych, instytucji rz\u0105dowych oraz du\u017cych przedsi\u0119biorstw?",
        "imageLoc": "",
        "answers": [
            "A. MOLP",
            "B. BOX",
            "C. VLSC",
            "D. OEM"
        ],
        "goodAnswer": "A. MOLP"
    },
    {
        "id": 1194,
        "question": "Rysunek poni\u017cej przedstawia konfiguracj\u0119 zapory ogniowej w ruterze TL-WR340G. Jakie zasady konfiguracji zapory ustawiono?",
        "imageLoc": require("../assets/img/1390.png"),
        "answers": [
            "A. Zapora jest w\u0142\u0105czona, w\u0142\u0105czone jest filtrowanie adres\u00f3w IP, regu\u0142a filtrowania adres\u00f3w IP jest ustawiona na opcj\u0119 \"zezwalaj pakietom nieokre\u015blonym jakimikolwiek regu\u0142ami filtrowania przej\u015b\u0107 przez urz\u0105dzenie\", filtrowanie domen wy\u0142\u0105czone",
            "B. Zapora jest w\u0142\u0105czona, wy\u0142\u0105czone jest filtrowanie adres\u00f3w IP, regu\u0142a filtrowania adres\u00f3w IP jest ustawiona na opcj\u0119 \"odm\u00f3w pakietom nieokre\u015blonym jakimikolwiek regu\u0142ami filtrowania przej\u015b\u0107 przez urz\u0105dzenie\", filtrowanie domen w\u0142\u0105czone",
            "C. Zapora jest w\u0142\u0105czona, w\u0142\u0105czone jest filtrowanie adres\u00f3w IP, regu\u0142a filtrowania adres\u00f3w IP jest ustawiona na opcj\u0119 \"odm\u00f3w pakietom nieokre\u015blonym jakimikolwiek regu\u0142ami filtrowania przej\u015b\u0107 przez urz\u0105dzenie\", filtrowanie domen wy\u0142\u0105czone",
            "D. Zapora jest wy\u0142\u0105czona, wy\u0142\u0105czone jest filtrowanie adres\u00f3w IP i domen, regu\u0142a filtrowania adres\u00f3w IP jest ustawiona na opcj\u0119 \"zezwalaj pakietom nieokre\u015blonym jakimikolwiek regu\u0142ami filtrowania przej\u015b\u0107 przez urz\u0105dzenie\", filtrowanie domen w\u0142\u0105czone"
        ],
        "goodAnswer": "A. Zapora jest w\u0142\u0105czona, w\u0142\u0105czone jest filtrowanie adres\u00f3w IP, regu\u0142a filtrowania adres\u00f3w IP jest ustawiona na opcj\u0119 \"zezwalaj pakietom nieokre\u015blonym jakimikolwiek regu\u0142ami filtrowania przej\u015b\u0107 przez urz\u0105dzenie\", filtrowanie domen wy\u0142\u0105czone"
    },
    {
        "id": 1195,
        "question": "Jak\u0105 nazw\u0119 nosi z\u0142\u0105cze stosowane w sieciach komputerowych przedstawione na zdj\u0119ciu?",
        "imageLoc": require("../assets/img/430.png"),
        "answers": [
            "A. FC",
            "B. LC",
            "C. ST",
            "D. BNC"
        ],
        "goodAnswer": "D. BNC"
    },
    {
        "id": 1196,
        "question": "Do jednoczesnej zmiany t\u0142a pulpitu, kolor\u00f3w okien, d\u017awi\u0119k\u00f3w oraz wygaszacza ekranu na komputerze z zainstalowanym systemem Windows nale\u017cy wykorzysta\u0107",
        "imageLoc": "",
        "answers": [
            "A. plan zasilania.",
            "B. centrum u\u0142atwie\u0144 dost\u0119pu.",
            "C. kompozycje.",
            "D. schematy d\u017awi\u0119kowe."
        ],
        "goodAnswer": "C. kompozycje."
    },
    {
        "id": 1197,
        "question": "Programem s\u0142u\u017c\u0105cym do archiwizacji danych w systemie Linux jest",
        "imageLoc": "",
        "answers": [
            "A. compress",
            "B. tar",
            "C. free",
            "D. lzma"
        ],
        "goodAnswer": "B. tar"
    },
    {
        "id": 1198,
        "question": "Przedstawiony fragment konfiguracji zapory sieciowej zezwala na ruch sieciowy z wykorzystaniem protoko\u0142\u00f3w",
        "imageLoc": require("../assets/img/1356.png"),
        "answers": [
            "A. HTTP, SMPT",
            "B. FTP, SSH",
            "C. HTTPS, IMAP",
            "D. FTP, SSH"
        ],
        "goodAnswer": "C. HTTPS, IMAP"
    },
    {
        "id": 1199,
        "question": "Emisja sygna\u0142\u00f3w d\u017awi\u0119kowych: jednego d\u0142ugiego i dw\u00f3ch kr\u00f3tkich przez BIOS firmy AMI oznacza",
        "imageLoc": "",
        "answers": [
            "A. b\u0142\u0105d parzysto\u015bci pami\u0119ci",
            "B. uszkodzenie zegara systemowego",
            "C. b\u0142\u0105d karty graficznej",
            "D. uszkodzenie pami\u0119ci"
        ],
        "goodAnswer": "C. b\u0142\u0105d karty graficznej"
    },
    {
        "id": 1200,
        "question": "Na ilustracji zaznaczono strza\u0142kami funkcj\u0119 przycisk\u00f3w znajduj\u0105cych si\u0119 na obudowie projektora multimedialnego. Za pomoc\u0105 tych przycisk\u00f3w mo\u017cna",
        "imageLoc": require("../assets/img/1741.png"),
        "answers": [
            "A. regulowa\u0107 odwzorowanie przestrzeni kolor\u00f3w",
            "B. regulowa\u0107 zniekszta\u0142cony obraz",
            "C. prze\u0142\u0105cza\u0107 sygna\u0142y wej\u015bciowe",
            "D. zmienia\u0107 poziom jasno\u015bci obrazu"
        ],
        "goodAnswer": "B. regulowa\u0107 zniekszta\u0142cony obraz"
    },
    {
        "id": 1201,
        "question": "W celu wyegzekwowania od u\u017cytkownik\u00f3w lokalnych system\u00f3w z rodziny Windows Server okresowej zmiany has\u0142a i stosowania hase\u0142 o odpowiedniej d\u0142ugo\u015bci spe\u0142niaj\u0105cych wymagania co do z\u0142o\u017cono\u015bci, nale\u017cy skonfigurowa\u0107",
        "imageLoc": "",
        "answers": [
            "A. konta u\u017cytkownik\u00f3w w Panelu Sterowania",
            "B. w\u0142a\u015bciwo\u015bci konta u\u017cytkownika w zarz\u0105dzaniu komputerem",
            "C. zasady blokady konta w zasadach grup",
            "D. zasady hase\u0142 w zasadach zabezpiecze\u0144 lokalnych"
        ],
        "goodAnswer": "D. zasady hase\u0142 w zasadach zabezpiecze\u0144 lokalnych"
    },
    {
        "id": 1202,
        "question": "Zamontowanie w komputerze przedstawionej karty umo\u017cliwi",
        "imageLoc": require("../assets/img/327.png"),
        "answers": [
            "A. rejestracj\u0119, przetwarzanie oraz odtwarzanie obrazu telewizyjnego",
            "B. zwi\u0119kszenie przepustowo\u015bci magistrali komunikacyjnej komputera",
            "C. pod\u0142\u0105czenie dodatkowego urz\u0105dzenia peryferyjnego na przyk\u0142ad skanera lub plotera",
            "D. bezprzewodowe pod\u0142\u0105czenie do sieci LAN za pomoc\u0105 interfejsu BNC"
        ],
        "goodAnswer": "A. rejestracj\u0119, przetwarzanie oraz odtwarzanie obrazu telewizyjnego"
    },
    {
        "id": 1203,
        "question": "W pomieszczeniu biurowym nale\u017cy zainstalowa\u0107 5 podw\u00f3jnych gniazd abonenckich. \u015arednia odleg\u0142o\u015b\u0107 gniazda abonenckiego od lokalnego punktu dystrybucyjnego wynosi 10m. Jaki b\u0119dzie przybli\u017cony koszt zakupu kabla UTP kategorii 5e przeznaczonego do budowy sieci lokalnej, je\u017celi cena brutto 1m kabla UTP kategorii 5e wynosi 1,60 z\u0142?",
        "imageLoc": "",
        "answers": [
            "A. 320,00 z\u0142",
            "B. 160,00 z\u0142",
            "C. 80,00 z\u0142",
            "D. 800,00 z\u0142"
        ],
        "goodAnswer": "B. 160,00 z\u0142"
    },
    {
        "id": 1204,
        "question": "Ataki maj\u0105ce na celu zatrzymanie dzia\u0142ania aplikacji i proces\u00f3w zachodz\u0105cych w urz\u0105dzeniu sieciowym to ataki typu",
        "imageLoc": "",
        "answers": [
            "A. spoofing",
            "B. smurf",
            "C. zero-day",
            "D. DoS"
        ],
        "goodAnswer": "D. DoS"
    },
    {
        "id": 1205,
        "question": "W systemie Linux program fsck pozwala na",
        "imageLoc": "",
        "answers": [
            "A. monitorowanie stanu procesora",
            "B. usuwanie b\u0142\u0119dnych wpis\u00f3w w rejestrze systemowym",
            "C. zlokalizowanie i napraw\u0119 uszkodzonych sektor\u00f3w na dysku twardym",
            "D. testowanie wydajno\u015bci karty sieciowej"
        ],
        "goodAnswer": "C. zlokalizowanie i napraw\u0119 uszkodzonych sektor\u00f3w na dysku twardym"
    },
    {
        "id": 1206,
        "question": "Na ilustracji zaznaczono strza\u0142kami funkcj\u0119 przycisk\u00f3w znajduj\u0105cych si\u0119 na obudowie projektora multimedialnego. Za pomoc\u0105 tych przycisk\u00f3w mo\u017cna",
        "imageLoc": require("../assets/img/1554.png"),
        "answers": [
            "A. regulowa\u0107 zniekszta\u0142cony obraz",
            "B. zmienia\u0107 poziom jasno\u015bci obrazu",
            "C. regulowa\u0107 odwzorowanie przestrzeni kolor\u00f3w",
            "D. prze\u0142\u0105cza\u0107 sygna\u0142y wej\u015bciowe"
        ],
        "goodAnswer": "A. regulowa\u0107 zniekszta\u0142cony obraz"
    },
    {
        "id": 1207,
        "question": "Aby system operacyjny by\u0142 skutecznie chroniony przed atakami z\u0142o\u015bliwego oprogramowania, po zainstalowaniu programu antywirusowego nale\u017cy",
        "imageLoc": "",
        "answers": [
            "A. nie podawa\u0107 swojego has\u0142a dost\u0119powego oraz wykonywa\u0107 defragmentacj\u0119 dysk\u00f3w twardych.",
            "B. zainstalowa\u0107 drugi program antywirusowy, aby poprawi\u0107 bezpiecze\u0144stwo",
            "C. aktualizowa\u0107 program i bazy wirus\u00f3w oraz regularnie skanowa\u0107 system.",
            "D. wykupi\u0107 licencj\u0119 na oprogramowanie antywirusowe i u\u017cywa\u0107 programu chkdsk."
        ],
        "goodAnswer": "C. aktualizowa\u0107 program i bazy wirus\u00f3w oraz regularnie skanowa\u0107 system."
    },
    {
        "id": 1208,
        "question": "Aby zapewni\u0107 jako\u015b\u0107 us\u0142ugi QoS, w prze\u0142\u0105cznikach warstwy dost\u0119pu jest stosowany mechanizm",
        "imageLoc": "",
        "answers": [
            "A. nadawania priorytetu okre\u015blonym rodzajom danych",
            "B. wykorzystywania jednocze\u015bnie kilku port\u00f3w jako jednego \u0142\u0105cza logicznego",
            "C. podejmowania decyzji co do liczby urz\u0105dze\u0144 mog\u0105cych si\u0119 \u0142\u0105czy\u0107 z danym prze\u0142\u0105cznikiem",
            "D. zapobiegaj\u0105cy powstawaniu p\u0119tli w sieci"
        ],
        "goodAnswer": "A. nadawania priorytetu okre\u015blonym rodzajom danych"
    },
    {
        "id": 1209,
        "question": "W systemie Windows Server udost\u0119pnienie folderu jako zasobu sieciowego, widocznego na stacji roboczej w postaci dysku oznaczonego liter\u0105, jest mo\u017cliwe dzi\u0119ki wykonaniu operacji",
        "imageLoc": "",
        "answers": [
            "A. mapowania.",
            "B. defragmentacji.",
            "C. oczyszczania.",
            "D. zerowania."
        ],
        "goodAnswer": "A. mapowania."
    },
    {
        "id": 1210,
        "question": "Jaki zestaw kolor\u00f3w zawiera tryb CMYK?",
        "imageLoc": "",
        "answers": [
            "A. Czerwony, purpurowy, \u017c\u00f3\u0142ty i karmelowy",
            "B. B\u0142\u0119kitny, purpurowy, \u017c\u00f3\u0142ty i czarny",
            "C. Czerwony, zielony, \u017c\u00f3\u0142ty i granatowy",
            "D. Czerwony, zielony, niebieski i czarny"
        ],
        "goodAnswer": "B. B\u0142\u0119kitny, purpurowy, \u017c\u00f3\u0142ty i czarny"
    },
    {
        "id": 1211,
        "question": "W celu powi\u0119kszenia lub zmniejszania ikony na pulpicie nale\u017cy kr\u0119ci\u0107 k\u00f3\u0142kiem myszy, przytrzymuj\u0105c jednocze\u015bnie klawisz:",
        "imageLoc": "",
        "answers": [
            "A. ALT",
            "B. SHIFT",
            "C. CTRL",
            "D. TAB"
        ],
        "goodAnswer": "C. CTRL"
    },
    {
        "id": 1212,
        "question": "Interfejs SATA 2 (3Gb/s) zapewnia przepustowo\u015b\u0107",
        "imageLoc": "",
        "answers": [
            "A. 750 MB/s",
            "B. 150 MB/s",
            "C. 375 MB/s",
            "D. 300 MB/s"
        ],
        "goodAnswer": "C. 375 MB/s"
    },
    {
        "id": 1213,
        "question": "Dysk z systemem plik\u00f3w FAT32, na kt\u00f3rym cz\u0119sto wykonywane s\u0105 operacje kasowania starych plik\u00f3w oraz zapisu nowych plik\u00f3w, ulega:",
        "imageLoc": "",
        "answers": [
            "A. relokacji",
            "B. defragmentacji",
            "C. kolokacji",
            "D. fragmentacji"
        ],
        "goodAnswer": "D. fragmentacji"
    },
    {
        "id": 1214,
        "question": "Liczba BACA zapisana w systemie heksadecymalnym odpowiada liczbie",
        "imageLoc": "",
        "answers": [
            "A. 135316 (8)",
            "B. 1011101011001010 (2)",
            "C. 47821 (10)",
            "D. 1100101010111010 (2)"
        ],
        "goodAnswer": "B. 1011101011001010 (2)"
    },
    {
        "id": 1215,
        "question": "User Datagram Protocol (UDP) jest protoko\u0142em",
        "imageLoc": "",
        "answers": [
            "A. bezpo\u0142\u0105czeniowym warstwy \u0142\u0105cza danych modelu ISO/OSI",
            "B. po\u0142\u0105czeniowym warstwy \u0142\u0105cza danych ISO/OSI",
            "C. bezpo\u0142\u0105czeniowym warstwy transportowej modelu TCP/IP",
            "D. po\u0142\u0105czeniowym warstwy transportowej modelu TCP/IP"
        ],
        "goodAnswer": "C. bezpo\u0142\u0105czeniowym warstwy transportowej modelu TCP/IP"
    },
    {
        "id": 1216,
        "question": "Us\u0142uga serwerowa stosowana do automatycznej konfiguracji interfejs\u00f3w sieciowych stacji klienckich to",
        "imageLoc": "",
        "answers": [
            "A. ICMP (Internet Control Message Protocol)",
            "B. RIP (Routing Information Protocol)",
            "C. SIP (Session Initiation Protocol)",
            "D. DHCP (Dynamic Host Configuration Protocol)"
        ],
        "goodAnswer": "D. DHCP (Dynamic Host Configuration Protocol)"
    },
    {
        "id": 1217,
        "question": "Po pod\u0142\u0105czeniu sprawnej klawiatury do dowolnego z port\u00f3w USB nie mo\u017cna wybra\u0107 awaryjnego trybu uruchomienia systemu Windows. Mimo to, klawiatura po uruchomieniu systemu w normalnym trybie, dzia\u0142a prawid\u0142owo. Wskazuje to na:",
        "imageLoc": "",
        "answers": [
            "A. uszkodzony zasilacz",
            "B. uszkodzone porty USB",
            "C. uszkodzony kontroler klawiatury",
            "D. niepoprawne ustawienia BIOS-u"
        ],
        "goodAnswer": "D. niepoprawne ustawienia BIOS-u"
    },
    {
        "id": 1218,
        "question": "W systemie Linux ustawiono prawa dostepu do folderu okre\u015blone w postaci ci\u0105gu znak\u00f3w rwx--x--x. Jakiej warto\u015bci numerycznej odpowiadaj\u0105 te prawa?",
        "imageLoc": "",
        "answers": [
            "A. 543",
            "B. 711",
            "C. 621",
            "D. 777"
        ],
        "goodAnswer": "B. 711"
    },
    {
        "id": 1219,
        "question": "Aby ikony widoczne na przedstawionym obrazie pojawi\u0142y si\u0119 na Pasku zada\u0144, nale\u017cy w systemie Windows skonfigurowa\u0107",
        "imageLoc": require("../assets/img/1129.png"),
        "answers": [
            "A. obszar powiadomie\u0144",
            "B. obszar Action Center",
            "C. funkcj\u0119 Snap i Peek",
            "D. funkcj\u0119 Poka\u017c pulpit"
        ],
        "goodAnswer": "A. obszar powiadomie\u0144"
    },
    {
        "id": 1220,
        "question": "Za pomoc\u0105 przedstawionego urz\u0105dzenia mo\u017cna przeprowadzi\u0107 diagnostyk\u0119 dzia\u0142ania",
        "imageLoc": require("../assets/img/926.png"),
        "answers": [
            "A. modu\u0142u DAC karty graficznej",
            "B. pami\u0119ci RAM",
            "C. interfejsu SATA",
            "D. zasilacza ATX"
        ],
        "goodAnswer": "D. zasilacza ATX"
    },
    {
        "id": 1221,
        "question": "W systemie Windows uruchomienie us\u0142ugi dotycz\u0105cej wydajno\u015bci komputera realizowane jest za pomoc\u0105 polecenia",
        "imageLoc": "",
        "answers": [
            "A. services.msc",
            "B. perfmon.msc",
            "C. secpol.msc",
            "D. compmgmt.msc"
        ],
        "goodAnswer": "B. perfmon.msc"
    },
    {
        "id": 1222,
        "question": "Aby mie\u0107 pewno\u015b\u0107, \u017ce komputer otrzyma od serwera DHCP konkretny adres IP trzeba na serwerze zdefiniowa\u0107",
        "imageLoc": "",
        "answers": [
            "A. dzier\u017caw\u0119 adresu IP.",
            "B. zastrze\u017cenie adresu IP komputera.",
            "C. pul\u0119 adres\u00f3w IP.",
            "D. wykluczenie adresu IP komputera."
        ],
        "goodAnswer": "B. zastrze\u017cenie adresu IP komputera."
    },
    {
        "id": 1223,
        "question": "W systemach operacyjnych Windows ograniczenie u\u017cytkownikom dost\u0119pu do poszczeg\u00f3lnych katalog\u00f3w, plik\u00f3w lub dysk\u00f3w umo\u017cliwia system plik\u00f3w",
        "imageLoc": "",
        "answers": [
            "A. FAT16",
            "B. NTFS",
            "C. FAT32",
            "D. EXT2"
        ],
        "goodAnswer": "B. NTFS"
    },
    {
        "id": 1224,
        "question": "Kt\u00f3ry zapis jest prawid\u0142owym adresem IPv6?",
        "imageLoc": "",
        "answers": [
            "A. 2001.DB8.BAF.FE94",
            "B. 2001:DB8::BAF:FE94",
            "C. 2001:DB8::BAF::FE94",
            "D. 2001-DB8-BAF-FE94"
        ],
        "goodAnswer": "B. 2001:DB8::BAF:FE94"
    },
    {
        "id": 1225,
        "question": "Kt\u00f3ra fizyczna topologia sieci komputerowej jest przedstawiona na rysunku?",
        "imageLoc": require("../assets/img/1644.png"),
        "answers": [
            "A. Pier\u015bcienia",
            "B. Siatki",
            "C. Hierarchiczna",
            "D. Gwiazdy"
        ],
        "goodAnswer": "D. Gwiazdy"
    },
    {
        "id": 1226,
        "question": "Centralny punkt, z kt\u00f3rego rozprowadzane jest okablowanie szkieletowe, to punkt",
        "imageLoc": "",
        "answers": [
            "A. dost\u0119powy",
            "B. dystrybucyjny",
            "C. abonencki",
            "D. po\u015bredni"
        ],
        "goodAnswer": "B. dystrybucyjny"
    },
    {
        "id": 1227,
        "question": "Z kt\u00f3rym protoko\u0142em s\u0105 zwi\u0105zane poj\u0119cia \"sequence number\" i \"acknowledgment number\"?",
        "imageLoc": require("../assets/img/1940.png"),
        "answers": [
            "A. TCP (Transmission Control Protocol)",
            "B. UDP (User Datagram Protocol)",
            "C. HTTP (Hypertext Transfer Protocol)",
            "D. IP (Internet Protocol)"
        ],
        "goodAnswer": "A. TCP (Transmission Control Protocol)"
    },
    {
        "id": 1228,
        "question": "Komputer o adresie IP 192.168.5.165 z mask\u0105 podsieci 255.255.255.192 pracuje w sieci o adresie",
        "imageLoc": "",
        "answers": [
            "A. 192.168.5.0",
            "B. 192.168.5.192",
            "C. 192.168.5.64",
            "D. 192.168.5.128"
        ],
        "goodAnswer": "D. 192.168.5.128"
    },
    {
        "id": 1229,
        "question": "Program wykorzystywany do przechwytywania analizy ruchu sieciowego, to",
        "imageLoc": "",
        "answers": [
            "A. viewer",
            "B. spywer",
            "C. sniffer",
            "D. keylogger"
        ],
        "goodAnswer": "C. sniffer"
    },
    {
        "id": 1230,
        "question": "Serwisant wykona\u0142 w ramach zlecenia czynno\u015bci wymienione w tabeli. Koszt zlecenia obejmuje cen\u0119 us\u0142ug zawartych w tabeli oraz koszt pracy serwisanta, kt\u00f3rego stawka godzinowa wynosi 60,00 z\u0142 netto. Ustal ca\u0142kowity koszt zlecenia brutto. Stawka podatku VAT na us\u0142ugi wynosi 23%.",
        "imageLoc": require("../assets/img/1754.png"),
        "answers": [
            "A. 492,00 z\u0142",
            "B. 455,20 z\u0142",
            "C. 400,00 z\u0142",
            "D. 436,80 z\u0142"
        ],
        "goodAnswer": "A. 492,00 z\u0142"
    },
    {
        "id": 1231,
        "question": "Przedstawiony schemat przedstawia zasad\u0119 dzia\u0142ania",
        "imageLoc": require("../assets/img/876.png"),
        "answers": [
            "A. plotera graweruj\u0105cego",
            "B. skanera p\u0142askiego",
            "C. drukarki 3D",
            "D. drukarki laserowej"
        ],
        "goodAnswer": "B. skanera p\u0142askiego"
    },
    {
        "id": 1232,
        "question": "Dziedziczenie uprawnie\u0144 polega na:",
        "imageLoc": "",
        "answers": [
            "A. przeniesieniu uprawnie\u0144 z obiektu nadrz\u0119dnego na obiekt podrz\u0119dny",
            "B. nadawaniu uprawnie\u0144 u\u017cytkownikowi przez administratora",
            "C. przeniesieniu uprawnie\u0144 z obiektu podrz\u0119dnego na obiekt nadrz\u0119dny",
            "D. przekazywaniu uprawnie\u0144 jednego u\u017cytkownika drugiemu"
        ],
        "goodAnswer": "A. przeniesieniu uprawnie\u0144 z obiektu nadrz\u0119dnego na obiekt podrz\u0119dny"
    },
    {
        "id": 1233,
        "question": "Przedstawiony na rysunku symbol graficzny oznacza opakowanie",
        "imageLoc": require("../assets/img/289.png"),
        "answers": [
            "A. wyprodukowane z surowc\u00f3w wt\u00f3rnych",
            "B. wielokrotnego u\u017cytku",
            "C. zgodne z norm\u0105 TCO",
            "D. nadaj\u0105cego si\u0119 do recyklingu"
        ],
        "goodAnswer": "D. nadaj\u0105cego si\u0119 do recyklingu"
    },
    {
        "id": 1234,
        "question": "Co oznacza jednostka dpi podawana w parametrach katalogowych skaner\u00f3w i drukarek?",
        "imageLoc": "",
        "answers": [
            "A. Punkty na milimetr",
            "B. G\u0119sto\u015b\u0107 optyczn\u0105",
            "C. Punkty na centymetr",
            "D. Punkty na cal"
        ],
        "goodAnswer": "D. Punkty na cal"
    },
    {
        "id": 1235,
        "question": "Watomierz jest stosowany do pomiaru",
        "imageLoc": "",
        "answers": [
            "A. rezystancji",
            "B. nat\u0119\u017cenia pr\u0105du elektrycznego",
            "C. mocy czynnej",
            "D. napi\u0119cia pr\u0105du elektrycznego"
        ],
        "goodAnswer": "C. mocy czynnej"
    },
    {
        "id": 1236,
        "question": "ACPI jest interfejsem umo\u017cliwiaj\u0105cym",
        "imageLoc": "",
        "answers": [
            "A. transfer danych pomi\u0119dzy dyskiem twardym a nap\u0119dem optycznym",
            "B. zarz\u0105dzanie konfiguracj\u0105 i energi\u0105 dostarczan\u0105 do poszczeg\u00f3lnych urz\u0105dze\u0144 komputera",
            "C. konwersj\u0119 sygna\u0142u analogowego na cyfrowy",
            "D. przeprowadzenie testu poprawno\u015bci dzia\u0142ania podstawowych podzespo\u0142\u00f3w komputera, np. procesora."
        ],
        "goodAnswer": "B. zarz\u0105dzanie konfiguracj\u0105 i energi\u0105 dostarczan\u0105 do poszczeg\u00f3lnych urz\u0105dze\u0144 komputera"
    },
    {
        "id": 1237,
        "question": "Do harmonogramowania zada\u0144 w systemie Linux s\u0142u\u017cy polecenie",
        "imageLoc": "",
        "answers": [
            "A. cron",
            "B. shred",
            "C. top",
            "D. taskschd"
        ],
        "goodAnswer": "A. cron"
    },
    {
        "id": 1238,
        "question": "Kt\u00f3re narz\u0119dzie najlepiej wykorzysta\u0107 do lekkiego odgi\u0119cia blachy obudowy komputera oraz zamocowania \u015bruby monta\u017cowej w trudno dost\u0119pnym miejscu?",
        "imageLoc": require("../assets/img/2037.png"),
        "answers": [
            "A. A",
            "B. B",
            "C. C",
            "D. D"
        ],
        "goodAnswer": "D. D"
    },
    {
        "id": 1239,
        "question": "Wska\u017c zdanie nieprawdziwe:",
        "imageLoc": "",
        "answers": [
            "A. IEEE 802.11 to nazwa standardu Wireless LAN",
            "B. Awaria w\u0119z\u0142a w topologii gwiazdy spowoduje parali\u017c sieci",
            "C. Stron\u0105 aktywn\u0105 w architekturze klient-serwer jest klient",
            "D. Zalet\u0105 topologii pier\u015bcienia jest ma\u0142e zu\u017cycie kabla"
        ],
        "goodAnswer": "B. Awaria w\u0119z\u0142a w topologii gwiazdy spowoduje parali\u017c sieci"
    },
    {
        "id": 1240,
        "question": "W pomieszczeniu biurowym nale\u017cy zainstalowa\u0107 5 podw\u00f3jnych gniazd abonenckich. \u015arednia odleg\u0142o\u015b\u0107 gniazda abonenckiego od lokalnego punktu dystrybucyjnego wynosi 10m. Jaki b\u0119dzie przybli\u017cony koszt zakupu kabla UTP kategorii 5e przeznaczonego do budowy sieci lokalnej, je\u017celi cena brutto 1m kabla UTP kategorii 5e wynosi 1,60 z\u0142?",
        "imageLoc": "",
        "answers": [
            "A. 160,00 z\u0142",
            "B. 800,00 z\u0142",
            "C. 80,00 z\u0142",
            "D. 320,00 z\u0142"
        ],
        "goodAnswer": "A. 160,00 z\u0142"
    },
    {
        "id": 1241,
        "question": "Na rysunku przedstawiono",
        "imageLoc": require("../assets/img/1029.png"),
        "answers": [
            "A. kart\u0119 sieciow\u0105",
            "B. patch panel",
            "C. prze\u0142\u0105cznik",
            "D. koncentrator"
        ],
        "goodAnswer": "B. patch panel"
    },
    {
        "id": 1242,
        "question": "Kt\u00f3ry adres podsieci jest prawid\u0142owy po po\u017cyczeniu 4 bit\u00f3w z cz\u0119\u015bci hosta z adresu klasowego 192.168.1.0?",
        "imageLoc": "",
        "answers": [
            "A. 192.168.1.48/28",
            "B. 192.168.1.88/27",
            "C. 192.168.1.80/27",
            "D. 192.168.1.44/28"
        ],
        "goodAnswer": "A. 192.168.1.48/28"
    },
    {
        "id": 1243,
        "question": "Pierwsze znaki heksadecymalne adresu IPv6 typu link-local to",
        "imageLoc": "",
        "answers": [
            "A. FF30",
            "B. FE80",
            "C. 2000",
            "D. 3000"
        ],
        "goodAnswer": "B. FE80"
    },
    {
        "id": 1244,
        "question": "Jakie systemy operacyjne infekuje wirus MS Blaster?",
        "imageLoc": "",
        "answers": [
            "A. MS Windows 2000/NT/XP",
            "B. DOS",
            "C. MS Windows 9x",
            "D. Linux"
        ],
        "goodAnswer": "A. MS Windows 2000/NT/XP"
    },
    {
        "id": 1245,
        "question": "Do bezpo\u015bredniego po\u0142\u0105czenia ze sob\u0105 dw\u00f3ch komputer\u00f3w w przewodowej sieci LAN nale\u017cy u\u017cy\u0107",
        "imageLoc": "",
        "answers": [
            "A. kabla \u015bwiat\u0142owodowego i jedn\u0105 kart\u0119 sieciow\u0105 w jednym komputerze",
            "B. kabla sieciowego patch-cord bez krosowania i kabla Centronics",
            "C. kabla USB i po jednej karcie sieciowej w ka\u017cdym komputerze",
            "D. kabla sieciowego cross-over i po jednej karcie sieciowej w ka\u017cdym komputerze"
        ],
        "goodAnswer": "D. kabla sieciowego cross-over i po jednej karcie sieciowej w ka\u017cdym komputerze"
    },
    {
        "id": 1246,
        "question": "W systemie Linux informacje o okresie wa\u017cno\u015bci has\u0142a s\u0105 zapisane w pliku",
        "imageLoc": "",
        "answers": [
            "A. grub",
            "B. shadow",
            "C. bash",
            "D. passwd"
        ],
        "goodAnswer": "B. shadow"
    },
    {
        "id": 1247,
        "question": "Do kt\u00f3rego urz\u0105dzenia nale\u017cy pod\u0142\u0105czy\u0107 komputery, aby pracowa\u0142y w r\u00f3\u017cnych domenach rozg\u0142oszeniowych?",
        "imageLoc": "",
        "answers": [
            "A. Regeneratora",
            "B. Koncentratora",
            "C. Mostu",
            "D. Rutera"
        ],
        "goodAnswer": "D. Rutera"
    },
    {
        "id": 1248,
        "question": "Zwyk\u0142y u\u017cytkownik systemu Linux, kt\u00f3ry chce usun\u0105\u0107 konto innego u\u017cytkownika razem z jego katalogiem domowym, powinien wyda\u0107 polecenie",
        "imageLoc": "",
        "answers": [
            "A. sudo userdel nazwa_u\u017cytkownika",
            "B. userdel -d nazwa_u\u017cytkownika",
            "C. sudo userdel -r nazwa_u\u017cytkowania",
            "D. userdel nazwa_u\u017cytkownika"
        ],
        "goodAnswer": "C. sudo userdel -r nazwa_u\u017cytkowania"
    },
    {
        "id": 1249,
        "question": "Kt\u00f3ry podzesp\u00f3\u0142 NIE JEST kompatybilny z p\u0142yt\u0105 g\u0142\u00f3wn\u0105 MSI A320M Pro-VD-S socket AM4, 1x PCI-Ex16, 2x PCI-Ex1, 4x SATA III, 2x DDR4- max 32 GB, 1x D-SUB, 1x DVI-D, ATX?",
        "imageLoc": "",
        "answers": [
            "A. Pami\u0119\u0107 RAM Crucial 8GB DDR4 2400MHz Ballistix Sport LT CL16",
            "B. Dysk twardy 500GB M.2 SSD S700 3D NAND",
            "C. Karta graficzna Radeon RX 570 PCI-Ex16 4GB 256-bit 1310MHz HDMI, DVI, DP",
            "D. Procesor AMD Ryzen 5 1600, 3.2GHz, s-AM4, 16MB"
        ],
        "goodAnswer": "B. Dysk twardy 500GB M.2 SSD S700 3D NAND"
    },
    {
        "id": 1250,
        "question": "Za pomoc\u0105 przedstawionego urz\u0105dzenia mo\u017cna przeprowadzi\u0107 diagnostyk\u0119 dzia\u0142ania",
        "imageLoc": require("../assets/img/453.png"),
        "answers": [
            "A. pami\u0119ci RAM",
            "B. interfejsu SATA",
            "C. modu\u0142u DAC karty graficznej",
            "D. zasilacza ATX"
        ],
        "goodAnswer": "D. zasilacza ATX"
    },
    {
        "id": 1251,
        "question": "Napi\u0119cie dostarczane do poszczeg\u00f3lnych element\u00f3w komputera w zasilaczu komputerowym w standardzie ATX jest zmniejszane z warto\u015bci 230 V mi\u0119dzy innymi do warto\u015bci",
        "imageLoc": "",
        "answers": [
            "A. 130 V",
            "B. 20 V",
            "C. 4 V",
            "D. 12 V"
        ],
        "goodAnswer": "D. 12 V"
    },
    {
        "id": 1252,
        "question": "Kt\u00f3ra z topologii fizycznych sieci komputerowej jest przedstawiona na rysunku?",
        "imageLoc": require("../assets/img/1445.png"),
        "answers": [
            "A. Gwiazdy rozszerzonej",
            "B. Podw\u00f3jnego pier\u015bcienia",
            "C. Siatki",
            "D. Magistrali"
        ],
        "goodAnswer": "B. Podw\u00f3jnego pier\u015bcienia"
    },
    {
        "id": 1253,
        "question": "Kt\u00f3ry z protoko\u0142\u00f3w jest protoko\u0142em po\u0142\u0105czeniowym?",
        "imageLoc": "",
        "answers": [
            "A. IP",
            "B. TCP",
            "C. UDP",
            "D. ARP"
        ],
        "goodAnswer": "B. TCP"
    },
    {
        "id": 1254,
        "question": "Interfejsem wewn\u0119trznym komputera jest",
        "imageLoc": "",
        "answers": [
            "A. D-SUB",
            "B. PCMCIA",
            "C. IrDA",
            "D. AGP"
        ],
        "goodAnswer": "D. AGP"
    },
    {
        "id": 1255,
        "question": "Narz\u0119dziem wbudowanym w systemie Windows, wykorzystywanym do diagnozowania problem\u00f3w zwi\u0105zanych z dzia\u0142aniem animacji w grach lub odtwarzaniem film\u00f3w, jest",
        "imageLoc": "",
        "answers": [
            "A. userpasswords2",
            "B. dxdiag",
            "C. cacls",
            "D. fsmgmt"
        ],
        "goodAnswer": "B. dxdiag"
    },
    {
        "id": 1256,
        "question": "Jak skonfigurowa\u0107 zapor\u0119 Windows, zachowuj\u0105c zasady bezpiecze\u0144stwa, aby za pomoc\u0105 polecenia ping by\u0142o mo\u017cliwe sprawdzenie poprawno\u015bci komunikacji z innymi urz\u0105dzeniami pracuj\u0105cymi w sieci?",
        "imageLoc": "",
        "answers": [
            "A. Skonfigurowa\u0107 regu\u0142y dotycz\u0105ce protoko\u0142u ICMP",
            "B. Skonfigurowa\u0107 regu\u0142y dotycz\u0105ce protoko\u0142u IGMP",
            "C. Skonfigurowa\u0107 regu\u0142y dotycz\u0105ce protoko\u0142u IP",
            "D. Skonfigurowa\u0107 regu\u0142y dotycz\u0105ce protoko\u0142u TCP"
        ],
        "goodAnswer": "A. Skonfigurowa\u0107 regu\u0142y dotycz\u0105ce protoko\u0142u ICMP"
    },
    {
        "id": 1257,
        "question": "Adres IP v.4 ma d\u0142ugo\u015b\u0107",
        "imageLoc": "",
        "answers": [
            "A. 16 bit\u00f3w",
            "B. 2 bajty",
            "C. 32 bit\u00f3w",
            "D. 10 bajt\u00f3w"
        ],
        "goodAnswer": "C. 32 bit\u00f3w"
    },
    {
        "id": 1258,
        "question": "Niekt\u00f3re systemy operacyjne s\u0105 wielodost\u0119pne (multiuser). Systemy takie",
        "imageLoc": "",
        "answers": [
            "A. opr\u00f3cz wielozadaniowo\u015bci z wyw\u0142aszczeniem realizuj\u0105 funkcj\u0119 przydzielania czasu u\u017cytkownikom",
            "B. steruj\u0105 uk\u0142adem (klasterem) niezale\u017cnych komputer\u00f3w",
            "C. stosowane s\u0105 g\u0142\u00f3wnie w przemy\u015ble i systemach sterowania",
            "D. r\u00f3wnocze\u015bnie wykonuj\u0105 wiele program\u00f3w (zada\u0144)"
        ],
        "goodAnswer": "A. opr\u00f3cz wielozadaniowo\u015bci z wyw\u0142aszczeniem realizuj\u0105 funkcj\u0119 przydzielania czasu u\u017cytkownikom"
    },
    {
        "id": 1259,
        "question": "Kt\u00f3re bity w 48 bitowym adresie sprz\u0119towym MAC s\u0105 identyfikatorem producenta?",
        "imageLoc": "",
        "answers": [
            "A. Pierwsze 24 bity.",
            "B. Pierwsze 8 bit\u00f3w.",
            "C. Ostatnie 24 bity.",
            "D. Ostatnie 8 bit\u00f3w."
        ],
        "goodAnswer": "A. Pierwsze 24 bity."
    },
    {
        "id": 1260,
        "question": "U\u017cytkownik zamierza zainstalowa\u0107 32-bitowy system operacyjny Windows 7. Ile minimalnie pami\u0119ci RAM musi posiada\u0107 komputer, aby by\u0142a mo\u017cliwa praca w trybie graficznym?",
        "imageLoc": "",
        "answers": [
            "A. 1 GB",
            "B. 512 MB",
            "C. 2 GB",
            "D. 256 MB"
        ],
        "goodAnswer": "A. 1 GB"
    },
    {
        "id": 1261,
        "question": "Przedstawiony na rysunku wtyk (z\u0142\u0105cze m\u0119skie modularne) jest zako\u0144czeniem kabla",
        "imageLoc": require("../assets/img/1420.png"),
        "answers": [
            "A. F/UTP",
            "B. \u015bwiat\u0142owodowego",
            "C. koncentrycznego",
            "D. U/UTP"
        ],
        "goodAnswer": "A. F/UTP"
    },
    {
        "id": 1262,
        "question": "Przedstawiony symbol graficzny oznacza",
        "imageLoc": require("../assets/img/190.png"),
        "answers": [
            "A. generator d\u017awi\u0119ku",
            "B. filtr dolnoprzepustowy",
            "C. przetwornik cyfrowo-analogowy",
            "D. przetwornik analogowo-cyfrowy"
        ],
        "goodAnswer": "D. przetwornik analogowo-cyfrowy"
    },
    {
        "id": 1263,
        "question": "W systemie Windows, wykorzystuj\u0105c wiersz polece\u0144 do zmiany partycji FAT na partycj\u0119 NTFS bez utraty zawartych na niej danych, nale\u017cy u\u017cy\u0107 polecenia",
        "imageLoc": "",
        "answers": [
            "A. format",
            "B. recover",
            "C. change",
            "D. convert"
        ],
        "goodAnswer": "D. convert"
    },
    {
        "id": 1264,
        "question": "Polecenie Gpresult",
        "imageLoc": "",
        "answers": [
            "A. wy\u015bwietla informacje o kontrolerze",
            "B. wy\u015bwietla wynikowy zestaw zasad dla u\u017cytkownika lub komputera",
            "C. aktualizuje ustawienia zasad grupy",
            "D. przywraca domy\u015blne zasady grup dla kontrolera"
        ],
        "goodAnswer": "B. wy\u015bwietla wynikowy zestaw zasad dla u\u017cytkownika lub komputera"
    },
    {
        "id": 1265,
        "question": "Kt\u00f3ry przyrz\u0105d pomiarowy s\u0142u\u017cy do sprawdzenia warto\u015bci napi\u0119\u0107 w zasilaczu?",
        "imageLoc": "",
        "answers": [
            "A. Amperomierz",
            "B. Watomierz",
            "C. Omomierz",
            "D. Woltomierz"
        ],
        "goodAnswer": "D. Woltomierz"
    },
    {
        "id": 1266,
        "question": "Co jest przyczyn\u0105 pojawienia si\u0119 na ekranie komputera komunikatu, \u017ce system wykry\u0142 konflikt adres\u00f3w IP?",
        "imageLoc": "",
        "answers": [
            "A. W sieci lokalnej nie dzia\u0142a us\u0142uga DHCP",
            "B. W ustawieniach protoko\u0142u TCP/IP jest b\u0142\u0119dny adres bramy domy\u015blnej",
            "C. Adres IP komputera jest spoza zakresu adres\u00f3w sieci lokalnej",
            "D. Inne urz\u0105dzenie sieciowe ma nadany ten sam adres IP co komputer"
        ],
        "goodAnswer": "D. Inne urz\u0105dzenie sieciowe ma nadany ten sam adres IP co komputer"
    },
    {
        "id": 1267,
        "question": "Na schemacie p\u0142yty g\u0142\u00f3wnej, znajduj\u0105cym si\u0119 w dokumentacji laptopa, numerami 8 i 9 oznaczono z\u0142\u0105cza",
        "imageLoc": require("../assets/img/2111.png"),
        "answers": [
            "A. cyfrowe audio",
            "B. USB 3.",
            "C. Serial ATA",
            "D. M.2"
        ],
        "goodAnswer": "C. Serial ATA"
    },
    {
        "id": 1268,
        "question": "Wyj\u015bcie s\u0142uchawek lub g\u0142o\u015bnik\u00f3w minijack oznaczone jest na karcie d\u017awi\u0119kowej kolorem",
        "imageLoc": "",
        "answers": [
            "A. zielonym",
            "B. niebieskim",
            "C. \u017c\u00f3\u0142tym",
            "D. r\u00f3\u017cowym"
        ],
        "goodAnswer": "A. zielonym"
    },
    {
        "id": 1269,
        "question": "Kt\u00f3ry adres IP nale\u017cy do klasy A?",
        "imageLoc": "",
        "answers": [
            "A. 125.11.0.7",
            "B. 217.12.45.1",
            "C. 239.0.255.15",
            "D. 129.10.0.17"
        ],
        "goodAnswer": "A. 125.11.0.7"
    },
    {
        "id": 1270,
        "question": "Na rysunku przedstawiono schemat zasady dzia\u0142ania",
        "imageLoc": require("../assets/img/1521.png"),
        "answers": [
            "A. kontrolera USB",
            "B. modemu",
            "C. karty d\u017awi\u0119kowej",
            "D. karty graficznej"
        ],
        "goodAnswer": "C. karty d\u017awi\u0119kowej"
    },
    {
        "id": 1271,
        "question": "Zastosowanie skr\u0119tki kategorii 6 (CAT 6) o d\u0142ugo\u015bci 20 metr\u00f3w w sieci LAN wskazuje na jej maksymaln\u0105 przepustowo\u015b\u0107 r\u00f3wn\u0105",
        "imageLoc": "",
        "answers": [
            "A. 100 Mb/s",
            "B. 10 Mb/s",
            "C. 100 Gb/s",
            "D. 10 Gb/s"
        ],
        "goodAnswer": "D. 10 Gb/s"
    },
    {
        "id": 1272,
        "question": "Ile bit\u00f3w ma adres logiczny IPv6?",
        "imageLoc": "",
        "answers": [
            "A. 32",
            "B. 64",
            "C. 128",
            "D. 16"
        ],
        "goodAnswer": "C. 128"
    },
    {
        "id": 1273,
        "question": "Do sprawdzenia stanu pod\u0142\u0105czonego kabla i zdiagnozowania odleg\u0142o\u015bci od miejsca awarii sieci nale\u017cy wykorzysta\u0107 funkcj\u0119 prze\u0142\u0105cznika oznaczon\u0105 numerem",
        "imageLoc": require("../assets/img/2130.png"),
        "answers": [
            "A. 4",
            "B. 3",
            "C. 2",
            "D. 1"
        ],
        "goodAnswer": "B. 3"
    },
    {
        "id": 1274,
        "question": "Do oznaczenia iloczynu logicznego jest stosowany sp\u00f3jnik",
        "imageLoc": "",
        "answers": [
            "A. AND",
            "B. OR",
            "C. NOT",
            "D. XOR"
        ],
        "goodAnswer": "A. AND"
    },
    {
        "id": 1275,
        "question": "W drukarce laserowej do utrwalania wydruku wykorzystuje si\u0119",
        "imageLoc": "",
        "answers": [
            "A. ta\u015bmy transmisyjne",
            "B. g\u0142owice piezoelektryczne",
            "C. promienie lasera",
            "D. rozgrzane wa\u0142ki"
        ],
        "goodAnswer": "D. rozgrzane wa\u0142ki"
    },
    {
        "id": 1276,
        "question": "W pomieszczeniu biurowym nale\u017cy zainstalowa\u0107 5 podw\u00f3jnych gniazd abonenckich. \u015arednia odleg\u0142o\u015b\u0107 gniazda abonenckiego od lokalnego punktu dystrybucyjnego wynosi 10m. Jaki b\u0119dzie przybli\u017cony koszt zakupu kabla UTP kategorii 5e przeznaczonego do budowy sieci lokalnej, je\u017celi cena brutto 1m kabla UTP kategorii 5e wynosi 1,60 z\u0142?",
        "imageLoc": "",
        "answers": [
            "A. 160,00 z\u0142",
            "B. 320,00 z\u0142",
            "C. 800,00 z\u0142",
            "D. 80,00 z\u0142"
        ],
        "goodAnswer": "A. 160,00 z\u0142"
    },
    {
        "id": 1277,
        "question": "Wska\u017c czynno\u015b\u0107 konserwacyjn\u0105, kt\u00f3r\u0105 nale\u017cy wykona\u0107, je\u015bli na wydruku drukarki atramentowej widoczne s\u0105 smugi, kolory wydruku s\u0105 niew\u0142a\u015bciwe lub brakuje niekt\u00f3rych kolor\u00f3w.",
        "imageLoc": "",
        "answers": [
            "A. Kalibrowanie przesuwu papieru.",
            "B. Czyszczenie g\u0142owicy drukuj\u0105cej.",
            "C. Wymiana ta\u015bmy barwi\u0105cej.",
            "D. Aktualizacja oprogramowania drukarki."
        ],
        "goodAnswer": "B. Czyszczenie g\u0142owicy drukuj\u0105cej."
    },
    {
        "id": 1278,
        "question": "U\u017cytkownik, kt\u00f3ry chce drukowa\u0107 dokumenty jednocze\u015bnie w oryginale i trzech kopiach na papierze samokopiuj\u0105cym, powinien do tego celu zakupi\u0107 drukark\u0119",
        "imageLoc": "",
        "answers": [
            "A. laserow\u0105",
            "B. atramentow\u0105",
            "C. ig\u0142ow\u0105",
            "D. termotransferow\u0105"
        ],
        "goodAnswer": "C. ig\u0142ow\u0105"
    },
    {
        "id": 1279,
        "question": "Do wykonania obrazu dysku twardego mo\u017cna u\u017cy\u0107 programu",
        "imageLoc": "",
        "answers": [
            "A. SpeedFan",
            "B. HW Monitor",
            "C. Acronis True Image",
            "D. Digital Image Recovery"
        ],
        "goodAnswer": "C. Acronis True Image"
    },
    {
        "id": 1280,
        "question": "Podczas normalnego dzia\u0142ania systemu operacyjnego w laptopie pojawi\u0142 si\u0119 komunikat o konieczno\u015bci formatowania wewn\u0119trznego dysku twardego. Wskazuje on na:",
        "imageLoc": "",
        "answers": [
            "A. przegrzewanie si\u0119 procesora",
            "B. uszkodzon\u0105 pami\u0119\u0107 RAM",
            "C. niezainicjowany lub nieprzygotowany do pracy no\u015bnik",
            "D. b\u0142\u0119dy systemu operacyjnego spowodowane szkodliwym oprogramowaniem"
        ],
        "goodAnswer": "C. niezainicjowany lub nieprzygotowany do pracy no\u015bnik"
    },
    {
        "id": 1281,
        "question": "Przyczyn\u0105 awarii drukarki ig\u0142owej mo\u017ce by\u0107 usterka",
        "imageLoc": "",
        "answers": [
            "A. elektromagnesu",
            "B. elektrody \u0142aduj\u0105cej",
            "C. dyszy",
            "D. termorezystora"
        ],
        "goodAnswer": "A. elektromagnesu"
    },
    {
        "id": 1282,
        "question": "Kt\u00f3ra licencja ma charakter grupowy oraz umo\u017cliwia instytucjom komercyjnym lub organizacjom edukacyjnym, pa\u0144stwowym, charytatywnym zakup na korzystnych warunkach wi\u0119kszej liczby oprogramowania firmy Microsoft?",
        "imageLoc": "",
        "answers": [
            "A. APSL",
            "B. MPL",
            "C. MOLP",
            "D. OEM"
        ],
        "goodAnswer": "C. MOLP"
    },
    {
        "id": 1283,
        "question": "Rozpowszechniona forma oprogramowania zgodna z zasad\u0105 \"najpierw wypr\u00f3buj, a potem kup\", to",
        "imageLoc": "",
        "answers": [
            "A. OEM",
            "B. Software",
            "C. Shareware",
            "D. Freeware"
        ],
        "goodAnswer": "C. Shareware"
    },
    {
        "id": 1284,
        "question": "Na komputerze pod\u0142\u0105czonym do Internetu, w programie antywirusowym baz\u0119 wirus\u00f3w nale\u017cy aktualizowa\u0107 co najmniej",
        "imageLoc": "",
        "answers": [
            "A. raz w tygodniu",
            "B. raz do roku",
            "C. raz dziennie",
            "D. raz w miesi\u0105cu"
        ],
        "goodAnswer": "C. raz dziennie"
    },
    {
        "id": 1285,
        "question": "Liczba szesnastkowa 29A zapisana w systemie binarnym b\u0119dzie mia\u0142a posta\u0107:",
        "imageLoc": "",
        "answers": [
            "A. 1000011010",
            "B. 1010011010",
            "C. 1001011010",
            "D. 1010010110"
        ],
        "goodAnswer": "B. 1010011010"
    },
    {
        "id": 1286,
        "question": "Przedstawione narz\u0119dzie jest stosowane do",
        "imageLoc": require("../assets/img/1284.png"),
        "answers": [
            "A. lokalizacji uszkodze\u0144 w\u0142\u00f3kien \u015bwiat\u0142owodowych.",
            "B. zaciskania wtyk\u00f3w RJ11 i RJ45.",
            "C. spawania przewod\u00f3w \u015bwiat\u0142owodowych.",
            "D. zdejmowania izolacji okablowani"
        ],
        "goodAnswer": "A. lokalizacji uszkodze\u0144 w\u0142\u00f3kien \u015bwiat\u0142owodowych."
    },
    {
        "id": 1287,
        "question": "Aby umo\u017cliwi\u0107 wymian\u0119 danych pomi\u0119dzy dwoma r\u00f3\u017cnymi sieciami nale\u017cy zastosowa\u0107",
        "imageLoc": "",
        "answers": [
            "A. most",
            "B. prze\u0142\u0105cznik",
            "C. router",
            "D. koncentrator"
        ],
        "goodAnswer": "C. router"
    },
    {
        "id": 1288,
        "question": "W celu bezpiecznego po\u0142\u0105czenia z serwerem firmowym przez Internet, tak aby mie\u0107 dost\u0119p do zasob\u00f3w firmowych, nale\u017cy zastosowa\u0107 oprogramowanie klienta",
        "imageLoc": "",
        "answers": [
            "A. VLAN (Virtual Local Area Network)",
            "B. VPN (Virtual Private Network)",
            "C. WLAN (Wireless Local Area Network)",
            "D. NAP (Network Access Protection)"
        ],
        "goodAnswer": "B. VPN (Virtual Private Network)"
    },
    {
        "id": 1289,
        "question": "Na rysunku karta rozszerze\u0144 oznaczona jest numerem",
        "imageLoc": require("../assets/img/2.png"),
        "answers": [
            "A. 6",
            "B. 4",
            "C. 1",
            "D. 7"
        ],
        "goodAnswer": "B. 4"
    },
    {
        "id": 1290,
        "question": "Na schemacie obrazuj\u0105cym zasad\u0119 dzia\u0142ania monitora plazmowego numerem 6 oznaczono",
        "imageLoc": require("../assets/img/1395.png"),
        "answers": [
            "A. elektrody wy\u015bwietlacza",
            "B. warstw\u0119 fosforow\u0105",
            "C. warstw\u0119 dielektryka",
            "D. elektrody adresuj\u0105ce"
        ],
        "goodAnswer": "D. elektrody adresuj\u0105ce"
    },
    {
        "id": 1291,
        "question": "Kt\u00f3ry z protoko\u0142\u00f3w jest stosowany w telefonii internetowej?",
        "imageLoc": "",
        "answers": [
            "A. SIP",
            "B. NetBEUI",
            "C. FTP",
            "D. HTTP"
        ],
        "goodAnswer": "A. SIP"
    },
    {
        "id": 1292,
        "question": "W systemie Windows przypadkowo usuni\u0119to konto u\u017cytkownika bez usuni\u0119cia katalogu domowego. Odzyskanie niezaszyfrowanych danych z katalogu domowego u\u017cytkownika jest",
        "imageLoc": "",
        "answers": [
            "A. mo\u017cliwe wy\u0142\u0105cznie przy u\u017cyciu programu typu recovery",
            "B. mo\u017cliwe za pomoc\u0105 konta o uprawnieniach administratorskich",
            "C. niemo\u017cliwe, dane s\u0105 bezpowrotnie utracone wraz z kontem",
            "D. niemo\u017cliwe, poniewa\u017c zabezpieczenia systemowe blokuj\u0105 dane"
        ],
        "goodAnswer": "B. mo\u017cliwe za pomoc\u0105 konta o uprawnieniach administratorskich"
    },
    {
        "id": 1293,
        "question": "Jednoczesne zwi\u0119kszenie szybko\u015bci operacji (zapis/odczyt) i bezpiecze\u0144stwa przechowywania danych umo\u017cliwia macierz dyskowa",
        "imageLoc": "",
        "answers": [
            "A. RAID 0",
            "B. RAID 3",
            "C. RAID 50",
            "D. RAID 1"
        ],
        "goodAnswer": "C. RAID 50"
    },
    {
        "id": 1294,
        "question": "Jednostka oblicze\u0144 zmiennoprzecinkowych to",
        "imageLoc": "",
        "answers": [
            "A. FPU",
            "B. ALU",
            "C. AND",
            "D. RPU"
        ],
        "goodAnswer": "A. FPU"
    },
    {
        "id": 1295,
        "question": "Aby z\u0142o\u017cy\u0107 komputer z podzespo\u0142\u00f3w, wykorzystuj\u0105c obudow\u0119 SFF, nale\u017cy wybra\u0107 p\u0142yt\u0119 g\u0142\u00f3wn\u0105 w standardzie",
        "imageLoc": "",
        "answers": [
            "A. BTX",
            "B. mini ITX",
            "C. WTX",
            "D. E-ATX"
        ],
        "goodAnswer": "B. mini ITX"
    },
    {
        "id": 1296,
        "question": "Wyr\u00f3wnanie tekstu do prawego i lewego marginesu nazywa si\u0119",
        "imageLoc": "",
        "answers": [
            "A. justowaniem",
            "B. kapitalikiem",
            "C. wersalikiem",
            "D. interlini\u0105"
        ],
        "goodAnswer": "A. justowaniem"
    },
    {
        "id": 1297,
        "question": "Aby odzyska\u0107 utracone dane w systemach rodziny Windows, nale\u017cy zastosowa\u0107 polecenie",
        "imageLoc": "",
        "answers": [
            "A. reboot",
            "B. recover",
            "C. relase",
            "D. renew"
        ],
        "goodAnswer": "B. recover"
    },
    {
        "id": 1298,
        "question": "Na rysunku przedstawiono narz\u0119dzie systemu Windows 7 przeznaczone do",
        "imageLoc": require("../assets/img/598.png"),
        "answers": [
            "A. tworzenia kopii systemu",
            "B. rozwi\u0105zywania problem\u00f3w z systemem",
            "C. konfiguracji ustawie\u0144 u\u017cytkownika",
            "D. przeprowadzania migracji systemu"
        ],
        "goodAnswer": "C. konfiguracji ustawie\u0144 u\u017cytkownika"
    },
    {
        "id": 1299,
        "question": "Standardem komunikacji pomi\u0119dzy skanerem a programem graficznym jest",
        "imageLoc": "",
        "answers": [
            "A. OPC",
            "B. TWAIN",
            "C. USB",
            "D. SCAN"
        ],
        "goodAnswer": "B. TWAIN"
    },
    {
        "id": 1300,
        "question": "Na rysunku przedstawiono konfiguracj\u0119 urz\u0105dzenia. Do kt\u00f3rych port\u00f3w nale\u017cy pod\u0142\u0105czy\u0107 serwer o adresie IP 192.168.20.254/24 oraz stacj\u0119 robocz\u0105 o adresie IP 192.168.20.10/24, aby zapewni\u0107 komunikacj\u0119 tych urz\u0105dze\u0144 w sieci?",
        "imageLoc": require("../assets/img/1832.png"),
        "answers": [
            "A. Do port\u00f3w 3 i 4",
            "B. Do port\u00f3w 1 i 3",
            "C. Do port\u00f3w 1 i 2",
            "D. Do port\u00f3w 2 i 3"
        ],
        "goodAnswer": "B. Do port\u00f3w 1 i 3"
    },
    {
        "id": 1301,
        "question": "Kt\u00f3ry zakres adres\u00f3w IPv4 mo\u017cna wykorzysta\u0107 jako adresy prywatne w sieci lokalnej?",
        "imageLoc": "",
        "answers": [
            "A. 127.0.0.0 \u00f7 127.255.255.255",
            "B. 200.186.0.0 \u00f7 200.186.255.255",
            "C. 168.172.0.0 \u00f7 168.172.255.255",
            "D. 172.16. 0.0 \u00f7 172.31.255.255"
        ],
        "goodAnswer": "D. 172.16. 0.0 \u00f7 172.31.255.255"
    },
    {
        "id": 1302,
        "question": "Karta sieciowa standardu Fast Ethernet pozwala na transfer danych z maksymaln\u0105 szybko\u015bci\u0105",
        "imageLoc": "",
        "answers": [
            "A. 10 Mbps",
            "B. 10 MB/s",
            "C. 100 MB/s",
            "D. 100 Mbps"
        ],
        "goodAnswer": "D. 100 Mbps"
    },
    {
        "id": 1303,
        "question": "Na rysunku przedstawiono fragment wyniku dzia\u0142ania programu do testowania sieci. Wskazuje to na zastosowanie sieciowego polecenia testuj\u0105cego",
        "imageLoc": require("../assets/img/724.png"),
        "answers": [
            "A. netstat",
            "B. tracert",
            "C. route",
            "D. arp"
        ],
        "goodAnswer": "A. netstat"
    },
    {
        "id": 1304,
        "question": "Kt\u00f3ry ze standard\u00f3w Ethernet definiuje Gigabit Ethernet dla okablowania UTP?",
        "imageLoc": "",
        "answers": [
            "A. 100 GBase-TX",
            "B. 10 Base-TX",
            "C. 10 GBase-TX",
            "D. 1000 Base-TX"
        ],
        "goodAnswer": "D. 1000 Base-TX"
    },
    {
        "id": 1305,
        "question": "Na podstawie przedstawionego cennika oblicz, jaki b\u0119dzie koszt brutto jednego dwumodu\u0142owego podw\u00f3jnego natynkowego gniazda abonenckiego.",
        "imageLoc": require("../assets/img/1538.png"),
        "answers": [
            "A. 32,00 z\u0142",
            "B. 28,00 z\u0142",
            "C. 25,00 z\u0142",
            "D. 18,00 z\u0142"
        ],
        "goodAnswer": "B. 28,00 z\u0142"
    },
    {
        "id": 1306,
        "question": "Interfejs u\u017cywany do komunikacji mi\u0119dzy urz\u0105dzeniami przeno\u015bnymi, wykorzystuj\u0105cy cyfrow\u0105 transmisj\u0119 optyczn\u0105 bezprzewodow\u0105 do przesy\u0142ania danych na stosunkowo kr\u00f3tkim odcinku, to",
        "imageLoc": "",
        "answers": [
            "A. IEEE 1394a",
            "B. Bluetooth",
            "C. IrDA",
            "D. IEEE 1394c"
        ],
        "goodAnswer": "C. IrDA"
    },
    {
        "id": 1307,
        "question": "Kt\u00f3ry z element\u00f3w pokazanych na schemacie karty d\u017awi\u0119kowej na rysunku s\u0142u\u017cy do cyfrowego przetwarzania sygna\u0142\u00f3w?",
        "imageLoc": require("../assets/img/8.png"),
        "answers": [
            "A. Przetwornik A/D",
            "B. Syntezator",
            "C. Mikser",
            "D. Procesor DSP"
        ],
        "goodAnswer": "D. Procesor DSP"
    },
    {
        "id": 1308,
        "question": "Po wydaniu polecenia net accounts /MINPWLEN:11 systemu Windows, warto\u015b\u0107 11 zostanie ustawiona dla",
        "imageLoc": "",
        "answers": [
            "A. minimalnej liczby minut, przez kt\u00f3re u\u017cytkownik mo\u017ce by\u0107 zalogowany",
            "B. maksymalnej liczby dni wa\u017cno\u015bci konta",
            "C. minimalnej liczby znak\u00f3w w has\u0142ach u\u017cytkownik\u00f3w",
            "D. maksymalnej liczby dni mi\u0119dzy zmianami hase\u0142 u\u017cytkownik\u00f3w"
        ],
        "goodAnswer": "C. minimalnej liczby znak\u00f3w w has\u0142ach u\u017cytkownik\u00f3w"
    },
    {
        "id": 1309,
        "question": "Bezprzewodow\u0105 transmisj\u0119 danych zapewnia standard, kt\u00f3rego elementem jest interfejs",
        "imageLoc": "",
        "answers": [
            "A. IrDA",
            "B. LFH60",
            "C. HDMI",
            "D. DVI"
        ],
        "goodAnswer": "A. IrDA"
    },
    {
        "id": 1310,
        "question": "W systemie Windows do instalacji aktualizacji oraz przywracania sterownik\u00f3w urz\u0105dze\u0144 nale\u017cy u\u017cy\u0107 przystawki",
        "imageLoc": "",
        "answers": [
            "A. fsmgmt.msc",
            "B. certmgr.msc",
            "C. wmimgmt.msc",
            "D. devmgmt.msc"
        ],
        "goodAnswer": "D. devmgmt.msc"
    },
    {
        "id": 1311,
        "question": "Prezentowana usterka ekranu laptopa mo\u017ce by\u0107 spowodowana",
        "imageLoc": require("../assets/img/2022.png"),
        "answers": [
            "A. ustawieniem z\u0142ej rozdzielczo\u015bci ekranu.",
            "B. uszkodzenie pod\u015bwietlenia matrycy.",
            "C. martwymi pikselami.",
            "D. uszkodzeniem ta\u015bmy \u0142\u0105cz\u0105cej matryc\u0119 z p\u0142yt\u0105 g\u0142\u00f3wn\u0105."
        ],
        "goodAnswer": "D. uszkodzeniem ta\u015bmy \u0142\u0105cz\u0105cej matryc\u0119 z p\u0142yt\u0105 g\u0142\u00f3wn\u0105."
    },
    {
        "id": 1312,
        "question": "Schemat blokowy przedstawia",
        "imageLoc": require("../assets/img/2127.png"),
        "answers": [
            "A. streamer",
            "B. dysk twardy",
            "C. nap\u0119d dyskietek",
            "D. nap\u0119d DVD-ROM"
        ],
        "goodAnswer": "B. dysk twardy"
    },
    {
        "id": 1313,
        "question": "W systemie Windows XP do zmiany typu systemu plik\u00f3w z FAT32 na NTFS nale\u017cy wykorzysta\u0107 program",
        "imageLoc": "",
        "answers": [
            "A. replace.exe",
            "B. convert.exe",
            "C. subst.exe",
            "D. attrib.exe"
        ],
        "goodAnswer": "B. convert.exe"
    },
    {
        "id": 1314,
        "question": "B\u0142\u0119dy systemu operacyjnego Windows spowodowane przez konflikty zasob\u00f3w sprz\u0119towych, takie jak przydzia\u0142 pami\u0119ci, przydzia\u0142 przerwa\u0144 IRQ i kana\u0142\u00f3w DMA, naj\u0142atwiej jest wykry\u0107 za pomoc\u0105 narz\u0119dzia",
        "imageLoc": "",
        "answers": [
            "A. przystawka Sprawd\u017a dysk",
            "B. chkdsk",
            "C. edytor rejestru",
            "D. mened\u017cer urz\u0105dze\u0144"
        ],
        "goodAnswer": "D. mened\u017cer urz\u0105dze\u0144"
    },
    {
        "id": 1315,
        "question": "Adres IP 158.75.60.16 nale\u017cy do adres\u00f3w",
        "imageLoc": "",
        "answers": [
            "A. klasy C",
            "B. klasy B",
            "C. klasy A",
            "D. klasy D"
        ],
        "goodAnswer": "B. klasy B"
    },
    {
        "id": 1316,
        "question": "Aby pod\u0142\u0105czy\u0107 do Internetu sie\u0107 lokaln\u0105, dzia\u0142aj\u0105c\u0105 w oparciu o adresy prywatne, nale\u017cy zastosowa\u0107",
        "imageLoc": "",
        "answers": [
            "A. prze\u0142\u0105cznik",
            "B. regenerator",
            "C. koncentrator",
            "D. router"
        ],
        "goodAnswer": "D. router"
    },
    {
        "id": 1317,
        "question": "Wynik wykonania kt\u00f3rego polecenia sieciowego systemu z rodziny Windows jest przedstawiony na rysunku?",
        "imageLoc": require("../assets/img/2054.png"),
        "answers": [
            "A. route print",
            "B. net session",
            "C. arp -a",
            "D. net view"
        ],
        "goodAnswer": "A. route print"
    },
    {
        "id": 1318,
        "question": "Najlepszym zabezpieczeniem sieci bezprzewodowej jest",
        "imageLoc": "",
        "answers": [
            "A. protok\u00f3\u0142 WPA",
            "B. protok\u00f3\u0142 SSH",
            "C. protok\u00f3\u0142 WEP",
            "D. protok\u00f3\u0142 WPA2"
        ],
        "goodAnswer": "D. protok\u00f3\u0142 WPA2"
    },
    {
        "id": 1319,
        "question": "Kt\u00f3ra licencja umo\u017cliwia bezp\u0142atne wykorzystywanie programu, pod warunkiem, \u017ce u\u017cytkownik zatroszczy si\u0119 o \u015brodowisko naturalne?",
        "imageLoc": "",
        "answers": [
            "A. Greenware",
            "B. Adware",
            "C. Donationware",
            "D. OEM"
        ],
        "goodAnswer": "A. Greenware"
    },
    {
        "id": 1320,
        "question": "Polecenie netstat -a w systemach Microsoft Windows wy\u015bwietla",
        "imageLoc": "",
        "answers": [
            "A. Aktualne parametry konfiguracyjne sieci TCP/IP",
            "B. Wszystkie aktywne po\u0142\u0105czenia protoko\u0142u TCP",
            "C. Statystyk\u0119 odwiedzin stron internetowych",
            "D. Tablic\u0119 trasowania"
        ],
        "goodAnswer": "B. Wszystkie aktywne po\u0142\u0105czenia protoko\u0142u TCP"
    },
    {
        "id": 1321,
        "question": "Maska dla adresu IP 192.168.1.10/8 ma posta\u0107",
        "imageLoc": "",
        "answers": [
            "A. 255.255.255.0",
            "B. 255.0.0.0",
            "C. 255.255.0.0",
            "D. 255.0.255.0"
        ],
        "goodAnswer": "B. 255.0.0.0"
    },
    {
        "id": 1322,
        "question": "Kt\u00f3ry protok\u00f3\u0142 jest wykorzystywany do przesy\u0142ania plik\u00f3w bez nawi\u0105zania po\u0142\u0105czenia?",
        "imageLoc": "",
        "answers": [
            "A. TFTP (Trivial File Transfer Protocol)",
            "B. DNS (Domain Name System)",
            "C. HTTP (Hyper Text Transfer Protocol)",
            "D. FTP (File Transfer Protocol)"
        ],
        "goodAnswer": "A. TFTP (Trivial File Transfer Protocol)"
    },
    {
        "id": 1323,
        "question": "Dostarczanie nieprawid\u0142owych napi\u0119\u0107 do p\u0142yty g\u0142\u00f3wnej mo\u017ce prowadzi\u0107 do",
        "imageLoc": "",
        "answers": [
            "A. wyst\u0105pienia b\u0142\u0119d\u00f3w pami\u0119ci RAM",
            "B. puchni\u0119cia kondensator\u00f3w, zawieszania si\u0119 jednostki centralnej oraz niespodziewanych restart\u00f3w",
            "C. braku mo\u017cliwo\u015bci instalacji oprogramowania",
            "D. uruchomienia si\u0119 jednostki centralnej z kolorowymi pasami i kreskami na ekranie"
        ],
        "goodAnswer": "B. puchni\u0119cia kondensator\u00f3w, zawieszania si\u0119 jednostki centralnej oraz niespodziewanych restart\u00f3w"
    },
    {
        "id": 1324,
        "question": "Narz\u0119dziem wiersza polece\u0144 w systemie Windows, s\u0142u\u017c\u0105cym do kompresji oraz dekompresji plik\u00f3w i folder\u00f3w, jest program",
        "imageLoc": "",
        "answers": [
            "A. Expand.exe",
            "B. DiskPart.exe",
            "C. CleanMgr.exe",
            "D. Compact.exe"
        ],
        "goodAnswer": "D. Compact.exe"
    },
    {
        "id": 1325,
        "question": "Schemat uk\u0142adu po\u0142\u0105cze\u0144 bramek logicznych przedstawia",
        "imageLoc": require("../assets/img/1654.png"),
        "answers": [
            "A. sumator",
            "B. kontroler przerwa\u0144",
            "C. przerzutnik",
            "D. muliplekser"
        ],
        "goodAnswer": "C. przerzutnik"
    },
    {
        "id": 1326,
        "question": "Za pomoc\u0105 polecenia dxdiag wywo\u0142anego z wiersza polece\u0144 systemu Windows mo\u017cna",
        "imageLoc": "",
        "answers": [
            "A. zweryfikowa\u0107 pr\u0119dko\u015b\u0107 zapisu oraz odczytu nap\u0119d\u00f3w DVD",
            "B. sprawdzi\u0107 parametry karty graficznej",
            "C. przeskanowa\u0107 dysk twardy w poszukiwaniu b\u0142\u0119d\u00f3w",
            "D. wykona\u0107 pe\u0142n\u0105 diagnostyk\u0119 karty sieciowej"
        ],
        "goodAnswer": "B. sprawdzi\u0107 parametry karty graficznej"
    },
    {
        "id": 1327,
        "question": "Numer IP zapisuje si\u0119 w postaci czterech, oddzielonych od siebie kropkami",
        "imageLoc": "",
        "answers": [
            "A. oktet\u00f3w",
            "B. hel\u00f3w",
            "C. dekad",
            "D. bit\u00f3w"
        ],
        "goodAnswer": "A. oktet\u00f3w"
    },
    {
        "id": 1328,
        "question": "Do kt\u00f3rego urz\u0105dzenia nale\u017cy pod\u0142\u0105czy\u0107 komputery, aby pracowa\u0142y w r\u00f3\u017cnych domenach rozg\u0142oszeniowych?",
        "imageLoc": "",
        "answers": [
            "A. Koncentratora",
            "B. Rutera",
            "C. Mostu",
            "D. Regeneratora"
        ],
        "goodAnswer": "B. Rutera"
    },
    {
        "id": 1329,
        "question": "Firma zajmuj\u0105ca si\u0119 sprz\u0105taniem musi drukowa\u0107 faktury tekstowe w czterech egzemplarzach jednocze\u015bnie, na papierze samokopiuj\u0105cym. Jak\u0105 drukark\u0119 powinna wybra\u0107?",
        "imageLoc": "",
        "answers": [
            "A. Atramentow\u0105",
            "B. Laserow\u0105",
            "C. Termosublimacyjn\u0105",
            "D. Ig\u0142ow\u0105"
        ],
        "goodAnswer": "D. Ig\u0142ow\u0105"
    },
    {
        "id": 1330,
        "question": "Urz\u0105dzenie przedstawione na rysunku s\u0142u\u017cy do",
        "imageLoc": require("../assets/img/1561.png"),
        "answers": [
            "A. organizacji przewod\u00f3w wewn\u0105trz jednostki centralnej",
            "B. zmierzenia warto\u015bci napi\u0119cia dostarczanego przez zasilacz komputerowy",
            "C. odczytywania kod\u00f3w POST z p\u0142yty g\u0142\u00f3wnej",
            "D. sprawdzania d\u0142ugo\u015bci przewod\u00f3w sieciowych"
        ],
        "goodAnswer": "B. zmierzenia warto\u015bci napi\u0119cia dostarczanego przez zasilacz komputerowy"
    },
    {
        "id": 1331,
        "question": "Kt\u00f3ry program NIE umo\u017cliwia testowania sieci komputerowej w celu identyfikacji usterek?",
        "imageLoc": "",
        "answers": [
            "A. getfacl",
            "B. nslookup",
            "C. ping",
            "D. traceroute"
        ],
        "goodAnswer": "A. getfacl"
    },
    {
        "id": 1332,
        "question": "Aby sprawdzi\u0107 statystyki u\u017cycia pami\u0119ci wirtualnej w systemie Linux, nale\u017cy sprawdzi\u0107 zawarto\u015b\u0107 pliku",
        "imageLoc": "",
        "answers": [
            "A. /proc/vmstat",
            "B. /etc/inittab",
            "C. pagefile.sys",
            "D. xload"
        ],
        "goodAnswer": "A. /proc/vmstat"
    },
    {
        "id": 1333,
        "question": "Kt\u00f3ry standard szyfrowania nale\u017cy wybra\u0107 podczas konfiguracji karty sieciowej, aby zabezpieczy\u0107 transmisj\u0119 bezprzewodow\u0105?",
        "imageLoc": "",
        "answers": [
            "A. EAP",
            "B. WPA",
            "C. PPP",
            "D. MAC"
        ],
        "goodAnswer": "B. WPA"
    },
    {
        "id": 1334,
        "question": "Pami\u0119\u0107 podr\u0119czna Intel Smart Cache wbudowana w procesory wielordzeniowe np. Intel Core Duo to pami\u0119\u0107",
        "imageLoc": "",
        "answers": [
            "A. Cache L2 lub Cache L3, podzielona r\u00f3wno pomi\u0119dzy rdzenie",
            "B. Cache L1 wsp\u00f3\u0142dzielona przez wszystkie rdzenie",
            "C. Cache L2 lub Cache L3, wsp\u00f3\u0142dzielona przez wszystkie rdzenie",
            "D. Cache L1 podzielona r\u00f3wno pomi\u0119dzy rdzenie"
        ],
        "goodAnswer": "C. Cache L2 lub Cache L3, wsp\u00f3\u0142dzielona przez wszystkie rdzenie"
    },
    {
        "id": 1335,
        "question": "Metoda dost\u0119pu do medium CSMA/CA jest stosowana w sieci o standardzie",
        "imageLoc": "",
        "answers": [
            "A. IEEE 802.1",
            "B. IEEE 802.11",
            "C. IEEE 802.3",
            "D. IEEE 802.8"
        ],
        "goodAnswer": "B. IEEE 802.11"
    },
    {
        "id": 1336,
        "question": "Do zdalnego zarz\u0105dzania stacjami roboczymi nie jest stosowany",
        "imageLoc": "",
        "answers": [
            "A. program Wireshark",
            "B. program TeamViewer",
            "C. program Ultra VNC",
            "D. pulpit zdalny"
        ],
        "goodAnswer": "A. program Wireshark"
    },
    {
        "id": 1337,
        "question": "Rysunek przedstawia schemat blokowy karty d\u017awi\u0119kowej. Jak\u0105 funkcj\u0119 pe\u0142ni uk\u0142ad oznaczony cyfr\u0105 1?",
        "imageLoc": require("../assets/img/131.png"),
        "answers": [
            "A. Zamienia sygna\u0142 analogowy na cyfrowy",
            "B. Wzmacnia sygna\u0142 wej\u015bciowy",
            "C. Wzmacnia sygna\u0142 wyj\u015bciowy",
            "D. Zamienia sygna\u0142 cyfrowy na analogowy"
        ],
        "goodAnswer": "A. Zamienia sygna\u0142 analogowy na cyfrowy"
    },
    {
        "id": 1338,
        "question": "Konwerter RAMDAC przetwarza sygna\u0142",
        "imageLoc": "",
        "answers": [
            "A. sta\u0142y na zmienny",
            "B. zmienny na sta\u0142y",
            "C. cyfrowy na analogowy",
            "D. analogowy na cyfrowy"
        ],
        "goodAnswer": "C. cyfrowy na analogowy"
    },
    {
        "id": 1339,
        "question": "Aby uruchomi\u0107 tryb awaryjny w systemach rodziny Windows, nale\u017cy podczas uruchamiania komputera wcisn\u0105\u0107 klawisz",
        "imageLoc": "",
        "answers": [
            "A. F7",
            "B. F1",
            "C. F10",
            "D. F8"
        ],
        "goodAnswer": "D. F8"
    },
    {
        "id": 1340,
        "question": "Jaki wyraz nale\u017ca\u0142oby wstawi\u0107 w wykropkowanym miejscu na schemacie blokowym ilustruj\u0105cym budow\u0119 systemu operacyjnego?",
        "imageLoc": require("../assets/img/292.png"),
        "answers": [
            "A. Pow\u0142oka",
            "B. Programy u\u017cytkowe",
            "C. Benchmarki",
            "D. Sterowniki"
        ],
        "goodAnswer": "A. Pow\u0142oka"
    },
    {
        "id": 1341,
        "question": "Magistrala, kt\u00f3ra \u0142\u0105czy w komputerze procesor z kontrolerem pami\u0119ci, sk\u0142adaj\u0105ca si\u0119 z szyny adresowej, szyny danych i linii steruj\u0105cych, nosi nazw\u0119",
        "imageLoc": "",
        "answers": [
            "A. FSB \u2013 Front Side Bus",
            "B. PCI \u2013 Peripheral Component Interconnect",
            "C. AGP \u2013 Accelerated Graphics Port",
            "D. ISA \u2013 Industry Standard Architecture"
        ],
        "goodAnswer": "A. FSB \u2013 Front Side Bus"
    },
    {
        "id": 1342,
        "question": "Urz\u0105dzeniem wskazuj\u0105cym jest",
        "imageLoc": "",
        "answers": [
            "A. pami\u0119\u0107 USB",
            "B. drukarka",
            "C. ekran dotykowy",
            "D. skaner"
        ],
        "goodAnswer": "C. ekran dotykowy"
    },
    {
        "id": 1343,
        "question": "Aby utworzy\u0107 las w strukturze katalogowej AD DS (Active Directory Domain Services), nale\u017cy utworzy\u0107 co najmniej",
        "imageLoc": "",
        "answers": [
            "A. dwa drzewa domeny",
            "B. cztery drzewa domeny",
            "C. jedno drzewo domeny",
            "D. trzy drzewa domeny"
        ],
        "goodAnswer": "C. jedno drzewo domeny"
    },
    {
        "id": 1344,
        "question": "Programem s\u0142u\u017c\u0105cym do archiwizacji danych w systemie Linux jest",
        "imageLoc": "",
        "answers": [
            "A. tar",
            "B. lzma",
            "C. gzip",
            "D. compress"
        ],
        "goodAnswer": "A. tar"
    },
    {
        "id": 1345,
        "question": "Urz\u0105dzenie peryferyjne sterowane za pomoc\u0105 komputera, stosowane do pracy z p\u0142askimi powierzchniami wielkoformatowymi, kt\u00f3re do tworzenia wydruku odpornego na czynniki zewn\u0119trzne wykorzystuje farby na bazie rozpuszczalnik\u00f3w, to ploter",
        "imageLoc": "",
        "answers": [
            "A. tn\u0105cy",
            "B. solwentowy",
            "C. kre\u015bl\u0105cy",
            "D. piaskowy"
        ],
        "goodAnswer": "B. solwentowy"
    },
    {
        "id": 1346,
        "question": "Jak\u0105 liczb\u0119 dziesi\u0119tn\u0105 zapisano na jednym bajcie w kodzie znak \u2013 modu\u0142: 1 1111111",
        "imageLoc": "",
        "answers": [
            "A. \u2013127",
            "B. 128",
            "C. \u2013100",
            "D. 256"
        ],
        "goodAnswer": "A. \u2013127"
    },
    {
        "id": 1347,
        "question": "Warunkiem niezb\u0119dnym przy archiwizacji danych jest",
        "imageLoc": "",
        "answers": [
            "A. kompresja danych",
            "B. kompresja i kopiowanie danych",
            "C. kompresja i kopiowanie danych z jednoczesnym ich szyfrowaniem",
            "D. kopiowanie danych"
        ],
        "goodAnswer": "D. kopiowanie danych"
    },
    {
        "id": 1348,
        "question": "Na rysunku przedstawiono z\u0142\u0105cze zasilania",
        "imageLoc": require("../assets/img/1649.png"),
        "answers": [
            "A. dysk\u00f3w wewn\u0119trznych SATA",
            "B. stacji dyskietek",
            "C. Molex do dysk\u00f3w twardych",
            "D. ATX12V zasilania procesora"
        ],
        "goodAnswer": "D. ATX12V zasilania procesora"
    },
    {
        "id": 1349,
        "question": "Jaka jest kolejno\u015b\u0107 przewod\u00f3w we wtyku RJ45 zgodnie z sekwencj\u0105 po\u0142\u0105cze\u0144 T568A?",
        "imageLoc": require("../assets/img/1383.png"),
        "answers": [
            "A. A",
            "B. B",
            "C. C",
            "D. D"
        ],
        "goodAnswer": "D. D"
    },
    {
        "id": 1350,
        "question": "Kt\u00f3ry typ zabezpiecze\u0144 w sieci WiFi posiada najlepszy poziom zabezpiecze\u0144?",
        "imageLoc": "",
        "answers": [
            "A. WPA2",
            "B. WEP",
            "C. NTFS",
            "D. WPA"
        ],
        "goodAnswer": "A. WPA2"
    },
    {
        "id": 1351,
        "question": "Firma otrzyma\u0142a pul\u0119 adres\u00f3w 10.10.10.0/16. Po wyodr\u0119bnieniu podsieci maj\u0105cych po 510 host\u00f3w otrzymano adresy podsieci z mask\u0105",
        "imageLoc": "",
        "answers": [
            "A. 255.255.0.0",
            "B. 255.255.253.0",
            "C. 255.255.254.0",
            "D. 255.255.240.0"
        ],
        "goodAnswer": "C. 255.255.254.0"
    },
    {
        "id": 1352,
        "question": "Do po\u0142\u0105czenia lokalnej sieci bezprzewodowej z sieci\u0105 przewodow\u0105 jest stosowany",
        "imageLoc": "",
        "answers": [
            "A. punkt dost\u0119pu",
            "B. koncentrator",
            "C. modem",
            "D. prze\u0142\u0105cznik"
        ],
        "goodAnswer": "A. punkt dost\u0119pu"
    },
    {
        "id": 1353,
        "question": "Kt\u00f3re polecenie systemu Windows nale\u017cy wykona\u0107, aby sprawdzi\u0107, ile ruter\u00f3w po\u015brednich jest pomi\u0119dzy hostem \u017ar\u00f3d\u0142owym a docelowym?",
        "imageLoc": "",
        "answers": [
            "A. ipconfig",
            "B. tracert",
            "C. arp",
            "D. routeprint"
        ],
        "goodAnswer": "B. tracert"
    },
    {
        "id": 1354,
        "question": "Kt\u00f3ry skr\u00f3cony zapis odpowiada nast\u0119puj\u0105cej masce podsieci: 255.255.248.0?",
        "imageLoc": "",
        "answers": [
            "A. /24",
            "B. /21",
            "C. /23",
            "D. /22"
        ],
        "goodAnswer": "B. /21"
    },
    {
        "id": 1355,
        "question": "Jaka jest maksymalna pr\u0119dko\u015b\u0107 transmisji danych w sieci przy zastosowaniu skr\u0119tki kategorii 5e?",
        "imageLoc": "",
        "answers": [
            "A. 100 Mb/s",
            "B. 10 Gb/s",
            "C. 1 Gb/s",
            "D. 10 Mb/s"
        ],
        "goodAnswer": "C. 1 Gb/s"
    },
    {
        "id": 1356,
        "question": "Router na interfejsie LAN ma przypisany adres IP 192.168.50.1. Zosta\u0142 on tak skonfigurowany, \u017ce komputerom przydziela si\u0119 wszystkie dost\u0119pne adresy IP w sieci 192.168.50.0 z mask\u0105 255.255.255.0. Ile maksymalnie komputer\u00f3w mo\u017ce pracowa\u0107 w takiej sieci?",
        "imageLoc": "",
        "answers": [
            "A. 254",
            "B. 256",
            "C. 253",
            "D. 255"
        ],
        "goodAnswer": "C. 253"
    },
    {
        "id": 1357,
        "question": "GRUB, LILO, NTLDR to",
        "imageLoc": "",
        "answers": [
            "A. programy rozruchowe",
            "B. firmware dla dysku twardego",
            "C. wersje g\u0142\u00f3wnego interfejsu sieciowego",
            "D. aplikacje do aktualizacji BIOS-u"
        ],
        "goodAnswer": "A. programy rozruchowe"
    },
    {
        "id": 1358,
        "question": "Interfejsem umo\u017cliwiaj\u0105cym przesy\u0142anie danych pomi\u0119dzy pokazan\u0105 na rysunku p\u0142yta g\u0142\u00f3wna, a urz\u0105dzeniem zewn\u0119trznym, bez r\u00f3wnoczesnego zasilania urz\u0105dzenia zewn\u0119trznego poprzez interfejs jest",
        "imageLoc": require("../assets/img/245.png"),
        "answers": [
            "A. PCI",
            "B. USB",
            "C. PCIe",
            "D. SATA"
        ],
        "goodAnswer": "D. SATA"
    },
    {
        "id": 1359,
        "question": "Przedstawione w ramce parametry katalogowe dotycz\u0105 dysku twardego",
        "imageLoc": require("../assets/img/901.png"),
        "answers": [
            "A. z pami\u0119ci\u0105 cache 12 MB",
            "B. o maksymalnym transferze zewn\u0119trznym 300 MB/s",
            "C. posiadaj\u0105cego 4 talerze",
            "D. o pojemno\u015bci dysku 32 MB"
        ],
        "goodAnswer": "B. o maksymalnym transferze zewn\u0119trznym 300 MB/s"
    },
    {
        "id": 1360,
        "question": "W celu powi\u0119kszenia lub zmniejszania ikony na pulpicie nale\u017cy kr\u0119ci\u0107 k\u00f3\u0142kiem myszy, przytrzymuj\u0105c jednocze\u015bnie klawisz:",
        "imageLoc": "",
        "answers": [
            "A. ALT",
            "B. CTRL",
            "C. SHIFT",
            "D. TAB"
        ],
        "goodAnswer": "B. CTRL"
    },
    {
        "id": 1361,
        "question": "Jak oznaczona jest skr\u0119tka bez ekranu zewn\u0119trznego z ka\u017cd\u0105 par\u0105 w osobnym ekranie z folii?",
        "imageLoc": "",
        "answers": [
            "A. F/UTP",
            "B. U/FTP",
            "C. S/FTP",
            "D. F/STP"
        ],
        "goodAnswer": "B. U/FTP"
    },
    {
        "id": 1362,
        "question": "Program typu recovery, w warunkach domowych, pozwala na odzyskanie danych z dysku twardego w przypadku",
        "imageLoc": "",
        "answers": [
            "A. uszkodzenia silnika dysku.",
            "B. przypadkowego usuni\u0119cia danych.",
            "C. zalania dysku.",
            "D. uszkodzenia elektroniki dysku."
        ],
        "goodAnswer": "B. przypadkowego usuni\u0119cia danych."
    },
    {
        "id": 1363,
        "question": "Dzia\u0142aj\u0105cy w systemie Linux program iftop s\u0142u\u017cy do",
        "imageLoc": "",
        "answers": [
            "A. konfigurowania ustawie\u0144 interfejsu graficznego.",
            "B. monitorowania po\u0142\u0105cze\u0144 sieciowych.",
            "C. wy\u015bwietlania chwilowej pr\u0119dko\u015bci zapisu do pami\u0119ci operacyjnej.",
            "D. wy\u0142\u0105czania procesu zu\u017cywaj\u0105cego najwi\u0119cej mocy obliczeniowej procesora."
        ],
        "goodAnswer": "B. monitorowania po\u0142\u0105cze\u0144 sieciowych."
    },
    {
        "id": 1364,
        "question": "Przekazywanie \u017cetonu (ang. token), wyst\u0119puje w sieci o strukturze fizycznej",
        "imageLoc": "",
        "answers": [
            "A. pier\u015bcienia",
            "B. siatki",
            "C. magistrali",
            "D. gwiazdy"
        ],
        "goodAnswer": "A. pier\u015bcienia"
    },
    {
        "id": 1365,
        "question": "Do pod\u0142\u0105czenia dysku wyposa\u017conego w interfejs SAS nale\u017cy zastosowa\u0107 kabel pokazany na rysunku",
        "imageLoc": require("../assets/img/603.png"),
        "answers": [
            "A. A",
            "B. B",
            "C. C",
            "D. D"
        ],
        "goodAnswer": "D. D"
    },
    {
        "id": 1366,
        "question": "Kt\u00f3ry z adres\u00f3w IPv4 wraz z prefiksem jest adresem sieci?",
        "imageLoc": "",
        "answers": [
            "A. 46.18.10.19/30",
            "B. 208.99.255.134/28",
            "C. 64.77.199.192/26",
            "D. 127.100.100.67/27"
        ],
        "goodAnswer": "C. 64.77.199.192/26"
    },
    {
        "id": 1367,
        "question": "Do przetestowania dzia\u0142ania serwera DNS w systemach Windows Server mo\u017cna u\u017cy\u0107 narz\u0119dzia nslookup. Je\u017celi jako argument polecenia u\u017cyje si\u0119 nazwy komputera, np. nslookup host.domena.com, to nast\u0105pi sprawdzenie",
        "imageLoc": "",
        "answers": [
            "A. aliasu wprowadzonego dla rekordu adresu domeny",
            "B. strefy przeszukiwania wstecz",
            "C. obu stref przeszukiwania, najpierw wstecz a nast\u0119pnie do przodu",
            "D. strefy przeszukiwania do przodu"
        ],
        "goodAnswer": "D. strefy przeszukiwania do przodu"
    },
    {
        "id": 1368,
        "question": "Urz\u0105dzeniem niezb\u0119dnym do po\u0142\u0105czenia ze sob\u0105 pi\u0119ciu komputer\u00f3w w tej samej sieci o topologii gwiazdy jest",
        "imageLoc": "",
        "answers": [
            "A. most",
            "B. modem",
            "C. prze\u0142\u0105cznik",
            "D. ruter"
        ],
        "goodAnswer": "C. prze\u0142\u0105cznik"
    },
    {
        "id": 1369,
        "question": "W kt\u00f3rych no\u015bnikach pami\u0119ci masowej uszkodzenia mechaniczne s\u0105 najbardziej prawdopodobne?",
        "imageLoc": "",
        "answers": [
            "A. W kartach pami\u0119ci SD",
            "B. W pami\u0119ciach Flash",
            "C. W dyskach HDD",
            "D. W dyskach SSD"
        ],
        "goodAnswer": "C. W dyskach HDD"
    },
    {
        "id": 1370,
        "question": "Mened\u017cer urz\u0105dze\u0144 w systemie Windows pozwala na wykrycie",
        "imageLoc": "",
        "answers": [
            "A. . b\u0142\u0119dnej konfiguracji rozruchu systemu oraz wykonywanych us\u0142ug.",
            "B. niew\u0142a\u015bciwej pracy urz\u0105dze\u0144 pod\u0142\u0105czonych do komputera.",
            "C. b\u0142\u0119d\u00f3w systemu operacyjnego podczas jego pracy.",
            "D. nieprawid\u0142owej konfiguracji oprogramowania u\u017cytkowego."
        ],
        "goodAnswer": "B. niew\u0142a\u015bciwej pracy urz\u0105dze\u0144 pod\u0142\u0105czonych do komputera."
    },
    {
        "id": 1371,
        "question": "Jak\u0105 nazw\u0119 nosi rodzina procesor\u00f3w firmy Intel, o niewielkich rozmiarach i ma\u0142ym poborze pr\u0105du, dedykowanych do zastosowa\u0144 mobilnych?",
        "imageLoc": "",
        "answers": [
            "A. Radeon",
            "B. Alpha",
            "C. Athlon",
            "D. Atom"
        ],
        "goodAnswer": "D. Atom"
    },
    {
        "id": 1372,
        "question": "Kt\u00f3ry wymieniony protok\u00f3\u0142 zapewnia korzystanie z szyfrowanego po\u0142\u0105czenia ze stron\u0105 internetow\u0105?",
        "imageLoc": "",
        "answers": [
            "A. NetBEUI",
            "B. TCP",
            "C. HTTPS",
            "D. SPX"
        ],
        "goodAnswer": "C. HTTPS"
    },
    {
        "id": 1373,
        "question": "W technologii Blu-ray no\u015bnik jednokrotnego zapisu oznaczany jest",
        "imageLoc": "",
        "answers": [
            "A. BD-ROM",
            "B. BD-R",
            "C. BD-RE",
            "D. BD"
        ],
        "goodAnswer": "B. BD-R"
    },
    {
        "id": 1374,
        "question": "Domy\u015blnie, w systemie Linux, twardy dysk w standardzie SATA oznaczony jest",
        "imageLoc": "",
        "answers": [
            "A. ida",
            "B. ide",
            "C. fda",
            "D. sda"
        ],
        "goodAnswer": "D. sda"
    },
    {
        "id": 1375,
        "question": "Mi\u0119dzynarodowa Organizacja Normalizacyjna, kt\u00f3ra opracowa\u0142a 7-warstwowy Model Referencyjny Po\u0142\u0105czonych System\u00f3w otwartych, to",
        "imageLoc": "",
        "answers": [
            "A. IEEE (Institute of Electrical and Electronics Engineers)",
            "B. ISO (International Organization for Standardization)",
            "C. EN (European Norm)",
            "D. TIA/EIA (Telecommunications Industry Association / Electronic Industries Association)"
        ],
        "goodAnswer": "B. ISO (International Organization for Standardization)"
    },
    {
        "id": 1376,
        "question": "Kt\u00f3r\u0105 norm\u0119 stosuje si\u0119 dla okablowania strukturalnego w sieciach komputerowych",
        "imageLoc": "",
        "answers": [
            "A. PN-EN ISO 9001:2009",
            "B. ISO/IEC 8859-2",
            "C. PN-EN 12464-1:2004",
            "D. TIA/EIA-568-B"
        ],
        "goodAnswer": "D. TIA/EIA-568-B"
    },
    {
        "id": 1377,
        "question": "Wska\u017c prawid\u0142ow\u0105 posta\u0107 maski podsieci",
        "imageLoc": "",
        "answers": [
            "A. 255.255.255.255",
            "B. 255.252.252.255",
            "C. 0.0.0.0",
            "D. 255.255.0.128"
        ],
        "goodAnswer": "A. 255.255.255.255"
    },
    {
        "id": 1378,
        "question": "Instalowanie system\u00f3w Linux oraz Windows 7 przebiega\u0142o bez \u017cadnych utrudnie\u0144. Systemy zainstalowa\u0142y si\u0119 poprawnie z domy\u015blnymi ustawieniami. Na tym samym komputerze, przy identycznej konfiguracji, podczas instalowania systemu Windows XP wy\u015bwietlony zosta\u0142 komunikat o braku dysk\u00f3w twardych, co mo\u017ce \u015bwiadczy\u0107 o",
        "imageLoc": "",
        "answers": [
            "A. \u017ale ustawionym bootowaniu nap\u0119d\u00f3w.",
            "B. z\u0142ym u\u0142o\u017ceniu zworek w dysku twardym.",
            "C. braku sterownik\u00f3w.",
            "D. uszkodzeniu logicznym dysku twardego."
        ],
        "goodAnswer": "C. braku sterownik\u00f3w."
    },
    {
        "id": 1379,
        "question": "Kt\u00f3ry z wymienionych adres\u00f3w IPv4 nale\u017cy do klasy B?",
        "imageLoc": "",
        "answers": [
            "A. 224.100.10.10",
            "B. 10.10.10.10",
            "C. 128.100.100.10",
            "D. 192.168.1.10"
        ],
        "goodAnswer": "C. 128.100.100.10"
    },
    {
        "id": 1380,
        "question": "Klawiatura QWERTY umo\u017cliwiaj\u0105ca wprowadzenie znak\u00f3w charakterystycznych dla j\u0119zyka polskiego nazywana jest r\u00f3wnie\u017c klawiatur\u0105",
        "imageLoc": "",
        "answers": [
            "A. diakrytyczn\u0105",
            "B. programisty",
            "C. polsk\u0105",
            "D. maszynistki"
        ],
        "goodAnswer": "B. programisty"
    },
    {
        "id": 1381,
        "question": "Ile maksymalnie host\u00f3w mo\u017cna zaadresowa\u0107 w sieci lokalnej, maj\u0105c do dyspozycji jedn\u0105 klas\u0119 C adres\u00f3w protoko\u0142u IPv4?",
        "imageLoc": "",
        "answers": [
            "A. 512",
            "B. 510",
            "C. 254",
            "D. 255"
        ],
        "goodAnswer": "C. 254"
    },
    {
        "id": 1382,
        "question": "Wska\u017c polecenie systemu Windows Server s\u0142u\u017c\u0105ce do usuni\u0119cia jednostki organizacyjnej z katalogu.",
        "imageLoc": "",
        "answers": [
            "A. dsadd",
            "B. adprep",
            "C. redircmp",
            "D. dsrm"
        ],
        "goodAnswer": "D. dsrm"
    },
    {
        "id": 1383,
        "question": "W systemie Windows XP do zmiany typu systemu plik\u00f3w na dysku z FAT32 na NTFS nale\u017cy skorzysta\u0107 z programu",
        "imageLoc": "",
        "answers": [
            "A. subst",
            "B. convert",
            "C. attrib",
            "D. replace"
        ],
        "goodAnswer": "B. convert"
    },
    {
        "id": 1384,
        "question": "Norma IEEE 802.11b jest standardem sieci",
        "imageLoc": "",
        "answers": [
            "A. \u015bwiat\u0142owodowych",
            "B. telefonicznych",
            "C. przewodowych",
            "D. bezprzewodowych"
        ],
        "goodAnswer": "D. bezprzewodowych"
    },
    {
        "id": 1385,
        "question": "Na podstawie oznaczenia pami\u0119ci DDR3 PC3-16000 mo\u017cna stwierdzi\u0107, \u017ce pami\u0119\u0107 ta:",
        "imageLoc": "",
        "answers": [
            "A. pracuje z cz\u0119stotliwo\u015bci\u0105 16000 MHz",
            "B. pracuje z cz\u0119stotliwo\u015bci\u0105 160 MHz",
            "C. ma przepustowo\u015b\u0107 16 GB/s",
            "D. ma przepustowo\u015b\u0107 160 GB/s"
        ],
        "goodAnswer": "C. ma przepustowo\u015b\u0107 16 GB/s"
    },
    {
        "id": 1386,
        "question": "W technologii Ethernet protok\u00f3\u0142 dost\u0119pu do no\u015bnika CSMA/CD jest metod\u0105 z",
        "imageLoc": "",
        "answers": [
            "A. wykrywaniem kolizji",
            "B. priorytetami \u017c\u0105da\u0144",
            "C. przekazywaniem \u017cetonu",
            "D. unikaniem kolizji"
        ],
        "goodAnswer": "A. wykrywaniem kolizji"
    },
    {
        "id": 1387,
        "question": "Kt\u00f3ry zapis w systemie binarnym odpowiada liczbie 91 zapisanej w systemie szesnastkowym?",
        "imageLoc": "",
        "answers": [
            "A. 10001001",
            "B. 10011001",
            "C. 10001011",
            "D. 10010001"
        ],
        "goodAnswer": "D. 10010001"
    },
    {
        "id": 1388,
        "question": "Je\u017celi w konfiguracji karty graficznej zostanie wybrane od\u015bwie\u017canie obrazu wi\u0119ksze od zalecanego, monitor CRT spe\u0142niaj\u0105cy normy TCO 99",
        "imageLoc": "",
        "answers": [
            "A. ulegnie uszkodzeniu",
            "B. przejdzie w stan u\u015bpienia lub pojawi si\u0119 okno informacyjne z komunikatem",
            "C. nie wy\u0142\u0105czy si\u0119, b\u0119dzie wy\u015bwietla\u0142 czarny obraz",
            "D. nie wy\u0142\u0105czy si\u0119, b\u0119dzie wy\u015bwietla\u0142 jedynie cz\u0119\u015b\u0107 obrazu"
        ],
        "goodAnswer": "B. przejdzie w stan u\u015bpienia lub pojawi si\u0119 okno informacyjne z komunikatem"
    },
    {
        "id": 1389,
        "question": "Instalowanie system\u00f3w Linux oraz Windows 7 przebiega\u0142o bez \u017cadnych utrudnie\u0144. Systemy zainstalowa\u0142y si\u0119 poprawnie z domy\u015blnymi ustawieniami. Na tym samym komputerze, przy identycznej konfiguracji, podczas instalowania systemu Windows XP wy\u015bwietlony zosta\u0142 komunikat o braku dysk\u00f3w twardych, co mo\u017ce \u015bwiadczy\u0107 o",
        "imageLoc": "",
        "answers": [
            "A. \u017ale ustawionym bootowaniu nap\u0119d\u00f3w.",
            "B. braku sterownik\u00f3w.",
            "C. z\u0142ym u\u0142o\u017ceniu zworek w dysku twardym.",
            "D. uszkodzeniu logicznym dysku twardego."
        ],
        "goodAnswer": "B. braku sterownik\u00f3w."
    },
    {
        "id": 1390,
        "question": "Kt\u00f3re z polece\u0144 nale\u017cy wyda\u0107 w systemie Windows 7, aby bezpo\u015brednio z wiersza polece\u0144 uruchomi\u0107 program Zapora systemu Windows z zabezpieczeniami zaawansowanymi?",
        "imageLoc": "",
        "answers": [
            "A. services.msc",
            "B. wf.msc",
            "C. compmgmt.msc",
            "D. perfmon.msc"
        ],
        "goodAnswer": "B. wf.msc"
    },
    {
        "id": 1391,
        "question": "Urz\u0105dzenia standardu 802.11g mog\u0105 pracowa\u0107 z maksymaln\u0105 pr\u0119dko\u015bci\u0105 przesy\u0142ania danych do",
        "imageLoc": "",
        "answers": [
            "A. 150 Mb/s",
            "B. 108 Mb/s",
            "C. 11 Mb/s",
            "D. 54 Mb/s"
        ],
        "goodAnswer": "D. 54 Mb/s"
    },
    {
        "id": 1392,
        "question": "Przed instalacj\u0105 sterownika urz\u0105dzenia peryferyjnego system operacyjny Windows powinien sprawdza\u0107, czy sterownik posiada podpis",
        "imageLoc": "",
        "answers": [
            "A. kryptograficzny",
            "B. elektroniczny",
            "C. cyfrowy",
            "D. zaufany"
        ],
        "goodAnswer": "C. cyfrowy"
    },
    {
        "id": 1393,
        "question": "Aby ustawi\u0107 routing statyczny do sieci 192.168.10.0, nale\u017cy wyda\u0107 polecenie",
        "imageLoc": "",
        "answers": [
            "A. static 192.168.10.0 MASK 255.255.255.0 192.168.10.1 5 route",
            "B. static route 92.168.10.1 MASK 255.255.255.0 192.168.10.0 5",
            "C. route ADD 192.168.10.0 MASK 255.255.255.0 192.168.10.1 5",
            "D. route 192.168.10.1 MASK 255.255.255.0 192.168.10.0 5 ADD"
        ],
        "goodAnswer": "C. route ADD 192.168.10.0 MASK 255.255.255.0 192.168.10.1 5"
    },
    {
        "id": 1394,
        "question": "Serwisant dojecha\u0142 do klienta oddalonego od siedziby firmy o 11 km oraz wykona\u0142 u niego czynno\u015bci naprawcze zawarte w tabeli. Wska\u017c ca\u0142kowity koszt brutto jego pracy, je\u015bli dojazd do klienta kosztuje 1,20 z\u0142/km brutto i jest on liczony w obie strony. Stawka podatku VAT na us\u0142ugi wynosi 23%.",
        "imageLoc": require("../assets/img/1865.png"),
        "answers": [
            "A. 198,60 z\u0142",
            "B. 153,20 z\u0142",
            "C. 195,40 z\u0142",
            "D. 166,40 z\u0142"
        ],
        "goodAnswer": "A. 198,60 z\u0142"
    },
    {
        "id": 1395,
        "question": "W systemach Linux, aby doda\u0107 repozytorium, mo\u017cna u\u017cy\u0107 polece\u0144",
        "imageLoc": "",
        "answers": [
            "A. zypper ref oraz add-apt-repository",
            "B. zypper lr oraz remove-apt-repository",
            "C. zypper ar oraz add-apt-repository",
            "D. zypper rr oraz remove-apt-repository"
        ],
        "goodAnswer": "C. zypper ar oraz add-apt-repository"
    },
    {
        "id": 1396,
        "question": "Protok\u00f3\u0142 RDP jest wykorzystywany w us\u0142udze",
        "imageLoc": "",
        "answers": [
            "A. terminalowej w systemie Linux",
            "B. pulpitu zdalnego w systemie Windows",
            "C. poczty elektronicznej w systemie Linux",
            "D. SCP w systemie Windows"
        ],
        "goodAnswer": "B. pulpitu zdalnego w systemie Windows"
    },
    {
        "id": 1397,
        "question": "Kt\u00f3re konto nie jest wbudowanym w systemie Windows XP ?",
        "imageLoc": "",
        "answers": [
            "A. go\u015b\u0107",
            "B. pomocnik",
            "C. admin",
            "D. administrator"
        ],
        "goodAnswer": "C. admin"
    },
    {
        "id": 1398,
        "question": "Adresem rozg\u0142oszeniowym w podsieci o adresie IPv4 192.168.0.0/20 jest",
        "imageLoc": "",
        "answers": [
            "A. 192.168.15.254",
            "B. 192.168.15.255",
            "C. 192.168.255.254",
            "D. 192.168.255.255"
        ],
        "goodAnswer": "B. 192.168.15.255"
    },
    {
        "id": 1399,
        "question": "Jaki jest maksymalny rozmiar pojedynczego datagramu IPv4, kt\u00f3rego wielko\u015b\u0107 liczona jest wraz z jego nag\u0142\u00f3wkiem?",
        "imageLoc": "",
        "answers": [
            "A. 32 kB",
            "B. 64 kB",
            "C. 256 kB",
            "D. 128 kB"
        ],
        "goodAnswer": "B. 64 kB"
    },
    {
        "id": 1400,
        "question": "Kt\u00f3ry standard sieci Ethernet nale\u017cy zastosowa\u0107 przy po\u0142\u0105czeniu bezpo\u015brednim urz\u0105dze\u0144 sieciowych oddalonych od siebie o 1 km?",
        "imageLoc": "",
        "answers": [
            "A. 1000Base-SX",
            "B. 10GBase-SR",
            "C. 1000Base-LX",
            "D. 10GBase-T"
        ],
        "goodAnswer": "C. 1000Base-LX"
    },
    {
        "id": 1401,
        "question": "Kt\u00f3re polecenie nale\u017cy wyda\u0107, aby uzyska\u0107 wykaz przedstawionych plik\u00f3w?",
        "imageLoc": require("../assets/img/72.png"),
        "answers": [
            "A. grep *a* *.jpg",
            "B. dir *a*.jpg",
            "C. ls -l *a* *.jpg",
            "D. find *.jpg | *a*"
        ],
        "goodAnswer": "C. ls -l *a* *.jpg"
    },
    {
        "id": 1402,
        "question": "Kt\u00f3re polecenie w systemie Windows nale\u017cy zastosowa\u0107 do monitorowania listy aktywnych po\u0142\u0105cze\u0144 karty sieciowej w komputerze?",
        "imageLoc": "",
        "answers": [
            "A. Ipconfig",
            "B. Ping",
            "C. Telnet",
            "D. Netstat"
        ],
        "goodAnswer": "D. Netstat"
    },
    {
        "id": 1403,
        "question": "Kt\u00f3re urz\u0105dzenie nale\u017cy zastosowa\u0107 w sieci Ethernet, aby ograniczy\u0107 liczb\u0119 kolizji pakiet\u00f3w?",
        "imageLoc": "",
        "answers": [
            "A. Bramk\u0119 VoIP",
            "B. Regenerator",
            "C. Prze\u0142\u0105cznik",
            "D. Koncentrator"
        ],
        "goodAnswer": "C. Prze\u0142\u0105cznik"
    },
    {
        "id": 1404,
        "question": "Na rysunku przedstawiono sie\u0107 lokaln\u0105 opart\u0105 na okablowaniu kat. 6. Stacja robocza C nie mo\u017ce skomunikowa\u0107 si\u0119 z sieci\u0105. Jaki problem warstwy fizycznej mo\u017ce powodowa\u0107 brak \u0142\u0105czno\u015bci?",
        "imageLoc": require("../assets/img/1643.png"),
        "answers": [
            "A. Z\u0142a d\u0142ugo\u015b\u0107 kabla",
            "B. Nieprawid\u0142owy adres IP",
            "C. Z\u0142y typ prze\u0142\u0105cznika",
            "D. Nieodpowiedni kabel"
        ],
        "goodAnswer": "A. Z\u0142a d\u0142ugo\u015b\u0107 kabla"
    },
    {
        "id": 1405,
        "question": "Na zdj\u0119ciu przedstawiono",
        "imageLoc": require("../assets/img/1318.png"),
        "answers": [
            "A. za\u015blepk\u0119 gniazda RJ-45",
            "B. terminator BNC",
            "C. za\u015blepk\u0119 kabla \u015bwiat\u0142owodowego",
            "D. zast\u0119pczy wtyk RJ-45"
        ],
        "goodAnswer": "B. terminator BNC"
    },
    {
        "id": 1406,
        "question": "Narz\u0119dzie przedstawione na rysunku jest stosowane do",
        "imageLoc": require("../assets/img/1839.png"),
        "answers": [
            "A. instalacji przewod\u00f3w w z\u0142\u0105czach LSA",
            "B. zaciskania wtyk\u00f3w RJ45",
            "C. sprawdzania poprawno\u015bci po\u0142\u0105czenia",
            "D. \u015bci\u0105gania izolacji z kabla"
        ],
        "goodAnswer": "A. instalacji przewod\u00f3w w z\u0142\u0105czach LSA"
    },
    {
        "id": 1407,
        "question": "Za pomoc\u0105 kt\u00f3rego polecenia systemu Linux mo\u017cliwa jest zmiana domy\u015blnej pow\u0142oki u\u017cytkownika egzamin na sh",
        "imageLoc": "",
        "answers": [
            "A. groupmod /users/egzamin /bin/sh",
            "B. vi /etc/passwd -sh egzamin",
            "C. usermod -s /bin/sh egzamin",
            "D. chmod egzamin /etc/shadow sh"
        ],
        "goodAnswer": "C. usermod -s /bin/sh egzamin"
    },
    {
        "id": 1408,
        "question": "Kt\u00f3ry port na przedstawionej p\u0142ycie umo\u017cliwia pod\u0142\u0105czenie zewn\u0119trznego dysku poprzez interfejs e-SATA?",
        "imageLoc": require("../assets/img/1222.png"),
        "answers": [
            "A. 4",
            "B. 3",
            "C. 1",
            "D. 2"
        ],
        "goodAnswer": "D. 2"
    },
    {
        "id": 1409,
        "question": "Na rysunku przedstawiono symbol uk\u0142adu cyfrowego",
        "imageLoc": require("../assets/img/152.png"),
        "answers": [
            "A. demultipleksera priorytetu",
            "B. kodera priorytetu",
            "C. dekodera priorytetu",
            "D. multipleksera priorytetu"
        ],
        "goodAnswer": "B. kodera priorytetu"
    },
    {
        "id": 1410,
        "question": "Rysunek przedstawia topologi\u0119",
        "imageLoc": require("../assets/img/581.png"),
        "answers": [
            "A. rozszerzonej gwiazdy",
            "B. magistrali",
            "C. pier\u015bcienia",
            "D. pe\u0142nej siatki"
        ],
        "goodAnswer": "A. rozszerzonej gwiazdy"
    },
    {
        "id": 1411,
        "question": "W strategii archiwizacji danych zwanej Dziadek \u2013 Ojciec \u2013 Syn na poziomie Dziadek wykonuje si\u0119 kopi\u0119 danych na koniec",
        "imageLoc": "",
        "answers": [
            "A. tygodnia",
            "B. miesi\u0105ca",
            "C. roku",
            "D. dnia"
        ],
        "goodAnswer": "B. miesi\u0105ca"
    },
    {
        "id": 1412,
        "question": "Aby zabezpieczy\u0107 lokaln\u0105 sie\u0107 komputerow\u0105 przed atakami typu Smurf z sieci Internet nale\u017cy zainstalowa\u0107 i odpowiednio skonfigurowa\u0107",
        "imageLoc": "",
        "answers": [
            "A. zapor\u0119 ogniow\u0105",
            "B. oprogramowanie antyspamowe",
            "C. bezpieczn\u0105 przegl\u0105dark\u0119 stron WWW",
            "D. skaner antywirusowy"
        ],
        "goodAnswer": "A. zapor\u0119 ogniow\u0105"
    },
    {
        "id": 1413,
        "question": "W systemie Linux do zablokowania has\u0142a u\u017cytkownika egzamin nale\u017cy u\u017cy\u0107 polecenia",
        "imageLoc": "",
        "answers": [
            "A. useradd \u2013d egzamin",
            "B. userdel \u2013r egzamin",
            "C. usermod \u2013L egzamin",
            "D. passwd \u2013p egzamin"
        ],
        "goodAnswer": "C. usermod \u2013L egzamin"
    },
    {
        "id": 1414,
        "question": "Co oznacza skr\u00f3t MBR, dotycz\u0105cy urz\u0105dze\u0144 techniki komputerowej?",
        "imageLoc": "",
        "answers": [
            "A. Us\u0142ug\u0119 zwi\u0105zan\u0105 z t\u0142umaczeniem nazw domeny",
            "B. G\u0142\u00f3wny rekord rozruchowy SO",
            "C. Fizyczny adres karty sieciowej",
            "D. Bloki pami\u0119ci g\u00f3rnej komputera IBM/PC"
        ],
        "goodAnswer": "B. G\u0142\u00f3wny rekord rozruchowy SO"
    },
    {
        "id": 1415,
        "question": "Aby przetestowa\u0107 w systemie Windows poprawno\u015b\u0107 dzia\u0142ania nowo zainstalowanej drukarki, nale\u017cy",
        "imageLoc": "",
        "answers": [
            "A. uruchomi\u0107 program diagnostyczny dxdiag.",
            "B. uruchomi\u0107 program gpupdate /force w Wierszu polece\u0144.",
            "C. sprawdzi\u0107 stan urz\u0105dzenia w Menad\u017cerze urz\u0105dze\u0144.",
            "D. wydrukowa\u0107 stron\u0119 testow\u0105 za pomoc\u0105 zak\u0142adki Og\u00f3lne w oknie W\u0142a\u015bciwo\u015bci drukarki."
        ],
        "goodAnswer": "D. wydrukowa\u0107 stron\u0119 testow\u0105 za pomoc\u0105 zak\u0142adki Og\u00f3lne w oknie W\u0142a\u015bciwo\u015bci drukarki."
    },
    {
        "id": 1416,
        "question": "Elementem s\u0142u\u017c\u0105cym do utrwalania tonera na papierze podczas wydruku z drukarki laserowej jest",
        "imageLoc": "",
        "answers": [
            "A. b\u0119ben \u015bwiat\u0142oczu\u0142y",
            "B. elektroda \u0142aduj\u0105ca",
            "C. listwa czyszcz\u0105ca",
            "D. wa\u0142ek grzewczy"
        ],
        "goodAnswer": "D. wa\u0142ek grzewczy"
    },
    {
        "id": 1417,
        "question": "Aby mo\u017cna by\u0142o wykorzysta\u0107 aparat telefoniczny PSTN do wykonywania po\u0142\u0105cze\u0144 za pomoc\u0105 sieci komputerowej, nale\u017cy go pod\u0142\u0105czy\u0107 do",
        "imageLoc": "",
        "answers": [
            "A. mostka sieciowego",
            "B. repetera sygna\u0142u",
            "C. bramki VoIP",
            "D. modemu analogowego"
        ],
        "goodAnswer": "C. bramki VoIP"
    },
    {
        "id": 1418,
        "question": "Kt\u00f3re oprogramowanie nale\u017cy zainstalowa\u0107, aby umo\u017cliwi\u0107 zeskanowanie tekstu z wydrukowanego dokumentu do edytora tekstu?",
        "imageLoc": "",
        "answers": [
            "A. Program ERP",
            "B. Program OCR",
            "C. Program COM+",
            "D. Program CAD"
        ],
        "goodAnswer": "B. Program OCR"
    },
    {
        "id": 1419,
        "question": "Integraln\u0105 cz\u0119\u015bci\u0105 systemu Windows 10 chroni\u0105c\u0105 jego u\u017cytkownik\u00f3w przed z\u0142o\u015bliwym oprogramowaniem jest program",
        "imageLoc": "",
        "answers": [
            "A. Microsoft Security Essentials",
            "B. Microsoft Hyper-V",
            "C. Windows Defender",
            "D. Windows PowerShell"
        ],
        "goodAnswer": "C. Windows Defender"
    },
    {
        "id": 1420,
        "question": "Magistrala PCI-Express wykorzystuje do transmisji danych metod\u0119 komunikacji",
        "imageLoc": "",
        "answers": [
            "A. synchronicznej Half duplex",
            "B. asynchronicznej Simplex",
            "C. asynchronicznej Full duplex",
            "D. synchronicznej Full duplex"
        ],
        "goodAnswer": "C. asynchronicznej Full duplex"
    },
    {
        "id": 1421,
        "question": "Kt\u00f3ry z wymienionych adres\u00f3w protoko\u0142u IPv4 jest adresem klasy D?",
        "imageLoc": "",
        "answers": [
            "A. 10.0.3.5",
            "B. 191.12.0.18",
            "C. 239.255.203.1",
            "D. 128.1.0.8"
        ],
        "goodAnswer": "C. 239.255.203.1"
    },
    {
        "id": 1422,
        "question": "Aby po\u0142\u0105czy\u0107 komputery w sie\u0107 przewodow\u0105 opart\u0105 na topologii gwiazdy, nale\u017cy zastosowa\u0107",
        "imageLoc": "",
        "answers": [
            "A. regenerator",
            "B. prze\u0142\u0105cznik (switch)",
            "C. router",
            "D. punkt dost\u0119powy"
        ],
        "goodAnswer": "B. prze\u0142\u0105cznik (switch)"
    },
    {
        "id": 1423,
        "question": "DB-25 jest wykorzystywane jako z\u0142\u0105cze",
        "imageLoc": "",
        "answers": [
            "A. portu r\u00f3wnoleg\u0142ego LPT",
            "B. VGA, SVGA i XGA",
            "C. portu RS-422A",
            "D. GamePort"
        ],
        "goodAnswer": "A. portu r\u00f3wnoleg\u0142ego LPT"
    },
    {
        "id": 1424,
        "question": "W systemie Windows 7, do modyfikacji konfiguracji rozruchowej komputera za pomoc\u0105 linii polece\u0144, nale\u017cy zastosowa\u0107 polecenie",
        "imageLoc": "",
        "answers": [
            "A. bootfix",
            "B. config",
            "C. bootcfg",
            "D. bcdedit"
        ],
        "goodAnswer": "D. bcdedit"
    },
    {
        "id": 1425,
        "question": "Kt\u00f3re cyfry nale\u017cy wprowadzi\u0107 na klawiaturze telefonu pod\u0142\u0105czonego do bramki VoIP po uprzednim wpisaniu *** by wprowadzi\u0107 adres bramy domy\u015blnej sieci?",
        "imageLoc": require("../assets/img/202.png"),
        "answers": [
            "A. 01",
            "B. 04",
            "C. 02",
            "D. 03"
        ],
        "goodAnswer": "B. 04"
    },
    {
        "id": 1426,
        "question": "Jaki b\u0119dzie koszt materia\u0142\u00f3w zu\u017cytych do wykonania 20 kabli typu patchcord o d\u0142ugo\u015bci 50 cm?",
        "imageLoc": require("../assets/img/2043.png"),
        "answers": [
            "A. 92,00 z\u0142",
            "B. 52,00 z\u0142",
            "C. 72,00 z\u0142",
            "D. 104,00 z\u0142"
        ],
        "goodAnswer": "A. 92,00 z\u0142"
    },
    {
        "id": 1427,
        "question": "Kt\u00f3re ze zda\u0144 jest prawdziwe dla przedstawionej konfiguracji us\u0142ugi DHCP w systemie Linux?",
        "imageLoc": require("../assets/img/1028.png"),
        "answers": [
            "A. System zamieni adres IP 192.168.221.102 na nazw\u0119 main",
            "B. Komputery pracuj\u0105ce w sieci otrzymaj\u0105 adres IP z zakresu 176.16.20.50 \u00f7 176.16.20.250",
            "C. Komputery otrzymaj\u0105 adres IP z zakresu 176.16.20.251 \u00f7 255.255.255.0",
            "D. Karcie sieciowej komputera main przypisany zostanie adres IP 39:12:86:07:55:00"
        ],
        "goodAnswer": "B. Komputery pracuj\u0105ce w sieci otrzymaj\u0105 adres IP z zakresu 176.16.20.50 \u00f7 176.16.20.250"
    },
    {
        "id": 1428,
        "question": "Prezentowana usterka ekranu laptopa mo\u017ce by\u0107 spowodowana",
        "imageLoc": require("../assets/img/23.png"),
        "answers": [
            "A. martwymi pikselami.",
            "B. ustawieniem z\u0142ej rozdzielczo\u015bci ekranu.",
            "C. uszkodzeniem ta\u015bmy \u0142\u0105cz\u0105cej matryc\u0119 z p\u0142yt\u0105 g\u0142\u00f3wn\u0105.",
            "D. uszkodzenie pod\u015bwietlenia matrycy."
        ],
        "goodAnswer": "C. uszkodzeniem ta\u015bmy \u0142\u0105cz\u0105cej matryc\u0119 z p\u0142yt\u0105 g\u0142\u00f3wn\u0105."
    },
    {
        "id": 1429,
        "question": "Prze\u0142\u0105cznik sieciowy standardu Fast Ethernet umo\u017cliwia transmisj\u0119 danych z maksymaln\u0105 pr\u0119dko\u015bci\u0105",
        "imageLoc": "",
        "answers": [
            "A. 10 MB/s",
            "B. 100 MB/s",
            "C. 10 Mbps",
            "D. 100 Mbps"
        ],
        "goodAnswer": "D. 100 Mbps"
    },
    {
        "id": 1430,
        "question": "Program s\u0142u\u017c\u0105cy do diagnozy komputera wy\u015bwietli\u0142 komunikat NIC ERROR. Komunikat ten oznacza awari\u0119 karty",
        "imageLoc": "",
        "answers": [
            "A. sieciowej",
            "B. d\u017awi\u0119kowej",
            "C. graficznej",
            "D. wideo"
        ],
        "goodAnswer": "A. sieciowej"
    },
    {
        "id": 1431,
        "question": "Schemat blokowy przedstawia",
        "imageLoc": require("../assets/img/31.png"),
        "answers": [
            "A. streamer",
            "B. nap\u0119d dyskietek",
            "C. dysk twardy",
            "D. nap\u0119d DVD-ROM"
        ],
        "goodAnswer": "C. dysk twardy"
    },
    {
        "id": 1432,
        "question": "W systemach Windows mo\u017cna przypisa\u0107 u\u017cytkownika do dowolnej grupy za pomoc\u0105 przystawki",
        "imageLoc": "",
        "answers": [
            "A. lusrmgr",
            "B. fsmgmt",
            "C. certsrv",
            "D. services"
        ],
        "goodAnswer": "A. lusrmgr"
    },
    {
        "id": 1433,
        "question": "Proces, w wyniku kt\u00f3rego pliki zgromadzone na dysku twardym s\u0105 zapisywane na nies\u0105siaduj\u0105cych ze sob\u0105 klastrach, jest nazywany",
        "imageLoc": "",
        "answers": [
            "A. kodowaniem danych",
            "B. konsolidacj\u0105 danych",
            "C. fragmentacj\u0105 danych",
            "D. defragmentacj\u0105 danych"
        ],
        "goodAnswer": "C. fragmentacj\u0105 danych"
    },
    {
        "id": 1434,
        "question": "Rysunek przedstawia",
        "imageLoc": require("../assets/img/338.png"),
        "answers": [
            "A. prze\u0142\u0105cznik",
            "B. panel krosowy",
            "C. koncentrator",
            "D. ruter"
        ],
        "goodAnswer": "B. panel krosowy"
    },
    {
        "id": 1435,
        "question": "Do prawid\u0142owego dzia\u0142ania telefonu VoIP konieczne jest skonfigurowanie adresu",
        "imageLoc": "",
        "answers": [
            "A. rozg\u0142oszeniowego",
            "B. centrali ISDN",
            "C. IP",
            "D. MAR/MAV"
        ],
        "goodAnswer": "C. IP"
    },
    {
        "id": 1436,
        "question": "Aby zapobiec wy\u0142adowaniom elektrostatycznym podczas wymiany podzespo\u0142\u00f3w komputerowych, technik powinien zastosowa\u0107",
        "imageLoc": "",
        "answers": [
            "A. mat\u0119 i opask\u0119 antystatyczn\u0105",
            "B. okulary ochronne",
            "C. odzie\u017c poliestrow\u0105",
            "D. r\u0119kawice gumowe"
        ],
        "goodAnswer": "A. mat\u0119 i opask\u0119 antystatyczn\u0105"
    },
    {
        "id": 1437,
        "question": "Active Directory w systemach MS Windows Server 2000 i MS Windows Server 2003 to",
        "imageLoc": "",
        "answers": [
            "A. logiczna grupa komputer\u00f3w, kt\u00f3re maj\u0105 mo\u017cliwo\u015b\u0107 komunikowania si\u0119 w sieci i wzajemnego udost\u0119pniania zasob\u00f3w",
            "B. grupa komputer\u00f3w po\u0142\u0105czonych w sie\u0107, sk\u0142adaj\u0105ca si\u0119 z serwera pe\u0142ni\u0105cego rol\u0119 kontrolera oraz stacji roboczych \u2013 klient\u00f3w",
            "C. us\u0142uga katalogowa, kt\u00f3ra przechowuje informacje dotycz\u0105ce obiekt\u00f3w w sieci i udost\u0119pnia je u\u017cytkownikom oraz administratorom sieci",
            "D. baza danych zawieraj\u0105ca informacje o u\u017cytkownikach sieci, ich has\u0142ach dost\u0119pu i uprawnieniach"
        ],
        "goodAnswer": "C. us\u0142uga katalogowa, kt\u00f3ra przechowuje informacje dotycz\u0105ce obiekt\u00f3w w sieci i udost\u0119pnia je u\u017cytkownikom oraz administratorom sieci"
    },
    {
        "id": 1438,
        "question": "W systemie Linux plik ma ustawione uprawnienia na 541. W\u0142a\u015bciciel mo\u017ce plik",
        "imageLoc": "",
        "answers": [
            "A. tylko wykona\u0107",
            "B. modyfikowa\u0107",
            "C. odczyta\u0107 i wykona\u0107",
            "D. odczyta\u0107, zapisa\u0107 i wykona\u0107"
        ],
        "goodAnswer": "C. odczyta\u0107 i wykona\u0107"
    },
    {
        "id": 1439,
        "question": "Jaki protok\u00f3\u0142 odpowiada za zamian\u0119 adres\u00f3w IP na adresy kontroli dost\u0119pu do no\u015bnika (MAC)?",
        "imageLoc": "",
        "answers": [
            "A. SMTP",
            "B. RARP",
            "C. ARP",
            "D. SNMP"
        ],
        "goodAnswer": "C. ARP"
    },
    {
        "id": 1440,
        "question": "U\u017cytkownik komputera testuj\u0105cy po\u0142\u0105czenia sieciowe poleceniem ping otrzyma\u0142 wynik jak na rysunku. Co jest przyczyn\u0105 braku odpowiedzi serwera przy pierwszej probie, przy za\u0142o\u017ceniu, \u017ce domena wp.pl ma adres 212.77.100.101?",
        "imageLoc": require("../assets/img/1881.png"),
        "answers": [
            "A. B\u0142\u0119dny adres IP przepisany karcie sieciowej.",
            "B. Brak adres\u00f3w serwera DNS w konfiguracji karty sieciowej.",
            "C. Brak adresu domy\u015blnej bramy w konfiguracji karty sieciowej.",
            "D. Brak przypisanego karcie sieciowej serwera DHCP."
        ],
        "goodAnswer": "B. Brak adres\u00f3w serwera DNS w konfiguracji karty sieciowej."
    },
    {
        "id": 1441,
        "question": "Do wy\u015bwietlenia daty w systemie Linux mo\u017cna wykorzysta\u0107 polecenie",
        "imageLoc": "",
        "answers": [
            "A. cal",
            "B. awk",
            "C. irc",
            "D. joe"
        ],
        "goodAnswer": "A. cal"
    },
    {
        "id": 1442,
        "question": "Zapis koloru RGB(255, 170, 129) odpowiada notacji",
        "imageLoc": "",
        "answers": [
            "A. #FFAA81",
            "B. #18FAAF",
            "C. #AA18FF",
            "D. #81AAFF"
        ],
        "goodAnswer": "A. #FFAA81"
    },
    {
        "id": 1443,
        "question": "Kt\u00f3ra warto\u015b\u0107 przep\u0142ywno\u015bci charakteryzuje standard 1000Base-T?",
        "imageLoc": "",
        "answers": [
            "A. 1 GB/s",
            "B. 1 MB/s",
            "C. 1 Gbit/s",
            "D. 1 Mbit/s"
        ],
        "goodAnswer": "C. 1 Gbit/s"
    },
    {
        "id": 1444,
        "question": "Po uruchomieniu komputera pojawi\u0142 si\u0119 komunikat \"Non-system disk or disk error. Replace and strike any key when ready\". Przyczyn\u0105 mo\u017ce by\u0107",
        "imageLoc": "",
        "answers": [
            "A. skasowany BIOS komputera",
            "B. brak pliku ntldr",
            "C. dyskietka w\u0142o\u017cona do nap\u0119du",
            "D. uszkodzony kontroler DMA"
        ],
        "goodAnswer": "C. dyskietka w\u0142o\u017cona do nap\u0119du"
    },
    {
        "id": 1445,
        "question": "Do wykonania nienadzorowanej instalacji w systemie Windows nale\u017cy przygotowa\u0107 plik odpowiedzi o nazwie",
        "imageLoc": "",
        "answers": [
            "A. boot.ini",
            "B. pagefile.sys",
            "C. modprobe.conf",
            "D. unattend.txt"
        ],
        "goodAnswer": "D. unattend.txt"
    },
    {
        "id": 1446,
        "question": "Kt\u00f3ry rodzaj macierzy dyskowych oferuje tzw. mirroring dysk\u00f3w?",
        "imageLoc": "",
        "answers": [
            "A. RAID-3",
            "B. RAID-0",
            "C. RAID-1",
            "D. RAID-5"
        ],
        "goodAnswer": "C. RAID-1"
    },
    {
        "id": 1447,
        "question": "Je\u017celi na danej przestrzeni b\u0119d\u0105 dzia\u0142a\u0142y r\u00f3wnocze\u015bnie dwie sieci WLAN standardy 802.11g, to aby wyeliminowa\u0107 mo\u017cliwo\u015b\u0107 wzajemnych zak\u0142\u00f3ce\u0144 nale\u017cy im przydzieli\u0107 kana\u0142y o numerach r\u00f3\u017cni\u0105cych si\u0119 o",
        "imageLoc": "",
        "answers": [
            "A. 4",
            "B. 5",
            "C. 2",
            "D. 3"
        ],
        "goodAnswer": "B. 5"
    },
    {
        "id": 1448,
        "question": "Warto\u015b\u0107 najstarszych trzech bit\u00f3w adresu IP w systemie binarnym wynosi 010. Jest to adres",
        "imageLoc": "",
        "answers": [
            "A. klasy C",
            "B. klasy A",
            "C. klasy B",
            "D. klasy D"
        ],
        "goodAnswer": "B. klasy A"
    },
    {
        "id": 1449,
        "question": "W celu sprawdzenia mapy pod\u0142\u0105cze\u0144 kabla UTP Cat 5e w sieci lokalnej nale\u017cy u\u017cy\u0107",
        "imageLoc": "",
        "answers": [
            "A. testera okablowania",
            "B. reflektometru kablowego TDR",
            "C. reflektometru optycznego OTDR",
            "D. analizatora protoko\u0142\u00f3w sieciowych"
        ],
        "goodAnswer": "A. testera okablowania"
    },
    {
        "id": 1450,
        "question": "W drukarce ig\u0142owej materia\u0142em eksploatacyjnym jest",
        "imageLoc": "",
        "answers": [
            "A. tusz",
            "B. toner",
            "C. ta\u015bma barwi\u0105ca",
            "D. pigment"
        ],
        "goodAnswer": "C. ta\u015bma barwi\u0105ca"
    },
    {
        "id": 1451,
        "question": "Kt\u00f3ry z adres\u00f3w IP jest adresem hosta pracuj\u0105cego w sieci o adresie 192.168.160.224/28?",
        "imageLoc": "",
        "answers": [
            "A. 192.168.160.192",
            "B. 192.168.160.239",
            "C. 192.168.160.225",
            "D. 192.168.160.240"
        ],
        "goodAnswer": "C. 192.168.160.225"
    },
    {
        "id": 1452,
        "question": "Niekt\u00f3re systemy operacyjne s\u0105 wielodost\u0119pne (multiuser). Systemy takie",
        "imageLoc": "",
        "answers": [
            "A. stosowane s\u0105 g\u0142\u00f3wnie w przemy\u015ble i systemach sterowania",
            "B. steruj\u0105 uk\u0142adem (klasterem) niezale\u017cnych komputer\u00f3w",
            "C. opr\u00f3cz wielozadaniowo\u015bci z wyw\u0142aszczeniem realizuj\u0105 funkcj\u0119 przydzielania czasu u\u017cytkownikom",
            "D. r\u00f3wnocze\u015bnie wykonuj\u0105 wiele program\u00f3w (zada\u0144)"
        ],
        "goodAnswer": "C. opr\u00f3cz wielozadaniowo\u015bci z wyw\u0142aszczeniem realizuj\u0105 funkcj\u0119 przydzielania czasu u\u017cytkownikom"
    },
    {
        "id": 1453,
        "question": "Ile maksymalnie partycji podstawowych mo\u017cemy utworzy\u0107 na dysku twardym z MBR?",
        "imageLoc": "",
        "answers": [
            "A. 4",
            "B. 8",
            "C. 26",
            "D. 24"
        ],
        "goodAnswer": "A. 4"
    },
    {
        "id": 1454,
        "question": "Kt\u00f3re oznaczenie okre\u015bla norm\u0119 dotycz\u0105c\u0105 okablowania strukturalnego?",
        "imageLoc": "",
        "answers": [
            "A. EIA/TIA 568A",
            "B. ISO 11801",
            "C. EN 50173",
            "D. PN-EN 50173-1:2004"
        ],
        "goodAnswer": "A. EIA/TIA 568A"
    },
    {
        "id": 1455,
        "question": "Kt\u00f3ra us\u0142uga serwerowa zapewnia automatyczn\u0105 konfiguracj\u0119 parametr\u00f3w sieciowych stacji roboczych?",
        "imageLoc": "",
        "answers": [
            "A. WINS",
            "B. NAT",
            "C. DHCP",
            "D. DNS"
        ],
        "goodAnswer": "C. DHCP"
    },
    {
        "id": 1456,
        "question": "Interfejs SLI (ang. Scalable Link Interface) s\u0142u\u017cy do \u0142\u0105czenia",
        "imageLoc": "",
        "answers": [
            "A. dw\u00f3ch kart graficznych",
            "B. karty graficznej z odbiornikiem TV",
            "C. nap\u0119du Blu-ray z kart\u0105 d\u017awi\u0119kow\u0105",
            "D. czytnika kart z p\u0142yt\u0105 g\u0142\u00f3wn\u0105"
        ],
        "goodAnswer": "A. dw\u00f3ch kart graficznych"
    },
    {
        "id": 1457,
        "question": "Kt\u00f3re z protoko\u0142\u00f3w przekazuj\u0105 okresowe kopie tablic rutingu do s\u0105siedniego rutera i nie maj\u0105 pe\u0142nej informacji o odleg\u0142ych ruterach?",
        "imageLoc": "",
        "answers": [
            "A. RIP, IGRP",
            "B. EIGPR, OSPF",
            "C. OSPF, RIP",
            "D. EGP, BGP"
        ],
        "goodAnswer": "B. EIGPR, OSPF"
    },
    {
        "id": 1458,
        "question": "Kt\u00f3re \u015brodowisko graficzne przeznaczone dla systemu Linux charakteryzuje si\u0119 najmniejszymi wymaganiami parametr\u00f3w pami\u0119ci RAM?",
        "imageLoc": "",
        "answers": [
            "A. UNITY",
            "B. GNOME",
            "C. AERO",
            "D. XFCE"
        ],
        "goodAnswer": "D. XFCE"
    },
    {
        "id": 1459,
        "question": "\u0141\u0105cze \u015bwiat\u0142owodowe wykorzystywane do transmisji danych w standardzie 10GBASE-SR mo\u017ce mie\u0107 d\u0142ugo\u015b\u0107 wynosz\u0105c\u0105 maksymalnie",
        "imageLoc": "",
        "answers": [
            "A. 2 km",
            "B. 400 m",
            "C. 4 km",
            "D. 200 m"
        ],
        "goodAnswer": "B. 400 m"
    },
    {
        "id": 1460,
        "question": "Kt\u00f3ra us\u0142uga polega na scentralizowanym zarz\u0105dzaniu to\u017csamo\u015bciami, uprawnieniami oraz obiektami w sieci?",
        "imageLoc": "",
        "answers": [
            "A. NFS (Network File System).",
            "B. AD (Active Directory)",
            "C. WDS (Windows Deployment Services)",
            "D. DHCP (Dynamic Host Configuration Protocol)"
        ],
        "goodAnswer": "B. AD (Active Directory)"
    },
    {
        "id": 1461,
        "question": "W czasie uruchamiania (kr\u00f3tko po te\u015bcie POST) komputer zawiesza si\u0119. Co mo\u017ce by\u0107 przyczyn\u0105 takiej usterki?",
        "imageLoc": "",
        "answers": [
            "A. \u0179le skonfigurowana drukarka",
            "B. Niew\u0142a\u015bciwe napi\u0119cie zasilania procesora",
            "C. Brak pod\u0142\u0105czonej myszki komputerowej",
            "D. Zbyt du\u017co ikon na pulpicie"
        ],
        "goodAnswer": "B. Niew\u0142a\u015bciwe napi\u0119cie zasilania procesora"
    },
    {
        "id": 1462,
        "question": "Sie\u0107 lokalna ma adres IP 192.168.0.0/25. Kt\u00f3ry adres IP jest adresem stacji roboczej nale\u017c\u0105cej do tej sieci?",
        "imageLoc": "",
        "answers": [
            "A. 192.168.0.192",
            "B. 192.168.0.100",
            "C. 192.168.1.25",
            "D. 192.168.1.1"
        ],
        "goodAnswer": "B. 192.168.0.100"
    },
    {
        "id": 1463,
        "question": "Kt\u00f3ry procesor jest kompatybilny z p\u0142yt\u0105 g\u0142\u00f3wn\u0105 o przedstawionej specyfikacji?",
        "imageLoc": require("../assets/img/972.png"),
        "answers": [
            "A. A",
            "B. B",
            "C. C",
            "D. D"
        ],
        "goodAnswer": "A. A"
    },
    {
        "id": 1464,
        "question": "Martwy piksel, b\u0119d\u0105cy wad\u0105 monitor\u00f3w LCD, to punkt pozostaj\u0105cy niezmiennie w kolorze",
        "imageLoc": "",
        "answers": [
            "A. czarnym",
            "B. \u017c\u00f3\u0142tym",
            "C. fioletowym",
            "D. szarym"
        ],
        "goodAnswer": "A. czarnym"
    },
    {
        "id": 1465,
        "question": "Kt\u00f3ra drukarka wykorzystuje technik\u0119 polegaj\u0105c\u0105 na przenoszeniu sta\u0142ego barwnika z ta\u015bmy na papier odporny na wysok\u0105 temperatur\u0119?",
        "imageLoc": "",
        "answers": [
            "A. Laserowa",
            "B. Atramentowa",
            "C. Termiczna",
            "D. Termosublimacyjna"
        ],
        "goodAnswer": "D. Termosublimacyjna"
    },
    {
        "id": 1466,
        "question": "Wynikiem dodawania liczb 33(8) oraz 71(8) jest liczba",
        "imageLoc": "",
        "answers": [
            "A. 1100101(2)",
            "B. 1001100(2)",
            "C. 1010101(2)",
            "D. 1010100(2)"
        ],
        "goodAnswer": "D. 1010100(2)"
    },
    {
        "id": 1467,
        "question": "Kt\u00f3ra czynno\u015b\u0107 doprowadzi do nieodwracalnej utraty danych, w przypadku uszkodzenia systemu plik\u00f3w?",
        "imageLoc": "",
        "answers": [
            "A. w\u0142\u0105czenie systemu operacyjnego",
            "B. formatowanie dysku",
            "C. skanowanie programem antywirusowym",
            "D. przeprowadzenie skanowania scandiskiem"
        ],
        "goodAnswer": "B. formatowanie dysku"
    },
    {
        "id": 1468,
        "question": "Litera S w protokole FTPS oznacza zabezpieczanie przesy\u0142anych danych poprzez",
        "imageLoc": "",
        "answers": [
            "A. szyfrowanie",
            "B. logowanie",
            "C. uwierzytelnianie",
            "D. autoryzacj\u0119"
        ],
        "goodAnswer": "A. szyfrowanie"
    },
    {
        "id": 1469,
        "question": "No\u015bniki danych takie jak dysk twardy przechowuj\u0105 informacje w porcjach zwanych sektorami, kt\u00f3re maj\u0105 rozmiar",
        "imageLoc": "",
        "answers": [
            "A. 128B",
            "B. 512B",
            "C. 512KB",
            "D. 1024KB"
        ],
        "goodAnswer": "B. 512B"
    },
    {
        "id": 1470,
        "question": "Jaka jest kolejno\u015b\u0107 we wtyku RJ-45 zgodnie z norm\u0105 TIA/EIA-568 dla zako\u0144czenia typu T568B?",
        "imageLoc": "",
        "answers": [
            "A. Bia\u0142o-pomara\u0144czowy, pomara\u0144czowy, bia\u0142o-zielony, niebieski, bia\u0142o-niebieski, zielony, bia\u0142o-br\u0105zowy, br\u0105zowy",
            "B. Bia\u0142o-zielony, zielony, bia\u0142o-pomara\u0144czowy, pomara\u0144czowy, niebieski, bia\u0142o-niebieski, bia\u0142o-br\u0105zowy, br\u0105zowy",
            "C. Bia\u0142o-niebieski, niebieski, bia\u0142o-br\u0105zowy, br\u0105zowy, bia\u0142o-zielony, zielony, bia\u0142o-pomara\u0144czowy, pomara\u0144czowy",
            "D. Bia\u0142o-br\u0105zowy, br\u0105zowy, bia\u0142o-pomara\u0144czowy, pomara\u0144czowy, bia\u0142o-zielony, niebieski, bia\u0142o-niebieski, zielony"
        ],
        "goodAnswer": "A. Bia\u0142o-pomara\u0144czowy, pomara\u0144czowy, bia\u0142o-zielony, niebieski, bia\u0142o-niebieski, zielony, bia\u0142o-br\u0105zowy, br\u0105zowy"
    },
    {
        "id": 1471,
        "question": "Na fotografii przedstawiono",
        "imageLoc": require("../assets/img/297.png"),
        "answers": [
            "A. zaciskark\u0119 wtyk\u00f3w RJ45",
            "B. tester sieciowy",
            "C. zaciskark\u0119 do tulejek",
            "D. reflektometr"
        ],
        "goodAnswer": "A. zaciskark\u0119 wtyk\u00f3w RJ45"
    },
    {
        "id": 1472,
        "question": "B\u0142\u0119dy systemu operacyjnego Windows spowodowane przez konflikty zasob\u00f3w sprz\u0119towych, takie jak przydzia\u0142 pami\u0119ci, przydzia\u0142 przerwa\u0144 IRQ i kana\u0142\u00f3w DMA, naj\u0142atwiej jest wykry\u0107 za pomoc\u0105 narz\u0119dzia",
        "imageLoc": "",
        "answers": [
            "A. chkdsk",
            "B. edytor rejestru",
            "C. mened\u017cer urz\u0105dze\u0144",
            "D. przystawka Sprawd\u017a dysk"
        ],
        "goodAnswer": "C. mened\u017cer urz\u0105dze\u0144"
    },
    {
        "id": 1473,
        "question": "Z\u0142\u0105cze SC nale\u017cy zamontowa\u0107 na kablu",
        "imageLoc": "",
        "answers": [
            "A. \u015bwiat\u0142owodowym",
            "B. typu skr\u0119tka",
            "C. koncentrycznym",
            "D. telefonicznym"
        ],
        "goodAnswer": "A. \u015bwiat\u0142owodowym"
    },
    {
        "id": 1474,
        "question": "Oprogramowanie Microsoft Hyper-V nale\u017cy zastosowa\u0107 do",
        "imageLoc": "",
        "answers": [
            "A. wirtualizacji fizycznych komputer\u00f3w",
            "B. zdalnego po\u0142\u0105czenia z innym hostami",
            "C. lokalizacji zasob\u00f3w sieciowych",
            "D. identyfikacji komputera w sieci"
        ],
        "goodAnswer": "A. wirtualizacji fizycznych komputer\u00f3w"
    },
    {
        "id": 1475,
        "question": "Dysk twardy podczas pracy stuka i mo\u017cna zaobserwowa\u0107 bardzo powolne uruchamianie systemu oraz odczytywanie danych. Aby naprawi\u0107 t\u0119 usterk\u0119, po zabezpieczeniu danych na no\u015bniku zewn\u0119trznym nale\u017cy",
        "imageLoc": "",
        "answers": [
            "A. sformatowa\u0107 dysk i zainstalowa\u0107 system.",
            "B. wymieni\u0107 dysk na nowy.",
            "C. utworzy\u0107 punkt przywracania systemu.",
            "D. wykona\u0107 defragmentacj\u0119 dysku."
        ],
        "goodAnswer": "B. wymieni\u0107 dysk na nowy."
    },
    {
        "id": 1476,
        "question": "Odwrotno\u015bci\u0105 bezstratnej kompresji danych jest",
        "imageLoc": "",
        "answers": [
            "A. prekompresja",
            "B. dekompresja",
            "C. pakowanie danych",
            "D. archiwizacja"
        ],
        "goodAnswer": "B. dekompresja"
    },
    {
        "id": 1477,
        "question": "Przy pomocy ta\u015bmy 60-pinowej przedstawionej na rysunku pod\u0142\u0105cza si\u0119 do p\u0142yty g\u0142\u00f3wnej komputera",
        "imageLoc": require("../assets/img/50.png"),
        "answers": [
            "A. wszystkie powy\u017csze urz\u0105dzenia",
            "B. nap\u0119dy ATAPI",
            "C. tylko dyski EIDE",
            "D. tylko dyski SCSI"
        ],
        "goodAnswer": "D. tylko dyski SCSI"
    },
    {
        "id": 1478,
        "question": "Zgodnie z obowi\u0105zuj\u0105cymi przepisami BHP odleg\u0142o\u015b\u0107 oczu od ekranu monitora powinna wynosi\u0107",
        "imageLoc": "",
        "answers": [
            "A. 75-110 cm",
            "B. 39-49 cm",
            "C. 20-39 cm",
            "D. 40-75 cm"
        ],
        "goodAnswer": "D. 40-75 cm"
    },
    {
        "id": 1479,
        "question": "Translacj\u0105 nazw domenowych na adresy sieciowe zajmuje si\u0119 us\u0142uga",
        "imageLoc": "",
        "answers": [
            "A. DHCP",
            "B. DNS",
            "C. SMTP",
            "D. SNMP"
        ],
        "goodAnswer": "B. DNS"
    },
    {
        "id": 1480,
        "question": "Kt\u00f3ry port jest domy\u015blnym portem serwera us\u0142ugi WWW?",
        "imageLoc": "",
        "answers": [
            "A. 8081",
            "B. 800",
            "C. 80",
            "D. 8080"
        ],
        "goodAnswer": "C. 80"
    },
    {
        "id": 1481,
        "question": "Polecenie Gpresult",
        "imageLoc": "",
        "answers": [
            "A. wy\u015bwietla informacje o kontrolerze",
            "B. wy\u015bwietla wynikowy zestaw zasad dla u\u017cytkownika lub komputera",
            "C. przywraca domy\u015blne zasady grup dla kontrolera",
            "D. aktualizuje ustawienia zasad grupy"
        ],
        "goodAnswer": "B. wy\u015bwietla wynikowy zestaw zasad dla u\u017cytkownika lub komputera"
    },
    {
        "id": 1482,
        "question": "W kt\u00f3rej topologii fizycznej sieci ka\u017cde urz\u0105dzenie sieciowe ma dok\u0142adnie dwa po\u0142\u0105czenia, po jednym dla swoich najbli\u017cszych s\u0105siad\u00f3w, a dane s\u0105 przesy\u0142ane od jednego komputera do nast\u0119pnego w p\u0119tli?",
        "imageLoc": "",
        "answers": [
            "A. Siatki",
            "B. Pier\u015bcienia",
            "C. Drzewa",
            "D. Gwiazdy"
        ],
        "goodAnswer": "B. Pier\u015bcienia"
    },
    {
        "id": 1483,
        "question": "System operacyjny zosta\u0142 zaatakowany przez oprogramowanie szpieguj\u0105ce. Po usuni\u0119ciu usterek, aby unikn\u0105\u0107 kolejnego ataku, zaleca si\u0119",
        "imageLoc": "",
        "answers": [
            "A. zainstalowanie oprogramowania antyspyware.",
            "B. wykonanie defragmentacji dysku.",
            "C. ustawienie czyszczenia pami\u0119ci podr\u0119cznej.",
            "D. utworzenie dw\u00f3ch partycji na dysku twardym."
        ],
        "goodAnswer": "A. zainstalowanie oprogramowania antyspyware."
    },
    {
        "id": 1484,
        "question": "Kt\u00f3ry z podanych adres\u00f3w jest adresem klasy C?",
        "imageLoc": "",
        "answers": [
            "A. 176.18.5.26",
            "B. 125.9.3.234",
            "C. 196.74.6.29",
            "D. 154.0.12.50"
        ],
        "goodAnswer": "C. 196.74.6.29"
    },
    {
        "id": 1485,
        "question": "Przedstawione narz\u0119dzie s\u0142u\u017c\u0105ce do monitorowania sieci LAN to",
        "imageLoc": require("../assets/img/2129.png"),
        "answers": [
            "A. skaner port\u00f3w.",
            "B. zapora sieciowa.",
            "C. konfigurator IP.",
            "D. konfigurator sieci."
        ],
        "goodAnswer": "A. skaner port\u00f3w."
    },
    {
        "id": 1486,
        "question": "Do pomiaru warto\u015bci mocy pobieranej przez komputer nale\u017cy u\u017cy\u0107",
        "imageLoc": "",
        "answers": [
            "A. amperomierza",
            "B. woltomierza",
            "C. testera zasilaczy",
            "D. watomierza"
        ],
        "goodAnswer": "D. watomierza"
    },
    {
        "id": 1487,
        "question": "Karta Sieciowa widoczna na rysunku mo\u017ce przesy\u0142a\u0107 dane z maksymaln\u0105 pr\u0119dko\u015bci\u0105",
        "imageLoc": require("../assets/img/1492.png"),
        "answers": [
            "A. 108 Mb/s",
            "B. 11 Mb/s",
            "C. 54 Mb/s",
            "D. 300 Mb/s"
        ],
        "goodAnswer": "C. 54 Mb/s"
    },
    {
        "id": 1488,
        "question": "Maska dla adresu IP 192.168.1.10/8 ma posta\u0107",
        "imageLoc": "",
        "answers": [
            "A. 255.255.255.0",
            "B. 255.255.0.0",
            "C. 255.0.0.0",
            "D. 255.0.255.0"
        ],
        "goodAnswer": "C. 255.0.0.0"
    },
    {
        "id": 1489,
        "question": "Adres IP komputera wyra\u017cony sekwencj\u0105 172.16.0.1 jest zapisany w systemie",
        "imageLoc": "",
        "answers": [
            "A. dziesi\u0119tnym",
            "B. \u00f3semkowym",
            "C. dw\u00f3jkowym",
            "D. szesnastkowym"
        ],
        "goodAnswer": "A. dziesi\u0119tnym"
    },
    {
        "id": 1490,
        "question": "Narz\u0119dzie system\u00f3w z rodziny Windows tracert jest stosowane do",
        "imageLoc": "",
        "answers": [
            "A. nawi\u0105zania po\u0142\u0105czenia ze zdalnym serwerem na okre\u015blonym pocie",
            "B. wyszukiwania szczeg\u00f3\u0142owych informacji odnosz\u0105cych si\u0119 do serwer\u00f3w DNS",
            "C. \u015bledzenia trasy przesy\u0142ania pakiet\u00f3w w sieci",
            "D. wy\u015bwietlania i zmian tablicy trasowania pakiet\u00f3w sieciowych"
        ],
        "goodAnswer": "C. \u015bledzenia trasy przesy\u0142ania pakiet\u00f3w w sieci"
    },
    {
        "id": 1491,
        "question": "Kt\u00f3re polecenie systemu Linux wy\u015bwietla list\u0119 proces\u00f3w aktualnie dzia\u0142aj\u0105cych w systemie?",
        "imageLoc": "",
        "answers": [
            "A. top",
            "B. lspci",
            "C. fsck",
            "D. ls"
        ],
        "goodAnswer": "A. top"
    },
    {
        "id": 1492,
        "question": "Kt\u00f3ry parametr okablowania strukturalnego okre\u015bla stosunek mocy sygna\u0142u testowego w jednej z par do mocy sygna\u0142u wyindukowanego w s\u0105siedniej parze na tym samym ko\u0144cu kabla?",
        "imageLoc": "",
        "answers": [
            "A. Suma przenik\u00f3w zdalnych",
            "B. Suma przenik\u00f3w zbli\u017cnych i zdalnych",
            "C. Przenik zbli\u017cny",
            "D. Przenik zdalny"
        ],
        "goodAnswer": "C. Przenik zbli\u017cny"
    },
    {
        "id": 1493,
        "question": "Konfiguracja us\u0142ug na serwerze realizowana jest poprzez",
        "imageLoc": "",
        "answers": [
            "A. role i funkcje",
            "B. panel sterowania",
            "C. kontroler domeny",
            "D. Active Directory"
        ],
        "goodAnswer": "A. role i funkcje"
    },
    {
        "id": 1494,
        "question": "Aby po uruchomieniu systemu Windows automatycznie w\u0142\u0105cza\u0142 si\u0119 program Kalkulator, nale\u017cy wykona\u0107 konfiguracj\u0119",
        "imageLoc": "",
        "answers": [
            "A. pliku wymiany.",
            "B. pulpitu systemowego.",
            "C. funkcji Snap i Peak.",
            "D. harmonogramu zada\u0144."
        ],
        "goodAnswer": "D. harmonogramu zada\u0144."
    },
    {
        "id": 1495,
        "question": "Kt\u00f3re polecenie nale\u017cy wyda\u0107 w systemie Windows, aby sprawdzi\u0107 tabel\u0119 translacji adres\u00f3w IP na adresy fizyczne u\u017cywane przez protok\u00f3\u0142 rozr\u00f3\u017cniania adres\u00f3w?",
        "imageLoc": "",
        "answers": [
            "A. ipconfig",
            "B. netstat -r",
            "C. route print",
            "D. arp -a"
        ],
        "goodAnswer": "D. arp -a"
    },
    {
        "id": 1496,
        "question": "W technologii Ethernet 100BaseTX wymagane jest stosowanie skr\u0119tki",
        "imageLoc": "",
        "answers": [
            "A. kategorii 2",
            "B. kategorii 1",
            "C. kategorii 3",
            "D. kategorii 5"
        ],
        "goodAnswer": "D. kategorii 5"
    },
    {
        "id": 1497,
        "question": "Rysunek przedstawia wynik wykonania programu",
        "imageLoc": require("../assets/img/757.png"),
        "answers": [
            "A. sort",
            "B. tree",
            "C. vol",
            "D. dir"
        ],
        "goodAnswer": "B. tree"
    },
    {
        "id": 1498,
        "question": "Urz\u0105dzenie sieciowe przedstawione na rysunku, to",
        "imageLoc": require("../assets/img/151.png"),
        "answers": [
            "A. konwerter medi\u00f3w",
            "B. prze\u0142\u0105cznik",
            "C. router",
            "D. firewall"
        ],
        "goodAnswer": "C. router"
    },
    {
        "id": 1499,
        "question": "Przedstawiony na rysunku wtyk (z\u0142\u0105cze m\u0119skie modularne) jest zako\u0144czeniem kabla",
        "imageLoc": require("../assets/img/1151.png"),
        "answers": [
            "A. F/UTP",
            "B. U/UTP",
            "C. \u015bwiat\u0142owodowego",
            "D. koncentrycznego"
        ],
        "goodAnswer": "A. F/UTP"
    },
    {
        "id": 1500,
        "question": "Drugi monitor CRT pod\u0142\u0105czony do zestawu komputerowego s\u0142u\u017cy do",
        "imageLoc": "",
        "answers": [
            "A. kalibracji danych",
            "B. przetwarzania danych",
            "C. wyprowadzania informacji",
            "D. przechowywania informacji"
        ],
        "goodAnswer": "C. wyprowadzania informacji"
    },
    {
        "id": 1501,
        "question": "Specjalny interfejs wizualny systemu Windows, kt\u00f3rego cech\u0105 charakterystyczn\u0105 jest przezroczysto\u015b\u0107 przypominaj\u0105ca szk\u0142o oraz subtelne animacje okien, to",
        "imageLoc": "",
        "answers": [
            "A. Aero",
            "B. Gnome",
            "C. Royale",
            "D. Luna"
        ],
        "goodAnswer": "A. Aero"
    },
    {
        "id": 1502,
        "question": "Co oznacza zwrot \"wykonanie backupu systemu\"?",
        "imageLoc": "",
        "answers": [
            "A. Ponowne uruchomienie systemu",
            "B. Wykonanie kopii zapasowej systemu",
            "C. Wykonanie aktualizacji systemu",
            "D. Zamkni\u0119cie systemu"
        ],
        "goodAnswer": "B. Wykonanie kopii zapasowej systemu"
    },
    {
        "id": 1503,
        "question": "Wska\u017c poprawn\u0105 kolejno\u015b\u0107 czynno\u015bci prowadz\u0105cych do zamontowania procesora w gnie\u017adzie LGA na nowej p\u0142ycie g\u0142\u00f3wnej, od\u0142\u0105czonej od \u017ar\u00f3d\u0142a zasilania.",
        "imageLoc": require("../assets/img/144.png"),
        "answers": [
            "A. 5, 7, 6, 1, 4, 3, 2",
            "B. 5, 6, 1, 7, 2, 3, 4",
            "C. 5, 2, 3, 4, 1, 6, 7",
            "D. 5, 1, 7, 3, 6, 2, 4"
        ],
        "goodAnswer": "D. 5, 1, 7, 3, 6, 2, 4"
    },
    {
        "id": 1504,
        "question": "Aby pod\u0142\u0105czy\u0107 do komputera drukark\u0119 ig\u0142ow\u0105 o przedstawionych parametrach, nale\u017cy kabel do\u0142\u0105czony do drukarki zamocowa\u0107 w porcie",
        "imageLoc": require("../assets/img/1360.png"),
        "answers": [
            "A. Ethernet.",
            "B. USB.",
            "C. FireWire.",
            "D. Centronics."
        ],
        "goodAnswer": "D. Centronics."
    },
    {
        "id": 1505,
        "question": "Kt\u00f3re urz\u0105dzenie diagnostyczne jest przedstawione na rysunku i opisane w specyfikacji przedstawionej w tabeli?",
        "imageLoc": require("../assets/img/1313.png"),
        "answers": [
            "A. Analizator sieci bezprzewodowych",
            "B. Reflektometr optyczny",
            "C. Multimetr cyfrowy",
            "D. Diodowy tester okablowania"
        ],
        "goodAnswer": "A. Analizator sieci bezprzewodowych"
    },
    {
        "id": 1506,
        "question": "W systemie Windows u\u017cycie prezentowanego polecenia spowoduje tymczasow\u0105 zmian\u0119 koloru",
        "imageLoc": require("../assets/img/786.png"),
        "answers": [
            "A. czcionki wiersza polece\u0144",
            "B. t\u0142a i czcionki okna Windows",
            "C. paska nazwy okna Windows",
            "D. t\u0142a okna wiersza polece\u0144"
        ],
        "goodAnswer": "A. czcionki wiersza polece\u0144"
    },
    {
        "id": 1507,
        "question": "Podczas pracy z drukark\u0105 laserow\u0105 blade wydruki lub nier\u00f3wnomierne nanoszenie medium drukuj\u0105cego mog\u0105 \u015bwiadczy\u0107 o",
        "imageLoc": "",
        "answers": [
            "A. b\u0142\u0119dnie zainstalowanych sterownikach drukarki",
            "B. zgi\u0119ciu kartki papieru wewn\u0105trz urz\u0105dzenia.",
            "C. wyczerpywaniu si\u0119 tonera",
            "D. uszkodzeniu przewodu \u0142\u0105cz\u0105cego drukark\u0119 z komputerem"
        ],
        "goodAnswer": "C. wyczerpywaniu si\u0119 tonera"
    },
    {
        "id": 1508,
        "question": "Przedstawione na rysunku narz\u0119dzie s\u0142u\u017cy do testowania",
        "imageLoc": require("../assets/img/1975.png"),
        "answers": [
            "A. p\u0142yty g\u0142\u00f3wnej.",
            "B. zasilacza.",
            "C. karty sieciowej.",
            "D. okablowania LAN."
        ],
        "goodAnswer": "D. okablowania LAN."
    },
    {
        "id": 1509,
        "question": "W celu zwi\u0119kszenia niezawodno\u015bci oraz wydajno\u015bci transmisji danych na serwerze nale\u017cy",
        "imageLoc": "",
        "answers": [
            "A. zainstalowa\u0107 macierz dyskow\u0105 RAID1",
            "B. przechowywa\u0107 dane na innym dysku ni\u017c systemowy",
            "C. skonfigurowa\u0107 automatyczne wykonywania kopii zapasowej",
            "D. utworzy\u0107 punkt przywracania systemu"
        ],
        "goodAnswer": "A. zainstalowa\u0107 macierz dyskow\u0105 RAID1"
    },
    {
        "id": 1510,
        "question": "Program df dzia\u0142aj\u0105cy w systemach rodziny Linux umo\u017cliwia wy\u015bwietlenie",
        "imageLoc": "",
        "answers": [
            "A. zawarto\u015bci ukrytego katalogu",
            "B. tekstu pasuj\u0105cego do wzorca",
            "C. informacji o wolnej przestrzeni dyskowej",
            "D. nazwy bie\u017c\u0105cego katalogu"
        ],
        "goodAnswer": "C. informacji o wolnej przestrzeni dyskowej"
    },
    {
        "id": 1511,
        "question": "Kt\u00f3re narz\u0119dzie w systemie Linux wy\u015bwietla zapisane w BIOS informacje o sprz\u0119cie?",
        "imageLoc": "",
        "answers": [
            "A. cron",
            "B. dmidecode",
            "C. debug",
            "D. watch"
        ],
        "goodAnswer": "B. dmidecode"
    },
    {
        "id": 1512,
        "question": "Programem s\u0142u\u017c\u0105cym do wy\u015bwietlenia listy aktywnych urz\u0105dze\u0144 pracuj\u0105cych w sieci LAN jest",
        "imageLoc": "",
        "answers": [
            "A. Ultimate Boot",
            "B. Advanced IP Scaner",
            "C. Netstat",
            "D. Ace Utilities"
        ],
        "goodAnswer": "B. Advanced IP Scaner"
    },
    {
        "id": 1513,
        "question": "Firma otrzyma\u0142a pul\u0119 adres\u00f3w 10.10.10.0/16. Po wyodr\u0119bnieniu podsieci maj\u0105cych po 510 host\u00f3w otrzymano adresy podsieci z mask\u0105",
        "imageLoc": "",
        "answers": [
            "A. 255.255.254.0",
            "B. 255.255.0.0",
            "C. 255.255.253.0",
            "D. 255.255.240.0"
        ],
        "goodAnswer": "A. 255.255.254.0"
    },
    {
        "id": 1514,
        "question": "Kt\u00f3ry z protoko\u0142\u00f3w jest protoko\u0142em po\u0142\u0105czeniowym?",
        "imageLoc": "",
        "answers": [
            "A. ARP",
            "B. TCP",
            "C. IP",
            "D. UDP"
        ],
        "goodAnswer": "B. TCP"
    },
    {
        "id": 1515,
        "question": "Do przechowywania cz\u0119\u015bci plik\u00f3w program\u00f3w i danych, kt\u00f3re s\u0105 du\u017ce i nie mog\u0105 by\u0107 umieszczone w ca\u0142o\u015bci w pami\u0119ci, s\u0142u\u017cy",
        "imageLoc": "",
        "answers": [
            "A. plik stronicowania",
            "B. menad\u017cer zada\u0144",
            "C. schowek systemu",
            "D. edytor rejestru"
        ],
        "goodAnswer": "A. plik stronicowania"
    },
    {
        "id": 1516,
        "question": "Kt\u00f3ra z topologii przedstawionych na rysunkach jest topologi\u0105 siatki?",
        "imageLoc": require("../assets/img/1525.png"),
        "answers": [
            "A. A",
            "B. B",
            "C. C",
            "D. D"
        ],
        "goodAnswer": "A. A"
    },
    {
        "id": 1517,
        "question": "Licencja oprogramowania umo\u017cliwiaj\u0105ca darmowe rozpowszechnianie aplikacji to",
        "imageLoc": "",
        "answers": [
            "A. freeware",
            "B. MOLP",
            "C. OEM",
            "D. shareware"
        ],
        "goodAnswer": "A. freeware"
    },
    {
        "id": 1518,
        "question": "Aby sprawdzi\u0107 adres fizyczny karty sieciowej, w wierszu polece\u0144 systemu operacyjnego Microsoft Windows nale\u017cy wpisa\u0107 polecenie",
        "imageLoc": "",
        "answers": [
            "A. show mac",
            "B. ipconfig /all",
            "C. get mac",
            "D. ifconfig -a"
        ],
        "goodAnswer": "B. ipconfig /all"
    },
    {
        "id": 1519,
        "question": "Aby wyczy\u015bci\u0107 z kurzu wn\u0119trze obudowy drukarki fotograficznej, nale\u017cy u\u017cy\u0107",
        "imageLoc": "",
        "answers": [
            "A. opaski antystatycznej",
            "B. spr\u0119\u017conego powietrza w pojemniku z wyd\u0142u\u017con\u0105 rurk\u0105",
            "C. \u015brodka smaruj\u0105cego",
            "D. szczotki z twardym w\u0142osiem"
        ],
        "goodAnswer": "B. spr\u0119\u017conego powietrza w pojemniku z wyd\u0142u\u017con\u0105 rurk\u0105"
    },
    {
        "id": 1520,
        "question": "Przyczyn\u0105 awarii klawiatury mo\u017ce by\u0107 uszkodzenie",
        "imageLoc": require("../assets/img/849.png"),
        "answers": [
            "A. kontrolera DMA",
            "B. czujnika elektromagnetycznego",
            "C. prze\u0142\u0105cznika membranowego",
            "D. matrycy CCD"
        ],
        "goodAnswer": "C. prze\u0142\u0105cznika membranowego"
    },
    {
        "id": 1521,
        "question": "Do ilu sieci nale\u017c\u0105 adresy IPv4 przedstawione w tabeli?",
        "imageLoc": require("../assets/img/106.png"),
        "answers": [
            "A. 4 sieci.",
            "B. 3 sieci.",
            "C. 2 sieci.",
            "D. 5 sieci."
        ],
        "goodAnswer": "C. 2 sieci."
    },
    {
        "id": 1522,
        "question": "Jakie polecenie w systemach Windows/Linux jest zwyczajowo stosowane do \u015bledzenia trasy pakiet\u00f3w w sieciach IP?",
        "imageLoc": "",
        "answers": [
            "A. router",
            "B. ping",
            "C. tracert/traceroute",
            "D. netstat"
        ],
        "goodAnswer": "C. tracert/traceroute"
    },
    {
        "id": 1523,
        "question": "Serwerem DNS w systemie Linux jest",
        "imageLoc": "",
        "answers": [
            "A. BIND",
            "B. ProFTPD",
            "C. CUPS",
            "D. APACHE"
        ],
        "goodAnswer": "A. BIND"
    },
    {
        "id": 1524,
        "question": "Bezprzewodow\u0105 transmisj\u0119 danych zapewnia interfejs",
        "imageLoc": "",
        "answers": [
            "A. LFH60",
            "B. HDMI",
            "C. DVI",
            "D. IrDA"
        ],
        "goodAnswer": "D. IrDA"
    },
    {
        "id": 1525,
        "question": "Adapter USB na LPT mo\u017cna wykorzysta\u0107 przy niekompatybilno\u015bci z\u0142\u0105czy w przypadku pod\u0142\u0105czenia starszych egzemplarzy",
        "imageLoc": "",
        "answers": [
            "A. myszy",
            "B. klawiatury",
            "C. monitora",
            "D. drukarki"
        ],
        "goodAnswer": "D. drukarki"
    },
    {
        "id": 1526,
        "question": "U\u017cytkownik systemu Windows otrzymuje komunikaty o zbyt ma\u0142ej pami\u0119ci wirtualnej. Problem ten mo\u017cna rozwi\u0105za\u0107 przez",
        "imageLoc": "",
        "answers": [
            "A. zwi\u0119kszenie pami\u0119ci RAM",
            "B. zamontowanie dodatkowego dysku",
            "C. zamontowanie dodatkowej pami\u0119ci cache procesora",
            "D. zwi\u0119kszenie rozmiaru pliku virtualfile.sys"
        ],
        "goodAnswer": "A. zwi\u0119kszenie pami\u0119ci RAM"
    },
    {
        "id": 1527,
        "question": "U\u017cytkownik chce zabezpieczy\u0107 mechanicznie dane na karcie pami\u0119ci przed przypadkowym skasowaniem. Takie zabezpieczenie umo\u017cliwia karta",
        "imageLoc": "",
        "answers": [
            "A. MS",
            "B. MMC",
            "C. CF",
            "D. SD"
        ],
        "goodAnswer": "D. SD"
    },
    {
        "id": 1528,
        "question": "Procesory CISC charakteryzuj\u0105 si\u0119",
        "imageLoc": "",
        "answers": [
            "A. prost\u0105 i szybk\u0105 jednostk\u0105 steruj\u0105c\u0105",
            "B. ograniczan\u0105 komunikacj\u0105 pomi\u0119dzy pami\u0119ci\u0105 a procesorem",
            "C. niewielk\u0105 liczb\u0105 tryb\u00f3w adresowania",
            "D. du\u017c\u0105 liczb\u0105 rozkaz\u00f3w"
        ],
        "goodAnswer": "D. du\u017c\u0105 liczb\u0105 rozkaz\u00f3w"
    },
    {
        "id": 1529,
        "question": "Za pomoc\u0105 kt\u00f3rego polecenia systemu Linux mo\u017cliwa jest zmiana domy\u015blnej pow\u0142oki u\u017cytkownika egzamin na sh",
        "imageLoc": "",
        "answers": [
            "A. usermod -s /bin/sh egzamin",
            "B. vi /etc/passwd -sh egzamin",
            "C. groupmod /users/egzamin /bin/sh",
            "D. chmod egzamin /etc/shadow sh"
        ],
        "goodAnswer": "A. usermod -s /bin/sh egzamin"
    },
    {
        "id": 1530,
        "question": "Jednostka oblicze\u0144 zmiennoprzecinkowych to",
        "imageLoc": "",
        "answers": [
            "A. ALU",
            "B. FPU",
            "C. RPU",
            "D. AND"
        ],
        "goodAnswer": "B. FPU"
    },
    {
        "id": 1531,
        "question": "Narz\u0119dziem wiersza polece\u0144 w systemie Windows, umo\u017cliwiaj\u0105cym zamian\u0119 tablicy partycji GPT na MBR, jest program",
        "imageLoc": "",
        "answers": [
            "A. bcdedit",
            "B. diskpart",
            "C. cipher",
            "D. gparted"
        ],
        "goodAnswer": "B. diskpart"
    },
    {
        "id": 1532,
        "question": "W wyniku wykonania przedstawionego skryptu",
        "imageLoc": require("../assets/img/632.png"),
        "answers": [
            "A. zawarto\u015b\u0107 pliku ola.txt zostanie skopiowana do pliku ala.txt",
            "B. zostanie wpisany tekst ola.txt do pliku ala.txt",
            "C. zostanie wpisany tekst ala.txt do pliku ola.txt",
            "D. zawarto\u015b\u0107 pliku ala.txt zostanie skopiowana do pliku ola.txt"
        ],
        "goodAnswer": "B. zostanie wpisany tekst ola.txt do pliku ala.txt"
    },
    {
        "id": 1533,
        "question": "Szeroko\u015b\u0107 magistrali pami\u0119ci DDR SDRAM wynosi",
        "imageLoc": "",
        "answers": [
            "A. 36 bit\u00f3w",
            "B. 72 bity",
            "C. 64 bity",
            "D. 32 bity"
        ],
        "goodAnswer": "C. 64 bity"
    },
    {
        "id": 1534,
        "question": "Z jakim parametrem nale\u017cy wywo\u0142a\u0107 polecenie netstat, aby zosta\u0142a wy\u015bwietlona statystyka interfejsu sieciowego (liczba wys\u0142anych oraz odebranych bajt\u00f3w i pakiet\u00f3w)?",
        "imageLoc": "",
        "answers": [
            "A. -a",
            "B. -n",
            "C. -o",
            "D. -e"
        ],
        "goodAnswer": "D. -e"
    },
    {
        "id": 1535,
        "question": "Najmniej inwazyjnym, lecz skutecznym sposobem leczenia komputera zainfekowanego wirusem typu rootkit jest",
        "imageLoc": "",
        "answers": [
            "A. usuni\u0119cie podejrzanych proces\u00f3w z Menad\u017cera zada\u0144",
            "B. zainstalowanie najlepszego programu antywirusowego i w\u0142\u0105czenie go w tryb monitora - z czasem wirus zostanie sam wykryty",
            "C. uruchomienie specjalnego programu wykrywaj\u0105cego rootkity z zewn\u0119trznego no\u015bnika(np. LiveCD)",
            "D. przeinstalowanie systemu operacyjnego"
        ],
        "goodAnswer": "C. uruchomienie specjalnego programu wykrywaj\u0105cego rootkity z zewn\u0119trznego no\u015bnika(np. LiveCD)"
    },
    {
        "id": 1536,
        "question": "Kt\u00f3ry typ fizycznej topologii sieci komputerowej przedstawia rysunek?",
        "imageLoc": require("../assets/img/1329.png"),
        "answers": [
            "A. Cz\u0119\u015bciowej siatki",
            "B. Punkt-Punkt",
            "C. Pe\u0142nej siatki",
            "D. Gwiazdy"
        ],
        "goodAnswer": "C. Pe\u0142nej siatki"
    },
    {
        "id": 1537,
        "question": "Jednym z efekt\u00f3w wykonania przedstawionego polecenia jest",
        "imageLoc": require("../assets/img/831.png"),
        "answers": [
            "A. wymuszenie konieczno\u015bci tworzenia hase\u0142 minimum pi\u0119cioznakowych",
            "B. ustawienie mo\u017cliwo\u015bci zmiany has\u0142a po up\u0142ywie jednego dnia",
            "C. zmiana has\u0142a bie\u017c\u0105cego u\u017cytkownika na test",
            "D. automatyczna blokada konta u\u017cytkownika test po pi\u0119ciokrotnym b\u0142\u0119dnym podaniu has\u0142a"
        ],
        "goodAnswer": "B. ustawienie mo\u017cliwo\u015bci zmiany has\u0142a po up\u0142ywie jednego dnia"
    },
    {
        "id": 1538,
        "question": "Sum\u0105 dw\u00f3ch liczb binarnych 1101011 i 1001001 jest liczba dziesi\u0119tna",
        "imageLoc": "",
        "answers": [
            "A. 201",
            "B. 402",
            "C. 180",
            "D. 170"
        ],
        "goodAnswer": "C. 180"
    },
    {
        "id": 1539,
        "question": "Adres IP urz\u0105dzenia umo\u017cliwiaj\u0105cego innym komputerom w sieci lokalnej dost\u0119p do Internetu, to adres",
        "imageLoc": "",
        "answers": [
            "A. DNS",
            "B. bramy (routera)",
            "C. WINS",
            "D. proxy"
        ],
        "goodAnswer": "B. bramy (routera)"
    },
    {
        "id": 1540,
        "question": "W kt\u00f3rej technologii budowy projektor\u00f3w wykorzystywany jest system mikroskopijnych luster, z kt\u00f3rych ka\u017cde odpowiada 1 pikselowi wy\u015bwietlanego obrazu?",
        "imageLoc": "",
        "answers": [
            "A. LCD",
            "B. LED",
            "C. DLP",
            "D. LCOS"
        ],
        "goodAnswer": "C. DLP"
    },
    {
        "id": 1541,
        "question": "Na rysunku przedstawiono konfiguracj\u0119 urz\u0105dzenia. Do kt\u00f3rych port\u00f3w nale\u017cy pod\u0142\u0105czy\u0107 serwer o adresie IP 192.168.20.254/24 oraz stacj\u0119 robocz\u0105 o adresie IP 192.168.20.10/24, aby zapewni\u0107 komunikacj\u0119 tych urz\u0105dze\u0144 w sieci?",
        "imageLoc": require("../assets/img/1301.png"),
        "answers": [
            "A. Do port\u00f3w 2 i 3",
            "B. Do port\u00f3w 1 i 3",
            "C. Do port\u00f3w 3 i 4",
            "D. Do port\u00f3w 1 i 2"
        ],
        "goodAnswer": "B. Do port\u00f3w 1 i 3"
    },
    {
        "id": 1542,
        "question": "Jednostk\u0105 opisuj\u0105c\u0105 szybko\u015b\u0107 transmisji danych w sieciach komputerowych jest",
        "imageLoc": "",
        "answers": [
            "A. ips",
            "B. bps",
            "C. mips",
            "D. dpi"
        ],
        "goodAnswer": "B. bps"
    },
    {
        "id": 1543,
        "question": "Kt\u00f3ra czynno\u015b\u0107 NIE s\u0142u\u017cy do personalizacji systemu operacyjnego Windows?",
        "imageLoc": "",
        "answers": [
            "A. Ustawienie koloru lub kilku przenikaj\u0105cych si\u0119 kolor\u00f3w jako t\u0142a pulpitu.",
            "B. Ustawienie opcji wy\u015bwietlania pask\u00f3w menu i pask\u00f3w narz\u0119dziowych.",
            "C. Ustawienie wielko\u015bci pliku wymiany.",
            "D. Ustawienie domy\u015blnej przegl\u0105darki internetowej."
        ],
        "goodAnswer": "C. Ustawienie wielko\u015bci pliku wymiany."
    },
    {
        "id": 1544,
        "question": "Router Wi-Fi pracuj\u0105cy w standardzie 802.11n pozwala uzyska\u0107 maksymaln\u0105 pr\u0119dko\u015b\u0107 transmisji",
        "imageLoc": "",
        "answers": [
            "A. 1000 Mb/s",
            "B. 11 Mb/s",
            "C. 600 Mb/s",
            "D. 54 Mb/s"
        ],
        "goodAnswer": "C. 600 Mb/s"
    },
    {
        "id": 1545,
        "question": "Wska\u017c protok\u00f3\u0142 warstwy aplikacji s\u0142u\u017c\u0105cy do odbierania poczty elektronicznej, kt\u00f3ry w pierwszej fazie pobiera nag\u0142\u00f3wki wiadomo\u015bci, a pobranie ich tre\u015bci oraz za\u0142\u0105cznik\u00f3w nast\u0119puje dopiero po otwarciu maila.",
        "imageLoc": "",
        "answers": [
            "A. FTAM",
            "B. IMAP",
            "C. SNMP",
            "D. MIME"
        ],
        "goodAnswer": "B. IMAP"
    },
    {
        "id": 1546,
        "question": "Jaki adres IP odpowiada nazwie mnemonicznej localhost?",
        "imageLoc": "",
        "answers": [
            "A. 192.168.1.1",
            "B. 192.168.1.0",
            "C. 127.0.0.1",
            "D. 192.168.1.255"
        ],
        "goodAnswer": "C. 127.0.0.1"
    },
    {
        "id": 1547,
        "question": "Kondygnacyjny punkt dystrybucyjny jest po\u0142\u0105czony za pomoc\u0105 okablowania poziomego z",
        "imageLoc": "",
        "answers": [
            "A. budynkowym punktem dystrybucyjnym",
            "B. centralnym punktem dystrybucyjnym",
            "C. gniazdem abonenckim",
            "D. centralnym punktem sieci"
        ],
        "goodAnswer": "C. gniazdem abonenckim"
    },
    {
        "id": 1548,
        "question": "Us\u0142ug\u0105 katalogow\u0105 nie jest:",
        "imageLoc": "",
        "answers": [
            "A. Oracle baseDirectory",
            "B. Novell eDirectory",
            "C. Active Directory",
            "D. OpenLDAP"
        ],
        "goodAnswer": "A. Oracle baseDirectory"
    },
    {
        "id": 1549,
        "question": "Na podstawie oznaczenia pami\u0119ci DDR3 PC3-16000 mo\u017cna stwierdzi\u0107, \u017ce pami\u0119\u0107 ta:",
        "imageLoc": "",
        "answers": [
            "A. ma przepustowo\u015b\u0107 160 GB/s",
            "B. pracuje z cz\u0119stotliwo\u015bci\u0105 160 MHz",
            "C. ma przepustowo\u015b\u0107 16 GB/s",
            "D. pracuje z cz\u0119stotliwo\u015bci\u0105 16000 MHz"
        ],
        "goodAnswer": "C. ma przepustowo\u015b\u0107 16 GB/s"
    },
    {
        "id": 1550,
        "question": "Komputer jest najprawdopodobniej zainfekowany boot wirusem. Jakie dzia\u0142anie spowoduje usuni\u0119cie wirusa w spos\u00f3b najmniej inwazyjny dla systemu operacyjnego?",
        "imageLoc": "",
        "answers": [
            "A. Ponowne zainstalowanie systemu operacyjnego",
            "B. Przeskanowanie programem antywirusowym z bootowalnego no\u015bnika",
            "C. Restart systemu",
            "D. Uruchomienie systemu w trybie awaryjnym"
        ],
        "goodAnswer": "B. Przeskanowanie programem antywirusowym z bootowalnego no\u015bnika"
    },
    {
        "id": 1551,
        "question": "Toner jest materia\u0142em eksploatacyjnym drukarki",
        "imageLoc": "",
        "answers": [
            "A. ig\u0142owej",
            "B. atramentowej",
            "C. sublimacyjnej",
            "D. laserowej"
        ],
        "goodAnswer": "D. laserowej"
    },
    {
        "id": 1552,
        "question": "Kt\u00f3ry protok\u00f3\u0142 warstwy aplikacji modelu TCP/IP umo\u017cliwia klientowi bezpieczne po\u0142\u0105czenie z serwerem firmowym przez Internet, aby mia\u0142 on dost\u0119p do zasob\u00f3w firmowych?",
        "imageLoc": "",
        "answers": [
            "A. VLAN",
            "B. FYP",
            "C. NAT",
            "D. VPN"
        ],
        "goodAnswer": "D. VPN"
    },
    {
        "id": 1553,
        "question": "Aby wstrzyma\u0107 dzia\u0142anie programu zapisanego w pliku wsadowym Windows, do momentu naci\u015bni\u0119cia dowolnego klawisza nale\u017cy u\u017cy\u0107 komendy",
        "imageLoc": "",
        "answers": [
            "A. echo on",
            "B. pause",
            "C. echo off",
            "D. stop"
        ],
        "goodAnswer": "B. pause"
    },
    {
        "id": 1554,
        "question": "Domy\u015blnie anonimowy dost\u0119p do zasob\u00f3w serwera FTP umo\u017cliwia",
        "imageLoc": "",
        "answers": [
            "A. pe\u0142ne prawa dost\u0119pu",
            "B. tylko prawo do odczytu",
            "C. tylko prawo do zapisu",
            "D. prawa do odczytu i zapisu"
        ],
        "goodAnswer": "B. tylko prawo do odczytu"
    },
    {
        "id": 1555,
        "question": "Liczba FAFC zapisana w systemie heksadecymalnym odpowiada liczbie",
        "imageLoc": "",
        "answers": [
            "A. 1111101011011101 (2)",
            "B. 175376 (8)",
            "C. 64256(10)",
            "D. 1111101011111100 (2)"
        ],
        "goodAnswer": "D. 1111101011111100 (2)"
    },
    {
        "id": 1556,
        "question": "Schemat przedstawia zasad\u0119 dzia\u0142ania sieci VPN o nazwie",
        "imageLoc": require("../assets/img/1746.png"),
        "answers": [
            "A. L2TP",
            "B. Site - to - Site",
            "C. Client - to - Site",
            "D. Gateway"
        ],
        "goodAnswer": "B. Site - to - Site"
    },
    {
        "id": 1557,
        "question": "Najszybszym sposobem wstawienia skr\u00f3tu do konkretnego programu na pulpitach wszystkich u\u017cytkownik\u00f3w domenowych jest",
        "imageLoc": "",
        "answers": [
            "A. ponowna instalacja programu",
            "B. u\u017cycie zasad grupy",
            "C. pobranie aktualizacji Windows",
            "D. mapowanie dysku"
        ],
        "goodAnswer": "B. u\u017cycie zasad grupy"
    },
    {
        "id": 1558,
        "question": "Kt\u00f3re stwierdzenie dotyczy sieci P2P - peer to peer?",
        "imageLoc": "",
        "answers": [
            "A. Jest sieci\u0105 hierarchiczn\u0105",
            "B. Komputer w sieci mo\u017ce r\u00f3wnocze\u015bnie pe\u0142ni\u0107 rol\u0119 serwera i klienta",
            "C. Wymaga centralnego serwera z dedykowanym oprogramowaniem",
            "D. Udost\u0119pnia wy\u0142\u0105cznie zasoby dyskowe"
        ],
        "goodAnswer": "B. Komputer w sieci mo\u017ce r\u00f3wnocze\u015bnie pe\u0142ni\u0107 rol\u0119 serwera i klienta"
    },
    {
        "id": 1559,
        "question": "Atak komputerowy, polegaj\u0105cy na wy\u0142udzaniu poufnych informacji osobistych przez podszywanie si\u0119 pod godn\u0105 zaufania osob\u0119 lub instytucj\u0119, to",
        "imageLoc": "",
        "answers": [
            "A. spoofing",
            "B. backscatter",
            "C. spam",
            "D. phishing"
        ],
        "goodAnswer": "D. phishing"
    },
    {
        "id": 1560,
        "question": "W ramce zamieszczono zawarto\u015b\u0107 jednego z plik\u00f3w systemu operacyjnego MS Windows. Jest to plik",
        "imageLoc": require("../assets/img/195.png"),
        "answers": [
            "A. dziennika, zawieraj\u0105cy informacje o zainstalowanych urz\u0105dzeniach",
            "B. tekstowy, zawieraj\u0105cy list\u0119 zainstalowanych system\u00f3w operacyjnych",
            "C. wykonywalny, uruchamiaj\u0105cy edytor rejestru systemu",
            "D. wsadowy, s\u0142u\u017c\u0105cy do uruchamiania instalatora"
        ],
        "goodAnswer": "B. tekstowy, zawieraj\u0105cy list\u0119 zainstalowanych system\u00f3w operacyjnych"
    },
    {
        "id": 1561,
        "question": "Na kt\u00f3ry z no\u015bnik\u00f3w pami\u0119ci zewn\u0119trznej, nie przedostanie si\u0119 wirus podczas odczytywania jego zawarto\u015bci?",
        "imageLoc": "",
        "answers": [
            "A. na kart\u0119 SD",
            "B. na p\u0142yt\u0119 DVD-ROM",
            "C. na dysk zewn\u0119trzny",
            "D. na pami\u0119\u0107 Flash"
        ],
        "goodAnswer": "B. na p\u0142yt\u0119 DVD-ROM"
    },
    {
        "id": 1562,
        "question": "Ile maksymalnie host\u00f3w mo\u017cna zaadresowa\u0107 w sieci lokalnej, maj\u0105c do dyspozycji jedn\u0105 klas\u0119 C adres\u00f3w protoko\u0142u IPv4?",
        "imageLoc": "",
        "answers": [
            "A. 510",
            "B. 255",
            "C. 254",
            "D. 512"
        ],
        "goodAnswer": "C. 254"
    },
    {
        "id": 1563,
        "question": "Istniej\u0105ce konto u\u017cytkownika jest modyfikowane poleceniem net user. Aby wymusi\u0107 zmian\u0119 has\u0142a po ponownym zalogowaniu u\u017cytkownika, nale\u017cy doda\u0107 do polecenia parametr",
        "imageLoc": "",
        "answers": [
            "A. passwordchg",
            "B. passwordreq",
            "C. expirespassword",
            "D. logonpasswordchg"
        ],
        "goodAnswer": "D. logonpasswordchg"
    },
    {
        "id": 1564,
        "question": "Zdj\u0119cie przedstawia",
        "imageLoc": require("../assets/img/952.png"),
        "answers": [
            "A. wtyk kabla koncentrycznego",
            "B. wtyk \u015bwiat\u0142owodu",
            "C. przed\u0142u\u017cacz kabla UTP",
            "D. wtyk audio"
        ],
        "goodAnswer": "B. wtyk \u015bwiat\u0142owodu"
    },
    {
        "id": 1565,
        "question": "Administrator nadaj\u0105cy adresy prywatne w klasie C, z mask\u0105 24 bitow\u0105 dla komputer\u00f3w w sieci lokalnej, wybierze zakres",
        "imageLoc": "",
        "answers": [
            "A. 172.168.0.1 - 172.168.255.254",
            "B. 192.168.0.1 - 192.168.10.254",
            "C. 192.168.0.1 - 192.168.0.254",
            "D. 172.16.0.1 - 172.16.255.254"
        ],
        "goodAnswer": "C. 192.168.0.1 - 192.168.0.254"
    },
    {
        "id": 1566,
        "question": "Jaki typ z\u0142\u0105cza musi posiada\u0107 p\u0142yta g\u0142\u00f3wna, aby u\u017cytkownik m\u00f3g\u0142 zainstalowa\u0107 przedstawion\u0105 na rysunku kart\u0119 graficzn\u0105?",
        "imageLoc": require("../assets/img/777.png"),
        "answers": [
            "A. PCI",
            "B. PCIe x16",
            "C. PCIe x1",
            "D. AGP"
        ],
        "goodAnswer": "B. PCIe x16"
    },
    {
        "id": 1567,
        "question": "Jaki b\u0119dzie wynik operacji odejmowania dw\u00f3ch liczb heksadecymalnych 60A (h) - 3BF (h)?",
        "imageLoc": "",
        "answers": [
            "A. 2AE (h)",
            "B. 24B (h)",
            "C. 39A (h)",
            "D. 349 (h)"
        ],
        "goodAnswer": "B. 24B (h)"
    },
    {
        "id": 1568,
        "question": "Kt\u00f3ry materia\u0142 eksploatacyjny NIE jest wykorzystywany w ploterach?",
        "imageLoc": "",
        "answers": [
            "A. Tusz.",
            "B. Filament.",
            "C. Pisak.",
            "D. Atrament."
        ],
        "goodAnswer": "B. Filament."
    },
    {
        "id": 1569,
        "question": "Program, kt\u00f3ry umo\u017cliwia komunikacj\u0119 mi\u0119dzy kart\u0105 sieciow\u0105 a systemem operacyjnym, to",
        "imageLoc": "",
        "answers": [
            "A. middleware",
            "B. komunikator",
            "C. sterownik",
            "D. sniffer"
        ],
        "goodAnswer": "C. sterownik"
    },
    {
        "id": 1570,
        "question": "Symbol graficzny przedstawiony na rysunku oznacza",
        "imageLoc": require("../assets/img/1494.png"),
        "answers": [
            "A. zamkni\u0119ty kana\u0142 kablowy",
            "B. gniazdo telekomunikacyjne",
            "C. g\u0142\u00f3wny punkt dystrybucyjny",
            "D. otwarty kana\u0142 kablowy"
        ],
        "goodAnswer": "B. gniazdo telekomunikacyjne"
    },
    {
        "id": 1571,
        "question": "Active Directory w systemach MS Windows Server 2000 i MS Windows Server 2003 to",
        "imageLoc": "",
        "answers": [
            "A. us\u0142uga katalogowa, kt\u00f3ra przechowuje informacje dotycz\u0105ce obiekt\u00f3w w sieci i udost\u0119pnia je u\u017cytkownikom oraz administratorom sieci",
            "B. logiczna grupa komputer\u00f3w, kt\u00f3re maj\u0105 mo\u017cliwo\u015b\u0107 komunikowania si\u0119 w sieci i wzajemnego udost\u0119pniania zasob\u00f3w",
            "C. grupa komputer\u00f3w po\u0142\u0105czonych w sie\u0107, sk\u0142adaj\u0105ca si\u0119 z serwera pe\u0142ni\u0105cego rol\u0119 kontrolera oraz stacji roboczych \u2013 klient\u00f3w",
            "D. baza danych zawieraj\u0105ca informacje o u\u017cytkownikach sieci, ich has\u0142ach dost\u0119pu i uprawnieniach"
        ],
        "goodAnswer": "A. us\u0142uga katalogowa, kt\u00f3ra przechowuje informacje dotycz\u0105ce obiekt\u00f3w w sieci i udost\u0119pnia je u\u017cytkownikom oraz administratorom sieci"
    },
    {
        "id": 1572,
        "question": "Kt\u00f3ry parametr w konfiguracji punktu dost\u0119powego pe\u0142ni rol\u0119 loginu wykorzystywanego podczas pr\u00f3by nawi\u0105zywania po\u0142\u0105czenia z punktem dost\u0119powym sieci bezprzewodowej?",
        "imageLoc": require("../assets/img/2024.png"),
        "answers": [
            "A. Wireless Channel",
            "B. Wireless Network Name",
            "C. Transmission Rate",
            "D. Channel Width"
        ],
        "goodAnswer": "B. Wireless Network Name"
    },
    {
        "id": 1573,
        "question": "Za pomoc\u0105 polecenia ipconfig /flushdns mo\u017cna wykona\u0107 konserwacj\u0119 urz\u0105dzenia sieciowego polegaj\u0105c\u0105 na",
        "imageLoc": "",
        "answers": [
            "A. odnowieniu dzier\u017cawy adresu IP",
            "B. wyczyszczeniu bufora systemu nazw domenowych",
            "C. zwolnieniu dzier\u017cawy adresu uzyskanego z DHCP",
            "D. aktualizacji ustawie\u0144 nazw interfejs\u00f3w sieciowych"
        ],
        "goodAnswer": "B. wyczyszczeniu bufora systemu nazw domenowych"
    },
    {
        "id": 1574,
        "question": "System operacyjny zosta\u0142 zaatakowany przez oprogramowanie szpieguj\u0105ce. Po usuni\u0119ciu usterek, aby unikn\u0105\u0107 kolejnego ataku, zaleca si\u0119",
        "imageLoc": "",
        "answers": [
            "A. ustawienie czyszczenia pami\u0119ci podr\u0119cznej.",
            "B. utworzenie dw\u00f3ch partycji na dysku twardym.",
            "C. wykonanie defragmentacji dysku.",
            "D. zainstalowanie oprogramowania antyspyware."
        ],
        "goodAnswer": "D. zainstalowanie oprogramowania antyspyware."
    },
    {
        "id": 1575,
        "question": "Adresem rozg\u0142oszeniowym sieci, w kt\u00f3rej pracuje host o adresie IP 195.120.252.32 i masce podsieci 255.255.255.192 jest",
        "imageLoc": "",
        "answers": [
            "A. 195.120.252.0",
            "B. 195.120.252.63",
            "C. 195.120.252.255",
            "D. 195.120.255.255"
        ],
        "goodAnswer": "B. 195.120.252.63"
    },
    {
        "id": 1576,
        "question": "Autorskie prawo osobiste tw\u00f3rcy do programu komputerowego",
        "imageLoc": "",
        "answers": [
            "A. nigdy nie wygasa",
            "B. trwa wy\u0142\u0105cznie przez czas \u017cycia jego tw\u00f3rcy",
            "C. trwa 70 lat od daty pierwszej publikacji",
            "D. trwa 50 lat od daty pierwszej publikacji"
        ],
        "goodAnswer": "A. nigdy nie wygasa"
    },
    {
        "id": 1577,
        "question": "W kt\u00f3ry rodzaj matrycy powinien by\u0107 wyposa\u017cony monitor w modernizowanym zestawie komputerowym w przypadku konieczno\u015bci zapewnienia wysokiej jako\u015bci obrazu oraz szerokich k\u0105t\u00f3w widzenia w poziomie i pionie?",
        "imageLoc": "",
        "answers": [
            "A. DLP",
            "B. TN",
            "C. IPS",
            "D. CRT"
        ],
        "goodAnswer": "C. IPS"
    },
    {
        "id": 1578,
        "question": "Do pomiaru warto\u015bci rezystancji s\u0142u\u017cy",
        "imageLoc": "",
        "answers": [
            "A. woltomierz",
            "B. watomierz",
            "C. omomierz",
            "D. amperomierz"
        ],
        "goodAnswer": "C. omomierz"
    },
    {
        "id": 1579,
        "question": "Administrator musi podzieli\u0107 adres 10.0.0.0/16 na 4 r\u00f3wne podsieci o tej samej liczbie host\u00f3w. Jak\u0105 mask\u0119 b\u0119d\u0105 mia\u0142y te podsieci?",
        "imageLoc": "",
        "answers": [
            "A. 255.255.192.0",
            "B. 255.255.224.0",
            "C. 255.255.0.0.",
            "D. 255.255.128.0"
        ],
        "goodAnswer": "A. 255.255.192.0"
    },
    {
        "id": 1580,
        "question": "Okresowych kopii zapasowych dysk\u00f3w serwera nie mo\u017cna tworzy\u0107 na wymiennych no\u015bnikach typu",
        "imageLoc": "",
        "answers": [
            "A. p\u0142yty DVD-ROM",
            "B. p\u0142yty CD-RW",
            "C. karty SD",
            "D. karty MMC"
        ],
        "goodAnswer": "A. p\u0142yty DVD-ROM"
    },
    {
        "id": 1581,
        "question": "U\u017cytkownik laptopa chce do niego pod\u0142\u0105czy\u0107 przedstawion\u0105 na rysunku kart\u0119 sieciow\u0105. Aby to by\u0142o mo\u017cliwe, laptop musi by\u0107 wyposa\u017cony w gniazdo",
        "imageLoc": require("../assets/img/746.png"),
        "answers": [
            "A. Slot 3",
            "B. PCMCIA",
            "C. Mini DIN",
            "D. BNC"
        ],
        "goodAnswer": "B. PCMCIA"
    },
    {
        "id": 1582,
        "question": "Ile maksymalnie dysk\u00f3w twardych mo\u017cna pod\u0142\u0105czy\u0107 bezpo\u015brednio do p\u0142yty g\u0142\u00f3wnej, kt\u00f3rej fragment specyfikacji przedstawiono w ramce?",
        "imageLoc": require("../assets/img/198.png"),
        "answers": [
            "A. 2",
            "B. 4",
            "C. 8",
            "D. 5"
        ],
        "goodAnswer": "D. 5"
    },
    {
        "id": 1583,
        "question": "Na rysunku przedstawiony jest symbol graficzny",
        "imageLoc": require("../assets/img/2039.png"),
        "answers": [
            "A. zapory sieciowej.",
            "B. mostu sieciowego.",
            "C. rutera.",
            "D. prze\u0142\u0105cznika."
        ],
        "goodAnswer": "A. zapory sieciowej."
    },
    {
        "id": 1584,
        "question": "Wymiana baterii nale\u017cy do czynno\u015bci zwi\u0105zanych z eksploatacj\u0105",
        "imageLoc": "",
        "answers": [
            "A. drukarki laserowej",
            "B. myszy bezprzewodowej",
            "C. skanera p\u0142askiego",
            "D. telewizora projekcyjnego"
        ],
        "goodAnswer": "B. myszy bezprzewodowej"
    },
    {
        "id": 1585,
        "question": "Funkcje r\u00f3\u017cnych kategorii (daty i czasu, finansowe, tekstowe, matematyczne, statystyczne) s\u0105 elementem sk\u0142adowym",
        "imageLoc": "",
        "answers": [
            "A. edytora tekstu",
            "B. program\u00f3w do tworzenia prezentacji multimedialnych",
            "C. przegl\u0105darki internetowej",
            "D. arkusza kalkulacyjnego"
        ],
        "goodAnswer": "D. arkusza kalkulacyjnego"
    },
    {
        "id": 1586,
        "question": "Aby zapobiec wy\u0142adowaniom elektrostatycznym podczas wymiany podzespo\u0142\u00f3w komputerowych, technik powinien zastosowa\u0107",
        "imageLoc": "",
        "answers": [
            "A. odzie\u017c poliestrow\u0105",
            "B. mat\u0119 i opask\u0119 antystatyczn\u0105",
            "C. okulary ochronne",
            "D. r\u0119kawice gumowe"
        ],
        "goodAnswer": "B. mat\u0119 i opask\u0119 antystatyczn\u0105"
    },
    {
        "id": 1587,
        "question": "W dokumentacji technicznej procesora producent umie\u015bci\u0142 wyniki testu przeprowadzonego za pomoc\u0105 programu CPU-Z. Wynika z niego, \u017ce procesor ma",
        "imageLoc": require("../assets/img/92.png"),
        "answers": [
            "A. 2 rdzenie",
            "B. 4 rdzenie",
            "C. 5 rdzeni",
            "D. 6 rdzeni"
        ],
        "goodAnswer": "A. 2 rdzenie"
    },
    {
        "id": 1588,
        "question": "Sie\u0107 o adresie 192.168.1.128/29 pozwala na pod\u0142\u0105czenie",
        "imageLoc": "",
        "answers": [
            "A. 16 host\u00f3w",
            "B. 12 host\u00f3w",
            "C. 6 host\u00f3w",
            "D. 8 host\u00f3w"
        ],
        "goodAnswer": "C. 6 host\u00f3w"
    },
    {
        "id": 1589,
        "question": "Kt\u00f3rego kodu numerycznego nale\u017cy u\u017cy\u0107 w poleceniu zmiany uprawnie\u0144 do folderu w systemie Linux, aby w\u0142a\u015bciciel folderu mia\u0142 uprawnienia zapisu i odczytu, grupa mia\u0142a uprawnienia odczytu i wykonania, a pozostali u\u017cytkownicy tylko uprawnienia odczytu?",
        "imageLoc": "",
        "answers": [
            "A. 751",
            "B. 123",
            "C. 765",
            "D. 654"
        ],
        "goodAnswer": "D. 654"
    },
    {
        "id": 1590,
        "question": "Do realizacji iloczynu logicznego z negacj\u0105 nale\u017cy u\u017cy\u0107 funktora",
        "imageLoc": "",
        "answers": [
            "A. NAND",
            "B. EX-OR",
            "C. AND",
            "D. NOT"
        ],
        "goodAnswer": "A. NAND"
    },
    {
        "id": 1591,
        "question": "Komputer utraci\u0142 po\u0142\u0105czenie z sieci\u0105 komputerow\u0105. Jakie dzia\u0142anie nale\u017cy wykona\u0107 w pierwszej kolejno\u015bci, aby rozwi\u0105za\u0107 problem?",
        "imageLoc": "",
        "answers": [
            "A. Przelogowa\u0107 si\u0119 na innego u\u017cytkownika.",
            "B. Zaktualizowa\u0107 system operacyjny.",
            "C. Sprawdzi\u0107 adres IP przypisany do karty sieciowej.",
            "D. Zaktualizowa\u0107 sterownik karty sieciowej."
        ],
        "goodAnswer": "C. Sprawdzi\u0107 adres IP przypisany do karty sieciowej."
    },
    {
        "id": 1592,
        "question": "Aby wdro\u017cy\u0107 us\u0142ug\u0119 zdalnej instalacji system\u00f3w operacyjnych na stacjach roboczych nale\u017cy w Windows Server zainstalowa\u0107 rol\u0119",
        "imageLoc": "",
        "answers": [
            "A. Hyper-V",
            "B. Application Server",
            "C. IIS (Internet Information Services)",
            "D. WDS (Us\u0142ugi wdra\u017cania systemu Windows)"
        ],
        "goodAnswer": "D. WDS (Us\u0142ugi wdra\u017cania systemu Windows)"
    },
    {
        "id": 1593,
        "question": "Programem, kt\u00f3ry dostarcza najwi\u0119cej informacji diagnostycznych o procesorze CPU, jest",
        "imageLoc": "",
        "answers": [
            "A. Memtest86+",
            "B. GPU-Z",
            "C. HWiNFO",
            "D. HD Tune"
        ],
        "goodAnswer": "C. HWiNFO"
    },
    {
        "id": 1594,
        "question": "W kt\u00f3rym gnie\u017adzie nale\u017cy zainstalowa\u0107 procesor INTEL CORE i3-4350- 3.60 GHz, x2/4, 4MB, 54W, HD 4600, BOX, s-1150?",
        "imageLoc": require("../assets/img/1103.png"),
        "answers": [
            "A. A",
            "B. B",
            "C. C",
            "D. D"
        ],
        "goodAnswer": "B. B"
    },
    {
        "id": 1595,
        "question": "W systemach Windows XP Pro/Windows Vista Business/Windows 7 Pro/Windows 8 Pro, opcj\u0105 gwarantuj\u0105ca poufno\u015b\u0107 danych dla u\u017cytkownik\u00f3w korzystaj\u0105cych z tego samego komputera, kt\u00f3rych dane mog\u0105 by\u0107 wykorzystywane wy\u0142\u0105cznie przez nich samych, jest",
        "imageLoc": "",
        "answers": [
            "A. samodzielnie przypisywanie plikom atrybutu: zaszyfrowany",
            "B. korzystanie z w\u0142asnym kont z ograniczeniami",
            "C. korzystanie z w\u0142asnych kont z uprawnieniami administratora",
            "D. samodzielne przypisywanie plikom atrybutu: ukryty"
        ],
        "goodAnswer": "A. samodzielnie przypisywanie plikom atrybutu: zaszyfrowany"
    },
    {
        "id": 1596,
        "question": "Na rysunku przedstawiono sie\u0107 lokaln\u0105 opart\u0105 na okablowaniu kat. 6. Stacja robocza C nie mo\u017ce skomunikowa\u0107 si\u0119 z sieci\u0105. Jaki problem warstwy fizycznej mo\u017ce powodowa\u0107 brak \u0142\u0105czno\u015bci?",
        "imageLoc": require("../assets/img/1168.png"),
        "answers": [
            "A. Nieprawid\u0142owy adres IP",
            "B. Z\u0142y typ prze\u0142\u0105cznika",
            "C. Z\u0142a d\u0142ugo\u015b\u0107 kabla",
            "D. Nieodpowiedni kabel"
        ],
        "goodAnswer": "C. Z\u0142a d\u0142ugo\u015b\u0107 kabla"
    },
    {
        "id": 1597,
        "question": "W kt\u00f3rych no\u015bnikach pami\u0119ci masowej uszkodzenia mechaniczne s\u0105 najbardziej prawdopodobne?",
        "imageLoc": "",
        "answers": [
            "A. W dyskach SSD",
            "B. W dyskach HDD",
            "C. W kartach pami\u0119ci SD",
            "D. W pami\u0119ciach Flash"
        ],
        "goodAnswer": "B. W dyskach HDD"
    },
    {
        "id": 1598,
        "question": "Jeden terabajt jest r\u00f3wny",
        "imageLoc": "",
        "answers": [
            "A. 10^10 bajt\u00f3w",
            "B. 10^14 bajt\u00f3w",
            "C. 10^8 bajt\u00f3w",
            "D. 10^12 bajt\u00f3w"
        ],
        "goodAnswer": "D. 10^12 bajt\u00f3w"
    },
    {
        "id": 1599,
        "question": "Sie\u0107 komputerowa ograniczaj\u0105ca si\u0119 do komputer\u00f3w wy\u0142\u0105cznie jednej organizacji, w kt\u00f3rej mog\u0105 istnie\u0107 us\u0142ugi, realizowane przez serwery w sieci LAN, np. strony WWW, poczta elektroniczna to",
        "imageLoc": "",
        "answers": [
            "A. Intranet",
            "B. Extranet",
            "C. Internet",
            "D. Infranet"
        ],
        "goodAnswer": "A. Intranet"
    },
    {
        "id": 1600,
        "question": "Maksymalna d\u0142ugo\u015b\u0107 kabla miedzianego UTP kategorii 5e \u0142\u0105cz\u0105cego bezpo\u015brednio dwa urz\u0105dzenia sieciowe, zgodnie z standardem Fast Ethernet 100Base-TX, wynosi",
        "imageLoc": "",
        "answers": [
            "A. 100 m",
            "B. 1000 m",
            "C. 300 m",
            "D. 150 m"
        ],
        "goodAnswer": "A. 100 m"
    },
    {
        "id": 1601,
        "question": "Kt\u00f3ra rola systemu Windows Server umo\u017cliwia m.in. uproszczon\u0105, bezpieczn\u0105 i zdaln\u0105 instalacj\u0119 system\u00f3w operacyjnych Windows na komputerach w sieci?",
        "imageLoc": "",
        "answers": [
            "A. Us\u0142uga wdra\u017cania systemu Windows",
            "B. Serwer aplikacji",
            "C. Us\u0142uga aktywacji zbiorczej",
            "D. Hyper-V"
        ],
        "goodAnswer": "A. Us\u0142uga wdra\u017cania systemu Windows"
    },
    {
        "id": 1602,
        "question": "Kt\u00f3ry typ licencji uprawnia do dowolnych modyfikacji, kopiowania oraz rozpowszechniania po uiszczeniu dowolnej op\u0142aty na rzecz autora?",
        "imageLoc": "",
        "answers": [
            "A. postcardware",
            "B. donationware",
            "C. shareware",
            "D. adware"
        ],
        "goodAnswer": "B. donationware"
    },
    {
        "id": 1603,
        "question": "Do pomiaru warto\u015bci mocy pobieranej przez komputer nale\u017cy u\u017cy\u0107",
        "imageLoc": "",
        "answers": [
            "A. watomierza",
            "B. testera zasilaczy",
            "C. woltomierza",
            "D. amperomierza"
        ],
        "goodAnswer": "A. watomierza"
    },
    {
        "id": 1604,
        "question": "Technika zwana rytownictwem odnosi si\u0119 do zasady dzia\u0142ania plotera",
        "imageLoc": "",
        "answers": [
            "A. tn\u0105cego",
            "B. laserowego",
            "C. solwentowego",
            "D. graweruj\u0105cego"
        ],
        "goodAnswer": "D. graweruj\u0105cego"
    },
    {
        "id": 1605,
        "question": "Kt\u00f3re zadanie spe\u0142nia system informatyczny?",
        "imageLoc": "",
        "answers": [
            "A. Zabezpieczanie przed wirusami",
            "B. Sterowanie monitorem CRT",
            "C. Przetwarzanie danych",
            "D. Kontrola pracy oprogramowania diagnostycznego"
        ],
        "goodAnswer": "C. Przetwarzanie danych"
    },
    {
        "id": 1606,
        "question": "Norma PN-EN 50173 zaleca instalowanie minimum",
        "imageLoc": "",
        "answers": [
            "A. 1 punktu rozdzielczego na ka\u017cde 250 m2 powierzchni",
            "B. 1 punktu rozdzielczego na ka\u017cde pi\u0119tro",
            "C. 1 punktu rozdzielczego na ca\u0142y wielopi\u0119trowy budynek",
            "D. 1 punktu rozdzielczego na ka\u017cde 100 m2 powierzchni"
        ],
        "goodAnswer": "B. 1 punktu rozdzielczego na ka\u017cde pi\u0119tro"
    },
    {
        "id": 1607,
        "question": "Monitor CRT \u0142\u0105czy si\u0119 z kart\u0105 graficzn\u0105 za pomoc\u0105 z\u0142\u0105cza",
        "imageLoc": "",
        "answers": [
            "A. PCMCIA",
            "B. D-USB",
            "C. BNC",
            "D. D-SUB"
        ],
        "goodAnswer": "D. D-SUB"
    },
    {
        "id": 1608,
        "question": "Do sprawdzenia indeksu stabilno\u015bci systemu Windows Server nale\u017cy wykorzysta\u0107 narz\u0119dzie",
        "imageLoc": "",
        "answers": [
            "A. Dziennik zdarze\u0144",
            "B. Monitor niezawodno\u015bci",
            "C. Zasady grupy",
            "D. Mened\u017cer zada\u0144"
        ],
        "goodAnswer": "B. Monitor niezawodno\u015bci"
    },
    {
        "id": 1609,
        "question": "Przedstawiony rysunek prezentuje z\u0142\u0105cze",
        "imageLoc": require("../assets/img/547.png"),
        "answers": [
            "A. DVI-A",
            "B. D-SUB",
            "C. DVI-D",
            "D. HDMI"
        ],
        "goodAnswer": "A. DVI-A"
    },
    {
        "id": 1610,
        "question": "Jaka jest maksymalna liczba host\u00f3w, kt\u00f3re mo\u017cna zaadresowa\u0107 w sieci o masce 255.255.255.192?",
        "imageLoc": "",
        "answers": [
            "A. 14",
            "B. 30",
            "C. 62",
            "D. 127"
        ],
        "goodAnswer": "C. 62"
    },
    {
        "id": 1611,
        "question": "Administrator musi podzieli\u0107 adres 10.0.0.0/16 na 4 r\u00f3wne podsieci o tej samej liczbie host\u00f3w. Jak\u0105 mask\u0119 b\u0119d\u0105 mia\u0142y te podsieci?",
        "imageLoc": "",
        "answers": [
            "A. 255.255.128.0",
            "B. 255.255.0.0",
            "C. 255.255.224.0",
            "D. 255.255.192.0"
        ],
        "goodAnswer": "D. 255.255.192.0"
    },
    {
        "id": 1612,
        "question": "W systemie Windows uruchomienie us\u0142ugi dotycz\u0105cej wydajno\u015bci komputera realizowane jest za pomoc\u0105 polecenia",
        "imageLoc": "",
        "answers": [
            "A. secpol.msc",
            "B. compmgmt.msc",
            "C. services.msc",
            "D. perfmon.msc"
        ],
        "goodAnswer": "D. perfmon.msc"
    },
    {
        "id": 1613,
        "question": "Jaki jest najwi\u0119kszy adres IP w podsieci 196.10.20.0/26?",
        "imageLoc": "",
        "answers": [
            "A. 196.10.20.64",
            "B. 196.10.20.63",
            "C. 196.10.20.1",
            "D. 196.10.20.0"
        ],
        "goodAnswer": "B. 196.10.20.63"
    },
    {
        "id": 1614,
        "question": "Odnalezienie g\u0142\u00f3wnego rekordu rozruchowego, wczytuj\u0105cego system z aktywnej partycji umo\u017cliwia",
        "imageLoc": "",
        "answers": [
            "A. POST",
            "B. GUID Partition Table",
            "C. CDDL",
            "D. BootstrapLoader"
        ],
        "goodAnswer": "D. BootstrapLoader"
    },
    {
        "id": 1615,
        "question": "Funkcj\u0105 serwera FTP jest",
        "imageLoc": "",
        "answers": [
            "A. udost\u0119pnianie plik\u00f3w",
            "B. synchronizacja czasu",
            "C. monitoring sieci",
            "D. zarz\u0105dzanie kontami poczty"
        ],
        "goodAnswer": "A. udost\u0119pnianie plik\u00f3w"
    },
    {
        "id": 1616,
        "question": "W adresacji IPv6 adres ff00::/8 okre\u015bla",
        "imageLoc": "",
        "answers": [
            "A. pul\u0119 adres\u00f3w testowej sieci 6bone.",
            "B. pul\u0119 adres\u00f3w u\u017cywanych do komunikacji multicast.",
            "C. adres wskazuj\u0105cy na lokalnego host",
            "D. adres nieokre\u015blony."
        ],
        "goodAnswer": "B. pul\u0119 adres\u00f3w u\u017cywanych do komunikacji multicast."
    },
    {
        "id": 1617,
        "question": "Interfejs UDMA to interfejs",
        "imageLoc": "",
        "answers": [
            "A. . szeregowy, u\u017cywany do pod\u0142\u0105czania urz\u0105dze\u0144 wej\u015bcia.",
            "B. r\u00f3wnoleg\u0142y, wykorzystywany mi\u0119dzy innymi do pod\u0142\u0105czania kina domowego do komputera.",
            "C. r\u00f3wnoleg\u0142y, kt\u00f3ry zosta\u0142 zast\u0105piony przez interfejs SATA.",
            "D. szeregowy, kt\u00f3ry s\u0142u\u017cy do wymiany danych pomi\u0119dzy pami\u0119ci\u0105 RAM a dyskami twardymi."
        ],
        "goodAnswer": "C. r\u00f3wnoleg\u0142y, kt\u00f3ry zosta\u0142 zast\u0105piony przez interfejs SATA."
    },
    {
        "id": 1618,
        "question": "Impulsator umo\u017cliwia testowanie uszkodzonych uk\u0142ad\u00f3w logicznych komputera mi\u0119dzy innymi przez",
        "imageLoc": "",
        "answers": [
            "A. badanie stan\u00f3w logicznych obwod\u00f3w cyfrowych",
            "B. kalibracj\u0119 mierzonych wielko\u015bci elektrycznych",
            "C. podanie na wej\u015bcie uk\u0142adu stanu wysokiego",
            "D. odczytanie stanu wyj\u015bciowego uk\u0142adu"
        ],
        "goodAnswer": "C. podanie na wej\u015bcie uk\u0142adu stanu wysokiego"
    },
    {
        "id": 1619,
        "question": "U\u017cytkownicy z sieci wewn\u0119trznej komunikuj\u0105 si\u0119 ze sob\u0105, ale nie mog\u0105 si\u0119 skomunikowa\u0107 z serwerem WWW. Wynik polecenia ping z komputer\u00f3w bramy jest pozytywny. Kt\u00f3ry element sieci NIE MO\u017bE by\u0107 przyczyn\u0105 problemu?",
        "imageLoc": require("../assets/img/2111.png"),
        "answers": [
            "A. Karta sieciowa serwera",
            "B. Router",
            "C. Prze\u0142\u0105cznik",
            "D. Kabel mi\u0119dzy routerem a serwerem WWW"
        ],
        "goodAnswer": "C. Prze\u0142\u0105cznik"
    },
    {
        "id": 1620,
        "question": "Kt\u00f3ry z adres\u00f3w IP jest adresem hosta pracuj\u0105cego w sieci o adresie 192.168.160.224/28?",
        "imageLoc": "",
        "answers": [
            "A. 192.168.160.225",
            "B. 192.168.160.240",
            "C. 192.168.160.192",
            "D. 192.168.160.239"
        ],
        "goodAnswer": "A. 192.168.160.225"
    },
    {
        "id": 1621,
        "question": "Z kt\u00f3rym medium transmisyjnym wykorzystuje si\u0119 przedstawiony na rysunku adapter?",
        "imageLoc": require("../assets/img/87.png"),
        "answers": [
            "A. Z przewodem koncentrycznym",
            "B. Z przewodem FTP",
            "C. Ze \u015bwiat\u0142owodem",
            "D. Z przewodem UTP"
        ],
        "goodAnswer": "C. Ze \u015bwiat\u0142owodem"
    },
    {
        "id": 1622,
        "question": "Sie\u0107 Ethernet pracuje w logicznej topologii",
        "imageLoc": "",
        "answers": [
            "A. rozg\u0142aszania",
            "B. siatkowej",
            "C. pier\u015bcieniowej i liniowej",
            "D. siatki i gwiazdy"
        ],
        "goodAnswer": "A. rozg\u0142aszania"
    },
    {
        "id": 1623,
        "question": "Aby uzupe\u0142ni\u0107 prawid\u0142ow\u0105 sk\u0142adni\u0119 prezentowanego polecenia, kt\u00f3re udost\u0119pnia folder Dane pod nazw\u0105 test, w miejscu kropek nale\u017cy wpisa\u0107 s\u0142owo",
        "imageLoc": require("../assets/img/2083.png"),
        "answers": [
            "A. connect",
            "B. use",
            "C. view",
            "D. share"
        ],
        "goodAnswer": "D. share"
    },
    {
        "id": 1624,
        "question": "Aby sprawdzi\u0107 integralno\u015b\u0107 systemu plik\u00f3w w systemie Linux nale\u017cy u\u017cy\u0107 polecenia",
        "imageLoc": "",
        "answers": [
            "A. fsck",
            "B. man",
            "C. mkfs",
            "D. fstab"
        ],
        "goodAnswer": "A. fsck"
    },
    {
        "id": 1625,
        "question": "W kt\u00f3rym gnie\u017adzie nale\u017cy zainstalowa\u0107 procesor INTEL CORE i3-4350- 3.60 GHz, x2/4, 4MB, 54W, HD 4600, BOX, s-1150?",
        "imageLoc": require("../assets/img/783.png"),
        "answers": [
            "A. A",
            "B. B",
            "C. C",
            "D. D"
        ],
        "goodAnswer": "B. B"
    },
    {
        "id": 1626,
        "question": "Adres IP serwera, na kt\u00f3rym jest zainstalowana domena www.wp.pl to 212.77.98.9. Co jest przyczyn\u0105 sytuacji przedstawionej na zrzucie ekranowym?",
        "imageLoc": require("../assets/img/720.png"),
        "answers": [
            "A. B\u0142\u0119dny adres serwera DNS lub brak po\u0142\u0105czenia z serwerem DNS",
            "B. Domena o nazwie www.wp.pl jest niedost\u0119pna w sieci",
            "C. Nie ma w sieci serwera o adresie IP 212.77.98.9",
            "D. Stacja robocza i domena www.wp.pl nie pracuj\u0105 w tej samej sieci"
        ],
        "goodAnswer": "A. B\u0142\u0119dny adres serwera DNS lub brak po\u0142\u0105czenia z serwerem DNS"
    },
    {
        "id": 1627,
        "question": "Sprawdzenie minimalnego okresu wa\u017cno\u015bci has\u0142a w systemie Windows umo\u017cliwia polecenie",
        "imageLoc": "",
        "answers": [
            "A. net user",
            "B. net accounts",
            "C. net time",
            "D. net group"
        ],
        "goodAnswer": "B. net accounts"
    },
    {
        "id": 1628,
        "question": "U\u017cytkownik laptopa z systemu Windows 7 widzi dost\u0119pne sieci bezprzewodowe jak na rysunku. Konfiguruj\u0105c po\u0142\u0105czenie z sieci\u0105 Z1 musi dla tej sieci poda\u0107",
        "imageLoc": require("../assets/img/1264.png"),
        "answers": [
            "A. typ zabezpiecze\u0144",
            "B. klucz zabezpiecze\u0144",
            "C. nazw\u0119 SSID",
            "D. adres MAC"
        ],
        "goodAnswer": "B. klucz zabezpiecze\u0144"
    },
    {
        "id": 1629,
        "question": "Ile podw\u00f3jnych gniazd RJ45 powinno by\u0107 zamontowanych w pomieszczeniu o wymiarach 8 x 5 m, aby by\u0142y spe\u0142nione zalecenia normy PN-EN 50173?",
        "imageLoc": "",
        "answers": [
            "A. 4 gniazda",
            "B. 8 gniazd",
            "C. 10 gniazd",
            "D. 5 gniazd"
        ],
        "goodAnswer": "A. 4 gniazda"
    },
    {
        "id": 1630,
        "question": "Jak\u0105 posta\u0107 ma adres IP 192.168.1.12 w zapisie binarnym?",
        "imageLoc": "",
        "answers": [
            "A. 11000010.10101100.00000111.00001101",
            "B. 11000100.10101010.00000101.00001001",
            "C. 11000001.10111000.00000011.00001110",
            "D. 11000000.10101000.00000001.00001100"
        ],
        "goodAnswer": "D. 11000000.10101000.00000001.00001100"
    },
    {
        "id": 1631,
        "question": "Do wykonania obrazu dysku twardego mo\u017cna u\u017cy\u0107 programu",
        "imageLoc": "",
        "answers": [
            "A. Acronis True Image",
            "B. HW Monitor",
            "C. Digital Image Recovery",
            "D. SpeedFan"
        ],
        "goodAnswer": "A. Acronis True Image"
    },
    {
        "id": 1632,
        "question": "Symbol graficzny przedstawiony na rysunku oznacza",
        "imageLoc": require("../assets/img/1924.png"),
        "answers": [
            "A. otwarty kana\u0142 kablowy",
            "B. g\u0142\u00f3wny punkt dystrybucyjny",
            "C. gniazdo telekomunikacyjne",
            "D. zamkni\u0119ty kana\u0142 kablowy"
        ],
        "goodAnswer": "C. gniazdo telekomunikacyjne"
    },
    {
        "id": 1633,
        "question": "Granicy dla domeny kolizyjnej nie wyznaczaj\u0105 porty urz\u0105dze\u0144 takich jak",
        "imageLoc": "",
        "answers": [
            "A. router",
            "B. most (ang. bridge)",
            "C. prze\u0142\u0105cznik (ang. switch)",
            "D. koncentrator (ang. hub)"
        ],
        "goodAnswer": "D. koncentrator (ang. hub)"
    },
    {
        "id": 1634,
        "question": "Kt\u00f3ry poziom macierzy RAID zapisuje dane r\u00f3wnolegle na kilku dyskach jako jedno urz\u0105dzenie",
        "imageLoc": "",
        "answers": [
            "A. RAID 0",
            "B. RAID 1",
            "C. RAID 3",
            "D. RAID 2"
        ],
        "goodAnswer": "A. RAID 0"
    },
    {
        "id": 1635,
        "question": "Kt\u00f3re z wymienionych polece\u0144 w systemie Windows XP s\u0142u\u017cy do sprawdzenia bie\u017c\u0105cej konfiguracji IP systemu Windows?",
        "imageLoc": "",
        "answers": [
            "A. ipconfig",
            "B. tcpconfig",
            "C. ipedit",
            "D. configip"
        ],
        "goodAnswer": "A. ipconfig"
    },
    {
        "id": 1636,
        "question": "Wska\u017c rysunek przedstawiaj\u0105cy materia\u0142 eksploatacyjny typowy dla drukarek \u017celowych",
        "imageLoc": require("../assets/img/723.png"),
        "answers": [
            "A. A",
            "B. B",
            "C. C",
            "D. D"
        ],
        "goodAnswer": "C. C"
    },
    {
        "id": 1637,
        "question": "Us\u0142uga o nazwie: \"Pulpit zdalny\" domy\u015blnie dzia\u0142a na porcie",
        "imageLoc": "",
        "answers": [
            "A. 3379",
            "B. 3390",
            "C. 3369",
            "D. 3389"
        ],
        "goodAnswer": "D. 3389"
    },
    {
        "id": 1638,
        "question": "Na nowym komputerze program antywirusowy nale\u017cy zainstalowa\u0107",
        "imageLoc": "",
        "answers": [
            "A. przed zainstalowaniem systemu operacyjnego",
            "B. zaraz po zainstalowaniu systemu operacyjnego",
            "C. po zainstalowaniu pobranych z Internetu program\u00f3w",
            "D. w trakcie instalacji systemu operacyjnego"
        ],
        "goodAnswer": "B. zaraz po zainstalowaniu systemu operacyjnego"
    },
    {
        "id": 1639,
        "question": "Kt\u00f3re polecenie w systemie operacyjnym Linux jest stosowane do wy\u015bwietlania konfiguracji interfejs\u00f3w sieciowych?",
        "imageLoc": "",
        "answers": [
            "A. tracert",
            "B. ipconfig",
            "C. ifconfig",
            "D. ping"
        ],
        "goodAnswer": "C. ifconfig"
    },
    {
        "id": 1640,
        "question": "Adapter USB na LPT mo\u017cna wykorzysta\u0107 przy niekompatybilno\u015bci z\u0142\u0105czy w przypadku pod\u0142\u0105czenia starszych egzemplarzy",
        "imageLoc": "",
        "answers": [
            "A. monitora",
            "B. drukarki",
            "C. klawiatury",
            "D. myszy"
        ],
        "goodAnswer": "B. drukarki"
    },
    {
        "id": 1641,
        "question": "fps (ang. frames per second) bezpo\u015brednio odnosi si\u0119 do",
        "imageLoc": "",
        "answers": [
            "A. efektywno\u015bci przep\u0142ywu informacji na magistrali systemowej",
            "B. pr\u0119dko\u015bci przesy\u0142ania danych do dysku w standardzie SATA",
            "C. p\u0142ynno\u015bci wy\u015bwietlania ruchomych obraz\u00f3w",
            "D. wydajno\u015bci uk\u0142ad\u00f3w pami\u0119ci RAM"
        ],
        "goodAnswer": "C. p\u0142ynno\u015bci wy\u015bwietlania ruchomych obraz\u00f3w"
    },
    {
        "id": 1642,
        "question": "Na zdj\u0119ciu przedstawiono",
        "imageLoc": require("../assets/img/64.png"),
        "answers": [
            "A. kart\u0119 sieci bezprzewodowej",
            "B. modu\u0142 \u0142\u0105cz\u0105cy komputer z UPS",
            "C. modem kablowy",
            "D. kart\u0119 telewizyjn\u0105"
        ],
        "goodAnswer": "A. kart\u0119 sieci bezprzewodowej"
    },
    {
        "id": 1643,
        "question": "Element oznaczony numerem 1 na schemacie blokowym procesora jest odpowiedzialny za",
        "imageLoc": require("../assets/img/192.png"),
        "answers": [
            "A. wykonywanie operacji na liczbach zmiennoprzecinkowych",
            "B. przechowywanie wyniku operacji",
            "C. przechowywanie dodatkowych informacji o wykonywanej operacji",
            "D. wykonywanie operacji na blokach danych"
        ],
        "goodAnswer": "A. wykonywanie operacji na liczbach zmiennoprzecinkowych"
    },
    {
        "id": 1644,
        "question": "W celu wyegzekwowania od u\u017cytkownik\u00f3w lokalnych system\u00f3w z rodziny Windows Server okresowej zmiany has\u0142a i stosowania hase\u0142 o odpowiedniej d\u0142ugo\u015bci spe\u0142niaj\u0105cych wymagania co do z\u0142o\u017cono\u015bci, nale\u017cy skonfigurowa\u0107",
        "imageLoc": "",
        "answers": [
            "A. zasady blokady konta w zasadach grup",
            "B. w\u0142a\u015bciwo\u015bci konta u\u017cytkownika w zarz\u0105dzaniu komputerem",
            "C. konta u\u017cytkownik\u00f3w w Panelu Sterowania",
            "D. zasady hase\u0142 w zasadach zabezpiecze\u0144 lokalnych"
        ],
        "goodAnswer": "D. zasady hase\u0142 w zasadach zabezpiecze\u0144 lokalnych"
    },
    {
        "id": 1645,
        "question": "Do zarz\u0105dzania przydzia\u0142ami dyskowymi w systemach Windows 7 oraz Windows 8 s\u0142u\u017cy narz\u0119dzie",
        "imageLoc": "",
        "answers": [
            "A. dcpromo",
            "B. query",
            "C. perfmon",
            "D. fsutil"
        ],
        "goodAnswer": "D. fsutil"
    },
    {
        "id": 1646,
        "question": "Kt\u00f3ra z czynno\u015bci jest mo\u017cliwa do wykonania podczas konfiguracji prze\u0142\u0105cznika CISCO w interfejsie CLI, bez przechodzenia w tryb uprzywilejowany, na poziomie dost\u0119pu widocznym w ramce?",
        "imageLoc": require("../assets/img/195.png"),
        "answers": [
            "A. Wy\u015bwietlenie tablicy ARP.",
            "B. Tworzenie sieci VLAN.",
            "C. Zmiana nazwy systemowej.",
            "D. Okre\u015blanie hase\u0142 dost\u0119pu."
        ],
        "goodAnswer": "A. Wy\u015bwietlenie tablicy ARP."
    },
    {
        "id": 1647,
        "question": "W systemie Windows do uruchomienia przedstawionego narz\u0119dzia nale\u017cy u\u017cy\u0107 polecenia",
        "imageLoc": require("../assets/img/891.png"),
        "answers": [
            "A. taskmgr",
            "B. resmon",
            "C. secpol",
            "D. dcomcnfg"
        ],
        "goodAnswer": "A. taskmgr"
    },
    {
        "id": 1648,
        "question": "Zu\u017cyte kasety od drukarek nale\u017cy",
        "imageLoc": "",
        "answers": [
            "A. wyrzuci\u0107 do pojemnika z odpadami komunalnymi",
            "B. przekaza\u0107 do wydzia\u0142u ochrony \u015brodowiska",
            "C. wyrzuci\u0107 do pojemnika przeznaczonego na plastik",
            "D. przekaza\u0107 firmie utylizuj\u0105cej tego typu odpady"
        ],
        "goodAnswer": "D. przekaza\u0107 firmie utylizuj\u0105cej tego typu odpady"
    },
    {
        "id": 1649,
        "question": "Kt\u00f3ry program zosta\u0142 zastosowany w systemie Linux do szybkiego skanowania sieci?",
        "imageLoc": require("../assets/img/933.png"),
        "answers": [
            "A. ttcp",
            "B. nmap",
            "C. webmin",
            "D. iptraf"
        ],
        "goodAnswer": "B. nmap"
    },
    {
        "id": 1650,
        "question": "Ile punkt\u00f3w abonenckich (2 x RJ45), zgodnie z zaleceniami normy PN-EN 50167, powinno znajdowa\u0107 si\u0119 w pomieszczeniu biurowym o powierzchni 49 m2?",
        "imageLoc": "",
        "answers": [
            "A. 1",
            "B. 5",
            "C. 9",
            "D. 4"
        ],
        "goodAnswer": "B. 5"
    },
    {
        "id": 1651,
        "question": "Aktualizacja system\u00f3w operacyjnych to proces, kt\u00f3rego g\u0142\u00f3wnym zadaniem jest",
        "imageLoc": "",
        "answers": [
            "A. zmniejszenia fragmentacji danych.",
            "B. naprawa luk systemowych, kt\u00f3re zmniejszaj\u0105 poziom bezpiecze\u0144stwa systemu.",
            "C. obni\u017cenie bezpiecze\u0144stwa danych u\u017cytkownika.",
            "D. instalacja nowych aplikacji u\u017cytkowych."
        ],
        "goodAnswer": "B. naprawa luk systemowych, kt\u00f3re zmniejszaj\u0105 poziom bezpiecze\u0144stwa systemu."
    },
    {
        "id": 1652,
        "question": "Jak oznaczona jest skr\u0119tka bez ekranu zewn\u0119trznego z ka\u017cd\u0105 par\u0105 w osobnym ekranie z folii?",
        "imageLoc": "",
        "answers": [
            "A. S/FTP",
            "B. U/FTP",
            "C. F/UTP",
            "D. F/STP"
        ],
        "goodAnswer": "B. U/FTP"
    },
    {
        "id": 1653,
        "question": "W sieci LAN do zabezpieczenia urz\u0105dze\u0144 sieciowych przed przepi\u0119ciami oraz r\u00f3\u017cnicami potencja\u0142\u00f3w, kt\u00f3re mog\u0105 wyst\u0105pi\u0107 podczas burzy lub innych wy\u0142adowa\u0144 atmosferycznych, nale\u017cy wykorzysta\u0107",
        "imageLoc": "",
        "answers": [
            "A. sprz\u0119tow\u0105 zapor\u0119 sieciow\u0105",
            "B. prze\u0142\u0105cznik",
            "C. urz\u0105dzenie typu NetProtector",
            "D. ruter"
        ],
        "goodAnswer": "C. urz\u0105dzenie typu NetProtector"
    },
    {
        "id": 1654,
        "question": "System S.M.A.R.T przeznaczony jest do monitorowania pracy i wykrywania b\u0142\u0119d\u00f3w",
        "imageLoc": "",
        "answers": [
            "A. p\u0142yty g\u0142\u00f3wnej",
            "B. nap\u0119d\u00f3w p\u0142yt CD/DVD",
            "C. dysk\u00f3w twardych",
            "D. kart rozszerze\u0144"
        ],
        "goodAnswer": "C. dysk\u00f3w twardych"
    },
    {
        "id": 1655,
        "question": "Komputer, kt\u00f3rego naprawa ma zosta\u0107 przeprowadzona u klienta, nie reaguje na wci\u015bni\u0119cie przycisku POWER. Pierwsz\u0105 czynno\u015bci\u0105 harmonogramu prac zwi\u0105zanych z lokalizacj\u0105 i usuni\u0119ciem tej usterki powinno by\u0107",
        "imageLoc": "",
        "answers": [
            "A. sporz\u0105dzenie kosztorysu naprawy",
            "B. od\u0142\u0105czenie wszystkich podzespo\u0142\u00f3w, zb\u0119dnych do dzia\u0142ania komputera",
            "C. sporz\u0105dzenie rewersu serwisowego",
            "D. sprawdzenie zasilania w gniazdku sieciowym"
        ],
        "goodAnswer": "D. sprawdzenie zasilania w gniazdku sieciowym"
    },
    {
        "id": 1656,
        "question": "Kt\u00f3ry protok\u00f3\u0142 dzia\u0142a w warstwie aplikacji modelu ISO/OSI umo\u017cliwiaj\u0105c wymian\u0119 informacji kontrolnych pomi\u0119dzy urz\u0105dzeniami sieciowymi?",
        "imageLoc": "",
        "answers": [
            "A. POP3",
            "B. DNS",
            "C. SNMP",
            "D. SMTP"
        ],
        "goodAnswer": "C. SNMP"
    },
    {
        "id": 1657,
        "question": "Informacje o kontach u\u017cytkownik\u00f3w w systemie LINUX przechowywane s\u0105 w pliku",
        "imageLoc": "",
        "answers": [
            "A. /etc/passwd",
            "B. /etc/group",
            "C. /etc/shadow",
            "D. /etc/shells"
        ],
        "goodAnswer": "A. /etc/passwd"
    },
    {
        "id": 1658,
        "question": "Podczas zamykania systemu operacyjnego na ekranie pojawi\u0142 si\u0119 b\u0142\u0105d, tak zwany bluescreen 0x000000F3 Bug Check 0xF3 DISORDERLY_SHUTDOWN - niepowodzenie zamykania systemu, spowodowane brakiem pami\u0119ci. B\u0142\u0105d ten mo\u017ce wskazywa\u0107 na",
        "imageLoc": "",
        "answers": [
            "A. przegrzanie procesora",
            "B. uszkodzenie partycji systemowej",
            "C. niewystarczaj\u0105cy rozmiar pami\u0119ci wirtualnej",
            "D. uruchamianie zbyt wielu aplikacji przy starcie komputera"
        ],
        "goodAnswer": "C. niewystarczaj\u0105cy rozmiar pami\u0119ci wirtualnej"
    },
    {
        "id": 1659,
        "question": "Kt\u00f3ry z wymienionych system\u00f3w operacyjnych nie jest obs\u0142ugiwany przez system plik\u00f3w ext4?",
        "imageLoc": "",
        "answers": [
            "A. Windows",
            "B. Mandriva",
            "C. Gentoo",
            "D. Fedora"
        ],
        "goodAnswer": "A. Windows"
    },
    {
        "id": 1660,
        "question": "Co NIE wp\u0142ywa na utrat\u0119 danych z pami\u0119ci masowej HDD?",
        "imageLoc": "",
        "answers": [
            "A. Sformatowanie partycji dysku",
            "B. Zniszczenie talerzy dysku",
            "C. Fizyczne uszkodzenie dysku",
            "D. Utworzona macierz dyskowa RAID 5"
        ],
        "goodAnswer": "D. Utworzona macierz dyskowa RAID 5"
    },
    {
        "id": 1661,
        "question": "Urz\u0105dzenie typu Plug and Play, pod\u0142\u0105czone do komputera po raz kolejny, jest rozpoznawane na podstawie",
        "imageLoc": "",
        "answers": [
            "A. unikalnego identyfikatora urz\u0105dzenia",
            "B. specjalnego sterownika programowego",
            "C. lokalizacji sterownika urz\u0105dzenia",
            "D. lokalizacji urz\u0105dzenia"
        ],
        "goodAnswer": "A. unikalnego identyfikatora urz\u0105dzenia"
    },
    {
        "id": 1662,
        "question": "Do zamiany kodu \u017ar\u00f3d\u0142owego na program wykonywalny s\u0142u\u017cy",
        "imageLoc": "",
        "answers": [
            "A. interpreter",
            "B. emulator",
            "C. debuger",
            "D. kompilator"
        ],
        "goodAnswer": "D. kompilator"
    },
    {
        "id": 1663,
        "question": "Adres IP serwera, na kt\u00f3rym jest zainstalowana domena www.wp.pl to 212.77.98.9. Co jest przyczyn\u0105 sytuacji przedstawionej na zrzucie ekranowym?",
        "imageLoc": require("../assets/img/1562.png"),
        "answers": [
            "A. Nie ma w sieci serwera o adresie IP 212.77.98.9",
            "B. B\u0142\u0119dny adres serwera DNS lub brak po\u0142\u0105czenia z serwerem DNS",
            "C. Stacja robocza i domena www.wp.pl nie pracuj\u0105 w tej samej sieci",
            "D. Domena o nazwie www.wp.pl jest niedost\u0119pna w sieci"
        ],
        "goodAnswer": "B. B\u0142\u0119dny adres serwera DNS lub brak po\u0142\u0105czenia z serwerem DNS"
    },
    {
        "id": 1664,
        "question": "Kt\u00f3ry typ fizycznej topologii sieci komputerowej przedstawiono na rysunku?",
        "imageLoc": require("../assets/img/1813.png"),
        "answers": [
            "A. Podw\u00f3jnego pier\u015bcienia",
            "B. Magistrali",
            "C. Gwiazdy",
            "D. Siatki"
        ],
        "goodAnswer": "D. Siatki"
    },
    {
        "id": 1665,
        "question": "Program antyspyware chroni przed",
        "imageLoc": "",
        "answers": [
            "A. programami antywirusowymi",
            "B. atakami typu DoS i DDoS(Denial of Service)",
            "C. programami typu robak",
            "D. programami szpieguj\u0105cymi"
        ],
        "goodAnswer": "D. programami szpieguj\u0105cymi"
    },
    {
        "id": 1666,
        "question": "W wyniku polecenia ipconfig zosta\u0142a wy\u015bwietlona konfiguracja przedstawiona na rysunku. Adres IP testowanej stacji roboczej ma posta\u0107",
        "imageLoc": require("../assets/img/1018.png"),
        "answers": [
            "A. 192.168.0.11",
            "B. 62.21.99.95",
            "C. 255.255.255.0",
            "D. 192.168.0.1"
        ],
        "goodAnswer": "A. 192.168.0.11"
    },
    {
        "id": 1667,
        "question": "Po instalacji z domy\u015blnymi ustawieniami system Windows XP nie obs\u0142uguje systemu plik\u00f3w",
        "imageLoc": "",
        "answers": [
            "A. FAT16",
            "B. EXT",
            "C. FAT32",
            "D. NTFS"
        ],
        "goodAnswer": "B. EXT"
    },
    {
        "id": 1668,
        "question": "Jaka jest nominalna moc wyj\u015bciowa (ci\u0105g\u0142a) zasilacza o parametrach zapisanych w tabeli?",
        "imageLoc": require("../assets/img/905.png"),
        "answers": [
            "A. 456,0 W",
            "B. 336,0 W",
            "C. 576,0 W",
            "D. 472,1 W"
        ],
        "goodAnswer": "D. 472,1 W"
    },
    {
        "id": 1669,
        "question": "W systemie Windows Server narz\u0119dziem umo\u017cliwiaj\u0105cym zarz\u0105dzanie zasadami grupy jest",
        "imageLoc": "",
        "answers": [
            "A. Panel sterowania",
            "B. Konsola GPMC",
            "C. Serwer DNS",
            "D. Mened\u017cer zada\u0144"
        ],
        "goodAnswer": "B. Konsola GPMC"
    },
    {
        "id": 1670,
        "question": "Aby za\u0142adowa\u0107 projekt wydruku bezpo\u015brednio z komputera do drukarki 3D, kt\u00f3rej parametry przedstawiono w tabeli, mo\u017cna u\u017cy\u0107 z\u0142\u0105cza",
        "imageLoc": require("../assets/img/879.png"),
        "answers": [
            "A. Centronics",
            "B. mini DIN",
            "C. RJ45",
            "D. Micro Ribbon"
        ],
        "goodAnswer": "C. RJ45"
    },
    {
        "id": 1671,
        "question": "Natychmiast po zauwa\u017ceniu utraty wa\u017cnych plik\u00f3w na dysku twardym u\u017cytkownik powinien",
        "imageLoc": "",
        "answers": [
            "A. uchroni\u0107 dysk przed zapisem nowych danych",
            "B. przeprowadzi\u0107 test S.M.A.R.T. tego dysku",
            "C. zainstalowa\u0107 program diagnostyczny",
            "D. wykona\u0107 defragmentacj\u0119 dysku"
        ],
        "goodAnswer": "A. uchroni\u0107 dysk przed zapisem nowych danych"
    },
    {
        "id": 1672,
        "question": "Kt\u00f3ry z wymienionych element\u00f3w jest elementem pasywnym sieci?",
        "imageLoc": "",
        "answers": [
            "A. Karta sieciowa",
            "B. Panel krosowy",
            "C. Wzmacniak",
            "D. Prze\u0142\u0105cznik"
        ],
        "goodAnswer": "B. Panel krosowy"
    },
    {
        "id": 1673,
        "question": "DB-25 jest wykorzystywane jako z\u0142\u0105cze",
        "imageLoc": "",
        "answers": [
            "A. portu r\u00f3wnoleg\u0142ego LPT",
            "B. portu RS-422A",
            "C. VGA, SVGA i XGA",
            "D. GamePort"
        ],
        "goodAnswer": "A. portu r\u00f3wnoleg\u0142ego LPT"
    },
    {
        "id": 1674,
        "question": "Kt\u00f3re polecenie systemu Windows Server 2008 umo\u017cliwia promowanie serwera do roli kontrolera domeny?",
        "imageLoc": "",
        "answers": [
            "A. gpresult",
            "B. gpedit",
            "C. dcpromo",
            "D. nslookup"
        ],
        "goodAnswer": "C. dcpromo"
    },
    {
        "id": 1675,
        "question": "U\u017cycie polecenia attrib +h +s +r przyk\u0142ad.txt w linii polece\u0144 systemu Windows spowoduje",
        "imageLoc": "",
        "answers": [
            "A. nadanie dla pliku przyk\u0142ad.txt atrybyt\u00f3w: ukryty, systemowy, tylko do odczytu",
            "B. nadanie dla pliku przyk\u0142ad.txt atrybyt\u00f3w: ukryty, skompresowany, tylko do odczytu",
            "C. zabezpieczenie pliku przyk\u0142ad.txt has\u0142em hsr",
            "D. zapisanie ci\u0105gu znak\u00f3w hsr w pliku przyk\u0142ad.txt"
        ],
        "goodAnswer": "A. nadanie dla pliku przyk\u0142ad.txt atrybyt\u00f3w: ukryty, systemowy, tylko do odczytu"
    },
    {
        "id": 1676,
        "question": "Do sprawdzenia warto\u015bci napi\u0119cia w zasilaczu s\u0142u\u017cy",
        "imageLoc": "",
        "answers": [
            "A. multimetr",
            "B. pirometr",
            "C. amperomierz",
            "D. impulsator"
        ],
        "goodAnswer": "A. multimetr"
    },
    {
        "id": 1677,
        "question": "Na wy\u015bwietlaczu drukarki pojawi\u0142 si\u0119 komunikat \"PAPER JAM\". Aby usun\u0105\u0107 usterk\u0119, nale\u017cy w pierwszej kolejno\u015bci",
        "imageLoc": "",
        "answers": [
            "A. zlokalizowa\u0107 miejsce zaci\u0119cia papieru w drukarce",
            "B. zainstalowa\u0107 podajnik papieru w drukarce",
            "C. za\u0142adowa\u0107 papier do podajnika",
            "D. wymieni\u0107 pojemnik z materia\u0142em drukuj\u0105cym"
        ],
        "goodAnswer": "A. zlokalizowa\u0107 miejsce zaci\u0119cia papieru w drukarce"
    },
    {
        "id": 1678,
        "question": "Podczas konfiguracji rutera, aby wprowadzi\u0107 parametry po\u0142\u0105czenia dostarczone przez dostawc\u0119 internetowego nale\u017cy wybra\u0107 obszar oznaczony numerem",
        "imageLoc": require("../assets/img/2131.png"),
        "answers": [
            "A. 1",
            "B. 4",
            "C. 2",
            "D. 3"
        ],
        "goodAnswer": "D. 3"
    },
    {
        "id": 1679,
        "question": "W zasadach hase\u0142 w systemie Windows Server jest w\u0142\u0105czona opcja has\u0142o musi spe\u0142nia\u0107 wymagania co do z\u0142o\u017cono\u015bci. Z co najmniej ilu znak\u00f3w musi si\u0119 sk\u0142ada\u0107 has\u0142o u\u017cytkownika?",
        "imageLoc": "",
        "answers": [
            "A. 12 znak\u00f3w",
            "B. 10 znak\u00f3w",
            "C. 5 znak\u00f3w",
            "D. 6 znak\u00f3w"
        ],
        "goodAnswer": "D. 6 znak\u00f3w"
    },
    {
        "id": 1680,
        "question": "Kopi\u0119 danych w systemie Linux mo\u017cna wykona\u0107 za pomoc\u0105 polecenia",
        "imageLoc": "",
        "answers": [
            "A. split",
            "B. restore",
            "C. dd",
            "D. tac"
        ],
        "goodAnswer": "C. dd"
    },
    {
        "id": 1681,
        "question": "W kt\u00f3rej topologii fizycznej sieci ka\u017cde urz\u0105dzenie sieciowe ma dok\u0142adnie dwa po\u0142\u0105czenia, po jednym dla swoich najbli\u017cszych s\u0105siad\u00f3w, a dane s\u0105 przesy\u0142ane od jednego komputera do nast\u0119pnego w p\u0119tli?",
        "imageLoc": "",
        "answers": [
            "A. Pier\u015bcienia",
            "B. Drzewa",
            "C. Gwiazdy",
            "D. Siatki"
        ],
        "goodAnswer": "A. Pier\u015bcienia"
    },
    {
        "id": 1682,
        "question": "Aby zapewni\u0107 w\u0142a\u015bciwie funkcjonowanie skanera, nale\u017cy",
        "imageLoc": "",
        "answers": [
            "A. smarowa\u0107 \u0142o\u017cyska wentylator\u00f3w ch\u0142odzenia jednostki centralnej",
            "B. mie\u0107 zainstalowany w systemie program antywirusowy",
            "C. sprawdzi\u0107 temperatur\u0119 podzespo\u0142\u00f3w komputera",
            "D. nie wk\u0142ada\u0107 kartek ze zszywkami do podajnika urz\u0105dzenia, je\u015bli jest on automatyczny"
        ],
        "goodAnswer": "D. nie wk\u0142ada\u0107 kartek ze zszywkami do podajnika urz\u0105dzenia, je\u015bli jest on automatyczny"
    },
    {
        "id": 1683,
        "question": "U\u017cytkownik drukarki samodzielnie i prawid\u0142owo nape\u0142ni\u0142 pojemnik z tonerem. Po jego zamontowaniu drukarka nie podejmuje pr\u00f3by drukowania. Przyczyn\u0105 tej usterki mo\u017ce by\u0107",
        "imageLoc": "",
        "answers": [
            "A. \u017ale dobrany toner.",
            "B. z\u0142a jako\u015b\u0107 wykorzystanego tonera do uzupe\u0142nienia pojemnika.",
            "C. niewymieniony chip zliczaj\u0105cy, znajduj\u0105cy si\u0119 na pojemniku z tonerem.",
            "D. zabrudzony wa\u0142ek magnetyczny."
        ],
        "goodAnswer": "C. niewymieniony chip zliczaj\u0105cy, znajduj\u0105cy si\u0119 na pojemniku z tonerem."
    },
    {
        "id": 1684,
        "question": "Kt\u00f3ra czynno\u015b\u0107 doprowadzi do nieodwracalnej utraty danych, w przypadku uszkodzenia systemu plik\u00f3w?",
        "imageLoc": "",
        "answers": [
            "A. przeprowadzenie skanowania scandiskiem",
            "B. skanowanie programem antywirusowym",
            "C. w\u0142\u0105czenie systemu operacyjnego",
            "D. formatowanie dysku"
        ],
        "goodAnswer": "D. formatowanie dysku"
    },
    {
        "id": 1685,
        "question": "Na rysunku przedstawiono symbol uk\u0142adu cyfrowego",
        "imageLoc": require("../assets/img/749.png"),
        "answers": [
            "A. kodera priorytetu",
            "B. demultipleksera priorytetu",
            "C. dekodera priorytetu",
            "D. multipleksera priorytetu"
        ],
        "goodAnswer": "A. kodera priorytetu"
    },
    {
        "id": 1686,
        "question": "Najbardziej prawdopodobn\u0105 przyczyn\u0105 s\u0142abej jako\u015bci wydruku drukarki laserowej, charakteryzuj\u0105cego si\u0119 widocznym rozmazywaniem tonera jest",
        "imageLoc": require("../assets/img/428.png"),
        "answers": [
            "A. zanieczyszczenie wn\u0119trza drukarki",
            "B. zaci\u0119cie papieru",
            "C. uszkodzenie rolek",
            "D. zbyt niska temperatura utrwalacza"
        ],
        "goodAnswer": "D. zbyt niska temperatura utrwalacza"
    },
    {
        "id": 1687,
        "question": "Program df dzia\u0142aj\u0105cy w systemach rodziny Linux umo\u017cliwia wy\u015bwietlenie",
        "imageLoc": "",
        "answers": [
            "A. zawarto\u015bci ukrytego katalogu",
            "B. nazwy bie\u017c\u0105cego katalogu",
            "C. tekstu pasuj\u0105cego do wzorca",
            "D. informacji o wolnej przestrzeni dyskowej"
        ],
        "goodAnswer": "D. informacji o wolnej przestrzeni dyskowej"
    },
    {
        "id": 1688,
        "question": "Kt\u00f3re protoko\u0142y s\u0105 protoko\u0142ami warstwy transportowej modelu ISO/OSI?",
        "imageLoc": "",
        "answers": [
            "A. FTP, POP",
            "B. ICMP, IP",
            "C. ARP, DNS",
            "D. TCP, UDP"
        ],
        "goodAnswer": "D. TCP, UDP"
    },
    {
        "id": 1689,
        "question": "W jakim systemie operacyjnym przy instalacji sterownik\u00f3w do nowego urz\u0105dzenia mo\u017ce pojawi\u0107 si\u0119 komunikat",
        "imageLoc": require("../assets/img/146.png"),
        "answers": [
            "A. Windows 98",
            "B. Windows XP",
            "C. Unix",
            "D. Linux"
        ],
        "goodAnswer": "B. Windows XP"
    },
    {
        "id": 1690,
        "question": "Liczbie 16 bitowej 0011110010101110 zapisanej w systemie dw\u00f3jkowym odpowiada w systemie szesnastkowym liczba",
        "imageLoc": "",
        "answers": [
            "A. 3DFE",
            "B. 3DAE",
            "C. 3CAE",
            "D. 3CBE"
        ],
        "goodAnswer": "C. 3CAE"
    },
    {
        "id": 1691,
        "question": "Ile maksymalnie partycji podstawowych mo\u017cemy utworzy\u0107 na dysku twardym z MBR?",
        "imageLoc": "",
        "answers": [
            "A. 26",
            "B. 4",
            "C. 24",
            "D. 8"
        ],
        "goodAnswer": "B. 4"
    },
    {
        "id": 1692,
        "question": "Identyfikowanie adres\u00f3w fizycznych MAC na podstawie adres\u00f3w logicznych IP jest wynikiem dzia\u0142ania protoko\u0142u",
        "imageLoc": "",
        "answers": [
            "A. HTTP",
            "B. ARP",
            "C. DHCP",
            "D. DNS"
        ],
        "goodAnswer": "B. ARP"
    },
    {
        "id": 1693,
        "question": "Program Wireshark jest stosowany do",
        "imageLoc": "",
        "answers": [
            "A. analizy przesy\u0142anych w sieci pakiet\u00f3w.",
            "B. monitorowania stanu urz\u0105dze\u0144 sieciowych.",
            "C. sprawdzania przepustowo\u015bci \u0142\u0105czy.",
            "D. projektowania sieci komputerowych."
        ],
        "goodAnswer": "A. analizy przesy\u0142anych w sieci pakiet\u00f3w."
    },
    {
        "id": 1694,
        "question": "Wymieniaj\u0105c uszkodzon\u0105 kart\u0119 graficzn\u0105, kt\u00f3ra wsp\u00f3\u0142pracowa\u0142a z monitorem wyposa\u017conym tylko w wej\u015bcie analogowe, nale\u017cy wybra\u0107 kart\u0119",
        "imageLoc": "",
        "answers": [
            "A. Gigabyte GeForce GT 740 OC, 1GB GDDR5 (128 Bit), HDMI, DVI, D-Sub",
            "B. ZOTAC GeForce GT 730 Synergy Edition, 4GB DDR3 (128 Bit), 2xDVI, miniHDMI",
            "C. Sapphire Radeon R7 250X FLEX, 1GB GDDR5 (128 Bit), HDMI, 2xDVI, DP, LITE",
            "D. Sapphire Radeon R7 250, 1GB GDDR5 (128 Bit), microHDMI, DVI, miniDP LP, BULK"
        ],
        "goodAnswer": "A. Gigabyte GeForce GT 740 OC, 1GB GDDR5 (128 Bit), HDMI, DVI, D-Sub"
    },
    {
        "id": 1695,
        "question": "IMAP jest protoko\u0142em",
        "imageLoc": "",
        "answers": [
            "A. synchronizacji czasu z serwerami",
            "B. wysy\u0142ania poczty elektronicznej",
            "C. odbioru poczty elektronicznej",
            "D. monitorowania urz\u0105dze\u0144 sieciowych"
        ],
        "goodAnswer": "C. odbioru poczty elektronicznej"
    },
    {
        "id": 1696,
        "question": "Zu\u017cyte kasety od drukarek nale\u017cy",
        "imageLoc": "",
        "answers": [
            "A. przekaza\u0107 firmie utylizuj\u0105cej tego typu odpady",
            "B. wyrzuci\u0107 do pojemnika przeznaczonego na plastik",
            "C. wyrzuci\u0107 do pojemnika z odpadami komunalnymi",
            "D. przekaza\u0107 do wydzia\u0142u ochrony \u015brodowiska"
        ],
        "goodAnswer": "A. przekaza\u0107 firmie utylizuj\u0105cej tego typu odpady"
    },
    {
        "id": 1697,
        "question": "Materia\u0142em eksploatacyjnym w drukarce laserowej jest",
        "imageLoc": "",
        "answers": [
            "A. laser",
            "B. ta\u015bma barwi\u0105ca",
            "C. kaseta z tonerem",
            "D. pojemnik z tuszem"
        ],
        "goodAnswer": "C. kaseta z tonerem"
    },
    {
        "id": 1698,
        "question": "Kt\u00f3re narz\u0119dzie nale\u017cy u\u017cy\u0107 w systemie Windows do wy\u015bwietlenia informacji na temat problem\u00f3w systemowych?",
        "imageLoc": "",
        "answers": [
            "A. Foldery udost\u0119pnione",
            "B. Zasady grupy",
            "C. Harmonogram zada\u0144",
            "D. Podgl\u0105d zdarze\u0144"
        ],
        "goodAnswer": "D. Podgl\u0105d zdarze\u0144"
    },
    {
        "id": 1699,
        "question": "Narz\u0119dzie iptables w systemie Linux s\u0142u\u017cy do",
        "imageLoc": "",
        "answers": [
            "A. konfiguracji karty sieciowej",
            "B. konfiguracji zapory sieciowej",
            "C. konfiguracji serwera pocztowego",
            "D. konfiguracji zdalnego dost\u0119pu do serwera"
        ],
        "goodAnswer": "B. konfiguracji zapory sieciowej"
    },
    {
        "id": 1700,
        "question": "Co jest przyczyn\u0105 pojawienia si\u0119 na ekranie komputera komunikatu, \u017ce system wykry\u0142 konflikt adres\u00f3w IP?",
        "imageLoc": "",
        "answers": [
            "A. Inne urz\u0105dzenie sieciowe ma nadany ten sam adres IP co komputer",
            "B. Adres IP komputera jest spoza zakresu adres\u00f3w sieci lokalnej",
            "C. W ustawieniach protoko\u0142u TCP/IP jest b\u0142\u0119dny adres bramy domy\u015blnej",
            "D. W sieci lokalnej nie dzia\u0142a us\u0142uga DHCP"
        ],
        "goodAnswer": "A. Inne urz\u0105dzenie sieciowe ma nadany ten sam adres IP co komputer"
    },
    {
        "id": 1701,
        "question": "Je\u017celi oczekuje si\u0119, aby tylko wybrane urz\u0105dzenia mog\u0142y \u0142\u0105czy\u0107 si\u0119 z sieci\u0105 WiFi, nale\u017cy w punkcie dost\u0119powym",
        "imageLoc": "",
        "answers": [
            "A. zmieni\u0107 kana\u0142 radiowy",
            "B. skonfigurowa\u0107 filtrowanie adres\u00f3w MAC",
            "C. zmieni\u0107 spos\u00f3b szyfrowania z WEP na WPA",
            "D. zmieni\u0107 has\u0142o"
        ],
        "goodAnswer": "B. skonfigurowa\u0107 filtrowanie adres\u00f3w MAC"
    },
    {
        "id": 1702,
        "question": "W kt\u00f3rym rodzaju cz\u0142onkostwa w VLAN port mo\u017ce by\u0107 cz\u0142onkiem wielu sieci VLAN?",
        "imageLoc": "",
        "answers": [
            "A. Multi-VLAN",
            "B. Dynamicznym VLAN",
            "C. Statycznym VLAN",
            "D. Port-Based VLAN"
        ],
        "goodAnswer": "A. Multi-VLAN"
    },
    {
        "id": 1703,
        "question": "Do kt\u00f3rej warstwy modelu ISO/OSI nale\u017cy segmentowanie danych, komunikacja w trybie po\u0142\u0105czeniowym z wykorzystaniem protoko\u0142u TCP oraz komunikacja w trybie bezpo\u0142\u0105czeniowym z wykorzystaniem protoko\u0142u UDP?",
        "imageLoc": "",
        "answers": [
            "A. Transportowej",
            "B. Sieciowej",
            "C. Fizycznej",
            "D. \u0141\u0105cza danych"
        ],
        "goodAnswer": "A. Transportowej"
    },
    {
        "id": 1704,
        "question": "Firma potrzebuje drukarki s\u0142u\u017c\u0105cej do drukowania trwa\u0142ych kod\u00f3w kreskowych oraz etykiet na folii i powierzchniach z tworzyw sztucznych. Jak\u0105 drukark\u0119 musi zakupi\u0107?",
        "imageLoc": "",
        "answers": [
            "A. Termiczn\u0105",
            "B. Ig\u0142ow\u0105",
            "C. Termotransferow\u0105",
            "D. Mozaikow\u0105"
        ],
        "goodAnswer": "C. Termotransferow\u0105"
    },
    {
        "id": 1705,
        "question": "Szkodliwe oprogramowanie, kt\u00f3re w celu umo\u017cliwienia ataku na zainfekowany komputer mo\u017ce np. otworzy\u0107 jeden z port\u00f3w, to",
        "imageLoc": "",
        "answers": [
            "A. exploit",
            "B. wabbit",
            "C. keylogger",
            "D. trojan"
        ],
        "goodAnswer": "D. trojan"
    },
    {
        "id": 1706,
        "question": "Asynchronicznym interfejsem szeregowym zgodnym ze standardem RS-232 jest port",
        "imageLoc": "",
        "answers": [
            "A. LPT",
            "B. COM",
            "C. ECP",
            "D. EPP"
        ],
        "goodAnswer": "B. COM"
    },
    {
        "id": 1707,
        "question": "Mechanizm zasilacza komputerowego chroni\u0105cy przed przegrzaniem zasilacza jest oznaczony w dokumentacji technicznej jako zabezpieczenie typu",
        "imageLoc": "",
        "answers": [
            "A. OPP",
            "B. OTP",
            "C. UVP",
            "D. SCP"
        ],
        "goodAnswer": "B. OTP"
    },
    {
        "id": 1708,
        "question": "W celu uzyskania w sieci lokalnej pr\u0119dko\u015bci przesy\u0142ania danych 100 Mbps zastosowano karty sieciowe pracuj\u0105ce w standardzie Fast Ethernet, kabel standardu UTP w odpowiedniej kategorii oraz prze\u0142\u0105cznik (switch) pracuj\u0105cy w standardzie Fast Ethernet. Sie\u0107 taka jest wykonana w topologii",
        "imageLoc": "",
        "answers": [
            "A. RING",
            "B. STAR",
            "C. BUS",
            "D. IEEE"
        ],
        "goodAnswer": "B. STAR"
    },
    {
        "id": 1709,
        "question": "Pami\u0119\u0107 RAM przedstawiona na rysunku, montowana jest na p\u0142ycie g\u0142\u00f3wnej wyposa\u017conej w gniazdo",
        "imageLoc": require("../assets/img/1239.png"),
        "answers": [
            "A. DDR4",
            "B. DDR",
            "C. DDR3",
            "D. DDR2"
        ],
        "goodAnswer": "D. DDR2"
    },
    {
        "id": 1710,
        "question": "U\u017cytkownik ma problem z rozruchem systemu Windows. Aby to naprawi\u0107, uruchomi\u0142 narz\u0119dzie System Image Recovery, kt\u00f3re",
        "imageLoc": "",
        "answers": [
            "A. naprawia pliki startowe, wykorzystuj\u0105c p\u0142yt\u0119 Recovery",
            "B. odzyskuje ustawienia systemu, korzystaj\u0105c z kopii rejestru systemowego backup.reg",
            "C. odtwarza system wykorzystuj\u0105c w tym celu punkty przywracania",
            "D. przywraca system na podstawie kopii zapasowej"
        ],
        "goodAnswer": "D. przywraca system na podstawie kopii zapasowej"
    },
    {
        "id": 1711,
        "question": "Jaka jest szybko\u015b\u0107 transferu danych w sieciach FDDI (ang. Fiber Distributed Data Interface) opartych na technologii \u015bwiat\u0142owodowej?",
        "imageLoc": "",
        "answers": [
            "A. 1024 Mb/s",
            "B. 100 Mb/s",
            "C. 100 MB/s",
            "D. 1024 kB/s"
        ],
        "goodAnswer": "B. 100 Mb/s"
    },
    {
        "id": 1712,
        "question": "Kt\u00f3ra tablica partycji umo\u017cliwia utworzenie do 128 partycji podstawowych na jednym dysku?",
        "imageLoc": "",
        "answers": [
            "A. NTLDR",
            "B. GPT",
            "C. BOOT",
            "D. MBR"
        ],
        "goodAnswer": "B. GPT"
    },
    {
        "id": 1713,
        "question": "Odzyskiwanie surowc\u00f3w z odpad\u00f3w w celu ich ponownego wykorzystania to",
        "imageLoc": "",
        "answers": [
            "A. recykling",
            "B. segregacja",
            "C. utylizacja",
            "D. kataliza"
        ],
        "goodAnswer": "A. recykling"
    },
    {
        "id": 1714,
        "question": "W firmie zainstalowano pi\u0119\u0107 komputer\u00f3w o adresach kart sieciowych podanych w tabeli. W zwi\u0105zku z tym mo\u017cna wyr\u00f3\u017cni\u0107",
        "imageLoc": require("../assets/img/664.png"),
        "answers": [
            "A. 1 sie\u0107",
            "B. 2 podsieci",
            "C. 5 podsieci",
            "D. 3 podsieci"
        ],
        "goodAnswer": "D. 3 podsieci"
    },
    {
        "id": 1715,
        "question": "Na rysunku przedstawiono symbol graficzny",
        "imageLoc": require("../assets/img/783.png"),
        "answers": [
            "A. rutera",
            "B. regeneratora",
            "C. mostu",
            "D. koncentratora"
        ],
        "goodAnswer": "A. rutera"
    },
    {
        "id": 1716,
        "question": "Na kt\u00f3rym rysunku przedstawiono topologi\u0119 sieci typu magistrala?",
        "imageLoc": require("../assets/img/1968.png"),
        "answers": [
            "A. A",
            "B. B",
            "C. C",
            "D. D"
        ],
        "goodAnswer": "B. B"
    },
    {
        "id": 1717,
        "question": "W wyniku wykonania przedstawionych polece\u0144 systemu Linux interfejs sieciowy eth0 otrzyma",
        "imageLoc": require("../assets/img/1627.png"),
        "answers": [
            "A. adres IP 10.0.0.10, mask\u0119 /16, bram\u0119 10.0.0.100",
            "B. adres IP 10.0.0.10, mask\u0119 /24, bram\u0119 10.0.0.255",
            "C. adres IP 10.0.0.100, mask\u0119 /22, bram\u0119 10.0.0.10",
            "D. adres IP 10.0.0.100, mask\u0119 /24, bram\u0119 10.0.0.10"
        ],
        "goodAnswer": "D. adres IP 10.0.0.100, mask\u0119 /24, bram\u0119 10.0.0.10"
    },
    {
        "id": 1718,
        "question": "Przy wyborze zasilacza komputerowego najwi\u0119ksze znaczenie",
        "imageLoc": "",
        "answers": [
            "A. Ma \u0142\u0105czna moc wszystkich podzespo\u0142\u00f3w komputerowych",
            "B. Ma wsp\u00f3\u0142czynnik kszta\u0142tu obudowy",
            "C. Ma typ procesora",
            "D. Maj\u0105 parametry zainstalowanego systemu operacyjnego"
        ],
        "goodAnswer": "A. Ma \u0142\u0105czna moc wszystkich podzespo\u0142\u00f3w komputerowych"
    },
    {
        "id": 1719,
        "question": "Aby w systemie Linux zmapowa\u0107 katalog udost\u0119pniony w sieci komputerowej, nale\u017cy pos\u0142u\u017cy\u0107 si\u0119 poleceniem",
        "imageLoc": "",
        "answers": [
            "A. mount",
            "B. connect",
            "C. view",
            "D. join"
        ],
        "goodAnswer": "A. mount"
    },
    {
        "id": 1720,
        "question": "Element oznaczony numerem 1 na schemacie blokowym karty graficznej",
        "imageLoc": require("../assets/img/193.png"),
        "answers": [
            "A. zawiera matryc\u0119 znak\u00f3w trybu tekstowego",
            "B. generuje sygna\u0142 RGB na wyj\u015bcie karty graficznej",
            "C. przechowuje dane wy\u015bwietlane, w trybie graficznym",
            "D. zamienia sygna\u0142 cyfrowy na sygna\u0142 analogowy"
        ],
        "goodAnswer": "A. zawiera matryc\u0119 znak\u00f3w trybu tekstowego"
    },
    {
        "id": 1721,
        "question": "We w\u0142a\u015bciwo\u015bciach karty graficznej w zak\u0142adce Zasoby jest okre\u015blony jeden z zakres\u00f3w pami\u0119ci dla tej karty od A0000h do BFFFFh. Wielko\u015b\u0107 ta oznacza obszar pami\u0119ci okre\u015blony adresem fizycznym",
        "imageLoc": "",
        "answers": [
            "A. 1100 1111 1111 1111 1111 \u2013 1110 1111 1111 1111 1111",
            "B. 1011 0000 0000 0000 0000 \u2013 1100 1111 1111 1111 1111",
            "C. 1001 1111 1111 1111 1111 \u2013 1010 0000 0000 0000 0000",
            "D. 1010 0000 0000 0000 0000 \u2013 1011 1111 1111 1111 1111"
        ],
        "goodAnswer": "D. 1010 0000 0000 0000 0000 \u2013 1011 1111 1111 1111 1111"
    },
    {
        "id": 1722,
        "question": "Topologia fizyczna sieci, w kt\u00f3rej jako medium transmisyjne stosuje si\u0119 fale radiowe, jest nazywana topologi\u0105",
        "imageLoc": "",
        "answers": [
            "A. ad-hoc",
            "B. pier\u015bcienia",
            "C. magistrali",
            "D. CSMA/CD"
        ],
        "goodAnswer": "A. ad-hoc"
    },
    {
        "id": 1723,
        "question": "Kt\u00f3ry parametr polecenia ipconfig w systemie Windows odnawia konfiguracj\u0119 adres\u00f3w IP?",
        "imageLoc": "",
        "answers": [
            "A. /displaydns",
            "B. /release",
            "C. /renew",
            "D. /flushdns"
        ],
        "goodAnswer": "C. /renew"
    },
    {
        "id": 1724,
        "question": "Protok\u00f3\u0142 u\u017cywany przez WWW to",
        "imageLoc": "",
        "answers": [
            "A. SMTP",
            "B. FTP",
            "C. IPSec",
            "D. HTTP"
        ],
        "goodAnswer": "D. HTTP"
    },
    {
        "id": 1725,
        "question": "Modu\u0142em pami\u0119ci RAM, kompatybilnym z p\u0142yt\u0105 g\u0142\u00f3wn\u0105 GIGABYTE GA-X99-ULTRA GAMING/ X99/8xDDR4 2133, ECC, max 128GB/ 4x PCI-E 16x/ RAID/ USB 3.1/ S-2011-V3/ATX, jest pami\u0119\u0107",
        "imageLoc": "",
        "answers": [
            "A. HPE 32GB (1x32GB) Quad Rank x4 PC3-14900L (DDR3-1866 Load Reduced CAS-13 Memory Kit)",
            "B. HPE 16GB (1x16GB) Dual Rank x4 PC3-14900R (DDR3-1866) Registered CAS-13 Memory Kit",
            "C. HPE 32GB (1x32GB) Quad Rank x4 DDR4-2133 CAS-15-15-15 Load Reduced Memory Kit, ECC",
            "D. HPE 32GB (1x16GB) Dual Rank x4 PC3L-10600R (DDR3-1333) Registered CAS-9, Non-ECC"
        ],
        "goodAnswer": "C. HPE 32GB (1x32GB) Quad Rank x4 DDR4-2133 CAS-15-15-15 Load Reduced Memory Kit, ECC"
    },
    {
        "id": 1726,
        "question": "Na rysunku przedstawiono tylny panel",
        "imageLoc": require("../assets/img/868.png"),
        "answers": [
            "A. koncentratora",
            "B. modemu",
            "C. routera",
            "D. mostu"
        ],
        "goodAnswer": "C. routera"
    },
    {
        "id": 1727,
        "question": "Kt\u00f3ra warto\u015b\u0107 przep\u0142ywno\u015bci charakteryzuje standard 1000Base-T?",
        "imageLoc": "",
        "answers": [
            "A. 1 GB/s",
            "B. 1 Mbit/s",
            "C. 1 Gbit/s",
            "D. 1 MB/s"
        ],
        "goodAnswer": "C. 1 Gbit/s"
    },
    {
        "id": 1728,
        "question": "W sieci LAN do zabezpieczenia urz\u0105dze\u0144 sieciowych przed przepi\u0119ciami oraz r\u00f3\u017cnicami potencja\u0142\u00f3w, kt\u00f3re mog\u0105 wyst\u0105pi\u0107 podczas burzy lub innych wy\u0142adowa\u0144 atmosferycznych, nale\u017cy wykorzysta\u0107",
        "imageLoc": "",
        "answers": [
            "A. prze\u0142\u0105cznik",
            "B. sprz\u0119tow\u0105 zapor\u0119 sieciow\u0105",
            "C. ruter",
            "D. urz\u0105dzenie typu NetProtector"
        ],
        "goodAnswer": "D. urz\u0105dzenie typu NetProtector"
    },
    {
        "id": 1729,
        "question": "Do konserwacji element\u00f3w \u0142o\u017cyskowanych oraz \u015blizgowych w urz\u0105dzeniach peryferyjnych stosuje si\u0119",
        "imageLoc": "",
        "answers": [
            "A. tetrow\u0105 szmatk\u0119",
            "B. spr\u0119\u017cone powietrze",
            "C. pow\u0142ok\u0119 grafitow\u0105",
            "D. smar syntetyczny"
        ],
        "goodAnswer": "D. smar syntetyczny"
    },
    {
        "id": 1730,
        "question": "Partycja, na kt\u00f3rej zainstalowany jest system operacyjny, nazywana jest partycj\u0105",
        "imageLoc": "",
        "answers": [
            "A. systemow\u0105",
            "B. rozszerzon\u0105",
            "C. wymiany",
            "D. folderow\u0105"
        ],
        "goodAnswer": "A. systemow\u0105"
    },
    {
        "id": 1731,
        "question": "Narz\u0119dzie iptables w systemie Linux s\u0142u\u017cy do",
        "imageLoc": "",
        "answers": [
            "A. konfiguracji serwera pocztowego",
            "B. konfiguracji zdalnego dost\u0119pu do serwera",
            "C. konfiguracji karty sieciowej",
            "D. konfiguracji zapory sieciowej"
        ],
        "goodAnswer": "D. konfiguracji zapory sieciowej"
    },
    {
        "id": 1732,
        "question": "Warunkiem niezb\u0119dnym przy archiwizacji danych jest",
        "imageLoc": "",
        "answers": [
            "A. kopiowanie danych",
            "B. kompresja i kopiowanie danych z jednoczesnym ich szyfrowaniem",
            "C. kompresja i kopiowanie danych",
            "D. kompresja danych"
        ],
        "goodAnswer": "A. kopiowanie danych"
    },
    {
        "id": 1733,
        "question": "Kt\u00f3re z\u0142\u0105cze p\u0142yty g\u0142\u00f3wnej komputera s\u0142u\u017cy do zainstalowania przedstawionej na zdj\u0119ciu karty graficznej?",
        "imageLoc": require("../assets/img/83.png"),
        "answers": [
            "A. PCI-E",
            "B. ISA",
            "C. AGP",
            "D. PCI"
        ],
        "goodAnswer": "A. PCI-E"
    },
    {
        "id": 1734,
        "question": "Polecenie umo\u017cliwiaj\u0105ce poznanie adres\u00f3w fizycznych dla kart sieciowych w systemie to",
        "imageLoc": "",
        "answers": [
            "A. arp -a",
            "B. pathping",
            "C. getmac",
            "D. ping"
        ],
        "goodAnswer": "C. getmac"
    },
    {
        "id": 1735,
        "question": "Kt\u00f3ra z topologii fizycznych sieci komputerowej jest przedstawiona na rysunku?",
        "imageLoc": require("../assets/img/1657.png"),
        "answers": [
            "A. Siatki",
            "B. Magistrali",
            "C. Podw\u00f3jnego pier\u015bcienia",
            "D. Gwiazdy rozszerzonej"
        ],
        "goodAnswer": "C. Podw\u00f3jnego pier\u015bcienia"
    },
    {
        "id": 1736,
        "question": "Protok\u00f3\u0142 u\u017cywany przez WWW to",
        "imageLoc": "",
        "answers": [
            "A. HTTP",
            "B. FTP",
            "C. IPSec",
            "D. SMTP"
        ],
        "goodAnswer": "A. HTTP"
    },
    {
        "id": 1737,
        "question": "W systemie operacyjnym Linux ilo\u015b\u0107 wolnego miejsca na dyskach mo\u017cna sprawdzi\u0107 poleceniem",
        "imageLoc": "",
        "answers": [
            "A. fstab",
            "B. mkfs",
            "C. du",
            "D. df"
        ],
        "goodAnswer": "D. df"
    },
    {
        "id": 1738,
        "question": "Us\u0142uga o nazwie: \"Pulpit zdalny\" domy\u015blnie dzia\u0142a na porcie",
        "imageLoc": "",
        "answers": [
            "A. 3379",
            "B. 3390",
            "C. 3389",
            "D. 3369"
        ],
        "goodAnswer": "C. 3389"
    },
    {
        "id": 1739,
        "question": "Warto\u015b\u0107 liczby 1101 0100 0111 w kodzie szesnastkowym wynosi",
        "imageLoc": "",
        "answers": [
            "A. D47",
            "B. C27",
            "C. C47",
            "D. D43"
        ],
        "goodAnswer": "A. D47"
    },
    {
        "id": 1740,
        "question": "Z jakim parametrem nale\u017cy wywo\u0142a\u0107 polecenie netstat, aby zosta\u0142a wy\u015bwietlona statystyka interfejsu sieciowego (liczba wys\u0142anych oraz odebranych bajt\u00f3w i pakiet\u00f3w)?",
        "imageLoc": "",
        "answers": [
            "A. -a",
            "B. -e",
            "C. -n",
            "D. -o"
        ],
        "goodAnswer": "B. -e"
    },
    {
        "id": 1741,
        "question": "Kt\u00f3rego narz\u0119dzia trzeba u\u017cy\u0107 do zarobienia ko\u0144c\u00f3wek kabla UTP w module keystone ze stykami typu 110?",
        "imageLoc": "",
        "answers": [
            "A. Zaciskarki do wtyk\u00f3w RJ45",
            "B. Narz\u0119dzia uderzeniowego",
            "C. Wkr\u0119taka p\u0142askiego",
            "D. Wkr\u0119taka krzy\u017cakowego"
        ],
        "goodAnswer": "B. Narz\u0119dzia uderzeniowego"
    },
    {
        "id": 1742,
        "question": "Kt\u00f3re z zada\u0144 realizuje us\u0142uga katalogowa Active Directory w systemach Windows Server?",
        "imageLoc": "",
        "answers": [
            "A. obs\u0142uguje \u017c\u0105dania protoko\u0142u komunikacyjnego",
            "B. umo\u017cliwia wymian\u0119 plik\u00f3w z odleg\u0142ymi komputerami za pomoc\u0105 protoko\u0142u komunikacyjnego",
            "C. centralnie zarz\u0105dza adresami IP i powi\u0105zanymi informacjami, a tak\u017ce udostepnia je automatycznie klientom",
            "D. przechowuje informacje o obiektach znajdujacych si\u0119 w sieci"
        ],
        "goodAnswer": "D. przechowuje informacje o obiektach znajdujacych si\u0119 w sieci"
    },
    {
        "id": 1743,
        "question": "Na rysunku procesor oznaczony jest numerem",
        "imageLoc": require("../assets/img/1.png"),
        "answers": [
            "A. 5",
            "B. 8",
            "C. 2",
            "D. 3"
        ],
        "goodAnswer": "C. 2"
    },
    {
        "id": 1744,
        "question": "W drukarce laserowej do utrwalenia na kartce wydruku wykorzystuje si\u0119",
        "imageLoc": "",
        "answers": [
            "A. ta\u015bmy transmisyjne",
            "B. promienie lasera",
            "C. rozgrzane wa\u0142ki",
            "D. g\u0142owice piezoelektryczne"
        ],
        "goodAnswer": "C. rozgrzane wa\u0142ki"
    },
    {
        "id": 1745,
        "question": "Interfejs HDMI komputera pozwala na przesy\u0142anie sygna\u0142u",
        "imageLoc": "",
        "answers": [
            "A. cyfrowego video i audio",
            "B. cyfrowego audio",
            "C. cyfrowego video",
            "D. analogowego audio i video"
        ],
        "goodAnswer": "A. cyfrowego video i audio"
    },
    {
        "id": 1746,
        "question": "Na schemacie blokowym, przedstawiaj\u0105cym fragment systemu mikroprocesorowego, symbolem X oznaczono",
        "imageLoc": require("../assets/img/25.png"),
        "answers": [
            "A. pami\u0119\u0107 sta\u0142\u0105 ROM",
            "B. pami\u0119\u0107 Cache",
            "C. kontroler DMA",
            "D. kontroler przerwa\u0144"
        ],
        "goodAnswer": "D. kontroler przerwa\u0144"
    },
    {
        "id": 1747,
        "question": "Jakie oprogramowanie, zapobiegaj\u0105ce w\u0142amaniu do sieci, nale\u017cy zainstalowa\u0107 na serwerze udost\u0119pniaj\u0105cym po\u0142\u0105czenie z internetem?",
        "imageLoc": "",
        "answers": [
            "A. Active Directory",
            "B. FireWall",
            "C. DNS",
            "D. DHCP"
        ],
        "goodAnswer": "B. FireWall"
    },
    {
        "id": 1748,
        "question": "Kt\u00f3re urz\u0105dzenie umo\u017cliwia pod\u0142\u0105czenie kabla \u015bwiat\u0142owodowego u\u017cytego w okablowaniu pionowym sieci z prze\u0142\u0105cznikiem posiadaj\u0105cym wy\u0142\u0105cznie gniazda RJ45?",
        "imageLoc": "",
        "answers": [
            "A. Ruter",
            "B. Modem",
            "C. Konwerter medi\u00f3w",
            "D. Regenerator"
        ],
        "goodAnswer": "C. Konwerter medi\u00f3w"
    },
    {
        "id": 1749,
        "question": "W systemie serwerowym Windows widoczny jest zakres adres\u00f3w IPv4. Wskazana ikona znajduj\u0105ca si\u0119 przy jego nazwie oznacza, \u017ce",
        "imageLoc": require("../assets/img/387.png"),
        "answers": [
            "A. pula adres\u00f3w w tym zakresie jest wyczerpana na poziomie bliskim 100%.",
            "B. zakres ten jest nieaktywny.",
            "C. pula adres\u00f3w w tym zakresie jest wyczerpana w 100%.",
            "D. zakres ten jest aktywny."
        ],
        "goodAnswer": "B. zakres ten jest nieaktywny."
    },
    {
        "id": 1750,
        "question": "Internet Relay Chat (IRC) to protok\u00f3\u0142 stosowany do",
        "imageLoc": "",
        "answers": [
            "A. transmisji g\u0142osu przez sie\u0107",
            "B. przesy\u0142ania poczty e-mail",
            "C. transmisji list\u00f3w na grup\u0119 dyskusyjn\u0105",
            "D. prowadzenia rozm\u00f3w za pomoc\u0105 konsoli tekstowej"
        ],
        "goodAnswer": "D. prowadzenia rozm\u00f3w za pomoc\u0105 konsoli tekstowej"
    },
    {
        "id": 1751,
        "question": "Zabrudzony czytnik w nap\u0119dzie optycznym powinno si\u0119 czy\u015bci\u0107",
        "imageLoc": "",
        "answers": [
            "A. rozpuszczalnikiem ftalowym",
            "B. spirytusem",
            "C. izopropanolem",
            "D. benzyn\u0105 ekstrakcyjn\u0105"
        ],
        "goodAnswer": "C. izopropanolem"
    },
    {
        "id": 1752,
        "question": "Za pomoc\u0105 narz\u0119dzia diagnostycznego Tracert mo\u017cna ustali\u0107 tras\u0119 do punktu docelowego. Przez ile router\u00f3w przeszed\u0142 pakiet wys\u0142any do hosta 172.16.0.99?",
        "imageLoc": require("../assets/img/975.png"),
        "answers": [
            "A. 4",
            "B. 24",
            "C. 2",
            "D. 5"
        ],
        "goodAnswer": "A. 4"
    },
    {
        "id": 1753,
        "question": "Administrator sieci LAN zauwa\u017cy\u0142 przej\u015bcie w tryb awaryjny urz\u0105dzenia typu UPS. \u015awiadczy to o awarii systemu",
        "imageLoc": "",
        "answers": [
            "A. urz\u0105dze\u0144 aktywnych",
            "B. okablowania",
            "C. zasilania",
            "D. ch\u0142odzenia i wentylacji"
        ],
        "goodAnswer": "C. zasilania"
    },
    {
        "id": 1754,
        "question": "Przycisk umieszczony na obudowie rutera, kt\u00f3rego opis znajduje si\u0119 w ramce, jest stosowany w celu",
        "imageLoc": require("../assets/img/1513.png"),
        "answers": [
            "A. w\u0142\u0105czenia lub wy\u0142\u0105czenia sieci Wi-Fi",
            "B. w\u0142\u0105czenia lub wy\u0142\u0105czenia rutera",
            "C. przywr\u00f3cenia ustawie\u0144 fabrycznych rutera",
            "D. zrestartowania rutera"
        ],
        "goodAnswer": "C. przywr\u00f3cenia ustawie\u0144 fabrycznych rutera"
    },
    {
        "id": 1755,
        "question": "Po wykonaniu eksportu klucza HKCR zostanie zapisana kopia rejestru, zawieraj\u0105ca informacje dotycz\u0105ce konfiguracji",
        "imageLoc": "",
        "answers": [
            "A. sprz\u0119towej komputera",
            "B. pulpitu zalogowanego u\u017cytkownika",
            "C. powi\u0105za\u0144 mi\u0119dzy typami plik\u00f3w a aplikacjami",
            "D. kont u\u017cytkownik\u00f3w"
        ],
        "goodAnswer": "C. powi\u0105za\u0144 mi\u0119dzy typami plik\u00f3w a aplikacjami"
    },
    {
        "id": 1756,
        "question": "Wykonanie polecenia dxdiag w systemie Windows umo\u017cliwi",
        "imageLoc": "",
        "answers": [
            "A. uruchomienie narz\u0119dzia diagnostycznego DirectX.",
            "B. wykonanie konfiguracji klawiatury, aby spe\u0142nia\u0142a wymagania j\u0119zyka polskiego.",
            "C. wykonanie kompresji wskazanych na dysku twardym danych.",
            "D. uruchomienie maszyny wirtualnej z zainstalowanym systemem Windows 10."
        ],
        "goodAnswer": "A. uruchomienie narz\u0119dzia diagnostycznego DirectX."
    },
    {
        "id": 1757,
        "question": "Klawiatura QWERTY umo\u017cliwiaj\u0105ca wprowadzenie znak\u00f3w charakterystycznych dla j\u0119zyka polskiego nazywana jest r\u00f3wnie\u017c klawiatur\u0105",
        "imageLoc": "",
        "answers": [
            "A. maszynistki",
            "B. polsk\u0105",
            "C. programisty",
            "D. diakrytyczn\u0105"
        ],
        "goodAnswer": "C. programisty"
    },
    {
        "id": 1758,
        "question": "Kt\u00f3re polecenie systemu Windows Server 2008 umo\u017cliwia promowanie serwera do roli kontrolera domeny?",
        "imageLoc": "",
        "answers": [
            "A. gpresult",
            "B. gpedit",
            "C. dcpromo",
            "D. nslookup"
        ],
        "goodAnswer": "C. dcpromo"
    },
    {
        "id": 1759,
        "question": "Aby u\u017cytkownicy sieci lokalnej mogli przegl\u0105da\u0107 strony WWW protoko\u0142ami HTTP i HTTPS, brama internetowa musi przepuszcza\u0107 ruch na portach",
        "imageLoc": "",
        "answers": [
            "A. 80 i 443",
            "B. 80 i 434",
            "C. 90 i 443",
            "D. 90 i 434"
        ],
        "goodAnswer": "A. 80 i 443"
    },
    {
        "id": 1760,
        "question": "Apache jest serwerem",
        "imageLoc": "",
        "answers": [
            "A. Baz danych",
            "B. DNS",
            "C. WWW",
            "D. DHCP"
        ],
        "goodAnswer": "C. WWW"
    },
    {
        "id": 1761,
        "question": "Kt\u00f3re z protoko\u0142\u00f3w przekazuj\u0105 okresowe kopie tablic rutingu do s\u0105siedniego rutera i nie maj\u0105 pe\u0142nej informacji o odleg\u0142ych ruterach?",
        "imageLoc": "",
        "answers": [
            "A. EIGPR, OSPF",
            "B. RIP, IGRP",
            "C. OSPF, RIP",
            "D. EGP, BGP"
        ],
        "goodAnswer": "A. EIGPR, OSPF"
    },
    {
        "id": 1762,
        "question": "Technika przekazywania \u017cetonu (ang. token) jest stosowana w topologii",
        "imageLoc": "",
        "answers": [
            "A. gwiazdy.",
            "B. pier\u015bcienia.",
            "C. kraty.",
            "D. magistrali."
        ],
        "goodAnswer": "B. pier\u015bcienia."
    },
    {
        "id": 1763,
        "question": "Kt\u00f3ry protok\u00f3\u0142 zapewnia szyfrowane po\u0142\u0105czenia?",
        "imageLoc": "",
        "answers": [
            "A. TELNET",
            "B. DHCP",
            "C. DNS",
            "D. SSH"
        ],
        "goodAnswer": "D. SSH"
    },
    {
        "id": 1764,
        "question": "Jak nazywa si\u0119 atak w sieci lokalnej polegaj\u0105cy na pr\u00f3bie podszycia si\u0119 pod kogo\u015b innego?",
        "imageLoc": "",
        "answers": [
            "A. Spoofing",
            "B. DDoS",
            "C. Phishing",
            "D. Flood ping"
        ],
        "goodAnswer": "C. Phishing"
    },
    {
        "id": 1765,
        "question": "Do zbudowania programowej macierzy dyskowej RAID-1 nale\u017cy u\u017cy\u0107 minimum",
        "imageLoc": "",
        "answers": [
            "A. 2 dysk\u00f3w",
            "B. 1 dysku podzielonego na dwie partycje",
            "C. 3 dysk\u00f3w",
            "D. 4 dysk\u00f3w"
        ],
        "goodAnswer": "A. 2 dysk\u00f3w"
    },
    {
        "id": 1766,
        "question": "Mechanizm zasilacza komputerowego chroni\u0105cy przed przegrzaniem zasilacza jest oznaczony w dokumentacji technicznej jako zabezpieczenie typu",
        "imageLoc": "",
        "answers": [
            "A. OTP",
            "B. UVP",
            "C. OPP",
            "D. SCP"
        ],
        "goodAnswer": "A. OTP"
    },
    {
        "id": 1767,
        "question": "Funkcj\u0119 bufora pomi\u0119dzy woln\u0105 pami\u0119ci\u0105 operacyjn\u0105 a szybkim procesorem pe\u0142ni pami\u0119\u0107",
        "imageLoc": "",
        "answers": [
            "A. FDD",
            "B. SSD",
            "C. CACHE",
            "D. ROM"
        ],
        "goodAnswer": "C. CACHE"
    },
    {
        "id": 1768,
        "question": "Zdj\u0119cie przedstawia",
        "imageLoc": require("../assets/img/70.png"),
        "answers": [
            "A. wentylator procesora",
            "B. ch\u0142odzenie aktywne chipsetu",
            "C. ch\u0142odzenie pasywne chipsetu",
            "D. wentylator karty graficznej"
        ],
        "goodAnswer": "C. ch\u0142odzenie pasywne chipsetu"
    },
    {
        "id": 1769,
        "question": "Za pomoc\u0105 polecenia ipconfig /flushdns mo\u017cna wykona\u0107 konserwacj\u0119 urz\u0105dzenia sieciowego polegaj\u0105c\u0105 na",
        "imageLoc": "",
        "answers": [
            "A. aktualizacji ustawie\u0144 nazw interfejs\u00f3w sieciowych",
            "B. zwolnieniu dzier\u017cawy adresu uzyskanego z DHCP",
            "C. wyczyszczeniu bufora systemu nazw domenowych",
            "D. odnowieniu dzier\u017cawy adresu IP"
        ],
        "goodAnswer": "C. wyczyszczeniu bufora systemu nazw domenowych"
    },
    {
        "id": 1770,
        "question": "Kt\u00f3re polecenie systemu operacyjnego Linux jest stosowane do \u015bledzenia komunikacji pakiet\u00f3w TCP/IP lub protoko\u0142\u00f3w transmitowanych lub odbieranych w sieci komputerowej, do komputerowej do kt\u00f3rej pod\u0142\u0105czony jest komputer u\u017cytkownika?",
        "imageLoc": "",
        "answers": [
            "A. ssh",
            "B. route",
            "C. tcpdump",
            "D. ipconfig"
        ],
        "goodAnswer": "C. tcpdump"
    },
    {
        "id": 1771,
        "question": "Po instalacji z domy\u015blnymi ustawieniami system Windows XP NIE OBS\u0141UGUJE systemu plik\u00f3w",
        "imageLoc": "",
        "answers": [
            "A. FAT16",
            "B. EXT",
            "C. NTFS",
            "D. FAT32"
        ],
        "goodAnswer": "B. EXT"
    },
    {
        "id": 1772,
        "question": "Jaka jest maksymalna pr\u0119dko\u015b\u0107 odczytu p\u0142yt CD-R w nap\u0119dzie oznaczonym x48?",
        "imageLoc": "",
        "answers": [
            "A. 480 kB/s",
            "B. 7200 kB/s",
            "C. 10000 kB/s",
            "D. 4800 kB/s"
        ],
        "goodAnswer": "B. 7200 kB/s"
    },
    {
        "id": 1773,
        "question": "Komputer ma pod\u0142\u0105czon\u0105 mysz bezprzewodow\u0105, a kursor podczas pracy nie porusza si\u0119 p\u0142ynie, \"skacze\" po ekranie. Przyczyn\u0105 usterki urz\u0105dzenia mo\u017ce by\u0107",
        "imageLoc": "",
        "answers": [
            "A. uszkodzenie mikroprze\u0142\u0105cznika",
            "B. wyczerpywanie si\u0119 baterii zasilaj\u0105cej",
            "C. uszkodzenie lewego przycisku",
            "D. brak baterii"
        ],
        "goodAnswer": "B. wyczerpywanie si\u0119 baterii zasilaj\u0105cej"
    },
    {
        "id": 1774,
        "question": "Do automatycznego przydzielania adres\u00f3w IP stacjom roboczym jest stosowana us\u0142uga",
        "imageLoc": "",
        "answers": [
            "A. DHCP",
            "B. WINS",
            "C. IMAP",
            "D. SMTP"
        ],
        "goodAnswer": "A. DHCP"
    },
    {
        "id": 1775,
        "question": "Aby pod\u0142\u0105czy\u0107 do komputera drukark\u0119 ig\u0142ow\u0105 o przedstawionych parametrach, nale\u017cy kabel do\u0142\u0105czony do drukarki zamocowa\u0107 w porcie",
        "imageLoc": require("../assets/img/2084.png"),
        "answers": [
            "A. USB.",
            "B. Ethernet.",
            "C. FireWire.",
            "D. Centronics."
        ],
        "goodAnswer": "D. Centronics."
    },
    {
        "id": 1776,
        "question": "Przy uruchamianiu komputera pojawia sie komunikat CMOS checksum error press F1 to continue press DEL to setup. Wci\u015bni\u0119cie klawisza DEL spowoduje",
        "imageLoc": "",
        "answers": [
            "A. skasowanie zawarto\u015bci pami\u0119ci CMOS",
            "B. wej\u015bcie do BIOS-u komputera",
            "C. usuni\u0119cie pliku setup",
            "D. przej\u015bcie do konfiguracji systemu Windows"
        ],
        "goodAnswer": "B. wej\u015bcie do BIOS-u komputera"
    },
    {
        "id": 1777,
        "question": "Urz\u0105dzenie przedstawione na rysunku to",
        "imageLoc": require("../assets/img/1293.png"),
        "answers": [
            "A. ruter",
            "B. koncentrator",
            "C. bramka VoIP",
            "D. wt\u00f3rnik"
        ],
        "goodAnswer": "B. koncentrator"
    },
    {
        "id": 1778,
        "question": "U\u017cytkownik systemu Windows wybra\u0142 opcj\u0119 powr\u00f3t do punktu przywracania. Kt\u00f3re pliki powsta\u0142e po wybranym punkcie NIE zostan\u0105 naruszone przez t\u0119 akcj\u0119?",
        "imageLoc": "",
        "answers": [
            "A. Pliki osobiste",
            "B. Pliki sterownik\u00f3w",
            "C. Pliki aplikacji",
            "D. Pliki aktualizacji"
        ],
        "goodAnswer": "A. Pliki osobiste"
    },
    {
        "id": 1779,
        "question": "Kt\u00f3rym poleceniem systemu Linux mo\u017cna sprawdzi\u0107 tras\u0119 pakietu do docelowego urz\u0105dzenia?",
        "imageLoc": "",
        "answers": [
            "A. pathping",
            "B. tracert",
            "C. traceroute",
            "D. netstat"
        ],
        "goodAnswer": "C. traceroute"
    },
    {
        "id": 1780,
        "question": "Adres MAC karty sieciowej zapisany w postaci binarnej wynosi 00000000-00010100-10000101-10001011-01101011-10001010. Kt\u00f3ry z zapis\u00f3w jest postaci\u0105 heksadecymaln\u0105 tego adresu?",
        "imageLoc": "",
        "answers": [
            "A. 00-14-85-8B-6B-8A",
            "B. 00-14-85-8C-6C-8B",
            "C. 00-12-85-8B-6B-8A",
            "D. 00-16-83-8C-6B-8B"
        ],
        "goodAnswer": "A. 00-14-85-8B-6B-8A"
    },
    {
        "id": 1781,
        "question": "Przy budowie sieci przewodowej o maksymalnej szybko\u015bci transmisji 1 Gb/s, w kt\u00f3rej maksymalna odleg\u0142o\u015b\u0107 pomi\u0119dzy punktami sieci nie przekracza 100m, nale\u017cy wykorzysta\u0107 jako medium transmisyjne",
        "imageLoc": "",
        "answers": [
            "A. kabel UTP kategorii 5e",
            "B. kabel koncentryczny o \u015brednicy 1/4 cala",
            "C. fale radiowe o cz\u0119stotliwo\u015bci 2,4 GHz",
            "D. fale radiowe o cz\u0119stotliwo\u015bci 5 GHz"
        ],
        "goodAnswer": "A. kabel UTP kategorii 5e"
    },
    {
        "id": 1782,
        "question": "W systemach Windows XP Pro/Windows Vista Business/Windows 7 Pro/Windows 8 Pro, opcj\u0105 gwarantuj\u0105ca poufno\u015b\u0107 danych dla u\u017cytkownik\u00f3w korzystaj\u0105cych z tego samego komputera, kt\u00f3rych dane mog\u0105 by\u0107 wykorzystywane wy\u0142\u0105cznie przez nich samych, jest",
        "imageLoc": "",
        "answers": [
            "A. korzystanie z w\u0142asnych kont z uprawnieniami administratora",
            "B. samodzielne przypisywanie plikom atrybutu: ukryty",
            "C. samodzielnie przypisywanie plikom atrybutu: zaszyfrowany",
            "D. korzystanie z w\u0142asnym kont z ograniczeniami"
        ],
        "goodAnswer": "C. samodzielnie przypisywanie plikom atrybutu: zaszyfrowany"
    },
    {
        "id": 1783,
        "question": "Koprocesor (Floating Point Unit) w komputerze s\u0142u\u017cy do wykonywania",
        "imageLoc": "",
        "answers": [
            "A. operacji na liczbach ca\u0142kowitych",
            "B. podprogram\u00f3w",
            "C. operacji na liczbach naturalnych",
            "D. operacji zmiennoprzecinkowych"
        ],
        "goodAnswer": "D. operacji zmiennoprzecinkowych"
    },
    {
        "id": 1784,
        "question": "W systemie plik\u00f3w NTFS zmian\u0119 nazwy pliku umo\u017cliwia uprawnienie",
        "imageLoc": "",
        "answers": [
            "A. odczytu i wykonania",
            "B. modyfikacji",
            "C. odczytu",
            "D. zapisu"
        ],
        "goodAnswer": "B. modyfikacji"
    },
    {
        "id": 1785,
        "question": "Sprawdzenie minimalnego okresu wa\u017cno\u015bci has\u0142a w systemie Windows umo\u017cliwia polecenie",
        "imageLoc": "",
        "answers": [
            "A. net user",
            "B. net group",
            "C. net time",
            "D. net accounts"
        ],
        "goodAnswer": "D. net accounts"
    },
    {
        "id": 1786,
        "question": "R\u00f3wnowa\u017cnym zapisem 2^32 bajt\u00f3w jest zapis:",
        "imageLoc": "",
        "answers": [
            "A. 4 GiB",
            "B. 8 GB",
            "C. 1 GiB",
            "D. 2 GB"
        ],
        "goodAnswer": "A. 4 GiB"
    },
    {
        "id": 1787,
        "question": "Narz\u0119dzie, kt\u00f3re zabezpiecza przed nieautoryzowanym dost\u0119pem do lokalnej sieci, to",
        "imageLoc": "",
        "answers": [
            "A. analizator pakiet\u00f3w",
            "B. program antywirusowy",
            "C. analizator sieci",
            "D. zapora sieciowa"
        ],
        "goodAnswer": "D. zapora sieciowa"
    },
    {
        "id": 1788,
        "question": "Aby mo\u017cliwe by\u0142o wykorzystanie macierzy RAID 1, potrzeba minimum",
        "imageLoc": "",
        "answers": [
            "A. 2 dysk\u00f3w",
            "B. 4 dysk\u00f3w",
            "C. 5 dysk\u00f3w",
            "D. 3 dysk\u00f3w"
        ],
        "goodAnswer": "A. 2 dysk\u00f3w"
    },
    {
        "id": 1789,
        "question": "Kopia r\u00f3\u017cnicowa polega na",
        "imageLoc": "",
        "answers": [
            "A. kopiowaniu tylko plik\u00f3w, kt\u00f3re zosta\u0142y utworzone lub zmienione od czasu utworzenia ostatniej kopii pe\u0142nej",
            "B. kopiowaniu tylko plik\u00f3w, kt\u00f3re zosta\u0142y utworzone od czasu ostatniej kopii pe\u0142nej",
            "C. kopiowaniu tylko plik\u00f3w, kt\u00f3re zosta\u0142y zmienione od czasu utworzenia ostatniej kopii pe\u0142nej",
            "D. kopiowaniu tylko tej cz\u0119\u015bci plik\u00f3w, kt\u00f3ra zosta\u0142a dopisana od czasu utworzenia ostatniej kopii pe\u0142nej"
        ],
        "goodAnswer": "A. kopiowaniu tylko plik\u00f3w, kt\u00f3re zosta\u0142y utworzone lub zmienione od czasu utworzenia ostatniej kopii pe\u0142nej"
    },
    {
        "id": 1790,
        "question": "Magistrala zako\u0144czona elementem przedstawionym na rysunku jest charakterystyczna dla interfejsu",
        "imageLoc": require("../assets/img/1549.png"),
        "answers": [
            "A. ATAPI",
            "B. SCSI",
            "C. UDMA",
            "D. SATA"
        ],
        "goodAnswer": "B. SCSI"
    },
    {
        "id": 1791,
        "question": "Zerowanie rejestr\u00f3w procesora odbywa si\u0119 poprzez",
        "imageLoc": "",
        "answers": [
            "A. ustawienie licznika rozkaz\u00f3w na adresie zerowym",
            "B. ustawienie parametru w BIOS-ie",
            "C. u\u017cycie sygna\u0142u RESET",
            "D. wyzerowanie bit\u00f3w rejestru flag"
        ],
        "goodAnswer": "C. u\u017cycie sygna\u0142u RESET"
    },
    {
        "id": 1792,
        "question": "Aby zwi\u0119kszy\u0107 bezpiecze\u0144stwo zasob\u00f3w sieciowych administrator sieci komputerowej w firmie otrzyma\u0142 polecenie podzielenia istniej\u0105cej lokalnej sieci komputerowej na 16 podsieci. Dotychczasowa sie\u0107 mia\u0142a adres IP 192.168.20.0 z mask\u0105 255.255.255.0. Kt\u00f3r\u0105 mask\u0119 sieci powinien zastosowa\u0107 administrator?",
        "imageLoc": "",
        "answers": [
            "A. 255.255.255.192",
            "B. 255.255.255.248",
            "C. 255.255.255.240",
            "D. 255.255.255.224"
        ],
        "goodAnswer": "C. 255.255.255.240"
    },
    {
        "id": 1793,
        "question": "Oznaczenie przedstawionego procesora informuje o",
        "imageLoc": require("../assets/img/1844.png"),
        "answers": [
            "A. jego ma\u0142ej obudowie",
            "B. braku blokady mno\u017cnika (unlocked)",
            "C. bardzo niskim zu\u017cyciu energii przez procesor",
            "D. wersji mobilnej procesora"
        ],
        "goodAnswer": "B. braku blokady mno\u017cnika (unlocked)"
    },
    {
        "id": 1794,
        "question": "Zdj\u0119cie przedstawia kart\u0119",
        "imageLoc": require("../assets/img/27.png"),
        "answers": [
            "A. telewizyjn\u0105 ze z\u0142\u0105czem ISA",
            "B. sieciow\u0105 ze z\u0142\u0105czem ISA",
            "C. d\u017awi\u0119kow\u0105 ze z\u0142\u0105czem PCI",
            "D. telewizyjn\u0105 ze z\u0142\u0105czem PCI"
        ],
        "goodAnswer": "D. telewizyjn\u0105 ze z\u0142\u0105czem PCI"
    },
    {
        "id": 1795,
        "question": "W architekturze sieci lokalnych typu klient-serwer",
        "imageLoc": "",
        "answers": [
            "A. wyr\u00f3\u017cnione komputery pe\u0142ni\u0105 rol\u0119 serwer\u00f3w udost\u0119pniaj\u0105cych zasoby, a pozosta\u0142e komputery z tych zasob\u00f3w korzystaj\u0105",
            "B. wszystkie komputery klienckie maj\u0105 dost\u0119p do zasob\u00f3w komputerowych",
            "C. \u017caden z komputer\u00f3w nie pe\u0142ni roli nadrz\u0119dnej w stosunku do pozosta\u0142ych",
            "D. ka\u017cdy komputer zar\u00f3wno udost\u0119pnia jak i korzysta z zasob\u00f3w innych komputer\u00f3w"
        ],
        "goodAnswer": "A. wyr\u00f3\u017cnione komputery pe\u0142ni\u0105 rol\u0119 serwer\u00f3w udost\u0119pniaj\u0105cych zasoby, a pozosta\u0142e komputery z tych zasob\u00f3w korzystaj\u0105"
    },
    {
        "id": 1796,
        "question": "Za pomoc\u0105 polecenia taskmgr u\u017cytkownik systemu Windows mo\u017ce",
        "imageLoc": "",
        "answers": [
            "A. naprawi\u0107 b\u0142\u0119dy systemu plik\u00f3w",
            "B. wykona\u0107 aktualizacj\u0119 sterownik\u00f3w systemowych",
            "C. odzyska\u0107 uszkodzone sektory dysku",
            "D. zako\u0144czy\u0107 dzia\u0142anie wadliwej aplikacji"
        ],
        "goodAnswer": "D. zako\u0144czy\u0107 dzia\u0142anie wadliwej aplikacji"
    },
    {
        "id": 1797,
        "question": "AC-72-89-17-6E-B2 to adres fizyczny karty sieciowej zapisany w postaci",
        "imageLoc": "",
        "answers": [
            "A. binarnej",
            "B. dziesi\u0119tnej",
            "C. oktalnej",
            "D. heksadecymalnej"
        ],
        "goodAnswer": "D. heksadecymalnej"
    },
    {
        "id": 1798,
        "question": "Licencja wolnego i otwartego oprogramowania, to licencja",
        "imageLoc": "",
        "answers": [
            "A. OEM",
            "B. GNU GPL",
            "C. Adware",
            "D. Trial"
        ],
        "goodAnswer": "B. GNU GPL"
    },
    {
        "id": 1799,
        "question": "Na rysunku jest przedstawiony fragment procesu komunikacji z serwerem przechwyconej przez program Wireshark. Kt\u00f3ry to serwer?",
        "imageLoc": require("../assets/img/1470.png"),
        "answers": [
            "A. DNS",
            "B. DHCP",
            "C. FTP",
            "D. WWW"
        ],
        "goodAnswer": "B. DHCP"
    },
    {
        "id": 1800,
        "question": "Kt\u00f3re medium transmisyjne sieci LAN zaleca si\u0119 do zastosowania w zabytkowych budynkach?",
        "imageLoc": "",
        "answers": [
            "A. Fale radiowe",
            "B. Kabel koncentryczny",
            "C. \u015awiat\u0142ow\u00f3d",
            "D. Kabel typu skr\u0119tka"
        ],
        "goodAnswer": "A. Fale radiowe"
    },
    {
        "id": 1801,
        "question": "Konwerter RAMDAC przetwarza sygna\u0142",
        "imageLoc": "",
        "answers": [
            "A. analogowy na cyfrowy",
            "B. sta\u0142y na zmienny",
            "C. cyfrowy na analogowy",
            "D. zmienny na sta\u0142y"
        ],
        "goodAnswer": "C. cyfrowy na analogowy"
    },
    {
        "id": 1802,
        "question": "Popraw\u0119 jako\u015bci skanowania mo\u017cna uzyska\u0107 poprzez zmian\u0119",
        "imageLoc": "",
        "answers": [
            "A. formatu pliku wej\u015bciowego",
            "B. wielko\u015bci wydruku",
            "C. rozmiaru skanowanego dokumentu",
            "D. rozdzielczo\u015bci"
        ],
        "goodAnswer": "D. rozdzielczo\u015bci"
    },
    {
        "id": 1803,
        "question": "Podstawowym mechanizmem ochrony danych znajduj\u0105cych si\u0119 na serwerze jest",
        "imageLoc": "",
        "answers": [
            "A. tworzenie punktu przywracania systemu",
            "B. tworzenie kopii bezpiecze\u0144stwa",
            "C. automatyczne wykonywanie kompresji danych",
            "D. w\u0142\u0105czenie ochrony systemu"
        ],
        "goodAnswer": "B. tworzenie kopii bezpiecze\u0144stwa"
    },
    {
        "id": 1804,
        "question": "Administrator chce udost\u0119pni\u0107 w sieci trzem u\u017cytkownikom nale\u017c\u0105cym do grupy Serwisanci tylko folder C:instrukcje. Kt\u00f3re z rozwi\u0105za\u0144 powinien zastosowa\u0107?",
        "imageLoc": "",
        "answers": [
            "A. Udost\u0119pni\u0107 grupie Wszyscy folder C:instrukcje i ograniczy\u0107 liczb\u0119 r\u00f3wnoczesnych po\u0142\u0105cze\u0144 do 3",
            "B. Udost\u0119pni\u0107 grupie Serwisanci dysk C: i nie ogranicza\u0107 liczby r\u00f3wnoczesnych po\u0142\u0105cze\u0144",
            "C. Udost\u0119pni\u0107 grupie Wszyscy dysk C: i ograniczy\u0107 liczb\u0119 r\u00f3wnoczesnych po\u0142\u0105cze\u0144 do 3",
            "D. Udost\u0119pni\u0107 grupie Serwisanci folder C:instrukcje i nie ogranicza\u0107 liczby r\u00f3wnoczesnych po\u0142\u0105cze\u0144"
        ],
        "goodAnswer": "D. Udost\u0119pni\u0107 grupie Serwisanci folder C:instrukcje i nie ogranicza\u0107 liczby r\u00f3wnoczesnych po\u0142\u0105cze\u0144"
    },
    {
        "id": 1805,
        "question": "Kt\u00f3ry ze standard\u00f3w Gigabit Ethernet umo\u017cliwia budow\u0119 segment\u00f3w sieci o d\u0142ugo\u015bci 550 m/5000 m z pr\u0119dko\u015bci\u0105 transmisji 1 Gb/s?",
        "imageLoc": "",
        "answers": [
            "A. 1000Base-SX",
            "B. 1000Base-LX",
            "C. 1000Base-T",
            "D. 1000Base-FX"
        ],
        "goodAnswer": "B. 1000Base-LX"
    },
    {
        "id": 1806,
        "question": "Norma EN 50167 dotyczy okablowania",
        "imageLoc": "",
        "answers": [
            "A. pionowego",
            "B. szkieletowego",
            "C. poziomego",
            "D. kampusowego"
        ],
        "goodAnswer": "C. poziomego"
    },
    {
        "id": 1807,
        "question": "Kt\u00f3re narz\u0119dzie jest przeznaczone do lekkiego odgi\u0119cia blachy obudowy komputera oraz zamocowania \u015bruby monta\u017cowej w trudno dost\u0119pnym miejscu?",
        "imageLoc": require("../assets/img/2053.png"),
        "answers": [
            "A. A",
            "B. B",
            "C. C",
            "D. D"
        ],
        "goodAnswer": "D. D"
    },
    {
        "id": 1808,
        "question": "Jaka jest kolejno\u015b\u0107 przewod\u00f3w we wtyku RJ45 zgodnie z sekwencj\u0105 po\u0142\u0105cze\u0144 T568A?",
        "imageLoc": require("../assets/img/676.png"),
        "answers": [
            "A. A",
            "B. B",
            "C. C",
            "D. D"
        ],
        "goodAnswer": "D. D"
    },
    {
        "id": 1809,
        "question": "W wyniku wykonania przedstawionego skryptu",
        "imageLoc": require("../assets/img/1474.png"),
        "answers": [
            "A. zostanie wpisany tekst ala.txt do pliku ola.txt",
            "B. zawarto\u015b\u0107 pliku ola.txt zostanie skopiowana do pliku ala.txt",
            "C. zostanie wpisany tekst ola.txt do pliku ala.txt",
            "D. zawarto\u015b\u0107 pliku ala.txt zostanie skopiowana do pliku ola.txt"
        ],
        "goodAnswer": "C. zostanie wpisany tekst ola.txt do pliku ala.txt"
    },
    {
        "id": 1810,
        "question": "Kt\u00f3rego oprogramowania nie mo\u017cna u\u017cywa\u0107 na urz\u0105dzeniach nale\u017c\u0105cych do instytucji rz\u0105dowych lub edukacyjnych?",
        "imageLoc": "",
        "answers": [
            "A. Microsoft Security Essentials",
            "B. Windows Defender",
            "C. AbiWord",
            "D. Microsoft Word"
        ],
        "goodAnswer": "A. Microsoft Security Essentials"
    },
    {
        "id": 1811,
        "question": "Adres IP v.4 ma d\u0142ugo\u015b\u0107",
        "imageLoc": "",
        "answers": [
            "A. 10 bajt\u00f3w",
            "B. 2 bajty",
            "C. 32 bit\u00f3w",
            "D. 16 bit\u00f3w"
        ],
        "goodAnswer": "C. 32 bit\u00f3w"
    },
    {
        "id": 1812,
        "question": "Przedstawiony na rysunku wpis w dzienniku zdarze\u0144 zalicza si\u0119 do zdarze\u0144 typu",
        "imageLoc": require("../assets/img/1160.png"),
        "answers": [
            "A. B\u0142\u0119dy",
            "B. Informacje",
            "C. Ostrze\u017cenia",
            "D. Inspekcja niepowodze\u0144"
        ],
        "goodAnswer": "B. Informacje"
    },
    {
        "id": 1813,
        "question": "Wska\u017c poprawny zapis liczby -1210 metod\u0105 znak-modu\u0142 do postaci o\u015bmiobitowej liczby dw\u00f3jkowej.",
        "imageLoc": "",
        "answers": [
            "A. +1.11000zm",
            "B. 10001100zm",
            "C. \u20131.11000zm",
            "D. 00001100zm"
        ],
        "goodAnswer": "B. 10001100zm"
    },
    {
        "id": 1814,
        "question": "Polecenie za pomoc\u0105 kt\u00f3rego mo\u017cna uzyska\u0107 informacje o aktualnych po\u0142\u0105czeniach TCP oraz informacje o \u017ar\u00f3d\u0142owych i docelowych portach, to",
        "imageLoc": "",
        "answers": [
            "A. lookup",
            "B. ping",
            "C. ipconfig",
            "D. netstat"
        ],
        "goodAnswer": "D. netstat"
    },
    {
        "id": 1815,
        "question": "W systemie Windows przeprowadzenie analizy wp\u0142ywu uruchamianych program\u00f3w na wydajno\u015b\u0107 komputera jest mi\u0119dzy innymi mo\u017cliwe po u\u017cyciu polecenia",
        "imageLoc": "",
        "answers": [
            "A. dfrgui.exe",
            "B. iscsicpl.exe",
            "C. taskschd.msc",
            "D. perfmon.msc"
        ],
        "goodAnswer": "D. perfmon.msc"
    },
    {
        "id": 1816,
        "question": "Skr\u00f3t MAN oznacza sie\u0107",
        "imageLoc": "",
        "answers": [
            "A. bezprzewodow\u0105",
            "B. lokaln\u0105",
            "C. miejsk\u0105",
            "D. rozleg\u0142\u0105"
        ],
        "goodAnswer": "C. miejsk\u0105"
    },
    {
        "id": 1817,
        "question": "Wska\u017c polecenie systemu Windows Server s\u0142u\u017c\u0105ce do usuni\u0119cia jednostki organizacyjnej z katalogu.",
        "imageLoc": "",
        "answers": [
            "A. adprep",
            "B. redircmp",
            "C. dsadd",
            "D. dsrm"
        ],
        "goodAnswer": "D. dsrm"
    },
    {
        "id": 1818,
        "question": "Kt\u00f3ry typ fizycznej topologii sieci komputerowej przedstawia rysunek?",
        "imageLoc": require("../assets/img/1720.png"),
        "answers": [
            "A. Punkt-Punkt",
            "B. Pe\u0142nej siatki",
            "C. Cz\u0119\u015bciowej siatki",
            "D. Gwiazdy"
        ],
        "goodAnswer": "B. Pe\u0142nej siatki"
    },
    {
        "id": 1819,
        "question": "Przy wyborze zasilacza komputerowego najwi\u0119ksze znaczenie",
        "imageLoc": "",
        "answers": [
            "A. Maj\u0105 parametry zainstalowanego systemu operacyjnego",
            "B. Ma wsp\u00f3\u0142czynnik kszta\u0142tu obudowy",
            "C. Ma \u0142\u0105czna moc wszystkich podzespo\u0142\u00f3w komputerowych",
            "D. Ma typ procesora"
        ],
        "goodAnswer": "C. Ma \u0142\u0105czna moc wszystkich podzespo\u0142\u00f3w komputerowych"
    },
    {
        "id": 1820,
        "question": "Wska\u017c podzesp\u00f3\u0142 niekompatybilny z p\u0142yt\u0105 g\u0142\u00f3wn\u0105 o przedstawionych w tabeli parametrach",
        "imageLoc": require("../assets/img/1729.png"),
        "answers": [
            "A. Monitor: Dell, 34\", 1x DisplayPort, 1x miniDP, 2x USB 3.0 Upstream, 4x USB 3.0 Downstream",
            "B. Procesor: INTEL CORE i3-4350, 3.60 GHz, x2/4, 4 MB, 54W, HD 4600, BOX, s-1150",
            "C. Pami\u0119\u0107 RAM: Corsair Vengeance LPX, DDR4, 2x16GB, 3000MHz, CL15 Black",
            "D. Karta graficzna: Gigabyte GeForce GTX 1050 OC, 2GB, GDDR5, 128 bit, PCI-Express 3.0 x16"
        ],
        "goodAnswer": "B. Procesor: INTEL CORE i3-4350, 3.60 GHz, x2/4, 4 MB, 54W, HD 4600, BOX, s-1150"
    },
    {
        "id": 1821,
        "question": "Wska\u017c program systemu Linux, s\u0142u\u017c\u0105cy do kompresji danych",
        "imageLoc": "",
        "answers": [
            "A. gzip",
            "B. tar",
            "C. arj",
            "D. shar"
        ],
        "goodAnswer": "A. gzip"
    },
    {
        "id": 1822,
        "question": "Programem, kt\u00f3ry dostarcza najwi\u0119cej informacji diagnostycznych o procesorze CPU, jest",
        "imageLoc": "",
        "answers": [
            "A. HD Tune",
            "B. HWiNFO",
            "C. GPU-Z",
            "D. Memtest86+"
        ],
        "goodAnswer": "B. HWiNFO"
    },
    {
        "id": 1823,
        "question": "Na schemacie znajduj\u0105 si\u0119 symbole",
        "imageLoc": require("../assets/img/1745.png"),
        "answers": [
            "A. 8 prze\u0142\u0105cznik\u00f3w i 3 ruter\u00f3w.",
            "B. 3 prze\u0142\u0105cznik\u00f3w i 4 ruter\u00f3w.",
            "C. 4 prze\u0142\u0105cznik\u00f3w i 3 ruter\u00f3w.",
            "D. 4 prze\u0142\u0105cznik\u00f3w i 8 ruter\u00f3w."
        ],
        "goodAnswer": "C. 4 prze\u0142\u0105cznik\u00f3w i 3 ruter\u00f3w."
    },
    {
        "id": 1824,
        "question": "Wska\u017c adres sieci, do kt\u00f3rej nale\u017cy host o adresie 172.16.0.123/27",
        "imageLoc": "",
        "answers": [
            "A. 172.16.0.96",
            "B. 172.16.0.16",
            "C. 172.16.0.224",
            "D. 172.16.0.112"
        ],
        "goodAnswer": "A. 172.16.0.96"
    },
    {
        "id": 1825,
        "question": "GRUB, LILO, NTLDR to:",
        "imageLoc": "",
        "answers": [
            "A. programy rozruchowe",
            "B. firmware dla dysku sieciowego",
            "C. aplikacje do aktualizacji BIOS-u",
            "D. wersje g\u0142\u00f3wnego interfejsu sieciowego"
        ],
        "goodAnswer": "A. programy rozruchowe"
    },
    {
        "id": 1826,
        "question": "Przedstawiony wydruk w systemie rodziny Linux pojawi si\u0119 po wydaniu komendy",
        "imageLoc": require("../assets/img/31.png"),
        "answers": [
            "A. ls -la",
            "B. free",
            "C. pwd",
            "D. ps"
        ],
        "goodAnswer": "A. ls -la"
    },
    {
        "id": 1827,
        "question": "Integraln\u0105 cz\u0119\u015bci\u0105 systemu Windows 10 chroni\u0105c\u0105 jego u\u017cytkownik\u00f3w przed z\u0142o\u015bliwym oprogramowaniem jest program",
        "imageLoc": "",
        "answers": [
            "A. Microsoft Hyper-V",
            "B. Windows Defender",
            "C. Microsoft Security Essentials",
            "D. Windows PowerShell"
        ],
        "goodAnswer": "B. Windows Defender"
    },
    {
        "id": 1828,
        "question": "U\u017cytkownik, kt\u00f3ry chce drukowa\u0107 dokumenty jednocze\u015bnie w oryginale i trzech kopiach na papierze samokopiuj\u0105cym, powinien do tego celu zakupi\u0107 drukark\u0119",
        "imageLoc": "",
        "answers": [
            "A. ig\u0142ow\u0105",
            "B. laserow\u0105",
            "C. atramentow\u0105",
            "D. termotransferow\u0105"
        ],
        "goodAnswer": "A. ig\u0142ow\u0105"
    },
    {
        "id": 1829,
        "question": "Kt\u00f3ra z topologii fizycznych sieci komputerowej jest przedstawiona na rysunku?",
        "imageLoc": require("../assets/img/1508.png"),
        "answers": [
            "A. Siatki",
            "B. Podw\u00f3jnego pier\u015bcienia",
            "C. Magistrali",
            "D. Gwiazdy rozszerzonej"
        ],
        "goodAnswer": "B. Podw\u00f3jnego pier\u015bcienia"
    },
    {
        "id": 1830,
        "question": "Liczba FAFC zapisana w systemie heksadecymalnym odpowiada liczbie",
        "imageLoc": "",
        "answers": [
            "A. 64256(10)",
            "B. 1111101011011101 (2)",
            "C. 175376 (8)",
            "D. 1111101011111100 (2)"
        ],
        "goodAnswer": "D. 1111101011111100 (2)"
    },
    {
        "id": 1831,
        "question": "W systemie Linux do monitorowania w czasie rzeczywistym uruchomionych proces\u00f3w s\u0142u\u017cy polecenie:",
        "imageLoc": "",
        "answers": [
            "A. sed",
            "B. ps",
            "C. sysinfo",
            "D. proc"
        ],
        "goodAnswer": "B. ps"
    },
    {
        "id": 1832,
        "question": "Procesory AMD wyposa\u017cone w z\u0142\u0105cze AM2+ b\u0119d\u0105 poprawnie dzia\u0142a\u0142y na p\u0142ycie g\u0142\u00f3wnej wyposa\u017conej w podstawk\u0119 socket",
        "imageLoc": "",
        "answers": [
            "A. AM2",
            "B. FM2",
            "C. AM3+",
            "D. AM3"
        ],
        "goodAnswer": "A. AM2"
    },
    {
        "id": 1833,
        "question": "Z ilu bit\u00f3w sk\u0142ada si\u0119 adres fizyczny MAC karty sieciowej?",
        "imageLoc": "",
        "answers": [
            "A. 16",
            "B. 48",
            "C. 64",
            "D. 32"
        ],
        "goodAnswer": "B. 48"
    },
    {
        "id": 1834,
        "question": "Urz\u0105dzenie przedstawione na rysunku to",
        "imageLoc": require("../assets/img/1216.png"),
        "answers": [
            "A. Narz\u0119dzie uderzeniowe typu krone",
            "B. Tester diodowy przewodu UTP",
            "C. Tester d\u0142ugo\u015bci okablowania",
            "D. Zaciskarka wtyk\u00f3w RJ45"
        ],
        "goodAnswer": "B. Tester diodowy przewodu UTP"
    },
    {
        "id": 1835,
        "question": "Komputer lokalny ma adres 192.168.0.5. Po uruchomieniu strony internetowej z tego komputera, kt\u00f3ra identyfikuje adresy w sieci uzyskano informacj\u0119, \u017ce adresem komputera jest 195.182.130.24. Oznacza to, \u017ce",
        "imageLoc": "",
        "answers": [
            "A. serwer WWW widzi inny komputer w sieci",
            "B. adres zosta\u0142 przet\u0142umaczony przez translacj\u0119 NAT",
            "C. serwer DHCP zmieni\u0142 nasz adres w trakcie przesy\u0142ania \u017c\u0105dania",
            "D. inny komputer podszy\u0142 si\u0119 pod adres naszego komputera"
        ],
        "goodAnswer": "B. adres zosta\u0142 przet\u0142umaczony przez translacj\u0119 NAT"
    },
    {
        "id": 1836,
        "question": "Protok\u00f3\u0142 pocztowy, za pomoc\u0105 kt\u00f3rego mo\u017cemy odbiera\u0107 poczt\u0119 z serwera, to",
        "imageLoc": "",
        "answers": [
            "A. POP3",
            "B. FTP",
            "C. HTTP",
            "D. SMTP"
        ],
        "goodAnswer": "A. POP3"
    },
    {
        "id": 1837,
        "question": "Dana jest sie\u0107 o adresie 192.168.100.0/24. Ile podsieci mo\u017cna z niej wydzieli\u0107, stosuj\u0105c mask\u0119 255.255.255.224?",
        "imageLoc": "",
        "answers": [
            "A. 8 podsieci.",
            "B. 6 podsieci.",
            "C. 12 podsieci.",
            "D. 4 podsieci."
        ],
        "goodAnswer": "A. 8 podsieci."
    },
    {
        "id": 1838,
        "question": "Ile host\u00f3w mo\u017cna zaadresowa\u0107 w podsieci o adresie 192.168.10.0/25?",
        "imageLoc": "",
        "answers": [
            "A. 128",
            "B. 126",
            "C. 62",
            "D. 64"
        ],
        "goodAnswer": "B. 126"
    },
    {
        "id": 1839,
        "question": "W systemie Linux narz\u0119dziem, kt\u00f3re pokazuje tras\u0119 jak\u0105 pokonuj\u0105 pakiety od miejsca \u017ar\u00f3d\u0142a do miejsca przeznaczenia, procentowy udzia\u0142 strat oraz informacj\u0119 na temat op\u00f3\u017anie\u0144 pakiet\u00f3w, jest",
        "imageLoc": "",
        "answers": [
            "A. ping",
            "B. tracert",
            "C. mtr",
            "D. route"
        ],
        "goodAnswer": "C. mtr"
    },
    {
        "id": 1840,
        "question": "Elementem s\u0142u\u017c\u0105cym do utrwalania tonera na papierze podczas wydruku z drukarki laserowej jest",
        "imageLoc": "",
        "answers": [
            "A. b\u0119ben \u015bwiat\u0142oczu\u0142y",
            "B. elektroda \u0142aduj\u0105ca",
            "C. wa\u0142ek grzewczy",
            "D. listwa czyszcz\u0105ca"
        ],
        "goodAnswer": "C. wa\u0142ek grzewczy"
    },
    {
        "id": 1841,
        "question": "Serwerem DNS w systemie Linux jest",
        "imageLoc": "",
        "answers": [
            "A. BIND",
            "B. ProFTPD",
            "C. CUPS",
            "D. APACHE"
        ],
        "goodAnswer": "A. BIND"
    },
    {
        "id": 1842,
        "question": "Kt\u00f3ra licencja umo\u017cliwia bezp\u0142atne wykorzystywanie programu, pod warunkiem, \u017ce u\u017cytkownik zatroszczy si\u0119 o \u015brodowisko naturalne?",
        "imageLoc": "",
        "answers": [
            "A. OEM",
            "B. Adware",
            "C. Greenware",
            "D. Donationware"
        ],
        "goodAnswer": "C. Greenware"
    },
    {
        "id": 1843,
        "question": "Jaka jest kolejno\u015b\u0107 cz\u0119\u015bci adresu globalnego IPv6 typu unicast przedstawionego na rysunku?",
        "imageLoc": require("../assets/img/2050.png"),
        "answers": [
            "A. 1 - identyfikator interfejsu, 2 - globalny prefiks, 3 - identyfikator podsieci",
            "B. 1 - globalny prefiks, 2 - identyfikator interfejsu, 3 - identyfikator podsieci",
            "C. 1 - identyfikator podsieci, 2 - globalny prefiks, 3 - identyfikator interfejsu",
            "D. 1 - globalny prefiks, 2 - identyfikator podsieci, 3 - identyfikator interfejsu"
        ],
        "goodAnswer": "D. 1 - globalny prefiks, 2 - identyfikator podsieci, 3 - identyfikator interfejsu"
    },
    {
        "id": 1844,
        "question": "W systemie Linux polecenie chmod umo\u017cliwia",
        "imageLoc": "",
        "answers": [
            "A. zmian\u0119 w\u0142a\u015bciciela pliku",
            "B. napraw\u0119 systemu plik\u00f3w",
            "C. wy\u015bwietlenie informacji o ostatniej aktualizacji pliku",
            "D. ustawienie praw dost\u0119pu do pliku"
        ],
        "goodAnswer": "D. ustawienie praw dost\u0119pu do pliku"
    },
    {
        "id": 1845,
        "question": "Wymian\u0119 uszkodzonych kondensator\u00f3w karty graficznej umo\u017cliwi",
        "imageLoc": "",
        "answers": [
            "A. lutownica z cyn\u0105 i kalafoni\u0105",
            "B. \u017cywica epoksydowa",
            "C. klej cyjanoakrylowy",
            "D. wkr\u0119tak krzy\u017cowy i opaska zaciskowa"
        ],
        "goodAnswer": "A. lutownica z cyn\u0105 i kalafoni\u0105"
    },
    {
        "id": 1846,
        "question": "Kt\u00f3rym programem NIE mo\u017cna si\u0119 pos\u0142u\u017cy\u0107, aby odzyska\u0107 dane w systemie Windows na podstawie wcze\u015bniej utworzonej kopii?",
        "imageLoc": "",
        "answers": [
            "A. FileCleaner",
            "B. Norton Ghost",
            "C. Clonezilla",
            "D. Acronis True Image"
        ],
        "goodAnswer": "A. FileCleaner"
    },
    {
        "id": 1847,
        "question": "Protok\u00f3\u0142 ARP (Address Resolution Protocol) umo\u017cliwia mapowanie logicznych adres\u00f3w warstwy sieciowej na fizyczne adresy warstwy",
        "imageLoc": "",
        "answers": [
            "A. transportowej",
            "B. aplikacji",
            "C. fizycznej",
            "D. \u0142\u0105cza danych"
        ],
        "goodAnswer": "D. \u0142\u0105cza danych"
    },
    {
        "id": 1848,
        "question": "Kt\u00f3r\u0105 fizyczn\u0105 topologi\u0119 sieci przedstawia rysunek?",
        "imageLoc": require("../assets/img/1369.png"),
        "answers": [
            "A. Podw\u00f3jnego pier\u015bcienia",
            "B. Magistrali",
            "C. Gwiazdy",
            "D. Pe\u0142nej siatki"
        ],
        "goodAnswer": "C. Gwiazdy"
    },
    {
        "id": 1849,
        "question": "Do sprawdzenia przedstawionej konfiguracji interfejs\u00f3w sieciowych w systemie Linux u\u017cyto polecenia",
        "imageLoc": require("../assets/img/521.png"),
        "answers": [
            "A. ifconfig",
            "B. ip route",
            "C. ip addr down",
            "D. ping"
        ],
        "goodAnswer": "A. ifconfig"
    },
    {
        "id": 1850,
        "question": "W kt\u00f3rej warstwie modelu ISO/OSI s\u0105 stosowane adresy logiczne?",
        "imageLoc": "",
        "answers": [
            "A. Transportowej",
            "B. \u0141\u0105cza danych",
            "C. Sieciowej",
            "D. Fizycznej"
        ],
        "goodAnswer": "C. Sieciowej"
    },
    {
        "id": 1851,
        "question": "Firma potrzebuje drukarki s\u0142u\u017c\u0105cej do drukowania trwa\u0142ych kod\u00f3w kreskowych oraz etykiet na folii i powierzchniach z tworzyw sztucznych. Jak\u0105 drukark\u0119 musi zakupi\u0107?",
        "imageLoc": "",
        "answers": [
            "A. Termotransferow\u0105",
            "B. Termiczn\u0105",
            "C. Mozaikow\u0105",
            "D. Ig\u0142ow\u0105"
        ],
        "goodAnswer": "A. Termotransferow\u0105"
    },
    {
        "id": 1852,
        "question": "Kt\u00f3ry z profili u\u017cytkownika ulega zmianie i jest przechowywany na serwerze dla klienta pracuj\u0105cego w sieci Windows?",
        "imageLoc": "",
        "answers": [
            "A. Mobilny",
            "B. Obowi\u0105zkowy",
            "C. Tymczasowy",
            "D. Lokalny"
        ],
        "goodAnswer": "A. Mobilny"
    },
    {
        "id": 1853,
        "question": "Licencja oprogramowania umo\u017cliwiaj\u0105ca darmowe rozpowszechnianie aplikacji to",
        "imageLoc": "",
        "answers": [
            "A. OEM",
            "B. MOLP",
            "C. freeware",
            "D. shareware"
        ],
        "goodAnswer": "C. freeware"
    },
    {
        "id": 1854,
        "question": "Firma zajmuj\u0105ca si\u0119 sprz\u0105taniem musi drukowa\u0107 faktury tekstowe w czterech egzemplarzach jednocze\u015bnie, na papierze samokopiuj\u0105cym. Jak\u0105 drukark\u0119 powinna wybra\u0107?",
        "imageLoc": "",
        "answers": [
            "A. Atramentow\u0105",
            "B. Laserow\u0105",
            "C. Ig\u0142ow\u0105",
            "D. Termosublimacyjn\u0105"
        ],
        "goodAnswer": "C. Ig\u0142ow\u0105"
    },
    {
        "id": 1855,
        "question": "Procesor RISC to procesor",
        "imageLoc": "",
        "answers": [
            "A. z kompleksow\u0105 list\u0105 rozkaz\u00f3w",
            "B. z pe\u0142n\u0105 list\u0105 rozkaz\u00f3w",
            "C. ze zredukowan\u0105 list\u0105 rozkaz\u00f3w",
            "D. z g\u0142\u00f3wn\u0105 list\u0105 rozkaz\u00f3w"
        ],
        "goodAnswer": "C. ze zredukowan\u0105 list\u0105 rozkaz\u00f3w"
    },
    {
        "id": 1856,
        "question": "Dopuszczalny promie\u0144 zgi\u0119cia podczas instalacji kabla U/UTP kat.5E wynosi",
        "imageLoc": "",
        "answers": [
            "A. cztery \u015brednice kabla",
            "B. dwie \u015brednice kabla",
            "C. sze\u015b\u0107 \u015brednic kabla",
            "D. osiem \u015brednic kabla"
        ],
        "goodAnswer": "D. osiem \u015brednic kabla"
    },
    {
        "id": 1857,
        "question": "Udost\u0119pniono w sieci lokalnej jako udzia\u0142 specjalny folder o nazwie egzamin znajduj\u0105cy si\u0119 na komputerze o nazwie SERWER_2 w katalogu g\u0142\u00f3wnym dysku C:. Jak powinna wygl\u0105da\u0107 \u015bcie\u017cka dost\u0119pu do katalogu egzamin, w kt\u00f3rym przechowywany jest folder macierzysty dla konta u\u017cytkownika o okre\u015blonym loginie?",
        "imageLoc": "",
        "answers": [
            "A. SERWER_2egzamin$\\%USERNAME%",
            "B. SERWER_2egzamin$\\%$USERNAME%",
            "C. SERWER_2$egzamin$\\%USERNAME%",
            "D. SERWER_2$egzamin\\%USERNAME%"
        ],
        "goodAnswer": "A. SERWER_2egzamin$\\%USERNAME%"
    },
    {
        "id": 1858,
        "question": "Termin SLI dotyczy",
        "imageLoc": "",
        "answers": [
            "A. modem\u00f3w",
            "B. kart sieciowych",
            "C. kart graficznych",
            "D. dysk\u00f3w twardych"
        ],
        "goodAnswer": "C. kart graficznych"
    },
    {
        "id": 1859,
        "question": "Dla zmiany zeskanowanego obrazu na tekst nale\u017cy zastosowa\u0107 oprogramowanie wykorzystuj\u0105ce techniki",
        "imageLoc": "",
        "answers": [
            "A. OCR",
            "B. DTP",
            "C. DPI",
            "D. OMR"
        ],
        "goodAnswer": "A. OCR"
    },
    {
        "id": 1860,
        "question": "Dzia\u0142aj\u0105cy w systemie Linux program iftop s\u0142u\u017cy do",
        "imageLoc": "",
        "answers": [
            "A. wy\u015bwietlania chwilowej pr\u0119dko\u015bci zapisu do pami\u0119ci operacyjnej.",
            "B. wy\u0142\u0105czania procesu zu\u017cywaj\u0105cego najwi\u0119cej mocy obliczeniowej procesora.",
            "C. konfigurowania ustawie\u0144 interfejsu graficznego.",
            "D. monitorowania po\u0142\u0105cze\u0144 sieciowych."
        ],
        "goodAnswer": "D. monitorowania po\u0142\u0105cze\u0144 sieciowych."
    },
    {
        "id": 1861,
        "question": "Z\u0142\u0105cze szeregowe na p\u0142ycie g\u0142\u00f3wnej, s\u0142u\u017c\u0105ce do pod\u0142\u0105czania kart rozszerze\u0144 o r\u00f3\u017cnej, w zale\u017cno\u015bci od wariantu, liczbie pin\u00f3w nosi nazw\u0119",
        "imageLoc": "",
        "answers": [
            "A. PCI Express",
            "B. AGP",
            "C. ISA",
            "D. PCI"
        ],
        "goodAnswer": "A. PCI Express"
    },
    {
        "id": 1862,
        "question": "Przy pomocy ta\u015bmy 60-pinowej przedstawionej na rysunku pod\u0142\u0105cza si\u0119 do p\u0142yty g\u0142\u00f3wnej komputera",
        "imageLoc": require("../assets/img/1657.png"),
        "answers": [
            "A. tylko dyski EIDE",
            "B. nap\u0119dy ATAPI",
            "C. tylko dyski SCSI",
            "D. wszystkie powy\u017csze urz\u0105dzenia"
        ],
        "goodAnswer": "C. tylko dyski SCSI"
    },
    {
        "id": 1863,
        "question": "Do zdalnego zarz\u0105dzania stacjami roboczymi nie jest stosowany",
        "imageLoc": "",
        "answers": [
            "A. program Ultra VNC",
            "B. program TeamViewer",
            "C. program Wireshark",
            "D. pulpit zdalny"
        ],
        "goodAnswer": "C. program Wireshark"
    },
    {
        "id": 1864,
        "question": "Zamieszczone parametry charakteryzuj\u0105 pami\u0119\u0107",
        "imageLoc": require("../assets/img/510.png"),
        "answers": [
            "A. SWAP",
            "B. SD",
            "C. RAM",
            "D. flash"
        ],
        "goodAnswer": "C. RAM"
    },
    {
        "id": 1865,
        "question": "Jak\u0105 rol\u0119 serwera z rodziny Windows Server nale\u017cy doda\u0107, aby serwer realizowa\u0142 us\u0142ugi rutingu?",
        "imageLoc": "",
        "answers": [
            "A. Us\u0142ugi zarz\u0105dzania dost\u0119pu w us\u0142udze Active Directory",
            "B. Us\u0142ugi domenowe w us\u0142udze Active Directory",
            "C. Us\u0142ugi zasad i dost\u0119pu sieciowego",
            "D. Serwer sieci Web (IIS)"
        ],
        "goodAnswer": "C. Us\u0142ugi zasad i dost\u0119pu sieciowego"
    },
    {
        "id": 1866,
        "question": "Komputer ma adres IP 192.168.0.1, maska podsieci to 255.255.255.0. Kt\u00f3ry adres jest adresem rozg\u0142oszeniowym podsieci, do kt\u00f3rej nale\u017cy ten komputer?",
        "imageLoc": "",
        "answers": [
            "A. 192.168.0.255",
            "B. 192.168.0.31",
            "C. 192.168.0.63",
            "D. 192.168.0.127"
        ],
        "goodAnswer": "A. 192.168.0.255"
    },
    {
        "id": 1867,
        "question": "Na rysunku przedstawiono konfiguracj\u0119 urz\u0105dzenia. Do kt\u00f3rych port\u00f3w nale\u017cy pod\u0142\u0105czy\u0107 serwer o adresie IP 192.168.20.254/24 oraz stacj\u0119 robocz\u0105 o adresie IP 192.168.20.10/24, aby zapewni\u0107 komunikacj\u0119 tych urz\u0105dze\u0144 w sieci?",
        "imageLoc": require("../assets/img/1555.png"),
        "answers": [
            "A. Do port\u00f3w 1 i 2",
            "B. Do port\u00f3w 2 i 3",
            "C. Do port\u00f3w 1 i 3",
            "D. Do port\u00f3w 3 i 4"
        ],
        "goodAnswer": "C. Do port\u00f3w 1 i 3"
    },
    {
        "id": 1868,
        "question": "Do jednoczesnej zmiany t\u0142a pulpitu, kolor\u00f3w okien, d\u017awi\u0119k\u00f3w oraz wygaszacza ekranu na komputerze z zainstalowanym systemem Windows nale\u017cy wykorzysta\u0107",
        "imageLoc": "",
        "answers": [
            "A. centrum u\u0142atwie\u0144 dost\u0119pu.",
            "B. plan zasilania.",
            "C. schematy d\u017awi\u0119kowe.",
            "D. kompozycje."
        ],
        "goodAnswer": "D. kompozycje."
    },
    {
        "id": 1869,
        "question": "Aby uzyska\u0107 przepustowo\u015b\u0107 na poziomie 4 GB/s w ka\u017cd\u0105 stron\u0119, nale\u017cy zamontowa\u0107 w zestawie komputerowym kart\u0119 graficzn\u0105 wykorzystuj\u0105c\u0105 interfejs",
        "imageLoc": "",
        "answers": [
            "A. PCI-Express x 4 wersja 2.0",
            "B. PCI-Express x 1 wersja 3.0",
            "C. PCI-Express x 16 wersja 1.0",
            "D. PCI-Express x 8 wersja 1.0"
        ],
        "goodAnswer": "C. PCI-Express x 16 wersja 1.0"
    },
    {
        "id": 1870,
        "question": "System operacyjny zosta\u0142 zaatakowany przez oprogramowanie szpieguj\u0105ce. Po usuni\u0119ciu usterek, aby unikn\u0105\u0107 kolejnego ataku, zaleca si\u0119",
        "imageLoc": "",
        "answers": [
            "A. wykonanie defragmentacji dysku.",
            "B. utworzenie dw\u00f3ch partycji na dysku twardym.",
            "C. ustawienie czyszczenia pami\u0119ci podr\u0119cznej.",
            "D. zainstalowanie oprogramowania antyspyware."
        ],
        "goodAnswer": "D. zainstalowanie oprogramowania antyspyware."
    },
    {
        "id": 1871,
        "question": "Kt\u00f3ry z adres\u00f3w jest adresem hosta nale\u017c\u0105cego do sieci 10.128.0.0/10?",
        "imageLoc": "",
        "answers": [
            "A. 10.160.255.255",
            "B. 10.191.255.255",
            "C. 10.127.255.255",
            "D. 10.192.255.255"
        ],
        "goodAnswer": "A. 10.160.255.255"
    },
    {
        "id": 1872,
        "question": "Kt\u00f3ra us\u0142uga pozwala rejestrowa\u0107 i rozpoznawa\u0107 nazwy NetBIOS jako u\u017cywane w sieci adresy IP?",
        "imageLoc": "",
        "answers": [
            "A. DHCP",
            "B. WINS",
            "C. WAS",
            "D. HTTPS"
        ],
        "goodAnswer": "B. WINS"
    },
    {
        "id": 1873,
        "question": "Kt\u00f3ra z topologii fizycznych sieci komputerowej jest przedstawiona na rysunku?",
        "imageLoc": require("../assets/img/428.png"),
        "answers": [
            "A. Gwiazdy rozszerzonej",
            "B. Podw\u00f3jnego pier\u015bcienia",
            "C. Magistrali",
            "D. Siatki"
        ],
        "goodAnswer": "B. Podw\u00f3jnego pier\u015bcienia"
    },
    {
        "id": 1874,
        "question": "W systemie Linux polecenie touch s\u0142u\u017cy do",
        "imageLoc": "",
        "answers": [
            "A. przeniesienia lub zmiany nazwy pliku",
            "B. utworzenia pliku lub zmiany daty modyfikacji lub daty ostatniego dost\u0119pu",
            "C. obliczenia liczby wierszy, s\u0142\u00f3w i znak\u00f3w w pliku",
            "D. wyszukania podanego wzorca w tek\u015bcie pliku"
        ],
        "goodAnswer": "B. utworzenia pliku lub zmiany daty modyfikacji lub daty ostatniego dost\u0119pu"
    },
    {
        "id": 1875,
        "question": "Przycisk umieszczony na obudowie rutera, kt\u00f3rego opis znajduje si\u0119 w ramce, jest stosowany w celu",
        "imageLoc": require("../assets/img/1264.png"),
        "answers": [
            "A. przywr\u00f3cenia ustawie\u0144 fabrycznych rutera",
            "B. w\u0142\u0105czenia lub wy\u0142\u0105czenia rutera",
            "C. w\u0142\u0105czenia lub wy\u0142\u0105czenia sieci Wi-Fi",
            "D. zrestartowania rutera"
        ],
        "goodAnswer": "A. przywr\u00f3cenia ustawie\u0144 fabrycznych rutera"
    },
    {
        "id": 1876,
        "question": "Aby zapobiec utracie danych w programie do prowadzenia ewidencji uczni\u00f3w, nale\u017cy po zako\u0144czeniu pracy ka\u017cdego dnia wykona\u0107",
        "imageLoc": "",
        "answers": [
            "A. kopi\u0119 zapasow\u0105 danych programu",
            "B. aktualizacj\u0119 systemu operacyjnego",
            "C. aktualizacj\u0119 systemu",
            "D. bezpieczne zamkni\u0119cie systemu operacyjnego"
        ],
        "goodAnswer": "A. kopi\u0119 zapasow\u0105 danych programu"
    },
    {
        "id": 1877,
        "question": "Firma planuje budow\u0119 lokalnej sieci komputerowej, sk\u0142adaj\u0105cej si\u0119 z serwera, drukarki oraz 10 stacji roboczych bez kart bezprzewodowych. Dost\u0119p do Internetu zapewnia ruter z wbudowanym modemem ADSL i czterema portami LAN. Kt\u00f3re z wymienionych urz\u0105dze\u0144 sieciowych jest niezb\u0119dne, aby sie\u0107 poprawnie funkcjonowa\u0142a i mia\u0142a dost\u0119p do Internetu?",
        "imageLoc": "",
        "answers": [
            "A. Prze\u0142\u0105cznik 8 portowy",
            "B. Access Point",
            "C. Prze\u0142\u0105cznik 16 portowy",
            "D. Wzmacniacz sygna\u0142u bezprzewodowego"
        ],
        "goodAnswer": "C. Prze\u0142\u0105cznik 16 portowy"
    },
    {
        "id": 1878,
        "question": "W serwerach warto stosowa\u0107 dyski obs\u0142uguj\u0105ce tryb Hot plugging, poniewa\u017c",
        "imageLoc": "",
        "answers": [
            "A. zwi\u0119ksza si\u0119 pojemno\u015b\u0107 dysku poprzez automatyczn\u0105 kompresj\u0119 danych",
            "B. czas odczytu wzrasta trzykrotnie w por\u00f3wnaniu z trybem Cable select",
            "C. jest mo\u017cliwe pod\u0142\u0105czenie oraz od\u0142\u0105czenie dysku przy w\u0142\u0105czonym zasilaniu serwera",
            "D. pr\u0119dko\u015b\u0107 zapisu wzrasta do 250 MB/s"
        ],
        "goodAnswer": "C. jest mo\u017cliwe pod\u0142\u0105czenie oraz od\u0142\u0105czenie dysku przy w\u0142\u0105czonym zasilaniu serwera"
    },
    {
        "id": 1879,
        "question": "Emisja sygna\u0142\u00f3w d\u017awi\u0119kowych: jednego d\u0142ugiego i dw\u00f3ch kr\u00f3tkich przez BIOS firmy AMI oznacza",
        "imageLoc": "",
        "answers": [
            "A. uszkodzenie zegara systemowego",
            "B. b\u0142\u0105d karty graficznej",
            "C. b\u0142\u0105d parzysto\u015bci pami\u0119ci",
            "D. uszkodzenie pami\u0119ci"
        ],
        "goodAnswer": "B. b\u0142\u0105d karty graficznej"
    },
    {
        "id": 1880,
        "question": "Ile maksymalnie partycji podstawowych mo\u017cemy utworzy\u0107 na dysku twardym z MBR?",
        "imageLoc": "",
        "answers": [
            "A. 8",
            "B. 26",
            "C. 4",
            "D. 24"
        ],
        "goodAnswer": "C. 4"
    },
    {
        "id": 1881,
        "question": "Przedstawione polecenia, uruchomione w interfejsie CLI rutera firmy CISCO, spowoduj\u0105",
        "imageLoc": require("../assets/img/1777.png"),
        "answers": [
            "A. okre\u015blenie puli adres\u00f3w wewn\u0119trznych 10.0.0.1 \u00f7 255.255.255.0",
            "B. ustawienie interfejsu wewn\u0119trznego o adresie 10.0.0.1/24 dla technologii NAT",
            "C. dopuszczenie ruchu pochodz\u0105cego z sieci o adresie 10.0.0.1",
            "D. ustawienie interfejsu zewn\u0119trznego o adresie 10.0.0.1/24 dla technologii NAT"
        ],
        "goodAnswer": "B. ustawienie interfejsu wewn\u0119trznego o adresie 10.0.0.1/24 dla technologii NAT"
    },
    {
        "id": 1882,
        "question": "Fizyczna topologia sieci komputerowej, kt\u00f3r\u0105 przedstawiono na rysunku, to topologia",
        "imageLoc": require("../assets/img/790.png"),
        "answers": [
            "A. gwiazdy rozszerzonej",
            "B. hierarchiczna",
            "C. magistrali",
            "D. gwiazdy"
        ],
        "goodAnswer": "B. hierarchiczna"
    },
    {
        "id": 1883,
        "question": "Schemat przedstawia zasad\u0119 dzia\u0142ania sieci VPN o nazwie",
        "imageLoc": require("../assets/img/447.png"),
        "answers": [
            "A. Gateway",
            "B. Site - to - Site",
            "C. L2TP",
            "D. Client - to - Site"
        ],
        "goodAnswer": "B. Site - to - Site"
    },
    {
        "id": 1884,
        "question": "Numer IP zapisuje si\u0119 w postaci czterech, oddzielonych od siebie kropkami",
        "imageLoc": "",
        "answers": [
            "A. dekad",
            "B. oktet\u00f3w",
            "C. bit\u00f3w",
            "D. hel\u00f3w"
        ],
        "goodAnswer": "B. oktet\u00f3w"
    },
    {
        "id": 1885,
        "question": "Przydzia\u0142y dyskowe w systemach rodziny Windows",
        "imageLoc": "",
        "answers": [
            "A. zapewniaj\u0105 podstawow\u0105 funkcje diagnostyczne, defragmentacj\u0119 i checkdisk",
            "B. pozwalaj\u0105 na zdefiniowanie maksymalnej przestrzeni dyskowej dla kont u\u017cytkownik\u00f3w",
            "C. przydzielaj\u0105 etykiet\u0119 (np. C) dla danej partycji",
            "D. przydzielaj\u0105 partycje na dyskach"
        ],
        "goodAnswer": "B. pozwalaj\u0105 na zdefiniowanie maksymalnej przestrzeni dyskowej dla kont u\u017cytkownik\u00f3w"
    },
    {
        "id": 1886,
        "question": "Standard transmisji Gigabit Ethernet opisuje norma",
        "imageLoc": "",
        "answers": [
            "A. IEEE 802.3i",
            "B. IEEE 802.3u",
            "C. IEEE 802.3ab",
            "D. IEEE 802.3x"
        ],
        "goodAnswer": "C. IEEE 802.3ab"
    },
    {
        "id": 1887,
        "question": "Dla dysku twardego, warto\u015b\u0107 wsp\u00f3\u0142czynnika MTBF (Mean Time Between Failure) podawana jest w",
        "imageLoc": "",
        "answers": [
            "A. godzinach",
            "B. dniach",
            "C. minutach",
            "D. latach"
        ],
        "goodAnswer": "A. godzinach"
    },
    {
        "id": 1888,
        "question": "U\u017cytkownicy z sieci wewn\u0119trznej komunikuj\u0105 si\u0119 ze sob\u0105, ale nie mog\u0105 si\u0119 skomunikowa\u0107 z serwerem WWW. Wynik polecenia ping z komputer\u00f3w bramy jest pozytywny. Kt\u00f3ry element sieci NIE MO\u017bE by\u0107 przyczyn\u0105 problemu?",
        "imageLoc": require("../assets/img/1366.png"),
        "answers": [
            "A. Router",
            "B. Karta sieciowa serwera",
            "C. Kabel mi\u0119dzy routerem a serwerem WWW",
            "D. Prze\u0142\u0105cznik"
        ],
        "goodAnswer": "D. Prze\u0142\u0105cznik"
    },
    {
        "id": 1889,
        "question": "Jakie oprogramowanie, zapobiegaj\u0105ce w\u0142amaniu do sieci, nale\u017cy zainstalowa\u0107 na serwerze udost\u0119pniaj\u0105cym po\u0142\u0105czenie z internetem?",
        "imageLoc": "",
        "answers": [
            "A. DNS",
            "B. Active Directory",
            "C. DHCP",
            "D. FireWall"
        ],
        "goodAnswer": "D. FireWall"
    },
    {
        "id": 1890,
        "question": "Kt\u00f3ry protok\u00f3\u0142 wykorzystywany jest przez polecenie ping?",
        "imageLoc": "",
        "answers": [
            "A. LDAP",
            "B. FTP",
            "C. RDP",
            "D. ICMP"
        ],
        "goodAnswer": "D. ICMP"
    },
    {
        "id": 1891,
        "question": "U\u017cytkownik systemu Windows za pomoc\u0105 programu Cipher mo\u017ce",
        "imageLoc": "",
        "answers": [
            "A. wykona\u0107 przyrostow\u0105 kopi\u0119 zapasow\u0105 plik\u00f3w systemowych",
            "B. przeskanowa\u0107 system w poszukiwania malware",
            "C. usun\u0105\u0107 konto u\u017cytkownika wraz z jego profilem oraz dokumentami",
            "D. chroni\u0107 dane przez szyfrowanie plik\u00f3w"
        ],
        "goodAnswer": "D. chroni\u0107 dane przez szyfrowanie plik\u00f3w"
    },
    {
        "id": 1892,
        "question": "Kabel typu skr\u0119tka, posiadaj\u0105cy ka\u017cd\u0105 par\u0119 przewod\u00f3w w osobnym ekranie z folii, przy czym wszystkie przewody znajduj\u0105 si\u0119 w ekranie z folii, jest oznaczony symbolem",
        "imageLoc": "",
        "answers": [
            "A. S/FTP",
            "B. F/FTP",
            "C. F/UTP",
            "D. S/UTP"
        ],
        "goodAnswer": "B. F/FTP"
    },
    {
        "id": 1893,
        "question": "Odpowiednikiem macierzy RAID 1 w systemie Windows jest wolumin",
        "imageLoc": "",
        "answers": [
            "A. \u0142\u0105czony",
            "B. prosty",
            "C. roz\u0142o\u017cony",
            "D. dublowany"
        ],
        "goodAnswer": "D. dublowany"
    },
    {
        "id": 1894,
        "question": "Na kt\u00f3rym domy\u015blnym porcie odbywa si\u0119 komunikacja protoko\u0142u ftp?",
        "imageLoc": "",
        "answers": [
            "A. 80",
            "B. 23",
            "C. 53",
            "D. 21"
        ],
        "goodAnswer": "D. 21"
    },
    {
        "id": 1895,
        "question": "Widoczny na schemacie symbol okablowania oznacza kabel",
        "imageLoc": require("../assets/img/1610.png"),
        "answers": [
            "A. \u015bwiat\u0142owodowy.",
            "B. ethernetowy krosowany.",
            "C. ethernetowy prosty.",
            "D. szeregowy."
        ],
        "goodAnswer": "B. ethernetowy krosowany."
    },
    {
        "id": 1896,
        "question": "Kabel typu skr\u0119tka, w kt\u00f3rej pojedyncza para \u017cy\u0142 jest foliowana oraz ca\u0142o\u015b\u0107 kabla jest w ekranie z folii i siatki, oznacza si\u0119 symbolem",
        "imageLoc": "",
        "answers": [
            "A. SF/UTP",
            "B. SF/FTP",
            "C. U/FTP",
            "D. U/UTP"
        ],
        "goodAnswer": "B. SF/FTP"
    },
    {
        "id": 1897,
        "question": "Na podstawie zamieszczonej w tabeli informacji dotycz\u0105cej dysku twardego okre\u015bl, kt\u00f3ry wniosek jest prawdziwy",
        "imageLoc": require("../assets/img/203.png"),
        "answers": [
            "A. Defragmentacja jest zb\u0119dna, fragmentacja plik\u00f3w wynosi 0%",
            "B. Nale\u017cy zdefragmentowa\u0107 dysk, fragmentacja wolnego miejsca wynosi 19%",
            "C. Dysk wymaga defragmentacji, fragmentacja ca\u0142kowita wynosi 19%",
            "D. Defragmentacja nie jest konieczna, fragmentacja ca\u0142kowita wynosi 9%"
        ],
        "goodAnswer": "D. Defragmentacja nie jest konieczna, fragmentacja ca\u0142kowita wynosi 9%"
    },
    {
        "id": 1898,
        "question": "Kt\u00f3re kana\u0142y najlepiej wybra\u0107 dla trzech sieci WLAN 2,4 GHz, aby wyeliminowa\u0107 ich wzajemne zak\u0142\u00f3cenia?",
        "imageLoc": "",
        "answers": [
            "A. 1, 3, 12",
            "B. 2, 5, 7",
            "C. 3, 6, 12",
            "D. 1, 6, 11"
        ],
        "goodAnswer": "D. 1, 6, 11"
    },
    {
        "id": 1899,
        "question": "Kt\u00f3ry adres IPv4 jest stosowany w celu sprawdzenia stosu protoko\u0142\u00f3w TCP/IP wewn\u0105trz jednego hosta?",
        "imageLoc": "",
        "answers": [
            "A. 127.0.0.1",
            "B. 224.0.0.9",
            "C. 1.1.1.1",
            "D. 128.0.0.1"
        ],
        "goodAnswer": "A. 127.0.0.1"
    },
    {
        "id": 1900,
        "question": "Jakie polecenie umo\u017cliwia mapowanie zasob\u00f3w sieciowych w Windows Serwer?",
        "imageLoc": "",
        "answers": [
            "A. net map",
            "B. net use",
            "C. net add",
            "D. network"
        ],
        "goodAnswer": "B. net use"
    },
    {
        "id": 1901,
        "question": "Przedstawiony rysunek prezentuje z\u0142\u0105cze",
        "imageLoc": require("../assets/img/1713.png"),
        "answers": [
            "A. DVI-A",
            "B. DVI-D",
            "C. D-SUB",
            "D. HDMI"
        ],
        "goodAnswer": "A. DVI-A"
    },
    {
        "id": 1902,
        "question": "Kt\u00f3ra czynno\u015b\u0107 NIE s\u0142u\u017cy do personalizacji systemu operacyjnego Windows?",
        "imageLoc": "",
        "answers": [
            "A. Ustawienie opcji wy\u015bwietlania pask\u00f3w menu i pask\u00f3w narz\u0119dziowych",
            "B. Ustawienie domy\u015blnej przegl\u0105darki internetowej",
            "C. Ustawienie koloru lub kilku przenikaj\u0105cych si\u0119 kolor\u00f3w jako t\u0142a pulpitu",
            "D. Ustawienie wielko\u015bci partycji wymiany"
        ],
        "goodAnswer": "D. Ustawienie wielko\u015bci partycji wymiany"
    },
    {
        "id": 1903,
        "question": "Kt\u00f3ry z wymienionych program\u00f3w umo\u017cliwi sporz\u0105dzenie rysunku technicznego przedstawiaj\u0105cego plan instalacji logicznej sieci lokalnej budynku?",
        "imageLoc": "",
        "answers": [
            "A. WireShark",
            "B. AutoCad",
            "C. Packet Tracer",
            "D. CommView"
        ],
        "goodAnswer": "B. AutoCad"
    },
    {
        "id": 1904,
        "question": "Kt\u00f3re polecenie w systemie operacyjnym Linux umo\u017cliwia przypisanie istniej\u0105cego konta u\u017cytkownika nowak do grupy technikum?",
        "imageLoc": "",
        "answers": [
            "A. usergroup -g technikum nowak",
            "B. groups -g technikum nowak",
            "C. useradd -g technikum nowak",
            "D. usermod -g technikum nowak"
        ],
        "goodAnswer": "D. usermod -g technikum nowak"
    },
    {
        "id": 1905,
        "question": "Przedstawione na rysunku urz\u0105dzenie",
        "imageLoc": require("../assets/img/1817.png"),
        "answers": [
            "A. umo\u017cliwia zamian\u0119 sygna\u0142u pochodz\u0105cego z okablowania miedzianego na okablowanie \u015bwiat\u0142owodowe",
            "B. odpowiada za wytworzenie na wyj\u015bciu sygna\u0142u analogowego, b\u0119d\u0105cego wzmocnionym sygna\u0142em wej\u015bciowym, kosztem zu\u017cycia energii pobieranej ze \u017ar\u00f3d\u0142a pr\u0105du",
            "C. s\u0142u\u017cy do przechwytywania i nagrywania pakiet\u00f3w danych w sieciach komputerowych",
            "D. odpowiada za przekazywanie ramki mi\u0119dzy segmentami sieci z doborem portu, na kt\u00f3ry jest przekazywana"
        ],
        "goodAnswer": "A. umo\u017cliwia zamian\u0119 sygna\u0142u pochodz\u0105cego z okablowania miedzianego na okablowanie \u015bwiat\u0142owodowe"
    },
    {
        "id": 1906,
        "question": "Liczba 10011001100 zapisana w postaci heksadecymalnej ma posta\u0107",
        "imageLoc": "",
        "answers": [
            "A. 4CC",
            "B. 998",
            "C. 2E4",
            "D. EF4"
        ],
        "goodAnswer": "A. 4CC"
    },
    {
        "id": 1907,
        "question": "Rysunek przedstawia fizyczn\u0105 topologi\u0119",
        "imageLoc": require("../assets/img/377.png"),
        "answers": [
            "A. Szyny",
            "B. Gwiazdy",
            "C. Magistrali",
            "D. Drzewa"
        ],
        "goodAnswer": "B. Gwiazdy"
    },
    {
        "id": 1908,
        "question": "Wykonanie polecenia dxdiag w systemie Windows umo\u017cliwi",
        "imageLoc": "",
        "answers": [
            "A. uruchomienie maszyny wirtualnej z zainstalowanym systemem Windows 10.",
            "B. uruchomienie narz\u0119dzia diagnostycznego DirectX.",
            "C. wykonanie konfiguracji klawiatury, aby spe\u0142nia\u0142a wymagania j\u0119zyka polskiego.",
            "D. wykonanie kompresji wskazanych na dysku twardym danych."
        ],
        "goodAnswer": "B. uruchomienie narz\u0119dzia diagnostycznego DirectX."
    },
    {
        "id": 1909,
        "question": "Jaka jest kolejno\u015b\u0107 cz\u0119\u015bci adresu globalnego IPv6 typu unicast przedstawionego na rysunku?",
        "imageLoc": require("../assets/img/1570.png"),
        "answers": [
            "A. 1 - globalny prefiks, 2 - identyfikator podsieci, 3 - identyfikator interfejsu",
            "B. 1 - identyfikator podsieci, 2 - globalny prefiks, 3 - identyfikator interfejsu",
            "C. 1 - globalny prefiks, 2 - identyfikator interfejsu, 3 - identyfikator podsieci",
            "D. 1 - identyfikator interfejsu, 2 - globalny prefiks, 3 - identyfikator podsieci"
        ],
        "goodAnswer": "A. 1 - globalny prefiks, 2 - identyfikator podsieci, 3 - identyfikator interfejsu"
    },
    {
        "id": 1910,
        "question": "Kt\u00f3ra czynno\u015b\u0107 NIE s\u0142u\u017cy do personalizacji systemu operacyjnego Windows?",
        "imageLoc": "",
        "answers": [
            "A. Ustawienie domy\u015blnej przegl\u0105darki internetowej",
            "B. Ustawienie koloru lub kilku przenikaj\u0105cych si\u0119 kolor\u00f3w jako t\u0142a pulpitu",
            "C. Ustawienie opcji wy\u015bwietlania pask\u00f3w menu i pask\u00f3w narz\u0119dziowych",
            "D. Ustawienie wielko\u015bci partycji wymiany"
        ],
        "goodAnswer": "D. Ustawienie wielko\u015bci partycji wymiany"
    },
    {
        "id": 1911,
        "question": "Ile podw\u00f3jnych gniazd RJ45 powinno by\u0107 zamontowanych w pomieszczeniu o wymiarach 8 x 5 m, aby by\u0142y spe\u0142nione zalecenia normy PN-EN 50173?",
        "imageLoc": "",
        "answers": [
            "A. 10 gniazd",
            "B. 5 gniazd",
            "C. 8 gniazd",
            "D. 4 gniazda"
        ],
        "goodAnswer": "D. 4 gniazda"
    },
    {
        "id": 1912,
        "question": "Przy uruchamianiu komputera pojawia si\u0119 komunikat \"CMOS checksum error press F1 to continue press DEL to setup\". Wci\u015bni\u0119cie klawisza DEL spowoduje",
        "imageLoc": "",
        "answers": [
            "A. skanowanie zawarto\u015bci pami\u0119ci CMOS",
            "B. wej\u015bcie do BIOS-u komputera",
            "C. usuni\u0119cie pliku setup",
            "D. przej\u015bcie do konfiguracji systemu Windows"
        ],
        "goodAnswer": "B. wej\u015bcie do BIOS-u komputera"
    },
    {
        "id": 1913,
        "question": "Na kt\u00f3rym domy\u015blnym porcie dzia\u0142a serwer WWW stosuj\u0105cy domy\u015blny protok\u00f3\u0142 HTTPS w standardowej konfiguracji?",
        "imageLoc": "",
        "answers": [
            "A. 110",
            "B. 80",
            "C. 20",
            "D. 443"
        ],
        "goodAnswer": "D. 443"
    },
    {
        "id": 1914,
        "question": "Transmisja danych typu p\u00f3\u0142duplex jest transmisj\u0105",
        "imageLoc": "",
        "answers": [
            "A. jednokierunkow\u0105 z trybem bezpo\u0142\u0105czeniowym",
            "B. dwukierunkow\u0105 naprzemienn\u0105",
            "C. jednokierunkow\u0105 z kontrol\u0105 parzysto\u015bci",
            "D. dwukierunkow\u0105 jednoczesn\u0105"
        ],
        "goodAnswer": "B. dwukierunkow\u0105 naprzemienn\u0105"
    },
    {
        "id": 1915,
        "question": "Kt\u00f3ry z adres\u00f3w IP jest adresem hosta pracuj\u0105cego w sieci o adresie 192.168.160.224/28?",
        "imageLoc": "",
        "answers": [
            "A. 192.168.160.225",
            "B. 192.168.160.192",
            "C. 192.168.160.239",
            "D. 192.168.160.240"
        ],
        "goodAnswer": "A. 192.168.160.225"
    },
    {
        "id": 1916,
        "question": "Na zdj\u0119ciu przedstawiono p\u0142yt\u0119 g\u0142\u00f3wn\u0105 komputera. Strza\u0142k\u0105 oznaczono",
        "imageLoc": require("../assets/img/26.png"),
        "answers": [
            "A. kontroler mostka po\u0142udniowego",
            "B. procesor z umocowanym radiatorem",
            "C. chip wbudowanej karty graficznej",
            "D. kontroler mostka p\u00f3\u0142nocnego z umocowanym radiatorem"
        ],
        "goodAnswer": "D. kontroler mostka p\u00f3\u0142nocnego z umocowanym radiatorem"
    },
    {
        "id": 1917,
        "question": "W systemie Windows 7 narz\u0119dzie trybu polece\u0144 Cipher.exe s\u0142u\u017cy do",
        "imageLoc": "",
        "answers": [
            "A. prze\u0142\u0105czania monitora w tryb oczekiwania",
            "B. zarz\u0105dzania rozruchem systemu",
            "C. szyfrowania i odszyfrowywania plik\u00f3w i katalog\u00f3w",
            "D. podgl\u0105du plik\u00f3w tekstowych"
        ],
        "goodAnswer": "C. szyfrowania i odszyfrowywania plik\u00f3w i katalog\u00f3w"
    },
    {
        "id": 1918,
        "question": "Widoczne na schemacie procesora rejestry pe\u0142ni\u0105 funkcj\u0119 przechowywania adresu do",
        "imageLoc": require("../assets/img/1728.png"),
        "answers": [
            "A. wykonywania dzia\u0142a\u0144 arytmetycznych",
            "B. nast\u0119pnej instrukcji programu",
            "C. sterowania wykonywanym programem",
            "D. przechowywania argument\u00f3w oblicze\u0144"
        ],
        "goodAnswer": "D. przechowywania argument\u00f3w oblicze\u0144"
    },
    {
        "id": 1919,
        "question": "Po\u0142\u0105czenie typu trunk dw\u00f3ch prze\u0142\u0105cznik\u00f3w daje mo\u017cliwo\u015b\u0107",
        "imageLoc": "",
        "answers": [
            "A. przesy\u0142ania w jednym \u0142\u0105czu ramek pochodz\u0105cych od wielu wirtualnych sieci lokalnych",
            "B. skonfigurowania agregacji port\u00f3w, zwi\u0119kszaj\u0105cej przepustowo\u015b\u0107 pomi\u0119dzy prze\u0142\u0105cznikami",
            "C. zwi\u0119kszenia przepustowo\u015bci po\u0142\u0105czenia przez wykorzystanie kolejnego portu",
            "D. zablokowania wszystkich nadmiarowych po\u0142\u0105cze\u0144 na konkretnym porcie"
        ],
        "goodAnswer": "A. przesy\u0142ania w jednym \u0142\u0105czu ramek pochodz\u0105cych od wielu wirtualnych sieci lokalnych"
    },
    {
        "id": 1920,
        "question": "Po\u0142\u0105czenia typu punkt-punkt, poprzez publiczn\u0105 infrastruktur\u0119 telekomunikacyjn\u0105, oznacza si\u0119 skr\u00f3tem",
        "imageLoc": "",
        "answers": [
            "A. WLAN",
            "B. VLAN",
            "C. PAN",
            "D. VPN"
        ],
        "goodAnswer": "D. VPN"
    },
    {
        "id": 1921,
        "question": "W celu powi\u0119kszenia lub zmniejszenia ikony na pulpicie nale\u017cy kr\u0119ci\u0107 rolk\u0105 myszki, przytrzymuj\u0105c jednocze\u015bnie klawisz",
        "imageLoc": "",
        "answers": [
            "A. CTRL",
            "B. TAB",
            "C. SHIFT",
            "D. ALT"
        ],
        "goodAnswer": "A. CTRL"
    },
    {
        "id": 1922,
        "question": "Jakiego narz\u0119dzia wraz z parametrami, nale\u017cy u\u017cy\u0107 w systemie Windows, aby wy\u015bwietli\u0107 przedstawione informacje o dysku twardym?",
        "imageLoc": require("../assets/img/870.png"),
        "answers": [
            "A. hdparm",
            "B. DiskUtility",
            "C. diskpart",
            "D. ScanDisc"
        ],
        "goodAnswer": "C. diskpart"
    },
    {
        "id": 1923,
        "question": "Poprawny adres komputera dla maski 255.255.255.0, to adres",
        "imageLoc": "",
        "answers": [
            "A. 192.168.1.255",
            "B. 122.0.0.255",
            "C. 192.168.1.1",
            "D. 122.168.1.0"
        ],
        "goodAnswer": "C. 192.168.1.1"
    },
    {
        "id": 1924,
        "question": "Zadaniem serwera plik\u00f3w w sieciach komputerowych LAN jest",
        "imageLoc": "",
        "answers": [
            "A. sterowanie danymi na komputerach lokalnych",
            "B. wykonywanie proces\u00f3w obliczeniowych na komputerach lokalnych",
            "C. zarz\u0105dzanie prac\u0105 prze\u0142\u0105cznik\u00f3w i ruter\u00f3w",
            "D. wsp\u00f3lne u\u017cytkowanie tych samych zasob\u00f3w"
        ],
        "goodAnswer": "D. wsp\u00f3lne u\u017cytkowanie tych samych zasob\u00f3w"
    },
    {
        "id": 1925,
        "question": "Do realizacji alternatywy logicznej z negacj\u0105 nale\u017cy u\u017cy\u0107 funktora",
        "imageLoc": "",
        "answers": [
            "A. NAND",
            "B. OR",
            "C. EX-OR",
            "D. NOR"
        ],
        "goodAnswer": "D. NOR"
    },
    {
        "id": 1926,
        "question": "U\u017cytkownik laptopa chce do niego pod\u0142\u0105czy\u0107 przedstawion\u0105 na rysunku kart\u0119 sieciow\u0105. Aby to by\u0142o mo\u017cliwe, laptop musi by\u0107 wyposa\u017cony w gniazdo",
        "imageLoc": require("../assets/img/1760.png"),
        "answers": [
            "A. Mini DIN",
            "B. PCMCIA",
            "C. BNC",
            "D. Slot 3"
        ],
        "goodAnswer": "B. PCMCIA"
    },
    {
        "id": 1927,
        "question": "Opisana technologia stosowana w systemach rodziny Windows to",
        "imageLoc": require("../assets/img/106.png"),
        "answers": [
            "A. Hardware Abstraction Layer",
            "B. Wywo\u0142anie systemowe",
            "C. Plug and Play",
            "D. File Allocation Table"
        ],
        "goodAnswer": "C. Plug and Play"
    },
    {
        "id": 1928,
        "question": "Niezale\u017cn\u0105 struktur\u0105 sieci WLAN jest",
        "imageLoc": "",
        "answers": [
            "A. ESS",
            "B. BSS1",
            "C. BSS",
            "D. IBSS"
        ],
        "goodAnswer": "D. IBSS"
    },
    {
        "id": 1929,
        "question": "Polecenie msconfig uruchamia w systemie Windows:",
        "imageLoc": "",
        "answers": [
            "A. narz\u0119dzie konfiguracji systemu",
            "B. mened\u017cera zada\u0144",
            "C. mened\u017cera plik\u00f3w",
            "D. panel sterowania"
        ],
        "goodAnswer": "A. narz\u0119dzie konfiguracji systemu"
    },
    {
        "id": 1930,
        "question": "Kt\u00f3re narz\u0119dzie nale\u017cy u\u017cy\u0107 w systemie Windows do wy\u015bwietlenia informacji na temat problem\u00f3w systemowych?",
        "imageLoc": "",
        "answers": [
            "A. Podgl\u0105d zdarze\u0144",
            "B. Zasady grupy",
            "C. Foldery udost\u0119pnione",
            "D. Harmonogram zada\u0144"
        ],
        "goodAnswer": "A. Podgl\u0105d zdarze\u0144"
    },
    {
        "id": 1931,
        "question": "Po instalacji z domy\u015blnymi ustawieniami system Windows XP nie obs\u0142uguje systemu plik\u00f3w",
        "imageLoc": "",
        "answers": [
            "A. FAT16",
            "B. FAT32",
            "C. NTFS",
            "D. EXT"
        ],
        "goodAnswer": "D. EXT"
    },
    {
        "id": 1932,
        "question": "Komputer wyposa\u017cono w p\u0142yt\u0119 g\u0142\u00f3wn\u0105 przedstawion\u0105 na rysunku. Aby zwi\u0119kszy\u0107 moc obliczeniow\u0105 komputera zaleca si\u0119",
        "imageLoc": require("../assets/img/589.png"),
        "answers": [
            "A. zwi\u0119kszy\u0107 pami\u0119ci operacyjne",
            "B. zainstalowanie dw\u00f3ch procesor\u00f3w",
            "C. instalacj\u0119 kontrolera RAID",
            "D. instalacj\u0119 dysku SAS"
        ],
        "goodAnswer": "B. zainstalowanie dw\u00f3ch procesor\u00f3w"
    },
    {
        "id": 1933,
        "question": "Kt\u00f3ry z adres\u00f3w IPv4 jest odpowiednikiem adresu IPv6 ::1?",
        "imageLoc": "",
        "answers": [
            "A. 10.0.0.1",
            "B. 1.1.1.1",
            "C. 128.0.0.1",
            "D. 127.0.0.1"
        ],
        "goodAnswer": "D. 127.0.0.1"
    },
    {
        "id": 1934,
        "question": "Programem s\u0142u\u017c\u0105cym do archiwizacji danych w systemie Linux jest",
        "imageLoc": "",
        "answers": [
            "A. lzma",
            "B. compress",
            "C. tar",
            "D. free"
        ],
        "goodAnswer": "C. tar"
    },
    {
        "id": 1935,
        "question": "Kt\u00f3ra funkcja prze\u0142\u0105cznika zarz\u0105dzalnego umo\u017cliwia \u0142\u0105czenie prze\u0142\u0105cznik\u00f3w r\u00f3wnocze\u015bnie kilkoma po\u0142\u0105czeniami fizycznymi w jedno po\u0142\u0105czenie logiczne w celu uzyskania wi\u0119kszej przepustowo\u015bci \u0142\u0105cza?",
        "imageLoc": "",
        "answers": [
            "A. Zarz\u0105dzanie pasmem",
            "B. Port mirroring",
            "C. Agregacja \u0142\u0105czy",
            "D. Port trunk"
        ],
        "goodAnswer": "C. Agregacja \u0142\u0105czy"
    },
    {
        "id": 1936,
        "question": "Cookie nazywa si\u0119 plik",
        "imageLoc": "",
        "answers": [
            "A. tekstowy, z kt\u00f3rego korzystaj\u0105 wszystkie witryny sieci",
            "B. graficzny, z kt\u00f3rego korzystaj\u0105 wszystkie witryny sieci",
            "C. graficzny przechowuj\u0105cy obraz witryny sieci Web",
            "D. tekstowy, przechowuj\u0105cy informacje dla danej witryny sieci Web"
        ],
        "goodAnswer": "D. tekstowy, przechowuj\u0105cy informacje dla danej witryny sieci Web"
    },
    {
        "id": 1937,
        "question": "Kt\u00f3re konto nie jest wbudowanym w systemie Windows XP ?",
        "imageLoc": "",
        "answers": [
            "A. admin",
            "B. administrator",
            "C. pomocnik",
            "D. go\u015b\u0107"
        ],
        "goodAnswer": "A. admin"
    },
    {
        "id": 1938,
        "question": "Aby wyczy\u015bci\u0107 z kurzu wn\u0119trze obudowy drukarki fotograficznej, nale\u017cy u\u017cy\u0107",
        "imageLoc": "",
        "answers": [
            "A. spr\u0119\u017conego powietrza w pojemniku z wyd\u0142u\u017con\u0105 rurk\u0105",
            "B. szczotki z twardym w\u0142osiem",
            "C. opaski antystatycznej",
            "D. \u015brodka smaruj\u0105cego"
        ],
        "goodAnswer": "A. spr\u0119\u017conego powietrza w pojemniku z wyd\u0142u\u017con\u0105 rurk\u0105"
    },
    {
        "id": 1939,
        "question": "Wewn\u0119trzny protok\u00f3\u0142 trasowania, kt\u00f3rego metryk\u0105 jest wektor odleg\u0142o\u015bci, to",
        "imageLoc": "",
        "answers": [
            "A. IS-IS",
            "B. RIP",
            "C. EGP",
            "D. OSPF"
        ],
        "goodAnswer": "B. RIP"
    },
    {
        "id": 1940,
        "question": "Procesem nieodwracalnym, ca\u0142kowicie uniemo\u017cliwiaj\u0105cym odzyskanie danych z dysku twardego, jest",
        "imageLoc": "",
        "answers": [
            "A. zatarcie \u0142o\u017cyska dysku",
            "B. zerowanie dysku",
            "C. przypadkowe usuni\u0119cie plik\u00f3w",
            "D. zalanie dysku"
        ],
        "goodAnswer": "B. zerowanie dysku"
    },
    {
        "id": 1941,
        "question": "Kt\u00f3ry z interfejs\u00f3w jest portem r\u00f3wnoleg\u0142ym?",
        "imageLoc": "",
        "answers": [
            "A. IEEE1284",
            "B. USB",
            "C. IEEE1394",
            "D. RS232"
        ],
        "goodAnswer": "A. IEEE1284"
    },
    {
        "id": 1942,
        "question": "U\u017cytkownicy korzystaj\u0105cy z sieci WiFi zaobserwowali zaburzenia i cz\u0119st\u0105 utrat\u0119 po\u0142\u0105czenia z sieci\u0105. Powodem takiego stanu rzeczy mo\u017ce by\u0107",
        "imageLoc": "",
        "answers": [
            "A. zbyt s\u0142aby sygna\u0142.",
            "B. z\u0142y spos\u00f3b szyfrowania sieci.",
            "C. niedzia\u0142aj\u0105cy serwer DHCP.",
            "D. b\u0142\u0119dne has\u0142o do sieci."
        ],
        "goodAnswer": "A. zbyt s\u0142aby sygna\u0142."
    },
    {
        "id": 1943,
        "question": "Katalog Nak\u0142ad\u00f3w Rzeczowych przy projektowaniu sieci jest stosowany do",
        "imageLoc": "",
        "answers": [
            "A. rysowania schemat\u00f3w sieci.",
            "B. kosztorysowania rob\u00f3t.",
            "C. zdefiniowania wytycznych dla wykonawcy.",
            "D. opracowywania powykonawczych pomiar\u00f3w."
        ],
        "goodAnswer": "B. kosztorysowania rob\u00f3t."
    },
    {
        "id": 1944,
        "question": "W systemie Linux wy\u015bwietlenie informacji o uruchomionych procesach umo\u017cliwia polecenie",
        "imageLoc": "",
        "answers": [
            "A. ps",
            "B. ls",
            "C. rm",
            "D. su"
        ],
        "goodAnswer": "A. ps"
    },
    {
        "id": 1945,
        "question": "Liczba szesnastkowa 29A zapisana w systemie binarnym b\u0119dzie mia\u0142a posta\u0107:",
        "imageLoc": "",
        "answers": [
            "A. 1000011010",
            "B. 1001011010",
            "C. 1010010110",
            "D. 1010011010"
        ],
        "goodAnswer": "D. 1010011010"
    },
    {
        "id": 1946,
        "question": "W systemie Windows parametry karty graficznej mo\u017cna sprawdzi\u0107 za pomoc\u0105 polecenia",
        "imageLoc": "",
        "answers": [
            "A. dxdiag",
            "B. color",
            "C. cliconfg",
            "D. graphics"
        ],
        "goodAnswer": "A. dxdiag"
    },
    {
        "id": 1947,
        "question": "Protoko\u0142em wykorzystywanym przy rozg\u0142aszaniu grupowym, za pomoc\u0105 kt\u00f3rego hosty zg\u0142aszaj\u0105 swoje cz\u0142onkostwo, jest",
        "imageLoc": "",
        "answers": [
            "A. ICMP",
            "B. EIGRP",
            "C. IGMP",
            "D. IGRP"
        ],
        "goodAnswer": "C. IGMP"
    },
    {
        "id": 1948,
        "question": "Kt\u00f3ra czynno\u015b\u0107 zabezpieczy dane przesy\u0142ane w sieci przed dzia\u0142aniem sniffera?",
        "imageLoc": "",
        "answers": [
            "A. zmiana has\u0142a u\u017cytkownika",
            "B. skanowanie programem antywirusowym",
            "C. korzystanie z antydialera",
            "D. szyfrowanie danych w sieci"
        ],
        "goodAnswer": "D. szyfrowanie danych w sieci"
    },
    {
        "id": 1949,
        "question": "Modu\u0142em pami\u0119ci RAM, kompatybilnym z p\u0142yt\u0105 g\u0142\u00f3wn\u0105 GIGABYTE GA-X99-ULTRA GAMING/ X99/8xDDR4 2133, ECC, max 128GB/ 4x PCI-E 16x/ RAID/ USB 3.1/ S-2011-V3/ATX, jest pami\u0119\u0107",
        "imageLoc": "",
        "answers": [
            "A. HPE 16GB (1x16GB) Dual Rank x4 PC3-14900R (DDR3-1866) Registered CAS-13 Memory Kit",
            "B. HPE 32GB (1x16GB) Dual Rank x4 PC3L-10600R (DDR3-1333) Registered CAS-9, Non-ECC",
            "C. HPE 32GB (1x32GB) Quad Rank x4 PC3-14900L (DDR3-1866 Load Reduced CAS-13 Memory Kit)",
            "D. HPE 32GB (1x32GB) Quad Rank x4 DDR4-2133 CAS-15-15-15 Load Reduced Memory Kit, ECC"
        ],
        "goodAnswer": "D. HPE 32GB (1x32GB) Quad Rank x4 DDR4-2133 CAS-15-15-15 Load Reduced Memory Kit, ECC"
    },
    {
        "id": 1950,
        "question": "Na p\u0142ycie g\u0142\u00f3wnej uleg\u0142a uszkodzeniu zintegrowana karta sieciowa. Komputer nie posiada dysku twardego ani \u017cadnych innych nap\u0119d\u00f3w takich jak stacja dysk\u00f3w czy CD-ROM. Klient twierdzi, \u017ce w sieci firmowej komputery nie posiadaj\u0105 \u017cadnych nap\u0119d\u00f3w i wszystko \"czyta\" si\u0119 z serwera. W celu zapewnienia utraconej funkcjonalno\u015bci nale\u017cy zamontowa\u0107",
        "imageLoc": "",
        "answers": [
            "A. w gnie\u017adzie rozszerze\u0144 kart\u0119 sieciow\u0105 samodzielnie wspieraj\u0105c\u0105 funkcj\u0119 Preboot Execution Environment",
            "B. w komputerze nap\u0119d CD-ROM",
            "C. w komputerze dysk twardy",
            "D. w gnie\u017adzie rozszerze\u0144 kart\u0119 sieciow\u0105 samodzielnie wspieraj\u0105c\u0105 funkcj\u0119 Postboot Execution Enumeration"
        ],
        "goodAnswer": "A. w gnie\u017adzie rozszerze\u0144 kart\u0119 sieciow\u0105 samodzielnie wspieraj\u0105c\u0105 funkcj\u0119 Preboot Execution Environment"
    },
    {
        "id": 1951,
        "question": "Kt\u00f3ra karta graficzna nie b\u0119dzie wsp\u00f3\u0142pracowa\u0142a z monitorem, wyposa\u017conym w z\u0142\u0105cza przedstawione na zdj\u0119ciu (zak\u0142adaj\u0105c, \u017ce do pod\u0142\u0105czenia monitora nie mo\u017cna zastosowa\u0107 adaptera)?",
        "imageLoc": require("../assets/img/861.png"),
        "answers": [
            "A. Fujitsu NVIDIA Quadro M2000 4GB GDDR5 (128 Bit) 4xDisplayPort",
            "B. Sapphire Fire Pro W9000 6GB GDDR5 (384 bit) 6x mini DisplayPort",
            "C. HIS R7 240 2GB GDDR3 (128 bit) HDMI, DVI, D-Sub",
            "D. Asus Radeon RX 550 4GB GDDR5 (128 bit), DVI-D, HDMI, DisplayPort"
        ],
        "goodAnswer": "C. HIS R7 240 2GB GDDR3 (128 bit) HDMI, DVI, D-Sub"
    },
    {
        "id": 1952,
        "question": "Procesem nieodwracalnym, ca\u0142kowicie uniemo\u017cliwiaj\u0105cym odzyskanie danych z dysku twardego, jest",
        "imageLoc": "",
        "answers": [
            "A. zalanie dysku",
            "B. przypadkowe usuni\u0119cie plik\u00f3w",
            "C. zatarcie \u0142o\u017cyska dysku",
            "D. zerowanie dysku"
        ],
        "goodAnswer": "D. zerowanie dysku"
    },
    {
        "id": 1953,
        "question": "Aby zwolni\u0107 miejsce na dysku bez utraty danych, nale\u017cy wykona\u0107",
        "imageLoc": "",
        "answers": [
            "A. backup dysku",
            "B. oczyszczanie dysku",
            "C. defragmentacj\u0119 dysku",
            "D. sprawdzanie dysku"
        ],
        "goodAnswer": "B. oczyszczanie dysku"
    },
    {
        "id": 1954,
        "question": "Serwerem DNS w systemie Linux jest",
        "imageLoc": "",
        "answers": [
            "A. BIND",
            "B. CUPS",
            "C. ProFTPD",
            "D. APACHE"
        ],
        "goodAnswer": "A. BIND"
    },
    {
        "id": 1955,
        "question": "Podstawowe znaczenie przy budowie stacji roboczej, na kt\u00f3rej b\u0119dzie dzia\u0142a\u0107 wiele wirtualnych maszyn ma:",
        "imageLoc": "",
        "answers": [
            "A. Zesp\u00f3\u0142 ch\u0142odzenia wod\u0105",
            "B. Wysokiej klasy karta sieciowa",
            "C. Silna karta graficzna",
            "D. Liczba rdzeni procesora"
        ],
        "goodAnswer": "D. Liczba rdzeni procesora"
    },
    {
        "id": 1956,
        "question": "Jak\u0105 nazw\u0119 nosi niepo\u017c\u0105dane oprogramowanie komputerowe instalowane najcz\u0119\u015bciej bez wiedzy u\u017cytkownika?",
        "imageLoc": "",
        "answers": [
            "A. Shareware",
            "B. Malware",
            "C. Freeware",
            "D. Slackware"
        ],
        "goodAnswer": "B. Malware"
    },
    {
        "id": 1957,
        "question": "Polecenie systemu Windows stosowane do sprawdzenia trasy, po kt\u00f3rej s\u0105 przesy\u0142ane pakiety w sieci, to",
        "imageLoc": "",
        "answers": [
            "A. ipconfig",
            "B. tracert",
            "C. route",
            "D. netstat"
        ],
        "goodAnswer": "B. tracert"
    },
    {
        "id": 1958,
        "question": "Protoko\u0142em sieciowym definiuj\u0105cym mechanizmy stosowane do zarz\u0105dzania urz\u0105dzeniami sieciowymi jest",
        "imageLoc": "",
        "answers": [
            "A. Simple Mail Transfer Protocol (SMTP)",
            "B. Internet Group Management Protocol (IGMP)",
            "C. Intenet Control Message Protocol (ICMP)",
            "D. Simple Network Management Protocol (SNMP)"
        ],
        "goodAnswer": "D. Simple Network Management Protocol (SNMP)"
    },
    {
        "id": 1959,
        "question": "Oblicz koszt wykonania okablowania strukturalnego od 5 punkt\u00f3w abonenckich do panelu krosowego wraz z wykonaniem kabli po\u0142\u0105czeniowych dla stacji roboczych. W tym celu wykorzystano 50 m skr\u0119tki UTP. Punkt abonencki sk\u0142ada si\u0119 z 2 gniazd typu RJ45.",
        "imageLoc": require("../assets/img/1457.png"),
        "answers": [
            "A. 350,00 z\u0142",
            "B. 152,00 z\u0142",
            "C. 255,00 z\u0142",
            "D. 345,00 z\u0142"
        ],
        "goodAnswer": "C. 255,00 z\u0142"
    },
    {
        "id": 1960,
        "question": "Typowym objawem wskazuj\u0105cym na zbli\u017caj\u0105c\u0105 si\u0119 awari\u0119 dysku twardego jest pojawienie si\u0119",
        "imageLoc": "",
        "answers": [
            "A. b\u0142\u0119d\u00f3w zapisu i odczytu dysku",
            "B. komunikatu Diskette drive A error",
            "C. komunikatu CMOS checksum error",
            "D. trzech kr\u00f3tkich sygna\u0142\u00f3w d\u017awi\u0119kowych"
        ],
        "goodAnswer": "A. b\u0142\u0119d\u00f3w zapisu i odczytu dysku"
    },
    {
        "id": 1961,
        "question": "Aby m\u00f3c tworzy\u0107 konta u\u017cytkownik\u00f3w, komputer\u00f3w i innych obiekt\u00f3w oraz przechowywa\u0107 centralnie informacje o nich, nale\u017cy na serwerze Windows zainstalowa\u0107 rol\u0119",
        "imageLoc": "",
        "answers": [
            "A. us\u0142ugi certyfikat\u00f3w Active Directory",
            "B. us\u0142ugi domenowe Active Directory",
            "C. us\u0142ugi Domain Name System w us\u0142udze Active Directory",
            "D. Active Directory Federation Service"
        ],
        "goodAnswer": "B. us\u0142ugi domenowe Active Directory"
    },
    {
        "id": 1962,
        "question": "Element p\u0142yty g\u0142\u00f3wnej odpowiedzialny za wymian\u0119 danych mi\u0119dzy mikroprocesorem a pami\u0119ci\u0105 operacyjn\u0105 RAM oraz magistral\u0105 karty graficznej jest na rysunku oznaczony numerem",
        "imageLoc": require("../assets/img/1880.png"),
        "answers": [
            "A. 4",
            "B. 6",
            "C. 5",
            "D. 3"
        ],
        "goodAnswer": "B. 6"
    },
    {
        "id": 1963,
        "question": "Polecenie uname -s w systemie Linux jest wykorzystywane do sprawdzania",
        "imageLoc": "",
        "answers": [
            "A. nazwy j\u0105dra systemu operacyjnego",
            "B. statusu aktywnych interfejs\u00f3w sieciowych",
            "C. wolnego miejsca na dyskach twardych",
            "D. ilo\u015bci wolnej pami\u0119ci"
        ],
        "goodAnswer": "A. nazwy j\u0105dra systemu operacyjnego"
    },
    {
        "id": 1964,
        "question": "Jaki zestaw kolor\u00f3w zawiera tryb CMYK?",
        "imageLoc": "",
        "answers": [
            "A. Czerwony, zielony, niebieski i czarny",
            "B. Czerwony, zielony, \u017c\u00f3\u0142ty i granatowy",
            "C. B\u0142\u0119kitny, purpurowy, \u017c\u00f3\u0142ty i czarny",
            "D. Czerwony, purpurowy, \u017c\u00f3\u0142ty i karmelowy"
        ],
        "goodAnswer": "C. B\u0142\u0119kitny, purpurowy, \u017c\u00f3\u0142ty i czarny"
    },
    {
        "id": 1965,
        "question": "Na rysunku przedstawiono sie\u0107 o topologii",
        "imageLoc": require("../assets/img/824.png"),
        "answers": [
            "A. magistrali",
            "B. gwiazdy",
            "C. siatki",
            "D. drzewa"
        ],
        "goodAnswer": "A. magistrali"
    },
    {
        "id": 1966,
        "question": "Przedstawione narz\u0119dzie mo\u017ce by\u0107 wykorzystane do",
        "imageLoc": require("../assets/img/1747.png"),
        "answers": [
            "A. sprawdzenia d\u0142ugo\u015bci badanego kabla sieciowego",
            "B. pomiaru warto\u015bci napi\u0119cia w zasilaczu",
            "C. utrzymania drukarki w czysto\u015bci",
            "D. podgrzania i zamontowania elementu elektronicznego"
        ],
        "goodAnswer": "B. pomiaru warto\u015bci napi\u0119cia w zasilaczu"
    },
    {
        "id": 1967,
        "question": "Kt\u00f3r\u0105 mask\u0119 sieci nale\u017cy zastosowa\u0107 dla sieci nr 1 i sieci nr 2, aby urz\u0105dzenia o przedstawionych adresach mog\u0142y si\u0119 komunikowa\u0107 w swoich sieciach?",
        "imageLoc": require("../assets/img/1860.png"),
        "answers": [
            "A. 255.255.255.240",
            "B. 255.255.128.0",
            "C. 255.255.240.0",
            "D. 255.255.255.128"
        ],
        "goodAnswer": "B. 255.255.128.0"
    },
    {
        "id": 1968,
        "question": "Gniazdo tablicy interaktywnej jest oznaczone za pomoc\u0105 przedstawionego symbolu. Kt\u00f3rego z\u0142\u0105cza nale\u017cy u\u017cy\u0107 do pod\u0142\u0105czenia tablicy do komputera?",
        "imageLoc": require("../assets/img/962.png"),
        "answers": [
            "A. HDMI",
            "B. USB A-A",
            "C. FireWire",
            "D. D-SUB VGA"
        ],
        "goodAnswer": "D. D-SUB VGA"
    },
    {
        "id": 1969,
        "question": "Tryb pracy portu r\u00f3wnoleg\u0142ego, bazuj\u0105cy na magistrali ISA, umo\u017cliwiaj\u0105cy transfer danych do 2.4 MB/s, dedykowany dla skaner\u00f3w i urz\u0105dze\u0144 wielofunkcyjnych, to",
        "imageLoc": "",
        "answers": [
            "A. Bi-directional",
            "B. Nibble Mode",
            "C. ECP",
            "D. SPP"
        ],
        "goodAnswer": "C. ECP"
    },
    {
        "id": 1970,
        "question": "Jaka przep\u0142ywno\u015b\u0107 definiuje standard sieci Ethernet IEEE 802.3z",
        "imageLoc": "",
        "answers": [
            "A. 100 Mb/s",
            "B. 100 Gb/s",
            "C. 10 Mb/s",
            "D. 1 Gb/s"
        ],
        "goodAnswer": "D. 1 Gb/s"
    },
    {
        "id": 1971,
        "question": "Okablowanie pionowe w sieci strukturalnej \u0142\u0105czy si\u0119",
        "imageLoc": "",
        "answers": [
            "A. w g\u0142\u00f3wnym punkcie rozdzielczym z gniazdem abonenckim",
            "B. w po\u015brednim punkcie rozdzielczym z gniazdem abonenckim",
            "C. w gnie\u017adzie abonenckim",
            "D. w g\u0142\u00f3wnym punkcie rozdzielczym w po\u015brednimi punktami rozdzielczymi"
        ],
        "goodAnswer": "D. w g\u0142\u00f3wnym punkcie rozdzielczym w po\u015brednimi punktami rozdzielczymi"
    },
    {
        "id": 1972,
        "question": "Partycj\u0105 systemu Linux przechowuj\u0105c\u0105 tymczasowo dane w przypadku braku wolnej pami\u0119ci RAM jest",
        "imageLoc": "",
        "answers": [
            "A. swap",
            "B. sys",
            "C. tmp",
            "D. var"
        ],
        "goodAnswer": "A. swap"
    },
    {
        "id": 1973,
        "question": "Zgodnie z norm\u0105 PN-EN 50174 okablowanie poziome w systemie okablowania strukturalnego to cz\u0119\u015b\u0107 okablowania pomi\u0119dzy",
        "imageLoc": "",
        "answers": [
            "A. serwerem a szkieletem sieci",
            "B. punktem rozdzielczym a gniazdem u\u017cytkownika",
            "C. punktami rozdzielczymi w g\u0142\u00f3wnych pionach budynku",
            "D. gniazdkiem u\u017cytkownika a terminalem ko\u0144cowym"
        ],
        "goodAnswer": "B. punktem rozdzielczym a gniazdem u\u017cytkownika"
    },
    {
        "id": 1974,
        "question": "Kt\u00f3ry ze znak\u00f3w w systemach z rodziny Windows nale\u017cy zastosowa\u0107 podczas udost\u0119pniania zasobu ukrytego w sieci?",
        "imageLoc": "",
        "answers": [
            "A. ?",
            "B. $",
            "C. #",
            "D. @"
        ],
        "goodAnswer": "B. $"
    },
    {
        "id": 1975,
        "question": "Kt\u00f3ry przyrz\u0105d pomiarowy s\u0142u\u017cy do sprawdzenia warto\u015bci napi\u0119\u0107 w zasilaczu?",
        "imageLoc": "",
        "answers": [
            "A. Woltomierz",
            "B. Omomierz",
            "C. Amperomierz",
            "D. Watomierz"
        ],
        "goodAnswer": "A. Woltomierz"
    },
    {
        "id": 1976,
        "question": "Kt\u00f3ry protok\u00f3\u0142 pocztowy umo\u017cliwia mi\u0119dzy innymi przechowywanie odbieranych wiadomo\u015bci e-mail na serwerze, zarz\u0105dzanie wieloma folderami, usuwanie wiadomo\u015bci i przenoszenie ich pomi\u0119dzy folderami?",
        "imageLoc": "",
        "answers": [
            "A. Multipurpose Internet Mail Extensions (MIME)",
            "B. Internet Message Access Protocol (IMAP)",
            "C. Simple Mail Transfer Protocol (SMTP)",
            "D. Post Office Protocol (POP)"
        ],
        "goodAnswer": "B. Internet Message Access Protocol (IMAP)"
    },
    {
        "id": 1977,
        "question": "Najszybszym sposobem wstawienia skr\u00f3tu do programu na pulpitach wszystkich u\u017cytkownik\u00f3w domenowych b\u0119dzie",
        "imageLoc": "",
        "answers": [
            "A. pobranie aktualizacji Windows.",
            "B. mapowanie dysku.",
            "C. ponowna instalacja programu.",
            "D. u\u017cycie zasad grupy."
        ],
        "goodAnswer": "D. u\u017cycie zasad grupy."
    },
    {
        "id": 1978,
        "question": "Pracownik serwisu komputerowego podczas wykonywania konserwacji i czyszczenia drukarki laserowej, od\u0142\u0105czonej od \u017ar\u00f3d\u0142a zasilania, mo\u017ce wykorzysta\u0107 jako \u015brodek ochrony indywidualnej",
        "imageLoc": "",
        "answers": [
            "A. r\u0119kawice ochronne.",
            "B. odkurzacz r\u0119czny komputerowy.",
            "C. chusteczk\u0119 do czyszczenia zabrudze\u0144.",
            "D. podzesp\u00f3\u0142 kotwicz\u0105cy."
        ],
        "goodAnswer": "A. r\u0119kawice ochronne."
    },
    {
        "id": 1979,
        "question": "Mo\u017cliwo\u015b\u0107 rozbudowy sieci jest nazywana",
        "imageLoc": "",
        "answers": [
            "A. kompatybilno\u015bci\u0105",
            "B. skalowalno\u015bci\u0105",
            "C. nadmiarowo\u015bci\u0105",
            "D. bezawaryjno\u015bci\u0105"
        ],
        "goodAnswer": "B. skalowalno\u015bci\u0105"
    },
    {
        "id": 1980,
        "question": "Kt\u00f3ry zestaw protoko\u0142\u00f3w jest stosowany w procesie komunikacji hosta z serwerem WWW po wpisaniu adresu strony w przegl\u0105darce internetowej hosta?",
        "imageLoc": "",
        "answers": [
            "A. HTTP, UDP, IP",
            "B. HTTP, TCP, IP",
            "C. HTTP, ICMP, IP",
            "D. FTP, UDP, IP"
        ],
        "goodAnswer": "B. HTTP, TCP, IP"
    },
    {
        "id": 1981,
        "question": "Kt\u00f3re urz\u0105dzenie aktywne umo\u017cliwi po\u0142\u0105czenie z siec\u0105 lokaln\u0105 za pomoc\u0105 kabla UTP 15 komputer\u00f3w, drukarki sieciowej oraz rutera?",
        "imageLoc": "",
        "answers": [
            "A. Prze\u0142\u0105cznik 16-portowy",
            "B. Panel krosowniczy 16-portowy",
            "C. Panel krosowniczy 24-portowy",
            "D. Prze\u0142\u0105cznik 24-portowy"
        ],
        "goodAnswer": "D. Prze\u0142\u0105cznik 24-portowy"
    },
    {
        "id": 1982,
        "question": "Modu\u0142em pami\u0119ci RAM, kompatybilnym z p\u0142yt\u0105 g\u0142\u00f3wn\u0105 GIGABYTE GA-X99- ULTRA GAMING/ X99/ 8x DDR4 2133, ECC, max 128GB/ 4x PCI-E 16x/ RAID/ USB 3.1/ S-2011-V3/ATX, jest pami\u0119\u0107",
        "imageLoc": "",
        "answers": [
            "A. HPE 32GB (1x32GB) Quad Rank x4 DDR4-2133 CAS-15-15-15 Load Reduced Memory Kit, ECC",
            "B. HPE 32GB (1x16GB) Dual Rank x4 PC3L-10600R (DDR3-1333) Registered CAS-9 , Non-ECC",
            "C. HPE 32GB (1x32GB) Quad Rank x4 PC3-14900L (DDR3-1866) Load Reduced CAS-13 Memory Kit",
            "D. HPE 16GB (1x16GB) Dual Rank x4 PC3-14900R (DDR3-1866) Registered CAS-13 Memory Kit"
        ],
        "goodAnswer": "A. HPE 32GB (1x32GB) Quad Rank x4 DDR4-2133 CAS-15-15-15 Load Reduced Memory Kit, ECC"
    },
    {
        "id": 1983,
        "question": "Translacj\u0105 nazw domenowych na adresy sieciowe zajmuje si\u0119 us\u0142uga",
        "imageLoc": "",
        "answers": [
            "A. SMTP",
            "B. DNS",
            "C. SNMP",
            "D. DHCP"
        ],
        "goodAnswer": "B. DNS"
    },
    {
        "id": 1984,
        "question": "Kt\u00f3rym programem NIE mo\u017cna si\u0119 pos\u0142u\u017cy\u0107, aby odzyska\u0107 dane w systemie Windows na podstawie wcze\u015bniej utworzonej kopii?",
        "imageLoc": "",
        "answers": [
            "A. Norton Ghost",
            "B. Acronis True Image",
            "C. FileCleaner",
            "D. Clonezilla"
        ],
        "goodAnswer": "C. FileCleaner"
    },
    {
        "id": 1985,
        "question": "Kt\u00f3ry interfejs umo\u017cliwia korzystanie ze sterownik\u00f3w i oprogramowania systemu operacyjnego, zapewniaj\u0105c m.in. przep\u0142yw danych mi\u0119dzy pami\u0119ci\u0105 systemow\u0105 a dyskiem SATA?",
        "imageLoc": "",
        "answers": [
            "A. UHCI",
            "B. AHCI",
            "C. OHCI",
            "D. EHCI"
        ],
        "goodAnswer": "B. AHCI"
    },
    {
        "id": 1986,
        "question": "Aby w systemach Windows Server wykona\u0107 aktualizacj\u0119 dzier\u017cawy adres\u00f3w DHCP oraz rejestracj\u0119 nazw zwi\u0105zanych z systemem DNS w wierszu polecenia, nale\u017cy wpisa\u0107 polecenie",
        "imageLoc": "",
        "answers": [
            "A. ipconfig /release",
            "B. ipconfig /flushdns",
            "C. ipconfig /registerdns",
            "D. ipconfig /renew"
        ],
        "goodAnswer": "C. ipconfig /registerdns"
    },
    {
        "id": 1987,
        "question": "Urz\u0105dzeniem, kt\u00f3re s\u0142u\u017cy do wycinania kszta\u0142t\u00f3w oraz grawerowania mi\u0119dzy innymi w materia\u0142ach drewnianych, szklanych i metalowych, jest ploter",
        "imageLoc": "",
        "answers": [
            "A. laserowy",
            "B. tn\u0105cy",
            "C. solwentowy",
            "D. b\u0119bnowy"
        ],
        "goodAnswer": "A. laserowy"
    },
    {
        "id": 1988,
        "question": "U\u017cycie polecenia tar -xf dane.tar w systemie Linux spowoduje",
        "imageLoc": "",
        "answers": [
            "A. wy\u015bwietlenie informacji o zawarto\u015bci pliku dane.tar",
            "B. utworzenie archiwum dane.tar zawieraj\u0105ce kopi\u0119 katalogu /home",
            "C. wyodr\u0119bnienie danych z archiwum o nazwie dane.tar",
            "D. skopiowanie pliku dane.tar do katalogu /home"
        ],
        "goodAnswer": "C. wyodr\u0119bnienie danych z archiwum o nazwie dane.tar"
    },
    {
        "id": 1989,
        "question": "W komunikacie o b\u0142\u0119dzie systemu informacja wy\u015bwietlana w postaci heksadecymalnej oznacza",
        "imageLoc": "",
        "answers": [
            "A. odno\u015bnik do systemu pomocy",
            "B. nazw\u0119 sterownika",
            "C. kod b\u0142\u0119du",
            "D. definicj\u0119 b\u0142\u0119du"
        ],
        "goodAnswer": "C. kod b\u0142\u0119du"
    },
    {
        "id": 1990,
        "question": "W komputerach wykonuj\u0105cych zadania serwerowe, wymagaj\u0105ce du\u017cej wydajno\u015bci, nale\u017cy zastosowa\u0107 dysk z interfejsem",
        "imageLoc": "",
        "answers": [
            "A. ATA",
            "B. USB",
            "C. SAS",
            "D. SATA"
        ],
        "goodAnswer": "C. SAS"
    },
    {
        "id": 1991,
        "question": "W celu dokonania aktualizacji zainstalowanego systemu operacyjnego Linux Ubuntu nale\u017cy u\u017cy\u0107 polecenia",
        "imageLoc": "",
        "answers": [
            "A. kernel update",
            "B. yum upgrade",
            "C. apt-get upgrade albo apt upgrade",
            "D. system update"
        ],
        "goodAnswer": "C. apt-get upgrade albo apt upgrade"
    },
    {
        "id": 1992,
        "question": "Wska\u017c zestaw s\u0142u\u017c\u0105cy do diagnostyki logicznych uk\u0142ad\u00f3w elektronicznych znajduj\u0105cych si\u0119 na p\u0142ycie g\u0142\u00f3wnej komputera, kt\u00f3ry nie reaguje na pr\u00f3by w\u0142\u0105czenia zasilania.",
        "imageLoc": require("../assets/img/2091.png"),
        "answers": [
            "A. A",
            "B. B",
            "C. C",
            "D. D"
        ],
        "goodAnswer": "A. A"
    },
    {
        "id": 1993,
        "question": "W adresowaniu klasowym adres IP 74.100.7.8 nale\u017cy do",
        "imageLoc": "",
        "answers": [
            "A. klasy B",
            "B. klasy C",
            "C. klasy D",
            "D. klasy A"
        ],
        "goodAnswer": "D. klasy A"
    },
    {
        "id": 1994,
        "question": "Kt\u00f3r\u0105 us\u0142ug\u0119 nale\u017cy zainstalowa\u0107 na serwerze, by by\u0142o mo\u017cliwe korzystanie z nazw domenowych?",
        "imageLoc": "",
        "answers": [
            "A. DHCP",
            "B. AD",
            "C. SNTP",
            "D. DNS"
        ],
        "goodAnswer": "D. DNS"
    },
    {
        "id": 1995,
        "question": "Na p\u0142ycie g\u0142\u00f3wnej uleg\u0142a uszkodzeniu zintegrowana karta sieciowa. Komputer nie mo\u017ce uruchomi\u0107 systemu operacyjnego, gdy\u017c nie ma dysku twardego ani \u017cadnych nap\u0119d\u00f3w optycznych, a system operacyjny uruchamiany jest z sieci lokalnej. Aby przywr\u00f3ci\u0107 utracon\u0105 funkcjonalno\u015b\u0107, nale\u017cy zamontowa\u0107 w komputerze",
        "imageLoc": "",
        "answers": [
            "A. dysk twardy",
            "B. nap\u0119d CD-ROM",
            "C. kart\u0119 sieciow\u0105 wspieraj\u0105c\u0105 funkcj\u0119 Preboot Execution Environment",
            "D. najprostsz\u0105 kart\u0119 sieciow\u0105 wspieraj\u0105c\u0105 IEEE 802.3"
        ],
        "goodAnswer": "C. kart\u0119 sieciow\u0105 wspieraj\u0105c\u0105 funkcj\u0119 Preboot Execution Environment"
    },
    {
        "id": 1996,
        "question": "Ataki na systemy komputerowe polegaj\u0105ce na podst\u0119pnym wy\u0142udzaniu od u\u017cytkownika jego osobistych danych, przy wykorzystaniu zazwyczaj formy fa\u0142szywych powiadomie\u0144 z instytucji czy od dostawc\u00f3w system\u00f3w e-p\u0142atno\u015bci i innych og\u00f3lnie znanych organizacji, to",
        "imageLoc": "",
        "answers": [
            "A. phishing",
            "B. brute force",
            "C. SYN flooding",
            "D. DDoS"
        ],
        "goodAnswer": "A. phishing"
    },
    {
        "id": 1997,
        "question": "Jaka jest maksymalna pr\u0119dko\u015b\u0107 odczytu p\u0142yt CD-R w nap\u0119dzie oznaczonym x48?",
        "imageLoc": "",
        "answers": [
            "A. 10000 kB/s",
            "B. 7200 kB/s",
            "C. 480 kB/s",
            "D. 4800 kB/s"
        ],
        "goodAnswer": "B. 7200 kB/s"
    },
    {
        "id": 1998,
        "question": "Na zdj\u0119ciu przedstawiono ko\u015b\u0107 pami\u0119ci",
        "imageLoc": require("../assets/img/1445.png"),
        "answers": [
            "A. SIMM",
            "B. RIMM",
            "C. SDRAM",
            "D. RAMBUS"
        ],
        "goodAnswer": "C. SDRAM"
    },
    {
        "id": 1999,
        "question": "Liczba 22 u\u017cyta w adresie http://www.adres_serwera.pl:22 oznacza numer",
        "imageLoc": "",
        "answers": [
            "A. aplikacji, do kt\u00f3rej kierowane jest zapytanie",
            "B. sekwencyjny pakietu przekazuj\u0105cego dane",
            "C. PID procesu uruchomionego na serwerze",
            "D. portu, inny od standardowego numeru dla danej us\u0142ugi"
        ],
        "goodAnswer": "D. portu, inny od standardowego numeru dla danej us\u0142ugi"
    },
    {
        "id": 2000,
        "question": "Tusz \u017celowy jest stosowany w drukarkach",
        "imageLoc": "",
        "answers": [
            "A. sublimacyjnych",
            "B. fiskalnych",
            "C. termotransferowych",
            "D. ig\u0142owych"
        ],
        "goodAnswer": "A. sublimacyjnych"
    },
    {
        "id": 2001,
        "question": "Kt\u00f3ry typ kabla nale\u017cy zastosowa\u0107 do pod\u0142\u0105czenia komputera w pomieszczeniu z zak\u0142\u00f3ceniami elektromagnetycznymi?",
        "imageLoc": "",
        "answers": [
            "A. FTP Cat 5e",
            "B. UTP Cat 6",
            "C. UTP Cat 5",
            "D. UTP Cat 5e"
        ],
        "goodAnswer": "A. FTP Cat 5e"
    },
    {
        "id": 2002,
        "question": "Kt\u00f3ry typ routingu najlepiej zastosowa\u0107 w rozbudowanych, szybko zmieniaj\u0105cych si\u0119 sieciach?",
        "imageLoc": "",
        "answers": [
            "A. Statyczny",
            "B. Zewn\u0119trzny",
            "C. Lokalny",
            "D. Dynamiczny"
        ],
        "goodAnswer": "D. Dynamiczny"
    },
    {
        "id": 2003,
        "question": "Aby zapobiec wy\u0142adowaniom elektrostatycznym podczas wymiany podzespo\u0142\u00f3w komputerowych, technik powinien zastosowa\u0107",
        "imageLoc": "",
        "answers": [
            "A. r\u0119kawice gumowe",
            "B. okulary ochronne",
            "C. odzie\u017c poliestrow\u0105",
            "D. mat\u0119 i opask\u0119 antystatyczn\u0105"
        ],
        "goodAnswer": "D. mat\u0119 i opask\u0119 antystatyczn\u0105"
    },
    {
        "id": 2004,
        "question": "Jaki rodzaj tablicy partycji nale\u017cy wybra\u0107, aby utworzy\u0107 na dysku twardym partycj\u0119 o wielko\u015bci 3TB?",
        "imageLoc": "",
        "answers": [
            "A. GPT",
            "B. LBA",
            "C. MBR",
            "D. DRM"
        ],
        "goodAnswer": "A. GPT"
    },
    {
        "id": 2005,
        "question": "System Windows 8, w kt\u00f3rym wcze\u015bniej utworzono punkt przywracania systemu, uleg\u0142 awarii. Kt\u00f3re polecenie nale\u017cy wyda\u0107, aby przywr\u00f3ci\u0107 pliki i ustawienia systemu?",
        "imageLoc": "",
        "answers": [
            "A. reload",
            "B. rootkey",
            "C. rstrui",
            "D. replace"
        ],
        "goodAnswer": "C. rstrui"
    },
    {
        "id": 2006,
        "question": "W ramce zamieszczono opis technologii",
        "imageLoc": require("../assets/img/1372.png"),
        "answers": [
            "A. SLI",
            "B. 3DVision",
            "C. HyperTransport",
            "D. CUDA"
        ],
        "goodAnswer": "A. SLI"
    },
    {
        "id": 2007,
        "question": "Niezale\u017cn\u0105 struktur\u0105 sieci WLAN jest",
        "imageLoc": "",
        "answers": [
            "A. BSS1",
            "B. ESS",
            "C. IBSS",
            "D. BSS"
        ],
        "goodAnswer": "C. IBSS"
    },
    {
        "id": 2008,
        "question": "Jakiego programu wbudowanego w system Windows 8 Pro mo\u017cna u\u017cy\u0107, aby zaszyfrowa\u0107 dane?",
        "imageLoc": "",
        "answers": [
            "A. OneLocker",
            "B. AppLocker",
            "C. BitLocker",
            "D. WinLocker"
        ],
        "goodAnswer": "C. BitLocker"
    },
    {
        "id": 2009,
        "question": "Okre\u015blenie \u015bredni czas dost\u0119pu w dyskach twardych oznacza",
        "imageLoc": "",
        "answers": [
            "A. czas, w kt\u00f3rym dane s\u0105 przesy\u0142ane z talerza do elektroniki dysku",
            "B. sum\u0119 \u015bredniego czasu wyszukiwania i op\u00f3\u017anienia",
            "C. sum\u0119 czasu przeskoku pomi\u0119dzy dwoma cylindrami i czasu przesy\u0142ania danych z talerza do elektroniki dysku",
            "D. czas potrzebny na ustawienie g\u0142owicy nad odpowiednim cylindrem"
        ],
        "goodAnswer": "B. sum\u0119 \u015bredniego czasu wyszukiwania i op\u00f3\u017anienia"
    },
    {
        "id": 2010,
        "question": "Protoko\u0142em pakiet\u00f3w u\u017cytkownika wykonuj\u0105cym us\u0142ug\u0119 bezpo\u0142\u0105czeniowego dostarczania datagram\u00f3w jest",
        "imageLoc": "",
        "answers": [
            "A. UDP",
            "B. IP",
            "C. ARP",
            "D. TCP"
        ],
        "goodAnswer": "A. UDP"
    },
    {
        "id": 2011,
        "question": "Wsp\u00f3\u0142cze\u015bnie pami\u0119ci podr\u0119czne procesora drugiego poziomu (ang. \"L-2 cache\") wykonane s\u0105 z uk\u0142ad\u00f3w pami\u0119ci",
        "imageLoc": "",
        "answers": [
            "A. DRAM",
            "B. SRAM",
            "C. ROM",
            "D. EEPROM"
        ],
        "goodAnswer": "B. SRAM"
    },
    {
        "id": 2012,
        "question": "Na rysunku przedstawiono fragment wyniku dzia\u0142ania programu do testowania sieci. Wskazuje to na zastosowanie sieciowego polecenia testuj\u0105cego",
        "imageLoc": require("../assets/img/1825.png"),
        "answers": [
            "A. route",
            "B. arp",
            "C. tracert",
            "D. netstat"
        ],
        "goodAnswer": "D. netstat"
    },
    {
        "id": 2013,
        "question": "Kt\u00f3ra norma dotyczy okablowania strukturalnego?",
        "imageLoc": "",
        "answers": [
            "A. BN-76/8984-09",
            "B. ZN-96/TP",
            "C. EIA/TIA 568A",
            "D. TDC-061-0506-S"
        ],
        "goodAnswer": "C. EIA/TIA 568A"
    },
    {
        "id": 2014,
        "question": "Kt\u00f3ry z adres\u00f3w IPv4 jest adresem klasy C?",
        "imageLoc": "",
        "answers": [
            "A. 168.192.0.1",
            "B. 191.168.0.2",
            "C. 220.191.0.3",
            "D. 240.220.0.4"
        ],
        "goodAnswer": "C. 220.191.0.3"
    },
    {
        "id": 2015,
        "question": "Z\u0142\u0105cze IrDA do komunikacji bezprzewodowej jest",
        "imageLoc": "",
        "answers": [
            "A. z\u0142\u0105czem radiowym",
            "B. z\u0142\u0105czem szeregowym",
            "C. rozwini\u0119ciem systemu BlueTooth",
            "D. z\u0142\u0105czem pozwalaj\u0105cym transmitowa\u0107 dane na odleg\u0142o\u015b\u0107 100m"
        ],
        "goodAnswer": "B. z\u0142\u0105czem szeregowym"
    },
    {
        "id": 2016,
        "question": "Kt\u00f3ry przyrz\u0105d jest stosowany do pomiar\u00f3w d\u0142ugo\u015bci i t\u0142umienno\u015bci przewod\u00f3w miedzianych?",
        "imageLoc": "",
        "answers": [
            "A. Miernik mocy",
            "B. Omomierz",
            "C. Woltomierz",
            "D. Reflektometr TDR"
        ],
        "goodAnswer": "D. Reflektometr TDR"
    },
    {
        "id": 2017,
        "question": "Na rysunku przedstawiono schemat blokowy karty",
        "imageLoc": require("../assets/img/1806.png"),
        "answers": [
            "A. sieciowej",
            "B. graficznej",
            "C. d\u017awi\u0119kowej",
            "D. telewizyjnej"
        ],
        "goodAnswer": "D. telewizyjnej"
    },
    {
        "id": 2018,
        "question": "Na zdj\u0119ciu przedstawiono",
        "imageLoc": require("../assets/img/52.png"),
        "answers": [
            "A. kart\u0119 telewizyjn\u0105",
            "B. modu\u0142 \u0142\u0105cz\u0105cy komputer z UPS",
            "C. kart\u0119 sieci bezprzewodowej",
            "D. modem kablowy"
        ],
        "goodAnswer": "C. kart\u0119 sieci bezprzewodowej"
    },
    {
        "id": 2019,
        "question": "Przedstawiona na rysunku usterka, widoczna na ekranie komputera, nie mo\u017ce by\u0107 spowodowana przez",
        "imageLoc": require("../assets/img/1883.png"),
        "answers": [
            "A. z\u0142e napi\u0119cia podawane przez zasilacz",
            "B. uszkodzenie modu\u0142\u00f3w pami\u0119ci operacyjnej",
            "C. przegrzewanie si\u0119 karty graficznej",
            "D. spalenie rdzenia lub pami\u0119ci karty graficznej po overclockingu"
        ],
        "goodAnswer": "B. uszkodzenie modu\u0142\u00f3w pami\u0119ci operacyjnej"
    },
    {
        "id": 2020,
        "question": "Aby mo\u017cna by\u0142o przeprowadzi\u0107 instalacj\u0119 sieciow\u0105 na stacjach roboczych system\u00f3w operacyjnych z rodziny Windows nale\u017cy na serwerze doda\u0107 us\u0142ugi",
        "imageLoc": "",
        "answers": [
            "A. pulpitu zdalnego",
            "B. wdra\u017cania systemu Windows",
            "C. plik\u00f3w",
            "D. terminalowe"
        ],
        "goodAnswer": "B. wdra\u017cania systemu Windows"
    },
    {
        "id": 2021,
        "question": "Jaki jest maksymalny rozmiar pojedynczego datagramu IPv4, kt\u00f3rego wielko\u015b\u0107 liczona jest wraz z jego nag\u0142\u00f3wkiem?",
        "imageLoc": "",
        "answers": [
            "A. 64 kB",
            "B. 128 kB",
            "C. 256 kB",
            "D. 32 kB"
        ],
        "goodAnswer": "A. 64 kB"
    },
    {
        "id": 2022,
        "question": "Rekord typu A serwera DNS",
        "imageLoc": "",
        "answers": [
            "A. mapuje nazw\u0119 domeny DNS na nazw\u0119 serwera poczty.",
            "B. mapuje nazw\u0119 hosta na odpowiadaj\u0105cy jej 32-bitowy adres IPv4.",
            "C. przechowuje alias nazwy domeny.",
            "D. przechowuje informacj\u0119 o nadrz\u0119dnym serwerze DNS."
        ],
        "goodAnswer": "B. mapuje nazw\u0119 hosta na odpowiadaj\u0105cy jej 32-bitowy adres IPv4."
    },
    {
        "id": 2023,
        "question": "Ustawienia wszystkich u\u017cytkownik\u00f3w komputera zapisane s\u0105 w ga\u0142\u0119zi rejestru o akronimie",
        "imageLoc": "",
        "answers": [
            "A. HKCC",
            "B. HKCR",
            "C. HKLM",
            "D. HKU"
        ],
        "goodAnswer": "D. HKU"
    },
    {
        "id": 2024,
        "question": "W trybie graficznym system\u00f3w Ubuntu lub SuSE Linux, do zainstalowania aktualizacji oprogramowania systemu mo\u017cna u\u017cy\u0107 program\u00f3w",
        "imageLoc": "",
        "answers": [
            "A. Synaptic lub YaST",
            "B. Chromium lub XyGrib",
            "C. Pocket lub Dolphin",
            "D. Shutter lub J-Pilot"
        ],
        "goodAnswer": "A. Synaptic lub YaST"
    },
    {
        "id": 2025,
        "question": "Jak nazywa si\u0119 rodzaj licencji, kt\u00f3ry sprawia, \u017ce program jest w pe\u0142ni funkcjonalny, ale mo\u017cna go uruchomi\u0107 jedynie okre\u015blon\u0105, niewielk\u0105 liczb\u0119 razy od momentu instalacji?",
        "imageLoc": "",
        "answers": [
            "A. Donationware",
            "B. Box",
            "C. Trialware",
            "D. Adware"
        ],
        "goodAnswer": "C. Trialware"
    },
    {
        "id": 2026,
        "question": "Rysunek przedstawia",
        "imageLoc": require("../assets/img/1451.png"),
        "answers": [
            "A. koncentrator",
            "B. panel krosowy",
            "C. prze\u0142\u0105cznik",
            "D. ruter"
        ],
        "goodAnswer": "B. panel krosowy"
    },
    {
        "id": 2027,
        "question": "Kt\u00f3ry z podzespo\u0142\u00f3w komputera przy wy\u0142\u0105czonym zasilaniu przechowuje program rozpoczynaj\u0105cy \u0142adowanie systemu operacyjnego?",
        "imageLoc": require("../assets/img/270.png"),
        "answers": [
            "A. I/O",
            "B. ROM",
            "C. CPU",
            "D. RAM"
        ],
        "goodAnswer": "B. ROM"
    },
    {
        "id": 2028,
        "question": "W systemach z rodziny Windows system EFS s\u0142u\u017cy do zabezpieczenia danych poprzez ich",
        "imageLoc": "",
        "answers": [
            "A. szyfrowanie.",
            "B. kopiowanie.",
            "C. archiwizowanie.",
            "D. przenoszenie."
        ],
        "goodAnswer": "A. szyfrowanie."
    },
    {
        "id": 2029,
        "question": "W celu bezpiecznego po\u0142\u0105czenia z serwerem firmowym przez Internet, tak aby mie\u0107 dost\u0119p do zasob\u00f3w firmowych, nale\u017cy zastosowa\u0107 oprogramowanie klienta",
        "imageLoc": "",
        "answers": [
            "A. VPN (Virtual Private Network)",
            "B. VLAN (Virtual Local Area Network)",
            "C. NAP (Network Access Protection)",
            "D. WLAN (Wireless Local Area Network)"
        ],
        "goodAnswer": "A. VPN (Virtual Private Network)"
    },
    {
        "id": 2030,
        "question": "Obraz dysku tworzy si\u0119, aby",
        "imageLoc": "",
        "answers": [
            "A. zabezpieczy\u0107 dane przed nieupowa\u017cnionymi u\u017cytkownikami",
            "B. zabezpieczy\u0107 system, aplikacje i dane przed powa\u017cn\u0105 awari\u0105 komputera",
            "C. zabezpieczy\u0107 aplikacje przed nieupowa\u017cnionymi u\u017cytkownikami",
            "D. przyspieszy\u0107 prac\u0119 z wybranymi plikami na tym dysku"
        ],
        "goodAnswer": "B. zabezpieczy\u0107 system, aplikacje i dane przed powa\u017cn\u0105 awari\u0105 komputera"
    },
    {
        "id": 2031,
        "question": "Element zamontowany na sta\u0142e, w kt\u00f3rym znajduje si\u0119 zako\u0144czenie okablowania strukturalnego poziomego u abonenta, to",
        "imageLoc": "",
        "answers": [
            "A. punkt konsolidacyjny.",
            "B. punkt rozdzielczy.",
            "C. gniazdo energetyczne.",
            "D. gniazdo teleinformatyczne."
        ],
        "goodAnswer": "D. gniazdo teleinformatyczne."
    },
    {
        "id": 2032,
        "question": "Kt\u00f3re medium transmisyjne wykorzystuj\u0105 myszki bluetooth do komunikacji z komputerem?",
        "imageLoc": "",
        "answers": [
            "A. Fale radiowe w pa\u015bmie 2,4 GHz",
            "B. Promieniowanie ultrafioletowe",
            "C. Fale radiowe w pa\u015bmie 800/900 MHz",
            "D. Promieniowanie podczerwone"
        ],
        "goodAnswer": "A. Fale radiowe w pa\u015bmie 2,4 GHz"
    },
    {
        "id": 2033,
        "question": "Komputer pracuj\u0105cy w domenie Active Directory nie mo\u017ce po\u0142\u0105czy\u0107 si\u0119 z kontrolerem domeny, na kt\u00f3rym jest przechowywany profil u\u017cytkownika. Jaki typ profilu u\u017cytkownika zostanie utworzony na tym komputerze?",
        "imageLoc": "",
        "answers": [
            "A. lokalny",
            "B. mobilny",
            "C. obowi\u0105zkowy",
            "D. tymczasowy"
        ],
        "goodAnswer": "D. tymczasowy"
    },
    {
        "id": 2034,
        "question": "Jakie oprogramowanie, zapobiegaj\u0105ce w\u0142amaniu do sieci, nale\u017cy zainstalowa\u0107 na serwerze udost\u0119pniaj\u0105cym po\u0142\u0105czenie z internetem?",
        "imageLoc": "",
        "answers": [
            "A. FireWall",
            "B. DHCP",
            "C. DNS",
            "D. Active Directory"
        ],
        "goodAnswer": "A. FireWall"
    },
    {
        "id": 2035,
        "question": "W przypadku zaschni\u0119cia dyszy w drukarce atramentowej spowodowanych d\u0142ugimi przestojami nale\u017cy w pierwszej kolejno\u015bci",
        "imageLoc": "",
        "answers": [
            "A. oczy\u015bci\u0107 dysz\u0119 wacikiem nas\u0105czonym olejem syntetycznym",
            "B. wymieni\u0107 mechanizm drukuj\u0105cy",
            "C. dokona\u0107 oczyszczenia dyszy z poziomu odpowiedniego programu",
            "D. ustawi\u0107 wydruk ekonomiczny"
        ],
        "goodAnswer": "C. dokona\u0107 oczyszczenia dyszy z poziomu odpowiedniego programu"
    },
    {
        "id": 2036,
        "question": "W komunikacie o b\u0142\u0119dzie systemu informacja wy\u015bwietlana w postaci heksadecymalnej oznacza",
        "imageLoc": "",
        "answers": [
            "A. odno\u015bnik do systemu pomocy",
            "B. definicj\u0119 b\u0142\u0119du",
            "C. kod b\u0142\u0119du",
            "D. nazw\u0119 sterownika"
        ],
        "goodAnswer": "C. kod b\u0142\u0119du"
    },
    {
        "id": 2037,
        "question": "Rysunek przedstawia topologi\u0119",
        "imageLoc": require("../assets/img/976.png"),
        "answers": [
            "A. pier\u015bcienia",
            "B. gwiazdy",
            "C. siatki",
            "D. magistrali"
        ],
        "goodAnswer": "B. gwiazdy"
    },
    {
        "id": 2038,
        "question": "Kt\u00f3ry z podzespo\u0142\u00f3w komputera przy wy\u0142\u0105czonym zasilaniu przechowuje program rozpoczynaj\u0105cy \u0142adowanie systemu operacyjnego?",
        "imageLoc": require("../assets/img/24.png"),
        "answers": [
            "A. CPU",
            "B. I/O",
            "C. RAM",
            "D. ROM"
        ],
        "goodAnswer": "D. ROM"
    },
    {
        "id": 2039,
        "question": "Wska\u017c 24-pinowe lub 29-pinowe z\u0142\u0105cze \u017censkie, kt\u00f3re mo\u017ce przesy\u0142a\u0107 skompresowany cyfrowy sygna\u0142 na monitor.",
        "imageLoc": "",
        "answers": [
            "A. VGA",
            "B. DVI",
            "C. RCA",
            "D. HDMI"
        ],
        "goodAnswer": "B. DVI"
    },
    {
        "id": 2040,
        "question": "Kt\u00f3ry typ plik\u00f3w nale\u017cy utworzy\u0107 w systemie operacyjnym do zautomatyzowania najcz\u0119\u015bciej wykonywanych czynno\u015bci, takich jak kopiowanie, tworzenie plik\u00f3w lub folder\u00f3w?",
        "imageLoc": "",
        "answers": [
            "A. Systemowy",
            "B. Konfiguracyjny",
            "C. Inicjuj\u0105cy",
            "D. Wsadowy"
        ],
        "goodAnswer": "D. Wsadowy"
    },
    {
        "id": 2041,
        "question": "Jak nazywa si\u0119 wsp\u00f3\u0142pracuj\u0105ce z monitorami CRT urz\u0105dzenie wskazuj\u0105ce z ko\u0144c\u00f3wk\u0105 wyposa\u017con\u0105 w \u015bwiat\u0142oczu\u0142y element, kt\u00f3ra poprzez dotkni\u0119cie ekranu monitora powoduje przes\u0142anie sygna\u0142u do komputera, umo\u017cliwiaj\u0105c w ten spos\u00f3b lokalizacj\u0119 kursora?",
        "imageLoc": "",
        "answers": [
            "A. Trackball",
            "B. Ekran dotykowy",
            "C. Pi\u00f3ro \u015bwietlne",
            "D. Touchpad"
        ],
        "goodAnswer": "C. Pi\u00f3ro \u015bwietlne"
    },
    {
        "id": 2042,
        "question": "Wymiana ta\u015bmy barwi\u0105cej zwi\u0105zana jest z u\u017cytkowaniem drukarki",
        "imageLoc": "",
        "answers": [
            "A. ig\u0142owej",
            "B. atramentowej",
            "C. laserowej",
            "D. termicznej"
        ],
        "goodAnswer": "A. ig\u0142owej"
    },
    {
        "id": 2043,
        "question": "Urz\u0105dzeniem niezb\u0119dnym do po\u0142\u0105czenia ze sob\u0105 pi\u0119ciu komputer\u00f3w w tej samej sieci o topologii gwiazdy jest",
        "imageLoc": "",
        "answers": [
            "A. modem",
            "B. most",
            "C. ruter",
            "D. prze\u0142\u0105cznik"
        ],
        "goodAnswer": "D. prze\u0142\u0105cznik"
    },
    {
        "id": 2044,
        "question": "Chusteczki nas\u0105czone p\u0142ynem o w\u0142a\u015bciwo\u015bciach antystatycznych s\u0105 przeznaczone do czyszczenia",
        "imageLoc": "",
        "answers": [
            "A. ekran\u00f3w monitor\u00f3w LCD",
            "B. ekran\u00f3w monitor\u00f3w CRT",
            "C. wa\u0142k\u00f3w olejowych w drukarkach laserowych",
            "D. rolek prowadz\u0105cych papier w drukarkach atramentowych"
        ],
        "goodAnswer": "B. ekran\u00f3w monitor\u00f3w CRT"
    },
    {
        "id": 2045,
        "question": "Kt\u00f3re polecenie w systemie Linux umo\u017cliwia sprawdzenie adresu IP przypisanego do interfejsu sieciowego?",
        "imageLoc": "",
        "answers": [
            "A. ifconfig",
            "B. msconfig",
            "C. tcpconfig",
            "D. ipconfig"
        ],
        "goodAnswer": "A. ifconfig"
    },
    {
        "id": 2046,
        "question": "Protok\u00f3\u0142 TCP (Transmission Control Protocol) dzia\u0142a w trybie",
        "imageLoc": "",
        "answers": [
            "A. bezpo\u0142\u0105czeniowym",
            "B. sekwencyjnym",
            "C. po\u0142\u0105czeniowym",
            "D. hybrydowym"
        ],
        "goodAnswer": "C. po\u0142\u0105czeniowym"
    },
    {
        "id": 2047,
        "question": "Protok\u00f3\u0142 TCP (Transmission Control Protocol) dzia\u0142a w trybie",
        "imageLoc": "",
        "answers": [
            "A. bezpo\u0142\u0105czeniowym",
            "B. sekwencyjnym",
            "C. po\u0142\u0105czeniowym",
            "D. hybrydowym"
        ],
        "goodAnswer": "C. po\u0142\u0105czeniowym"
    },
    {
        "id": 2048,
        "question": "Jak\u0105 liczb\u0119 adres\u00f3w urz\u0105dze\u0144 sieciowych zapewnia do dyspozycji stosowanie klasy adresowej C w sieciach opartych na rodzinie protoko\u0142\u00f3w TCP/IP?",
        "imageLoc": "",
        "answers": [
            "A. 100",
            "B. 200",
            "C. 256",
            "D. 254"
        ],
        "goodAnswer": "D. 254"
    },
    {
        "id": 2049,
        "question": "Przed modyfikacj\u0105 rejestru Windows, dla zapewnienia bezpiecze\u0144stwa pracy, w pierwszej kolejno\u015bci nale\u017cy",
        "imageLoc": "",
        "answers": [
            "A. sprawdzi\u0107 czy na komputerze nie ma wirus\u00f3w",
            "B. uruchomi\u0107 komputer w trybie awaryjnym",
            "C. wykona\u0107 kopi\u0119 zapasow\u0105 wa\u017cnych dokument\u00f3w",
            "D. wykona\u0107 kopi\u0119 zapasow\u0105 rejestru"
        ],
        "goodAnswer": "D. wykona\u0107 kopi\u0119 zapasow\u0105 rejestru"
    },
    {
        "id": 2050,
        "question": "Kt\u00f3ry protok\u00f3\u0142 obs\u0142uguje rozproszone wysy\u0142anie i pobieranie plik\u00f3w?",
        "imageLoc": "",
        "answers": [
            "A. FTP",
            "B. BitTorrent",
            "C. HTTPS",
            "D. Radius"
        ],
        "goodAnswer": "B. BitTorrent"
    },
    {
        "id": 2051,
        "question": "Zasady filtracji ruchu sieciowego firewall s\u0105 definiowane w postaci",
        "imageLoc": "",
        "answers": [
            "A. serwis\u00f3w",
            "B. regu\u0142",
            "C. plik\u00f3w CLI",
            "D. kontroli pasma zaj\u0119to\u015bci"
        ],
        "goodAnswer": "B. regu\u0142"
    },
    {
        "id": 2052,
        "question": "Kt\u00f3re polecenie w systemie operacyjnym Linux jest stosowane do wy\u015bwietlania konfiguracji interfejs\u00f3w sieciowych?",
        "imageLoc": "",
        "answers": [
            "A. tracert",
            "B. ipconfig",
            "C. ifconfig",
            "D. ping"
        ],
        "goodAnswer": "C. ifconfig"
    },
    {
        "id": 2053,
        "question": "Do zasilacza UPS o mocy rzeczywistej 480 W nie nale\u017cy pod\u0142\u0105cza\u0107",
        "imageLoc": "",
        "answers": [
            "A. modemu ADSL",
            "B. urz\u0105dze\u0144 sieciowych typu router",
            "C. monitora",
            "D. drukarki laserowej"
        ],
        "goodAnswer": "D. drukarki laserowej"
    },
    {
        "id": 2054,
        "question": "Administrator systemu Windows zauwa\u017cy\u0142 wyra\u017ane spowolnienie pracy komputera spowodowane ma\u0142\u0105 ilo\u015bci\u0105 wolnej pami\u0119ci RAM. Aby sprawdzi\u0107, kt\u00f3ry program zu\u017cywa jej najwi\u0119cej nale\u017cy u\u017cy\u0107 programu",
        "imageLoc": "",
        "answers": [
            "A. schtsk",
            "B. tasklist",
            "C. top",
            "D. rem"
        ],
        "goodAnswer": "B. tasklist"
    },
    {
        "id": 2055,
        "question": "U\u017cycie polecenia ipconfig /renew podczas konfiguracji interfejs\u00f3w sieciowych spowoduje",
        "imageLoc": "",
        "answers": [
            "A. wyczyszczenie bufora programu rozpoznaj\u0105cego DNS.",
            "B. zwolnienie wszystkich dzier\u017caw adres\u00f3w IP z DHCP.",
            "C. odnowienie wszystkich dzier\u017caw adres\u00f3w IP z DHCP.",
            "D. wy\u015bwietlenie identyfikatora klasy DHCP dla kart sieciowych."
        ],
        "goodAnswer": "C. odnowienie wszystkich dzier\u017caw adres\u00f3w IP z DHCP."
    },
    {
        "id": 2056,
        "question": "Kt\u00f3ry z wymienionych system\u00f3w operacyjnych nie jest obs\u0142ugiwany przez system plik\u00f3w ext4?",
        "imageLoc": "",
        "answers": [
            "A. Mandriva",
            "B. Fedora",
            "C. Gentoo",
            "D. Windows"
        ],
        "goodAnswer": "D. Windows"
    },
    {
        "id": 2057,
        "question": "Norma TIA/EIA-568-B.2 okre\u015bla specyfikacj\u0119 parametr\u00f3w transmisyjnych",
        "imageLoc": "",
        "answers": [
            "A. fal radiowych",
            "B. kabli koncentrycznych",
            "C. \u015bwiat\u0142owod\u00f3w",
            "D. kabli UTP"
        ],
        "goodAnswer": "D. kabli UTP"
    },
    {
        "id": 2058,
        "question": "Aby wymontowa\u0107 dysk twardy zamocowany w laptopie za pomoc\u0105 przedstawionych \u015brub monta\u017cowych, najlepiej u\u017cy\u0107 wkr\u0119taka typu",
        "imageLoc": require("../assets/img/806.png"),
        "answers": [
            "A. philips",
            "B. spanner",
            "C. torx",
            "D. imbus"
        ],
        "goodAnswer": "A. philips"
    },
    {
        "id": 2059,
        "question": "W dokumentacji technicznej procesora umieszczonego na p\u0142ycie g\u0142\u00f3wnej komputera szybko\u015b\u0107 zegara podaje si\u0119 w",
        "imageLoc": "",
        "answers": [
            "A. GHz/s",
            "B. GHz",
            "C. s",
            "D. kHz"
        ],
        "goodAnswer": "B. GHz"
    },
    {
        "id": 2060,
        "question": "Komputer lokalny ma adres 192.168.0.5. Po uruchomieniu strony internetowej z tego komputera, kt\u00f3ra identyfikuje adresy w sieci uzyskano informacj\u0119, \u017ce adresem komputera jest 195.182.130.24. Oznacza to, \u017ce",
        "imageLoc": "",
        "answers": [
            "A. inny komputer podszy\u0142 si\u0119 pod adres naszego komputera",
            "B. adres zosta\u0142 przet\u0142umaczony przez translacj\u0119 NAT",
            "C. serwer DHCP zmieni\u0142 nasz adres w trakcie przesy\u0142ania \u017c\u0105dania",
            "D. serwer WWW widzi inny komputer w sieci"
        ],
        "goodAnswer": "B. adres zosta\u0142 przet\u0142umaczony przez translacj\u0119 NAT"
    },
    {
        "id": 2061,
        "question": "Do pomiaru warto\u015bci mocy pobieranej przez komputer nale\u017cy u\u017cy\u0107",
        "imageLoc": "",
        "answers": [
            "A. watomierza",
            "B. testera zasilaczy",
            "C. woltomierza",
            "D. amperomierza"
        ],
        "goodAnswer": "A. watomierza"
    },
    {
        "id": 2062,
        "question": "Na nowym komputerze program antywirusowy nale\u017cy zainstalowa\u0107",
        "imageLoc": "",
        "answers": [
            "A. po zainstalowaniu pobranych z Internetu program\u00f3w",
            "B. w trakcie instalacji systemu operacyjnego",
            "C. przed zainstalowaniem systemu operacyjnego",
            "D. zaraz po zainstalowaniu systemu operacyjnego"
        ],
        "goodAnswer": "D. zaraz po zainstalowaniu systemu operacyjnego"
    },
    {
        "id": 2063,
        "question": "Dostarczanie nieprawid\u0142owych napi\u0119\u0107 do p\u0142yty g\u0142\u00f3wnej mo\u017ce prowadzi\u0107 do",
        "imageLoc": "",
        "answers": [
            "A. braku mo\u017cliwo\u015bci instalacji oprogramowania",
            "B. wyst\u0105pienia b\u0142\u0119d\u00f3w pami\u0119ci RAM",
            "C. uruchomienia si\u0119 jednostki centralnej z kolorowymi pasami i kreskami na ekranie",
            "D. puchni\u0119cia kondensator\u00f3w, zawieszania si\u0119 jednostki centralnej oraz niespodziewanych restart\u00f3w"
        ],
        "goodAnswer": "D. puchni\u0119cia kondensator\u00f3w, zawieszania si\u0119 jednostki centralnej oraz niespodziewanych restart\u00f3w"
    },
    {
        "id": 2064,
        "question": "System o\u015bwietlenia oparty o tr\u00f3jkolorowe diody LED wykorzystuj\u0105 skanery typu",
        "imageLoc": "",
        "answers": [
            "A. CIS",
            "B. CMYK",
            "C. CCD",
            "D. CMOS"
        ],
        "goodAnswer": "A. CIS"
    },
    {
        "id": 2065,
        "question": "Zapis liczby siedem w systemie \u00f3semkowym to",
        "imageLoc": "",
        "answers": [
            "A. 7(b)",
            "B. 7(h)",
            "C. 7(d)",
            "D. 7(o)"
        ],
        "goodAnswer": "D. 7(o)"
    },
    {
        "id": 2066,
        "question": "Na rysunku przedstawiono urz\u0105dzenie do",
        "imageLoc": require("../assets/img/1008.png"),
        "answers": [
            "A. monta\u017cu okablowania w gnie\u017adzie sieciowym",
            "B. zaciskania z\u0142\u0105cz RJ-45",
            "C. zdejmowania izolacji z kabli",
            "D. zaciskania z\u0142\u0105cz BNC"
        ],
        "goodAnswer": "C. zdejmowania izolacji z kabli"
    },
    {
        "id": 2067,
        "question": "Pomiar t\u0142umienia w kablowym torze transmisyjnym pozwala okre\u015bli\u0107",
        "imageLoc": "",
        "answers": [
            "A. b\u0142\u0119dy instalacyjne typu zamiana pary",
            "B. spadek mocy sygna\u0142u w danej parze przewodu",
            "C. r\u00f3\u017cnice miedzy przes\u0142uchami zdalnymi",
            "D. czas op\u00f3\u017anienia propagacji"
        ],
        "goodAnswer": "B. spadek mocy sygna\u0142u w danej parze przewodu"
    },
    {
        "id": 2068,
        "question": "Aby odczyta\u0107 adres serwera DNS w konfiguracji karty sieciowej systemu z rodziny Windows nale\u017cy wykona\u0107 polecenie",
        "imageLoc": "",
        "answers": [
            "A. ipconfig",
            "B. ping",
            "C. arp -a",
            "D. ipconfig /all"
        ],
        "goodAnswer": "D. ipconfig /all"
    },
    {
        "id": 2069,
        "question": "Na rysunku przedstawiono wynik testu okablowania. Zinterpretuj wynik pomiaru.",
        "imageLoc": require("../assets/img/1824.png"),
        "answers": [
            "A. Rozdzielenie pary",
            "B. B\u0142\u0105d rozwarcia",
            "C. B\u0142\u0105d zwarcia",
            "D. Odwr\u00f3cenie pary"
        ],
        "goodAnswer": "C. B\u0142\u0105d zwarcia"
    },
    {
        "id": 2070,
        "question": "Maska w postaci pe\u0142nej podsieci o prefiksie /25 to",
        "imageLoc": "",
        "answers": [
            "A. 255.255.255.240",
            "B. 255.255.255.128",
            "C. 255.255.255.224",
            "D. 255.255.255.192"
        ],
        "goodAnswer": "B. 255.255.255.128"
    },
    {
        "id": 2071,
        "question": "Urz\u0105dzeniem sieciowym przedstawionym na schemacie sieci jest",
        "imageLoc": require("../assets/img/1531.png"),
        "answers": [
            "A. ruter",
            "B. koncentrator",
            "C. modem",
            "D. prze\u0142\u0105cznik"
        ],
        "goodAnswer": "A. ruter"
    },
    {
        "id": 2072,
        "question": "Cech\u0105 charakterystyczn\u0105 wirus\u00f3w polimorficznych jest to, \u017ce",
        "imageLoc": "",
        "answers": [
            "A. zara\u017caj\u0105 wszystkie komputery w sieci lokalnej",
            "B. maj\u0105 cech\u0119 polegaj\u0105c\u0105 na modyfikowaniu swojego kodu",
            "C. atakuj\u0105 rekord startowy dysku",
            "D. atakuj\u0105 tablic\u0119 FAT"
        ],
        "goodAnswer": "B. maj\u0105 cech\u0119 polegaj\u0105c\u0105 na modyfikowaniu swojego kodu"
    },
    {
        "id": 2073,
        "question": "Rysunek przedstawia schemat ethernetowego po\u0142\u0105czenia niekrosowanych, o\u015bmiopinowych z\u0142\u0105cz 8P8C. Schemat ten nosi nazw\u0119:",
        "imageLoc": require("../assets/img/933.png"),
        "answers": [
            "A. T568A",
            "B. T568B",
            "C. T568D",
            "D. T568C"
        ],
        "goodAnswer": "B. T568B"
    },
    {
        "id": 2074,
        "question": "Materia\u0142em eksploatacyjnym, stosowanym w rzutniku multimedialnym, jest",
        "imageLoc": "",
        "answers": [
            "A. b\u0119ben \u015bwiat\u0142oczu\u0142y.",
            "B. filament.",
            "C. lampa projekcyjna.",
            "D. fuser."
        ],
        "goodAnswer": "C. lampa projekcyjna."
    },
    {
        "id": 2075,
        "question": "Kt\u00f3ry ze znak\u00f3w w systemach z rodziny Windows nale\u017cy zastosowa\u0107 podczas udost\u0119pniania zasobu ukrytego w sieci?",
        "imageLoc": "",
        "answers": [
            "A. ?",
            "B. #",
            "C. $",
            "D. @"
        ],
        "goodAnswer": "C. $"
    },
    {
        "id": 2076,
        "question": "Wska\u017c protok\u00f3\u0142 warstwy aplikacji s\u0142u\u017c\u0105cy do odbierania poczty elektronicznej, kt\u00f3ry w pierwszej fazie pobiera nag\u0142\u00f3wki wiadomo\u015bci, a pobranie ich tre\u015bci oraz za\u0142\u0105cznik\u00f3w nast\u0119puje dopiero po otwarciu maila.",
        "imageLoc": "",
        "answers": [
            "A. SNMP",
            "B. FTAM",
            "C. IMAP",
            "D. MIME"
        ],
        "goodAnswer": "C. IMAP"
    },
    {
        "id": 2077,
        "question": "Program WinRaR wy\u015bwietli\u0142 okienko informacyjne pokazane na rysunku. Z jakiego typu licencji na program korzysta\u0142 do tej pory u\u017cytkownik?",
        "imageLoc": require("../assets/img/1754.png"),
        "answers": [
            "A. freeware",
            "B. public domain",
            "C. shareware",
            "D. adware"
        ],
        "goodAnswer": "C. shareware"
    },
    {
        "id": 2078,
        "question": "Plik messages w systemie Linux przechowuje",
        "imageLoc": "",
        "answers": [
            "A. og\u00f3lne informacje o zdarzeniach systemowych",
            "B. dane dotycz\u0105ce uwierzytelniania",
            "C. komunikaty zwi\u0105zane z inicjacj\u0105 systemu",
            "D. kody b\u0142\u0119d\u00f3w systemowych"
        ],
        "goodAnswer": "A. og\u00f3lne informacje o zdarzeniach systemowych"
    },
    {
        "id": 2079,
        "question": "Monitoruj\u0105c ruch sieciowy, wykryto, \u017ce na adres serwera wykonano tysi\u0105ce zapyta\u0144 DNS na sekund\u0119 z r\u00f3\u017cnych adres\u00f3w IP, co spowodowa\u0142o zawieszenie systemu operacyjnego. Przyczyn\u0105 tego by\u0142 atak typu",
        "imageLoc": "",
        "answers": [
            "A. Mail Bombing",
            "B. DDoS (Distributed Denial of Service)",
            "C. Flooding",
            "D. DNS snooping"
        ],
        "goodAnswer": "B. DDoS (Distributed Denial of Service)"
    },
    {
        "id": 2080,
        "question": "Kt\u00f3ry z symboli oznacza prze\u0142\u0105cznik?",
        "imageLoc": require("../assets/img/1530.png"),
        "answers": [
            "A. A",
            "B. B",
            "C. C",
            "D. D"
        ],
        "goodAnswer": "D. D"
    },
    {
        "id": 2081,
        "question": "Najefektywniejszym zabezpieczeniem danych firmy, kt\u00f3rej siedziby znajduj\u0105 si\u0119 w r\u00f3\u017cnych, odleg\u0142ych od siebie lokalizacjach, jest zastosowanie",
        "imageLoc": "",
        "answers": [
            "A. backupu w chmurze firmowej.",
            "B. kopii przyrostowych.",
            "C. kompresji strategicznych danych.",
            "D. kopii analogowych."
        ],
        "goodAnswer": "A. backupu w chmurze firmowej."
    },
    {
        "id": 2082,
        "question": "Administrator zauwa\u017cy\u0142, \u017ce w sieci LAN wyst\u0119puje du\u017ca liczba kolizji. Kt\u00f3re urz\u0105dzenie powinien zainstalowa\u0107, aby podzieli\u0107 sie\u0107 lokaln\u0105 na mniejszy domeny kolizji?",
        "imageLoc": "",
        "answers": [
            "A. Prze\u0142\u0105cznik",
            "B. Router",
            "C. Modem",
            "D. Koncentrator"
        ],
        "goodAnswer": "A. Prze\u0142\u0105cznik"
    },
    {
        "id": 2083,
        "question": "Kt\u00f3ry port jest wykorzystywany przez protok\u00f3\u0142 FTP (File transfer Protocol)",
        "imageLoc": "",
        "answers": [
            "A. 20",
            "B. 25",
            "C. 53",
            "D. 69"
        ],
        "goodAnswer": "A. 20"
    },
    {
        "id": 2084,
        "question": "Sie\u0107 o adresie IP 192.168.2.0/24 podzielono na cztery podsieci. Jak\u0105 mask\u0119 posiadaj\u0105 nowe podsieci?",
        "imageLoc": "",
        "answers": [
            "A. 225.225.225.240",
            "B. 255.255.255.224",
            "C. 255.255.255.128",
            "D. 255.255.255.192"
        ],
        "goodAnswer": "D. 255.255.255.192"
    },
    {
        "id": 2085,
        "question": "Jak jest nazywana transmisja dwukierunkowa w sieci Ethernet?",
        "imageLoc": "",
        "answers": [
            "A. Simplex",
            "B. Full duplex",
            "C. Duosimplex",
            "D. Half duplex"
        ],
        "goodAnswer": "B. Full duplex"
    },
    {
        "id": 2086,
        "question": "Wska\u017c z\u0142\u0105cze, kt\u00f3re NIE wyst\u0119puje w zasilaczach ATX",
        "imageLoc": "",
        "answers": [
            "A. PCI-E",
            "B. MPC",
            "C. SATA Connector",
            "D. DE-15/HD-15"
        ],
        "goodAnswer": "D. DE-15/HD-15"
    },
    {
        "id": 2087,
        "question": "Aby zapobiec wy\u0142adowaniom elektrostatycznym podczas wymiany podzespo\u0142\u00f3w komputerowych, technik powinien zastosowa\u0107",
        "imageLoc": "",
        "answers": [
            "A. okulary ochronne",
            "B. odzie\u017c poliestrow\u0105",
            "C. mat\u0119 i opask\u0119 antystatyczn\u0105",
            "D. r\u0119kawice gumowe"
        ],
        "goodAnswer": "C. mat\u0119 i opask\u0119 antystatyczn\u0105"
    },
    {
        "id": 2088,
        "question": "Urz\u0105dzeniem stosowanym do po\u0142\u0105czenia 6 komputer\u00f3w w sie\u0107 lokaln\u0105 jest:",
        "imageLoc": "",
        "answers": [
            "A. transceiver",
            "B. most",
            "C. prze\u0142\u0105cznik",
            "D. serwer"
        ],
        "goodAnswer": "C. prze\u0142\u0105cznik"
    },
    {
        "id": 2089,
        "question": "Bezp\u0142atnym programem antywirusowym dostarczanym przez Microsoft dla u\u017cytkownik\u00f3w legalnych wersji systemu operacyjnego Windows jest",
        "imageLoc": "",
        "answers": [
            "A. Windows Defender",
            "B. Microsoft Security Essentials",
            "C. Microsoft Free Antywirus",
            "D. Windows Antywirus"
        ],
        "goodAnswer": "B. Microsoft Security Essentials"
    },
    {
        "id": 2090,
        "question": "Informacje przedstawione na wydruku zosta\u0142y wy\u015bwietlone w wyniku wywo\u0142ania",
        "imageLoc": require("../assets/img/2124.png"),
        "answers": [
            "A. route change",
            "B. traceroute \u2013src",
            "C. netstat -r",
            "D. ipconfig /all"
        ],
        "goodAnswer": "C. netstat -r"
    },
    {
        "id": 2091,
        "question": "Skr\u00f3t WAN oznacza",
        "imageLoc": "",
        "answers": [
            "A. lokaln\u0105 sie\u0107 komputerow\u0105",
            "B. prywatn\u0105 sie\u0107 komputerow\u0105",
            "C. miejsk\u0105 sie\u0107 komputerow\u0105",
            "D. rozleg\u0142\u0105 sie\u0107 komputerow\u0105"
        ],
        "goodAnswer": "D. rozleg\u0142\u0105 sie\u0107 komputerow\u0105"
    },
    {
        "id": 2092,
        "question": "Aby wy\u015bwietli\u0107 przedstawion\u0105 informacj\u0119 o systemie Linux w terminalu, nale\u017cy u\u017cy\u0107 polecenia",
        "imageLoc": require("../assets/img/904.png"),
        "answers": [
            "A. factor 22",
            "B. uptime",
            "C. uname -a",
            "D. hostname"
        ],
        "goodAnswer": "C. uname -a"
    },
    {
        "id": 2093,
        "question": "Jakiego programu wbudowanego w system Windows 8 Pro mo\u017cna u\u017cy\u0107, aby zaszyfrowa\u0107 dane?",
        "imageLoc": "",
        "answers": [
            "A. BitLocker",
            "B. AppLocker",
            "C. WinLocker",
            "D. OneLocker"
        ],
        "goodAnswer": "A. BitLocker"
    },
    {
        "id": 2094,
        "question": "Do aktualizacji system\u00f3w Linux mo\u017cna wykorzysta\u0107 programy",
        "imageLoc": "",
        "answers": [
            "A. apt-get i zypper",
            "B. cron i mount",
            "C. defrag i YaST",
            "D. aptitude i amarok"
        ],
        "goodAnswer": "A. apt-get i zypper"
    },
    {
        "id": 2095,
        "question": "Kt\u00f3r\u0105 us\u0142ug\u0119 nale\u017cy zainstalowa\u0107 na serwerze Linux, aby korzysta\u0107 z bezpiecznego zdalnego dost\u0119pu?",
        "imageLoc": "",
        "answers": [
            "A. tftp",
            "B. ssh",
            "C. rlogin",
            "D. telnet"
        ],
        "goodAnswer": "B. ssh"
    },
    {
        "id": 2096,
        "question": "Przedstawiona na rysunku usterka, widoczna na ekranie komputera, nie mo\u017ce by\u0107 spowodowana przez",
        "imageLoc": require("../assets/img/733.png"),
        "answers": [
            "A. uszkodzenie modu\u0142\u00f3w pami\u0119ci operacyjnej",
            "B. z\u0142e napi\u0119cia podawane przez zasilacz",
            "C. przegrzewanie si\u0119 karty graficznej",
            "D. spalenie rdzenia lub pami\u0119ci karty graficznej po overclockingu"
        ],
        "goodAnswer": "A. uszkodzenie modu\u0142\u00f3w pami\u0119ci operacyjnej"
    },
    {
        "id": 2097,
        "question": "Rozpowszechniona forma oprogramowania zgodna z zasad\u0105 \"najpierw wypr\u00f3buj, a potem kup\", to",
        "imageLoc": "",
        "answers": [
            "A. OEM",
            "B. Software",
            "C. Freeware",
            "D. Shareware"
        ],
        "goodAnswer": "D. Shareware"
    },
    {
        "id": 2098,
        "question": "Jaka jest nominalna moc wyj\u015bciowa (ci\u0105g\u0142a) zasilacza o parametrach zapisanych w tabeli?",
        "imageLoc": require("../assets/img/327.png"),
        "answers": [
            "A. 576,0 W",
            "B. 456,0 W",
            "C. 336,0 W",
            "D. 472,1 W"
        ],
        "goodAnswer": "D. 472,1 W"
    },
    {
        "id": 2099,
        "question": "Symbolem literowym P oznacza si\u0119",
        "imageLoc": "",
        "answers": [
            "A. rezystancj\u0119.",
            "B. cz\u0119stotliwo\u015b\u0107.",
            "C. indukcyjno\u015b\u0107.",
            "D. moc."
        ],
        "goodAnswer": "D. moc."
    },
    {
        "id": 2100,
        "question": "Zgodnie z zamieszczonym cennikiem, \u015bredni koszt wyposa\u017cenia stanowiska komputerowego wynosi:",
        "imageLoc": require("../assets/img/207.png"),
        "answers": [
            "A. 5000,50 z\u0142",
            "B. 4350,00 z\u0142",
            "C. 2000,00 z\u0142",
            "D. 6700,00 z\u0142"
        ],
        "goodAnswer": "B. 4350,00 z\u0142"
    },
    {
        "id": 2101,
        "question": "W kt\u00f3rej fizycznej topologii sieci komputerowej ka\u017cdy w\u0119ze\u0142 sieci ma fizyczne po\u0142\u0105czenie z ka\u017cdym innym w\u0119z\u0142em sieci?",
        "imageLoc": "",
        "answers": [
            "A. Pe\u0142nej siatki",
            "B. Cz\u0119\u015bciowej siatki",
            "C. Rozszerzonej gwiazdy",
            "D. Podw\u00f3jnego pier\u015bcienia"
        ],
        "goodAnswer": "A. Pe\u0142nej siatki"
    },
    {
        "id": 2102,
        "question": "W systemie Linux has\u0142a u\u017cytkownik\u00f3w s\u0105 przechowywane w pliku:",
        "imageLoc": "",
        "answers": [
            "A. groups",
            "B. users",
            "C. password",
            "D. passwd"
        ],
        "goodAnswer": "D. passwd"
    },
    {
        "id": 2103,
        "question": "Metoda dost\u0119pu do medium CSMA/CA jest stosowana w sieci o standardzie",
        "imageLoc": "",
        "answers": [
            "A. IEEE 802.3",
            "B. IEEE 802.8",
            "C. IEEE 802.11",
            "D. IEEE 802.1"
        ],
        "goodAnswer": "C. IEEE 802.11"
    },
    {
        "id": 2104,
        "question": "Do sprawdzenia przedstawionej konfiguracji interfejs\u00f3w sieciowych w systemie Linux u\u017cyto polecenia",
        "imageLoc": require("../assets/img/2099.png"),
        "answers": [
            "A. ip addr down",
            "B. ip route",
            "C. ifconfig",
            "D. ping"
        ],
        "goodAnswer": "C. ifconfig"
    },
    {
        "id": 2105,
        "question": "Do przedstawionej na rysunku p\u0142yty g\u0142\u00f3wnej nie mo\u017cna pod\u0142\u0105czy\u0107 urz\u0105dzenia wykorzystuj\u0105cego z\u0142\u0105cze",
        "imageLoc": require("../assets/img/12.png"),
        "answers": [
            "A. PCI",
            "B. AGP",
            "C. SATA",
            "D. IDE"
        ],
        "goodAnswer": "B. AGP"
    },
    {
        "id": 2106,
        "question": "Pe\u0142ny adres logowania do serwera FTP o nazwie ftp.nazwa.pl to",
        "imageLoc": "",
        "answers": [
            "A. http:ftp.nazwa.pl/",
            "B. ftp:ftp.nazwa.pl/",
            "C. ftp://ftp.nazwa.pl/",
            "D. http://ftp.nazwa.pl/"
        ],
        "goodAnswer": "C. ftp://ftp.nazwa.pl/"
    },
    {
        "id": 2107,
        "question": "Do przetestowania dzia\u0142ania serwera DNS w systemach Windows Server mo\u017cna u\u017cy\u0107 narz\u0119dzia nslookup. Je\u017celi jako argument polecenia u\u017cyje si\u0119 nazwy komputera, np. nslookup host.domena.com, to nast\u0105pi sprawdzenie",
        "imageLoc": "",
        "answers": [
            "A. aliasu wprowadzonego dla rekordu adresu domeny",
            "B. strefy przeszukiwania wstecz",
            "C. strefy przeszukiwania do przodu",
            "D. obu stref przeszukiwania, najpierw wstecz a nast\u0119pnie do przodu"
        ],
        "goodAnswer": "C. strefy przeszukiwania do przodu"
    },
    {
        "id": 2108,
        "question": "Odnalezienie g\u0142\u00f3wnego rekordu rozruchowego, wczytuj\u0105cego system z aktywnej partycji umo\u017cliwia",
        "imageLoc": "",
        "answers": [
            "A. CDDL",
            "B. POST",
            "C. BootstrapLoader",
            "D. GUID Partition Table"
        ],
        "goodAnswer": "C. BootstrapLoader"
    },
    {
        "id": 2109,
        "question": "Udost\u0119pnienie linuksowych us\u0142ug drukowania oraz serwera plik\u00f3w stacjom roboczym Windows, OS X, Linux umo\u017cliwia serwer",
        "imageLoc": "",
        "answers": [
            "A. POSTFIX",
            "B. APACHE",
            "C. SAMBA",
            "D. SQUID"
        ],
        "goodAnswer": "C. SAMBA"
    },
    {
        "id": 2110,
        "question": "Kt\u00f3rego narz\u0119dzia trzeba u\u017cy\u0107 do zarobienia ko\u0144c\u00f3wek kabla UTP w module keystone ze stykami typu 110?",
        "imageLoc": "",
        "answers": [
            "A. Wkr\u0119taka krzy\u017cakowego",
            "B. Zaciskarki do wtyk\u00f3w RJ45",
            "C. Wkr\u0119taka p\u0142askiego",
            "D. Narz\u0119dzia uderzeniowego"
        ],
        "goodAnswer": "D. Narz\u0119dzia uderzeniowego"
    },
    {
        "id": 2111,
        "question": "Aby zwolni\u0107 miejsce na dysku bez utraty danych, nale\u017cy wykona\u0107",
        "imageLoc": "",
        "answers": [
            "A. backup dysku",
            "B. sprawdzanie dysku",
            "C. oczyszczanie dysku",
            "D. defragmentacj\u0119 dysku"
        ],
        "goodAnswer": "C. oczyszczanie dysku"
    },
    {
        "id": 2112,
        "question": "Ile bit\u00f3w nale\u017cy wyodr\u0119bni\u0107 z cz\u0119\u015bci hosta, aby z sieci o adresie IPv4 170.16.0.0/16 wydzieli\u0107 24 podsieci?",
        "imageLoc": "",
        "answers": [
            "A. 4 bity",
            "B. 5 bit\u00f3w",
            "C. 3 bity",
            "D. 6 bit\u00f3w"
        ],
        "goodAnswer": "B. 5 bit\u00f3w"
    },
    {
        "id": 2113,
        "question": "Kt\u00f3ry tryb pracy Access Pointa jest stosowany dla zapewnienia urz\u0105dzeniom bezprzewodowym dost\u0119pu do przewodowej sieci LAN?",
        "imageLoc": "",
        "answers": [
            "A. Most bezprzewodowy",
            "B. Tryb klienta",
            "C. Repeater",
            "D. Punkt dost\u0119powy"
        ],
        "goodAnswer": "D. Punkt dost\u0119powy"
    },
    {
        "id": 2114,
        "question": "Do pod\u0142\u0105czenia projektora multimedialnego do komputera, NIE mo\u017cna u\u017cy\u0107 z\u0142\u0105cza",
        "imageLoc": "",
        "answers": [
            "A. HDMI",
            "B. SATA",
            "C. D-SUB",
            "D. USB"
        ],
        "goodAnswer": "B. SATA"
    },
    {
        "id": 2115,
        "question": "Kt\u00f3ry protok\u00f3\u0142 jest wykorzystywany do przesy\u0142ania plik\u00f3w bez nawi\u0105zania po\u0142\u0105czenia?",
        "imageLoc": "",
        "answers": [
            "A. DNS (Domain Name System)",
            "B. FTP (File Transfer Protocol)",
            "C. HTTP (Hyper Text Transfer Protocol)",
            "D. TFTP (Trivial File Transfer Protocol)"
        ],
        "goodAnswer": "D. TFTP (Trivial File Transfer Protocol)"
    },
    {
        "id": 2116,
        "question": "Zapis na dyskach BD-R odbywa si\u0119 za pomoc\u0105",
        "imageLoc": "",
        "answers": [
            "A. lasera czerwonego",
            "B. lasera niebieskiego",
            "C. g\u0142owicy magnetycznej",
            "D. \u015bwiat\u0142a UV"
        ],
        "goodAnswer": "B. lasera niebieskiego"
    },
    {
        "id": 2117,
        "question": "Standard podstawki procesora bez n\u00f3\u017cek to",
        "imageLoc": "",
        "answers": [
            "A. SPGA",
            "B. PGA",
            "C. LGA",
            "D. CPGA"
        ],
        "goodAnswer": "C. LGA"
    },
    {
        "id": 2118,
        "question": "Kt\u00f3re szyfrowanie stosowane w sieciach bezprzewodowych, jest najmniej odporne na \u0142amanie hase\u0142?",
        "imageLoc": "",
        "answers": [
            "A. WEP",
            "B. WPA AES",
            "C. WPA2",
            "D. WPA TKIP"
        ],
        "goodAnswer": "A. WEP"
    },
    {
        "id": 2119,
        "question": "Toner jest materia\u0142em eksploatacyjnym drukarki",
        "imageLoc": "",
        "answers": [
            "A. atramentowej",
            "B. sublimacyjnej",
            "C. laserowej",
            "D. ig\u0142owej"
        ],
        "goodAnswer": "C. laserowej"
    },
    {
        "id": 2120,
        "question": "Wska\u017c znak umieszczany na urz\u0105dzeniach elektrycznych przeznaczonych do obrotu i sprzeda\u017cy w Unii Europejskiej.",
        "imageLoc": require("../assets/img/905.png"),
        "answers": [
            "A. A",
            "B. B",
            "C. C",
            "D. D"
        ],
        "goodAnswer": "B. B"
    },
    {
        "id": 2121,
        "question": "Procesory CISC charakteryzuj\u0105 si\u0119",
        "imageLoc": "",
        "answers": [
            "A. ograniczan\u0105 komunikacj\u0105 pomi\u0119dzy pami\u0119ci\u0105 a procesorem",
            "B. du\u017c\u0105 liczb\u0105 rozkaz\u00f3w",
            "C. prost\u0105 i szybk\u0105 jednostk\u0105 steruj\u0105c\u0105",
            "D. niewielk\u0105 liczb\u0105 tryb\u00f3w adresowania"
        ],
        "goodAnswer": "B. du\u017c\u0105 liczb\u0105 rozkaz\u00f3w"
    },
    {
        "id": 2122,
        "question": "Aby w systemie Windows wyczy\u015bci\u0107 bufor nazw domenowych, nale\u017cy zastosowa\u0107 polecenie",
        "imageLoc": "",
        "answers": [
            "A. ipconfig /release",
            "B. ipconfig /renew",
            "C. ipconfig /flushdns",
            "D. ipconfig /setclassid"
        ],
        "goodAnswer": "C. ipconfig /flushdns"
    },
    {
        "id": 2123,
        "question": "Kt\u00f3ry procesor nale\u017cy wykorzysta\u0107 podczas monta\u017cu komputera osobistego na bazie p\u0142yty g\u0142\u00f3wnej Asus M5A78L-M/USB3 AMD760G socket AM3+",
        "imageLoc": "",
        "answers": [
            "A. AMD FX 8300 3300MHz AM3+ OEM",
            "B. AMD APU A8 7650K 3300MHz FM2+ BOX",
            "C. AMD A8-7600 S.FM2 BOX",
            "D. AMD APU A4 6320 3800MHz FM2"
        ],
        "goodAnswer": "A. AMD FX 8300 3300MHz AM3+ OEM"
    },
    {
        "id": 2124,
        "question": "W dokumentacji technicznej procesora umieszczonego na p\u0142ycie g\u0142\u00f3wnej komputera szybko\u015b\u0107 zegara podaje si\u0119 w",
        "imageLoc": "",
        "answers": [
            "A. GHz",
            "B. kHz",
            "C. GHz/s",
            "D. s"
        ],
        "goodAnswer": "A. GHz"
    },
    {
        "id": 2125,
        "question": "W adresacji IPv6 adres ff00::/8 okre\u015bla",
        "imageLoc": "",
        "answers": [
            "A. adres nieokre\u015blony.",
            "B. adres wskazuj\u0105cy na lokalnego host",
            "C. pul\u0119 adres\u00f3w u\u017cywanych do komunikacji multicast.",
            "D. pul\u0119 adres\u00f3w testowej sieci 6bone."
        ],
        "goodAnswer": "C. pul\u0119 adres\u00f3w u\u017cywanych do komunikacji multicast."
    },
    {
        "id": 2126,
        "question": "Kt\u00f3ry skr\u00f3t okre\u015bla typ licencji Microsoft przeznaczonej dla szk\u00f3\u0142, uczelni wy\u017cszych, instytucji rz\u0105dowych oraz du\u017cych przedsi\u0119biorstw?",
        "imageLoc": "",
        "answers": [
            "A. BOX",
            "B. VLSC",
            "C. OEM",
            "D. MOLP"
        ],
        "goodAnswer": "D. MOLP"
    },
    {
        "id": 2127,
        "question": "Liczbie 16 bitowej 0011110010101110 zapisanej w systemie dw\u00f3jkowym odpowiada w systemie szesnastkowym liczba",
        "imageLoc": "",
        "answers": [
            "A. 3CAE",
            "B. 3DFE",
            "C. 3CBE",
            "D. 3DAE"
        ],
        "goodAnswer": "A. 3CAE"
    },
    {
        "id": 2128,
        "question": "Wska\u017c nale\u017cno\u015b\u0107 brutto za wykonanie wymienionych w tabeli czynno\u015bci serwisowych, je\u015bli koszt jednej roboczogodziny wynosi 120,00 z\u0142 netto, a stawka podatku VAT wynosi 23%.",
        "imageLoc": require("../assets/img/620.png"),
        "answers": [
            "A. 231,00 z\u0142",
            "B. 480,00 z\u0142",
            "C. 369,00 z\u0142",
            "D. 300,00 z\u0142"
        ],
        "goodAnswer": "C. 369,00 z\u0142"
    },
    {
        "id": 2129,
        "question": "Asynchronicznym interfejsem szeregowym zgodnym ze standardem RS-232 jest port",
        "imageLoc": "",
        "answers": [
            "A. COM",
            "B. ECP",
            "C. LPT",
            "D. EPP"
        ],
        "goodAnswer": "A. COM"
    },
    {
        "id": 2130,
        "question": "Kt\u00f3ry z adres\u00f3w IP ma przypisan\u0105 mask\u0119 w postaci pe\u0142nej, wynikaj\u0105c\u0105 z klasy adresu?",
        "imageLoc": "",
        "answers": [
            "A. 180.12.56.1, 255.255.0.0",
            "B. 169.12.19.6, 255.255.255.0",
            "C. 140.16.5.18, 255.255.255.0",
            "D. 118.202.15.6, 255.255.0.0"
        ],
        "goodAnswer": "A. 180.12.56.1, 255.255.0.0"
    },
    {
        "id": 2131,
        "question": "Wska\u017c technologi\u0119 wykorzystywan\u0105 do udost\u0119pniania Internetu wraz z us\u0142ug\u0105 telewizji kablowej, w kt\u00f3rej jako medium transmisyjne jest wykorzystywany \u015bwiat\u0142ow\u00f3d oraz kabel koncentryczny",
        "imageLoc": "",
        "answers": [
            "A. HFC",
            "B. PLC",
            "C. GPRS",
            "D. xDSL"
        ],
        "goodAnswer": "A. HFC"
    },
    {
        "id": 2132,
        "question": "Niekt\u00f3re systemy operacyjne s\u0105 wielodost\u0119pne (multiuser). Systemy takie",
        "imageLoc": "",
        "answers": [
            "A. stosowane s\u0105 g\u0142\u00f3wnie w przemy\u015ble i systemach sterowania",
            "B. r\u00f3wnocze\u015bnie wykonuj\u0105 wiele program\u00f3w (zada\u0144)",
            "C. opr\u00f3cz wielozadaniowo\u015bci z wyw\u0142aszczeniem realizuj\u0105 funkcj\u0119 przydzielania czasu u\u017cytkownikom",
            "D. steruj\u0105 uk\u0142adem (klasterem) niezale\u017cnych komputer\u00f3w"
        ],
        "goodAnswer": "C. opr\u00f3cz wielozadaniowo\u015bci z wyw\u0142aszczeniem realizuj\u0105 funkcj\u0119 przydzielania czasu u\u017cytkownikom"
    },
    {
        "id": 2133,
        "question": "Kt\u00f3re cyfry nale\u017cy wprowadzi\u0107 na klawiaturze telefonu pod\u0142\u0105czonego do bramki VoIP po uprzednim wpisaniu *** by wprowadzi\u0107 adres bramy domy\u015blnej sieci?",
        "imageLoc": require("../assets/img/1434.png"),
        "answers": [
            "A. 03",
            "B. 04",
            "C. 02",
            "D. 01"
        ],
        "goodAnswer": "B. 04"
    },
    {
        "id": 2134,
        "question": "Aby umo\u017cliwi\u0107 wymian\u0119 danych pomi\u0119dzy dwoma r\u00f3\u017cnymi sieciami nale\u017cy zastosowa\u0107",
        "imageLoc": "",
        "answers": [
            "A. router",
            "B. prze\u0142\u0105cznik",
            "C. most",
            "D. koncentrator"
        ],
        "goodAnswer": "A. router"
    },
    {
        "id": 2135,
        "question": "System S.M.A.R.T. s\u0142u\u017cy do monitorowania pracy i wykrywania b\u0142\u0119d\u00f3w",
        "imageLoc": "",
        "answers": [
            "A. nap\u0119d\u00f3w p\u0142yt CD/DVD",
            "B. kart rozszerze\u0144",
            "C. dysk\u00f3w twardych",
            "D. p\u0142yty g\u0142\u00f3wnej"
        ],
        "goodAnswer": "C. dysk\u00f3w twardych"
    },
    {
        "id": 2136,
        "question": "Serwer DNS jest serwerem",
        "imageLoc": "",
        "answers": [
            "A. zdalnego i szyfrowanego dost\u0119pu",
            "B. us\u0142ug terminalowych",
            "C. dynamicznie przydzielaj\u0105cym adresy IP",
            "D. dzi\u0119ki kt\u00f3remu nazwy mnemoniczne (opisowe) mog\u0105 zosta\u0107 zamienione na odpowiadaj\u0105ce im adresy IP"
        ],
        "goodAnswer": "D. dzi\u0119ki kt\u00f3remu nazwy mnemoniczne (opisowe) mog\u0105 zosta\u0107 zamienione na odpowiadaj\u0105ce im adresy IP"
    },
    {
        "id": 2137,
        "question": "Je\u017celi oczekuje si\u0119, aby tylko wybrane urz\u0105dzenia mog\u0142y \u0142\u0105czy\u0107 si\u0119 z sieci\u0105 WiFi, nale\u017cy w punkcie dost\u0119powym",
        "imageLoc": "",
        "answers": [
            "A. zmieni\u0107 has\u0142o",
            "B. zmieni\u0107 spos\u00f3b szyfrowania z WEP na WPA",
            "C. zmieni\u0107 kana\u0142 radiowy",
            "D. skonfigurowa\u0107 filtrowanie adres\u00f3w MAC"
        ],
        "goodAnswer": "D. skonfigurowa\u0107 filtrowanie adres\u00f3w MAC"
    },
    {
        "id": 2138,
        "question": "W systemie Windows, zainstalowanym w wersji obs\u0142uguj\u0105cej przydzia\u0142y dyskowe, u\u017cytkownik o nazwie Go\u015b\u0107",
        "imageLoc": "",
        "answers": [
            "A. nie mo\u017ce nale\u017ce\u0107 do \u017cadnej grupy",
            "B. mo\u017ce nale\u017ce\u0107 tylko do grupy o nazwie Go\u015bcie",
            "C. mo\u017ce nale\u017ce\u0107 do grup lokalnych i do grup globalnych",
            "D. mo\u017ce nale\u017ce\u0107 tylko do grupy globalnej"
        ],
        "goodAnswer": "C. mo\u017ce nale\u017ce\u0107 do grup lokalnych i do grup globalnych"
    },
    {
        "id": 2139,
        "question": "Zalecana wielko\u015b\u0107 pami\u0119ci RAM dla systemu operacyjnego Windows Server 2008 to co najmniej",
        "imageLoc": "",
        "answers": [
            "A. 2 GB",
            "B. 1,5 GB",
            "C. 512 MB",
            "D. 1 GB"
        ],
        "goodAnswer": "A. 2 GB"
    },
    {
        "id": 2140,
        "question": "Co nie powinno by\u0107 miejscem przechowywania kopii bezpiecze\u0144stwa danych znajduj\u0105cych si\u0119 na dysku twardym komputera?",
        "imageLoc": "",
        "answers": [
            "A. P\u0142yta CD/DVD",
            "B. Inna partycja dysku tego komputera",
            "C. Dysk zewn\u0119trzny",
            "D. Pami\u0119\u0107 USB"
        ],
        "goodAnswer": "B. Inna partycja dysku tego komputera"
    },
    {
        "id": 2141,
        "question": "Przynale\u017cno\u015b\u0107 komputera do konkretnej sieci wirtualnej NIE mo\u017ce by\u0107 okre\u015blona na podstawie",
        "imageLoc": "",
        "answers": [
            "A. numer portu prze\u0142\u0105cznika",
            "B. adresu MAC karty sieciowej komputera",
            "C. nazwy komputera w sieci lokalnej",
            "D. znacznika ramki Ethernet 802.1Q"
        ],
        "goodAnswer": "C. nazwy komputera w sieci lokalnej"
    },
    {
        "id": 2142,
        "question": "Kt\u00f3ry interfejs pozwala przesy\u0142a\u0107 dane w postaci cyfrowej i analogowej pomi\u0119dzy komputerem a monitorem?",
        "imageLoc": "",
        "answers": [
            "A. HDMI",
            "B. DVI-I",
            "C. DFP",
            "D. DISPLAY PORT"
        ],
        "goodAnswer": "B. DVI-I"
    },
    {
        "id": 2143,
        "question": "Liczba 356 zapisana w systemie dw\u00f3jkowym to",
        "imageLoc": "",
        "answers": [
            "A. 101100100",
            "B. 110011000",
            "C. 100001100",
            "D. 110011010"
        ],
        "goodAnswer": "A. 101100100"
    },
    {
        "id": 2144,
        "question": "W systemie Windows Professional do konfiguracji czasu dost\u0119pno\u015bci drukarki nale\u017cy wykorzysta\u0107 zak\u0142adk\u0119",
        "imageLoc": "",
        "answers": [
            "A. Zabezpieczenia we W\u0142a\u015bciwo\u015bciach drukarki.",
            "B. Konfiguracja w Preferencjach drukowania.",
            "C. Ustawienia w Preferencjach drukowania.",
            "D. Zaawansowane we W\u0142a\u015bciwo\u015bciach drukarki."
        ],
        "goodAnswer": "D. Zaawansowane we W\u0142a\u015bciwo\u015bciach drukarki."
    },
    {
        "id": 2145,
        "question": "Kt\u00f3ry rodzaj medium transmisyjnego jest okre\u015blany jako standard 100BaseTX i jaka jest uzyskiwana w nim maksymalna pr\u0119dko\u015b\u0107 transmisji danych?",
        "imageLoc": "",
        "answers": [
            "A. \u015awiat\u0142ow\u00f3d wielomodowy o pr\u0119dko\u015bci transmisji do 100 Mb/s",
            "B. Kabel UTP kategorii 5 o pr\u0119dko\u015bci transmisji do 100 Mb/s",
            "C. Kabel UTP kategorii 5e o pr\u0119dko\u015bci transmisji do 1000 Mb/s",
            "D. \u015awiat\u0142ow\u00f3d jednomodowy o pr\u0119dko\u015bci transmisji do 1000 Mb/s"
        ],
        "goodAnswer": "B. Kabel UTP kategorii 5 o pr\u0119dko\u015bci transmisji do 100 Mb/s"
    },
    {
        "id": 2146,
        "question": "Zbi\u00f3r us\u0142ug internetowych dla system\u00f3w rodziny Microsoft Windows jest oznaczony skr\u00f3tem",
        "imageLoc": "",
        "answers": [
            "A. HTTP",
            "B. HTTPS",
            "C. IIS",
            "D. FTPS"
        ],
        "goodAnswer": "C. IIS"
    },
    {
        "id": 2147,
        "question": "Wska\u017c adres sieci, do kt\u00f3rej nale\u017cy host o adresie 172.16.0.123/27",
        "imageLoc": "",
        "answers": [
            "A. 172.16.0.112",
            "B. 172.16.0.224",
            "C. 172.16.0.96",
            "D. 172.16.0.16"
        ],
        "goodAnswer": "C. 172.16.0.96"
    }
]

export default Questions