<template>
    <v-layout class="rounded rounded-md">
        <v-navigation-drawer color="grey-darken-2" permanent>
            <v-list dense>
                <!-- <v-list-item>
                    <v-list-item-title>
                        <h1>About Page</h1>
                    </v-list-item-title>
                </v-list-item> -->

                <v-divider></v-divider>

                <!-- Add Employee Link -->
                <v-list-item>
                    <router-link to="/addemployee" class="text-decoration-none">
                        <v-list-item-title>
                            <h1>Add Employee</h1>
                        </v-list-item-title>
                    </router-link>
                </v-list-item>

                <v-list-item>
                    <v-list-item-title>
                        <h1>Employee List</h1>
                    </v-list-item-title>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>

        <v-app-bar :order="order" color="grey-lighten-2" title="Application bar" flat>
            <template v-slot:append>
                <v-switch v-model="order" false-value="0" label="Toggle order" true-value="-1" hide-details
                    inset></v-switch>
            </template>
        </v-app-bar>

        <!-- Main Content -->
        <v-main class="d-flex align-center justify-center" style="min-height: 300px;">
            <v-container>
                <v-row justify="center">
                    <v-col cols="12" md="8">
                        <v-card>
                            <v-card-title class="text-center">
                                <h1>REGISTRATION</h1>
                            </v-card-title>
                            <v-card-text>
                                <v-form>
                                    <v-text-field label="Names" v-model="user.name" :rules="[rules.required]"
                                        required></v-text-field>

                                    <v-text-field label="Phone Number" v-model="user.phonenumber"
                                        :rules="[rules.required]" required></v-text-field>

                                    <v-text-field label="E-mail" v-model="user.email"
                                        :rules="[rules.required, rules.email]" required></v-text-field>

                                    <v-text-field label="National ID" v-model="user.nationalid"
                                        :rules="[rules.required]" required></v-text-field>

                                    <v-text-field label="Username" v-model="user.username" :rules="[rules.required]"
                                        required></v-text-field>

                                    <v-text-field label="Password" v-model="user.password" :rules="[rules.required]"
                                        required></v-text-field>

                                    <v-text-field label="Code" v-model="user.code" :rules="[rules.required]"
                                        required></v-text-field>

                                    <v-text-field label="Date of Birth" v-model="user.dateofbirth"
                                        :rules="[rules.required]" type="date" required></v-text-field>

                                    <v-row justify="center">
                                        <v-btn color="primary" type="submit" @click="addinguser()">Save</v-btn>
                                    </v-row>
                                </v-form>
                            </v-card-text>
                        </v-card>
                    </v-col>
                </v-row>
            </v-container>
        </v-main>

    </v-layout>
</template>
<script>

import axios from 'axios';

export default {
    data() {
        return {
            order: 0,
            user: {
                name: '',
                phonenumber: '',
                email: '',
                nationalid: '',
                username: '',
                password: '',
                code: '',
                dateofbirth: ''
            },
            rules: {
                required: (value) => !!value || 'Required.',
                email: (value) => /.+@.+\..+/.test(value) || 'E-mail must be valid.',
            },
            alert: '',
        };
    },
    methods: {
        addinguser(e) {


            if (
                !this.user.name ||
                !this.user.phonenumber ||
                !this.user.email ||
                !this.user.nationalid ||
                !this.user.username ||
                !this.user.password ||
                !this.user.code ||
                !this.user.dateofbirth

            ) {
                this.alert = 'Fill all fields';
            } else {
                const userd = {
                    ...this.user,
                    role: 'user',
                };
                axios.post('http://localhost:3002/employ/saveemployee', userd).then((response) => {
                    this.$swal({
                        type: 'success',
                        position: 'top-end',
                        showConfirmButton: false,
                        toast: true,
                        timer: 5000,
                        text: response.data.description,
                    });
                    //this.$router.push({ path: '/', query: { alert: response.data.description } });
                });
                e.preventDefault();
            }
            e.preventDefault();
        },
    },
};
</script>

<style scoped>
.text-decoration-none {
    text-decoration: none;
}
</style>