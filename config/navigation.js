import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home from "../src/components/Home";
import Login from "../src/components/Login";
import Signup from "../src/components/Signup";
import Categories from "../src/components/Categories";
import Cart from "../src/components/Cart";
import Account from "../src/components/Account";

import { AntDesign } from '@expo/vector-icons';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function TabNavigator() {
    return (
        <Tab.Navigator>
            <Tab.Screen options={{headerShown: false}} name="home" component={Categories} />
            <Tab.Screen name="cart" component={Cart} />
            <Tab.Screen name="account" component={Account} />
        </Tab.Navigator>

    )
}

function stackNavigator() {
    return (
        <NavigationContainer >
            <Stack.Navigator>
                <Stack.Screen options={{ headerShown: false }} name="home" component={Home} />
                <Stack.Screen name="signup" component={Signup} />
                <Stack.Screen name="login" component={Login} />
                <Stack.Screen name="categories" component={TabNavigator} />
                {/* <Stack.Screen name="cart" component={TabNavigator} /> */}
            </Stack.Navigator >
        </NavigationContainer >
    )
}

export default stackNavigator