import Title from '@/src/components/Title'
import { Link } from 'expo-router'
import { View, Image, StyleSheet, Text } from 'react-native'
import { theme } from '../theme'
import CustomButton from '../components/CustomButton'
import { LinearGradient } from 'expo-linear-gradient'

export default function HomeScreen() {
  return (
    <View style={styles.largestContainer}>
      <View style={styles.container}>
        <Title text="Home" />

        <Link push href={'/bahia'} style={styles.button}>
          <Text style={styles.buttonText}>BA</Text>
        </Link>

        <Link push href={'/brasilia'} style={styles.button}>
          <Text style={styles.buttonText}>BRB</Text>
        </Link>

        <Link push href={'/pernambuco'} style={styles.button}>
          <Text style={styles.buttonText}>PE</Text>
        </Link>

        <Link push href={'/rio-grande-do-norte'} style={styles.button}>
          <Text style={styles.buttonText}>RN</Text>
        </Link>

        <Link push href={'/sao-paulo'} style={styles.button}>
          <Text style={styles.buttonText}>SP</Text>
        </Link>
        {/* <Link push href={'/sao-paulo'}>
          <LinearGradient
            colors={['#26BF64', '#00A443']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.button}
          >
            <Text style={styles.buttonText}>SP</Text>
          </LinearGradient>
        </Link> */}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 16,
    marginBottom: 180,
  },
  largestContainer: {
    flex: 1,
    backgroundColor: theme.colors.white,
    justifyContent: 'center',
    alignItems: 'center',
  },

  button: {
    backgroundColor: theme.colors.lightGreen,
    padding: 15,
    alignItems: 'center',
    color: theme.colors.white,
    fontFamily: theme.fontFamily.semiBold,
    fontSize: 20,
    width: 300,
    paddingVertical: 20,
    borderRadius: 100,
    textAlign: 'center',
    alignContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontFamily: theme.fontFamily.bold,
  },
})
