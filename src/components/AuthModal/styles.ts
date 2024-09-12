import { theme } from '@/src/theme'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContainer: {
    width: 500,
    height: 350,
    padding: 10,
    backgroundColor: theme.colors.white,
    borderRadius: 16,
    alignItems: 'center',
  },
  input: {
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderRadius: 12,
    borderColor: theme.colors.lightGreen,
    width: '100%',
    marginBottom: 8,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 55,
  },
  closeButton: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-end',
  },
  label: {
    fontSize: 20,
    fontFamily: theme.fontFamily.bold,
    color: theme.colors.lightGreen,
  },
  formContainer: {
    width: '80%',
    height: '80%',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: theme.colors.orange,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: 45,
    borderRadius: 12,
    marginBottom: 16,
  },
  textButton: {
    color: theme.colors.white,
    fontFamily: theme.fontFamily.bold,
    fontSize: 18,
  },
  title: {
    fontSize: 28,
    fontFamily: theme.fontFamily.bold,
    color: theme.colors.darkGreen,
  },
  header: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 8,
    marginBottom: 20,
  },
  textInput: {
    margin: 0,
    padding: 0,
    width: '80%',
    height: 40,
    color: theme.colors.darkGreen,
	fontFamily: theme.fontFamily.regular
  },
})
