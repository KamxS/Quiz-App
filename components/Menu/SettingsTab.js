import { Button, View, Text } from "react-native";
import { login, logout } from "../../lib/pocketbase";
import { useMutation } from "react-query";
import { useState } from "react";

export default function SettingsTab() {
    const [id, setId] = useState("");
    const loginMut = useMutation({
        mutationFn: (credentials) => {
            return login(credentials);
        },
        onError: (error) => console.log(error),
        onSuccess: (data) => setId(data.record.id),
    });

    return (
        <View>
            <Text>{id}</Text>
            <Button
                title="User 1"
                onPress={() =>
                    loginMut.mutate({
                        email: "test1@mail.com",
                        password: "0123456789",
                    })
                }
            />
            <Button
                title="User 2"
                onPress={() =>
                    loginMut.mutate({
                        email: "test2@mail.com",
                        password: "0123456789",
                    })
                }
            />
            <Button
                title="Logout"
                onPress={() => {
                    logout();
                    setId("");
                }}
            />
        </View>
    );
}
