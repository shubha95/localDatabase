import auth from '@react-native-firebase/auth';

// Sing Up User
const SingUpUser = (email, password, updateDate, errorCallBack) => {
    console.log("dasdsa", email, password)
    auth()
        .createUserWithEmailAndPassword(email, password,)
        .then((res) => {
            console.log('User account created & signed in!', res);
            updateDate(res)
        })
        .catch(error => {
            if (error.code === 'auth/email-already-in-use') {
                console.log('That email address is already in use!');
                
            }

            if (error.code === 'auth/invalid-email') {
                
                console.log('That email address is invalid!');
                return errorCallBack(errors)
            }

            console.error("error", error);
            let errors = 'That email address is invalid!'
            return errorCallBack(errors)
        });
}

// Sing In User
const SingInUser = (email, password, updateDate, errorCallBack) => {
    auth().signInWithEmailAndPassword(email, password).then((res) => {
        console.log('User account signed in!', res);
        updateDate(res)
    }).catch(error => {
             let errors = 'That email address is invalid!'
        console.log('error', error)
        return errorCallBack(errors)
    })
}

export { SingInUser, SingUpUser }
