import React from "react";
import { WhitStorageListener } from "./WhitStorageListener";

function ChangeAlert({
    show,
    toggleShow
}) {
    if(show){
        return (
            <div>
                <p>Hubo cambios !!</p>
                <button
                    onClick={() => toggleShow()}
                >
                    Volver a Cargar la informacion
                </button>
            </div>
        );
    } else {
        return null
    }
}

const ChangeAlertWhitStorageListener = WhitStorageListener(ChangeAlert)

export { ChangeAlertWhitStorageListener }