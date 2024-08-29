import AuthButton from '@/components/AuthButton';
import Titulo from '@/components/Titulo';
import {  View, Text, StyleSheet } from 'react-native';

export default function PernambucoScreen() {
  return (
    <View style={styles.container}>
     <Titulo title='Pernambuco'/>
     <AuthButton title={"UME"} rota={"/pernambuco/ume"} senha='Ume@pe2024'/>
     <AuthButton title={"Espaço Usina Solar"} rota={"/pernambuco/espaco-usina-solar"} senha='Fnoronha@'/>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 16,
  }
});