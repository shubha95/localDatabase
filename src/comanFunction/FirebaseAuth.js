import auth from '@react-native-firebase/auth';
const SingUpUser = (email, passweor, updateDate, errorCallBack) => {
    console.log("dasdsa", email, passweor)
    auth()
        .createUserWithEmailAndPassword(email, passweor,)
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

            console.error("errrororro", error);
            let errors = 'That email address is invalid!'
            return errorCallBack(errors)
        });
}


const SingInUser = (email, passweor, updateDate, errorCallBack) => {
    auth().signInWithEmailAndPassword(email, passweor).then((res) => {
        console.log('User account signed in!', res);
        updateDate(res)
    }).catch(error => {
             let errors = 'That email address is invalid!'
        console.log('errror', error)
        return errorCallBack(errors)
    })
}

export { SingInUser, SingUpUser }
