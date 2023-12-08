const { createApp } = Vue;

createApp({
    data() {
        return {
            message: "Hello Vue",
            images: "https://media-assets.vanityfair.it/photos/614c90d5a7bbb646a22b4f2e/16:9/w_1920%2Cc_limit/calcutta-P.png"
        }
    }

}).mount('#app');