import BackBlocks from '../../components/backBlocks'
import "./register.scss"
import 'jquery-mask-plugin';
import 'intl-tel-input/build/css/intlTelInput.css'
import 'react-phone-input-2/lib/style.css'
import ReactPhoneInput from "react-phone-input-2";
import RegisterInput from '../../components/register/regiserInput';
import { Controller, useForm } from 'react-hook-form';
import { DateInput } from '../../components/inputs/date-input/date-input';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../components/AuthContext/AuthhContext';


export var Registerr = []
export var Number = []

export const Register = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        control,
        watch,
    } = useForm();

    const { isAuth, setIsAuth } = useAuth()

    const navigate = useNavigate();

    const onSubmit = (data) => {
        if (watch("email")) {
            setIsAuth(prev => !prev)
            console.log(data)
            console.log(isAuth)
            navigate("/");
            Registerr.push(data)
            console.log(Registerr)
            
        } else {
            console.log('NOOOOOOOOOOOOOOOOOOOOOOO')
        }
    };


    return (
        <div className="container">
            <div className="container__register">
                <BackBlocks />
                <div className="container__register__register">
                    <div className='App__loginBox'>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className='App__loginBox__back'>
                                <div className='App__loginBox__back__h1'> Регистрация </div>

                                <div className='App__loginBox__back__inputBox'>
                                    <RegisterInput
                                        name={"last_mane"}
                                        label={"Фамилия"}
                                        register={register}
                                        validate={{ validate: true }}
                                        classNameInput='name-input'
                                        classNameLabel='name-label'
                                    />
                                    <RegisterInput
                                        name={"first_mane"}
                                        label={"Имя"}
                                        register={register}
                                        validate={{ validate: true }}
                                        classNameInput='name-input'
                                        classNameLabel='name-label'
                                    />
                                    <RegisterInput
                                        name={"middle_mane"}
                                        label={"Отчество"}
                                        register={register}
                                        classNameInput='name-input'
                                        classNameLabel='name-label'
                                    />
                                    <RegisterInput
                                        input_type={"text"}
                                        name={"email"}
                                        label={"E-mail"}
                                        register={register}
                                        classNameInput='name-input'
                                        classNameLabel='name-label'
                                    />

                                    <DateInput
                                        control={control}
                                        name={"birthday"}
                                        placeholder={"Выберите значение"}
                                        label={"Дата рождения"}
                                        errors={errors}
                                        validate={{ required: true }}
                                        classNameInput='name-input'
                                        classNameLabel='name-label'
                                    />



                                    <RegisterInput
                                        control={control}
                                        input_type={"password"}
                                        name={"password"}
                                        register={register}
                                        label={"Пароль"}
                                        classNameInput='name-input'
                                        classNameLabel='name-label'
                                    />

                                    {/* <div className='wrapper'>
                                    <input type='password' className='name-input' ref={passwordTwo} required="required" />
                                    <label className="name-label">Подтвердите пароль</label>
                                </div> */}
                                </div>

                                <div className='wrapper'>
                                    <Controller
                                        control={control}
                                        name="phone"
                                        rules={{ required: true }}
                                        register={register}
                                        render={({ field: { ref, ...field } }) => (
                                            <ReactPhoneInput
                                                {...field}
                                                inputExtraProps={{
                                                    ref,
                                                    required: true,
                                                    autoFocus: true
                                                }}
                                                className='name-input'
                                                id="phone" type="tel"
                                                name={"phone"}
                                                country={'ru'}
                                                onlyCountries={['ru', 'by', 'us', 'kz']}
                                                preferredCountries={['ru']}
                                                placeholder='Номер'
                                                buttonClass=''
                                                inputClass='name-input'
                                                register={register}
                                            />
                                        )}
                                    />

                                </div>
                                <button className='buttonn'> Продолжить </button>

                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    )

}