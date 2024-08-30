import { View, Text, StyleSheet } from 'react-native';
import AuthButton from '@/components/AuthButton';
import Titulo from '@/components/Titulo';

export default function SaoPauloScreen() {
  return (
    <View style={styles.container}>
    <Titulo title='São Paulo'/>
    <AuthButton title={"UME"} rota={"/(sao-paulo)/ume"} senha='Sp@ume2024'/>
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
