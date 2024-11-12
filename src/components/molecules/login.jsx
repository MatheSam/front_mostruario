import { React, useContext, useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import logo from './../../imagens/logo/logo.png'
import * as yup from "yup";
import { useNavigate } from 'react-router-dom';

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { IoPersonCircleOutline } from "react-icons/io5";
import { IoMdKey, IoMdUnlock } from "react-icons/io";
import { FiAlertCircle } from "react-icons/fi";
import api from '../../services/api';
import { AuthContext } from '../../providers/auth';
import { IoMdExit } from "react-icons/io";
import { toast_error } from '../../utils/functions';
import { toast } from 'react-toastify';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 320,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  borderRadius: '4px'
};

export default function Login() {
  const [open, setOpen] = useState(false);
  const [error, setError] = useState(false);
  const [msgError, setMsgError] = useState('');
  const { auth, setAuth } = useContext(AuthContext);

  const navigate = useNavigate();
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const login = () => {
    if (auth) {
      return navigate("/");
    } else {
      handleOpen();
    }
  }

  const deslogar = () => {
    localStorage.removeItem('@userToken');
  }

  const schema = yup.object({
    email: yup.string().required("Email obrigatório").email("Tipo de email inválido"),
    password: yup.string().required("Senha obrigatória"),
  }).required();

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    if (errors.email) {
      setError(true);
      setMsgError(errors.email.message)
    }

    if (errors.password) {
      setError(true);
      setMsgError(errors.password.message)
    }
  }, [errors])

  const formData = (data) => {
    api
      .post("/login", data)
      .then((resp) => {
        localStorage.setItem("@userToken", resp.data.token);
        setAuth(true);
        navigate("/dashboard");
      })
      .catch((error) => {
        setMsgError(error.response.data.message)
      });
  };

  const logado = localStorage.getItem("@userToken");

  return (
    <div>
      <div onClick={logado ? deslogar : login} className='flex aligm-center items-center gap-[5px] hover:cursor-pointer hover:text-[#d93030] transition-all duration-300 ease-in-out'>
        {
          logado
            ?
            <>
              <IoMdExit />
              <p>Deslogar</p> </>
            :
            <>
              <IoPersonCircleOutline className={`text-3xl`} />
              <p>Login</p>
            </>
        }
      </div>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className='flex justify-center'>
            <img className='h-[150px]' src={logo} />
          </div>
          <form onSubmit={handleSubmit(formData)} className='flex flex-col gap-[20px] mt-[40px] rounded'>
            <div className='flex border'>
              <div className='bg-[#dfe5ed] px-[5px] py-[7px]'>
                <IoPersonCircleOutline className='text-2xl text-[#454b54]' />
              </div>
              <input name='email' className='px-[5px] outline-none' type='text' placeholder='E-mail' {...register('email')} />
            </div>
            <div className='flex border'>
              <div className='bg-[#dfe5ed] px-[5px] py-[7px]'>
                <IoMdKey className='text-2xl text-[#454b54]' />
              </div>
              <input name='password' className=' px-[5px] outline-none' type='password' placeholder='Senha' {...register('password')} />
            </div>
            <button type='submit' className='flex aligm-center items-center justify-center gap-[20px] bg-qua opacity-[0.9] hover:opacity-[1] transition-all duration-300 ease-in-out py-[10px] hover:font-bold rounded'><IoMdUnlock className='text-xl' />LOGAR</button>
            <div className={`text-[red] flex items-center gap-[5px] ${error ? 'block' : 'hidden'}`}>
              <FiAlertCircle />
              <span>{msgError}</span>
            </div>
          </form>
        </Box>
      </Modal>
    </div>
  );
}