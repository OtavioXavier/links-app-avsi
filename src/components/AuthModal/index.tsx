import { useState } from 'react'
import {
  Modal,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { theme } from '@/src/theme'
import { styles } from './styles'
import type { AuthModalProps } from './authModal'

export default function AuthModal({
  visible,
  onClose,
  onSubmit,
  name,
}: AuthModalProps) {
  const [valor, setValor] = useState<string>('')
  const [isVisible, setIsVisible] = useState<boolean>(true)

  const enviar = () => {
    onSubmit(valor)
  }

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.modalBackground}>
        <View style={styles.modalContainer}>
          <View style={styles.header}>
            <Text style={styles.title}>{name}</Text>
            <TouchableOpacity style={styles.closeButton} onPress={onClose}>
              <Ionicons name="close" size={36} color={theme.colors.darkGreen} />
            </TouchableOpacity>
          </View>

          <SafeAreaView style={styles.formContainer}>
            <Text style={styles.label}>Senha de acesso</Text>
            <View style={styles.input}>
              <TextInput
                secureTextEntry={isVisible}
                onChangeText={setValor}
                placeholder="Digite a senha..."
                style={styles.textInput}
              />
              <TouchableOpacity onPress={() => setIsVisible(!isVisible)}>
                {isVisible ? (
                  <Ionicons
                    name="eye-off"
                    size={24}
                    color={theme.colors.darkGreen}
                  />
                ) : (
                  <Ionicons
                    name="eye"
                    size={24}
                    color={theme.colors.darkGreen}
                  />
                )}
              </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.button} onPress={enviar}>
              <Text style={styles.textButton}>ACESSAR</Text>
            </TouchableOpacity>
          </SafeAreaView>
        </View>
      </View>
    </Modal>
  )
}
