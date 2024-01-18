<template>
    <div class="main-container">
        <h1>Gerenciar pedidos</h1>
        <Dashboard />
        <p></p>
    </div>    
</template>

<script>
import Dashboard from './Dashboard.vue';

export default {
    name: "Pedidos",
    components:{
        Dashboard,
    }
}
</script>