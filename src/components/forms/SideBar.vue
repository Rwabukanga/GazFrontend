<template>
    <v-app>
        <!-- Navigation Drawer (Sidebar) -->
        <v-navigation-drawer app v-model="drawer" temporary>
            <v-list dense>
                <v-list-item>
                    <v-list-item-avatar>
                        <img src="" alt="Logo" />
                    </v-list-item-avatar>
                </v-list-item>
                <v-divider></v-divider>
                <v-list-item-group>
                    <v-list-item>
                        <v-list-item-icon>
                            <v-icon>mdi-view-dashboard</v-icon>
                        </v-list-item-icon>
                        <v-list-item-content>
                            <v-list-item-title>Dashboard</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>

                    <v-list-group>
                        <template v-slot:activator>
                            <v-list-item-icon>
                                <v-icon>mdi-form-textbox</v-icon>
                            </v-list-item-icon>
                            <v-list-item-content>
                                <v-list-item-title>Forms</v-list-item-title>
                            </v-list-item-content>
                        </template>

                        <v-list-item>
                            <v-list-item-content>
                                <router-link to="/forms-basic">Basic Form</router-link>
                            </v-list-item-content>
                        </v-list-item>

                        <v-list-item>
                            <v-list-item-content>
                                <router-link to="/forms-advanced">Advanced Form</router-link>
                            </v-list-item-content>
                        </v-list-item>
                    </v-list-group>
                </v-list-item-group>
            </v-list>
        </v-navigation-drawer>

        <!-- App Bar (Top Navbar) -->
        <v-app-bar app>
            <v-toolbar-title>My Dashboard</v-toolbar-title>
            <v-spacer></v-spacer>
            <!-- Sidebar Toggle Icon -->
            <v-icon @click="drawer = !drawer" class="mr-4">mdi-menu</v-icon>
            <v-btn icon>
                <v-icon>mdi-search</v-icon>
            </v-btn>
            <v-btn icon>
                <v-icon>mdi-email</v-icon>
                <v-badge color="red" content="9" overlap></v-badge>
            </v-btn>

            <v-menu bottom right>
                <template v-slot:activator="{ on, attrs }">
                    <v-btn icon v-bind="attrs" v-on="on">
                        <v-avatar>
                            <img src="" alt="User Avatar" />
                        </v-avatar>
                    </v-btn>
                </template>
                <v-list>
                    <v-list-item>
                        <v-list-item-icon>
                            <v-icon>mdi-account</v-icon>
                        </v-list-item-icon>
                        <v-list-item-content>
                            <v-list-item-title>Profile</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>

                    <v-list-item>
                        <v-list-item-icon>
                            <v-icon>mdi-cog</v-icon>
                        </v-list-item-icon>
                        <v-list-item-content>
                            <v-list-item-title>Settings</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>

                    <v-list-item>
                        <v-list-item-icon>
                            <v-icon>mdi-logout</v-icon>
                        </v-list-item-icon>
                        <v-list-item-content>
                            <v-list-item-title>Logout</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </v-list>
            </v-menu>
        </v-app-bar>

        <!-- Main Content -->
        <v-main>
            <v-container>
                <!-- Breadcrumbs -->
                <v-breadcrumbs :items="breadcrumbs"></v-breadcrumbs>

                <!-- Search Input -->
                <v-text-field v-model="filterInput" label="Search Gazes" prepend-icon="mdi-magnify"></v-text-field>

                <!-- Table with Gaz Data -->
                <v-data-table :headers="headers" :items="filteredGazes" item-key="id" class="elevation-1">
                    <template>
                        <v-btn icon @click="deletegaz(item.id)">
                            <v-icon color="red">mdi-delete</v-icon>
                        </v-btn>
                        <router-link :to="'/editgaz/' + item.uuid" class="v-btn">
                            <v-icon>mdi-pencil</v-icon>
                        </router-link>
                        <router-link :to="'/pluc/' + item.uuid" class="v-btn">
                            <v-icon>mdi-cart-plus</v-icon>
                        </router-link>
                    </template>
                </v-data-table>
            </v-container>
        </v-main>
    </v-app>
</template>

<script>
export default {
    data() {
        return {
            drawer: false,
            filterInput: "",
            gazes: [
                // Example gazes data
                {
                    uuid: "1",
                    quality: "High",
                    description: "Sample Description",
                    quantity: 100,
                    cost: 50,
                    branchuser: {
                        branch: { branchname: "Branch A" },
                        firstname: "User A",
                    },
                },
                // Add more gazes here...
            ],
            breadcrumbs: [{ text: "Dashboard", disabled: false }],
            headers: [
                { text: "Quality", value: "quality" },
                { text: "Description", value: "description" },
                { text: "Quantity", value: "quantity" },
                { text: "Cost", value: "cost" },
                { text: "Branch", value: "branchuser.branch.branchname" },
                { text: "Branch Users", value: "branchuser.firstname" },
                { text: "Actions", value: "actions", sortable: false },
            ],
        };
    },
    computed: {
        filteredGazes() {
            return this.gazes.filter((gaz) => {
                const filter = this.filterInput.toLowerCase();
                return (
                    gaz.quality.toLowerCase().includes(filter) ||
                    gaz.description.toLowerCase().includes(filter) ||
                    gaz.branchuser.branch.branchname.toLowerCase().includes(filter) ||
                    gaz.branchuser.firstname.toLowerCase().includes(filter)
                );
            });
        },
    },
    methods: {
        deletegaz(id) {
            // Your delete function
            console.log("Delete Gaz with ID:", id);
        },
    },
};
</script>

<style scoped>
.v-btn {
    margin-right: 8px;
}
</style>
