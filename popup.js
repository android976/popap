(function() {
    // === НАСТРОЙКИ ===
    
    // Ваша ссылка на картинку
    const IMAGE_URL = "https://sun9-41.userapi.com/s/v1/ig2/-iB-q9y-I44DumUjs1-kisGFsNVlHwEQTtEqKDCONRWH3_FIp3kC3MTIddQKxMQ6IHcIu6jMwi4x4px5cm4pIUBc.jpg?quality=95&as=32x32,48x48,72x72,108x108,160x160,240x240,360x360,480x480,540x540,640x640,720x720,1080x1080,1280x1280,1440x1440,2560x2560&from=bu&u=8NwM8qKCn9Aat56nmFVzNtPJMcRXEEVo7lVLlDCbYck&cs=640x0"; 
    
    // Текст под картинкой
    const POPUP_TEXT = "Скидка на сет Семейный 800₽";

    // =================

    // ПРОВЕРКА UTM МЕТОК
    const urlParams = new URLSearchParams(window.location.search);
    let hasUtm = false;
    for (const key of urlParams.keys()) {
        if (key.startsWith('utm_')) {
            hasUtm = true;
            break;
        }
    }
    // Если меток нет — скрипт останавливается здесь
    if (!hasUtm) return;

    // СОЗДАНИЕ ЭЛЕМЕНТОВ
    
    // 1. Затемнение (фон)
    const overlay = document.createElement('div');
    overlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.7);
        z-index: 2147483647;
        display: flex;
        justify-content: center;
        align-items: center;
        font-family: Arial, sans-serif;
    `;

    // 2. Карточка (белая подложка)
    const card = document.createElement('div');
    card.style.cssText = `
        position: relative;
        width: 90%;
        max-width: 500px; /* Оптимальная ширина для вертикальной картинки */
        background: #ffffff;
        border-radius: 12px;
        padding: 0;
        overflow: hidden;
        box-shadow: 0 10px 25px rgba(0,0,0,0.5);
        display: flex;
        flex-direction: column;
    `;

    // 3. Картинка
    const img = document.createElement('img');
    img.src = IMAGE_URL;
    img.style.cssText = `
        width: 100%;
        height: auto;
        display: block;
        object-fit: cover;
    `;

    // 4. Текст
    const textBlock = document.createElement('div');
    textBlock.innerText = POPUP_TEXT;
    textBlock.style.cssText = `
        padding: 20px;
        font-size: 22px;
        font-weight: bold;
        color: #333;
        text-align: center;
        background: #fff;
    `;

    // 5. Кнопка закрытия (крестик)
    const closeBtn = document.createElement('div');
    closeBtn.innerHTML = '&times;';
    closeBtn.style.cssText = `
        position: absolute;
        top: 10px;
        right: 15px;
        font-size: 30px;
        color: #fff; /* Белый крестик на фоне картинки */
        cursor: pointer;
        text-shadow: 0 0 5px rgba(0,0,0,0.8); /* Тень, чтобы было видно на светлом фоне */
        font-weight: bold;
        line-height: 1;
        z-index: 10;
    `;

    // СБОРКА
    card.appendChild(closeBtn);
    card.appendChild(img);
    card.appendChild(textBlock);
    overlay.appendChild(card);

    document.body.appendChild(overlay);

    // ЗАКРЫТИЕ
    function closePopup() {
        overlay.remove();
    }

    overlay.addEventListener('click', function(e) {
        if (e.target === overlay) closePopup();
    });
    
    closeBtn.addEventListener('click', closePopup);
})();
