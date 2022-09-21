<template>
  <div></div>
</template>

<script>
export default {
    data: function () {
        return {
            title: "Ross Effinger",
        }
    },
    head: {
        title: function() {
            return{
                inner: this.title
            }
        }
    },
    meta: [
        {
            name: 'description', content: 'This is my portfolio website. Check me out and contact me if you think I am fit for you tream!', id: 'desc'
        },
        {
            name: 'keywords', content: 'Ross Effinger, Ross, Effinger, Portfolio, Ross Effinger portfolio'
        }
    ]
}
</script>

<style>

</style>