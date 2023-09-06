<template>

<div class="timer-div">
  <h4>Time until we can get a dog</h4>
  <p>{{Math.trunc(days)}} Days</p>
  <p>{{Math.trunc(hours)}} Hours</p>
  <p>{{Math.trunc(minutes)}} Minutes</p>
  <p>{{Math.trunc(seconds)}} Seconds</p>
</div>
</template>

<script>
export default {

    props: {

        date: {
            type: String

        }

    },
    data() {
        return {
            now: 0,
            count: 0,
        }


    },

    methods: {
        timer_loop() {
            this.count++
            this.now = Math.trunc(new Date().getTime() / 1000)
            this.count < 200 && setTimeout(this.timer_loop, 1000)
        },
    },
    mounted() {

        this.timer_loop()
    },
    computed: {
        seconds() {

            return (this.modifiedDate - this.now) % 60

        },

        minutes() {

            return ((this.modifiedDate - this.now) / 60) % 60

        },
        hours() {

            return ((this.modifiedDate - this.now) / 60 / 60) % 24

        },
        days() {

            return ((this.modifiedDate - this.now) / 60 / 60 / 24)

        },
        modifiedDate: function () {
            return Math.trunc(Date.parse(this.date) / 1000)
        }

    }
}
</script>
<style scoped>
.timer-div{
  display: flex;
  color: white;
  width: 50%;
  justify-content: space-evenly;
}
.timer-div > p{
  padding: 10px;
  margin-bottom: 50px;
  border: 1px solid var(--light-red);

}
.timer-div > h4{
  text-align: right;
  padding: 5px;
  margin-right: 5px;
}
</style>