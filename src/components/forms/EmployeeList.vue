<template>
    <v-container>
        <v-text-field v-model="filterInput" label="Enter keyword to search" class="mx-4"></v-text-field>
        <v-data-table :headers="headers" :items="filteredUsers" item-key="uuid" class="elevation-1"
            :search="filterInput">
            <template v-slot:top>
                <v-toolbar flat>
                    <v-toolbar-title>Employees</v-toolbar-title>
                    <v-divider class="mx-4" inset vertical></v-divider>
                </v-toolbar>
            </template>

            <!-- Actions Column with Icons -->
            <template v-slot:[`item.actions`]="{ item }">
                <v-icon color="red" @click="deleteseller(item.id)" title="Delete">
                    mdi-delete
                </v-icon>
                <v-icon color="blue" :to="'/edit/' + item.uuid" title="Update">
                    mdi-pencil
                </v-icon>
                <v-icon color="green" :to="'/addgaz/' + item.uuid" title="Add Gaz">
                    mdi-plus-circle
                </v-icon>
            </template>
        </v-data-table>
    </v-container>
</template>

<script>
import axios from "axios";
export default {
    data() {
        return {
            branchusers: [],
            filterInput: "",
            headers: [
                { text: "ID", value: "id" },
                { text: "Name", value: "name" },
                { text: "Phone Number", value: "phonenumber" },
                { text: "Email", value: "email" },
                { text: "National ID", value: "nationalid" },
                { text: "Username", value: "username" },
                { text: "Password", value: "password" },
                { text: "Code", value: "code" },
                { text: "Date of Birth", value: "dateofbirth" },
                
                { text: "Status", value: "status" },
                
                { text: "Position", value: "position" },
                { text: "Actions", value: "actions", sortable: false }
            ]
        };
    },
    computed: {
        filteredUsers() {
            const searchTerm = this.filterInput.toLowerCase();
            return this.branchusers.filter(user =>
                user.name.toLowerCase().includes(searchTerm)
            );
        }
    },
    methods: {
        findall() {
            axios
                .get("http://localhost:3003/employ/all")
                .then(response => {
                    this.branchusers = response.data.OBJECT;
                })
                .catch(err => {
                    console.error(err);
                });
        },
        deleteseller(id) {
            axios
                .delete("http://localhost:3002/employ/delete/" + id)
                .then(response => {
                    this.$swal({
                        type: 'success',
                        position: 'top-end',
                        showConfirmButton: false,
                        toast: true,
                        timer: 5000,
                        text: response.data.description,
                    });
                    this.$router.push({
                        path: "/employeelist",
                        query: { alert: response.data.description }
                    });
                });
        }
    },
    created() {
        this.findall();
    }
};
</script>

<style scoped>
.v-data-table {
    margin-top: 20px;
}
</style>
