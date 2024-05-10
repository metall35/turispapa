import { useContext, useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { BsBoxArrowUpRight } from "react-icons/bs";
import { TurisContext } from '../../Context';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    minWidth: 600,
    minHeight: 400,
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
                <Box sx={style} className="flex flex-col items-center justify-center">
                    <figure className='mb-4 px-4'>
                        <img src={dataModal.imagen} alt={dataModal.nombre} className='h-52 min-h-32 rounded-md' />
                    </figure>
                    <Typography gutterBottom variant="h5" component="div">
                        {dataModal.nombre}
                    </Typography>
                    <section className='flex flex-row justify-around items-center gap-5 first-letter'>
                        <div className='flex flex-col gap-1 items-start justify-start w-1/2 h-full ml-4'>
                            <Typography variant="body2" color="text.secondary">
                                <span className='font-semibold '>{dataModal.contacto ? "Contacto" : dataModal.distancia ? "Distancia" : ""}: </span>{dataModal.contacto == "0" ? "No hay contacto" : dataModal.contacto || dataModal.distancia}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                <span className='font-semibold '>{dataModal.direccion ? "Dirección" : dataModal.duracion ? "Duración" : ""}: </span>{dataModal.direccion || dataModal.duracion}
                            </Typography>
                        </div>
                        {dataModal.instagram ?
                            <a href={`https://www.instagram.com/${dataModal.instagram}`} target="_blank" rel="noopener noreferrer" className='flex text-base hover:text-[#14A44D] mr-6 gap-2'>
                                Instagram <BsBoxArrowUpRight className='text-base ' />
                            </a>
                            : <></>}
                    </section>
                </Box>
            </Modal>
        </div>
    );
}
