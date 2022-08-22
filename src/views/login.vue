<template>
    <div class="demo">
        <Space direction="vertical" type="flex">
            <Input v-model="username" size="large" placeholder="Username" name='username'/>
            <Input v-model="password" size="large" placeholder="Password" name='passowrd'/>
            <Button type="primary" long>Login</Button>
        </Space>
    </div>
</template>

<script>
export default {
  methods: {
  }
}
</script>

<!-- <style>
    .demo-center{
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        width: 400px !important;
        margin: 0 auto;
    }
</style> -->

<style lang="less" scoped>
.demo{
  font-size: @font-size;
  text-align: center;
  margin: 200px;
}
</style>
