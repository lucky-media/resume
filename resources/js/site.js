// This is all you.
import Alpine from "alpinejs";
import "@fontsource/dm-sans/400.css";
import "@fontsource/dm-sans/500.css";
import "@fontsource/dm-sans/700.css";

window.Alpine = Alpine;

Alpine.data('darkMode', () => ({
    enabled: false,

    init() {
        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia(
            '(prefers-color-scheme: dark)').matches)) {
            this.enabled = true
        } else {
            this.enabled = false;
        }
    },

    toggle() {
        if (localStorage.theme === 'dark') {
            localStorage.theme = 'light';
            document.documentElement.classList.remove('dark');
            this.enabled = false;
        } else {
            localStorage.theme = 'dark';
            document.documentElement.classList.add('dark');
            this.enabled = true;
        }
    }
}))

Alpine.start();
