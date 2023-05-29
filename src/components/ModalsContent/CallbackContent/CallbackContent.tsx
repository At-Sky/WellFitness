import React from 'react';
import styles from './CallBackContent.module.scss';
import {Controller, SubmitHandler, useForm} from "react-hook-form";
import { PatternFormat } from "react-number-format";
import close from '@assets/icons/close.svg';

interface ICallBackContent {
    isModalOpened: boolean;
    setIsModalOpened: (el: boolean) => void;
}

type Inputs = {
    phone: string,
    name: string,
}

function CallBackContent({isModalOpened, setIsModalOpened}: ICallBackContent) {
    const {
        register,
        formState: { errors },
        handleSubmit,
        reset,
        getValues,
        control,
    } = useForm<Inputs>({
        mode: "onBlur"
    })

    const onSubmit: SubmitHandler<Inputs> = (data) => {
        console.log(JSON.stringify(data))
    }


    return (
        <div className={isModalOpened ? styles.modal : styles.modal + ' ' + styles.modal_hidden}>
            <button className={styles.close_button} onClick={() => setIsModalOpened(!isModalOpened)}>
                <img src={close} alt={'close'}/>
            </button>
            <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                <h2 className={styles.form__title}>Заявка на обратный звонок</h2>
                <div className={styles.form__inputGroup}>
                    <label htmlFor="name"><p className={styles.input_name}>Имя</p> <span className={styles.highlighted}>*</span></label>
                    <input type="text" id="name" placeholder={'Имя'} className={styles.form__input}
                           {...register("name", {
                               required: true,
                               minLength: {
                                   value: 3,
                                   message: "Минимум 3 буквы",
                               },
                               pattern: {
                                   value: /^[а-яА-ЯёЁa-zA-Z]/,
                                   message: "Имя введено неправильно",
                               },
                           })}
                    />
                    <div className={styles.error}>{errors?.name && <p>{errors?.name?.message || 'Введите имя!'}</p> }</div>
                </div>
                <div className={styles.form__inputGroup}>
                    <label htmlFor="phone"><p className={styles.input_name}>Телефон</p> <span className={styles.highlighted}>*</span></label>
                    <Controller
                        name={'phone'}
                        control={control}
                        rules={{
                            required: 'Введите телефон',
                            pattern: {
                                value: /^\+7 \(\d{3}\)-\d{3}-\d{2}-\d{2}$/g,
                                message: "Неправильно введен номер",
                            },
                        }}
                        render={({
                             field: {onChange, onBlur, value, name, ref},
                             fieldState: {invalid, isTouched, isDirty, error},
                             formState,
                        }) => (
                            <>
                                <PatternFormat
                                    format="+7 (###)-###-##-##"
                                    allowEmptyFormatting
                                    mask="_"
                                    value={value}
                                    onChange={onChange}
                                    className={styles.form__input}
                                />
                                <div className={styles.error}>{error && <p>{error.message || 'Введите телефон!'}</p> }</div>
                            </>
                        )}
                    />
                </div>
                <div className={styles.form__submit_container}>
                    <p className={styles.form__rules}>Нажимая на кнопку, вы даете согласие на обработку персональных данных и соглашаетесь c <a href={''} className={styles.highlighted}>политикой конфиденциальности</a></p>
                    <button className={styles.form__button}>Заказать звонок</button>
                </div>
            </form>
        </div>
    );
}

export default CallBackContent;
