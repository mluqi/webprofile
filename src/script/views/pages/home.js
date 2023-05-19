const Home = {
    async render() {
        return `
        <!-- Navigation-->
        <nav-bar></nav-bar>
        <!-- Header-->
        <head-der></head-der>
        <!-- About Section-->
        <about-sec></about-sec>
    `;
    },

    async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
    },
};

export default Home;