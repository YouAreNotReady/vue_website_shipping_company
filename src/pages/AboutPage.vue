<template>
    <div class="page">
        <header class="header">
            <div class="container">
                <div class="header__inner">
    
                    <a class="logo__link" href="/">
                        <div class="header__logo">СБЛОГИСТИКА</div>
                    </a>
                    
                    <nav class="nav">
                        <router-link to="/rates" class="nav__link">Тарифы</router-link>
                        <a class="nav__link" href="#">Услуги</a>
                        <a class="nav__link" href="#">Документы</a>
                        <a class="nav__link" href="#">Контакты</a>
                        <router-link to="/about" class="nav__link">О компании</router-link>
                    </nav>

                </div>
            </div>
        </header>
                        
        <div class="container content">
            <div class="upper--text">
                <h2>Компания по перевозкам в Санкт-Петербурге</h2>
                <p>Наша компания осуществляет грузоперевозки в Санкт-Петербурге и Лен. области уже на протяжении 10 лет, <br>
                за время работы мы заслужили репутацию поставщика качественной услуги. Cотрудничать с нами выгодно <br>
                сразу по нескольким причинам:</p>
            </div>
            
             
            <div class="container main--text">
                <h2 class="main--text--title">Решаем ваши задачи</h2>
                <div class="feature">
                    <div class="feature--title">Грузоперевозки</div>
                    <div class="feature--text">Доставляем грузы любых размеров<br>точно в срок, от двери до двери.</div>
                </div>
                <div class="feature">
                    <div class="feature--title">Доставка до клиента</div>
                    <div class="feature--text">Передаем груз в руки клиенту,<br>без опозданий и форс-мажоров.</div>
                </div>
                <div class="feature">
                    <div class="feature--title">Грузовое такси</div>
                    <div class="feature--text">Выполняем срочные заказы. Документы,<br>договор, оплата – потом, после доставки.</div>
                </div>
                <br>
                <div class="feature">
                    <div class="feature--title">Междугородние перевозки</div>
                    <div class="feature--text">Отправляем рейсы в любую точку<br>России, со страховкой и экспедитором.</div>
                </div>
                <div class="feature">
                    <div class="feature--title">Такелажные работы</div>
                    <div class="feature--text">Загружаем и разгружаем тяжелый,<br>специфичный груз с применением<br>спецтехники.</div>
                </div>
                <div class="feature">
                    <div class="feature--title">Крупногабаритные грузы</div>
                    <div class="feature--text">Транспортируем нестандартные, сложные<br>рузы без каких-либо последствий.</div>
                </div>
            </div>
        </div>


    </div>
</template>

<style scoped>
    .page {
    min-height: calc(100vh - 80px);
    display: flex;
    flex-direction: column;
}
    .content {
        display: flex;
        flex-direction: column;
        /* justify-content: center; */
        /* align-items: center; */
    }
    .upper--text {
        font-size: medium;
    }
    .main--text {
        display: inline-block;
        text-align: left;
    }
    .main--text--title {
        text-align: left;
    }
    .feature {
        display: inline-block;
        vertical-align: top;
        width: fit-content;
        margin: 20px 20px;
    }
    .feature--title {
        text-align: left;
        font-weight: bold;
        /* margin-bottom: 5px; */
        padding-bottom: 5px;
    }
    .feature--title::after {
        content: ' ';
        background-color: #fecc01;
        height: 2px;
        display: block;
        width: 90px;
        margin-top: 5px;
    }
    .feature--text  {
        text-align: left;
        margin-top: 10px;
    }
</style>