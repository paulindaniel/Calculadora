import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',  // Tornando o fundo transparente para usar o gradiente
    padding: 20,
    backgroundImage: 'linear-gradient(45deg, #FF00FF, #00FFFF)',  // Gradiente Y2K moderno
    backgroundSize: 'cover',  // Ajusta o tamanho do fundo para cobrir a tela toda
  },
  title: {
    fontSize: 48,
    fontWeight: '900',
    color: '#00FF00',  // Verde neon clássico do Y2K
    textShadowColor: '#FF00FF',
    textShadowOffset: { width: 5, height: 5 },
    textShadowRadius: 10,
    marginBottom: 40,
    letterSpacing: 2,
    fontFamily: 'Monospace',
  },
  input: {
    height: 60,
    borderColor: '#FF00FF',
    borderWidth: 3,
    marginBottom: 20,
    width: '90%',
    paddingLeft: 20,
    backgroundColor: '#00FFFF',
    color: '#1A1A1A',
    fontSize: 20,
    borderRadius: 15,
    fontFamily: 'Arial',
  },
  button: {
    backgroundColor: '#FF00FF',
    borderRadius: 25,
    paddingVertical: 18,
    paddingHorizontal: 35,
    marginTop: 30,
    elevation: 8,
    shadowColor: '#FF00FF',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.3,
    shadowRadius: 12,
    width: '90%',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    padding: 30,
  },
  modalContent: {
    backgroundColor: '#FF00FF',
    padding: 30,
    borderRadius: 25,
    alignItems: 'center',
    width: '85%',
    height: '50%',
    justifyContent: 'center',
    elevation: 20,
  },
  modalText: {
    color: '#FFFFFF',
    fontSize: 32,
    fontWeight: '900',
    textAlign: 'center',
    marginBottom: 20,
    letterSpacing: 1.5,
  },
  formContainer: {
    alignItems: 'center',
    marginTop: 30,
  },
  gradientButton: {
    backgroundColor: 'linear-gradient(to right, #FF00FF, #00FFFF)',  // Gradiente vibrante de magenta para ciano
    padding: 25,
    borderRadius: 30,
    marginTop: 35,
    width: '90%',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#FFFFFF',
    elevation: 10,
  },
  icon: {
    marginBottom: 30,
  },
  backButton: {
    backgroundColor: '#FF5733',
    borderRadius: 20,
    paddingVertical: 15,
    paddingHorizontal: 40,
    marginTop: 25,
    elevation: 8,
    shadowColor: '#FF5733',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
  },
  inputContainer: {
    width: '90%',
    alignItems: 'center',
  },
});
