##Knockoutjs in Action

###Примерный план доклада

* Определение  Model-View-View Model (MVVM) паттерна
* Быстро пробежаться по фичам: observable, observable array, layout bindings, computed observables. Дальше больше
* Практический пример решения проблемы с помощью knockoutjs
* Проблема: страница оформления заказа
* Есть список товаров с описанием и кнопкой удаления
* Есть возможность указать количество товара
* Есть кнопка отправки данных на сервер
* Решить проблему с использованим jquery
* Переписать с использованием knockoutjs


####TODO:

* (Done) Сделать площадку для экспериментов (скорее всего небольшое приложение на sinatra или nodejs)

```
cd app
rackup config.ru
```

* (Done) Сверстать страницу оформления заказа
* Создать ViewModel и отобразить данные модели. Идея для слайдов: вью без биндингов, вью с биндингами, данные, создание модели с использованием mapping, инициализация ViewModel (applyBindings)
