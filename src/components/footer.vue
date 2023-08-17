<template>
    <div class="footer">
        <ul>
            <li><a :href="urlkalungi">Kalungi Rasuli :</a> <a :href="urlxylophone">Xylophone-tec</a></li>
            <li> <a :href="twitter">Twitter</a></li>
            <li> <a :href="refactory">Academy</a></li>
            <li><a href="#">Donate</a></li>

        </ul>
    </div>
</template>

<script>
    export default {
        name:'Footer-C',
        data(){
            return{
                urlxylophone:'https://github.com/XYLOPHONE-TEC/Markdown',
                urlkalungi:'https://github.com/kalungirasuli/Markdown',
                twitter:'https://twitter.com/KalungiRasuli',
                refactory:'https://www.refactory.ug/'
            }
        },
        methods:{

        }
    }
</script>

<style scoped>


</style>