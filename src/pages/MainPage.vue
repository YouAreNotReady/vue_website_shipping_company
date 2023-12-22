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

    <div class="container">
        <div class="container__image">
            <img class="top__image" src="../assets/car.jpg" alt="Изображение не найдено" >
        </div>
        
        <div class="overview">
            <h1>Перевозка грузов специализированными автотранспортными средствами</h1>    
            <p>
                 Сотни автомобилей компании "СБЛОГИСТИКА" в эту минуту курсируют по стране, и тысячи 
                предпринимателей могут отправить груз из Москвы в другие регионы. Доставка ещё 
                никогда не была такой простой и быстрой!
            </p>    
            <p>
                Мы осуществляем сборные грузоперевозки по всей территории России, 
                даже в отдаленные уголки.
            </p>    
            <p>
                Доставка грузов по России нашей транспортной компанией - это быстро и выгодно. 
                
            </p>  
               
        </div>
    </div>

    <footer>

    </footer>
    </div>
</template>

<style>
    body, html {
    margin: 0;
    font-family: 'Roboto', sans-serif;
    font-size: 15px;
    color: #000000;
    height: 100%;

}

*,
*::after,
*::before {
    box-sizing: border-box;
}
.page {
    min-height: calc(100vh - 80px);
    display: flex;
    flex-direction: column;
}


/* Header */

.header { 
    width: 100%;
    height: 80px;
    
    position: sticky;
    top: 0px;
    
    z-index: 100;
    background-color: #00114d;
}

/* @media screen and (max-width: 500px) {
  .header a {
    float: none;
    display: block;
    text-align: left;
 } */

.container {
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    max-width: 1200px;
    margin: auto;   
    flex: 1 0 auto;
}

.header__inner {
    padding-top: 21.5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    
}

.logo__link {
    text-decoration: none;
}
.header__logo {
    font-size: 30px;
    font-weight: bold;
    color: #fff;
}

/* Nav */
.nav {
    font-size: 1.5rem;
}

.nav__link {
    display: inline-block;
    vertical-align: top;
    margin: 0 10px;
    position: relative;

    color: #fff;
    text-decoration: none;

    transition: color .1s linear;
}

.nav__link::after {
    content: "";
    display: block;
    width: 100%;
    height: 3px;
    opacity: 0;

    background-color: #2655FF;

    position: absolute;
    top: 100%;
    left: 0;
    z-index: 1;

    transition: opacity .1s linear;
}

.nav__link:hover {
    color: #2655FF;
}

.nav__link:hover:after {
    opacity: 1;
}

/* Content */
.container__image {
    text-align: center;
}

.top__image {
    height: 300px;
}

</style>