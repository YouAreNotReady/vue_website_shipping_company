<script>
let id = 0;

export default {
    data() {
        return {
            rates: [
                { id: id++, img: require("../assets/logo.png"), costForHalfHour: '600 руб.', costForHour: '1300 руб.', costForTwoHours: '2800 руб.', addHourCost: '700 руб'},
                { id: id++, img: require("../assets/car.jpg"), costForHalfHour: '700 руб.', costForHour: '1500 руб.', costForTwoHours: '3200 руб.', addHourCost: '750 руб'},
                { id: id++, img: require("../assets/logo.png"), costForHalfHour: '800 руб.', costForHour: '1800 руб.', costForTwoHours: '4000 руб.', addHourCost: '780 руб'}
            ]
        }
    }
}
</script>
<template>
    <div>
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
        <h2 class="page-title">Тарифы грузоперевозок</h2>
        <!-- <div class="time-cost">
                    <p>.</p>
                    <p>30 мин</p>
                    <p>1 час</p>
                    <p>2 часа</p>
                    <p>Цена за доп. час</p>

        </div> -->
        
        <div class="wrapper" >
            <ul class="row--time">
                <li>
                    <p></p>
                </li>        
            </ul>
            <ul class="row" v-for="rate in rates" :key="rate.id">
                <li>
                    <img :src="rate.img" alt="fail" class="row--image">
                </li>
            </ul>
            <ul class="row--time">
                    <li>
                        <p>30 мин.</p>
                        
                    </li>
                </ul>
            <ul class="row--text" v-for="rate in rates" :key="rate.costForHalfHour">
                <li>
                    <p class="text-wrapper">Заказать от {{ rate.costForHalfHour }}</p>
                </li>
            </ul>
            <ul class="row--time">
                    <li>
                        <p>1 час</p>
                        
                    </li>
                </ul>
            <ul class="row--text" v-for="rate in rates" :key="rate.costForHour">
                <li>
                    <p class="text-wrapper">Заказать от {{ rate.costForHour }}</p>
                </li>
            </ul>
            <ul class="row--time">
                    <li>
                        <p>2 часа</p>
                        
                    </li>
                </ul>
            <ul class="row--text" v-for="rate in rates" :key="rate.costForTwoHours">
                <li>
                    <p class="text-wrapper">Заказать от {{ rate.costForTwoHours }}</p>
                </li>
            </ul>
            <ul class="row--time">
                    <li>
                        <p>Цена за доп. час</p>
                        
                    </li>
                </ul>
            <ul class="row--text" v-for="rate in rates" :key="rate.addHourCost">
                <li>
                    <p class="text-wrapper">{{ rate.addHourCost }}</p>
                </li>
            </ul>
        </div>
    </div>

    <footer>

    </footer>
    </div>
</template>

<style scoped>
    .page-title {
        text-align: center;
    }

 

    .wrapper {
        display: grid;
        grid-gap: 10px;
        grid-auto-flow: column;
        grid-template-columns:  repeat(5, 1fr);
        grid-template-rows: 40px repeat(3, 1fr);    
    }
   
    .row {
        border: 2px solid #ffec99;
        border-radius: 5px;
        background-color: #fff9db;
        padding: 1em;
        margin: 1em;
        list-style-type: none;
        
    }
    .row--time{
        list-style-type: none;
        text-align: center;
        align-items: center;
        max-height: 40px;
        padding: 0;
        margin: 0;
    }
    

    .row--image {
        
        object-fit: contain;
        max-width:200px;
        max-height: 200px;
        
    }
    .row--text {
        list-style-type: none;
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0;
    }
    
    .text-wrapper {
        border: 2px solid #ffec99;
        border-radius: 5px;
        padding: 5px;
    }
</style>