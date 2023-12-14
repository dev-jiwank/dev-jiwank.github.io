export default {
    data() {
        return {
            isMobile: false,
        };
    },
    mounted() {
        this.isMobile = window.innerWidth < 768;
        window.addEventListener('resize', this.updateIsMobile);
    },
    methods: {
        updateIsMobile() {
            this.isMobile = window.innerWidth < 768;
        },
    },
};