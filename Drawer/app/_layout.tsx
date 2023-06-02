import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Link } from "expo-router";
import { Tabs } from "expo-router";
import { Drawer } from "expo-router/drawer";

export default function App() {
  return (
    <Drawer>
      <Drawer.Screen
        name="index" // This is the name of the page and must match the url from root
        options={{
          drawerLabel: "Principal",
          title: "Bem-vindo a tela Principal",
        }}
      />
      <Drawer.Screen
        name="telaA" // This is the name of the page and must match the url from root
        options={{
          drawerLabel: "Informções",
          title: "Bem-vindo as informações da semana",
        }}
      />
      <Drawer.Screen
        name="telaB" // This is the name of the page and must match the url from root
        options={{
          drawerLabel: "Cadastro",
          title: "Faça seu cadastro para fica por dentro",
        }}
      />
      <Drawer.Screen
        name="telaC" // This is the name of the page and must match the url from root
        options={{
          drawerLabel: "Imagens da Neo Quimica arena",
          title: "Fotos da arena",
        }}
      />
    </Drawer>
);
}