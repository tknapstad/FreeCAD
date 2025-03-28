<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE TS>
<TS version="2.1" language="pl" sourcelanguage="en">
  <context>
    <name>AttachmentEditor</name>
    <message>
      <location filename="Commands.py" line="79"/>
      <source>Attachment...</source>
      <translation>Dołączenie ...</translation>
    </message>
    <message>
      <location filename="Commands.py" line="83"/>
      <source>Edit attachment of selected object.</source>
      <translation>Edytuj załącznik wybranego obiektu.</translation>
    </message>
  </context>
  <context>
    <name>Part_CompoundFilter</name>
    <message>
      <location filename="_CommandCompoundFilter.py" line="57"/>
      <source>Compound Filter</source>
      <translation>Filtr złożeń</translation>
    </message>
    <message>
      <location filename="_CommandCompoundFilter.py" line="67"/>
      <source>Filter out objects from a selected compound by characteristics like volume,
area, or length, or by choosing specific items.
If a second object is selected, it will be used as reference, for example,
for collision or distance filtering.</source>
      <translation>Filtruj obiekty z wybranego kształtu złożonego, według kryteriów takich jak objętość, pole powierzchni
lub długość, lub wybierając określone elementy.
Jeśli zostanie wybrany drugi obiekt, będzie on używany jako punkt odniesienia, na przykład
do filtrowania według kolizji lub odległości.</translation>
    </message>
  </context>
  <context>
    <name>Part_ExplodeCompound</name>
    <message>
      <location filename="_CommandExplodeCompound.py" line="56"/>
      <source>Explode compound</source>
      <translation>Rozbij kształt złożony</translation>
    </message>
    <message>
      <location filename="_CommandExplodeCompound.py" line="62"/>
      <source>Split up a compound of shapes into separate objects.
It will create a 'Compound Filter' for each shape.</source>
      <translation>Rozdziel kształt złożony na osobne obiekty.
Stworzy to „Filtr kompozytowy” dla każdego kształtu.</translation>
    </message>
  </context>
  <context>
    <name>Part_JoinConnect</name>
    <message>
      <location filename="JoinFeatures.py" line="197"/>
      <source>Connect objects</source>
      <translation>Połącz obiekty</translation>
    </message>
    <message>
      <location filename="JoinFeatures.py" line="202"/>
      <source>Fuses objects, taking care to preserve voids.</source>
      <translation>Łączy obiekty, dbając o zachowanie pustych przestrzeni.</translation>
    </message>
  </context>
  <context>
    <name>Part_JoinCutout</name>
    <message>
      <location filename="JoinFeatures.py" line="388"/>
      <source>Cutout for object</source>
      <translation>Wycięcie dla obiektu</translation>
    </message>
    <message>
      <location filename="JoinFeatures.py" line="393"/>
      <source>Makes a cutout in one object to fit another object.</source>
      <translation>Tworzy wycięcie w jednym obiekcie, pasujące do innego obiektu.</translation>
    </message>
  </context>
  <context>
    <name>Part_JoinEmbed</name>
    <message>
      <location filename="JoinFeatures.py" line="293"/>
      <source>Embed object</source>
      <translation>Osadź obiekt</translation>
    </message>
    <message>
      <location filename="JoinFeatures.py" line="298"/>
      <source>Fuses one object into another, taking care to preserve voids.</source>
      <translation>Łączy jeden obiekt z drugim, dbając o zachowanie pustych przestrzeni.</translation>
    </message>
  </context>
  <context>
    <name>Part_SplitFeatures</name>
    <message>
      <location filename="SplitFeatures.py" line="188"/>
      <source>Boolean fragments</source>
      <translation>Fragmentacja funkcją logiczną</translation>
    </message>
    <message>
      <location filename="SplitFeatures.py" line="197"/>
      <source>Create a 'Boolean Fragments' object from two or more selected objects,
or from the shapes inside a compound.
This is a boolean union which is then sliced at the intersections
of the original shapes.
A 'Compound Filter' can be used to extract the individual slices.</source>
      <translation>Utwórz obiekt "Fragmenty logiczne" z dwóch lub więcej wybranych obiektów,
lub z kształtów wewnątrz związku.
To jest połączenie logiczne, które jest następnie dzielone w miejscach przecięcia
oryginalnych kształtów.
„Filtr złożenia” może być użyty do wydobycia pojedynczych fragmentów.</translation>
    </message>
    <message>
      <location filename="SplitFeatures.py" line="347"/>
      <source>Slice to compound</source>
      <translation>Krojenie na kształty złożone</translation>
    </message>
    <message>
      <location filename="SplitFeatures.py" line="354"/>
      <source>Slice a selected object by using other objects as cutting tools.
The resulting pieces will be stored in a compound.
A 'Compound Filter' can be used to extract the individual slices.</source>
      <translation>Pokrój zaznaczony obiekt, używając innych obiektów jako narzędzi tnących.
Powstałe w ten sposób elementy będą umieszczone w złożeniu.
Do wyodrębnienia poszczególnych wycinków można użyć "filtra złożeń".</translation>
    </message>
    <message>
      <location filename="SplitFeatures.py" line="379"/>
      <source>Slice apart</source>
      <translation>Pokrój część</translation>
    </message>
    <message>
      <location filename="SplitFeatures.py" line="385"/>
      <source>Slice a selected object by other objects, and split it apart.
It will create a 'Compound Filter' for each slice.</source>
      <translation>Pokrój wybrany obiekt za pomocą innych obiektów i podziel go na części.
Dla każdego wycinka zostanie utworzony "Filtr złożeń".</translation>
    </message>
    <message>
      <location filename="SplitFeatures.py" line="529"/>
      <source>Boolean XOR</source>
      <translation>Logiczny XOR</translation>
    </message>
    <message>
      <location filename="SplitFeatures.py" line="537"/>
      <source>Perform an 'exclusive OR' boolean operation with two or more selected objects,
or with the shapes inside a compound.
This means the overlapping volumes of the shapes will be removed.
A 'Compound Filter' can be used to extract the remaining pieces.</source>
      <translation>Wykonuje operację logiczną 'wyłączne LUB' na dwóch lub więcej wybranych obiektach,
lub z kształtami wewnątrz bryły złożonej.
Oznacza to, że nakładające się objętości kształtów zostaną usunięte.
Do wyodrębnienia pozostałych elementów można użyć 'Filtra złożeń'.</translation>
    </message>
  </context>
  <context>
    <name>Part_Tube</name>
    <message>
      <location filename="CommandShapes.py" line="44"/>
      <source>Create tube</source>
      <translation>Utwórz rurę</translation>
    </message>
    <message>
      <location filename="CommandShapes.py" line="50"/>
      <source>Creates a tube</source>
      <translation>Utwórz rurę</translation>
    </message>
  </context>
  <context>
    <name>QObject</name>
    <message>
      <location filename="CommandShapes.py" line="52"/>
      <source>Create tube</source>
      <translation>Utwórz rurę</translation>
    </message>
    <message>
      <location filename="../../ViewProvider.cpp" line="57"/>
      <location filename="../../ViewProviderPrimitive.cpp" line="66"/>
      <location filename="../../ViewProviderPrimitive.cpp" line="75"/>
      <source>Edit %1</source>
      <translation>Edytuj %1</translation>
    </message>
    <message>
      <location filename="../../AppPartGui.cpp" line="221"/>
      <location filename="../../AppPartGui.cpp" line="222"/>
      <location filename="../../AppPartGui.cpp" line="223"/>
      <source>Part design</source>
      <translation>Projekt części</translation>
    </message>
    <message>
      <location filename="../../AppPartGui.cpp" line="224"/>
      <location filename="../../AppPartGui.cpp" line="225"/>
      <source>Import-Export</source>
      <translation>Import-Eksport</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="286"/>
      <location filename="../../Command.cpp" line="381"/>
      <location filename="../../Command.cpp" line="481"/>
      <location filename="../../Command.cpp" line="900"/>
      <location filename="../../Command.cpp" line="957"/>
      <location filename="../../Command.cpp" line="2097"/>
      <source>Wrong selection</source>
      <translation>Niewłaściwy wybór</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="287"/>
      <location filename="../../Command.cpp" line="958"/>
      <source>Select two shapes please.</source>
      <translation>Proszę wybrać dwa kształty.</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="296"/>
      <location filename="../../Command.cpp" line="396"/>
      <location filename="../../Command.cpp" line="496"/>
      <source>Non-solids selected</source>
      <translation>Zaznaczone obiekty nie są bryłami</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="297"/>
      <location filename="../../Command.cpp" line="397"/>
      <location filename="../../Command.cpp" line="497"/>
      <source>The use of non-solids for boolean operations may lead to unexpected results.
