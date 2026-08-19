# Personal Website

Персональный сайт на [Nuxt 4](https://nuxt.com/). Проект построен по методологии
[Feature-Sliced Design](https://feature-sliced.design/), стили — на SCSS, для
разработки настроено окружение в Docker.

## Стек

- **Nuxt 4** + **Vue 3** + **vue-router**
- **SCSS** (`sass`) с авто-инжектом глобальных абстракций из `src/shared/styles`
- **Feature-Sliced Design** + линтер архитектуры **Steiger**
- **ESLint** (`@nuxt/eslint`), **Prettier**, **Stylelint**
- **Docker** / **Docker Compose** для локальной разработки
- **Node.js 24**

## Структура проекта

```
src/
├── app/            # инициализация приложения: маршруты, глобальные стили
│   ├── routes/     # страницы Nuxt (dir.pages)
│   └── styles/     # входные стили и reset
├── pages/          # FSD-слой pages (например, home-page)
└── shared/         # переиспользуемый код и стили (переменные, миксины)
```

## Запуск через Docker (рекомендуется)

Требуется установленный Docker и Docker Compose.

1. Создай файл `.env` со своими UID/GID (нужно, чтобы файлы, которые создаёт
   контейнер, принадлежали твоему пользователю, а не root):

   ```bash
   printf 'UID=%s\nGID=%s\n' "$(id -u)" "$(id -g)" > .env
   ```

2. Запусти проект:

   ```bash
   docker compose up --build
   ```

Приложение будет доступно на [http://localhost:3000](http://localhost:3000).
Исходники примонтированы в контейнер, поэтому hot-reload работает из коробки.

> При добавлении новой зависимости пересобери контейнер с обновлением тома
> `node_modules`:
>
> ```bash
> docker compose up --build --renew-anon-volumes
> ```

## Локальный запуск (без Docker)

Требуется Node.js 24.

```bash
# установка зависимостей
npm install

# сервер разработки на http://localhost:3000
npm run dev
```

> Даже при работе через Docker имеет смысл выполнить `npm install` на хосте —
> тогда редактор кода (TypeScript-сервер) видит зависимости и типы.

## Production

```bash
# сборка приложения
npm run build

# локальный предпросмотр production-сборки
npm run preview

# генерация статического сайта
npm run generate
```

## Скрипты

| Команда            | Описание                                    |
| ------------------ | ------------------------------------------- |
| `npm run dev`      | сервер разработки на `http://localhost:3000` |
| `npm run build`    | production-сборка                            |
| `npm run preview`  | предпросмотр production-сборки                |
| `npm run generate` | генерация статического сайта                  |

Подробнее — в [документации Nuxt](https://nuxt.com/docs/getting-started/introduction).
