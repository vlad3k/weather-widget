# Weather-widget

Проект в качестве тестового задания для комании STORK.

### Инструкция

1) Склонируйте репозиторий к себе командой: `npm run build`

2) Установите неоьходимые зависимости: `npm install`

3) Запустите локальный сервер для тестирования или разработки: `npm start`

### Особенности

- Список городов в виде js-массива находится в **./src/data/cities.js**
Обязательные поля: **id** и **name**

- Установить свои svg иконки можно положив их в папку **./assets** 
и получить их в качестве компонентов командой `npm run svgr` в папке **./src/icons**. Подробнее [здесь](https://www.smooth-code.com/open-source/svgr/).

- Класс для работы с API находится **./src/services/openweathermap** 

#### Время

На основную часть задания ушло около **8 часов**. И один день я искал как сделать анимацию, но так и не понял...

Времени ушло много, так как я смотрел как делать и время тратил на поиск, установку svg-иконок и на подгон дизайна. Но дизайн не получился точно таким как в резутате.

#### Не получилось

- Сделать анимацию при смене города. Я пробовал применить react-transition-group, но он работает, при добавлении ноды и при удалении. А react обновляет только значение элемента. Возможно я не до конца понял работу этой библиотеки.

- Дизайн. Так как стандартные иконки не видно на белом фоне, я решил использовать для фона синий цвет, а для шрифта белый. 

**Итого:** получилось, что я не выполнил два эти условия. Но я уверен, что я найду способ, я очень хочу учиться и развиваться дальше.
