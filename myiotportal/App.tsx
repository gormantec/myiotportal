import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Amplify } from "aws-amplify";
import { Authenticator, useAuthenticator } from "@aws-amplify/ui-react-native";
import { Button } from 'react-native';
import outputs from '../myiotportal/amplify'


Amplify.configure(outputs);

function SignOutButton() {
  const { user, signOut } = useAuthenticator((context) => [context.user]);
  console.log("User:", user);
  return <Button title="Sign Out" onPress={signOut} />;
}


export default function App() {
  return (
    <Authenticator.Provider>
      <Authenticator>
        <SignOutButton />
      </Authenticator>
    </Authenticator.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
