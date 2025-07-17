<template>
  <!-- <div class="w-100"> -->
    <!-- ✅ Navbar full width -->
    <!-- <nav class="navbar navbar-expand-lg navbar-dark bg-dark w-100">
      <div class="container-fluid">
        <RouterLink to="/" class="navbar-brand fw-bold text-primary">MyVueSite</RouterLink>

        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <RouterLink to="/" class="nav-link" active-class="active text-primary fw-bold">Home</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink to="/about" class="nav-link" active-class="active text-primary fw-bold">About</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink to="/practice" class="nav-link" active-class="active text-primary fw-bold">Practice</RouterLink>
            </li>
          </ul>
        </div>
      </div>
    </nav> -->

    <!-- 🔧 Use container-fluid or remove it entirely if you want full width -->
    <!-- <main class="container-fluid py-4"> -->
      <RouterView />
    <!-- </main> -->
  <!-- </div> -->
</template>
