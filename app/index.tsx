import { Link } from 'expo-router';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ImageBackground } from 'react-native';

export default function HomeScreen() {
  return (
    <ImageBackground source={require("@/assets/images/chao.avif")} resizeMode="stretch" style={styles.background}>
      <View style={styles.container}>
        <Link href="/game" asChild replace>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.title}>Jogar</Text>
          </TouchableOpacity>
        </Link>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#500015",
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 999,
    marginBottom: 100,
  },

  background: {
    width: "100%",
    height: "100%",
  },

  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },

  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: "#950015",
  },

  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
