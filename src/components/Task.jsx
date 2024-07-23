import { Check } from './Check';
import style from './Check.module.css';
import styles from './Task.module.css';
import { Trash } from 'phosphor-react';

import { useState } from 'react'


export function Task({ task, setNewTasksList, tasksList, openDeleteTaskModal

    // openDeleteTaskModal, isDeleteTaskModalOpen
    // isDeleteTaskModalOpen, setIsDeleteTaskModalOpen
}) {
    return (
        <li>
            <div>
                <button className={style.checkAppearence}></button>
            </div>

            <p>{task}</p>
            <button className={styles.trash} onClick={openDeleteTaskModal}>
                <Trash size={18} />
            </button>
        </li>
    )
}