Do you want to continue?</source>
      <translation>Użycie obiektów nie będących bryłami, do przeprowadzenia operacji logicznych, może doprowadzić do nieoczekiwanych rezultatów. Czy chcesz kontynuować?</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="382"/>
      <source>Select two shapes or more, please. Or, select one compound containing two or more shapes to compute common between.</source>
      <translation>Wybierz dwa lub więcej kształtów. Lub wybierz jedno złożenie z dwóch lub więcej kształtów, aby obliczyć ich część wspólną.</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="482"/>
      <source>Select two shapes or more, please. Or, select one compound containing two or more shapes to be fused.</source>
      <translation>Wybierz dwa lub więcej kształtów, proszę. Lub, wybierz jedno złożenie zawierające dwa lub więcej kształtów, które mają być połączone.</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="901"/>
      <source>Select one shape or more, please.</source>
      <translation>Proszę wybierać jeden lub więcej kształtów.</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="1113"/>
      <source>All CAD Files</source>
      <translation>Wszystkie pliki CAD</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="1118"/>
      <source>All Files</source>
      <translation>Wszystkie pliki</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="2098"/>
      <source>You have to select either two edges or two wires.</source>
      <translation>Należy wybrać dwie krawędzie lub dwie polilinie.</translation>
    </message>
    <message>
      <location filename="../../CommandSimple.cpp" line="128"/>
      <source>Sewing Tolerance</source>
      <translation>Tolerancja szycia</translation>
    </message>
    <message>
      <location filename="../../CommandSimple.cpp" line="129"/>
      <source>Enter tolerance for sewing shape:</source>
      <translation>Wprowadź tolerancję szycia dla kształtu:</translation>
    </message>
    <message>
      <location filename="../../TaskAttacher.cpp" line="73"/>
      <location filename="../../TaskAttacher.cpp" line="109"/>
      <source>No reference selected</source>
      <translation>Nie wybrano odniesienia</translation>
    </message>
    <message>
      <location filename="../../TaskAttacher.cpp" line="82"/>
      <location filename="../../TaskCheckGeometry.cpp" line="86"/>
      <source>Face</source>
      <translation>Ściana</translation>
    </message>
    <message>
      <location filename="../../TaskAttacher.cpp" line="85"/>
      <location filename="../../TaskCheckGeometry.cpp" line="88"/>
      <source>Edge</source>
      <translation>Krawędź</translation>
    </message>
    <message>
      <location filename="../../TaskAttacher.cpp" line="88"/>
      <location filename="../../TaskCheckGeometry.cpp" line="89"/>
      <source>Vertex</source>
      <translation>Wierzchołek</translation>
    </message>
    <message>
      <location filename="../../TaskCheckGeometry.cpp" line="82"/>
      <source>Compound</source>
      <translation>Złożenie</translation>
    </message>
    <message>
      <location filename="../../TaskCheckGeometry.cpp" line="83"/>
      <source>Compound Solid</source>
      <translation>Złożenie bryły</translation>
    </message>
    <message>
      <location filename="../../TaskCheckGeometry.cpp" line="84"/>
      <source>Solid</source>
      <translation>Bryła</translation>
    </message>
    <message>
      <location filename="../../TaskCheckGeometry.cpp" line="85"/>
      <source>Shell</source>
      <translation>Powłoka</translation>
    </message>
    <message>
      <location filename="../../TaskCheckGeometry.cpp" line="87"/>
      <source>Wire</source>
      <translation>Polilinia</translation>
    </message>
    <message>
      <location filename="../../TaskCheckGeometry.cpp" line="90"/>
      <source>Shape</source>
      <translation>Kształt</translation>
    </message>
    <message>
      <location filename="../../TaskCheckGeometry.cpp" line="105"/>
      <source>No Error</source>
      <translation>Brak błędu</translation>
    </message>
    <message>
      <location filename="../../TaskCheckGeometry.cpp" line="106"/>
      <source>Invalid Point On Curve</source>
      <translation>Nieprawidłowy punkt na krzywej</translation>
    </message>
    <message>
      <location filename="../../TaskCheckGeometry.cpp" line="107"/>
      <source>Invalid Point On Curve On Surface</source>
      <translation>Nieprawidłowy punkt na krzywej na powierzchni</translation>
    </message>
    <message>
      <location filename="../../TaskCheckGeometry.cpp" line="108"/>
      <source>Invalid Point On Surface</source>
      <translation>Nieprawidłowy punkt na powierzchni</translation>
    </message>
    <message>
      <location filename="../../TaskCheckGeometry.cpp" line="109"/>
      <source>No 3D Curve</source>
      <translation>Brak krzywej 3D</translation>
    </message>
    <message>
      <location filename="../../TaskCheckGeometry.cpp" line="110"/>
      <source>Multiple 3D Curve</source>
      <translation>Wielokrotna krzywa 3D</translation>
    </message>
    <message>
      <location filename="../../TaskCheckGeometry.cpp" line="111"/>
      <source>Invalid 3D Curve</source>
      <translation>Nieprawidłowa krzywa 3D</translation>
    </message>
    <message>
      <location filename="../../TaskCheckGeometry.cpp" line="112"/>
      <source>No Curve On Surface</source>
      <translation>Brak krzywej na powierzchni</translation>
    </message>
    <message>
      <location filename="../../TaskCheckGeometry.cpp" line="113"/>
      <source>Invalid Curve On Surface</source>
      <translation>Nieprawidłowa krzywa na powierzchni</translation>
    </message>
    <message>
      <location filename="../../TaskCheckGeometry.cpp" line="114"/>
      <source>Invalid Curve On Closed Surface</source>
      <translation>Nieprawidłowa krzywa na powierzchni zamkniętej</translation>
    </message>
    <message>
      <location filename="../../TaskCheckGeometry.cpp" line="115"/>
      <source>Invalid Same Range Flag</source>
      <translation>Nieprawidłowy zakres flag</translation>
    </message>
    <message>
      <location filename="../../TaskCheckGeometry.cpp" line="116"/>
      <source>Invalid Same Parameter Flag</source>
      <translation>Nieprawidłowy parametr flagi</translation>
    </message>
    <message>
      <location filename="../../TaskCheckGeometry.cpp" line="117"/>
      <source>Invalid Degenerated Flag</source>
      <translation>Nieprawidłowa zniszczona flaga</translation>
    </message>
    <message>
      <location filename="../../TaskCheckGeometry.cpp" line="118"/>
      <source>Free Edge</source>
      <translation>Wolna krawędź</translation>
    </message>
    <message>
      <location filename="../../TaskCheckGeometry.cpp" line="119"/>
      <source>Invalid MultiConnexity</source>
      <translation>Nieprawidłowe połaczenia</translation>
    </message>
    <message>
      <location filename="../../TaskCheckGeometry.cpp" line="120"/>
      <source>Invalid Range</source>
      <translation>Nieprawidłowy zakres</translation>
    </message>
    <message>
      <location filename="../../TaskCheckGeometry.cpp" line="121"/>
      <source>Empty Wire</source>
      <translation>Pusta polilinia</translation>
    </message>
    <message>
      <location filename="../../TaskCheckGeometry.cpp" line="122"/>
      <source>Redundant Edge</source>
      <translation>Nadmierna krawędź</translation>
    </message>
    <message>
      <location filename="../../TaskCheckGeometry.cpp" line="123"/>
      <source>Self Intersecting Wire</source>
      <translation>Samoprzecinająca się polilinia</translation>
    </message>
    <message>
      <location filename="../../TaskCheckGeometry.cpp" line="124"/>
      <source>No Surface</source>
      <translation>Brak powierzchni</translation>
    </message>
    <message>
      <location filename="../../TaskCheckGeometry.cpp" line="125"/>
      <source>Invalid Wire</source>
      <translation>Nieprawidłowa polilinia</translation>
    </message>
    <message>
      <location filename="../../TaskCheckGeometry.cpp" line="126"/>
      <source>Redundant Wire</source>
      <translation>Nadmiarowa polilinia</translation>
    </message>
    <message>
      <location filename="../../TaskCheckGeometry.cpp" line="127"/>
      <source>Intersecting Wires</source>
      <translation>Przecinające się polilinie</translation>
    </message>
    <message>
      <location filename="../../TaskCheckGeometry.cpp" line="128"/>
      <source>Invalid Imbrication Of Wires</source>
      <translation>Nieprawidłowe nakładanie się polilinii</translation>
    </message>
    <message>
      <location filename="../../TaskCheckGeometry.cpp" line="129"/>
      <source>Empty Shell</source>
      <translation>Pusta powłoka</translation>
    </message>
    <message>
      <location filename="../../TaskCheckGeometry.cpp" line="130"/>
      <source>Redundant Face</source>
      <translation>Nadmiarowa ściana</translation>
    </message>
    <message>
      <location filename="../../TaskCheckGeometry.cpp" line="131"/>
      <source>Unorientable Shape</source>
      <translation>Kształt niemożliwy do przewidzenia</translation>
    </message>
    <message>
      <location filename="../../TaskCheckGeometry.cpp" line="132"/>
      <source>Not Closed</source>
      <translation>Nie zamknięte</translation>
    </message>
    <message>
      <location filename="../../TaskCheckGeometry.cpp" line="133"/>
      <source>Not Connected</source>
      <translation>Nie połączono</translation>
    </message>
    <message>
      <location filename="../../TaskCheckGeometry.cpp" line="134"/>
      <source>Sub Shape Not In Shape</source>
      <translation>Kształt podrzędny nie jest częścią kształtu</translation>
    </message>
    <message>
      <location filename="../../TaskCheckGeometry.cpp" line="135"/>
      <source>Bad Orientation</source>
      <translation>Zła orientacja</translation>
    </message>
    <message>
      <location filename="../../TaskCheckGeometry.cpp" line="136"/>
      <source>Bad Orientation Of Sub Shape</source>
      <translation>Zła orientacja podrzędnej części kształtu</translation>
    </message>
    <message>
      <location filename="../../TaskCheckGeometry.cpp" line="137"/>
      <source>Invalid Tolerance Value</source>
      <translation>Nieprawidłowa wartość tolerancji</translation>
    </message>
    <message>
      <location filename="../../TaskCheckGeometry.cpp" line="138"/>
      <source>Check Failed</source>
      <translation>Sprawdzenie nie powiodło się</translation>
    </message>
    <message>
      <location filename="../../TaskCheckGeometry.cpp" line="148"/>
      <source>No Result</source>
      <translation>Bez rezultatu</translation>
    </message>
    <message>
      <location filename="../../TaskCheckGeometry.cpp" line="152"/>
      <source>Out Of Enum Range:</source>
      <translation>Poza zakresem wyliczania:</translation>
    </message>
    <message>
      <location filename="../../TaskCheckGeometry.cpp" line="164"/>
      <source>BOPAlgo CheckUnknown</source>
      <translation>Suma kontrolna Operacji Logicznej komponentu Open Cascade, nieznana</translation>
    </message>
    <message>
      <location filename="../../TaskCheckGeometry.cpp" line="165"/>
      <source>BOPAlgo BadType</source>
      <translation>Zły typ Operacji Logicznej komponentu Open Cascade</translation>
    </message>
    <message>
      <location filename="../../TaskCheckGeometry.cpp" line="166"/>
      <source>BOPAlgo SelfIntersect</source>
      <translation>Samo przecinający BOPAlgo</translation>
    </message>
    <message>
      <location filename="../../TaskCheckGeometry.cpp" line="167"/>
      <source>BOPAlgo TooSmallEdge</source>
      <translation>Zbyt mała krawędź BOPAlgo</translation>
    </message>
    <message>
      <location filename="../../TaskCheckGeometry.cpp" line="168"/>
      <source>BOPAlgo NonRecoverableFace</source>
      <translation>Nie Odwracalna Płaszczyzna BOPAlgo</translation>
    </message>
    <message>
      <location filename="../../TaskCheckGeometry.cpp" line="169"/>
      <source>BOPAlgo IncompatibilityOfVertex</source>
      <translation>Niekompatybilność Wierzchołków BOPAlgo</translation>
    </message>
    <message>
      <location filename="../../TaskCheckGeometry.cpp" line="170"/>
      <source>BOPAlgo IncompatibilityOfEdge</source>
      <translation>Niekompatybilność Krawędzi BOPAlgo</translation>
    </message>
    <message>
      <location filename="../../TaskCheckGeometry.cpp" line="171"/>
      <source>BOPAlgo IncompatibilityOfFace</source>
      <translation>Niekompatybilność ścian BOPAlgo</translation>
    </message>
    <message>
      <location filename="../../TaskCheckGeometry.cpp" line="172"/>
      <source>BOPAlgo OperationAborted</source>
      <translation>Operacja BOPAlgo przerwana</translation>
    </message>
    <message>
      <location filename="../../TaskCheckGeometry.cpp" line="173"/>
      <source>BOPAlgo GeomAbs_C0</source>
      <translation>BOPAlgo GeomAbs_C0</translation>
    </message>
    <message>
      <location filename="../../TaskCheckGeometry.cpp" line="174"/>
      <source>BOPAlgo_InvalidCurveOnSurface</source>
      <translation>BOPAlgo_InvalidCurveOnSurface</translation>
    </message>
    <message>
      <location filename="../../TaskCheckGeometry.cpp" line="175"/>
      <source>BOPAlgo NotValid</source>
      <translation>Nie Ważny BOPAlgo</translation>
    </message>
    <message>
      <location filename="../../TaskCheckGeometry.cpp" line="464"/>
      <location filename="../../TaskCheckGeometry.cpp" line="758"/>
      <source>Invalid</source>
      <translation>Nieprawidłowy</translation>
    </message>
    <message>
      <location filename="../../TaskDimension.cpp" line="631"/>
      <location filename="../../TaskDimension.cpp" line="1769"/>
      <source>Selections</source>
      <translation>Zaznaczenia</translation>
    </message>
    <message>
      <location filename="../../TaskDimension.cpp" line="638"/>
      <location filename="../../TaskDimension.cpp" line="1776"/>
      <source>Control</source>
      <translation>Kontrola</translation>
    </message>
    <message>
      <location filename="../../TaskDimension.cpp" line="1481"/>
      <source>Reset selection</source>
      <translation>Resetuj wybór</translation>
    </message>
    <message>
      <location filename="../../TaskDimension.cpp" line="1485"/>
      <source>Toggle direct dimensions</source>
      <translation>Przełącz wymiary bezpośrednie</translation>
    </message>
    <message>
      <location filename="../../TaskDimension.cpp" line="1490"/>
      <source>Toggle orthogonal dimensions</source>
      <translation>Przełącz wymiary ortogonalne</translation>
    </message>
    <message>
      <location filename="../../TaskDimension.cpp" line="1495"/>
      <source>Clear all dimensions</source>
      <translation>Usuń wszystkie wymiary</translation>
    </message>
    <message>
      <location filename="../../ViewProviderExt.cpp" line="977"/>
      <source>Set colors...</source>
      <translation>Ustaw kolory ...</translation>
    </message>
    <message>
      <location filename="../../ViewProviderMirror.cpp" line="79"/>
      <source>Edit mirror plane</source>
      <translation>Edycja płaszczyzny odbicia lustrzanego</translation>
    </message>
    <message>
      <location filename="../../ViewProviderMirror.cpp" line="279"/>
      <source>Edit fillet edges</source>
      <translation>Edytuj krawędzie zaokrąglenia</translation>
    </message>
    <message>
      <location filename="../../ViewProviderMirror.cpp" line="383"/>
      <source>Edit chamfer edges</source>
      <translation>Edytuj krawędzie fazki</translation>
    </message>
    <message>
      <location filename="../../ViewProviderMirror.cpp" line="528"/>
      <source>Edit offset</source>
      <translation>Edytuj odsunięcie</translation>
    </message>
    <message>
      <location filename="../../ViewProviderMirror.cpp" line="614"/>
      <source>Edit thickness</source>
      <translation>Edytuj grubość</translation>
    </message>
    <message>
      <location filename="../../ViewProviderSpline.cpp" line="87"/>
      <location filename="../../ViewProviderSpline.cpp" line="339"/>
      <source>Show control points</source>
      <translation>Pokaż punkty kontrolne</translation>
    </message>
    <message>
      <location filename="../../ViewProviderAttachExtension.cpp" line="116"/>
      <source>Attachment editor</source>
      <translation>Edytor dołączania</translation>
    </message>
  </context>
  <context>
    <name>Attacher</name>
    <message>
      <location filename="../../AttacherTexts.cpp" line="311"/>
      <source>Any</source>
      <comment>Attacher reference type</comment>
      <translation>Dowolny</translation>
    </message>
    <message>
      <location filename="../../AttacherTexts.cpp" line="312"/>
      <source>Vertex</source>
      <comment>Attacher reference type</comment>
      <translation>Wierzchołek</translation>
    </message>
    <message>
      <location filename="../../AttacherTexts.cpp" line="313"/>
      <source>Edge</source>
      <comment>Attacher reference type</comment>
      <translation>Krawędź</translation>
    </message>
    <message>
      <location filename="../../AttacherTexts.cpp" line="314"/>
      <source>Face</source>
      <comment>Attacher reference type</comment>
      <translation>Ściana</translation>
    </message>
    <message>
      <location filename="../../AttacherTexts.cpp" line="316"/>
      <source>Line</source>
      <comment>Attacher reference type</comment>
      <translation>Linia</translation>
    </message>
    <message>
      <location filename="../../AttacherTexts.cpp" line="317"/>
      <source>Curve</source>
      <comment>Attacher reference type</comment>
      <translation>Krzywa</translation>
    </message>
    <message>
      <location filename="../../AttacherTexts.cpp" line="318"/>
      <source>Circle</source>
      <comment>Attacher reference type</comment>
      <translation>Okrąg</translation>
    </message>
    <message>
      <location filename="../../AttacherTexts.cpp" line="319"/>
      <source>Conic</source>
      <comment>Attacher reference type</comment>
      <translation>Krzywa stożkowa</translation>
    </message>
    <message>
      <location filename="../../AttacherTexts.cpp" line="320"/>
      <source>Ellipse</source>
      <comment>Attacher reference type</comment>
      <translation>Elipsa</translation>
    </message>
    <message>
      <location filename="../../AttacherTexts.cpp" line="321"/>
      <source>Parabola</source>
      <comment>Attacher reference type</comment>
      <translation>Parabola</translation>
    </message>
    <message>
      <location filename="../../AttacherTexts.cpp" line="322"/>
      <source>Hyperbola</source>
      <comment>Attacher reference type</comment>
      <translation>Hiperbola</translation>
    </message>
    <message>
      <location filename="../../AttacherTexts.cpp" line="324"/>
      <source>Plane</source>
      <comment>Attacher reference type</comment>
      <translation>Płaszczyzna</translation>
    </message>
    <message>
      <location filename="../../AttacherTexts.cpp" line="325"/>
      <source>Sphere</source>
      <comment>Attacher reference type</comment>
      <translation>Sfera</translation>
    </message>
    <message>
      <location filename="../../AttacherTexts.cpp" line="326"/>
      <source>Revolve</source>
      <comment>Attacher reference type</comment>
      <translation>Obrót</translation>
    </message>
    <message>
      <location filename="../../AttacherTexts.cpp" line="327"/>
      <source>Cylinder</source>
      <comment>Attacher reference type</comment>
      <translation>Walec</translation>
    </message>
    <message>
      <location filename="../../AttacherTexts.cpp" line="328"/>
      <source>Torus</source>
      <comment>Attacher reference type</comment>
      <translation>Torus</translation>
    </message>
    <message>
      <location filename="../../AttacherTexts.cpp" line="329"/>
      <source>Cone</source>
      <comment>Attacher reference type</comment>
      <translation>Stożek</translation>
    </message>
    <message>
      <location filename="../../AttacherTexts.cpp" line="331"/>
      <source>Object</source>
      <comment>Attacher reference type</comment>
      <translation>Obiekt</translation>
    </message>
    <message>
      <location filename="../../AttacherTexts.cpp" line="332"/>
      <source>Solid</source>
      <comment>Attacher reference type</comment>
      <translation>Bryła</translation>
    </message>
    <message>
      <location filename="../../AttacherTexts.cpp" line="333"/>
      <source>Wire</source>
      <comment>Attacher reference type</comment>
      <translation>Polilinia</translation>
    </message>
  </context>
  <context>
    <name>Attacher0D</name>
    <message>
      <location filename="../../AttacherTexts.cpp" line="268"/>
      <source>Deactivated</source>
      <comment>AttachmentPoint mode caption</comment>
      <translation>Nieaktywny</translation>
    </message>
    <message>
      <location filename="../../AttacherTexts.cpp" line="269"/>
      <source>Attachment is disabled. Point can be moved by editing Placement property.</source>
      <comment>AttachmentPoint mode tooltip</comment>
      <translation>Mocowanie jest wyłączone. Punkt może być przeniesiony przez edycję właściwości umiejscowienia.</translation>
    </message>
    <message>
      <location filename="../../AttacherTexts.cpp" line="271"/>
      <source>Object's origin</source>
      <comment>AttachmentPoint mode caption</comment>
      <translation>Odniesienie położenia obiektów</translation>
    </message>
    <message>
      <location filename="../../AttacherTexts.cpp" line="272"/>
      <source>Point is put at object's Placement.Position. Works on objects with placements, and ellipse/parabola/hyperbola edges.</source>
      <comment>AttachmentPoint mode tooltip</comment>
      <translation>Punkt jest położony w Placement.Position obiektu. Działa na obiektach z umiejscowieniami i z krawędziami elipsy / paraboli / hiperboli.</translation>
    </message>
    <message>
      <location filename="../../AttacherTexts.cpp" line="274"/>
      <source>Focus1</source>
      <comment>AttachmentPoint mode caption</comment>
      <translation>Ostrość 1</translation>
    </message>
    <message>
      <location filename="../../AttacherTexts.cpp" line="275"/>
      <source>Focus of ellipse, parabola, hyperbola.</source>
      <comment>AttachmentPoint mode tooltip</comment>
      <translation>Ognisko elipsy, paraboli, hiperboli.</translation>
    </message>
    <message>
      <location filename="../../AttacherTexts.cpp" line="277"/>
      <source>Focus2</source>
      <comment>AttachmentPoint mode caption</comment>
      <translation>Ostrość 2</translation>
    </message>
    <message>
      <location filename="../../AttacherTexts.cpp" line="278"/>
      <source>Second focus of ellipse and hyperbola.</source>
      <comment>AttachmentPoint mode tooltip</comment>
      <translation>Drugie ognisko elipsy i hiperboli.</translation>
    </message>
    <message>
      <location filename="../../AttacherTexts.cpp" line="280"/>
      <source>On edge</source>
      <comment>AttachmentPoint mode caption</comment>
      <translation>Na krawędzi</translation>
    </message>
    <message>
      <location filename="../../AttacherTexts.cpp" line="281"/>
      <source>Point is put on edge, MapPathParameter controls where. Additionally, vertex can be linked in for making a projection.</source>
      <comment>AttachmentPoint mode tooltip</comment>
      <translation>Punkt jest umieszczany na krawędzi, a MapPathParameter kontroluje gdzie. Dodatkowo wierzchołek może być połączony w celu wykonania projekcji.</translation>
    </message>
    <message>
      <location filename="../../AttacherTexts.cpp" line="283"/>
      <source>Center of curvature</source>
      <comment>AttachmentPoint mode caption</comment>
      <translation>Środek krzywizny</translation>
    </message>
    <message>
      <location filename="../../AttacherTexts.cpp" line="284"/>
      <source>Center of osculating circle of an edge. Optional vertex link defines where.</source>
      <comment>AttachmentPoint mode tooltip</comment>
      <translation>Wyśrodkuj koło ściśle styczne do krawędzi. Opcjonalnie łącznik wierzchołka definiuje gdzie.</translation>
    </message>
    <message>
      <location filename="../../AttacherTexts.cpp" line="286"/>
      <source>Center of mass</source>
      <comment>AttachmentPoint mode caption</comment>
      <translation>Środek ciężkości</translation>
    </message>
    <message>
      <location filename="../../AttacherTexts.cpp" line="287"/>
      <source>Center of mass of all references (equal densities are assumed).</source>
      <comment>AttachmentPoint mode tooltip</comment>
      <translation>Środek masy wszystkich odniesień (przyjmuje się równe gęstości).</translation>
    </message>
    <message>
      <location filename="../../AttacherTexts.cpp" line="289"/>
      <source>Intersection</source>
      <comment>AttachmentPoint mode caption</comment>
      <translation>Przecięcie</translation>
    </message>
    <message>
      <location filename="../../AttacherTexts.cpp" line="290"/>
      <source>Not implemented</source>
      <comment>AttachmentPoint mode tooltip</comment>
      <translation>Nie wprowadzono</translation>
    </message>
    <message>
      <location filename="../../AttacherTexts.cpp" line="292"/>
      <source>Vertex</source>
      <comment>AttachmentPoint mode caption</comment>
      <translation>Wierzchołek</translation>
    </message>
    <message>
      <location filename="../../AttacherTexts.cpp" line="293"/>
      <source>Put Datum point coincident with another vertex.</source>
      <comment>AttachmentPoint mode tooltip</comment>
      <translation>Umieść punkt odniesienia zbieżny z innym wierzchołkiem.</translation>
    </message>
    <message>
      <location filename="../../AttacherTexts.cpp" line="295"/>
      <source>Proximity point 1</source>
      <comment>AttachmentPoint mode caption</comment>
      <translation>W pobliżu punktu 1</translation>
    </message>
    <message>
      <location filename="../../AttacherTexts.cpp" line="296"/>
      <source>Point on first reference that is closest to second reference.</source>
      <comment>AttachmentPoint mode tooltip</comment>
      <translation>Punkt pierwszej referencji, który jest najbliżej drugiej referencji.</translation>
    </message>
    <message>
      <location filename="../../AttacherTexts.cpp" line="298"/>
      <source>Proximity point 2</source>
      <comment>AttachmentPoint mode caption</comment>
      <translation>W pobliżu punktu 2</translation>
    </message>
    <message>
      <location filename="../../AttacherTexts.cpp" line="299"/>
      <source>Point on second reference that is closest to first reference.</source>
      <comment>AttachmentPoint mode tooltip</comment>
      <translation>Punkty drugiej referencji, które są najbliżej pierwszej referencji.</translation>
    </message>
  </context>
  <context>
    <name>Attacher1D</name>
    <message>
      <location filename="../../AttacherTexts.cpp" line="199"/>
      <source>Deactivated</source>
      <comment>AttachmentLine mode caption</comment>
      <translation>Nieaktywny</translation>
    </message>
    <message>
      <location filename="../../AttacherTexts.cpp" line="200"/>
      <source>Attachment is disabled. Line can be moved by editing Placement property.</source>
      <comment>AttachmentLine mode tooltip</comment>
      <translation>Dołączanie jest wyłączone. Linia może zostać przesunięta poprzez edycję właściwości umiejscowienie.</translation>
    </message>
    <message>
      <location filename="../../AttacherTexts.cpp" line="202"/>
      <source>Object's X</source>
      <comment>AttachmentLine mode caption</comment>
      <translation>Obiekt X</translation>
    </message>
    <message>
      <location filename="../../AttacherTexts.cpp" line="203"/>
      <location filename="../../AttacherTexts.cpp" line="209"/>
      <source>Line is aligned along local X axis of object. Works on objects with placements, and ellipse/parabola/hyperbola edges.</source>
      <comment>AttachmentLine mode tooltip</comment>
      <translation>Linia jest wyrównana wzdłuż lokalnej osi obiektu X. Pracuje na obiektach z umiejscowieniem oraz krawędzi elipsy, paraboli, hiperboli.</translation>
    </message>
    <message>
      <location filename="../../AttacherTexts.cpp" line="205"/>
      <source>Object's Y</source>
      <comment>AttachmentLine mode caption</comment>
      <translation>Objekt Y</translation>
    </message>
    <message>
      <location filename="../../AttacherTexts.cpp" line="206"/>
      <source>Line is aligned along local Y axis of object. Works on objects with placements, and ellipse/parabola/hyperbola edges.</source>
      <comment>AttachmentLine mode tooltip</comment>
      <translation>Linia jest wyrównana wzdłuż lokalnej osi obiektu Y. Pracuje na obiektach z umiejscowieniem oraz krawędzi elipsy, paraboli, hiperboli.</translation>
    </message>
    <message>
      <location filename="../../AttacherTexts.cpp" line="208"/>
      <source>Object's Z</source>
      <comment>AttachmentLine mode caption</comment>
      <translation>Obiekt Z</translation>
    </message>
    <message>
      <location filename="../../AttacherTexts.cpp" line="211"/>
      <source>Axis of curvature</source>
      <comment>AttachmentLine mode caption</comment>
      <translation>Oś krzywizny</translation>
    </message>
    <message>
      <location filename="../../AttacherTexts.cpp" line="212"/>
      <source>Line that is an axis of osculating circle of curved edge. Optional vertex defines where.</source>
      <comment>AttachmentLine mode tooltip</comment>
      <translation>Linia, która jest osią koła ściśle stycznego do zagiętej krawędzi. Opcjonalnie wierzchołek definiuje gdzie.</translation>
    </message>
    <message>
      <location filename="../../AttacherTexts.cpp" line="214"/>
      <source>Directrix1</source>
      <comment>AttachmentLine mode caption</comment>
      <translation>Linia kontrolna 1</translation>
    </message>
    <message>
      <location filename="../../AttacherTexts.cpp" line="215"/>
      <source>Directrix line for ellipse, parabola, hyperbola.</source>
      <comment>AttachmentLine mode tooltip</comment>
      <translation>Linia kierunkowa dla elipsy, paraboli, hiperboli.</translation>
    </message>
    <message>
      <location filename="../../AttacherTexts.cpp" line="217"/>
      <source>Directrix2</source>
      <comment>AttachmentLine mode caption</comment>
      <translation>Linia kontrolna 2</translation>
    </message>
    <message>
      <location filename="../../AttacherTexts.cpp" line="218"/>
      <source>Second directrix line for ellipse and hyperbola.</source>
      <comment>AttachmentLine mode tooltip</comment>
      <translation>Druga linia kierunkowa dla elipsy i hiperboli.</translation>
    </message>
    <message>
      <location filename="../../AttacherTexts.cpp" line="220"/>
      <source>Asymptote1</source>
      <comment>AttachmentLine mode caption</comment>
      <translation>Asymptota 1</translation>
    </message>
    <message>
      <location filename="../../AttacherTexts.cpp" line="221"/>
      <source>Asymptote of a hyperbola.</source>
      <comment>AttachmentLine mode tooltip</comment>
      <translation>Asymptota hiperboli.</translation>
    </message>
    <message>
      <location filename="../../AttacherTexts.cpp" line="223"/>
      <source>Asymptote2</source>
      <comment>AttachmentLine mode caption</comment>
      <translation>Asymptota 2</translation>
    </message>
    <message>
      <location filename="../../AttacherTexts.cpp" line="224"/>
      <source>Second asymptote of hyperbola.</source>
      <comment>AttachmentLine mode tooltip</comment>
      <translation>Druga asymptota hiperboli.</translation>
    </message>
    <message>
      <location filename="../../AttacherTexts.cpp" line="226"/>
      <source>Tangent</source>
      <comment>AttachmentLine mode caption</comment>
      <translation>Stycznie</translation>
    </message>
    <message>
      <location filename="../../AttacherTexts.cpp" line="227"/>
      <source>Line tangent to an edge. Optional vertex link defines where.</source>
      <comment>AttachmentLine mode tooltip</comment>
      <translation>Linia styczna do krawędzi. Opcjonalnie wierzchołek określa gdzie.</translation>
    </message>
    <message>
      <location filename="../../AttacherTexts.cpp" line="229"/>
      <source>Normal to edge</source>
      <comment>AttachmentLine mode caption</comment>
      <translation>Normalna do krawędzi</translation>
    </message>
    <message>
      <location filename="../../AttacherTexts.cpp" line="230"/>
      <source>Align to N vector of Frenet-Serret coordinate system of curved edge. Optional vertex link defines where.</source>
      <comment>AttachmentLine mode tooltip</comment>
      <translation>Wyrównaj do wektora N układu współrzędnych układu Freneta Serret z zaokrągloną krawędzią. Opcjonalnie łącze wierzchołka definiuje gdzie.</translation>
    </message>
    <message>
      <location filename="../../AttacherTexts.cpp" line="232"/>
      <source>Binormal</source>
      <comment>AttachmentLine mode caption</comment>
      <translation>Binormalny</translation>
    </message>
    <message>
      <location filename="../../AttacherTexts.cpp" line="233"/>
      <source>Align to B vector of Frenet-Serret coordinate system of curved edge. Optional vertex link defines where.</source>
      <comment>AttachmentLine mode tooltip</comment>
      <translation>Wyrównaj do wektora B układu współrzędnych układu Freneta Serret z zaokrągloną krawędzią. Opcjonalnie łącze wierzchołka definiuje gdzie.</translation>
    </message>
    <message>
      <location filename="../../AttacherTexts.cpp" line="235"/>
      <source>Tangent to surface (U)</source>
      <comment>AttachmentLine mode caption</comment>
      <translation>Prostopadły do powierzchni (U)</translation>
    </message>
    <message>
      <location filename="../../AttacherTexts.cpp" line="236"/>
      <location filename="../../AttacherTexts.cpp" line="239"/>
      <source>Tangent to surface, along U parameter. Vertex link defines where.</source>
      <comment>AttachmentLine mode tooltip</comment>
      <translation>Prostopadły do powierzchni, wzdłuż parametru U. Łącze wierzchołka definiuje gdzie.</translation>
    </message>
    <message>
      <location filename="../../AttacherTexts.cpp" line="238"/>
      <source>Tangent to surface (V)</source>
      <comment>AttachmentLine mode caption</comment>
      <translation>Prostopadły do powierzchni (V)</translation>
    </message>
    <message>
      <location filename="../../AttacherTexts.cpp" line="241"/>
      <source>Through two points</source>
      <comment>AttachmentLine mode caption</comment>
      <translation>Przez dwa punkty</translation>
    </message>
    <message>
      <location filename="../../AttacherTexts.cpp" line="242"/>
      <source>Line that passes through two vertices.</source>
      <comment>AttachmentLine mode tooltip</comment>
      <translation>Linia, która przechodzi przez dwa wierzchołki.</translation>
    </message>
    <message>
      <location filename="../../AttacherTexts.cpp" line="244"/>
      <source>Intersection</source>
      <comment>AttachmentLine mode caption</comment>
      <translation>Przecięcie</translation>
    </message>
    <message>
      <location filename="../../AttacherTexts.cpp" line="245"/>
      <source>Not implemented.</source>
      <comment>AttachmentLine mode tooltip</comment>
      <translation>Nie wprowadzono.</translation>
    </message>
    <message>
      <location filename="../../AttacherTexts.cpp" line="247"/>
      <source>Proximity line</source>
      <comment>AttachmentLine mode caption</comment>
      <translation>Linia zbliżania</translation>
    </message>
    <message>
      <location filename="../../AttacherTexts.cpp" line="248"/>
      <source>Line that spans the shortest distance between shapes.</source>
      <comment>AttachmentLine mode tooltip</comment>
      <translation>Linia, która rozciąga najkrótszą odległość pomiędzy formami.</translation>
    </message>
    <message>
      <location filename="../../AttacherTexts.cpp" line="250"/>
      <source>1st principal axis</source>
      <comment>AttachmentLine mode caption</comment>
      <translation>Pierwsza oś główna</translation>
    </message>
    <message>
      <location filename="../../AttacherTexts.cpp" line="251"/>
      <source>Line follows first principal axis of inertia.</source>
      <comment>AttachmentLine mode tooltip</comment>
      <translation>Linia stosuje się do pierwszej głównej osi inerti.</translation>
    </message>
    <message>
      <location filename="../../AttacherTexts.cpp" line="253"/>
      <source>2nd principal axis</source>
      <comment>AttachmentLine mode caption</comment>
      <translation>Druga oś główna</translation>
    </message>
    <message>
      <location filename="../../AttacherTexts.cpp" line="254"/>
      <source>Line follows second principal axis of inertia.</source>
      <comment>AttachmentLine mode tooltip</comment>
      <translation>Linia przebiega zgodnie z drugą główną osią bezwładności.</translation>
    </message>
    <message>
      <location filename="../../AttacherTexts.cpp" line="256"/>
      <source>3rd principal axis</source>
      <comment>AttachmentLine mode caption</comment>
      <translation>Trzecia oś główna</translation>
    </message>
    <message>
      <location filename="../../AttacherTexts.cpp" line="257"/>
      <source>Line follows third principal axis of inertia.</source>
      <comment>AttachmentLine mode tooltip</comment>
      <translation>Linia przebiega zgodnie z trzecią główną osią bezwładności.</translation>
    </message>
    <message>
      <location filename="../../AttacherTexts.cpp" line="259"/>
      <source>Normal to surface</source>
      <comment>AttachmentLine mode caption</comment>
      <translation>Normalna do powierzchni</translation>
    </message>
    <message>
      <location filename="../../AttacherTexts.cpp" line="260"/>
      <source>Line perpendicular to surface at point set by vertex.</source>
      <comment>AttachmentLine mode tooltip</comment>
      <translation>Linia prostopadła do powierzchni w punkcie wyznaczonym przez wierzchołek.</translation>
    </message>
  </context>
  <context>
    <name>Attacher2D</name>
    <message>
      <location filename="../../AttacherTexts.cpp" line="124"/>
      <source>Deactivated</source>
      <comment>AttachmentPlane mode caption</comment>
      <translation>Nieaktywny</translation>
    </message>
    <message>
      <location filename="../../AttacherTexts.cpp" line="125"/>
      <source>Attachment is disabled. Object can be moved by editing Placement property.</source>
      <comment>AttachmentPlane mode tooltip</comment>
      <translation>Dołączanie jest wyłączone. Obiekt może zostać przesunięty poprzez edycję właściwości umiejscowienie.</translation>
    </message>
    <message>
      <location filename="../../AttacherTexts.cpp" line="127"/>
      <source>Translate origin</source>
      <comment>AttachmentPlane mode caption</comment>
      <translation>Przenieś odniesienie położenia</translation>
    </message>
    <message>
      <location filename="../../AttacherTexts.cpp" line="128"/>
      <source>Origin is aligned to match Vertex. Orientation is controlled by Placement property.</source>
      <comment>AttachmentPlane mode tooltip</comment>
      <translation>Odniesienie położenia jest dopasowane do Wierzchołka. Orientacja jest kontrolowana przez właściwość Umieszczenie.</translation>
    </message>
    <message>
      <location filename="../../AttacherTexts.cpp" line="130"/>
      <source>Object's XY</source>
      <comment>AttachmentPlane mode caption</comment>
      <translation>XY obiektu</translation>
    </message>
    <message>
      <location filename="../../AttacherTexts.cpp" line="131"/>
      <source>Plane is aligned to XY local plane of linked object.</source>
      <comment>AttachmentPlane mode tooltip</comment>
      <translation>Płaszczyzna jest wyrównana do lokalnej płaszczyzny XY połączonego obiektu.</translation>
    </message>
    <message>
      <location filename="../../AttacherTexts.cpp" line="133"/>
      <source>Object's XZ</source>
      <comment>AttachmentPlane mode caption</comment>
      <translation>XZ obiektu</translation>
    </message>
    <message>
      <location filename="../../AttacherTexts.cpp" line="134"/>
      <source>Plane is aligned to XZ local plane of linked object.</source>
      <comment>AttachmentPlane mode tooltip</comment>
      <translation>Płaszczyzna jest wyrównana do lokalnej płaszczyzny XZ połączonego obiektu.</translation>
    </message>
    <message>
      <location filename="../../AttacherTexts.cpp" line="136"/>
      <source>Object's YZ</source>
      <comment>AttachmentPlane mode caption</comment>
      <translation>YZ obiektu</translation>
    </message>
    <message>
      <location filename="../../AttacherTexts.cpp" line="137"/>
      <source>Plane is aligned to YZ local plane of linked object.</source>
      <comment>AttachmentPlane mode tooltip</comment>
      <translation>Płaszczyzna jest wyrównana do lokalnej płaszczyzny YZ połączonego obiektu.</translation>
    </message>
    <message>
      <location filename="../../AttacherTexts.cpp" line="139"/>
      <source>Plane face</source>
      <comment>AttachmentPlane mode caption</comment>
      <translation>Płaszczyzna ściany</translation>
    </message>
    <message>
      <location filename="../../AttacherTexts.cpp" line="140"/>
      <source>Plane is aligned to coincide planar face.</source>
      <comment>AttachmentPlane mode tooltip</comment>
      <translation>Płaszczyzna jest wyrównana do zbieżności z płaską ścianą.</translation>
    </message>
    <message>
      <location filename="../../AttacherTexts.cpp" line="142"/>
      <source>Tangent to surface</source>
      <comment>AttachmentPlane mode caption</comment>
      <translation>Prostopadły do powierzchni</translation>
    </message>
    <message>
      <location filename="../../AttacherTexts.cpp" line="143"/>
      <source>Plane is made tangent to surface at vertex.</source>
      <comment>AttachmentPlane mode tooltip</comment>
      <translation>Płaszczyzna staje się styczna do powierzchni w wierzchołku.</translation>
    </message>
    <message>
      <location filename="../../AttacherTexts.cpp" line="145"/>
      <source>Normal to edge</source>
      <comment>AttachmentPlane mode caption</comment>
      <translation>Normalna do krawędzi</translation>
    </message>
    <message>
      <location filename="../../AttacherTexts.cpp" line="146"/>
      <source>Plane is made tangent to edge. Optional vertex link defines where.</source>
      <comment>AttachmentPlane mode tooltip</comment>
      <translation>Płaszczyzna jest tworzona jako styczna do krawędzi. Opcjonalne połączenie wierzchołków określa, gdzie.</translation>
    </message>
    <message>
      <location filename="../../AttacherTexts.cpp" line="148"/>
      <source>Frenet NB</source>
      <comment>AttachmentPlane mode caption</comment>
      <translation>NB układu Freneta</translation>
    </message>
    <message>
      <location filename="../../AttacherTexts.cpp" line="149"/>
      <location filename="../../AttacherTexts.cpp" line="152"/>
      <location filename="../../AttacherTexts.cpp" line="155"/>
      <source>Align to Frenet-Serret coordinate system of curved edge. Optional vertex link defines where.</source>
      <comment>AttachmentPlane mode tooltip</comment>
      <translation>Wyrównaj do układu współrzędnych Freneta Serret zaokrąglonej krawędzi. Opcjonalnie łącze wierzchołka definiuje gdzie.</translation>
    </message>
    <message>
      <location filename="../../AttacherTexts.cpp" line="151"/>
      <source>Frenet TN</source>
      <comment>AttachmentPlane mode caption</comment>
      <translation>TN układu Freneta</translation>
    </message>
    <message>
      <location filename="../../AttacherTexts.cpp" line="154"/>
      <source>Frenet TB</source>
      <comment>AttachmentPlane mode caption</comment>
      <translation>TB układu Freneta</translation>
    </message>
    <message>
      <location filename="../../AttacherTexts.cpp" line="157"/>
      <source>Concentric</source>
      <comment>AttachmentPlane mode caption</comment>
      <translation>Współosiowo</translation>
    </message>
    <message>
      <location filename="../../AttacherTexts.cpp" line="158"/>
      <source>Align to plane to osculating circle of an edge. Origin is aligned to point of curvature. Optional vertex link defines where.</source>
      <comment>AttachmentPlane mode tooltip</comment>
      <translation>Wyrównaj do płaszczyzny koła ściśle stycznego do krawędzi. Pochodzenie jest wyrównane do punktu krzywizny. Opcjonalnie łącze wierzchołka definiuje gdzie.</translation>
    </message>
    <message>
      <location filename="../../AttacherTexts.cpp" line="160"/>
      <source>Revolution Section</source>
      <comment>AttachmentPlane mode caption</comment>
      <translation>Przekrój przez obrót</translation>
    </message>
    <message>
      <location filename="../../AttacherTexts.cpp" line="161"/>
      <source>Plane is perpendicular to edge, and Y axis is matched with axis of osculating circle. Optional vertex link defines where.</source>
      <comment>AttachmentPlane mode tooltip</comment>
      <translation>Płaszczyzna jest prostopadła do krawędzi, a oś Y jest połączona z osią koła ściśle stycznego Opcjonalne łącze wierzchołka określa gdzie.</translation>
    </message>
    <message>
      <location filename="../../AttacherTexts.cpp" line="163"/>
      <source>Plane by 3 points</source>
      <comment>AttachmentPlane mode caption</comment>
      <translation>Płaszczyzna przez 3 punkty</translation>
    </message>
    <message>
      <location filename="../../AttacherTexts.cpp" line="164"/>
      <source>Align plane to pass through three vertices.</source>
      <comment>AttachmentPlane mode tooltip</comment>
      <translation>Wyrównaj płaszczyznę tak, aby przechodziła przez trzy wierzchołki.</translation>
    </message>
    <message>
      <location filename="../../AttacherTexts.cpp" line="166"/>
      <source>Normal to 3 points</source>
      <comment>AttachmentPlane mode caption</comment>
      <translation>Normalny do 3 punktów</translation>
    </message>
    <message>
      <location filename="../../AttacherTexts.cpp" line="167"/>
      <source>Plane will pass through first two vertices, and perpendicular to plane that passes through three vertices.</source>
      <comment>AttachmentPlane mode tooltip</comment>
      <translation>Płaszczyzna będzie przechodzić przez pierwsze dwa wierzchołki i będzie prostopadła do płaszczyzny, która przechodzi przez trzy wierzchołki.</translation>
    </message>
    <message>
      <location filename="../../AttacherTexts.cpp" line="169"/>
      <source>Folding</source>
      <comment>AttachmentPlane mode caption</comment>
      <translation>Składanie</translation>
    </message>
    <message>
      <location filename="../../AttacherTexts.cpp" line="170"/>
      <source>Specialty mode for folding polyhedra. Select 4 edges in order: foldable edge, fold line, other fold line, other foldable edge. Plane will be aligned to folding the first edge.</source>
      <comment>AttachmentPlane mode tooltip</comment>
      <translation>Tryb specjalny dla składania wielościanów. Wybierz 4 krawędzie w porządku: Składana krawędź, zagięcie linii, inne zagięcie linii, inna składana krawędź. Płaszczyzna będzie wyrównana do składania pierwszej krawędzi.</translation>
    </message>
    <message>
      <location filename="../../AttacherTexts.cpp" line="172"/>
      <source>Inertia 2-3</source>
      <comment>AttachmentPlane mode caption</comment>
      <translation>Bezwładność 2-3</translation>
    </message>
    <message>
      <location filename="../../AttacherTexts.cpp" line="173"/>
      <source>Plane constructed on second and third principal axes of inertia (passes through center of mass).</source>
      <comment>AttachmentPlane mode tooltip</comment>
      <translation>Płaszczyzna zbudowana na drugiej i trzeciej głównej osi bezwładności (przechodzi przez środek masy).</translation>
    </message>
  </context>
  <context>
    <name>Attacher3D</name>
    <message>
      <location filename="../../AttacherTexts.cpp" line="49"/>
      <source>Deactivated</source>
      <comment>Attachment3D mode caption</comment>
      <translation>Nieaktywny</translation>
    </message>
    <message>
      <location filename="../../AttacherTexts.cpp" line="50"/>
      <source>Attachment is disabled. Object can be moved by editing Placement property.</source>
      <comment>Attachment3D mode tooltip</comment>
      <translation>Dołączanie jest wyłączone. Obiekt może zostać przesunięty poprzez edycję właściwości umiejscowienie.</translation>
    </message>
    <message>
      <location filename="../../AttacherTexts.cpp" line="52"/>
      <source>Translate origin</source>
      <comment>Attachment3D mode caption</comment>
      <translation>Przenieś odniesienie położenia</translation>
    </message>
    <message>
      <location filename="../../AttacherTexts.cpp" line="53"/>
      <source>Origin is aligned to match Vertex. Orientation is controlled by Placement property.</source>
      <comment>Attachment3D mode tooltip</comment>
      <translation>Odniesienie położenia jest dopasowane do Wierzchołka. Orientacja jest kontrolowana przez właściwość Umieszczenie.</translation>
    </message>
    <message>
      <location filename="../../AttacherTexts.cpp" line="55"/>
      <source>Object's X Y Z</source>
      <comment>Attachment3D mode caption</comment>
      <translation>X Y Z obiektu</translation>
    </message>
    <message>
      <location filename="../../AttacherTexts.cpp" line="56"/>
      <source>Placement is made equal to Placement of linked object.</source>
      <comment>Attachment3D mode tooltip</comment>
      <translation>Umiejscowienie jest równe umiejscowieniu powiązanego obiektu.</translation>
    </message>
    <message>
      <location filename="../../AttacherTexts.cpp" line="58"/>
      <source>Object's X Z Y</source>
      <comment>Attachment3D mode caption</comment>
      <translation>X Z Y obiektu</translation>
    </message>
    <message>
      <location filename="../../AttacherTexts.cpp" line="59"/>
      <source>X', Y', Z' axes are matched with object's local X, Z, -Y, respectively.</source>
      <comment>Attachment3D mode tooltip</comment>
      <translation>Osie X', Y', Z' są przyporządkowane do lokalnych osi obiektu odpowiednio X, Z, -Y.</translation>
    </message>
    <message>
      <location filename="../../AttacherTexts.cpp" line="61"/>
      <source>Object's Y Z X</source>
      <comment>Attachment3D mode caption</comment>
      <translation>Y Z X obiektu</translation>
    </message>
    <message>
      <location filename="../../AttacherTexts.cpp" line="62"/>
      <source>X', Y', Z' axes are matched with object's local Y, Z, X, respectively.</source>
      <comment>Attachment3D mode tooltip</comment>
      <translation>Osie X', Y', Z' są przyporządkowane do lokalnych osi obiektu odpowiednio Y, Z, X.</translation>
    </message>
    <message>
      <location filename="../../AttacherTexts.cpp" line="64"/>
      <source>XY on plane</source>
      <comment>Attachment3D mode caption</comment>
      <translation>XY na płaszczyźnie</translation>
    </message>
    <message>
      <location filename="../../AttacherTexts.cpp" line="65"/>
      <source>X' Y' plane is aligned to coincide planar face.</source>
      <comment>Attachment3D mode tooltip</comment>
      <translation>Płaszczyzna X' Y' jest wyrównana do zbieżnej płaszczyzny planarnej.</translation>
    </message>
    <message>
      <location filename="../../AttacherTexts.cpp" line="67"/>
      <source>XY tangent to surface</source>
      <comment>Attachment3D mode caption</comment>
      <translation>XY prostopadłe do powierzchni</translation>
    </message>
    <message>
      <location filename="../../AttacherTexts.cpp" line="68"/>
      <source>X' Y' plane is made tangent to surface at vertex.</source>
      <comment>Attachment3D mode tooltip</comment>
      <translation>Płaszczyzna X' Y' jest wykonana prostopadle do powierzchni przy wierzchołku.</translation>
    </message>
    <message>
      <location filename="../../AttacherTexts.cpp" line="70"/>
      <source>Z tangent to edge</source>
      <comment>Attachment3D mode caption</comment>
      <translation>Z stycznie do krawędzi</translation>
    </message>
    <message>
      <location filename="../../AttacherTexts.cpp" line="71"/>
      <source>Z' axis is aligned to be tangent to edge. Optional vertex link defines where.</source>
      <comment>Attachment3D mode tooltip</comment>
      <translation>Oś Z jest wyrównana by być prostopadła do krawędzi. Opcjonalnie łącze wierzchołka definiuje gdzie.</translation>
    </message>
    <message>
      <location filename="../../AttacherTexts.cpp" line="73"/>
      <source>Frenet NBT</source>
      <comment>Attachment3D mode caption</comment>
      <translation>NBT układu Freneta</translation>
    </message>
    <message>
      <location filename="../../AttacherTexts.cpp" line="74"/>
      <location filename="../../AttacherTexts.cpp" line="77"/>
      <location filename="../../AttacherTexts.cpp" line="80"/>
      <source>Align to Frenet-Serret coordinate system of curved edge. Optional vertex link defines where.</source>
      <comment>Attachment3D mode tooltip</comment>
      <translation>Wyrównaj do układu współrzędnych Freneta Serret zaokrąglonej krawędzi. Opcjonalnie łącze wierzchołka definiuje gdzie.</translation>
    </message>
    <message>
      <location filename="../../AttacherTexts.cpp" line="76"/>
      <source>Frenet TNB</source>
      <comment>Attachment3D mode caption</comment>
      <translation>TNB układu Freneta</translation>
    </message>
    <message>
      <location filename="../../AttacherTexts.cpp" line="79"/>
      <source>Frenet TBN</source>
      <comment>Attachment3D mode caption</comment>
      <translation>TBN układu Freneta</translation>
    </message>
    <message>
      <location filename="../../AttacherTexts.cpp" line="82"/>
      <source>Concentric</source>
      <comment>Attachment3D mode caption</comment>
      <translation>Współosiowo</translation>
    </message>
    <message>
      <location filename="../../AttacherTexts.cpp" line="83"/>
      <source>Align XY plane to osculating circle of an edge. Optional vertex link defines where.</source>
      <comment>Attachment3D mode tooltip</comment>
      <translation>Wyrównaj płaszczyznę XY do koła ściśle stycznego do krawędzi. Opcjonalnie łącze wierzchołka definiuje gdzie.</translation>
    </message>
    <message>
      <location filename="../../AttacherTexts.cpp" line="85"/>
      <source>Revolution Section</source>
      <comment>Attachment3D mode caption</comment>
      <translation>Przekrój przez obrót</translation>
    </message>
    <message>
      <location filename="../../AttacherTexts.cpp" line="86"/>
      <source>Align Y' axis to match axis of osculating circle of an edge. Optional vertex link defines where.</source>
      <comment>Attachment3D mode tooltip</comment>
      <translation>Wyrównaj oś Y do osi koła ściśle stycznego do krawędzi. Opcjonalnie łącze wierzchołka definiuje gdzie.</translation>
    </message>
    <message>
      <location filename="../../AttacherTexts.cpp" line="88"/>
      <source>XY plane by 3 points</source>
      <comment>Attachment3D mode caption</comment>
      <translation>Płaszczyzna XY wyznaczona przez 3 punkty</translation>
    </message>
    <message>
      <location filename="../../AttacherTexts.cpp" line="89"/>
      <source>Align XY plane to pass through three vertices.</source>
      <comment>Attachment3D mode tooltip</comment>
      <translation>Wyrównaj płaszczyznę XY by przechodziła przez trzy wierzchołki.</translation>
    </message>
    <message>
      <location filename="../../AttacherTexts.cpp" line="91"/>
      <source>XZ plane by 3 points</source>
      <comment>Attachment3D mode caption</comment>
      <translation>Płaszczyzna XZ przez 3 punkty</translation>
    </message>
    <message>
      <location filename="../../AttacherTexts.cpp" line="92"/>
      <source>Align XZ plane to pass through 3 points; X axis will pass through two first points.</source>
      <comment>Attachment3D mode tooltip</comment>
      <translation>Wyrównaj płaszczyznę XZ do przejścia przez 3 punkty; Oś X będzie przechodzić przez dwa pierwsze punkty.</translation>
    </message>
    <message>
      <location filename="../../AttacherTexts.cpp" line="94"/>
      <source>Folding</source>
      <comment>Attachment3D mode caption</comment>
      <translation>Składanie</translation>
    </message>
    <message>
      <location filename="../../AttacherTexts.cpp" line="95"/>
      <source>Specialty mode for folding polyhedra. Select 4 edges in order: foldable edge, fold line, other fold line, other foldable edge. XY plane will be aligned to folding the first edge.</source>
      <comment>Attachment3D mode tooltip</comment>
      <translation>Tryb specjalny dla składania wielościanów. Wybierz 4 krawędzie w porządku: Składana krawędź, zagięcie linii, inne zagięcie linii, inna składana krawędź. Płaszczyzna XY będzie wyrównana do składania pierwszej krawędzi.</translation>
    </message>
    <message>
      <location filename="../../AttacherTexts.cpp" line="97"/>
      <source>Inertial CS</source>
      <comment>Attachment3D mode caption</comment>
      <translation>Inercyjny CS</translation>
    </message>
    <message>
      <location filename="../../AttacherTexts.cpp" line="98"/>
      <source>Inertial coordinate system, constructed on principal axes of inertia and center of mass.</source>
      <comment>Attachment3D mode tooltip</comment>
      <translation>Bezwładnościowy układ współrzędnych, zbudowany na głównych osiach bezwładności i środku ciężkości.</translation>
    </message>
    <message>
      <location filename="../../AttacherTexts.cpp" line="100"/>
      <source>Align O-Z-X</source>
      <comment>Attachment3D mode caption</comment>
      <translation>Wyrównaj O-Z-X</translation>
    </message>
    <message>
      <location filename="../../AttacherTexts.cpp" line="101"/>
      <source>Match origin with first Vertex. Align Z' and X' axes towards vertex/along line.</source>
      <comment>Attachment3D mode tooltip</comment>
      <translation>Dopasuj odniesienie położenia do pierwszego wierzchołka. Wyrównaj osie Z' i X' w kierunku wierzchołka/wzdłuż linii.</translation>
    </message>
    <message>
      <location filename="../../AttacherTexts.cpp" line="103"/>
      <source>Align O-Z-Y</source>
      <comment>Attachment3D mode caption</comment>
      <translation>Wyrównaj O-Z-Y</translation>
    </message>
    <message>
      <location filename="../../AttacherTexts.cpp" line="104"/>
      <source>Match origin with first Vertex. Align Z' and Y' axes towards vertex/along line.</source>
      <comment>Attachment3D mode tooltip</comment>
      <translation>Dopasuj odniesienie położenia do pierwszego wierzchołka. Wyrównaj osie Z' i Y' w kierunku wierzchołka/wzdłuż linii.</translation>
    </message>
    <message>
      <location filename="../../AttacherTexts.cpp" line="106"/>
      <location filename="../../AttacherTexts.cpp" line="181"/>
      <source>Align O-X-Y</source>
      <comment>Attachment3D mode caption</comment>
      <translation>Wyrównaj O-X-Y</translation>
    </message>
    <message>
      <location filename="../../AttacherTexts.cpp" line="107"/>
      <source>Match origin with first Vertex. Align X' and Y' axes towards vertex/along line.</source>
      <comment>Attachment3D mode tooltip</comment>
      <translation>Dopasuj odniesienie położenia do pierwszego wierzchołka. Wyrównaj osie X' i Y' w kierunku wierzchołka/wzdłuż linii.</translation>
    </message>
    <message>
      <location filename="../../AttacherTexts.cpp" line="109"/>
      <source>Align O-X-Z</source>
      <comment>Attachment3D mode caption</comment>
      <translation>Wyrównaj O-X-Z</translation>
    </message>
    <message>
      <location filename="../../AttacherTexts.cpp" line="110"/>
      <source>Match origin with first Vertex. Align X' and Z' axes towards vertex/along line.</source>
      <comment>Attachment3D mode tooltip</comment>
      <translation>Dopasuj odniesienie położenia do pierwszego wierzchołka. Wyrównaj osie X' i Z' w kierunku wierzchołka/wzdłuż linii.</translation>
    </message>
    <message>
      <location filename="../../AttacherTexts.cpp" line="112"/>
      <source>Align O-Y-Z</source>
      <comment>Attachment3D mode caption</comment>
      <translation>Wyrównaj O-Y-Z</translation>
    </message>
    <message>
      <location filename="../../AttacherTexts.cpp" line="113"/>
      <source>Match origin with first Vertex. Align Y' and Z' axes towards vertex/along line.</source>
      <comment>Attachment3D mode tooltip</comment>
      <translation>Dopasuj odniesienie położenia do pierwszego wierzchołka. Wyrównaj osie Y' i Z' w kierunku wierzchołka/wzdłuż linii.</translation>
    </message>
    <message>
      <location filename="../../AttacherTexts.cpp" line="115"/>
      <location filename="../../AttacherTexts.cpp" line="190"/>
      <source>Align O-Y-X</source>
      <comment>Attachment3D mode caption</comment>
      <translation>Wyrównaj O-Y-X</translation>
    </message>
    <message>
      <location filename="../../AttacherTexts.cpp" line="116"/>
      <source>Match origin with first Vertex. Align Y' and X' axes towards vertex/along line.</source>
      <comment>Attachment3D mode tooltip</comment>
      <translation>Dopasuj odniesienie położenia do pierwszego wierzchołka. Wyrównaj osie Y' i X' w kierunku wierzchołka/wzdłuż linii.</translation>
    </message>
    <message>
      <location filename="../../AttacherTexts.cpp" line="175"/>
      <source>Align O-N-X</source>
      <comment>Attachment3D mode caption</comment>
      <translation>Wyrównaj O-N-X</translation>
    </message>
    <message>
      <location filename="../../AttacherTexts.cpp" line="176"/>
      <source>Match origin with first Vertex. Align normal and horizontal plane axis towards vertex/along line.</source>
      <comment>Attachment3D mode tooltip</comment>
      <translation>Dopasuj odniesienie położenia do pierwszego wierzchołka. Wyrównaj wektor normalny i oś poziomą płaszczyzny do wierzchołka/wzdłuż linii.</translation>
    </message>
    <message>
      <location filename="../../AttacherTexts.cpp" line="178"/>
      <source>Align O-N-Y</source>
      <comment>Attachment3D mode caption</comment>
      <translation>Wyrównaj O-N-Y</translation>
    </message>
    <message>
      <location filename="../../AttacherTexts.cpp" line="179"/>
      <source>Match origin with first Vertex. Align normal and vertical plane axis towards vertex/along line.</source>
      <comment>Attachment3D mode tooltip</comment>
      <translation>Dopasuj odniesienie położenia do pierwszego wierzchołka. Wyrównaj wektor normalny i pionową oś płaszczyzny do wierzchołka/wzdłuż linii.</translation>
    </message>
    <message>
      <location filename="../../AttacherTexts.cpp" line="182"/>
      <source>Match origin with first Vertex. Align horizontal and vertical plane axes towards vertex/along line.</source>
      <comment>Attachment3D mode tooltip</comment>
      <translation>Dopasuj odniesienie połączenia do pierwszego wierzchołka. Wyrównaj osie płaszczyzny poziomej i pionowej w kierunku wierzchołka/wzdłuż linii.</translation>
    </message>
    <message>
      <location filename="../../AttacherTexts.cpp" line="184"/>
      <source>Align O-X-N</source>
      <comment>Attachment3D mode caption</comment>
      <translation>Wyrównaj O-X-N</translation>
    </message>
    <message>
      <location filename="../../AttacherTexts.cpp" line="185"/>
      <source>Match origin with first Vertex. Align horizontal plane axis and normal towards vertex/along line.</source>
      <comment>Attachment3D mode tooltip</comment>
      <translation>Dopasuj odniesienie połączenia do pierwszego wierzchołka. Wyrównaj oś płaszczyzny poziomej i wektor normalny do wierzchołka/wzdłuż linii.</translation>
    </message>
    <message>
      <location filename="../../AttacherTexts.cpp" line="187"/>
      <source>Align O-Y-N</source>
      <comment>Attachment3D mode caption</comment>
      <translation>Wyrównaj O-Y-N</translation>
    </message>
    <message>
      <location filename="../../AttacherTexts.cpp" line="188"/>
      <source>Match origin with first Vertex. Align vertical plane axis and normal towards vertex/along line.</source>
      <comment>Attachment3D mode tooltip</comment>
      <translation>Dopasuj odniesienie połączenia do pierwszego wierzchołka. Wyrównaj pionową płaszczyznę osi i wektory normalne do linii wierzchołka/wzdłuż linii.</translation>
    </message>
    <message>
      <location filename="../../AttacherTexts.cpp" line="191"/>
      <source>Match origin with first Vertex. Align vertical and horizontal plane axes towards vertex/along line.</source>
      <comment>Attachment3D mode tooltip</comment>
      <translation>Dopasuj odniesienie połączenia do pierwszego wierzchołka. Wyrównaj pionową i poziomą płaszczyznę osi linii wierzchołka/wzdłuż linii.</translation>
    </message>
  </context>
  <context>
    <name>BlockDefinition</name>
    <message>
      <location filename="../../DlgBlock.ui" line="14"/>
      <source>Block definition</source>
      <translation>Definicja bloku</translation>
    </message>
    <message>
      <location filename="../../DlgBlock.ui" line="20"/>
      <source>First limit</source>
      <translation>Pierwsze ograniczenie</translation>
    </message>
    <message>
      <location filename="../../DlgBlock.ui" line="40"/>
      <location filename="../../DlgBlock.ui" line="221"/>
      <source>Type:</source>
      <translation>Rodzaj:</translation>
    </message>
    <message>
      <location filename="../../DlgBlock.ui" line="47"/>
      <location filename="../../DlgBlock.ui" line="201"/>
      <source>mm</source>
      <translation>mm</translation>
    </message>
    <message>
      <location filename="../../DlgBlock.ui" line="57"/>
      <location filename="../../DlgBlock.ui" line="257"/>
      <source>Length:</source>
      <translation>Długość:</translation>
    </message>
    <message>
      <location filename="../../DlgBlock.ui" line="65"/>
      <location filename="../../DlgBlock.ui" line="229"/>
      <source>Dimension</source>
      <translation>Wymiar</translation>
    </message>
    <message>
      <location filename="../../DlgBlock.ui" line="70"/>
      <location filename="../../DlgBlock.ui" line="234"/>
      <source>Up to next</source>
      <translation>Do następnego</translation>
    </message>
    <message>
      <location filename="../../DlgBlock.ui" line="75"/>
      <location filename="../../DlgBlock.ui" line="239"/>
      <source>Up to last</source>
      <translation>Do ostatniego</translation>
    </message>
    <message>
      <location filename="../../DlgBlock.ui" line="80"/>
      <location filename="../../DlgBlock.ui" line="244"/>
      <source>Up to plane</source>
      <translation>Do płaszczyzny</translation>
    </message>
    <message>
      <location filename="../../DlgBlock.ui" line="85"/>
      <location filename="../../DlgBlock.ui" line="249"/>
      <source>Up to face</source>
      <translation>Do ściany</translation>
    </message>
    <message>
      <location filename="../../DlgBlock.ui" line="93"/>
      <location filename="../../DlgBlock.ui" line="264"/>
      <source>Limit:</source>
      <translation>Ograniczenie:</translation>
    </message>
    <message>
      <location filename="../../DlgBlock.ui" line="103"/>
      <location filename="../../DlgBlock.ui" line="142"/>
      <location filename="../../DlgBlock.ui" line="214"/>
      <location filename="../../DlgBlock.ui" line="309"/>
      <source>No selection</source>
      <translation>Nie wybrano</translation>
    </message>
    <message>
      <location filename="../../DlgBlock.ui" line="115"/>
      <source>Profile</source>
      <translation>Kontur</translation>
    </message>
    <message>
      <location filename="../../DlgBlock.ui" line="135"/>
      <source>Selection:</source>
      <translation>Wybór:</translation>
    </message>
    <message>
      <location filename="../../DlgBlock.ui" line="162"/>
      <source>Reverse</source>
      <translation>Odwróć</translation>
    </message>
    <message>
      <location filename="../../DlgBlock.ui" line="169"/>
      <source>Both sides</source>
      <translation>Obie strony</translation>
    </message>
    <message>
      <location filename="../../DlgBlock.ui" line="181"/>
      <source>Second limit</source>
      <translation>Drugie ograniczenie</translation>
    </message>
    <message>
      <location filename="../../DlgBlock.ui" line="276"/>
      <source>Direction</source>
      <translation>Kierunek</translation>
    </message>
    <message>
      <location filename="../../DlgBlock.ui" line="288"/>
      <source>Perpendicular to sketch</source>
      <translation>Prostopadle do szkicu</translation>
    </message>
    <message>
      <location filename="../../DlgBlock.ui" line="316"/>
      <source>Reference</source>
      <translation>Odniesienie</translation>
    </message>
  </context>
  <context>
    <name>CmdBoxSelection</name>
    <message>
      <location filename="../../Command.cpp" line="2419"/>
      <source>Part</source>
      <translation>Część</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="2420"/>
      <location filename="../../Command.cpp" line="2421"/>
      <location filename="../../Command.cpp" line="2423"/>
      <source>Box selection</source>
      <translation>Zaznacz obszar</translation>
    </message>
  </context>
  <context>
    <name>CmdCheckGeometry</name>
    <message>
      <location filename="../../Command.cpp" line="2127"/>
      <source>Part</source>
      <translation>Część</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="2128"/>
      <source>Check Geometry</source>
      <translation>Sprawdź geometrię</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="2129"/>
      <source>Analyzes Geometry For Errors</source>
      <translation>Analizuje geometrię pod kątem błędów</translation>
    </message>
  </context>
  <context>
    <name>CmdColorPerFace</name>
    <message>
      <location filename="../../Command.cpp" line="2161"/>
      <source>Part</source>
      <translation>Część</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="2162"/>
      <source>Color per face</source>
      <translation>Kolor dla ściany</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="2163"/>
      <source>Set the color of each individual face of the selected object.</source>
      <translation>Ustaw kolor dla każdej ściany wybranego obiektu.</translation>
    </message>
  </context>
  <context>
    <name>CmdMeasureAngular</name>
    <message>
      <location filename="../../Command.cpp" line="2231"/>
      <source>Part</source>
      <translation>Część</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="2232"/>
      <source>Measure Angular</source>
      <translation>Wymiarowanie kątowe</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="2233"/>
      <source>Measure the angle between two edges.</source>
      <translation>Zmierz kąt między dwoma krawędziami.</translation>
    </message>
  </context>
  <context>
    <name>CmdMeasureClearAll</name>
    <message>
      <location filename="../../Command.cpp" line="2290"/>
      <source>Part</source>
      <translation>Część</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="2291"/>
      <source>Clear All</source>
      <translation>Wyczyść wszystko</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="2292"/>
      <source>Clear all dimensions from the screen.</source>
      <translation>Wyczyść z ekranu wszystkie wymiary.</translation>
    </message>
  </context>
  <context>
    <name>CmdMeasureLinear</name>
    <message>
      <location filename="../../Command.cpp" line="2200"/>
      <source>Part</source>
      <translation>Część</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="2201"/>
      <source>Measure Linear</source>
      <translation>Wymiarowanie liniowe</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="2202"/>
      <source>Measure the linear distance between two points;
