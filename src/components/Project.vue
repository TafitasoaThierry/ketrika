<template>
    <div class="project">
        <Landing v-on:go="hideLanding" v-show="showLanding"/>
        <div class="project-content" v-show="showContent">
            <div class="header">
                <p style="margin-right: -90px; z-index: 10;">Ketri<span class="ka">ka</span></p>
                <img src="../assets/images/landing-img-2.jpg" alt="coding" class="img-coding2">
            </div>
            <div class="main">
                <div class="box">

                </div>
                <div class="box">
                    
                </div>
                <div class="box">
                    
                </div>
                <div class="box">
                    
                </div>
            </div>
            <div class="add">
                <button>ajouter</button>
            </div>
        </div>
    </div>
</template>

<script>
    import Landing from './Landing.vue';
    import "../assets/styles/project.css";

    export default {
        name: "Project",
        components: {
            Landing
        },
        data() {
            return {
                showLanding: true,
                showContent: false
            };
        },
        methods: {
            hideLanding() {
                this.showLanding = false;
                this.showContent = true;
            }
        }
    }
</script>