<template>
    <nav class=" blue lighten-2">
        <div class="nav-wrapper">
            <router-link to="/" class="brand-logo">Task manager</router-link>
            <ul id="nav-mobile" class="right hide-on-med-and-down">
                <router-link tag='li' to='/' exact>
                    <a href="#">Create</a>
                </router-link>
                <router-link tag='li' to='/list' >
                    <a href="#">List</a>
                </router-link>
                
            </ul>
        </div>
    </nav>
</template>



<script>
    export default {
        name:'navbar'
    }
</script>

<style lang='scss' scoped>
    nav {
        padding: 0 4rem;
    }
</style>