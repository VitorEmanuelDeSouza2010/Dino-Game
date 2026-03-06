import Score from "@/components/Score";
import { useGame } from "@/hooks/gameHook";
import { Link } from "expo-router";
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";

export default function End() {

    const {score} = useGame();

    return (
        
    <View style={styles.container}>
        <ImageBackground
        style={styles.container} 
        source={require("@/assets/images/FundoCav.jpg")} 
        />
        
        <View style={styles.obstacle}>
            <Image source={require("@/assets/images/Rock.webp")} style={styles.image} resizeMode="contain" />
        </View>

        <View style={styles.dino}>
            <Image source={require("@/assets/images/dinoRun.png")} style={styles.image} resizeMode="contain" />
        </View>

        <View style={styles.textContainer}>
            <Text style={styles.text}>Fim de Jogo!</Text>

            <Text style={styles.text}>{score}</Text>

            <Link href="/" asChild>
                <Text>Voltar</Text>
            </Link>
        </View>

    </View>
    );
}

const styles = StyleSheet.create ({
    container: {
        width: "100%",
        height: "100%",
        position: "relative",
    },

    image: {
        width: "250%",
        height: "100%",
        right: 74,
    },

    dino: {
        width: 355,
        height: 170,
        position: "absolute",
        zIndex: 10,
        bottom: "15%",
        left: 50,
    },

    obstacle: {
        width: 225,
        height: 225,
        position: "absolute",
        bottom: "7%",
        left: 350,
    },

    textContainer: {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: [{translateX: "-50%"}, {translateY: "-50%"}],
        gap: 10,
        textAlign: "center",
    },

    text: {
        width: "auto",
    },
});