if edges or faces are picked, it will measure
between two vertices of them.</source>
      <translation>Mierzy odległość liniową pomiędzy dwoma punktami;
jeśli wybrane są krawędzie lub ściany, to pomiar zostanie wykonany
pomiędzy dwoma ich wierzchołkami.</translation>
    </message>
  </context>
  <context>
    <name>CmdMeasureRefresh</name>
    <message>
      <location filename="../../Command.cpp" line="2260"/>
      <source>Part</source>
      <translation>Część</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="2261"/>
      <source>Refresh</source>
      <translation>Odśwież</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="2262"/>
      <source>Recalculate the dimensions
if the measured points have moved.</source>
      <translation>Przelicz wymiary
w przypadku przesunięcia punktów pomiarowych.</translation>
    </message>
  </context>
  <context>
    <name>CmdMeasureToggle3d</name>
    <message>
      <location filename="../../Command.cpp" line="2356"/>
      <source>Part</source>
      <translation>Część</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="2357"/>
      <source>Toggle 3D</source>
      <translation>Przełącz widok 3D</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="2358"/>
      <source>Toggle on and off all direct dimensions,
including angular.</source>
      <translation>Przełącz i wyłącz wszystkie wymiary bezpośrednie,
w tym kątowe.</translation>
    </message>
  </context>
  <context>
    <name>CmdMeasureToggleAll</name>
    <message>
      <location filename="../../Command.cpp" line="2319"/>
      <source>Part</source>
      <translation>Część</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="2320"/>
      <source>Toggle All</source>
      <translation>Przełącz widoczność wszystkich</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="2321"/>
      <source>Toggle on and off all currently visible dimensions,
direct, orthogonal, and angular.</source>
      <translation>Przełącz i wyłącz wszystkie aktualnie widoczne wymiary,
bezpośrednie, ortogonalne i kątowe.</translation>
    </message>
  </context>
  <context>
    <name>CmdMeasureToggleDelta</name>
    <message>
      <location filename="../../Command.cpp" line="2387"/>
      <source>Part</source>
      <translation>Część</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="2388"/>
      <source>Toggle Delta</source>
      <translation>Przełącz Deltę</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="2389"/>
      <source>Toggle on and off all orthogonal dimensions,
meaning that a direct dimension will be decomposed
into its X, Y, and Z components.</source>
      <translation>Przełącz i wyłącz wszystkie wymiary ortogonalne,
