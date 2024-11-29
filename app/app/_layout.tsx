import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Index from "./index";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const Stack = createStackNavigator();

const client = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={client}>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Index}
          options={{ title: "Notes" }}
        />
      </Stack.Navigator>
    </QueryClientProvider>
  );
}
