<template>
  <nav class="navbar px-5 py-3">
      <div><RouterLink to="/" exact-active-class="">LOGO</RouterLink></div>

    <ul class="nav-links">
      <li><RouterLink to="/" exact-active-class="active-link">HOME</RouterLink></li>
      <li><RouterLink to="/product" exact-active-class="active-link">PRODUCT</RouterLink></li>
      <li><RouterLink to="/about" exact-active-class="active-link">ABOUT</RouterLink></li>
      <li><RouterLink to="/practice" exact-active-class="active-link">PRACTICE</RouterLink></li>
      <li><RouterLink to="/validation" exact-active-class="active-link">FORM</RouterLink></li>
      <li><RouterLink to="/login" exact-active-class="active-link">Login</RouterLink></li>
    </ul>
  </nav>
</template>
