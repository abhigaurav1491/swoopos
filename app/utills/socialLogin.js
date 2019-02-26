// import Expo from 'expo';

const GOOGLE_API_ID = '962969932053-h103a5lumc9b79nog2s2gkk03vahnr0t.apps.googleusercontent.com';
const SUCCESS = 'success';

export const signInWithGoogleAsync = async () => {
    try {
      const result = await Expo.Google.logInAsync({
        androidClientId: GOOGLE_API_ID,
        scopes: ["profile", "email"],
      });
      
      if (result.type === 'success') {
        return result;
      } else {
        console.log("cancelled");
      }
    } catch(e) {
      console.log("error",e);
    }
  }

  export const authenticate = (user) => {
  	if(user !== null){
  		return true;
  	}
  }