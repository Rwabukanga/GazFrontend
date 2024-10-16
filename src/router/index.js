import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../components/HomePage.vue';
import AboutPage from '../components/AboutPage.vue';
import LoginPage from '../components/forms/LoginPage.vue';
import SignupPage from '../components/forms/SignupPage.vue';
import SidePage from '../components/forms/SidePage.vue';
import SideBar from '../components/forms/SideBar.vue';
import AddEmployee from '@/components/forms/AddEmployee.vue';
import EmployeeList from '../components/forms/EmployeeList.vue';
import MenuBar from '../components/forms/MenuBar.vue';
import NavBar from '../components/forms/NavBar.vue';


const routes = [

    {
        path: '/home',
        name: 'HomePage',
        component: HomePage
    },
    {
        path: '/about',
        name: 'AboutPage',
        component: AboutPage
    },
    {
        path: '/login',
        name: 'LoginPage',
        component: LoginPage
    },
    { path: '/signup', name: 'SignupPage', component: SignupPage },
    { path: '/side', name: 'SidePage', component: SidePage },
    { path: '/menu', name: 'SideBar', component: SideBar },
    { path: '/addemployee', name: 'AddEmployee', component: AddEmployee },
    { path: '/employeelist', name: 'EmployeeList', component: EmployeeList },
    { path: '/menulist', name: 'MenuBar', component: MenuBar },
    { path: '/navmenu', name: 'NavBar', component: NavBar }


];

const router = createRouter({
    history: createWebHistory(),  // Ensure you're using createWebHistory if it's in history mode
    routes,
});

export default router;
