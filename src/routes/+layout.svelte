<script>
    import Header from './header.svelte';
    import Footer from './footer.svelte';
</script>

<div class="app">
    <Header />
    <main>
        <slot />
    </main>
    <Footer />
</div>