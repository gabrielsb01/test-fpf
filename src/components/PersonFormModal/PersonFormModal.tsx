import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { usePersonStore } from '../../store';

interface IFormInput {
  name: string;
  age: number;
  cpf: string;
  email: string;
  phone: string;
  address: string;
  birthDate: string;
  status: string;
  gender: string;
  foto: File[];
}

interface ModalProps {
  closeModal: () => void;
  isMobile: boolean;
}

const PersonFormModal: React.FC<ModalProps> = ({ closeModal, isMobile }) => {
  const { register, handleSubmit } = useForm<IFormInput>();
  const addPerson = usePersonStore((state) => state.addPerson);

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    const formData = {
      ...data,
      foto: data.foto[0]
    };
    addPerson(formData);
    closeModal();
  };

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center">
      <div className={`bg-white p-8 rounded shadow-md w-full max-w-2xl ${isMobile && 'overflow-auto w-4/5 h-5/6'}`}>
        <h2 className="text-2xl mb-4">Cadastrar Atleta</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label>Nome</label>
              <input {...register('name')} className="border p-2 w-full" />
            </div>
            <div>
              <label>Idade</label>
              <input type="number" {...register('age')} className="border p-2 w-full" />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label>CPF</label>
              <input {...register('cpf')} className="border p-2 w-full" />
            </div>
            <div>
              <label>Email</label>
              <input type="email" {...register('email')} className="border p-2 w-full" />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label>Telefone</label>
              <input {...register('phone')} className="border p-2 w-full" />
            </div>
            <div>
              <label>Data de Nascimento</label>
              <input type="date" {...register('birthDate')} className="border p-2 w-full" />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label>Status</label>
              <select {...register('status')} className="border p-2 w-full">
                <option value="Ativo">Ativo</option>
                <option value="Inativo">Inativo</option>
              </select>
            </div>
            <div>
              <label>Gênero</label>
              <input {...register('gender')} className="border p-2 w-full" />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label>Endereço</label>
              <input {...register('address')} className="border p-2 w-full" />
            </div>
            <div>
              <label>Foto</label>
              <input type="file" {...register('foto')} className="border p-1 w-full" />
            </div>
          </div>
          <div className="flex justify-end space-x-4 mt-4">
            <button type="button" onClick={closeModal} className="bg-red-500 text-white p-2 rounded">Cancelar</button>
            <button type="submit" className="bg-blue-500 text-white p-2 rounded">Salvar</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PersonFormModal;
