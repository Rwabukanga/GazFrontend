<template>
    <v-container>
        <v-row justify="center">
            <v-col cols="12" md="8">
                <v-card>
                    <v-card-title class="text-center">
                        <h1>REGISTRATION</h1>
                    </v-card-title>
                    <v-card-text>
                        <v-form @submit.prevent="addinguser">
                            <v-text-field label="First Name" v-model="user.firstname" :rules="[rules.required]"
                                required></v-text-field>

                            <v-text-field label="Last Name" v-model="user.lastname" :rules="[rules.required]"
                                required></v-text-field>

                            <v-text-field label="Email" v-model="user.email" :rules="[rules.required, rules.email]"
                                required></v-text-field>

                            <v-select label="Category" :items="categories" v-model="user.category"
                                :rules="[rules.required]" required></v-select>

                            <v-select label="Gender" :items="['Male', 'Female']" v-model="user.gender"
                                :rules="[rules.required]" required></v-select>

                            <v-text-field label="Phone Number" v-model="user.phone" :rules="[rules.required]"
                                required></v-text-field>

                            <v-text-field label="National ID" v-model="user.idnumber" :rules="[rules.required]"
                                required></v-text-field>

                            <v-text-field label="Date of Birth" v-model="user.dob" :rules="[rules.required]" type="date"
                                required></v-text-field>

                            <v-text-field label="Username" v-model="user.username" :rules="[rules.required]"
                                required></v-text-field>

                            <v-text-field label="Password" v-model="user.password" :rules="[rules.required]"
                                type="password" required></v-text-field>

                            <v-row justify="center">
                                <v-btn color="primary" type="submit">Save</v-btn>
                            </v-row>
                        </v-form>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            user: {
                firstname: '',
                lastname: '',
                email: '',
                category: '',
                gender: '',
                phone: '',
                idnumber: '',
                dob: '',
                username: '',
                password: '',
            },
            categories: ['Admin', 'Customer', 'Seller'],
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
                !this.user.firstname ||
                !this.user.lastname ||
                !this.user.email ||
                !this.user.category ||
                !this.user.gender ||
                !this.user.phone ||
                !this.user.idnumber ||
                !this.user.username ||
                !this.user.password ||
                !this.user.dob
            ) {
                this.alert = 'Fill all fields';
            } else {
                const userd = {
                    ...this.user,
                    role: 'user',
                };
                axios.post('http://localhost:2002/registrar/save', userd).then((response) => {
                    this.$swal({
                        type: 'success',
                        position: 'top-end',
                        showConfirmButton: false,
                        toast: true,
                        timer: 5000,
                        text: response.data.description,
                    });
                    this.$router.push({ path: '/', query: { alert: response.data.description } });
                });
                e.preventDefault();
            }
            e.preventDefault();
        },
    },
};
</script>

<style scoped>
.v-card {
    margin-top: 20px;
}

.v-card-title {
    background-color: white;
    color: black;
}

h1 {
    font-family: 'Times New Roman', Times, serif;
    font-size: larger;
    font-weight: bold;
}



button {
    margin-top: 20px;
    width: 8em;
    margin-bottom: 20px;
}
</style>
