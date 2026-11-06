# js-collab-helpdesk-3
Projekt helpdesk na RKZ

## Testy

| Wymaganie | Stan początkowy | Działanie | Wynik oczekiwany | Wynik faktyczny | Kto sprawdził |
|---|---|---|---|---|---|
| tytuły długości 2 znaków po trim | Wpisanie do title tekstu o dlugości 2 znaków z wytniętymi spacjami | Naciśnięcie na submit po wpisanym title | alert("Źle wpisane dane.") | alert("Źle wpisane dane.") | Niko |
| tytuły długości 3 znaków po trim | Wpisanie do title tekstu o dlugości 3 znaków z wytniętymi spacjami | Naciśnięcie na submit po wpisanym title | Bezbłędnie dodany tytuł do lity | Bezbłędnie dodany tytuł do lity | Niko |
| tytuły długości 81 znaków po trim | Wpisanie do title tekstu o dlugości 81 znaków z wytniętymi spacjami | Naciśnięcie na submit po wpisanym title | alert("Źle wpisane dane.") | alert("Źle wpisane dane.") | Niko |
| tytuły długości 80 znaków po trim | Wpisanie do title tekstu o dlugości 80 znaków z wytniętymi spacjami | Naciśnięcie na submit po wpisanym title | Bezbłędnie dodany tytuł do lity | Bezbłędnie dodany tytuł do lity| Niko |
| dwa takie same tytuły | pusta lista wpisów | Użytkownik poprawnie wpisuje dwa tytuły przez submit | dodane dwa takie same tytuły do listy | dodane dwa takie same tytuły do listy | Niko |
| sprawdzenie działania wszystkich statusów | pusta lista | Dodanie 3 tytułów do listy i manualna zmiana ich statusów poprzez select | są wpisane wszystkie statusy które można odfiltrować | są wpisane wszystkie statusy które można odfiltrować | Niko |
|pusty filtr|filtr jest ustawiony na wszystkie|filtr nie może być pusty, bo przyjmuje z góry narzucone 4 statusy, użytkownik w żadnym razie nie może ich zmienić|filtry działają sprawnie|filtry działają sprawnie| Niko |
|tekst HTML jest traktowany jako zwykły | pusta lista | wpisanie tekstu html do tytułu nic nie zmieni|wpisanie tekstu html nie niszczy stylu tytułu | wpisanie tekstu html do tytułu nic nie zmieni|wpisanie tekstu html nie niszczy stylu tytułu | Niko |
| dodawanie przez pociśnięcie [Enter] | Pusta tablica, puste pole do wpisywanie tytułu | Po prawidłowie wpisanym tytule można zatwierdzić przyciskiem [Enter] i tytuł doda się do tablicy| Element dodany to listy | Element dodany to listy | Niko |
| odświeżenie | strona jest zapełniona danymi | odświeżenie strony resetuje dane | odświeżenie strony resetuje dane | odświeżenie strony resetuje dane | Niko |
| 1000/1001 zgłoszeń w próbie domeny | 0 elementów w liście | Strona pozwala na wpisywanie max 1000 elementów | Przy próbie dodawania 1001 elementu na liście nic nowego się nie dodaje | Przy próbie dodawania 1001 elementu na liście nic nowego się nie dodaje | Niko |