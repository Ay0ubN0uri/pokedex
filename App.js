import { NativeBaseProvider, extendTheme } from "native-base";
import CategoriesScreen from "./screens/CategoriesScreen";
import { useFonts } from "expo-font";
import * as SplashScreen from 'expo-splash-screen';
import { useCallback } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { AntDesign } from '@expo/vector-icons';
import FavoritesContextProvider from "./store/context/favorites-context";
import PokemonContextProvider from "./store/context/pokemon-context";
import PokemonDetailsScreen from "./screens/PokemonDetailsScreen";
import PokemonsScreen from "./screens/PokemonsScreen";
import AllPokemons from "./screens/AllPokemons";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import FavoritesScreen from "./screens/FavoritesScreen";
import { StatusBar } from "expo-status-bar";

const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator screenOptions={{
      headerStyle: {
        backgroundColor: '#24180f'
      },
      headerTintColor: 'white',
      sceneContainerStyle: {
        backgroundColor: '#3f2f25'
      },
      drawerContentStyle: {
        backgroundColor: '#24180f'
      },
      drawerInactiveTintColor: 'white',
      drawerActiveTintColor: '#e2b497'
    }}>
      <Drawer.Screen name="Categories" component={CategoriesScreen} options={{
        title: "All Categories",
        drawerIcon: ({ color, size }) => <AntDesign name="home" size={size} color={color} />
      }} />
      <Drawer.Screen name="All Pokemons" component={AllPokemons} options={{
        drawerIcon: ({ color, size }) => <MaterialCommunityIcons name="pokemon-go" size={size} color={color} />
      }} />
      <Drawer.Screen name="My Favorites" component={FavoritesScreen} options={{
        drawerIcon: ({ color, size }) => <AntDesign name="staro" size={size} color={color} />
      }} />
    </Drawer.Navigator>
  );
}

const Stack = createNativeStackNavigator();

const config = {
  // useSystemColorMode: false,
  initialColorMode: "dark",
  fontConfig: {
    Carlito: {
      100: {
        normal: "Carlito-Bold",
        italic: "Carlito-Italic",
      }
    },
  },

  // Make sure values below matches any of the keys in `fontConfig`
  fonts: {
    heading: "Carlito",
    body: "Carlito",
    mono: "Carlito",
  },
};
export const theme = extendTheme({
  components: {
    Text: {
      defaultProps: {
        fontSize: 'lg',
      },
    },
  },
  Pressable: {
    cursor: 'pointer',
  },
  config
});

export default function App() {
  let [fontsLoaded] = useFonts({
    'Carlito-Regular': require('./assets/fonts/Carlito-Regular.ttf'),
    'Carlito-Italic': require('./assets/fonts/Carlito-Italic.ttf'),
    'Carlito-Bold': require('./assets/fonts/Carlito-Bold.ttf'),
    'Carlito-BoldItalic': require('./assets/fonts/Carlito-BoldItalic.ttf')
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      <StatusBar
        style={'light'}
        backgroundColor={'#24180f'}
        translucent={true}
      />
      <FavoritesContextProvider>
        <PokemonContextProvider>
          <NavigationContainer>
            <NativeBaseProvider theme={theme}>
              <Stack.Navigator screenOptions={{
                headerStyle: {
                  backgroundColor: '#24180f'
                },
                headerTintColor: 'white',
                contentStyle: {
                  backgroundColor: '#3f2f25'
                }
              }} initialRouteName="Categories">
                <Stack.Screen name="Drawer" component={DrawerNavigator} options={{
                  headerShown: false
                }} />
                <Stack.Screen name="Pokemons" component={PokemonsScreen} />
                <Stack.Screen name="Pokemon Details" component={PokemonDetailsScreen} />
              </Stack.Navigator>
            </NativeBaseProvider>
          </NavigationContainer>
        </PokemonContextProvider>
      </FavoritesContextProvider>
    </>
  )
}
