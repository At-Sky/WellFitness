import React, {useEffect, useState} from 'react';
import styles from "./TownPicker.module.scss";

interface ITownPickerProps {
    town: string;
    setIsTownPickerOpened: (el: boolean) => void;
}

function TownPicker({town, setIsTownPickerOpened}: ITownPickerProps) {
    return (
        <button onClick={() => setIsTownPickerOpened(true)} className={styles.town}>{town || 'Москва'}</button>
    );
}

export default TownPicker;
