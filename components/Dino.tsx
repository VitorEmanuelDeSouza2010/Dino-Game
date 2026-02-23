import { useGame } from "@/hooks/gameHook";
import { useEffect } from "react";
import { Image, StyleSheet, View } from "react-native";
import Animated, { Easing, useAnimatedStyle, useSharedValue, withSequence, withTiming } from "react-native-reanimated";

export default function Dino() {
    const { jumping, stopJump } = useGame();
    const dinoHeight = useSharedValue(0);

    const animatedStyle = useAnimatedStyle(() => ({
        transform: [{
            translateY:
            dinoHeight.value
        }]
    }))

    function handleJump() {
        console.log("aqui")
        dinoHeight.value = withSequence(
            withTiming(-100, {
            duration: 400,
            easing: Easing.linear,
        }),
        withTiming(0, {
            duration: 400,
            easing: Easing.linear,
        },
        () => stopJump(),
        ),
      );
    }

    useEffect(() => {
        if (jumping) {
            handleJump();
        }
    }, [jumping]);

    return ( 
        <Animated.View style={[styles.dino, animatedStyle]}>

        {jumping ? (
            <Image
                source={require("@/assets/images/dinoRun.png")}
                resizeMode="contain"
                style={styles.image}
            />
        ) : (
            <Image
                source={require("@/assets/images/dinoRun.webp")}
                resizeMode="contain"
                style={styles.image}
            />
        )}
    </Animated.View>
    );
}

const styles = StyleSheet.create({
    image: {
        width: "250%",
        height: "100%",
        right: "74%",
    },

    dino: {
        width: 355,
        height: 170,
        position: "absolute",
        backgroundColor: "#ffffff",
        zIndex: 10,
        bottom: "15%",
        left: "10%",
    },
})