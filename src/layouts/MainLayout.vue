<template lang="pug">
  q-layout(view='lHh Lpr lFf')
    q-header(elevated='')
      q-toolbar
        q-toolbar-title
          | Dream Team
    q-page-container

      router-view
</template>

<script>

export default {
  name: 'MainLayout',
  data () {
    return {
      filter: ''

    }
  }
}
</script>
