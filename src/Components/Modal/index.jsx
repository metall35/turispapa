import { useContext, useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { TurisContext } from '../../Context';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    maxWidth: 700,
    maxHeight: 500,
    bgcolor: 'background.paper',
    boxShadow: 24,
    borderRadius: 2,
};

export default function ComponentModal() {
    const { setOpenModal, dataModal, openModal } = useContext(TurisContext)
    const handleClose = () => {
        setOpenModal(false)
    }

    return (
        <div>
            <Modal
                keepMounted
                open={openModal}
                onClose={handleClose}
                aria-labelledby="keep-mounted-modal-title"
                aria-describedby="keep-mounted-modal-description"
            >
                <Box sx={style}>
                    <section className='flex flex-row justify-between items-center gap-2' >
                        <figure className='w-[59%]'>
                            <img src={dataModal.imagen} alt={dataModal.nombre} />
                        </figure>
                        <div className='flex flex-col gap-1 items-start justify-start w-1/2 h-full ml-4'>
                            <Typography gutterBottom variant="h5" component="div">
                                {dataModal.nombre}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                <span className='font-semibold '>Contacto: </span>{dataModal.contacto}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                <span className='font-semibold '>dirección: </span>{dataModal.direccion}
                            </Typography>
                            {dataModal.descripcion ? <Typography variant="body2" color="text.secondary">
                                <span className='font-semibold '>descripción: </span>{dataModal.descripcion}
                            </Typography> : <></>}
                        </div>
                    </section>
                </Box>
            </Modal>
        </div>
    );
}
