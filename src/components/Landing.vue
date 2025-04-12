<template>
    <div class="landing-page">
        <img src="../assets/images/landing-img-2.jpg" alt="coding" class="img-coding">
        <div v-bind:class=autoTypingClass>{{ greeting }}</div>
        <div class="form">
            <input type="password" v-model="code" placeholder="code" class="input" maxlength="5" @keyup="changeBtnState()"><br/>
            
            <button v-bind:class=btnClass :disabled="code.length < 5" @click="checkCode()">GO</button><br/>
        </div>
        <div class="wrong-code" v-show="wrongCode">
            <p class="error"><small>wrong code</small></p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Landing",
        data() {
            return {
                greeting: "",
                code: "",
                btnClass: "btn",
                autoTypingClass: "greeting",
                wrongCode: false
            };
        },

        methods: {
            startGreeting() {
                this.initAutoTyping();
            },

            initAutoTyping() {
                var i = 0;
                this.greeting = "|";
                var t = setInterval(() => {
                    (i + 1)%2 == 0 ? this.autoTypingClass = "auto-typing" : this.autoTypingClass = "greeting";
                    i++;
                    if(i == 30) {
                        clearInterval(t);
                        this.autoTypingClass = "greeting";
                        this.startAutoTyping();
                    }
                }, 100)
            },

            startAutoTyping() {
                var text = "ketrika !";
                var temp = "";
                var n = text.length;
                var i = 0;
                var t = setInterval(() => {
                    temp = temp.replace("|", "");
                    temp = temp + text[i] + "|";  
                    this.greeting = temp;
                    i = i + 1;
                    if(i == n) {
                        setTimeout(() => {
                            this.greeting = this.greeting.replace("|", "");
                        }, 200);
                        clearInterval(t);
                    }
                }, 150)
            },

            changeBtnState() {
                this.code.length >= 5 ? this.btnClass = "ready-btn" : this.btnClass = "btn";
            },

            checkCode() {
                console.log(this.getCode());
                if(this.code == this.getCode()) {
                    this.go();
                }else {
                    this.wrongCode = true;
                    setTimeout(() => {
                        this.wrongCode = false;
                    }, 1000)
                }
            },

            getCode() {
                var date = new Date();
                var hours = date.getHours().toString().length == 1 ? "0" + date.getHours() : date.getHours();
                var minutes = date.getMinutes().toString().length == 1 ? "0" + date.getMinutes() : date.getMinutes();
                
                return (hours+ ":" + minutes);
            },

            go() {
                this.$emit("go", true);
            }
        },

        created() {
            this.startGreeting();
        }
    }
</script>