<template>
    <v-layout class="rounded rounded-md">
        <v-navigation-drawer color="blue-lighten-1" permanent>
<br>
<br>
<br>
       <h1>Add Employee</h1>

        </v-navigation-drawer>

        <v-app-bar :order="order" color="blue-lighten-1" title="Application bar" flat>
            <template v-slot:append>
                <v-switch v-model="order" false-value="0" true-value="-1" hide-details inset></v-switch>
            </template>
        </v-app-bar>

        <v-main class="d-flex align-center justify-center" style="min-height: 300px;">
            Main Content
        </v-main>
    </v-layout>
</template>
<script>
export default {
    data: () => ({
        order: 0,
    }),
}
</script>