co oznacza, że wymiar bezpośredni zostanie podzielony
na jego składowe X, Y i Z.</translation>
    </message>
  </context>
  <context>
    <name>CmdPartBoolean</name>
    <message>
      <location filename="../../Command.cpp" line="1290"/>
      <source>Part</source>
      <translation>Część</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="1291"/>
      <source>Boolean...</source>
      <translation>Logiczne...</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="1292"/>
      <source>Run a boolean operation with two shapes selected</source>
      <translation>Uruchom operację logiczną z dwoma wybranymi kształtami</translation>
    </message>
  </context>
  <context>
    <name>CmdPartBox</name>
    <message>
      <location filename="../../CommandParametric.cpp" line="87"/>
      <source>Part</source>
      <translation>Część</translation>
    </message>
    <message>
      <location filename="../../CommandParametric.cpp" line="88"/>
      <location filename="../../CommandParametric.cpp" line="99"/>
      <location filename="../../CommandParametric.cpp" line="104"/>
      <source>Cube</source>
      <translation>Sześcian</translation>
    </message>
    <message>
      <location filename="../../CommandParametric.cpp" line="89"/>
      <source>Create a cube solid</source>
      <translation>Utwórz prostopadłościan</translation>
    </message>
  </context>
  <context>
    <name>CmdPartBox2</name>
    <message>
      <location filename="../../Command.cpp" line="136"/>
      <source>Part</source>
      <translation>Część</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="137"/>
      <source>Box fix 1</source>
      <translation>Pole poprawki 1</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="138"/>
      <source>Create a box solid without dialog</source>
      <translation>Utwórz prostopadłościan bez użycia okna dialogowego</translation>
    </message>
  </context>
  <context>
    <name>CmdPartBox3</name>
    <message>
      <location filename="../../Command.cpp" line="177"/>
      <source>Part</source>
      <translation>Część</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="178"/>
      <source>Box fix 2</source>
      <translation>Pole poprawki 2</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="179"/>
      <source>Create a box solid without dialog</source>
      <translation>Utwórz prostopadłościan bez użycia okna dialogowego</translation>
    </message>
  </context>
  <context>
    <name>CmdPartBuilder</name>
    <message>
      <location filename="../../Command.cpp" line="1553"/>
      <source>Part</source>
      <translation>Część</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="1554"/>
      <source>Shape builder...</source>
      <translation>Konstruktor kształtu...</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="1555"/>
      <source>Advanced utility to create shapes</source>
      <translation>Zaawansowane narzędzie do tworzenia kształtów</translation>
    </message>
  </context>
  <context>
    <name>CmdPartChamfer</name>
    <message>
      <location filename="../../Command.cpp" line="1457"/>
      <source>Part</source>
      <translation>Część</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="1458"/>
      <source>Chamfer...</source>
      <translation>Fazka ...</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="1459"/>
      <source>Chamfer the selected edges of a shape</source>
      <translation>Fazuj wybrane krawędzie obiektu</translation>
    </message>
  </context>
  <context>
    <name>CmdPartCommon</name>
    <message>
      <location filename="../../Command.cpp" line="350"/>
      <source>Part</source>
      <translation>Część</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="351"/>
      <source>Intersection</source>
      <translation>Przecięcie</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="352"/>
      <source>Make an intersection of two shapes</source>
      <translation>Utwórz przecięcie dwóch kształtów</translation>
    </message>
  </context>
  <context>
    <name>CmdPartCompCompoundTools</name>
    <message>
      <location filename="../../Command.cpp" line="779"/>
      <source>Part</source>
      <translation>Część</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="780"/>
      <source>Compound tools</source>
      <translation>Narzędzia złożeń</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="781"/>
      <source>Compound tools: working with lists of shapes.</source>
      <translation>Narzędzia złożeń: praca z listami kształtów.</translation>
    </message>
  </context>
  <context>
    <name>CmdPartCompJoinFeatures</name>
    <message>
      <location filename="../../Command.cpp" line="551"/>
      <source>Part</source>
      <translation>Część</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="552"/>
      <source>Join objects...</source>
      <translation>Połącz obiekty ...</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="553"/>
      <source>Join walled objects</source>
      <translation>Połącz wygrodzone obiekty</translation>
    </message>
  </context>
  <context>
    <name>CmdPartCompOffset</name>
    <message>
      <location filename="../../Command.cpp" line="1743"/>
      <source>Part</source>
      <translation>Część</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="1744"/>
      <source>Offset:</source>
      <translation>Odsunięcie:</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="1745"/>
      <source>Tools to offset shapes (construct parallel shapes)</source>
      <translation>Narzędzia do odsuwania kształtów (konstrukcja równoległych kształtów)</translation>
    </message>
  </context>
  <context>
    <name>CmdPartCompSplitFeatures</name>
    <message>
      <location filename="../../Command.cpp" line="657"/>
      <source>Part</source>
      <translation>Część</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="658"/>
      <source>Split objects...</source>
      <translation>Podziel obiekty ...</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="659"/>
      <source>Shape splitting tools. Compsolid creation tools. OCC 6.9.0 or later is required.</source>
      <translation>Narzędzia do dzielenia kształtów. Narzędzia do tworzenia brył złożonych. Wymagana jest wersja OCC 6.9.0 lub nowsza.</translation>
    </message>
  </context>
  <context>
    <name>CmdPartCompound</name>
    <message>
      <location filename="../../Command.cpp" line="886"/>
      <source>Part</source>
      <translation>Część</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="887"/>
      <source>Make compound</source>
      <translation>Utwórz kształt złożony</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="888"/>
      <source>Make a compound of several shapes</source>
      <translation>Stwórz złożenie z kilku kształtów</translation>
    </message>
  </context>
  <context>
    <name>CmdPartCone</name>
    <message>
      <location filename="../../CommandParametric.cpp" line="169"/>
      <source>Part</source>
      <translation>Część</translation>
    </message>
    <message>
      <location filename="../../CommandParametric.cpp" line="170"/>
      <location filename="../../CommandParametric.cpp" line="181"/>
      <location filename="../../CommandParametric.cpp" line="186"/>
      <source>Cone</source>
      <translation>Stożek</translation>
    </message>
    <message>
      <location filename="../../CommandParametric.cpp" line="171"/>
      <source>Create a cone solid</source>
      <translation>Utwórz stożek</translation>
    </message>
  </context>
  <context>
    <name>CmdPartCrossSections</name>
    <message>
      <location filename="../../Command.cpp" line="1513"/>
      <source>Part</source>
      <translation>Część</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="1514"/>
      <source>Cross-sections...</source>
      <translation>Przekrój poprzeczny...</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="1515"/>
      <source>Cross-sections</source>
      <translation>Przekrój poprzeczny</translation>
    </message>
  </context>
  <context>
    <name>CmdPartCut</name>
    <message>
      <location filename="../../Command.cpp" line="272"/>
      <source>Part</source>
      <translation>Część</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="273"/>
      <source>Cut</source>
      <translation>Przetnij</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="274"/>
      <source>Make a cut of two shapes</source>
      <translation>Utwórz różnicę dwóch obiektów</translation>
    </message>
  </context>
  <context>
    <name>CmdPartCylinder</name>
    <message>
      <location filename="../../CommandParametric.cpp" line="46"/>
      <source>Part</source>
      <translation>Część</translation>
    </message>
    <message>
      <location filename="../../CommandParametric.cpp" line="47"/>
      <location filename="../../CommandParametric.cpp" line="58"/>
      <location filename="../../CommandParametric.cpp" line="63"/>
      <source>Cylinder</source>
      <translation>Walec</translation>
    </message>
    <message>
      <location filename="../../CommandParametric.cpp" line="48"/>
      <source>Create a Cylinder</source>
      <translation>Utwórz walec</translation>
    </message>
  </context>
  <context>
    <name>CmdPartDefeaturing</name>
    <message>
      <location filename="../../CommandSimple.cpp" line="416"/>
      <source>Part</source>
      <translation>Część</translation>
    </message>
    <message>
      <location filename="../../CommandSimple.cpp" line="417"/>
      <source>Defeaturing</source>
      <translation>Usuwanie cech</translation>
    </message>
    <message>
      <location filename="../../CommandSimple.cpp" line="418"/>
      <source>Remove feature from a shape</source>
      <translation>Usuń cechę z kształtu</translation>
    </message>
  </context>
  <context>
    <name>CmdPartElementCopy</name>
    <message>
      <location filename="../../CommandSimple.cpp" line="328"/>
      <source>Part</source>
      <translation>Część</translation>
    </message>
    <message>
      <location filename="../../CommandSimple.cpp" line="329"/>
      <source>Create shape element copy</source>
      <translation>Utwórz kopię kształtu elementu</translation>
    </message>
    <message>
      <location filename="../../CommandSimple.cpp" line="330"/>
      <source>Create a non-parametric copy of the selected shape element</source>
      <translation>Utwórz nieparametryczną kopię wybranego kształtu</translation>
    </message>
  </context>
  <context>
    <name>CmdPartExport</name>
    <message>
      <location filename="../../Command.cpp" line="1053"/>
      <source>Part</source>
      <translation>Część</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="1054"/>
      <source>Export CAD...</source>
      <translation>Eksport projektu do CAD...</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="1055"/>
      <source>Exports to a CAD file</source>
      <translation>Eksport do pliku CAD</translation>
    </message>
  </context>
  <context>
    <name>CmdPartExtrude</name>
    <message>
      <location filename="../../Command.cpp" line="1321"/>
      <source>Part</source>
      <translation>Część</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="1322"/>
      <source>Extrude...</source>
      <translation>Wyciągnięcie ...</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="1323"/>
      <source>Extrude a selected sketch</source>
      <translation>Wyciągnij wybrany szkic</translation>
    </message>
  </context>
  <context>
    <name>CmdPartFillet</name>
    <message>
      <location filename="../../Command.cpp" line="1429"/>
      <source>Part</source>
      <translation>Część</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="1430"/>
      <source>Fillet...</source>
      <translation>Zaokrąglenie ...</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="1431"/>
      <source>Fillet the selected edges of a shape</source>
      <translation>Zaokrąglij wybrane krawędzie obiektu</translation>
    </message>
  </context>
  <context>
    <name>CmdPartFuse</name>
    <message>
      <location filename="../../Command.cpp" line="450"/>
      <source>Part</source>
      <translation>Część</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="451"/>
      <source>Union</source>
      <translation>Połączenie</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="452"/>
      <source>Make a union of several shapes</source>
      <translation>Utwórz połączenie kilku kształtów</translation>
    </message>
  </context>
  <context>
    <name>CmdPartImport</name>
    <message>
      <location filename="../../Command.cpp" line="991"/>
      <source>Part</source>
      <translation>Część</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="992"/>
      <source>Import CAD...</source>
      <translation>Import projektu CAD ...</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="993"/>
      <source>Imports a CAD file</source>
      <translation>Importuje plik CAD</translation>
    </message>
  </context>
  <context>
    <name>CmdPartImportCurveNet</name>
    <message>
      <location filename="../../Command.cpp" line="1100"/>
      <source>Part</source>
      <translation>Część</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="1101"/>
      <source>Import curve network...</source>
      <translation>Importuj sieć krzywych ...</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="1102"/>
      <source>Import a curve network</source>
      <translation>Importuj sieć krzywych</translation>
    </message>
  </context>
  <context>
    <name>CmdPartLoft</name>
    <message>
      <location filename="../../Command.cpp" line="1582"/>
      <source>Part</source>
      <translation>Część</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="1583"/>
      <source>Loft...</source>
      <translation>Wyciągnięcie po profilach ...</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="1584"/>
      <source>Utility to loft</source>
      <translation>Narzędzie wyciągnięcia po profilach</translation>
    </message>
  </context>
  <context>
    <name>CmdPartMakeFace</name>
    <message>
      <location filename="../../Command.cpp" line="1349"/>
      <source>Part</source>
      <translation>Część</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="1350"/>
      <source>Make face from wires</source>
      <translation>Stwórz ścianę z polilinii</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="1351"/>
      <source>Make face from set of wires (e.g. from a sketch)</source>
      <translation>Stwórz ścianę z zestawu polilinii (np. ze szkicu)</translation>
    </message>
  </context>
  <context>
    <name>CmdPartMakeSolid</name>
    <message>
      <location filename="../../Command.cpp" line="1148"/>
      <source>Part</source>
      <translation>Część</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="1149"/>
      <source>Convert to solid</source>
      <translation>Przekształć na bryłę</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="1150"/>
      <source>Create solid from a shell or compound</source>
      <translation>Stwórz bryłę z powłoki lub złożenia</translation>
    </message>
  </context>
  <context>
    <name>CmdPartMirror</name>
    <message>
      <location filename="../../Command.cpp" line="1485"/>
      <source>Part</source>
      <translation>Część</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="1486"/>
      <source>Mirroring...</source>
      <translation>Odbicie lustrzane ...</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="1487"/>
      <source>Mirroring a selected shape</source>
      <translation>Utwórz odbicie lustrzane wybranego kształtu</translation>
    </message>
  </context>
  <context>
    <name>CmdPartOffset</name>
    <message>
      <location filename="../../Command.cpp" line="1640"/>
      <source>Part</source>
      <translation>Część</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="1641"/>
      <source>3D Offset...</source>
      <translation>Odsunięcie 3D ...</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="1642"/>
      <source>Utility to offset in 3D</source>
      <translation>Narzędzie tworzące odsunięcie w przestrzeni 3D</translation>
    </message>
  </context>
  <context>
    <name>CmdPartOffset2D</name>
    <message>
      <location filename="../../Command.cpp" line="1692"/>
      <source>Part</source>
      <translation>Część</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="1693"/>
      <source>2D Offset...</source>
      <translation>Odsunięcie 2D ...</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="1694"/>
      <source>Utility to offset planar shapes</source>
      <translation>Narzędzie do odsuwania płaskich kształtów</translation>
    </message>
  </context>
  <context>
    <name>CmdPartPickCurveNet</name>
    <message>
      <location filename="../../Command.cpp" line="90"/>
      <source>Part</source>
      <translation>Część</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="91"/>
      <source>Pick curve network</source>
      <translation>Wybierz sieć krzywych</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="92"/>
      <source>Pick a curve network</source>
      <translation>Wybierz sieć krzywych</translation>
    </message>
  </context>
  <context>
    <name>CmdPartPointsFromMesh</name>
    <message>
      <location filename="../../CommandSimple.cpp" line="179"/>
      <source>Part</source>
      <translation>Część</translation>
    </message>
    <message>
      <location filename="../../CommandSimple.cpp" line="180"/>
      <source>Create points object from mesh</source>
      <translation>Utwórz obiekt punktów z siatki</translation>
    </message>
    <message>
      <location filename="../../CommandSimple.cpp" line="181"/>
      <source>Create selectable points object from selected mesh object</source>
      <translation>Tworzenie obiektu wybieranych punktów z zaznaczonego obiektu siatki</translation>
    </message>
  </context>
  <context>
    <name>CmdPartPrimitives</name>
    <message>
      <location filename="../../Command.cpp" line="218"/>
      <source>Part</source>
      <translation>Część</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="219"/>
      <source>Create primitives...</source>
      <translation>Utwórz bryły pierwotne ...</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="220"/>
      <source>Creation of parametrized geometric primitives</source>
      <translation>Tworzenie pierwotnych brył parametrycznych</translation>
    </message>
  </context>
  <context>
    <name>CmdPartProjectionOnSurface</name>
    <message>
      <location filename="../../Command.cpp" line="2448"/>
      <source>Part</source>
      <translation>Część</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="2449"/>
      <source>Create projection on surface...</source>
      <translation>Utwórz rzut na powierzchni ...</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="2450"/>
      <source>Project edges, wires, or faces of one object
onto a face of another object.
The camera view determines the direction
of projection.</source>
      <translation>Rzutuj krawędzie, polilinie lub powierzchnie
jednego obiektu na ściany innego obiektu.
Ujęcie widoku określa kierunek rzutowania.</translation>
    </message>
  </context>
  <context>
    <name>CmdPartRefineShape</name>
    <message>
      <location filename="../../CommandSimple.cpp" line="356"/>
      <source>Part</source>
      <translation>Część</translation>
    </message>
    <message>
      <location filename="../../CommandSimple.cpp" line="357"/>
      <source>Refine shape</source>
      <translation>Udoskonal kształt</translation>
    </message>
    <message>
      <location filename="../../CommandSimple.cpp" line="358"/>
      <source>Refine the copy of a shape</source>
      <translation>Udoskonal kopię kształtu</translation>
    </message>
  </context>
  <context>
    <name>CmdPartReverseShape</name>
    <message>
      <location filename="../../Command.cpp" line="1227"/>
      <source>Part</source>
      <translation>Część</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="1228"/>
      <source>Reverse shapes</source>
      <translation>Odwróć kształty</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="1229"/>
      <source>Reverse orientation of shapes</source>
      <translation>Odwróć orientację kształtów</translation>
    </message>
  </context>
  <context>
    <name>CmdPartRevolve</name>
    <message>
      <location filename="../../Command.cpp" line="1401"/>
      <source>Part</source>
      <translation>Część</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="1402"/>
      <source>Revolve...</source>
      <translation>Obrót...</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="1403"/>
      <source>Revolve a selected shape</source>
      <translation>Wyciągnij przez obrót wybrany kształt</translation>
    </message>
  </context>
  <context>
    <name>CmdPartRuledSurface</name>
    <message>
      <location filename="../../Command.cpp" line="2011"/>
      <source>Part</source>
      <translation>Część</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="2012"/>
      <source>Create ruled surface</source>
      <translation>Utwórz powierzchnię prostokreślną</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="2013"/>
      <source>Create a ruled surface from either two Edges or two wires</source>
      <translation>Utwórz powierzchnię prostokreślną z krawędzi lub polilinii</translation>
    </message>
  </context>
  <context>
    <name>CmdPartSection</name>
    <message>
      <location filename="../../Command.cpp" line="943"/>
      <source>Part</source>
      <translation>Część</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="944"/>
      <source>Section</source>
      <translation>Przecięcie</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="945"/>
      <source>Make a section of two shapes</source>
      <translation>Utwórz część wspólną z dwóch kształtów</translation>
    </message>
  </context>
  <context>
    <name>CmdPartShapeFromMesh</name>
    <message>
      <location filename="../../CommandSimple.cpp" line="107"/>
      <source>Part</source>
      <translation>Część</translation>
    </message>
    <message>
      <location filename="../../CommandSimple.cpp" line="108"/>
      <source>Create shape from mesh...</source>
      <translation>Utwórz kształt z siatki ...</translation>
    </message>
    <message>
      <location filename="../../CommandSimple.cpp" line="109"/>
      <source>Create shape from selected mesh object</source>
      <translation>Utwórz kształt z siatki wybranego obiektu</translation>
    </message>
  </context>
  <context>
    <name>CmdPartSimpleCopy</name>
    <message>
      <location filename="../../CommandSimple.cpp" line="229"/>
      <source>Part</source>
      <translation>Część</translation>
    </message>
    <message>
      <location filename="../../CommandSimple.cpp" line="230"/>
      <source>Create simple copy</source>
      <translation>Utwórz prostą kopię</translation>
    </message>
    <message>
      <location filename="../../CommandSimple.cpp" line="231"/>
      <source>Create a simple non-parametric copy</source>
      <translation>Utwórz nieparametryczną kopię</translation>
    </message>
  </context>
  <context>
    <name>CmdPartSimpleCylinder</name>
    <message>
      <location filename="../../CommandSimple.cpp" line="57"/>
      <source>Part</source>
      <translation>Część</translation>
    </message>
    <message>
      <location filename="../../CommandSimple.cpp" line="58"/>
      <source>Create Cylinder...</source>
      <translation>Utwórz walec ...</translation>
    </message>
    <message>
      <location filename="../../CommandSimple.cpp" line="59"/>
      <source>Create a Cylinder</source>
      <translation>Utwórz walec</translation>
    </message>
  </context>
  <context>
    <name>CmdPartSphere</name>
    <message>
      <location filename="../../CommandParametric.cpp" line="128"/>
      <source>Part</source>
      <translation>Część</translation>
    </message>
    <message>
      <location filename="../../CommandParametric.cpp" line="129"/>
      <location filename="../../CommandParametric.cpp" line="140"/>
      <location filename="../../CommandParametric.cpp" line="145"/>
      <source>Sphere</source>
      <translation>Sfera</translation>
    </message>
    <message>
      <location filename="../../CommandParametric.cpp" line="130"/>
      <source>Create a sphere solid</source>
      <translation>Utwórz sferę</translation>
    </message>
  </context>
  <context>
    <name>CmdPartSweep</name>
    <message>
      <location filename="../../Command.cpp" line="1611"/>
      <source>Part</source>
      <translation>Część</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="1612"/>
      <source>Sweep...</source>
      <translation>Wyciągnięcie po ścieżce ...</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="1613"/>
      <source>Utility to sweep</source>
      <translation>Narzędzie do wyciągnięcia po ścieżce</translation>
    </message>
  </context>
  <context>
    <name>CmdPartThickness</name>
    <message>
      <location filename="../../Command.cpp" line="1836"/>
      <source>Part</source>
      <translation>Część</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="1837"/>
      <source>Thickness...</source>
      <translation>Grubość ...</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="1838"/>
      <source>Utility to apply a thickness</source>
      <translation>Narzędzie do nadawania grubości</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="1850"/>
      <location filename="../../Command.cpp" line="1870"/>
      <source>Wrong selection</source>
      <translation>Niewłaściwy wybór</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="1851"/>
      <source>Selected one or more faces of a shape</source>
      <translation>Wybrano jedną lub więcej powierzchni kształtu</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="1871"/>
      <source>Selected shape is not a solid</source>
      <translation>Zaznaczony kształt nie jest bryłą</translation>
    </message>
  </context>
  <context>
    <name>CmdPartTorus</name>
    <message>
      <location filename="../../CommandParametric.cpp" line="210"/>
      <source>Part</source>
      <translation>Część</translation>
    </message>
    <message>
      <location filename="../../CommandParametric.cpp" line="211"/>
      <location filename="../../CommandParametric.cpp" line="222"/>
      <location filename="../../CommandParametric.cpp" line="227"/>
      <source>Torus</source>
      <translation>Torus</translation>
    </message>
    <message>
      <location filename="../../CommandParametric.cpp" line="212"/>
      <source>Create a torus solid</source>
      <translation>Utwórz torus</translation>
    </message>
  </context>
  <context>
    <name>CmdPartTransformedCopy</name>
    <message>
      <location filename="../../CommandSimple.cpp" line="300"/>
      <source>Part</source>
      <translation>Część</translation>
    </message>
    <message>
      <location filename="../../CommandSimple.cpp" line="301"/>
      <source>Create transformed copy</source>
      <translation>Utwórz przekształconą kopię</translation>
    </message>
    <message>
      <location filename="../../CommandSimple.cpp" line="302"/>
      <source>Create a non-parametric copy with transformed placement</source>
      <translation>Utwórz kopię nieparametryczną z przekształconym umiejscowieniem</translation>
    </message>
  </context>
  <context>
    <name>Command</name>
    <message>
      <location filename="../../Command.cpp" line="147"/>
      <location filename="../../Command.cpp" line="188"/>
      <source>Part Box Create</source>
      <translation>Tworzenie sześcianu środowiska Część</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="307"/>
      <source>Part Cut</source>
      <translation>Częściowe cięcie</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="408"/>
      <source>Common</source>
      <translation>Część wspólna</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="508"/>
      <source>Fusion</source>
      <translation>Połączenie</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="921"/>
      <source>Compound</source>
      <translation>Złożenie</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="966"/>
      <source>Section</source>
      <translation>Przekrój</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="1017"/>
      <source>Import Part</source>
      <translation>Importuj część</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="1123"/>
      <source>Part Import Curve Net</source>
      <translation>Importuj sieć krzywych w środowisku Część</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="1240"/>
      <source>Reverse</source>
      <translation>Odwróć</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="1363"/>
      <source>Make face</source>
      <translation>Utwórz ścianę</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="1657"/>
      <source>Make Offset</source>
      <translation>Dokonaj odsunięcia</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="1709"/>
      <source>Make 2D Offset</source>
      <translation>Wykonaj odsunięcie 2D</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="1877"/>
      <source>Make Thickness</source>
      <translation>Stwórz grubość</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="2102"/>
      <source>Create ruled surface</source>
      <translation>Utwórz powierzchnię prostokreślną</translation>
    </message>
    <message>
      <location filename="../../CommandSimple.cpp" line="72"/>
      <source>Create Part Cylinder</source>
      <translation>Utwórz cylinder środowiska Część</translation>
    </message>
    <message>
      <location filename="../../CommandSimple.cpp" line="137"/>
      <source>Convert mesh</source>
      <translation>Konwertuj siatkę</translation>
    </message>
    <message>
      <location filename="../../CommandSimple.cpp" line="196"/>
      <source>Points from mesh</source>
      <translation>Punkty z siatki</translation>
    </message>
    <message>
      <location filename="../../CommandSimple.cpp" line="373"/>
      <source>Refine shape</source>
      <translation>Udoskonal kształt</translation>
    </message>
    <message>
      <location filename="../../CommandSimple.cpp" line="430"/>
      <source>Defeaturing</source>
      <translation>Usuwanie cech</translation>
    </message>
    <message>
      <location filename="../../TaskAttacher.cpp" line="1063"/>
      <source>Edit attachment</source>
      <translation>Edytuj dołączenie</translation>
    </message>
    <message>
      <location filename="../../TaskFaceColors.cpp" line="432"/>
      <source>Change face colors</source>
      <translation>Zmień kolory ściany</translation>
    </message>
    <message>
      <location filename="../../TaskLoft.cpp" line="202"/>
      <source>Loft</source>
      <translation>Wyciągnięcie po profilach</translation>
    </message>
    <message>
      <location filename="../../TaskShapeBuilder.cpp" line="240"/>
      <source>Edge</source>
      <translation>Krawędź</translation>
    </message>
    <message>
      <location filename="../../TaskShapeBuilder.cpp" line="281"/>
      <source>Wire</source>
      <translation>Polilinia</translation>
    </message>
    <message>
      <location filename="../../TaskShapeBuilder.cpp" line="333"/>
      <location filename="../../TaskShapeBuilder.cpp" line="385"/>
      <source>Face</source>
      <translation>Ściana</translation>
    </message>
    <message>
      <location filename="../../TaskShapeBuilder.cpp" line="448"/>
      <source>Shell</source>
      <translation>Powłoka</translation>
    </message>
    <message>
      <location filename="../../TaskShapeBuilder.cpp" line="500"/>
      <source>Solid</source>
      <translation>Bryła</translation>
    </message>
    <message>
      <location filename="../../TaskSweep.cpp" line="342"/>
      <source>Sweep</source>
      <translation>Wyciągnięcie po ścieżce</translation>
    </message>
    <message>
      <location filename="../../ViewProviderMirror.cpp" line="199"/>
      <source>Edit Mirror</source>
      <translation>Edytuj odbicie lustrzane</translation>
    </message>
  </context>
  <context>
    <name>PartDesignGui::TaskDatumParameters</name>
    <message>
      <location filename="../../../AttachmentEditor/TaskAttachmentEditor.ui" line="14"/>
      <source>Form</source>
      <translation>Formularz</translation>
    </message>
    <message>
      <location filename="../../../AttachmentEditor/TaskAttachmentEditor.ui" line="20"/>
      <source>Selection accepted</source>
      <translation>Wybór zaakceptowany</translation>
    </message>
    <message>
      <location filename="../../../AttachmentEditor/TaskAttachmentEditor.ui" line="35"/>
      <source>Reference 1</source>
      <translation>Odniesienie 1</translation>
    </message>
    <message>
      <location filename="../../../AttachmentEditor/TaskAttachmentEditor.ui" line="52"/>
      <source>Reference 2</source>
      <translation>Odniesienie 2</translation>
    </message>
    <message>
      <location filename="../../../AttachmentEditor/TaskAttachmentEditor.ui" line="69"/>
      <source>Reference 3</source>
      <translation>Odniesienie 3</translation>
    </message>
    <message>
      <location filename="../../../AttachmentEditor/TaskAttachmentEditor.ui" line="86"/>
      <source>Reference 4</source>
      <translation>Odniesienie 4</translation>
    </message>
    <message>
      <location filename="../../../AttachmentEditor/TaskAttachmentEditor.ui" line="101"/>
      <source>Attachment mode:</source>
      <translation>Tryb mocowania:</translation>
    </message>
    <message>
      <location filename="../../../AttachmentEditor/TaskAttachmentEditor.ui" line="124"/>
      <source>Attachment Offset (in local coordinates):</source>
      <translation>Odsunięcie dołączenia (według lokalnych współrzędnych):</translation>
    </message>
    <message>
      <location filename="../../../AttachmentEditor/TaskAttachmentEditor.ui" line="136"/>
      <source>In x-direction:</source>
      <translation>W kierunku x:</translation>
    </message>
    <message>
      <location filename="../../../AttachmentEditor/TaskAttachmentEditor.ui" line="152"/>
      <source>In y-direction:</source>
      <translation>W kierunku y:</translation>
    </message>
    <message>
      <location filename="../../../AttachmentEditor/TaskAttachmentEditor.ui" line="171"/>
      <location filename="../../../AttachmentEditor/TaskAttachmentEditor.ui" line="203"/>
      <location filename="../../../AttachmentEditor/TaskAttachmentEditor.ui" line="261"/>
      <source>Note: The placement is expressed in local space of object being attached.</source>
      <translation>Uwaga: Punkt bazowy jest wyrażony w przestrzeni lokalnej dołączanego obiektu.</translation>
    </message>
    <message>
      <location filename="../../../AttachmentEditor/TaskAttachmentEditor.ui" line="184"/>
      <source>In z-direction:</source>
      <translation>W kierunku z:</translation>
    </message>
    <message>
      <location filename="../../../AttachmentEditor/TaskAttachmentEditor.ui" line="216"/>
      <source>Around x-axis:</source>
      <translation>Wokół osi X:</translation>
    </message>
    <message>
      <location filename="../../../AttachmentEditor/TaskAttachmentEditor.ui" line="229"/>
      <source>Around y-axis:</source>
      <translation>Wokół osi Y:</translation>
    </message>
    <message>
      <location filename="../../../AttachmentEditor/TaskAttachmentEditor.ui" line="242"/>
      <source>Around z-axis:</source>
      <translation>Wokół osi Z:</translation>
    </message>
    <message>
      <location filename="../../../AttachmentEditor/TaskAttachmentEditor.ui" line="280"/>
      <source>Rotation around the x-axis
Note: The placement is expressed in local space of object being attached.</source>
      <translation>Obrót wokół osi x
Uwaga: Położenie jest wyrażone w przestrzeni lokalnej dołączanego obiektu.</translation>
    </message>
    <message>
      <location filename="../../../AttachmentEditor/TaskAttachmentEditor.ui" line="312"/>
      <source>Rotation around the y-axis
Note: The placement is expressed in local space of object being attached.</source>
      <translation>Obrót wokół osi y
