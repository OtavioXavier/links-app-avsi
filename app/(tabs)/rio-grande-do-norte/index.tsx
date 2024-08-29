import { View, Text, StyleSheet } from 'react-native';
import AuthButton from '@/components/AuthButton';
import Titulo from '@/components/Titulo';

export default function RioGrandeDoNorteScreen() {
  return (
    <View style={styles.container}>
    <Titulo title='Rio Grande do Norte'/>
    <AuthButton title={"EcoPosto"} rota={"/rio-grande-do-norte/ecoposto"} senha='Rn@2024'/>
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