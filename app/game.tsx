import MovingBackground from "@/components/MovingBackground";
import Dino from "@/components/Dino";
import { StyleSheet, Image, View, TouchableOpacity, Pressable } from "react-native";
import { useGame } from "@/hooks/gameHook";
import Score from "@/components/Score";
import Obstacle from "@/components/Obstacle";
import { use, useEffect, useState } from "react";

export default function GameScreen() {
    const { jump } = useGame();
    const [obstacles, setObstacles] = useState([] as any);

    function spawnObstacle() {
        setObstacles((oldValue: any) => [...oldValue, Date.now().toString()]);
    }

    function removeObstacle(id: any) {
        setObstacles((oldValue: any) => oldValue.filter((obstacle:any) => obstacle !== id),);
    }

    useEffect(() => {
        const interval = setInterval(() =>spawnObstacle(), 10000);

        return() => clearInterval(interval);
    }, []);

    return (
        <Pressable onPress={jump} style={styles.button}>
            <View style={styles.container} >
                <MovingBackground />
                <Dino />
                <Score />
                {obstacles.map((obstacle:any) => (
                    <Obstacle key={obstacle} onEnd={() => removeObstacle(obstacle)} />
                ))}
            </View>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    button: {
        width: "100%",
        height: "100%",
    },

    container: {
        width: "100%",
        height: "100%",
        backgroundColor: "rgb(247, 247, 247)",
        position: "relative",
    },

    image: {
        width: "100%",
        height: "100%",
    },
})