Uwaga: Położenie jest wyrażone w przestrzeni lokalnej dołączanego obiektu.</translation>
    </message>
    <message>
      <location filename="../../../AttachmentEditor/TaskAttachmentEditor.ui" line="344"/>
      <source>Rotation around the z-axis
Note: The placement is expressed in local space of object being attached.</source>
      <translation>Obrót wokół osi x
Uwaga: Położenie jest wyrażone w przestrzeni lokalnej dołączanego obiektu.</translation>
    </message>
    <message>
      <location filename="../../../AttachmentEditor/TaskAttachmentEditor.ui" line="367"/>
      <source>Flip sides</source>
      <translation>Odwróć strony</translation>
    </message>
  </context>
  <context>
    <name>PartGui::CrossSections</name>
    <message>
      <location filename="../../CrossSections.ui" line="14"/>
      <source>Cross sections</source>
      <translation>Przekrój poprzeczny</translation>
    </message>
    <message>
      <location filename="../../CrossSections.ui" line="20"/>
      <source>Guiding plane</source>
      <translation>Płaszczyzna prowadzenia</translation>
    </message>
    <message>
      <location filename="../../CrossSections.ui" line="26"/>
      <source>XY</source>
      <translation>XY</translation>
    </message>
    <message>
      <location filename="../../CrossSections.ui" line="36"/>
      <source>XZ</source>
      <translation>XZ</translation>
    </message>
    <message>
      <location filename="../../CrossSections.ui" line="43"/>
      <source>YZ</source>
      <translation>YZ</translation>
    </message>
    <message>
      <location filename="../../CrossSections.ui" line="52"/>
      <source>Position:</source>
      <translation>Pozycja:</translation>
    </message>
    <message>
      <location filename="../../CrossSections.ui" line="71"/>
      <source>Sections</source>
      <translation>Przekroje</translation>
    </message>
    <message>
      <location filename="../../CrossSections.ui" line="83"/>
      <source>On both sides</source>
      <translation>Po obu stronach</translation>
    </message>
    <message>
      <location filename="../../CrossSections.ui" line="92"/>
      <source>Count</source>
      <translation>Przelicz</translation>
    </message>
    <message>
      <location filename="../../CrossSections.ui" line="109"/>
      <source>Distance:</source>
      <translation>Odległość:</translation>
    </message>
  </context>
  <context>
    <name>PartGui::DlgBooleanOperation</name>
    <message>
      <location filename="../../DlgBooleanOperation.ui" line="14"/>
      <source>Boolean Operation</source>
      <translation>Operacja logiczna</translation>
    </message>
    <message>
      <location filename="../../DlgBooleanOperation.ui" line="20"/>
      <source>Boolean operation</source>
      <translation>Operacja logiczna</translation>
    </message>
    <message>
      <location filename="../../DlgBooleanOperation.ui" line="32"/>
      <source>Section</source>
      <translation>Przecięcie</translation>
    </message>
    <message>
      <location filename="../../DlgBooleanOperation.ui" line="39"/>
      <source>Difference</source>
      <translation>Różnica</translation>
    </message>
    <message>
      <location filename="../../DlgBooleanOperation.ui" line="46"/>
      <source>Union</source>
      <translation>Połączenie</translation>
    </message>
    <message>
      <location filename="../../DlgBooleanOperation.ui" line="56"/>
      <source>Intersection</source>
      <translation>Przecięcie</translation>
    </message>
    <message>
      <location filename="../../DlgBooleanOperation.ui" line="76"/>
      <source>First shape</source>
      <translation>Pierwszy kształt</translation>
    </message>
    <message>
      <location filename="../../DlgBooleanOperation.ui" line="81"/>
      <location filename="../../DlgBooleanOperation.ui" line="119"/>
      <source>Solids</source>
      <translation>Bryły</translation>
    </message>
    <message>
      <location filename="../../DlgBooleanOperation.ui" line="86"/>
      <location filename="../../DlgBooleanOperation.ui" line="124"/>
      <source>Shells</source>
      <translation>Powłoki</translation>
    </message>
    <message>
      <location filename="../../DlgBooleanOperation.ui" line="91"/>
      <location filename="../../DlgBooleanOperation.ui" line="129"/>
      <source>Compounds</source>
      <translation>Kształt złożony</translation>
    </message>
    <message>
      <location filename="../../DlgBooleanOperation.ui" line="96"/>
      <location filename="../../DlgBooleanOperation.ui" line="134"/>
      <source>Faces</source>
      <translation>Ściany</translation>
    </message>
    <message>
      <location filename="../../DlgBooleanOperation.ui" line="114"/>
      <source>Second shape</source>
      <translation>Drugi kształt</translation>
    </message>
    <message>
      <location filename="../../DlgBooleanOperation.ui" line="155"/>
      <source>Swap selection</source>
      <translation>Odwróć zaznaczenie</translation>
    </message>
    <message>
      <location filename="../../DlgBooleanOperation.cpp" line="378"/>
      <source>Select a shape on the left side, first</source>
      <translation>Najpierw zaznacz kształt po lewej stronie</translation>
    </message>
    <message>
      <location filename="../../DlgBooleanOperation.cpp" line="383"/>
      <source>Select a shape on the right side, first</source>
      <translation>Najpierw zaznacz kształt po prawej stronie,</translation>
    </message>
    <message>
      <location filename="../../DlgBooleanOperation.cpp" line="388"/>
      <source>Cannot perform a boolean operation with the same shape</source>
      <translation>Nie można wykonać operacji logicznej na tym samym kształcie</translation>
    </message>
    <message>
      <location filename="../../DlgBooleanOperation.cpp" line="398"/>
      <source>No active document available</source>
      <translation>Brak aktywnego dokumentu</translation>
    </message>
    <message>
      <location filename="../../DlgBooleanOperation.cpp" line="408"/>
      <source>One of the selected objects doesn't exist anymore</source>
      <translation>Jeden z zaznaczonych obiektów nie istnieje</translation>
    </message>
    <message>
      <location filename="../../DlgBooleanOperation.cpp" line="415"/>
      <source>Performing union on non-solids is not possible</source>
      <translation>Utworzenie złączenia na obiektach nie będących bryłami nie jest możliwe</translation>
    </message>
    <message>
      <location filename="../../DlgBooleanOperation.cpp" line="424"/>
      <source>Performing intersection on non-solids is not possible</source>
      <translation>Utworzenie iloczynu obiektów nie będących bryłami nie jest możliwe</translation>
    </message>
    <message>
      <location filename="../../DlgBooleanOperation.cpp" line="433"/>
      <source>Performing difference on non-solids is not possible</source>
      <translation>Utworzenie różnicy obiektów nie będących bryłami nie jest możliwe</translation>
    </message>
  </context>
  <context>
    <name>PartGui::DlgChamferEdges</name>
    <message>
      <location filename="../../DlgFilletEdges.cpp" line="1041"/>
      <source>Chamfer Edges</source>
      <translation>Fazowanie krawędzi</translation>
    </message>
  </context>
  <context>
    <name>PartGui::DlgExtrusion</name>
    <message>
      <location filename="../../DlgExtrusion.ui" line="14"/>
      <source>Extrude</source>
      <translation>Wyciągnięcie</translation>
    </message>
    <message>
      <location filename="../../DlgExtrusion.ui" line="26"/>
      <source>Direction</source>
      <translation>Kierunek</translation>
    </message>
    <message>
      <location filename="../../DlgExtrusion.ui" line="32"/>
      <source>If checked, direction of extrusion is reversed.</source>
      <translation>Jeśli opcja jest zaznaczona, kierunek wyciągnięcia jest odwrotny.</translation>
    </message>
    <message>
      <location filename="../../DlgExtrusion.ui" line="35"/>
      <source>Reversed</source>
      <translation>Odwrócony</translation>
    </message>
    <message>
      <location filename="../../DlgExtrusion.ui" line="42"/>
      <source>Specify direction manually using X,Y,Z values.</source>
      <translation>Określ ręcznie kierunek za pomocą wartości X, Y, Z.</translation>
    </message>
    <message>
      <location filename="../../DlgExtrusion.ui" line="45"/>
      <source>Custom direction:</source>
      <translation>Kierunek niestandardowy:</translation>
    </message>
    <message>
      <location filename="../../DlgExtrusion.ui" line="52"/>
      <source>Extrude perpendicularly to plane of input shape.</source>
      <translation>Wyciągnij prostopadle do płaszczyzny wprowadzonych form.</translation>
    </message>
    <message>
      <location filename="../../DlgExtrusion.ui" line="55"/>
      <source>Along normal</source>
      <translation>Wzdłuż wektora normalnej</translation>
    </message>
    <message>
      <location filename="../../DlgExtrusion.ui" line="65"/>
      <source>Click to start selecting an edge in 3d view.</source>
      <translation>Kliknij, aby rozpocząć wybieranie krawędzi w oknie widoku 3D.</translation>
    </message>
    <message>
      <location filename="../../DlgExtrusion.ui" line="68"/>
      <location filename="../../DlgExtrusion.cpp" line="208"/>
      <source>Select</source>
      <translation>Wybierz</translation>
    </message>
    <message>
      <location filename="../../DlgExtrusion.ui" line="78"/>
      <source>Set direction to match a direction of straight edge. Hint: to account for length of the edge too, set both lengths to zero.</source>
      <translation>Ustaw kierunek, aby dopasować kierunek prostej krawędzi. 
Wskazówka: aby uwzględnić również długość krawędzi, ustaw obie wartości długości na zero.</translation>
    </message>
    <message>
      <location filename="../../DlgExtrusion.ui" line="81"/>
      <source>Along edge:</source>
      <translation>Wzdłuż krawędzi:</translation>
    </message>
    <message>
      <location filename="../../DlgExtrusion.ui" line="99"/>
      <source>X:</source>
      <translation>X:</translation>
    </message>
    <message>
      <location filename="../../DlgExtrusion.ui" line="122"/>
      <source>Y:</source>
      <translation>Y:</translation>
    </message>
    <message>
      <location filename="../../DlgExtrusion.ui" line="145"/>
      <source>Z:</source>
      <translation>Z:</translation>
    </message>
    <message>
      <location filename="../../DlgExtrusion.ui" line="179"/>
      <source>Length</source>
      <translation>Odstęp</translation>
    </message>
    <message>
      <location filename="../../DlgExtrusion.ui" line="185"/>
      <source>Along:</source>
      <translation>Wzdłuż:</translation>
    </message>
    <message>
      <location filename="../../DlgExtrusion.ui" line="204"/>
      <source>Length to extrude along direction (can be negative). If both lengths are zero, magnitude of direction is used.</source>
      <translation>Długość do wyciągnięcia wzdłuż kierunku (może by ujemna). Jeśli obie długości wynoszą zero, wielkość kierunku jest używana.</translation>
    </message>
    <message>
      <location filename="../../DlgExtrusion.ui" line="223"/>
      <source>Against:</source>
      <translation>Przeciwnie:</translation>
    </message>
    <message>
      <location filename="../../DlgExtrusion.ui" line="242"/>
      <source>Length to extrude against direction (can be negative).</source>
      <translation>Długość do wyciągnięcia przeciwko kierunkowi (może być ujemna).</translation>
    </message>
    <message>
      <location filename="../../DlgExtrusion.ui" line="261"/>
      <source>Distribute extrusion length equally to both sides.</source>
      <translation>Rozprowadzić długość wyciągnięcia równomiernie po obu stronach.</translation>
    </message>
    <message>
      <location filename="../../DlgExtrusion.ui" line="264"/>
      <source>Symmetric</source>
      <translation>Symetrycznie</translation>
    </message>
    <message>
      <location filename="../../DlgExtrusion.ui" line="276"/>
      <source>Taper outward angle</source>
      <translation>Bierny kąt stożka</translation>
    </message>
    <message>
      <location filename="../../DlgExtrusion.ui" line="289"/>
      <location filename="../../DlgExtrusion.ui" line="314"/>
      <source>Apply slope (draft) to extrusion side faces.</source>
      <translation>Wprowadź nachylenie (zbieżność) do bocznych stron ścian wyciągnięcia.</translation>
    </message>
    <message>
      <location filename="../../DlgExtrusion.ui" line="335"/>
      <source>If checked, extruding closed wires will give solids, not shells.</source>
      <translation>Jeśli zaznaczone, wyciągnięcie zamkniętych polilinii da bryły, a nie powłoki.</translation>
    </message>
    <message>
      <location filename="../../DlgExtrusion.ui" line="338"/>
      <source>Create solid</source>
      <translation>Utwórz bryłę</translation>
    </message>
    <message>
      <location filename="../../DlgExtrusion.ui" line="368"/>
      <source>Shape</source>
      <translation>Kształt</translation>
    </message>
    <message>
      <location filename="../../DlgExtrusion.cpp" line="182"/>
      <source>Selecting...</source>
      <translation>Wybieranie...</translation>
    </message>
    <message>
      <location filename="../../DlgExtrusion.cpp" line="423"/>
      <source>The document '%1' doesn't exist.</source>
      <translation>Dokument "%1" nie istnieje.</translation>
    </message>
    <message>
      <location filename="../../DlgExtrusion.cpp" line="470"/>
      <location filename="../../DlgExtrusion.cpp" line="475"/>
      <source>Creating Extrusion failed.
%1</source>
      <translation>Tworzenie wyciągnięcia nie powiodło się.
%1</translation>
    </message>
    <message>
      <location filename="../../DlgExtrusion.cpp" line="542"/>
      <source>Object not found: %1</source>
      <translation>Nie znaleziono obiektu: %1</translation>
    </message>
    <message>
      <location filename="../../DlgExtrusion.cpp" line="604"/>
      <source>No shapes selected for extrusion. Select some, first.</source>
      <translation>Kształty nie zostały zaznaczone do ekstruzji. Najpierw wybierz kilka.</translation>
    </message>
    <message>
      <location filename="../../DlgExtrusion.cpp" line="625"/>
      <source>Extrusion direction link is invalid.

%1</source>
      <translation>Link kierunku wyciągnięcia jest nieprawidłowy.

%1</translation>
    </message>
    <message>
      <location filename="../../DlgExtrusion.cpp" line="627"/>
      <source>Direction mode is to use an edge, but no edge is linked.</source>
      <translation>Tryb kierunku jest do używania krawędzi, ale krawędź nie jest połączona.</translation>
    </message>
    <message>
      <location filename="../../DlgExtrusion.cpp" line="650"/>
      <source>Can't determine normal vector of shape to be extruded. Please use other mode. 

(%1)</source>
      <translation>Nie można określić normalnego wektora kształtu, aby był wyciągnięty. Użyj innego trybu.

%1</translation>
    </message>
    <message>
      <location filename="../../DlgExtrusion.cpp" line="660"/>
      <source>Extrusion direction vector is zero-length. It must be non-zero.</source>
      <translation>Wyciągnięcie posiada wartość zerowej długości. Musi być ona różna od zera.</translation>
    </message>
    <message>
      <location filename="../../DlgExtrusion.cpp" line="671"/>
      <source>Total extrusion length is zero (length1 == -length2). It must be nonzero.</source>
      <translation>Całkowita długość wyciągnięcia jest równa zero (długość1 == -długość2). Musi być różna od zera.</translation>
    </message>
  </context>
  <context>
    <name>PartGui::DlgFilletEdges</name>
    <message>
      <location filename="../../DlgFilletEdges.ui" line="14"/>
      <source>Fillet Edges</source>
      <translation>Zaokrąglenie krawędzi</translation>
    </message>
    <message>
      <location filename="../../DlgFilletEdges.ui" line="20"/>
      <source>Shape</source>
      <translation>Kształt</translation>
    </message>
    <message>
      <location filename="../../DlgFilletEdges.ui" line="32"/>
      <source>Selected shape:</source>
      <translation>Wybrany kształt:</translation>
    </message>
    <message>
      <location filename="../../DlgFilletEdges.ui" line="40"/>
      <source>No selection</source>
      <translation>Nie wybrano</translation>
    </message>
    <message>
      <location filename="../../DlgFilletEdges.ui" line="51"/>
      <source>Fillet Parameter</source>
      <translation>Parametry zaokrąglenia</translation>
    </message>
    <message>
      <location filename="../../DlgFilletEdges.ui" line="57"/>
      <source>Selection</source>
      <translation>Zaznaczanie</translation>
    </message>
    <message>
      <location filename="../../DlgFilletEdges.ui" line="63"/>
      <source>Select edges</source>
      <translation>Wybierz krawędzie</translation>
    </message>
    <message>
      <location filename="../../DlgFilletEdges.ui" line="73"/>
      <source>Select faces</source>
      <translation>Wybierz ściany</translation>
    </message>
    <message>
      <location filename="../../DlgFilletEdges.ui" line="80"/>
      <source>All</source>
      <translation>Wszystkie</translation>
    </message>
    <message>
      <location filename="../../DlgFilletEdges.ui" line="87"/>
      <source>None</source>
      <translation>Brak</translation>
    </message>
    <message>
      <location filename="../../DlgFilletEdges.ui" line="110"/>
      <source>Fillet type:</source>
      <translation>Typ zaokrąglenia:</translation>
    </message>
    <message>
      <location filename="../../DlgFilletEdges.ui" line="118"/>
      <source>Constant Radius</source>
      <translation>Promień stały</translation>
    </message>
    <message>
      <location filename="../../DlgFilletEdges.ui" line="123"/>
      <source>Variable Radius</source>
      <translation>Promień zmienny</translation>
    </message>
    <message>
      <location filename="../../DlgFilletEdges.ui" line="142"/>
      <source>Radius:</source>
      <translation>Promień:</translation>
    </message>
    <message>
      <location filename="../../DlgFilletEdges.cpp" line="266"/>
      <source>Length:</source>
      <translation>Długość:</translation>
    </message>
    <message>
      <location filename="../../DlgFilletEdges.cpp" line="267"/>
      <source>Constant Length</source>
      <translation>Długość stała</translation>
    </message>
    <message>
      <location filename="../../DlgFilletEdges.cpp" line="268"/>
      <source>Variable Length</source>
      <translation>Długość zmienna</translation>
    </message>
    <message>
      <location filename="../../DlgFilletEdges.cpp" line="270"/>
      <source>Edges to chamfer</source>
      <translation>Krawędzie do fazowania</translation>
    </message>
    <message>
      <location filename="../../DlgFilletEdges.cpp" line="271"/>
      <location filename="../../DlgFilletEdges.cpp" line="838"/>
      <source>Start length</source>
      <translation>Długość początkowa</translation>
    </message>
    <message>
      <location filename="../../DlgFilletEdges.cpp" line="272"/>
      <source>End length</source>
      <translation>Długość końcowa</translation>
    </message>
    <message>
      <location filename="../../DlgFilletEdges.cpp" line="275"/>
      <source>Edges to fillet</source>
      <translation>Krawędzie do zaokrąglenia</translation>
    </message>
    <message>
      <location filename="../../DlgFilletEdges.cpp" line="276"/>
      <location filename="../../DlgFilletEdges.cpp" line="840"/>
      <source>Start radius</source>
      <translation>Początek promienia</translation>
    </message>
    <message>
      <location filename="../../DlgFilletEdges.cpp" line="277"/>
      <source>End radius</source>
      <translation>Koniec promienia</translation>
    </message>
    <message>
      <location filename="../../DlgFilletEdges.cpp" line="687"/>
      <location filename="../../DlgFilletEdges.cpp" line="747"/>
      <source>Edge%1</source>
      <translation>Krawędź %1</translation>
    </message>
    <message>
      <location filename="../../DlgFilletEdges.cpp" line="830"/>
      <source>Length</source>
      <translation>Odstęp</translation>
    </message>
    <message>
      <location filename="../../DlgFilletEdges.cpp" line="832"/>
      <source>Radius</source>
      <translation>Promień</translation>
    </message>
    <message>
      <location filename="../../DlgFilletEdges.cpp" line="886"/>
      <source>No shape selected</source>
      <translation>Brak wybranych kształtów</translation>
    </message>
    <message>
      <location filename="../../DlgFilletEdges.cpp" line="887"/>
      <source>No valid shape is selected.
Please select a valid shape in the drop-down box first.</source>
      <translation>Wybrany kształt jest nieprawidłowy. 
Wybierz najpierw prawidłowy kształt w polu rozwijanym.</translation>
    </message>
    <message>
      <location filename="../../DlgFilletEdges.cpp" line="938"/>
      <source>No edge selected</source>
      <translation>Brak wybranych krawędzi</translation>
    </message>
    <message>
      <location filename="../../DlgFilletEdges.cpp" line="939"/>
      <source>No edge entity is checked to fillet.
Please check one or more edge entities first.</source>
      <translation>Nie zaznaczono krawędzi do sfazowania. 
Zaznacz najpierw jedną lub więcej krawędzi.</translation>
    </message>
  </context>
  <context>
    <name>PartGui::DlgImportExportIges</name>
    <message>
      <location filename="../../DlgImportExportIges.ui" line="14"/>
      <source>IGES</source>
      <translation>IGES</translation>
    </message>
    <message>
      <location filename="../../DlgImportExportIges.ui" line="20"/>
      <source>Export</source>
      <translation>Export</translation>
    </message>
    <message>
      <location filename="../../DlgImportExportIges.ui" line="26"/>
      <source>Units for export of IGES</source>
      <translation>Jednostki dla eksportu w formacie IGES</translation>
    </message>
    <message>
      <location filename="../../DlgImportExportIges.ui" line="47"/>
      <source>Millimeter</source>
      <translation>Milimetr</translation>
    </message>
    <message>
      <location filename="../../DlgImportExportIges.ui" line="52"/>
      <source>Meter</source>
      <translation>Metr</translation>
    </message>
    <message>
      <location filename="../../DlgImportExportIges.ui" line="57"/>
      <source>Inch</source>
      <translation>Cal</translation>
    </message>
    <message>
      <location filename="../../DlgImportExportIges.ui" line="65"/>
      <source>Write solids and shells as</source>
      <translation>Zapisz bryły i powłoki jako</translation>
    </message>
    <message>
      <location filename="../../DlgImportExportIges.ui" line="71"/>
      <source>Solids and shells will be exported as trimmed surface</source>
      <translation>Bryły i powłoki będą eksportowane jako przycięte powierzchnie</translation>
    </message>
    <message>
      <location filename="../../DlgImportExportIges.ui" line="74"/>
      <source>Groups of Trimmed Surfaces (type 144)</source>
      <translation>Grupy przyciętych powierzchni (typ 144)</translation>
    </message>
    <message>
      <location filename="../../DlgImportExportIges.ui" line="84"/>
      <source>Solids will be exported as manifold solid B-Rep object, shells as shell</source>
      <translation>Bryły zostaną wyeksportowane jako obiekt B-Rep bryły typu manifold, powłoki jako powłoka</translation>
    </message>
    <message>
      <location filename="../../DlgImportExportIges.ui" line="87"/>
      <source>Solids (type 186) and Shells (type 514) / B-REP mode</source>
      <translation>Bryły (typ 186) i powłoki (typ 514) / tryb B-REP</translation>
    </message>
    <message>
      <location filename="../../DlgImportExportIges.ui" line="100"/>
      <source>Import</source>
      <translation>Import</translation>
    </message>
    <message>
      <location filename="../../DlgImportExportIges.ui" line="106"/>
      <source>Blank entities will not be imported</source>
      <translation>Puste wystąpienia nie będą importowane</translation>
    </message>
    <message>
      <location filename="../../DlgImportExportIges.ui" line="109"/>
      <source>Skip blank entities</source>
      <translation>Pomiń puste wystąpienia</translation>
    </message>
    <message>
      <location filename="../../DlgImportExportIges.ui" line="119"/>
      <source>If not empty, field contents will be used in the IGES file header</source>
      <translation>Jeśli pole nie jest puste, jego zawartość zostanie użyta w nagłówku pliku IGES</translation>
    </message>
    <message>
      <location filename="../../DlgImportExportIges.ui" line="122"/>
      <source>Header</source>
      <translation>Nagłówek</translation>
    </message>
    <message>
      <location filename="../../DlgImportExportIges.ui" line="128"/>
      <source>Company</source>
      <translation>Nazwa firmy</translation>
    </message>
    <message>
      <location filename="../../DlgImportExportIges.ui" line="138"/>
      <source>Product</source>
      <translation>Produkt</translation>
    </message>
    <message>
      <location filename="../../DlgImportExportIges.ui" line="151"/>
      <source>Author</source>
      <translation>Autor</translation>
    </message>
  </context>
  <context>
    <name>PartGui::DlgImportExportStep</name>
    <message>
      <location filename="../../DlgImportExportStep.ui" line="14"/>
      <source>STEP</source>
      <translation>STEP</translation>
    </message>
    <message>
      <location filename="../../DlgImportExportStep.ui" line="20"/>
      <source>Export</source>
      <translation>Export</translation>
    </message>
    <message>
      <location filename="../../DlgImportExportStep.ui" line="26"/>
      <source>Scheme</source>
      <translation>Schemat</translation>
    </message>
    <message>
      <location filename="../../DlgImportExportStep.ui" line="64"/>
      <source>Uncheck this to skip invisible object when exporting, which is useful for CADs that do not support invisibility STEP styling.</source>
      <translation>Usuń zaznaczenie, aby pominąć obiekt niewidoczny podczas eksportu, co jest przydatne w programach CAD, które nie obsługują modelowania niewidoczności STEP.</translation>
    </message>
    <message>
      <location filename="../../DlgImportExportStep.ui" line="67"/>
      <source>Export invisible objects</source>
      <translation>Eksportuj niewidoczne obiekty</translation>
    </message>
    <message>
      <location filename="../../DlgImportExportStep.ui" line="80"/>
      <source>Units for export of STEP</source>
      <translation>Jednostki dla eksportu w formacie STEP</translation>
    </message>
    <message>
      <location filename="../../DlgImportExportStep.ui" line="87"/>
      <source>Write out curves in parametric space of surface</source>
      <translation>Opisz krzywe w przestrzeni parametrycznej powierzchni</translation>
    </message>
    <message>
      <location filename="../../DlgImportExportStep.ui" line="95"/>
      <source>Millimeter</source>
      <translation>Milimetr</translation>
    </message>
    <message>
      <location filename="../../DlgImportExportStep.ui" line="100"/>
      <source>Meter</source>
      <translation>Metr</translation>
    </message>
    <message>
      <location filename="../../DlgImportExportStep.ui" line="105"/>
      <source>Inch</source>
      <translation>Cal</translation>
    </message>
    <message>
      <location filename="../../DlgImportExportStep.ui" line="126"/>
      <source>Use legacy exporter</source>
      <translation>Użyj starszego eksportera</translation>
    </message>
    <message>
      <location filename="../../DlgImportExportStep.ui" line="139"/>
      <source>Check this option to keep the placement information when exporting
a single object. Please note that when import back the STEP file, the
placement will be encoded into the shape geometry, instead of keeping
it inside the Placement property.</source>
      <translation>Zaznacz tę opcję, jeśli chcesz zachować informacje o umiejscowieniu podczas eksportu
pojedynczego obiektu. Należy pamiętać, że podczas ponownego importu pliku STEP,
umiejscowienie zostanie zakodowane w geometrii kształtu, natomiast nie zostanie lokowane
wewnątrz właściwości Umiejscowienie.</translation>
    </message>
    <message>
      <location filename="../../DlgImportExportStep.ui" line="145"/>
      <source>Export single object placement</source>
      <translation>Eksportuj umiejscowienie pojedynczego obiektu</translation>
    </message>
    <message>
      <location filename="../../DlgImportExportStep.ui" line="174"/>
      <source>If not empty, field contents will be used in the STEP file header.</source>
      <translation>Jeśli pole nie jest puste, jego zawartość zostanie użyta w nagłówku pliku STEP.</translation>
    </message>
    <message>
      <location filename="../../DlgImportExportStep.ui" line="177"/>
      <source>Header</source>
      <translation>Nagłówek</translation>
    </message>
    <message>
      <location filename="../../DlgImportExportStep.ui" line="189"/>
      <source>Author</source>
      <translation>Autor</translation>
    </message>
    <message>
      <location filename="../../DlgImportExportStep.ui" line="196"/>
      <source>Product</source>
      <translation>Produkt</translation>
    </message>
    <message>
      <location filename="../../DlgImportExportStep.ui" line="203"/>
      <source>Company</source>
      <translation>Nazwa firmy</translation>
    </message>
    <message>
      <location filename="../../DlgImportExportStep.ui" line="216"/>
      <source>Import</source>
      <translation>Import</translation>
    </message>
    <message>
      <location filename="../../DlgImportExportStep.ui" line="222"/>
      <source>If checked, no Compound merge will be done
