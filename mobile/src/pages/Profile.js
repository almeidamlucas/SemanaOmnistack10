import React from 'react';
import { WebView } from 'react-native-webview'

function Profile({ route }) {
    const { github_username } = route.params
    const githubUsername = github_username

    return <WebView style={{flex: 1}} source={{uri: `https://github.com/${githubUsername}`}} />
}

export default Profile