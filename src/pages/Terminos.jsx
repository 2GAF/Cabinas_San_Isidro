import React from 'react';
import PropTypes from 'prop-types';

export function Terminos({ isOpen, onClose }) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-10 flex items-center justify-center bg-black bg-opacity-50 ove">
            <div className="bg-white py-8 sm:px-8 px-14 rounded-[45px] h-[93%] w-[90%] sm:w-[65%] justify-center items-center flex flex-col">
                <h1 className="text-[clamp(30px,_3.9vw,_76px)] font-ovo mb-4">Políticas y condiciones de uso</h1>
                <hr className='w-80 sm:w-[850px] border-[3px] border-blue-1 rounded-3xl mb-8' />
                <div className='overflow-y-auto mb-4'>

                    <div className="mb-4">
                        <h2 className='text-blue-1 text-[clamp(26px,_2.8vw,_3.438rem)] font-outfit font-medium mb-2 sm:mb-0'>Derecho de Admisión</h2>
                        <li className='font-light text-[clamp(16px,_1.7vw,_22.66px)] font-outfit text-gray-1 list-disc'>El hotel se reserva el derecho de admisión y permanencia de cualquier huésped o visitante en sus instalaciones. Nos reservamos el derecho de negar la entrada o de pedir que se retire de las instalaciones a cualquier persona cuyo comportamiento sea considerado inapropiado o que no cumpla con nuestras políticas y normas.</li>
                    </div>
                    <div className="mb-4">
                        <h2 className='text-blue-1 text-[clamp(26px,_2.8vw,_3.438rem)] font-outfit font-medium mb-2 sm:mb-0'>Proceso de Reservación</h2>
                        <li className='font-light text-[clamp(16px,_1.7vw,_22.66px)] font-outfit text-gray-1 list-disc mb-3'>Confirmación de la Reservación: Para confirmar una reservación, se requiere un pago inicial del 50% del monto total de la estancia. Este pago debe ser realizado dentro de las siguientes 24 horas después de haber solicitado la reserva.</li>
                        <li className='font-light text-[clamp(16px,_1.7vw,_22.66px)] font-outfit text-gray-1 list-disc'>Cancelación Automática: Si el pago del 50% no se recibe en el plazo de 24 horas, la reservación será automáticamente cancelada sin previo aviso.</li>
                    </div>
                    <div className="mb-4">
                        <h2 className='text-blue-1 text-[clamp(26px,_2.8vw,_3.438rem)] font-outfit font-medium mb-2 sm:mb-0'>Políticas de Pago</h2>
                        <li className='font-light text-[clamp(16px,_1.7vw,_22.66px)] font-outfit text-gray-1 list-disc mb-3'>Pago Inicial: El pago inicial del 50% del monto total de la reserva es obligatorio para confirmar la reservación.</li>
                        <li className='font-light text-[clamp(16px,_1.7vw,_22.66px)] font-outfit text-gray-1 list-disc'>Pago Completo: El saldo restante debe ser abonado al momento del check-in en el hotel. Aceptamos pagos en efectivo, tarjeta de crédito o débito, y transferencias bancarias.</li>
                    </div>
                    <div className="mb-4">
                        <h2 className='text-blue-1 text-[clamp(26px,_2.8vw,_3.438rem)] font-outfit font-medium mb-2 sm:mb-0'>Políticas de Cancelación y Reembolso</h2>
                        <li className='font-light text-[clamp(16px,_1.7vw,_22.66px)] font-outfit text-gray-1 list-disc mb-3'>No se Realizan Devoluciones: Una vez realizado el pago inicial del 50%, no se realizarán devoluciones bajo ninguna circunstancia.</li>
                        <li className='font-light text-[clamp(16px,_1.7vw,_22.66px)] font-outfit text-gray-1 list-disc mb-3'>Congelación del Saldo: El saldo pagado puede ser congelado y utilizado para una futura reservación, siempre y cuando la nueva reserva se realice dentro de un periodo máximo de seis meses a partir de la fecha de cancelación original.</li>
                        <li className='font-light text-[clamp(16px,_1.7vw,_22.66px)] font-outfit text-gray-1 list-disc'>Pérdida del Saldo: Si el saldo congelado no se utiliza dentro del periodo de seis meses, el monto se perderá y no se podrá reclamar ni utilizar en futuras reservas.</li>
                    </div>
                    <div className="mb-4">
                        <h2 className='text-blue-1 text-[clamp(26px,_2.8vw,_3.438rem)] font-outfit font-medium mb-2 sm:mb-0'>Responsabilidades del Cliente</h2>
                        <li className='font-light text-[clamp(16px,_1.7vw,_22.66px)] font-outfit text-gray-1 list-disc mb-3'>Información Correcta: El cliente es responsable de proporcionar información precisa y correcta al momento de realizar la reservación. Cualquier discrepancia o error en la información proporcionada puede resultar en la cancelación de la reservación.</li>
                        <li className='font-light text-[clamp(16px,_1.7vw,_22.66px)] font-outfit text-gray-1 list-disc '>Cumplimiento de Normas: El cliente debe cumplir con todas las normas y políticas del hotel durante su estancia. El incumplimiento puede resultar en la expulsión del establecimiento sin derecho a reembolso.</li>
                    </div>
                    <div className="mb-4">
                        <h2 className='text-blue-1 text-[clamp(26px,_2.8vw,_3.438rem)] font-outfit font-medium mb-2 sm:mb-0'>Modificaciones y Cambios en la Reservación</h2>
                        <li className='font-light text-[clamp(16px,_1.7vw,_22.66px)] font-outfit text-gray-1 list-disc mb-3'>Cambios en la Fecha de Reservación: Los cambios en la fecha de reservación están sujetos a disponibilidad y deben ser solicitados con al menos 72 horas de anticipación a la fecha de check-in original.</li>
                        <li className='font-light text-[clamp(16px,_1.7vw,_22.66px)] font-outfit text-gray-1 list-disc'>Tarifas de Modificación: No se aplicará ninguna tarifa adicional por la modificación de fechas, siempre y cuando se realice dentro del plazo estipulado y exista disponibilidad.</li>
                    </div>
                    <div className="mb-4">
                        <h2 className='text-blue-1 text-[clamp(26px,_2.8vw,_3.438rem)] font-outfit font-medium mb-2 sm:mb-0'>Política de No Presentación (No-Show)</h2>
                        <li className='font-light text-[clamp(16px,_1.7vw,_22.66px)] font-outfit text-gray-1 list-disc mb-3'>Cambios en la Fecha de Reservación: Los cambios en la fecha de reservación están sujetos a disponibilidad y deben ser solicitados con al menos 72 horas de anticipación a la fecha de check-in original.</li>
                        <li className='font-light text-[clamp(16px,_1.7vw,_22.66px)] font-outfit text-gray-1 list-disc'>Tarifas de Modificación: No se aplicará ninguna tarifa adicional por la modificación de fechas, siempre y cuando se realice dentro del plazo estipulado y exista disponibilidad.</li>
                    </div>
                    <div className="mb-4">
                        <h2 className='text-blue-1 text-[clamp(26px,_2.8vw,_3.438rem)] font-outfit font-medium mb-2 sm:mb-0'>Modificaciones y Cambios en la Reservación</h2>
                        <li className='font-light text-[clamp(16px,_1.7vw,_22.66px)] font-outfit text-gray-1 list-disc mb-3'>No Presentación: En caso de que el cliente no se presente en el hotel en la fecha de su reservación y no haya realizado una modificación o cancelación previa, la reservación será cancelada automáticamente y se perderá el monto pagado como anticipo.</li>
                        <li className='font-light text-[clamp(16px,_1.7vw,_22.66px)] font-outfit text-gray-1 list-disc mb-3'>Cambios en los Términos y Condiciones</li>
                        <li className='font-light text-[clamp(16px,_1.7vw,_22.66px)] font-outfit text-gray-1 list-disc mb-3'>Revisión de Políticas: El hotel se reserva el derecho de modificar estos términos y condiciones en cualquier momento sin previo aviso. Es responsabilidad del cliente revisar los términos y condiciones actuales antes de realizar una reserva.</li>
                        <li className='font-light text-[clamp(16px,_1.7vw,_22.66px)] font-outfit text-gray-1 list-disc mb-3'>Contacto</li>
                        <li className='font-light text-[clamp(16px,_1.7vw,_22.66px)] font-outfit text-gray-1 list-disc'>Información de Contacto: Para cualquier duda o aclaración sobre estos términos y condiciones, puede contactarnos a través del correo electrónico csisidro@gmail.com o al número de teléfono 2663 0031 o 26632170</li>
                    </div>
                </div>

                <button onClick={onClose} className="bg-blue-2 text-white px-32 sm:px-4 py-2 rounded-lg">Cerrar</button>
            </div>
        </div>
    );
}

Terminos.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
};