during file reading (slower but higher details).</source>
      <translation>Jeśli opcja jest zaznaczona, żadne złożone połączenie nie zostanie wykonane
podczas odczytu pliku (wolniejsze, ale bardziej dokładne).</translation>
    </message>
    <message>
      <location filename="../../DlgImportExportStep.ui" line="226"/>
      <source>Enable STEP Compound merge</source>
      <translation>Włącz złożone połączenie STEP</translation>
    </message>
    <message>
      <location filename="../../DlgImportExportStep.ui" line="242"/>
      <source>Select this to use App::LinkGroup as group container, or else use App::Part.</source>
      <translation>Zaznacz tą opcję aby użyć funkcji App::LinkGroup jako kontenera grupowego, lub w przeciwnym razie użyj funkcji App::Part.</translation>
    </message>
    <message>
      <location filename="../../DlgImportExportStep.ui" line="245"/>
      <source>Use LinkGroup</source>
      <translation>Użyj Grupy łączy</translation>
    </message>
    <message>
      <location filename="../../DlgImportExportStep.ui" line="258"/>
      <source>Select this to not import any invisible objects.</source>
      <translation>Wybierz to, aby nie importować niewidocznych obiektów.</translation>
    </message>
    <message>
      <location filename="../../DlgImportExportStep.ui" line="261"/>
      <source>Import invisible objects</source>
      <translation>Importuj niewidoczne obiekty</translation>
    </message>
    <message>
      <location filename="../../DlgImportExportStep.ui" line="274"/>
      <source>Reduce number of objects using Link array</source>
      <translation>Zmniejsz liczbę obiektów za pomocą tablicy linków</translation>
    </message>
    <message>
      <location filename="../../DlgImportExportStep.ui" line="277"/>
      <source>Reduce number of objects</source>
      <translation>Zmniejsz liczbę obiektów</translation>
    </message>
    <message>
      <location filename="../../DlgImportExportStep.ui" line="290"/>
      <source>Expand compound shape with multiple solids</source>
      <translation>Rozbij kształt złożony z wielu brył</translation>
    </message>
    <message>
      <location filename="../../DlgImportExportStep.ui" line="293"/>
      <source>Expand compound shape</source>
      <translation>Rozbij kształt złożony</translation>
    </message>
    <message>
      <location filename="../../DlgImportExportStep.ui" line="306"/>
      <location filename="../../DlgImportExportStep.ui" line="309"/>
      <source>Show progress bar when importing</source>
      <translation>Pokaż pasek postępu podczas importowania</translation>
    </message>
    <message>
      <location filename="../../DlgImportExportStep.ui" line="322"/>
      <source>Do not use instance name. Useful for some legacy STEP file with non-meaningful auto generated instance names.</source>
      <translation>Nie używaj nazwy instancji. Przydatne w przypadku niektórych starszych plików STEP, z nieistotnymi automatycznie generowanymi nazwami instancji.</translation>
    </message>
    <message>
      <location filename="../../DlgImportExportStep.ui" line="325"/>
      <source>Ignore instance names</source>
      <translation>Ignoruj nazwy instancji</translation>
    </message>
    <message>
      <location filename="../../DlgImportExportStep.ui" line="340"/>
      <source>Mode</source>
      <translation>Tryb</translation>
    </message>
    <message>
      <location filename="../../DlgImportExportStep.ui" line="360"/>
      <source>Single document</source>
      <translation>Pojedynczy dokument</translation>
    </message>
    <message>
      <location filename="../../DlgImportExportStep.ui" line="365"/>
      <source>Assembly per document</source>
      <translation>Złożenie na dokument</translation>
    </message>
    <message>
      <location filename="../../DlgImportExportStep.ui" line="370"/>
      <source>Assembly per document in sub-directory</source>
      <translation>Złożenie dla każdego dokumentu w osobnym podkatalogu</translation>
    </message>
    <message>
      <location filename="../../DlgImportExportStep.ui" line="375"/>
      <source>Object per document</source>
      <translation>Obiekt na dokument</translation>
    </message>
    <message>
      <location filename="../../DlgImportExportStep.ui" line="380"/>
      <source>Object per document in sub-directory</source>
      <translation>Dokument jako obiekt w indywidualnym katalogu podrzędnym</translation>
    </message>
    <message>
      <location filename="../../DlgSettingsGeneral.cpp" line="207"/>
      <source>This parameter indicates whether parametric curves (curves in parametric space of surface)
should be written into the STEP file. This parameter can be set to off in order to minimize
the size of the resulting STEP file.</source>
      <translation>Ten parametr określa, czy krzywe parametryczne (krzywe w przestrzeni powierzchni parametrycznej)
powinny być zapisywane do pliku w formacie STEP. Ten parametr może być ustawiony wyłączony, aby zminimalizować
rozmiar pliku STEP.</translation>
    </message>
  </context>
  <context>
    <name>PartGui::DlgPartBox</name>
    <message>
      <location filename="../../DlgPartBox.ui" line="14"/>
      <source>Box definition</source>
      <translation>Definicja prostopadłościanu</translation>
    </message>
    <message>
      <location filename="../../DlgPartBox.ui" line="20"/>
      <source>Position:</source>
      <translation>Pozycja:</translation>
    </message>
    <message>
      <location filename="../../DlgPartBox.ui" line="78"/>
      <source>Direction:</source>
      <translation>Kierunek:</translation>
    </message>
    <message>
      <location filename="../../DlgPartBox.ui" line="85"/>
      <source>X:</source>
      <translation>X:</translation>
    </message>
    <message>
      <location filename="../../DlgPartBox.ui" line="92"/>
      <source>Y:</source>
      <translation>Y:</translation>
    </message>
    <message>
      <location filename="../../DlgPartBox.ui" line="99"/>
      <source>Z:</source>
      <translation>Z:</translation>
    </message>
    <message>
      <location filename="../../DlgPartBox.ui" line="109"/>
      <source>Size:</source>
      <translation>Rozmiar:</translation>
    </message>
    <message>
      <location filename="../../DlgPartBox.ui" line="160"/>
      <source>Height:</source>
      <translation>Wysokość:</translation>
    </message>
    <message>
      <location filename="../../DlgPartBox.ui" line="167"/>
      <source>Width:</source>
      <translation>Szerokość:</translation>
    </message>
    <message>
      <location filename="../../DlgPartBox.ui" line="174"/>
      <source>Length:</source>
      <translation>Długość:</translation>
    </message>
  </context>
  <context>
    <name>PartGui::DlgPartCylinder</name>
    <message>
      <location filename="../../DlgPartCylinder.ui" line="14"/>
      <source>Cylinder definition</source>
      <translation>Definicja walca</translation>
    </message>
    <message>
      <location filename="../../DlgPartCylinder.ui" line="20"/>
      <source>Position:</source>
      <translation>Pozycja:</translation>
    </message>
    <message>
      <location filename="../../DlgPartCylinder.ui" line="39"/>
      <source>Direction:</source>
      <translation>Kierunek:</translation>
    </message>
    <message>
      <location filename="../../DlgPartCylinder.ui" line="46"/>
      <source>X:</source>
      <translation>X:</translation>
    </message>
    <message>
      <location filename="../../DlgPartCylinder.ui" line="53"/>
      <source>Z:</source>
      <translation>Z:</translation>
    </message>
    <message>
      <location filename="../../DlgPartCylinder.ui" line="60"/>
      <source>Y:</source>
      <translation>Y:</translation>
    </message>
    <message>
      <location filename="../../DlgPartCylinder.ui" line="109"/>
      <source>Parameter</source>
      <translation>Parametry</translation>
    </message>
    <message>
      <location filename="../../DlgPartCylinder.ui" line="121"/>
      <source>Height:</source>
      <translation>Wysokość:</translation>
    </message>
    <message>
      <location filename="../../DlgPartCylinder.ui" line="128"/>
      <source>Radius:</source>
      <translation>Promień:</translation>
    </message>
  </context>
  <context>
    <name>PartGui::DlgPartImportIges</name>
    <message>
      <location filename="../../DlgPartImportIges.ui" line="14"/>
      <source>IGES input file</source>
      <translation>Plik wejściowy w formacie IGES</translation>
    </message>
    <message>
      <location filename="../../DlgPartImportIges.ui" line="20"/>
      <source>File Name</source>
      <translation>Nazwa pliku</translation>
    </message>
    <message>
      <location filename="../../DlgPartImportIges.ui" line="54"/>
      <source>...</source>
      <translation>...</translation>
    </message>
  </context>
  <context>
    <name>PartGui::DlgPartImportIgesImp</name>
    <message>
      <location filename="../../DlgPartImportIgesImp.cpp" line="73"/>
      <source>IGES</source>
      <translation>IGES</translation>
    </message>
    <message>
      <location filename="../../DlgPartImportIgesImp.cpp" line="74"/>
      <source>All Files</source>
      <translation>Wszystkie pliki</translation>
    </message>
  </context>
  <context>
    <name>PartGui::DlgPartImportStep</name>
    <message>
      <location filename="../../DlgPartImportStep.ui" line="14"/>
      <source>Step input file</source>
      <translation>Plik wejściowy w formacie STEP</translation>
    </message>
    <message>
      <location filename="../../DlgPartImportStep.ui" line="20"/>
      <source>File Name</source>
      <translation>Nazwa pliku</translation>
    </message>
    <message>
      <location filename="../../DlgPartImportStep.ui" line="54"/>
      <source>...</source>
      <translation>...</translation>
    </message>
  </context>
  <context>
    <name>PartGui::DlgPartImportStepImp</name>
    <message>
      <location filename="../../DlgPartImportStepImp.cpp" line="72"/>
      <source>STEP</source>
      <translation>STEP</translation>
    </message>
    <message>
      <location filename="../../DlgPartImportStepImp.cpp" line="73"/>
      <source>All Files</source>
      <translation>Wszystkie pliki</translation>
    </message>
  </context>
  <context>
    <name>PartGui::DlgPrimitives</name>
    <message>
      <location filename="../../DlgPrimitives.ui" line="14"/>
      <source>Geometric Primitives</source>
      <translation>Pierwotne bryły geometryczne</translation>
    </message>
    <message>
      <location filename="../../DlgPrimitives.ui" line="33"/>
      <location filename="../../DlgPrimitives.cpp" line="726"/>
      <source>Plane</source>
      <translation>Płaszczyzna</translation>
    </message>
    <message>
      <location filename="../../DlgPrimitives.ui" line="42"/>
      <location filename="../../DlgPrimitives.cpp" line="743"/>
      <source>Box</source>
      <translation>Sześcian</translation>
    </message>
    <message>
      <location filename="../../DlgPrimitives.ui" line="51"/>
      <location filename="../../DlgPrimitives.cpp" line="764"/>
      <source>Cylinder</source>
      <translation>Walec</translation>
    </message>
    <message>
      <location filename="../../DlgPrimitives.ui" line="60"/>
      <location filename="../../DlgPrimitives.cpp" line="783"/>
      <source>Cone</source>
      <translation>Stożek</translation>
    </message>
    <message>
      <location filename="../../DlgPrimitives.ui" line="69"/>
      <location filename="../../DlgPrimitives.cpp" line="802"/>
      <source>Sphere</source>
      <translation>Sfera</translation>
    </message>
    <message>
      <location filename="../../DlgPrimitives.ui" line="78"/>
      <location filename="../../DlgPrimitives.cpp" line="825"/>
      <source>Ellipsoid</source>
      <translation>Elipsoida</translation>
    </message>
    <message>
      <location filename="../../DlgPrimitives.ui" line="87"/>
      <location filename="../../DlgPrimitives.cpp" line="846"/>
      <source>Torus</source>
      <translation>Torus</translation>
    </message>
    <message>
      <location filename="../../DlgPrimitives.ui" line="96"/>
      <location filename="../../DlgPrimitives.cpp" line="867"/>
      <source>Prism</source>
      <translation>Graniastosłup</translation>
    </message>
    <message>
      <location filename="../../DlgPrimitives.ui" line="105"/>
      <location filename="../../DlgPrimitives.cpp" line="898"/>
      <source>Wedge</source>
      <translation>Klin</translation>
    </message>
    <message>
      <location filename="../../DlgPrimitives.ui" line="114"/>
      <location filename="../../DlgPrimitives.cpp" line="920"/>
      <source>Helix</source>
      <translation>Helisa</translation>
    </message>
    <message>
      <location filename="../../DlgPrimitives.ui" line="123"/>
      <location filename="../../DlgPrimitives.cpp" line="937"/>
      <source>Spiral</source>
      <translation>Spirala</translation>
    </message>
    <message>
      <location filename="../../DlgPrimitives.ui" line="132"/>
      <location filename="../../DlgPrimitives.cpp" line="954"/>
      <source>Circle</source>
      <translation>Okrąg</translation>
    </message>
    <message>
      <location filename="../../DlgPrimitives.ui" line="141"/>
      <location filename="../../DlgPrimitives.cpp" line="973"/>
      <source>Ellipse</source>
      <translation>Elipsa</translation>
    </message>
    <message>
      <location filename="../../DlgPrimitives.ui" line="150"/>
      <source>Point</source>
      <translation>Punkt</translation>
    </message>
    <message>
      <location filename="../../DlgPrimitives.ui" line="159"/>
      <location filename="../../DlgPrimitives.cpp" line="1013"/>
      <source>Line</source>
      <translation>Linia</translation>
    </message>
    <message>
      <location filename="../../DlgPrimitives.ui" line="168"/>
      <location filename="../../DlgPrimitives.cpp" line="1028"/>
      <source>Regular polygon</source>
      <translation>Wielokąt foremny</translation>
    </message>
    <message>
      <location filename="../../DlgPrimitives.ui" line="180"/>
      <source>Parameter</source>
      <translation>Parametry</translation>
    </message>
    <message>
      <location filename="../../DlgPrimitives.ui" line="253"/>
      <location filename="../../DlgPrimitives.ui" line="387"/>
      <source>Width:</source>
      <translation>Szerokość:</translation>
    </message>
    <message>
      <location filename="../../DlgPrimitives.ui" line="260"/>
      <location filename="../../DlgPrimitives.ui" line="380"/>
      <source>Length:</source>
      <translation>Długość:</translation>
    </message>
    <message>
      <location filename="../../DlgPrimitives.ui" line="373"/>
      <location filename="../../DlgPrimitives.ui" line="520"/>
      <location filename="../../DlgPrimitives.ui" line="731"/>
      <location filename="../../DlgPrimitives.ui" line="1419"/>
      <location filename="../../DlgPrimitives.ui" line="1752"/>
      <source>Height:</source>
      <translation>Wysokość:</translation>
    </message>
    <message>
      <location filename="../../DlgPrimitives.ui" line="448"/>
      <source>Rotation angle:</source>
      <translation>Kąt obrotu:</translation>
    </message>
    <message>
      <location filename="../../DlgPrimitives.ui" line="513"/>
      <location filename="../../DlgPrimitives.ui" line="917"/>
      <location filename="../../DlgPrimitives.ui" line="1738"/>
      <location filename="../../DlgPrimitives.ui" line="1887"/>
      <location filename="../../DlgPrimitives.ui" line="1970"/>
      <source>Radius:</source>
      <translation>Promień:</translation>
    </message>
    <message>
      <location filename="../../DlgPrimitives.ui" line="553"/>
      <location filename="../../DlgPrimitives.ui" line="1439"/>
      <source>Angle in first direction:</source>
      <translation>Kąt w pierwszym kierunku:</translation>
    </message>
    <message>
      <location filename="../../DlgPrimitives.ui" line="560"/>
      <location filename="../../DlgPrimitives.ui" line="1446"/>
      <source>Angle in first direction</source>
      <translation>Kąt w pierwszym kierunku</translation>
    </message>
    <message>
      <location filename="../../DlgPrimitives.ui" line="579"/>
      <location filename="../../DlgPrimitives.ui" line="1465"/>
      <source>Angle in second direction:</source>
      <translation>Kąt w drugim kierunku:</translation>
    </message>
    <message>
      <location filename="../../DlgPrimitives.ui" line="586"/>
      <location filename="../../DlgPrimitives.ui" line="1472"/>
      <source>Angle in second direction</source>
      <translation>Kąt w kierunku drugim</translation>
    </message>
    <message>
      <location filename="../../DlgPrimitives.ui" line="640"/>
      <location filename="../../DlgPrimitives.ui" line="1759"/>
      <source>Angle:</source>
      <translation>Kąt:</translation>
    </message>
    <message>
      <location filename="../../DlgPrimitives.ui" line="738"/>
      <location filename="../../DlgPrimitives.ui" line="998"/>
      <location filename="../../DlgPrimitives.ui" line="1318"/>
      <source>Radius 1:</source>
      <translation>Promień 1:</translation>
    </message>
    <message>
      <location filename="../../DlgPrimitives.ui" line="745"/>
      <location filename="../../DlgPrimitives.ui" line="1005"/>
      <location filename="../../DlgPrimitives.ui" line="1311"/>
      <source>Radius 2:</source>
      <translation>Promień 2:</translation>
    </message>
    <message>
      <location filename="../../DlgPrimitives.ui" line="829"/>
      <location filename="../../DlgPrimitives.ui" line="1077"/>
      <source>U parameter:</source>
      <translation>Parametr U:</translation>
    </message>
    <message>
      <location filename="../../DlgPrimitives.ui" line="836"/>
      <source>V parameters:</source>
      <translation>Parametry V:</translation>
    </message>
    <message>
      <location filename="../../DlgPrimitives.ui" line="1012"/>
      <source>Radius 3:</source>
      <translation>Promień 3:</translation>
    </message>
    <message>
      <location filename="../../DlgPrimitives.ui" line="1100"/>
      <location filename="../../DlgPrimitives.ui" line="1217"/>
      <source>V parameter:</source>
      <translation>Parametr V:</translation>
    </message>
    <message>
      <location filename="../../DlgPrimitives.ui" line="1194"/>
      <source>U Parameter:</source>
      <translation>Parametr U:</translation>
    </message>
    <message>
      <location filename="../../DlgPrimitives.ui" line="1389"/>
      <location filename="../../DlgPrimitives.ui" line="2418"/>
      <source>Polygon:</source>
      <translation>Wielokąt:</translation>
    </message>
    <message>
      <location filename="../../DlgPrimitives.ui" line="1412"/>
      <location filename="../../DlgPrimitives.ui" line="2441"/>
      <source>Circumradius:</source>
      <translation>Promień okręgu opisanego:</translation>
    </message>
    <message>
      <location filename="../../DlgPrimitives.ui" line="1518"/>
      <source>X min/max:</source>
      <translation>X min / max:</translation>
    </message>
    <message>
      <location filename="../../DlgPrimitives.ui" line="1525"/>
      <source>Y min/max:</source>
      <translation>Y min / max:</translation>
    </message>
    <message>
      <location filename="../../DlgPrimitives.ui" line="1532"/>
      <source>Z min/max:</source>
      <translation>Z min / max:</translation>
    </message>
    <message>
      <location filename="../../DlgPrimitives.ui" line="1539"/>
      <source>X2 min/max:</source>
      <translation>X2 min / max:</translation>
    </message>
    <message>
      <location filename="../../DlgPrimitives.ui" line="1546"/>
      <source>Z2 min/max:</source>
      <translation>Z2 min / max:</translation>
    </message>
    <message>
      <location filename="../../DlgPrimitives.ui" line="1745"/>
      <source>Pitch:</source>
      <translation>Odstęp:</translation>
    </message>
    <message>
      <location filename="../../DlgPrimitives.ui" line="1766"/>
      <source>Coordinate system:</source>
      <translation>Układ współrzędnych:</translation>
    </message>
    <message>
      <location filename="../../DlgPrimitives.ui" line="1774"/>
      <source>Right-handed</source>
      <translation>Praworęczny</translation>
    </message>
    <message>
      <location filename="../../DlgPrimitives.ui" line="1779"/>
      <source>Left-handed</source>
      <translation>Leworęczny</translation>
    </message>
    <message>
      <location filename="../../DlgPrimitives.ui" line="1894"/>
      <source>Growth:</source>
      <translation>Skok:</translation>
    </message>
    <message>
      <location filename="../../DlgPrimitives.ui" line="1901"/>
      <source>Number of rotations:</source>
      <translation>Liczba obrotów:</translation>
    </message>
    <message>
      <location filename="../../DlgPrimitives.ui" line="1977"/>
      <location filename="../../DlgPrimitives.ui" line="2086"/>
      <source>Angle 1:</source>
      <translation>Kąt 1:</translation>
    </message>
    <message>
      <location filename="../../DlgPrimitives.ui" line="1984"/>
      <location filename="../../DlgPrimitives.ui" line="2093"/>
      <source>Angle 2:</source>
      <translation>Kąt 2:</translation>
    </message>
    <message>
      <location filename="../../DlgPrimitives.ui" line="2044"/>
      <source>From three points</source>
      <translation>Z trzech punktów</translation>
    </message>
    <message>
      <location filename="../../DlgPrimitives.ui" line="2072"/>
      <source>Major radius:</source>
      <translation>Promień główny:</translation>
    </message>
    <message>
      <location filename="../../DlgPrimitives.ui" line="2079"/>
      <source>Minor radius:</source>
      <translation>Promień pomocniczy:</translation>
    </message>
    <message>
      <location filename="../../DlgPrimitives.ui" line="2170"/>
      <location filename="../../DlgPrimitives.ui" line="2268"/>
      <source>X:</source>
      <translation>X:</translation>
    </message>
    <message>
      <location filename="../../DlgPrimitives.ui" line="2180"/>
      <location filename="../../DlgPrimitives.ui" line="2301"/>
      <source>Y:</source>
      <translation>Y:</translation>
    </message>
    <message>
      <location filename="../../DlgPrimitives.ui" line="2190"/>
      <location filename="../../DlgPrimitives.ui" line="2334"/>
      <source>Z:</source>
      <translation>Z:</translation>
    </message>
    <message>
      <location filename="../../DlgPrimitives.ui" line="2251"/>
      <source>Start point</source>
      <translation>Punkt początkowy</translation>
    </message>
    <message>
      <location filename="../../DlgPrimitives.ui" line="2258"/>
      <source>End point</source>
      <translation>Punkt końcowy</translation>
    </message>
    <message>
      <location filename="../../DlgPrimitives.cpp" line="990"/>
      <source>Vertex</source>
      <translation>Wierzchołek</translation>
    </message>
    <message>
      <location filename="../../DlgPrimitives.cpp" line="1037"/>
      <location filename="../../DlgPrimitives.cpp" line="1107"/>
      <location filename="../../DlgPrimitives.cpp" line="1115"/>
      <source>Create %1</source>
      <translation>Utwórz %1</translation>
    </message>
    <message>
      <location filename="../../DlgPrimitives.cpp" line="1038"/>
      <source>No active document</source>
      <translation>Brak aktywnego dokumentu</translation>
    </message>
    <message>
      <location filename="../../DlgPrimitives.cpp" line="2036"/>
      <source>&amp;Create</source>
      <translation>&amp;Utwórz</translation>
    </message>
  </context>
  <context>
    <name>PartGui::DlgProjectionOnSurface</name>
    <message>
      <location filename="../../DlgProjectionOnSurface.ui" line="14"/>
      <source>Projection on surface</source>
      <translation>Rzut na powierzchnię</translation>
    </message>
    <message>
      <location filename="../../DlgProjectionOnSurface.ui" line="20"/>
      <source>Select projection surface</source>
      <translation>Wybierz powierzchnię rzutu</translation>
    </message>
    <message>
      <location filename="../../DlgProjectionOnSurface.ui" line="31"/>
      <source>Add face</source>
      <translation>Dodaj ścianę</translation>
    </message>
    <message>
      <location filename="../../DlgProjectionOnSurface.ui" line="38"/>
      <source>Add wire</source>
      <translation>Dodaj polilinię</translation>
    </message>
    <message>
      <location filename="../../DlgProjectionOnSurface.ui" line="45"/>
      <source>Add edge</source>
      <translation>Dodaj krawędź</translation>
    </message>
    <message>
      <location filename="../../DlgProjectionOnSurface.ui" line="56"/>
      <source>Show all</source>
      <translation>Wyświetl wszystko</translation>
    </message>
    <message>
      <location filename="../../DlgProjectionOnSurface.ui" line="66"/>
      <source>Show faces</source>
      <translation>Pokaż ściany</translation>
    </message>
    <message>
      <location filename="../../DlgProjectionOnSurface.ui" line="76"/>
      <source>Show Edges</source>
      <translation>Pokaż krawędzie</translation>
    </message>
    <message>
      <location filename="../../DlgProjectionOnSurface.ui" line="92"/>
      <source>Extrude height</source>
      <translation>Długość wyciągnięcia</translation>
    </message>
    <message>
      <location filename="../../DlgProjectionOnSurface.ui" line="116"/>
      <source>Solid depth</source>
      <translation>Głębokość bryły</translation>
    </message>
    <message>
      <location filename="../../DlgProjectionOnSurface.ui" line="141"/>
      <source>Direction</source>
      <translation>Kierunek</translation>
    </message>
    <message>
      <location filename="../../DlgProjectionOnSurface.ui" line="147"/>
      <source>Get current camera direction</source>
      <translation>Pobierz aktualny kierunek ujęcia widoku</translation>
    </message>
    <message>
      <location filename="../../DlgProjectionOnSurface.ui" line="156"/>
      <source>X:</source>
      <translation>X:</translation>
    </message>
    <message>
      <location filename="../../DlgProjectionOnSurface.ui" line="186"/>
      <source>Y:</source>
      <translation>Y:</translation>
    </message>
    <message>
      <location filename="../../DlgProjectionOnSurface.ui" line="213"/>
      <source>Z:</source>
      <translation>Z:</translation>
    </message>
    <message>
      <location filename="../../DlgProjectionOnSurface.cpp" line="134"/>
      <source>Projection Object</source>
      <translation>Obiekt do rzutowania</translation>
    </message>
    <message>
      <location filename="../../DlgProjectionOnSurface.cpp" line="162"/>
      <source>Have no active document!!!</source>
      <translation>Brak aktywnego dokumentu !!!</translation>
    </message>
    <message>
      <location filename="../../DlgProjectionOnSurface.cpp" line="169"/>
      <source>Can not create a projection object!!!</source>
      <translation>Nie można utworzyć obiektu projekcji !!!</translation>
    </message>
  </context>
  <context>
    <name>PartGui::DlgRevolution</name>
    <message>
      <location filename="../../DlgRevolution.ui" line="20"/>
      <source>Revolve</source>
      <translation>Obrót</translation>
    </message>
    <message>
      <location filename="../../DlgRevolution.ui" line="32"/>
      <source>If checked, revolving wires will produce solids. If not, revolving a wire yields a shell.</source>
      <translation>Jeśli opcja jest zaznaczona, obracanie polilinii będzie tworzyć bryły. Jeśli nie, obracanie polilinii utworzy powłokę.</translation>
    </message>
    <message>
      <location filename="../../DlgRevolution.ui" line="35"/>
      <source>Create Solid</source>
      <translation>Utwórz bryłę</translation>
    </message>
    <message>
      <location filename="../../DlgRevolution.ui" line="52"/>
      <source>Shape</source>
      <translation>Kształt</translation>
    </message>
    <message>
      <location filename="../../DlgRevolution.ui" line="71"/>
      <source>Angle:</source>
      <translation>Kąt:</translation>
    </message>
    <message>
      <location filename="../../DlgRevolution.ui" line="111"/>
      <source>Revolution axis</source>
      <translation>Oś obrotu</translation>
    </message>
    <message>
      <location filename="../../DlgRevolution.ui" line="119"/>
      <source>Center X:</source>
      <translation>Środek w X:</translation>
    </message>
    <message>
      <location filename="../../DlgRevolution.ui" line="139"/>
      <source>Center Y:</source>
      <translation>Środek w Y:</translation>
    </message>
    <message>
      <location filename="../../DlgRevolution.ui" line="159"/>
      <source>Center Z:</source>
      <translation>Środek w Z:</translation>
    </message>
    <message>
      <location filename="../../DlgRevolution.ui" line="201"/>
      <location filename="../../DlgRevolution.ui" line="242"/>
      <source>Click to set this as axis</source>
      <translation>Kliknij, aby to ustawić jako oś</translation>
    </message>
    <message>
      <location filename="../../DlgRevolution.ui" line="204"/>
      <source>Dir. X:</source>
      <translation>Kierunek w X:</translation>
    </message>
    <message>
      <location filename="../../DlgRevolution.ui" line="245"/>
      <source>Dir. Y:</source>
      <translation>Kierunek w Y:</translation>
    </message>
    <message>
      <location filename="../../DlgRevolution.ui" line="283"/>
      <source>Dir. Z:</source>
      <translation>Kierunek w Z:</translation>
    </message>
    <message>
      <location filename="../../DlgRevolution.ui" line="305"/>
      <location filename="../../DlgRevolution.cpp" line="447"/>
      <source>Select reference</source>
      <translation>Wybierz odniesienie</translation>
    </message>
    <message>
      <location filename="../../DlgRevolution.ui" line="325"/>
      <source>If checked, revolution will extend forwards and backwards by half the angle.</source>
      <translation>Jeśli opcja jest zaznaczona, kierunek obrotu będzie przesunięty do przodu i do tyłu o połowę kąta.</translation>
    </message>
    <message>
      <location filename="../../DlgRevolution.ui" line="328"/>
      <source>Symmetric angle</source>
      <translation>Kąt symetrycznie</translation>
    </message>
    <message>
      <location filename="../../DlgRevolution.cpp" line="172"/>
      <source>Object not found: %1</source>
      <translation>Nie znaleziono obiektu: %1</translation>
    </message>
    <message>
      <location filename="../../DlgRevolution.cpp" line="253"/>
      <source>Select a shape for revolution, first.</source>
      <translation>Najpierw wybierz kształt do przekształcenia przez obrót.</translation>
    </message>
    <message>
      <location filename="../../DlgRevolution.cpp" line="269"/>
      <location filename="../../DlgRevolution.cpp" line="274"/>
      <location filename="../../DlgRevolution.cpp" line="279"/>
      <source>Revolution axis link is invalid.

