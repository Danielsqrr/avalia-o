import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Link } from "expo-router";

export default function App() {
  return (
    <View style={styles.container}>
      <img src="data:image/png;base64,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" alt="" />
      <Text>Meu Timão</Text>
      <Text>Meu Timão é um app sobre notícias do Sport Club Corinthians Paulista, falndo sobre tranferências,lesões e etc.</Text>
      <Text></Text>
      <Link href="/telaA">infomações</Link>
      <StatusBar style="auto"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo: {
    fotSize: 40,
    fontWeight: 'bold'
  }
});