import {useState} from "react";

function FirstComponent(){

    const [formData,setformData] = useState({
        username : '',
        email : '',
        password: '',
        confirmPassword : ''
    })
    const handleChange = (name) =>{
        return (e) => {
            //console.log(name + "before " + formData.name)
            setformData({...formData, [name]: e.target.value});
            //console.log(name + "after " + formData.name)
            // setformData({
            //     username: formData.username,
            //     email: formData.email,
            //     password: formData.password,
            //     confirmPassword: formData.confirmPassword,
            //
            // })
        }
    }
    const updateName = (event) => {
        //console.log("before: " + formData.username)
        setformData
        ({
            ...formData,
            username: event.target.value
        })
        //console.log("after : " + formData.username)
    }

    function RegistrationForm() {
        // TODO: 구현하세요

    }
    const handleSubmit = async (e) => {
        e.preventDefault(1);
        console.log('Submitting...');
        console.log(formData)
        alert(
            `확인\n` +
            `이름 : ${formData.username}\n` +
            `이메일 :  ${formData.email}\n` +
            `비밀번호 : ${formData.password}\n`
        );
    }
    const handleReset = () => {
        setformData({
            username: '',
            email:'',
            password:'',
            confirmPassword: '',
        })
    }
    return (
        <>
            <form onSubmit={handleSubmit} onReset={handleReset}>
                <div>
                    <label>username: </label>
                    <input value = {formData.username} onChange={updateName} id='username' type='test'/>
                </div>
                <div>
                    <label>email: </label>
                    <input value ={formData.email} onChange={handleChange('email')} id='email' type='email'/>
                    <br/>
                </div>
                <div>
                    <label>Password: </label>
                    <input value ={formData.password} onChange={handleChange('password')} id='password' type='password'/>
                    <br/>
                </div>
                <div>
                    <label>Confirm Password: </label>
                    <input value ={formData.confirmPassword} onChange={handleChange('confirmPassword')} id='confirmPassword' type='password'/>
                </div>
                <button type='submit' className="btn btn-primary">Submit</button>
                <button type='reset' className="btn btn-primary">Reset</button>
            </form>

        </>
    );
}
export default FirstComponent;