%1</source>
      <translation>Link osi obrotu jest nieprawidłowy.

%1</translation>
    </message>
    <message>
      <location filename="../../DlgRevolution.cpp" line="288"/>
      <source>Revolution axis direction is zero-length. It must be non-zero.</source>
      <translation>Wartość długość kierunku obrotu osi jest równa zero. Musi być różna od zera.</translation>
    </message>
    <message>
      <location filename="../../DlgRevolution.cpp" line="298"/>
      <source>Revolution angle span is zero. It must be non-zero.</source>
      <translation>Wartość obrotu rozpiętości kąta jest równa zero. Musi być różna od zera.</translation>
    </message>
    <message>
      <location filename="../../DlgRevolution.cpp" line="427"/>
      <location filename="../../DlgRevolution.cpp" line="431"/>
      <source>Creating Revolve failed.

%1</source>
      <translation>Tworzenie Obrotu nie powiodło się.

%1</translation>
    </message>
    <message>
      <location filename="../../DlgRevolution.cpp" line="443"/>
      <source>Selecting... (line or arc)</source>
      <translation>Wybieranie ... (linia lub łuk)</translation>
    </message>
  </context>
  <context>
    <name>PartGui::DlgSettings3DViewPart</name>
    <message>
      <location filename="../../DlgSettings3DViewPart.ui" line="14"/>
      <source>Shape view</source>
      <translation>Widok kształtu</translation>
    </message>
    <message>
      <location filename="../../DlgSettings3DViewPart.ui" line="39"/>
      <source>Tessellation</source>
      <translation>Tesselacja</translation>
    </message>
    <message>
      <location filename="../../DlgSettings3DViewPart.ui" line="59"/>
      <source> %</source>
      <translation> %</translation>
    </message>
    <message>
      <location filename="../../DlgSettings3DViewPart.ui" line="87"/>
      <source>Defines the deviation of tessellation to the actual surface</source>
      <translation>Definiuje odchylenie teselacji rzeczywistej powierzchni</translation>
    </message>
    <message>
      <location filename="../../DlgSettings3DViewPart.ui" line="90"/>
      <source>&lt;html&gt;&lt;head&gt;&lt;meta name="qrichtext" content="1" /&gt;&lt;/head&gt;&lt;body style=" white-space: pre-wrap; font-family:MS Shell Dlg 2; font-size:7.8pt; font-weight:400; font-style:normal; text-decoration:none;"&gt;&lt;p style=" margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;"&gt;&lt;span style=" font-weight:600;"&gt;Tessellation&lt;/span&gt;&lt;/p&gt;&lt;p style="-qt-paragraph-type:empty; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px; font-weight:600;"&gt;&lt;/p&gt;&lt;p style=" margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px; font-weight:600;"&gt;&lt;span style=" font-weight:400;"&gt;Defines the maximum deviation of the tessellated mesh to the surface. The smaller the value is the slower the render speed which results in increased detail/resolution.&lt;/span&gt;&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
      <translation>&lt;html&gt;&lt;head&gt;&lt;meta name="qrichtext" content="1" /&gt;&lt;/head&gt;&lt;body style=" white-space: pre-wrap; font-family:MS Shell Dlg 2; font-size:7.8pt; font-weight:400; font-style:normal; text-decoration:none;"&gt;&lt;p style=" margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;"&gt;&lt;span style=" font-weight:600;"&gt;Teselacja&lt;/span&gt;&lt;/p&gt;&lt;p style="-qt-paragraph-type:empty; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px; font-weight:600;"&gt;&lt;/p&gt;&lt;p style=" margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px; font-weight:600;"&gt;&lt;span style=" font-weight:400;"&gt;Określa maksymalne odchylenie teselowanej siatki od powierzchni. Im mniejsza wartość, tym wolniejsza jest prędkość renderowania, co skutkuje zwiększeniem szczegółowości/rozdzielczości.&lt;/span&gt;&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
      <location filename="../../DlgSettings3DViewPart.ui" line="93"/>
      <source>Maximum deviation depending on the model bounding box</source>
      <translation>Maksymalne dopuszczalne odchylenie w zależności od ramki zaznaczenia</translation>
    </message>
    <message>
      <location filename="../../DlgSettings3DViewPart.ui" line="100"/>
      <source>Maximum angular deflection</source>
      <translation>Maksymalne odkształcenie kątowe</translation>
    </message>
    <message>
      <location filename="../../DlgSettings3DViewPart.ui" line="107"/>
      <source> °</source>
      <translation> °</translation>
    </message>
    <message>
      <location filename="../../DlgSettings3DViewPartImp.cpp" line="69"/>
      <source>Deviation</source>
      <translation>Odchylenie</translation>
    </message>
    <message>
      <location filename="../../DlgSettings3DViewPartImp.cpp" line="70"/>
      <source>Setting a too small deviation causes the tessellation to take longerand thus freezes or slows down the GUI.</source>
      <translation>Ustawianie zbyt małego odchylenia powoduje, że teselacja trwa dłużej, a tym samym zamraża lub spowalnia interfejs użytkownika.</translation>
    </message>
  </context>
  <context>
    <name>PartGui::DlgSettingsGeneral</name>
    <message>
      <location filename="../../DlgSettingsGeneral.ui" line="14"/>
      <source>General</source>
      <translation>Ogólne</translation>
    </message>
    <message>
      <location filename="../../DlgSettingsGeneral.ui" line="20"/>
      <source>Model settings</source>
      <translation>Ustawienia modelu</translation>
    </message>
    <message>
      <location filename="../../DlgSettingsGeneral.ui" line="26"/>
      <source>Automatically check model after boolean operation</source>
      <translation>Automatycznie sprawdź model po wykonaniu operacji logicznej</translation>
    </message>
    <message>
      <location filename="../../DlgSettingsGeneral.ui" line="39"/>
      <source>Automatically refine model after boolean operation</source>
      <translation>Automatycznie udoskonal model po wykonaniu operacji logicznej</translation>
    </message>
    <message>
      <location filename="../../DlgSettingsGeneral.ui" line="52"/>
      <source>Automatically refine model after sketch-based operation</source>
      <translation>Automatycznie udoskonalaj model po operacji opartej na szkicu</translation>
    </message>
    <message>
      <location filename="../../DlgSettingsGeneral.ui" line="68"/>
      <source>Object naming</source>
      <translation>Nazewnictwo obiektów</translation>
    </message>
    <message>
      <location filename="../../DlgSettingsGeneral.ui" line="77"/>
      <source>Add name of base object</source>
      <translation>Dodaj nazwę obiektu podstawowego</translation>
    </message>
  </context>
  <context>
    <name>PartGui::DlgSettingsObjectColor</name>
    <message>
      <location filename="../../DlgSettingsObjectColor.ui" line="14"/>
      <source>Shape appearance</source>
      <translation>Wygląd kształtu</translation>
    </message>
    <message>
      <location filename="../../DlgSettingsObjectColor.ui" line="20"/>
      <source>Default Shape view properties</source>
      <translation>Domyślne właściwości widoku kształtu</translation>
    </message>
    <message>
      <location filename="../../DlgSettingsObjectColor.ui" line="34"/>
      <source>Shape color</source>
      <translation>Kolor kształtu</translation>
    </message>
    <message>
      <location filename="../../DlgSettingsObjectColor.ui" line="41"/>
      <source>The default color for new shapes</source>
      <translation>Domyślny kolor dla nowych kształtów</translation>
    </message>
    <message>
      <location filename="../../DlgSettingsObjectColor.ui" line="61"/>
      <source>Use random color instead</source>
      <translation>Użyj koloru wybranego losowo</translation>
    </message>
    <message>
      <location filename="../../DlgSettingsObjectColor.ui" line="64"/>
      <source>Random</source>
      <translation>Losowo</translation>
    </message>
    <message>
      <location filename="../../DlgSettingsObjectColor.ui" line="83"/>
      <source>Line color</source>
      <translation>Kolor linii</translation>
    </message>
    <message>
      <location filename="../../DlgSettingsObjectColor.ui" line="90"/>
      <source>The default line color for new shapes</source>
      <translation>Domyślny kolor linii dla nowych kształtów</translation>
    </message>
    <message>
      <location filename="../../DlgSettingsObjectColor.ui" line="116"/>
      <source>Line width</source>
      <translation>Szerokość linii</translation>
    </message>
    <message>
      <location filename="../../DlgSettingsObjectColor.ui" line="123"/>
      <source>The default line thickness for new shapes</source>
      <translation>Domyślna grubość linii dla nowych kształtów</translation>
    </message>
    <message>
      <location filename="../../DlgSettingsObjectColor.ui" line="126"/>
      <location filename="../../DlgSettingsObjectColor.ui" line="194"/>
      <source>px</source>
      <translation>px</translation>
    </message>
    <message>
      <location filename="../../DlgSettingsObjectColor.ui" line="151"/>
      <source>Vertex color</source>
      <translation>Kolor wierzchołka</translation>
    </message>
    <message>
      <location filename="../../DlgSettingsObjectColor.ui" line="158"/>
      <source>The default color for new vertices</source>
      <translation>Domyślny kolor dla nowych wierzchołków</translation>
    </message>
    <message>
      <location filename="../../DlgSettingsObjectColor.ui" line="184"/>
      <source>Vertex size</source>
      <translation>Rozmiar wierzchołka</translation>
    </message>
    <message>
      <location filename="../../DlgSettingsObjectColor.ui" line="191"/>
      <source>The default size for new vertices</source>
      <translation>Domyślny rozmiar dla nowych wierzchołków</translation>
    </message>
    <message>
      <location filename="../../DlgSettingsObjectColor.ui" line="219"/>
      <source>Bounding box color</source>
      <translation>Kolor ramki zaznaczenia</translation>
    </message>
    <message>
      <location filename="../../DlgSettingsObjectColor.ui" line="226"/>
      <source>The color of bounding boxes in the 3D view</source>
      <translation>Kolor ramki otaczającej w oknie widoku 3D</translation>
    </message>
    <message>
      <location filename="../../DlgSettingsObjectColor.ui" line="252"/>
      <source>Bounding box font size</source>
      <translation>Rozmiar czcionki ramki otaczającej</translation>
    </message>
    <message>
      <location filename="../../DlgSettingsObjectColor.ui" line="259"/>
      <source>The font size of bounding boxes in the 3D view</source>
      <translation>Rozmiar czcionki ramki otaczającej w oknie widoku 3D</translation>
    </message>
    <message>
      <location filename="../../DlgSettingsObjectColor.ui" line="293"/>
      <source>Bottom side of surface will be rendered the same way than top.
If not checked, it depends on the option "Backlight color"
(preferences section Display -&gt; 3D View); either the backlight color
will be used or black.</source>
      <translation>Dolna strona powierzchni będzie renderowana tak samo jak górna.
Jeżeli opcja nie jest zaznaczona, to jest to zależne od opcji "Kolor podświetlenia"
(preferencje sekcja Wyświetlanie -&gt; Widok 3D), używany będzie albo kolor podświetlenia albo czarny.</translation>
    </message>
    <message>
      <location filename="../../DlgSettingsObjectColor.ui" line="299"/>
      <source>Two-side rendering</source>
      <translation>Rendering dwustronny</translation>
    </message>
    <message>
      <location filename="../../DlgSettingsObjectColor.ui" line="333"/>
      <source>Default Annotation color</source>
      <translation>Domyślny kolor adnotacji</translation>
    </message>
    <message>
      <location filename="../../DlgSettingsObjectColor.ui" line="347"/>
      <source>Text color</source>
      <translation>Kolor tekstu</translation>
    </message>
    <message>
      <location filename="../../DlgSettingsObjectColor.ui" line="354"/>
      <source>Text color for document annotations</source>
      <translation>Kolor tekstu dla opisów w dokumencie</translation>
    </message>
  </context>
  <context>
    <name>PartGui::Location</name>
    <message>
      <location filename="../../Location.ui" line="14"/>
      <source>Location</source>
      <translation>Położenie</translation>
    </message>
    <message>
      <location filename="../../Location.ui" line="29"/>
      <source>Position</source>
      <translation>Pozycja</translation>
    </message>
    <message>
      <location filename="../../Location.ui" line="37"/>
      <source>X</source>
      <translation>X</translation>
    </message>
    <message>
      <location filename="../../Location.ui" line="54"/>
      <source>Y</source>
      <translation>Y</translation>
    </message>
    <message>
      <location filename="../../Location.ui" line="71"/>
      <source>Z</source>
      <translation>Z</translation>
    </message>
    <message>
      <location filename="../../Location.ui" line="90"/>
      <source>3D view</source>
      <translation>Widok 3D</translation>
    </message>
    <message>
      <location filename="../../Location.ui" line="106"/>
      <source>Use custom vector for pad direction otherwise
the sketch plane's normal vector will be used</source>
      <translation>Użyj wektora niestandardowego dla kierunku wyciągnięcia, w przeciwnym razie
zostanie użyty wektor normalnej płaszczyzny szkicu</translation>
    </message>
    <message>
      <location filename="../../Location.ui" line="110"/>
      <source>Rotation axis</source>
      <translation>Oś obrotu</translation>
    </message>
    <message>
      <location filename="../../Location.ui" line="118"/>
      <source>x</source>
      <translation>x</translation>
    </message>
    <message>
      <location filename="../../Location.ui" line="125"/>
      <source>x-component of direction vector</source>
      <translation>składowa X wektora kierunku</translation>
    </message>
    <message>
      <location filename="../../Location.ui" line="147"/>
      <source>y</source>
      <translation>y</translation>
    </message>
    <message>
      <location filename="../../Location.ui" line="154"/>
      <source>y-component of direction vector</source>
      <translation>składowa Y wektora kierunku</translation>
    </message>
    <message>
      <location filename="../../Location.ui" line="176"/>
      <source>z</source>
      <translation>z</translation>
    </message>
    <message>
      <location filename="../../Location.ui" line="183"/>
      <source>z-component of direction vector</source>
      <translation>składowa Z wektora kierunku</translation>
    </message>
    <message>
      <location filename="../../Location.ui" line="208"/>
      <source>Angle</source>
      <translation>Kąt</translation>
    </message>
  </context>
  <context>
    <name>PartGui::LoftWidget</name>
    <message>
      <location filename="../../TaskLoft.cpp" line="80"/>
      <source>Available profiles</source>
      <translation>Dostępne profile</translation>
    </message>
    <message>
      <location filename="../../TaskLoft.cpp" line="81"/>
      <source>Selected profiles</source>
      <translation>Wybrane profile</translation>
    </message>
    <message>
      <location filename="../../TaskLoft.cpp" line="180"/>
      <source>Too few elements</source>
      <translation>Zbyt mało elementów</translation>
    </message>
    <message>
      <location filename="../../TaskLoft.cpp" line="180"/>
      <source>At least two vertices, edges, wires or faces are required.</source>
      <translation>Wymagane są co najmniej dwa wierzchołki, krawędzie, polilinie lub ściany.</translation>
    </message>
    <message>
      <location filename="../../TaskLoft.cpp" line="214"/>
      <source>Input error</source>
      <translation>Błąd danych wejściowych</translation>
    </message>
    <message>
      <location filename="../../TaskLoft.cpp" line="243"/>
      <source>Vertex/Edge/Wire/Face</source>
      <translation>Wierzchołek/Krawędź/Polilinia/Powierzchnia</translation>
    </message>
    <message>
      <location filename="../../TaskLoft.cpp" line="244"/>
      <source>Loft</source>
      <translation>Wyciągnięcie po profilach</translation>
    </message>
  </context>
  <context>
    <name>PartGui::Mirroring</name>
    <message>
      <location filename="../../Mirroring.ui" line="14"/>
      <source>Mirroring</source>
      <translation>Odbicie lustrzane</translation>
    </message>
    <message>
      <location filename="../../Mirroring.ui" line="33"/>
      <source>Shapes</source>
      <translation>Kształty</translation>
    </message>
    <message>
      <location filename="../../Mirroring.ui" line="41"/>
      <source>Mirror plane:</source>
      <translation>Płaszczyzna odbicia lustrzanego:</translation>
    </message>
    <message>
      <location filename="../../Mirroring.ui" line="49"/>
      <source>XY plane</source>
      <translation>Płaszczyzna XY</translation>
    </message>
    <message>
      <location filename="../../Mirroring.ui" line="54"/>
      <source>XZ plane</source>
      <translation>Płaszczyzna XZ</translation>
    </message>
    <message>
      <location filename="../../Mirroring.ui" line="59"/>
      <source>YZ plane</source>
      <translation>Płaszczyzna YZ</translation>
    </message>
    <message>
      <location filename="../../Mirroring.ui" line="67"/>
      <source>Base point</source>
      <translation>Punkt odniesienia</translation>
    </message>
    <message>
      <location filename="../../Mirroring.ui" line="73"/>
      <source>x</source>
      <translation>x</translation>
    </message>
    <message>
      <location filename="../../Mirroring.ui" line="96"/>
      <source>y</source>
      <translation>y</translation>
    </message>
    <message>
      <location filename="../../Mirroring.ui" line="119"/>
      <source>z</source>
      <translation>z</translation>
    </message>
    <message>
      <location filename="../../Mirroring.cpp" line="122"/>
      <source>Select a shape for mirroring, first.</source>
      <translation>Najpierw wybierz kształt do przekształcenia przez odbicie lustrzane.</translation>
    </message>
    <message>
      <location filename="../../Mirroring.cpp" line="129"/>
      <source>No such document '%1'.</source>
      <translation>Nie ma takiego dokumentu '%1'.</translation>
    </message>
  </context>
  <context>
    <name>PartGui::OffsetWidget</name>
    <message>
      <location filename="../../TaskOffset.cpp" line="198"/>
      <source>Input error</source>
      <translation>Błąd danych wejściowych</translation>
    </message>
  </context>
  <context>
    <name>PartGui::ResultModel</name>
    <message>
      <location filename="../../TaskCheckGeometry.cpp" line="348"/>
      <source>Name</source>
      <translation>Nazwa</translation>
    </message>
    <message>
      <location filename="../../TaskCheckGeometry.cpp" line="350"/>
      <source>Type</source>
      <translation>Typ</translation>
    </message>
    <message>
      <location filename="../../TaskCheckGeometry.cpp" line="352"/>
      <source>Error</source>
      <translation>Błąd</translation>
    </message>
  </context>
  <context>
    <name>PartGui::ShapeBuilderWidget</name>
    <message>
      <location filename="../../TaskShapeBuilder.cpp" line="208"/>
      <location filename="../../TaskShapeBuilder.cpp" line="227"/>
      <location filename="../../TaskShapeBuilder.cpp" line="255"/>
      <location filename="../../TaskShapeBuilder.cpp" line="296"/>
      <location filename="../../TaskShapeBuilder.cpp" line="348"/>
      <location filename="../../TaskShapeBuilder.cpp" line="400"/>
      <location filename="../../TaskShapeBuilder.cpp" line="463"/>
      <source>Wrong selection</source>
      <translation>Niewłaściwy wybór</translation>
    </message>
    <message>
      <location filename="../../TaskShapeBuilder.cpp" line="208"/>
      <location filename="../../TaskShapeBuilder.cpp" line="227"/>
      <source>Select two vertices</source>
      <translation>Wybierz dwa wierzchołki</translation>
    </message>
    <message>
      <location filename="../../TaskShapeBuilder.cpp" line="255"/>
      <location filename="../../TaskShapeBuilder.cpp" line="348"/>
      <source>Select one or more edges</source>
      <translation>Wybierz jedną lub więcej krawędzi</translation>
    </message>
    <message>
      <location filename="../../TaskShapeBuilder.cpp" line="296"/>
      <source>Select three or more vertices</source>
      <translation>Wybierz trzy lub więcej wierzchołków</translation>
    </message>
    <message>
      <location filename="../../TaskShapeBuilder.cpp" line="400"/>
      <source>Select two or more faces</source>
      <translation>Zaznacz dwie lub więcej ścian</translation>
    </message>
    <message>
      <location filename="../../TaskShapeBuilder.cpp" line="463"/>
      <source>Select only one part object</source>
      <translation>Wybierz dokładnie jeden obiekt Części</translation>
    </message>
    <message>
      <location filename="../../TaskShapeBuilder.cpp" line="515"/>
      <source>Select two vertices to create an edge</source>
      <translation>Aby utworzyć krawędź zaznacz 2 wierzchołki</translation>
    </message>
    <message>
      <location filename="../../TaskShapeBuilder.cpp" line="522"/>
      <source>Select adjacent edges</source>
      <translation>Zaznacz przyległe krawędzie</translation>
    </message>
    <message>
      <location filename="../../TaskShapeBuilder.cpp" line="529"/>
      <source>Select a list of vertices</source>
      <translation>Wybierz listę wierzchołków</translation>
    </message>
    <message>
      <location filename="../../TaskShapeBuilder.cpp" line="536"/>
      <source>Select a closed set of edges</source>
      <translation>Wybierz zamknięty zestaw krawędzi</translation>
    </message>
    <message>
      <location filename="../../TaskShapeBuilder.cpp" line="543"/>
      <source>Select adjacent faces</source>
      <translation>Zaznacz przyległe ściany</translation>
    </message>
    <message>
      <location filename="../../TaskShapeBuilder.cpp" line="550"/>
      <source>All shape types can be selected</source>
      <translation>Można wybrać wszystkie typy kształtów</translation>
    </message>
  </context>
  <context>
    <name>PartGui::SweepWidget</name>
    <message>
      <location filename="../../TaskSweep.cpp" line="134"/>
      <source>Available profiles</source>
      <translation>Dostępne profile</translation>
    </message>
    <message>
      <location filename="../../TaskSweep.cpp" line="135"/>
      <source>Selected profiles</source>
      <translation>Wybrane profile</translation>
    </message>
    <message>
      <location filename="../../TaskSweep.cpp" line="281"/>
      <location filename="../../TaskSweep.cpp" line="411"/>
      <location filename="../../TaskSweep.cpp" line="419"/>
      <source>Sweep path</source>
      <translation>Ścieżka przeciągania</translation>
    </message>
    <message>
      <location filename="../../TaskSweep.cpp" line="281"/>
      <source>Select one or more connected edges you want to sweep along.</source>
      <translation>Wybierz jedną lub więcej połączonych krawędzi, po których chcesz wykonać przeciągnięcie.</translation>
    </message>
    <message>
      <location filename="../../TaskSweep.cpp" line="309"/>
      <source>Too few elements</source>
      <translation>Zbyt mało elementów</translation>
    </message>
    <message>
      <location filename="../../TaskSweep.cpp" line="309"/>
      <source>At least one edge or wire is required.</source>
      <translation>Wymagana jest co najmniej jedna krawędź lub polilinia.</translation>
    </message>
    <message>
      <location filename="../../TaskSweep.cpp" line="316"/>
      <source>Wrong selection</source>
      <translation>Niewłaściwy wybór</translation>
    </message>
    <message>
      <location filename="../../TaskSweep.cpp" line="316"/>
      <source>'%1' cannot be used as profile and path.</source>
      <translation>"%1" nie można użyć jako profilu i ścieżki.</translation>
    </message>
    <message>
      <location filename="../../TaskSweep.cpp" line="354"/>
      <source>Input error</source>
      <translation>Błąd danych wejściowych</translation>
    </message>
    <message>
      <location filename="../../TaskSweep.cpp" line="387"/>
      <source>Done</source>
      <translation>Gotowe</translation>
    </message>
    <message>
      <location filename="../../TaskSweep.cpp" line="389"/>
      <source>Select one or more connected edges in the 3d view and press 'Done'</source>
      <translation>Wybierz jedną lub więcej połączonych krawędzi w oknie widoku 3D i naciśnij przycisk "Gotowe"</translation>
    </message>
    <message>
      <location filename="../../TaskSweep.cpp" line="411"/>
      <location filename="../../TaskSweep.cpp" line="419"/>
      <source>The selected sweep path is invalid.</source>
      <translation>Zaznaczona ścieżka wyciągnięcia jest nieprawidłowa.</translation>
    </message>
    <message>
      <location filename="../../TaskSweep.cpp" line="431"/>
      <source>Vertex/Wire</source>
      <translation>Utwórz obwiednię</translation>
    </message>
    <message>
      <location filename="../../TaskSweep.cpp" line="432"/>
      <source>Sweep</source>
      <translation>Wyciągnięcie po ścieżce</translation>
    </message>
  </context>
  <context>
    <name>PartGui::TaskAttacher</name>
    <message>
      <location filename="../../TaskAttacher.ui" line="14"/>
      <source>Form</source>
      <translation>Formularz</translation>
    </message>
    <message>
      <location filename="../../TaskAttacher.ui" line="20"/>
      <source>Selection accepted</source>
      <translation>Wybór zaakceptowany</translation>
    </message>
    <message>
      <location filename="../../TaskAttacher.ui" line="35"/>
      <source>Reference 1</source>
      <translation>Odniesienie 1</translation>
    </message>
    <message>
      <location filename="../../TaskAttacher.ui" line="52"/>
      <source>Reference 2</source>
      <translation>Odniesienie 2</translation>
    </message>
    <message>
      <location filename="../../TaskAttacher.ui" line="69"/>
      <source>Reference 3</source>
      <translation>Odniesienie 3</translation>
    </message>
    <message>
      <location filename="../../TaskAttacher.ui" line="86"/>
      <source>Reference 4</source>
      <translation>Odniesienie 4</translation>
    </message>
    <message>
      <location filename="../../TaskAttacher.ui" line="101"/>
      <source>Attachment mode:</source>
      <translation>Tryb mocowania:</translation>
    </message>
    <message>
      <location filename="../../TaskAttacher.ui" line="124"/>
      <location filename="../../TaskAttacher.cpp" line="335"/>
      <source>Attachment Offset (in local coordinates):</source>
      <translation>Odsunięcie dołączenia (według lokalnych współrzędnych):</translation>
    </message>
    <message>
      <location filename="../../TaskAttacher.ui" line="136"/>
      <source>In x-direction:</source>
      <translation>W kierunku x:</translation>
    </message>
    <message>
      <location filename="../../TaskAttacher.ui" line="152"/>
      <source>In y-direction:</source>
      <translation>W kierunku y:</translation>
    </message>
    <message>
      <location filename="../../TaskAttacher.ui" line="171"/>
      <location filename="../../TaskAttacher.ui" line="207"/>
      <location filename="../../TaskAttacher.ui" line="269"/>
      <source>Note: The placement is expressed in local coordinate system
