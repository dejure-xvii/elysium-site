# Elysium Visuals — сайт

Лендинг мода Elysium Visuals и лаунчера. Статический сайт без сборки, всё лежит в `public/`.
Стиль (цвета, Inter, Liquid Glass, анимированный фон) взят из
[elysium-launcher](https://github.com/dejure-xvii/elysium-launcher).

Кнопки «Скачать» при загрузке страницы получают прямую ссылку на `*_x64-setup.exe` из последнего
релиза лаунчера (GitHub API), а версия подставляется автоматически. Если API недоступен — ведут на
страницу `releases/latest`.

## Локальный просмотр
```powershell
npx serve public
```

## Скриншоты
Положите картинки в `public/assets/screens/` и в `public/index.html` замените блок
`<div class="shot-empty">…</div>` нужной карточки на
`<img src="/assets/screens/clickgui.png" alt="ClickGUI" loading="lazy">` (лучше 16:9, ~1600×900, PNG/WebP).

## Деплой на Cloudflare
Сайт: https://elysium-visuals.elysium-site.workers.dev
```powershell
npx wrangler login            # один раз
npx wrangler deploy            # настройки в wrangler.jsonc
```
