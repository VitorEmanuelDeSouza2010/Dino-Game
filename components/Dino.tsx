import { useGame } from "@/hooks/gameHook";
import { useEffect } from "react";
import { Image, StyleSheet } from "react-native";
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
                source={require("@/assets/images/DinoJumpV2.png")}
                resizeMode="contain"
                style={styles.image}
            />
        ) : (
            <Image
                source={require("@/assets/images/DinoRunV2.webp")}
                resizeMode="contain"
                style={styles.image}
            />
        )}
    </Animated.View>
    );
}

const styles = StyleSheet.create({
    image: {
        width: "100%",
        height: "100%",
    },

    dino: {
        width: 354,
        height: 162,
        position: "absolute",
        zIndex: 10,
        bottom: "15%",
        left: 0,
    },
})