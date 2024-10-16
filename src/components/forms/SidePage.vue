<template>
    <v-app>
        <!-- Sidebar (Navigation Drawer) -->
        <v-navigation-drawer app v-model="drawer" permanent>
            <v-list dense>
                <v-list-item-group>
                    <v-list-item v-for="(item, index) in items" :key="index">
                        <v-list-item-icon>
                            <v-icon>{{ item.icon }}</v-icon>
                        </v-list-item-icon>
                        <v-list-item-content>
                            <v-list-item-title>{{ item.title }}</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </v-list-item-group>
            </v-list>
        </v-navigation-drawer>

        <!-- Main content -->
        <v-main>
            <v-container>
                <v-btn @click="drawer = !drawer">Toggle Sidebar</v-btn>
                <h1>Main content goes here</h1>
            </v-container>
        </v-main>
    </v-app>
</template>

<script>
export default {
    data() {
        return {
            drawer: true, // Controls the sidebar visibility
            items: [
                { title: "Dashboard", icon: "mdi-view-dashboard" },
                { title: "Profile", icon: "mdi-account" },
                { title: "Settings", icon: "mdi-cog" },
                { title: "Logout", icon: "mdi-logout" },
            ],
        };
    },
};
</script>

<style scoped>
.v-navigation-drawer {
    width: 200px;
}
</style>
