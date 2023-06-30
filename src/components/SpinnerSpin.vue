<template>
  <div class="spinnerContainer">
    <img alt="spinner" src="@/assets/spinner.png" class="spinner" />
  </div>
</template>

<style scoped>
.spinnerContainer {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 60px);
  width: 100%;
}

.spinner {
  animation: spin 1.5s linear infinite;
  width: 50px;
  height: 50px;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}
</style>
