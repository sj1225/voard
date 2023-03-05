<template>
  <div>
    <h1>{{ $route.params.title }}</h1>
    <h3>{{ $route.params.writer }}</h3>
    <h3>{{ $route.params.writedate }}</h3>
    <h3>{{ $route.params.content }}</h3>
  </div>
</template>

<script>
export default {
  name: "detail",
};
</script>
