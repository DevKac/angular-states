# AngularStateApp

Celem projektu jest stworzenie komponentu pomagającego obsługiwać 3 typowe stany danych: loading, success oraz failure.

Komponent ma potrafić:
- przyjąć inny komponent (jako ng-content?) i go wyświetlić jako success state
- umieć wykryć że dane są pobierane i obsłużyć to poprzez loader
- umieć wykryć error i obsłużyć go za pomocą error komponentu z template'u (lub kolejnym ng-content)
- ma umożliwiać ponowne odpytanie o dane (bez globalnego f5)
- dodatkowa opcja: stany puste
