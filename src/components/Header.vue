<script>
</script>

<template>
    <header class="container">
        <nav class="navbar">
            <ul class="gender-list">
                <li><a href="#">Donna</a></li>
                <li><a href="#">Uomo</a></li>
                <li><a href="#">Bambini</a></li>
            </ul>
            <figure class="logo">
                <img src="/img/boolean-logo.png" alt="" class="header-logo">
            </figure>
            <ul class="tools-list">
                <li><a href="#"><font-awesome-icon icon="fa-regular fa-user" /></a></li>
                <li><a href="#"><font-awesome-icon icon="fa-regular fa-heart" /></a></li>
                <li><a href="#"><font-awesome-icon icon="fa-solid fa-bag-shopping" /></a></li>
            </ul>
        </nav>
    </header>
</template>

<style lang="scss" scoped>
@use '../styles/partials/colors-palette' as *;
.container {
    width: 100%;
    margin: 0 auto;
    color: $white-text;
}

.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px;
    .gender-list {
        display: flex;
        gap: 8px;
        a {
            line-height: 36px;
        }
    }

    .logo{
        width: 100px;
    }

    .tools-list {
        display: flex;
        gap: 8px;
        a {
            line-height: 36px;
        }
    }

}
</style>