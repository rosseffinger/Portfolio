<template>
    <v-app :style="{background: $vuetify.theme.themes.dark.background} ">
        <NavBar />
        <v-container fluid>
            <v-row>
                <v-col cols='6'>
                    <v-img src='1.png' contain max-height='500'></v-img>
                </v-col>
                <v-col cols='6'>
                    <h5 class="red--text text-darken-4 top">Hello I'm Ross</h5>
                    <h1 class="white--text">I am a Software Developer</h1>
                </v-col>
            </v-row>
        </v-container>
    </v-app>
</template>

<script>
import NavBar from '../components/NavBar'
export default {
    name: 'Home',
    components: {
        NavBar,
    }
}
</script>

<style scoped>
    .top{
        margin-top:180px;
    }
</style>