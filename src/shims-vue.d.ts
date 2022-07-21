declare module "*.vue" {
    import { defineComponent } from "vue";
    const Component: ReturnType<typeof defineComponent>;
    export default Component;
}

declare module 'vue-easy-lightbox/dist/external-css/vue-easy-lightbox.es5.common.min' {
    import VueEasyLightbox from 'vue-easy-lightbox'
    export default VueEasyLightbox
}