of object being attached.</source>
      <translation>Uwaga: Umiejscowienie jest wyrażone w lokalnym układzie współrzędnych dołączanego obiektu.</translation>
    </message>
    <message>
      <location filename="../../TaskAttacher.ui" line="188"/>
      <source>In z-direction:</source>
      <translation>W kierunku z:</translation>
    </message>
    <message>
      <location filename="../../TaskAttacher.ui" line="224"/>
      <source>Around x-axis:</source>
      <translation>Wokół osi X:</translation>
    </message>
    <message>
      <location filename="../../TaskAttacher.ui" line="237"/>
      <source>Around y-axis:</source>
      <translation>Wokół osi Y:</translation>
    </message>
    <message>
      <location filename="../../TaskAttacher.ui" line="250"/>
      <source>Around z-axis:</source>
      <translation>Wokół osi Z:</translation>
    </message>
    <message>
      <location filename="../../TaskAttacher.ui" line="286"/>
      <source>Rotation around the x-axis
Note: The placement is expressed in local coordinate system
of object being attached.</source>
      <translation>Obrót wokół osi x
Uwaga: Umiejscowienie jest wyrażone w lokalnym układzie współrzędnych
dołączanego obiektu.</translation>
    </message>
    <message>
      <location filename="../../TaskAttacher.ui" line="313"/>
      <source>Rotation around the y-axis
Note: The placement is expressed in local coordinate system
of object being attached.</source>
      <translation>Obrót wokół osi y
Uwaga: Umiejscowienie jest wyrażone w lokalnym układzie współrzędnych
dołączanego obiektu.</translation>
    </message>
    <message>
      <location filename="../../TaskAttacher.ui" line="340"/>
      <source>Rotation around the z-axis
Note: The placement is expressed in local coordinate system
of object being attached.</source>
      <translation>Obrót wokół osi z
Uwaga: Umiejscowienie jest wyrażone w lokalnym układzie współrzędnych
dołączanego obiektu.</translation>
    </message>
    <message>
      <location filename="../../TaskAttacher.ui" line="364"/>
      <source>Flip side of attachment and offset</source>
      <translation>Odwróć stronę dołączenia i przesunięcie</translation>
    </message>
    <message>
      <location filename="../../TaskAttacher.ui" line="367"/>
      <source>Flip sides</source>
      <translation>Odwróć strony</translation>
    </message>
    <message>
      <location filename="../../TaskAttacher.cpp" line="318"/>
      <source>OCC error: %1</source>
      <translation>Błąd OCC:%1</translation>
    </message>
    <message>
      <location filename="../../TaskAttacher.cpp" line="320"/>
      <source>unknown error</source>
      <translation>nieznany błąd</translation>
    </message>
    <message>
      <location filename="../../TaskAttacher.cpp" line="323"/>
      <source>Attachment mode failed: %1</source>
      <translation>Tryb mocowania nie powiódł się: %1</translation>
    </message>
    <message>
      <location filename="../../TaskAttacher.cpp" line="327"/>
      <source>Not attached</source>
      <translation>Nie dołączony</translation>
    </message>
    <message>
      <location filename="../../TaskAttacher.cpp" line="331"/>
      <source>Attached with mode %1</source>
      <translation>Dołączony w trybie %1</translation>
    </message>
    <message>
      <location filename="../../TaskAttacher.cpp" line="335"/>
      <source>Attachment Offset (inactive - not attached):</source>
      <translation>Odsunięcie dołączenia: (nieaktywny - nie dołączono):</translation>
    </message>
    <message>
      <location filename="../../TaskAttacher.cpp" line="627"/>
      <source>Face</source>
      <translation>Ściana</translation>
    </message>
    <message>
      <location filename="../../TaskAttacher.cpp" line="632"/>
      <source>Edge</source>
      <translation>Krawędź</translation>
    </message>
    <message>
      <location filename="../../TaskAttacher.cpp" line="637"/>
      <source>Vertex</source>
      <translation>Wierzchołek</translation>
    </message>
    <message>
      <location filename="../../TaskAttacher.cpp" line="699"/>
      <source>Selecting...</source>
      <translation>Wybieranie...</translation>
    </message>
    <message>
      <location filename="../../TaskAttacher.cpp" line="703"/>
      <source>Reference%1</source>
      <translation>Referencja%1</translation>
    </message>
    <message>
      <location filename="../../TaskAttacher.cpp" line="750"/>
      <source>Not editable because rotation of AttachmentOffset is bound by expressions.</source>
      <translation>Nie można edytować, ponieważ obrót Odsunięcia Dołączenia jest związany przez wyrażenia.</translation>
    </message>
    <message>
      <location filename="../../TaskAttacher.cpp" line="816"/>
      <source>Reference combinations:</source>
      <translation>Kombinacje odniesienia:</translation>
    </message>
    <message>
      <location filename="../../TaskAttacher.cpp" line="833"/>
      <source>%1 (add %2)</source>
      <translation>%1 (dodaj %2)</translation>
    </message>
    <message>
      <location filename="../../TaskAttacher.cpp" line="838"/>
      <source>%1 (add more references)</source>
      <translation>%1 (dodaj więcej odniesień)</translation>
    </message>
  </context>
  <context>
    <name>PartGui::TaskCheckGeometryDialog</name>
    <message>
      <location filename="../../TaskCheckGeometry.cpp" line="1068"/>
      <source>Shape Content</source>
      <translation>Zawartość kształtu</translation>
    </message>
    <message>
      <location filename="../../TaskCheckGeometry.cpp" line="1076"/>
      <location filename="../../TaskCheckGeometry.cpp" line="1270"/>
      <source>Settings</source>
      <translation>Ustawienia</translation>
    </message>
    <message>
      <location filename="../../TaskCheckGeometry.cpp" line="1080"/>
      <source>Skip settings page</source>
      <translation>Pomiń stronę ustawień</translation>
    </message>
    <message>
      <location filename="../../TaskCheckGeometry.cpp" line="1081"/>
      <source>Skip this settings page and run the geometry check automatically.
Default: false</source>
      <translation>Pomiń tę stronę ustawień i uruchom kontrolę geometrii automatycznie.
Domyślnie: nie</translation>
    </message>
    <message>
      <location filename="../../TaskCheckGeometry.cpp" line="1090"/>
      <source>Run BOP check</source>
      <translation>Uruchom sprawdzanie BOP</translation>
    </message>
    <message>
      <location filename="../../TaskCheckGeometry.cpp" line="1091"/>
      <source>Extra boolean operations check that can sometimes find errors that
the standard BRep geometry check misses. These errors do not always 
mean the checked object is unusable.  Default: false</source>
      <translation>Dodatkowa kontrola operacji logicznych, która może czasami znaleźć błędy,
które pomija standardowe sprawdzenie geometrii BRep. Błędy te nie zawsze 
oznaczają, że sprawdzany obiekt jest bezużyteczny.  Domyślnie: nie</translation>
    </message>
    <message>
      <location filename="../../TaskCheckGeometry.cpp" line="1101"/>
      <source>Single-threaded</source>
      <translation>Jednowątkowy</translation>
    </message>
    <message>
      <location filename="../../TaskCheckGeometry.cpp" line="1102"/>
      <source>Run the geometry check in a single thread.  This is slower,
but more stable.  Default: false</source>
      <translation>Uruchom sprawdzanie geometrii w pojedynczym wątku.  Działanie jest wolniejsze,
ale bardziej stabilne.  Domyślnie: nie</translation>
    </message>
    <message>
      <location filename="../../TaskCheckGeometry.cpp" line="1111"/>
      <source>Log errors</source>
      <translation>Zapisuj błędy</translation>
    </message>
    <message>
      <location filename="../../TaskCheckGeometry.cpp" line="1112"/>
      <source>Log errors to report view.  Default: true</source>
      <translation>Logowanie błędów w widoku raportu.  Domyślnie: tak</translation>
    </message>
    <message>
      <location filename="../../TaskCheckGeometry.cpp" line="1119"/>
      <source>Expand shape content</source>
      <translation>Rozwiń zawartość kształtu</translation>
    </message>
    <message>
      <location filename="../../TaskCheckGeometry.cpp" line="1120"/>
      <source>Expand shape content.  Changes will take effect next time you use 
the check geometry tool.  Default: false</source>
      <translation>Rozwiń zawartość kształtu. Zmiany zaczną obowiązywać następnym razem, gdy użyjesz 
narzędzia do sprawdzania geometrii. Domyślnie: nie</translation>
    </message>
    <message>
      <location filename="../../TaskCheckGeometry.cpp" line="1129"/>
      <source>Advanced shape content</source>
      <translation>Zaawansowana zawartość kształtu</translation>
    </message>
    <message>
      <location filename="../../TaskCheckGeometry.cpp" line="1130"/>
      <source>Show advanced shape content.  Changes will take effect next time you use 
the check geometry tool.  Default: false</source>
      <translation>Pokaż zaawansowaną zawartość kształtu. Zmiany zaczną obowiązywać następnym razem, gdy używasz 
narzędzia sprawdzania geometrii. Domyślnie: nie</translation>
    </message>
    <message>
      <location filename="../../TaskCheckGeometry.cpp" line="1138"/>
      <source>
Individual BOP Checks:</source>
      <translation>
Pojedyncze kontrole BOP:</translation>
    </message>
    <message>
      <location filename="../../TaskCheckGeometry.cpp" line="1141"/>
      <source>  Bad type</source>
      <translation>  Błędny rodzaj</translation>
    </message>
    <message>
      <location filename="../../TaskCheckGeometry.cpp" line="1142"/>
      <source>Check for bad argument types.  Default: true</source>
      <translation>Sprawdzaj nieprawidłowe rodzaje argumentów. Domyślnie: tak</translation>
    </message>
    <message>
      <location filename="../../TaskCheckGeometry.cpp" line="1149"/>
      <source>  Self-intersect</source>
      <translation>  Samoprzecięcia</translation>
    </message>
    <message>
      <location filename="../../TaskCheckGeometry.cpp" line="1150"/>
      <source>Check for self-intersections.  Default: true</source>
      <translation>Sprawdź czy nie ma samoprzecięć.  Domyślnie: tak</translation>
    </message>
    <message>
      <location filename="../../TaskCheckGeometry.cpp" line="1157"/>
      <source>  Too small edge</source>
      <translation>  Zbyt mała krawędź</translation>
    </message>
    <message>
      <location filename="../../TaskCheckGeometry.cpp" line="1158"/>
      <source>Check for edges that are too small.  Default: true</source>
      <translation>Sprawdź, czy krawędzie nie są zbyt małe.  Domyślnie: tak</translation>
    </message>
    <message>
      <location filename="../../TaskCheckGeometry.cpp" line="1165"/>
      <source>  Nonrecoverable face</source>
      <translation>  Ściana nie do odzyskania</translation>
    </message>
    <message>
      <location filename="../../TaskCheckGeometry.cpp" line="1166"/>
      <source>Check for nonrecoverable faces.  Default: true</source>
      <translation>Sprawdź, czy nie ma możliwości odzyskania ścian.  Domyślnie: tak</translation>
    </message>
    <message>
      <location filename="../../TaskCheckGeometry.cpp" line="1173"/>
      <source>  Continuity</source>
      <translation>  Ciągłość</translation>
    </message>
    <message>
      <location filename="../../TaskCheckGeometry.cpp" line="1174"/>
      <source>Check for continuity.  Default: true</source>
      <translation>Sprawdź ciągłość. Domyślnie: tak</translation>
    </message>
    <message>
      <location filename="../../TaskCheckGeometry.cpp" line="1181"/>
      <source>  Incompatibility of face</source>
      <translation>  Niezgodność ścian</translation>
    </message>
    <message>
      <location filename="../../TaskCheckGeometry.cpp" line="1182"/>
      <source>Check for incompatible faces.  Default: true</source>
      <translation>Sprawdź, czy nie ma nieprawidłowych powierzchni.  Domyślnie: tak</translation>
    </message>
    <message>
      <location filename="../../TaskCheckGeometry.cpp" line="1189"/>
      <source>  Incompatibility of vertex</source>
      <translation>  Niezgodność wierzchołka</translation>
    </message>
    <message>
      <location filename="../../TaskCheckGeometry.cpp" line="1190"/>
      <source>Check for incompatible vertices.  Default: true</source>
      <translation>Sprawdź niekompatybilne wierzchołki. Domyślnie: tak</translation>
    </message>
    <message>
      <location filename="../../TaskCheckGeometry.cpp" line="1197"/>
      <source>  Incompatibility of edge</source>
      <translation>  Niekompatybilność krawędzi</translation>
    </message>
    <message>
      <location filename="../../TaskCheckGeometry.cpp" line="1198"/>
      <source>Check for incompatible edges.  Default: true</source>
      <translation>Sprawdzaj niekompatybilne krawędzie. Domyślnie: tak</translation>
    </message>
    <message>
      <location filename="../../TaskCheckGeometry.cpp" line="1205"/>
      <source>  Invalid curve on surface</source>
      <translation>  Nieprawidłowa krzywa na powierzchni</translation>
    </message>
    <message>
      <location filename="../../TaskCheckGeometry.cpp" line="1206"/>
      <source>Check for invalid curves on surfaces.  Default: true</source>
      <translation>Sprawdzaj nieprawidłowe krzywe na powierzchni. Domyślnie: tak</translation>
    </message>
    <message>
      <location filename="../../TaskCheckGeometry.cpp" line="1269"/>
      <source>Run check</source>
      <translation>Uruchom sprawdzanie</translation>
    </message>
    <message>
      <location filename="../../TaskCheckGeometry.cpp" line="1275"/>
      <source>Results</source>
      <translation>Wyniki</translation>
    </message>
  </context>
  <context>
    <name>PartGui::TaskCheckGeometryResults</name>
    <message>
      <location filename="../../TaskCheckGeometry.cpp" line="383"/>
      <source>Check Geometry Results</source>
      <translation>Sprawdź wyniki geometrii</translation>
    </message>
    <message>
      <location filename="../../TaskCheckGeometry.cpp" line="402"/>
      <source>Check is running...</source>
      <translation>Sprawdzanie jest uruchomione ...</translation>
    </message>
    <message>
      <location filename="../../TaskCheckGeometry.cpp" line="426"/>
      <location filename="../../TaskCheckGeometry.cpp" line="432"/>
      <source>Check geometry</source>
      <translation>Sprawdź geometrię</translation>
    </message>
  </context>
  <context>
    <name>PartGui::TaskDlgAttacher</name>
    <message>
      <location filename="../../TaskAttacher.cpp" line="1104"/>
      <source>Datum dialog: Input error</source>
      <translation>Dialog punktu odniesienia: Błąd wprowadzenia</translation>
    </message>
  </context>
  <context>
    <name>PartGui::TaskFaceColors</name>
    <message>
      <location filename="../../TaskFaceColors.ui" line="14"/>
      <source>Set color per face</source>
      <translation>Ustaw kolor ściany</translation>
    </message>
    <message>
      <location filename="../../TaskFaceColors.ui" line="20"/>
      <source>Click on the faces in the 3D view to select them</source>
      <translation>Aby zaznaczyć ściany w oknie widoku 3D, kliknij na nie</translation>
    </message>
    <message>
      <location filename="../../TaskFaceColors.ui" line="39"/>
      <source>Faces:</source>
      <translation>Ściany:</translation>
    </message>
    <message>
      <location filename="../../TaskFaceColors.ui" line="87"/>
      <source>Resets color for all faces of the part</source>
      <translation>Resetuje kolor wszystkich ścian części</translation>
    </message>
    <message>
      <location filename="../../TaskFaceColors.ui" line="90"/>
      <source>Set to default</source>
      <translation>Ustaw jako domyślne</translation>
    </message>
    <message>
      <location filename="../../TaskFaceColors.ui" line="97"/>
      <source>When checked, the you can select multiple faces
by dragging a selection rectangle in the 3D view</source>
      <translation>Gdy opcja jest zaznaczona, można wybrać wiele ścian.
przez przeciągnięcie prostokąta zaznaczenia w oknie widoku 3D</translation>
    </message>
    <message>
      <location filename="../../TaskFaceColors.ui" line="101"/>
      <source>Box selection</source>
      <translation>Zaznacz obszar</translation>
    </message>
  </context>
  <context>
    <name>PartGui::TaskLoft</name>
    <message>
      <location filename="../../TaskLoft.ui" line="14"/>
      <source>Loft</source>
      <translation>Wyciągnięcie po profilach</translation>
    </message>
    <message>
      <location filename="../../TaskLoft.ui" line="23"/>
      <source>Create solid</source>
      <translation>Utwórz bryłę</translation>
    </message>
    <message>
      <location filename="../../TaskLoft.ui" line="30"/>
      <source>Ruled surface</source>
      <translation>Powierzchnia prostokreślna</translation>
    </message>
    <message>
      <location filename="../../TaskLoft.ui" line="50"/>
      <source>Closed</source>
      <translation>Zamknięty</translation>
    </message>
  </context>
  <context>
    <name>PartGui::TaskOffset</name>
    <message>
      <location filename="../../TaskOffset.ui" line="14"/>
      <location filename="../../TaskOffset.ui" line="20"/>
      <source>Offset</source>
      <translation>Odsunięcie</translation>
    </message>
    <message>
      <location filename="../../TaskOffset.ui" line="34"/>
      <source>Mode</source>
      <translation>Tryb</translation>
    </message>
    <message>
      <location filename="../../TaskOffset.ui" line="42"/>
      <source>Skin</source>
      <translation>Powłoka</translation>
    </message>
    <message>
      <location filename="../../TaskOffset.ui" line="47"/>
      <source>Pipe</source>
      <translation>Rura</translation>
    </message>
    <message>
      <location filename="../../TaskOffset.ui" line="52"/>
      <source>RectoVerso</source>
      <translation>Obie strony</translation>
    </message>
    <message>
      <location filename="../../TaskOffset.ui" line="60"/>
      <source>Join type</source>
      <translation>Typ dołączenia</translation>
    </message>
    <message>
      <location filename="../../TaskOffset.ui" line="68"/>
      <source>Arc</source>
      <translation>Wzdłuż łuku</translation>
    </message>
    <message>
      <location filename="../../TaskOffset.ui" line="73"/>
      <source>Tangent</source>
      <translation>Stycznie</translation>
    </message>
    <message>
      <location filename="../../TaskOffset.ui" line="78"/>
      <location filename="../../TaskOffset.ui" line="86"/>
      <source>Intersection</source>
      <translation>Przecięcie</translation>
    </message>
    <message>
      <location filename="../../TaskOffset.ui" line="93"/>
      <source>Self-intersection</source>
      <translation>Samoprzecięcia</translation>
    </message>
    <message>
      <location filename="../../TaskOffset.ui" line="100"/>
      <source>Fill offset</source>
      <translation>Wypełnij przesunięcie</translation>
    </message>
    <message>
      <location filename="../../TaskOffset.ui" line="114"/>
      <source>Faces</source>
      <translation>Ściany</translation>
    </message>
    <message>
      <location filename="../../TaskOffset.ui" line="144"/>
      <source>Update view</source>
      <translation>Aktualizuj widok</translation>
    </message>
  </context>
  <context>
    <name>PartGui::TaskShapeBuilder</name>
    <message>
      <location filename="../../TaskShapeBuilder.ui" line="14"/>
      <location filename="../../TaskShapeBuilder.ui" line="20"/>
      <source>Create shape</source>
      <translation>Utwórz kształt</translation>
    </message>
    <message>
      <location filename="../../TaskShapeBuilder.ui" line="26"/>
      <source>Face from vertices</source>
      <translation>Ściana z wierzchołków</translation>
    </message>
    <message>
      <location filename="../../TaskShapeBuilder.ui" line="33"/>
      <source>Shell from faces</source>
      <translation>Powłoka ze ścian</translation>
    </message>
    <message>
      <location filename="../../TaskShapeBuilder.ui" line="40"/>
      <source>Edge from vertices</source>
      <translation>Krawędź z wierzchołków</translation>
    </message>
    <message>
      <location filename="../../TaskShapeBuilder.ui" line="47"/>
      <source>Face from edges</source>
      <translation>Ściana z krawędzi</translation>
    </message>
    <message>
      <location filename="../../TaskShapeBuilder.ui" line="54"/>
      <source>Solid from shell</source>
      <translation>Bryła z powłoki</translation>
    </message>
    <message>
      <location filename="../../TaskShapeBuilder.ui" line="68"/>
      <source>Planar</source>
      <translation>Płaski</translation>
    </message>
    <message>
      <location filename="../../TaskShapeBuilder.ui" line="75"/>
      <source>Refine shape</source>
      <translation>Udoskonal kształt</translation>
    </message>
    <message>
      <location filename="../../TaskShapeBuilder.ui" line="85"/>
      <source>All faces</source>
      <translation>Wszystkie ściany</translation>
    </message>
    <message>
      <location filename="../../TaskShapeBuilder.ui" line="107"/>
      <source>Create</source>
      <translation>Utwórz</translation>
    </message>
    <message>
      <location filename="../../TaskShapeBuilder.ui" line="116"/>
      <source>Wire from edges</source>
      <translation>Polilinia z krawędzi</translation>
    </message>
  </context>
  <context>
    <name>PartGui::TaskSweep</name>
    <message>
      <location filename="../../TaskSweep.ui" line="14"/>
      <source>Sweep</source>
      <translation>Wyciągnięcie po ścieżce</translation>
    </message>
    <message>
      <location filename="../../TaskSweep.ui" line="23"/>
      <source>Sweep Path</source>
      <translation>Ścieżka wyciągnięcia</translation>
    </message>
    <message>
      <location filename="../../TaskSweep.ui" line="53"/>
      <source>Create solid</source>
      <translation>Utwórz bryłę</translation>
    </message>
    <message>
      <location filename="../../TaskSweep.ui" line="60"/>
      <source>Frenet</source>
      <translation>Wektor Freneta</translation>
    </message>
    <message>
      <location filename="../../TaskSweep.cpp" line="461"/>
      <source>Select one or more profiles and select an edge or wire
in the 3D view for the sweep path.</source>
      <translation>Wybierz jeden lub więcej profili i zaznacz krawędź lub polilinię w widoku 3D dla utworzenia ścieżki.</translation>
    </message>
  </context>
  <context>
    <name>PartGui::TaskTube</name>
    <message>
      <location filename="../../../BasicShapes/TaskTube.ui" line="14"/>
      <source>Tube</source>
      <translation>Rura</translation>
    </message>
    <message>
      <location filename="../../../BasicShapes/TaskTube.ui" line="23"/>
      <source>Parameter</source>
      <translation>Parametry</translation>
    </message>
    <message>
      <location filename="../../../BasicShapes/TaskTube.ui" line="78"/>
      <source>Height:</source>
      <translation>Wysokość:</translation>
    </message>
    <message>
      <location filename="../../../BasicShapes/TaskTube.ui" line="85"/>
      <source>Outer radius</source>
      <translation>Promień zewnętrzny</translation>
    </message>
    <message>
      <location filename="../../../BasicShapes/TaskTube.ui" line="92"/>
      <source>Inner radius</source>
      <translation>Promień wewnętrzny</translation>
    </message>
  </context>
  <context>
    <name>PartGui::ThicknessWidget</name>
    <message>
      <location filename="../../TaskThickness.cpp" line="99"/>
      <location filename="../../TaskThickness.cpp" line="279"/>
      <location filename="../../TaskThickness.cpp" line="289"/>
      <source>Thickness</source>
      <translation>Grubość</translation>
    </message>
    <message>
      <location filename="../../TaskThickness.cpp" line="177"/>
      <source>Select faces of the source object and press 'Done'</source>
      <translation>Wybierz ścianę obiektu źródłowego i kliknij "Gotowe"</translation>
    </message>
    <message>
      <location filename="../../TaskThickness.cpp" line="180"/>
      <source>Done</source>
      <translation>Gotowe</translation>
    </message>
    <message>
      <location filename="../../TaskThickness.cpp" line="244"/>
      <source>Input error</source>
      <translation>Błąd danych wejściowych</translation>
    </message>
  </context>
  <context>
    <name>Part_FaceMaker</name>
    <message>
      <location filename="../../../App/FaceMaker.cpp" line="172"/>
      <source>Simple</source>
      <translation>Proste</translation>
    </message>
    <message>
      <location filename="../../../App/FaceMaker.cpp" line="177"/>
      <source>Makes separate plane face from every wire independently. No support for holes; wires can be on different planes.</source>
      <translation>Tworzy osobną płaszczyznę ściany z każdej polilinii oddzielnie. Bez wsparcia dla otworów; polilinie mogą znajdować się na różnych płaszczyznach.</translation>
    </message>
    <message>
      <location filename="../../../App/FaceMakerBullseye.cpp" line="72"/>
      <source>Bull's-eye facemaker</source>
      <translation>Kreator ścian dookólnych</translation>
    </message>
    <message>
      <location filename="../../../App/FaceMakerBullseye.cpp" line="77"/>
      <source>Supports making planar faces with holes with islands.</source>
      <translation>Umożliwia tworzenie ścian planarnych z wyspami w otworach.</translation>
    </message>
    <message>
      <location filename="../../../App/FaceMakerCheese.cpp" line="249"/>
      <source>Cheese facemaker</source>
      <translation>Kreator ścian perforowanych</translation>
    </message>
    <message>
      <location filename="../../../App/FaceMakerCheese.cpp" line="254"/>
      <source>Supports making planar faces with holes, but no islands inside holes.</source>
      <translation>Umożliwia tworzenie planarnych ścian z otworami, ale bez wysp w otworach.</translation>
    </message>
    <message>
      <location filename="../../../App/FeatureExtrusion.cpp" line="504"/>
      <source>Part Extrude facemaker</source>
      <translation>Wyciągnięcie Części z twórcy ścian</translation>
    </message>
    <message>
      <location filename="../../../App/FeatureExtrusion.cpp" line="509"/>
      <source>Supports making faces with holes, does not support nesting.</source>
      <translation>Umożliwia stworzenie ścian z otworami, nie umożliwia zagnieżdżania.</translation>
    </message>
  </context>
  <context>
    <name>Workbench</name>
    <message>
      <location filename="../../Workbench.cpp" line="37"/>
      <source>&amp;Part</source>
      <translation>&amp;Część</translation>
    </message>
    <message>
      <location filename="../../Workbench.cpp" line="38"/>
      <source>&amp;Simple</source>
      <translation>&amp;Uproszczony</translation>
    </message>
    <message>
      <location filename="../../Workbench.cpp" line="39"/>
      <source>&amp;Parametric</source>
      <translation>&amp;Parametryczny</translation>
    </message>
    <message>
      <location filename="../../Workbench.cpp" line="40"/>
      <source>Solids</source>
      <translation>Bryły</translation>
    </message>
    <message>
      <location filename="../../Workbench.cpp" line="41"/>
      <source>Part tools</source>
      <translation>Narzędzia środowiska Część</translation>
    </message>
    <message>
      <location filename="../../Workbench.cpp" line="42"/>
      <source>Boolean</source>
      <translation>Funkcje logiczne</translation>
    </message>
    <message>
      <location filename="../../Workbench.cpp" line="43"/>
      <source>Primitives</source>
      <translation>Bryła pierwotna</translation>
    </message>
    <message>
      <location filename="../../Workbench.cpp" line="44"/>
      <source>Join</source>
      <translation>Połącz</translation>
    </message>
    <message>
      <location filename="../../Workbench.cpp" line="45"/>
      <source>Split</source>
      <translation>Rozdziel</translation>
    </message>
    <message>
      <location filename="../../Workbench.cpp" line="46"/>
      <source>Compound</source>
      <translation>Złożenie</translation>
    </message>
  </context>
</TS>
