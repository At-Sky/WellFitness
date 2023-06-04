import React from 'react';
import styles from "./TownPIckeContent.module.scss";
import Select, {StylesConfig, components} from 'react-select'
import search from "@assets/icons/search.svg"
import close from "@assets/icons/close.svg";

interface ITownPickerContentProps {
    isModalOpened: boolean;
    setTown: (el: string) => void;
    setIsModalOpened: (el: boolean) => void;
}

function TownPickerContent({isModalOpened, setIsModalOpened, setTown}: ITownPickerContentProps) {
    const options = [
        { value: 'Москва', label: 'Москва' },
        { value: 'Саратов', label: 'Саратов' },
        { value: 'Крым', label: 'Крым' }
    ]

    const customStyle: StylesConfig = {
        option: (provided, state) => ({
            ...provided,
            fontWeight: state.isSelected ? "bold" : "normal",
            color: "#858FA4",
            backgroundColor: "#F7F7F7",
            fontSize: 14
        }),
    }

    const DropdownIndicator = (props: any) => {
        return (
            <components.DropdownIndicator {...props}>
                <img src={search}/>
            </components.DropdownIndicator>
        );
    };

    return (
        <div className={isModalOpened ? styles.modal : styles.modal + ' ' + styles.modal_hidden}>
            <button className={styles.close_button} onClick={() => setIsModalOpened(!isModalOpened)}>
                <img src={close} alt={'close'}/>
            </button>
            <h1 className={styles.title}>Выберите город</h1>
            <Select
                components={{DropdownIndicator}}
                placeholder={'Введите название города'}
                options={options}
                styles={customStyle}
                onChange={(e: {value: string, label: string}) => setTown(e.value)}
            />
            <p className={styles.example}>
                Например:
                <span className={styles.highlighted}>Москва</span>
                <span className={styles.highlighted}>Саратов</span>
            </p>
        </div>
    );
}

export default TownPickerContent;
